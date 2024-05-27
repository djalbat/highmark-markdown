"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return IncludeDirectiveMarkdownNode;
    }
});
var _necessary = require("necessary");
var _markdown = /*#__PURE__*/ _interop_require_default(require("../../../node/markdown"));
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
var push = _necessary.arrayUtilities.push, fourth = _necessary.arrayUtilities.fourth;
var IncludeDirectiveMarkdownNode = /*#__PURE__*/ function(MarkdownNode) {
    _inherits(IncludeDirectiveMarkdownNode, MarkdownNode);
    var _super = _create_super(IncludeDirectiveMarkdownNode);
    function IncludeDirectiveMarkdownNode() {
        _class_call_check(this, IncludeDirectiveMarkdownNode);
        return _super.apply(this, arguments);
    }
    _create_class(IncludeDirectiveMarkdownNode, [
        {
            key: "resolveIncludes",
            value: function resolveIncludes(context) {
                var html = null;
                var _context_importer = context.importer, importer = _context_importer === void 0 ? null : _context_importer;
                if (importer !== null) {
                    var filePath = this.filePath(context);
                    importer(filePath, context);
                    var _context_importedNode = context.importedNode, importedNode = _context_importedNode === void 0 ? null : _context_importedNode, _context_importedTokens = context.importedTokens, importedTokens = _context_importedTokens === void 0 ? null : _context_importedTokens, _context_importedClassName = context.importedClassName, importedClassName = _context_importedClassName === void 0 ? null : _context_importedClassName;
                    if (importedNode !== null) {
                        delete context.importedNode;
                        delete context.importedTokens;
                        delete context.importedClassName;
                        var tokens = context.tokens, divisionMarkdownNodes = context.divisionMarkdownNodes, divisionMarkdownNode = importedNode, divisionClassName = importedClassName, ignored = divisionMarkdownNode.isIgnored();
                        divisionMarkdownNode.setDivisionClassName(divisionClassName);
                        if (!ignored) {
                            push(tokens, importedTokens);
                            divisionMarkdownNodes.push(divisionMarkdownNode);
                        }
                        divisionMarkdownNode.resolveIncludes(context);
                    }
                }
                return html;
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
                return _markdown.default.fromRuleNameChildNodesAndOpacity(IncludeDirectiveMarkdownNode, ruleName, childNodes, opacity);
            }
        }
    ]);
    return IncludeDirectiveMarkdownNode;
}(_markdown.default);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9ub2RlL21hcmtkb3duL2RpcmVjdGl2ZS9pbmNsdWRlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBhcnJheVV0aWxpdGllcyB9IGZyb20gXCJuZWNlc3NhcnlcIjtcblxuaW1wb3J0IE1hcmtkb3duTm9kZSBmcm9tIFwiLi4vLi4vLi4vbm9kZS9tYXJrZG93blwiO1xuXG5jb25zdCB7IHB1c2gsIGZvdXJ0aCB9ID0gYXJyYXlVdGlsaXRpZXM7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEluY2x1ZGVEaXJlY3RpdmVNYXJrZG93bk5vZGUgZXh0ZW5kcyBNYXJrZG93bk5vZGUge1xuICByZXNvbHZlSW5jbHVkZXMoY29udGV4dCkge1xuICAgIGxldCBodG1sID0gbnVsbDtcblxuICAgIGNvbnN0IHsgaW1wb3J0ZXIgPSBudWxsIH0gPSBjb250ZXh0O1xuXG4gICAgaWYgKGltcG9ydGVyICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBmaWxlUGF0aCA9IHRoaXMuZmlsZVBhdGgoY29udGV4dCk7XG5cbiAgICAgIGltcG9ydGVyKGZpbGVQYXRoLCBjb250ZXh0KTtcblxuICAgICAgY29uc3QgeyBpbXBvcnRlZE5vZGUgPSBudWxsLFxuICAgICAgICAgICAgICBpbXBvcnRlZFRva2VucyA9IG51bGwsXG4gICAgICAgICAgICAgIGltcG9ydGVkQ2xhc3NOYW1lID0gbnVsbCB9ID0gY29udGV4dDtcblxuICAgICAgaWYgKGltcG9ydGVkTm9kZSAhPT0gbnVsbCkge1xuICAgICAgICBkZWxldGUgY29udGV4dC5pbXBvcnRlZE5vZGU7XG4gICAgICAgIGRlbGV0ZSBjb250ZXh0LmltcG9ydGVkVG9rZW5zO1xuICAgICAgICBkZWxldGUgY29udGV4dC5pbXBvcnRlZENsYXNzTmFtZTtcblxuICAgICAgICBjb25zdCB7IHRva2VucywgZGl2aXNpb25NYXJrZG93bk5vZGVzIH0gPSBjb250ZXh0LFxuICAgICAgICAgICAgICBkaXZpc2lvbk1hcmtkb3duTm9kZSA9IGltcG9ydGVkTm9kZSwgIC8vL1xuICAgICAgICAgICAgICBkaXZpc2lvbkNsYXNzTmFtZSA9IGltcG9ydGVkQ2xhc3NOYW1lLCAgLy8vXG4gICAgICAgICAgICAgIGlnbm9yZWQgPSBkaXZpc2lvbk1hcmtkb3duTm9kZS5pc0lnbm9yZWQoKTtcblxuICAgICAgICBkaXZpc2lvbk1hcmtkb3duTm9kZS5zZXREaXZpc2lvbkNsYXNzTmFtZShkaXZpc2lvbkNsYXNzTmFtZSk7XG5cbiAgICAgICAgaWYgKCFpZ25vcmVkKSB7XG4gICAgICAgICAgcHVzaCh0b2tlbnMsIGltcG9ydGVkVG9rZW5zKTtcblxuICAgICAgICAgIGRpdmlzaW9uTWFya2Rvd25Ob2Rlcy5wdXNoKGRpdmlzaW9uTWFya2Rvd25Ob2RlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGRpdmlzaW9uTWFya2Rvd25Ob2RlLnJlc29sdmVJbmNsdWRlcyhjb250ZXh0KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gaHRtbDtcbiAgfVxuXG4gIGZpbGVQYXRoKGNvbnRleHQpIHtcbiAgICBjb25zdCBjaGlsZE5vZGVzID0gdGhpcy5nZXRDaGlsZE5vZGVzKCksXG4gICAgICAgICAgZm91cnRoQ2hpbGROb2RlID0gZm91cnRoKGNoaWxkTm9kZXMpLFxuICAgICAgICAgIHBhdGhUZXJtaW5hbE5vZGUgID0gZm91cnRoQ2hpbGROb2RlLCAvLy9cbiAgICAgICAgICBwYXRoVGVybWluYWxOb2RlQ29udGVudCA9IHBhdGhUZXJtaW5hbE5vZGUuZ2V0Q29udGVudCgpLFxuICAgICAgICAgIGZpbGVQYXRoID0gcGF0aFRlcm1pbmFsTm9kZUNvbnRlbnQ7IC8vL1xuXG4gICAgcmV0dXJuIGZpbGVQYXRoO1xuICB9XG5cbiAgc3RhdGljIGZyb21SdWxlTmFtZUNoaWxkTm9kZXNBbmRPcGFjaXR5KHJ1bGVOYW1lLCBjaGlsZE5vZGVzLCBvcGFjaXR5KSB7IHJldHVybiBNYXJrZG93bk5vZGUuZnJvbVJ1bGVOYW1lQ2hpbGROb2Rlc0FuZE9wYWNpdHkoSW5jbHVkZURpcmVjdGl2ZU1hcmtkb3duTm9kZSwgcnVsZU5hbWUsIGNoaWxkTm9kZXMsIG9wYWNpdHkpOyB9XG59XG4iXSwibmFtZXMiOlsiSW5jbHVkZURpcmVjdGl2ZU1hcmtkb3duTm9kZSIsInB1c2giLCJhcnJheVV0aWxpdGllcyIsImZvdXJ0aCIsInJlc29sdmVJbmNsdWRlcyIsImNvbnRleHQiLCJodG1sIiwiaW1wb3J0ZXIiLCJmaWxlUGF0aCIsImltcG9ydGVkTm9kZSIsImltcG9ydGVkVG9rZW5zIiwiaW1wb3J0ZWRDbGFzc05hbWUiLCJ0b2tlbnMiLCJkaXZpc2lvbk1hcmtkb3duTm9kZXMiLCJkaXZpc2lvbk1hcmtkb3duTm9kZSIsImRpdmlzaW9uQ2xhc3NOYW1lIiwiaWdub3JlZCIsImlzSWdub3JlZCIsInNldERpdmlzaW9uQ2xhc3NOYW1lIiwiY2hpbGROb2RlcyIsImdldENoaWxkTm9kZXMiLCJmb3VydGhDaGlsZE5vZGUiLCJwYXRoVGVybWluYWxOb2RlIiwicGF0aFRlcm1pbmFsTm9kZUNvbnRlbnQiLCJnZXRDb250ZW50IiwiZnJvbVJ1bGVOYW1lQ2hpbGROb2Rlc0FuZE9wYWNpdHkiLCJydWxlTmFtZSIsIm9wYWNpdHkiLCJNYXJrZG93bk5vZGUiXSwicmFuZ2VNYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7IiwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBUXFCQTs7O3lCQU5VOytEQUVOOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRXpCLElBQVFDLE9BQWlCQyx5QkFBYyxDQUEvQkQsTUFBTUUsU0FBV0QseUJBQWMsQ0FBekJDO0FBRUMsSUFBQSxBQUFNSCw2Q0FBRCxBQUFMO2NBQU1BOytCQUFBQTthQUFBQTtnQ0FBQUE7OztrQkFBQUE7O1lBQ25CSSxLQUFBQTttQkFBQUEsU0FBQUEsZ0JBQWdCQyxPQUFPO2dCQUNyQixJQUFJQyxPQUFPO2dCQUVYLHdCQUE0QkQsUUFBcEJFLFVBQUFBLDBDQUFXO2dCQUVuQixJQUFJQSxhQUFhLE1BQU07b0JBQ3JCLElBQU1DLFdBQVcsSUFBSSxDQUFDQSxRQUFRLENBQUNIO29CQUUvQkUsU0FBU0MsVUFBVUg7b0JBRW5CLDRCQUVxQ0EsUUFGN0JJLGNBQUFBLGtEQUFlLHdEQUVjSixRQUQ3QkssZ0JBQUFBLHNEQUFpQiw2REFDWUwsUUFBN0JNLG1CQUFBQSw0REFBb0I7b0JBRTVCLElBQUlGLGlCQUFpQixNQUFNO3dCQUN6QixPQUFPSixRQUFRSSxZQUFZO3dCQUMzQixPQUFPSixRQUFRSyxjQUFjO3dCQUM3QixPQUFPTCxRQUFRTSxpQkFBaUI7d0JBRWhDLElBQVFDLFNBQWtDUCxRQUFsQ08sUUFBUUMsd0JBQTBCUixRQUExQlEsdUJBQ1ZDLHVCQUF1QkwsY0FDdkJNLG9CQUFvQkosbUJBQ3BCSyxVQUFVRixxQkFBcUJHLFNBQVM7d0JBRTlDSCxxQkFBcUJJLG9CQUFvQixDQUFDSDt3QkFFMUMsSUFBSSxDQUFDQyxTQUFTOzRCQUNaZixLQUFLVyxRQUFRRjs0QkFFYkcsc0JBQXNCWixJQUFJLENBQUNhO3dCQUM3Qjt3QkFFQUEscUJBQXFCVixlQUFlLENBQUNDO29CQUN2QztnQkFDRjtnQkFFQSxPQUFPQztZQUNUOzs7WUFFQUUsS0FBQUE7bUJBQUFBLFNBQUFBLFNBQVNILE9BQU87Z0JBQ2QsSUFBTWMsYUFBYSxJQUFJLENBQUNDLGFBQWEsSUFDL0JDLGtCQUFrQmxCLE9BQU9nQixhQUN6QkcsbUJBQW9CRCxpQkFDcEJFLDBCQUEwQkQsaUJBQWlCRSxVQUFVLElBQ3JEaEIsV0FBV2UseUJBQXlCLEdBQUc7Z0JBRTdDLE9BQU9mO1lBQ1Q7Ozs7WUFFT2lCLEtBQUFBO21CQUFQLFNBQU9BLGlDQUFpQ0MsUUFBUSxFQUFFUCxVQUFVLEVBQUVRLE9BQU87Z0JBQUksT0FBT0MsaUJBQVksQ0FBQ0gsZ0NBQWdDLENBbEQxR3pCLDhCQWtEeUkwQixVQUFVUCxZQUFZUTtZQUFVOzs7V0FsRHpLM0I7RUFBcUM0QixpQkFBWSJ9