import Vue from 'vue'
import Router from 'vue-router'

const Exam = (resolve) => {
  import('components/exam/exam').then((module) => {
    resolve(module)
  })
}

const Question = (resolve) => {
  import('components/question/question').then((module) => {
    resolve(module)
  })
}

const User = (resolve) => {
  import('components/user/user').then((module) => {
    resolve(module)
  })
}

const Notice = (resolve) => {
  import('components/notice/notice').then((module) => {
    resolve(module)
  })
}

const ExamRoom = (resolve) => {
  import('components/examroom/examroom').then((module) => {
    resolve(module)
  })
}

// const Exam = () => {
//   import('components/exam/exam').then((module) => {
//     resolve(module)
//   })
// }

// const Exam = () => {
//   import('components/exam/exam').then((module) => {
//     resolve(module)
//   })
// }

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
        },
        {
          path: 'examroom',
          component: ExamRoom
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
