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
var _includeDirective = /*#__PURE__*/ _interop_require_default(require("../../../replacement/includeDirective"));
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
var IncludeDirectiveMarkdownNode = /*#__PURE__*/ function(DirectiveMarkdownNode) {
    _inherits(IncludeDirectiveMarkdownNode, DirectiveMarkdownNode);
    var _super = _create_super(IncludeDirectiveMarkdownNode);
    function IncludeDirectiveMarkdownNode() {
        _class_call_check(this, IncludeDirectiveMarkdownNode);
        return _super.apply(this, arguments);
    }
    _create_class(IncludeDirectiveMarkdownNode, [
        {
            key: "resolve",
            value: function resolve(context) {
                var includeDirectiveReplacement = null;
                var importer = context.importer;
                var filePath = this.filePath(context);
                importer(filePath, context);
                var _context_importedNode = context.importedNode, importedNode = _context_importedNode === void 0 ? null : _context_importedNode, _context_importedTokens = context.importedTokens, importedTokens = _context_importedTokens === void 0 ? null : _context_importedTokens, _context_importedClassName = context.importedClassName, importedClassName = _context_importedClassName === void 0 ? null : _context_importedClassName;
                if (importedNode !== null) {
                    delete context.importedNode;
                    delete context.importedTokens;
                    delete context.importedClassName;
                    var divisionMarkdownNode = importedNode, divisionClassName = importedClassName, tokens = importedTokens; ///
                    divisionMarkdownNode.setDivisionClassName(divisionClassName);
                    includeDirectiveReplacement = _includeDirective.default.fromDivisionMarkdownNodeAndTokens(divisionMarkdownNode, tokens);
                }
                return includeDirectiveReplacement;
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9ub2RlL21hcmtkb3duL2RpcmVjdGl2ZS9pbmNsdWRlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBhcnJheVV0aWxpdGllcyB9IGZyb20gXCJuZWNlc3NhcnlcIjtcblxuaW1wb3J0IERpcmVjdGl2ZU1hcmtkb3duTm9kZSBmcm9tIFwiLi4vLi4vLi4vbm9kZS9tYXJrZG93bi9kaXJlY3RpdmVcIjtcbmltcG9ydCBJbmNsdWRlRGlyZWN0aXZlUmVwbGFjZW1lbnQgZnJvbSBcIi4uLy4uLy4uL3JlcGxhY2VtZW50L2luY2x1ZGVEaXJlY3RpdmVcIjtcblxuY29uc3QgeyBsYXN0IH0gPSBhcnJheVV0aWxpdGllcztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW5jbHVkZURpcmVjdGl2ZU1hcmtkb3duTm9kZSBleHRlbmRzIERpcmVjdGl2ZU1hcmtkb3duTm9kZSB7XG4gIHJlc29sdmUoY29udGV4dCkge1xuICAgIGxldCBpbmNsdWRlRGlyZWN0aXZlUmVwbGFjZW1lbnQgPSBudWxsO1xuXG4gICAgY29uc3QgeyBpbXBvcnRlciB9ID0gY29udGV4dDtcblxuICAgIGNvbnN0IGZpbGVQYXRoID0gdGhpcy5maWxlUGF0aChjb250ZXh0KTtcblxuICAgIGltcG9ydGVyKGZpbGVQYXRoLCBjb250ZXh0KTtcblxuICAgIGNvbnN0IHsgaW1wb3J0ZWROb2RlID0gbnVsbCxcbiAgICAgICAgICBpbXBvcnRlZFRva2VucyA9IG51bGwsXG4gICAgICAgICAgaW1wb3J0ZWRDbGFzc05hbWUgPSBudWxsIH0gPSBjb250ZXh0O1xuXG4gICAgaWYgKGltcG9ydGVkTm9kZSAhPT0gbnVsbCkge1xuICAgICAgZGVsZXRlIGNvbnRleHQuaW1wb3J0ZWROb2RlO1xuICAgICAgZGVsZXRlIGNvbnRleHQuaW1wb3J0ZWRUb2tlbnM7XG4gICAgICBkZWxldGUgY29udGV4dC5pbXBvcnRlZENsYXNzTmFtZTtcblxuICAgICAgY29uc3QgZGl2aXNpb25NYXJrZG93bk5vZGUgPSBpbXBvcnRlZE5vZGUsICAvLy9cbiAgICAgICAgICAgIGRpdmlzaW9uQ2xhc3NOYW1lID0gaW1wb3J0ZWRDbGFzc05hbWUsICAvLy9cbiAgICAgICAgICAgIHRva2VucyA9IGltcG9ydGVkVG9rZW5zOyAgLy8vXG5cbiAgICAgIGRpdmlzaW9uTWFya2Rvd25Ob2RlLnNldERpdmlzaW9uQ2xhc3NOYW1lKGRpdmlzaW9uQ2xhc3NOYW1lKTtcblxuICAgICAgaW5jbHVkZURpcmVjdGl2ZVJlcGxhY2VtZW50ID0gSW5jbHVkZURpcmVjdGl2ZVJlcGxhY2VtZW50LmZyb21EaXZpc2lvbk1hcmtkb3duTm9kZUFuZFRva2VucyhkaXZpc2lvbk1hcmtkb3duTm9kZSwgdG9rZW5zKTtcbiAgICB9XG5cbiAgICByZXR1cm4gaW5jbHVkZURpcmVjdGl2ZVJlcGxhY2VtZW50O1xuICB9XG5cbiAgZmlsZVBhdGgoY29udGV4dCkge1xuICAgIGNvbnN0IGNoaWxkTm9kZXMgPSB0aGlzLmdldENoaWxkTm9kZXMoKSxcbiAgICAgICAgICBsYXN0Q2hpbGROb2RlID0gbGFzdChjaGlsZE5vZGVzKSxcbiAgICAgICAgICBwYXRoVGVybWluYWxOb2RlICA9IGxhc3RDaGlsZE5vZGUsIC8vL1xuICAgICAgICAgIHBhdGhUZXJtaW5hbE5vZGVDb250ZW50ID0gcGF0aFRlcm1pbmFsTm9kZS5nZXRDb250ZW50KCksXG4gICAgICAgICAgZmlsZVBhdGggPSBwYXRoVGVybWluYWxOb2RlQ29udGVudDsgLy8vXG5cbiAgICByZXR1cm4gZmlsZVBhdGg7XG4gIH1cblxuICBzdGF0aWMgZnJvbVJ1bGVOYW1lQ2hpbGROb2Rlc0FuZE9wYWNpdHkocnVsZU5hbWUsIGNoaWxkTm9kZXMsIG9wYWNpdHkpIHsgcmV0dXJuIERpcmVjdGl2ZU1hcmtkb3duTm9kZS5mcm9tUnVsZU5hbWVDaGlsZE5vZGVzQW5kT3BhY2l0eShJbmNsdWRlRGlyZWN0aXZlTWFya2Rvd25Ob2RlLCBydWxlTmFtZSwgY2hpbGROb2Rlcywgb3BhY2l0eSk7IH1cbn1cbiJdLCJuYW1lcyI6WyJJbmNsdWRlRGlyZWN0aXZlTWFya2Rvd25Ob2RlIiwibGFzdCIsImFycmF5VXRpbGl0aWVzIiwicmVzb2x2ZSIsImNvbnRleHQiLCJpbmNsdWRlRGlyZWN0aXZlUmVwbGFjZW1lbnQiLCJpbXBvcnRlciIsImZpbGVQYXRoIiwiaW1wb3J0ZWROb2RlIiwiaW1wb3J0ZWRUb2tlbnMiLCJpbXBvcnRlZENsYXNzTmFtZSIsImRpdmlzaW9uTWFya2Rvd25Ob2RlIiwiZGl2aXNpb25DbGFzc05hbWUiLCJ0b2tlbnMiLCJzZXREaXZpc2lvbkNsYXNzTmFtZSIsIkluY2x1ZGVEaXJlY3RpdmVSZXBsYWNlbWVudCIsImZyb21EaXZpc2lvbk1hcmtkb3duTm9kZUFuZFRva2VucyIsImNoaWxkTm9kZXMiLCJnZXRDaGlsZE5vZGVzIiwibGFzdENoaWxkTm9kZSIsInBhdGhUZXJtaW5hbE5vZGUiLCJwYXRoVGVybWluYWxOb2RlQ29udGVudCIsImdldENvbnRlbnQiLCJmcm9tUnVsZU5hbWVDaGlsZE5vZGVzQW5kT3BhY2l0eSIsInJ1bGVOYW1lIiwib3BhY2l0eSIsIkRpcmVjdGl2ZU1hcmtkb3duTm9kZSJdLCJyYW5nZU1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7IiwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBU3FCQTs7O3lCQVBVO2dFQUVHO3VFQUNNOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRXhDLElBQU0sQUFBRUMsT0FBU0MseUJBQWMsQ0FBdkJEO0FBRU8sSUFBQSxBQUFNRCw2Q0FBRCxBQUFMO2NBQU1BOytCQUFBQTthQUFBQTtnQ0FBQUE7OztrQkFBQUE7O1lBQ25CRyxLQUFBQTttQkFBQUEsU0FBQUEsUUFBUUMsT0FBTztnQkFDYixJQUFJQyw4QkFBOEI7Z0JBRWxDLElBQU0sQUFBRUMsV0FBYUYsUUFBYkU7Z0JBRVIsSUFBTUMsV0FBVyxJQUFJLENBQUNBLFFBQVEsQ0FBQ0g7Z0JBRS9CRSxTQUFTQyxVQUFVSDtnQkFFbkIsNEJBRW1DQSxRQUYzQkksY0FBQUEsa0RBQWUsd0RBRVlKLFFBRDdCSyxnQkFBQUEsc0RBQWlCLDZEQUNZTCxRQUE3Qk0sbUJBQUFBLDREQUFvQjtnQkFFMUIsSUFBSUYsaUJBQWlCLE1BQU07b0JBQ3pCLE9BQU9KLFFBQVFJLFlBQVk7b0JBQzNCLE9BQU9KLFFBQVFLLGNBQWM7b0JBQzdCLE9BQU9MLFFBQVFNLGlCQUFpQjtvQkFFaEMsSUFBTUMsdUJBQXVCSCxjQUN2Qkksb0JBQW9CRixtQkFDcEJHLFNBQVNKLGdCQUFpQixHQUFHO29CQUVuQ0UscUJBQXFCRyxvQkFBb0IsQ0FBQ0Y7b0JBRTFDUCw4QkFBOEJVLHlCQUEyQixDQUFDQyxpQ0FBaUMsQ0FBQ0wsc0JBQXNCRTtnQkFDcEg7Z0JBRUEsT0FBT1I7WUFDVDs7O1lBRUFFLEtBQUFBO21CQUFBQSxTQUFBQSxTQUFTSCxPQUFPO2dCQUNkLElBQU1hLGFBQWEsSUFBSSxDQUFDQyxhQUFhLElBQy9CQyxnQkFBZ0JsQixLQUFLZ0IsYUFDckJHLG1CQUFvQkQsZUFDcEJFLDBCQUEwQkQsaUJBQWlCRSxVQUFVLElBQ3JEZixXQUFXYyx5QkFBeUIsR0FBRztnQkFFN0MsT0FBT2Q7WUFDVDs7OztZQUVPZ0IsS0FBQUE7bUJBQVAsU0FBT0EsaUNBQWlDQyxRQUFRLEVBQUVQLFVBQVUsRUFBRVEsT0FBTztnQkFBSSxPQUFPQyxrQkFBcUIsQ0FBQ0gsZ0NBQWdDLENBekNuSHZCLDhCQXlDa0p3QixVQUFVUCxZQUFZUTtZQUFVOzs7V0F6Q2xMekI7RUFBcUMwQixrQkFBcUIifQ==