export const useAuth = () => {
  const useAuthToken = () => useState('auth_token');
  const useAuthUser = () => useState('auth_user');

  const setToken = (newToken) => {
    useAuthToken().value = newToken;
  }

  const setUser = (newUser) => {
    useAuthUser().value = newUser;
  }



  const login = ({username, password}) => {

    return new Promise(async (resolve, reject) => {
      try {
        const data = await $fetch('/api/auth/login', {
          method: 'POST',
          body: {
            username,
            password
          }
        })
        console.log(data);
        setToken(data.access_token);
        setUser(data.user);

        resolve(true);

      } catch (err) {
        reject(err)

      }
    })
  }
  
  const refreshToken = () => {
    return new Promise(async (resolve, reject) => {
      try {
        const data = await $fetch('/api/auth/refresh');
        setToken(data.access_token) // data = access_token
        resolve(true);

      } catch (error) {
        reject(error)
      }
    })
  }

  const getUser = () => {
    return new Promise(async (resolve, reject) => {
      try {
        const data = await useFetchApi('/api/auth/user');

        setUser(data.user)
      } catch (error) {
        
      }
    })
  }

  const initAuth = () => {
    // alert('initAuth')
    return new Promise(async (resolve, reject) => {
      try {
        await refreshToken();
        await getUser();
        resolve(true);

      } catch (error) {
        reject(error)
      }
    })
  }

  return {
    login,
    useAuthUser,
    initAuth,
    useAuthToken
  }
}
