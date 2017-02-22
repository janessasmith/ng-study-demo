'use strict';
/*
    Create by zheng.lu 2017-02-22
*/
angular.module('showModalModule', [])
	.controller('showModalCtrl', ['$scope', '$modalInstance', 'items', function($scope, $modalInstance, items) {
		initStatus();

		/**
		 * [initStatus description] 初始化状态
		 * @return {[type]} [description]
		 */
		function initStatus() {
			$scope.data = {
                modalTitle: items.modalTitle
            };
		}

		$scope.confirm = function() {
			$modalInstance.close('ok');
		};

		$scope.cancel = function() {
			$modalInstance.dismiss('cancel');
		};
	}]);