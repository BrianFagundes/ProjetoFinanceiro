const validate = (req, res, next) => {
    const {body} = req;

    if(body.title === undefined){
        return res.status(400).json({message: 'Missing title'});
    }
    if (body.title === ''){
        return res.status(400).json({message: 'Cannot find title'});
    }

    next();
};

module.exports = {
    validate
};