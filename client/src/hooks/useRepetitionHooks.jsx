import { useEffect, useState } from "react";
// for getting multiple practice reps in

export default function useExample1() {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        async function getData() {
            setLoading(true);
            try {
                const res = await sampleservicescall(params);

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