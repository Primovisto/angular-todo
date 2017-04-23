angular.module('UserService', [])
	.factory('UserAPIService', function($http) {
		UserAPIService = {
			callAPI: function(url, data) {
				return $http.post(url, data);
			}
		};
		return UserAPIService;
	});

angular.module('TodoService', [])
    .factory('TodoAPIService', function($http) {
        TodoAPIService = {
            getTodos: function(url, data, token) {
                var header = "Authorization: JWT " + token;
                return $http.get(url, {params:{"username": data}}, header);
            }
        };
        return TodoAPIService;
    });
