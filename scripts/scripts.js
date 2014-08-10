"use strict";angular.module("enqApp",["ngRoute","ngAnimate","enqApp.directives","enqApp.controllers"]).config(["$routeProvider","$httpProvider","$locationProvider","$provide",function(a,b,c,d){b.defaults.useXDomain=!0,delete b.defaults.headers.common["X-Requested-With"],d.decorator("$rootScope",["$delegate",function(a){return Object.defineProperty(a.constructor.prototype,"$onRootScope",{value:function(b,c){var d=a.$on(b,c);return this.$on("$destroy",d),d},enumerable:!1}),a}]),a.when("/enquiryForm",{template:'<enq-form destination="{{$parent.destination}}" app-id="{{$parent.appId}}"></enq-form>'}).when("/enqformstatus",{templateUrl:"./views/enqstorage/enqstoragestatusmodalview.html",controller:"EnqformStatusModalCtrl"}).otherwise({redirectTo:"/"})}]),angular.module("enqApp.directives",["enqApp.data","enqApp.services","enqApp.filters","ngSanitize","ixomega.directives"]),angular.module("enqApp.services",["onlineStatusModule","localStorageModule","enqApp.data","ixomega.data","enqApp.services.statusMessage","ixomega.utils"]),angular.module("enqApp.controllers",["enqApp.services"]),angular.module("enqApp.data",[]),angular.module("ixomega.utils",[]),function(a){var b=function(a,b){return void 0===b?!1:(b=JSON.stringify(b),localStorage.setItem(a,b),!0)},c=function(a){var b=localStorage.getItem(a);return b?b=JSON.parse(b):{}},d=function(a){localStorage.removeItem(a)},e=function(e){this.$get=function(){var f=function(a){this.$$tableName=a,this.$$table=c(a)};f.prototype.addItem=f.prototype.setItem=function(c,d){var f,g;if(g=a.isUndefined(d),g&&e.isEmpty(c))return{};if(g&&e.isEmpty(this.$$table))this.$$table=[];else if(g&&!a.isArray(this.$$table))throw new Error("itemName should be specified in Object Storage mode.");if(g){if(e.contains(c,this.$$table))return{};f=c,this.$$table.push(f)}else{if(e.contains(d,this.$$table))return{};f=this.$$table[c]=d}return b(this.$$tableName,this.$$table),f},f.prototype.getItem=function(a){var b;return this.$$table.hasOwnProperty(a)?b=this.$$table[a]:null},f.prototype.removeItem=function(c){var d;return d=a.isArray(this.$$table)?this._removeFromArray(c):this._removeFromObject(c),b(this.$$tableName,this.$$table),d},f.prototype._removeFromArray=function(b){var c,d;return c=a.isNumber(b)?b:e.getIndex(this.$$table,b),c<=this.$$table.length&&c>=0?(d=this.$$table[c],this.$$table.splice(c,1),d):null},f.prototype._removeFromObject=function(a){var b;return this.$$table.hasOwnProperty(a)?(b=this.$$table[a],delete this.$$table[a],b):null},f.prototype.clearTable=function(){this.$$table={},d(this.$$tableName)},f.prototype.getTable=function(){return this.$$table},f.prototype.tableIsEmpty=function(){return e.isEmpty(this.$$table)};var g=function(a){return new f(a)};return g}};a.module("localStorageModule",["ixomega.utils"]).provider("$storage",["IxUtils",e])}(angular),angular.module("enqApp.filters",[]).filter("byAttribute",function(){return function(a,b,c){var d=a||[],e=b||[],f=function(a,b){return!!a.selected&&b[c]===a.id};if(angular.isUndefined(c))throw new Error("byAttribute filter requires an attribute value:\nie: \"byAttribute:formData.attendanceFilters:'attendance'\"");return d.filter(function(a){return e.some(function(b){return f(b,a)})})}}),angular.module("ixomega.directives",[]).directive("ngModelOnblur",function(){return{restrict:"A",require:"ngModel",priority:1,link:function(a,b,c,d){if("radio"!==c.type&&"checkbox"!==c.type){var e=function(){a.$apply(function(){d.$setViewValue(b.val().trim()),d.$render()})};b.off("input").off("keydown").off("change").on("focus",function(){a.$apply(function(){d.$setPristine()})}).on("blur",e).on("keydown",function(a){13===a.keyCode&&e()})}}}}),angular.module("enqApp.directives").directive("enqForm",function(){return{templateUrl:"./views/enqform.html",restrict:"E",replace:!0,scope:{destination:"@",appId:"@"},controller:"EnqFormCtrl"}}).controller("EnqFormCtrl",["$scope","$location","formSettingsService","enqStorageFactory","onlineStatusService","enqStorageStatus",function(a,b,c,d,e){function f(){b.path("/enqformstatus")}function g(){console.log("posting"),h.post()}a.appId||(a.appId=c.appId,a.destination=c.destination),a.inputs=c.inputsHash;var h=d(a.appId,a.destination,e);h.startOnlineService();{var i=a.getModelFieldById=function(b){return a.inputs&&a.inputs[b]||{}};a.getFormFieldById=function(b){return a.enqForm&&a.enqForm[b]||{}}}a.getValidation=function(a){return i(a).validation||{}};var j={};a.user={},a.formSettings=c.settings,a.formData=c.data,a.filters={},a.save=function(a){j=angular.copy(a),h.saveAndPost(angular.copy(a)).then(f,f)},a.reset=function(){a.user={},j={},k(a.formData.additionalInfo,!1),k(a.formData.attendanceFilters,!0),angular.isDefined(a.enqForm.uAddtnlInfo)&&a.enqForm.uAddtnlInfo.$setPristine(),a.ix.enqForm.setAttempted(!1),a.enqForm.$setPristine()};var k=function(a,b){angular.forEach(a,function(a){a.selected=b})};a.isUnchanged=function(a){return angular.equals(a,j)},a.isFieldRequired=function(b){var c=a.getValidation(b);return c&&c.required&&c.required.value||!1},a.getFieldPlaceholder=function(a){return i(a).placeholder},a.getFieldMaxLength=function(b){var c=a.getValidation(b);return parseInt(c&&c.maxlength&&c.maxlength.value)||1e4};var l=function(b){return angular.isDefined(a.formData[b])&&a.formData[b].filter(function(a){return a.selected===!0}).length||0},m={uAddtnlInfo:"additionalInfo",uAttendance:"attendanceFilters"};a.getCheckboxReq=function(b){return!(0!==l(m[b])||!a.isFieldRequired(b))},a.$watch("formData.additionalInfo|filter:{selected:true}",function(b,c){b!==c&&(angular.equals(b,[])||a.enqForm.uAddtnlInfo.$setDirty(),a.user.alsoInterestedIn=0===b.length?void 0:b.map(function(a){return a.label}))},!0),a.$watch("filters.selType",function(a,b){n(a,b)||o(a,"type")&&q()},!0),a.$watch("filters.selSubject",function(a,b){n(a,b)||o(a,"subject")&&q()},!0),a.$watch("formData.attendanceFilters|filter:{selected:true}",function(a,b){if(!n(a,b)){var c=a.filter(function(a){return p(a,"attendance")});0===c.length&&q()}},!0);var n=function(b,c){return b!==c&&a.user.course?!1:!0},o=function(a,b){return!p(a,b)},p=function(b,c){return a.user.course[c]===b.id?!0:!1},q=function(){a.user.course=void 0};a.$onRootScope("onlineStatusChange",function(a,b){console.log("updateOnlineStatus",b),b&&g()}),a.$on("$destroy",function(){console.log("DESTROY"),h.stopOnlineService()}),g()}]),angular.module("enqApp.directives").directive("enqFormLink",function(){return{restrict:"E",replace:!0,transclude:!0,template:'<a href="#/enquiryForm" ng-transclude></a>'}}),angular.module("enqApp.directives").directive("enqFormSection",function(){return{template:'<div class="enq-section"><div ng-view class="enq-view" id="enq-view"></div></div>',restrict:"E",replace:!0,scope:{destination:"@",appId:"@"},controller:["$templateCache","$http",function(a,b){a.put("./views/enqform.html",b({method:"GET",url:"./views/enqform.html",cache:!0})),a.put("./views/enqerrorslist.html",b({method:"GET",url:"./views/enqerrorslist.html",cache:!0})),a.put("./views/enqfieldsection.html",b({method:"GET",url:"./views/enqfieldsection.html",cache:!0})),a.put("./views/enqformlabel.html",b({method:"GET",url:"./views/enqformlabel.html",cache:!0})),a.put("./views/onlinestatus/onlinestatusview.html",b({method:"GET",url:"./views/onlinestatus/onlinestatusview.html",cache:!0}))}]}}),angular.module("enqApp.services").factory("formSettingsService",["formSettings","formData","countriesList","courseData",function(a,b,c,d){var e="service_01",f="https://flxcloud.net/relays",g={},h=g,i=g,j={header:"<h1>Enquiry Form</h1>",instructions:"Please provide the following details. Required fields are marked by an asterisk (<b>*</b>).",errorsOnSubmit:"Please check the form submissions for errors and try again.",buttonLabels:{save:"Submit",reset:"Reset"},fieldsetLabels:{user:"User details",education:"Education",course:"Course selection",misc:"Additional details"},requiredMarker:"<b>*</b>",orderCoursesBy:"label",statusTimeout:6e3},k=function(a){return angular.isDefined(a)},l=function(a){return k(a)&&angular.isObject(a)},m=function(a){return k(a)&&angular.isArray(a)},n=function(a){return k(a)&&angular.isString(a)};return{appId:function(){return n(a.appId)?a.appId:e}(),destination:function(){return n(a.destination)?a.destination:f}(),settings:function(){return l(a.settings)?a.settings:j}(),data:function(){return l(b)?(m(c)&&(b.countries=c),l(d)&&(b.courses=d.list,b.subjectFilters=d.subjects,b.typeFilters=d.types,b.attendanceFilters=d.attendance),b):i}(),inputs:function(){return l(a.inputs)?a.inputs:g}(),inputsHash:function(){if(l(a.inputs)){for(var b={},c=a.inputs,d=0,e=c.length;e>d;d++)b[c[d].id]=angular.copy(c[d]);return b}return h}()}}]),angular.module("enqApp.directives").directive("enqFormLabel",function(){return{templateUrl:"./views/enqformlabel.html",restrict:"E",replace:!0,scope:!0,link:function(a,b,c){a.fieldId=c.fieldId,a.field=a.getModelFieldById(a.fieldId)}}}),angular.module("enqApp.directives").directive("enqErrorsList",function(){return{templateUrl:"./views/enqerrorslist.html",restrict:"E",replace:!0,scope:!0,priority:0,terminal:!0,require:"^enqFieldSection",link:function(a,b,c,d){a.fieldId=d.fieldId=c.fieldId,a.validation=d.getValidation(),a.hasError=d.getHasError,a.formErrors=d.getFormErrors}}}),angular.module("enqApp.directives").directive("enqFieldSection",function(){return{templateUrl:"./views/enqfieldsection.html",restrict:"E",replace:!0,transclude:!0,scope:!0,link:function(a,b,c,d){a.fieldId=d.fieldId=c.fieldId,a.widthClass=d.getWidthClass(),a.isVisible=d.isVisible(),a.dataList=d.getDataList(),a.validation=d.getValidation(),a.hasError=d.getHasError,a.formErrors=d.getFormErrors},controller:["$scope",function(a){this.fieldId="",this.getHasError=function(){var b=a.getFormFieldById(this.fieldId);return a.ix.enqForm.needsAttention(b)},this.getFormErrors=function(){var b=a.getFormFieldById(this.fieldId);return b.$error},this.isVisible=function(){return!!a.getModelFieldById(this.fieldId).visible},this.getDataList=function(){return a.getModelFieldById(this.fieldId).dataList},this.getWidthClass=function(){var b="col-sm-$",c=a.getModelFieldById(this.fieldId);if(!angular.isDefined(c.size))return b.replace("$","4");switch(parseInt(c.size)){case 1:b=b.replace("$","2");break;case 2:b=b.replace("$","4");break;case 3:b=b.replace("$","6");break;case 4:b=b.replace("$","8");break;default:b=b.replace("$","4")}return b},this.getValidation=function(){var b=a.getModelFieldById(this.fieldId);return b.validation||{}}}],controllerAs:"EnqFieldSectionCtrl"}}),angular.module("enqApp.directives").directive("ixFieldmodel",["$parse",function(a){return{restrict:"A",link:function(b,c,d,e){var f=a(d.ixFieldmodel)(b),g=e;g.setFieldModel(f),c.attr("name",g.getName()),c.attr("id",g.getId()),c.attr("placeholder",g.getPlaceholder()),c.attr("list",g.getDataListId()),c.attr("maxlength",g.getMaxLength()),c.attr("novalidate",!0),console.log()},controller:["$scope",function(){this.fieldModel={},this.getId=this.getName=function(){return this.fieldModel.id},this.getRequired=function(){return this.fieldModel.validation&&this.fieldModel.validation.required&&this.fieldModel.validation.required.value},this.getPlaceholder=function(){return this.fieldModel.placeholder},this.getDataListId=function(){return this.fieldModel.list&&this.fieldModel.id+"_dl"},this.getMaxLength=function(){return this.fieldModel.validation&&this.fieldModel.validation.maxlength&&this.fieldModel.validation.maxlength.value},this.setFieldModel=function(a){this.fieldModel=a}}],controllerAs:"IxFieldModelController"}}]),function(a){a.module("enqApp.services").factory("enqStorageFactory",["$http","$q","$storage","enqStorageStatus","IxUtils",function(a,b,c,d,e){function f(a){return a&&!e.isEmpty(a)}function g(a,b,c){console.log("resolve: ",a,b),d.setStatusFlag(a,b),c.resolve()}function h(a,b,c){console.log("reject: ",a,b),d.setStatusFlag(a,b),c.reject()}function i(){t.clearTable()}function j(a){var c=b.defer();return f(a)?(t.setItem(a),g("save",!0,c)):h("save",!1,c),c.promise}function k(){var a=b.defer();return s.isOnline()?g("online",!0,a):h("online",!1,a),a.promise}function l(){var a=b.defer();return t.tableIsEmpty()?h("data",!1,a):g("data",!0,a),a.promise}function m(){var c=b.defer();return a.post(r+"/"+q,{data:t.getTable(),auth:"^ex%9fRAVktXYjud36cr/cfzGFnVD"}).success(function(a,b){console.log("suc status: ",b),t.clearTable(),g("post",!0,c)}).error(function(a,b){console.log("err status: ",b),h("post",!1,c)}),c.promise}function n(a){return d.resetStatusFlags(),j(a)}function o(a){return d.resetStatusFlags(),j(a).then(k).then(l).then(m)}function p(){return d.resetStatusFlags(),k().then(l).then(m)}var q="",r="",s={},t={};return function(a,b,d){return q=a,r=b,s=d,t=c(q),{save:n,saveAndPost:o,post:p,clear:i,startOnlineService:s.start,stopOnlineService:s.stop}}}])}(angular),angular.module("enqApp.services.statusMessage",[]).factory("enqStorageStatus",["$rootScope",function(a){function b(b,c){g[b]=c,a.$emit("enqStorageStatusChange",g)}function c(a){return g[a]}function d(){var a=Array.prototype.slice.call(arguments);0===a.length&&(a=g);var b="";return angular.forEach(a,function(a){var c=g[a];if(void 0!==c){var d=a.substring(0,1);b+=c?d.toUpperCase():d.toLowerCase()}}),b}function e(){g={save:!1,post:!1,online:!1,data:!1}}function f(){return angular.copy(g)}var g={data:!1,online:!1,post:!1,save:!1};return{setStatusFlag:b,getStatusFlag:c,getFlags:f,resetStatusFlags:e,getStatusMask:d}}]),angular.module("enqApp.controllers").controller("EnqformStatusModalCtrl",["$scope","$timeout","$location","$anchorScroll",function(a,b,c,d){var e=6e4;d(),b(function(){c.path("/enquiryForm")},e)}]),angular.module("enqApp.controllers").controller("EnqStorageStatusCtrl",["$scope","enqStorageStatus",function(a,b){function c(){a.status=b.getFlags(),a.statusmask=b.getStatusMask("data","online","post","save")}a.$onRootScope("enqStorageStatusChange",function(){c()}),c()}]),angular.module("ixomega.utils").constant("IxUtils",{isEmpty:function(a){if(angular.isObject(a)||angular.isArray(a)){for(var b in a)if(a.hasOwnProperty(b))return!1;return!0}return angular.isUndefined(a)||""===a||null===a||a!==a},contains:function(a,b){if(!angular.isArray(b)||!angular.isObject(b))return!1;if(b===a)return!0;for(var c=0;c<b.length;c++)if(angular.equals(b[c],a))return!0;return!1},getIndex:function(a,b){if(!angular.isArray(a))return!1;if(angular.isObject(b)){for(var c=0;c<a.length;c++)if(angular.equals(a[c],b))return c;return-1}return a.indexOf(b)}}),angular.module("ixomega.utils").directive("ixSubmit",["$parse","$location","$anchorScroll",function(a){return{restrict:"A",require:["ixSubmit","?form"],controller:["$scope",function(){this.attempted=!1;var a=null;this.setAttempted=function(a){this.attempted=a},this.setFormController=function(b){a=b},this.needsAttention=function(b){return a?b?b.$invalid&&(b.$dirty||this.attempted):a&&a.$invalid&&(a.$dirty||this.attempted):!1}}],compile:function(){return{pre:function(a,b,c,d){var e=d[0],f=d.length>1?d[1]:null;e.setFormController(f),a.ix=a.ix||{},a.ix[c.name]=e},post:function(b,c,d,e){var f=e[0],g=e.length>1?e[1]:null,h=a(d.ixSubmit);c.bind("submit",function(a){if(f.setAttempted(!0),b.$$phase||b.$apply(),!g.$valid){var d=angular.element(c[0].querySelector(".ng-invalid"))[0];return d&&d.focus(),!1}b.$apply(function(){h(b,{$event:a})})})}}}}}]),angular.module("ixomega.utils").directive("ixAutofocus",["$timeout",function(a){return{restrict:"A",link:function(b,c){a(function(){console.log("AUTOFOCUS: ",c[0]),c[0].focus()},0)}}}]),angular.module("onlineStatusModule",[]).factory("onlineStatusService",["$window","$http","$rootScope",function(a,b,c){function d(a){console.info("  getUpdateMethod: working "+(a?"online":"offline")+".")}function e(a,b){function e(a){m=a,o=0,c.$emit("onlineStatusChange",m),d(m)}console.log(a,b),200===parseInt(b,10)?e(!0):n>o?g():e(!1)}function f(a,c){return b.head(p).success(a).error(c)}function g(){o++,console.log("RETRIES: ",o),f(e,e)}function h(){l||(g(),console.info("Starting getUpdateMethod service"),a.addEventListener("offline",g,!1),a.addEventListener("online",g,!1),l=!0)}function i(){console.info("Stopping getUpdateMethod service"),a.removeEventListener("offline",g),a.removeEventListener("online",g),l=!1}function j(){return m}function k(){return l}var l=!1,m=!1,n=3,o=0,p="http://flxcloud.net:3001/status";return{start:h,stop:i,isOnline:j,isRunning:k}}]),angular.module("onlineStatusModule").controller("OnlineStatusViewController",["$scope","onlineStatusService",function(a,b){a.$onRootScope("onlineStatusChange",function(b,c){a.online=c}),b.start()}]);