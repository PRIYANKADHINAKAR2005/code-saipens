import { faCheckCircle, faClock, faTimesCircle } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const PRCard = (props) => {

    // const props = {
    //     repoName: 'testRepo',
    //     prId: 1930827724,
    //     title: 'Update text.txt',
    //     requesterName: 'isai0210',
    //     requestedTime: 'June 20, 2024 at 08:34:13 PM',
    //     prStatus: 'Merged',
    //     // prStatus: 'Denied',
    //     // prStatus: 'Pending'
    // }

    return (
        <div className='pr-card'>
            <div className="top">
                <div className="left">
                    <img src={props.img} alt={props.img} />
                </div>
                <div className="right">
                    <h3 className='name'>{props.requesterName}</h3>
                    <h5 className='username'>{props.requesterName}</h5>
                </div>
            </div>
            <div className="bottom">
                <p className='time-created'>{props.requestedTime}</p>
                <div className={`pr-status ${props.prStatus === 'Merged' ? 'merged' : props.prStatus === 'Pending' ? 'pending' : props.prStatus === 'Denied' ? 'denied' : ''}`}>
                    {props.prStatus === 'Merged' ? <FontAwesomeIcon icon={faCheckCircle} />
                        : props.prStatus === 'Pending' ?<FontAwesomeIcon icon={faClock} />
                            : props.prStatus === 'Denied' && <FontAwesomeIcon icon={faTimesCircle} />
                    }&nbsp;&nbsp;&nbsp;
                    {props.prStatus}
                </div>
                <p><strong>Pull req ID: </strong>{props.prId}</p>
                <p><strong>Title: </strong> {props.title}</p>
                <button className='view-btn'>View Details</button>
            </div>
        </div>
    )
}

export default PRCard