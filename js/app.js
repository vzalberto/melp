var app = new Vue({
    el: '#app',
    data: {
      logo: 'Melp!',
      locations: [],
      sortBy:    'rating',
      orderBy:    'asc'
    },
    computed: {
        orderedLocations: function () {
        if (this.orderBy === 'asc')
            return _.sortBy(this.locations, this.sortBy).reverse()
        else
            return _.sortBy(this.locations, this.sortBy)
        }
    },
    methods:{
        fetchLocations(){
            this.$http.get('https://s3-us-west-2.amazonaws.com/lgoveabucket/data_melp.json', )
              .then(response => {
                return response.json();
              })
              .then(data => {
                this.locations = data;
              });
          }
    },
      beforeMount(){
          this.fetchLocations();
      }
  })