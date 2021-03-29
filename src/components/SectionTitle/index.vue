<template>
        <div class="section-title-container">
            <h2 class="section-title">
               {{title}}
            </h2>
            <h6 class="section-subtitle">
                {{subTitle}}
            </h6>
        </div>
</template>

<script>
    export default {
        name: "SectionTitle",
        props:{
            title:{
                type:String,
                required:true,
            },
            subTitle:{
                type:String,
                required:true,
            }
        }
    }
</script>

<style scoped>
        .section-title-container{
            margin-bottom: 50px;
            text-align: center;
        }
        .section-title-container .section-title{
          font-size: 30px;
        }
        .section-title-container .section-subtitle{
          font-size: 15px;
            color: #ccc;
        }
</style>