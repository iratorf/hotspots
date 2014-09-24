Hotspots.Routers.AppRouter = Backbone.Router.extend({
	routes: {
		"/businesses": "businessIndex"
	},
	
	businessIndex: function () {
		debugger
		
		Hotspots.businesses.fetch();
		
		var indexView = new Hotspot.Views.BusinessesIndex({
			collection: Hotspots.businesses
		})
		
		this.$rootEl.html(indexView.render().$el);
	}
})