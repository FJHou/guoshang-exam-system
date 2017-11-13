import axios from 'axios'

export function loginApi (accout, password) {
  const _account = '123'
  const _password = '123'
  const _url = 'http://localhost:8080/a's
  return axios.get(_url, {
    accout: accout,
    password: password
  }).then((res) => {
    if (_account !== accout || _password !== password) {
      return Promise.resolve('账号或密码错误')
    }

    return Promise.resolve(res.data)
  }).catch((err) => {
    console.log(err)
  })
}
