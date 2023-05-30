import { useState } from "react"
import './TripDetails.css'
import back from '../assets/images/back.png'
import edit from '../assets/images/edit.png'
import options from '../assets/images/options.png'
import Options from "./options"
import Members from '../assets/images/Meme.png'

const TripDetails = ({data}) => {
    const optionHide =()=> {
        const jack = document.getElementsByClassName("Options")[0];
        jack.style.display = jack.style.display == "flex" ? "none" : "flex";
    }
    return (
        <div className="TripDetails">
            <div className="TripInfo">
            <img className="TDimage" src={back} />
            <div className="TripName">
                {data.name}
            </div>
            <img className="TDimage" src={edit} />
            </div>
            <div className="TripSD">
                <img src={Members} className="GroupImage"/>
                <div className="SourceDestination">
                <div className="SD">
                    <div className="FromTo">From</div>
                    <div className="Location">{data.from}</div>
                    </div>
                    <div className="SD">
                    <div className="FromTo">To</div>
                    <div className="Location">{data.to}</div>
                    </div>
                </div>
                <img className = "TDimage" src={options} onClick={optionHide} />
            </div>
            <Options />
        </div>
    )
}

export default TripDetails