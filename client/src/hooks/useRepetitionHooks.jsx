import { useEffect, useState } from "react";
// for getting multiple practice reps in

export default function useExample1() {
    const [data, setData] = useState(null);

    return {
        data,
        setData
    };
}

export function useExample2() {
    const [data, setData] = useState(null);

    return {
        data,
        setData
    };
}

const useExample3 = () => {
    const [data, setData] = useState(null);

    return {
        data,
        setData
    };
}

export default useExample3;

export default function useExample4() {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    async function getData(){
        setLoading(true);

        try{
            const res = await sampleservicescall();
            setData(res);
        } catch(err) {
            setError(err);
        } finally {
            setLoading(false);
        }
    };

    return { data, error, loading, getData}

}


const useExample5 = () => {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const getData = async () => {
            try{
                const res = await sampleservicescall();
                setData(res);
            } catch(err) {
                setError(err);
            } finally {
                setLoading(false);
            }
        }

        getData();
    }, []);

    return { data, error, loading}
}

export function useExample6() {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    const getData = async () => {
        try{
            const res = await sampleservicescall();
            setData(res);
        } catch(err) {
            setError(err);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        getData();
    }, []);

    return { data, error, loading, getData}
}