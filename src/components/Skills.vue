<template>
    <section class="skills" id="skills">
        <div class="container">
            <h2 class="title text-center" data-aos="fade-down"
                data-aos-easing="linear" data-aos-duration="250">Skills</h2>
            <div class="row">
                <div class="col-md-3 col-sm-6 col-xs-12" v-for="(skill, index) in skills" :key="skill.id"
                     data-aos="fade-right"
                     data-aos-easing="linear" v-bind:data-aos-duration="100 + (100 * index)">
                    <div class="skill">
                        <img :src="skill.image" :alt="skill.name">
                        <h4>{{skill.name}}</h4>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped lang="scss">
    .skills {
        .skill {
            background-color: #fff;
            padding: 0.7rem 1rem;
            display: flex;
            align-items: center;
            box-shadow: 0 0 16px 0 rgba(#000, 0.08);
            margin-bottom: 1.5rem;
            transition: all 0.2s ease-in-out;

            &:hover {
                background-color: #2A62A8;
                color: #fff;
                transform: scale(1.1);
            }

            img {
                width: 30px;
                height: 30px;
                margin-right: 0.5rem;
            }

            h4 {
                font-size: 1rem;
                margin-bottom: 0;
                letter-spacing: 0.5px;
                text-transform: capitalize;
            }
        }
    }
</style>

<script>
    export default {
        name: "skills",
        data() {
            return {
                skills: [
                    {
                        id: 1,
                        image: require("@/assets/skills/sketch.png"),
                        name: "Sketch"
                    },
                    {
                        id: 4,
                        image: require("@/assets/skills/invision.png"),
                        name: "Invision"
                    },
                    {
                        id: 4,
                        image: require("@/assets/skills/figma.png"),
                        name: "Figma"
                    },
                    {
                        id: 4,
                        image: require("@/assets/skills/xd.png"),
                        name: "Adobe XD"
                    },
                    {
                        id: 2,
                        image: require("@/assets/skills/ui-logo.jpg"),
                        name: "UI design"
                    },
                    {
                        id: 5,
                        image: require("@/assets/skills/ux.png"),
                        name: "UX design"
                    },
                    {
                        id: 7,
                        image: require("@/assets/skills/illustrator.png"),
                        name: "Illustrator"
                    },
                    {
                        id: 8,
                        image: require("@/assets/skills/graphic-design.png"),
                        name: "Graphic design"
                    },
                    {
                        id: 10,
                        image: require("@/assets/skills/photoshop.png"),
                        name: "Photoshop"
                    },
                    {
                        id: 3,
                        image: require("@/assets/skills/html.png"),
                        name: "HTML5"
                    },
                    {
                        id: 6,
                        image: require("@/assets/skills/css.png"),
                        name: "CSS3"
                    },
                    {
                        id: 9,
                        image: require("@/assets/skills/bootstrap.png"),
                        name: "Bootstrap"
                    },
                ]
            };
        },
        methods: {}
    };
</script>
