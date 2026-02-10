export function handlePing(req, res) {
    const pong = "pong";

    try{
        res.status(201).json({pong});
    } catch(err) {
        console.log(err);
    }
}
