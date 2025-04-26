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
                        var topmostMarkdownNode = importedNode, firstDivisionMarkdownNode = topmostMarkdownNode.removeFirstDivisionMarkdownNode();
                        if (firstDivisionMarkdownNode !== null) {
                            var divisionMarkdownNode = firstDivisionMarkdownNode, divisionClassName = importedClassName, tokens = importedTokens; ///
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9ub2RlL21hcmtkb3duL2RpcmVjdGl2ZS9pbmNsdWRlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgTWFya2Rvd25Ob2RlIGZyb20gXCIuLi8uLi8uLi9ub2RlL21hcmtkb3duXCI7XG5pbXBvcnQgUGF0aE1hcmtkb3duTm9kZSBmcm9tIFwiLi4vLi4vLi4vbm9kZS9tYXJrZG93bi9wYXRoXCI7XG5pbXBvcnQgSW5jbHVkZURpcmVjdGl2ZVRyYW5zZm9ybSBmcm9tIFwiLi4vLi4vLi4vdHJhbnNmb3JtL2luY2x1ZGVEaXJlY3RpdmVcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW5jbHVkZURpcmVjdGl2ZU1hcmtkb3duTm9kZSBleHRlbmRzIE1hcmtkb3duTm9kZSB7XG4gIGZpbGVQYXRoKGNvbnRleHQpIHtcbiAgICBjb25zdCBmaWxlUGF0aCA9IHRoaXMuZnJvbUZpcnN0TGFzdENoaWxkTm9kZSgoZmlyc3RMYXN0Q2hpbGROb2RlKSA9PiB7XG4gICAgICBsZXQgZmlsZVBhdGggPSBudWxsO1xuXG4gICAgICBjb25zdCBmaXJzdExhc3RDaGlsZE5vZGVQYXRoTWFya2Rvd25Ob2RlID0gKGZpcnN0TGFzdENoaWxkTm9kZSBpbnN0YW5jZW9mIFBhdGhNYXJrZG93bk5vZGUpO1xuXG4gICAgICBpZiAoZmlyc3RMYXN0Q2hpbGROb2RlUGF0aE1hcmtkb3duTm9kZSkge1xuICAgICAgICBjb25zdCBwYXRoTWFya2Rvd25Ob2RlID0gZmlyc3RMYXN0Q2hpbGROb2RlLCAvLy9cbiAgICAgICAgICAgICAgcGF0aE1hcmtkb3duTm9kZVBhdGggPSBwYXRoTWFya2Rvd25Ob2RlLnBhdGgoY29udGV4dCk7XG5cbiAgICAgICAgZmlsZVBhdGggPSBwYXRoTWFya2Rvd25Ob2RlUGF0aDsgLy8vXG4gICAgICB9XG5cbiAgICAgIHJldHVybiBmaWxlUGF0aDtcbiAgICB9KTtcblxuICAgIHJldHVybiBmaWxlUGF0aDtcbiAgfVxuXG4gIHJlc29sdmVJbmNsdWRlKGNvbnRleHQpIHtcbiAgICBsZXQgaW5jbHVkZURpcmVjdGl2ZVRyYW5zZm9ybSA9IG51bGw7XG5cbiAgICBjb25zdCBmaWxlUGF0aCA9IHRoaXMuZmlsZVBhdGgoY29udGV4dCk7XG5cbiAgICBpZiAoZmlsZVBhdGggIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IHsgaW1wb3J0ZXIgfSA9IGNvbnRleHQ7XG5cbiAgICAgIGltcG9ydGVyKGZpbGVQYXRoLCBjb250ZXh0KTtcblxuICAgICAgY29uc3QgeyBpbXBvcnRlZE5vZGUgPSBudWxsLFxuICAgICAgICAgICAgICBpbXBvcnRlZFRva2VucyA9IG51bGwsXG4gICAgICAgICAgICAgIGltcG9ydGVkQ2xhc3NOYW1lID0gbnVsbCB9ID0gY29udGV4dDtcblxuICAgICAgaWYgKGltcG9ydGVkTm9kZSAhPT0gbnVsbCkge1xuICAgICAgICBkZWxldGUgY29udGV4dC5pbXBvcnRlZE5vZGU7XG4gICAgICAgIGRlbGV0ZSBjb250ZXh0LmltcG9ydGVkVG9rZW5zO1xuICAgICAgICBkZWxldGUgY29udGV4dC5pbXBvcnRlZENsYXNzTmFtZTtcblxuICAgICAgICBjb25zdCB0b3Btb3N0TWFya2Rvd25Ob2RlID0gaW1wb3J0ZWROb2RlLCAgLy8vXG4gICAgICAgICAgICAgIGZpcnN0RGl2aXNpb25NYXJrZG93bk5vZGUgPSB0b3Btb3N0TWFya2Rvd25Ob2RlLnJlbW92ZUZpcnN0RGl2aXNpb25NYXJrZG93bk5vZGUoKTtcblxuICAgICAgICBpZiAoZmlyc3REaXZpc2lvbk1hcmtkb3duTm9kZSAhPT0gbnVsbCkge1xuICAgICAgICAgIGNvbnN0IGRpdmlzaW9uTWFya2Rvd25Ob2RlID0gZmlyc3REaXZpc2lvbk1hcmtkb3duTm9kZSwgLy8vXG4gICAgICAgICAgICAgICAgZGl2aXNpb25DbGFzc05hbWUgPSBpbXBvcnRlZENsYXNzTmFtZSwgIC8vL1xuICAgICAgICAgICAgICAgIHRva2VucyA9IGltcG9ydGVkVG9rZW5zOyAgLy8vXG5cbiAgICAgICAgICBkaXZpc2lvbk1hcmtkb3duTm9kZS5zZXREaXZpc2lvbkNsYXNzTmFtZShkaXZpc2lvbkNsYXNzTmFtZSk7XG5cbiAgICAgICAgICBpbmNsdWRlRGlyZWN0aXZlVHJhbnNmb3JtID0gSW5jbHVkZURpcmVjdGl2ZVRyYW5zZm9ybS5mcm9tRGl2aXNpb25NYXJrZG93bk5vZGVBbmRUb2tlbnMoZGl2aXNpb25NYXJrZG93bk5vZGUsIHRva2Vucyk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gaW5jbHVkZURpcmVjdGl2ZVRyYW5zZm9ybTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUnVsZU5hbWVDaGlsZE5vZGVzQW5kT3BhY2l0eShydWxlTmFtZSwgY2hpbGROb2Rlcywgb3BhY2l0eSkgeyByZXR1cm4gTWFya2Rvd25Ob2RlLmZyb21SdWxlTmFtZUNoaWxkTm9kZXNBbmRPcGFjaXR5KEluY2x1ZGVEaXJlY3RpdmVNYXJrZG93bk5vZGUsIHJ1bGVOYW1lLCBjaGlsZE5vZGVzLCBvcGFjaXR5KTsgfVxufVxuIl0sIm5hbWVzIjpbIkluY2x1ZGVEaXJlY3RpdmVNYXJrZG93bk5vZGUiLCJmaWxlUGF0aCIsImNvbnRleHQiLCJmcm9tRmlyc3RMYXN0Q2hpbGROb2RlIiwiZmlyc3RMYXN0Q2hpbGROb2RlIiwiZmlyc3RMYXN0Q2hpbGROb2RlUGF0aE1hcmtkb3duTm9kZSIsIlBhdGhNYXJrZG93bk5vZGUiLCJwYXRoTWFya2Rvd25Ob2RlIiwicGF0aE1hcmtkb3duTm9kZVBhdGgiLCJwYXRoIiwicmVzb2x2ZUluY2x1ZGUiLCJpbmNsdWRlRGlyZWN0aXZlVHJhbnNmb3JtIiwiaW1wb3J0ZXIiLCJpbXBvcnRlZE5vZGUiLCJpbXBvcnRlZFRva2VucyIsImltcG9ydGVkQ2xhc3NOYW1lIiwidG9wbW9zdE1hcmtkb3duTm9kZSIsImZpcnN0RGl2aXNpb25NYXJrZG93bk5vZGUiLCJyZW1vdmVGaXJzdERpdmlzaW9uTWFya2Rvd25Ob2RlIiwiZGl2aXNpb25NYXJrZG93bk5vZGUiLCJkaXZpc2lvbkNsYXNzTmFtZSIsInRva2VucyIsInNldERpdmlzaW9uQ2xhc3NOYW1lIiwiSW5jbHVkZURpcmVjdGl2ZVRyYW5zZm9ybSIsImZyb21EaXZpc2lvbk1hcmtkb3duTm9kZUFuZFRva2VucyIsImZyb21SdWxlTmFtZUNoaWxkTm9kZXNBbmRPcGFjaXR5IiwicnVsZU5hbWUiLCJjaGlsZE5vZGVzIiwib3BhY2l0eSIsIk1hcmtkb3duTm9kZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFNcUJBOzs7K0RBSkk7MkRBQ0k7dUVBQ1M7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRXZCLElBQUEsQUFBTUEsNkNBQU47Y0FBTUE7YUFBQUE7Z0NBQUFBO2VBQU4sa0JBQU1BOztrQkFBQUE7O1lBQ25CQyxLQUFBQTttQkFBQUEsU0FBQUEsU0FBU0MsT0FBTztnQkFDZCxJQUFNRCxXQUFXLElBQUksQ0FBQ0Usc0JBQXNCLENBQUMsU0FBQ0M7b0JBQzVDLElBQUlILFdBQVc7b0JBRWYsSUFBTUkscUNBQXNDRCxBQUFrQixZQUFsQkEsb0JBQThCRSxhQUFnQjtvQkFFMUYsSUFBSUQsb0NBQW9DO3dCQUN0QyxJQUFNRSxtQkFBbUJILG9CQUNuQkksdUJBQXVCRCxpQkFBaUJFLElBQUksQ0FBQ1A7d0JBRW5ERCxXQUFXTyxzQkFBc0IsR0FBRztvQkFDdEM7b0JBRUEsT0FBT1A7Z0JBQ1Q7Z0JBRUEsT0FBT0E7WUFDVDs7O1lBRUFTLEtBQUFBO21CQUFBQSxTQUFBQSxlQUFlUixPQUFPO2dCQUNwQixJQUFJUyw0QkFBNEI7Z0JBRWhDLElBQU1WLFdBQVcsSUFBSSxDQUFDQSxRQUFRLENBQUNDO2dCQUUvQixJQUFJRCxhQUFhLE1BQU07b0JBQ3JCLElBQU0sQUFBRVcsV0FBYVYsUUFBYlU7b0JBRVJBLFNBQVNYLFVBQVVDO29CQUVuQiw0QkFFcUNBLFFBRjdCVyxjQUFBQSxrREFBZSx3REFFY1gsUUFEN0JZLGdCQUFBQSxzREFBaUIsNkRBQ1laLFFBQTdCYSxtQkFBQUEsNERBQW9CO29CQUU1QixJQUFJRixpQkFBaUIsTUFBTTt3QkFDekIsT0FBT1gsUUFBUVcsWUFBWTt3QkFDM0IsT0FBT1gsUUFBUVksY0FBYzt3QkFDN0IsT0FBT1osUUFBUWEsaUJBQWlCO3dCQUVoQyxJQUFNQyxzQkFBc0JILGNBQ3RCSSw0QkFBNEJELG9CQUFvQkUsK0JBQStCO3dCQUVyRixJQUFJRCw4QkFBOEIsTUFBTTs0QkFDdEMsSUFBTUUsdUJBQXVCRiwyQkFDdkJHLG9CQUFvQkwsbUJBQ3BCTSxTQUFTUCxnQkFBaUIsR0FBRzs0QkFFbkNLLHFCQUFxQkcsb0JBQW9CLENBQUNGOzRCQUUxQ1QsNEJBQTRCWSx5QkFBeUIsQ0FBQ0MsaUNBQWlDLENBQUNMLHNCQUFzQkU7d0JBQ2hIO29CQUNGO2dCQUNGO2dCQUVBLE9BQU9WO1lBQ1Q7Ozs7WUFFT2MsS0FBQUE7bUJBQVAsU0FBT0EsaUNBQWlDQyxRQUFRLEVBQUVDLFVBQVUsRUFBRUMsT0FBTztnQkFBSSxPQUFPQyxpQkFBWSxDQUFDSixnQ0FBZ0MsQ0F6RDFHekIsOEJBeUR5STBCLFVBQVVDLFlBQVlDO1lBQVU7OztXQXpEeks1QjtFQUFxQzZCLGlCQUFZIn0=