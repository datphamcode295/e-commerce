import React from 'react';
import "../assets/admin.css";
import ListUserOrder from "./ListUserOrder";
import { store } from '../../../store/user';
import { connect } from 'react-redux';

function mapStateToProps(state, ownProps) {
  return {
    user: state,
  }
}

const UserOrderPage = (props) => {
  if (!props.user.sessionId) {
    return <div className='text-center font-extrabold text-xl'>You need to login first</div>;
  }
  return (
    <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
      <ListUserOrder />
    </div>
  );
}
export default connect(mapStateToProps)(UserOrderPage);

