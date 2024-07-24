import UrlPattern from "url-pattern"
import { decodeAccessToken } from "../utils/jwt";
import { getUserById } from "../db/users";

export default defineEventHandler(async (event) => {
  const endPoints = [
    '/api/auth/user',
    '/api/user/tweets',
    '/api/tweets',
    '/api/tweets/:id'
  ]

  const isHandledByThisMiddleware = endPoints.some(endpoint => {
    const pattern = new UrlPattern(endpoint);

    return pattern.match(event.path);
  })

  if(!isHandledByThisMiddleware){
    return
  }

  const token = event.headers.get('authorization')?.split(' ')[1];

  const decoded = await decodeAccessToken(token);

  if(!decoded){
    return createError({
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
