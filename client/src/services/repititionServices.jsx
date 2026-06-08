// for getting multiple practice reps in

export default async function rep1(params){
    const csrfToken = "get from cookies";

    try {
        const res = await fetch('/route', {
            headers:{
                "Content-Type":"Application/json",
                "X-CSRF-Token": csrfToken,
            },
            credentials:'include',

            body: JSON.stringify(params)
        })

        return res;
    } catch(err) {
        return err;
    }
    

}