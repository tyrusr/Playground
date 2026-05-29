export async function sendRequest() {
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
        throw err;
    }
}


export async function ping() {
    try {
        const response = await fetch('', {
            method:"GET:",
            headers: {
                "Content-Type": "application/json",
            }
        })

        if (!response.ok) throw new Error("response was not ok");

        return response.json();
    } catch (err) {
        throw err;      
    }
}