'use strict';
/*
    Create by zheng.lu 2017-02-22
*/
angular.module('modalModule', ['ui.bootstrap', 'modalInitServiceModule'])
	.controller('modalCtrl', ['$scope', 'modalInitService', function($scope, modalInitService) {
		$scope.showModal = function() {
			modalInitService.openModal('modal标题', function(result) {

			});
		};
	}]);