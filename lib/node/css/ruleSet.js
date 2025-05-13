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
                var node = this, parentNCSSNode = this.getParentCSSNode(), ruleSetCSSNodes = (0, _css1.ruleSetCSSNodesFromNode)(node);
                ruleSetCSSNodes.forEach(function(ruleSetCSSNode) {
                    var ruleSetCSSTransform = _ruleSet.default.fromRuleSetCSSNode(ruleSetCSSNode);
                    ruleSetCSSTransform.resolve(context);
                    ruleSetCSSTransform.remove();
                    ruleSetCSSTransform.appendTo(parentNCSSNode);
                });
                var ruleSetCSSNode = this, ruleSetCSSTransform = _ruleSet.default.fromRuleSetCSSNode(ruleSetCSSNode);
                ruleSetCSSNodes.forEach(function(ruleSetCSSNode) {
                    ruleSetCSSTransform.mergeWithRuleSetCSSNode(ruleSetCSSNode);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ub2RlL2Nzcy9ydWxlU2V0LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgQ1NTTm9kZSBmcm9tIFwiLi4vLi4vbm9kZS9jc3NcIjtcbmltcG9ydCBSdWxlU2V0Q1NTVHJhbnNmb3JtIGZyb20gXCIuLi8uLi90cmFuc2Zvcm0vY3NzL3J1bGVTZXRcIjtcblxuaW1wb3J0IHsgRU1QVFlfU1RSSU5HIH0gZnJvbSBcIi4uLy4uL2NvbnN0YW50c1wiO1xuaW1wb3J0IHsgcnVsZVNldENTU05vZGVzRnJvbU5vZGUgfSBmcm9tIFwiLi4vLi4vdXRpbGl0aWVzL2Nzc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSdWxlU2V0Q1NTTm9kZSBleHRlbmRzIENTU05vZGUge1xuICBnZXRTZWxlY3RvcnNMaXN0Q1NTTm9kZSgpIHtcbiAgICBjb25zdCBzZWxlY3RvcnNMaXN0Q1NTTm9kZSA9IHRoaXMuZnJvbUZpcnN0Q2hpbGROb2RlKChmaXJzdENoaWxkTm9kZSkgPT4ge1xuICAgICAgY29uc3Qgc2VsZWN0b3JzTGlzdENTU05vZGUgPSBmaXJzdENoaWxkTm9kZTsgIC8vL1xuXG4gICAgICByZXR1cm4gc2VsZWN0b3JzTGlzdENTU05vZGU7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gc2VsZWN0b3JzTGlzdENTU05vZGU7XG4gIH1cblxuICByZXNvbHZlKGNvbnRleHQpIHtcbiAgICBjb25zdCBub2RlID0gdGhpcywgIC8vL1xuICAgICAgICAgIHBhcmVudE5DU1NOb2RlID0gdGhpcy5nZXRQYXJlbnRDU1NOb2RlKCksICAvLy9cbiAgICAgICAgICBydWxlU2V0Q1NTTm9kZXMgPSBydWxlU2V0Q1NTTm9kZXNGcm9tTm9kZShub2RlKTtcblxuICAgIHJ1bGVTZXRDU1NOb2Rlcy5mb3JFYWNoKChydWxlU2V0Q1NTTm9kZSkgPT4ge1xuICAgICAgY29uc3QgcnVsZVNldENTU1RyYW5zZm9ybSA9IFJ1bGVTZXRDU1NUcmFuc2Zvcm0uZnJvbVJ1bGVTZXRDU1NOb2RlKHJ1bGVTZXRDU1NOb2RlKTtcblxuICAgICAgcnVsZVNldENTU1RyYW5zZm9ybS5yZXNvbHZlKGNvbnRleHQpO1xuXG4gICAgICBydWxlU2V0Q1NTVHJhbnNmb3JtLnJlbW92ZSgpO1xuXG4gICAgICBydWxlU2V0Q1NTVHJhbnNmb3JtLmFwcGVuZFRvKHBhcmVudE5DU1NOb2RlKTtcbiAgICB9KTtcblxuICAgIGNvbnN0IHJ1bGVTZXRDU1NOb2RlID0gdGhpcywgIC8vL1xuICAgICAgICAgIHJ1bGVTZXRDU1NUcmFuc2Zvcm0gPSBSdWxlU2V0Q1NTVHJhbnNmb3JtLmZyb21SdWxlU2V0Q1NTTm9kZShydWxlU2V0Q1NTTm9kZSk7XG5cbiAgICBydWxlU2V0Q1NTTm9kZXMuZm9yRWFjaCgocnVsZVNldENTU05vZGUpID0+IHtcbiAgICAgIHJ1bGVTZXRDU1NUcmFuc2Zvcm0ubWVyZ2VXaXRoUnVsZVNldENTU05vZGUocnVsZVNldENTU05vZGUpO1xuICAgIH0pO1xuICB9XG5cbiAgYXNDU1MoY29udGV4dCkge1xuICAgIGxldCBjc3M7XG5cbiAgICBjb25zdCBtdWx0aXBsaWNpdHkgPSB0aGlzLmdldE11bHRpcGxpY2l0eSgpLFxuICAgICAgICAgIGZpcnN0SW5kZXggPSAwLFxuICAgICAgICAgIGxhc3RJbmRleCA9IG11bHRpcGxpY2l0eSAtIDE7XG5cbiAgICBjc3MgPSB0aGlzLnJlZHVjZUNoaWxkTm9kZSgoY3NzLCBjaGlsZE5vZGUsIGluZGV4KSA9PiB7XG4gICAgICBjb25zdCBjaGlsZE5vZGVDU1MgPSBjaGlsZE5vZGUuYXNDU1MoY29udGV4dCk7XG5cbiAgICAgIGNzcyA9IGAke2Nzc30ke2NoaWxkTm9kZUNTU31gO1xuXG4gICAgICBpZiAoaW5kZXggPT09IGZpcnN0SW5kZXgpIHtcbiAgICAgICAgY3NzID0gYCR7Y3NzfSB7XG5gO1xuICAgICAgfVxuXG4gICAgICBpZiAoaW5kZXggPT09IGxhc3RJbmRleCkge1xuICAgICAgICBjc3MgPSBgJHtjc3N9fVxuXG5gO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY3NzO1xuICAgIH0sIEVNUFRZX1NUUklORyk7XG5cbiAgICByZXR1cm4gY3NzO1xuICB9XG5cbiAgc3RhdGljIGZyb21Ob3RoaW5nKCkgeyByZXR1cm4gQ1NTTm9kZS5mcm9tTm90aGluZyhSdWxlU2V0Q1NTTm9kZSk7IH1cblxuICBzdGF0aWMgZnJvbU91dGVyTm9kZShvdXRlck5vZGUpIHsgcmV0dXJuIENTU05vZGUuZnJvbU91dGVyTm9kZShSdWxlU2V0Q1NTTm9kZSwgb3V0ZXJOb2RlKTsgfVxufVxuIl0sIm5hbWVzIjpbIlJ1bGVTZXRDU1NOb2RlIiwiZ2V0U2VsZWN0b3JzTGlzdENTU05vZGUiLCJzZWxlY3RvcnNMaXN0Q1NTTm9kZSIsImZyb21GaXJzdENoaWxkTm9kZSIsImZpcnN0Q2hpbGROb2RlIiwicmVzb2x2ZSIsImNvbnRleHQiLCJub2RlIiwicGFyZW50TkNTU05vZGUiLCJnZXRQYXJlbnRDU1NOb2RlIiwicnVsZVNldENTU05vZGVzIiwicnVsZVNldENTU05vZGVzRnJvbU5vZGUiLCJmb3JFYWNoIiwicnVsZVNldENTU05vZGUiLCJydWxlU2V0Q1NTVHJhbnNmb3JtIiwiUnVsZVNldENTU1RyYW5zZm9ybSIsImZyb21SdWxlU2V0Q1NTTm9kZSIsInJlbW92ZSIsImFwcGVuZFRvIiwibWVyZ2VXaXRoUnVsZVNldENTU05vZGUiLCJhc0NTUyIsImNzcyIsIm11bHRpcGxpY2l0eSIsImdldE11bHRpcGxpY2l0eSIsImZpcnN0SW5kZXgiLCJsYXN0SW5kZXgiLCJyZWR1Y2VDaGlsZE5vZGUiLCJjaGlsZE5vZGUiLCJpbmRleCIsImNoaWxkTm9kZUNTUyIsIkVNUFRZX1NUUklORyIsImZyb21Ob3RoaW5nIiwiQ1NTTm9kZSIsImZyb21PdXRlck5vZGUiLCJvdXRlck5vZGUiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBUXFCQTs7OzBEQU5EOzhEQUNZO3lCQUVIO29CQUNXOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRXpCLElBQUEsQUFBTUEsK0JBQU47Y0FBTUE7YUFBQUE7Z0NBQUFBO2VBQU4sa0JBQU1BOztrQkFBQUE7O1lBQ25CQyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBTUMsdUJBQXVCLElBQUksQ0FBQ0Msa0JBQWtCLENBQUMsU0FBQ0M7b0JBQ3BELElBQU1GLHVCQUF1QkUsZ0JBQWlCLEdBQUc7b0JBRWpELE9BQU9GO2dCQUNUO2dCQUVBLE9BQU9BO1lBQ1Q7OztZQUVBRyxLQUFBQTttQkFBQUEsU0FBQUEsUUFBUUMsT0FBTztnQkFDYixJQUFNQyxPQUFPLElBQUksRUFDWEMsaUJBQWlCLElBQUksQ0FBQ0MsZ0JBQWdCLElBQ3RDQyxrQkFBa0JDLElBQUFBLDZCQUF1QixFQUFDSjtnQkFFaERHLGdCQUFnQkUsT0FBTyxDQUFDLFNBQUNDO29CQUN2QixJQUFNQyxzQkFBc0JDLGdCQUFtQixDQUFDQyxrQkFBa0IsQ0FBQ0g7b0JBRW5FQyxvQkFBb0JULE9BQU8sQ0FBQ0M7b0JBRTVCUSxvQkFBb0JHLE1BQU07b0JBRTFCSCxvQkFBb0JJLFFBQVEsQ0FBQ1Y7Z0JBQy9CO2dCQUVBLElBQU1LLGlCQUFpQixJQUFJLEVBQ3JCQyxzQkFBc0JDLGdCQUFtQixDQUFDQyxrQkFBa0IsQ0FBQ0g7Z0JBRW5FSCxnQkFBZ0JFLE9BQU8sQ0FBQyxTQUFDQztvQkFDdkJDLG9CQUFvQkssdUJBQXVCLENBQUNOO2dCQUM5QztZQUNGOzs7WUFFQU8sS0FBQUE7bUJBQUFBLFNBQUFBLE1BQU1kLE9BQU87Z0JBQ1gsSUFBSWU7Z0JBRUosSUFBTUMsZUFBZSxJQUFJLENBQUNDLGVBQWUsSUFDbkNDLGFBQWEsR0FDYkMsWUFBWUgsZUFBZTtnQkFFakNELE1BQU0sSUFBSSxDQUFDSyxlQUFlLENBQUMsU0FBQ0wsS0FBS00sV0FBV0M7b0JBQzFDLElBQU1DLGVBQWVGLFVBQVVQLEtBQUssQ0FBQ2Q7b0JBRXJDZSxNQUFNLEFBQUMsR0FBUVEsT0FBTlIsS0FBbUIsT0FBYlE7b0JBRWYsSUFBSUQsVUFBVUosWUFBWTt3QkFDeEJILE1BQU0sQUFBQyxHQUFNLE9BQUpBLEtBQUk7b0JBRWY7b0JBRUEsSUFBSU8sVUFBVUgsV0FBVzt3QkFDdkJKLE1BQU0sQUFBQyxHQUFNLE9BQUpBLEtBQUk7b0JBR2Y7b0JBRUEsT0FBT0E7Z0JBQ1QsR0FBR1MsdUJBQVk7Z0JBRWYsT0FBT1Q7WUFDVDs7OztZQUVPVSxLQUFBQTttQkFBUCxTQUFPQTtnQkFBZ0IsT0FBT0MsWUFBTyxDQUFDRCxXQUFXLENBL0Q5Qi9CO1lBK0RnRDs7O1lBRTVEaUMsS0FBQUE7bUJBQVAsU0FBT0EsY0FBY0MsU0FBUztnQkFBSSxPQUFPRixZQUFPLENBQUNDLGFBQWEsQ0FqRTNDakMsZ0JBaUU0RGtDO1lBQVk7OztXQWpFeEVsQztFQUF1QmdDLFlBQU8ifQ==