Hotspots.Views.BusinessShow = Backbone.CompositeView.extend({
	template: JST["businesses/show"],
	
	initialize: function () {
		
		$('body').removeClass('bg');
		$('#main-search').addClass('hidden');
		$('body').addClass('main');
		$('.navbar-form').removeClass('hidden');
		$('.navbar').removeClass('root');
		
		this.listenTo(this.model, 'sync', this.render);
		
		var reviewNew = new Hotspots.Views.ReviewNew({
			model: this.model
		})
		
		this.addSubview('.new-review', reviewNew);
	},
	
	render: function () {

		var renderedContent = this.template({
			business: this.model
		})
		
		this.$el.html(renderedContent);
		this.attachSubviews();
		return this;
	}
})