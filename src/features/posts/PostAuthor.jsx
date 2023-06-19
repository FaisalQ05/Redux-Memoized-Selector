import React from 'react'
import { useSelector } from 'react-redux'

const PostAuthor = ({ userId }) => {
    const users = useSelector(s => s.users)
    // console.log("users : ", users)
    const author = users.find(user => user.id === userId);
    return (
        <span> &nbsp;  by {author ? author.name : 'Unknow author'}</span>
    )
}

export default PostAuthor