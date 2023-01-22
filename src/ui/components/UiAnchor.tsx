import { memo, MouseEventHandler, PropsWithChildren } from 'react';
import { clsx } from 'clsx';

export type UiAnchorProps = PropsWithChildren<{
    href: string;
    rel?: string;
    target?: string;
    onClick?: MouseEventHandler<HTMLAnchorElement>;
    className?: string;
}>;

export const UiAnchor = memo<UiAnchorProps>(({
  href,
  rel,
  target,
  onClick,
  children,
  className,
}) => (
  <a
    className={clsx([
      'default-link',
      className,
    ])}
    href={href}
    target={target}
    rel={rel}
    onClick={onClick}
  >
    {children}
  </a>
));
