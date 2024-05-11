"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return EmbedMarkdownNode;
    }
});
var _necessary = require("necessary");
var _markdown = /*#__PURE__*/ _interop_require_default(require("../../node/markdown"));
var _replacementNodeAndTokens = /*#__PURE__*/ _interop_require_default(require("../../replacementNodeAndTokens"));
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
var fourth = _necessary.arrayUtilities.fourth;
var EmbedMarkdownNode = /*#__PURE__*/ function(MarkdownNode) {
    _inherits(EmbedMarkdownNode, MarkdownNode);
    var _super = _create_super(EmbedMarkdownNode);
    function EmbedMarkdownNode() {
        _class_call_check(this, EmbedMarkdownNode);
        return _super.apply(this, arguments);
    }
    _create_class(EmbedMarkdownNode, [
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
                var childNodes = this.getChildNodes(), fourthChildNode = fourth(childNodes), pathTerminalNode = fourthChildNode, pathTerminalNodeContent = pathTerminalNode.getContent(), filePath = pathTerminalNodeContent; ///
                return filePath;
            }
        }
    ], [
        {
            key: "fromRuleNameChildNodesAndOpacity",
            value: function fromRuleNameChildNodesAndOpacity(ruleName, childNodes, opacity) {
                return _markdown.default.fromRuleNameChildNodesAndOpacity(EmbedMarkdownNode, ruleName, childNodes, opacity);
            }
        }
    ]);
    return EmbedMarkdownNode;
}(_markdown.default);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ub2RlL21hcmtkb3duL2VtYmVlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBhcnJheVV0aWxpdGllcyB9IGZyb20gXCJuZWNlc3NhcnlcIjtcblxuaW1wb3J0IE1hcmtkb3duTm9kZSBmcm9tIFwiLi4vLi4vbm9kZS9tYXJrZG93blwiO1xuaW1wb3J0IFJlcGxhY2VtZW50Tm9kZUFuZFRva2VucyBmcm9tIFwiLi4vLi4vcmVwbGFjZW1lbnROb2RlQW5kVG9rZW5zXCI7XG5cbmNvbnN0IHsgZm91cnRoIH0gPSBhcnJheVV0aWxpdGllcztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRW1iZWRNYXJrZG93bk5vZGUgZXh0ZW5kcyBNYXJrZG93bk5vZGUge1xuICByZXBsYWNlbWVudE5vZGVBbmRUb2tlbnMoY29udGV4dCkge1xuICAgIGxldCByZXBsYWNlbWVudE5vZGVBbmRUb2tlbnMgPSBudWxsO1xuXG4gICAgY29uc3QgeyBpbXBvcnRlciA9IG51bGwgfSA9IGNvbnRleHQ7XG5cbiAgICBpZiAoaW1wb3J0ZXIgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IGZpbGVQYXRoID0gdGhpcy5maWxlUGF0aChjb250ZXh0KTtcblxuICAgICAgaW1wb3J0ZXIoZmlsZVBhdGgsIGNvbnRleHQpO1xuXG4gICAgICBjb25zdCB7IGltcG9ydGVkTm9kZSA9IG51bGwsXG4gICAgICAgICAgICAgIGltcG9ydGVkVG9rZW5zID0gbnVsbCB9ID0gY29udGV4dDtcblxuICAgICAgaWYgKGltcG9ydGVkTm9kZSAhPT0gbnVsbCkge1xuICAgICAgICBkZWxldGUgY29udGV4dC5pbXBvcnRlZE5vZGU7XG4gICAgICAgIGRlbGV0ZSBjb250ZXh0LmltcG9ydGVkVG9rZW5zO1xuICAgICAgICBkZWxldGUgY29udGV4dC5pbXBvcnRlZENsYXNzTmFtZTtcblxuICAgICAgICBjb25zdCBub2RlID0gaW1wb3J0ZWROb2RlLCAgLy8vXG4gICAgICAgICAgICAgIHRva2VucyA9IGltcG9ydGVkVG9rZW5zOyAgLy8vXG5cbiAgICAgICAgcmVwbGFjZW1lbnROb2RlQW5kVG9rZW5zID0gUmVwbGFjZW1lbnROb2RlQW5kVG9rZW5zLmZyb21Ob2RlQW5kVG9rZW5zKG5vZGUsIHRva2Vucyk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHJlcGxhY2VtZW50Tm9kZUFuZFRva2VucztcbiAgfVxuXG4gIGZpbGVQYXRoKGNvbnRleHQpIHtcbiAgICBjb25zdCBjaGlsZE5vZGVzID0gdGhpcy5nZXRDaGlsZE5vZGVzKCksXG4gICAgICAgICAgZm91cnRoQ2hpbGROb2RlID0gZm91cnRoKGNoaWxkTm9kZXMpLFxuICAgICAgICAgIHBhdGhUZXJtaW5hbE5vZGUgID0gZm91cnRoQ2hpbGROb2RlLCAvLy9cbiAgICAgICAgICBwYXRoVGVybWluYWxOb2RlQ29udGVudCA9IHBhdGhUZXJtaW5hbE5vZGUuZ2V0Q29udGVudCgpLFxuICAgICAgICAgIGZpbGVQYXRoID0gcGF0aFRlcm1pbmFsTm9kZUNvbnRlbnQ7IC8vL1xuXG4gICAgcmV0dXJuIGZpbGVQYXRoO1xuICB9XG5cbiAgc3RhdGljIGZyb21SdWxlTmFtZUNoaWxkTm9kZXNBbmRPcGFjaXR5KHJ1bGVOYW1lLCBjaGlsZE5vZGVzLCBvcGFjaXR5KSB7IHJldHVybiBNYXJrZG93bk5vZGUuZnJvbVJ1bGVOYW1lQ2hpbGROb2Rlc0FuZE9wYWNpdHkoRW1iZWRNYXJrZG93bk5vZGUsIHJ1bGVOYW1lLCBjaGlsZE5vZGVzLCBvcGFjaXR5KTsgfVxufVxuIl0sIm5hbWVzIjpbIkVtYmVkTWFya2Rvd25Ob2RlIiwiZm91cnRoIiwiYXJyYXlVdGlsaXRpZXMiLCJyZXBsYWNlbWVudE5vZGVBbmRUb2tlbnMiLCJjb250ZXh0IiwiaW1wb3J0ZXIiLCJmaWxlUGF0aCIsImltcG9ydGVkTm9kZSIsImltcG9ydGVkVG9rZW5zIiwiaW1wb3J0ZWRDbGFzc05hbWUiLCJub2RlIiwidG9rZW5zIiwiUmVwbGFjZW1lbnROb2RlQW5kVG9rZW5zIiwiZnJvbU5vZGVBbmRUb2tlbnMiLCJjaGlsZE5vZGVzIiwiZ2V0Q2hpbGROb2RlcyIsImZvdXJ0aENoaWxkTm9kZSIsInBhdGhUZXJtaW5hbE5vZGUiLCJwYXRoVGVybWluYWxOb2RlQ29udGVudCIsImdldENvbnRlbnQiLCJmcm9tUnVsZU5hbWVDaGlsZE5vZGVzQW5kT3BhY2l0eSIsInJ1bGVOYW1lIiwib3BhY2l0eSIsIk1hcmtkb3duTm9kZSJdLCJyYW5nZU1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OyIsIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQVNxQkE7Ozt5QkFQVTsrREFFTjsrRUFDWTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVyQyxJQUFNLEFBQUVDLFNBQVdDLHlCQUFjLENBQXpCRDtBQUVPLElBQUEsQUFBTUQsa0NBQUQsQUFBTDtjQUFNQTsrQkFBQUE7YUFBQUE7Z0NBQUFBOzs7a0JBQUFBOztZQUNuQkcsS0FBQUE7bUJBQUFBLFNBQUFBLHlCQUF5QkMsT0FBTztnQkFDOUIsSUFBSUQsMkJBQTJCO2dCQUUvQix3QkFBNEJDLFFBQXBCQyxVQUFBQSwwQ0FBVztnQkFFbkIsSUFBSUEsYUFBYSxNQUFNO29CQUNyQixJQUFNQyxXQUFXLElBQUksQ0FBQ0EsUUFBUSxDQUFDRjtvQkFFL0JDLFNBQVNDLFVBQVVGO29CQUVuQiw0QkFDa0NBLFFBRDFCRyxjQUFBQSxrREFBZSx3REFDV0gsUUFBMUJJLGdCQUFBQSxzREFBaUI7b0JBRXpCLElBQUlELGlCQUFpQixNQUFNO3dCQUN6QixPQUFPSCxRQUFRRyxZQUFZO3dCQUMzQixPQUFPSCxRQUFRSSxjQUFjO3dCQUM3QixPQUFPSixRQUFRSyxpQkFBaUI7d0JBRWhDLElBQU1DLE9BQU9ILGNBQ1BJLFNBQVNILGdCQUFpQixHQUFHO3dCQUVuQ0wsMkJBQTJCUyxpQ0FBd0IsQ0FBQ0MsaUJBQWlCLENBQUNILE1BQU1DO29CQUM5RTtnQkFDRjtnQkFFQSxPQUFPUjtZQUNUOzs7WUFFQUcsS0FBQUE7bUJBQUFBLFNBQUFBLFNBQVNGLE9BQU87Z0JBQ2QsSUFBTVUsYUFBYSxJQUFJLENBQUNDLGFBQWEsSUFDL0JDLGtCQUFrQmYsT0FBT2EsYUFDekJHLG1CQUFvQkQsaUJBQ3BCRSwwQkFBMEJELGlCQUFpQkUsVUFBVSxJQUNyRGIsV0FBV1kseUJBQXlCLEdBQUc7Z0JBRTdDLE9BQU9aO1lBQ1Q7Ozs7WUFFT2MsS0FBQUE7bUJBQVAsU0FBT0EsaUNBQWlDQyxRQUFRLEVBQUVQLFVBQVUsRUFBRVEsT0FBTztnQkFBSSxPQUFPQyxpQkFBWSxDQUFDSCxnQ0FBZ0MsQ0F2QzFHcEIsbUJBdUM4SHFCLFVBQVVQLFlBQVlRO1lBQVU7OztXQXZDOUp0QjtFQUEwQnVCLGlCQUFZIn0=