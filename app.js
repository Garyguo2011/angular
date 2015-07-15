(function() {
	var app = angular.module('store', []);
	app.controller('StoreController', function(){
		this.products = gem;
	});

	var gem = [ 
	{
		name : 'Dodecahedron',
		price : 2.95,
		description: 'something to say',
		canPurchase: true,
		soldOut: false
	},
	{
		name : "Pertagonal Gem",
		price: 5.95,
		description: "another other thing",
		canPurchase: true,
		soldOut: false
	}];
})();
