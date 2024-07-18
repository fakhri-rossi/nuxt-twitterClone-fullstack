import jwt from "jsonwebtoken";
const config = useRuntimeConfig();

const generateAccessToken = (user) => {
  
  return jwt.sign(
    { userId: user.id}, 
    config.jwt.accessSecret, 
    { expiresIn: '4h' })
}

const generateRefreshToken = (user) => {

  return jwt.sign(
    { userId: user.id}, 
    config.jwt.refreshSecret, 
    { expiresIn: '4h' })
}

export const decodeRefreshToken = (token) => {
  try {
    return jwt.verify(token, config.jwt.refreshSecret)
  } catch (error) {
    return null
  }
}

export const decodeAccessToken = (token) => {
  try {
    return jwt.verify(token, config.jwt.accessSecret)
  } catch (error) {
    return null
  }
}

export const generateToken = (user) => {
  const accessToken = generateAccessToken(user);
  const refreshToken = generateRefreshToken(user);

  return {
    accessToken,
    refreshToken
  }
}

export const sendRefreshToken = (event, token) => {
  setCookie(event, "refresh_token", token, {
    httpOnly: true,
    sameSite: true
  });
}