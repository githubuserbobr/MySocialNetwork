import React from "react";
import c from "./users.module.css";
import userAva from "../../assets/images/users.jpg";
import {NavLink} from "react-router-dom";
import {usersApi} from "../../api/api";

const Users = (props) => {
    let pageCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [];
    for (let i = 1; i <= pageCount; i++) {
        pages.push(i);
    }

    return (
        <div>
            <div>
                {pages.map((pages) => {
                    return (
                        <span key={pages}
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
                    <NavLink to={"/profile/" + u.id}>
                        {" "}
                        <img
                            src={u.photos.small != null ? u.photos.small : userAva}
                            className={c.img}
                        />
                    </NavLink>
                    <div>{u.status}</div>
                    <div>
                        {" "}
                        {u.followed ? (
                            <button
                                disabled={props.followingProcess}
                                onClick={() => {
                                    props.toggleFollowingProcess(true);
                                    usersApi.usersUn_follow(u.id).then((response) => {
                                        if (response.data.resultCode === 0) {
                                            props.follow(u.id);
                                        }
                                    }).then(() => props.toggleFollowingProcess(false));
                                    // props.toggleFollowingProcess(false);
                                }}
                            >
                                FOLLOW
                            </button>
                        ) : (
                            <button
                                disabled={props.followingProcess}
                                onClick={() => {
                                    props.toggleFollowingProcess(true);
                                    usersApi.usersFollow(u.id).then((response) => {
                                        if (response.data.resultCode === 0) {
                                            props.un_follow(u.id);
                                        }
                                    }).then(() => props.toggleFollowingProcess(false));
                                    // props.toggleFollowingProcess(false);
                                }}
                            >
                                UN_FOLLOW
                            </button>
                        )}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Users;
