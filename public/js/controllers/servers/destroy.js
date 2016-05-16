angular.module('App')
	.controller('DestroyCtrl', ['$scope', 'Server', '$location', '$routeParams', function ($scope, Server, $location, $routeParams) {

		var id = $routeParams.id;

		Server.get(id)
			.then(function (response) {
				$scope.server = response.data;
			}).catch(function () {

			});

		$scope.destroy = function (server) {

			console.log(server);

			Server.destroy(server)
					.then(function (response) {

						if (response.status == 200) {
							$location.url('/');
						}

					}).catch(function () {

					});
		}

	}]);