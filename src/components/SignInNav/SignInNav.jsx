import './SignInNav.css'

const SignIn=()=>{

    return (
        <ul className= "SignIn sm:hidden md:flex justify-between">
            <li className="SignIn-item text-white">Sign Up</li>
            <li className="SignIn-item text-white">Sign In</li>
        </ul>
    )
}

export default SignIn