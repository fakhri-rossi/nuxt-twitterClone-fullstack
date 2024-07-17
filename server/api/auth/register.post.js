import { createUser } from "~/server/db/users";
import { userTransformer } from "~/server/transformers/users.js";

export default defineEventHandler(async (event) => {
  const body = await readBody(event);

  const { username, name, password, repeatPassword, email } = body;
  
  if(!username || !name || !password || !repeatPassword || !email){
    throw createError({
      statusCode: 400,
      statusMessage: 'All fields have to be filled'
    })
  }

  if(password !== repeatPassword){
    throw createError({
      statusCode: 400,
      statusMessage: 'Password do not match'
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
