import React from 'react';
import { stories } from '../../api/data/home';
import { Dots } from '../../assets/svg';
import AddFriendSmallCard from './AddFriendSmallCard';

export default function PplYouMayKnow() {
  return (
    <div className="pplumayknow">
      <div className="pplumayknow_header">
        People You May Know
        <div className="post_header_right ppl_circle hover1">
          <Dots />
        </div>
      </div>
      <div className="pplumayknow_list">
        {stories.map((item, i) => (
          <AddFriendSmallCard item={item} key={i} />
        ))}
      </div>
    </div>
  );
}
