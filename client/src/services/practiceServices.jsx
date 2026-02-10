export default async function sendRequest() {
    try {
        const response = await fetch('./ping', {
            method:"GET",
            headers: {
                "Content-Type": "application/json",
            }
        })

        if (!response.ok) throw new Error("response was not ok");

        return response.json();
    } catch (err) {
        console.log(err);
    }
}