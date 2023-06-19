import React from 'react'
import { useParams, Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { selectPostByUser } from '../posts/postsSlice'

const UsersPage = () => {
    const { userId } = useParams();
    console.log(userId)
    const selectUserById = useSelector(
        (state) => state.users.find(x => x.id === Number(userId)))

    console.log(selectUserById)
    const allposts = useSelector(state => state.posts.posts)
    // console.log(allposts)


    //This will cause re render every time postslice count changed
    // const postforUser = useSelector(state => {
    //     const allposts = state.posts.posts
    //     return allposts.filter(post => post.userId === Number(userId))
    // })

    //so we use create selector
    const postforUser = useSelector(state => selectPostByUser(state, Number(userId)))

    const postTitles = postforUser.map(post => (
        <li key={post.id}>
            <Link to={`/post/${post.id}`}>{post.title}</Link>
        </li>
    ))

    return (
        <section className='userPostHistory'>
            <h1>{`All posts by ${selectUserById.name}`}</h1>
            {postTitles.length > 0 ? postTitles : <h2>User don,t have posts</h2>}
        </section>
    )
}

export default UsersPage