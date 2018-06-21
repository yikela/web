<template>
  <div id="app">
    <pub-header></pub-header>
    <div id="content">
      <router-view/>
    </div>   
    <pub-footer></pub-footer>
  </div>
</template>

<script>
import pubHeader from "@/components/public/header"
import pubFooter from "@/components/public/footer"
export default {
  name: 'App',
  data(){
    return {
    }
  },
  components:{
    pubHeader,
    pubFooter
  }
}
</script>

<style>
#app {
      font-family:  "Microsoft YaHei",'Avenir', Helvetica, Arial, sans-serif;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      width: 100%;
      height: 100%;
      background-color: #F8F8F8;
}

/* #content{
  padding-top:100px;
  width: 100%;
  max-width: 1200px;
  min-height: 800px;
  background: yellowgreen;
  margin:auto;
} */
  [v-cloak] {
      display: none
  }
    
    html,
    body,
    div,
    span,
    input,
    textarea,
    applet,
    object,
    iframe,
    p,
    pre,
    a,
    abbr,
    acronym,
    address,
    big,
    cite,
    code,
    del,
    dfn,
    em,
    img,
    ins,
    kbd,
    q,
    s,
    samp,
    small,
    strike,
    strong,
    sub,
    sup,
    tt,
    var,
    b,
    u,
    i,
    center,
    dl,
    dt,
    dd,
    ol,
    ul,
    li,
    fieldset,
    form,
    label,
    legend,
    caption,
    article,
    aside,
    canvas,
    details,
    embed,
    figure,
    figcaption,
    footer,
    header,
    hgroup,
    menu,
    nav,
    output,
    ruby,
    section,
    summary,
    time,
    mark,
    audio,
    video {
        margin: 0;
        padding: 0;
        border: 0;
        font-size: inherit;
        vertical-align: baseline;
        box-sizing: border-box;
    }
    /* HTML5 display-role reset for older browsers */
    h1,
    h2,
    h3,
    h4,
    h5,
    h6
    table,
    tbody,
    tfoot,
    thead,
    tr,
    th,
    td{
        margin: 0;
        padding: 0;
        font: inherit;
        vertical-align: baseline;
        box-sizing: border-box;
    }
    ol,
    ul {
        list-style: none;
    }
    .fl{
        float:left;
    }
    .fr{
        float:right;
    }
        blockquote,
    q {
        quotes: none;
    }
    /*blockquote:before,
    blockquote:after,
    q:before,
    q:after {
        content: '';
        content: none;
    }*/
    
    table {
      border-collapse: collapse;
      border-spacing: 0;
    }
    
    caption,
    th {
      text-align: left;
    }
    
    sup {
      vertical-align: text-top;
    }
    
    sub {
      vertical-align: text-bottom;
    }
    /** 重置超链接元素 **/
    
    a {
      text-decoration: none;
      font-size: 14px;
      color: #333;
      /*blr:expression(this.onFocus=this.blur());删除点击后链接产生的虚线框*/
    }
    /* remember to define focus styles! */
    
     :focus {
        outline: 0 none;
    }
    /* remember to highlight inserts somehow! */
    
    ins {
      text-decoration: none;
    }
    
    del {
      text-decoration: line-through;
    }
   ::-webkit-input-placeholder { /* WebKit, Blink, Edge */
      font-size: 12px;
      color:    #333;
    }
    :-moz-placeholder { /* Mozilla Firefox 4 to 18 */
      font-size: 12px;
      color:    #909;
    }
    ::-moz-placeholder { /* Mozilla Firefox 19+ */
      font-size: 12px;
      color:    #909;
    }
    :-ms-input-placeholder { /* Internet Explorer 10-11 */
      font-size: 12px;
      color:    #909;
    }
</style>
