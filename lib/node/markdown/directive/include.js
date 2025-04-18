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
            key: "resolve",
            value: function resolve(context) {
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
                        var divisionMarkdownNode = importedNode, divisionClassName = importedClassName, tokens = importedTokens; ///
                        divisionMarkdownNode.setDivisionClassName(divisionClassName);
                        includeDirectiveTransform = _includeDirective.default.fromDivisionMarkdownNodeAndTokens(divisionMarkdownNode, tokens);
                    }
                }
                return includeDirectiveTransform;
            }
        },
        {
            key: "filePath",
            value: function filePath(context) {
                var filePath = this.fromFirstLastChildNode(function(firstLastChildNode) {
                    var filePath = null;
                    var firstLastChildNodePathMarkdownNode = _instanceof(firstLastChildNode, _path.default);
                    if (firstLastChildNodePathMarkdownNode) {
                        var pathMarkdownNode = firstLastChildNode, pathMarkdownNodeContent = pathMarkdownNode.getContent();
                        filePath = pathMarkdownNodeContent; ///
                    }
                    return filePath;
                });
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9ub2RlL21hcmtkb3duL2RpcmVjdGl2ZS9pbmNsdWRlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgTWFya2Rvd25Ob2RlIGZyb20gXCIuLi8uLi8uLi9ub2RlL21hcmtkb3duXCI7XG5pbXBvcnQgUGF0aE1hcmtkb3duTm9kZSBmcm9tIFwiLi4vLi4vLi4vbm9kZS9tYXJrZG93bi9wYXRoXCI7XG5pbXBvcnQgSW5jbHVkZURpcmVjdGl2ZVRyYW5zZm9ybSBmcm9tIFwiLi4vLi4vLi4vdHJhbnNmb3JtL2luY2x1ZGVEaXJlY3RpdmVcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW5jbHVkZURpcmVjdGl2ZU1hcmtkb3duTm9kZSBleHRlbmRzIE1hcmtkb3duTm9kZSB7XG4gIHJlc29sdmUoY29udGV4dCkge1xuICAgIGxldCBpbmNsdWRlRGlyZWN0aXZlVHJhbnNmb3JtID0gbnVsbDtcblxuICAgIGNvbnN0IGZpbGVQYXRoID0gdGhpcy5maWxlUGF0aChjb250ZXh0KTtcblxuICAgIGlmIChmaWxlUGF0aCAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgeyBpbXBvcnRlciB9ID0gY29udGV4dDtcblxuICAgICAgaW1wb3J0ZXIoZmlsZVBhdGgsIGNvbnRleHQpO1xuXG4gICAgICBjb25zdCB7IGltcG9ydGVkTm9kZSA9IG51bGwsXG4gICAgICAgICAgICAgIGltcG9ydGVkVG9rZW5zID0gbnVsbCxcbiAgICAgICAgICAgICAgaW1wb3J0ZWRDbGFzc05hbWUgPSBudWxsIH0gPSBjb250ZXh0O1xuXG4gICAgICBpZiAoaW1wb3J0ZWROb2RlICE9PSBudWxsKSB7XG4gICAgICAgIGRlbGV0ZSBjb250ZXh0LmltcG9ydGVkTm9kZTtcbiAgICAgICAgZGVsZXRlIGNvbnRleHQuaW1wb3J0ZWRUb2tlbnM7XG4gICAgICAgIGRlbGV0ZSBjb250ZXh0LmltcG9ydGVkQ2xhc3NOYW1lO1xuXG4gICAgICAgIGNvbnN0IGRpdmlzaW9uTWFya2Rvd25Ob2RlID0gaW1wb3J0ZWROb2RlLCAgLy8vXG4gICAgICAgICAgICAgIGRpdmlzaW9uQ2xhc3NOYW1lID0gaW1wb3J0ZWRDbGFzc05hbWUsICAvLy9cbiAgICAgICAgICAgICAgdG9rZW5zID0gaW1wb3J0ZWRUb2tlbnM7ICAvLy9cblxuICAgICAgICBkaXZpc2lvbk1hcmtkb3duTm9kZS5zZXREaXZpc2lvbkNsYXNzTmFtZShkaXZpc2lvbkNsYXNzTmFtZSk7XG5cbiAgICAgICAgaW5jbHVkZURpcmVjdGl2ZVRyYW5zZm9ybSA9IEluY2x1ZGVEaXJlY3RpdmVUcmFuc2Zvcm0uZnJvbURpdmlzaW9uTWFya2Rvd25Ob2RlQW5kVG9rZW5zKGRpdmlzaW9uTWFya2Rvd25Ob2RlLCB0b2tlbnMpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBpbmNsdWRlRGlyZWN0aXZlVHJhbnNmb3JtO1xuICB9XG5cbiAgZmlsZVBhdGgoY29udGV4dCkge1xuICAgIGNvbnN0IGZpbGVQYXRoID0gdGhpcy5mcm9tRmlyc3RMYXN0Q2hpbGROb2RlKChmaXJzdExhc3RDaGlsZE5vZGUpID0+IHtcbiAgICAgIGxldCBmaWxlUGF0aCA9IG51bGw7XG5cbiAgICAgIGNvbnN0IGZpcnN0TGFzdENoaWxkTm9kZVBhdGhNYXJrZG93bk5vZGUgPSAoZmlyc3RMYXN0Q2hpbGROb2RlIGluc3RhbmNlb2YgUGF0aE1hcmtkb3duTm9kZSk7XG5cbiAgICAgIGlmIChmaXJzdExhc3RDaGlsZE5vZGVQYXRoTWFya2Rvd25Ob2RlKSB7XG4gICAgICAgIGNvbnN0IHBhdGhNYXJrZG93bk5vZGUgPSBmaXJzdExhc3RDaGlsZE5vZGUsIC8vL1xuICAgICAgICAgICAgICBwYXRoTWFya2Rvd25Ob2RlQ29udGVudCA9IHBhdGhNYXJrZG93bk5vZGUuZ2V0Q29udGVudCgpO1xuXG4gICAgICAgIGZpbGVQYXRoID0gcGF0aE1hcmtkb3duTm9kZUNvbnRlbnQ7IC8vL1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gZmlsZVBhdGg7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gZmlsZVBhdGg7XG4gIH1cblxuICBzdGF0aWMgZnJvbVJ1bGVOYW1lQ2hpbGROb2Rlc0FuZE9wYWNpdHkocnVsZU5hbWUsIGNoaWxkTm9kZXMsIG9wYWNpdHkpIHsgcmV0dXJuIE1hcmtkb3duTm9kZS5mcm9tUnVsZU5hbWVDaGlsZE5vZGVzQW5kT3BhY2l0eShJbmNsdWRlRGlyZWN0aXZlTWFya2Rvd25Ob2RlLCBydWxlTmFtZSwgY2hpbGROb2Rlcywgb3BhY2l0eSk7IH1cbn1cbiJdLCJuYW1lcyI6WyJJbmNsdWRlRGlyZWN0aXZlTWFya2Rvd25Ob2RlIiwicmVzb2x2ZSIsImNvbnRleHQiLCJpbmNsdWRlRGlyZWN0aXZlVHJhbnNmb3JtIiwiZmlsZVBhdGgiLCJpbXBvcnRlciIsImltcG9ydGVkTm9kZSIsImltcG9ydGVkVG9rZW5zIiwiaW1wb3J0ZWRDbGFzc05hbWUiLCJkaXZpc2lvbk1hcmtkb3duTm9kZSIsImRpdmlzaW9uQ2xhc3NOYW1lIiwidG9rZW5zIiwic2V0RGl2aXNpb25DbGFzc05hbWUiLCJJbmNsdWRlRGlyZWN0aXZlVHJhbnNmb3JtIiwiZnJvbURpdmlzaW9uTWFya2Rvd25Ob2RlQW5kVG9rZW5zIiwiZnJvbUZpcnN0TGFzdENoaWxkTm9kZSIsImZpcnN0TGFzdENoaWxkTm9kZSIsImZpcnN0TGFzdENoaWxkTm9kZVBhdGhNYXJrZG93bk5vZGUiLCJQYXRoTWFya2Rvd25Ob2RlIiwicGF0aE1hcmtkb3duTm9kZSIsInBhdGhNYXJrZG93bk5vZGVDb250ZW50IiwiZ2V0Q29udGVudCIsImZyb21SdWxlTmFtZUNoaWxkTm9kZXNBbmRPcGFjaXR5IiwicnVsZU5hbWUiLCJjaGlsZE5vZGVzIiwib3BhY2l0eSIsIk1hcmtkb3duTm9kZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFNcUJBOzs7K0RBSkk7MkRBQ0k7dUVBQ1M7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRXZCLElBQUEsQUFBTUEsNkNBQU47Y0FBTUE7YUFBQUE7Z0NBQUFBO2VBQU4sa0JBQU1BOztrQkFBQUE7O1lBQ25CQyxLQUFBQTttQkFBQUEsU0FBQUEsUUFBUUMsT0FBTztnQkFDYixJQUFJQyw0QkFBNEI7Z0JBRWhDLElBQU1DLFdBQVcsSUFBSSxDQUFDQSxRQUFRLENBQUNGO2dCQUUvQixJQUFJRSxhQUFhLE1BQU07b0JBQ3JCLElBQU0sQUFBRUMsV0FBYUgsUUFBYkc7b0JBRVJBLFNBQVNELFVBQVVGO29CQUVuQiw0QkFFcUNBLFFBRjdCSSxjQUFBQSxrREFBZSx3REFFY0osUUFEN0JLLGdCQUFBQSxzREFBaUIsNkRBQ1lMLFFBQTdCTSxtQkFBQUEsNERBQW9CO29CQUU1QixJQUFJRixpQkFBaUIsTUFBTTt3QkFDekIsT0FBT0osUUFBUUksWUFBWTt3QkFDM0IsT0FBT0osUUFBUUssY0FBYzt3QkFDN0IsT0FBT0wsUUFBUU0saUJBQWlCO3dCQUVoQyxJQUFNQyx1QkFBdUJILGNBQ3ZCSSxvQkFBb0JGLG1CQUNwQkcsU0FBU0osZ0JBQWlCLEdBQUc7d0JBRW5DRSxxQkFBcUJHLG9CQUFvQixDQUFDRjt3QkFFMUNQLDRCQUE0QlUseUJBQXlCLENBQUNDLGlDQUFpQyxDQUFDTCxzQkFBc0JFO29CQUNoSDtnQkFDRjtnQkFFQSxPQUFPUjtZQUNUOzs7WUFFQUMsS0FBQUE7bUJBQUFBLFNBQUFBLFNBQVNGLE9BQU87Z0JBQ2QsSUFBTUUsV0FBVyxJQUFJLENBQUNXLHNCQUFzQixDQUFDLFNBQUNDO29CQUM1QyxJQUFJWixXQUFXO29CQUVmLElBQU1hLHFDQUFzQ0QsQUFBa0IsWUFBbEJBLG9CQUE4QkUsYUFBZ0I7b0JBRTFGLElBQUlELG9DQUFvQzt3QkFDdEMsSUFBTUUsbUJBQW1CSCxvQkFDbkJJLDBCQUEwQkQsaUJBQWlCRSxVQUFVO3dCQUUzRGpCLFdBQVdnQix5QkFBeUIsR0FBRztvQkFDekM7b0JBRUEsT0FBT2hCO2dCQUNUO2dCQUVBLE9BQU9BO1lBQ1Q7Ozs7WUFFT2tCLEtBQUFBO21CQUFQLFNBQU9BLGlDQUFpQ0MsUUFBUSxFQUFFQyxVQUFVLEVBQUVDLE9BQU87Z0JBQUksT0FBT0MsaUJBQVksQ0FBQ0osZ0NBQWdDLENBcEQxR3RCLDhCQW9EeUl1QixVQUFVQyxZQUFZQztZQUFVOzs7V0FwRHpLekI7RUFBcUMwQixpQkFBWSJ9