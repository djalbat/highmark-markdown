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
var _path = /*#__PURE__*/ _interop_require_default(require("../path"));
var _directive = /*#__PURE__*/ _interop_require_default(require("../../../node/markdown/directive"));
var _includeDirective = /*#__PURE__*/ _interop_require_default(require("../../../replacement/includeDirective"));
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
function _instanceof(left, right) {
    if (right != null && typeof Symbol !== "undefined" && right[Symbol.hasInstance]) {
        return !!right[Symbol.hasInstance](left);
    } else {
        return left instanceof right;
    }
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
var last = _necessary.arrayUtilities.last;
var IncludeDirectiveMarkdownNode = /*#__PURE__*/ function(DirectiveMarkdownNode) {
    _inherits(IncludeDirectiveMarkdownNode, DirectiveMarkdownNode);
    function IncludeDirectiveMarkdownNode() {
        _class_call_check(this, IncludeDirectiveMarkdownNode);
        return _call_super(this, IncludeDirectiveMarkdownNode, arguments);
    }
    _create_class(IncludeDirectiveMarkdownNode, [
        {
            key: "resolve",
            value: function resolve(context) {
                var includeDirectiveReplacement = null;
                var filePath = this.filePath(context);
                if (filePath !== null) {
                    var importer = context.importer;
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
                }
                return includeDirectiveReplacement;
            }
        },
        {
            key: "filePath",
            value: function filePath(context) {
                var filePath = null;
                var childNodes = this.getChildNodes(), lastChildNode = last(childNodes), lastChildNodePathMarkdownNode = _instanceof(lastChildNode, _path.default);
                if (lastChildNodePathMarkdownNode) {
                    var pathMarkdownNode = lastChildNode, pathMarkdownNodeContent = pathMarkdownNode.getContent();
                    filePath = pathMarkdownNodeContent; ///
                }
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9ub2RlL21hcmtkb3duL2RpcmVjdGl2ZS9pbmNsdWRlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBhcnJheVV0aWxpdGllcyB9IGZyb20gXCJuZWNlc3NhcnlcIjtcblxuaW1wb3J0IFBhdGhNYXJrZG93bk5vZGUgZnJvbSBcIi4uL3BhdGhcIjtcbmltcG9ydCBEaXJlY3RpdmVNYXJrZG93bk5vZGUgZnJvbSBcIi4uLy4uLy4uL25vZGUvbWFya2Rvd24vZGlyZWN0aXZlXCI7XG5pbXBvcnQgSW5jbHVkZURpcmVjdGl2ZVJlcGxhY2VtZW50IGZyb20gXCIuLi8uLi8uLi9yZXBsYWNlbWVudC9pbmNsdWRlRGlyZWN0aXZlXCI7XG5cbmNvbnN0IHsgbGFzdCB9ID0gYXJyYXlVdGlsaXRpZXM7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEluY2x1ZGVEaXJlY3RpdmVNYXJrZG93bk5vZGUgZXh0ZW5kcyBEaXJlY3RpdmVNYXJrZG93bk5vZGUge1xuICByZXNvbHZlKGNvbnRleHQpIHtcbiAgICBsZXQgaW5jbHVkZURpcmVjdGl2ZVJlcGxhY2VtZW50ID0gbnVsbDtcblxuICAgIGNvbnN0IGZpbGVQYXRoID0gdGhpcy5maWxlUGF0aChjb250ZXh0KTtcblxuICAgIGlmIChmaWxlUGF0aCAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgeyBpbXBvcnRlciB9ID0gY29udGV4dDtcblxuICAgICAgaW1wb3J0ZXIoZmlsZVBhdGgsIGNvbnRleHQpO1xuXG4gICAgICBjb25zdCB7IGltcG9ydGVkTm9kZSA9IG51bGwsXG4gICAgICAgICAgICAgIGltcG9ydGVkVG9rZW5zID0gbnVsbCxcbiAgICAgICAgICAgICAgaW1wb3J0ZWRDbGFzc05hbWUgPSBudWxsIH0gPSBjb250ZXh0O1xuXG4gICAgICBpZiAoaW1wb3J0ZWROb2RlICE9PSBudWxsKSB7XG4gICAgICAgIGRlbGV0ZSBjb250ZXh0LmltcG9ydGVkTm9kZTtcbiAgICAgICAgZGVsZXRlIGNvbnRleHQuaW1wb3J0ZWRUb2tlbnM7XG4gICAgICAgIGRlbGV0ZSBjb250ZXh0LmltcG9ydGVkQ2xhc3NOYW1lO1xuXG4gICAgICAgIGNvbnN0IGRpdmlzaW9uTWFya2Rvd25Ob2RlID0gaW1wb3J0ZWROb2RlLCAgLy8vXG4gICAgICAgICAgICAgIGRpdmlzaW9uQ2xhc3NOYW1lID0gaW1wb3J0ZWRDbGFzc05hbWUsICAvLy9cbiAgICAgICAgICAgICAgdG9rZW5zID0gaW1wb3J0ZWRUb2tlbnM7ICAvLy9cblxuICAgICAgICBkaXZpc2lvbk1hcmtkb3duTm9kZS5zZXREaXZpc2lvbkNsYXNzTmFtZShkaXZpc2lvbkNsYXNzTmFtZSk7XG5cbiAgICAgICAgaW5jbHVkZURpcmVjdGl2ZVJlcGxhY2VtZW50ID0gSW5jbHVkZURpcmVjdGl2ZVJlcGxhY2VtZW50LmZyb21EaXZpc2lvbk1hcmtkb3duTm9kZUFuZFRva2VucyhkaXZpc2lvbk1hcmtkb3duTm9kZSwgdG9rZW5zKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gaW5jbHVkZURpcmVjdGl2ZVJlcGxhY2VtZW50O1xuICB9XG5cbiAgZmlsZVBhdGgoY29udGV4dCkge1xuICAgIGxldCBmaWxlUGF0aCA9IG51bGw7XG5cbiAgICBjb25zdCBjaGlsZE5vZGVzID0gdGhpcy5nZXRDaGlsZE5vZGVzKCksXG4gICAgICAgICAgbGFzdENoaWxkTm9kZSA9IGxhc3QoY2hpbGROb2RlcyksXG4gICAgICAgICAgbGFzdENoaWxkTm9kZVBhdGhNYXJrZG93bk5vZGUgPSAobGFzdENoaWxkTm9kZSBpbnN0YW5jZW9mIFBhdGhNYXJrZG93bk5vZGUpO1xuXG4gICAgaWYgKGxhc3RDaGlsZE5vZGVQYXRoTWFya2Rvd25Ob2RlKSB7XG4gICAgICBjb25zdCBwYXRoTWFya2Rvd25Ob2RlID0gbGFzdENoaWxkTm9kZSwgLy8vXG4gICAgICAgICAgICBwYXRoTWFya2Rvd25Ob2RlQ29udGVudCA9IHBhdGhNYXJrZG93bk5vZGUuZ2V0Q29udGVudCgpO1xuXG4gICAgICBmaWxlUGF0aCA9IHBhdGhNYXJrZG93bk5vZGVDb250ZW50OyAvLy9cbiAgICB9XG5cbiAgICByZXR1cm4gZmlsZVBhdGg7XG4gIH1cblxuICBzdGF0aWMgZnJvbVJ1bGVOYW1lQ2hpbGROb2Rlc0FuZE9wYWNpdHkocnVsZU5hbWUsIGNoaWxkTm9kZXMsIG9wYWNpdHkpIHsgcmV0dXJuIERpcmVjdGl2ZU1hcmtkb3duTm9kZS5mcm9tUnVsZU5hbWVDaGlsZE5vZGVzQW5kT3BhY2l0eShJbmNsdWRlRGlyZWN0aXZlTWFya2Rvd25Ob2RlLCBydWxlTmFtZSwgY2hpbGROb2Rlcywgb3BhY2l0eSk7IH1cbn1cbiJdLCJuYW1lcyI6WyJJbmNsdWRlRGlyZWN0aXZlTWFya2Rvd25Ob2RlIiwibGFzdCIsImFycmF5VXRpbGl0aWVzIiwicmVzb2x2ZSIsImNvbnRleHQiLCJpbmNsdWRlRGlyZWN0aXZlUmVwbGFjZW1lbnQiLCJmaWxlUGF0aCIsImltcG9ydGVyIiwiaW1wb3J0ZWROb2RlIiwiaW1wb3J0ZWRUb2tlbnMiLCJpbXBvcnRlZENsYXNzTmFtZSIsImRpdmlzaW9uTWFya2Rvd25Ob2RlIiwiZGl2aXNpb25DbGFzc05hbWUiLCJ0b2tlbnMiLCJzZXREaXZpc2lvbkNsYXNzTmFtZSIsIkluY2x1ZGVEaXJlY3RpdmVSZXBsYWNlbWVudCIsImZyb21EaXZpc2lvbk1hcmtkb3duTm9kZUFuZFRva2VucyIsImNoaWxkTm9kZXMiLCJnZXRDaGlsZE5vZGVzIiwibGFzdENoaWxkTm9kZSIsImxhc3RDaGlsZE5vZGVQYXRoTWFya2Rvd25Ob2RlIiwiUGF0aE1hcmtkb3duTm9kZSIsInBhdGhNYXJrZG93bk5vZGUiLCJwYXRoTWFya2Rvd25Ob2RlQ29udGVudCIsImdldENvbnRlbnQiLCJmcm9tUnVsZU5hbWVDaGlsZE5vZGVzQW5kT3BhY2l0eSIsInJ1bGVOYW1lIiwib3BhY2l0eSIsIkRpcmVjdGl2ZU1hcmtkb3duTm9kZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFVcUJBOzs7eUJBUlU7MkRBRUY7Z0VBQ0s7dUVBQ007Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRXhDLElBQU0sQUFBRUMsT0FBU0MseUJBQWMsQ0FBdkJEO0FBRU8sSUFBQSxBQUFNRCw2Q0FBTjtjQUFNQTthQUFBQTtnQ0FBQUE7ZUFBTixrQkFBTUE7O2tCQUFBQTs7WUFDbkJHLEtBQUFBO21CQUFBQSxTQUFBQSxRQUFRQyxPQUFPO2dCQUNiLElBQUlDLDhCQUE4QjtnQkFFbEMsSUFBTUMsV0FBVyxJQUFJLENBQUNBLFFBQVEsQ0FBQ0Y7Z0JBRS9CLElBQUlFLGFBQWEsTUFBTTtvQkFDckIsSUFBTSxBQUFFQyxXQUFhSCxRQUFiRztvQkFFUkEsU0FBU0QsVUFBVUY7b0JBRW5CLDRCQUVxQ0EsUUFGN0JJLGNBQUFBLGtEQUFlLHdEQUVjSixRQUQ3QkssZ0JBQUFBLHNEQUFpQiw2REFDWUwsUUFBN0JNLG1CQUFBQSw0REFBb0I7b0JBRTVCLElBQUlGLGlCQUFpQixNQUFNO3dCQUN6QixPQUFPSixRQUFRSSxZQUFZO3dCQUMzQixPQUFPSixRQUFRSyxjQUFjO3dCQUM3QixPQUFPTCxRQUFRTSxpQkFBaUI7d0JBRWhDLElBQU1DLHVCQUF1QkgsY0FDdkJJLG9CQUFvQkYsbUJBQ3BCRyxTQUFTSixnQkFBaUIsR0FBRzt3QkFFbkNFLHFCQUFxQkcsb0JBQW9CLENBQUNGO3dCQUUxQ1AsOEJBQThCVSx5QkFBMkIsQ0FBQ0MsaUNBQWlDLENBQUNMLHNCQUFzQkU7b0JBQ3BIO2dCQUNGO2dCQUVBLE9BQU9SO1lBQ1Q7OztZQUVBQyxLQUFBQTttQkFBQUEsU0FBQUEsU0FBU0YsT0FBTztnQkFDZCxJQUFJRSxXQUFXO2dCQUVmLElBQU1XLGFBQWEsSUFBSSxDQUFDQyxhQUFhLElBQy9CQyxnQkFBZ0JsQixLQUFLZ0IsYUFDckJHLGdDQUFpQ0QsQUFBYSxZQUFiQSxlQUF5QkUsYUFBZ0I7Z0JBRWhGLElBQUlELCtCQUErQjtvQkFDakMsSUFBTUUsbUJBQW1CSCxlQUNuQkksMEJBQTBCRCxpQkFBaUJFLFVBQVU7b0JBRTNEbEIsV0FBV2lCLHlCQUF5QixHQUFHO2dCQUN6QztnQkFFQSxPQUFPakI7WUFDVDs7OztZQUVPbUIsS0FBQUE7bUJBQVAsU0FBT0EsaUNBQWlDQyxRQUFRLEVBQUVULFVBQVUsRUFBRVUsT0FBTztnQkFBSSxPQUFPQyxrQkFBcUIsQ0FBQ0gsZ0NBQWdDLENBbERuSHpCLDhCQWtEa0owQixVQUFVVCxZQUFZVTtZQUFVOzs7V0FsRGxMM0I7RUFBcUM0QixrQkFBcUIifQ==