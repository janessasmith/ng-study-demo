'use strict';
/*
    Create by zheng.lu 2017-02-22
*/
angular.module('modalInitServiceModule', ['showModalModule'])
	.factory('modalInitService', ['$modal', function($modal) {
		return {
			openModal: function(modalTitle, success) {
				var modalInstance = $modal.open({
					// 指定之前id为该modalChild.html对应的模态模板
					templateUrl: './service/showModal/showModal.html',
					// 指定该模态的class类名
					windowClass: 'modal-window',
					// 指定该模态的控制器
					controller: 'showModalCtrl',
					// 弹出模态框时，背景是否置灰，默认为true(置灰)
					backdrop: false,
					// 模态框大小，只有sm/md/lg或者不填这几个值，默认为md
					size: 'sm',
					// modalParent.html页面中的$scope.data会被用在modalChild.html页面中，通过该项配置即可达到目的
					resolve: {
						items: function() {
							return {
								"modalTitle": modalTitle
							}
						}
					}
				});
				// 这种写法更加简化，其实我们并不需要传两个回调函数
				modalInstance.result.then(function(result) {
					success(result);
				});
			}
		};
	}]);
