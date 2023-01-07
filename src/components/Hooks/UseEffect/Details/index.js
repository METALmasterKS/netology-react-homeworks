import React, { useEffect, useState } from "react";

const Details = ({info}) => {
  const [loading, setLoading] = useState(true)
  const [details, setDetails] = useState(info)
  const [store, setStore] = useState(new Map())

  const getInfo = (setDetails, id) => {
    if (store.has(id)) {
      setDetails(store.get(id))
    } else {
      setLoading(true)
      fetch(`${process.env.REACT_APP_USE_EFFECT_URL}/${id}.json`)
        .then(res => res.json())
        .then(info => {
          setDetails(info)

          setStore((prevStore) => {
            prevStore.set(info.id, info)
            setStore(prevStore)
          })
          setLoading(false)
        })
        .catch(() => {})
    }
  }

  useEffect(() => {
    if (info.id) {
      getInfo(setDetails, info.id)
    }
  }, [info])

  if (!loading) {
    return <div style={{float:"left", width:"300px"}}>
      <img alt={details.name} src={details.avatar}/>
      <h4>{details.name}</h4>
      <p>{details.details.city}</p>
      <p>{details.details.company}</p>
      <p>{details.details.position}</p>
    </div>
  }
  if (!info.id) {
    return <div>Выберите персону</div>
  }
  return <div>Загрузка...</div>
}

export default Details;
