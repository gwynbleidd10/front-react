import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import { StatusPage } from './pages/StatusPage'

export const useRoutes = isAuth => {
    if (isAuth) {
        return (
            <Switch>
                <Route path="/status" exact>
                    <StatusPage />
                </Route>
                <Redirect to="/" />
            </Switch>
        )
    }

    return (
        <Switch>
            <Route path="/" exact>

            </Route>
            <Redirect to="/" />
        </Switch>
    )
}