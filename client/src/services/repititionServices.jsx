// for getting multiple practice reps in

export default async function Example1(parameters) {
    const csrfToken = "get from cookies";

    const response = await fetch('/route', {
        method:"POST",
        headers: {
            "Content-Type": "application/json",
            "X-CSRF-Token": csrfToken,
        },
        credentials: "include",

        body: JSON.stringify({parameters})
    });

    if (!response.ok) throw new Error("response was not ok");

    const res = await response.json();

    return res;
}

export async function Example2(params){
    const csrfToken = "get from cookies";

    const response = await fetch('/route', {
        method:"PUSH",
        headers: {
            "Content-Type": "application/json",
            "X-CSRF-Token": csrfToken,
        },
        credentials:"include",

        body: JSON.stringify({params})
    });

    if (!response.ok) throw new Error("response was not ok");

    const res = await response.json();

    return res;
}

export async function Example3(params){
    const csrfToken = "get from cookies";

    const response = await fetch('/route', {
        method:"DELETE",
        headers:{
            "Content-Type": "Application/json",
            "X-CSRF-Token": csrfToken,
        },
        credentials:"include",

        body: JSON.stringify({params})
    });

    if (!response.ok) throw new Error("response was not ok");

    const res = await response.json();

    return res;
}

export async function Example4(params){
    const csrfToken = "get from cookies";

    const response = await fetch('/route', {
        method:"PUT",
        headers:{
            "Content-Type": "Application/json",
            "X-CSRF-Token":csrfToken,
        },
        credentials:"include",

        body: JSON.stringify({params})
    });

    if (!response.ok) throw new Error ("response was not ok");

    const res = await response.json();

    return res;
}

export async function Example5(params){
    const csrfToken = "get from cookies";

    const response = await fetch('/route', {
        method:"GET",
        headers:{
            "Content-Type": "Application/json",
            "X-CSRF-Token":csrfToken,
        },
        credentials:"include",

        body: JSON.stringify({params})
    });

    if (!response.ok) throw new Error ("response was not ok");

    const res = await response.json();

    return res;
}