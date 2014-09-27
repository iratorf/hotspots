Hotspots.Views.Filter = Backbone.View.extend({
	template: JST["filter"],
	
	events: {
		'click .current-filters button': 'deleteFilter',
		'click .filters button.filt': 'addFilter',
		'click .filters button.more-filt': 'moreFilters',
		'click .display-listings': 'hideFilters'
	},
	
	render: function () {
		var renderedContent = this.template({});
		this.$el.html(renderedContent);
		return this;
	},
	
	addFilterItems: function (value) {
		
		if (value.length === 1){
			var num = parseInt(value, 10);
			this.collection.filters.prices.push(num);
		} else {
			this.collection.filters.tags.push(value);	
		}
		
		
		this.collection.fetch({data: this.collection.filters})
	},
	
	removeFilterItems: function (value) {
		
		if (value.length === 1){
			var prices = this.collection.filters.prices;
			var idx =	prices.indexOf(value);
			prices.splice(idx, 1);
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
		value = $(event.currentTarget).val();
		
		if (value.length === 1){
			var num = parseInt(value, 10);
			var dollars = "";
			for(var i = 1; i <= num; i++){
				dollars += '<span class="glyphicon glyphicon-usd"></span>\n'
			}
			var $button = $('<button class="btn btn-default delete-filter">' + 											dollars + '</button');
		} else {
			var $button = $('<button class="btn btn-default delete-filter"></button');
			$button.text(value);
		}
		
		var xstr = '<span class="glyphicon glyphicon-remove pull-right"></span>';
		$button.append(xstr);
		
		$button.val(value);
		$('.delete-filters').append($button);
		
		this.addFilterItems(value);
	},
	
	moreFilters: function (event){
		$('#more-filters').removeClass('hidden');
	},
	
	hideFilters: function (event){
		$('#more-filters').addClass('hidden');
	},
	
	deleteFilter: function (event){
		event.preventDefault();
		var value = $(event.currentTarget).val();
		$button = $(".filters button.filt[value = '" + value + "']");
		$button.prop("disabled", false);
		$(event.currentTarget).remove();
		this.removeFilterItems(value);
	}
});