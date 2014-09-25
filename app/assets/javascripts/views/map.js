Hotspots.Views.Map = Backbone.View.extend({
	template: JST["map"],
	
	render: function () {
		var renderedContent = this.template({});
		this.$el.html(renderedContent);
		return this;
	}
})