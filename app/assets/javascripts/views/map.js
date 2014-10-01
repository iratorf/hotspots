Hotspots.Views.Map = Backbone.View.extend({
	template: JST["map"],
	
	className: 'show-map',
	
	initialize: function () {
		if (this.collection){
			this.listenTo(this.collection, "sync", this.render)	
		} else if (this.model){
			this.listenTo(this.model, "sync", this.render)	
		}
	},
	
	render: function () {
		var renderedContent = this.template({
			businesses: this.collection,
			business: this.model
		});
		this.$el.html(renderedContent);
		if (this.collection && this.collection.length > 1) {
	    this.mapAll();
		} else if (this.model) {
			this.mapOne();
		}
		return this;
	},
	
	setMap: function (selector, options) {
		this._map = new google.maps.Map(selector, options);
		return this._map;
	},
	
	getMap: function () {
		return this._map;
	},
	
	getMarkers: function (){
		return this.markers;
	},
	
	colorMarker: function (position){
		var pinColor = "00B26B";
		var pinImage = new google.maps.MarkerImage(
			"http://chart.apis.google.com/chart?chst=d_map_pin_letter&chld=%E2%80%A2|" + pinColor,
		            new google.maps.Size(21, 34),
		            new google.maps.Point(0,0),
		            new google.maps.Point(10, 34));
		var new_marker = new google.maps.Marker({ 
			position: position, 
			map: this._map,
			icon: pinImage
		});
	},
	
	normalColor: function (position){
		var pinColor = "FF5F5F";
		var pinImage = new google.maps.MarkerImage(
			"http://chart.apis.google.com/chart?chst=d_map_pin_letter&chld=%E2%80%A2|" + pinColor,
		            new google.maps.Size(21, 34),
		            new google.maps.Point(0,0),
		            new google.maps.Point(10, 34));
		var new_marker = new google.maps.Marker({ 
			position: position, 
			map: this._map,
			icon: pinImage
		});
		return new_marker;
	},
	
	mapAll: function () {
    var mapOptions = {
      center: new google.maps.LatLng(
				this.collection.first().escape('latitude'),
				this.collection.first().escape('longitude')
			), zoom: 14 };
    var map = this.setMap(this.$('#map-canvas')[0], mapOptions);
		this.markers =[];
		this.collection.forEach(function(business){
			var latLng = new google.maps.LatLng(
				business.escape('latitude'),
				business.escape('longitude')
			);
			var mark = this.normalColor(latLng);
			this.markers.push(mark);
		}.bind(this))
		this.setBounds(this.markers, map);
	},
	
	mapOne: function () {
    var mapOptions = {
      center: new google.maps.LatLng(
				this.model.escape('latitude'),
				this.model.escape('longitude')
			), zoom: 14 };
    var map = new google.maps.Map(this.$('#map-canvas')[0], mapOptions);
		var latLng = new google.maps.LatLng(
			this.model.escape('latitude'),
			this.model.escape('longitude')
		)
		new google.maps.Marker({ position: latLng, map: map });	
	},
	
	setBounds: function (markers, map) {
		var bounds = new google.maps.LatLngBounds();
		for (var i = 0; i < markers.length; i++){
			bounds.extend(markers[i].getPosition());
		}
		
		map.fitBounds(bounds);
	}
});