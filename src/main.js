new Vue({
  el: '#app',
  data: {
    message: 'Hello Vue.js!'
  },
  methods: {
    fetchData: function () { 
        var vm = this
        axios.get('https://min-api.cryptocompare.com/data/pricemulti?fsyms=BTC,ETH&tsyms=USD,EUR').then(response => {
          vm.message = response.data
          console.debug('Got: ' + vm.message)
        })
    }
  }
})