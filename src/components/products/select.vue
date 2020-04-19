<template>
    <div class="m-product-select">
       <dl class="tab">
           <div>
               {{name}}
               <i class="el-icon-caret-bottom"></i>
           </div>
           <dd>
               <div class="select-title">{{name}}</div>
               <span v-for='(item,index) in list' :key='index'> {{item.name}} </span>
            </dd>
       </dl>
    </div>
</template>

<script>
export default {
    props:["name","list"]
}
</script>

<style>

</style>