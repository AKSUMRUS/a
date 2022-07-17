<template lang="pug">
.main
    VShell(
      :banner="banner"
      :shell_input="send_to_terminal"
      :commands="commands"
      @shell_output="prompt"
    )
</template>

<script>
import VShell from "../../node_modules/vue-shell/src/v-shell.vue";

export default {
    data() {
    return {
      send_to_terminal: "",
      banner: {
        header: "Сигма Админ",
        subHeader: "Панель админа эконом игры",
        helpHeader: 'Введи "help" для более подробной информации',
        emoji: {
            first: "☠️",
            second: "💀",
            time: 750
        },
        sign: "админ $",
        img: {
            align: "left",
            link: "https://i.ibb.co/MnVpyfF/logo.png",
            width: 100,
            height: 100
        }
      },
      commands: [
        { name: "info",
          get() {
            return `<p>C ❤️ Сигма.</p>`;
        }
        },
        {
          name: "uname",
          get() {
            return navigator.appVersion;
          }
        }
      ]
    };
  },
  methods: {
    prompt(value) {
      if (value == "node -v") {
        this.send_to_terminal = process.versions.node;
      }
    }
  },
  components: {
    VShell
}
}
</script>

<style>
    html{
      background-color: black;
    }
    .main{
        width: 90%;
        height: 100%;
        background-color: black;
    }
</style>
