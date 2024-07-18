import { userTransformer } from "~/server/transformers/users"

export default defineEventHandler((event) => {
    return{
        user: userTransformer( event.context.auth?.user )
    }
})