import { useState , useRef, useCallback, useEffect} from "react"
import './Chat.css'
import Message from "./Message"
import loadChats from "./loadChats"

const Chat = (chat) => {
    const [pageNumber, setPageNumber] = useState(0)

  const {
    chats,
    loading,
    error
  } = loadChats(pageNumber)
  const observer = useRef()
  const lastElementref = useRef()
  useEffect(() => 
    {scrollToBottom();}, [pageNumber]
  )
  const scrollToBottom = () => {
    if (lastElementref.current) {
      console.log('Hello, This is Nevish302')
      // Scroll to the bottom of the chat list
      lastElementref.current.scrollTop = 5000;
    }
  }; 
  const firstElementRef = useCallback(node => {
    if (loading) return
    if (observer.current) observer.current.disconnect()
    observer.current = new IntersectionObserver(entries => {
      if (entries[entries.length - 1].isIntersecting) {
        setPageNumber(prevPageNumber => prevPageNumber + 1)
      }
    })
    if (node) observer.current.observe(node)
  }, [loading])

    //console.log(chat, chats, "chatChats")
    return (
        <div className="Chat" ref={lastElementref}>
            {chats.map((data, index) => {
                //console.log(data)
                if (index == 0) {
                    //console.log("first Element")
                    return  ( 
                        <div ref={firstElementRef} className="Message">
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