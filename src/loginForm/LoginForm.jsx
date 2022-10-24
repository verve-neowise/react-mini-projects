import { useState } from "react";
import Login from "./Login";
import Success from "./Success";

function LoginForm() {

  const [ isLogged, setLogged ] = useState(false)

  if (isLogged == false) {
    return (
      <Login setLogged={setLogged} />
    )
  }
  else {
    return (
      <Success/>
    )
  }
}

export default LoginForm;
