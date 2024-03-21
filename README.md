## 指令

> v-model

> v-on:click=

> v-for="item of list"

> v-bind:text="item"

> v-if

> v-html=""

> v-once

## 语法

> {{}} 中包含的是JS表达式 不可以是JS语句

> v-on:click <=> @click

> v-bind:prop <=> :prop

> :[key] <=> 动态属性

> 修饰符 @click.preve


## computed 和 methods 和 watch 函数中方法区别

``` 
computed 中方法当计算依赖的内容发生变化时，才会重新执行计算

methods 中方法当页面重新渲染，就会重新执行计算

watch 的对象发生变化时候执行

优先 computed

```


## v-if 和 v-show 和 v-else-if 和 v-else



### mvvm 模式

``` 
 m : Model 数据层
 v : View 视图层
 vm : 数据视图连接层
```