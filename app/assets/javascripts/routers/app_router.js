Hotspots.Routers.AppRouter = Backbone.Router.extend({
	routes: {
		"search": "searchIndex"
	},
	
	initialize: function (options) {
		this.$rootEl = options.$rootEl
	},
	
	searchIndex: function (params) {
		
		var city = params.substring(5).split('+').join(' ');
		
		Hotspots.businesses.fetch({ data: { city: city }});
		
		var searchView = new Hotspots.Views.SearchView({
			collection: Hotspots.businesses
		})
		
		this.$rootEl.html(searchView.render().$el);
	},
})