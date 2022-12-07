import './User.css';
import Tag from '../Tag/Tag';

const User = ({ user, className }) => {
  return (
    <div className={className ? `${className} user` : 'user'}>
      <img src={user.avatar} alt={user.name} className="user__avatar" />

      <div className="user__info">
        <p className="user__name">{user.name}</p>
        <p className="user__location">
          {user.city}, {user.state}
        </p>

        <div className="user__tags">
          {user.tags.map((tag, i) => (
            <Tag key={i} content={tag} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default User;
