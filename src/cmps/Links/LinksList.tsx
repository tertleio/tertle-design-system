import { clsx } from '@/utils/classes';

import { Link, Button, IconMember } from '../Core';
// import { Tooltip } from '../Tooltip';

type LinkType = {
  url: URL;
  icon?: IconMember;
  label?: string;
};

type LinksListProps = {
  show?: boolean;
  links: LinkType[];
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
      {links.map((link: LinkType, idx) => {
        if (!link.url) return null;
        return (
          <li key={`${idx}-${link}`}>
            <Link to={link.url} target="_blank">
              {variant === 'button' ? (
                <Button
                  icon={link.icon ?? 'link'}
                  size="sm"
                  variant="secondary"
                  color="gray"
                />
              ) : (
                link.label && <span>{link.label}</span>
              )}
            </Link>
          </li>
        );
      })}
    </ul>
  ) : null;
};

export { LinksList };
export type { LinkType };
