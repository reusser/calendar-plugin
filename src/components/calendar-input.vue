<template>
  <div class="calendar-input-container" v-show="show" 
  :class="[isRed ? 'red-theme' : 'blue-theme']" 
  :style="containerStyle">
    <label for="calendar-input">
      <input ref="input" id="calendar-input" type="text" readonly="readonly" 
      :style="inputStyle"
      :class="{focus: isfocus}"
      @click="focus">
    </label>
    <div id="calendar" v-show="showCalendar"
    :style="calendarStyle">
    </div>
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
      default: true
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
      changeShowCalendar: this.showCalendar
    }
  },
  methods: {
    focus() {
      this.isfocus = !this.isfocus;
      this.changeShowCalendar = !this.changeShowCalendar;
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
@import "../style/calender";
</style>
