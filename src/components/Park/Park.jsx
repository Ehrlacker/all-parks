import './Park.css'

const Park=(props)=>{

    return (<li className="Park flex items-top justify-center ">
   

    <img className="park-image" src={props.image} alt="Nationa Park"/>
    <div className="park-info-container">
        <h1 className="park-title">{props.name}</h1>
        <h2 className="park-address">{props.address}</h2>
        <p className="park-description">{props.description}</p>
        </div>
    </li>)
}
export default Park