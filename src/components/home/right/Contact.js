import React from "react";

function Contact({ user, addFriendHandler, token }) {
  const handleAddFriend = () => {
    addFriendHandler(user._id, token);
  };
  return (
    <div className="contact hover3">
      <div className="contact_img">
        <img src={user.picture} alt="" />
      </div>
      <span>
        {user.first_name} {user.last_name}
      </span>
      <span>
        <img
          src="../../../icons/addFriend.png"
          alt=""
          className="filter_blue addFriend_img"
          onClick={handleAddFriend}
        />
      </span>
    </div>
  );
}

export default Contact;
