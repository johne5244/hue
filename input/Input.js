import React, {useState, useEffect} from 'react';
import Image from "../input/g1.jpg";
import axios from "../axios";
import Home from "../Full Package/Home";

  function Input({isOpen, setIsOpen}) {
    const [formData ,setFormData] = useState([]);
    const [formText,setFormText] = useState({});

    const handleForm = (e) =>{
      setFormText({...formText,[e.target.Name]: e.target.value});
    };

    const getData = async () => {
      const file = await axios.get("/",formData)
    }

  const postData = async () => {
    const newData = await axios.post("/",formText);
    
  };
  useEffect(()=> {},[]);

  return (
    <div>
        {isOpen ? (
          <div>
            <form onSubmit={postData}>
              <input
                className="b"
                placeholder="enter your Name"
                type="text"
                onChange={handleForm}
              />
              <input
                className="c"
                placeholder="Enter your Email"
                type="text"
                onChange={handleForm}
              />
              <div>
                {" "}
                <button
                className ="d"
                  onClick={() => {
                    setIsOpen(!isOpen);
                  }}
                >
                  Cancel
                </button>
                <button className ="d" onSubmit="text">Add</button>{" "}
              </div>
            </form>
          </div>
        ) : null}
      </div>
  );
}
<div> <button> WELCOME</button></div>
export default Input;