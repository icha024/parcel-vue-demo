
new Vue({
  el: '#app',
  data: {
    message: '(Try BTC or ETH)',
    currency: ''
  },
  methods: {
    fetchData: function () { 
        var vm = this
        axios.get('https://min-api.cryptocompare.com/data/pricemulti?fsyms=' + vm.currency + '&tsyms=USD,EUR,GBP').then(response => {
          if (vm.currency.length == 3) {
            vm.message = response.data
            console.debug('Got: ' + vm.message)
          }
        })
    }
  }
})