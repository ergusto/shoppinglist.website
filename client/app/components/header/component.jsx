import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import Authenticated from './authenticated.jsx';
import Unauthenticated from './unauthenticated.jsx';

import './style.scss';

const mapStateToProps = state => ({ isAuthenticated: state.auth.authenticated });
const Component = ({ isAuthenticated }) => isAuthenticated ? <Authenticated /> : <Unauthenticated />;

const Header = connect(mapStateToProps)(Component);

export default Header;