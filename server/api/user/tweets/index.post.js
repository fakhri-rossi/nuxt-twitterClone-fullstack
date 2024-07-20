import formidable from "formidable";
import { createMediaFile } from "~/server/db/mediaFiles";
import { createTweet } from "~/server/db/tweets";
import { tweetTransformer } from "~/server/transformers/tweet";

export default defineEventHandler(async (event) => {
  const form = formidable({});

  const response = await new Promise((resolve, reject) => {
    form.parse(event.node.req, (err, fields, files) => {
      if(err){
        reject(err)
      }
      resolve({ fields, files });
    })
  })

  const { fields, files } = response;
  const userId = event.context?.auth?.user?.id;

  // const text = typeof(fields.text.text);
  // console.log(text);

  const tweetData = {
    text: fields.text[0],
    authorId: userId
  }

  const tweet = await createTweet(tweetData);

  const filePromises = Object.keys(files).map(async key => {
    const file = files[key]

    // const response = await uploadToCloudinary(file.filepath)
    const cloudinaryResource = await uploadToCloudinary('testImage/pemandangan.jpg');

    console.log(file.filepath);
    console.log(cloudinaryResource);

    return createMediaFile({
      url: cloudinaryResource.secure_url,
      providerPublicId: cloudinaryResource.public_id,
      userId: userId,
      tweetId: tweet.id
    })
  })

  await Promise.all(filePromises);

  return {
    // files
    tweet: tweetTransformer(tweet),
    files,
    // tweetData: tweetTransformer(tweetData)
  }
})
