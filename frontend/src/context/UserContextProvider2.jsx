import React from "react";
import UserContext from "./UserContext";

const UserContextProvider2 = ({children}) => {
    const [pass, setPass] = React.useState(null)
    return(
        <UserContext.Provider value={{pass, setPass}}>
        {children}
        </UserContext.Provider>
    )
}

export default UserContextProvider2