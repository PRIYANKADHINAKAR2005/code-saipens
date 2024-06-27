import React from 'react'
import { Link } from 'react-router-dom'

const RepoCard = (props) => {
    return (
        <div className='repo-card'>
            <h1>Flask Chat App</h1>
            <p className='tech-stack-title'>Tech Stack:</p>
            <p className='tech-stack'>1. React<br />2. Flask<br />3. Tailwind<br />4. MongoDB</p>
            <div className="repo-link">
                <a href="https://github.com">View Repository</a> <Link to='Flask_Chat_App'>View Contributors</Link>
            </div>
        </div>
    )
}

export default RepoCard