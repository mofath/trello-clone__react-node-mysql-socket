exports.corsMiddleware = (req, res, next) => {
    console.log(`NEW REQUEST ${req.ip}`);
    console.log(`${req.method} ${req.url}`);
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
    if (req.method === 'OPTIONS') {
        res.header('Access-Control-Allow-Methods', 'GET,PUT,PATCH,POST,DELETE');
        return res.status(200).json({});
    }
    next();
};