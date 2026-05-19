//src/modules/users/user.service.js 
import User from "./user.model.js";

export const createUser = async (payload) => {
    const user = await User.create(payload);

    return user;
};

export const getUsers = async () => {
    return await User.find().select("-password");
};

export const getUserById = async (id) => {
    return await User.findById(id).select("-password");
};

export const deleteUser = async (id) => {
    return await User.findByIdAndDelete(id);
};

