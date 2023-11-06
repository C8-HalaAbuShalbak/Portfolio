import React from 'react'

const Header = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 px-2 bg-black align-middle justify-center min-h-[80vh]">
            <p className="col-start-1 col-end-3 leading-loose text-white font-semibold md:text-2xl text-left m-auto w-[90%]">
              This is Hala who always seeks the best approach believing that:
              <span className="text-indigo-400 md:leading-loose">
                “Pleasure in the job puts perfection in the work.” — Aristotle{" "}
              </span>
            </p>
            <img
              src=".\Untitled design.jpg"
              className="md:col-start-3 md:col-end-5"
            ></img>
          </div>
  )
}

export default Header