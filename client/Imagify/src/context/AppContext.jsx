import axios from "axios";
import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export const AppContext = createContext()

const AppContextProvider = (props) => {

    const [user, setUser] = useState(null)
    const [showLogin, setShowLogin] = useState(false)
    const [token, setToken] = useState(localStorage.getItem('token') || null)
    const [credit, setCredit] = useState(false)
<<<<<<< HEAD
    const backendUrl = import.meta.env.VITE_BACKEND_URL
=======
    // const backendUrl = import.meta.env.VITE_BACKEND_URL
>>>>>>> 28facbe6402e03d978dbdc03af728115ae9780d1
    const navigate = useNavigate()

    const loadCredits = async () => {
        try {
<<<<<<< HEAD
            const { data } = await axios.get(backendUrl + '/api/user/credits', {
=======
            const { data } = await axios.get( '/api/user/credits', {
>>>>>>> 28facbe6402e03d978dbdc03af728115ae9780d1
                headers: {
                    Authorization: `Bearer ${token}`,
                }
            })

            if (data.success) {
                setCredit(data.creditBalance)
                setUser(data.user)
            }

        } catch (error) {
            console.log(error)
            toast.error(error.message)
        }
    }

    const generateImage = async (prompt) => {
        try {
<<<<<<< HEAD
            const { data } = await axios.post(backendUrl + '/api/image/generate-image', { prompt }, {
=======
            const { data } = await axios.post('/api/image/generate-image', { prompt }, {
>>>>>>> 28facbe6402e03d978dbdc03af728115ae9780d1
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })

            if (data.success) {
                loadCredits();
                return data.image
            }
            else {
                toast.error(data.message)
                loadCredits()
                if (data.creditBalance <= 0) {
                    navigate('/buy')
                }
            }

        } catch (error) {
            toast.error(error.message)
            console.log(error.message)
        }
    }

    const logOut = () => {
        localStorage.removeItem('token')
        setToken('')
        setUser(null)
    }

    useEffect(() => {
        if (token) loadCredits()
    }, [token])


    const value = {
        user,
        setUser,
        showLogin,
        setShowLogin,
<<<<<<< HEAD
        backendUrl,
=======
>>>>>>> 28facbe6402e03d978dbdc03af728115ae9780d1
        token,
        setToken,
        credit,
        setCredit,
        loadCredits,
        logOut,
        generateImage
    }

    return (
        <AppContext.Provider value={value}>
            {props.children}
        </AppContext.Provider>
    )
}

export default AppContextProvider
