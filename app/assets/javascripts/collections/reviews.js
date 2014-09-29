Hotspots.Collections.Reviews = Backbone.Collection.extend({
	model: Hotspots.Models.Review,
	url: "api/businesses/:business_id/reviews"
})