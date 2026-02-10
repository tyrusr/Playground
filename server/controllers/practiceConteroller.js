export function handlePing(req, res, next) {
    const request = req.body;
    const pong = "pong";

    try{
        res.status(201).json({pong});
    } catch(err) {
        console.log(err);
    }
}
