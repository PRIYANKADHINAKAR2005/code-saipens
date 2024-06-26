import React from 'react'
import PRCard from '../components/PRCard'
import { prData } from '../datas/pr-data'

const Main = () => {
  return (
    <div className='main'>
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
        {/* <PRCard
          repoName= 'testRepo'
          prId= '1930827724'
          title= 'Update text.txt'
          requesterName= 'isai0210'
          requestedTime= 'June 20, 2024 at 08:34:13 PM'
          prStatus= 'Merged'
        />
        <PRCard
          repoName= 'testRepo'
          prId= '1930827724'
          title= 'Update text.txt'
          requesterName= 'isai0210'
          requestedTime= 'June 20, 2024 at 08:34:13 PM'
          prStatus= 'Pending'
        />
        <PRCard
          repoName= 'testRepo'
          prId= '1930827724'
          title= 'Update text.txt'
          requesterName= 'isai0210'
          requestedTime= 'June 20, 2024 at 08:34:13 PM'
          prStatus= 'Denied'
        /> */}
      </div>
    </div>
  )
}

export default Main