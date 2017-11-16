import * as types from './mutation-types'

const mutations = {
  [types.SET_QUESTIONS] (state, questions) {
    state.questions = questions
  },
  [types.SET_CURRENT_INDEX] (state, index) {
    state.currentIndex = index
  },
  [types.SET_QUESTION_STATE] (state, isSelect) {
    state.questions[state.currentIndex].isSelect = isSelect
  },
  [types.SET_QUESTION_RESULT] (state, result) {
    state.questions[state.currentIndex].result = result
  }
}

export default mutations
