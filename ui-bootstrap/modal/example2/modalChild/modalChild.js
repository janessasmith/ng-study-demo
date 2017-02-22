'use strict';
/*
    Create by zheng.lu 2017-02-22
*/
angular.module('modalChildModule', [])
	.controller('modalChildCtrl', ['$scope', '$modalInstance', 'items', function($scope, $modalInstance, items) {
		$scope.data = items;

		$scope.confirm = function() {
			$modalInstance.close('ok');
		};

		$scope.cancel = function() {
			$modalInstance.dismiss('cancel');
		};
	}]);