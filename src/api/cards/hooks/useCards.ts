import { cardsApi } from '../cardsApi';

export const useCards = () => {
  const {
    data: cards = [],
    isLoading: isLoadingCards,
  } = cardsApi.endpoints.fetchCards.useQuery();

  return {
    cards,
    isLoadingCards,
  };
};
