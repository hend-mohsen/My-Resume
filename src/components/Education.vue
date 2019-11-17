<template>
    <section class="education" id="education">
        <div class="container">
            <h2 class="title" data-aos="fade-down"
                data-aos-easing="linear" data-aos-duration="250">Education</h2>
            <div class="row">
                <div class="col-md-6" v-for="(education, index) of educations" :key="education.id" data-aos="fade-right"
                     data-aos-easing="linear" v-bind:data-aos-duration="250 + (200 * index)">
                    <div class="education--content">
                        <h4 class="education--content__title">{{education.title}}</h4>
                        <h5 class="education--content__company">
                            <a :href="education.company_link" target="_blank">{{education.company}}</a>
                        </h5>
                        <span class="education--content__date">{{education.date}}</span>
                        <p class="education--content__description">{{education.description}}</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped lang="scss">
    .education {
        .title {
            margin-bottom: 2rem;
        }

        &--content {
            padding: 2rem;
            box-shadow: 0 0 16px 0 rgba(#000, 0.08);
            margin-bottom: 2rem;
            background-color: #fff;
            transition: all 0.2s ease-in-out;

            &:hover {
                transform: scale(1.1);
            }

            h4 {
                font-size: 1.2rem;
                font-weight: 700;
                color: #2A62A8;
                margin-bottom: 0.5rem;
                text-transform: uppercase;
            }

            h5 a {
                text-transform: capitalize;
                font-size: 1rem;
                margin-bottom: 0.5rem;
                color: #626262;
                text-decoration: none;
            }

            span {
                display: block;
                font-size: 0.8rem;
                text-transform: capitalize;
                color: #626262;
                margin-bottom: 0.5rem;
            }

            p {
                font-size: 0.8rem;
                margin-top: 0;
                margin-bottom: 0;
                line-height: 1.5rem;
            }
        }
    }
</style>

<script>
    export default {
        name: "Education",

        data() {
            return {
                educations: [
                    {
                        id: 1,
                        title: "System and information managment",
                        company: "CHI-EG",
                        company_link: "http://www.chi-eg.com",
                        date: "Jan 2014 - Jan 2018",
                        description:
                            'I\'ve Learning In CHI-EG [ "VB6", "HTML", "FrontPage", "Economic", "Marketing", "Feasibility Study", "Information Security", "Network Security" ]'
                    }
                ]
            };
        }
    };
</script>
