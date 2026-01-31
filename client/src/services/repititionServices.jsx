// for getting multiple practice reps in

export default function Example1(params) {
    const csrfToken = "get from cookies";

    try {
        const response = fetch('/route', {
            method:"POST",
            headers: {
                "Content-Type": "application/json",
                "X-CSRF-Token": csrfToken,
            },
            credentials: "include",

            body: JSON.stringify(params)
        });

        if (!response.ok) throw new Error("response was not ok");

        return response;
    } catch(err) {
        throw new Error(err);
    }
};