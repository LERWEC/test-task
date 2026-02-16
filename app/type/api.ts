export interface IApiProducts<T> {
  products: T[]
  currentPage: number
  limit: number 
  totalPages: number
}