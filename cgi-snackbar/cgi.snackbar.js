var cgiSnackbarComponent = Vue.component('cgi-snackbar', {
  template: `
  <v-snackbar
      :color=color
      v-model="snackbar"
      :bottom="y === 'bottom'"
      :left="x === 'left'"
      :multi-line="mode === 'multi-line'"
      :right="x === 'right'"
      :timeout="timeout"
      :top="y === 'top'"
      :vertical="mode === 'vertical'"
      dark
    >
      {{ text }}
      <v-btn
        color="white"
        flat
        @click="snackbar = false"
        v-show="snackbar"
      >
        Fechar
      </v-btn>
    </v-snackbar>
  `,
  data: () => ({
    snackbar: false,
    y: 'botton',
    x: 'left',
    mode: '',
    timeout: 6000,
    text: '',
    color: '#121833',
    type: 'default'
  }),
  methods: {
    setText (text) {
      this.text = text;
    },

    setType(type) {
      this.type = type;
      switch(this.type) {
        case 'default':
          this.color = '#121833'
          break;
        
        case 'alert':
          this.color = 'red'
          break;

        default:
          this.color = '#121833'
          break;
      }
    },

    setTimeout (timeout) {
      this.timeout = timeout;
    },

    setMode (mode) {
      this.mode = mode;
    },

    setX (x) {
      this.x = x;
    },

    setY (y) {
      this.y = y;
    },

    setSnackbar (snackbar) {
      this.snackbar = snackbar;
    }
  }
})


cgiSnackbar = new Vue({
  el: '#app',
  components: {
    cgiSnackbarComponent
  }
})