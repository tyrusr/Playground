import { useEffect, useState } from "react";
// for getting multiple practice reps in


export default function useRep1(params){
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    useEffect(()=> {
        setLoading(true);
        async function getData(params){
            try {
                const data = await sampleServicesCall(params);

                setData(data);
            } catch(err) {
                setError(err);
            } finally {
                setLoading(false);
            }
        }

        getData(params);
    }, [])

    return { data, error, loading };
}

export function useRep2(params){
    const[data, setData] = useState(null);
    const[error, setError] = useState(null);
    const[loading, setLoading] = useState(false);

    async function getData(params){
        setLoading(true);

        try{
            const data = await sampleServicesCall(params);

            setData(data);
        } catch(err) {
            setError(err);
        } finally {
            setLoading(false);
        }
    }

    return { data, error, loading, getData }
}

const useRep3 = (params) => {
    const[data, setData] = useState(null);
    const[error, setError] = useState(null);
    const[loading, setLoading] = useState(false);

    const getData = async (params) => {
        setLoading(true);

        try {
            const data = await sampleServicesCall(params);

            setData(data);
        } catch(err) {
            setError(err);
        } finally {
            setLoading(false);
        }
    }

    return { data, error, loading, getData };
}

export default { useRep3 };