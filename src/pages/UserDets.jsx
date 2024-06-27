import React from 'react'
import { prData } from '../datas/PrData'
import PrCard from '../components/PrCard'

const UserDets = () => {
  return (
    <div className="pull-reqs">
      {prData.map((pr, index) => (
        <PrCard
          key={index}
          img = {pr.img}
          repoName={pr.repoName}
          prId={pr.prId}
          title={pr.title}
          requesterName={pr.requesterName}
          requestedTime={pr.requestedTime}
          prStatus={pr.prStatus}
        />
      ))}
      </div>
  )
}

export default UserDets