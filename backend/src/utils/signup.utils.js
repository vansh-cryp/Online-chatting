import jwt from "jsonwebtoken";
export const genrateToken = (userId,res) =>{
    const token =  jwt.sign({userId},process.env.JWT_SECRET,{
        expiresIn: "7d"
    })

    res.cookie("jwt",token,{
        maxAge : 7*24*60*60*1000,
        //prevent an XSS attack
        httpOnly: true,
        sameSite:"strict",//CSRF attacks are prevented
        secure:process.env.NODE_ENV !== "development",//shifts to https if true if on local host then http
    })

    return token;
}

// this function generates a token and send it to the user in a http only cookies