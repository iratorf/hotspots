Hotspots.Views.BusinessesIndex = Backbone.View.extend({
	template: JST["businesses/index"],
	
	render: function () {
		var renderedContent = this.template({
			businesses: this.collection
		})
		
		this.$el.html(renderedContent);
		return this;
	}
})