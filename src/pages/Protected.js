import React, {useContext} from "react";
import {Route, Redirect} from 'react-router-dom'
import {AuthContext} from "../Context";

export default ({children, ...props}) => {
    const [isLogged] = useContext(AuthContext)
    return <Route {...props} render={({location}) => {
        return isLogged ? children : <Redirect
            to={{
                pathname: "/",
                state: {from: location}
            }}
        />
    }
    }/>
}
