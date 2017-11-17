import {getCookie} from './cookie'

export const SUC_NUM = 200

export function checkLogin () {
  const IS_LOGIN = getCookie('isLogin')

  if (IS_LOGIN) {
    return true
  }

  return false
}
