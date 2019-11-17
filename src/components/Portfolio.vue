<template>
    <section class="portfolio" id="portfolio">
        <div class="container">
            <h2 class="title" data-aos="fade-down"
                data-aos-easing="linear" data-aos-duration="250">Portfolio</h2>
            <div class="row">
                <div class="col-md-4" v-for="(item, index) in portfolio" :key="item.id" data-aos="fade-right"
                     data-aos-easing="linear" v-bind:data-aos-duration="250 + (200 * index)">
                    <div class="content">
                        <a :href="item.link">
                            <img :src="item.image" alt="item.name">
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped lang="scss">
    .portfolio {
        .content {
            height: 300px;
            margin-bottom: 2rem;

            img {
                width: 100%;
                height: 100%;
            }
        }
    }
</style>

<script>
    export default {
        name: "Portfolio",
        data() {
            return {
                portfolio: [
                    {
                        id: 1,
                        name: "Home pros real estate",
                        link:
                            "https://www.behance.net/gallery/73112189/Home-Pros-real-estate-Site-for-sale-of-houses",
                        image: require("@/assets/portfolio/1.png")
                    },
                    {
                        id: 2,
                        name: "Hairbrust Arabia",
                        link: "https://www.behance.net/gallery/80730459/Hairbrust-arabia",
                        image: require("@/assets/portfolio/2.png")
                    },
                    {
                        id: 3,
                        name: "Personal portfolio",
                        link: "https://www.behance.net/gallery/72805729/personal-portfolio",
                        image: require("@/assets/portfolio/3.png")
                    },
                    {
                        id: 4,
                        name: "Clothing store",
                        link: "https://www.behance.net/gallery/73784447/A-clothing-store",
                        image: require("@/assets/portfolio/4.png")
                    },
                    {
                        id: 5,
                        name: "Book home",
                        link: "https://www.behance.net/gallery/66977805/Book-Home",
                        image: require("@/assets/portfolio/5.png")
                    },
                    {
                        id: 6,
                        name: "Initial design to measure and evaluate the wor",
                        link:
                            "https://www.behance.net/gallery/71720119/It-is-an-initial-design-to-measure-and-evaluate-the-wor",
                        image: require("@/assets/portfolio/6.png")
                    },
                    {
                        id: 7,
                        name: "Music app download and listen to albums and songs",
                        link:
                            "https://www.behance.net/gallery/73435659/Music-App-Download-and-listen-to-albums-and-songs",
                        image: require("@/assets/portfolio/7.png")
                    }
                ]
            };
        }
    };
</script>
