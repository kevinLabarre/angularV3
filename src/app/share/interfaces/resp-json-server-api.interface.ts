export interface ResponseApi<T> {
  data: T[],
  first: number,
  items: number,
  last: number,
  next: number | null,
  pages?: number,
  prev: number | null
}
