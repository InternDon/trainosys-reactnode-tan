const Input = ({ label, type, placeholder }) => {
  return (
    <div className="input-group">
      <label htmlFor={label} className="input-label">
        {label}
      </label>
      <input
        className="input-field"
        id={label}
        type={type}
        placeholder={placeholder}
      />

    </div>
  );
};

export default Input;
