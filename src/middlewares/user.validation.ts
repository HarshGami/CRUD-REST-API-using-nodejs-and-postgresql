import joi from "joi";

const createValidation = joi.object({
     name: joi.string().alphanum().min(3).max(25).trim(true).required(),
     email: joi.string().email().trim(true).required(),
     password: joi.string().min(8).trim(true).required()
});

const updateValidation = joi.object({
    name: joi.string().alphanum().min(3).max(25).trim(true),
    email: joi.string().email().trim(true),
    password: joi.string().min(8).trim(true)
});

class Validator{

    async createValidation(req:any, res:any, next:any){
        const { error } = createValidation.validate(req.body);
        if (error) {
            res.status(406);
            return res.json({message:`Error in User Data : ${error.message}`});
        } else {
            next();
        }
    };
    
    async updatevalidation(req:any,res:any,next:any){
        const { error } = updateValidation.validate(req.body);
        if (error) {
            res.status(406);
            return res.json({message:`Error in User Data : ${error.message}`});
        } else {
            next();
        }
    }
}

export default new Validator();