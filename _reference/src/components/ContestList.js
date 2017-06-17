import React from 'react';
import ContestPreview from './ContestPreview';
import PropTypes from 'prop-types';

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
  contests: PropTypes.object.isRequired,
  onContestClick: PropTypes.func.isRequired
};

export default ContestList;
