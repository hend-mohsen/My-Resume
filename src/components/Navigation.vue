<template>
    <nav class="navbar navbar-expand-lg fixed-top">
        <div class="container">
            <div class="row justify-content-between align-items-center">
                <a class="navbar-brand" href="#">
                    <img src="../assets/logo.png" :alt="name" :title="name">
                </a>
                <button class="navbar-toggler" type="button" data-toggle="collapse"
                        data-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="fa fa-bars"></span>
                </button>

                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav ml-auto">
                        <li class="nav-item"
                            v-for="navbar in navbarLinks"
                            :key="navbar.id">
                            <a class="nav-link" :href="navbar.link">{{navbar.name}}</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </nav>
</template>

<style scoped lang="scss">
    .row {
        width: 100%;
    }

    .navbar {
        background-color: #fff;
        height: 80px;
        box-shadow: 0 0 16px 0 rgba(0, 0, 0, 0.08);
        text-transform: capitalize;

        &-toggler {
            border-color: #2A62A8;
            color: #2A62A8;
            padding: 0.75rem 1rem;
            outline: none;
        }

        @media (max-width: 991px) {
            &-collapse {
                position: absolute;
                top: 80px;
                background: rgb(255, 255, 255);
                width: 100%;
                left: 0px;

                padding: 1rem !important;
                box-shadow: rgba(0, 0, 0, 0.08) 0px 0.8rem 0.8rem 0px;
                @media (max-width: 768px) {
                    .nav-item {
                        //   padding: 1rem 0 !important;
                        width: 100%;
                        // text-align: center;
                    }
                }
                //   @media (max-width: 630px) {
                //     padding: 1rem !important;
                //   }
            }
        }

        &-brand {
            width: 6rem;
            height: 6rem;

            img {
                width: 100%;
                height: 100%;
            }
        }

        &-nav {
            .nav-item {
                padding: 1rem 2rem 1rem 0;

                &:last-of-type {
                    padding-right: 0;
                }

                .nav-link {
                    color: #2A62A8;
                    font-size: 1.1rem;
                }
            }
        }
    }
</style>

<script>
    export default {
        name: "navigation",
        data() {
            return {
                name: "Hend Mohsen",
                navbarLinks: [
                    {
                        id: 1,
                        name: "home",
                        link: "#header"
                    },
                    {
                        id: 2,
                        name: "biography",
                        link: "#bio"
                    },
                    {
                        id: 3,
                        name: "skills",
                        link: "#skills"
                    },
                    {
                        id: 4,
                        name: "experience",
                        link: "#experience"
                    },
                    {
                        id: 4,
                        name: "portfolio",
                        link: "#portfolio"
                    },
                    {
                        id: 5,
                        name: "education",
                        link: "#education"
                    }
                ]
            };
        }
    };
</script>
