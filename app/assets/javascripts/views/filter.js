Hotspots.Views.Filter = Backbone.View.extend({
	template: JST["filter"],
	
	className: 'filter',
	
	initialize: function () {
		var that = this;
		setTimeout(function(){
			that.renderFilterButtons();
		}, 1000);
	},
	
	events: {
		'click .current-filters button': 'deleteFilter',
		'click .filters button.filt': 'addFilter',
		'click .filters button.toggle-type': 'toggleType',
		'click .display-listings': 'hideFilters'
	},
	
	render: function () {
		this.collection.fetch({data: this.collection.filters});
		var renderedContent = this.template({});
		this.$el.html(renderedContent);
		return this;
	},
	
	addFilter: function (event) {
		event.preventDefault();
		$(event.currentTarget).prop("disabled", true);
		var value = $(event.currentTarget).val();
		var categ = event.currentTarget.classList[0];
		this.addFilterItems(value, categ);
		this.renderFilterButtons();
		this.collection.fetch({data: this.collection.filters});
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
	},

	renderFilterButtons: function () {
		$('.delete-filters').html('');
		var tags = this.collection.filters.tags;
		var prices = this.collection.filters.prices;
		var distance = this.collection.filters.distance;
		if (tags.length > 0) { this.renderTags(tags); }
		if (prices.length > 0) { this.renderPrices(prices); }
		if (distance.length > 0) { this.renderDistance(distance); }
	},
	
	disableFilters: function (value, categ) {
		if (categ === 'tag') {
			$button = $(".filters button.filt[value = '" + value + "']");
		} else if (categ === 'price'){
			$button = $(".filters button.price[value = '" + value + "']");
		} else if (categ === 'dist') {
			$button = $(".filters button.dist[value = '" + value + "']");
		}
		$button.prop("disabled", true);
	},
	
	renderTags: function (tags) {
		var that = this;
		var xstr = '<span class="glyphicon glyphicon-remove pull-right"></span>';
		tags.forEach(function (tag) {
			that.disableFilters(tag, 'tag');
			var $button = $('<button class="btn btn-default delete-filter"></button');
			$button.text(tag);
			$button.append(xstr).val(tag);
			$('.delete-filters').append($button);
		});
	},
	
	renderPrices: function (prices) {
		var that = this;
		var xstr = '<span class="glyphicon glyphicon-remove pull-right"></span>';
		var that = this;
		prices.forEach(function (price) {
			that.disableFilters(price, 'price');
			var $button = that.dollarsButton(price);
			$button.append(xstr).val(price);
			$('.delete-filters').append($button);
		})
	},
	
	renderDistance: function (distance) {
		var that = this;
		var xstr = '<span class="glyphicon glyphicon-remove pull-right"></span>';
		var that = this;
		distance.forEach(function (distance) {
			that.disableFilters(distance, 'dist');
			var $button = that.distanceButton(distance);
			$button.append(xstr).val(distance);
			$('.delete-filters').append($button);
		})
	},
	
	distanceButton: function (value){
		var $button = $('<button class="dist btn btn-default delete-filter">< ' + 
										value + ' mi</button>');
		return $button;
	},
	
	dollarsButton: function (value) {
		var num = parseInt(value, 10);
		var dollars = "";
		for(var i = 1; i <= num; i++){
			dollars += '<span class="glyphicon glyphicon-usd"></span>\n'
		}
		var $button = $('<button class="price btn btn-default delete-filter">' + 											dollars + '</button>');
		return $button;
	},
	
	deleteFilter: function (event){
		event.preventDefault();
		var value = $(event.currentTarget).val();
		var categ = event.currentTarget.classList[0];
		$button = $(".filters button.filt[value = '" + value + "']");
		$button.prop("disabled", false);
		$(event.currentTarget).remove();
		this.removeFilterItems(value, categ);
	},

	removeFilterItems: function (value, categ) {
		if (categ === "price"){
			this.removePrices(value);
		} else if (categ === "dist") {
			this.removeDistance(value);
		} else {
			this.removeTags(value);
		}
		this.renderFilterButtons();
		this.collection.fetch({data: this.collection.filters})	
	},
	
	removeTags: function (value) {
		var tags = this.collection.filters.tags;
		var idx =	tags.indexOf(value);
		tags.splice(idx, 1);
	},
	
	removePrices: function (value) {
		var val = parseInt(value, 10);
		var prices = this.collection.filters.prices;
		var idx =	prices.indexOf(val);
		prices.splice(idx, 1);
	},
	
	removeDistance: function (value){
		var val = parseInt(value, 10);
		var distance = this.collection.filters.distance;
		var idx = distance.indexOf(val);
		distance.splice(idx, 1);
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
	}
});