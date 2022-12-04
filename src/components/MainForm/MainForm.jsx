import React, { useState } from "react"
import Park from "../Park/Park"
import "./MainForm.css"
import Axios from "axios"

const MainForm = () => {
  const [mainInputValue, setMainInputValue] = useState("")
  const [stateCode, setStateCode] = useState([])

  const handleMainInputChange = (e) => {
    const newValue = e.target.value
    setMainInputValue(newValue)
  }

  const getPark = (e) => {
    Axios.get(
      `https://developer.nps.gov/api/v1/parks?api_key=FcBVNSTUhHmVDsktfx7MkAgtGyTTnEqpCxMfaU8M&stateCode=${mainInputValue}`
    ).then((response) => {
      console.log(response.data)
      setStateCode((prevValue) => {
        return [...prevValue, response.data]
      })
    })
    e.preventDefault()
  }

  return (
    <>
      <form className="main-form">
        <label className="main-label mr-5 text-white">Next adventure:</label>

        <input
          onChange={handleMainInputChange}
          className="main-input rounded-full text-center"
          placeholder="Enter State Letters"
          value={mainInputValue}
        />

        <button className="main-button rounded-full ml-5" onClick={getPark}>
          Search
        </button>
      </form>

      <ul>
        {Object.values(stateCode).map((x) => {
          return x.data.map((park) => {
            return <li>
              <Park
              key={park.id}
              name={park.fullName}
              
               />
            </li>
          })
        })}

        
      </ul>
    </>
  )
}
export default MainForm
