<template>
  <div class="calendar-input-container" v-show="show" 
  :class="[isRed ? 'red-theme' : 'blue-theme']" 
  :style="containerStyle">
    <label for="calendar-input">
      <input ref="input" id="calendar-input" type="text" readonly="readonly" 
      :style="inputStyle"
      :class="{focus: isfocus}"
      @click="focus"
      v-model="selectValue">
    </label>
    <transition name="fade">
      <div id="calendar" v-show="changeShowCalendar"
      :style="calendarStyle">
        <div id="calendar-header">
          <span class="arrow">&lt;</span>
          <span id="date-box">
            {{selectYear}}年{{selectMonth}}月
          </span>
          <span class="arrow">&gt;</span>
        </div>
        <div class="week">
          <span v-for="(item, index) in week" :class="{weekend: index === 0 || index === 6}">
            {{item}}
          </span>
        </div>
        <div class="days">
          <span v-for="(item, index) in renderData" 
          :class="{ 
            weekend: index % 7 === 0 || index % 7 === 6, 
            unselect: index < firstDayInWeek || index >= firstDayInWeek + dayCount,
            select: index === firstDayInWeek + selectDay - 1}">
            {{item}}
          </span>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'calendar-input',
  props: {
    show: {   //是否显示组件
      type: Boolean,
      default: true
    },
    isRed: {  //红蓝两种主题可选
      type: Boolean,
      default: false
    },
    limit: {  //日期可选范围
      type: Object,
      default() {
        return {
          minYear: '1900',
          minMonth: '01',
          minDay: '01',
          maxYear: '2020',
          maxMonth: '12',
          maxDay: '31'
        }
      }
    },
    showCalendar: {  //是否显示日历
      type: Boolean,
      default: false
    },
    containerStyle: { //组件容器样式
      type: Object
    },
    inputStyle: {   //输入框样式
      type: Object,
      default() {
        return {
          width: '200px',
          height: '30px'
        }
      }
    },
    calendarStyle: {  //日历样式
      type: Object,
      default() {
        return {
          width: this.inputStyle.width,
          height: `${parseInt(this.inputStyle.height) * 8}px`
        }
      }
    }
  },
  data () {
    return {
      isfocus: false,
      changeShowCalendar: this.showCalendar,
      week: ["日", "一", "二", "三", "四", "五", "六"],
      date: new Date(),
      selectYear: new Date().getFullYear(),
      selectMonth: new Date().getMonth() + 1,
      selectDay: new Date().getDate()
    }
  },
  methods: {
    focus() {
      this.isfocus = !this.isfocus;
      this.changeShowCalendar = !this.changeShowCalendar;
    }
  },
  computed: {
    selectValue: function () {
      return `${this.selectYear}-${this.selectMonth}-${this.selectDay}`;
    },
    firstDayInWeek: function () {
      return new Date(this.selectYear, this.selectMonth - 1, 1).getDay();
    },
    dayCount: function () {
      return new Date(this.selectYear, this.selectMonth, 0).getDate();
    },
    lastMonthDay: function () {
      let lastNum  = this.firstDayInWeek;
      let lastDays = [];
      if (lastNum === 0) return lastDays;

      let i = 0;
      let lastDayNum = new Date(this.selectYear, this.selectMonth - 1, 0).getDate();
      for (; i < lastNum; i++) {
        lastDays.unshift(lastDayNum);
        lastDayNum--;
      }
      return lastDays;
    },
    nextMonthDay: function () {
      let num      = 42 - this.firstDayInWeek - this.dayCount;
      let nextDays = [];
      if (num === 0) return nextDays;

      let i   = 1;
      for (; i <= num; i++) {
        nextDays.push(i);
      }
      return nextDays;
    },
    renderData: function () {
      let nowDays = [];
      let i = 1;
      for (; i <= this.dayCount; i++) {
        nowDays.push(i);
      }
      return [...this.lastMonthDay, ...nowDays, ...this.nextMonthDay];
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
@import "../style/calender";
</style>
