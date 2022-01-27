import React, { useState, useEffect } from 'react'
import { getAuth, onAuthStateChanged } from '@firebase/auth'

export default function useAuthUser() {
    const [authUser, setAuthUser] = useState(JSON.parse(localStorage.getItem('authUser')))

    useEffect(() => {
        const auth = getAuth()

        onAuthStateChanged(auth, (user) => {
            if (user) {
                localStorage.setItem('authUser', JSON.stringify(user))
                setAuthUser(user)
            }
            else {
                localStorage.removeItem('authUser')
                setAuthUser('')
            }
        })
    }, [])

    return { authUser }
}