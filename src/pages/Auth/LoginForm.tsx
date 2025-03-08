import { useNavigate } from "react-router-dom"

export function Login(){
    const navigate = useNavigate();

    const handleLogin = () =>{
        navigate('/dashboard')
    }
    return(
        <>L
        Login
        <button onClick={handleLogin}>SignIn</button>
        </>
    )
}