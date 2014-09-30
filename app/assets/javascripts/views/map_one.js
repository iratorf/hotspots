Hotspots.Views.MapOne = Backbone.View.extend({
	template: JST["map"],
	
	initialize: function () {
		this.listenTo(this.model, "sync", this.render)
	},
	
	render: function () {
		var renderedContent = this.template({
			business: this.model,
		});
		this.$el.html(renderedContent);
		
		if (this.model) {
	    var mapOptions = {
	      center: new google.maps.LatLng(
					this.model.escape('latitude'),
					this.model.escape('longitude')
				),
	      zoom: 14
	    };
			
	    var map = new google.maps.Map(this.$('#map-canvas')[0], mapOptions);
			
			var latLng = new google.maps.LatLng(
				this.model.escape('latitude'),
				this.model.escape('longitude')
			)

			new google.maps.Marker({ position: latLng, map: map });

		}
		
		return this;
	}
});