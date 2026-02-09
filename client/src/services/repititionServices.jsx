// for getting multiple practice reps in

export default async function Rep1(params) {
    const csrfToken = "get from cookies";

    try {
        const response = await fetch('/route', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "X-CSRF-Token": csrfToken,
            },
            credentials: "include",

            body: JSON.stringify({params})
        });

        if (!response.ok) throw new Error("response not ok");

        const res = await response.json();

        return res;

    } catch(err) {
        throw new Error(err);
    }
}