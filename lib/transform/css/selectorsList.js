"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return SelectorsListCSSTransform;
    }
});
var _css = /*#__PURE__*/ _interop_require_default(require("../../transform/css"));
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
var SelectorsListCSSTransform = /*#__PURE__*/ function(CSSTransform) {
    _inherits(SelectorsListCSSTransform, CSSTransform);
    function SelectorsListCSSTransform() {
        _class_call_check(this, SelectorsListCSSTransform);
        return _call_super(this, SelectorsListCSSTransform, arguments);
    }
    _create_class(SelectorsListCSSTransform, [
        {
            key: "mergeWithRuleSetCSSTransform",
            value: function mergeWithRuleSetCSSTransform(ruleSetCSSTransform) {
                var ruleSetCSSNode = ruleSetCSSTransform.getRuleSetCSSNode(), selectorsListCSSNode = ruleSetCSSNode.getSelectorsListCSSNode(), cssNode = selectorsListCSSNode; ///
                this.mergeWith(cssNode);
            }
        }
    ], [
        {
            key: "fromRuleSetCSSNode",
            value: function fromRuleSetCSSNode(ruleSetCSSNode) {
                var selectorsListCSSNode = ruleSetCSSNode.getSelectorsListCSSNode(), cssNode = selectorsListCSSNode, paragraphCSSTransform = _css.default.fromCSSNode(SelectorsListCSSTransform, cssNode);
                return paragraphCSSTransform;
            }
        }
    ]);
    return SelectorsListCSSTransform;
}(_css.default);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy90cmFuc2Zvcm0vY3NzL3NlbGVjdG9yc0xpc3QuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBDU1NUcmFuc2Zvcm0gZnJvbSBcIi4uLy4uL3RyYW5zZm9ybS9jc3NcIlxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTZWxlY3RvcnNMaXN0Q1NTVHJhbnNmb3JtIGV4dGVuZHMgQ1NTVHJhbnNmb3JtIHtcbiAgbWVyZ2VXaXRoUnVsZVNldENTU1RyYW5zZm9ybShydWxlU2V0Q1NTVHJhbnNmb3JtKSB7XG4gICAgY29uc3QgcnVsZVNldENTU05vZGUgPSBydWxlU2V0Q1NTVHJhbnNmb3JtLmdldFJ1bGVTZXRDU1NOb2RlKCksXG4gICAgICAgICAgc2VsZWN0b3JzTGlzdENTU05vZGUgPSBydWxlU2V0Q1NTTm9kZS5nZXRTZWxlY3RvcnNMaXN0Q1NTTm9kZSgpLFxuICAgICAgICAgIGNzc05vZGUgPSBzZWxlY3RvcnNMaXN0Q1NTTm9kZTsgLy8vXG5cbiAgICB0aGlzLm1lcmdlV2l0aChjc3NOb2RlKTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUnVsZVNldENTU05vZGUocnVsZVNldENTU05vZGUpIHtcbiAgICBjb25zdCBzZWxlY3RvcnNMaXN0Q1NTTm9kZSA9IHJ1bGVTZXRDU1NOb2RlLmdldFNlbGVjdG9yc0xpc3RDU1NOb2RlKCksXG4gICAgICAgICAgY3NzTm9kZSA9IHNlbGVjdG9yc0xpc3RDU1NOb2RlLCAvLy9cbiAgICAgICAgICBwYXJhZ3JhcGhDU1NUcmFuc2Zvcm0gPSBDU1NUcmFuc2Zvcm0uZnJvbUNTU05vZGUoU2VsZWN0b3JzTGlzdENTU1RyYW5zZm9ybSwgY3NzTm9kZSk7XG5cbiAgICByZXR1cm4gcGFyYWdyYXBoQ1NTVHJhbnNmb3JtO1xuICB9XG59XG4iXSwibmFtZXMiOlsiU2VsZWN0b3JzTGlzdENTU1RyYW5zZm9ybSIsIm1lcmdlV2l0aFJ1bGVTZXRDU1NUcmFuc2Zvcm0iLCJydWxlU2V0Q1NTVHJhbnNmb3JtIiwicnVsZVNldENTU05vZGUiLCJnZXRSdWxlU2V0Q1NTTm9kZSIsInNlbGVjdG9yc0xpc3RDU1NOb2RlIiwiZ2V0U2VsZWN0b3JzTGlzdENTU05vZGUiLCJjc3NOb2RlIiwibWVyZ2VXaXRoIiwiZnJvbVJ1bGVTZXRDU1NOb2RlIiwicGFyYWdyYXBoQ1NTVHJhbnNmb3JtIiwiQ1NTVHJhbnNmb3JtIiwiZnJvbUNTU05vZGUiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBSXFCQTs7OzBEQUZJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRVYsSUFBQSxBQUFNQSwwQ0FBTjtjQUFNQTthQUFBQTtnQ0FBQUE7ZUFBTixrQkFBTUE7O2tCQUFBQTs7WUFDbkJDLEtBQUFBO21CQUFBQSxTQUFBQSw2QkFBNkJDLG1CQUFtQjtnQkFDOUMsSUFBTUMsaUJBQWlCRCxvQkFBb0JFLGlCQUFpQixJQUN0REMsdUJBQXVCRixlQUFlRyx1QkFBdUIsSUFDN0RDLFVBQVVGLHNCQUFzQixHQUFHO2dCQUV6QyxJQUFJLENBQUNHLFNBQVMsQ0FBQ0Q7WUFDakI7Ozs7WUFFT0UsS0FBQUE7bUJBQVAsU0FBT0EsbUJBQW1CTixjQUFjO2dCQUN0QyxJQUFNRSx1QkFBdUJGLGVBQWVHLHVCQUF1QixJQUM3REMsVUFBVUYsc0JBQ1ZLLHdCQUF3QkMsWUFBWSxDQUFDQyxXQUFXLENBWnJDWiwyQkFZaUVPO2dCQUVsRixPQUFPRztZQUNUOzs7V0FmbUJWO0VBQWtDVyxZQUFZIn0=