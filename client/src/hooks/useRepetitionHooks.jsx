import { useEffect, useState } from "react";
// for getting multiple practice reps in

export default function useGetData(){
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        async function getData(params) {
            try {
                const res = services();

                setData(res);
            } catch(err) {
                setError(err);
            } finally {
                setLoading(false);
            }
        }

        getData();
        
    }, []);

    return {data, error, loading}

}