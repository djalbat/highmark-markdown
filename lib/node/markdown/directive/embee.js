"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return EmbedDirectiveMarkdownNode;
    }
});
var _necessary = require("necessary");
var _directive = /*#__PURE__*/ _interop_require_default(require("../../../node/markdown/directive"));
var _embedDirective = /*#__PURE__*/ _interop_require_default(require("../../../replacement/embedDirective"));
function _assert_this_initialized(self) {
    if (self === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return self;
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
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;
    try {
        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
        return true;
    } catch (e) {
        return false;
    }
}
function _create_super(Derived) {
    var hasNativeReflectConstruct = _is_native_reflect_construct();
    return function _createSuperInternal() {
        var Super = _get_prototype_of(Derived), result;
        if (hasNativeReflectConstruct) {
            var NewTarget = _get_prototype_of(this).constructor;
            result = Reflect.construct(Super, arguments, NewTarget);
        } else {
            result = Super.apply(this, arguments);
        }
        return _possible_constructor_return(this, result);
    };
}
var last = _necessary.arrayUtilities.last;
var EmbedDirectiveMarkdownNode = /*#__PURE__*/ function(DirectiveMarkdownNode) {
    _inherits(EmbedDirectiveMarkdownNode, DirectiveMarkdownNode);
    var _super = _create_super(EmbedDirectiveMarkdownNode);
    function EmbedDirectiveMarkdownNode() {
        _class_call_check(this, EmbedDirectiveMarkdownNode);
        return _super.apply(this, arguments);
    }
    _create_class(EmbedDirectiveMarkdownNode, [
        {
            key: "resolve",
            value: function resolve(context) {
                var embedDirectiveReplacement = null;
                var filePath = this.filePath(context);
                if (filePath !== null) {
                    var importer = context.importer;
                    importer(filePath, context);
                    var _context_importedNode = context.importedNode, importedNode = _context_importedNode === void 0 ? null : _context_importedNode, _context_importedTokens = context.importedTokens, importedTokens = _context_importedTokens === void 0 ? null : _context_importedTokens;
                    if (importedNode !== null) {
                        delete context.importedNode;
                        delete context.importedTokens;
                        var divisionMarkdownNode = importedNode, tokens = importedTokens; ///
                        embedDirectiveReplacement = _embedDirective.default.fromDivisionMarkdownNodeAndTokens(divisionMarkdownNode, tokens);
                    }
                }
                return embedDirectiveReplacement;
            }
        },
        {
            key: "filePath",
            value: function filePath(context) {
                var filePath = null;
                var childNodes = this.getChildNodes(), lastChildNode = last(childNodes), lastChildNodeTerminalNode = lastChildNode.isTerminalNode();
                if (lastChildNodeTerminalNode) {
                    var terminalNode = lastChildNode, pathTerminalNode = terminalNode, pathTerminalNodeContent = pathTerminalNode.getContent();
                    filePath = pathTerminalNodeContent; ///
                }
                return filePath;
            }
        }
    ], [
        {
            key: "fromRuleNameChildNodesAndOpacity",
            value: function fromRuleNameChildNodesAndOpacity(ruleName, childNodes, opacity) {
                return _directive.default.fromRuleNameChildNodesAndOpacity(EmbedDirectiveMarkdownNode, ruleName, childNodes, opacity);
            }
        }
    ]);
    return EmbedDirectiveMarkdownNode;
}(_directive.default);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9ub2RlL21hcmtkb3duL2RpcmVjdGl2ZS9lbWJlZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgYXJyYXlVdGlsaXRpZXMgfSBmcm9tIFwibmVjZXNzYXJ5XCI7XG5cbmltcG9ydCBEaXJlY3RpdmVNYXJrZG93bk5vZGUgZnJvbSBcIi4uLy4uLy4uL25vZGUvbWFya2Rvd24vZGlyZWN0aXZlXCI7XG5pbXBvcnQgRW1iZWREaXJlY3RpdmVSZXBsYWNlbWVudCBmcm9tIFwiLi4vLi4vLi4vcmVwbGFjZW1lbnQvZW1iZWREaXJlY3RpdmVcIjtcblxuY29uc3QgeyBsYXN0IH0gPSBhcnJheVV0aWxpdGllcztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRW1iZWREaXJlY3RpdmVNYXJrZG93bk5vZGUgZXh0ZW5kcyBEaXJlY3RpdmVNYXJrZG93bk5vZGUge1xuICByZXNvbHZlKGNvbnRleHQpIHtcbiAgICBsZXQgZW1iZWREaXJlY3RpdmVSZXBsYWNlbWVudCA9IG51bGw7XG5cbiAgICBjb25zdCBmaWxlUGF0aCA9IHRoaXMuZmlsZVBhdGgoY29udGV4dCk7XG5cbiAgICBpZiAoZmlsZVBhdGggIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IHsgaW1wb3J0ZXIgfSA9IGNvbnRleHQ7XG5cbiAgICAgIGltcG9ydGVyKGZpbGVQYXRoLCBjb250ZXh0KTtcblxuICAgICAgY29uc3QgeyBpbXBvcnRlZE5vZGUgPSBudWxsLFxuICAgICAgICAgICAgICBpbXBvcnRlZFRva2VucyA9IG51bGwgfSA9IGNvbnRleHQ7XG5cbiAgICAgIGlmIChpbXBvcnRlZE5vZGUgIT09IG51bGwpIHtcbiAgICAgICAgZGVsZXRlIGNvbnRleHQuaW1wb3J0ZWROb2RlO1xuICAgICAgICBkZWxldGUgY29udGV4dC5pbXBvcnRlZFRva2VucztcblxuICAgICAgICBjb25zdCBkaXZpc2lvbk1hcmtkb3duTm9kZSA9IGltcG9ydGVkTm9kZSwgIC8vL1xuICAgICAgICAgICAgICB0b2tlbnMgPSBpbXBvcnRlZFRva2VuczsgIC8vL1xuXG4gICAgICAgIGVtYmVkRGlyZWN0aXZlUmVwbGFjZW1lbnQgPSBFbWJlZERpcmVjdGl2ZVJlcGxhY2VtZW50LmZyb21EaXZpc2lvbk1hcmtkb3duTm9kZUFuZFRva2VucyhkaXZpc2lvbk1hcmtkb3duTm9kZSwgdG9rZW5zKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gZW1iZWREaXJlY3RpdmVSZXBsYWNlbWVudDtcbiAgfVxuXG4gIGZpbGVQYXRoKGNvbnRleHQpIHtcbiAgICBsZXQgZmlsZVBhdGggPSBudWxsO1xuXG4gICAgY29uc3QgY2hpbGROb2RlcyA9IHRoaXMuZ2V0Q2hpbGROb2RlcygpLFxuICAgICAgICAgIGxhc3RDaGlsZE5vZGUgPSBsYXN0KGNoaWxkTm9kZXMpLFxuICAgICAgICAgIGxhc3RDaGlsZE5vZGVUZXJtaW5hbE5vZGUgPSBsYXN0Q2hpbGROb2RlLmlzVGVybWluYWxOb2RlKCk7XG5cbiAgICBpZiAobGFzdENoaWxkTm9kZVRlcm1pbmFsTm9kZSkge1xuICAgICAgY29uc3QgdGVybWluYWxOb2RlID0gbGFzdENoaWxkTm9kZSwgLy8vXG4gICAgICAgICAgICBwYXRoVGVybWluYWxOb2RlICA9IHRlcm1pbmFsTm9kZSwgLy8vXG4gICAgICAgICAgICBwYXRoVGVybWluYWxOb2RlQ29udGVudCA9IHBhdGhUZXJtaW5hbE5vZGUuZ2V0Q29udGVudCgpO1xuXG4gICAgICBmaWxlUGF0aCA9IHBhdGhUZXJtaW5hbE5vZGVDb250ZW50OyAvLy9cbiAgICB9XG5cbiAgICByZXR1cm4gZmlsZVBhdGg7XG4gIH1cblxuICBzdGF0aWMgZnJvbVJ1bGVOYW1lQ2hpbGROb2Rlc0FuZE9wYWNpdHkocnVsZU5hbWUsIGNoaWxkTm9kZXMsIG9wYWNpdHkpIHsgcmV0dXJuIERpcmVjdGl2ZU1hcmtkb3duTm9kZS5mcm9tUnVsZU5hbWVDaGlsZE5vZGVzQW5kT3BhY2l0eShFbWJlZERpcmVjdGl2ZU1hcmtkb3duTm9kZSwgcnVsZU5hbWUsIGNoaWxkTm9kZXMsIG9wYWNpdHkpOyB9XG59XG4iXSwibmFtZXMiOlsiRW1iZWREaXJlY3RpdmVNYXJrZG93bk5vZGUiLCJsYXN0IiwiYXJyYXlVdGlsaXRpZXMiLCJyZXNvbHZlIiwiY29udGV4dCIsImVtYmVkRGlyZWN0aXZlUmVwbGFjZW1lbnQiLCJmaWxlUGF0aCIsImltcG9ydGVyIiwiaW1wb3J0ZWROb2RlIiwiaW1wb3J0ZWRUb2tlbnMiLCJkaXZpc2lvbk1hcmtkb3duTm9kZSIsInRva2VucyIsIkVtYmVkRGlyZWN0aXZlUmVwbGFjZW1lbnQiLCJmcm9tRGl2aXNpb25NYXJrZG93bk5vZGVBbmRUb2tlbnMiLCJjaGlsZE5vZGVzIiwiZ2V0Q2hpbGROb2RlcyIsImxhc3RDaGlsZE5vZGUiLCJsYXN0Q2hpbGROb2RlVGVybWluYWxOb2RlIiwiaXNUZXJtaW5hbE5vZGUiLCJ0ZXJtaW5hbE5vZGUiLCJwYXRoVGVybWluYWxOb2RlIiwicGF0aFRlcm1pbmFsTm9kZUNvbnRlbnQiLCJnZXRDb250ZW50IiwiZnJvbVJ1bGVOYW1lQ2hpbGROb2Rlc0FuZE9wYWNpdHkiLCJydWxlTmFtZSIsIm9wYWNpdHkiLCJEaXJlY3RpdmVNYXJrZG93bk5vZGUiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBU3FCQTs7O3lCQVBVO2dFQUVHO3FFQUNJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRXRDLElBQU0sQUFBRUMsT0FBU0MseUJBQWMsQ0FBdkJEO0FBRU8sSUFBQSxBQUFNRCwyQ0FBRCxBQUFMO2NBQU1BOytCQUFBQTthQUFBQTtnQ0FBQUE7OztrQkFBQUE7O1lBQ25CRyxLQUFBQTttQkFBQUEsU0FBQUEsUUFBUUMsT0FBTztnQkFDYixJQUFJQyw0QkFBNEI7Z0JBRWhDLElBQU1DLFdBQVcsSUFBSSxDQUFDQSxRQUFRLENBQUNGO2dCQUUvQixJQUFJRSxhQUFhLE1BQU07b0JBQ3JCLElBQU0sQUFBRUMsV0FBYUgsUUFBYkc7b0JBRVJBLFNBQVNELFVBQVVGO29CQUVuQiw0QkFDa0NBLFFBRDFCSSxjQUFBQSxrREFBZSx3REFDV0osUUFBMUJLLGdCQUFBQSxzREFBaUI7b0JBRXpCLElBQUlELGlCQUFpQixNQUFNO3dCQUN6QixPQUFPSixRQUFRSSxZQUFZO3dCQUMzQixPQUFPSixRQUFRSyxjQUFjO3dCQUU3QixJQUFNQyx1QkFBdUJGLGNBQ3ZCRyxTQUFTRixnQkFBaUIsR0FBRzt3QkFFbkNKLDRCQUE0Qk8sdUJBQXlCLENBQUNDLGlDQUFpQyxDQUFDSCxzQkFBc0JDO29CQUNoSDtnQkFDRjtnQkFFQSxPQUFPTjtZQUNUOzs7WUFFQUMsS0FBQUE7bUJBQUFBLFNBQUFBLFNBQVNGLE9BQU87Z0JBQ2QsSUFBSUUsV0FBVztnQkFFZixJQUFNUSxhQUFhLElBQUksQ0FBQ0MsYUFBYSxJQUMvQkMsZ0JBQWdCZixLQUFLYSxhQUNyQkcsNEJBQTRCRCxjQUFjRSxjQUFjO2dCQUU5RCxJQUFJRCwyQkFBMkI7b0JBQzdCLElBQU1FLGVBQWVILGVBQ2ZJLG1CQUFvQkQsY0FDcEJFLDBCQUEwQkQsaUJBQWlCRSxVQUFVO29CQUUzRGhCLFdBQVdlLHlCQUF5QixHQUFHO2dCQUN6QztnQkFFQSxPQUFPZjtZQUNUOzs7O1lBRU9pQixLQUFBQTttQkFBUCxTQUFPQSxpQ0FBaUNDLFFBQVEsRUFBRVYsVUFBVSxFQUFFVyxPQUFPO2dCQUFJLE9BQU9DLGtCQUFxQixDQUFDSCxnQ0FBZ0MsQ0E5Q25IdkIsNEJBOENnSndCLFVBQVVWLFlBQVlXO1lBQVU7OztXQTlDaEx6QjtFQUFtQzBCLGtCQUFxQiJ9