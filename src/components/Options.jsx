import { useState } from "react"
import './Options.css'
import Members from '../assets/images/members.png'
import Phone from '../assets/images/phone.png'
import Report from '../assets/images/report.png'

const Options = () => {
    const Style ={
        borderTop:"none",
    }
    return (
        <div className="Options">
            <div className="Option" style={Style}>
                <img className="OptionImage" src={Members} />
                <div className="OptionContent" >
                    Members
                </div>
            </div>
            <div className="Option">
                <img className="OptionImage" src={Phone} />
                <div className="OptionContent" >
                    Phone
                </div>
            </div>
            <div className="Option">
                <img className="OptionImage" src={Report} />
                <div className="OptionContent" >
                    Report
                </div>
            </div>
        </div>
    )
}

export default Options