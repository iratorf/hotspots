Hotspots.Views.BusinessesIndex = Backbone.CompositeView.extend({
	template: JST["businesses/index"],
	
	initialize: function (options) {
		this.listenTo(this.collection, "add", this.addBusItem);
		this.listenTo(this.collection, "sync", this.render);
		this.mapView = options.mapView;
	},
	
	addBusItem: function (business) {
		var busItemView = new Hotspots.Views.BusItem({
			model: business,
			mapView: this.mapView
		})
		this.addSubview('.bus-items', busItemView)
	},

	// removeBusItem: function (business) {
// 		var subView = _.find(this.subviews('.bus-items'), function(subView){
// 			return subView.model === business;
// 		})
// 		this.removeSubview('.bus-items', subView);
// 	},
	
	render: function () {
		var renderedContent = this.template({
			businesses: this.collection
		})
		this.$el.html(renderedContent);
		this._subviews = {};
		this.collection.each(this.addBusItem.bind(this));
		this.attachSubviews();
		return this;
	}
});