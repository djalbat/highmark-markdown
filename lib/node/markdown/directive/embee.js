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
var _directive = /*#__PURE__*/ _interop_require_default(require("../../../node/markdown/directive"));
var _embedDirective = /*#__PURE__*/ _interop_require_default(require("../../../replacement/embedDirective"));
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
            key: "resolve",
            value: function resolve(context) {
                var embedDirectiveReplacement = null;
                var importer = context.importer;
                var filePath = this.filePath(context);
                importer(filePath, context);
                var _context_importedNode = context.importedNode, importedNode = _context_importedNode === void 0 ? null : _context_importedNode, _context_importedTokens = context.importedTokens, importedTokens = _context_importedTokens === void 0 ? null : _context_importedTokens;
                if (importedNode !== null) {
                    delete context.importedNode;
                    delete context.importedTokens;
                    var divisionMarkdownNode = importedNode, tokens = importedTokens; ///
                    embedDirectiveReplacement = _embedDirective.default.fromDivisionMarkdownNodeAndTokens(divisionMarkdownNode, tokens);
                }
                return embedDirectiveReplacement;
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9ub2RlL21hcmtkb3duL2RpcmVjdGl2ZS9lbWJlZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgYXJyYXlVdGlsaXRpZXMgfSBmcm9tIFwibmVjZXNzYXJ5XCI7XG5cbmltcG9ydCBEaXJlY3RpdmVNYXJrZG93bk5vZGUgZnJvbSBcIi4uLy4uLy4uL25vZGUvbWFya2Rvd24vZGlyZWN0aXZlXCI7XG5pbXBvcnQgRW1iZWREaXJlY3RpdmVSZXBsYWNlbWVudCBmcm9tIFwiLi4vLi4vLi4vcmVwbGFjZW1lbnQvZW1iZWREaXJlY3RpdmVcIjtcblxuY29uc3QgeyBsYXN0IH0gPSBhcnJheVV0aWxpdGllcztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRW1iZWREaXJlY3RpdmVNYXJrZG93bk5vZGUgZXh0ZW5kcyBEaXJlY3RpdmVNYXJrZG93bk5vZGUge1xuICByZXNvbHZlKGNvbnRleHQpIHtcbiAgICBsZXQgZW1iZWREaXJlY3RpdmVSZXBsYWNlbWVudCA9IG51bGw7XG5cbiAgICBjb25zdCB7IGltcG9ydGVyIH0gPSBjb250ZXh0O1xuXG4gICAgY29uc3QgZmlsZVBhdGggPSB0aGlzLmZpbGVQYXRoKGNvbnRleHQpO1xuXG4gICAgaW1wb3J0ZXIoZmlsZVBhdGgsIGNvbnRleHQpO1xuXG4gICAgY29uc3QgeyBpbXBvcnRlZE5vZGUgPSBudWxsLFxuICAgICAgICAgICAgaW1wb3J0ZWRUb2tlbnMgPSBudWxsIH0gPSBjb250ZXh0O1xuXG4gICAgaWYgKGltcG9ydGVkTm9kZSAhPT0gbnVsbCkge1xuICAgICAgZGVsZXRlIGNvbnRleHQuaW1wb3J0ZWROb2RlO1xuICAgICAgZGVsZXRlIGNvbnRleHQuaW1wb3J0ZWRUb2tlbnM7XG5cbiAgICAgIGNvbnN0IGRpdmlzaW9uTWFya2Rvd25Ob2RlID0gaW1wb3J0ZWROb2RlLCAgLy8vXG4gICAgICAgICAgICB0b2tlbnMgPSBpbXBvcnRlZFRva2VuczsgIC8vL1xuXG4gICAgICBlbWJlZERpcmVjdGl2ZVJlcGxhY2VtZW50ID0gRW1iZWREaXJlY3RpdmVSZXBsYWNlbWVudC5mcm9tRGl2aXNpb25NYXJrZG93bk5vZGVBbmRUb2tlbnMoZGl2aXNpb25NYXJrZG93bk5vZGUsIHRva2Vucyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGVtYmVkRGlyZWN0aXZlUmVwbGFjZW1lbnQ7XG4gIH1cblxuICBmaWxlUGF0aChjb250ZXh0KSB7XG4gICAgY29uc3QgY2hpbGROb2RlcyA9IHRoaXMuZ2V0Q2hpbGROb2RlcygpLFxuICAgICAgICAgIGxhc3RDaGlsZE5vZGUgPSBsYXN0KGNoaWxkTm9kZXMpLFxuICAgICAgICAgIHBhdGhUZXJtaW5hbE5vZGUgID0gbGFzdENoaWxkTm9kZSwgLy8vXG4gICAgICAgICAgcGF0aFRlcm1pbmFsTm9kZUNvbnRlbnQgPSBwYXRoVGVybWluYWxOb2RlLmdldENvbnRlbnQoKSxcbiAgICAgICAgICBmaWxlUGF0aCA9IHBhdGhUZXJtaW5hbE5vZGVDb250ZW50OyAvLy9cblxuICAgIHJldHVybiBmaWxlUGF0aDtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUnVsZU5hbWVDaGlsZE5vZGVzQW5kT3BhY2l0eShydWxlTmFtZSwgY2hpbGROb2Rlcywgb3BhY2l0eSkgeyByZXR1cm4gRGlyZWN0aXZlTWFya2Rvd25Ob2RlLmZyb21SdWxlTmFtZUNoaWxkTm9kZXNBbmRPcGFjaXR5KEVtYmVkRGlyZWN0aXZlTWFya2Rvd25Ob2RlLCBydWxlTmFtZSwgY2hpbGROb2Rlcywgb3BhY2l0eSk7IH1cbn1cbiJdLCJuYW1lcyI6WyJFbWJlZERpcmVjdGl2ZU1hcmtkb3duTm9kZSIsImxhc3QiLCJhcnJheVV0aWxpdGllcyIsInJlc29sdmUiLCJjb250ZXh0IiwiZW1iZWREaXJlY3RpdmVSZXBsYWNlbWVudCIsImltcG9ydGVyIiwiZmlsZVBhdGgiLCJpbXBvcnRlZE5vZGUiLCJpbXBvcnRlZFRva2VucyIsImRpdmlzaW9uTWFya2Rvd25Ob2RlIiwidG9rZW5zIiwiRW1iZWREaXJlY3RpdmVSZXBsYWNlbWVudCIsImZyb21EaXZpc2lvbk1hcmtkb3duTm9kZUFuZFRva2VucyIsImNoaWxkTm9kZXMiLCJnZXRDaGlsZE5vZGVzIiwibGFzdENoaWxkTm9kZSIsInBhdGhUZXJtaW5hbE5vZGUiLCJwYXRoVGVybWluYWxOb2RlQ29udGVudCIsImdldENvbnRlbnQiLCJmcm9tUnVsZU5hbWVDaGlsZE5vZGVzQW5kT3BhY2l0eSIsInJ1bGVOYW1lIiwib3BhY2l0eSIsIkRpcmVjdGl2ZU1hcmtkb3duTm9kZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFTcUJBOzs7eUJBUFU7Z0VBRUc7cUVBQ0k7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFdEMsSUFBTSxBQUFFQyxPQUFTQyx5QkFBYyxDQUF2QkQ7QUFFTyxJQUFBLEFBQU1ELDJDQUFELEFBQUw7Y0FBTUE7K0JBQUFBO2FBQUFBO2dDQUFBQTs7O2tCQUFBQTs7WUFDbkJHLEtBQUFBO21CQUFBQSxTQUFBQSxRQUFRQyxPQUFPO2dCQUNiLElBQUlDLDRCQUE0QjtnQkFFaEMsSUFBTSxBQUFFQyxXQUFhRixRQUFiRTtnQkFFUixJQUFNQyxXQUFXLElBQUksQ0FBQ0EsUUFBUSxDQUFDSDtnQkFFL0JFLFNBQVNDLFVBQVVIO2dCQUVuQiw0QkFDa0NBLFFBRDFCSSxjQUFBQSxrREFBZSx3REFDV0osUUFBMUJLLGdCQUFBQSxzREFBaUI7Z0JBRXpCLElBQUlELGlCQUFpQixNQUFNO29CQUN6QixPQUFPSixRQUFRSSxZQUFZO29CQUMzQixPQUFPSixRQUFRSyxjQUFjO29CQUU3QixJQUFNQyx1QkFBdUJGLGNBQ3ZCRyxTQUFTRixnQkFBaUIsR0FBRztvQkFFbkNKLDRCQUE0Qk8sdUJBQXlCLENBQUNDLGlDQUFpQyxDQUFDSCxzQkFBc0JDO2dCQUNoSDtnQkFFQSxPQUFPTjtZQUNUOzs7WUFFQUUsS0FBQUE7bUJBQUFBLFNBQUFBLFNBQVNILE9BQU87Z0JBQ2QsSUFBTVUsYUFBYSxJQUFJLENBQUNDLGFBQWEsSUFDL0JDLGdCQUFnQmYsS0FBS2EsYUFDckJHLG1CQUFvQkQsZUFDcEJFLDBCQUEwQkQsaUJBQWlCRSxVQUFVLElBQ3JEWixXQUFXVyx5QkFBeUIsR0FBRztnQkFFN0MsT0FBT1g7WUFDVDs7OztZQUVPYSxLQUFBQTttQkFBUCxTQUFPQSxpQ0FBaUNDLFFBQVEsRUFBRVAsVUFBVSxFQUFFUSxPQUFPO2dCQUFJLE9BQU9DLGtCQUFxQixDQUFDSCxnQ0FBZ0MsQ0FwQ25IcEIsNEJBb0NnSnFCLFVBQVVQLFlBQVlRO1lBQVU7OztXQXBDaEx0QjtFQUFtQ3VCLGtCQUFxQiJ9