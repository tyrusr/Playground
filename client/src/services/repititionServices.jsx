// for getting multiple practice reps in

export default function rep1(params){
    const csrfToken = "csrftoken goes here";

    try {
        const res = await fetch('/route', {
        method:'POST',

        header:{
            "Content-Type":"Application-Json",
            "X-CSRF-Token": csrfToken, 
        },
        credentials:"include",

        body: JSON.stringify(params)
        });

        if (!res) {
            throw new Error("error with response");
        }

        return await res.json();
    } catch (err) {
        throw new Error("error");
    }

    
}