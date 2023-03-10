import React from 'react';
import './style.css';
import { Link } from 'react-router-dom';

export default function LeftHome({ user }) {
  return (
    <div className="left_home scrollbar">
      <Link to="/profile" className="left_link hover2">
        <img src={user?.picture} alt="" />
        <span>
          {user?.first_name} {user.last_name}
        </span>
      </Link>
      {/* {left.slice(0, 2).map((link, i) => (
        <LeftLink
          key={i}
          img={link.img}
          text={link.text}
          notification={link.notification}
        />
      ))} */}
      <Link to="/friends" className="left_link hover1">
        <img src="../left/friends.png" alt="" />
        <span>Find friends</span>
      </Link>
      <Link to="/messenger" className="left_link hover1">
        <img src="../left/messenger.png" alt="" />
        <span>Messanger</span>
      </Link>
      {/* {!visible && (
        <div
          className="left_link hover2"
          onClick={() => {
            setVisible(true);
          }}
        >
          <div className="small_circle">
            <ArrowDown1 />
          </div>
          <span>See more</span>
        </div>
      )}
      {visible && (
        <div className="more_left">
          {left.slice(8, left.length).map((link, i) => (
            <LeftLink
              key={i}
              img={link.img}
              text={link.text}
              notification={link.notification}
            />
          ))}
          <div
            className="left_link hover1 "
            onClick={() => {
              setVisible(false);
            }}
          >
            <div className="small_circle rotate360">
              <ArrowDown1 />
            </div>
            <span>Show less</span>
          </div>
        </div>
      )}
      <div className="splitter"></div>
      <div className="shortcut">
        <div className="heading">Your Shortcuts</div>
        <div className="edit_shortcut">Edit</div>
      </div>
      <div className="shortcut_list">
        <Shortcut />
      </div>
      <div
        className={`fb_copyright ${visible && 'relative_fb_copyright'}`}
      ></div> */}
    </div>
  );
}
