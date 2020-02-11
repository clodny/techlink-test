import service from './service'

export const getProductsApi = () => {
  return Promise.resolve({ data: JSON.parse(localStorage.getItem('products')) })
}

