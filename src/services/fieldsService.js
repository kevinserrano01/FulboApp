import { createApi } from "@reduxjs/toolkit/query/react";
import { fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const fieldsApi = createApi({
  reducerPath: "fieldsApi",
  baseQuery: fetchBaseQuery({ baseUrl: process.env.EXPO_PUBLIC_BASE_URL }),
  endpoints: (builder) => ({
    getFields: builder.query({
      query: () => `fields.json`,
    }),

    getField: builder.query({
      query: (fieldId) => `fields.json?orderBy="id"&equalTo=${fieldId}`,
      transformResponse: (response) =>
        response ? Object.values(response)[0] : null,
    }),
  }),
});

export const { useGetFieldsQuery, useGetFieldQuery } = fieldsApi;
