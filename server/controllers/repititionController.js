// for getting multiple practice reps in

export async function Rep1(req, res, next){
    const data = req.body;

    try {
        //logic goes here

        res.response().json();
    } catch(err) {
        next(err);
    }
}