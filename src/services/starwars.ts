import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import type { SWCharacter, SWCharacterResponse } from './types'

export const starWarsApi = createApi({
  reducerPath: 'starWarsApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://swapi.dev/api/' }),
  tagTypes: ['SWCharacters', 'SWSearchCharacterResults', 'SWCharacter'],
  endpoints: (builder) => ({
    getSWCharacters: builder.query<SWCharacterResponse, number | void>({
      query: (page = 1) => `people/?page=${page}`,
      providesTags: [{ type: 'SWCharacters', id: 'LIST' }],
    }),
    searchSWCharacters: builder.query<SWCharacterResponse, string | void>({
      query: (searchTerm) => `people/?search=${searchTerm}`,
      providesTags: [{ type: 'SWSearchCharacterResults', id: 'LIST' }],
    }),
    getSWChracter: builder.query<SWCharacter, string | undefined>({
      query: (id) => `people/${id}`,
      providesTags: [{ type: 'SWCharacter', id: 'ID' }],
    }),
  }),
})

export const {
  useGetSWCharactersQuery,
  useLazySearchSWCharactersQuery,
  useGetSWChracterQuery,
  useLazyGetSWChracterQuery,
} = starWarsApi
