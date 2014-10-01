Hotspots.Routers.AppRouter = Backbone.Router.extend({
	routes: {
		"search": "searchIndex",
		"businesses/:id": "businessShow"
	},
	
	initialize: function (options) {
		this.$rootEl = options.$rootEl
	},
	
	searchIndex: function (params) {
		
		var city = params.substring(5).split('+').join(' ').toLowerCase();
		
		Hotspots.businesses.fetch({ data: { city: city }});
		Hotspots.businesses.filters.city.length = 0;	
		Hotspots.businesses.filters.city.push(city);	
		
		
		var searchView = new Hotspots.Views.SearchView({
			collection: Hotspots.businesses
		})
		
		this._swapView(searchView);
	},
	
	businessShow: function (id) {
		
		var business = Hotspots.businesses.getOrFetch(id);
		
		var busShowView = new Hotspots.Views.BusinessShow({
			model: business
		})
		
		this._swapView(busShowView);
	},
	
	_swapView: function (view){
		this._currentView && this._currentView.remove();
		this._currentView = view;
		this.$rootEl.html(view.render().$el);
	}
	
})