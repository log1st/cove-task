import {
  memo, MouseEventHandler, useCallback,
} from 'react';
import { Card } from '../api/cards/cardsApi';
import { UiCard, UiCardVariant } from '../ui/components/UiCard';
import { UiAnchor } from '../ui/components/UiAnchor';
import { useCardTrack } from '../api/cards/hooks/useCardTrack';

export type CardContainerProps = {
    card: Card;
};

export const CardContainer = memo<CardContainerProps>(({ card }) => {
  const trackCard = useCardTrack();

  const onClick = useCallback<MouseEventHandler<HTMLAnchorElement>>(() => {
    trackCard(card);
  }, [card]);

  return (
    <UiCard
      text={`${card.body?.en.substring(0, 50)}...`}
      title={card.title.en}
      variant={card.id === 1 ? UiCardVariant.red : undefined}
      renderAnchor={(className) => (
        <UiAnchor
          href={card.link}
          target={card.id === 1 ? '_blank' : undefined}
          className={className}
          onClick={onClick}
        >
          {card.link_title}
        </UiAnchor>
      )}
    />
  );
});
