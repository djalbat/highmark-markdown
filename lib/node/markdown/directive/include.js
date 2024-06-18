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
var _directive = /*#__PURE__*/ _interop_require_default(require("../../../node/markdown/directive"));
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
var push = _necessary.arrayUtilities.push, last = _necessary.arrayUtilities.last;
var IncludeDirectiveMarkdownNode = /*#__PURE__*/ function(DirectiveMarkdownNode) {
    _inherits(IncludeDirectiveMarkdownNode, DirectiveMarkdownNode);
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
                return html;
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
                return _directive.default.fromRuleNameChildNodesAndOpacity(IncludeDirectiveMarkdownNode, ruleName, childNodes, opacity);
            }
        }
    ]);
    return IncludeDirectiveMarkdownNode;
}(_directive.default);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9ub2RlL21hcmtkb3duL2RpcmVjdGl2ZS9pbmNsdWRlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBhcnJheVV0aWxpdGllcyB9IGZyb20gXCJuZWNlc3NhcnlcIjtcblxuaW1wb3J0IERpcmVjdGl2ZU1hcmtkb3duTm9kZSBmcm9tIFwiLi4vLi4vLi4vbm9kZS9tYXJrZG93bi9kaXJlY3RpdmVcIjtcblxuY29uc3QgeyBwdXNoLCBsYXN0IH0gPSBhcnJheVV0aWxpdGllcztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW5jbHVkZURpcmVjdGl2ZU1hcmtkb3duTm9kZSBleHRlbmRzIERpcmVjdGl2ZU1hcmtkb3duTm9kZSB7XG4gIHJlc29sdmVJbmNsdWRlcyhjb250ZXh0KSB7XG4gICAgbGV0IGh0bWwgPSBudWxsO1xuXG4gICAgY29uc3QgeyBpbXBvcnRlciA9IG51bGwgfSA9IGNvbnRleHQ7XG5cbiAgICBjb25zdCBmaWxlUGF0aCA9IHRoaXMuZmlsZVBhdGgoY29udGV4dCk7XG5cbiAgICBpbXBvcnRlcihmaWxlUGF0aCwgY29udGV4dCk7XG5cbiAgICBjb25zdCB7IGltcG9ydGVkTm9kZSA9IG51bGwsXG4gICAgICAgICAgICBpbXBvcnRlZFRva2VucyA9IG51bGwsXG4gICAgICAgICAgICBpbXBvcnRlZENsYXNzTmFtZSA9IG51bGwgfSA9IGNvbnRleHQ7XG5cbiAgICBpZiAoaW1wb3J0ZWROb2RlICE9PSBudWxsKSB7XG4gICAgICBkZWxldGUgY29udGV4dC5pbXBvcnRlZE5vZGU7XG4gICAgICBkZWxldGUgY29udGV4dC5pbXBvcnRlZFRva2VucztcbiAgICAgIGRlbGV0ZSBjb250ZXh0LmltcG9ydGVkQ2xhc3NOYW1lO1xuXG4gICAgICBjb25zdCB7IHRva2VucywgZGl2aXNpb25NYXJrZG93bk5vZGVzIH0gPSBjb250ZXh0LFxuICAgICAgICAgICAgZGl2aXNpb25NYXJrZG93bk5vZGUgPSBpbXBvcnRlZE5vZGUsICAvLy9cbiAgICAgICAgICAgIGRpdmlzaW9uQ2xhc3NOYW1lID0gaW1wb3J0ZWRDbGFzc05hbWUsICAvLy9cbiAgICAgICAgICAgIGlnbm9yZWQgPSBkaXZpc2lvbk1hcmtkb3duTm9kZS5pc0lnbm9yZWQoKTtcblxuICAgICAgZGl2aXNpb25NYXJrZG93bk5vZGUuc2V0RGl2aXNpb25DbGFzc05hbWUoZGl2aXNpb25DbGFzc05hbWUpO1xuXG4gICAgICBpZiAoIWlnbm9yZWQpIHtcbiAgICAgICAgcHVzaCh0b2tlbnMsIGltcG9ydGVkVG9rZW5zKTtcblxuICAgICAgICBkaXZpc2lvbk1hcmtkb3duTm9kZXMucHVzaChkaXZpc2lvbk1hcmtkb3duTm9kZSk7XG4gICAgICB9XG5cbiAgICAgIGRpdmlzaW9uTWFya2Rvd25Ob2RlLnJlc29sdmVJbmNsdWRlcyhjb250ZXh0KTtcbiAgICB9XG5cbiAgICByZXR1cm4gaHRtbDtcbiAgfVxuXG4gIGZpbGVQYXRoKGNvbnRleHQpIHtcbiAgICBjb25zdCBjaGlsZE5vZGVzID0gdGhpcy5nZXRDaGlsZE5vZGVzKCksXG4gICAgICAgICAgbGFzdENoaWxkTm9kZSA9IGxhc3QoY2hpbGROb2RlcyksXG4gICAgICAgICAgcGF0aFRlcm1pbmFsTm9kZSAgPSBsYXN0Q2hpbGROb2RlLCAvLy9cbiAgICAgICAgICBwYXRoVGVybWluYWxOb2RlQ29udGVudCA9IHBhdGhUZXJtaW5hbE5vZGUuZ2V0Q29udGVudCgpLFxuICAgICAgICAgIGZpbGVQYXRoID0gcGF0aFRlcm1pbmFsTm9kZUNvbnRlbnQ7IC8vL1xuXG4gICAgcmV0dXJuIGZpbGVQYXRoO1xuICB9XG5cbiAgc3RhdGljIGZyb21SdWxlTmFtZUNoaWxkTm9kZXNBbmRPcGFjaXR5KHJ1bGVOYW1lLCBjaGlsZE5vZGVzLCBvcGFjaXR5KSB7IHJldHVybiBEaXJlY3RpdmVNYXJrZG93bk5vZGUuZnJvbVJ1bGVOYW1lQ2hpbGROb2Rlc0FuZE9wYWNpdHkoSW5jbHVkZURpcmVjdGl2ZU1hcmtkb3duTm9kZSwgcnVsZU5hbWUsIGNoaWxkTm9kZXMsIG9wYWNpdHkpOyB9XG59XG4iXSwibmFtZXMiOlsiSW5jbHVkZURpcmVjdGl2ZU1hcmtkb3duTm9kZSIsInB1c2giLCJhcnJheVV0aWxpdGllcyIsImxhc3QiLCJyZXNvbHZlSW5jbHVkZXMiLCJjb250ZXh0IiwiaHRtbCIsImltcG9ydGVyIiwiZmlsZVBhdGgiLCJpbXBvcnRlZE5vZGUiLCJpbXBvcnRlZFRva2VucyIsImltcG9ydGVkQ2xhc3NOYW1lIiwidG9rZW5zIiwiZGl2aXNpb25NYXJrZG93bk5vZGVzIiwiZGl2aXNpb25NYXJrZG93bk5vZGUiLCJkaXZpc2lvbkNsYXNzTmFtZSIsImlnbm9yZWQiLCJpc0lnbm9yZWQiLCJzZXREaXZpc2lvbkNsYXNzTmFtZSIsImNoaWxkTm9kZXMiLCJnZXRDaGlsZE5vZGVzIiwibGFzdENoaWxkTm9kZSIsInBhdGhUZXJtaW5hbE5vZGUiLCJwYXRoVGVybWluYWxOb2RlQ29udGVudCIsImdldENvbnRlbnQiLCJmcm9tUnVsZU5hbWVDaGlsZE5vZGVzQW5kT3BhY2l0eSIsInJ1bGVOYW1lIiwib3BhY2l0eSIsIkRpcmVjdGl2ZU1hcmtkb3duTm9kZSJdLCJyYW5nZU1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7IiwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBUXFCQTs7O3lCQU5VO2dFQUVHOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRWxDLElBQVFDLE9BQWVDLHlCQUFjLENBQTdCRCxNQUFNRSxPQUFTRCx5QkFBYyxDQUF2QkM7QUFFQyxJQUFBLEFBQU1ILDZDQUFELEFBQUw7Y0FBTUE7K0JBQUFBO2FBQUFBO2dDQUFBQTs7O2tCQUFBQTs7WUFDbkJJLEtBQUFBO21CQUFBQSxTQUFBQSxnQkFBZ0JDLE9BQU87Z0JBQ3JCLElBQUlDLE9BQU87Z0JBRVgsd0JBQTRCRCxRQUFwQkUsVUFBQUEsMENBQVc7Z0JBRW5CLElBQU1DLFdBQVcsSUFBSSxDQUFDQSxRQUFRLENBQUNIO2dCQUUvQkUsU0FBU0MsVUFBVUg7Z0JBRW5CLDRCQUVxQ0EsUUFGN0JJLGNBQUFBLGtEQUFlLHdEQUVjSixRQUQ3QkssZ0JBQUFBLHNEQUFpQiw2REFDWUwsUUFBN0JNLG1CQUFBQSw0REFBb0I7Z0JBRTVCLElBQUlGLGlCQUFpQixNQUFNO29CQUN6QixPQUFPSixRQUFRSSxZQUFZO29CQUMzQixPQUFPSixRQUFRSyxjQUFjO29CQUM3QixPQUFPTCxRQUFRTSxpQkFBaUI7b0JBRWhDLElBQVFDLFNBQWtDUCxRQUFsQ08sUUFBUUMsd0JBQTBCUixRQUExQlEsdUJBQ1ZDLHVCQUF1QkwsY0FDdkJNLG9CQUFvQkosbUJBQ3BCSyxVQUFVRixxQkFBcUJHLFNBQVM7b0JBRTlDSCxxQkFBcUJJLG9CQUFvQixDQUFDSDtvQkFFMUMsSUFBSSxDQUFDQyxTQUFTO3dCQUNaZixLQUFLVyxRQUFRRjt3QkFFYkcsc0JBQXNCWixJQUFJLENBQUNhO29CQUM3QjtvQkFFQUEscUJBQXFCVixlQUFlLENBQUNDO2dCQUN2QztnQkFFQSxPQUFPQztZQUNUOzs7WUFFQUUsS0FBQUE7bUJBQUFBLFNBQUFBLFNBQVNILE9BQU87Z0JBQ2QsSUFBTWMsYUFBYSxJQUFJLENBQUNDLGFBQWEsSUFDL0JDLGdCQUFnQmxCLEtBQUtnQixhQUNyQkcsbUJBQW9CRCxlQUNwQkUsMEJBQTBCRCxpQkFBaUJFLFVBQVUsSUFDckRoQixXQUFXZSx5QkFBeUIsR0FBRztnQkFFN0MsT0FBT2Y7WUFDVDs7OztZQUVPaUIsS0FBQUE7bUJBQVAsU0FBT0EsaUNBQWlDQyxRQUFRLEVBQUVQLFVBQVUsRUFBRVEsT0FBTztnQkFBSSxPQUFPQyxrQkFBcUIsQ0FBQ0gsZ0NBQWdDLENBaERuSHpCLDhCQWdEa0owQixVQUFVUCxZQUFZUTtZQUFVOzs7V0FoRGxMM0I7RUFBcUM0QixrQkFBcUIifQ==