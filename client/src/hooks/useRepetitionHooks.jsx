import { useState } from "react";
// for getting multiple practice reps in

export function useExample1() {
    const [data, setData] = useState(null);

    return {
        data,
        setData
    };
}

export default function useExample2() {
    const [data, setData] = useState(null);

    return {
        data,
        setData
    };
}

const useExample3 = () => {
    const [data, setData] = useState(null);

    return {
        data,
        setData
    };
};

export default useExample3;

export default useExample4() {
    const [data, setData] = useState(null);

    return {
        data,
        setData
    };
}

export useExample5() {
    const [data, setData] = useState(null);

    return {
        data,
        setData
    };
}

const useExample6 = () => {
    const [data, setData] = useState(null);

    return {
        data,
        setData
    };
}

export default useExample6;