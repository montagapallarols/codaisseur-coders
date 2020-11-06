import React from 'react'
import { useSelector, useDispatch } from "react-redux"
import { selectToken, selectUserProfile } from "../store/auth/selectors";
import { Link } from "react-router-dom";
import { logout } from "../store/auth/actions";


export default function Toolbar() {

    const token = useSelector(selectToken)
    const user = useSelector(selectUserProfile)
    const dispatch = useDispatch()

    function handleClick(){
        console.log("clicked!")
        dispatch(logout)
    }

    if (!user) {

        return <Link to="/login">Login</Link>

    } else {
        return <div>
            <h2>Hello {user.name}, welcome back!</h2>
            <button onClick={handleClick}>Logout</button>
        </div>
    }

}
