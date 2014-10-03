Hotspots.Views.BusItem = Backbone.View.extend({
	template: JST['businesses/item'],
	
	initialize: function (options) {
		this.listenTo(this.model, "sync", this.render);
		this.mapView = options.mapView;
	},
	
	tagName: "li",
	
	className: "bus-item pull-left",
	
	events: {
		"click .bus-item a": "handleRedirect",
		"mouseover .bus-item a": "greenIcon",
		"mouseout .bus-item a": "redIcon"
	},
	
	render: function () {
		var renderedContent = this.template({
			business: this.model,
			rating: this.model.rating()
		})
		
		this.$el.html(renderedContent);
		return this;
	},
	
	handleRedirect: function (event) {
		event.preventDefault();
		var id = this.model.attributes.id;
		Backbone.history.navigate(('/businesses/' + id), { trigger: true });
	},
	
	greenIcon: function (event) {
		var map = this.mapView.getMap();
		var markers = this.mapView.getMarkers();
		var idx = this.model.collection.indexOf(this.model);
		var mark = markers[idx];
		mark.setMap(null);
		this.mapView.colorMarker(mark.position);
	},
	
	redIcon: function (event) {
		var map = this.mapView.getMap();
		var markers = this.mapView.getMarkers();
		var idx = this.model.collection.indexOf(this.model);
		var mark = markers[idx];
		mark.setMap(null);
		this.mapView.normalColor(mark.position);
	}
});