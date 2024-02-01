import { useState, useEffect } from "react";

export function useFetch() {
  const [datas, setDatas] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchDatas = async () => {
      try {
        const response = await fetch("data.json");
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        setDatas(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchDatas();
  }, []);

  return { datas, isLoading, error };
}
