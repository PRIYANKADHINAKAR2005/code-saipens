import React from 'react';
import { prData } from '../datas/PrData';
import UserCard from '../components/UserCard';
import { NavLink, useParams } from 'react-router-dom';
import RepoCard from '../components/RepoCard';

const Dashboard = ({ filter }) => {
  const params = useParams();
  console.log(params);

  const repoUsers = params.repoName ? prData.filter(item => item.repoName === params.repoName) : [];

  const FilteredUser = () => {
    return (
      <>
        {params.repoName && repoUsers.length !== 0 ? (
          <div className="all-repos">
            {repoUsers.map((pr, index) => (
            <UserCard
              key={index}
              type="pr"
              img={pr.img}
              repoName={pr.repoName}
              prId={pr.prId}
              title={pr.title}
              requesterName={pr.requesterName}
              requestedTime={pr.requestedTime}
              prStatus={pr.prStatus}
            />
          ))}
          </div>
        ) : (
          <h1>No user contributed to this repository</h1>
        )}
      </>
    );
  };

  const PullReqs = () => {
    return (
      <>
        {/* Uncomment if you want to display pull requests
        <div className="pull-reqs">
          {prData.map((pr, index) => (
            <UserCard
              key={index}
              type="pr"
              img={pr.img}
              repoName={pr.repoName}
              prId={pr.prId}
              title={pr.title}
              requesterName={pr.requesterName}
              requestedTime={pr.requestedTime}
              prStatus={pr.prStatus}
            />
          ))}
        </div>
        */}
        <div className="all-repos">
          {prData.map((pr, index) => (
            <RepoCard
              key={index}
              repoName="Flask Chat App"
              creatorName="Mahaveer1013"
              totalPR="20"
              PrMerged="10"
              PrPending="10"
            />
          ))}
        </div>
      </>
    );
  };

  const UserDets = () => {
    return (
      <div className="pull-reqs">
        {prData.map((pr, index) => (
          <UserCard
            key={index}
            type="user"
            img={pr.img}
            repoName={pr.repoName}
            prId={pr.prId}
            title={pr.title}
            requesterName={pr.requesterName}
            requestedTime={pr.requestedTime}
            prStatus={pr.prStatus}
          />
        ))}
      </div>
    );
  };

  return (
    <>
      <div className="filter-via">
        <p>Filter: </p>
        <NavLink to="/dashboard">Repositories</NavLink>
        <NavLink to="/dashboard/user">Users</NavLink>
      </div>
      {params.repoName ? (
        <FilteredUser />
      ) : filter === 'repo' ? (
        <PullReqs />
      ) : (
        filter === 'user' && <UserDets />
      )}
    </>
  );
};

export default Dashboard;
