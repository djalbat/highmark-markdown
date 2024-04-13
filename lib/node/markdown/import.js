"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return ImportMarkdownNode;
    }
});
var _necessary = require("necessary");
var _markdown = /*#__PURE__*/ _interop_require_default(require("../../node/markdown"));
var _tokens = require("../../utilities/tokens");
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
var fourth = _necessary.arrayUtilities.fourth;
var ImportMarkdownNode = /*#__PURE__*/ function(MarkdownNode) {
    _inherits(ImportMarkdownNode, MarkdownNode);
    var _super = _create_super(ImportMarkdownNode);
    function ImportMarkdownNode() {
        _class_call_check(this, ImportMarkdownNode);
        return _super.apply(this, arguments);
    }
    _create_class(ImportMarkdownNode, [
        {
            key: "resolveImports",
            value: function resolveImports(parentNode, context) {
                var html = null;
                var _context_importer = context.importer, importer = _context_importer === void 0 ? null : _context_importer;
                if (importer !== null) {
                    var filePath = this.filePath(context);
                    importer(filePath, context);
                    var _context_importedNode = context.importedNode, importedNode = _context_importedNode === void 0 ? null : _context_importedNode, _context_importedTokens = context.importedTokens, importedTokens = _context_importedTokens === void 0 ? null : _context_importedTokens;
                    if (importedNode !== null) {
                        var replacedChildNode = this, replacementTokens = importedTokens, replacementChildNode = importedNode; ///
                        parentNode.replaceChildNode(replacedChildNode, replacementChildNode);
                        (0, _tokens.replaceTokens)(replacedChildNode, replacementTokens, context);
                        delete context.importedNode;
                        delete context.importedTokens;
                        parentNode = this; ///
                        var divisionMarkdownNode = importedNode; ///
                        divisionMarkdownNode.resolveImports(parentNode, context);
                    }
                }
                return html;
            }
        },
        {
            key: "filePath",
            value: function filePath(context) {
                var childNodes = this.getChildNodes(), fourthChildNode = fourth(childNodes), pathTerminalNode = fourthChildNode, pathTerminalNodeContent = pathTerminalNode.getContent(), filePath = pathTerminalNodeContent; ///
                return filePath;
            }
        }
    ], [
        {
            key: "fromRuleNameChildNodesAndOpacity",
            value: function fromRuleNameChildNodesAndOpacity(ruleName, childNodes, opacity) {
                return _markdown.default.fromRuleNameChildNodesAndOpacity(ImportMarkdownNode, ruleName, childNodes, opacity);
            }
        }
    ]);
    return ImportMarkdownNode;
}(_markdown.default);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ub2RlL21hcmtkb3duL2ltcG9ydC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgYXJyYXlVdGlsaXRpZXMgfSBmcm9tIFwibmVjZXNzYXJ5XCI7XG5cbmltcG9ydCBNYXJrZG93bk5vZGUgZnJvbSBcIi4uLy4uL25vZGUvbWFya2Rvd25cIjtcblxuaW1wb3J0IHsgcmVwbGFjZVRva2VucyB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvdG9rZW5zXCI7XG5cbmNvbnN0IHsgZm91cnRoIH0gPSBhcnJheVV0aWxpdGllcztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW1wb3J0TWFya2Rvd25Ob2RlIGV4dGVuZHMgTWFya2Rvd25Ob2RlIHtcbiAgcmVzb2x2ZUltcG9ydHMocGFyZW50Tm9kZSwgY29udGV4dCkge1xuICAgIGxldCBodG1sID0gbnVsbDtcblxuICAgIGNvbnN0IHsgaW1wb3J0ZXIgPSBudWxsIH0gPSBjb250ZXh0O1xuXG4gICAgaWYgKGltcG9ydGVyICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBmaWxlUGF0aCA9IHRoaXMuZmlsZVBhdGgoY29udGV4dCk7XG5cbiAgICAgIGltcG9ydGVyKGZpbGVQYXRoLCBjb250ZXh0KTtcblxuICAgICAgY29uc3QgeyBpbXBvcnRlZE5vZGUgPSBudWxsLCBpbXBvcnRlZFRva2VucyA9IG51bGwgfSA9IGNvbnRleHQ7XG5cbiAgICAgIGlmIChpbXBvcnRlZE5vZGUgIT09IG51bGwpIHtcbiAgICAgICAgY29uc3QgcmVwbGFjZWRDaGlsZE5vZGUgPSB0aGlzLCAvLy9cbiAgICAgICAgICAgICAgcmVwbGFjZW1lbnRUb2tlbnMgPSBpbXBvcnRlZFRva2VucywgLy8vXG4gICAgICAgICAgICAgIHJlcGxhY2VtZW50Q2hpbGROb2RlID0gaW1wb3J0ZWROb2RlOyAgLy8vXG5cbiAgICAgICAgcGFyZW50Tm9kZS5yZXBsYWNlQ2hpbGROb2RlKHJlcGxhY2VkQ2hpbGROb2RlLCByZXBsYWNlbWVudENoaWxkTm9kZSk7XG5cbiAgICAgICAgcmVwbGFjZVRva2VucyhyZXBsYWNlZENoaWxkTm9kZSwgcmVwbGFjZW1lbnRUb2tlbnMsIGNvbnRleHQpO1xuXG4gICAgICAgIGRlbGV0ZSBjb250ZXh0LmltcG9ydGVkTm9kZTtcbiAgICAgICAgZGVsZXRlIGNvbnRleHQuaW1wb3J0ZWRUb2tlbnM7XG5cbiAgICAgICAgcGFyZW50Tm9kZSA9IHRoaXM7ICAvLy9cblxuICAgICAgICBjb25zdCBkaXZpc2lvbk1hcmtkb3duTm9kZSA9IGltcG9ydGVkTm9kZTsgIC8vL1xuXG4gICAgICAgIGRpdmlzaW9uTWFya2Rvd25Ob2RlLnJlc29sdmVJbXBvcnRzKHBhcmVudE5vZGUsIGNvbnRleHQpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBodG1sO1xuICB9XG5cbiAgZmlsZVBhdGgoY29udGV4dCkge1xuICAgIGNvbnN0IGNoaWxkTm9kZXMgPSB0aGlzLmdldENoaWxkTm9kZXMoKSxcbiAgICAgICAgICBmb3VydGhDaGlsZE5vZGUgPSBmb3VydGgoY2hpbGROb2RlcyksXG4gICAgICAgICAgcGF0aFRlcm1pbmFsTm9kZSAgPSBmb3VydGhDaGlsZE5vZGUsIC8vL1xuICAgICAgICAgIHBhdGhUZXJtaW5hbE5vZGVDb250ZW50ID0gcGF0aFRlcm1pbmFsTm9kZS5nZXRDb250ZW50KCksXG4gICAgICAgICAgZmlsZVBhdGggPSBwYXRoVGVybWluYWxOb2RlQ29udGVudDsgLy8vXG5cbiAgICByZXR1cm4gZmlsZVBhdGg7XG4gIH1cblxuICBzdGF0aWMgZnJvbVJ1bGVOYW1lQ2hpbGROb2Rlc0FuZE9wYWNpdHkocnVsZU5hbWUsIGNoaWxkTm9kZXMsIG9wYWNpdHkpIHsgcmV0dXJuIE1hcmtkb3duTm9kZS5mcm9tUnVsZU5hbWVDaGlsZE5vZGVzQW5kT3BhY2l0eShJbXBvcnRNYXJrZG93bk5vZGUsIHJ1bGVOYW1lLCBjaGlsZE5vZGVzLCBvcGFjaXR5KTsgfVxufVxuIl0sIm5hbWVzIjpbIkltcG9ydE1hcmtkb3duTm9kZSIsImZvdXJ0aCIsImFycmF5VXRpbGl0aWVzIiwicmVzb2x2ZUltcG9ydHMiLCJwYXJlbnROb2RlIiwiY29udGV4dCIsImh0bWwiLCJpbXBvcnRlciIsImZpbGVQYXRoIiwiaW1wb3J0ZWROb2RlIiwiaW1wb3J0ZWRUb2tlbnMiLCJyZXBsYWNlZENoaWxkTm9kZSIsInJlcGxhY2VtZW50VG9rZW5zIiwicmVwbGFjZW1lbnRDaGlsZE5vZGUiLCJyZXBsYWNlQ2hpbGROb2RlIiwicmVwbGFjZVRva2VucyIsImRpdmlzaW9uTWFya2Rvd25Ob2RlIiwiY2hpbGROb2RlcyIsImdldENoaWxkTm9kZXMiLCJmb3VydGhDaGlsZE5vZGUiLCJwYXRoVGVybWluYWxOb2RlIiwicGF0aFRlcm1pbmFsTm9kZUNvbnRlbnQiLCJnZXRDb250ZW50IiwiZnJvbVJ1bGVOYW1lQ2hpbGROb2Rlc0FuZE9wYWNpdHkiLCJydWxlTmFtZSIsIm9wYWNpdHkiLCJNYXJrZG93bk5vZGUiXSwicmFuZ2VNYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsiLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFVcUJBOzs7eUJBUlU7K0RBRU47c0JBRUs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFOUIsSUFBTSxBQUFFQyxTQUFXQyx5QkFBYyxDQUF6QkQ7QUFFTyxJQUFBLEFBQU1ELG1DQUFELEFBQUw7Y0FBTUE7K0JBQUFBO2FBQUFBO2dDQUFBQTs7O2tCQUFBQTs7WUFDbkJHLEtBQUFBO21CQUFBQSxTQUFBQSxlQUFlQyxVQUFVLEVBQUVDLE9BQU87Z0JBQ2hDLElBQUlDLE9BQU87Z0JBRVgsd0JBQTRCRCxRQUFwQkUsVUFBQUEsMENBQVc7Z0JBRW5CLElBQUlBLGFBQWEsTUFBTTtvQkFDckIsSUFBTUMsV0FBVyxJQUFJLENBQUNBLFFBQVEsQ0FBQ0g7b0JBRS9CRSxTQUFTQyxVQUFVSDtvQkFFbkIsNEJBQXVEQSxRQUEvQ0ksY0FBQUEsa0RBQWUsd0RBQWdDSixRQUExQkssZ0JBQUFBLHNEQUFpQjtvQkFFOUMsSUFBSUQsaUJBQWlCLE1BQU07d0JBQ3pCLElBQU1FLG9CQUFvQixJQUFJLEVBQ3hCQyxvQkFBb0JGLGdCQUNwQkcsdUJBQXVCSixjQUFlLEdBQUc7d0JBRS9DTCxXQUFXVSxnQkFBZ0IsQ0FBQ0gsbUJBQW1CRTt3QkFFL0NFLElBQUFBLHFCQUFhLEVBQUNKLG1CQUFtQkMsbUJBQW1CUDt3QkFFcEQsT0FBT0EsUUFBUUksWUFBWTt3QkFDM0IsT0FBT0osUUFBUUssY0FBYzt3QkFFN0JOLGFBQWEsSUFBSSxFQUFHLEdBQUc7d0JBRXZCLElBQU1ZLHVCQUF1QlAsY0FBZSxHQUFHO3dCQUUvQ08scUJBQXFCYixjQUFjLENBQUNDLFlBQVlDO29CQUNsRDtnQkFDRjtnQkFFQSxPQUFPQztZQUNUOzs7WUFFQUUsS0FBQUE7bUJBQUFBLFNBQUFBLFNBQVNILE9BQU87Z0JBQ2QsSUFBTVksYUFBYSxJQUFJLENBQUNDLGFBQWEsSUFDL0JDLGtCQUFrQmxCLE9BQU9nQixhQUN6QkcsbUJBQW9CRCxpQkFDcEJFLDBCQUEwQkQsaUJBQWlCRSxVQUFVLElBQ3JEZCxXQUFXYSx5QkFBeUIsR0FBRztnQkFFN0MsT0FBT2I7WUFDVDs7OztZQUVPZSxLQUFBQTttQkFBUCxTQUFPQSxpQ0FBaUNDLFFBQVEsRUFBRVAsVUFBVSxFQUFFUSxPQUFPO2dCQUFJLE9BQU9DLGlCQUFZLENBQUNILGdDQUFnQyxDQTlDMUd2QixvQkE4QytId0IsVUFBVVAsWUFBWVE7WUFBVTs7O1dBOUMvSnpCO0VBQTJCMEIsaUJBQVkifQ==