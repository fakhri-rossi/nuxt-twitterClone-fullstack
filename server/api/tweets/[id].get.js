import { findTweetById } from "~/server/db/tweets";
import { tweetTransformer } from "~/server/transformers/tweet";

export default defineEventHandler(async (event) => {
  const { id } = event.context.params;

  const result = await findTweetById(id, {
    include: {
      author: true,
      mediaFiles: true,
      replyTo: {
        include: {
          author: true
        }
      },
      replies: {
        include: {
          author: true,
          replyTo: {
            include: {
              author: true
            }
          }
        }
      }
    }
  });

  return {
    tweet: tweetTransformer(result)
  }
})
