// for getting multiple practice reps in

export async function Example1(params) {
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
        })

        if (!response.ok) throw new Error("response not ok");

        const res = await response.body()

        return res;
    } catch(err) {
        throw new Error(err);
    }
};

const Example2 = async (params) => {
    const csrfToken = "get from cookies";

    try {
        const response = await fetch('/route', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "X-CSRF-Type": csrfToken,
            },
            credentials: "include",

            body: JSON.stringify({params})
        });

        if (!response.ok) throw new Error ("response not ok");

        const res = await response.body();

        return res;

    } catch(err) {
        throw new Error(err);
    }
};

export default Example2;

export async function Example3(params) {
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

        if (!response.ok) throw new Error ("response was not ok");

        const res = await response.body();

        return res;

    } catch(err) {
        throw new Error(err);
    }
};

export async function Example4(params) {
    const csrfToken = "get from cookies";

    try {
        const response = await fetch('/route', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "X-CSRF-Type": csrfToken,
            },
            credentials: "include",

            body: JSON.stringify({params})
        });

        if (!response.ok) throw new Error ("response was not ok");

        const res = await response.json();

        return res;
    } catch(err) {
        throw new Error (err);
    }
};

export async function Example5() {
    const csrfToken = "get from cookies";

    try {
        const resposne = await fetch('/route', {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "X-CSRF-Token": csrfToken,
            },
            credentials: "include",
        });

        if (!response.ok) throw new Error ("response was not ok");

        const res = await resposne.json();

        return res;
    } catch(err) {
        throw new Error (err);
    }
};