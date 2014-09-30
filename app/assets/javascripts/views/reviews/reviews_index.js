Hotspots.Views.ReviewsIndex = Backbone.CompositeView.extend({
	template: JST["reviews/index"],
	
	initialize: function () {
		this.listenTo(this.collection, "add", this.addReview)
		this.listenTo(this.collection, 'sync', this.render)
	},
	
	addReview: function (review){
		var reviewView = new Hotspots.Views.ReviewShow({
			model: review,
		})
		
		this.addSubview('.review-items', reviewView);
	},
	
	render: function () {
		var renderedContent = this.template({
			reviews: this.collection,
			business: this.model
		})
		this.$el.html(renderedContent);
		this._subviews = {};
		this.collection.each(this.addReview.bind(this));
		this.attachSubviews();
		return this;
	}
})