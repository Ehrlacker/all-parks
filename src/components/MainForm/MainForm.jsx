// import React, { useState } from "react"
// import Park from "../Park/Park"
// import MainTitle from '../MainTitle/MainTitle'
import Header from '../Header/Header'
import "./MainForm.css"
// import Axios from "axios"

const MainForm = (props) => {
 
  return (
    <div className="main-form flex flex-col justify-center items-center mt-4">
    {/* <MainTitle /> */}
    <Header />
      <form className=" flex flex-col justify-center items-center">
        <label className="main-label text-white">
          Your Next Adventure Awaits
        </label>

        <div className="form-input-and-button-container flex flex-col items-center justify-center  md:flex-row mt-10">
          <input
            onChange={props.changeInput}
            className="main-input rounded-full text-center"
            placeholder="Enter State Letters"
            value={props.value}
          />

          <button className="main-button hidden rounded-full ml-5 md:block " onClick={props.onAdd}>
            Search
          </button>
        </div>
      </form>

      
      </div>
  )
}
export default MainForm
