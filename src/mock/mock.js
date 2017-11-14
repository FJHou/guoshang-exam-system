import Mock from 'mockjs'

export function loginMock () {
  Mock.mock('http://localhost:8080/login', {
    'code': 200,
    'msg': '登录成功',
    data: {}
  })
};

export function examListMock () {
  Mock.mock('http://localhost:8080/examList', {

  })
}
