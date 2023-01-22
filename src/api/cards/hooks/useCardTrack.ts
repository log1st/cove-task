import { cardsApi } from '../cardsApi';

export const useCardTrack = () => {
  const [
    trackCard,
  ] = cardsApi.endpoints.trackCardClick.useMutation();

  return trackCard;
};
