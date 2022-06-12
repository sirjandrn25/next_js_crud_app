export const isEmpty = (value) => (value ? false : 'this field may not be empty')
export const isEmail = (value) => {
  let emptyCheck = isEmpty(value)
  return emptyCheck ? emptyCheck : !value.includes('@') && 'this field may need @ '
}

export const isPassword = (value) => {
  let emptyCheck = isEmpty(value)
  return emptyCheck ? emptyCheck : value.length < 8 && 'at least 8 charecters required!!'
}

export const titleOptions = ['mr', 'mrs', 'miss', 'misses']
export const rollOptions = ['user', 'admin']
