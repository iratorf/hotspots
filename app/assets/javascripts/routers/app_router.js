Hotspots.Routers.AppRouter = Backbone.Router.extend({
	routes: {
		"businesses": "businessIndex"
	},
	
	initialize: function (options) {
		this.$rootEl = options.$rootEl
	},
	
	businessIndex: function () {
		
		Hotspots.businesses.fetch({
			success: function () {console.log(Hotspots.businesses)}
		});
		
		var indexView = new Hotspots.Views.BusinessesIndex({
			collection: Hotspots.businesses
		})
		
		this.$rootEl.html(indexView.render().$el);
	}
})