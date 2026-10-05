import React, { createContext, useEffect, useState } from 'react'
import { getLocalStorage } from '../utils/LocalStorage'

export const AuthContext = createContext()



const AuthProvider = ({ children }) => {
    const [userData, setUserData] = useState(null)
    // const [adminData, setAdminData] = useState(second)

    useEffect(() => {
        const { dataofadmin, dataofemployee } = getLocalStorage()
        setUserData({ dataofadmin, dataofemployee })
    }, [])


    return (
        <div>
            <AuthContext.Provider value={userData}>
                {children}
            </AuthContext.Provider>
        </div>
    )
}

export default AuthProvider