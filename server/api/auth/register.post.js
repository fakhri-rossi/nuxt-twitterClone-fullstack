import { createUser, getUserByEmail, getUserByUsername } from "~/server/db/users";
import { userTransformer } from "~/server/transformers/users.js";

export default defineEventHandler(async (event) => {
  const body = await readBody(event);

  const { username, name, password, repeatPassword, email } = body;
  
  if(!username || !name || !password || !repeatPassword || !email){
    return createError({
      statusCode: 400,
      statusMessage: 'All fields have to be filled'
    })
  }

  if(password !== repeatPassword){
    return createError({
      statusCode: 400,
      statusMessage: 'Password does not match'
    })
  }

  // validasi unique username dan email
  const isEmailUsed = await getUserByEmail(email);
  const isUsernameUsed = await getUserByUsername(username);

  if(isEmailUsed){
    return createError({
      statusCode: 400,
      statusMessage: 'Email is used by another account. Choose another Email!'
    })
  }

  if(isUsernameUsed){
    return createError({
      statusCode: 400,
      statusMessage: 'Username is already taken. Choose another email!'
    })
  }

  const userData = {
    username,
    email,
    password,
    name,
    profileImage: 'https://picsum.photos/200/200'
  }

  const user = await createUser(userData);

  return {
    body: userTransformer(user)
  }
})
