import UrlPattern from "url-pattern"
import { decodeAccessToken } from "../utils/jwt";
import { getUserById } from "../db/users";
// import { useCookie } from "nuxt/app";
// import { useCookie } from "nuxt/app";

export default defineEventHandler(async (event) => {
  const endPoints = [
    '/api/auth/user'
  ]

  // const isHandledByThisMiddleware = () => {
  //   return endPoints.includes(event.path)
  // }
  const isHandledByThisMiddleware = endPoints.some(endpoint => {
    const pattern = new UrlPattern(endpoint);

    return pattern.match(event.path);
  })

  if(!isHandledByThisMiddleware){
    return
  }

  const token = event.headers.get('authorization').split(' ')[1];
  console.log(token);

  const decoded = await decodeAccessToken(token);

  if(!decoded){
    throw createError({
      statusCode: 401,
      statusMessage: 'Unauthorizedddd'
    })
  }

  try {
    const userId = decoded.userId;
    const user = await getUserById(userId);
    event.context.auth = { user };

  } catch (error) {
    return
  }

})
