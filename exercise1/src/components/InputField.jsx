import { useId } from 'react';
import { useFormContext } from './FormContext';

export const InputField = ({ label, name, error, type = 'text' }) => {
  const { values, handleChange } = useFormContext();
  
  // 1. Unique ID generation & error linking
  const id = useId();
  const errorId = `${id}-error`;

  return (
    <div className="field-group" style={{ marginBottom: '15px' }}>
      <label htmlFor={id} style={{ display: 'block', fontWeight: 'bold' }}>{label}</label>
      <input
        id={id}
        type={type}
        name={name}
        value={values[name] || ''}
        onChange={(e) => handleChange(name, e.target.value)}
        aria-invalid={!!error}
        aria-describedby={error ? errorId : undefined}
        style={{ 
          padding: '8px', 
          width: '100%', 
          maxWidth: '300px',
          borderColor: error ? 'red' : '#ccc' 
        }}
      />
      {error && (
        <span id={errorId} role="alert" style={{ color: 'red', display: 'block', fontSize: '0.9em' }}>
          {error}
        </span>
      )}
    </div>
  );
};