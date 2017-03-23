[预览](https://reusjs.github.io/calendar-plugin/)

# calendar-plugin

> A simple calender-plugin by Vue.js

[![build](https://img.shields.io/wercker/ci/wercker/docs.svg)](https://github.com/Reusjs/calendar-plugin)
[![build](https://img.shields.io/badge/npm-1.0.2-blue.svg)](https://github.com/Reusjs/calendar-plugin)
[![build](https://img.shields.io/npm/l/express.svg)](https://github.com/Reusjs/calendar-plugin)

## 使用方法

```javascript
npm install calendar-plugin
```

### 在父组件中使用calendar-input
引入calendar-input, 如果父组件在vue-cli生成的components中，那么引用方法为：

```javascript
  import calendarInput from '../../node_modules/calendar-plugin/calendar-input.vue';
  export default {
    components: {
      calendarInput
    }
  }
```

如果父组件不在components中，就根据你的项目使用相对路径引入

使用并传递初始值，绑定子组件向父组件通信事件

```html
  <calendar-input :limit="limit" @getValue="getValue"></calendar-input>
```

使用红色主题

```html
  <calendar-input :isRed="true" @getValue="getValue"></calendar-input>
```



### 父组件可传props

```javascript
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
              minYear: 1900,
              minMonth: 1,
              minDay: 1,
              maxYear: 2030,
              maxMonth: 3,
              maxDay: 20
            }
          }
        },
        showCalendar: {  //是否显示日历
          type: Boolean,
          default: true
        },
        containerStyle: { //组件容器样式
          type: Object
        }
      }
```

### 子组件向父组件传值方法

```javascript
  watch: {
    selectValue: function (newVal) {
      this.$emit('getValue', newVal);
    }
  },
  mounted() {
    this.$emit('getValue', this.selectValue);
  } 
```

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

