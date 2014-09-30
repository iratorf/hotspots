Hotspots.Views.BusinessShow = Backbone.CompositeView.extend({
	template: JST["businesses/show"],
	
	initialize: function () {
		this.clearDesign();
		this.listenTo(this.model, 'sync', this.render);
		this.listenTo(this.model.reviews(), 'sync add', this.render);

		this.addReviewsIndex();
		this.addReviewNew();
		this.addMap();
	},
	
	clearDesign: function () {
		$('body').removeClass('bg');
		$('#main-search').addClass('hidden');
		$('body').addClass('main');
		$('.navbar-form').removeClass('hidden');
		$('.navbar').removeClass('root');
	},
	
	addReviewsIndex: function () {
		var reviewsIndex = new Hotspots.Views.ReviewsIndex({
			collection: this.model.reviews(),
			model: this.model
		})
		this.addSubview('.reviews', reviewsIndex);		
	},
	
	addReviewNew: function () {
		var reviewNew = new Hotspots.Views.ReviewNew({
			model: this.model
		})
		this.addSubview('.new-review', reviewNew);
	},
	
	addMap: function () {
		var mapShow = new Hotspots.Views.Map({
			model: this.model
		})
		this.addSubview('.show-map', mapShow);
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