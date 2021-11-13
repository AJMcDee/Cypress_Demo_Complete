export function login(loginRequest) {
    return fetch("http://localhost:8080/login", {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(loginRequest)
    })
        .then(response => response.json())
        .then(message => {
            if (message === "ACCEPTED") {
                sessionStorage.setItem('alreadyLoggedIn', 'true')
            }
            return message
        })
}