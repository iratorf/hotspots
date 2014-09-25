Hotspots.Routers.AppRouter = Backbone.Router.extend({
	routes: {
		"search": "searchIndex"
	},
	
	initialize: function (options) {
		this.$rootEl = options.$rootEl
	},
	
	searchIndex: function () {
		
		Hotspots.businesses.fetch();
		
		var searchView = new Hotspots.Views.SearchView({
			collection: Hotspots.businesses
		})
		
		this.$rootEl.html(searchView.render().$el);
	},
})