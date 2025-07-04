import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
const genrateBaseURL = (): string => {
  let data = localStorage.getItem('editor-config');
  if (data) {
    let parsedData = JSON.parse(data)
    if (parsedData.machine&&parsedData.machine === 'local') {
      return 'http://localhost:4320'
    }
    else return 'https://codyssey-backend.onrender.com';
  } else {
    return '';
  }
}
export const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: genrateBaseURL(),
    credentials: "include",
  }),
  endpoints: (builder) => ({
    runCode: builder.mutation<
      {
        success: boolean,
        message: string,
        data: string,
        time: number,
        error: string
      }
      , any>({
        query: (runtime) => {
          return {
            url: "/compiler/run",
            method: "POST",
            body: runtime,
          };
        },
      })
  }),
});

export const {
  useRunCodeMutation
} = api;
