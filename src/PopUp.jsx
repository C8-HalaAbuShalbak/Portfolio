import React, {useEffect,useRef } from "react";
import { FaRegWindowClose } from "react-icons/fa";
import "./index.css";
import Modle from "./Modle"

const PopUp = ({popProject,setPopProject}) => {
    console.log(popProject)
 useEffect(() => {
    display()
    

 }, [popProject])
 const display=()=>{
      modal.current.style.display="block"  
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
            <FaRegWindowClose className="text-white hover:text-indigo-200 rounded-md"/>
          </span>
          <Modle project={popProject}/>
        </div>
      </div>}
     
    </>
  );
};

export default PopUp;
