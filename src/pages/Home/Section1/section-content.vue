<template>
    <div class="section1_content">
        <div class="section1_title-container">
            <h2 class="section1_title">
                <span class="black-text">MY</span>
                <span class="primary-text">WORK</span>
            </h2>
            <span class="section1_sub-title">Web & visual Designer</span>
            <div class="play-video-container">
                <span class="play-video-icon">
                    <Icon
                            color="var(--theme-color)"
                            type="fa fa-play"
                    />
                </span>
                <span class="play-video-text">
                   MY INTRO
                 </span>
            </div>
        </div>
        <div class="section1_avatar-container-outline-border">
            <div class="section1_avatar-container">
                <div class="section1_avatar">
                    <img src="/images/masood.jpg" alt="">
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import Icon from "../../../components/Icon";

    export default {
        name: "section-content",
        components: {Icon}
    }
</script>

<style scoped>

    .section1_content {
        height: 85%;
        display: flex;
        flex-direction: row-reverse;
        flex-wrap: nowrap;
        justify-content: space-between;
        align-items: center;
        align-content: stretch;
    }

    .section1_title-container {
        text-align: center;
        margin-right: 100px;
    }

    .section1_title {
        font-size: 100px;
    }

    .section1_title .black-text {
        margin-right: 25px;
        display: inline-flex;
        color: #000;
    }

    .section1_title .primary-text {
        color: var(--theme-color);
    }

    .section1_title-container .section1_sub-title {
        font-size: 19px;
        line-height: 0;
        font-weight: bold;
    }

    .section1_content .section1_avatar-container-outline-border {
        border-radius: 100%;
        border: 15px solid var(--theme-color);
        overflow: hidden;
        width: 520px;
        height: 520px;
    }

    .section1_content .section1_avatar-container {
        border-radius: 100%;
        border: 70px solid var(--base-color);
        overflow: hidden;
        width: 100%;
        height: 100%;
    }

    .section1_content .section1_avatar {
        border-radius: 100%;
        border: 20px solid var(--theme-color);
        overflow: hidden;
        width: 100%;
        height: 100%;
    }

    .section1_content .section1_avatar img {
        max-width: 120%;
        max-height: 120%;
    }

    .section1_title-container .play-video-container {
        margin-top: 100px;
        text-align: right;
    }

    .section1_title-container .play-video-container .play-video-icon {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        width: 60px;
        height: 60px;
        background-color: var(--base-color);
        box-shadow: 0 0 25px #754ef94a;
        border-radius: 100%;
        margin-right: 30px;
        color: var(--theme-color);
        cursor: pointer;
    }

    .section1_title-container .play-video-container .play-video-text {
        font-weight: bold;
    }

</style>