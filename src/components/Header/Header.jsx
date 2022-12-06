import MainTitle from '../MainTitle/MainTitle'
import MainNav from '../MainNav/MainNav'
import SignInNav from '../SignInNav/SignInNav'
import './Header.css'

const Header=()=>{

    return(
        <header className="Header justify-between items-center">
         <MainNav />
        <MainTitle />
        <SignInNav />
        </header>
    )
}

export default Header