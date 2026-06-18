import { useEffect, useState } from "react";
// for getting multiple practice reps in


export default function useRep1(params) {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {

        async function getData(params){ 
            setLoading(true);
            try{
                const res = await sampleServicesCall(params);
                setData(res);
                
            } catch(err) {
                setError(err);
            } finally {
                setLoading(False);
            }
        }

        
        getData(params)
        
    },[]);

    return { data, error, loading }
}



export default function useRep2(params) {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    async function getData(params){
        setLoading(true);
        try {
            const res = await sampleServicesCall(params);
            setData(res);
        } catch(err) {
            setError(err);
        } finally {
            setLoading(false);
        }
    }
    
    return { data, error, loading, getData }
}

const useRep3 = () => {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    async function getData(params){
        setLoading(true);
        try {
            const res = await sampleServicesCall(params);
            setData(res);
        } catch(err) {
            setError(err);
        } finally {
            setLoading(false);
        }
    }
    
    return { data, error, loading, getData }
}

export default {useRep3};
