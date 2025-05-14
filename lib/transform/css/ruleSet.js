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
var _selectorsList = /*#__PURE__*/ _interop_require_default(require("../../transform/css/selectorsList"));
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
    function RuleSetCSSTransform() {
        _class_call_check(this, RuleSetCSSTransform);
        return _call_super(this, RuleSetCSSTransform, arguments);
    }
    _create_class(RuleSetCSSTransform, [
        {
            key: "getSelectorsListCSSNode",
            value: function getSelectorsListCSSNode() {
                var ruleSetCSSNode = this.getRuleSetCSSNode(), selectorsListCSSNode = ruleSetCSSNode.getSelectorsListCSSNode();
                return selectorsListCSSNode;
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
                var selectorsListCSSNode, selectorsListCSSTransform;
                selectorsListCSSNode = ruleSetCSSNode.getSelectorsListCSSNode();
                selectorsListCSSTransform = _selectorsList.default.fromSelectorsListCSSNode(selectorsListCSSNode);
                selectorsListCSSTransform.remove();
                selectorsListCSSNode = this.getSelectorsListCSSNode();
                selectorsListCSSTransform.mergeWithSelectorsListCSSNode(selectorsListCSSNode);
                selectorsListCSSTransform = _selectorsList.default.fromSelectorsListCSSNode(selectorsListCSSNode);
                selectorsListCSSTransform.prependToRuleSetCSSNode(ruleSetCSSNode);
            }
        }
    ], [
        {
            key: "fromRuleSetCSSNode",
            value: function fromRuleSetCSSNode(ruleSetCSSNode) {
                var cssNode = ruleSetCSSNode, ruleSetCSSTransform = _css.default.fromCSSNode(RuleSetCSSTransform, cssNode);
                return ruleSetCSSTransform;
            }
        }
    ]);
    return RuleSetCSSTransform;
}(_css.default);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy90cmFuc2Zvcm0vY3NzL3J1bGVTZXQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBDU1NUcmFuc2Zvcm0gZnJvbSBcIi4uLy4uL3RyYW5zZm9ybS9jc3NcIlxuaW1wb3J0IFNlbGVjdG9yc0xpc3RDU1NUcmFuc2Zvcm0gZnJvbSBcIi4uLy4uL3RyYW5zZm9ybS9jc3Mvc2VsZWN0b3JzTGlzdFwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSdWxlU2V0Q1NTVHJhbnNmb3JtIGV4dGVuZHMgQ1NTVHJhbnNmb3JtIHtcbiAgZ2V0U2VsZWN0b3JzTGlzdENTU05vZGUoKSB7XG4gICAgY29uc3QgcnVsZVNldENTU05vZGUgPSB0aGlzLmdldFJ1bGVTZXRDU1NOb2RlKCksXG4gICAgICAgICAgc2VsZWN0b3JzTGlzdENTU05vZGUgPSBydWxlU2V0Q1NTTm9kZS5nZXRTZWxlY3RvcnNMaXN0Q1NTTm9kZSgpO1xuXG4gICAgcmV0dXJuIHNlbGVjdG9yc0xpc3RDU1NOb2RlO1xuICB9XG5cbiAgZ2V0UnVsZVNldENTU05vZGUoKSB7XG4gICAgY29uc3QgY3NzTm9kZSA9IHRoaXMuZ2V0Q1NTTm9kZSgpLFxuICAgICAgICAgIHJ1bGVTZXRDU1NOb2RlID0gY3NzTm9kZTsgLy8vXG5cbiAgICByZXR1cm4gcnVsZVNldENTU05vZGU7XG4gIH1cblxuICByZXNvbHZlKGNvbnRleHQpIHtcbiAgICBjb25zdCBydWxlU2V0Q1NTTm9kZSA9IHRoaXMuZ2V0UnVsZVNldENTU05vZGUoKTtcblxuICAgIHJ1bGVTZXRDU1NOb2RlLnJlc29sdmUoY29udGV4dCk7XG4gIH1cblxuICBtZXJnZVdpdGhSdWxlU2V0Q1NTTm9kZShydWxlU2V0Q1NTTm9kZSkge1xuICAgIGxldCBzZWxlY3RvcnNMaXN0Q1NTTm9kZSxcbiAgICAgICAgc2VsZWN0b3JzTGlzdENTU1RyYW5zZm9ybTtcblxuICAgIHNlbGVjdG9yc0xpc3RDU1NOb2RlID0gcnVsZVNldENTU05vZGUuZ2V0U2VsZWN0b3JzTGlzdENTU05vZGUoKTtcblxuICAgIHNlbGVjdG9yc0xpc3RDU1NUcmFuc2Zvcm0gPSBTZWxlY3RvcnNMaXN0Q1NTVHJhbnNmb3JtLmZyb21TZWxlY3RvcnNMaXN0Q1NTTm9kZShzZWxlY3RvcnNMaXN0Q1NTTm9kZSk7XG5cbiAgICBzZWxlY3RvcnNMaXN0Q1NTVHJhbnNmb3JtLnJlbW92ZSgpO1xuXG4gICAgc2VsZWN0b3JzTGlzdENTU05vZGUgPSB0aGlzLmdldFNlbGVjdG9yc0xpc3RDU1NOb2RlKCk7XG5cbiAgICBzZWxlY3RvcnNMaXN0Q1NTVHJhbnNmb3JtLm1lcmdlV2l0aFNlbGVjdG9yc0xpc3RDU1NOb2RlKHNlbGVjdG9yc0xpc3RDU1NOb2RlKTtcblxuICAgIHNlbGVjdG9yc0xpc3RDU1NUcmFuc2Zvcm0gPSBTZWxlY3RvcnNMaXN0Q1NTVHJhbnNmb3JtLmZyb21TZWxlY3RvcnNMaXN0Q1NTTm9kZShzZWxlY3RvcnNMaXN0Q1NTTm9kZSk7XG5cbiAgICBzZWxlY3RvcnNMaXN0Q1NTVHJhbnNmb3JtLnByZXBlbmRUb1J1bGVTZXRDU1NOb2RlKHJ1bGVTZXRDU1NOb2RlKTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUnVsZVNldENTU05vZGUocnVsZVNldENTU05vZGUpIHtcbiAgICBjb25zdCBjc3NOb2RlID0gcnVsZVNldENTU05vZGUsIC8vL1xuICAgICAgICAgIHJ1bGVTZXRDU1NUcmFuc2Zvcm0gPSBDU1NUcmFuc2Zvcm0uZnJvbUNTU05vZGUoUnVsZVNldENTU1RyYW5zZm9ybSwgY3NzTm9kZSk7XG5cbiAgICByZXR1cm4gcnVsZVNldENTU1RyYW5zZm9ybTtcbiAgfVxufVxuIl0sIm5hbWVzIjpbIlJ1bGVTZXRDU1NUcmFuc2Zvcm0iLCJnZXRTZWxlY3RvcnNMaXN0Q1NTTm9kZSIsInJ1bGVTZXRDU1NOb2RlIiwiZ2V0UnVsZVNldENTU05vZGUiLCJzZWxlY3RvcnNMaXN0Q1NTTm9kZSIsImNzc05vZGUiLCJnZXRDU1NOb2RlIiwicmVzb2x2ZSIsImNvbnRleHQiLCJtZXJnZVdpdGhSdWxlU2V0Q1NTTm9kZSIsInNlbGVjdG9yc0xpc3RDU1NUcmFuc2Zvcm0iLCJTZWxlY3RvcnNMaXN0Q1NTVHJhbnNmb3JtIiwiZnJvbVNlbGVjdG9yc0xpc3RDU1NOb2RlIiwicmVtb3ZlIiwibWVyZ2VXaXRoU2VsZWN0b3JzTGlzdENTU05vZGUiLCJwcmVwZW5kVG9SdWxlU2V0Q1NTTm9kZSIsImZyb21SdWxlU2V0Q1NTTm9kZSIsInJ1bGVTZXRDU1NUcmFuc2Zvcm0iLCJDU1NUcmFuc2Zvcm0iLCJmcm9tQ1NTTm9kZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFLcUJBOzs7MERBSEk7b0VBQ2E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFdkIsSUFBQSxBQUFNQSxvQ0FBTjtjQUFNQTthQUFBQTtnQ0FBQUE7ZUFBTixrQkFBTUE7O2tCQUFBQTs7WUFDbkJDLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFNQyxpQkFBaUIsSUFBSSxDQUFDQyxpQkFBaUIsSUFDdkNDLHVCQUF1QkYsZUFBZUQsdUJBQXVCO2dCQUVuRSxPQUFPRztZQUNUOzs7WUFFQUQsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQU1FLFVBQVUsSUFBSSxDQUFDQyxVQUFVLElBQ3pCSixpQkFBaUJHLFNBQVMsR0FBRztnQkFFbkMsT0FBT0g7WUFDVDs7O1lBRUFLLEtBQUFBO21CQUFBQSxTQUFBQSxRQUFRQyxPQUFPO2dCQUNiLElBQU1OLGlCQUFpQixJQUFJLENBQUNDLGlCQUFpQjtnQkFFN0NELGVBQWVLLE9BQU8sQ0FBQ0M7WUFDekI7OztZQUVBQyxLQUFBQTttQkFBQUEsU0FBQUEsd0JBQXdCUCxjQUFjO2dCQUNwQyxJQUFJRSxzQkFDQU07Z0JBRUpOLHVCQUF1QkYsZUFBZUQsdUJBQXVCO2dCQUU3RFMsNEJBQTRCQyxzQkFBeUIsQ0FBQ0Msd0JBQXdCLENBQUNSO2dCQUUvRU0sMEJBQTBCRyxNQUFNO2dCQUVoQ1QsdUJBQXVCLElBQUksQ0FBQ0gsdUJBQXVCO2dCQUVuRFMsMEJBQTBCSSw2QkFBNkIsQ0FBQ1Y7Z0JBRXhETSw0QkFBNEJDLHNCQUF5QixDQUFDQyx3QkFBd0IsQ0FBQ1I7Z0JBRS9FTSwwQkFBMEJLLHVCQUF1QixDQUFDYjtZQUNwRDs7OztZQUVPYyxLQUFBQTttQkFBUCxTQUFPQSxtQkFBbUJkLGNBQWM7Z0JBQ3RDLElBQU1HLFVBQVVILGdCQUNWZSxzQkFBc0JDLFlBQVksQ0FBQ0MsV0FBVyxDQTFDbkNuQixxQkEwQ3lESztnQkFFMUUsT0FBT1k7WUFDVDs7O1dBN0NtQmpCO0VBQTRCa0IsWUFBWSJ9