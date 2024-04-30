export const verifyToken = (req, res, next) => {
    const token = req.headers('Authorization')
    console.log(token)
    if (!token) {
        res.send({ result: 'Please provide a valid token' })
    } else {
        next()
    }

}