import { useState , useRef, useCallback} from "react"
import './chat.css'
import Message from "./Message"
import loadChats from "./LoadChats"

const Chat = (chat) => {
    const [pageNumber, setPageNumber] = useState(0)

  const {
    chats,
    loading,
    error
  } = loadChats(pageNumber)

  const observer = useRef()
  const lastBookElementRef = useCallback(node => {
    if (loading) return
    if (observer.current) observer.current.disconnect()
    observer.current = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting) {
        setPageNumber(prevPageNumber => prevPageNumber + 1)
      }
    })
    if (node) observer.current.observe(node)
  }, [loading])

    console.log(chat, chats, "chatChats")
    return (
        <div className="Chat">
            {chats.map((data, index) => {
                console.log(data)
                if (chats.length === index + 1) {
                    console.log("Last Element")
                    return  ( 
                        <div ref={lastBookElementRef} className="Message">
                        <img className = "MessageSender" src={data.sender.image} />
                        <div className="MessageContent">{data.message}</div>
                    </div>
                    )
                  } else {
        return( <Message data = {data} />)
    }
}
    )
}
        </div>
    )
}

export default Chat