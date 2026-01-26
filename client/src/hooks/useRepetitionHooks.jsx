import { useEffect, useState } from "react";
// for getting multiple practice reps in

export default function useExample1() {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        function getData() {
            setLoading(true);
            try {
                const res = sampleservicescall();

                setData(res);
            } catch(err) {
                setLoading(err);
            } finally {
                setLoading(false);
            }
        }

        getData();
    }, [])

    return {data, error, loading};
};

export function useExample2() {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    function getData() {
        setLoading(true);
        try {
            const res = sampleservicescall();

            setData(res);
        } catch(err) {
            setError(err);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        getData();
    }, []);

    return {data, error, loading};
};

const useExample3 = () => {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setError] = useState(false);

    useEffect(() => {
        const getData = () => {
            setLoading(true);
            try {
                const res = sampleservicescall();

                setData(res);
            } catch(err) {
                setError(err);
            } finally {
                setLoading(false);
            }
        }

        getData();
    }, [])

    return {data, error, loading, getData};
}

export default useExample3;