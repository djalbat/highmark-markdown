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
var _include = /*#__PURE__*/ _interop_require_default(require("../../../transform/markdown/directive/include"));
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
                var includeDirectiveMarkdownTransform = null;
                var filePath = this.filePath(context);
                if (filePath !== null) {
                    var importer = context.importer;
                    importer(filePath, context);
                    var _context_importedNode = context.importedNode, importedNode = _context_importedNode === void 0 ? null : _context_importedNode, _context_importedTokens = context.importedTokens, importedTokens = _context_importedTokens === void 0 ? null : _context_importedTokens, _context_importedClassName = context.importedClassName, importedClassName = _context_importedClassName === void 0 ? null : _context_importedClassName;
                    if (importedNode !== null) {
                        delete context.importedNode;
                        delete context.importedTokens;
                        delete context.importedClassName;
                        var node = importedNode, divisionMarkdownNode = (0, _markdown1.divisionMarkdownNodeFromNode)(node);
                        if (divisionMarkdownNode !== null) {
                            var topmostMarkdownNode = node, divisionClassName = importedClassName, tokens = importedTokens; ///
                            topmostMarkdownNode.removeDivisionMarkdownNode(divisionMarkdownNode);
                            divisionMarkdownNode.setDivisionClassName(divisionClassName);
                            includeDirectiveMarkdownTransform = _include.default.fromDivisionMarkdownNodeAndTokens(divisionMarkdownNode, tokens);
                        }
                    }
                }
                return includeDirectiveMarkdownTransform;
            }
        }
    ], [
        {
            key: "fromRuleNameChildNodesOpacityAndPrecedence",
            value: function fromRuleNameChildNodesOpacityAndPrecedence(ruleName, childNodes, opacity, precedence) {
                return _markdown.default.fromRuleNameChildNodesOpacityAndPrecedence(IncludeDirectiveMarkdownNode, ruleName, childNodes, opacity, precedence);
            }
        }
    ]);
    return IncludeDirectiveMarkdownNode;
}(_markdown.default);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9ub2RlL21hcmtkb3duL2RpcmVjdGl2ZS9pbmNsdWRlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgTWFya2Rvd25Ob2RlIGZyb20gXCIuLi8uLi8uLi9ub2RlL21hcmtkb3duXCI7XG5pbXBvcnQgUGF0aE1hcmtkb3duTm9kZSBmcm9tIFwiLi4vLi4vLi4vbm9kZS9tYXJrZG93bi9wYXRoXCI7XG5pbXBvcnQgSW5jbHVkZURpcmVjdGl2ZU1hcmtkb3duVHJhbnNmb3JtIGZyb20gXCIuLi8uLi8uLi90cmFuc2Zvcm0vbWFya2Rvd24vZGlyZWN0aXZlL2luY2x1ZGVcIjtcblxuaW1wb3J0IHsgZGl2aXNpb25NYXJrZG93bk5vZGVGcm9tTm9kZSB9IGZyb20gXCIuLi8uLi8uLi91dGlsaXRpZXMvbWFya2Rvd25cIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW5jbHVkZURpcmVjdGl2ZU1hcmtkb3duTm9kZSBleHRlbmRzIE1hcmtkb3duTm9kZSB7XG4gIGZpbGVQYXRoKGNvbnRleHQpIHtcbiAgICBjb25zdCBmaWxlUGF0aCA9IHRoaXMuZnJvbUZpcnN0TGFzdENoaWxkTm9kZSgoZmlyc3RMYXN0Q2hpbGROb2RlKSA9PiB7XG4gICAgICBsZXQgZmlsZVBhdGggPSBudWxsO1xuXG4gICAgICBjb25zdCBmaXJzdExhc3RDaGlsZE5vZGVQYXRoTWFya2Rvd25Ob2RlID0gKGZpcnN0TGFzdENoaWxkTm9kZSBpbnN0YW5jZW9mIFBhdGhNYXJrZG93bk5vZGUpO1xuXG4gICAgICBpZiAoZmlyc3RMYXN0Q2hpbGROb2RlUGF0aE1hcmtkb3duTm9kZSkge1xuICAgICAgICBjb25zdCBwYXRoTWFya2Rvd25Ob2RlID0gZmlyc3RMYXN0Q2hpbGROb2RlLCAvLy9cbiAgICAgICAgICAgICAgcGF0aE1hcmtkb3duTm9kZVBhdGggPSBwYXRoTWFya2Rvd25Ob2RlLnBhdGgoY29udGV4dCk7XG5cbiAgICAgICAgZmlsZVBhdGggPSBwYXRoTWFya2Rvd25Ob2RlUGF0aDsgLy8vXG4gICAgICB9XG5cbiAgICAgIHJldHVybiBmaWxlUGF0aDtcbiAgICB9KTtcblxuICAgIHJldHVybiBmaWxlUGF0aDtcbiAgfVxuXG4gIHJlc29sdmVJbmNsdWRlKGNvbnRleHQpIHtcbiAgICBsZXQgaW5jbHVkZURpcmVjdGl2ZU1hcmtkb3duVHJhbnNmb3JtID0gbnVsbDtcblxuICAgIGNvbnN0IGZpbGVQYXRoID0gdGhpcy5maWxlUGF0aChjb250ZXh0KTtcblxuICAgIGlmIChmaWxlUGF0aCAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgeyBpbXBvcnRlciB9ID0gY29udGV4dDtcblxuICAgICAgaW1wb3J0ZXIoZmlsZVBhdGgsIGNvbnRleHQpO1xuXG4gICAgICBjb25zdCB7IGltcG9ydGVkTm9kZSA9IG51bGwsXG4gICAgICAgICAgICAgIGltcG9ydGVkVG9rZW5zID0gbnVsbCxcbiAgICAgICAgICAgICAgaW1wb3J0ZWRDbGFzc05hbWUgPSBudWxsIH0gPSBjb250ZXh0O1xuXG4gICAgICBpZiAoaW1wb3J0ZWROb2RlICE9PSBudWxsKSB7XG4gICAgICAgIGRlbGV0ZSBjb250ZXh0LmltcG9ydGVkTm9kZTtcbiAgICAgICAgZGVsZXRlIGNvbnRleHQuaW1wb3J0ZWRUb2tlbnM7XG4gICAgICAgIGRlbGV0ZSBjb250ZXh0LmltcG9ydGVkQ2xhc3NOYW1lO1xuXG4gICAgICAgIGNvbnN0IG5vZGUgPSBpbXBvcnRlZE5vZGUsICAvLy9cbiAgICAgICAgICAgICAgZGl2aXNpb25NYXJrZG93bk5vZGUgPSBkaXZpc2lvbk1hcmtkb3duTm9kZUZyb21Ob2RlKG5vZGUpO1xuXG4gICAgICAgIGlmIChkaXZpc2lvbk1hcmtkb3duTm9kZSAhPT0gbnVsbCkge1xuICAgICAgICAgIGNvbnN0IHRvcG1vc3RNYXJrZG93bk5vZGUgPSBub2RlLCAvLy9cbiAgICAgICAgICAgICAgICBkaXZpc2lvbkNsYXNzTmFtZSA9IGltcG9ydGVkQ2xhc3NOYW1lLCAgLy8vXG4gICAgICAgICAgICAgICAgdG9rZW5zID0gaW1wb3J0ZWRUb2tlbnM7ICAvLy9cblxuICAgICAgICAgIHRvcG1vc3RNYXJrZG93bk5vZGUucmVtb3ZlRGl2aXNpb25NYXJrZG93bk5vZGUoZGl2aXNpb25NYXJrZG93bk5vZGUpO1xuXG4gICAgICAgICAgZGl2aXNpb25NYXJrZG93bk5vZGUuc2V0RGl2aXNpb25DbGFzc05hbWUoZGl2aXNpb25DbGFzc05hbWUpO1xuXG4gICAgICAgICAgaW5jbHVkZURpcmVjdGl2ZU1hcmtkb3duVHJhbnNmb3JtID0gSW5jbHVkZURpcmVjdGl2ZU1hcmtkb3duVHJhbnNmb3JtLmZyb21EaXZpc2lvbk1hcmtkb3duTm9kZUFuZFRva2VucyhkaXZpc2lvbk1hcmtkb3duTm9kZSwgdG9rZW5zKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBpbmNsdWRlRGlyZWN0aXZlTWFya2Rvd25UcmFuc2Zvcm07XG4gIH1cblxuICBzdGF0aWMgZnJvbVJ1bGVOYW1lQ2hpbGROb2Rlc09wYWNpdHlBbmRQcmVjZWRlbmNlKHJ1bGVOYW1lLCBjaGlsZE5vZGVzLCBvcGFjaXR5LCBwcmVjZWRlbmNlKSB7IHJldHVybiBNYXJrZG93bk5vZGUuZnJvbVJ1bGVOYW1lQ2hpbGROb2Rlc09wYWNpdHlBbmRQcmVjZWRlbmNlKEluY2x1ZGVEaXJlY3RpdmVNYXJrZG93bk5vZGUsIHJ1bGVOYW1lLCBjaGlsZE5vZGVzLCBvcGFjaXR5LCBwcmVjZWRlbmNlKTsgfVxufVxuIl0sIm5hbWVzIjpbIkluY2x1ZGVEaXJlY3RpdmVNYXJrZG93bk5vZGUiLCJmaWxlUGF0aCIsImNvbnRleHQiLCJmcm9tRmlyc3RMYXN0Q2hpbGROb2RlIiwiZmlyc3RMYXN0Q2hpbGROb2RlIiwiZmlyc3RMYXN0Q2hpbGROb2RlUGF0aE1hcmtkb3duTm9kZSIsIlBhdGhNYXJrZG93bk5vZGUiLCJwYXRoTWFya2Rvd25Ob2RlIiwicGF0aE1hcmtkb3duTm9kZVBhdGgiLCJwYXRoIiwicmVzb2x2ZUluY2x1ZGUiLCJpbmNsdWRlRGlyZWN0aXZlTWFya2Rvd25UcmFuc2Zvcm0iLCJpbXBvcnRlciIsImltcG9ydGVkTm9kZSIsImltcG9ydGVkVG9rZW5zIiwiaW1wb3J0ZWRDbGFzc05hbWUiLCJub2RlIiwiZGl2aXNpb25NYXJrZG93bk5vZGUiLCJkaXZpc2lvbk1hcmtkb3duTm9kZUZyb21Ob2RlIiwidG9wbW9zdE1hcmtkb3duTm9kZSIsImRpdmlzaW9uQ2xhc3NOYW1lIiwidG9rZW5zIiwicmVtb3ZlRGl2aXNpb25NYXJrZG93bk5vZGUiLCJzZXREaXZpc2lvbkNsYXNzTmFtZSIsIkluY2x1ZGVEaXJlY3RpdmVNYXJrZG93blRyYW5zZm9ybSIsImZyb21EaXZpc2lvbk1hcmtkb3duTm9kZUFuZFRva2VucyIsImZyb21SdWxlTmFtZUNoaWxkTm9kZXNPcGFjaXR5QW5kUHJlY2VkZW5jZSIsInJ1bGVOYW1lIiwiY2hpbGROb2RlcyIsIm9wYWNpdHkiLCJwcmVjZWRlbmNlIiwiTWFya2Rvd25Ob2RlIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQVFxQkE7OzsrREFOSTsyREFDSTs4REFDaUI7eUJBRUQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRTlCLElBQUEsQUFBTUEsNkNBQU47Y0FBTUE7YUFBQUE7Z0NBQUFBO1FBQU4sT0FBQSxrQkFBTUE7O2tCQUFBQTs7WUFDbkJDLEtBQUFBO21CQUFBQSxTQUFBQSxTQUFTQyxPQUFPO2dCQUNkLElBQU1ELFdBQVcsSUFBSSxDQUFDRSxzQkFBc0IsQ0FBQyxTQUFDQztvQkFDNUMsSUFBSUgsV0FBVztvQkFFZixJQUFNSSxxQ0FBc0NELEFBQWtCLFlBQWxCQSxvQkFBOEJFLGFBQWdCO29CQUUxRixJQUFJRCxvQ0FBb0M7d0JBQ3RDLElBQU1FLG1CQUFtQkgsb0JBQ25CSSx1QkFBdUJELGlCQUFpQkUsSUFBSSxDQUFDUDt3QkFFbkRELFdBQVdPLHNCQUFzQixHQUFHO29CQUN0QztvQkFFQSxPQUFPUDtnQkFDVDtnQkFFQSxPQUFPQTtZQUNUOzs7WUFFQVMsS0FBQUE7bUJBQUFBLFNBQUFBLGVBQWVSLE9BQU87Z0JBQ3BCLElBQUlTLG9DQUFvQztnQkFFeEMsSUFBTVYsV0FBVyxJQUFJLENBQUNBLFFBQVEsQ0FBQ0M7Z0JBRS9CLElBQUlELGFBQWEsTUFBTTtvQkFDckIsSUFBTSxBQUFFVyxXQUFhVixRQUFiVTtvQkFFUkEsU0FBU1gsVUFBVUM7b0JBRW5CLDRCQUVxQ0EsUUFGN0JXLGNBQUFBLGtEQUFlLHdEQUVjWCxRQUQ3QlksZ0JBQUFBLHNEQUFpQiw2REFDWVosUUFBN0JhLG1CQUFBQSw0REFBb0I7b0JBRTVCLElBQUlGLGlCQUFpQixNQUFNO3dCQUN6QixPQUFPWCxRQUFRVyxZQUFZO3dCQUMzQixPQUFPWCxRQUFRWSxjQUFjO3dCQUM3QixPQUFPWixRQUFRYSxpQkFBaUI7d0JBRWhDLElBQU1DLE9BQU9ILGNBQ1BJLHVCQUF1QkMsSUFBQUEsdUNBQTRCLEVBQUNGO3dCQUUxRCxJQUFJQyx5QkFBeUIsTUFBTTs0QkFDakMsSUFBTUUsc0JBQXNCSCxNQUN0Qkksb0JBQW9CTCxtQkFDcEJNLFNBQVNQLGdCQUFpQixHQUFHOzRCQUVuQ0ssb0JBQW9CRywwQkFBMEIsQ0FBQ0w7NEJBRS9DQSxxQkFBcUJNLG9CQUFvQixDQUFDSDs0QkFFMUNULG9DQUFvQ2EsZ0JBQWlDLENBQUNDLGlDQUFpQyxDQUFDUixzQkFBc0JJO3dCQUNoSTtvQkFDRjtnQkFDRjtnQkFFQSxPQUFPVjtZQUNUOzs7O1lBRU9lLEtBQUFBO21CQUFQLFNBQU9BLDJDQUEyQ0MsUUFBUSxFQUFFQyxVQUFVLEVBQUVDLE9BQU8sRUFBRUMsVUFBVTtnQkFBSSxPQUFPQyxpQkFBWSxDQUFDTCwwQ0FBMEMsQ0EzRDFJMUIsOEJBMkR5SzJCLFVBQVVDLFlBQVlDLFNBQVNDO1lBQWE7OztXQTNEck45QjtFQUFxQytCLGlCQUFZIn0=