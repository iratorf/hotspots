Hotspots.Views.ReviewShow = Backbone.View.extend({
	template: JST["reviews/show"],
	
	events: {
		"mouseover .rev": "displayX",
		"mouseout .rev": "removeX",
		"click button.remove-review": "deleteReview"
	},
	
	render: function () {
		var renderedContent = this.template({
			review: this.model
		})
		this.$el.html(renderedContent);
		return this;
	},
	
	displayX: function () {
		var $button = $(event.currentTarget).find('.remove-review');
		$button.removeClass("hidden");
	},
	
	removeX: function () {
		var $button = $(event.currentTarget).find('.remove-review');
		$button.addClass("hidden");
	},
	
	deleteReview: function () {
		this.model.destroy();
		alert("Review Deleted!");
	}
})