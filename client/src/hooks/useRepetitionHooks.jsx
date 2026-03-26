import { useEffect, useState } from "react";
// for getting multiple practice reps in

export default function useExample(params) {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);


    useEffect(()=> {
        setLoading(true);

        async function getData(params) {
            try {
                const response = await servicesCall(params);
                
                setData(response);
            } catch(err) {
                setError(err);
            } finally {
                setLoading(false);
            }
        };

        getData(params);

    }, [])
    
    return { data, error, loading };
}