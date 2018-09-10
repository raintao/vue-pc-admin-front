# vue-pc-admin-front
PC后台管理Vue架构(vue+ vue-router + store+ axios + scss + svg + element-ui)

## 安装使用

``` 
    $ git clone https://github.com/raintao/vue-pc-admin-front.git
    $ cd vue-pc-admin-front
    $ npm install
    $ npm start
    
``` 


## 也可利用[drop-cli](https://github.com/raintao/drop-cli.git)脚手架安装模版

#### 1. 安装drop-cli

```
$ npm install drop-cli -g
$ drop-cli list

```

#### 2.选择模板并创建自己的项目

```
$ drop-cli init
$ gulp-html-front // 输入一个模版
$ gulp-html-test  // 输入自己的项目名称
$ cd gulp-html-test
$ npm install

```

> 因为npm安装插件是从国外服务器下载，受网络影响大，可能出现异常,一般我们常用[cnpm](http://npm.taobao.org)来代替

```
    npm install cnpm -g --registry=https://registry.npm.taobao.org
```

> 这里推荐使用[yarn](https://yarn.bootcss.com/), yarn就是一个类似于npm的包管理工具，它是由facebook推出并开源。鉴于facebook在前端界的影响力，yarn一面世就很受瞩目，受到了前端界的广泛欢迎。与npm相比，yarn有着众多的优势，主要的优势在于：速度快，离线模式，版本控制。[详情点这里](https://yarn.bootcss.com/)


## 1.element-ui            
   由饿了么前端团队推出的 element-ui 是一个基于 Vue.js 的pc端组件库。已发布了 2.4.6 版本，支持了vue2。引入方式为:     
```

    // ui框架  
    import Vue from 'vue';
    import ElementUI from 'element-ui';
    import 'element-ui/lib/theme-chalk/index.css';
    import App from './App.vue';

    Vue.use(ElementUI);

    new Vue({
    el: '#app',
    render: h => h(App)
    });

```

    当然也可按需引入，来减少项目的大小。具体怎么用请参考官网：[Element-ui官网手册](http://element-cn.eleme.io/#/zh-CN/component/quickstart)


  ## 2.字体图标用的是vue-svgicon ,
  可以在[阿里巴巴矢量图标库](http://www.iconfont.cn/)上下载项目需要的svg图标。放在目录src/assets/svg下，然后yarn svg就可以生成对应的js文件
```
    1. 在main.js中引用
    // in main.js first line 兼容ie
    import 'vue-svgicon/dist/polyfill'
    // import all icons
    import * as svgicon from 'vue-svgicon'
    import './views/icons'
    Vue.use(svgicon, {
    tagName: 'icon'
    })

    2.在html中的使用方法
     <icon name="right" width="18" height="16" color="#D0D0D0"></icon>
     <icon icon="right" width="18" height="16" color="#D0D0D0"></icon>

```
[vue-svgicon](https://github.com/MMF-FE/vue-svgicon)的命令配置使用方法请参照[vue-svgicon的github地址](https://github.com/MMF-FE/vue-svgicon)

## 3.页面title使用的是[vue-meta](https://github.com/declandewet/vue-meta)

1.在main.js引入
```

import Meta from 'vue-meta'

Vue.use(Meta, {
  keyName: 'metaInfo'
})

```

2. 在js中使用 和data created methods并列
```

metaInfo: {
    title: '实例使用meta'
}

```

3.更多用法参考[项目地址](https://github.com/declandewet/vue-meta)

## 4. 代码风格 [vue-property-decorator](https://github.com/kaorun343/vue-property-decorator)
```

import { Vue, Component, Prop } from 'vue-property-decorator'

@Component
export default class YourComponent extends Vue {
  @Prop(Number) propA!: number
  @Prop({ default: 'default value' }) propB!: string
  @Prop([String, Boolean]) propC: string | boolean
}

```
is equivalent to
```

export default {
  props: {
    propA: {
      type: Number
    },
    propB: {
      default: 'default value'
    },
    propC: {
      type: [String, Boolean]
    },
  }
}

```
具体使用方法请参考[github](https://github.com/kaorun343/vue-property-decorator) 或者文件夹src/views/page下的demo页面

## 5. vuex的分发封装[vuex-class](https://github.com/ktsn/vuex-class)

```

import Vue from 'vue'
import Component from 'vue-class-component'
import {
  State,
  Getter,
  Action,
  Mutation,
  namespace
} from 'vuex-class'

const someModule = namespace('path/to/module')

@Component
export class MyComp extends Vue {
  @State('foo') stateFoo
  @State(state => state.bar) stateBar
  @Getter('foo') getterFoo
  @Action('foo') actionFoo
  @Mutation('foo') mutationFoo
  @someModule.Getter('foo') moduleGetterFoo

  // If the argument is omitted, use the property name
  // for each state/getter/action/mutation type
  @State foo
  @Getter bar
  @Action baz
  @Mutation qux

  created () {
    this.stateFoo // -> store.state.foo
    this.stateBar // -> store.state.bar
    this.getterFoo // -> store.getters.foo
    this.actionFoo({ value: true }) // -> store.dispatch('foo', { value: true })
    this.mutationFoo({ value: true }) // -> store.commit('foo', { value: true })
    this.moduleGetterFoo // -> store.getters['path/to/module/foo']
  }
}

```
具体使用方法请参考[github](https://github.com/ktsn/vuex-class) 或者文件夹src/views/page下的demo页面