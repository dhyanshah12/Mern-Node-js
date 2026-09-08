const zodeMiddleware = (schema)=>(req,res,next)=>{

    try {
        
    } catch (err)
     {
        res.status(400).json({
            message:"invalid request",
            err:err
        })    
    }
}

module.exports = zodeMiddleware