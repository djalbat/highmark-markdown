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
                var selectorsListCSSTransforms = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [];
                var node = this, ruleSetCSSNodes = (0, _css1.ruleSetCSSNodesFromNode)(node), selectorsListCSSNode = this.getSelectorsListCSSNode(), selectorsListCSSTransform = _selectorsList.default.fromSelectorsListCSSNode(selectorsListCSSNode);
                ruleSetCSSNodes.forEach(function(ruleSetCSSNode) {
                    ruleSetCSSNode.resolve(context);
                });
                var parentCSSNode = this.getParentCSSNode();
                ruleSetCSSNodes.forEach(function(ruleSetCSSNode) {
                    var ruleSetCSSTransform = _ruleSet.default.fromRuleSetCSSNode(ruleSetCSSNode);
                    ruleSetCSSTransform.remove();
                    ruleSetCSSTransform.appendTo(parentCSSNode);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ub2RlL2Nzcy9ydWxlU2V0LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgQ1NTTm9kZSBmcm9tIFwiLi4vLi4vbm9kZS9jc3NcIjtcbmltcG9ydCBSdWxlU2V0Q1NTVHJhbnNmb3JtIGZyb20gXCIuLi8uLi90cmFuc2Zvcm0vY3NzL3J1bGVTZXRcIjtcbmltcG9ydCBTZWxlY3RvcnNMaXN0Q1NTVHJhbnNmb3JtIGZyb20gXCIuLi8uLi90cmFuc2Zvcm0vY3NzL3NlbGVjdG9yc0xpc3RcIjtcblxuaW1wb3J0IHsgRU1QVFlfU1RSSU5HIH0gZnJvbSBcIi4uLy4uL2NvbnN0YW50c1wiO1xuaW1wb3J0IHsgcnVsZVNldENTU05vZGVzRnJvbU5vZGUgfSBmcm9tIFwiLi4vLi4vdXRpbGl0aWVzL2Nzc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSdWxlU2V0Q1NTTm9kZSBleHRlbmRzIENTU05vZGUge1xuICBnZXRTZWxlY3RvcnNMaXN0Q1NTTm9kZSgpIHtcbiAgICBjb25zdCBzZWxlY3RvcnNMaXN0Q1NTTm9kZSA9IHRoaXMuZnJvbUZpcnN0Q2hpbGROb2RlKChmaXJzdENoaWxkTm9kZSkgPT4ge1xuICAgICAgY29uc3Qgc2VsZWN0b3JzTGlzdENTU05vZGUgPSBmaXJzdENoaWxkTm9kZTsgIC8vL1xuXG4gICAgICByZXR1cm4gc2VsZWN0b3JzTGlzdENTU05vZGU7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gc2VsZWN0b3JzTGlzdENTU05vZGU7XG4gIH1cblxuICByZXNvbHZlKGNvbnRleHQsIHNlbGVjdG9yc0xpc3RDU1NUcmFuc2Zvcm1zID0gW10pIHtcbiAgICBjb25zdCBub2RlID0gdGhpcyxcbiAgICAgICAgICBydWxlU2V0Q1NTTm9kZXMgPSBydWxlU2V0Q1NTTm9kZXNGcm9tTm9kZShub2RlKSxcbiAgICAgICAgICBzZWxlY3RvcnNMaXN0Q1NTTm9kZSA9IHRoaXMuZ2V0U2VsZWN0b3JzTGlzdENTU05vZGUoKSxcbiAgICAgICAgICBzZWxlY3RvcnNMaXN0Q1NTVHJhbnNmb3JtID0gU2VsZWN0b3JzTGlzdENTU1RyYW5zZm9ybS5mcm9tU2VsZWN0b3JzTGlzdENTU05vZGUoc2VsZWN0b3JzTGlzdENTU05vZGUpO1xuXG4gICAgcnVsZVNldENTU05vZGVzLmZvckVhY2goKHJ1bGVTZXRDU1NOb2RlKSA9PiB7XG4gICAgICBydWxlU2V0Q1NTTm9kZS5yZXNvbHZlKGNvbnRleHQpO1xuICAgIH0pO1xuXG4gICAgY29uc3QgcGFyZW50Q1NTTm9kZSA9IHRoaXMuZ2V0UGFyZW50Q1NTTm9kZSgpO1xuXG4gICAgcnVsZVNldENTU05vZGVzLmZvckVhY2goKHJ1bGVTZXRDU1NOb2RlKSA9PiB7XG4gICAgICBjb25zdCBydWxlU2V0Q1NTVHJhbnNmb3JtID0gUnVsZVNldENTU1RyYW5zZm9ybS5mcm9tUnVsZVNldENTU05vZGUocnVsZVNldENTU05vZGUpO1xuXG4gICAgICBydWxlU2V0Q1NTVHJhbnNmb3JtLnJlbW92ZSgpO1xuXG4gICAgICBydWxlU2V0Q1NTVHJhbnNmb3JtLmFwcGVuZFRvKHBhcmVudENTU05vZGUpO1xuICAgIH0pO1xuICB9XG5cbiAgYXNDU1MoY29udGV4dCkge1xuICAgIGxldCBjc3M7XG5cbiAgICBjb25zdCBtdWx0aXBsaWNpdHkgPSB0aGlzLmdldE11bHRpcGxpY2l0eSgpLFxuICAgICAgICAgIGZpcnN0SW5kZXggPSAwLFxuICAgICAgICAgIGxhc3RJbmRleCA9IG11bHRpcGxpY2l0eSAtIDE7XG5cbiAgICBjc3MgPSB0aGlzLnJlZHVjZUNoaWxkTm9kZSgoY3NzLCBjaGlsZE5vZGUsIGluZGV4KSA9PiB7XG4gICAgICBjb25zdCBjaGlsZE5vZGVDU1MgPSBjaGlsZE5vZGUuYXNDU1MoY29udGV4dCk7XG5cbiAgICAgIGNzcyA9IGAke2Nzc30ke2NoaWxkTm9kZUNTU31gO1xuXG4gICAgICBpZiAoaW5kZXggPT09IGZpcnN0SW5kZXgpIHtcbiAgICAgICAgY3NzID0gYCR7Y3NzfSB7XG5gO1xuICAgICAgfVxuXG4gICAgICBpZiAoaW5kZXggPT09IGxhc3RJbmRleCkge1xuICAgICAgICBjc3MgPSBgJHtjc3N9fVxuXG5gO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY3NzO1xuICAgIH0sIEVNUFRZX1NUUklORyk7XG5cbiAgICByZXR1cm4gY3NzO1xuICB9XG5cbiAgc3RhdGljIGZyb21Ob3RoaW5nKCkgeyByZXR1cm4gQ1NTTm9kZS5mcm9tTm90aGluZyhSdWxlU2V0Q1NTTm9kZSk7IH1cblxuICBzdGF0aWMgZnJvbU91dGVyTm9kZShvdXRlck5vZGUpIHsgcmV0dXJuIENTU05vZGUuZnJvbU91dGVyTm9kZShSdWxlU2V0Q1NTTm9kZSwgb3V0ZXJOb2RlKTsgfVxufVxuIl0sIm5hbWVzIjpbIlJ1bGVTZXRDU1NOb2RlIiwiZ2V0U2VsZWN0b3JzTGlzdENTU05vZGUiLCJzZWxlY3RvcnNMaXN0Q1NTTm9kZSIsImZyb21GaXJzdENoaWxkTm9kZSIsImZpcnN0Q2hpbGROb2RlIiwicmVzb2x2ZSIsImNvbnRleHQiLCJzZWxlY3RvcnNMaXN0Q1NTVHJhbnNmb3JtcyIsIm5vZGUiLCJydWxlU2V0Q1NTTm9kZXMiLCJydWxlU2V0Q1NTTm9kZXNGcm9tTm9kZSIsInNlbGVjdG9yc0xpc3RDU1NUcmFuc2Zvcm0iLCJTZWxlY3RvcnNMaXN0Q1NTVHJhbnNmb3JtIiwiZnJvbVNlbGVjdG9yc0xpc3RDU1NOb2RlIiwiZm9yRWFjaCIsInJ1bGVTZXRDU1NOb2RlIiwicGFyZW50Q1NTTm9kZSIsImdldFBhcmVudENTU05vZGUiLCJydWxlU2V0Q1NTVHJhbnNmb3JtIiwiUnVsZVNldENTU1RyYW5zZm9ybSIsImZyb21SdWxlU2V0Q1NTTm9kZSIsInJlbW92ZSIsImFwcGVuZFRvIiwiYXNDU1MiLCJjc3MiLCJtdWx0aXBsaWNpdHkiLCJnZXRNdWx0aXBsaWNpdHkiLCJmaXJzdEluZGV4IiwibGFzdEluZGV4IiwicmVkdWNlQ2hpbGROb2RlIiwiY2hpbGROb2RlIiwiaW5kZXgiLCJjaGlsZE5vZGVDU1MiLCJFTVBUWV9TVFJJTkciLCJmcm9tTm90aGluZyIsIkNTU05vZGUiLCJmcm9tT3V0ZXJOb2RlIiwib3V0ZXJOb2RlIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQVNxQkE7OzswREFQRDs4REFDWTtvRUFDTTt5QkFFVDtvQkFDVzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUV6QixJQUFBLEFBQU1BLCtCQUFOO2NBQU1BO2FBQUFBO2dDQUFBQTtlQUFOLGtCQUFNQTs7a0JBQUFBOztZQUNuQkMsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQU1DLHVCQUF1QixJQUFJLENBQUNDLGtCQUFrQixDQUFDLFNBQUNDO29CQUNwRCxJQUFNRix1QkFBdUJFLGdCQUFpQixHQUFHO29CQUVqRCxPQUFPRjtnQkFDVDtnQkFFQSxPQUFPQTtZQUNUOzs7WUFFQUcsS0FBQUE7bUJBQUFBLFNBQUFBLFFBQVFDLE9BQU87b0JBQUVDLDZCQUFBQSxpRUFBNkIsRUFBRTtnQkFDOUMsSUFBTUMsT0FBTyxJQUFJLEVBQ1hDLGtCQUFrQkMsSUFBQUEsNkJBQXVCLEVBQUNGLE9BQzFDTix1QkFBdUIsSUFBSSxDQUFDRCx1QkFBdUIsSUFDbkRVLDRCQUE0QkMsc0JBQXlCLENBQUNDLHdCQUF3QixDQUFDWDtnQkFFckZPLGdCQUFnQkssT0FBTyxDQUFDLFNBQUNDO29CQUN2QkEsZUFBZVYsT0FBTyxDQUFDQztnQkFDekI7Z0JBRUEsSUFBTVUsZ0JBQWdCLElBQUksQ0FBQ0MsZ0JBQWdCO2dCQUUzQ1IsZ0JBQWdCSyxPQUFPLENBQUMsU0FBQ0M7b0JBQ3ZCLElBQU1HLHNCQUFzQkMsZ0JBQW1CLENBQUNDLGtCQUFrQixDQUFDTDtvQkFFbkVHLG9CQUFvQkcsTUFBTTtvQkFFMUJILG9CQUFvQkksUUFBUSxDQUFDTjtnQkFDL0I7WUFDRjs7O1lBRUFPLEtBQUFBO21CQUFBQSxTQUFBQSxNQUFNakIsT0FBTztnQkFDWCxJQUFJa0I7Z0JBRUosSUFBTUMsZUFBZSxJQUFJLENBQUNDLGVBQWUsSUFDbkNDLGFBQWEsR0FDYkMsWUFBWUgsZUFBZTtnQkFFakNELE1BQU0sSUFBSSxDQUFDSyxlQUFlLENBQUMsU0FBQ0wsS0FBS00sV0FBV0M7b0JBQzFDLElBQU1DLGVBQWVGLFVBQVVQLEtBQUssQ0FBQ2pCO29CQUVyQ2tCLE1BQU0sQUFBQyxHQUFRUSxPQUFOUixLQUFtQixPQUFiUTtvQkFFZixJQUFJRCxVQUFVSixZQUFZO3dCQUN4QkgsTUFBTSxBQUFDLEdBQU0sT0FBSkEsS0FBSTtvQkFFZjtvQkFFQSxJQUFJTyxVQUFVSCxXQUFXO3dCQUN2QkosTUFBTSxBQUFDLEdBQU0sT0FBSkEsS0FBSTtvQkFHZjtvQkFFQSxPQUFPQTtnQkFDVCxHQUFHUyx1QkFBWTtnQkFFZixPQUFPVDtZQUNUOzs7O1lBRU9VLEtBQUFBO21CQUFQLFNBQU9BO2dCQUFnQixPQUFPQyxZQUFPLENBQUNELFdBQVcsQ0E3RDlCbEM7WUE2RGdEOzs7WUFFNURvQyxLQUFBQTttQkFBUCxTQUFPQSxjQUFjQyxTQUFTO2dCQUFJLE9BQU9GLFlBQU8sQ0FBQ0MsYUFBYSxDQS9EM0NwQyxnQkErRDREcUM7WUFBWTs7O1dBL0R4RXJDO0VBQXVCbUMsWUFBTyJ9