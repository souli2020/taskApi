const errorHandler = (error, req, res, next) => {
    // return res.status(500).json({ msg: error })
    //OR a xustom error msg 

    return res.status(500).json({ msg: "Something went wrong" })



}

module.exports = errorHandler