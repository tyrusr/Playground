// for getting multiple practice reps in

export default function handleRequest(req, res, next){
    try{
        //logic goes here

        //get info from db 

        //if everything ok

        return res.status(200).json({"everything ok"})
    } catch(err) {
        next(err);
    }


}