import './UserAvatar.css';

const UserAvatar = ({ src, alt, className }) => {
  return (
    <img
      src={src}
      alt={alt ? `${alt} avatar` : 'avatar'}
      className={className ? `className` : 'user__avatar'}
    />
  );
};

export default UserAvatar;
