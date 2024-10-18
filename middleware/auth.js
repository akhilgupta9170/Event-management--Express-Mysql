const jwt = require("jsonWebtoken");

exports.verifyToken = (req,res,next) => {
    const token = req.headers["authentcation"]?.split(" ")[1];
    if (!token) {
        return res.status(401).json({ error: "No token provided" });
    }
    jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
        if (err) {
            return res.status(403).json({ error: "Invalid token" });
        }
        req.user = decoded;
        next();
    })
};

exports.checkAdmin=(req,res,next)=>{
    if(!req.user.isAdmin){
        return res.status(403).json({error:"Unauthorized to perform this action"});
    }
    next();
}