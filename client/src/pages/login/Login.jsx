
import { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { axiosInstance } from '../../config'
import { AuthContext } from '../../context/AuthContext'
import './login.css'

const Login = () => {
    const [credentials, setCredentials] = useState({
        username:undefined,
        password:undefined,
    })

    const {loading,error,dispatch} = useContext(AuthContext)

    const handleChange = (e) => {
        setCredentials(prev=>({...prev, [e.target.id]: e.target.value}))
    }
    const navigate = useNavigate()

    const handleClick = async e => {
        e.preventDefault()
        dispatch({type:"LOGIN_START"})
        try{
            const res = await axiosInstance.post("/auth/login", credentials)
            dispatch({type:"LOGIN_SUCCESS", payload:res.data.details})
            navigate('/');
        }catch(err){
            dispatch({type:"LOGIN_FAILURE", payload: err.responce.data})
        }
    }
  return (
    <div className='login'>
        <div className="lContainer">
            <input type="text" className="lInput" placeholder='Username' id='username' onChange={handleChange} />
            <input type="password" className="lInput" placeholder='Password' id='password' onChange={handleChange} />
            <button disabled={loading} className="lButton" onClick={handleClick}>Login</button>
            {error && <span>{error.message}</span>}
        </div>
    </div>
  )
}

export default Login