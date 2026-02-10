import usePracticeHook from "../hooks/usePracticeHook";

export default function ComponentSample() {
    const {data, error, loading, getData } = usePracticeHook();

    function handleClick() {
        getData();

        alert(data);
    }

    return (
        <>
            <button onClick={handleClick} disabled={loading}>
            {loading ? "Loading" : "Ping"}
                
            </button>
            {error && <h1>{error.message}</h1> }
        </>
    )
}
