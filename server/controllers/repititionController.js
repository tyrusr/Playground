// for getting multiple practice reps in

export default function rep1(req, res, next) {
    const content = req.body;

    try {
        //logic goes here

        res.status(200).json()
    } catch(err) {
        next(err);
    }
}