import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import axios from 'axios';
import './style.css';

export default function Conversation({ conversation }) {
  const { user } = useSelector((state) => ({ ...state }));
  const [users, setUsers] = useState(null);

  useEffect(() => {
    const friendId = conversation.members.find((m) => m !== user.id);
    const getUser = async () => {
      try {
        const res = await axios.get(
          `${process.env.REACT_APP_BACKEND_URL}/getUser/${friendId}`,
          {
            headers: {
              Authorization: `Bearer ${user.token}`,
            },
          }
        );
        setUsers(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getUser();
  }, [user, conversation]);
  return (
    <div className="conversation">
      <img
        className="conversationImg"
        src={
          users?.picture
            ? users?.picture
            : 'https://res.cloudinary.com/dmhcnhtng/image/upload/v1643044376/avatars/default_pic_jeaybr.png'
        }
        alt=""
      />
      <span className="conversationName"> {users?.username} </span>
    </div>
  );
}
