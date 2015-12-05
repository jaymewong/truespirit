//directive on a html tells angular to run/reference some javascript code
//modules is where we define dependencies for our app and make code more maintainable
//controllers are where we define the app's behavior by defining functions and values

(function(){

	var app= angular.module("store", []);	
	
	app.controller("StoreController", function(){
		this.products=uniforms;

	});

	app.controller("PanelController", function(){
		this.tab = 1;

		this.selectTab=function(setTab){
			this.tab = setTab;
		};

		this.isSelected=function(checkTab){
			return this.tab===checkTab;
		};

	});


	var uniforms = [
	{
		name: "Long Sleeve Blazer",
		price: 23.00,
		color: "navy",
		size: "XS",
		url: "productdetail.html",
		description: "Whether or not he goes to prep school, this jacket is perfect to mix with uniforms and shirts, but dressy enough to be worn for other occasions. A true classic that should be part of any boy's wardrobe. This blazer also features one chest and two flap pockets. Polyester. Imported. Machine wash. ",
		soldOut: false,
		images: [
			{
				thumb: "Images/product/g_boys_jacket1.png",
				full: "Images/product/g_boys_jacket1_full.jpg",
			},	
		],
		reviews:[
			{
				stars: 5,
				body: "I love this jacket",
				author: "joe@email.com"
			},
		]
	},
	{
		name: "Long Sleeve Wool Blazer",
		price: 25.00,
		color: "grey",
		size: "XS",
		url: "#",
		description: "Whether or not he goes to prep school, this jacket is perfect to mix with uniforms and shirts, but dressy enough to be worn for other occasions. A true classic that should be part of any boy's wardrobe. This blazer also features one chest and two flap pockets. Polyester. Imported. Machine wash. ",
		soldOut: false,
		images: [
			{
				thumb: "Images/product/g_boys_jacket2.png",
				full: "Images/product/g_boys_jacket2.png",
			},
		]
	},
	{
		name: "Fleece Hoodie",
		price: 20.00,
		color: "navy",
		size: "XS",
		description: "Our hooded fleece lined jacket keeps kids warm during the slightly cooler months. Front zipper, two front and one sleeve pocket. Water resistant. Unisex. 100% polyester. Imported. Machine wash.",
		soldOut: false,
		images: [
			{
				thumb: "Images/product/g_boys_hoodie.png",
				full: "Images/product/g_boys_hoodie.png",
			},
		]
	}, 
	{
		name: "Fleece Hoodie",
		price: 20.00,
		color: "navy",
		size: "XS",
		description: "Our hooded fleece lined jacket keeps kids warm during the slightly cooler months. Front zipper, two front and one sleeve pocket. Water resistant. Unisex. 100% polyester. Imported. Machine wash.",
		soldOut: true,
		images: [
			{
				thumb: "Images/product/g_boys_hoodie.png",
				full: "Images/product/g_boys_hoodie.png",
			},
		]
	} 
	];
})();
