import React, { useContext, useState, useEffect } from 'react'
import { auth } from '../firebase'

interface ContextProps {
    signup: any,
    login: any,
    currentUser: any,
    setCurrentUser: any
}

const AuthContext = React.createContext<Partial<ContextProps>>({})


export const useAuth = () => {
    return useContext(AuthContext)
}

export const AuthProvider = ({ children }: any) => {
    const [currentUser, setCurrentUser] = useState<any>()
    const [loading, setLoading] = useState(true)

    const signup = (email: string, password: string) => {
        return auth.createUserWithEmailAndPassword(email, password)

    }
    const login = (email: string, password: string) => {
        return auth.signInWithEmailAndPassword(email, password)
    }

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(user => {
            setCurrentUser(user)
            setLoading(false)
        })

        return unsubscribe
    }, [])

    const value = {
        currentUser,
        signup,
        login
    }

    return (
        <AuthContext.Provider value={value}>
        {!loading && children}
        </AuthContext.Provider>
    )
}