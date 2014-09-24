window.Hotspots = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {
		
		Hotspots.businesses = new Hotspots.Collections.Businesses
		
		new Hotspots.Router.AppRouter({
			"$rootEl": $('.main')
		})
		
		Backbone.history.start();
  }
};
