import { useEffect } from 'react';

export default function useOnClickOutside(ref, handler) {
    
    useEffect(
        () => {
            const listener = (event) => {
                // ref가 존재하지 않거나, 선택된 ref의 내부요소를 클릭할 때는 아무것도 return하지 않음
                if (!ref.current || ref.current.contains(event.target)) {
                    return;
                }

                // 위 조건 외에는 handler 실행 (modal창 닫기), handler는 modal에서 작성됨
                handler(event);
            };
            document.addEventListener("mousedown", listener);
            document.addEventListener("touchstart", listener);

            // 작업이 끝나면 listener제거
            return () => {
                document.removeEventListener("mousedown", listener);
                document.removeEventListener("touchstart", listener);
            };
        },
        [ref, handler]
    );
}
