import Vue from 'vue'
import Router from 'vue-router'
import showCalendarInput from '@/components/show-calendar-input'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'show-calender-input',
      component: showCalendarInput
    }
  ]
})
