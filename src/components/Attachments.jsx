import { useState } from "react"
import './Attachments.css'
import Photo from '../assets/images/photo.png'
import Video from '../assets/images/video.png'
import Document from '../assets/images/document.png'

const Attachments = () => {
    return (
        <div className="Attachments">
            <img className = "AttachImage" src={Photo} />
            <img className = "AttachImage" src={Video} />
            <img className = "AttachImage" src={Document} />
            <div className="littleArrow" >
                </div>
        </div>
    )
}

export default Attachments