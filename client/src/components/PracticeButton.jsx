import usePracticeHook from "../hooks/usePracticeHook";

export default function ComponentSample() {
    const {data, error, loading, getData } = usePracticeHook();

    function handleClick() {
        getData();

        alert(data);
    }

    return (
        <button onClick={handleClick}>Ping</button>
    )
}
