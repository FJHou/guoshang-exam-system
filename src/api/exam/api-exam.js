import axios from 'axios'

// 交卷
export default confirmSendPaper (data) {
  axios.post('http://localhost:8080/sendpaper', {
    param: data
  }).then((res) => {
    return Promise.resolve(res)
  }).catch((err) => {
    console.log(err)
  })
}
