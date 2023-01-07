import { useEffect, useState } from 'react';

export default function useJsonFetch(url, opts) {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    fetch(`${process.env.REACT_APP_USE_FETCH_URL}/${url}`, opts)
      .then(res => res.json())
      .then(res => {
        setData(res)
        setError(null)
      })
      .catch((e) => {
        setError(e)
      })
      .finally(() => {
        setLoading(false)
      })
  }, []);

  return [{data, loading, error}];
}
