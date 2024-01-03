import { useEffect, useState } from "react";

const API_URL = "https://jsonplaceholder.typicode.com/posts";

export function useApi(page = 1) {
  const [results, setResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [error, setError] = useState({});
  const [hasNextPage, setHasNextPage] = useState(false);

  useEffect(
    function () {
      async function loadData() {
        try {
          setIsLoading(true);
          setError({});
          setIsError(false);

          const response = await fetch(`${API_URL}?_page=${page}`);
          if (!response.ok) throw new Error("Error!");
          const data = await response.json();
          console.log(data);
          setResults((prev) => [...prev, ...data]);
          setHasNextPage(Boolean(data.length));
        } catch (err) {
          setIsError(true);
          setError({ message: err.message });
        } finally {
          setIsLoading(false);
        }
      }

      loadData();
    },
    [page]
  );

  return { isLoading, results, isError, error, hasNextPage };
}
