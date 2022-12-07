import { Link } from 'react-router-dom';
import './Tag.css';

const Tag = ({ content, className }) => {
  return (
    <Link
      to={`/user/tags?=${content}`}
      className={className ? `${className} user__tag` : 'user__tag'}
    >
      {content}
    </Link>
  );
};

export default Tag;
