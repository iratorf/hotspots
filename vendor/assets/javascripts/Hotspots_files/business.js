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
	
	parse: function (response){
		if (response.tags){
			this.tags().set(response.tags, {parse: true} );
			delete response.tags;
		}
		
		if (response.images){
			this.images().set(response.images, {parse: true});
			delete response.images;
		}
		
		
		return response;
	}
})
;
