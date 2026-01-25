// for getting multiple practice reps in

export async function Example1(parameters) {
    const csrfToken = "import from cookies";

    try{
        const response = await fetch('/route', {
            method: "POST",
            headers:{
                "Content-Type": "application/json",
                "X-CSRF-Token": csrfToken,
            },
            credentials: 'include',

            body: JSON.stringify({parameters})
        });

        if (!response.ok) throw new Error("response was not ok");

        const res = await response.json();

        return res;
    } catch(err) {
        throw new Error(err);
    }
};

export async function Example1(parameters) {
    const csrfToken = "import from cookies";

    try {
        const response = await fetch('/route',{
            method: 'POST',
            headers:{
                "Content-Type": "application/json",
                "X-CSRF-Token": csrfToken,
            }, 
            credentials: "include",
            body: JSON.stringify({parameters})
        });

        if (!response.ok) throw new Error("response was not ok");

        const res = await response.json();

        return res;
    } catch(err) {
        throw new Error(err);
    }
};

export async function Example3(params) {
    const csrfToken = "get token from cookies";

    try{
        const response = await fetch('/route', {
            method: "POST",
            headers:{
                "Content-Type": "application/json",
                "X-CSRF-Token": csrfToken,
            },
            credentials: "include",

            body: JSON.stringify({params})
        })

        if(!response.ok) throw new Error ("response was not ok");

        const res = await response.json();

        return res;
    } catch(err) {
        throw new Error (err);
    }
};

export async function Example4(params) {
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

        if (!response.ok) throw new Error ("response not ok");

        const res = await response.json();

        return res;
    } catch(err) {
        throw new Error(err);
    }
};

const Example5 = async (params) => {
    const csrfToken = "get from cookies";

    try {
       const response = await fetch("/route", {
        method: "POST",
        headers:{
            "Content-Type": "application/json",
            "X-CSRF-Token": csrfToken,
        },
        credentials: "include",

        body: JSON.stringify({params})
       });
       
       if (!response.ok) {
        throw new Error ("response was not ok")
       };

       const res = response.json();

       return res;
    } catch(err) {
        throw new Error (err);
    }
};