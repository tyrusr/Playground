import { useEffect, useState } from "react";
// for getting multiple practice reps in

export default function useRep1() {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState();

    useEffect(() => {
        setLoading(true);
        const getData = async () => {
            try {
                const res = await sampleservicescall();
                setData(res);
            } catch(err) {
                setError(err);
            } finally {
                setLoading(false);
            }
        }

        getData();
    }, []);

    return {
        data,
        loading,
        error,
        getData
    }
}

export function useRep2() {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState();

    useEffect(() => {
        setLoading(true);
        const getData = async () => {
            try {
                const res = await sampleservicescall();
                setData(res);
            } catch(err) {
                setError(err);
            } finally {
                setLoading(false);
            }
        }

        getData();
    }, []);

    return {
        data,
        loading,
        error,
        getData
    }
}

const useRep1 = () => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState();

    useEffect(() => {
        setLoading(true);
        const getData = async () => {
            try {
                const res = await sampleservicescall();
                setData(res);
            } catch(err) {
                setError(err);
            } finally {
                setLoading(false);
            }
        }

        getData();
    }, []);

    return {
        data, error, loading, getData
    }
}
 