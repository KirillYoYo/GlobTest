export const loginRequest = (log: string, pass: string) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (log === 'admin' && pass === 'admin') {
        resolve({user: 'admin'})
      } else {
        reject({message: 'no valid user'})
      }
    }, 500)
  })
}