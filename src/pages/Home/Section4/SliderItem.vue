<template>
    <div class="slider-item">
        <div class="user-avatar-container">
            <div class="user-avatar">
                <img :src="avatar" :alt="fullName">
            </div>
        </div>
        <div class="user-data-container">
            <span>{{fullName}}, {{city}}</span>
        </div>
        <div class="user-comment">
            <p>{{comment}}</p>
        </div>
    </div>
</template>

<script>
    export default {
        name: "SliderItem",
        props:{
            avatar:{
              type:String,
              required:true,
            },
            fullName:{
                type:String,
                required:true,
            },
            city:{
                type:String,
                required:true,
            },
            comment:{
                type:String,
                required:true,
            },
        }
    }
</script>

<style scoped>

    .slider .user-avatar-container{
        width: 150px;
        height: 150px;
        border-radius: 50%;
        border: 15px solid var(--theme-color-25);
        margin: 15px auto;
    }
    .slider .user-avatar{
        width: 101%;
        height: 101%;
        border-radius: 50%;
        border: 10px solid var(--theme-color-50);
        overflow: hidden;
        position: relative;
        top: -1px;
    }
    .slider .user-avatar img{
        max-width: 120%;
        max-height: 120%;
    }
    .slider .user-data-container{
        font-size: 16px;
        font-weight: bold;
        margin-bottom: 15px;
    }
    .slider .user-comment{
        font-size: 14px;
        color: #aaa;
        line-height: 25px;
    }
</style>