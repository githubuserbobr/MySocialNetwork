import React from "react";
import c from "./users.module.css";
import userAva from "../../assets/images/users.jpg";
const Users = (props) => {
  let pageCount = Math.ceil(props.totalUsersCount / props.pageSize);
  console.log(pageCount);
  let pages = [];
  for (let i = 1; i <= pageCount; i++) {
    pages.push(i);
  }
 
  return (
    <div>
      <div>
        {pages.map((pages) => {
          return (
            <span
              onClick={() => props.onPageChanged(pages)}
              className={props.currentPage === pages && c.activeNumber}
            >
              {pages}
            </span>
          );
        })}
      </div>

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
              <button onClick={() => props.un_follow(u.id)}>UN_FOLLOW</button>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Users;
