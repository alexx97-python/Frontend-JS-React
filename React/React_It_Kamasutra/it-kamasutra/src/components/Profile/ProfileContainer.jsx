import React from 'react';
import { connect } from 'react-redux';
import Profile from './Profile';
import {setUserProfile, getUsersProfile} from './../../redux/profile-reducer';
import {withRouter, Redirect} from 'react-router-dom';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { compose } from 'redux';


class ProfileContainer extends React.Component {

  componentDidMount(){
    let userId = this.props.match.params.userId;
    if(!userId) {
      userId = 2;
    }
    this.props.getUsersProfile(userId)
  }

  render(){
    return (
        <Profile {...this.props} profile = {this.props.profile}/>
    );
  }
}

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    isAuth : state.auth.isAuth
});

export default compose(
  connect (mapStateToProps,{
    setUserProfile,
    getUsersProfile
  }),
  withRouter,
  withAuthRedirect
)(ProfileContainer);

/* let AuthRedirectComponent = withAuthRedirect(ProfileContainer);



let WithUrlDataContainerComponent = withRouter(AuthRedirectComponent);

export default connect (mapStateToProps,{
  setUserProfile,
  getUsersProfile
})(WithUrlDataContainerComponent); */