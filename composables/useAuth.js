import jwtDecode from "jwt-decode";

export const useAuth = () => {
  const useAuthToken = () => useState('auth_token');
  const useAuthUser = () => useState('auth_user');
  const useAuthLoading = () => useState('auth_loading', () => true);

  const setToken = (newToken) => {
    useAuthToken().value = newToken;
  }

  const setUser = (newUser) => {
    useAuthUser().value = newUser;
  }

  const setAuthLoading = (newValue = Boolean) => {
    useAuthLoading().value = newValue;
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
        resolve(true);

      } catch (error) {
        reject(error)

      }
    })
  }

  const reRefreshAccessToken = () => {
    const authToken = useAuthToken().value;

    if(!authToken){
      return
    }

    const decodedToken = jwtDecode(authToken);

    const newRefreshTime = jwt.exp - 60000;

    setTimeout(async () => {
      await refreshToken();
      reRefreshAccessToken();
    }, newRefreshTime);

    console.log(decodedToken);
  }

  const initAuth = () => {
    setAuthLoading(true);
    console.log('auth loading true');
    return new Promise(async (resolve, reject) => {
      try {
        await refreshToken();
        await getUser();
        reRefreshAccessToken();
        resolve(true);

      } catch (error) {
        reject(error)

      } finally {
        setAuthLoading(false);
        console.log('auth loading false');
      }
    })
  }

  return {
    login,
    initAuth,
    useAuthUser,
    useAuthToken,
    useAuthLoading,
  }
}
