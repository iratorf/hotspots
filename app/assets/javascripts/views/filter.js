Hotspots.Views.Filter = Backbone.View.extend({
	template: JST["filter"],
	
	render: function () {
		var renderedContent = this.template({});
		this.$el.html(renderedContent);
		return this;
	}
});