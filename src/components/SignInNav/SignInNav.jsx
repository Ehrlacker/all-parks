import './SignInNav.css'
import {atom, useAtom} from 'jotai'
import { userAtom } from '../../Pages/MainPage/MainPage';

const SignIn=()=>{

    const [userState, setUserState] = useAtom(userAtom);

    const handleChangeUser = () => {
        if (userState == '') {
            setUserState('user');
        } else {
            setUserState('');
        }
    }

    return (
        <ul className= "SignIn sm:hidden md:flex justify-between">
            
            <li className="SignIn-item text-white" >Sign Up</li>
            <li className="SignIn-item text-white" onClick={handleChangeUser}>{userState == '' ? 'Sign In' : 'Sign Out'}</li>
        </ul>
    )
}

export default SignIn