import Vue from 'vue'
import Router from 'vue-router'
import Exam from 'components/exam/Exam'
import Question from 'components/question/question'
import User from 'components/user/user'
// import Notice from 'components/notice/notice'

const Notice = (resolve) => {
  import('components/notice/notice').then((module) => {
    resolve(module)
  })
}

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/exam'
    },
    {
      path: '/exam',
      name: 'exam',
      component: Exam,
      children: [
        {
          path: 'notice',
          component: Notice
        }
      ]
    },
    {
      path: '/question',
      name: 'question',
      component: Question
    },
    {
      path: '/user',
      name: 'user',
      component: User,
      children: [
        {
          path: '/password'
          // component:
        }
      ]
    }
  ]
})
