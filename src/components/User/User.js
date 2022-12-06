import './User.css';
import UserAvatar from '../UserAvatar/UserAvatar';
import Tag from '../Tag/Tag';

const User = ({ user, className }) => {
  return (
    <div className={className ? `${className} user` : 'user'}>
      <UserAvatar src={user.avatar} alt={user.name} />

      <div className="user__name__and__location">
        <p className="user__name">{user.name}</p>
        <p className="user__location">
          {user.city}, {user.state}
        </p>
      </div>

      <div className="user__tags">
        {user.tags.map((tag, i) => (
          <Tag key={i} content={tag} />
        ))}
      </div>
    </div>
  );
};

export default User;
