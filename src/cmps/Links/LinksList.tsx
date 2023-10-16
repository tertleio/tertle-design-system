import { clsx } from '@/utils/classes';

import { Link, Button, IconMember } from '../Core';
// import { Tooltip } from '../Tooltip';

type LinkStruct = {
  url: string;
  icon?: IconMember;
  text?: string;
};

type LinksListProps = {
  show?: boolean;
  links: LinkStruct[];
  variant?: 'hyperlink' | 'button';
  className?: string;
};
const LinksList = ({
  links,
  show = true,
  variant = 'button',
  className,
}: LinksListProps) => {
  return show && links ? (
    <ul className={clsx('flex gap-2' || className)}>
      {links.map((link: LinkStruct, idx) => (
        <li key={`${idx}-${link}`}>
          <Link to={link.url} target="_blank">
            {variant === 'button' ? (
              <Button
                icon={link.icon ?? 'link'}
                size="md"
                variant="secondary"
                color="gray"
              />
            ) : (
              link.text && <span>{link.text}</span>
            )}
          </Link>
        </li>
      ))}
    </ul>
  ) : null;
};

export { LinksList, type LinkStruct };
