import { useState } from "react"

const useInputs = (initialValues) => {
  const [values, setValues] = useState(initialValues);

  const onChange = (event) => {
    setValues((prev) =>({
      ...prev,
      [event.target.name]: event.target.values,
    }));
  };

  return [values, onChange, setValues];
};

export default useInputs;