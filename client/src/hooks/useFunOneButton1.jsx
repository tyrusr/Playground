import { useState } from "react";

export default function useFunOneButton1() {
    
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    async function getData() {
        setLoading(true);
        try {
            const response = await //sendRequest();
    
            setData(response);
        } catch(err) {
            setError(err);
        } finally {
            setLoading(false);
        }
    }

    return {data, error, loading, getData};   
}