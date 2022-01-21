import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';

const userApi = createApi({
    reducerPath: 'userApi',
    baseQuery: fetchBaseQuery({ baseUrl: `https://jsonplaceholder.typicode.com/todos/` }),
    endpoints: (builder) => ({
        login: builder.query({
            query: ({ email }) => {
                return {
                    url: '/1',
                    params: { user: email },
                  }; 
            },
            transformResponse: res => {
                return {
                    userExist: true
                }
            }
        }),
        verification: builder.query({ query: () => '/verification' }),
    })
});

export const { useLoginQuery, useVerificationQuery } = userApi

export default userApi;
