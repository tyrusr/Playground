// for getting multiple practice reps in

export default async function getData(params) {
    const csrfToken = "get from cookies";

    const response = await fetch('/route', {
        method:"PATCH",
        headers: {
            "Content-Type": "Application/json",
            "X-CSRF-Token": csrfToken,
        },
        credentials:"include",

        body: JSON.stringify({params})
    })

    if(!response.ok) {
        throw new Error("error in response");
    }

    const res = await response.json();

    return res;
}