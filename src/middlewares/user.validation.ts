import joi from "joi";
import passwordComplexity from "joi-password-complexity";

const createDtoValidation = joi.object({
     name: joi.string().alphanum().min(3).max(25).trim(true).required(),
     email: joi.string().email().trim(true).required(),
     password: passwordComplexity()
});

const updateDtoValidation = joi.object({
    name: joi.string().alphanum().min(3).max(25).trim(true).required()
});

class UserValidator{
    async create(req:any, res:any, next:any){
        const { error } = createDtoValidation.validate(req.body);
        if (error) {
            res.status(406);
            return res.json({message:`Error in User Data : ${error.message}`});
        } else {
            next();
        }
    };
    
    async update(req:any,res:any,next:any){
        const { error } = updateDtoValidation.validate(req.body);
        if (error) {
            res.status(406);
            return res.json({message:`Error in User Data : ${error.message}`});
        } else {
            next();
        }
    }
}

export default new UserValidator();