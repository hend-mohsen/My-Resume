<template>
    <header id="header">
        <div class="container">
            <div class="row justify-content-center align-items-center">
                <div class="col-md-6">
                    <div class="content">
                        <h1 data-aos="fade-right"
                            data-aos-easing="linear" data-aos-duration="400">{{name}}</h1>
                        <h2 data-aos="fade-right"
                            data-aos-easing="linear" data-aos-duration="500">{{position}}</h2>
                        <h3 data-aos="fade-right"
                            data-aos-easing="linear" data-aos-duration="600">
                            <a :href="'mailto:' + email + '?subject=Need UI / UX Designer for new opportunity'">
                                <i class="fa fa-envelope"></i> {{email}}
                            </a>
                        </h3>
                        <h3 data-aos="fade-right"
                            data-aos-easing="linear" data-aos-duration="700">
                            <i class="fa fa-map-marker-alt"></i> {{location}}
                        </h3>
                        <h3 data-aos="fade-right"
                            data-aos-easing="linear" data-aos-duration="800">
                            <i class="fa fa-mobile-alt"></i>
                            <a :href="'tel:+20' + mob" v-for="mob in mobile" :key="mob">{{mob}}</a>
                        </h3>
                    </div>
                    <ul class="list-unstyled socialLinks d-flex justify-content-start align-items-start">
                        <li v-for="(icon, index) in socialMediaLinks" :key="icon.id" data-aos="fade-right"
                            data-aos-easing="linear" v-bind:data-aos-duration="700 + (100 * index)">
                            <a :href="icon.link" target="_blank">
                                <i :class="'fab fa-' + icon.icon"></i>
                            </a>
                        </li>
                    </ul>
                </div>
                <div class="col-md-6">
                    <img src="../assets/header.png" alt="" class="img-fluid">
                </div>
            </div>
        </div>
    </header>
</template>

<style scoped lang="scss">
    header {
        h1,
        .socialLinks a {
            color: #2A62A8;
        }

        .content {
            h1,
            h2 {
                text-transform: uppercase;
            }

            h1 {
                font-size: 3rem;
                font-weight: 700;
            }

            h2 {
                color: #F4A589;
                font-size: 1.5rem;
            }

            h3 {
                font-size: 1.3rem;
                margin-top: 1rem;

                @media (max-width: 320px) {
                    font-size: 1.1rem;
                }

                i.fa {
                    width: 30px;
                    margin-right: 0.5rem;
                    color: #2A62A8;
                }

                a {
                    margin-right: 1rem;
                }
            }

            img {
                width: 100%;
                height: 100%;
            }

            a {
                text-decoration: none;
                color: #2c3e50;

                &:after {
                    content: ','
                }

                &:last-of-type:after {
                    content: '';
                }
            }
        }

        .socialLinks {
            margin-top: 2rem;

            li {
                width: 2rem;
                height: 2rem;
                line-height: 2rem;
                background-color: #2A62A8;
                border-radius: 50%;
                text-align: center;
                margin-right: 1rem;

                a {
                    width: 100%;
                    height: 100%;
                    color: #fff;
                }
            }
        }
    }
</style>

<script>
    export default {
        name: "home-header",
        data() {
            return {
                name: "Hend Mohsen",
                position: "Frontend Developer",
                email: "hendmohsen994@gmail.com",
                location: "Cairo, Egypt",
                mobile: ["01100575091", "01007594224"],
                socialMediaLinks: [
                    {
                        id: 2,
                        icon: "linkedin",
                        link: "http:// www.linkedin.com/in/hend-mohsen-15410a125"
                    },
                    {
                        id: 3,
                        icon: "facebook-f",
                        link: "https://www.facebook.com/khaledhossam00"
                    },
                    {
                        id: 4,
                        icon: "pinterest-p",
                        link: "https://www.pinterest.com/khaledhossam00/"
                    }
                ]
            };
        }
    };
</script>
