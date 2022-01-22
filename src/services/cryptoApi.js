import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

const cryptoApiHeaders = {
    'x-rapidapi-host': 'coinranking1.p.rapidapi.com',
    'x-rapidapi-key': '1dfb1aa910mshe1c3d6018dca963p1c89eejsna97ebcefe4ac'
}
const baseUrl = 'https://coinranking1.p.rapidapi.com';
const createRequest = (url) => ({url, headers: cryptoApiHeaders})
export const cryptoApi = createApi(
    {
        reducerPath: 'cryptoApi',
        baseQuery: fetchBaseQuery({baseUrl}),
        endpoints: (builder) => ({
            getCryptos: builder.query({
                query: () => createRequest('/coins')
            })
        })
    }
);
export const {
    useGetCryptosQuery,
} = cryptoApi;