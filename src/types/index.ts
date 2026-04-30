export interface Product {
  id: number
  title: string
  price: number
  thumbnail: string
  category: string
}

export interface ApiResponse {
  products: RawProduct[]
  total: number
  skip: number
  limit: number
}

export interface RawProduct {
  id: number
  title: string
  price: number
  thumbnail: string
  category: string
}