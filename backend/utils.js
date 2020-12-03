
import jwt from "jsonwebtoken"

export const generateToken=(user)=>{
    return jwt.sign(
        {
            _id: user._id,
            name:user.name,
            email:user.email,
            isSdmin:user.isAdmin,
        },
        process.env.JWT_SECRET || 'somethingIsNotHere',
        {
            expiresIn: "30d"
        }
    )
}