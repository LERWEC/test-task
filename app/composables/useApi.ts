export const useApi = () => {
  const config = useRuntimeConfig()
  
  return {
    get: <T>(url: string, options = {}): Promise<T> => $fetch(config.public.apiBase + url, { ...options }),
  }
}