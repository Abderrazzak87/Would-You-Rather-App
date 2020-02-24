import React from 'react'

function NotFoundPage ({ history }) {
    return (
        <div>
            <h1 className='h1'>404</h1>
            <p>The page you're looking for is not found. Please push the buttom to go back the log in page.</p>
            <button onClick={() => history.push("/")}> Home </button>
        </div>
    )
}

export default NotFoundPage