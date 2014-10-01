Hotspots.Views.Filter = Backbone.View.extend({
	template: JST["filter"],
	
	events: {
		'click .current-filters button': 'deleteFilter',
		'click .filters button.filt': 'addFilter',
		'click .filters button.toggle-type': 'toggleType',
		'click .display-listings': 'hideFilters'
	},
	
	render: function () {
		var renderedContent = this.template({});
		this.$el.html(renderedContent);
		return this;
	},
	
	addFilterItems: function (value, categ) {
		if (categ === "price"){
			var num = parseInt(value, 10);
			this.collection.filters.prices.push(num);
		} else if (categ === "dist"){
			var num = parseInt(value, 10);
			this.collection.filters.distance.push(num);
		} else {
			this.collection.filters.tags.push(value);	
		}
		this.collection.fetch({data: this.collection.filters});
	},
	
	removeFilterItems: function (value, categ) {
		if (categ === "price"){
			var val = parseInt(value, 10);
			var prices = this.collection.filters.prices;
			var idx =	prices.indexOf(val);
			prices.splice(idx, 1);
		} else if (categ === "dist") {
			var val = parseInt(value, 10);
			var distance = this.collection.filters.distance;
			var idx = distance.indexOf(val);
			distance.splice(idx, 1);
		} else {
			var tags = this.collection.filters.tags;
			var idx =	tags.indexOf(value);
			tags.splice(idx, 1);
		}
		this.collection.fetch({data: this.collection.filters})	
	},
	
	addFilter: function (event) {
		event.preventDefault();
		$(event.currentTarget).prop("disabled", true);
		var value = $(event.currentTarget).val();
		var categ = event.currentTarget.classList[0];
		if (categ === "price"){
			var $button = this.addDollars(value);
		} else if (categ === "dist"){
			var $button = this.addDistance(value);
		} else {
			var $button = $('<button class="btn btn-default delete-filter"></button');
			$button.text(value);
		}
		var xstr = '<span class="glyphicon glyphicon-remove pull-right"></span>';
		$button.append(xstr).val(value);
		$('.delete-filters').append($button);
		this.addFilterItems(value, categ);
	},
	
	addDistance: function (value){
		var $button = $('<button class="dist btn btn-default delete-filter">< ' + 
										value + ' mi</button>');
		return $button;
	},
	
	addDollars: function (value) {
		var num = parseInt(value, 10);
		var dollars = "";
		for(var i = 1; i <= num; i++){
			dollars += '<span class="glyphicon glyphicon-usd"></span>\n'
		}
		var $button = $('<button class="price btn btn-default delete-filter">' + 											dollars + '</button>');
		return $button;
	},
	
	toggleType: function (event){
		$('#more-types').toggleClass('hidden');
		var caret = " <span class='caret'></span>";
		if ($(event.currentTarget).text().trim() === "More Types") {
			$(event.currentTarget).text("Less Types").append(caret);
		} else {
			$(event.currentTarget).text("More Types").append(caret);
		}
	},
	
	hideFilters: function (event){
		$('#more-filters').addClass('hidden');
	},
	
	deleteFilter: function (event){
		event.preventDefault();
		var value = $(event.currentTarget).val();
		var categ = event.currentTarget.classList[0];
		$button = $(".filters button.filt[value = '" + value + "']");
		$button.prop("disabled", false);
		$(event.currentTarget).remove();
		this.removeFilterItems(value, categ);
	}
});