export function handlePing(req, res) {
    const pong = "pong";

    try{
        res.status(200).json({pong});
    } catch(err) {
        console.log(err);
    }
}
