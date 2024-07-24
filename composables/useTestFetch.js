class CustomError extends Error{
  constructor(message, statusCode){
    super();
    this.message = message;
    this.statusCode = statusCode;
  }
}

export const useTestFetch = async (path, opts = {}) => {
  const config = useRuntimeConfig();
  opts.baseURL = config.public.apiBase;

  const result = await useFetch(path, opts);

  if(result.status.value == 'success'){
    return result.data.value

  } else {
  
    throw new CustomError(
      result.error.value.data.message, result.error.value.statusCode
    )
  }
}