var service = angular.module('starter.services', []);

service.factory('CashFlow', function(){

var cashflow = [{

		type:'Salary',
		amount: 100000,
		description: 'Salary',
		created_at:new Date()

	}, 
	{
		type: 'Foods',
		amount: 5000,
		description: 'Eat',
		created_at: new Date() +1	
	},
	{
		type: 'Movie',
		amount : 10030,
		description: 'Leisure',
		created_at: new Date() + 1

	},
	{
		type: 'Games',
		amount : 104500,
		description: 'Leisure',
		created_at: new Date() + 1

	},
	{
		type: 'Travel',
		amount : 10200,
		description: 'Leisure',
		created_at: new Date() + 1

	}





	];

	return {
		all:function(){
			return cashflow
		}
	};
});

service.factory('FlowType', function(){

var types = {

		'Salary' : {
			name: 'Salary',
			description: '',
			isIncome:true
		},
		'food' : {
			name: 'Food',
			description: '',
			isIncome: false
		},

		'Movie' : {
			name: 'Movie',
			description: '',
			isIncome: true


		}
	};

	return {
		getById:function(id) {
			if(types.hasOwnProperty(id) ){
				return types[id];
			}else{
				return null;
			}
		}
	}

});
