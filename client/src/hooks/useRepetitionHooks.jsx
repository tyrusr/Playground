import { useEffect, useState } from "react";
// for getting multiple practice reps in

export default function useRep1() {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState([]);


    useEffect(() => {
        async function getData(params){
            setLoading(true);
            try {
                const response = "fetch response";
                setData(response);
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