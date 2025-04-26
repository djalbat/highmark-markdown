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
var _markdown = /*#__PURE__*/ _interop_require_default(require("../../../node/markdown"));
var _path = /*#__PURE__*/ _interop_require_default(require("../../../node/markdown/path"));
var _includeDirective = /*#__PURE__*/ _interop_require_default(require("../../../transform/includeDirective"));
var _query = require("../../../utilities/query");
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
var IncludeDirectiveMarkdownNode = /*#__PURE__*/ function(MarkdownNode) {
    _inherits(IncludeDirectiveMarkdownNode, MarkdownNode);
    function IncludeDirectiveMarkdownNode() {
        _class_call_check(this, IncludeDirectiveMarkdownNode);
        return _call_super(this, IncludeDirectiveMarkdownNode, arguments);
    }
    _create_class(IncludeDirectiveMarkdownNode, [
        {
            key: "filePath",
            value: function filePath(context) {
                var filePath = this.fromFirstLastChildNode(function(firstLastChildNode) {
                    var filePath = null;
                    var firstLastChildNodePathMarkdownNode = _instanceof(firstLastChildNode, _path.default);
                    if (firstLastChildNodePathMarkdownNode) {
                        var pathMarkdownNode = firstLastChildNode, pathMarkdownNodePath = pathMarkdownNode.path(context);
                        filePath = pathMarkdownNodePath; ///
                    }
                    return filePath;
                });
                return filePath;
            }
        },
        {
            key: "resolveInclude",
            value: function resolveInclude(context) {
                var includeDirectiveTransform = null;
                var filePath = this.filePath(context);
                if (filePath !== null) {
                    var importer = context.importer;
                    importer(filePath, context);
                    var _context_importedNode = context.importedNode, importedNode = _context_importedNode === void 0 ? null : _context_importedNode, _context_importedTokens = context.importedTokens, importedTokens = _context_importedTokens === void 0 ? null : _context_importedTokens, _context_importedClassName = context.importedClassName, importedClassName = _context_importedClassName === void 0 ? null : _context_importedClassName;
                    if (importedNode !== null) {
                        delete context.importedNode;
                        delete context.importedTokens;
                        delete context.importedClassName;
                        var node = importedNode, divisionMarkdownNode = (0, _query.divisionMarkdownNodeFromNode)(node);
                        if (divisionMarkdownNode !== null) {
                            var topmostMarkdownNode = node, divisionClassName = importedClassName, tokens = importedTokens; ///
                            topmostMarkdownNode.removeDivisionMarkdownNode(divisionMarkdownNode);
                            divisionMarkdownNode.setDivisionClassName(divisionClassName);
                            includeDirectiveTransform = _includeDirective.default.fromDivisionMarkdownNodeAndTokens(divisionMarkdownNode, tokens);
                        }
                    }
                }
                return includeDirectiveTransform;
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9ub2RlL21hcmtkb3duL2RpcmVjdGl2ZS9pbmNsdWRlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgTWFya2Rvd25Ob2RlIGZyb20gXCIuLi8uLi8uLi9ub2RlL21hcmtkb3duXCI7XG5pbXBvcnQgUGF0aE1hcmtkb3duTm9kZSBmcm9tIFwiLi4vLi4vLi4vbm9kZS9tYXJrZG93bi9wYXRoXCI7XG5pbXBvcnQgSW5jbHVkZURpcmVjdGl2ZVRyYW5zZm9ybSBmcm9tIFwiLi4vLi4vLi4vdHJhbnNmb3JtL2luY2x1ZGVEaXJlY3RpdmVcIjtcblxuaW1wb3J0IHsgZGl2aXNpb25NYXJrZG93bk5vZGVGcm9tTm9kZSB9IGZyb20gXCIuLi8uLi8uLi91dGlsaXRpZXMvcXVlcnlcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW5jbHVkZURpcmVjdGl2ZU1hcmtkb3duTm9kZSBleHRlbmRzIE1hcmtkb3duTm9kZSB7XG4gIGZpbGVQYXRoKGNvbnRleHQpIHtcbiAgICBjb25zdCBmaWxlUGF0aCA9IHRoaXMuZnJvbUZpcnN0TGFzdENoaWxkTm9kZSgoZmlyc3RMYXN0Q2hpbGROb2RlKSA9PiB7XG4gICAgICBsZXQgZmlsZVBhdGggPSBudWxsO1xuXG4gICAgICBjb25zdCBmaXJzdExhc3RDaGlsZE5vZGVQYXRoTWFya2Rvd25Ob2RlID0gKGZpcnN0TGFzdENoaWxkTm9kZSBpbnN0YW5jZW9mIFBhdGhNYXJrZG93bk5vZGUpO1xuXG4gICAgICBpZiAoZmlyc3RMYXN0Q2hpbGROb2RlUGF0aE1hcmtkb3duTm9kZSkge1xuICAgICAgICBjb25zdCBwYXRoTWFya2Rvd25Ob2RlID0gZmlyc3RMYXN0Q2hpbGROb2RlLCAvLy9cbiAgICAgICAgICAgICAgcGF0aE1hcmtkb3duTm9kZVBhdGggPSBwYXRoTWFya2Rvd25Ob2RlLnBhdGgoY29udGV4dCk7XG5cbiAgICAgICAgZmlsZVBhdGggPSBwYXRoTWFya2Rvd25Ob2RlUGF0aDsgLy8vXG4gICAgICB9XG5cbiAgICAgIHJldHVybiBmaWxlUGF0aDtcbiAgICB9KTtcblxuICAgIHJldHVybiBmaWxlUGF0aDtcbiAgfVxuXG4gIHJlc29sdmVJbmNsdWRlKGNvbnRleHQpIHtcbiAgICBsZXQgaW5jbHVkZURpcmVjdGl2ZVRyYW5zZm9ybSA9IG51bGw7XG5cbiAgICBjb25zdCBmaWxlUGF0aCA9IHRoaXMuZmlsZVBhdGgoY29udGV4dCk7XG5cbiAgICBpZiAoZmlsZVBhdGggIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IHsgaW1wb3J0ZXIgfSA9IGNvbnRleHQ7XG5cbiAgICAgIGltcG9ydGVyKGZpbGVQYXRoLCBjb250ZXh0KTtcblxuICAgICAgY29uc3QgeyBpbXBvcnRlZE5vZGUgPSBudWxsLFxuICAgICAgICAgICAgICBpbXBvcnRlZFRva2VucyA9IG51bGwsXG4gICAgICAgICAgICAgIGltcG9ydGVkQ2xhc3NOYW1lID0gbnVsbCB9ID0gY29udGV4dDtcblxuICAgICAgaWYgKGltcG9ydGVkTm9kZSAhPT0gbnVsbCkge1xuICAgICAgICBkZWxldGUgY29udGV4dC5pbXBvcnRlZE5vZGU7XG4gICAgICAgIGRlbGV0ZSBjb250ZXh0LmltcG9ydGVkVG9rZW5zO1xuICAgICAgICBkZWxldGUgY29udGV4dC5pbXBvcnRlZENsYXNzTmFtZTtcblxuICAgICAgICBjb25zdCBub2RlID0gaW1wb3J0ZWROb2RlLCAgLy8vXG4gICAgICAgICAgICAgIGRpdmlzaW9uTWFya2Rvd25Ob2RlID0gZGl2aXNpb25NYXJrZG93bk5vZGVGcm9tTm9kZShub2RlKTtcblxuICAgICAgICBpZiAoZGl2aXNpb25NYXJrZG93bk5vZGUgIT09IG51bGwpIHtcbiAgICAgICAgICBjb25zdCB0b3Btb3N0TWFya2Rvd25Ob2RlID0gbm9kZSwgLy8vXG4gICAgICAgICAgICAgICAgZGl2aXNpb25DbGFzc05hbWUgPSBpbXBvcnRlZENsYXNzTmFtZSwgIC8vL1xuICAgICAgICAgICAgICAgIHRva2VucyA9IGltcG9ydGVkVG9rZW5zOyAgLy8vXG5cbiAgICAgICAgICB0b3Btb3N0TWFya2Rvd25Ob2RlLnJlbW92ZURpdmlzaW9uTWFya2Rvd25Ob2RlKGRpdmlzaW9uTWFya2Rvd25Ob2RlKTtcblxuICAgICAgICAgIGRpdmlzaW9uTWFya2Rvd25Ob2RlLnNldERpdmlzaW9uQ2xhc3NOYW1lKGRpdmlzaW9uQ2xhc3NOYW1lKTtcblxuICAgICAgICAgIGluY2x1ZGVEaXJlY3RpdmVUcmFuc2Zvcm0gPSBJbmNsdWRlRGlyZWN0aXZlVHJhbnNmb3JtLmZyb21EaXZpc2lvbk1hcmtkb3duTm9kZUFuZFRva2VucyhkaXZpc2lvbk1hcmtkb3duTm9kZSwgdG9rZW5zKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBpbmNsdWRlRGlyZWN0aXZlVHJhbnNmb3JtO1xuICB9XG5cbiAgc3RhdGljIGZyb21SdWxlTmFtZUNoaWxkTm9kZXNBbmRPcGFjaXR5KHJ1bGVOYW1lLCBjaGlsZE5vZGVzLCBvcGFjaXR5KSB7IHJldHVybiBNYXJrZG93bk5vZGUuZnJvbVJ1bGVOYW1lQ2hpbGROb2Rlc0FuZE9wYWNpdHkoSW5jbHVkZURpcmVjdGl2ZU1hcmtkb3duTm9kZSwgcnVsZU5hbWUsIGNoaWxkTm9kZXMsIG9wYWNpdHkpOyB9XG59XG4iXSwibmFtZXMiOlsiSW5jbHVkZURpcmVjdGl2ZU1hcmtkb3duTm9kZSIsImZpbGVQYXRoIiwiY29udGV4dCIsImZyb21GaXJzdExhc3RDaGlsZE5vZGUiLCJmaXJzdExhc3RDaGlsZE5vZGUiLCJmaXJzdExhc3RDaGlsZE5vZGVQYXRoTWFya2Rvd25Ob2RlIiwiUGF0aE1hcmtkb3duTm9kZSIsInBhdGhNYXJrZG93bk5vZGUiLCJwYXRoTWFya2Rvd25Ob2RlUGF0aCIsInBhdGgiLCJyZXNvbHZlSW5jbHVkZSIsImluY2x1ZGVEaXJlY3RpdmVUcmFuc2Zvcm0iLCJpbXBvcnRlciIsImltcG9ydGVkTm9kZSIsImltcG9ydGVkVG9rZW5zIiwiaW1wb3J0ZWRDbGFzc05hbWUiLCJub2RlIiwiZGl2aXNpb25NYXJrZG93bk5vZGUiLCJkaXZpc2lvbk1hcmtkb3duTm9kZUZyb21Ob2RlIiwidG9wbW9zdE1hcmtkb3duTm9kZSIsImRpdmlzaW9uQ2xhc3NOYW1lIiwidG9rZW5zIiwicmVtb3ZlRGl2aXNpb25NYXJrZG93bk5vZGUiLCJzZXREaXZpc2lvbkNsYXNzTmFtZSIsIkluY2x1ZGVEaXJlY3RpdmVUcmFuc2Zvcm0iLCJmcm9tRGl2aXNpb25NYXJrZG93bk5vZGVBbmRUb2tlbnMiLCJmcm9tUnVsZU5hbWVDaGlsZE5vZGVzQW5kT3BhY2l0eSIsInJ1bGVOYW1lIiwiY2hpbGROb2RlcyIsIm9wYWNpdHkiLCJNYXJrZG93bk5vZGUiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBUXFCQTs7OytEQU5JOzJEQUNJO3VFQUNTO3FCQUVPOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUU5QixJQUFBLEFBQU1BLDZDQUFOO2NBQU1BO2FBQUFBO2dDQUFBQTtlQUFOLGtCQUFNQTs7a0JBQUFBOztZQUNuQkMsS0FBQUE7bUJBQUFBLFNBQUFBLFNBQVNDLE9BQU87Z0JBQ2QsSUFBTUQsV0FBVyxJQUFJLENBQUNFLHNCQUFzQixDQUFDLFNBQUNDO29CQUM1QyxJQUFJSCxXQUFXO29CQUVmLElBQU1JLHFDQUFzQ0QsQUFBa0IsWUFBbEJBLG9CQUE4QkUsYUFBZ0I7b0JBRTFGLElBQUlELG9DQUFvQzt3QkFDdEMsSUFBTUUsbUJBQW1CSCxvQkFDbkJJLHVCQUF1QkQsaUJBQWlCRSxJQUFJLENBQUNQO3dCQUVuREQsV0FBV08sc0JBQXNCLEdBQUc7b0JBQ3RDO29CQUVBLE9BQU9QO2dCQUNUO2dCQUVBLE9BQU9BO1lBQ1Q7OztZQUVBUyxLQUFBQTttQkFBQUEsU0FBQUEsZUFBZVIsT0FBTztnQkFDcEIsSUFBSVMsNEJBQTRCO2dCQUVoQyxJQUFNVixXQUFXLElBQUksQ0FBQ0EsUUFBUSxDQUFDQztnQkFFL0IsSUFBSUQsYUFBYSxNQUFNO29CQUNyQixJQUFNLEFBQUVXLFdBQWFWLFFBQWJVO29CQUVSQSxTQUFTWCxVQUFVQztvQkFFbkIsNEJBRXFDQSxRQUY3QlcsY0FBQUEsa0RBQWUsd0RBRWNYLFFBRDdCWSxnQkFBQUEsc0RBQWlCLDZEQUNZWixRQUE3QmEsbUJBQUFBLDREQUFvQjtvQkFFNUIsSUFBSUYsaUJBQWlCLE1BQU07d0JBQ3pCLE9BQU9YLFFBQVFXLFlBQVk7d0JBQzNCLE9BQU9YLFFBQVFZLGNBQWM7d0JBQzdCLE9BQU9aLFFBQVFhLGlCQUFpQjt3QkFFaEMsSUFBTUMsT0FBT0gsY0FDUEksdUJBQXVCQyxJQUFBQSxtQ0FBNEIsRUFBQ0Y7d0JBRTFELElBQUlDLHlCQUF5QixNQUFNOzRCQUNqQyxJQUFNRSxzQkFBc0JILE1BQ3RCSSxvQkFBb0JMLG1CQUNwQk0sU0FBU1AsZ0JBQWlCLEdBQUc7NEJBRW5DSyxvQkFBb0JHLDBCQUEwQixDQUFDTDs0QkFFL0NBLHFCQUFxQk0sb0JBQW9CLENBQUNIOzRCQUUxQ1QsNEJBQTRCYSx5QkFBeUIsQ0FBQ0MsaUNBQWlDLENBQUNSLHNCQUFzQkk7d0JBQ2hIO29CQUNGO2dCQUNGO2dCQUVBLE9BQU9WO1lBQ1Q7Ozs7WUFFT2UsS0FBQUE7bUJBQVAsU0FBT0EsaUNBQWlDQyxRQUFRLEVBQUVDLFVBQVUsRUFBRUMsT0FBTztnQkFBSSxPQUFPQyxpQkFBWSxDQUFDSixnQ0FBZ0MsQ0EzRDFHMUIsOEJBMkR5STJCLFVBQVVDLFlBQVlDO1lBQVU7OztXQTNEeks3QjtFQUFxQzhCLGlCQUFZIn0=