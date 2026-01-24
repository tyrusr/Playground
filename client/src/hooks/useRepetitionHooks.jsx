import { useEffect, useState } from "react";
// for getting multiple practice reps in

export default function useExample1() {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    setLoading(true);
    async function getData(){
        try {
            const res = await sampleServicesCall();
            setData(res);
        } catch(err) {
            setError(err);
        } finally {
            setLoading(false);
        }
    }

    return {data, error, loading, getData}
}

export function useExample2() {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    setLoading(true);
    const getData = async () => {
        try {
            const res = await sampleServicesCall();
            setData(res);
        } catch(err) {
            setError(err);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        getData();
    }, [])

    return {data, error, loading}
}

const useExample3 = () => {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        const getData = async () => {
            try {
                const res = await sampleServicesCall();
                setData(res);
            } catch(err) {  
                setError(err);
            } finally {
                setLoading(false);
            }
        }

        getData();
    }, [])

    return {data, error, loading}
}