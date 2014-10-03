Hotspots.Views.SearchView = Backbone.CompositeView.extend({
	template: JST["search"],
	
	className: "search",
	
	initialize: function () {
		
		$('body').removeClass('bg');
		$('#main-search').addClass('hidden');
		$('body').addClass('main');
		$('.navbar-form').removeClass('hidden');
		$('.navbar').removeClass('root');
		$('.home').addClass('hidden');
		
		var mapView = new Hotspots.Views.Map({
			collection: this.collection
		});
		
		var businessesView = new Hotspots.Views.BusinessesIndex({
			collection: this.collection,
			mapView: mapView
		})
		
		var filterView = new Hotspots.Views.Filter({
			collection: this.collection
		});
		this.addSubview('.map', mapView);
		this.addSubview('.display-listings', filterView);
		this.addSubview('.display-listings', businessesView);
	},
	
	render: function () {
		var renderedContent = this.template({});
		this.$el.html(renderedContent);
		this.attachSubviews();
		
		return this;
	}
	
});