import React, { useState } from 'react';
import { prData } from '../datas/PrData';
import UserCard from '../components/UserCard';
import { Link, useParams, useLocation } from 'react-router-dom';
import RepoCard from '../components/RepoCard';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import repoData from '../datas/repoData';

const Dashboard = ({ filter }) => {
  const params = useParams();
  const location = useLocation();
  console.log(params);

  const repoUsers = params.repoName ? prData.filter(item => item.repoName === params.repoName) : [];
  const userRepos = params.userName ? prData.filter(item => item.requesterName === params.userName) : [];

  userRepos.length !== 0 && console.log(userRepos);

  const FilteredRepo = () => {
    return (
      <>
        <h3 className='repo-title'>Repository : {params.repoName}</h3>
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

  const AllRepos = () => {

    const [searchTerm, setSearchTerm] = useState('');

    const handleRepo = (e) => {
      setSearchTerm(e.target.value);
    };

    const searchedRepos = repoData.filter(repo =>
      repo.repoName.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
      <>
        <label htmlFor="repo" className='dashboard-search'>
          <FontAwesomeIcon icon={faSearch} />
          <input type="text" placeholder='Search with repository name' id='repo' onChange={handleRepo} />
        </label>
        <div className="all-repos">
          {searchedRepos.map((repo, index) => (
            <RepoCard
              key={index}
              repoName={repo.repoName}
              creatorName={repo.creatorName}
              totalPR={repo.totalPR}
              PrMerged={repo.PrMerged}
              PrPending={repo.PrPending}
            />
          ))}
        </div>
      </>
    );
  };

  const FilteredUser = () => {
    return (
      <>
        <h3 className='repo-title'>Username : {params.userName}</h3>
        {params.userName && userRepos.length !== 0 ? (
          <div className="all-repos">
            {userRepos.map((pr, index) => (
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
  }

  const UserDets = () => {

    const [searchTerm, setSearchTerm] = useState('');

    const handleUser = (e) => {
      setSearchTerm(e.target.value);
    };

    const searchedUsers = prData.filter(user =>
      user.requesterName.toLowerCase().includes(searchTerm.toLowerCase())
    );



    return (
      <>
        <label htmlFor="user" className='dashboard-search'>
          <FontAwesomeIcon icon={faSearch} />
          <input type="text" placeholder='Search with username' id='user' onChange={handleUser} />
        </label>
        <div className="pull-reqs">
          {searchedUsers.map((pullReq, index) => {

            const totalReq = prData.filter(pr => pr.requesterName === pullReq.requesterName).length;

            const mergedReq = prData.filter(pr => pr.requesterName === pullReq.requesterName && pr.prStatus === 'Merged').length;

            const pendingReq = prData.filter(pr => pr.requesterName === pullReq.requesterName && pr.prStatus === 'Pending').length;

            return <UserCard
              key={index}
              type="user"
              img={pullReq.img}
              repoName={pullReq.repoName}
              prId={pullReq.prId}
              title={pullReq.title}
              requesterName={pullReq.requesterName}
              requestedTime={pullReq.requestedTime}
              prStatus={pullReq.prStatus}
              totalPR={totalReq}
              prMerged={mergedReq}
              prPending={pendingReq}
            />
          })}
        </div>
      </>
    );
  };

  return (
    <>
      <div className="filter-via">
        <ul>
          <li className={location.pathname.startsWith("/dashboard/user") ? "" : "active"}>
            <Link to="/dashboard">Repositories</Link>
          </li>
          <li className={location.pathname.startsWith("/dashboard/user") ? "active" : ""}>
            <Link to="/dashboard/user">Users</Link>
          </li>
        </ul>
      </div>

      {filter === 'repo' && (params.repoName ? <FilteredRepo /> : <AllRepos />)}
      {filter === 'user' && (params.userName ? <FilteredUser /> : <UserDets />)}
    </>
  );
};

export default Dashboard;
