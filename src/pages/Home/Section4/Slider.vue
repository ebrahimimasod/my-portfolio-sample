<template>
    <div v-if="sliderItems.length" class="slider">
        <carousel
                :items=sliderOptions.items
                :autoply=sliderOptions.autoplay
                :nav=sliderOptions.nav
        >
            <SliderItem
                    v-for="(item ,index) in sliderItems"
                    :key="index"
                    :full-name="item.fullName"
                    :avatar="item.avatar"
                    :city="item.city"
                    :comment="item.comment"

            />
        </carousel>
    </div>
</template>


<script>
    import carousel from 'vue-owl-carousel'
    import SliderItem from "./SliderItem";
    import Http from "../../../services/Http";

    export default {
        name: "Slider",
        data() {
            return {
                sliderItems: [],
                sliderOptions: {
                    items: 1,
                    autoplay: true,
                    nav: false,
                }
            }
        },
        components: {
            SliderItem,
            carousel
        },
        methods: {
            async getSliders() {
                let sliderItem = {
                    fullName: "",
                    city: "",
                    avatar: "",
                    comment: `Lorem ipsum dolor sit amet,
                     consectetur adipisicing elit.
                      Aspernatur, autem blanditiis enim eos exercitationem,
                       id maiores nihil, nisi quisquam recusandae
                       sequi temporibus unde velit vitae voluptatibus!
                        Consectetur hic illo tenetur.`
                };
                let httpResponse = await Http.get('/');
                if (httpResponse) {
                    httpResponse.data.results.forEach((item) => {
                        console.log(item);
                        sliderItem = {
                            ...sliderItem,
                            fullName: item.name.title + ' ' + item.name.first + ' ' + item.name.last,
                            city: item.location.city,
                            avatar: item.picture.large,
                        };
                        this.sliderItems.push(sliderItem);
                    });
                }

            }
        },
        mounted() {
            this.getSliders();
        }
    }
</script>

<style>

    .slider {
        text-align: center;
        height: 115%;
        position: relative;
        top: -7.5%;
        background-color: var(--base-color);
        width: 95%;
        left: 2.5%;
        box-shadow: 0 0 20px #00000026;
        border-radius: 5px;
        padding: 15px 50px;
    }

    .owl-theme .owl-nav.disabled + .owl-dots {
        margin-top: 70px;
    }

    .owl-theme .owl-dots .owl-dot span {
        width: 10px;
        height: 10px;
        margin: 5px 7px;
        background: var(--theme-color-25);
        display: block;
        -webkit-backface-visibility: visible;
        transition: opacity 200ms ease;
        border-radius: 30px;
    }


    .owl-theme .owl-dots .owl-dot.active span, .owl-theme .owl-dots .owl-dot:hover span {
        background: var(--theme-color);
        transform: scale(1.2);
    }

</style>