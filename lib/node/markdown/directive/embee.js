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
var _imported = /*#__PURE__*/ _interop_require_default(require("../../../replacement/imported"));
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
var last = _necessary.arrayUtilities.last;
var EmbedDirectiveMarkdownNode = /*#__PURE__*/ function(DirectiveMarkdownNode) {
    _inherits(EmbedDirectiveMarkdownNode, DirectiveMarkdownNode);
    var _super = _create_super(EmbedDirectiveMarkdownNode);
    function EmbedDirectiveMarkdownNode() {
        _class_call_check(this, EmbedDirectiveMarkdownNode);
        return _super.apply(this, arguments);
    }
    _create_class(EmbedDirectiveMarkdownNode, [
        {
            key: "import",
            value: function _import(context) {
                var importedReplacement = null;
                var _context_importer = context.importer, importer = _context_importer === void 0 ? null : _context_importer;
                if (importer !== null) {
                    var filePath = this.filePath(context);
                    importer(filePath, context);
                    var _context_importedNode = context.importedNode, importedNode = _context_importedNode === void 0 ? null : _context_importedNode, _context_importedTokens = context.importedTokens, importedTokens = _context_importedTokens === void 0 ? null : _context_importedTokens;
                    if (importedNode !== null) {
                        var node = importedNode, tokens = importedTokens; ///
                        importedReplacement = _imported.default.fromNodeAndTokens(node, tokens);
                        delete context.importedNode;
                        delete context.importedTokens;
                        delete context.importedClassName;
                    }
                }
                return importedReplacement;
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
                return _directive.default.fromRuleNameChildNodesAndOpacity(EmbedDirectiveMarkdownNode, ruleName, childNodes, opacity);
            }
        }
    ]);
    return EmbedDirectiveMarkdownNode;
}(_directive.default);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9ub2RlL21hcmtkb3duL2RpcmVjdGl2ZS9lbWJlZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgYXJyYXlVdGlsaXRpZXMgfSBmcm9tIFwibmVjZXNzYXJ5XCI7XG5cbmltcG9ydCBJbXBvcnRlZFJlcGxhY2VtZW50IGZyb20gXCIuLi8uLi8uLi9yZXBsYWNlbWVudC9pbXBvcnRlZFwiO1xuaW1wb3J0IERpcmVjdGl2ZU1hcmtkb3duTm9kZSBmcm9tIFwiLi4vLi4vLi4vbm9kZS9tYXJrZG93bi9kaXJlY3RpdmVcIjtcblxuY29uc3QgeyBsYXN0IH0gPSBhcnJheVV0aWxpdGllcztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRW1iZWREaXJlY3RpdmVNYXJrZG93bk5vZGUgZXh0ZW5kcyBEaXJlY3RpdmVNYXJrZG93bk5vZGUge1xuICBpbXBvcnQoY29udGV4dCkge1xuICAgIGxldCBpbXBvcnRlZFJlcGxhY2VtZW50ID0gbnVsbDtcblxuICAgIGNvbnN0IHsgaW1wb3J0ZXIgPSBudWxsIH0gPSBjb250ZXh0O1xuXG4gICAgaWYgKGltcG9ydGVyICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBmaWxlUGF0aCA9IHRoaXMuZmlsZVBhdGgoY29udGV4dCk7XG5cbiAgICAgIGltcG9ydGVyKGZpbGVQYXRoLCBjb250ZXh0KTtcblxuICAgICAgY29uc3QgeyBpbXBvcnRlZE5vZGUgPSBudWxsLFxuICAgICAgICAgICAgICBpbXBvcnRlZFRva2VucyA9IG51bGwgfSA9IGNvbnRleHQ7XG5cbiAgICAgIGlmIChpbXBvcnRlZE5vZGUgIT09IG51bGwpIHtcbiAgICAgICAgY29uc3Qgbm9kZSA9IGltcG9ydGVkTm9kZSwgIC8vL1xuICAgICAgICAgICAgICB0b2tlbnMgPSBpbXBvcnRlZFRva2VuczsgIC8vL1xuXG4gICAgICAgIGltcG9ydGVkUmVwbGFjZW1lbnQgPSBJbXBvcnRlZFJlcGxhY2VtZW50LmZyb21Ob2RlQW5kVG9rZW5zKG5vZGUsIHRva2Vucyk7XG5cbiAgICAgICAgZGVsZXRlIGNvbnRleHQuaW1wb3J0ZWROb2RlO1xuICAgICAgICBkZWxldGUgY29udGV4dC5pbXBvcnRlZFRva2VucztcbiAgICAgICAgZGVsZXRlIGNvbnRleHQuaW1wb3J0ZWRDbGFzc05hbWU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGltcG9ydGVkUmVwbGFjZW1lbnQ7XG4gIH1cblxuICBmaWxlUGF0aChjb250ZXh0KSB7XG4gICAgY29uc3QgY2hpbGROb2RlcyA9IHRoaXMuZ2V0Q2hpbGROb2RlcygpLFxuICAgICAgICAgIGxhc3RDaGlsZE5vZGUgPSBsYXN0KGNoaWxkTm9kZXMpLFxuICAgICAgICAgIHBhdGhUZXJtaW5hbE5vZGUgID0gbGFzdENoaWxkTm9kZSwgLy8vXG4gICAgICAgICAgcGF0aFRlcm1pbmFsTm9kZUNvbnRlbnQgPSBwYXRoVGVybWluYWxOb2RlLmdldENvbnRlbnQoKSxcbiAgICAgICAgICBmaWxlUGF0aCA9IHBhdGhUZXJtaW5hbE5vZGVDb250ZW50OyAvLy9cblxuICAgIHJldHVybiBmaWxlUGF0aDtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUnVsZU5hbWVDaGlsZE5vZGVzQW5kT3BhY2l0eShydWxlTmFtZSwgY2hpbGROb2Rlcywgb3BhY2l0eSkgeyByZXR1cm4gRGlyZWN0aXZlTWFya2Rvd25Ob2RlLmZyb21SdWxlTmFtZUNoaWxkTm9kZXNBbmRPcGFjaXR5KEVtYmVkRGlyZWN0aXZlTWFya2Rvd25Ob2RlLCBydWxlTmFtZSwgY2hpbGROb2Rlcywgb3BhY2l0eSk7IH1cbn1cbiJdLCJuYW1lcyI6WyJFbWJlZERpcmVjdGl2ZU1hcmtkb3duTm9kZSIsImxhc3QiLCJhcnJheVV0aWxpdGllcyIsImltcG9ydCIsImNvbnRleHQiLCJpbXBvcnRlZFJlcGxhY2VtZW50IiwiaW1wb3J0ZXIiLCJmaWxlUGF0aCIsImltcG9ydGVkTm9kZSIsImltcG9ydGVkVG9rZW5zIiwibm9kZSIsInRva2VucyIsIkltcG9ydGVkUmVwbGFjZW1lbnQiLCJmcm9tTm9kZUFuZFRva2VucyIsImltcG9ydGVkQ2xhc3NOYW1lIiwiY2hpbGROb2RlcyIsImdldENoaWxkTm9kZXMiLCJsYXN0Q2hpbGROb2RlIiwicGF0aFRlcm1pbmFsTm9kZSIsInBhdGhUZXJtaW5hbE5vZGVDb250ZW50IiwiZ2V0Q29udGVudCIsImZyb21SdWxlTmFtZUNoaWxkTm9kZXNBbmRPcGFjaXR5IiwicnVsZU5hbWUiLCJvcGFjaXR5IiwiRGlyZWN0aXZlTWFya2Rvd25Ob2RlIl0sInJhbmdlTWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7IiwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBU3FCQTs7O3lCQVBVOytEQUVDO2dFQUNFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRWxDLElBQU0sQUFBRUMsT0FBU0MseUJBQWMsQ0FBdkJEO0FBRU8sSUFBQSxBQUFNRCwyQ0FBRCxBQUFMO2NBQU1BOytCQUFBQTthQUFBQTtnQ0FBQUE7OztrQkFBQUE7O1lBQ25CRyxLQUFBQTttQkFBQUEsU0FBQUEsUUFBT0MsT0FBTztnQkFDWixJQUFJQyxzQkFBc0I7Z0JBRTFCLHdCQUE0QkQsUUFBcEJFLFVBQUFBLDBDQUFXO2dCQUVuQixJQUFJQSxhQUFhLE1BQU07b0JBQ3JCLElBQU1DLFdBQVcsSUFBSSxDQUFDQSxRQUFRLENBQUNIO29CQUUvQkUsU0FBU0MsVUFBVUg7b0JBRW5CLDRCQUNrQ0EsUUFEMUJJLGNBQUFBLGtEQUFlLHdEQUNXSixRQUExQkssZ0JBQUFBLHNEQUFpQjtvQkFFekIsSUFBSUQsaUJBQWlCLE1BQU07d0JBQ3pCLElBQU1FLE9BQU9GLGNBQ1BHLFNBQVNGLGdCQUFpQixHQUFHO3dCQUVuQ0osc0JBQXNCTyxpQkFBbUIsQ0FBQ0MsaUJBQWlCLENBQUNILE1BQU1DO3dCQUVsRSxPQUFPUCxRQUFRSSxZQUFZO3dCQUMzQixPQUFPSixRQUFRSyxjQUFjO3dCQUM3QixPQUFPTCxRQUFRVSxpQkFBaUI7b0JBQ2xDO2dCQUNGO2dCQUVBLE9BQU9UO1lBQ1Q7OztZQUVBRSxLQUFBQTttQkFBQUEsU0FBQUEsU0FBU0gsT0FBTztnQkFDZCxJQUFNVyxhQUFhLElBQUksQ0FBQ0MsYUFBYSxJQUMvQkMsZ0JBQWdCaEIsS0FBS2MsYUFDckJHLG1CQUFvQkQsZUFDcEJFLDBCQUEwQkQsaUJBQWlCRSxVQUFVLElBQ3JEYixXQUFXWSx5QkFBeUIsR0FBRztnQkFFN0MsT0FBT1o7WUFDVDs7OztZQUVPYyxLQUFBQTttQkFBUCxTQUFPQSxpQ0FBaUNDLFFBQVEsRUFBRVAsVUFBVSxFQUFFUSxPQUFPO2dCQUFJLE9BQU9DLGtCQUFxQixDQUFDSCxnQ0FBZ0MsQ0F2Q25IckIsNEJBdUNnSnNCLFVBQVVQLFlBQVlRO1lBQVU7OztXQXZDaEx2QjtFQUFtQ3dCLGtCQUFxQiJ9