Vue.use(VueGoogleMaps, {
    load: {
      key: 'AIzaSyA1EhRNbIQ4bmpHLHdl7LcXX0MYz6lilU0'
    }
  });

Vue.component('star-rating', VueStarRating.default);

var app = new Vue({
    el: '#app',
    data: {
      logo: 'Melp!',
      locations: [],
      sortBy:    'rating',
      orderBy:    'des',
      center:   {lat:19.432608, lng: -99.133209},
      zoom:     15,
      searchQuery: ''
    },
    computed: {

        orderedLocations: function () {
            if (this.orderBy === 'asc')
                return _.sortBy(this.locations, this.sortBy)
            else
                return _.sortBy(this.locations, this.sortBy).reverse()
        },

        filteredLocations: function(){
            return this.orderedLocations.filter((element) => {
                return element.name.match(this.searchQuery);
            });
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