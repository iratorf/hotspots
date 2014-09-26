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
	
	filterItems: function () {
		var shown_items = []
		
		debugger
		
		$('.delete-filters').children().each(function (index){
			var $filter = $(this);
			$('.bus-items').children().each(function (index){
				var $item = $(this);
				var tag = $item.find('div.bus-attr').text().trim();
				if (tag === $filter.text()){
					shown_items.push($item);
				}
			})
		})
		debugger
		$('.bus-items').children().each(function (index){
			var item = this;
			shown_items.forEach(function (shown_item){
				if (shown_item[0] === item){
					$(item).removeClass("hidden");
					return;
				} else {
					$(item).addClass("hidden");
				}
			})
		})
		debugger
		
		// this.collection.forEach(function (business){
		// 	business.tags().models.forEach(function (model){
		// 		tagged = false;
		// 		if (model.attributes.name === value){
		// 			tagged = true;
		// 		}
		// 	})
		// 	if (tagged === false){
		// 		non_items.push(business);
		// 	}
		// })
		// var that = this;
		// non_items.forEach(function (business){
		// 	that.collection.remove(business);
		// })
	},
	
	addFilter: function (event) {
		event.preventDefault();
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
		
		this.filterItems();
	},
	
	moreFilters: function (event){
		$('#more-filters').removeClass('hidden');
	},
	
	hideFilters: function (event){
		$('#more-filters').addClass('hidden');
	},
	
	deleteFilter: function (event){
		event.preventDefault();
		$(event.currentTarget).remove();
	}
});