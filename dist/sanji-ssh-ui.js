(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("sanji-core-ui"));
	else if(typeof define === 'function' && define.amd)
		define(["sanji-core-ui"], factory);
	else {
		var a = typeof exports === 'object' ? factory(require("sanji-core-ui")) : factory(root["sanji-core-ui"]);
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(this, function(__WEBPACK_EXTERNAL_MODULE_13__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _sanjiCoreUi = __webpack_require__(13);
	
	var _sanjiCoreUi2 = _interopRequireDefault(_sanjiCoreUi);
	
	__webpack_require__(12);
	
	__webpack_require__(1);
	
	var _componentI18n = __webpack_require__(10);
	
	var _componentI18n2 = _interopRequireDefault(_componentI18n);
	
	var _componentService = __webpack_require__(11);
	
	var _componentService2 = _interopRequireDefault(_componentService);
	
	var _componentContainerController = __webpack_require__(5);
	
	var _componentContainerController2 = _interopRequireDefault(_componentContainerController);
	
	var _componentController = __webpack_require__(8);
	
	var _componentController2 = _interopRequireDefault(_componentController);
	
	var _componentContainerDirective = __webpack_require__(6);
	
	var _componentContainerDirective2 = _interopRequireDefault(_componentContainerDirective);
	
	var _componentDirective = __webpack_require__(9);
	
	var _componentDirective2 = _interopRequireDefault(_componentDirective);
	
	var _componentWindowDirective = __webpack_require__(7);
	
	var _componentWindowDirective2 = _interopRequireDefault(_componentWindowDirective);
	
	var app = angular.module('sanji.ssh', [_sanjiCoreUi2['default']]);
	app.config(_componentI18n2['default']);
	app.service('sshService', _componentService2['default']);
	app.controller('SshContainerController', _componentContainerController2['default']);
	app.controller('SshController', _componentController2['default']);
	app.directive('sanjiSshContainer', _componentContainerDirective2['default'].directiveFactory);
	app.directive('sanjiSsh', _componentDirective2['default'].directiveFactory);
	app.directive('sanjiSshWindow', _componentWindowDirective2['default'].directiveFactory);
	
	exports['default'] = app = app.name;
	module.exports = exports['default'];

/***/ },
/* 1 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = {
		"get": {
			"url": "/network/sshd",
			"type": "model"
		},
		"put": {
			"url": "/network/sshd",
			"type": "model"
		},
		"fields": [
			{
				"key": "enable",
				"type": "switch",
				"templateOptions": {
					"label": "SSH_FORM_LABEL_ENABLE"
				}
			}
		]
	};

/***/ },
/* 3 */
/***/ function(module, exports) {

	module.exports = {
		"SSH": "SSH",
		"SSH_FORM_SETTING": "Setting",
		"SSH_FORM_LABEL_ENABLE": "Enable",
		"SSH_FORM_SAVE": "Save"
	};

/***/ },
/* 4 */
/***/ function(module, exports) {

	module.exports = {
		"SSH": "SSH",
		"SSH_FORM_SETTING": "設定",
		"SSH_FORM_LABEL_ENABLE": "啟用",
		"SSH_FORM_SAVE": "儲存"
	};

/***/ },
/* 5 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	var $inject = ['$scope', 'sanjiWindowService', 'sshService'];
	var WINDOW_ID = 'sanji-ssh-ui';
	
	var SshContainerController = (function () {
	  function SshContainerController() {
	    var _this = this;
	
	    for (var _len = arguments.length, injects = Array(_len), _key = 0; _key < _len; _key++) {
	      injects[_key] = arguments[_key];
	    }
	
	    _classCallCheck(this, SshContainerController);
	
	    SshContainerController.$inject.forEach(function (item, index) {
	      return _this[item] = injects[index];
	    });
	
	    this.sanjiWindowMgr = this.sanjiWindowService.get(WINDOW_ID);
	    this.data = this.sshService.data;
	
	    this.activate();
	
	    this.$scope.$on('sj:window:refresh', this.onRefresh.bind(this));
	  }
	
	  _createClass(SshContainerController, [{
	    key: 'activate',
	    value: function activate() {
	      var _this2 = this;
	
	      this.sanjiWindowMgr.promise = this.sshService.get().then(function () {
	        _this2.data = _this2.sshService.data;
	      });
	    }
	  }, {
	    key: 'onRefresh',
	    value: function onRefresh(event, args) {
	      if (args.id === WINDOW_ID) {
	        this.activate();
	      }
	    }
	  }, {
	    key: 'onSave',
	    value: function onSave(data) {
	      this.sanjiWindowMgr.promise = this.sshService.update(data);
	    }
	  }]);
	
	  return SshContainerController;
	})();
	
	SshContainerController.$inject = $inject;
	exports['default'] = SshContainerController;
	module.exports = exports['default'];

/***/ },
/* 6 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	var injectMap = new WeakMap();
	var $inject = [];
	
	var SshContainerDirective = (function () {
	  function SshContainerDirective(injects) {
	    _classCallCheck(this, SshContainerDirective);
	
	    SshContainerDirective.directiveFactory.$inject.forEach(function (item, index) {
	      SshContainerDirective[item] = injects[index];
	      injectMap.set(SshContainerDirective[item], injects[index]);
	    });
	    this.restrict = 'EA';
	    this.controller = 'SshContainerController';
	    this.controllerAs = 'vm';
	    this.scope = {};
	    this.bindToController = true;
	    this.template = '<sanji-ssh data="vm.data" on-submit="vm.onSave(data)"></sanji-ssh>';
	  }
	
	  _createClass(SshContainerDirective, null, [{
	    key: 'directiveFactory',
	    value: function directiveFactory() {
	      for (var _len = arguments.length, injects = Array(_len), _key = 0; _key < _len; _key++) {
	        injects[_key] = arguments[_key];
	      }
	
	      SshContainerDirective.instance = new SshContainerDirective(injects);
	      return SshContainerDirective.instance;
	    }
	  }]);
	
	  return SshContainerDirective;
	})();
	
	SshContainerDirective.directiveFactory.$inject = $inject;
	exports['default'] = SshContainerDirective;
	module.exports = exports['default'];

/***/ },
/* 7 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	var injectMap = new WeakMap();
	var $inject = [];
	
	var SshWindowDirective = (function () {
	  function SshWindowDirective(injects) {
	    _classCallCheck(this, SshWindowDirective);
	
	    SshWindowDirective.directiveFactory.$inject.forEach(function (item, index) {
	      SshWindowDirective[item] = injects[index];
	      injectMap.set(SshWindowDirective[item], injects[index]);
	    });
	    this.restrict = 'E';
	    this.template = '<sanji-window window-id="sanji-ssh-ui"\n                      window-name="{{\'SSH\' | translate}}" show-loading-btn>\n                      <sanji-window-state default-state\n                        state-name="sanji-form"\n                        link-name="{{\'SSH_FORM_SETTING\' | translate}}"\n                        icon="settings">\n                        <sanji-ssh-container></sanji-ssh-container>\n                      </sanji-window-state>\n                    </sanji-window>';
	  }
	
	  _createClass(SshWindowDirective, null, [{
	    key: 'directiveFactory',
	    value: function directiveFactory() {
	      for (var _len = arguments.length, injects = Array(_len), _key = 0; _key < _len; _key++) {
	        injects[_key] = arguments[_key];
	      }
	
	      SshWindowDirective.instance = new SshWindowDirective(injects);
	      return SshWindowDirective.instance;
	    }
	  }]);
	
	  return SshWindowDirective;
	})();
	
	SshWindowDirective.directiveFactory.$inject = $inject;
	exports['default'] = SshWindowDirective;
	module.exports = exports['default'];

/***/ },
/* 8 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var $inject = [];
	
	var SshController = (function () {
	  function SshController() {
	    var _this = this;
	
	    for (var _len = arguments.length, injects = Array(_len), _key = 0; _key < _len; _key++) {
	      injects[_key] = arguments[_key];
	    }
	
	    _classCallCheck(this, SshController);
	
	    SshController.$inject.forEach(function (item, index) {
	      return _this[item] = injects[index];
	    });
	  }
	
	  _createClass(SshController, [{
	    key: "save",
	    value: function save(data) {
	      this.submitCallback({ data: data });
	    }
	  }]);
	
	  return SshController;
	})();
	
	SshController.$inject = $inject;
	exports["default"] = SshController;
	module.exports = exports["default"];

/***/ },
/* 9 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	var injectMap = new WeakMap();
	var $inject = [];
	
	var SshDirective = (function () {
	  function SshDirective(injects) {
	    _classCallCheck(this, SshDirective);
	
	    SshDirective.directiveFactory.$inject.forEach(function (item, index) {
	      SshDirective[item] = injects[index];
	      injectMap.set(SshDirective[item], injects[index]);
	    });
	    this.templateUrl = 'sanji-ssh-edit.tpl.html';
	    this.restrict = 'EA';
	    this.controller = 'SshController';
	    this.controllerAs = 'vm';
	    this.scope = {};
	    this.bindToController = {
	
	      data: '=',
	
	      submitCallback: '&onSubmit'
	    };
	  }
	
	  _createClass(SshDirective, null, [{
	    key: 'directiveFactory',
	    value: function directiveFactory() {
	      for (var _len = arguments.length, injects = Array(_len), _key = 0; _key < _len; _key++) {
	        injects[_key] = arguments[_key];
	      }
	
	      SshDirective.instance = new SshDirective(injects);
	      return SshDirective.instance;
	    }
	  }]);
	
	  return SshDirective;
	})();
	
	SshDirective.directiveFactory.$inject = $inject;
	exports['default'] = SshDirective;
	module.exports = exports['default'];

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	exports['default'] = function ($translateProvider) {
	  $translateProvider.translations('en', __webpack_require__(3));
	  $translateProvider.translations('zh-tw', __webpack_require__(4));
	};
	
	module.exports = exports['default'];

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	var $inject = ['$q', 'rest', 'exception', '_', 'pathToRegexp'];
	var config = __webpack_require__(2);
	
	var SshService = (function () {
	  function SshService() {
	    var _this = this;
	
	    for (var _len = arguments.length, injects = Array(_len), _key = 0; _key < _len; _key++) {
	      injects[_key] = arguments[_key];
	    }
	
	    _classCallCheck(this, SshService);
	
	    SshService.$inject.forEach(function (item, index) {
	      return _this[item] = injects[index];
	    });
	    switch (config.get.type) {
	      case 'collection':
	        this.data = [];
	        break;
	      case 'model':
	        this.data = {};
	        break;
	      default:
	        this.data = [];
	    }
	  }
	
	  _createClass(SshService, [{
	    key: '_transform',
	    value: function _transform(data) {
	      switch (config.get.type) {
	        case 'collection':
	          return this._.map(data, function (item, index) {
	            return {
	              title: (config.get.titlePrefix || 'tab') + index,
	              content: item,
	              formOptions: {},
	              fields: config.fields
	            };
	          });
	        case 'model':
	          return {
	            content: data,
	            formOptions: {},
	            fields: config.fields
	          };
	        default:
	          return this._.map(data, function (item, index) {
	            return {
	              title: (config.get.titlePrefix || 'tab') + index,
	              content: item,
	              formOptions: {},
	              fields: config.fields
	            };
	          });
	      }
	    }
	  }, {
	    key: 'get',
	    value: function get() {
	      var _this2 = this;
	
	      var toPath = this.pathToRegexp.compile(config.get.url);
	      return this.rest.get(toPath(),  false ? 'http://private-15522-sanjiapi.apiary-mock.com' : undefined).then(function (res) {
	        _this2.data = _this2._transform(res.data);
	      })['catch'](function (err) {
	        _this2.exception.catcher('[SshService] Get data error.')(err);
	        return _this2.$q.reject();
	      });
	    }
	  }, {
	    key: 'update',
	    value: function update(data) {
	      var _this3 = this;
	
	      var toPath = this.pathToRegexp.compile(config.put.url);
	      var path = undefined !== data.content.id ? toPath({ id: data.content.id }) : toPath();
	      return this.rest.put(path, data.content, data.formOptions.files,  false ? 'http://private-15522-sanjiapi.apiary-mock.com' : undefined)['catch'](function (err) {
	        _this3.exception.catcher('[SshService] Update data error.')(err);
	        return _this3.$q.reject();
	      });
	    }
	  }]);
	
	  return SshService;
	})();
	
	SshService.$inject = $inject;
	exports['default'] = SshService;
	module.exports = exports['default'];

/***/ },
/* 12 */
/***/ function(module, exports) {

	var v1="<md-content>\n    <form ng-submit=\"vm.save(vm.data)\" role=\"form\" layout=\"column\" layout-padding novalidate>\n      <formly-form\n        model=\"vm.data.content\"\n        fields=\"vm.data.fields\"\n        options=\"vm.data.formOptions\"\n        form=\"vm.form\">\n        <div layout layout-align=\"end center\">\n          <md-button type=\"submit\" class=\"md-raised md-primary\" ng-disabled=\"vm.form.$invalid\">\n            <sapn translate=\"SSH_FORM_SAVE\"></span>\n          </md-button>\n        </div>\n      </formly-form>\n    </form>\n  </md-content>";
	window.angular.module(["ng"]).run(["$templateCache",function(c){c.put("sanji-ssh-edit.tpl.html", v1)}]);
	module.exports=v1;

/***/ },
/* 13 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_13__;

/***/ }
/******/ ])
});
;
//# sourceMappingURL=sanji-ssh-ui.js.map