import React from 'react'
import PRCard from '../components/PRCard'
import { prData } from '../datas/pr-data'

const Home = () => {
  return (
    <div className="pull-reqs">
      {prData.map((pr, index) => (
        <PRCard
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

export default Home