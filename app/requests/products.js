import service from './service'

export const getProductsApi = () => {
  return Promise.resolve({ data: JSON.parse(localStorage.getItem('products')) })
}

export const getProductByIdApi = id => {
  const productById = JSON.parse(localStorage.getItem('products')).filter(prod => prod.id === id)
  return Promise.resolve({ data: productById[0] })
}

export const addToCartApi = () => {
  return Promise.resolve({ status: 200 })
}

export const removeFromCartApi = () => {
  return Promise.resolve({ status: 200 })
}
