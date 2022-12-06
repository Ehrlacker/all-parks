import React, { useState } from "react"
import MainForm from '../../components/MainForm/MainForm'


import Park from "../../components/Park/Park"
import Axios from "axios"
import './MainPage.css'

const MainPage=()=>{
    const [stateCode, setStateCode] = useState([])
    const [mainInputValue, setMainInputValue] = useState("")
  

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
        setMainInputValue("")
        e.preventDefault()
        setStateCode([])
      }



    return( 
    <> 
    
    

<MainForm 
changeInput={handleMainInputChange}
onAdd={getPark}
value={mainInputValue}
/>



<ul className="parks-list flex flex-wrap justify-around">
        {Object.values(stateCode).map((x) => {
          return x.data.map((park) => {
            return (
              <Park
                key={park.id}
                image={park.images[0].url}
                name={park.fullName}
                address={park.addresses[0].line1}
                city={park.addresses[0].city}
                stateCode={park.addresses[0].stateCode}
                postalCode={park.addresses[0].postalCode}
                description={park.description}
              />
            )
          })
        })}
      </ul>

</>

)
}

export default MainPage


