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
                return _directive.default.fromRuleNameChildNodesAndOpacity(IncludeDirectiveMarkdownNode, ruleName, childNodes, opacity);
            }
        }
    ]);
    return IncludeDirectiveMarkdownNode;
}(_directive.default);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9ub2RlL21hcmtkb3duL2RpcmVjdGl2ZS9pbmNsdWRlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgUGF0aE1hcmtkb3duTm9kZSBmcm9tIFwiLi4vcGF0aFwiO1xuaW1wb3J0IERpcmVjdGl2ZU1hcmtkb3duTm9kZSBmcm9tIFwiLi4vLi4vLi4vbm9kZS9tYXJrZG93bi9kaXJlY3RpdmVcIjtcbmltcG9ydCBJbmNsdWRlRGlyZWN0aXZlUmVwbGFjZW1lbnQgZnJvbSBcIi4uLy4uLy4uL3JlcGxhY2VtZW50L2luY2x1ZGVEaXJlY3RpdmVcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW5jbHVkZURpcmVjdGl2ZU1hcmtkb3duTm9kZSBleHRlbmRzIERpcmVjdGl2ZU1hcmtkb3duTm9kZSB7XG4gIHJlc29sdmUoY29udGV4dCkge1xuICAgIGxldCBpbmNsdWRlRGlyZWN0aXZlUmVwbGFjZW1lbnQgPSBudWxsO1xuXG4gICAgY29uc3QgZmlsZVBhdGggPSB0aGlzLmZpbGVQYXRoKGNvbnRleHQpO1xuXG4gICAgaWYgKGZpbGVQYXRoICE9PSBudWxsKSB7XG4gICAgICBjb25zdCB7IGltcG9ydGVyIH0gPSBjb250ZXh0O1xuXG4gICAgICBpbXBvcnRlcihmaWxlUGF0aCwgY29udGV4dCk7XG5cbiAgICAgIGNvbnN0IHsgaW1wb3J0ZWROb2RlID0gbnVsbCxcbiAgICAgICAgICAgICAgaW1wb3J0ZWRUb2tlbnMgPSBudWxsLFxuICAgICAgICAgICAgICBpbXBvcnRlZENsYXNzTmFtZSA9IG51bGwgfSA9IGNvbnRleHQ7XG5cbiAgICAgIGlmIChpbXBvcnRlZE5vZGUgIT09IG51bGwpIHtcbiAgICAgICAgZGVsZXRlIGNvbnRleHQuaW1wb3J0ZWROb2RlO1xuICAgICAgICBkZWxldGUgY29udGV4dC5pbXBvcnRlZFRva2VucztcbiAgICAgICAgZGVsZXRlIGNvbnRleHQuaW1wb3J0ZWRDbGFzc05hbWU7XG5cbiAgICAgICAgY29uc3QgZGl2aXNpb25NYXJrZG93bk5vZGUgPSBpbXBvcnRlZE5vZGUsICAvLy9cbiAgICAgICAgICAgICAgZGl2aXNpb25DbGFzc05hbWUgPSBpbXBvcnRlZENsYXNzTmFtZSwgIC8vL1xuICAgICAgICAgICAgICB0b2tlbnMgPSBpbXBvcnRlZFRva2VuczsgIC8vL1xuXG4gICAgICAgIGRpdmlzaW9uTWFya2Rvd25Ob2RlLnNldERpdmlzaW9uQ2xhc3NOYW1lKGRpdmlzaW9uQ2xhc3NOYW1lKTtcblxuICAgICAgICBpbmNsdWRlRGlyZWN0aXZlUmVwbGFjZW1lbnQgPSBJbmNsdWRlRGlyZWN0aXZlUmVwbGFjZW1lbnQuZnJvbURpdmlzaW9uTWFya2Rvd25Ob2RlQW5kVG9rZW5zKGRpdmlzaW9uTWFya2Rvd25Ob2RlLCB0b2tlbnMpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBpbmNsdWRlRGlyZWN0aXZlUmVwbGFjZW1lbnQ7XG4gIH1cblxuICBmaWxlUGF0aChjb250ZXh0KSB7XG4gICAgY29uc3QgZmlsZVBhdGggPSB0aGlzLmZyb21GaXJzdExhc3RDaGlsZE5vZGUoKGZpcnN0TGFzdENoaWxkTm9kZSkgPT4ge1xuICAgICAgbGV0IGZpbGVQYXRoID0gbnVsbDtcblxuICAgICAgY29uc3QgZmlyc3RMYXN0Q2hpbGROb2RlUGF0aE1hcmtkb3duTm9kZSA9IChmaXJzdExhc3RDaGlsZE5vZGUgaW5zdGFuY2VvZiBQYXRoTWFya2Rvd25Ob2RlKTtcblxuICAgICAgaWYgKGZpcnN0TGFzdENoaWxkTm9kZVBhdGhNYXJrZG93bk5vZGUpIHtcbiAgICAgICAgY29uc3QgcGF0aE1hcmtkb3duTm9kZSA9IGZpcnN0TGFzdENoaWxkTm9kZSwgLy8vXG4gICAgICAgICAgICAgIHBhdGhNYXJrZG93bk5vZGVDb250ZW50ID0gcGF0aE1hcmtkb3duTm9kZS5nZXRDb250ZW50KCk7XG5cbiAgICAgICAgZmlsZVBhdGggPSBwYXRoTWFya2Rvd25Ob2RlQ29udGVudDsgLy8vXG4gICAgICB9XG5cbiAgICAgIHJldHVybiBmaWxlUGF0aDtcbiAgICB9KTtcblxuICAgIHJldHVybiBmaWxlUGF0aDtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUnVsZU5hbWVDaGlsZE5vZGVzQW5kT3BhY2l0eShydWxlTmFtZSwgY2hpbGROb2Rlcywgb3BhY2l0eSkgeyByZXR1cm4gRGlyZWN0aXZlTWFya2Rvd25Ob2RlLmZyb21SdWxlTmFtZUNoaWxkTm9kZXNBbmRPcGFjaXR5KEluY2x1ZGVEaXJlY3RpdmVNYXJrZG93bk5vZGUsIHJ1bGVOYW1lLCBjaGlsZE5vZGVzLCBvcGFjaXR5KTsgfVxufVxuIl0sIm5hbWVzIjpbIkluY2x1ZGVEaXJlY3RpdmVNYXJrZG93bk5vZGUiLCJyZXNvbHZlIiwiY29udGV4dCIsImluY2x1ZGVEaXJlY3RpdmVSZXBsYWNlbWVudCIsImZpbGVQYXRoIiwiaW1wb3J0ZXIiLCJpbXBvcnRlZE5vZGUiLCJpbXBvcnRlZFRva2VucyIsImltcG9ydGVkQ2xhc3NOYW1lIiwiZGl2aXNpb25NYXJrZG93bk5vZGUiLCJkaXZpc2lvbkNsYXNzTmFtZSIsInRva2VucyIsInNldERpdmlzaW9uQ2xhc3NOYW1lIiwiSW5jbHVkZURpcmVjdGl2ZVJlcGxhY2VtZW50IiwiZnJvbURpdmlzaW9uTWFya2Rvd25Ob2RlQW5kVG9rZW5zIiwiZnJvbUZpcnN0TGFzdENoaWxkTm9kZSIsImZpcnN0TGFzdENoaWxkTm9kZSIsImZpcnN0TGFzdENoaWxkTm9kZVBhdGhNYXJrZG93bk5vZGUiLCJQYXRoTWFya2Rvd25Ob2RlIiwicGF0aE1hcmtkb3duTm9kZSIsInBhdGhNYXJrZG93bk5vZGVDb250ZW50IiwiZ2V0Q29udGVudCIsImZyb21SdWxlTmFtZUNoaWxkTm9kZXNBbmRPcGFjaXR5IiwicnVsZU5hbWUiLCJjaGlsZE5vZGVzIiwib3BhY2l0eSIsIkRpcmVjdGl2ZU1hcmtkb3duTm9kZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFNcUJBOzs7MkRBSlE7Z0VBQ0s7dUVBQ007Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRXpCLElBQUEsQUFBTUEsNkNBQU47Y0FBTUE7YUFBQUE7Z0NBQUFBO2VBQU4sa0JBQU1BOztrQkFBQUE7O1lBQ25CQyxLQUFBQTttQkFBQUEsU0FBQUEsUUFBUUMsT0FBTztnQkFDYixJQUFJQyw4QkFBOEI7Z0JBRWxDLElBQU1DLFdBQVcsSUFBSSxDQUFDQSxRQUFRLENBQUNGO2dCQUUvQixJQUFJRSxhQUFhLE1BQU07b0JBQ3JCLElBQU0sQUFBRUMsV0FBYUgsUUFBYkc7b0JBRVJBLFNBQVNELFVBQVVGO29CQUVuQiw0QkFFcUNBLFFBRjdCSSxjQUFBQSxrREFBZSx3REFFY0osUUFEN0JLLGdCQUFBQSxzREFBaUIsNkRBQ1lMLFFBQTdCTSxtQkFBQUEsNERBQW9CO29CQUU1QixJQUFJRixpQkFBaUIsTUFBTTt3QkFDekIsT0FBT0osUUFBUUksWUFBWTt3QkFDM0IsT0FBT0osUUFBUUssY0FBYzt3QkFDN0IsT0FBT0wsUUFBUU0saUJBQWlCO3dCQUVoQyxJQUFNQyx1QkFBdUJILGNBQ3ZCSSxvQkFBb0JGLG1CQUNwQkcsU0FBU0osZ0JBQWlCLEdBQUc7d0JBRW5DRSxxQkFBcUJHLG9CQUFvQixDQUFDRjt3QkFFMUNQLDhCQUE4QlUseUJBQTJCLENBQUNDLGlDQUFpQyxDQUFDTCxzQkFBc0JFO29CQUNwSDtnQkFDRjtnQkFFQSxPQUFPUjtZQUNUOzs7WUFFQUMsS0FBQUE7bUJBQUFBLFNBQUFBLFNBQVNGLE9BQU87Z0JBQ2QsSUFBTUUsV0FBVyxJQUFJLENBQUNXLHNCQUFzQixDQUFDLFNBQUNDO29CQUM1QyxJQUFJWixXQUFXO29CQUVmLElBQU1hLHFDQUFzQ0QsQUFBa0IsWUFBbEJBLG9CQUE4QkUsYUFBZ0I7b0JBRTFGLElBQUlELG9DQUFvQzt3QkFDdEMsSUFBTUUsbUJBQW1CSCxvQkFDbkJJLDBCQUEwQkQsaUJBQWlCRSxVQUFVO3dCQUUzRGpCLFdBQVdnQix5QkFBeUIsR0FBRztvQkFDekM7b0JBRUEsT0FBT2hCO2dCQUNUO2dCQUVBLE9BQU9BO1lBQ1Q7Ozs7WUFFT2tCLEtBQUFBO21CQUFQLFNBQU9BLGlDQUFpQ0MsUUFBUSxFQUFFQyxVQUFVLEVBQUVDLE9BQU87Z0JBQUksT0FBT0Msa0JBQXFCLENBQUNKLGdDQUFnQyxDQXBEbkh0Qiw4QkFvRGtKdUIsVUFBVUMsWUFBWUM7WUFBVTs7O1dBcERsTHpCO0VBQXFDMEIsa0JBQXFCIn0=