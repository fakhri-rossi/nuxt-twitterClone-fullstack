import jwtDecode from "jwt-decode";
// import jwt from "jsonwebtoken";

export const useAuth = () => {
  const useAuthToken = () => useState('auth_token');
  const useAuthUser = () => useState('auth_user');
  const useAuthLoading = () => useState('auth_loading', () => true);

  const { turnOnAlert, turnOffAlert } = useAlert();

  const setToken = (newToken) => {
    useAuthToken().value = newToken;
  }

  const setUser = (newUser) => {
    useAuthUser().value = newUser;
  }

  const setAuthLoading = (newValue = Boolean) => {
    useAuthLoading().value = newValue;
  }


  const login = async ({username, password}) => {

    return new Promise(async (resolve, reject) => {
      try {
        turnOffAlert();
        const data = await useTestFetch('/api/auth/login', {
          method: 'POST',
          body: {
            username,
            password
          }
        })
        setToken(data.access_token);
        setUser(data.user);

        resolve(true);

      } catch (err) {
        turnOnAlert(err.message, '', 'danger')
        reject(err)

      }
    })
  }

  const register = async ({username, password, repeatPassword, email, name}) => {
    return new Promise(async (resolve, reject) => {
      turnOffAlert();
      try {
        const data = await useTestFetch('/api/auth/register', {
          method: 'POST',
          body: {
            username,
            password,
            repeatPassword,
            email,
            name
          }
        })
        // console.log(data);
        turnOnAlert('Register Berhasil!', 'Silahkan login dengan akun Anda!', 'success')
        resolve(data);

      } catch (err) {
        turnOnAlert(err.message, '', 'danger')
        reject(err);
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
      }
    })
  }

  const logout = () => {
    return new Promise( async (resolve, reject) => {
      try {
        await useFetchApi('/api/auth/logout', {
          method: 'post'
        });
        setToken(null);
        setUser(null);
        resolve(true);

      } catch (error) {
        reject(error);
      }
    })
  }

  return {
    login,
    register,
    initAuth,
    useAuthUser,
    useAuthToken,
    useAuthLoading,
    logout
  }
}
