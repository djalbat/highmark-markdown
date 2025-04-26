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
var _markdown = /*#__PURE__*/ _interop_require_default(require("../../../node/markdown"));
var _path = /*#__PURE__*/ _interop_require_default(require("../../../node/markdown/path"));
var _embedDirective = /*#__PURE__*/ _interop_require_default(require("../../../transform/embedDirective"));
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
var EmbedDirectiveMarkdownNode = /*#__PURE__*/ function(MarkdownNode) {
    _inherits(EmbedDirectiveMarkdownNode, MarkdownNode);
    function EmbedDirectiveMarkdownNode() {
        _class_call_check(this, EmbedDirectiveMarkdownNode);
        return _call_super(this, EmbedDirectiveMarkdownNode, arguments);
    }
    _create_class(EmbedDirectiveMarkdownNode, [
        {
            key: "resolveEmbedding",
            value: function resolveEmbedding(context) {
                var embedDirectiveTransform = null;
                var filePath = this.filePath(context);
                if (filePath !== null) {
                    var importer = context.importer;
                    importer(filePath, context);
                    var _context_importedNode = context.importedNode, importedNode = _context_importedNode === void 0 ? null : _context_importedNode, _context_importedTokens = context.importedTokens, importedTokens = _context_importedTokens === void 0 ? null : _context_importedTokens;
                    if (importedNode !== null) {
                        delete context.importedNode;
                        delete context.importedTokens;
                        var node = importedNode, divisionMarkdownNode = (0, _query.divisionMarkdownNodeFromNode)(node);
                        if (divisionMarkdownNode !== null) {
                            var node1 = divisionMarkdownNode, tokens = importedTokens, subDivisionMarkdownNode = (0, _query.subDivisionMarkdownNodeFromNode)(node1);
                            if (subDivisionMarkdownNode !== null) {
                                divisionMarkdownNode.removeSubDivisionMarkdownNode(subDivisionMarkdownNode);
                                embedDirectiveTransform = _embedDirective.default.fromSubDivisionMarkdownNodeAndTokens(subDivisionMarkdownNode, tokens);
                            }
                        }
                    }
                }
                return embedDirectiveTransform;
            }
        },
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
        }
    ], [
        {
            key: "fromRuleNameChildNodesAndOpacity",
            value: function fromRuleNameChildNodesAndOpacity(ruleName, childNodes, opacity) {
                return _markdown.default.fromRuleNameChildNodesAndOpacity(EmbedDirectiveMarkdownNode, ruleName, childNodes, opacity);
            }
        }
    ]);
    return EmbedDirectiveMarkdownNode;
}(_markdown.default);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9ub2RlL21hcmtkb3duL2RpcmVjdGl2ZS9lbWJlZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IE1hcmtkb3duTm9kZSBmcm9tIFwiLi4vLi4vLi4vbm9kZS9tYXJrZG93blwiO1xuaW1wb3J0IFBhdGhNYXJrZG93bk5vZGUgZnJvbSBcIi4uLy4uLy4uL25vZGUvbWFya2Rvd24vcGF0aFwiO1xuaW1wb3J0IEVtYmVkRGlyZWN0aXZlVHJhbnNmb3JtIGZyb20gXCIuLi8uLi8uLi90cmFuc2Zvcm0vZW1iZWREaXJlY3RpdmVcIjtcblxuaW1wb3J0IHsgZGl2aXNpb25NYXJrZG93bk5vZGVGcm9tTm9kZSwgc3ViRGl2aXNpb25NYXJrZG93bk5vZGVGcm9tTm9kZSB9IGZyb20gXCIuLi8uLi8uLi91dGlsaXRpZXMvcXVlcnlcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRW1iZWREaXJlY3RpdmVNYXJrZG93bk5vZGUgZXh0ZW5kcyBNYXJrZG93bk5vZGUge1xuICByZXNvbHZlRW1iZWRkaW5nKGNvbnRleHQpIHtcbiAgICBsZXQgZW1iZWREaXJlY3RpdmVUcmFuc2Zvcm0gPSBudWxsO1xuXG4gICAgY29uc3QgZmlsZVBhdGggPSB0aGlzLmZpbGVQYXRoKGNvbnRleHQpO1xuXG4gICAgaWYgKGZpbGVQYXRoICE9PSBudWxsKSB7XG4gICAgICBjb25zdCB7IGltcG9ydGVyIH0gPSBjb250ZXh0O1xuXG4gICAgICBpbXBvcnRlcihmaWxlUGF0aCwgY29udGV4dCk7XG5cbiAgICAgIGNvbnN0IHsgaW1wb3J0ZWROb2RlID0gbnVsbCxcbiAgICAgICAgICAgICAgaW1wb3J0ZWRUb2tlbnMgPSBudWxsIH0gPSBjb250ZXh0O1xuXG4gICAgICBpZiAoaW1wb3J0ZWROb2RlICE9PSBudWxsKSB7XG4gICAgICAgIGRlbGV0ZSBjb250ZXh0LmltcG9ydGVkTm9kZTtcbiAgICAgICAgZGVsZXRlIGNvbnRleHQuaW1wb3J0ZWRUb2tlbnM7XG5cbiAgICAgICAgY29uc3Qgbm9kZSA9IGltcG9ydGVkTm9kZSwgIC8vL1xuICAgICAgICAgICAgICBkaXZpc2lvbk1hcmtkb3duTm9kZSA9IGRpdmlzaW9uTWFya2Rvd25Ob2RlRnJvbU5vZGUobm9kZSk7XG5cbiAgICAgICAgaWYgKGRpdmlzaW9uTWFya2Rvd25Ob2RlICE9PSBudWxsKSB7XG4gICAgICAgICAgY29uc3Qgbm9kZSA9IGRpdmlzaW9uTWFya2Rvd25Ob2RlLCAgLy8vXG4gICAgICAgICAgICAgICAgdG9rZW5zID0gaW1wb3J0ZWRUb2tlbnMsICAvLy9cbiAgICAgICAgICAgICAgICBzdWJEaXZpc2lvbk1hcmtkb3duTm9kZSA9IHN1YkRpdmlzaW9uTWFya2Rvd25Ob2RlRnJvbU5vZGUobm9kZSk7XG5cbiAgICAgICAgICBpZiAoc3ViRGl2aXNpb25NYXJrZG93bk5vZGUgIT09IG51bGwpIHtcbiAgICAgICAgICAgIGRpdmlzaW9uTWFya2Rvd25Ob2RlLnJlbW92ZVN1YkRpdmlzaW9uTWFya2Rvd25Ob2RlKHN1YkRpdmlzaW9uTWFya2Rvd25Ob2RlKTtcblxuICAgICAgICAgICAgZW1iZWREaXJlY3RpdmVUcmFuc2Zvcm0gPSBFbWJlZERpcmVjdGl2ZVRyYW5zZm9ybS5mcm9tU3ViRGl2aXNpb25NYXJrZG93bk5vZGVBbmRUb2tlbnMoc3ViRGl2aXNpb25NYXJrZG93bk5vZGUsIHRva2Vucyk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGVtYmVkRGlyZWN0aXZlVHJhbnNmb3JtO1xuICB9XG5cbiAgZmlsZVBhdGgoY29udGV4dCkge1xuICAgIGNvbnN0IGZpbGVQYXRoID0gdGhpcy5mcm9tRmlyc3RMYXN0Q2hpbGROb2RlKChmaXJzdExhc3RDaGlsZE5vZGUpID0+IHtcbiAgICAgIGxldCBmaWxlUGF0aCA9IG51bGw7XG5cbiAgICAgIGNvbnN0IGZpcnN0TGFzdENoaWxkTm9kZVBhdGhNYXJrZG93bk5vZGUgPSAoZmlyc3RMYXN0Q2hpbGROb2RlIGluc3RhbmNlb2YgUGF0aE1hcmtkb3duTm9kZSk7XG5cbiAgICAgIGlmIChmaXJzdExhc3RDaGlsZE5vZGVQYXRoTWFya2Rvd25Ob2RlKSB7XG4gICAgICAgIGNvbnN0IHBhdGhNYXJrZG93bk5vZGUgPSBmaXJzdExhc3RDaGlsZE5vZGUsIC8vL1xuICAgICAgICAgICAgICBwYXRoTWFya2Rvd25Ob2RlUGF0aCA9IHBhdGhNYXJrZG93bk5vZGUucGF0aChjb250ZXh0KTtcblxuICAgICAgICBmaWxlUGF0aCA9IHBhdGhNYXJrZG93bk5vZGVQYXRoOyAvLy9cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGZpbGVQYXRoO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIGZpbGVQYXRoO1xuICB9XG5cbiAgc3RhdGljIGZyb21SdWxlTmFtZUNoaWxkTm9kZXNBbmRPcGFjaXR5KHJ1bGVOYW1lLCBjaGlsZE5vZGVzLCBvcGFjaXR5KSB7IHJldHVybiBNYXJrZG93bk5vZGUuZnJvbVJ1bGVOYW1lQ2hpbGROb2Rlc0FuZE9wYWNpdHkoRW1iZWREaXJlY3RpdmVNYXJrZG93bk5vZGUsIHJ1bGVOYW1lLCBjaGlsZE5vZGVzLCBvcGFjaXR5KTsgfVxufVxuIl0sIm5hbWVzIjpbIkVtYmVkRGlyZWN0aXZlTWFya2Rvd25Ob2RlIiwicmVzb2x2ZUVtYmVkZGluZyIsImNvbnRleHQiLCJlbWJlZERpcmVjdGl2ZVRyYW5zZm9ybSIsImZpbGVQYXRoIiwiaW1wb3J0ZXIiLCJpbXBvcnRlZE5vZGUiLCJpbXBvcnRlZFRva2VucyIsIm5vZGUiLCJkaXZpc2lvbk1hcmtkb3duTm9kZSIsImRpdmlzaW9uTWFya2Rvd25Ob2RlRnJvbU5vZGUiLCJ0b2tlbnMiLCJzdWJEaXZpc2lvbk1hcmtkb3duTm9kZSIsInN1YkRpdmlzaW9uTWFya2Rvd25Ob2RlRnJvbU5vZGUiLCJyZW1vdmVTdWJEaXZpc2lvbk1hcmtkb3duTm9kZSIsIkVtYmVkRGlyZWN0aXZlVHJhbnNmb3JtIiwiZnJvbVN1YkRpdmlzaW9uTWFya2Rvd25Ob2RlQW5kVG9rZW5zIiwiZnJvbUZpcnN0TGFzdENoaWxkTm9kZSIsImZpcnN0TGFzdENoaWxkTm9kZSIsImZpcnN0TGFzdENoaWxkTm9kZVBhdGhNYXJrZG93bk5vZGUiLCJQYXRoTWFya2Rvd25Ob2RlIiwicGF0aE1hcmtkb3duTm9kZSIsInBhdGhNYXJrZG93bk5vZGVQYXRoIiwicGF0aCIsImZyb21SdWxlTmFtZUNoaWxkTm9kZXNBbmRPcGFjaXR5IiwicnVsZU5hbWUiLCJjaGlsZE5vZGVzIiwib3BhY2l0eSIsIk1hcmtkb3duTm9kZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFRcUJBOzs7K0RBTkk7MkRBQ0k7cUVBQ087cUJBRTBDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUUvRCxJQUFBLEFBQU1BLDJDQUFOO2NBQU1BO2FBQUFBO2dDQUFBQTtlQUFOLGtCQUFNQTs7a0JBQUFBOztZQUNuQkMsS0FBQUE7bUJBQUFBLFNBQUFBLGlCQUFpQkMsT0FBTztnQkFDdEIsSUFBSUMsMEJBQTBCO2dCQUU5QixJQUFNQyxXQUFXLElBQUksQ0FBQ0EsUUFBUSxDQUFDRjtnQkFFL0IsSUFBSUUsYUFBYSxNQUFNO29CQUNyQixJQUFNLEFBQUVDLFdBQWFILFFBQWJHO29CQUVSQSxTQUFTRCxVQUFVRjtvQkFFbkIsNEJBQ2tDQSxRQUQxQkksY0FBQUEsa0RBQWUsd0RBQ1dKLFFBQTFCSyxnQkFBQUEsc0RBQWlCO29CQUV6QixJQUFJRCxpQkFBaUIsTUFBTTt3QkFDekIsT0FBT0osUUFBUUksWUFBWTt3QkFDM0IsT0FBT0osUUFBUUssY0FBYzt3QkFFN0IsSUFBTUMsT0FBT0YsY0FDUEcsdUJBQXVCQyxJQUFBQSxtQ0FBNEIsRUFBQ0Y7d0JBRTFELElBQUlDLHlCQUF5QixNQUFNOzRCQUNqQyxJQUFNRCxRQUFPQyxzQkFDUEUsU0FBU0osZ0JBQ1RLLDBCQUEwQkMsSUFBQUEsc0NBQStCLEVBQUNMOzRCQUVoRSxJQUFJSSw0QkFBNEIsTUFBTTtnQ0FDcENILHFCQUFxQkssNkJBQTZCLENBQUNGO2dDQUVuRFQsMEJBQTBCWSx1QkFBdUIsQ0FBQ0Msb0NBQW9DLENBQUNKLHlCQUF5QkQ7NEJBQ2xIO3dCQUNGO29CQUNGO2dCQUNGO2dCQUVBLE9BQU9SO1lBQ1Q7OztZQUVBQyxLQUFBQTttQkFBQUEsU0FBQUEsU0FBU0YsT0FBTztnQkFDZCxJQUFNRSxXQUFXLElBQUksQ0FBQ2Esc0JBQXNCLENBQUMsU0FBQ0M7b0JBQzVDLElBQUlkLFdBQVc7b0JBRWYsSUFBTWUscUNBQXNDRCxBQUFrQixZQUFsQkEsb0JBQThCRSxhQUFnQjtvQkFFMUYsSUFBSUQsb0NBQW9DO3dCQUN0QyxJQUFNRSxtQkFBbUJILG9CQUNuQkksdUJBQXVCRCxpQkFBaUJFLElBQUksQ0FBQ3JCO3dCQUVuREUsV0FBV2tCLHNCQUFzQixHQUFHO29CQUN0QztvQkFFQSxPQUFPbEI7Z0JBQ1Q7Z0JBRUEsT0FBT0E7WUFDVDs7OztZQUVPb0IsS0FBQUE7bUJBQVAsU0FBT0EsaUNBQWlDQyxRQUFRLEVBQUVDLFVBQVUsRUFBRUMsT0FBTztnQkFBSSxPQUFPQyxpQkFBWSxDQUFDSixnQ0FBZ0MsQ0F6RDFHeEIsNEJBeUR1SXlCLFVBQVVDLFlBQVlDO1lBQVU7OztXQXpEdkszQjtFQUFtQzRCLGlCQUFZIn0=