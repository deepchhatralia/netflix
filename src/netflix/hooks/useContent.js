import React, { useState, useEffect } from 'react'
import { firebaseApp, db } from "../myFirebase"
import { getDocs, query, collection } from '@firebase/firestore'

export default function useContent(target) {
    const [myCollection, setMyCollection] = useState()

    const q = query(collection(db, target))

    let temp = []

    useEffect(() => {
        getDocs(q)
            .then(val => {
                val.forEach((doc) => {
                    temp = [...temp, doc.data()]
                });
            })
            .then(() => {
                setMyCollection(temp)
            })
    }, [])

    return { [target]: myCollection }
}