Hotspots.Views.SearchView = Backbone.CompositeView.extend({
	template: JST["search"],
	
	initialize: function () {
		
		$('body').removeClass('bg');
		$('#main-search').addClass('hidden');
		$('body').addClass('main');
		$('.navbar-form').removeClass('hidden');
		$('.navbar').removeClass('root');
		
		var businessesView = new Hotspots.Views.BusinessesIndex({
			collection: this.collection
		})
		
		var mapView = new Hotspots.Views.MapAll({
			collection: this.collection
		});
		
		var filterView = new Hotspots.Views.Filter({
			collection: this.collection
		});
		
		this.addSubview('.bus-lists', businessesView);
		this.addSubview('.map', mapView);
		this.addSubview('.filter', filterView);
	},
	
	render: function () {
		var renderedContent = this.template({});
		this.$el.html(renderedContent);
		this.attachSubviews();
		
		return this;
	}
	
});