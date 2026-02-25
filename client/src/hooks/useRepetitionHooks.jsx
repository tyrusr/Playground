import { useEffect, useState } from "react";
// for getting multiple practice reps in

export default function useExample1(params) {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        async function getData(params){
            setLoading(true);

            try {
                const response = sampleServicesCall(params);
                setData(response);
            } catch(err) {
                setError(err);
            } finally {
                setLoading(true);
            }
        }

        getData(params);
    }, []);

    return {data, error, loading};
}

export function useExample2(params) {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        async function getData(params){
            setLoading(true);

            try {
                const response = services(params);
                setData(response);
            } catch(err) {
                setError(err);
            } finally {
                setLoading(true);
            }
        }

        getData(params);
    }, []);

    return {data, error, loading};
}

const useExample3 = (params) => {
    const [data, setData] = useState(null);
    const [error, setError] = useEffect(null);
    const [loading, setLoading] = useEffect(false);

    useEffect(() => {
        async function getData(params){
            setLoading(true);
        
            try {
                const response = services(params);
                setData(response);
            } catch(err) {
                setError(err);
            } finally {
                setLoading(true);
            }
        }

        getData(params);
    }, []);

    return {data, error, loading};
}

export default function useExample3;

export function useExample4(params){
    const [data, setData] = useState(null);
    const [error, setError] = useEffect(null);
    const [loading, setLoading] = useEffect(false);

    useEffect(() => {
        async function getData(params){
            setLoading(true);

            try {
                const response = services(params);
                setData(response);
            } catch(err) {
                setError(err);
            } finally {
                setLoading(false);
            }
        }

        getData(params);
    }, []);

    return {data, error, loading};
}

const useExample5 = (params) => {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        async function getData(params){
            setLoading(true);

            try {
                const response = services(params);
                setData(response);
            } catch(err) {
                setError(err);
            } finally {
                setLoading(false);
            }
        }

        getData(params);
    }, []);

    return {data, error, loading};
}

export default function useExample5;