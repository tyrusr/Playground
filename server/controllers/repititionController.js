// for getting multiple practice reps in

export async function Example1(req, res, next){
    const content = req.body;

    try {
        //logic goes here

        res.status().json();
    } catch(err){
        next(err);
    }
}

export async function Example2(req, res, next){
    const content = req.body;

    try {
        // logic goes here

        res.status().json();
    } catch(err) {
        //if username didnt match return a specific error code

        //if username didnt exist return a specific error code/message

        next(err);
    }
}
