import React from 'react'
import { Route, Redirect } from 'react-router-dom'

export function NormalRoute({ user, loggedInPath, children, ...restprops }) {
    return (
        <Route
            {...restprops}
            render={() => {
                if (!user) {
                    return children
                } else {
                    return (
                        <Redirect to={{ pathname: loggedInPath }} />
                    )
                }
            }}
        />
    )
}

export function ProtectedRoute({ user, children, ...restprops }) {
    return (
        <Route
            {...restprops}
            render={({ location }) => {
                if (user) {
                    return children
                }
                else {
                    return <Redirect to={{ pathname: 'signin', state: { from: location } }} />
                }
            }}
        />
    )
}