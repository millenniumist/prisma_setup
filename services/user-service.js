const prisma = require("../config/prisma");

exports.getUserByEmail = async (email) => {
    const user = await prisma.user.findFirst({
        where: {
            email,
        },
    });
    return user;
}


exports.getUserById = async (id) => {
    const user = await prisma.user.findFirst({
        where: {
            id: id,
        },
    });
    return user;
}