import React from 'react';
import ContestPreview from './ContestPreview';

const ContestList = ({contests, onContestClick}) => (
  <div className = "ContestList">
    {Object.keys(contests).map(contestId =>
        <ContestPreview
          key = {contestId}
          id = {contestId}
          onClick = {onContestClick}
          categoryName= {contests[contestId].categoryName}
          contestName = {contests[contestId].contestName} />
    )}
  </div>
);

ContestList.propTypes = {
  contests: React.PropTypes.object.isRequired,
  onContestClick: React.PropTypes.func.isRequired
};

export default ContestList;
