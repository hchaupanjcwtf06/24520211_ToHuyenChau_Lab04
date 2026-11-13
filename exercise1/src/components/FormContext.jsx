import { createContext, useContext, useState } from 'react';

// 1. Khởi tạo Context
export const FormContext = createContext(null);

// 2. Custom hook abstraction
export const useFormContext = () => {
  const context = useContext(FormContext);
  if (!context) {
    throw new Error('useFormContext must be used within a FormProvider');
  }
  return context;
};

// 3. Provider Component
export const FormProvider = ({ children, initialValues }) => {
  const [values, setValues] = useState(initialValues);

  const handleChange = (name, value) => {
    setValues((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <FormContext.Provider value={{ values, handleChange }}>
      {children}
    </FormContext.Provider>
  );
};