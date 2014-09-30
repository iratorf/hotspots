Hotspots.Views.BusItem = Backbone.View.extend({
	template: JST['businesses/item'],
	
	initialize: function () {
		this.listenTo(this.model, "sync", this.render)
	},
	
	events: {
		"click .bus-item a": "handleRedirect"
	},
	
	render: function () {
		var renderedContent = this.template({
			business: this.model,
			rating: this.model.rating()
		})
		
		this.$el.html(renderedContent);
		return this;
	},
	
	handleRedirect: function (event) {	
		event.preventDefault();
		var id = this.model.attributes.id;
		Backbone.history.navigate(('/businesses/' + id), { trigger: true });
	}
});