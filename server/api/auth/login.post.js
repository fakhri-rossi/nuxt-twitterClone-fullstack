import { getUserByUsername } from "~/server/db/users.js";
import { userTransformer } from "~/server/transformers/users";
import bcrypt from "bcrypt";
import bcryptjs from "bcryptjs";
import { createRefreshToken } from "~/server/db/refreshTokens";
import { sendRefreshToken } from "~/server/utils/jwt";
// import { generateToken } from "~/server/utils/jwt.js";

export default defineEventHandler(async (event) => {
  const { username, password } = await readBody(event);

  if(!username || !password) {
    return createError({
      statusCode: 400,
      statusMessage: 'Invalid params'
    })
  }

  const user = await getUserByUsername(username);
  
  // is the user registered?
  if(!user){
    return createError({
      statusCode: 400,
      statusMessage: 'Username is not registered'
    })
  }

  // compare pw
  if(!bcryptjs.compareSync(password, user.password)){
    return createError({
      statusCode: 400,
      statusMessage: 'Password incorrect'
    })
  }

  // generate token
  const { accessToken, refreshToken } = generateToken(user);

  // save it inside db
  await createRefreshToken({
    token: refreshToken,
    userId: user.id
  })

  // add http only cookie
  sendRefreshToken(event, refreshToken);
  
  return {
    access_token: accessToken,
    user: userTransformer(user)
  }

})
