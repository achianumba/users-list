import './Icon.css';

const Icon = ({ src, alt, className, onClick }) => {
  return onClick ? (
    <img
      src={src}
      alt={alt ? `${alt} icon` : 'icon'}
      className={className ? `${className} icon` : 'icon'}
      onClick={onClick}
    />
  ) : (
    <img
      src={src}
      alt={alt ? `${alt} icon` : 'icon'}
      className={className ? `${className} icon` : 'icon'}
    />
  );
};

export default Icon;
