Hotspots.Views.BusinessesIndex = Backbone.CompositeView.extend({
	template: JST["businesses/index"],
	
	initialize: function () {
		this.listenTo(this.collection, "add", this.addBusItem);
		this.listenTo(this.collection, "sync", this.render);
		
	},
	
	addBusItem: function (business) {
		var busItemView = new Hotspots.Views.BusItem({
			model: business
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