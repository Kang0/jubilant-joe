import React from 'react';
import './App.css';
import NavbarContainer from './containers/NavbarContainer'

//importing redux features
import { connect } from 'react-redux'

function App() {
  return (
    <div>
      <NavbarContainer />
    </div>
  );
}

const mapStateToProps = state => {
  return {
    challenges: state.challenges,
    calendars: state.calendars,
    user: state.user
  }
}

export default connect(mapStateToProps)(App)
