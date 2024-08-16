// src/Notifications/Notifications.js

import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';

function Notifications({ listNotifications, displayDrawer, handleDisplayDrawer, handleHideDrawer }) {
  return (
    <div>
      <button
        onClick={handleDisplayDrawer}
        className={css(styles.button)}
      >
        Show notifications
      </button>
      {displayDrawer && (
        <div className={css(styles.drawer)}>
          <button
            onClick={handleHideDrawer}
            className={css(styles.button)}
          >
            Close
          </button>
          <ul>
            {listNotifications.map((notif) => (
              <li key={notif.id}>
                {notif.type === 'default' ? notif.value : <span dangerouslySetInnerHTML={{ __html: notif.html }} />}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

const styles = StyleSheet.create({
  button: {
    // Add styles here
  },
  drawer: {
    // Add styles here
  },
});

Notifications.propTypes = {
  listNotifications: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      type: PropTypes.string.isRequired,
      value: PropTypes.string,
      html: PropTypes.string,
    })
  ).isRequired,
  displayDrawer: PropTypes.bool.isRequired,
  handleDisplayDrawer: PropTypes.func.isRequired,
  handleHideDrawer: PropTypes.func.isRequired,
};

export default Notifications;
