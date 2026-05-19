//src/modules/auth/auth.model.js 
import mongoose from "mongoose";

const authSchema = new mongoose.Schema(
    { 
        refreshToken: {
            type: String, 
            default: null
        },

        passwordResetToken: {
            type: String,
            default: null
        },

        passwordResetExpires: {
            type: Date,
            default: null
        },

        emailVerificationToken: {
            type: String,
            default: null
        },

        isEmailVerified: {
            type: Boolean,
            default: false 
        },

        twoFactorEnabled: {
            type: Boolean,
            default: false
        }
    },

    {
        temestamp: true 
    }
);

const Auth = mongoose.model("Auth", authSchema);

export default Auth;

