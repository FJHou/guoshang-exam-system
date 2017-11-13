import Mock from 'mockjs'

export function loginMock () {
  Mock.mock('http://localhost:8080/login', {
    'res_num': 200
  })
};

export function examListMock () {
  Mock.mock('http://localhost:8080/examList', {

  })
}
