import Vue from 'vue'
import Router from 'vue-router'
import Exam from 'components/exam/Exam'
import Question from 'components/question/question'
import User from 'components/user/user'

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
      component: Exam
      // children: [
      //   {

      //   }
      // ]
    },
    {
      path: '/question',
      name: 'Question',
      component: Question
    },
    {
      path: '/user',
      name: 'User',
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
