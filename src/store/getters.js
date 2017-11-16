export const currentQuestion = (state) => {
  return state.questions[state.currentIndex] || {}
}
