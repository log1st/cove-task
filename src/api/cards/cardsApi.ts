import { createApi } from '@reduxjs/toolkit/query/react';
import { fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';

export enum CardsTags {
    cards = 'cards'
}

export type Card = {
    id: number;
    title: {
        en: string;
    };
    link_title: string;
    link: string;
    body: {
        en: string;
    }
};

export const cardsApi = createApi({
  reducerPath: 'cardsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://my-json-server.typicode.com/savayer/demo',
  }),
  tagTypes: [
    CardsTags.cards,
  ],
  endpoints: (build) => ({
    fetchCards: build.query<Array<Card>, void>({
      query: () => ({
        url: '/posts',
      }),
      providesTags: (result) => (result ? [
        {
          type: CardsTags.cards,
          id: 'LIST-PART',
        },
        ...result.map((card) => ({
          type: CardsTags.cards,
          id: card.id,
        })),
      ] : []),
    }),
    trackCardClick: build.mutation<null, Card>({
      queryFn: (card) => {
        console.log('Track card click', card.link);

        return {
          data: null,
        };
      },
    }),
  }),
});
