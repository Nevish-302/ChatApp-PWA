import { useEffect, useState } from 'react'
import axios from 'axios'

//Hi

export default function loadChats(pageNumber) {
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)
  const [chats, setChats] = useState([])

  
  useEffect(() => {
    setLoading(true)
    setError(false)
    let cancel
    axios({
      method: 'GET',
      url: `https://3.111.128.67/assignment/chat?page=${pageNumber}`,
      cancelToken: new axios.CancelToken(c => cancel = c)
    }).then(res => {
        console.log(res, 'res')
      setChats(prevBooks => {
        return [...new Set([...prevBooks, ...res.data.chats])]
      })
      setLoading(false)
    }).catch(e => {
      if (axios.isCancel(e)) return
      setError(true)
    })
    return () => cancel()
  }, [pageNumber])

  return { loading, error, chats }
}
