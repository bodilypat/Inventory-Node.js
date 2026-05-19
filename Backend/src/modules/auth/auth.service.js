// src/modules/auth/auth.service.js

const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const JWT_SECRET = process.env.JWT_SECRET || 'change_me_securely';
const JWT_EXPIRES_IN = process.env.JWT_EXPIRES_IN || '1d';

async function hashPassword(password) {
  return bcrypt.hash(password, 10);
}

async function verifyPassword(password, hashedPassword) {
  return bcrypt.compare(password, hashedPassword);
}

function generateToken(payload) {
  return jwt.sign(payload, JWT_SECRET, { expiresIn: JWT_EXPIRES_IN });
}

function verifyToken(token) {
  return jwt.verify(token, JWT_SECRET);
}

function getTokenFromHeader(authHeader) {
  if (!authHeader || typeof authHeader !== 'string') return null;
  const parts = authHeader.split(' ');
  if (parts.length !== 2 || parts[0] !== 'Bearer') return null;
  return parts[1];
}

module.exports = {
  hashPassword,
  verifyPassword,
  generateToken,
  verifyToken,
  getTokenFromHeader,
};

import User from "../users/user.model.js";

import { hashPassword, comparePassword }
from "../../utils/generateToken.js"

import { generateToken }
from "../../utils/generateToken.js";

import { ROLES }
from "../../constants/roles.js";

export const registerUser = async (payload) => {
    const { name, email, password, role } = payload;

    const existingUser = await User.findOne({ email });

    const user = await User.create({
        name,
        email,
        password: hashPassword,
        role: role || ROLES.STAFF 
    });

    const token = generateToken({
        id: user._id,
        role: user.role
    });

    return {
        user,
        token,
    };
};

export const loginUser = async (payload) => {
    const { email, password } = payload;

    const user = await User.findOne({ email });

    if (!user) {
        throw new Error("Invalid credentials");
    }

    const isPasswordMatched = 
        await comparePassword(password, user.password);

        if (!isPasswordMatched) {
            throw new Error("Invalid credentials");
        }

        const token = generateToken({
            id: user._id,
            role: user.role
        });

        return {
            user,
            token 
        };
    };

    




