import React from 'react';
import { useSelector } from 'react-redux';
import RewardItem from './RewardItem';

const RewardsList = () => {
  const rewards = useSelector((state) => state.rewards.rewards);

  return (
    <div>
      <h2>Rewards Marketplace</h2>
      <div className="rewards-list">
        {rewards.map((reward) => (
          <RewardItem key={reward.id} reward={reward} />
        ))}
      </div>
    </div>
  );
};

export default RewardsList;
