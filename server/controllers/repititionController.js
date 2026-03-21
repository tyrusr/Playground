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

export async function Exapmle2(req, res, next) {
    const request = req.body.field();

    try {
        //logic goes here
        const dbcall = "get from db";

        return res.status(200).json({dbcall});
    } catch(err) {
        next(err);
    }
}

const Example3 = async (req,res,next) => {
    const request = req.body.field();

    try {
        //logic goes here

        return res.status(200)
    } catch(err) {
        next(err);
    }
}