"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return RuleSetCSSNode;
    }
});
var _css = /*#__PURE__*/ _interop_require_default(require("../../node/css"));
var _ruleSet = /*#__PURE__*/ _interop_require_default(require("../../transform/css/ruleSet"));
var _selectorsList = /*#__PURE__*/ _interop_require_default(require("../../transform/css/selectorsList"));
var _constants = require("../../constants");
var _css1 = require("../../utilities/css");
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
var RuleSetCSSNode = /*#__PURE__*/ function(CSSNode) {
    _inherits(RuleSetCSSNode, CSSNode);
    function RuleSetCSSNode() {
        _class_call_check(this, RuleSetCSSNode);
        return _call_super(this, RuleSetCSSNode, arguments);
    }
    _create_class(RuleSetCSSNode, [
        {
            key: "getSelectorsListCSSNode",
            value: function getSelectorsListCSSNode() {
                var selectorsListCSSNode = this.fromFirstChildNode(function(firstChildNode) {
                    var selectorsListCSSNode = firstChildNode; ///
                    return selectorsListCSSNode;
                });
                return selectorsListCSSNode;
            }
        },
        {
            key: "resolve",
            value: function resolve(context) {
                var _this = this;
                var node = this, ruleSetCSSNodes = (0, _css1.ruleSetCSSNodesFromNode)(node);
                ruleSetCSSNodes.forEach(function(ruleSetCSSNode) {
                    var parentNCSSNode = _this.getParentCSSNode(), ruleSetCSSTransform = _ruleSet.default.fromRuleSetCSSNode(ruleSetCSSNode), selectorsListCSSTTransform = _selectorsList.default.fromRuleSetCSSNode(ruleSetCSSNode);
                    ruleSetCSSTransform.resolve(context);
                    ruleSetCSSTransform.remove();
                    ruleSetCSSTransform.appendTo(parentNCSSNode);
                    selectorsListCSSTTransform.mergeWithRuleSetCSSTransform(ruleSetCSSTransform);
                });
            }
        },
        {
            key: "asCSS",
            value: function asCSS(context) {
                var css;
                var multiplicity = this.getMultiplicity(), firstIndex = 0, lastIndex = multiplicity - 1;
                css = this.reduceChildNode(function(css, childNode, index) {
                    var childNodeCSS = childNode.asCSS(context);
                    css = "".concat(css).concat(childNodeCSS);
                    if (index === firstIndex) {
                        css = "".concat(css, " {\n");
                    }
                    if (index === lastIndex) {
                        css = "".concat(css, "}\n\n");
                    }
                    return css;
                }, _constants.EMPTY_STRING);
                return css;
            }
        }
    ], [
        {
            key: "fromNothing",
            value: function fromNothing() {
                return _css.default.fromNothing(RuleSetCSSNode);
            }
        },
        {
            key: "fromOuterNode",
            value: function fromOuterNode(outerNode) {
                return _css.default.fromOuterNode(RuleSetCSSNode, outerNode);
            }
        }
    ]);
    return RuleSetCSSNode;
}(_css.default);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ub2RlL2Nzcy9ydWxlU2V0LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgQ1NTTm9kZSBmcm9tIFwiLi4vLi4vbm9kZS9jc3NcIjtcbmltcG9ydCBSdWxlU2V0Q1NTVHJhbnNmb3JtIGZyb20gXCIuLi8uLi90cmFuc2Zvcm0vY3NzL3J1bGVTZXRcIjtcbmltcG9ydCBTZWxlY3RvcnNMaXN0Q1NTVHJhbnNmb3JtIGZyb20gXCIuLi8uLi90cmFuc2Zvcm0vY3NzL3NlbGVjdG9yc0xpc3RcIjtcblxuaW1wb3J0IHsgRU1QVFlfU1RSSU5HIH0gZnJvbSBcIi4uLy4uL2NvbnN0YW50c1wiO1xuaW1wb3J0IHsgcnVsZVNldENTU05vZGVzRnJvbU5vZGUgfSBmcm9tIFwiLi4vLi4vdXRpbGl0aWVzL2Nzc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSdWxlU2V0Q1NTTm9kZSBleHRlbmRzIENTU05vZGUge1xuICBnZXRTZWxlY3RvcnNMaXN0Q1NTTm9kZSgpIHtcbiAgICBjb25zdCBzZWxlY3RvcnNMaXN0Q1NTTm9kZSA9IHRoaXMuZnJvbUZpcnN0Q2hpbGROb2RlKChmaXJzdENoaWxkTm9kZSkgPT4ge1xuICAgICAgY29uc3Qgc2VsZWN0b3JzTGlzdENTU05vZGUgPSBmaXJzdENoaWxkTm9kZTsgIC8vL1xuXG4gICAgICByZXR1cm4gc2VsZWN0b3JzTGlzdENTU05vZGU7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gc2VsZWN0b3JzTGlzdENTU05vZGU7XG4gIH1cblxuICByZXNvbHZlKGNvbnRleHQpIHtcbiAgICBjb25zdCBub2RlID0gdGhpcywgIC8vL1xuICAgICAgICAgIHJ1bGVTZXRDU1NOb2RlcyA9IHJ1bGVTZXRDU1NOb2Rlc0Zyb21Ob2RlKG5vZGUpO1xuXG4gICAgcnVsZVNldENTU05vZGVzLmZvckVhY2goKHJ1bGVTZXRDU1NOb2RlKSA9PiB7XG4gICAgICBjb25zdCBwYXJlbnROQ1NTTm9kZSA9IHRoaXMuZ2V0UGFyZW50Q1NTTm9kZSgpLCAgLy8vXG4gICAgICAgICAgICBydWxlU2V0Q1NTVHJhbnNmb3JtID0gUnVsZVNldENTU1RyYW5zZm9ybS5mcm9tUnVsZVNldENTU05vZGUocnVsZVNldENTU05vZGUpLFxuICAgICAgICAgICAgc2VsZWN0b3JzTGlzdENTU1RUcmFuc2Zvcm0gPSBTZWxlY3RvcnNMaXN0Q1NTVHJhbnNmb3JtLmZyb21SdWxlU2V0Q1NTTm9kZShydWxlU2V0Q1NTTm9kZSk7XG5cbiAgICAgIHJ1bGVTZXRDU1NUcmFuc2Zvcm0ucmVzb2x2ZShjb250ZXh0KTtcblxuICAgICAgcnVsZVNldENTU1RyYW5zZm9ybS5yZW1vdmUoKTtcblxuICAgICAgcnVsZVNldENTU1RyYW5zZm9ybS5hcHBlbmRUbyhwYXJlbnROQ1NTTm9kZSk7XG5cbiAgICAgIHNlbGVjdG9yc0xpc3RDU1NUVHJhbnNmb3JtLm1lcmdlV2l0aFJ1bGVTZXRDU1NUcmFuc2Zvcm0ocnVsZVNldENTU1RyYW5zZm9ybSk7XG4gICAgfSk7XG4gIH1cblxuICBhc0NTUyhjb250ZXh0KSB7XG4gICAgbGV0IGNzcztcblxuICAgIGNvbnN0IG11bHRpcGxpY2l0eSA9IHRoaXMuZ2V0TXVsdGlwbGljaXR5KCksXG4gICAgICAgICAgZmlyc3RJbmRleCA9IDAsXG4gICAgICAgICAgbGFzdEluZGV4ID0gbXVsdGlwbGljaXR5IC0gMTtcblxuICAgIGNzcyA9IHRoaXMucmVkdWNlQ2hpbGROb2RlKChjc3MsIGNoaWxkTm9kZSwgaW5kZXgpID0+IHtcbiAgICAgIGNvbnN0IGNoaWxkTm9kZUNTUyA9IGNoaWxkTm9kZS5hc0NTUyhjb250ZXh0KTtcblxuICAgICAgY3NzID0gYCR7Y3NzfSR7Y2hpbGROb2RlQ1NTfWA7XG5cbiAgICAgIGlmIChpbmRleCA9PT0gZmlyc3RJbmRleCkge1xuICAgICAgICBjc3MgPSBgJHtjc3N9IHtcbmA7XG4gICAgICB9XG5cbiAgICAgIGlmIChpbmRleCA9PT0gbGFzdEluZGV4KSB7XG4gICAgICAgIGNzcyA9IGAke2Nzc319XG5cbmA7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjc3M7XG4gICAgfSwgRU1QVFlfU1RSSU5HKTtcblxuICAgIHJldHVybiBjc3M7XG4gIH1cblxuICBzdGF0aWMgZnJvbU5vdGhpbmcoKSB7IHJldHVybiBDU1NOb2RlLmZyb21Ob3RoaW5nKFJ1bGVTZXRDU1NOb2RlKTsgfVxuXG4gIHN0YXRpYyBmcm9tT3V0ZXJOb2RlKG91dGVyTm9kZSkgeyByZXR1cm4gQ1NTTm9kZS5mcm9tT3V0ZXJOb2RlKFJ1bGVTZXRDU1NOb2RlLCBvdXRlck5vZGUpOyB9XG59XG4iXSwibmFtZXMiOlsiUnVsZVNldENTU05vZGUiLCJnZXRTZWxlY3RvcnNMaXN0Q1NTTm9kZSIsInNlbGVjdG9yc0xpc3RDU1NOb2RlIiwiZnJvbUZpcnN0Q2hpbGROb2RlIiwiZmlyc3RDaGlsZE5vZGUiLCJyZXNvbHZlIiwiY29udGV4dCIsIm5vZGUiLCJydWxlU2V0Q1NTTm9kZXMiLCJydWxlU2V0Q1NTTm9kZXNGcm9tTm9kZSIsImZvckVhY2giLCJydWxlU2V0Q1NTTm9kZSIsInBhcmVudE5DU1NOb2RlIiwiZ2V0UGFyZW50Q1NTTm9kZSIsInJ1bGVTZXRDU1NUcmFuc2Zvcm0iLCJSdWxlU2V0Q1NTVHJhbnNmb3JtIiwiZnJvbVJ1bGVTZXRDU1NOb2RlIiwic2VsZWN0b3JzTGlzdENTU1RUcmFuc2Zvcm0iLCJTZWxlY3RvcnNMaXN0Q1NTVHJhbnNmb3JtIiwicmVtb3ZlIiwiYXBwZW5kVG8iLCJtZXJnZVdpdGhSdWxlU2V0Q1NTVHJhbnNmb3JtIiwiYXNDU1MiLCJjc3MiLCJtdWx0aXBsaWNpdHkiLCJnZXRNdWx0aXBsaWNpdHkiLCJmaXJzdEluZGV4IiwibGFzdEluZGV4IiwicmVkdWNlQ2hpbGROb2RlIiwiY2hpbGROb2RlIiwiaW5kZXgiLCJjaGlsZE5vZGVDU1MiLCJFTVBUWV9TVFJJTkciLCJmcm9tTm90aGluZyIsIkNTU05vZGUiLCJmcm9tT3V0ZXJOb2RlIiwib3V0ZXJOb2RlIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQVNxQkE7OzswREFQRDs4REFDWTtvRUFDTTt5QkFFVDtvQkFDVzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUV6QixJQUFBLEFBQU1BLCtCQUFOO2NBQU1BO2FBQUFBO2dDQUFBQTtlQUFOLGtCQUFNQTs7a0JBQUFBOztZQUNuQkMsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQU1DLHVCQUF1QixJQUFJLENBQUNDLGtCQUFrQixDQUFDLFNBQUNDO29CQUNwRCxJQUFNRix1QkFBdUJFLGdCQUFpQixHQUFHO29CQUVqRCxPQUFPRjtnQkFDVDtnQkFFQSxPQUFPQTtZQUNUOzs7WUFFQUcsS0FBQUE7bUJBQUFBLFNBQUFBLFFBQVFDLE9BQU87O2dCQUNiLElBQU1DLE9BQU8sSUFBSSxFQUNYQyxrQkFBa0JDLElBQUFBLDZCQUF1QixFQUFDRjtnQkFFaERDLGdCQUFnQkUsT0FBTyxDQUFDLFNBQUNDO29CQUN2QixJQUFNQyxpQkFBaUIsTUFBS0MsZ0JBQWdCLElBQ3RDQyxzQkFBc0JDLGdCQUFtQixDQUFDQyxrQkFBa0IsQ0FBQ0wsaUJBQzdETSw2QkFBNkJDLHNCQUF5QixDQUFDRixrQkFBa0IsQ0FBQ0w7b0JBRWhGRyxvQkFBb0JULE9BQU8sQ0FBQ0M7b0JBRTVCUSxvQkFBb0JLLE1BQU07b0JBRTFCTCxvQkFBb0JNLFFBQVEsQ0FBQ1I7b0JBRTdCSywyQkFBMkJJLDRCQUE0QixDQUFDUDtnQkFDMUQ7WUFDRjs7O1lBRUFRLEtBQUFBO21CQUFBQSxTQUFBQSxNQUFNaEIsT0FBTztnQkFDWCxJQUFJaUI7Z0JBRUosSUFBTUMsZUFBZSxJQUFJLENBQUNDLGVBQWUsSUFDbkNDLGFBQWEsR0FDYkMsWUFBWUgsZUFBZTtnQkFFakNELE1BQU0sSUFBSSxDQUFDSyxlQUFlLENBQUMsU0FBQ0wsS0FBS00sV0FBV0M7b0JBQzFDLElBQU1DLGVBQWVGLFVBQVVQLEtBQUssQ0FBQ2hCO29CQUVyQ2lCLE1BQU0sQUFBQyxHQUFRUSxPQUFOUixLQUFtQixPQUFiUTtvQkFFZixJQUFJRCxVQUFVSixZQUFZO3dCQUN4QkgsTUFBTSxBQUFDLEdBQU0sT0FBSkEsS0FBSTtvQkFFZjtvQkFFQSxJQUFJTyxVQUFVSCxXQUFXO3dCQUN2QkosTUFBTSxBQUFDLEdBQU0sT0FBSkEsS0FBSTtvQkFHZjtvQkFFQSxPQUFPQTtnQkFDVCxHQUFHUyx1QkFBWTtnQkFFZixPQUFPVDtZQUNUOzs7O1lBRU9VLEtBQUFBO21CQUFQLFNBQU9BO2dCQUFnQixPQUFPQyxZQUFPLENBQUNELFdBQVcsQ0EzRDlCakM7WUEyRGdEOzs7WUFFNURtQyxLQUFBQTttQkFBUCxTQUFPQSxjQUFjQyxTQUFTO2dCQUFJLE9BQU9GLFlBQU8sQ0FBQ0MsYUFBYSxDQTdEM0NuQyxnQkE2RDREb0M7WUFBWTs7O1dBN0R4RXBDO0VBQXVCa0MsWUFBTyJ9