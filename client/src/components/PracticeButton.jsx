import usePracticeHook from "../hooks/usePracticeHook";
import getData from "../hooks/usePracticeHook";

export default function ComponentSample() {
    const {data, error, loading } = usePracticeHook();

    function handleClick() {
        getData();

        alert(data);
    }

    return (
        <button onClick={handleClick}>Ping</button>
    )
}
