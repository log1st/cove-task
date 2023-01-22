import { FC } from 'react';
import { useCards } from '../api/cards/hooks/useCards';
import { CardContainer } from './CardContainer';

export const PageContainer: FC = () => {
  const {
    cards,
    isLoadingCards,
  } = useCards();

  if (isLoadingCards) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      {cards.map((card) => (
        <CardContainer
          key={card.id}
          card={card}
        />
      ))}
    </div>
  );
};
