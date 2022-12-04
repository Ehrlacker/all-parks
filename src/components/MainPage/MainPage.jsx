import MainForm from '../MainForm/MainForm'
import MainTitle from '../MainTitle/MainTitle'
import './MainPage.css'

const MainPage=()=>{

    return( 
    <div className="MainPage flex flex-col justify-start items-center">
<MainTitle />
<MainForm />
</div>)
}

export default MainPage