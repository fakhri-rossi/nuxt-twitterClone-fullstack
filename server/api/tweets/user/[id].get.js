import { getUserById } from "~/server/db/users";
import { tweetTransformer } from "~/server/transformers/tweet";

export default defineEventHandler(async (event) => {
  const { id } = event.context.params;

  const result = await getUserById( id , {
    include: {
      tweet: {
        include: {
          author: true,
          mediaFiles: true,
          replies: {
            include: {
              author: true
            }
          },
          replyTo: {
            include: {
              author: true,
            }
          }
        },
        orderBy: [
          {
            createdAt: "desc"
          }
        ]
      }
    }
  })

  return {
    tweets: result.tweet.map(tweetTransformer)
  }
})
