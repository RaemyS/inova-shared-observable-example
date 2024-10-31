export interface ApiResponse {
  id: number,
  title: string,
  body: string,
  userId: number
}

export const httpRequestUrl = 'https://jsonplaceholder.typicode.com/posts/1'
