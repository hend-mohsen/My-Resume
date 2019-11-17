<template>
    <section class="experience" id="experience">
        <div class="container">
            <h2 class="title" data-aos="fade-down"
                data-aos-easing="linear" data-aos-duration="250">Experience</h2>
            <div class="row">
                <div class="col-md-6" v-for="(experience, index) of experiences" :key="experience.id"
                     data-aos="fade-right"
                     data-aos-easing="linear" v-bind:data-aos-duration="250 + (300 * index)">
                    <div class="experience--content">
                        <h4 class="experience--content__title">{{experience.title}}</h4>
                        <h5 class="experience--content__company">
                            <a :href="experience.company_link" target="_blank">{{experience.company}}</a>
                        </h5>
                        <span class="experience--content__date">{{experience.date}}</span>
                        <ul>
                            <li class="experience--content__description" v-for="item in experience.description">{{item}}</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped lang="scss">
    .experience {
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
                font-size: 1.5rem;
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
        name: "Experience",
        data() {
            return {
                experiences: [
                    {
                        id: 1,
                        title: "Frontend Developer",
                        company: "Croco It Company",
                        company_link: "https:www.google.com.eg",
                        date: "May 2018 - Persent",
                        description: [
                            "Specialized in Magento Framework",
                            "Collaborated with designers and other team members to create clean interfaces and to optimize the experience and interactions of the user.",
                            "Collaborated with graphic and web designers to figure out the layout of different websites and to ensure work from all departments was done correctly",
                            "Maintained high productivity and efficiency.",
                            "Wrote codes for websites using a variety of languages.",
                            "Completed front-end development tasks and ensured user experience design was incorporated into websites for optimal user accessibility",
                            "Conducted quality assurance tests to look for errors, developing and implementing effective solutions to the issues",
                            "Designed applications that helped to increase company efficiency and productivity.",
                            "Worked on back-end development tasks such as coding, ensuring work was done with precision",
                            "Worked with team members, communicating about the information to be contained on the website and how to effectively present it."
                        ]
                    }
                ]
            };
        }
    };
</script>
