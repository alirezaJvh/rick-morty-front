import React from 'react';
import PropTypes from 'prop-types';
import Button from '../Button';
import './style.scss';

function Header({ isAuth, user, dispatch }) {
  const contentAlignment = isAuth ? 'justify-between' : ' justify-center';

  return (
    <div className={`header-wrapper d-flex ${contentAlignment}`}>
      {isAuth && <div className="username"> {user && user.username}</div>}
      <div className="logo"></div>
      {isAuth && (
        <div className="d-flex column justify-center">
          <Button size="small" onClick={() => dispatch({ type: 'LOGOUT' })}>
            Logout
          </Button>
        </div>
      )}
    </div>
  );
}

Header.propTypes = {
  isAuth: PropTypes.bool.isRequired,
  dispatch: PropTypes.func.isRequired,
  user: PropTypes.object || PropTypes.undefined,
};

Header.defaultProps = {
  user: undefined,
};

export default Header;
