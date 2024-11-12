const Icon = ({ type }) => {
  const getIcon = () => {
    switch (type) {
      case 'success':
        return '✅'; 
      case 'warning':
        return '⚠️'; 
      case 'error':
        return '❌';
      default:
        return 'ℹ️';
    }
  };

  return <span>{getIcon()}</span>;
};

export default Icon;
