export default () => {
  const usePostTweetModal = () => useState('post_tweet_modal', () => false)
  const useReplyTweet = () => useState('reply_tweet', () => null)

  const setReplyTo = (tweet) => {
    useReplyTweet().value = tweet;
  }

  const closePostTweetModal = () => {
    usePostTweetModal().value = false;
  }

  const openPostTweetModal = (tweet = null) => {
    usePostTweetModal().value = true;
    setReplyTo(tweet);

  }

  const redirectToTweetId = (tweetId = String) => {
    navigateTo(`/status/${tweetId}`);
  }

  const postTweet = (formData) => {
    
    const form = new FormData();
    form.append('text', formData.text);
    form.append('replyTo', formData.replyTo)
    
    formData.mediaFiles.forEach((mediaFile, index) => {
      form.append('media_file_' + index, mediaFile);
    })
    
    return useFetchApi('/api/user/tweets', {
      method: 'POST',
      body: form
    })
  }
  
  const getTweets = (params = {}) => {
    return new Promise( async(resolve, reject) => {
      try {
        const response = await useFetchApi('/api/tweets', {
          method: 'GET',
          params
        })
        resolve(response);

      } catch (error) {
        console.log(error);
        reject(error);
      }
    })
  }

  const getTweetById = (tweetId) => {
    return new Promise( async (resolve, reject) => {
      try {
        const response = await useFetchApi(`/api/tweets/${tweetId}`, {
          method: 'GET'
        })
        resolve(response);

      } catch (error) {
        reject(error);
        
      }
    })
  }

  return {
    postTweet,
    getTweets,
    getTweetById,
    redirectToTweetId,
    usePostTweetModal,
    closePostTweetModal,
    openPostTweetModal,
    useReplyTweet
  }
}
