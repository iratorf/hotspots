Hotspots.Collections.Reviews = Backbone.Collection.extend({
	model: Hotspots.Models.Review,
	url: "api/businesses/:business_id/reviews",
	
	comparator: function (review){
		var date = new Date(review.get('created_at'))
		return -date.getTime();
	}
})