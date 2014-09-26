Hotspots.Views.Map = Backbone.View.extend({
	template: JST["map"],
	
	initialize: function () {
		this.listenTo(this.collection, "add", this.render)
	},
	
	render: function () {
		var renderedContent = this.template({
			businesses: this.collection
		});
		this.$el.html(renderedContent);
		
		if (this.collection.length > 1) {
	    var mapOptions = {
	      center: new google.maps.LatLng(
					this.collection.first().escape('latitude'),
					this.collection.first().escape('longitude')
				),
	      zoom: 11
	    };
			
	    var map = new google.maps.Map(this.$('#map-canvas')[0], mapOptions);
				
			this.collection.forEach(function(business){
				var latLng = new google.maps.LatLng(
					business.escape('latitude'),
					business.escape('longitude')
				);

				new google.maps.Marker({ position: latLng, map: map });
			})
		}
		
		return this;
	}
});