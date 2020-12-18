import React from 'react';
import { connect } from 'react-redux';
import { follow, setCurrentPage, setTotalUsersCount, setUsers, toggleIsFetching, unfollow, toggleIsFollowingProgress, getUsersThunkCreator } from '../../redux/users-reducer';
import Users from "./Users";
import Preloader from '../common/Preloader/Preloader';
import { getUsers} from '../../api/api';


class UsersContainer extends React.Component {
    constructor(props) {
      super(props);
    }

    componentDidMount(){
      // this method is executed just after component is rendered;
      // good for making server's requests

      this.props.getUsersThunkCreator(this.props.currentPage, this.props.pageSize);
      /* this.props.toggleIsFetching(true); // activate preloader before ajax request
      getUsers(this.props.currentPage, this.props.pageSize)
          .then((data) => {
            this.props.toggleIsFetching(false); // disactivate preloader
            this.props.setUsers(data.items);
            this.props.setTotalUsersCount(data.totalCount)
          }); */
    }

    onPageCnahged = (pageNumber) => {
      this.props.setCurrentPage(pageNumber);
      this.props.toggleIsFetching(true);

      getUsers(pageNumber, this.props.pageSize).then((data) => {
            this.props.toggleIsFetching(false);
            this.props.setUsers(data.items);
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
            toggleIsFollowingProgress = {this.props.toggleIsFollowingProgress}
            followingInProgress = {this.props.followingInProgress}
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
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress
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
    toggleIsFetching,
    toggleIsFollowingProgress,
    getUsersThunkCreator
}) (UsersContainer);

