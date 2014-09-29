Hotspots.Views.BusItem = Backbone.View.extend({
	template: JST['businesses/item'],
	
	render: function () {
		var renderedContent = this.template({
			business: this.model,
			rating: this.model.rating()
		})
		
		this.$el.html(renderedContent);
		return this;
	},
});