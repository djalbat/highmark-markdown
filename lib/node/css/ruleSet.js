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
            key: "resolveSelectors",
            value: function resolveSelectors(context) {
                var node = this, ruleSetCSSNodes = (0, _css1.ruleSetCSSNodesFromNode)(node);
                ruleSetCSSNodes.forEach(function(ruleSetCSSNode) {
                    ruleSetCSSNode.resolveSelectors(context);
                });
                var ruleSetCSSNode = this, selectorsListCSSNodes = (0, _css1.selectorsListCSSNodesFromNode)(node), selectorsListCSSTransform = _selectorsList.default.fromRuleSetCSSNode(ruleSetCSSNode);
                selectorsListCSSNodes.forEach(function(selectorsListCSSNode) {
                    selectorsListCSSTransform.mergeWithSelectorsListCSSNode(selectorsListCSSNode);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ub2RlL2Nzcy9ydWxlU2V0LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgQ1NTTm9kZSBmcm9tIFwiLi4vLi4vbm9kZS9jc3NcIjtcbmltcG9ydCBTZWxlY3RvcnNMaXN0Q1NTVHJhbnNmb3JtIGZyb20gXCIuLi8uLi90cmFuc2Zvcm0vY3NzL3NlbGVjdG9yc0xpc3RcIjtcblxuaW1wb3J0IHsgRU1QVFlfU1RSSU5HIH0gZnJvbSBcIi4uLy4uL2NvbnN0YW50c1wiO1xuaW1wb3J0IHsgcnVsZVNldENTU05vZGVzRnJvbU5vZGUsIHNlbGVjdG9yc0xpc3RDU1NOb2Rlc0Zyb21Ob2RlIH0gZnJvbSBcIi4uLy4uL3V0aWxpdGllcy9jc3NcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUnVsZVNldENTU05vZGUgZXh0ZW5kcyBDU1NOb2RlIHtcbiAgZ2V0U2VsZWN0b3JzTGlzdENTU05vZGUoKSB7XG4gICAgY29uc3Qgc2VsZWN0b3JzTGlzdENTU05vZGUgPSB0aGlzLmZyb21GaXJzdENoaWxkTm9kZSgoZmlyc3RDaGlsZE5vZGUpID0+IHtcbiAgICAgIGNvbnN0IHNlbGVjdG9yc0xpc3RDU1NOb2RlID0gZmlyc3RDaGlsZE5vZGU7ICAvLy9cblxuICAgICAgcmV0dXJuIHNlbGVjdG9yc0xpc3RDU1NOb2RlO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIHNlbGVjdG9yc0xpc3RDU1NOb2RlO1xuICB9XG5cbiAgcmVzb2x2ZVNlbGVjdG9ycyhjb250ZXh0KSB7XG4gICAgY29uc3Qgbm9kZSA9IHRoaXMsXG4gICAgICAgICAgcnVsZVNldENTU05vZGVzID0gcnVsZVNldENTU05vZGVzRnJvbU5vZGUobm9kZSk7XG5cbiAgICBydWxlU2V0Q1NTTm9kZXMuZm9yRWFjaCgocnVsZVNldENTU05vZGUpID0+IHtcbiAgICAgIHJ1bGVTZXRDU1NOb2RlLnJlc29sdmVTZWxlY3RvcnMoY29udGV4dCk7XG4gICAgfSk7XG5cbiAgICBjb25zdCBydWxlU2V0Q1NTTm9kZSA9IHRoaXMsICAvLy9cbiAgICAgICAgICBzZWxlY3RvcnNMaXN0Q1NTTm9kZXMgPSBzZWxlY3RvcnNMaXN0Q1NTTm9kZXNGcm9tTm9kZShub2RlKSxcbiAgICAgICAgICBzZWxlY3RvcnNMaXN0Q1NTVHJhbnNmb3JtID0gU2VsZWN0b3JzTGlzdENTU1RyYW5zZm9ybS5mcm9tUnVsZVNldENTU05vZGUocnVsZVNldENTU05vZGUpO1xuXG4gICAgc2VsZWN0b3JzTGlzdENTU05vZGVzLmZvckVhY2goKHNlbGVjdG9yc0xpc3RDU1NOb2RlKSA9PiB7XG4gICAgICBzZWxlY3RvcnNMaXN0Q1NTVHJhbnNmb3JtLm1lcmdlV2l0aFNlbGVjdG9yc0xpc3RDU1NOb2RlKHNlbGVjdG9yc0xpc3RDU1NOb2RlKTtcbiAgICB9KTtcbiAgfVxuXG4gIGFzQ1NTKGNvbnRleHQpIHtcbiAgICBsZXQgY3NzO1xuXG4gICAgY29uc3QgbXVsdGlwbGljaXR5ID0gdGhpcy5nZXRNdWx0aXBsaWNpdHkoKSxcbiAgICAgICAgICBmaXJzdEluZGV4ID0gMCxcbiAgICAgICAgICBsYXN0SW5kZXggPSBtdWx0aXBsaWNpdHkgLSAxO1xuXG4gICAgY3NzID0gdGhpcy5yZWR1Y2VDaGlsZE5vZGUoKGNzcywgY2hpbGROb2RlLCBpbmRleCkgPT4ge1xuICAgICAgY29uc3QgY2hpbGROb2RlQ1NTID0gY2hpbGROb2RlLmFzQ1NTKGNvbnRleHQpO1xuXG4gICAgICBjc3MgPSBgJHtjc3N9JHtjaGlsZE5vZGVDU1N9YDtcblxuICAgICAgaWYgKGluZGV4ID09PSBmaXJzdEluZGV4KSB7XG4gICAgICAgIGNzcyA9IGAke2Nzc30ge1xuYDtcbiAgICAgIH1cblxuICAgICAgaWYgKGluZGV4ID09PSBsYXN0SW5kZXgpIHtcbiAgICAgICAgY3NzID0gYCR7Y3NzfX1cblxuYDtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNzcztcbiAgICB9LCBFTVBUWV9TVFJJTkcpO1xuXG4gICAgcmV0dXJuIGNzcztcbiAgfVxuXG4gIHN0YXRpYyBmcm9tTm90aGluZygpIHsgcmV0dXJuIENTU05vZGUuZnJvbU5vdGhpbmcoUnVsZVNldENTU05vZGUpOyB9XG5cbiAgc3RhdGljIGZyb21PdXRlck5vZGUob3V0ZXJOb2RlKSB7IHJldHVybiBDU1NOb2RlLmZyb21PdXRlck5vZGUoUnVsZVNldENTU05vZGUsIG91dGVyTm9kZSk7IH1cbn1cbiJdLCJuYW1lcyI6WyJSdWxlU2V0Q1NTTm9kZSIsImdldFNlbGVjdG9yc0xpc3RDU1NOb2RlIiwic2VsZWN0b3JzTGlzdENTU05vZGUiLCJmcm9tRmlyc3RDaGlsZE5vZGUiLCJmaXJzdENoaWxkTm9kZSIsInJlc29sdmVTZWxlY3RvcnMiLCJjb250ZXh0Iiwibm9kZSIsInJ1bGVTZXRDU1NOb2RlcyIsInJ1bGVTZXRDU1NOb2Rlc0Zyb21Ob2RlIiwiZm9yRWFjaCIsInJ1bGVTZXRDU1NOb2RlIiwic2VsZWN0b3JzTGlzdENTU05vZGVzIiwic2VsZWN0b3JzTGlzdENTU05vZGVzRnJvbU5vZGUiLCJzZWxlY3RvcnNMaXN0Q1NTVHJhbnNmb3JtIiwiU2VsZWN0b3JzTGlzdENTU1RyYW5zZm9ybSIsImZyb21SdWxlU2V0Q1NTTm9kZSIsIm1lcmdlV2l0aFNlbGVjdG9yc0xpc3RDU1NOb2RlIiwiYXNDU1MiLCJjc3MiLCJtdWx0aXBsaWNpdHkiLCJnZXRNdWx0aXBsaWNpdHkiLCJmaXJzdEluZGV4IiwibGFzdEluZGV4IiwicmVkdWNlQ2hpbGROb2RlIiwiY2hpbGROb2RlIiwiaW5kZXgiLCJjaGlsZE5vZGVDU1MiLCJFTVBUWV9TVFJJTkciLCJmcm9tTm90aGluZyIsIkNTU05vZGUiLCJmcm9tT3V0ZXJOb2RlIiwib3V0ZXJOb2RlIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQVFxQkE7OzswREFORDtvRUFDa0I7eUJBRVQ7b0JBQzBDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRXhELElBQUEsQUFBTUEsK0JBQU47Y0FBTUE7YUFBQUE7Z0NBQUFBO2VBQU4sa0JBQU1BOztrQkFBQUE7O1lBQ25CQyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBTUMsdUJBQXVCLElBQUksQ0FBQ0Msa0JBQWtCLENBQUMsU0FBQ0M7b0JBQ3BELElBQU1GLHVCQUF1QkUsZ0JBQWlCLEdBQUc7b0JBRWpELE9BQU9GO2dCQUNUO2dCQUVBLE9BQU9BO1lBQ1Q7OztZQUVBRyxLQUFBQTttQkFBQUEsU0FBQUEsaUJBQWlCQyxPQUFPO2dCQUN0QixJQUFNQyxPQUFPLElBQUksRUFDWEMsa0JBQWtCQyxJQUFBQSw2QkFBdUIsRUFBQ0Y7Z0JBRWhEQyxnQkFBZ0JFLE9BQU8sQ0FBQyxTQUFDQztvQkFDdkJBLGVBQWVOLGdCQUFnQixDQUFDQztnQkFDbEM7Z0JBRUEsSUFBTUssaUJBQWlCLElBQUksRUFDckJDLHdCQUF3QkMsSUFBQUEsbUNBQTZCLEVBQUNOLE9BQ3RETyw0QkFBNEJDLHNCQUF5QixDQUFDQyxrQkFBa0IsQ0FBQ0w7Z0JBRS9FQyxzQkFBc0JGLE9BQU8sQ0FBQyxTQUFDUjtvQkFDN0JZLDBCQUEwQkcsNkJBQTZCLENBQUNmO2dCQUMxRDtZQUNGOzs7WUFFQWdCLEtBQUFBO21CQUFBQSxTQUFBQSxNQUFNWixPQUFPO2dCQUNYLElBQUlhO2dCQUVKLElBQU1DLGVBQWUsSUFBSSxDQUFDQyxlQUFlLElBQ25DQyxhQUFhLEdBQ2JDLFlBQVlILGVBQWU7Z0JBRWpDRCxNQUFNLElBQUksQ0FBQ0ssZUFBZSxDQUFDLFNBQUNMLEtBQUtNLFdBQVdDO29CQUMxQyxJQUFNQyxlQUFlRixVQUFVUCxLQUFLLENBQUNaO29CQUVyQ2EsTUFBTSxBQUFDLEdBQVFRLE9BQU5SLEtBQW1CLE9BQWJRO29CQUVmLElBQUlELFVBQVVKLFlBQVk7d0JBQ3hCSCxNQUFNLEFBQUMsR0FBTSxPQUFKQSxLQUFJO29CQUVmO29CQUVBLElBQUlPLFVBQVVILFdBQVc7d0JBQ3ZCSixNQUFNLEFBQUMsR0FBTSxPQUFKQSxLQUFJO29CQUdmO29CQUVBLE9BQU9BO2dCQUNULEdBQUdTLHVCQUFZO2dCQUVmLE9BQU9UO1lBQ1Q7Ozs7WUFFT1UsS0FBQUE7bUJBQVAsU0FBT0E7Z0JBQWdCLE9BQU9DLFlBQU8sQ0FBQ0QsV0FBVyxDQXpEOUI3QjtZQXlEZ0Q7OztZQUU1RCtCLEtBQUFBO21CQUFQLFNBQU9BLGNBQWNDLFNBQVM7Z0JBQUksT0FBT0YsWUFBTyxDQUFDQyxhQUFhLENBM0QzQy9CLGdCQTJENERnQztZQUFZOzs7V0EzRHhFaEM7RUFBdUI4QixZQUFPIn0=