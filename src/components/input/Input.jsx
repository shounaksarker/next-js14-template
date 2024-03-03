import React from 'react';
import PropTypes from 'prop-types';

const InputField = ({
  type,
  label,
  iconLeft,
  iconRight,
  onChange,
  value,
  placeholder,
  className,
  labelClass,
  iconClass,
  inputClass,
}) => {
  return (
    <div className={`mb-4 ${className}`}>
      {label && (
        <label className={`mb-2 block text-sm font-bold text-gray-700 ${labelClass}`}> {label} </label>
      )}
      <div className="relative">
        {iconLeft && (
          <span className={`absolute inset-y-0 left-0 flex items-center pl-2 ${iconClass}`}>
            <i>{iconLeft}</i>
          </span>
        )}
        <input
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          className={`custom-border w-full px-3 py-2 ${iconLeft ? 'pl-10' : ''} ${iconRight ? 'pr-10' : ''} ${inputClass}`}
        />
        {iconRight && (
          <span className={`absolute inset-y-0 right-0 flex items-center pr-2 ${iconClass}`}>
            <i>{iconRight}</i>
          </span>
        )}
      </div>
    </div>
  );
};

InputField.propTypes = {
  type: PropTypes.oneOf(['text', 'password', 'checkbox', 'date', 'datetime-local', 'tel', 'week', 'month']),
  label: PropTypes.string,
  iconLeft: PropTypes.element,
  iconRight: PropTypes.element,
  // onChange: PropTypes.func.isRequired,
  value: PropTypes.any,
  placeholder: PropTypes.string,
};

// InputField.defaultProps = {
//   type: 'text',
// };

export default InputField;
