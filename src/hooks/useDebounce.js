import { useState, useEffect } from "react";

export const useDebounce = (value, delay) => {
  const [debounceValue, setDebounceValue] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebounceValue(value);
    }, delay);

    // useEffect에선 return문이 cleanUp함수로 진행
    return () => {
      clearTimeout(handler);  // handler함수를 중단시킨다.
    };
  }, [value, delay]); /* 배열 안의 요소인 value나 delay가 변경되면 cleanUp함수 진행됨 */

  return debounceValue;
};
