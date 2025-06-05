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
var _ruleSet = /*#__PURE__*/ _interop_require_default(require("../../node/css/ruleSet"));
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
        },
        {
            key: "fromDeclarationCSSNodes",
            value: function fromDeclarationCSSNodes(declarationCSSNodes) {
                var ruleSetCSSNode = _ruleSet.default.fromDeclarationCSSNodes(declarationCSSNodes), cssNode = ruleSetCSSNode, ruleSetCSSTransform = _css.default.fromCSSNode(RuleSetCSSTransform, cssNode);
                return ruleSetCSSTransform;
            }
        }
    ]);
    return RuleSetCSSTransform;
}(_css.default);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy90cmFuc2Zvcm0vY3NzL3J1bGVTZXQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBDU1NUcmFuc2Zvcm0gZnJvbSBcIi4uLy4uL3RyYW5zZm9ybS9jc3NcIlxuaW1wb3J0IFJ1bGVTZXRDU1NOb2RlIGZyb20gXCIuLi8uLi9ub2RlL2Nzcy9ydWxlU2V0XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJ1bGVTZXRDU1NUcmFuc2Zvcm0gZXh0ZW5kcyBDU1NUcmFuc2Zvcm0ge1xuICBhcHBlbmRUb1RvcG1vc3RDU1NOb2RlKHRvcG1vc3RDU1NOb2RlKSB7XG4gICAgY29uc3QgY3NzTm9kZSA9IHRvcG1vc3RDU1NOb2RlOyAvLy9cblxuICAgIHRoaXMuYXBwZW5kVG8oY3NzTm9kZSk7XG4gIH1cblxuICBzdGF0aWMgZnJvbVJ1bGVTZXRDU1NOb2RlKHJ1bGVTZXRDU1NOb2RlKSB7XG4gICAgY29uc3QgY3NzTm9kZSA9IHJ1bGVTZXRDU1NOb2RlLCAvLy9cbiAgICAgICAgICBydWxlU2V0Q1NTVHJhbnNmb3JtID0gQ1NTVHJhbnNmb3JtLmZyb21DU1NOb2RlKFJ1bGVTZXRDU1NUcmFuc2Zvcm0sIGNzc05vZGUpO1xuXG4gICAgcmV0dXJuIHJ1bGVTZXRDU1NUcmFuc2Zvcm07XG4gIH1cblxuICBzdGF0aWMgZnJvbURlY2xhcmF0aW9uQ1NTTm9kZXMoZGVjbGFyYXRpb25DU1NOb2Rlcykge1xuICAgIGNvbnN0IHJ1bGVTZXRDU1NOb2RlID0gUnVsZVNldENTU05vZGUuZnJvbURlY2xhcmF0aW9uQ1NTTm9kZXMoZGVjbGFyYXRpb25DU1NOb2RlcyksXG4gICAgICAgICAgY3NzTm9kZSA9IHJ1bGVTZXRDU1NOb2RlLFxuICAgICAgICAgIHJ1bGVTZXRDU1NUcmFuc2Zvcm0gPSBDU1NUcmFuc2Zvcm0uZnJvbUNTU05vZGUoUnVsZVNldENTU1RyYW5zZm9ybSwgY3NzTm9kZSk7XG5cbiAgICByZXR1cm4gcnVsZVNldENTU1RyYW5zZm9ybTtcbiAgfVxufVxuIl0sIm5hbWVzIjpbIlJ1bGVTZXRDU1NUcmFuc2Zvcm0iLCJhcHBlbmRUb1RvcG1vc3RDU1NOb2RlIiwidG9wbW9zdENTU05vZGUiLCJjc3NOb2RlIiwiYXBwZW5kVG8iLCJmcm9tUnVsZVNldENTU05vZGUiLCJydWxlU2V0Q1NTTm9kZSIsInJ1bGVTZXRDU1NUcmFuc2Zvcm0iLCJDU1NUcmFuc2Zvcm0iLCJmcm9tQ1NTTm9kZSIsImZyb21EZWNsYXJhdGlvbkNTU05vZGVzIiwiZGVjbGFyYXRpb25DU1NOb2RlcyIsIlJ1bGVTZXRDU1NOb2RlIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQUtxQkE7OzswREFISTs4REFDRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVaLElBQUEsQUFBTUEsb0NBQU47Y0FBTUE7YUFBQUE7Z0NBQUFBO1FBQU4sT0FBQSxrQkFBTUE7O2tCQUFBQTs7WUFDbkJDLEtBQUFBO21CQUFBQSxTQUFBQSx1QkFBdUJDLGNBQWM7Z0JBQ25DLElBQU1DLFVBQVVELGdCQUFnQixHQUFHO2dCQUVuQyxJQUFJLENBQUNFLFFBQVEsQ0FBQ0Q7WUFDaEI7Ozs7WUFFT0UsS0FBQUE7bUJBQVAsU0FBT0EsbUJBQW1CQyxjQUFjO2dCQUN0QyxJQUFNSCxVQUFVRyxnQkFDVkMsc0JBQXNCQyxZQUFZLENBQUNDLFdBQVcsQ0FUbkNULHFCQVN5REc7Z0JBRTFFLE9BQU9JO1lBQ1Q7OztZQUVPRyxLQUFBQTttQkFBUCxTQUFPQSx3QkFBd0JDLG1CQUFtQjtnQkFDaEQsSUFBTUwsaUJBQWlCTSxnQkFBYyxDQUFDRix1QkFBdUIsQ0FBQ0Msc0JBQ3hEUixVQUFVRyxnQkFDVkMsc0JBQXNCQyxZQUFZLENBQUNDLFdBQVcsQ0FqQm5DVCxxQkFpQnlERztnQkFFMUUsT0FBT0k7WUFDVDs7O1dBcEJtQlA7RUFBNEJRLFlBQVkifQ==