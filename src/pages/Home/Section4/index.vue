<template>
   <div class="section" id="section4">
       <SectionTitle
               title="Valuable Testimonial"
               sub-title="See People Say About Me"
       />

        <div class="container">
            <div class="row d-flex align-items-center justify-content-center">
                <div class="col-8">
                    <div class="slider-container">
                        <Slider/>
                    </div>
                </div>
            </div>
        </div>
   </div>
</template>

<script>
    import SectionTitle from "../../../components/SectionTitle/index";
    import Slider from "./Slider";


    export default {
        name: "section4",
        components: {
            Slider,
            SectionTitle,
        },
    }
</script>

<style scoped>
    #section4{
        margin: 100px 0;
    }
    .slider-container{
        height: 300px;
        margin-bottom: 50px;
        background-color: var(--theme-color);
        position: relative;
        text-align: center;

    }
</style>