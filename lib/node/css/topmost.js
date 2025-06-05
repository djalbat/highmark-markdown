"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return TopmostCSSNode;
    }
});
var _css = /*#__PURE__*/ _interop_require_default(require("../../node/css"));
var _ruleSet = /*#__PURE__*/ _interop_require_default(require("../../transform/css/ruleSet"));
var _markdownStyle = require("../../ruleNames/markdownStyle");
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
var TopmostCSSNode = /*#__PURE__*/ function(CSSNode) {
    _inherits(TopmostCSSNode, CSSNode);
    function TopmostCSSNode() {
        _class_call_check(this, TopmostCSSNode);
        return _call_super(this, TopmostCSSNode, arguments);
    }
    _create_class(TopmostCSSNode, [
        {
            key: "getRuleName",
            value: function getRuleName() {
                var ruleNme = _markdownStyle.CSS_MARKDOWN_STYLE_RULE_NAME;
                return ruleNme;
            }
        },
        {
            key: "resolve",
            value: function resolve(context) {
                this.resolveSelectors(context);
                this.flatten(context);
            }
        },
        {
            key: "resolveSelectors",
            value: function resolveSelectors(context) {
                var node = this, ruleSetCSSNodes = (0, _css1.ruleSetCSSNodesFromNode)(node);
                ruleSetCSSNodes.forEach(function(ruleSetCSSNode) {
                    ruleSetCSSNode.resolveSelectors(context);
                });
            }
        },
        {
            key: "flatten",
            value: function flatten(context) {
                var node = this, topmostCSSNode = this, nestedRuleSetCSSNodes = (0, _css1.nestedRuleSetCSSNodesFromNode)(node);
                nestedRuleSetCSSNodes.forEach(function(nestedRuleSetCSSNode) {
                    var ruleSetCSSNode = nestedRuleSetCSSNode, ruleSetCSSTransform = _ruleSet.default.fromRuleSetCSSNode(ruleSetCSSNode);
                    ruleSetCSSTransform.remove();
                    ruleSetCSSTransform.appendToTopmostCSSNode(topmostCSSNode);
                });
            }
        },
        {
            key: "asString",
            value: function asString() {
                var ruleName = this.getRuleName(), string = ruleName; ///
                return string;
            }
        }
    ], [
        {
            key: "fromNothing",
            value: function fromNothing() {
                return _css.default.fromNothing(TopmostCSSNode);
            }
        },
        {
            key: "fromOuterNode",
            value: function fromOuterNode(outerNode) {
                return _css.default.fromOuterNode(TopmostCSSNode, outerNode);
            }
        }
    ]);
    return TopmostCSSNode;
}(_css.default);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ub2RlL2Nzcy90b3Btb3N0LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgQ1NTTm9kZSBmcm9tIFwiLi4vLi4vbm9kZS9jc3NcIjtcbmltcG9ydCBSdWxlU2V0Q1NTVHJhbnNmb3JtIGZyb20gXCIuLi8uLi90cmFuc2Zvcm0vY3NzL3J1bGVTZXRcIjtcblxuaW1wb3J0IHsgQ1NTX01BUktET1dOX1NUWUxFX1JVTEVfTkFNRSB9IGZyb20gXCIuLi8uLi9ydWxlTmFtZXMvbWFya2Rvd25TdHlsZVwiO1xuaW1wb3J0IHsgcnVsZVNldENTU05vZGVzRnJvbU5vZGUsIG5lc3RlZFJ1bGVTZXRDU1NOb2Rlc0Zyb21Ob2RlIH0gZnJvbSBcIi4uLy4uL3V0aWxpdGllcy9jc3NcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVG9wbW9zdENTU05vZGUgZXh0ZW5kcyBDU1NOb2RlIHtcbiAgZ2V0UnVsZU5hbWUoKSB7XG4gICAgY29uc3QgcnVsZU5tZSA9IENTU19NQVJLRE9XTl9TVFlMRV9SVUxFX05BTUU7XG5cbiAgICByZXR1cm4gcnVsZU5tZTtcbiAgfVxuXG4gIHJlc29sdmUoY29udGV4dCkge1xuICAgIHRoaXMucmVzb2x2ZVNlbGVjdG9ycyhjb250ZXh0KTtcblxuICAgIHRoaXMuZmxhdHRlbihjb250ZXh0KTtcbiAgfVxuXG4gIHJlc29sdmVTZWxlY3RvcnMoY29udGV4dCkge1xuICAgIGNvbnN0IG5vZGUgPSB0aGlzLCAgLy8vXG4gICAgICAgICAgcnVsZVNldENTU05vZGVzID0gcnVsZVNldENTU05vZGVzRnJvbU5vZGUobm9kZSk7XG5cbiAgICBydWxlU2V0Q1NTTm9kZXMuZm9yRWFjaCgocnVsZVNldENTU05vZGUpID0+IHtcbiAgICAgIHJ1bGVTZXRDU1NOb2RlLnJlc29sdmVTZWxlY3RvcnMoY29udGV4dCk7XG4gICAgfSk7XG4gIH1cblxuICBmbGF0dGVuKGNvbnRleHQpIHtcbiAgICBjb25zdCBub2RlID0gdGhpcywgIC8vL1xuICAgICAgICAgIHRvcG1vc3RDU1NOb2RlID0gdGhpcywgIC8vL1xuICAgICAgICAgIG5lc3RlZFJ1bGVTZXRDU1NOb2RlcyA9IG5lc3RlZFJ1bGVTZXRDU1NOb2Rlc0Zyb21Ob2RlKG5vZGUpO1xuXG4gICAgbmVzdGVkUnVsZVNldENTU05vZGVzLmZvckVhY2goKG5lc3RlZFJ1bGVTZXRDU1NOb2RlKSA9PiB7XG4gICAgICBjb25zdCBydWxlU2V0Q1NTTm9kZSA9IG5lc3RlZFJ1bGVTZXRDU1NOb2RlLCAgLy8vXG4gICAgICAgICAgICBydWxlU2V0Q1NTVHJhbnNmb3JtID0gUnVsZVNldENTU1RyYW5zZm9ybS5mcm9tUnVsZVNldENTU05vZGUocnVsZVNldENTU05vZGUpO1xuXG4gICAgICBydWxlU2V0Q1NTVHJhbnNmb3JtLnJlbW92ZSgpO1xuXG4gICAgICBydWxlU2V0Q1NTVHJhbnNmb3JtLmFwcGVuZFRvVG9wbW9zdENTU05vZGUodG9wbW9zdENTU05vZGUpO1xuICAgIH0pO1xuICB9XG5cbiAgYXNTdHJpbmcoKSB7XG4gICAgY29uc3QgcnVsZU5hbWUgPSB0aGlzLmdldFJ1bGVOYW1lKCksXG4gICAgICAgICAgc3RyaW5nID0gcnVsZU5hbWU7ICAvLy9cblxuICAgIHJldHVybiBzdHJpbmc7XG4gIH1cblxuICBzdGF0aWMgZnJvbU5vdGhpbmcoKSB7IHJldHVybiBDU1NOb2RlLmZyb21Ob3RoaW5nKFRvcG1vc3RDU1NOb2RlKTsgfVxuXG4gIHN0YXRpYyBmcm9tT3V0ZXJOb2RlKG91dGVyTm9kZSkgeyByZXR1cm4gQ1NTTm9kZS5mcm9tT3V0ZXJOb2RlKFRvcG1vc3RDU1NOb2RlLCBvdXRlck5vZGUpOyB9XG59XG4iXSwibmFtZXMiOlsiVG9wbW9zdENTU05vZGUiLCJnZXRSdWxlTmFtZSIsInJ1bGVObWUiLCJDU1NfTUFSS0RPV05fU1RZTEVfUlVMRV9OQU1FIiwicmVzb2x2ZSIsImNvbnRleHQiLCJyZXNvbHZlU2VsZWN0b3JzIiwiZmxhdHRlbiIsIm5vZGUiLCJydWxlU2V0Q1NTTm9kZXMiLCJydWxlU2V0Q1NTTm9kZXNGcm9tTm9kZSIsImZvckVhY2giLCJydWxlU2V0Q1NTTm9kZSIsInRvcG1vc3RDU1NOb2RlIiwibmVzdGVkUnVsZVNldENTU05vZGVzIiwibmVzdGVkUnVsZVNldENTU05vZGVzRnJvbU5vZGUiLCJuZXN0ZWRSdWxlU2V0Q1NTTm9kZSIsInJ1bGVTZXRDU1NUcmFuc2Zvcm0iLCJSdWxlU2V0Q1NTVHJhbnNmb3JtIiwiZnJvbVJ1bGVTZXRDU1NOb2RlIiwicmVtb3ZlIiwiYXBwZW5kVG9Ub3Btb3N0Q1NTTm9kZSIsImFzU3RyaW5nIiwicnVsZU5hbWUiLCJzdHJpbmciLCJmcm9tTm90aGluZyIsIkNTU05vZGUiLCJmcm9tT3V0ZXJOb2RlIiwib3V0ZXJOb2RlIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQVFxQkE7OzswREFORDs4REFDWTs2QkFFYTtvQkFDMEI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFeEQsSUFBQSxBQUFNQSwrQkFBTjtjQUFNQTthQUFBQTtnQ0FBQUE7UUFBTixPQUFBLGtCQUFNQTs7a0JBQUFBOztZQUNuQkMsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQU1DLFVBQVVDLDJDQUE0QjtnQkFFNUMsT0FBT0Q7WUFDVDs7O1lBRUFFLEtBQUFBO21CQUFBQSxTQUFBQSxRQUFRQyxPQUFPO2dCQUNiLElBQUksQ0FBQ0MsZ0JBQWdCLENBQUNEO2dCQUV0QixJQUFJLENBQUNFLE9BQU8sQ0FBQ0Y7WUFDZjs7O1lBRUFDLEtBQUFBO21CQUFBQSxTQUFBQSxpQkFBaUJELE9BQU87Z0JBQ3RCLElBQU1HLE9BQU8sSUFBSSxFQUNYQyxrQkFBa0JDLElBQUFBLDZCQUF1QixFQUFDRjtnQkFFaERDLGdCQUFnQkUsT0FBTyxDQUFDLFNBQUNDO29CQUN2QkEsZUFBZU4sZ0JBQWdCLENBQUNEO2dCQUNsQztZQUNGOzs7WUFFQUUsS0FBQUE7bUJBQUFBLFNBQUFBLFFBQVFGLE9BQU87Z0JBQ2IsSUFBTUcsT0FBTyxJQUFJLEVBQ1hLLGlCQUFpQixJQUFJLEVBQ3JCQyx3QkFBd0JDLElBQUFBLG1DQUE2QixFQUFDUDtnQkFFNURNLHNCQUFzQkgsT0FBTyxDQUFDLFNBQUNLO29CQUM3QixJQUFNSixpQkFBaUJJLHNCQUNqQkMsc0JBQXNCQyxnQkFBbUIsQ0FBQ0Msa0JBQWtCLENBQUNQO29CQUVuRUssb0JBQW9CRyxNQUFNO29CQUUxQkgsb0JBQW9CSSxzQkFBc0IsQ0FBQ1I7Z0JBQzdDO1lBQ0Y7OztZQUVBUyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBTUMsV0FBVyxJQUFJLENBQUN0QixXQUFXLElBQzNCdUIsU0FBU0QsVUFBVyxHQUFHO2dCQUU3QixPQUFPQztZQUNUOzs7O1lBRU9DLEtBQUFBO21CQUFQLFNBQU9BO2dCQUFnQixPQUFPQyxZQUFPLENBQUNELFdBQVcsQ0E1QzlCekI7WUE0Q2dEOzs7WUFFNUQyQixLQUFBQTttQkFBUCxTQUFPQSxjQUFjQyxTQUFTO2dCQUFJLE9BQU9GLFlBQU8sQ0FBQ0MsYUFBYSxDQTlDM0MzQixnQkE4QzRENEI7WUFBWTs7O1dBOUN4RTVCO0VBQXVCMEIsWUFBTyJ9