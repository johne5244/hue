import React, { useState,useEffect } from 'react'
import Home1 from "../Full Package/Home.css"
import Image from "../Full Package/g3.jpg"
import Input from "../input/Input"

function Home() {
    const [isOpen  ,setIsOpen] = useState(false);
    const clickEffect = ()=>{
        setIsOpen(!isOpen);
    }
    return (
        <div className ="Home-container">
            <div className ="Home"> <button>Home</button></div>
            <div className ="MeetTeam"><button>MeetTeam</button></div>
            <div className ="Loging">
        
                <button onClick={clickEffect}>Signin</button> <Input isOpen={isOpen} setIsOpen={setIsOpen}/></div>
            <img className ="image"  src ={Image} height ="100px" width ="400px"/>
        </div>
    )
}

export default Home;