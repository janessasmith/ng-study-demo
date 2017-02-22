# 弹窗使用
注意bootstrap和ui-bootstrap的版本号问题

``npm install``

``http-server -p8888``


删除某个文件(譬如node_modules)的方法：``git rm -r node_modules`` 然后再提交一下``git commit -m "delete"`` ``git push origin master``


``注意angular,bootstrap和ui-bootstrap的版本号，不对应可能会有冲突，建议使用npm或者bower安装``

###demo1
html和js都是写在一个页面中的，复用性不好，只为展示基本效果

备注：在modalParent中需要注入ui.bootstrap，并依赖$modal;在modalChild中依赖$modalInstance

###demo2
demo2是在demo1的基础上优化，将弹窗的html和js单独写入一个文件夹中，通入依赖注入调用

###demo3
demo3将弹窗封装成一个服务，并将传入的值，重新封装

备注：factory在自定义服务里注入服务，但不能注入$scope作用域对象

假如想删除git上某个文件夹，这里假设example3下有一个data文件夹，我们想把它在git删除同时本地也删除，怎么删除呢？

首先，在本地先手动把example3下的data文件删除，然后执行git add -A .(注意：这个A必须是大写哦)

http://blog.csdn.net/xiaoyuanzhiying/article/details/44085135
