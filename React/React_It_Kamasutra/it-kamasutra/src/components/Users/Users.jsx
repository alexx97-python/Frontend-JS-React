import React from 'react'
import styles from "./users.module.css";
import userPhoto from "../../assets/images/user.png";
import {NavLink} from 'react-router-dom';
import * as axios from 'axios';

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
                    ? <button onClick={() => {
                      axios
                      .delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`,{
                        withCredentials: true,
                        headers: {
                          'API-KEY': 'b1775b2f-c3a5-4509-8dc9-90b5629de7c3'
                        }
                      })
                      .then((response) => {
                        if (response.data.resultCode == 0) {
                          props.unfollow(u.id);
                        }
                      });
                      }}>Unfollow</button>
                    :<button onClick={() => {
                      axios
                      .post(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`,{},{
                        withCredentials: true,
                        headers: {
                          'API-KEY': 'b1775b2f-c3a5-4509-8dc9-90b5629de7c3'
                        }
                      })
                      .then((response) => {
                        if (response.data.resultCode == 0) {
                          props.follow(u.id);
                        }
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