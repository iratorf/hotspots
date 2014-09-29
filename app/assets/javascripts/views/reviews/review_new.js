Hotspots.Views.ReviewNew = Backbone.View.extend({
	template: JST["reviews/new"],
	
	render: function () {
		debugger
		var renderedContent = this.template({
			business: this.model
		})
		
		this.$el.html(renderedContent);
		return this;
	}
})