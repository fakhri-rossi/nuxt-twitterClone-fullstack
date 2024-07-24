import { removeRefreshToken } from "~/server/db/refreshTokens";

export default defineEventHandler(async (event) => {
  try {
    const refreshTokenCookie = getCookie(event, 'refresh_token');
    await removeRefreshToken(refreshTokenCookie);
    
  } catch (error) {
    console.log(error);
  }
  
  sendRefreshToken(event, null);

  return {
      message: 'Logout done!'
  }
  
})

