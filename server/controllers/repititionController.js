// for getting multiple practice reps in

export default function example1(req, res, params) {
    
    try {
        const request = req.body;
        //logic goes here

        return res.status(200).body("yes");
    } catch(err) {
        return res.status(500).body("no");
    }
    
}