import React from "react";
import useJsonFetch from "../../../../hooks/useJsonFetch";

const Data = ({url}) => {

  const [{data, loading, error}] = useJsonFetch(url)
  if (loading) {
    return "Загрузка..."
  }
  return <div>
    {error !==  null ? <p>{error}</p> : <pre>{JSON.stringify(data)}</pre>}
  </div>
}

export default Data;
