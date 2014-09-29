Hotspots.Views.BusinessShow = Backbone.CompositeView.extend({
	template: JST["businesses/show"],
	
	initialize: function () {
		
		$('body').removeClass('bg');
		$('#main-search').addClass('hidden');
		$('body').addClass('main');
		$('.navbar-form').removeClass('hidden');
		$('.navbar').removeClass('root');
		
		this.listenTo(this.model, 'sync', this.render);
		this.listenTo(this.model.reviews(), 'add', this.render);
		
		var reviewsIndex = new Hotspots.Views.ReviewsIndex({
			collection: this.model.reviews()
		})
		
		var reviewNew = new Hotspots.Views.ReviewNew({
			model: this.model
		})
		
		this.addSubview('.reviews', reviewsIndex);
		this.addSubview('.new-review', reviewNew);
		
	},
	
	render: function () {

		var renderedContent = this.template({
			business: this.model,
			rating: this.model.rating(),
			numReviews: this.model.reviews().length
		})
		
		this.$el.html(renderedContent);
		this.attachSubviews();
		return this;
	}
})