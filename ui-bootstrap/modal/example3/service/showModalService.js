'use strict';
/*
    Create by zheng.lu 2017-02-22
*/
angular.module('modalInitServiceModule', ['showModalModule'])
	.factory('modalInitService', ['$modal', function($modal) {
		return {
			openModal: function(modalTitle) {
				var modalInstance = $modal.open({
					// 指定之前id为该modalChild.html对应的模态模板
					templateUrl: './service/showModal/showModal.html',
					// 指定该模态的控制器
					controller: 'showModalCtrl',
					// modalParent.html页面中的$scope.data会被用在modalChild.html页面中，通过该项配置即可达到目的
					resolve: {
						items: function() {
							return {
								"modalTitle": modalTitle
							}
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
		};
	}]);
