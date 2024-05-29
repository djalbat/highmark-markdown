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
var _markdown = /*#__PURE__*/ _interop_require_default(require("../../../node/markdown"));
var _replacementNodeAndTokens = /*#__PURE__*/ _interop_require_default(require("../../../replacementNodeAndTokens"));
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
var EmbedDirectiveMarkdownNode = /*#__PURE__*/ function(MarkdownNode) {
    _inherits(EmbedDirectiveMarkdownNode, MarkdownNode);
    var _super = _create_super(EmbedDirectiveMarkdownNode);
    function EmbedDirectiveMarkdownNode() {
        _class_call_check(this, EmbedDirectiveMarkdownNode);
        return _super.apply(this, arguments);
    }
    _create_class(EmbedDirectiveMarkdownNode, [
        {
            key: "replacementNodeAndTokens",
            value: function replacementNodeAndTokens(context) {
                var replacementNodeAndTokens = null;
                var _context_importer = context.importer, importer = _context_importer === void 0 ? null : _context_importer;
                if (importer !== null) {
                    var filePath = this.filePath(context);
                    importer(filePath, context);
                    var _context_importedNode = context.importedNode, importedNode = _context_importedNode === void 0 ? null : _context_importedNode, _context_importedTokens = context.importedTokens, importedTokens = _context_importedTokens === void 0 ? null : _context_importedTokens;
                    if (importedNode !== null) {
                        delete context.importedNode;
                        delete context.importedTokens;
                        delete context.importedClassName;
                        var node = importedNode, tokens = importedTokens; ///
                        replacementNodeAndTokens = _replacementNodeAndTokens.default.fromNodeAndTokens(node, tokens);
                    }
                }
                return replacementNodeAndTokens;
            }
        },
        {
            key: "filePath",
            value: function filePath(context) {
                var childNodes = this.getChildNodes(), lastChildNode = last(childNodes), pathTerminalNode = lastChildNode, pathTerminalNodeContent = pathTerminalNode.getContent(), filePath = pathTerminalNodeContent; ///
                return filePath;
            }
        }
    ], [
        {
            key: "fromRuleNameChildNodesAndOpacity",
            value: function fromRuleNameChildNodesAndOpacity(ruleName, childNodes, opacity) {
                return _markdown.default.fromRuleNameChildNodesAndOpacity(EmbedDirectiveMarkdownNode, ruleName, childNodes, opacity);
            }
        }
    ]);
    return EmbedDirectiveMarkdownNode;
}(_markdown.default);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9ub2RlL21hcmtkb3duL2RpcmVjdGl2ZS9lbWJlZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgYXJyYXlVdGlsaXRpZXMgfSBmcm9tIFwibmVjZXNzYXJ5XCI7XG5cbmltcG9ydCBNYXJrZG93bk5vZGUgZnJvbSBcIi4uLy4uLy4uL25vZGUvbWFya2Rvd25cIjtcbmltcG9ydCBSZXBsYWNlbWVudE5vZGVBbmRUb2tlbnMgZnJvbSBcIi4uLy4uLy4uL3JlcGxhY2VtZW50Tm9kZUFuZFRva2Vuc1wiO1xuXG5jb25zdCB7IGxhc3QgfSA9IGFycmF5VXRpbGl0aWVzO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBFbWJlZERpcmVjdGl2ZU1hcmtkb3duTm9kZSBleHRlbmRzIE1hcmtkb3duTm9kZSB7XG4gIHJlcGxhY2VtZW50Tm9kZUFuZFRva2Vucyhjb250ZXh0KSB7XG4gICAgbGV0IHJlcGxhY2VtZW50Tm9kZUFuZFRva2VucyA9IG51bGw7XG5cbiAgICBjb25zdCB7IGltcG9ydGVyID0gbnVsbCB9ID0gY29udGV4dDtcblxuICAgIGlmIChpbXBvcnRlciAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgZmlsZVBhdGggPSB0aGlzLmZpbGVQYXRoKGNvbnRleHQpO1xuXG4gICAgICBpbXBvcnRlcihmaWxlUGF0aCwgY29udGV4dCk7XG5cbiAgICAgIGNvbnN0IHsgaW1wb3J0ZWROb2RlID0gbnVsbCxcbiAgICAgICAgICAgICAgaW1wb3J0ZWRUb2tlbnMgPSBudWxsIH0gPSBjb250ZXh0O1xuXG4gICAgICBpZiAoaW1wb3J0ZWROb2RlICE9PSBudWxsKSB7XG4gICAgICAgIGRlbGV0ZSBjb250ZXh0LmltcG9ydGVkTm9kZTtcbiAgICAgICAgZGVsZXRlIGNvbnRleHQuaW1wb3J0ZWRUb2tlbnM7XG4gICAgICAgIGRlbGV0ZSBjb250ZXh0LmltcG9ydGVkQ2xhc3NOYW1lO1xuXG4gICAgICAgIGNvbnN0IG5vZGUgPSBpbXBvcnRlZE5vZGUsICAvLy9cbiAgICAgICAgICAgICAgdG9rZW5zID0gaW1wb3J0ZWRUb2tlbnM7ICAvLy9cblxuICAgICAgICByZXBsYWNlbWVudE5vZGVBbmRUb2tlbnMgPSBSZXBsYWNlbWVudE5vZGVBbmRUb2tlbnMuZnJvbU5vZGVBbmRUb2tlbnMobm9kZSwgdG9rZW5zKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gcmVwbGFjZW1lbnROb2RlQW5kVG9rZW5zO1xuICB9XG5cbiAgZmlsZVBhdGgoY29udGV4dCkge1xuICAgIGNvbnN0IGNoaWxkTm9kZXMgPSB0aGlzLmdldENoaWxkTm9kZXMoKSxcbiAgICAgICAgICBsYXN0Q2hpbGROb2RlID0gbGFzdChjaGlsZE5vZGVzKSxcbiAgICAgICAgICBwYXRoVGVybWluYWxOb2RlICA9IGxhc3RDaGlsZE5vZGUsIC8vL1xuICAgICAgICAgIHBhdGhUZXJtaW5hbE5vZGVDb250ZW50ID0gcGF0aFRlcm1pbmFsTm9kZS5nZXRDb250ZW50KCksXG4gICAgICAgICAgZmlsZVBhdGggPSBwYXRoVGVybWluYWxOb2RlQ29udGVudDsgLy8vXG5cbiAgICByZXR1cm4gZmlsZVBhdGg7XG4gIH1cblxuICBzdGF0aWMgZnJvbVJ1bGVOYW1lQ2hpbGROb2Rlc0FuZE9wYWNpdHkocnVsZU5hbWUsIGNoaWxkTm9kZXMsIG9wYWNpdHkpIHsgcmV0dXJuIE1hcmtkb3duTm9kZS5mcm9tUnVsZU5hbWVDaGlsZE5vZGVzQW5kT3BhY2l0eShFbWJlZERpcmVjdGl2ZU1hcmtkb3duTm9kZSwgcnVsZU5hbWUsIGNoaWxkTm9kZXMsIG9wYWNpdHkpOyB9XG59XG4iXSwibmFtZXMiOlsiRW1iZWREaXJlY3RpdmVNYXJrZG93bk5vZGUiLCJsYXN0IiwiYXJyYXlVdGlsaXRpZXMiLCJyZXBsYWNlbWVudE5vZGVBbmRUb2tlbnMiLCJjb250ZXh0IiwiaW1wb3J0ZXIiLCJmaWxlUGF0aCIsImltcG9ydGVkTm9kZSIsImltcG9ydGVkVG9rZW5zIiwiaW1wb3J0ZWRDbGFzc05hbWUiLCJub2RlIiwidG9rZW5zIiwiUmVwbGFjZW1lbnROb2RlQW5kVG9rZW5zIiwiZnJvbU5vZGVBbmRUb2tlbnMiLCJjaGlsZE5vZGVzIiwiZ2V0Q2hpbGROb2RlcyIsImxhc3RDaGlsZE5vZGUiLCJwYXRoVGVybWluYWxOb2RlIiwicGF0aFRlcm1pbmFsTm9kZUNvbnRlbnQiLCJnZXRDb250ZW50IiwiZnJvbVJ1bGVOYW1lQ2hpbGROb2Rlc0FuZE9wYWNpdHkiLCJydWxlTmFtZSIsIm9wYWNpdHkiLCJNYXJrZG93bk5vZGUiXSwicmFuZ2VNYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsiLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFTcUJBOzs7eUJBUFU7K0RBRU47K0VBQ1k7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFckMsSUFBTSxBQUFFQyxPQUFTQyx5QkFBYyxDQUF2QkQ7QUFFTyxJQUFBLEFBQU1ELDJDQUFELEFBQUw7Y0FBTUE7K0JBQUFBO2FBQUFBO2dDQUFBQTs7O2tCQUFBQTs7WUFDbkJHLEtBQUFBO21CQUFBQSxTQUFBQSx5QkFBeUJDLE9BQU87Z0JBQzlCLElBQUlELDJCQUEyQjtnQkFFL0Isd0JBQTRCQyxRQUFwQkMsVUFBQUEsMENBQVc7Z0JBRW5CLElBQUlBLGFBQWEsTUFBTTtvQkFDckIsSUFBTUMsV0FBVyxJQUFJLENBQUNBLFFBQVEsQ0FBQ0Y7b0JBRS9CQyxTQUFTQyxVQUFVRjtvQkFFbkIsNEJBQ2tDQSxRQUQxQkcsY0FBQUEsa0RBQWUsd0RBQ1dILFFBQTFCSSxnQkFBQUEsc0RBQWlCO29CQUV6QixJQUFJRCxpQkFBaUIsTUFBTTt3QkFDekIsT0FBT0gsUUFBUUcsWUFBWTt3QkFDM0IsT0FBT0gsUUFBUUksY0FBYzt3QkFDN0IsT0FBT0osUUFBUUssaUJBQWlCO3dCQUVoQyxJQUFNQyxPQUFPSCxjQUNQSSxTQUFTSCxnQkFBaUIsR0FBRzt3QkFFbkNMLDJCQUEyQlMsaUNBQXdCLENBQUNDLGlCQUFpQixDQUFDSCxNQUFNQztvQkFDOUU7Z0JBQ0Y7Z0JBRUEsT0FBT1I7WUFDVDs7O1lBRUFHLEtBQUFBO21CQUFBQSxTQUFBQSxTQUFTRixPQUFPO2dCQUNkLElBQU1VLGFBQWEsSUFBSSxDQUFDQyxhQUFhLElBQy9CQyxnQkFBZ0JmLEtBQUthLGFBQ3JCRyxtQkFBb0JELGVBQ3BCRSwwQkFBMEJELGlCQUFpQkUsVUFBVSxJQUNyRGIsV0FBV1kseUJBQXlCLEdBQUc7Z0JBRTdDLE9BQU9aO1lBQ1Q7Ozs7WUFFT2MsS0FBQUE7bUJBQVAsU0FBT0EsaUNBQWlDQyxRQUFRLEVBQUVQLFVBQVUsRUFBRVEsT0FBTztnQkFBSSxPQUFPQyxpQkFBWSxDQUFDSCxnQ0FBZ0MsQ0F2QzFHcEIsNEJBdUN1SXFCLFVBQVVQLFlBQVlRO1lBQVU7OztXQXZDdkt0QjtFQUFtQ3VCLGlCQUFZIn0=