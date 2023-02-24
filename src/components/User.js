const User = ({user, timestamp}) => {
    return (
        <div className="top">
          <span className="user">
            <span className="name">{user.name}</span>
            <span className="handle">@{user.handle}</span>
          </span>

          <span className="timestamp">{timestamp}</span>
        </div>
    )
}

export default User;