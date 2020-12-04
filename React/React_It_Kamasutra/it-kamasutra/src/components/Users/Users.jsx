import React from "react";
import styles from "./users.module.css";
import * as axios from "axios";
import userPhoto from "../../assets/images/user.png";

class Users extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount(){
    // this method is executed just after component is rendered;
    // good for making server's requests
    axios
        .get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
        .then((response) => {
          this.props.setUsers(response.data.items);
          this.props.setTotalUsersCount(response.data.totalCount)
        });
  }

  onPageCnahged = (pageNumber) => {
    this.props.setCurrentPage(pageNumber);
    axios
        .get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
        .then((response) => {
          this.props.setUsers(response.data.items);
        });
  }

  render() {
    let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize);

    let pages = [];
    for(let i=1; i<=pagesCount;i++){
      pages.push(i);
    }

    return (
      <div>
        <div>
          {pages.map(page => {
            return <span key={page.toString()} className={this.props.currentPage === page
              ? styles.selectedPage
              : undefined}
              onClick={(e) => {
                this.onPageCnahged(page)
              }}>{page}</span>
        })}
        </div>
        {this.props.users.map((u) => {
          return (
            <div key={u.id}>
              <span>
                <div>
                  <img
                    src={u.photos.small != null ? u.photos.small : userPhoto}
                    alt="avatar"
                    className={styles.userPhoto}
                  />
                </div>
                <div>
                  {u.followed ? (
                    <button
                      onClick={() => {
                        this.props.unfollow(u.id);
                      }}
                    >
                      Unfollow
                    </button>
                  ) : (
                    <button
                      onClick={() => {
                        this.props.follow(u.id);
                      }}
                    >
                      Follow
                    </button>
                  )}
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
}

export default Users;
