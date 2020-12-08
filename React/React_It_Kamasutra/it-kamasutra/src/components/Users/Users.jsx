import React from 'react'
import styles from "./users.module.css";
import userPhoto from "../../assets/images/user.png";
import {NavLink} from 'react-router-dom';
import { followUser, unfollowUser } from '../../api/api';


let Users = (props) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);

      let pages = [];
      for(let i=1; i<=10;i++){ // вместо 10 надо pagesCount
        pages.push(i);
      }

    return (
    <div>
        <div>
          {pages.map(page => {
            return <span key={page.toString()} className={props.currentPage === page
              ? styles.selectedPage
              : undefined}
              onClick={(e) => {
                props.onPageCnahged(page)
              }}>{page}</span>
        })}
        </div>
        {props.users.map((u) => {
          return (
            <div key={u.id}>
              <span>
                <div>
                    <NavLink to={'/profile/' + u.id}>
                    <img
                        src={u.photos.small != null ? u.photos.small : userPhoto}
                        alt="avatar"
                        className={styles.userPhoto}
                    />
                    </NavLink>
                  
                </div>
                <div>
                  {u.followed 
                    ? <button disabled={props.followingInProgress.some(id => id === u.id)} onClick={() => {
                      props.toggleIsFollowingProgress(true, u.id);
                      unfollowUser(u.id)
                      .then((response) => {
                        if (response.data.resultCode == 0) {
                          props.unfollow(u.id);
                        }
                        props.toggleIsFollowingProgress(false, u.id);
                      });
                      }}>Unfollow</button>
                    :<button disabled={props.followingInProgress.some(id => id === u.id)} onClick={() => {
                      props.toggleIsFollowingProgress(true, u.id);
                      followUser(u.id)
                      .then((response) => {
                        if (response.data.resultCode == 0) {
                          props.follow(u.id);
                        }
                        props.toggleIsFollowingProgress(false, u.id);
                      });
                      }}>Follow</button>}
                </div>
              </span>
              <span>
                <span>
                  <div>{u.name}</div>
                  <div>{u.status}</div>
                </span>
                <span>
                  <div>{"u.location.country"}</div>
                  <div>{"u.location.city"}</div>
                </span>
              </span>
            </div>
          );
        })}
      </div>
    );
}

export default Users;