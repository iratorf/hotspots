


json.businesses @businesses do |business|
	json.id business.id
	json.name business.name
	json.price_range business.price_range
	json.street business.street
	json.tags business.tags
	json.images business.images do |image|
		json.id image.id
		json.url image.url
	end
	json.reviews business.reviews do |review|
		json.business_id review.business_id
		json.score review.score
		json.user_id review.user_id
	end
end