import React from 'react'
import { useSelector } from "react-redux"
import { selectToken, selectUserProfile } from "../store/auth/selectors";
import { Link } from "react-router-dom";


export default function Toolbar() {

    const token = useSelector(selectToken)
    const user = useSelector(selectUserProfile)

    if (!user) {

        return <Link to="/login">Login</Link>

    } else {
        return <div>
            <h2>Hello {user.name}, welcome back!</h2>
            <button>Logout</button>
        </div>
    }

}
