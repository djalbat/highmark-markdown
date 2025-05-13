"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return RuleSetCSSTransform;
    }
});
var _css = /*#__PURE__*/ _interop_require_default(require("../../transform/css"));
var _selectorsList = /*#__PURE__*/ _interop_require_default(require("./selectorsList"));
function _assert_this_initialized(self) {
    if (self === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return self;
}
function _call_super(_this, derived, args) {
    derived = _get_prototype_of(derived);
    return _possible_constructor_return(_this, _is_native_reflect_construct() ? Reflect.construct(derived, args || [], _get_prototype_of(_this).constructor) : derived.apply(_this, args));
}
function _class_call_check(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}
function _defineProperties(target, props) {
    for(var i = 0; i < props.length; i++){
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
    }
}
function _create_class(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
}
function _get_prototype_of(o) {
    _get_prototype_of = Object.setPrototypeOf ? Object.getPrototypeOf : function getPrototypeOf(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _get_prototype_of(o);
}
function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function");
    }
    subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
            value: subClass,
            writable: true,
            configurable: true
        }
    });
    if (superClass) _set_prototype_of(subClass, superClass);
}
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function _possible_constructor_return(self, call) {
    if (call && (_type_of(call) === "object" || typeof call === "function")) {
        return call;
    }
    return _assert_this_initialized(self);
}
function _set_prototype_of(o, p) {
    _set_prototype_of = Object.setPrototypeOf || function setPrototypeOf(o, p) {
        o.__proto__ = p;
        return o;
    };
    return _set_prototype_of(o, p);
}
function _type_of(obj) {
    "@swc/helpers - typeof";
    return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
}
function _is_native_reflect_construct() {
    try {
        var result = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
    } catch (_) {}
    return (_is_native_reflect_construct = function() {
        return !!result;
    })();
}
var RuleSetCSSTransform = /*#__PURE__*/ function(CSSTransform) {
    _inherits(RuleSetCSSTransform, CSSTransform);
    function RuleSetCSSTransform(cssNode, selectorsListCSSTransform) {
        _class_call_check(this, RuleSetCSSTransform);
        var _this;
        _this = _call_super(this, RuleSetCSSTransform, [
            cssNode
        ]);
        _this.selectorsListCSSTransform = selectorsListCSSTransform;
        return _this;
    }
    _create_class(RuleSetCSSTransform, [
        {
            key: "getSelectorsListCSSTransform",
            value: function getSelectorsListCSSTransform() {
                return this.selectorsListCSSTransform;
            }
        },
        {
            key: "getRuleSetCSSNode",
            value: function getRuleSetCSSNode() {
                var cssNode = this.getCSSNode(), ruleSetCSSNode = cssNode; ///
                return ruleSetCSSNode;
            }
        },
        {
            key: "resolve",
            value: function resolve(context) {
                var ruleSetCSSNode = this.getRuleSetCSSNode();
                ruleSetCSSNode.resolve(context);
            }
        },
        {
            key: "mergeWithRuleSetCSSNode",
            value: function mergeWithRuleSetCSSNode(ruleSetCSSNode) {
                var selectorsListCSSNode = ruleSetCSSNode.getSelectorsListCSSNode();
                this.selectorsListCSSTransform.mergeWithSelectorsListCSSNode(selectorsListCSSNode);
            }
        }
    ], [
        {
            key: "fromRuleSetCSSNode",
            value: function fromRuleSetCSSNode(ruleSetCSSNode) {
                var cssNode = ruleSetCSSNode, selectorsListCSSNode = ruleSetCSSNode.getSelectorsListCSSNode(), selectorsListCSSTransform = _selectorsList.default.fromSelectorsListCSSNode(selectorsListCSSNode), ruleSetCSSTransform = _css.default.fromCSSNode(RuleSetCSSTransform, cssNode, selectorsListCSSTransform);
                return ruleSetCSSTransform;
            }
        }
    ]);
    return RuleSetCSSTransform;
}(_css.default);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy90cmFuc2Zvcm0vY3NzL3J1bGVTZXQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBDU1NUcmFuc2Zvcm0gZnJvbSBcIi4uLy4uL3RyYW5zZm9ybS9jc3NcIlxuaW1wb3J0IFNlbGVjdG9yc0xpc3RDU1NUcmFuc2Zvcm0gZnJvbSBcIi4vc2VsZWN0b3JzTGlzdFwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSdWxlU2V0Q1NTVHJhbnNmb3JtIGV4dGVuZHMgQ1NTVHJhbnNmb3JtIHtcbiAgY29uc3RydWN0b3IoY3NzTm9kZSwgc2VsZWN0b3JzTGlzdENTU1RyYW5zZm9ybSkge1xuICAgIHN1cGVyKGNzc05vZGUpO1xuXG4gICAgdGhpcy5zZWxlY3RvcnNMaXN0Q1NTVHJhbnNmb3JtID0gc2VsZWN0b3JzTGlzdENTU1RyYW5zZm9ybTtcbiAgfVxuXG4gIGdldFNlbGVjdG9yc0xpc3RDU1NUcmFuc2Zvcm0oKSB7XG4gICAgcmV0dXJuIHRoaXMuc2VsZWN0b3JzTGlzdENTU1RyYW5zZm9ybTtcbiAgfVxuXG4gIGdldFJ1bGVTZXRDU1NOb2RlKCkge1xuICAgIGNvbnN0IGNzc05vZGUgPSB0aGlzLmdldENTU05vZGUoKSxcbiAgICAgICAgICBydWxlU2V0Q1NTTm9kZSA9IGNzc05vZGU7IC8vL1xuXG4gICAgcmV0dXJuIHJ1bGVTZXRDU1NOb2RlO1xuICB9XG5cbiAgcmVzb2x2ZShjb250ZXh0KSB7XG4gICAgY29uc3QgcnVsZVNldENTU05vZGUgPSB0aGlzLmdldFJ1bGVTZXRDU1NOb2RlKCk7XG5cbiAgICBydWxlU2V0Q1NTTm9kZS5yZXNvbHZlKGNvbnRleHQpO1xuICB9XG5cbiAgbWVyZ2VXaXRoUnVsZVNldENTU05vZGUocnVsZVNldENTU05vZGUpIHtcbiAgICBjb25zdCBzZWxlY3RvcnNMaXN0Q1NTTm9kZSA9IHJ1bGVTZXRDU1NOb2RlLmdldFNlbGVjdG9yc0xpc3RDU1NOb2RlKCk7XG5cbiAgICB0aGlzLnNlbGVjdG9yc0xpc3RDU1NUcmFuc2Zvcm0ubWVyZ2VXaXRoU2VsZWN0b3JzTGlzdENTU05vZGUoc2VsZWN0b3JzTGlzdENTU05vZGUpO1xuICB9XG5cbiAgc3RhdGljIGZyb21SdWxlU2V0Q1NTTm9kZShydWxlU2V0Q1NTTm9kZSkge1xuICAgIGNvbnN0IGNzc05vZGUgPSBydWxlU2V0Q1NTTm9kZSwgLy8vXG4gICAgICAgICAgc2VsZWN0b3JzTGlzdENTU05vZGUgPSBydWxlU2V0Q1NTTm9kZS5nZXRTZWxlY3RvcnNMaXN0Q1NTTm9kZSgpLFxuICAgICAgICAgIHNlbGVjdG9yc0xpc3RDU1NUcmFuc2Zvcm0gPSBTZWxlY3RvcnNMaXN0Q1NTVHJhbnNmb3JtLmZyb21TZWxlY3RvcnNMaXN0Q1NTTm9kZShzZWxlY3RvcnNMaXN0Q1NTTm9kZSksXG4gICAgICAgICAgcnVsZVNldENTU1RyYW5zZm9ybSA9IENTU1RyYW5zZm9ybS5mcm9tQ1NTTm9kZShSdWxlU2V0Q1NTVHJhbnNmb3JtLCBjc3NOb2RlLCBzZWxlY3RvcnNMaXN0Q1NTVHJhbnNmb3JtKTtcblxuICAgIHJldHVybiBydWxlU2V0Q1NTVHJhbnNmb3JtO1xuICB9XG59XG4iXSwibmFtZXMiOlsiUnVsZVNldENTU1RyYW5zZm9ybSIsImNzc05vZGUiLCJzZWxlY3RvcnNMaXN0Q1NTVHJhbnNmb3JtIiwiZ2V0U2VsZWN0b3JzTGlzdENTU1RyYW5zZm9ybSIsImdldFJ1bGVTZXRDU1NOb2RlIiwiZ2V0Q1NTTm9kZSIsInJ1bGVTZXRDU1NOb2RlIiwicmVzb2x2ZSIsImNvbnRleHQiLCJtZXJnZVdpdGhSdWxlU2V0Q1NTTm9kZSIsInNlbGVjdG9yc0xpc3RDU1NOb2RlIiwiZ2V0U2VsZWN0b3JzTGlzdENTU05vZGUiLCJtZXJnZVdpdGhTZWxlY3RvcnNMaXN0Q1NTTm9kZSIsImZyb21SdWxlU2V0Q1NTTm9kZSIsIlNlbGVjdG9yc0xpc3RDU1NUcmFuc2Zvcm0iLCJmcm9tU2VsZWN0b3JzTGlzdENTU05vZGUiLCJydWxlU2V0Q1NTVHJhbnNmb3JtIiwiQ1NTVHJhbnNmb3JtIiwiZnJvbUNTU05vZGUiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBS3FCQTs7OzBEQUhJO29FQUNhOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRXZCLElBQUEsQUFBTUEsb0NBQU47Y0FBTUE7YUFBQUEsb0JBQ1BDLE9BQU8sRUFBRUMseUJBQXlCO2dDQUQzQkY7O2dCQUVqQixrQkFGaUJBO1lBRVhDOztRQUVOLE1BQUtDLHlCQUF5QixHQUFHQTs7O2tCQUpoQkY7O1lBT25CRyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNELHlCQUF5QjtZQUN2Qzs7O1lBRUFFLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFNSCxVQUFVLElBQUksQ0FBQ0ksVUFBVSxJQUN6QkMsaUJBQWlCTCxTQUFTLEdBQUc7Z0JBRW5DLE9BQU9LO1lBQ1Q7OztZQUVBQyxLQUFBQTttQkFBQUEsU0FBQUEsUUFBUUMsT0FBTztnQkFDYixJQUFNRixpQkFBaUIsSUFBSSxDQUFDRixpQkFBaUI7Z0JBRTdDRSxlQUFlQyxPQUFPLENBQUNDO1lBQ3pCOzs7WUFFQUMsS0FBQUE7bUJBQUFBLFNBQUFBLHdCQUF3QkgsY0FBYztnQkFDcEMsSUFBTUksdUJBQXVCSixlQUFlSyx1QkFBdUI7Z0JBRW5FLElBQUksQ0FBQ1QseUJBQXlCLENBQUNVLDZCQUE2QixDQUFDRjtZQUMvRDs7OztZQUVPRyxLQUFBQTttQkFBUCxTQUFPQSxtQkFBbUJQLGNBQWM7Z0JBQ3RDLElBQU1MLFVBQVVLLGdCQUNWSSx1QkFBdUJKLGVBQWVLLHVCQUF1QixJQUM3RFQsNEJBQTRCWSxzQkFBeUIsQ0FBQ0Msd0JBQXdCLENBQUNMLHVCQUMvRU0sc0JBQXNCQyxZQUFZLENBQUNDLFdBQVcsQ0FsQ25DbEIscUJBa0N5REMsU0FBU0M7Z0JBRW5GLE9BQU9jO1lBQ1Q7OztXQXJDbUJoQjtFQUE0QmlCLFlBQVkifQ==