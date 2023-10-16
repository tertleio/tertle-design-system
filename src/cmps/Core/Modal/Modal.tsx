import clsx from 'clsx';

import { Section, Container } from '../';

type ModalProps = {
  isOpen: boolean;
  title?: string;
  children: React.ReactNode;
  showClose?: boolean;
  className?: string;
};

const Modal = ({
  isOpen = false,
  title,
  children,
  showClose = false,
  className,
}: ModalProps) => {
  return isOpen ? (
    <div className="fixed inset-0 z-50 flex items-center justify-center w-full h-full bg-black bg-opacity-50">
      <Container className={clsx('min-w-[22.5em]', className)}>
        <Section
          title={title}
          className="m-3"
          aside={
            showClose && (
              <svg
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-8 h-8"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            )
          }
        >
          {children}
        </Section>
      </Container>
    </div>
  ) : (
    <></>
  );
};

export { Modal };
