import { memo, ReactNode } from 'react';
import { clsx } from 'clsx';

export enum UiCardVariant {
   default = 'default',
   red = 'red'
}

export type UiCardProps = {
    title: string;
    text: string;
    variant?: UiCardVariant;
    renderAnchor?(className: string): ReactNode;
};

export const UiCard = memo<UiCardProps>(({
  title,
  text,
  renderAnchor,
  variant = UiCardVariant.default,
}) => (
  <div className="card">
    <div className="card__title">
      {title}
    </div>
    <div className="card__text">
      {text}
    </div>
    {renderAnchor?.(clsx([
      'card__link',
      `card__link--${variant}`,
    ]))}
  </div>
));
