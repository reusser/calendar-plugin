import Vue from 'vue'
import Router from 'vue-router'
import calendarInput from '@/components/calendar-input'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'calender-input',
      component: calendarInput
    }
  ]
})
