import React from 'react';
import { connect } from 'react-redux';
import { follow, setCurrentPage, setTotalUsersCount, setUsers, toggleIsFetching, unfollow } from '../../redux/users-reducer';
import * as axios from "axios";
import Users from "./Users";
import styles from "./users.module.css";
import Preloader from '../common/Preloader/Preloader';


class UsersContainer extends React.Component {
    constructor(props) {
      super(props);
    }
  
    componentDidMount(){
      // this method is executed just after component is rendered;
      // good for making server's requests
      this.props.toggleIsFetching(true); // activate preloader before ajax request
      axios
          .get(`https://social-network.samuraijs.com/api/1.0/users?page=
          ${this.props.currentPage}&count=${this.props.pageSize}`)
          .then((response) => {
            this.props.toggleIsFetching(false); // disactivate preloader
            this.props.setUsers(response.data.items);
            this.props.setTotalUsersCount(response.data.totalCount)
          });
    }
  
    onPageCnahged = (pageNumber) => {
      this.props.setCurrentPage(pageNumber);
      this.props.toggleIsFetching(true);
      axios
          .get(`https://social-network.samuraijs.com/api/1.0/users?page=
          ${pageNumber}&count=${this.props.pageSize}`)
          .then((response) => {
            this.props.toggleIsFetching(false);
            this.props.setUsers(response.data.items);
          });
    }
  
      render() {
        return <>
        {this.props.isFetching ? <Preloader /> : null}
            <Users
            totalUsersCount = {this.props.totalUsersCount}
            pageSize = {this.props.pageSize}
            currentPage = {this.props.currentPage}
            onPageCnahged = {this.onPageCnahged}
            users = {this.props.users}
            follow = {this.props.follow}
            unfollow = {this.props.unfollow}
            />
        </>
      }
  }


let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching
    }
}

/* let mapDispatchToProps = (dispatch) => {
    return {
        follow: (userId) => {
            dispatch(followAC(userId));
        },
        unfollow: (userId) => {
            dispatch(unfollowAC(userId));
        },
        setUsers: (users) => {
            dispatch(setUsersAC(users));
        },
        setCurrentPage: (page) => {
            dispatch(setCurrentPageAC(page));
        },
        setTotalUsersCount: (totalCount) => {
            dispatch(setTotalUsersCountAC(totalCount));
        },
        toggleIsFetching: (isFetching) => {
            dispatch(toggleIsFetchingAC(isFetching));
        }
    }
} */

export default connect (mapStateToProps, {
    follow,
    unfollow,
    setUsers,
    setCurrentPage,
    setTotalUsersCount,
    toggleIsFetching
}) (UsersContainer);

