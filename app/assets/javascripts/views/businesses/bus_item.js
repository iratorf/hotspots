Hotspots.Views.BusItem = Backbone.View.extend({
	template: JST['businesses/item'],
	
	render: function () {
		var renderedContent = this.template({
			business: this.model
		})
		
		this.$el.html(renderedContent);
		return this;
	}
});