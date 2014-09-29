Hotspots.Models.Business = Backbone.Model.extend({
	urlRoot: "api/businesses",
	
	tags: function () {
		if (!this._tags){
			this._tags = new Hotspots.Collections.Tags([], {business: this})
		}
		return this._tags;
	},
	
	images: function () {
		if (!this._images){
			this._images = new Hotspots.Collections.Images([], {business: this})
		}
		return this._images;
	},
	
	reviews: function () {
		if (!this._reviews){
			this._reviews = new Hotspots.Collections.Reviews([], { business: this})
		}
		return this._reviews
	},
	
	parse: function (response){
		if (response.tags){
			this.tags().set(response.tags, {parse: true} );
			delete response.tags;
		}
		
		if (response.images){
			this.images().set(response.images, {parse: true});
			delete response.images;
		}
		
		if (response.reviews){
			this.reviews().set(response.reviews, {parse: true});
			delete response.reviews;
		}
		
		return response;
	},
	
	rating: function () {
		if (this.reviews().length === 0){
			return "No Rating";
		} else {
			var count = 0;
			var scores = 0;
			this.reviews().each(function (review){
				scores += review.get('score');
				count++;
			});
			
			return Math.floor(scores/count);
		}
	}
})