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
var _path = /*#__PURE__*/ _interop_require_default(require("../path"));
var _directive = /*#__PURE__*/ _interop_require_default(require("../../../node/markdown/directive"));
var _embedDirective = /*#__PURE__*/ _interop_require_default(require("../../../replacement/embedDirective"));
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
var EmbedDirectiveMarkdownNode = /*#__PURE__*/ function(DirectiveMarkdownNode) {
    _inherits(EmbedDirectiveMarkdownNode, DirectiveMarkdownNode);
    function EmbedDirectiveMarkdownNode() {
        _class_call_check(this, EmbedDirectiveMarkdownNode);
        return _call_super(this, EmbedDirectiveMarkdownNode, arguments);
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
                return _directive.default.fromRuleNameChildNodesAndOpacity(EmbedDirectiveMarkdownNode, ruleName, childNodes, opacity);
            }
        }
    ]);
    return EmbedDirectiveMarkdownNode;
}(_directive.default);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9ub2RlL21hcmtkb3duL2RpcmVjdGl2ZS9lbWJlZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgYXJyYXlVdGlsaXRpZXMgfSBmcm9tIFwibmVjZXNzYXJ5XCI7XG5cbmltcG9ydCBQYXRoTWFya2Rvd25Ob2RlIGZyb20gXCIuLi9wYXRoXCI7XG5pbXBvcnQgRGlyZWN0aXZlTWFya2Rvd25Ob2RlIGZyb20gXCIuLi8uLi8uLi9ub2RlL21hcmtkb3duL2RpcmVjdGl2ZVwiO1xuaW1wb3J0IEVtYmVkRGlyZWN0aXZlUmVwbGFjZW1lbnQgZnJvbSBcIi4uLy4uLy4uL3JlcGxhY2VtZW50L2VtYmVkRGlyZWN0aXZlXCI7XG5cbmNvbnN0IHsgbGFzdCB9ID0gYXJyYXlVdGlsaXRpZXM7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEVtYmVkRGlyZWN0aXZlTWFya2Rvd25Ob2RlIGV4dGVuZHMgRGlyZWN0aXZlTWFya2Rvd25Ob2RlIHtcbiAgcmVzb2x2ZShjb250ZXh0KSB7XG4gICAgbGV0IGVtYmVkRGlyZWN0aXZlUmVwbGFjZW1lbnQgPSBudWxsO1xuXG4gICAgY29uc3QgZmlsZVBhdGggPSB0aGlzLmZpbGVQYXRoKGNvbnRleHQpO1xuXG4gICAgaWYgKGZpbGVQYXRoICE9PSBudWxsKSB7XG4gICAgICBjb25zdCB7IGltcG9ydGVyIH0gPSBjb250ZXh0O1xuXG4gICAgICBpbXBvcnRlcihmaWxlUGF0aCwgY29udGV4dCk7XG5cbiAgICAgIGNvbnN0IHsgaW1wb3J0ZWROb2RlID0gbnVsbCxcbiAgICAgICAgICAgICAgaW1wb3J0ZWRUb2tlbnMgPSBudWxsIH0gPSBjb250ZXh0O1xuXG4gICAgICBpZiAoaW1wb3J0ZWROb2RlICE9PSBudWxsKSB7XG4gICAgICAgIGRlbGV0ZSBjb250ZXh0LmltcG9ydGVkTm9kZTtcbiAgICAgICAgZGVsZXRlIGNvbnRleHQuaW1wb3J0ZWRUb2tlbnM7XG5cbiAgICAgICAgY29uc3QgZGl2aXNpb25NYXJrZG93bk5vZGUgPSBpbXBvcnRlZE5vZGUsICAvLy9cbiAgICAgICAgICAgICAgdG9rZW5zID0gaW1wb3J0ZWRUb2tlbnM7ICAvLy9cblxuICAgICAgICBlbWJlZERpcmVjdGl2ZVJlcGxhY2VtZW50ID0gRW1iZWREaXJlY3RpdmVSZXBsYWNlbWVudC5mcm9tRGl2aXNpb25NYXJrZG93bk5vZGVBbmRUb2tlbnMoZGl2aXNpb25NYXJrZG93bk5vZGUsIHRva2Vucyk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGVtYmVkRGlyZWN0aXZlUmVwbGFjZW1lbnQ7XG4gIH1cblxuICBmaWxlUGF0aChjb250ZXh0KSB7XG4gICAgbGV0IGZpbGVQYXRoID0gbnVsbDtcblxuICAgIGNvbnN0IGNoaWxkTm9kZXMgPSB0aGlzLmdldENoaWxkTm9kZXMoKSxcbiAgICAgICAgICBsYXN0Q2hpbGROb2RlID0gbGFzdChjaGlsZE5vZGVzKSxcbiAgICAgICAgICBsYXN0Q2hpbGROb2RlUGF0aE1hcmtkb3duTm9kZSA9IChsYXN0Q2hpbGROb2RlIGluc3RhbmNlb2YgUGF0aE1hcmtkb3duTm9kZSk7XG5cbiAgICBpZiAobGFzdENoaWxkTm9kZVBhdGhNYXJrZG93bk5vZGUpIHtcbiAgICAgIGNvbnN0IHBhdGhNYXJrZG93bk5vZGUgPSBsYXN0Q2hpbGROb2RlLCAvLy9cbiAgICAgICAgcGF0aE1hcmtkb3duTm9kZUNvbnRlbnQgPSBwYXRoTWFya2Rvd25Ob2RlLmdldENvbnRlbnQoKTtcblxuICAgICAgZmlsZVBhdGggPSBwYXRoTWFya2Rvd25Ob2RlQ29udGVudDsgLy8vXG4gICAgfVxuXG4gICAgcmV0dXJuIGZpbGVQYXRoO1xuICB9XG5cbiAgc3RhdGljIGZyb21SdWxlTmFtZUNoaWxkTm9kZXNBbmRPcGFjaXR5KHJ1bGVOYW1lLCBjaGlsZE5vZGVzLCBvcGFjaXR5KSB7IHJldHVybiBEaXJlY3RpdmVNYXJrZG93bk5vZGUuZnJvbVJ1bGVOYW1lQ2hpbGROb2Rlc0FuZE9wYWNpdHkoRW1iZWREaXJlY3RpdmVNYXJrZG93bk5vZGUsIHJ1bGVOYW1lLCBjaGlsZE5vZGVzLCBvcGFjaXR5KTsgfVxufVxuIl0sIm5hbWVzIjpbIkVtYmVkRGlyZWN0aXZlTWFya2Rvd25Ob2RlIiwibGFzdCIsImFycmF5VXRpbGl0aWVzIiwicmVzb2x2ZSIsImNvbnRleHQiLCJlbWJlZERpcmVjdGl2ZVJlcGxhY2VtZW50IiwiZmlsZVBhdGgiLCJpbXBvcnRlciIsImltcG9ydGVkTm9kZSIsImltcG9ydGVkVG9rZW5zIiwiZGl2aXNpb25NYXJrZG93bk5vZGUiLCJ0b2tlbnMiLCJFbWJlZERpcmVjdGl2ZVJlcGxhY2VtZW50IiwiZnJvbURpdmlzaW9uTWFya2Rvd25Ob2RlQW5kVG9rZW5zIiwiY2hpbGROb2RlcyIsImdldENoaWxkTm9kZXMiLCJsYXN0Q2hpbGROb2RlIiwibGFzdENoaWxkTm9kZVBhdGhNYXJrZG93bk5vZGUiLCJQYXRoTWFya2Rvd25Ob2RlIiwicGF0aE1hcmtkb3duTm9kZSIsInBhdGhNYXJrZG93bk5vZGVDb250ZW50IiwiZ2V0Q29udGVudCIsImZyb21SdWxlTmFtZUNoaWxkTm9kZXNBbmRPcGFjaXR5IiwicnVsZU5hbWUiLCJvcGFjaXR5IiwiRGlyZWN0aXZlTWFya2Rvd25Ob2RlIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQVVxQkE7Ozt5QkFSVTsyREFFRjtnRUFDSztxRUFDSTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFdEMsSUFBTSxBQUFFQyxPQUFTQyx5QkFBYyxDQUF2QkQ7QUFFTyxJQUFBLEFBQU1ELDJDQUFOO2NBQU1BO2FBQUFBO2dDQUFBQTtpQ0FBQUE7O2tCQUFBQTs7WUFDbkJHLEtBQUFBO21CQUFBQSxTQUFBQSxRQUFRQyxPQUFPO2dCQUNiLElBQUlDLDRCQUE0QjtnQkFFaEMsSUFBTUMsV0FBVyxJQUFJLENBQUNBLFFBQVEsQ0FBQ0Y7Z0JBRS9CLElBQUlFLGFBQWEsTUFBTTtvQkFDckIsSUFBTSxBQUFFQyxXQUFhSCxRQUFiRztvQkFFUkEsU0FBU0QsVUFBVUY7b0JBRW5CLDRCQUNrQ0EsUUFEMUJJLGNBQUFBLGtEQUFlLHdEQUNXSixRQUExQkssZ0JBQUFBLHNEQUFpQjtvQkFFekIsSUFBSUQsaUJBQWlCLE1BQU07d0JBQ3pCLE9BQU9KLFFBQVFJLFlBQVk7d0JBQzNCLE9BQU9KLFFBQVFLLGNBQWM7d0JBRTdCLElBQU1DLHVCQUF1QkYsY0FDdkJHLFNBQVNGLGdCQUFpQixHQUFHO3dCQUVuQ0osNEJBQTRCTyx1QkFBeUIsQ0FBQ0MsaUNBQWlDLENBQUNILHNCQUFzQkM7b0JBQ2hIO2dCQUNGO2dCQUVBLE9BQU9OO1lBQ1Q7OztZQUVBQyxLQUFBQTttQkFBQUEsU0FBQUEsU0FBU0YsT0FBTztnQkFDZCxJQUFJRSxXQUFXO2dCQUVmLElBQU1RLGFBQWEsSUFBSSxDQUFDQyxhQUFhLElBQy9CQyxnQkFBZ0JmLEtBQUthLGFBQ3JCRyxnQ0FBaUNELEFBQWEsWUFBYkEsZUFBeUJFLGFBQWdCO2dCQUVoRixJQUFJRCwrQkFBK0I7b0JBQ2pDLElBQU1FLG1CQUFtQkgsZUFDdkJJLDBCQUEwQkQsaUJBQWlCRSxVQUFVO29CQUV2RGYsV0FBV2MseUJBQXlCLEdBQUc7Z0JBQ3pDO2dCQUVBLE9BQU9kO1lBQ1Q7Ozs7WUFFT2dCLEtBQUFBO21CQUFQLFNBQU9BLGlDQUFpQ0MsUUFBUSxFQUFFVCxVQUFVLEVBQUVVLE9BQU87Z0JBQUksT0FBT0Msa0JBQXFCLENBQUNILGdDQUFnQyxDQTdDbkh0Qiw0QkE2Q2dKdUIsVUFBVVQsWUFBWVU7WUFBVTs7O1dBN0NoTHhCO0VBQW1DeUIsa0JBQXFCIn0=