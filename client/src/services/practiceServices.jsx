export default async function sendRequest() {
    try {
        const response = await fetch('./ping', {
            method:"GET",
            headers: {
                "Content-Type": "application/json",
            }
        })

        if (!response.ok) {
            console.log("response was not ok from sendRequest");
        }

        return response.json();
    } catch (err) {
        console.log(err);
    }
}