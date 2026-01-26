import { useEffect, useState } from "react";
// for getting multiple practice reps in

export default function useExample1() {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        try {   
            function getData(){
                setLoading(true);

                const res = sampleServicesCall();

                setData(res);
            }
        } catch(err) {
            setError(err);
        } finally {
            setLoading(false);
        }

        getData();
    }, []);

    return {data, error, loading};

};

const useExample2 = () => {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    function getData() {
        setLoading(true)
        try {
            const res = sampleServicesCall();

            setData(res);
        } catch(err) {
            setError(err);
        } finally {
            setLoading(false)
        }
    };

    useEffect(() => {
        getData();
    }, [])

    return {data, error, loading};

};

export default useExample2;

export function useExample3() {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const getData = () => {
            try {
                const res = sampleServicesCall();

                setData(res);
            } catch(err) {
                setError(err);
            } finally { 
                setLoading(false);
            }
        }

        getData();
    }, []);
};