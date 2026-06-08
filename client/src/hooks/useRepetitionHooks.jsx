import { useEffect, useState } from "react";
// for getting multiple practice reps in



export default function useRep1(params){
    [data, setData] = useState(null);
    [error, setError] = useState(null);
    [loading, setLoading] = useState(false);

    useEffect(()=> {
        async function getData(params){
            setLoading(true);
            try {
                const res = await sampleServices();
                setData(res);
            } catch(err) {
                setError(err);
            } finally {
                setLoading(false);
            }
        }

        getData();
    }, []);

    return { data, error, loading };
}