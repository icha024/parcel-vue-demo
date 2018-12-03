
new Vue({
  el: '#app',
  data: {
    price: '',
    priceByCurrency: {
      USD: '',
      EUR: '',
      GBP: '',
    },
    currency: '',
  },
  methods: {
    fetchData: function () { 
        var vm = this
        axios.get('https://min-api.cryptocompare.com/data/pricemulti?fsyms=' + vm.currency + '&tsyms=USD,EUR,GBP').then(response => {
          if (vm.currency.length == 3) {
            vm.price = response.data
            vm.priceByCurrency.USD = response.data[vm.currency].USD
            vm.priceByCurrency.EUR = response.data[vm.currency].EUR
            vm.priceByCurrency.GBP = response.data[vm.currency].GBP
          }
        })
    }
  }
})