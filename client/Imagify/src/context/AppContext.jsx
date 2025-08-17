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
    // const backendUrl = import.meta.env.VITE_BACKEND_URL
    const navigate = useNavigate()

    const loadCredits = async () => {
        try {
            const { data } = await axios.get( '/api/user/credits', {
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
            const { data } = await axios.post('/api/image/generate-image', { prompt }, {
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
        backendUrl,
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
