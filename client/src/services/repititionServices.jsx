// for getting multiple practice reps in

export default async function Example1(params) {
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
};

export async function Example2(params) {
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
};

const Example3 = async (params) => {
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

        const res = await response.json();

        return res;
    } catch(err) {
        throw new Error(err);
    }
};

export { Example3 }

export default async function Example4(params) {
    const csrfToken = "get grom cookies";

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

        if (!response.ok) {
            throw new Error("response not ok")
        };

        const res = await response.json();

        return res;
    } catch(err) {
        throw new Error(err);
    }
};

export async function Example5(params) {
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
};