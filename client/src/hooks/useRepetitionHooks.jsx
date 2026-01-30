import { useEffect, useState } from "react";
// for getting multiple practice reps in

const useGetData = () => {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const getData = async () => {
            setLoading(true);
            try {
                const res = await sampleservice();

                setData(res);
            } catch(err) {
                setError(err);
            } finally {
                setLoading(false);
            }
        }

        getData();
    }, []);

    return {data, error, loading};
};

export default useGetData;

export function useExample2() {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    async function getData() {
        setLoading(true);
        try {
            const res = await samplecall();

            setData(data);
        } catch(err) {
            setError(error)
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        getData();
    }, []);

    return {data, error, loading};
};

export default function useExample3() {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        async function getData() {
            setLoading(true);
            try {
                const res = await samplecall();

                setData(res);
            } catch(err) {
                setError(err);
            } finally {
                setLoading(false);
            }
        };

        getData();
    }, []);

    return {data, error, loading};
};

export function useExample4() {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        async function getData() {
            setLoading(true);
            try {
                const res = await samplecall();

                setData(res);
            } catch(err) {
                setError(err);
            } finally {
                setLoading(false);
            }
        };

        getData();
    }, []);

    return {data, error, loading};
};