import { useEffect, useState } from 'react'
import axios from 'axios'

const useRequestData = (URLbase) => {
  const [data, setData] = useState()

  useEffect(() => {
    axios
      .get(URLbase)
      .then((response) => {
        setData(response.data)
      })
      .catch((error) => {
        console.log(error)
        alert('Ocorreu um erro, tente novamente')
      })
  }, [URLbase])

  return data
}

export default useRequestData
