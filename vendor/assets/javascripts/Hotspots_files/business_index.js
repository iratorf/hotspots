Hotspots.Views.BusinessesIndex = Backbone.CompositeView.extend({
	template: JST["businesses/index"],
	
	initialize: function () {
		this.listenTo(this.collection, "add", this.addBusItem);
		this.listenTo(this.collection, "add", this.render);
		
		var that = this;
		this.collection.models.forEach(function (business){
			that.addBusItem(business);
		})
		
	},
	
	addBusItem: function (business) {
		var busItemView = new Hotspots.Views.BusItem({
			model: business
		})
	
		this.addSubview('.bus-items', busItemView)
	},
	
	render: function () {
		var renderedContent = this.template({
			businesses: this.collection
		})
		
		this.$el.html(renderedContent);
		this.attachSubviews();
		return this;
	}
});
