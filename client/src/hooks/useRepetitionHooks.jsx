import { useEffect, useState } from "react";
// for getting multiple practice reps in

export default function useRep1(params) {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        async function getData() {
            setLoading(true);
            try {
                const response = await servicescall();

                setData(response);
            } catch(err) {
                setError(err);
            } finally {
                setLoading(false);
            }
        }

        getData();
     }, []);

     return {data, error, loading};
}