Hotspots.Collections.Businesses = Backbone.Collection.extend({
	model: Hotspots.Models.Business,
	url: "/api/businesses",
	
	getOrFetch: function (id){
		var business;
		var that = this;
		
		if (business = this.get(id)){
			business.fetch();
		} else {
			business = new Hotspots.Models.Business({id: id});
			business.fetch({
				success: function () { that.add(business) }
			})
		}
		
		return business;
	},
	
	filteredResults: function() {
		var results = [];
		if (this.length === 0){
			return this;
		} else {
			this.forEach(function(result){
				results.push(result);
			})
		}
		return results;
	},
	
	filters: {
		tags: [],
		prices: [],
		city: "",
		distance: []
	}
})