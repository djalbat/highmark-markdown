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
            key: "appendToTopmostCSSNode",
            value: function appendToTopmostCSSNode(topmostCSSNode) {
                var cssNode = topmostCSSNode; ///
                this.appendTo(cssNode);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy90cmFuc2Zvcm0vY3NzL3J1bGVTZXQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBDU1NUcmFuc2Zvcm0gZnJvbSBcIi4uLy4uL3RyYW5zZm9ybS9jc3NcIlxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSdWxlU2V0Q1NTVHJhbnNmb3JtIGV4dGVuZHMgQ1NTVHJhbnNmb3JtIHtcbiAgYXBwZW5kVG9Ub3Btb3N0Q1NTTm9kZSh0b3Btb3N0Q1NTTm9kZSkge1xuICAgIGNvbnN0IGNzc05vZGUgPSB0b3Btb3N0Q1NTTm9kZTsgLy8vXG5cbiAgICB0aGlzLmFwcGVuZFRvKGNzc05vZGUpO1xuICB9XG5cbiAgc3RhdGljIGZyb21SdWxlU2V0Q1NTTm9kZShydWxlU2V0Q1NTTm9kZSkge1xuICAgIGNvbnN0IGNzc05vZGUgPSBydWxlU2V0Q1NTTm9kZSwgLy8vXG4gICAgICAgICAgcnVsZVNldENTU1RyYW5zZm9ybSA9IENTU1RyYW5zZm9ybS5mcm9tQ1NTTm9kZShSdWxlU2V0Q1NTVHJhbnNmb3JtLCBjc3NOb2RlKTtcblxuICAgIHJldHVybiBydWxlU2V0Q1NTVHJhbnNmb3JtO1xuICB9XG59XG4iXSwibmFtZXMiOlsiUnVsZVNldENTU1RyYW5zZm9ybSIsImFwcGVuZFRvVG9wbW9zdENTU05vZGUiLCJ0b3Btb3N0Q1NTTm9kZSIsImNzc05vZGUiLCJhcHBlbmRUbyIsImZyb21SdWxlU2V0Q1NTTm9kZSIsInJ1bGVTZXRDU1NOb2RlIiwicnVsZVNldENTU1RyYW5zZm9ybSIsIkNTU1RyYW5zZm9ybSIsImZyb21DU1NOb2RlIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQUlxQkE7OzswREFGSTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVWLElBQUEsQUFBTUEsb0NBQU47Y0FBTUE7YUFBQUE7Z0NBQUFBO2VBQU4sa0JBQU1BOztrQkFBQUE7O1lBQ25CQyxLQUFBQTttQkFBQUEsU0FBQUEsdUJBQXVCQyxjQUFjO2dCQUNuQyxJQUFNQyxVQUFVRCxnQkFBZ0IsR0FBRztnQkFFbkMsSUFBSSxDQUFDRSxRQUFRLENBQUNEO1lBQ2hCOzs7O1lBRU9FLEtBQUFBO21CQUFQLFNBQU9BLG1CQUFtQkMsY0FBYztnQkFDdEMsSUFBTUgsVUFBVUcsZ0JBQ1ZDLHNCQUFzQkMsWUFBWSxDQUFDQyxXQUFXLENBVG5DVCxxQkFTeURHO2dCQUUxRSxPQUFPSTtZQUNUOzs7V0FabUJQO0VBQTRCUSxZQUFZIn0=