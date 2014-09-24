Hotspots.Views.BusinessesIndex = Backbone.View.extend({
	template: JST["businesses/index"],
	
	initialize: function () {
		this.listenTo(this.collection, "add", this.render);
	},
	
	render: function () {
		var renderedContent = this.template({
			businesses: this.collection
		})
		
		this.$el.html(renderedContent);
		return this;
	}
})