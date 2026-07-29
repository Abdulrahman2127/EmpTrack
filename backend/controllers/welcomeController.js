

export const getWelcome  = (req, res) => {
    res.status(200).json({message: "Welcome to Mini MERN Backend"})
}