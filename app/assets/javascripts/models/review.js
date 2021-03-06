Hotspots.Models.Review = Backbone.Model.extend({
	urlRoot: "/api/businesses/:business_id/reviews",
	
	user: function () {
		if (!this._user){
			this._user = new Hotspots.Models.User();
		}
		
		return this._user
	},
	
	parse: function (response){
		if (response.user){
			this.user().set(response.user, { parse: true});
			delete response.user
		}
		
		return response
	},
})