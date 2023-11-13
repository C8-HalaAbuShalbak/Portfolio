import React, {useEffect,useRef } from "react";
import { FaRegWindowClose } from "react-icons/fa";
import "./index.css";
import Modle from "./Modle"

const PopUp = ({popProject,setPopProject}) => {
 useEffect(() => {
    display()
    

 }, [popProject])
 const display=()=>{
      modal.current.style.display="block"  
    }
    window.onclick = function(event) {
      if (event.target.id === "myModal") {
        modal.current.style.display = "none";
      }
    }
  const modal = useRef(null);
  return (
    <>
    {popProject&& <div id="myModal" className="modal" ref={modal}>
        <div className="modal-content">
          <span
            className="close"
            onClick={() => {
              modal.current.style.display = "none";
              {setPopProject}(null)
            }}
          >
            <FaRegWindowClose className="text-white w-11 hover:w-12 cursor:none hover:cursor-none hover:text-indigo-200 rounded-md"/>
          </span>
          <Modle project={popProject}/>
        </div>
      </div>}
     
    </>
  );
};

export default PopUp;
