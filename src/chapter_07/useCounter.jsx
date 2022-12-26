import { useState } from "react";

function useCounter(initialValue) {
    const [count, setCount] = useState(initialValue);

    function handleDecraeseCount() {
        setCount((count) => Math.max(count - 1, 0));
    }

    const increaseCount = () => setCount((count) => count + 1);
    const decreaseCount = handleDecraeseCount;
    // const decreaseCount = () => setCount((count) => Math.max(count - 1, 0));
    return [count, increaseCount, decreaseCount];
}

export default useCounter;
