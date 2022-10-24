function Login({ setLogged }) {
    
    function login() {
        setLogged(true)
    }

    return (
        <div>
            <h1> Login </h1>
            <input type="text" placeholder="Username" />
            <input type="password" placeholder="Password" />

            <button onClick={ login }>Login</button>
        </div>
    )
}

export default Login