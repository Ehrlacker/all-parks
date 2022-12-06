import "./Park.css"

const Park = (props) => {
  return (
    <li className="Park sm:flex flex-col md:flex-row items-center m-8 p-8 justify-center  ">
      <img className="park-image" src={props.image} alt="Nationa Park" />
      <div className="park-info-container">
        <h1 className="park-title mb-1 font-bold sm:mt-8">{props.name}</h1>

        <div className="park-address mt-8 mb-8">
          <p className="font-bold">Address:</p>
          <p className="address-title">{props.address}</p>
          <p>{props.city}</p>
          <p>{props.stateCode}</p>
          <p>{props.postalCode}</p>
        </div>
        <div>
          <p className="font-bold">Description:</p>
          <p className="park-description">{props.description}</p>
        </div>
      </div>
    </li>
  )
}
export default Park
