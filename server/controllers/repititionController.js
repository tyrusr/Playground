// for getting multiple practice reps in

export default async function Example1(req,res,next) {
    const request = req.body();

    try {
        //logic goess here
        const sample = await sample();

        if (!sample.ok) {return res.status(404).json("yes");}
        
        return res.status(200).json({"yes"});
    } catch(err) {
        next(err);
    }
}