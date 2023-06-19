import React from 'react'
import { Link } from "react-router-dom"
import { useDispatch, useSelector } from 'react-redux'
import { increaseCount } from '../features/posts/postsSlice'

const Header = () => {
    const dispatch = useDispatch();
    const count = useSelector(state => state.posts.count)
    console.log(count)
    return (
        <header className="Header">
            <h1>Redux Blog App</h1>
            <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="post">Add Post</Link></li>
                    <li><Link to="user">Users</Link></li>
                    <button onClick={() => dispatch(increaseCount())}>{count}</button>
                </ul>
            </nav>
        </header>
    )
}

export default Header