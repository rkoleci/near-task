import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';

const userApi = createApi({
    reducerPath: 'userApi',
    baseQuery: fetchBaseQuery({ baseUrl: `https://jsonplaceholder.typicode.com/todos/` }), 
    endpoints: (builder) => ({
        login: builder.query({ query: () => '/1' }),
        verification: builder.query({ query: () => '/verification' }),
    })
});

export const { useLoginQuery, useVerificationQuery } = userApi

export default userApi;
