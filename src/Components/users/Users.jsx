import axios from "axios";
import React from "react";
import c from "./users.module.css";
import userAva from "../../assets/images/users.jpg";
const Users = (props) => {
  if (props.users.length === 0) {
    axios
      .get("https://social-network.samuraijs.com/api/1.0/users")

      .then((response) => {
        props.setUsers(response.data.items);
      });
  }
  return (
    <div>
      {props.users.map((u) => (
        <div key={u.id} className={c.users}>
          <div>{u.name}</div>
          <img
            src={u.photos.small != null ? u.photos.small : userAva}
            className={c.img}
          />
          <div>{u.status}</div>
          <div>
            {" "}
            {u.followed ? (
              <button onClick={() => props.follow(u.id)}>FOLLOW</button>
            ) : (
              <button onClick={() => props.un_follow(u.id)}>UNFOLLOW</button>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};
export default Users;
