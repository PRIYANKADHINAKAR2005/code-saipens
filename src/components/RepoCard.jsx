import React from 'react'
import { Link } from 'react-router-dom'

const RepoCard = (props) => {
    return (
        <div className='repo-card'>
            <h1>{props.repoName}</h1>
            <p className='creator-name'>-{props.creatorName}</p>
            <div className="dets">
                <p className='time-created'>Total no of pull requests: {props.totalPR}</p>
                <p className='pr-status merged'>Merged pull requests: {props.PrMerged}</p>
                <p className='pr-status pending'>Pending pull requests: {props.PrPending}</p>
            </div>
            <div className="repo-link">
                <a href="https://github.com">View Repository</a> <Link to='Flask_Chat_App'>View Contributors</Link>
            </div>
        </div>
    )
}

export default RepoCard