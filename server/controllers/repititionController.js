// for getting multiple practice reps in

export async function Example1(req, res, next) {
    const params = req.body;

    try {
        // logic goes here

        res.status().json();
    } catch(err) {
        next(err);
    }
}