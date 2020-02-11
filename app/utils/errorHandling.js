import keys from 'lodash/keys'

export const getErrorMessage = e => {
  const errData = e && e.response && e.response.data || {}
  const errKeys = keys(errData)
  if(errKeys) {
    const errorArr = errKeys.map(errKey => {
      return errData[errKey].join ? errData[errKey].join(' \n') : errData[errKey]
    })
    return errorArr.join ? errorArr.join(' \n') : errorArr
  }
}