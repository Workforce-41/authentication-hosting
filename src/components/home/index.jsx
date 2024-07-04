import React from 'react'
import { useAuth } from '../../contexts/authContext'

const Home = () => {
    const { currentUser } = useAuth()
    const homeUrl = `http://localhost:3000?email=${currentUser.email}`

    return (
        <div className='text-2xl font-bold pt-14'>
            Hello {currentUser.displayName ? currentUser.displayName : currentUser.email}, you are now logged in.
            <a 
                href={homeUrl} 
                className='mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700 inline-block'
            >
                Go Home
            </a>
        </div>
    )
}

export default Home
