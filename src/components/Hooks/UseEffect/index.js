import React, { useEffect, useState } from "react";

import List from "./List";
import Details from "./Details";

const UseEffect = () => {
  const [list, setList] = useState([])
  const [info, setInfo] = useState({})

  const getList = (setList) => {
    fetch(`${process.env.REACT_APP_USE_EFFECT_URL}/users.json`)
      .then(res => res.json())
      .then(list => {
        setList(list)
      })
      .catch(reason => {
      })
  }

  useEffect(() => {
    getList(setList)
  }, [])

  const handleClick = (id, evt) => {
    let info = list.find(i => i.id === id)
    setInfo(info)
  }
  return <>
    <List list={list} handleClick={handleClick}/>
    <Details info={info}/>
  </>
}

export default UseEffect;
