<template>
    <div v-if="portfolios.length" class="section" id="section3">
        <SectionTitle
                title=" My Portfolio"
                sub-title=" Web & App"
        />
        <div class="container">
            <div class="row">
                <div
                        v-for="(portfolioItem,index) in portfolios"
                        :key="index"
                        :class="[ getCardSizeToRender(index) ? 'col-8' : 'col-4', 'portfolio-card-container']">
                    <PortfolioCard
                            :image="portfolioItem.image"
                            :title="portfolioItem.title"
                            :description="portfolioItem.description"
                    />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import SectionTitle from "../../../components/SectionTitle/index";
    import PortfolioCard from "../../../components/PortfolioCard/index";

    export default {
        name: "section3",
        components: {PortfolioCard, SectionTitle},
        data() {
            return {
                portfolios: [
                    {
                        image: '/images/image.jpg',
                        title: 'Portfolio',
                        description: `Lorem ipsum dolor sit amet,
                        consectetur adipisicing elit. Consequuntur
                         dolorem laudantium minima provident.
                         Accusantium animi asperiores aspernatur dolor
                          dolorem eos explicabo facilis molestiae nam quidem quis,
                           rerum, sequi sit voluptates?`
                    },
                    {
                        image: '/images/image.jpg',
                        title: 'Portfolio',
                        description: `Lorem ipsum dolor sit amet,
                        consectetur adipisicing elit. Consequuntur
                         dolorem laudantium minima provident.
                         Accusantium animi asperiores aspernatur dolor
                          dolorem eos explicabo facilis molestiae nam quidem quis,
                           rerum, sequi sit voluptates?`
                    },
                    {
                        image: '/images/image.jpg',
                        title: 'Portfolio',
                        description: `Lorem ipsum dolor sit amet,
                        consectetur adipisicing elit. Consequuntur
                         dolorem laudantium minima provident.
                         Accusantium animi asperiores aspernatur dolor
                          dolorem eos explicabo facilis molestiae nam quidem quis,
                           rerum, sequi sit voluptates?`
                    },
                    {
                        image: '/images/image.jpg',
                        title: 'Portfolio',
                        description: `Lorem ipsum dolor sit amet,
                        consectetur adipisicing elit. Consequuntur
                         dolorem laudantium minima provident.
                         Accusantium animi asperiores aspernatur dolor
                          dolorem eos explicabo facilis molestiae nam quidem quis,
                           rerum, sequi sit voluptates?`
                    },
                    {
                        image: '/images/image.jpg',
                        title: 'Portfolio',
                        description: `Lorem ipsum dolor sit amet,
                        consectetur adipisicing elit. Consequuntur
                         dolorem laudantium minima provident.
                         Accusantium animi asperiores aspernatur dolor
                          dolorem eos explicabo facilis molestiae nam quidem quis,
                           rerum, sequi sit voluptates?`
                    },
                    {
                        image: '/images/image.jpg',
                        title: 'Portfolio',
                        description: `Lorem ipsum dolor sit amet,
                        consectetur adipisicing elit. Consequuntur
                         dolorem laudantium minima provident.
                         Accusantium animi asperiores aspernatur dolor
                          dolorem eos explicabo facilis molestiae nam quidem quis,
                           rerum, sequi sit voluptates?`
                    },
                    {
                        image: '/images/image.jpg',
                        title: 'Portfolio',
                        description: `Lorem ipsum dolor sit amet,
                        consectetur adipisicing elit. Consequuntur
                         dolorem laudantium minima provident.
                         Accusantium animi asperiores aspernatur dolor
                          dolorem eos explicabo facilis molestiae nam quidem quis,
                           rerum, sequi sit voluptates?`
                    },
                    {
                        image: '/images/image.jpg',
                        title: 'Portfolio',
                        description: `Lorem ipsum dolor sit amet,
                        consectetur adipisicing elit. Consequuntur
                         dolorem laudantium minima provident.
                         Accusantium animi asperiores aspernatur dolor
                          dolorem eos explicabo facilis molestiae nam quidem quis,
                           rerum, sequi sit voluptates?`
                    },
                ]
            }
        },
        methods: {
            getCardSizeToRender(index) {
                if (index <= 3) {
                    return index % 3 === 0 && index !== 0
                } else {
                    return index % 8 === 0;
                }
            }
        }
    }
</script>

<style scoped>

    #section3 {
        margin: 60px 0;
    }


    #section3 .portfolio-card-container {
        padding: 0 8px;
        margin-bottom: 16px;
    }

</style>