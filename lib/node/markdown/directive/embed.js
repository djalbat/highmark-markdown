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
var _embed = /*#__PURE__*/ _interop_require_default(require("../../../transform/markdown/directive/embed"));
var _markdown1 = require("../../../utilities/markdown");
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
            key: "resolveEmbedding",
            value: function resolveEmbedding(context) {
                var embedDirectiveMarkdownTransform = null;
                var filePath = this.filePath(context);
                if (filePath !== null) {
                    var importer = context.importer;
                    importer(filePath, context);
                    var _context_importedNode = context.importedNode, importedNode = _context_importedNode === void 0 ? null : _context_importedNode, _context_importedTokens = context.importedTokens, importedTokens = _context_importedTokens === void 0 ? null : _context_importedTokens;
                    if (importedNode !== null) {
                        delete context.importedNode;
                        delete context.importedTokens;
                        var node = importedNode, divisionMarkdownNode = (0, _markdown1.divisionMarkdownNodeFromNode)(node);
                        if (divisionMarkdownNode !== null) {
                            var node1 = divisionMarkdownNode, tokens = importedTokens, subDivisionMarkdownNode = (0, _markdown1.subDivisionMarkdownNodeFromNode)(node1);
                            if (subDivisionMarkdownNode !== null) {
                                divisionMarkdownNode.removeSubDivisionMarkdownNode(subDivisionMarkdownNode);
                                embedDirectiveMarkdownTransform = _embed.default.fromSubDivisionMarkdownNodeAndTokens(subDivisionMarkdownNode, tokens);
                            }
                        }
                    }
                }
                return embedDirectiveMarkdownTransform;
            }
        }
    ], [
        {
            key: "fromRuleNameChildNodesOpacityAndPrecedence",
            value: function fromRuleNameChildNodesOpacityAndPrecedence(ruleName, childNodes, opacity, precedence) {
                return _markdown.default.fromRuleNameChildNodesOpacityAndPrecedence(EmbedDirectiveMarkdownNode, ruleName, childNodes, opacity, precedence);
            }
        }
    ]);
    return EmbedDirectiveMarkdownNode;
}(_markdown.default);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9ub2RlL21hcmtkb3duL2RpcmVjdGl2ZS9lbWJlZC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IE1hcmtkb3duTm9kZSBmcm9tIFwiLi4vLi4vLi4vbm9kZS9tYXJrZG93blwiO1xuaW1wb3J0IFBhdGhNYXJrZG93bk5vZGUgZnJvbSBcIi4uLy4uLy4uL25vZGUvbWFya2Rvd24vcGF0aFwiO1xuaW1wb3J0IEVtYmVkRGlyZWN0aXZlTWFya2Rvd25UcmFuc2Zvcm0gZnJvbSBcIi4uLy4uLy4uL3RyYW5zZm9ybS9tYXJrZG93bi9kaXJlY3RpdmUvZW1iZWRcIjtcblxuaW1wb3J0IHsgZGl2aXNpb25NYXJrZG93bk5vZGVGcm9tTm9kZSwgc3ViRGl2aXNpb25NYXJrZG93bk5vZGVGcm9tTm9kZSB9IGZyb20gXCIuLi8uLi8uLi91dGlsaXRpZXMvbWFya2Rvd25cIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRW1iZWREaXJlY3RpdmVNYXJrZG93bk5vZGUgZXh0ZW5kcyBNYXJrZG93bk5vZGUge1xuICBmaWxlUGF0aChjb250ZXh0KSB7XG4gICAgY29uc3QgZmlsZVBhdGggPSB0aGlzLmZyb21GaXJzdExhc3RDaGlsZE5vZGUoKGZpcnN0TGFzdENoaWxkTm9kZSkgPT4ge1xuICAgICAgbGV0IGZpbGVQYXRoID0gbnVsbDtcblxuICAgICAgY29uc3QgZmlyc3RMYXN0Q2hpbGROb2RlUGF0aE1hcmtkb3duTm9kZSA9IChmaXJzdExhc3RDaGlsZE5vZGUgaW5zdGFuY2VvZiBQYXRoTWFya2Rvd25Ob2RlKTtcblxuICAgICAgaWYgKGZpcnN0TGFzdENoaWxkTm9kZVBhdGhNYXJrZG93bk5vZGUpIHtcbiAgICAgICAgY29uc3QgcGF0aE1hcmtkb3duTm9kZSA9IGZpcnN0TGFzdENoaWxkTm9kZSwgLy8vXG4gICAgICAgICAgICAgIHBhdGhNYXJrZG93bk5vZGVQYXRoID0gcGF0aE1hcmtkb3duTm9kZS5wYXRoKGNvbnRleHQpO1xuXG4gICAgICAgIGZpbGVQYXRoID0gcGF0aE1hcmtkb3duTm9kZVBhdGg7IC8vL1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gZmlsZVBhdGg7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gZmlsZVBhdGg7XG4gIH1cblxuICByZXNvbHZlRW1iZWRkaW5nKGNvbnRleHQpIHtcbiAgICBsZXQgZW1iZWREaXJlY3RpdmVNYXJrZG93blRyYW5zZm9ybSA9IG51bGw7XG5cbiAgICBjb25zdCBmaWxlUGF0aCA9IHRoaXMuZmlsZVBhdGgoY29udGV4dCk7XG5cbiAgICBpZiAoZmlsZVBhdGggIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IHsgaW1wb3J0ZXIgfSA9IGNvbnRleHQ7XG5cbiAgICAgIGltcG9ydGVyKGZpbGVQYXRoLCBjb250ZXh0KTtcblxuICAgICAgY29uc3QgeyBpbXBvcnRlZE5vZGUgPSBudWxsLFxuICAgICAgICAgICAgICBpbXBvcnRlZFRva2VucyA9IG51bGwgfSA9IGNvbnRleHQ7XG5cbiAgICAgIGlmIChpbXBvcnRlZE5vZGUgIT09IG51bGwpIHtcbiAgICAgICAgZGVsZXRlIGNvbnRleHQuaW1wb3J0ZWROb2RlO1xuICAgICAgICBkZWxldGUgY29udGV4dC5pbXBvcnRlZFRva2VucztcblxuICAgICAgICBjb25zdCBub2RlID0gaW1wb3J0ZWROb2RlLCAgLy8vXG4gICAgICAgICAgICAgIGRpdmlzaW9uTWFya2Rvd25Ob2RlID0gZGl2aXNpb25NYXJrZG93bk5vZGVGcm9tTm9kZShub2RlKTtcblxuICAgICAgICBpZiAoZGl2aXNpb25NYXJrZG93bk5vZGUgIT09IG51bGwpIHtcbiAgICAgICAgICBjb25zdCBub2RlID0gZGl2aXNpb25NYXJrZG93bk5vZGUsICAvLy9cbiAgICAgICAgICAgICAgICB0b2tlbnMgPSBpbXBvcnRlZFRva2VucywgIC8vL1xuICAgICAgICAgICAgICAgIHN1YkRpdmlzaW9uTWFya2Rvd25Ob2RlID0gc3ViRGl2aXNpb25NYXJrZG93bk5vZGVGcm9tTm9kZShub2RlKTtcblxuICAgICAgICAgIGlmIChzdWJEaXZpc2lvbk1hcmtkb3duTm9kZSAhPT0gbnVsbCkge1xuICAgICAgICAgICAgZGl2aXNpb25NYXJrZG93bk5vZGUucmVtb3ZlU3ViRGl2aXNpb25NYXJrZG93bk5vZGUoc3ViRGl2aXNpb25NYXJrZG93bk5vZGUpO1xuXG4gICAgICAgICAgICBlbWJlZERpcmVjdGl2ZU1hcmtkb3duVHJhbnNmb3JtID0gRW1iZWREaXJlY3RpdmVNYXJrZG93blRyYW5zZm9ybS5mcm9tU3ViRGl2aXNpb25NYXJrZG93bk5vZGVBbmRUb2tlbnMoc3ViRGl2aXNpb25NYXJrZG93bk5vZGUsIHRva2Vucyk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGVtYmVkRGlyZWN0aXZlTWFya2Rvd25UcmFuc2Zvcm07XG4gIH1cblxuICBzdGF0aWMgZnJvbVJ1bGVOYW1lQ2hpbGROb2Rlc09wYWNpdHlBbmRQcmVjZWRlbmNlKHJ1bGVOYW1lLCBjaGlsZE5vZGVzLCBvcGFjaXR5LCBwcmVjZWRlbmNlKSB7IHJldHVybiBNYXJrZG93bk5vZGUuZnJvbVJ1bGVOYW1lQ2hpbGROb2Rlc09wYWNpdHlBbmRQcmVjZWRlbmNlKEVtYmVkRGlyZWN0aXZlTWFya2Rvd25Ob2RlLCBydWxlTmFtZSwgY2hpbGROb2Rlcywgb3BhY2l0eSwgcHJlY2VkZW5jZSk7IH1cbn1cbiJdLCJuYW1lcyI6WyJFbWJlZERpcmVjdGl2ZU1hcmtkb3duTm9kZSIsImZpbGVQYXRoIiwiY29udGV4dCIsImZyb21GaXJzdExhc3RDaGlsZE5vZGUiLCJmaXJzdExhc3RDaGlsZE5vZGUiLCJmaXJzdExhc3RDaGlsZE5vZGVQYXRoTWFya2Rvd25Ob2RlIiwiUGF0aE1hcmtkb3duTm9kZSIsInBhdGhNYXJrZG93bk5vZGUiLCJwYXRoTWFya2Rvd25Ob2RlUGF0aCIsInBhdGgiLCJyZXNvbHZlRW1iZWRkaW5nIiwiZW1iZWREaXJlY3RpdmVNYXJrZG93blRyYW5zZm9ybSIsImltcG9ydGVyIiwiaW1wb3J0ZWROb2RlIiwiaW1wb3J0ZWRUb2tlbnMiLCJub2RlIiwiZGl2aXNpb25NYXJrZG93bk5vZGUiLCJkaXZpc2lvbk1hcmtkb3duTm9kZUZyb21Ob2RlIiwidG9rZW5zIiwic3ViRGl2aXNpb25NYXJrZG93bk5vZGUiLCJzdWJEaXZpc2lvbk1hcmtkb3duTm9kZUZyb21Ob2RlIiwicmVtb3ZlU3ViRGl2aXNpb25NYXJrZG93bk5vZGUiLCJFbWJlZERpcmVjdGl2ZU1hcmtkb3duVHJhbnNmb3JtIiwiZnJvbVN1YkRpdmlzaW9uTWFya2Rvd25Ob2RlQW5kVG9rZW5zIiwiZnJvbVJ1bGVOYW1lQ2hpbGROb2Rlc09wYWNpdHlBbmRQcmVjZWRlbmNlIiwicnVsZU5hbWUiLCJjaGlsZE5vZGVzIiwib3BhY2l0eSIsInByZWNlZGVuY2UiLCJNYXJrZG93bk5vZGUiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBUXFCQTs7OytEQU5JOzJEQUNJOzREQUNlO3lCQUVrQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFL0QsSUFBQSxBQUFNQSwyQ0FBTjtjQUFNQTthQUFBQTtnQ0FBQUE7UUFBTixPQUFBLGtCQUFNQTs7a0JBQUFBOztZQUNuQkMsS0FBQUE7bUJBQUFBLFNBQUFBLFNBQVNDLE9BQU87Z0JBQ2QsSUFBTUQsV0FBVyxJQUFJLENBQUNFLHNCQUFzQixDQUFDLFNBQUNDO29CQUM1QyxJQUFJSCxXQUFXO29CQUVmLElBQU1JLHFDQUFzQ0QsQUFBa0IsWUFBbEJBLG9CQUE4QkUsYUFBZ0I7b0JBRTFGLElBQUlELG9DQUFvQzt3QkFDdEMsSUFBTUUsbUJBQW1CSCxvQkFDbkJJLHVCQUF1QkQsaUJBQWlCRSxJQUFJLENBQUNQO3dCQUVuREQsV0FBV08sc0JBQXNCLEdBQUc7b0JBQ3RDO29CQUVBLE9BQU9QO2dCQUNUO2dCQUVBLE9BQU9BO1lBQ1Q7OztZQUVBUyxLQUFBQTttQkFBQUEsU0FBQUEsaUJBQWlCUixPQUFPO2dCQUN0QixJQUFJUyxrQ0FBa0M7Z0JBRXRDLElBQU1WLFdBQVcsSUFBSSxDQUFDQSxRQUFRLENBQUNDO2dCQUUvQixJQUFJRCxhQUFhLE1BQU07b0JBQ3JCLElBQU0sQUFBRVcsV0FBYVYsUUFBYlU7b0JBRVJBLFNBQVNYLFVBQVVDO29CQUVuQiw0QkFDa0NBLFFBRDFCVyxjQUFBQSxrREFBZSx3REFDV1gsUUFBMUJZLGdCQUFBQSxzREFBaUI7b0JBRXpCLElBQUlELGlCQUFpQixNQUFNO3dCQUN6QixPQUFPWCxRQUFRVyxZQUFZO3dCQUMzQixPQUFPWCxRQUFRWSxjQUFjO3dCQUU3QixJQUFNQyxPQUFPRixjQUNQRyx1QkFBdUJDLElBQUFBLHVDQUE0QixFQUFDRjt3QkFFMUQsSUFBSUMseUJBQXlCLE1BQU07NEJBQ2pDLElBQU1ELFFBQU9DLHNCQUNQRSxTQUFTSixnQkFDVEssMEJBQTBCQyxJQUFBQSwwQ0FBK0IsRUFBQ0w7NEJBRWhFLElBQUlJLDRCQUE0QixNQUFNO2dDQUNwQ0gscUJBQXFCSyw2QkFBNkIsQ0FBQ0Y7Z0NBRW5EUixrQ0FBa0NXLGNBQStCLENBQUNDLG9DQUFvQyxDQUFDSix5QkFBeUJEOzRCQUNsSTt3QkFDRjtvQkFDRjtnQkFDRjtnQkFFQSxPQUFPUDtZQUNUOzs7O1lBRU9hLEtBQUFBO21CQUFQLFNBQU9BLDJDQUEyQ0MsUUFBUSxFQUFFQyxVQUFVLEVBQUVDLE9BQU8sRUFBRUMsVUFBVTtnQkFBSSxPQUFPQyxpQkFBWSxDQUFDTCwwQ0FBMEMsQ0F6RDFJeEIsNEJBeUR1S3lCLFVBQVVDLFlBQVlDLFNBQVNDO1lBQWE7OztXQXpEbk41QjtFQUFtQzZCLGlCQUFZIn0=