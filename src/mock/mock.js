import Mock from 'mockjs'

export default function loginMock () {
  Mock.mock('http://localhost:8080/a', {
    'res_num': 200
  })
};
