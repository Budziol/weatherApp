import { useState, useEffect } from "react";

function useDebounce(value, delay) {
  const [debounceValue, setDebounceValue] = useState();

  useEffect(() => {
    //value bedzie ustalane po uplywie delaya
    const timeout = setTimeout(() => {
      setDebounceValue(value);
    }, delay);

    //musismy wyczyscic timeout po dostaniu nowego value badz delaya
    return () => {
      clearTimeout(timeout);
    };
  }, [value, delay]);

  return debounceValue;
}

export default useDebounce;
