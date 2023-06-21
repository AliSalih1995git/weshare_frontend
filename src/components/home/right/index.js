import React, { useEffect, useState } from "react";
import Contact from "./Contact";
import "./style.css";
import { addFriend, getAllUnknownFriends } from "../../../api/functions/user";

export default function RightHome({ user }) {
  const [friends, setAllfriends] = useState([]);
  useEffect(() => {
    const getAllFriends = async () => {
      try {
        const response = await getAllUnknownFriends(user.id, user.token);
        setAllfriends(response);
      } catch (error) {
        console.error("Error getting friends:", error);
      }
    };

    console.log("useEffect run");
    getAllFriends();
  }, [user]);

  const addFriendHandler = async (friendId, token) => {
    try {
      await addFriend(friendId, token);
      console.log("Friend added successfully!");
    } catch (error) {
      console.error("Error adding friend:", error);
    }
  };

  return (
    <div className="right_home">
      <div className="heading">Sponsored</div>
      <div className="splitter1"></div>
      <div className="contacts_wrap">
        <div className="contacts_header">
          <div className="contacts_header_left">Contacts</div>
        </div>
        <div className="contacts_list">
          {friends?.map((friend) => (
            <Contact
              key={friend._id}
              user={friend}
              addFriendHandler={addFriendHandler}
              token={user.token}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
