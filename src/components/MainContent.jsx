import {useEffect, useState} from "react";
import {MadLibsResult} from "./MadLibsResult";
import {MadLibsForm} from "./MadLibsForm";
import {Login} from "./Login";

export function MainContent() {
    const [answers, setAnswers] = useState({answersEntered: false})
    const [loggedIn, setLoggedIn] = useState(false)

    useEffect(() => {
        if (sessionStorage.getItem('alreadyLoggedIn') === 'true') {
            setLoggedIn(true)
        }
    },[])

    function showMadLibsPage() {
        return (answers.answersEntered) ?
            <MadLibsResult answers={answers}/> :
            <MadLibsForm answers={answers} setAnswers={setAnswers}/>
    }

    return(
        <div>
            {loggedIn ? showMadLibsPage(): <Login setLoggedIn={setLoggedIn} /> }
        </div>
    )
}