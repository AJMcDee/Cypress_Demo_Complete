import {useState} from "react";
import {login} from "../login";

export function Login({setLoggedIn}) {

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [errorMessage, setErrorMessage] = useState("")

    async function sendLogin(event) {
        event.preventDefault()
        const loginResponse = await login({username,password})
        if (loginResponse === "ACCEPTED") {
                    setLoggedIn(true)
                } else {
                    setErrorMessage("The credentials you have entered are invalid.")
                }
    }

    function handleChange(event) {
        if (event.target.name === "username") {
            setUsername(event.target.value)
        } else if (event.target.name === "password") {
            setPassword(event.target.value)
        }
    }

    return (
        <div>
        <form>
            <input name='username' type='text' value={username} onChange={handleChange} />
            <input name='password' type='password' value={password} onChange={handleChange}/>
        </form>
            <button onClick={sendLogin} >Login</button>
            <p>{errorMessage}</p>
        </div>
    )
}