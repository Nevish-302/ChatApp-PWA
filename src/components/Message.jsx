import { useState } from "react"
import './Message.css'
const Message = ({data}) => {
    return (
        <div className="Message">
            <img className = "MessageSender" src={data.sender.image} />
            <div className="MessageContent">{data.message}</div>
        </div>
    )
}

export default Message