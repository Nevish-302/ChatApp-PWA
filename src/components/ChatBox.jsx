import { useState } from "react"
import './ChatBox.css'
import attach from '../assets/images/attach.png'
import send from '../assets/images/send.png'
import Attachments from "./Attachments"

const ChatBox = () => {
    const Attach =()=> {
        const jack = document.getElementsByClassName("Attachments")[0];
        jack.style.display = jack.style.display == "flex" ? "none" : "flex";
    }
    
    return (
        <div className="ChatBox">
            <input className="TypeInHere" placeholder= "Reply to @Rohit Yadav" type="text"/>
            <img className = "ChatBoxIcons" src ={attach} onClick={Attach} />
            <img className = "ChatBoxIcons" src ={send} />
            <Attachments />
        </div>
        
    )
}

export default ChatBox