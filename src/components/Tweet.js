import ProfileImage from './ProfileImage'
import User from './User'
import Timestamp from './Timestamp';
import Message from './Message';

function Tweet({tweet: {user, timestamp, message}}) {
  return (
    <div className="tweet">
      <ProfileImage image={user.image} /> 

      <div className="body">
        <div className="top">
          <User user={user} />
          <Timestamp timestamp={timestamp} />
        </div>
      
        <Message message={message} />

        <div className="actions">
          {/* Font Awesome icons */}
          <i className="far fa-comment"></i>
          <i className="fas fa-retweet"></i>
          <i className="far fa-heart"></i>
          <i className="fas fa-share"></i>
        </div>
      </div>

      <i className="fas fa-ellipsis-h"></i>
    </div>
  );
}

export default Tweet;
