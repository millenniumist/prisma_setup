const notFoundHandler = (_,res) => {
    res.status(404)
    res.json({
        message: "Route not found"
    })
}

module.exports = notFoundHandler