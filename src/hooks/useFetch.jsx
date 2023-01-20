import { useEffect, useState } from "react";

const useFetch = (endpoint) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await fetch(
          `
https://api.openai.com/v1/${endpoint}`
        );

        const data = await response.json();
        setData(data);

        setError(null);
      } catch (error) {
        setError(`There was an error fetching your data: ${error}`);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [endpoint]);

  return { data, loading, error };
};

export default useFetch;
