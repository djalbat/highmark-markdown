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
                var node = this, ruleSetCSSNodes = (0, _css1.ruleSetCSSNodesFromNode)(node);
                ruleSetCSSNodes.forEach(function(ruleSetCSSNode) {
                    ruleSetCSSNode.resolve(context);
                });
                var parentCSSNode = this.getParentCSSNode(), selectorsListCSSNode = this.getSelectorsListCSSNode(), selectorsListCSSTransform = _selectorsList.default.fromSelectorsListCSSNode(selectorsListCSSNode);
                ruleSetCSSNodes.forEach(function(ruleSetCSSNode) {
                    var ruleSetCSSTransform = _ruleSet.default.fromRuleSetCSSNode(ruleSetCSSNode), selectorsListCSSNode = ruleSetCSSNode.getSelectorsListCSSNode();
                    ruleSetCSSTransform.remove();
                    ruleSetCSSTransform.appendTo(parentCSSNode);
                // selectorsListCSSTransform.mergeWithSelectorsListCSSNode(selectorsListCSSNode);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ub2RlL2Nzcy9ydWxlU2V0LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgQ1NTTm9kZSBmcm9tIFwiLi4vLi4vbm9kZS9jc3NcIjtcbmltcG9ydCBSdWxlU2V0Q1NTVHJhbnNmb3JtIGZyb20gXCIuLi8uLi90cmFuc2Zvcm0vY3NzL3J1bGVTZXRcIjtcbmltcG9ydCBTZWxlY3RvcnNMaXN0Q1NTVHJhbnNmb3JtIGZyb20gXCIuLi8uLi90cmFuc2Zvcm0vY3NzL3NlbGVjdG9yc0xpc3RcIjtcblxuaW1wb3J0IHsgRU1QVFlfU1RSSU5HIH0gZnJvbSBcIi4uLy4uL2NvbnN0YW50c1wiO1xuaW1wb3J0IHsgcnVsZVNldENTU05vZGVzRnJvbU5vZGUgfSBmcm9tIFwiLi4vLi4vdXRpbGl0aWVzL2Nzc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSdWxlU2V0Q1NTTm9kZSBleHRlbmRzIENTU05vZGUge1xuICBnZXRTZWxlY3RvcnNMaXN0Q1NTTm9kZSgpIHtcbiAgICBjb25zdCBzZWxlY3RvcnNMaXN0Q1NTTm9kZSA9IHRoaXMuZnJvbUZpcnN0Q2hpbGROb2RlKChmaXJzdENoaWxkTm9kZSkgPT4ge1xuICAgICAgY29uc3Qgc2VsZWN0b3JzTGlzdENTU05vZGUgPSBmaXJzdENoaWxkTm9kZTsgIC8vL1xuXG4gICAgICByZXR1cm4gc2VsZWN0b3JzTGlzdENTU05vZGU7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gc2VsZWN0b3JzTGlzdENTU05vZGU7XG4gIH1cblxuICByZXNvbHZlKGNvbnRleHQpIHtcbiAgICBjb25zdCBub2RlID0gdGhpcyxcbiAgICAgICAgICBydWxlU2V0Q1NTTm9kZXMgPSBydWxlU2V0Q1NTTm9kZXNGcm9tTm9kZShub2RlKTtcblxuICAgIHJ1bGVTZXRDU1NOb2Rlcy5mb3JFYWNoKChydWxlU2V0Q1NTTm9kZSkgPT4ge1xuICAgICAgcnVsZVNldENTU05vZGUucmVzb2x2ZShjb250ZXh0KTtcbiAgICB9KTtcblxuICAgIGNvbnN0IHBhcmVudENTU05vZGUgPSB0aGlzLmdldFBhcmVudENTU05vZGUoKSxcbiAgICAgICAgICBzZWxlY3RvcnNMaXN0Q1NTTm9kZSA9IHRoaXMuZ2V0U2VsZWN0b3JzTGlzdENTU05vZGUoKSxcbiAgICAgICAgICBzZWxlY3RvcnNMaXN0Q1NTVHJhbnNmb3JtID0gU2VsZWN0b3JzTGlzdENTU1RyYW5zZm9ybS5mcm9tU2VsZWN0b3JzTGlzdENTU05vZGUoc2VsZWN0b3JzTGlzdENTU05vZGUpO1xuXG4gICAgcnVsZVNldENTU05vZGVzLmZvckVhY2goKHJ1bGVTZXRDU1NOb2RlKSA9PiB7XG4gICAgICBjb25zdCBydWxlU2V0Q1NTVHJhbnNmb3JtID0gUnVsZVNldENTU1RyYW5zZm9ybS5mcm9tUnVsZVNldENTU05vZGUocnVsZVNldENTU05vZGUpLFxuICAgICAgICAgICAgc2VsZWN0b3JzTGlzdENTU05vZGUgPSBydWxlU2V0Q1NTTm9kZS5nZXRTZWxlY3RvcnNMaXN0Q1NTTm9kZSgpO1xuXG4gICAgICBydWxlU2V0Q1NTVHJhbnNmb3JtLnJlbW92ZSgpO1xuXG4gICAgICBydWxlU2V0Q1NTVHJhbnNmb3JtLmFwcGVuZFRvKHBhcmVudENTU05vZGUpO1xuXG4gICAgICAvLyBzZWxlY3RvcnNMaXN0Q1NTVHJhbnNmb3JtLm1lcmdlV2l0aFNlbGVjdG9yc0xpc3RDU1NOb2RlKHNlbGVjdG9yc0xpc3RDU1NOb2RlKTtcbiAgICB9KTtcbiAgfVxuXG4gIGFzQ1NTKGNvbnRleHQpIHtcbiAgICBsZXQgY3NzO1xuXG4gICAgY29uc3QgbXVsdGlwbGljaXR5ID0gdGhpcy5nZXRNdWx0aXBsaWNpdHkoKSxcbiAgICAgICAgICBmaXJzdEluZGV4ID0gMCxcbiAgICAgICAgICBsYXN0SW5kZXggPSBtdWx0aXBsaWNpdHkgLSAxO1xuXG4gICAgY3NzID0gdGhpcy5yZWR1Y2VDaGlsZE5vZGUoKGNzcywgY2hpbGROb2RlLCBpbmRleCkgPT4ge1xuICAgICAgY29uc3QgY2hpbGROb2RlQ1NTID0gY2hpbGROb2RlLmFzQ1NTKGNvbnRleHQpO1xuXG4gICAgICBjc3MgPSBgJHtjc3N9JHtjaGlsZE5vZGVDU1N9YDtcblxuICAgICAgaWYgKGluZGV4ID09PSBmaXJzdEluZGV4KSB7XG4gICAgICAgIGNzcyA9IGAke2Nzc30ge1xuYDtcbiAgICAgIH1cblxuICAgICAgaWYgKGluZGV4ID09PSBsYXN0SW5kZXgpIHtcbiAgICAgICAgY3NzID0gYCR7Y3NzfX1cblxuYDtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNzcztcbiAgICB9LCBFTVBUWV9TVFJJTkcpO1xuXG4gICAgcmV0dXJuIGNzcztcbiAgfVxuXG4gIHN0YXRpYyBmcm9tTm90aGluZygpIHsgcmV0dXJuIENTU05vZGUuZnJvbU5vdGhpbmcoUnVsZVNldENTU05vZGUpOyB9XG5cbiAgc3RhdGljIGZyb21PdXRlck5vZGUob3V0ZXJOb2RlKSB7IHJldHVybiBDU1NOb2RlLmZyb21PdXRlck5vZGUoUnVsZVNldENTU05vZGUsIG91dGVyTm9kZSk7IH1cbn1cbiJdLCJuYW1lcyI6WyJSdWxlU2V0Q1NTTm9kZSIsImdldFNlbGVjdG9yc0xpc3RDU1NOb2RlIiwic2VsZWN0b3JzTGlzdENTU05vZGUiLCJmcm9tRmlyc3RDaGlsZE5vZGUiLCJmaXJzdENoaWxkTm9kZSIsInJlc29sdmUiLCJjb250ZXh0Iiwibm9kZSIsInJ1bGVTZXRDU1NOb2RlcyIsInJ1bGVTZXRDU1NOb2Rlc0Zyb21Ob2RlIiwiZm9yRWFjaCIsInJ1bGVTZXRDU1NOb2RlIiwicGFyZW50Q1NTTm9kZSIsImdldFBhcmVudENTU05vZGUiLCJzZWxlY3RvcnNMaXN0Q1NTVHJhbnNmb3JtIiwiU2VsZWN0b3JzTGlzdENTU1RyYW5zZm9ybSIsImZyb21TZWxlY3RvcnNMaXN0Q1NTTm9kZSIsInJ1bGVTZXRDU1NUcmFuc2Zvcm0iLCJSdWxlU2V0Q1NTVHJhbnNmb3JtIiwiZnJvbVJ1bGVTZXRDU1NOb2RlIiwicmVtb3ZlIiwiYXBwZW5kVG8iLCJhc0NTUyIsImNzcyIsIm11bHRpcGxpY2l0eSIsImdldE11bHRpcGxpY2l0eSIsImZpcnN0SW5kZXgiLCJsYXN0SW5kZXgiLCJyZWR1Y2VDaGlsZE5vZGUiLCJjaGlsZE5vZGUiLCJpbmRleCIsImNoaWxkTm9kZUNTUyIsIkVNUFRZX1NUUklORyIsImZyb21Ob3RoaW5nIiwiQ1NTTm9kZSIsImZyb21PdXRlck5vZGUiLCJvdXRlck5vZGUiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBU3FCQTs7OzBEQVBEOzhEQUNZO29FQUNNO3lCQUVUO29CQUNXOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRXpCLElBQUEsQUFBTUEsK0JBQU47Y0FBTUE7YUFBQUE7Z0NBQUFBO2VBQU4sa0JBQU1BOztrQkFBQUE7O1lBQ25CQyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBTUMsdUJBQXVCLElBQUksQ0FBQ0Msa0JBQWtCLENBQUMsU0FBQ0M7b0JBQ3BELElBQU1GLHVCQUF1QkUsZ0JBQWlCLEdBQUc7b0JBRWpELE9BQU9GO2dCQUNUO2dCQUVBLE9BQU9BO1lBQ1Q7OztZQUVBRyxLQUFBQTttQkFBQUEsU0FBQUEsUUFBUUMsT0FBTztnQkFDYixJQUFNQyxPQUFPLElBQUksRUFDWEMsa0JBQWtCQyxJQUFBQSw2QkFBdUIsRUFBQ0Y7Z0JBRWhEQyxnQkFBZ0JFLE9BQU8sQ0FBQyxTQUFDQztvQkFDdkJBLGVBQWVOLE9BQU8sQ0FBQ0M7Z0JBQ3pCO2dCQUVBLElBQU1NLGdCQUFnQixJQUFJLENBQUNDLGdCQUFnQixJQUNyQ1gsdUJBQXVCLElBQUksQ0FBQ0QsdUJBQXVCLElBQ25EYSw0QkFBNEJDLHNCQUF5QixDQUFDQyx3QkFBd0IsQ0FBQ2Q7Z0JBRXJGTSxnQkFBZ0JFLE9BQU8sQ0FBQyxTQUFDQztvQkFDdkIsSUFBTU0sc0JBQXNCQyxnQkFBbUIsQ0FBQ0Msa0JBQWtCLENBQUNSLGlCQUM3RFQsdUJBQXVCUyxlQUFlVix1QkFBdUI7b0JBRW5FZ0Isb0JBQW9CRyxNQUFNO29CQUUxQkgsb0JBQW9CSSxRQUFRLENBQUNUO2dCQUU3QixpRkFBaUY7Z0JBQ25GO1lBQ0Y7OztZQUVBVSxLQUFBQTttQkFBQUEsU0FBQUEsTUFBTWhCLE9BQU87Z0JBQ1gsSUFBSWlCO2dCQUVKLElBQU1DLGVBQWUsSUFBSSxDQUFDQyxlQUFlLElBQ25DQyxhQUFhLEdBQ2JDLFlBQVlILGVBQWU7Z0JBRWpDRCxNQUFNLElBQUksQ0FBQ0ssZUFBZSxDQUFDLFNBQUNMLEtBQUtNLFdBQVdDO29CQUMxQyxJQUFNQyxlQUFlRixVQUFVUCxLQUFLLENBQUNoQjtvQkFFckNpQixNQUFNLEFBQUMsR0FBUVEsT0FBTlIsS0FBbUIsT0FBYlE7b0JBRWYsSUFBSUQsVUFBVUosWUFBWTt3QkFDeEJILE1BQU0sQUFBQyxHQUFNLE9BQUpBLEtBQUk7b0JBRWY7b0JBRUEsSUFBSU8sVUFBVUgsV0FBVzt3QkFDdkJKLE1BQU0sQUFBQyxHQUFNLE9BQUpBLEtBQUk7b0JBR2Y7b0JBRUEsT0FBT0E7Z0JBQ1QsR0FBR1MsdUJBQVk7Z0JBRWYsT0FBT1Q7WUFDVDs7OztZQUVPVSxLQUFBQTttQkFBUCxTQUFPQTtnQkFBZ0IsT0FBT0MsWUFBTyxDQUFDRCxXQUFXLENBaEU5QmpDO1lBZ0VnRDs7O1lBRTVEbUMsS0FBQUE7bUJBQVAsU0FBT0EsY0FBY0MsU0FBUztnQkFBSSxPQUFPRixZQUFPLENBQUNDLGFBQWEsQ0FsRTNDbkMsZ0JBa0U0RG9DO1lBQVk7OztXQWxFeEVwQztFQUF1QmtDLFlBQU8ifQ==