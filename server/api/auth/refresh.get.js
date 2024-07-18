// import { useCookie } from "nuxt/app"

import { getRefreshTokenByToken } from "~/server/db/refreshTokens"
import { getUserById } from "~/server/db/users";
import { userTransformer } from "~/server/transformers/users";
import { decodeRefreshToken } from "~/server/utils/jwt";

export default defineEventHandler(async (event) => {
    const refreshToken = getCookie(event, 'refresh_token')

    if(!refreshToken){
        throw createError({
            statusCode: 401,
            statusMessage: 'refresh_token is invalid'
        })
    }

    const newRefreshToken = await getRefreshTokenByToken(refreshToken);

    if(!newRefreshToken){
        throw createError({
            statusCode: 401,
            statusMessage: 'refresh_token is invalid'
        })
    }

    const token = decodeRefreshToken(refreshToken);

    try {
        const user = await getUserById(token.userId)
        const { accessToken } = generateToken(user);
        return { access_token: accessToken }
    } catch (error) {
        throw createError({
            statusCode: 500,
            statusMessage: 'Something went wrong'
        })
    }
})