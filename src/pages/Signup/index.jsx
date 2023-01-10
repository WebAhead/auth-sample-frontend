import React, { useState } from "react"
import axios from "axios"
import { useHistory } from "react-router-dom"
import "./style.css"

const Signup = () => {
  const [userData, setUserData] = useState({
    email: "",
    username: "",
    password: "",
    confirmPassword: "",
  })
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)
  const history = useHistory()

  const onChange =
    (stateKey) =>
      ({ target }) =>
        setUserData({ ...userData, [stateKey]: target.value })

  const onSubmit = async () => {
    setLoading(true)
    try {
      // 
      const res = await axios.post(process.env.REACT_APP_API_URL + "/signup", userData)
      setLoading(false)

      if (!res.data.success) {
        setError(res.data.message)
        return
      }

      localStorage.setItem("token", res.data.token)
      history.push("/")


    } catch (err) {
      setError(err.message)
    }
  }

  if (loading) {
    return (
      <div class="container">
        <h1>Loading...</h1>
      </div>
    )
  }

  return (
    <div class="container">
      <h1>Signup</h1>

      <label htmlFor="">
        <b>Username</b>
        <input
          type="text"
          onChange={onChange("username")}
          value={userData.username}
        />
      </label>

      <label htmlFor="">
        <b>Email</b>
        <input
          type="text"
          onChange={onChange("email")}
          value={userData.email}
        />
      </label>

      <label htmlFor="">
        <b>Password</b>
        <input
          type="password"
          onChange={onChange("password")}
          value={userData.password}
        />
      </label>

      <label htmlFor="">
        <b>Confirm Password</b>
        <input
          type="password"
          onChange={onChange("confirmPassword")}
          value={userData.confirmPassword}
        />
      </label>
      <input type="button" value="Submit" onClick={onSubmit} />
      {error && <span class="error">{error}</span>}
    </div>
  )
}

export default Signup
