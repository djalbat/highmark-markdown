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
var _constants = require("../../constants");
var _css1 = require("../../utilities/css");
var _markdownStyle = require("../../ruleNames/markdownStyle");
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
            key: "getDeclarationCSSNodes",
            value: function getDeclarationCSSNodes() {
                var markdownStyleRuleName = _markdownStyle.DECLARATION_MARKDOWN_STYLE_RULE_NAME, cssNodes = this.getCSSNodesByMarkdownStyleRuleName(markdownStyleRuleName), declarationCSSNodes = cssNodes; ///
                return declarationCSSNodes;
            }
        },
        {
            key: "getVerbatimCSSNodes",
            value: function getVerbatimCSSNodes() {
                var markdownStyleRuleName = _markdownStyle.VERBATIM_MARKDOWN_STYLE_RULE_NAME, cssNodes = this.getCSSNodesByMarkdownStyleRuleName(markdownStyleRuleName), verbatimSSNodes = cssNodes; ///
                return verbatimSSNodes;
            }
        },
        {
            key: "getRuleSetCSSNodes",
            value: function getRuleSetCSSNodes() {
                var markdownStyleRuleName = _markdownStyle.RULE_SET_MARKDOWN_STYLE_RULE_NAME, cssNodes = this.getCSSNodesByMarkdownStyleRuleName(markdownStyleRuleName), ruleSetCSSNodes = cssNodes; ///
                return ruleSetCSSNodes;
            }
        },
        {
            key: "getCSSNodesByMarkdownStyleRuleName",
            value: function getCSSNodesByMarkdownStyleRuleName(markdownStyleRuleName) {
                var cssNodes = this.filterChildNode(function(childNode) {
                    var cssNode = childNode, markdownStyleRuleNameMatches = cssNode.matchMarkdownStyleRuleName(markdownStyleRuleName);
                    if (markdownStyleRuleNameMatches) {
                        return true;
                    }
                });
                return cssNodes;
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
            key: "asCSS",
            value: function asCSS(context) {
                var css = _constants.EMPTY_STRING;
                var cssSelectorsString = context.cssSelectorsString, declarationCSSNodes = this.getDeclarationCSSNodes(), verbatimCSSNodes = this.getVerbatimCSSNodes(), ruleSetCSSNodes = this.getRuleSetCSSNodes();
                css = "".concat(css, "\n").concat(cssSelectorsString, " {");
                css = cssNodesAsCSS(declarationCSSNodes, css, context);
                css = cssNodesAsCSS(verbatimCSSNodes, css, context);
                css = "".concat(css, "\n}");
                css = cssNodesAsCSS(ruleSetCSSNodes, css, context);
                return css;
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
function cssNodesAsCSS(cssNodes, css, context) {
    cssNodes.forEach(function(cssNode) {
        var cssNodeCSS = cssNode.asCSS(context);
        css = "".concat(css, "\n").concat(cssNodeCSS);
    });
    return css;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ub2RlL2Nzcy90b3Btb3N0LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgQ1NTTm9kZSBmcm9tIFwiLi4vLi4vbm9kZS9jc3NcIjtcbmltcG9ydCBSdWxlU2V0Q1NTVHJhbnNmb3JtIGZyb20gXCIuLi8uLi90cmFuc2Zvcm0vY3NzL3J1bGVTZXRcIjtcblxuaW1wb3J0IHsgRU1QVFlfU1RSSU5HIH0gZnJvbSBcIi4uLy4uL2NvbnN0YW50c1wiO1xuaW1wb3J0IHsgcnVsZVNldENTU05vZGVzRnJvbU5vZGUsIG5lc3RlZFJ1bGVTZXRDU1NOb2Rlc0Zyb21Ob2RlIH0gZnJvbSBcIi4uLy4uL3V0aWxpdGllcy9jc3NcIjtcbmltcG9ydCB7IENTU19NQVJLRE9XTl9TVFlMRV9SVUxFX05BTUUsXG4gICAgICAgICBWRVJCQVRJTV9NQVJLRE9XTl9TVFlMRV9SVUxFX05BTUUsXG4gICAgICAgICBSVUxFX1NFVF9NQVJLRE9XTl9TVFlMRV9SVUxFX05BTUUsXG4gICAgICAgICBERUNMQVJBVElPTl9NQVJLRE9XTl9TVFlMRV9SVUxFX05BTUUgfSBmcm9tIFwiLi4vLi4vcnVsZU5hbWVzL21hcmtkb3duU3R5bGVcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVG9wbW9zdENTU05vZGUgZXh0ZW5kcyBDU1NOb2RlIHtcbiAgZ2V0UnVsZU5hbWUoKSB7XG4gICAgY29uc3QgcnVsZU5tZSA9IENTU19NQVJLRE9XTl9TVFlMRV9SVUxFX05BTUU7XG5cbiAgICByZXR1cm4gcnVsZU5tZTtcbiAgfVxuXG4gIGdldERlY2xhcmF0aW9uQ1NTTm9kZXMoKSB7XG4gICAgY29uc3QgbWFya2Rvd25TdHlsZVJ1bGVOYW1lID0gREVDTEFSQVRJT05fTUFSS0RPV05fU1RZTEVfUlVMRV9OQU1FLFxuICAgICAgICAgIGNzc05vZGVzID0gdGhpcy5nZXRDU1NOb2Rlc0J5TWFya2Rvd25TdHlsZVJ1bGVOYW1lKG1hcmtkb3duU3R5bGVSdWxlTmFtZSksXG4gICAgICAgICAgZGVjbGFyYXRpb25DU1NOb2RlcyA9IGNzc05vZGVzOyAvLy9cblxuICAgIHJldHVybiBkZWNsYXJhdGlvbkNTU05vZGVzO1xuICB9XG5cbiAgZ2V0VmVyYmF0aW1DU1NOb2RlcygpIHtcbiAgICBjb25zdCBtYXJrZG93blN0eWxlUnVsZU5hbWUgPSBWRVJCQVRJTV9NQVJLRE9XTl9TVFlMRV9SVUxFX05BTUUsXG4gICAgICAgICAgY3NzTm9kZXMgPSB0aGlzLmdldENTU05vZGVzQnlNYXJrZG93blN0eWxlUnVsZU5hbWUobWFya2Rvd25TdHlsZVJ1bGVOYW1lKSxcbiAgICAgICAgICB2ZXJiYXRpbVNTTm9kZXMgPSBjc3NOb2RlczsgLy8vXG5cbiAgICByZXR1cm4gdmVyYmF0aW1TU05vZGVzO1xuICB9XG5cbiAgZ2V0UnVsZVNldENTU05vZGVzKCkge1xuICAgIGNvbnN0IG1hcmtkb3duU3R5bGVSdWxlTmFtZSA9IFJVTEVfU0VUX01BUktET1dOX1NUWUxFX1JVTEVfTkFNRSxcbiAgICAgICAgICBjc3NOb2RlcyA9IHRoaXMuZ2V0Q1NTTm9kZXNCeU1hcmtkb3duU3R5bGVSdWxlTmFtZShtYXJrZG93blN0eWxlUnVsZU5hbWUpLFxuICAgICAgICAgIHJ1bGVTZXRDU1NOb2RlcyA9IGNzc05vZGVzOyAvLy9cblxuICAgIHJldHVybiBydWxlU2V0Q1NTTm9kZXM7XG4gIH1cblxuICBnZXRDU1NOb2Rlc0J5TWFya2Rvd25TdHlsZVJ1bGVOYW1lKG1hcmtkb3duU3R5bGVSdWxlTmFtZSkge1xuICAgIGNvbnN0IGNzc05vZGVzID0gdGhpcy5maWx0ZXJDaGlsZE5vZGUoKGNoaWxkTm9kZSkgPT4ge1xuICAgICAgY29uc3QgY3NzTm9kZSA9IGNoaWxkTm9kZSwgIC8vL1xuICAgICAgICAgICAgbWFya2Rvd25TdHlsZVJ1bGVOYW1lTWF0Y2hlcyA9IGNzc05vZGUubWF0Y2hNYXJrZG93blN0eWxlUnVsZU5hbWUobWFya2Rvd25TdHlsZVJ1bGVOYW1lKTtcblxuICAgICAgaWYgKG1hcmtkb3duU3R5bGVSdWxlTmFtZU1hdGNoZXMpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICByZXR1cm4gY3NzTm9kZXM7XG4gIH1cblxuICByZXNvbHZlKGNvbnRleHQpIHtcbiAgICB0aGlzLnJlc29sdmVTZWxlY3RvcnMoY29udGV4dCk7XG5cbiAgICB0aGlzLmZsYXR0ZW4oY29udGV4dCk7XG4gIH1cblxuICByZXNvbHZlU2VsZWN0b3JzKGNvbnRleHQpIHtcbiAgICBjb25zdCBub2RlID0gdGhpcywgIC8vL1xuICAgICAgICAgIHJ1bGVTZXRDU1NOb2RlcyA9IHJ1bGVTZXRDU1NOb2Rlc0Zyb21Ob2RlKG5vZGUpO1xuXG4gICAgcnVsZVNldENTU05vZGVzLmZvckVhY2goKHJ1bGVTZXRDU1NOb2RlKSA9PiB7XG4gICAgICBydWxlU2V0Q1NTTm9kZS5yZXNvbHZlU2VsZWN0b3JzKGNvbnRleHQpO1xuICAgIH0pO1xuICB9XG5cbiAgZmxhdHRlbihjb250ZXh0KSB7XG4gICAgY29uc3Qgbm9kZSA9IHRoaXMsICAvLy9cbiAgICAgICAgICB0b3Btb3N0Q1NTTm9kZSA9IHRoaXMsICAvLy9cbiAgICAgICAgICBuZXN0ZWRSdWxlU2V0Q1NTTm9kZXMgPSBuZXN0ZWRSdWxlU2V0Q1NTTm9kZXNGcm9tTm9kZShub2RlKTtcblxuICAgIG5lc3RlZFJ1bGVTZXRDU1NOb2Rlcy5mb3JFYWNoKChuZXN0ZWRSdWxlU2V0Q1NTTm9kZSkgPT4ge1xuICAgICAgY29uc3QgcnVsZVNldENTU05vZGUgPSBuZXN0ZWRSdWxlU2V0Q1NTTm9kZSwgIC8vL1xuICAgICAgICAgICAgcnVsZVNldENTU1RyYW5zZm9ybSA9IFJ1bGVTZXRDU1NUcmFuc2Zvcm0uZnJvbVJ1bGVTZXRDU1NOb2RlKHJ1bGVTZXRDU1NOb2RlKTtcblxuICAgICAgcnVsZVNldENTU1RyYW5zZm9ybS5yZW1vdmUoKTtcblxuICAgICAgcnVsZVNldENTU1RyYW5zZm9ybS5hcHBlbmRUb1RvcG1vc3RDU1NOb2RlKHRvcG1vc3RDU1NOb2RlKTtcbiAgICB9KTtcbiAgfVxuXG4gIGFzQ1NTKGNvbnRleHQpIHtcbiAgICBsZXQgY3NzID0gRU1QVFlfU1RSSU5HO1xuXG4gICAgY29uc3QgeyBjc3NTZWxlY3RvcnNTdHJpbmcgfSA9IGNvbnRleHQsXG4gICAgICAgICAgZGVjbGFyYXRpb25DU1NOb2RlcyA9IHRoaXMuZ2V0RGVjbGFyYXRpb25DU1NOb2RlcygpLFxuICAgICAgICAgIHZlcmJhdGltQ1NTTm9kZXMgPSB0aGlzLmdldFZlcmJhdGltQ1NTTm9kZXMoKSxcbiAgICAgICAgICBydWxlU2V0Q1NTTm9kZXMgPSB0aGlzLmdldFJ1bGVTZXRDU1NOb2RlcygpO1xuXG4gICAgY3NzID0gYCR7Y3NzfVxuJHtjc3NTZWxlY3RvcnNTdHJpbmd9IHtgO1xuXG4gICAgY3NzID0gY3NzTm9kZXNBc0NTUyhkZWNsYXJhdGlvbkNTU05vZGVzLCBjc3MsIGNvbnRleHQpO1xuXG4gICAgY3NzID0gY3NzTm9kZXNBc0NTUyh2ZXJiYXRpbUNTU05vZGVzLCBjc3MsIGNvbnRleHQpO1xuXG4gICAgY3NzID0gYCR7Y3NzfVxufWA7XG5cbiAgICBjc3MgPSBjc3NOb2Rlc0FzQ1NTKHJ1bGVTZXRDU1NOb2RlcywgY3NzLCBjb250ZXh0KTtcblxuICAgIHJldHVybiBjc3M7XG4gIH1cblxuICBzdGF0aWMgZnJvbU5vdGhpbmcoKSB7IHJldHVybiBDU1NOb2RlLmZyb21Ob3RoaW5nKFRvcG1vc3RDU1NOb2RlKTsgfVxuXG4gIHN0YXRpYyBmcm9tT3V0ZXJOb2RlKG91dGVyTm9kZSkgeyByZXR1cm4gQ1NTTm9kZS5mcm9tT3V0ZXJOb2RlKFRvcG1vc3RDU1NOb2RlLCBvdXRlck5vZGUpOyB9XG59XG5cbmZ1bmN0aW9uIGNzc05vZGVzQXNDU1MoY3NzTm9kZXMsIGNzcywgY29udGV4dCkge1xuICBjc3NOb2Rlcy5mb3JFYWNoKChjc3NOb2RlKSA9PiB7XG4gICAgY29uc3QgY3NzTm9kZUNTUyA9IGNzc05vZGUuYXNDU1MoY29udGV4dCk7XG5cbiAgICBjc3MgPSBgJHtjc3N9XG4ke2Nzc05vZGVDU1N9YDtcbiAgfSk7XG5cbiAgcmV0dXJuIGNzcztcbn1cbiJdLCJuYW1lcyI6WyJUb3Btb3N0Q1NTTm9kZSIsImdldFJ1bGVOYW1lIiwicnVsZU5tZSIsIkNTU19NQVJLRE9XTl9TVFlMRV9SVUxFX05BTUUiLCJnZXREZWNsYXJhdGlvbkNTU05vZGVzIiwibWFya2Rvd25TdHlsZVJ1bGVOYW1lIiwiREVDTEFSQVRJT05fTUFSS0RPV05fU1RZTEVfUlVMRV9OQU1FIiwiY3NzTm9kZXMiLCJnZXRDU1NOb2Rlc0J5TWFya2Rvd25TdHlsZVJ1bGVOYW1lIiwiZGVjbGFyYXRpb25DU1NOb2RlcyIsImdldFZlcmJhdGltQ1NTTm9kZXMiLCJWRVJCQVRJTV9NQVJLRE9XTl9TVFlMRV9SVUxFX05BTUUiLCJ2ZXJiYXRpbVNTTm9kZXMiLCJnZXRSdWxlU2V0Q1NTTm9kZXMiLCJSVUxFX1NFVF9NQVJLRE9XTl9TVFlMRV9SVUxFX05BTUUiLCJydWxlU2V0Q1NTTm9kZXMiLCJmaWx0ZXJDaGlsZE5vZGUiLCJjaGlsZE5vZGUiLCJjc3NOb2RlIiwibWFya2Rvd25TdHlsZVJ1bGVOYW1lTWF0Y2hlcyIsIm1hdGNoTWFya2Rvd25TdHlsZVJ1bGVOYW1lIiwicmVzb2x2ZSIsImNvbnRleHQiLCJyZXNvbHZlU2VsZWN0b3JzIiwiZmxhdHRlbiIsIm5vZGUiLCJydWxlU2V0Q1NTTm9kZXNGcm9tTm9kZSIsImZvckVhY2giLCJydWxlU2V0Q1NTTm9kZSIsInRvcG1vc3RDU1NOb2RlIiwibmVzdGVkUnVsZVNldENTU05vZGVzIiwibmVzdGVkUnVsZVNldENTU05vZGVzRnJvbU5vZGUiLCJuZXN0ZWRSdWxlU2V0Q1NTTm9kZSIsInJ1bGVTZXRDU1NUcmFuc2Zvcm0iLCJSdWxlU2V0Q1NTVHJhbnNmb3JtIiwiZnJvbVJ1bGVTZXRDU1NOb2RlIiwicmVtb3ZlIiwiYXBwZW5kVG9Ub3Btb3N0Q1NTTm9kZSIsImFzQ1NTIiwiY3NzIiwiRU1QVFlfU1RSSU5HIiwiY3NzU2VsZWN0b3JzU3RyaW5nIiwidmVyYmF0aW1DU1NOb2RlcyIsImNzc05vZGVzQXNDU1MiLCJmcm9tTm90aGluZyIsIkNTU05vZGUiLCJmcm9tT3V0ZXJOb2RlIiwib3V0ZXJOb2RlIiwiY3NzTm9kZUNTUyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFZcUJBOzs7MERBVkQ7OERBQ1k7eUJBRUg7b0JBQzBDOzZCQUlsQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUV0QyxJQUFBLEFBQU1BLCtCQUFOO2NBQU1BO2FBQUFBO2dDQUFBQTtRQUFOLE9BQUEsa0JBQU1BOztrQkFBQUE7O1lBQ25CQyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBTUMsVUFBVUMsMkNBQTRCO2dCQUU1QyxPQUFPRDtZQUNUOzs7WUFFQUUsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQU1DLHdCQUF3QkMsbURBQW9DLEVBQzVEQyxXQUFXLElBQUksQ0FBQ0Msa0NBQWtDLENBQUNILHdCQUNuREksc0JBQXNCRixVQUFVLEdBQUc7Z0JBRXpDLE9BQU9FO1lBQ1Q7OztZQUVBQyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBTUwsd0JBQXdCTSxnREFBaUMsRUFDekRKLFdBQVcsSUFBSSxDQUFDQyxrQ0FBa0MsQ0FBQ0gsd0JBQ25ETyxrQkFBa0JMLFVBQVUsR0FBRztnQkFFckMsT0FBT0s7WUFDVDs7O1lBRUFDLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFNUix3QkFBd0JTLGdEQUFpQyxFQUN6RFAsV0FBVyxJQUFJLENBQUNDLGtDQUFrQyxDQUFDSCx3QkFDbkRVLGtCQUFrQlIsVUFBVSxHQUFHO2dCQUVyQyxPQUFPUTtZQUNUOzs7WUFFQVAsS0FBQUE7bUJBQUFBLFNBQUFBLG1DQUFtQ0gscUJBQXFCO2dCQUN0RCxJQUFNRSxXQUFXLElBQUksQ0FBQ1MsZUFBZSxDQUFDLFNBQUNDO29CQUNyQyxJQUFNQyxVQUFVRCxXQUNWRSwrQkFBK0JELFFBQVFFLDBCQUEwQixDQUFDZjtvQkFFeEUsSUFBSWMsOEJBQThCO3dCQUNoQyxPQUFPO29CQUNUO2dCQUNGO2dCQUVBLE9BQU9aO1lBQ1Q7OztZQUVBYyxLQUFBQTttQkFBQUEsU0FBQUEsUUFBUUMsT0FBTztnQkFDYixJQUFJLENBQUNDLGdCQUFnQixDQUFDRDtnQkFFdEIsSUFBSSxDQUFDRSxPQUFPLENBQUNGO1lBQ2Y7OztZQUVBQyxLQUFBQTttQkFBQUEsU0FBQUEsaUJBQWlCRCxPQUFPO2dCQUN0QixJQUFNRyxPQUFPLElBQUksRUFDWFYsa0JBQWtCVyxJQUFBQSw2QkFBdUIsRUFBQ0Q7Z0JBRWhEVixnQkFBZ0JZLE9BQU8sQ0FBQyxTQUFDQztvQkFDdkJBLGVBQWVMLGdCQUFnQixDQUFDRDtnQkFDbEM7WUFDRjs7O1lBRUFFLEtBQUFBO21CQUFBQSxTQUFBQSxRQUFRRixPQUFPO2dCQUNiLElBQU1HLE9BQU8sSUFBSSxFQUNYSSxpQkFBaUIsSUFBSSxFQUNyQkMsd0JBQXdCQyxJQUFBQSxtQ0FBNkIsRUFBQ047Z0JBRTVESyxzQkFBc0JILE9BQU8sQ0FBQyxTQUFDSztvQkFDN0IsSUFBTUosaUJBQWlCSSxzQkFDakJDLHNCQUFzQkMsZ0JBQW1CLENBQUNDLGtCQUFrQixDQUFDUDtvQkFFbkVLLG9CQUFvQkcsTUFBTTtvQkFFMUJILG9CQUFvQkksc0JBQXNCLENBQUNSO2dCQUM3QztZQUNGOzs7WUFFQVMsS0FBQUE7bUJBQUFBLFNBQUFBLE1BQU1oQixPQUFPO2dCQUNYLElBQUlpQixNQUFNQyx1QkFBWTtnQkFFdEIsSUFBTSxBQUFFQyxxQkFBdUJuQixRQUF2Qm1CLG9CQUNGaEMsc0JBQXNCLElBQUksQ0FBQ0wsc0JBQXNCLElBQ2pEc0MsbUJBQW1CLElBQUksQ0FBQ2hDLG1CQUFtQixJQUMzQ0ssa0JBQWtCLElBQUksQ0FBQ0Ysa0JBQWtCO2dCQUUvQzBCLE1BQU0sQUFBQyxHQUNURSxPQURXRixLQUFJLE1BQ0ksT0FBbkJFLG9CQUFtQjtnQkFFakJGLE1BQU1JLGNBQWNsQyxxQkFBcUI4QixLQUFLakI7Z0JBRTlDaUIsTUFBTUksY0FBY0Qsa0JBQWtCSCxLQUFLakI7Z0JBRTNDaUIsTUFBTSxBQUFDLEdBQU0sT0FBSkEsS0FBSTtnQkFHYkEsTUFBTUksY0FBYzVCLGlCQUFpQndCLEtBQUtqQjtnQkFFMUMsT0FBT2lCO1lBQ1Q7Ozs7WUFFT0ssS0FBQUE7bUJBQVAsU0FBT0E7Z0JBQWdCLE9BQU9DLFlBQU8sQ0FBQ0QsV0FBVyxDQWpHOUI1QztZQWlHZ0Q7OztZQUU1RDhDLEtBQUFBO21CQUFQLFNBQU9BLGNBQWNDLFNBQVM7Z0JBQUksT0FBT0YsWUFBTyxDQUFDQyxhQUFhLENBbkczQzlDLGdCQW1HNEQrQztZQUFZOzs7V0FuR3hFL0M7RUFBdUI2QyxZQUFPO0FBc0duRCxTQUFTRixjQUFjcEMsUUFBUSxFQUFFZ0MsR0FBRyxFQUFFakIsT0FBTztJQUMzQ2YsU0FBU29CLE9BQU8sQ0FBQyxTQUFDVDtRQUNoQixJQUFNOEIsYUFBYTlCLFFBQVFvQixLQUFLLENBQUNoQjtRQUVqQ2lCLE1BQU0sQUFBQyxHQUNUUyxPQURXVCxLQUFJLE1BQ0osT0FBWFM7SUFDQTtJQUVBLE9BQU9UO0FBQ1QifQ==