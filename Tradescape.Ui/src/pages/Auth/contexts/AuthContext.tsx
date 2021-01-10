import React, { useContext, useState, useEffect, createContext } from 'react'
import { auth } from '../../../firebase/firebase'
interface ContextProps {
    signup: any,
    login: any,
    currentUser: any,
    setCurrentUser: any,
    logout: any,
    resetPassword: any,
    updateEmail: any,
    updatePassword: any
}

const AuthContext = createContext<Partial<ContextProps>>({})

//custom hook
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

    const logout = () => {
        auth.signOut()
    }

    const resetPassword = (email: string) => {
        return auth.sendPasswordResetEmail(email)
    }

    const updateEmail = (email: string) => {
        return currentUser.updateEmail(email)
    }

    const updatePassword = (password: string) => {
        return currentUser.updatePassword(password)
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
        login,
        logout,
        resetPassword,
        updateEmail,
        updatePassword
    }

    return (
        <AuthContext.Provider value={value}>
        {!loading && children}
        </AuthContext.Provider>
    )
}