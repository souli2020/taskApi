const tryWrapper = (fn) => async (req, res, next) => {
    try {
        await fn(req, res, next)
    } catch (error) {

        res.status(500).json({ msg: error })
    }
}

module.exports = tryWrapper