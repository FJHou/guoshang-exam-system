import * as types from './mutation-types'

export const setQuestionInfo = function ({commit, state}, result) {
  commit(types.SET_QUESTION_STATE, true)
  commit(types.SET_QUESTION_RESULT, result)
}
