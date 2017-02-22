'use strict';
/*
    Create by zheng.lu 2017-02-22
*/
angular.module('modalParentModule', ['ui.bootstrap', 'modalChildModule'])
	.controller('modalParentCtrl', ['$scope', '$modal', function($scope, $modal) {
		$scope.data = 'This is modal coding by JanessaSmith';

		$scope.showModal = function() {
			// $modal只有一个方法open，open方法打开模态页面，其中的参数即是指定的模态页面基本情况
			var modalInstance = $modal.open({
				// 指定之前id为该modalChild.html对应的模态模板
				templateUrl: 'modalChild/modalChild.html',
				// 指定该模态的控制器
				controller: 'modalChildCtrl',
				// modalParent.html页面中的$scope.data会被用在modalChild.html页面中，通过该项配置即可达到目的
				resolve: {
					items: function() {
						return $scope.data;
					}
				}
			});
			// 模态页面被打开之后
			modalInstance.opened.then(function(result) {
				console.log('modal is opened success');
			}, function(reason) {
				console.log('modal is opened failed');
			});
			// 模态页面关闭后，此处的result和reason对应于下面$modalInstance.close和$modalInstance.dismiss中对应的ok和cancel参数
			modalInstance.result.then(function(result) {
				console.log(result);
			}, function(reason) {
				console.log(reason);
			});
		}
	}]);