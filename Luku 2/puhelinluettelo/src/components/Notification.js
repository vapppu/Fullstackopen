const Notification = ({ message, success }) => {
  console.log(success);

  if (message === null) {
    return <div className="notificationBox"></div>;
  } else if (success) {
    return (
      <div className="notificationBox">
        <div className="notificationText success">{message}</div>
      </div>
    );
  } else {
    return (
      <div className="notificationBox">
        <div className="notificationText fail">{message}</div>
      </div>
    );
  }
};

export default Notification;
