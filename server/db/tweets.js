import { prisma } from ".";

export const createTweet = (tweetData) => {
    return prisma.tweet.create({
        data: tweetData
    })
}

export const findTweets = (params = {}) => {
    return prisma.tweet.findMany({
        ...params
    })
}

export const findTweetById = (tweetId, params = {}) => {
    return prisma.tweet.findUnique({
        where: {
            ...params.where,
            id: tweetId
        },
        ...params
    })
}