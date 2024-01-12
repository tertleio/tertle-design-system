import clsx from 'clsx';

import { SectionContainer, SectionHeader, Container, Button } from '../';

type ModalProps = {
  show: boolean;
  title?: string;
  aside?: React.ReactNode;
  children: React.ReactNode;
  onClose?: () => void;
  className?: string;
};

const Modal = ({
  show = false,
  title,
  children,
  onClose,
  className,
}: ModalProps) => {
  return show ? (
    <div className="fixed inset-0 z-50 flex items-center justify-center w-full overflow-y-auto bg-black bg-opacity-70">
      <Container>
        <SectionContainer className={clsx(className)}>
          <SectionHeader
            heading={<h1>{title}</h1>}
            aside={
              onClose && (
                <Button
                  variant="secondary"
                  size="lg"
                  icon="cross"
                  color="orange"
                  className="p-2"
                  onClick={onClose}
                />
              )
            }
          />
          {children}
        </SectionContainer>
      </Container>
    </div>
  ) : null;
};

export { Modal };
