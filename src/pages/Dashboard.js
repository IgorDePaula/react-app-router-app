import React, {useContext} from "react";
import {AuthContext} from "../Context";

export default props => {
    const [isLooged] = useContext(AuthContext)
    return <div>DashBoard: {JSON.stringify(isLooged)}</div>
}
