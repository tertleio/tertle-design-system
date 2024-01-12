import { clsx } from '@/utils/classes';
import { useRef, useContext } from 'react';
import PromptContext from '@/stores/PromptContext';
import Resizer from 'react-image-file-resizer';

import AVATAR_DEF from '@/assets/dp-default.svg';
import { Button } from '@/cmps/Core';

// TODO: for some reason when uploading avatar in quick succession, AWS returns success but its the same image, works on second attempt

type CreateImageProps = {
  profileUrl: string;
  src?: URL;
  setSrc: (url: URL) => void;
  className?: string;
};

const CreateImage = ({
  profileUrl,
  src,
  setSrc,
  className,
}: CreateImageProps) => {
  const setPrompt = useContext(PromptContext);
  const hiddenUploadBtnRef = useRef(null);

  const resizeImg = (file, ext) =>
    new Promise((resolve) => {
      Resizer.imageFileResizer(
        file,
        500,
        500,
        `${ext}`,
        70,
        0,
        (uri) => {
          resolve(uri);
        },
        'blob'
      );
    });

  const handleUploadClick = () => hiddenUploadBtnRef.current.click();

  async function handleFileUpload(e) {
    const maxSize = 10000000; // 10MB
    const file = e.target.files[0];
    const parseExt = file.type.split('/')[1];
    const minnedImg = await resizeImg(file, parseExt);

    if (
      !['png', 'jpg', 'jpeg'].includes(parseExt) ||
      !['image/png', 'image/jpeg', 'image/gif'].includes(file.type)
    ) {
      setPrompt({
        msg: `Your picture must be a png, jpg, or jpeg`,
        color: 'red',
      });
    }

    if (!file) return;
    if (file.size > maxSize) {
      setPrompt({
        msg: `Your picture must be less than 10MB`,
        color: 'red',
        timeout: 3000,
      });
      return;
    }

    let opts = { method: 'POST' };
    opts.body = new FormData();
    opts.body.append('image', minnedImg);
    opts.body.append('file', 'profile pic');

    fetch(`/api/user/${profileUrl}/profile/file/avatar`, opts)
      .then((res) => res.json())
      .then((data) => {
        if (data.status !== 'success') {
          return setPrompt({ msg: data.msg, color: 'red' });
        }

        setSrc({ avatars: data.payload });
        setPrompt({ msg: 'Image saved', color: 'green' });
      })
      .catch((err) => {
        setPrompt({ msg: err.toString(), color: 'red' });
        console.log(err);
      });
  }

  return (
    <div
      onClick={handleUploadClick}
      onKeyDown={(e) => e.key === 'Enter' && handleUploadClick(e)}
      className="relative max-h-fit max-w-fit"
      role="button"
    >
      <input
        type="file"
        accept="image/*"
        tabIndex={0}
        ref={hiddenUploadBtnRef}
        onChange={handleFileUpload}
        style={{ display: 'none' }}
      ></input>
      <img
        className={clsx(
          'rounded-full border-2 border-gray-700 object-cover dark:border-gray-700',
          className
        )}
        tabIndex={0}
        alt=""
        title="Profile picture"
        src={src ? `${src}?cache_bust=${Date.now()}` : AVATAR_DEF}
      />
      <Button
        variant="primary"
        color="orange"
        icon="edit"
        className="absolute right-0 bottom-0"
      />
    </div>
  );
};

export { CreateImage };
