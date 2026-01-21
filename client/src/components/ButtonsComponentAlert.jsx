
export default function AlertButton() {

    function handleClick() {
        alert("yes");
    }

    return (
        <button onClick={handleClick}>alert button</button>
    )
}
