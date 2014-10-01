Hotspots.Views.ReviewNew = Backbone.View.extend({
	template: JST["reviews/new"],
	
	className: 'new-review',
	
	events: {
		"submit #new-review": "handleSubmit",
		"click button.review": "handleSubmit"
		
	},
	
	handleSubmit: function (event) {
		event.preventDefault();
		
		$('#reviewModal').modal('hide');
		$('.modal-backdrop').remove();
		
		var params = $(event.currentTarget).serializeJSON().review;
		
		params.business_id = this.model.id;
		params.score = parseInt(params.score, 10);
		
		var newReview = new Hotspots.Models.Review(params);
		
		$(event.currentTarget).find("textarea").val("");
		$(event.currentTarget).find("input.rate").prop('checked', false);
		
		var that = this;
		newReview.save({}, {
			success: function () {
				that.model.reviews().add(newReview);
			} 
		})
	},
	
	render: function () {
		var renderedContent = this.template({
			business: this.model
		})
		
		this.$el.html(renderedContent);
		return this;
	}
})