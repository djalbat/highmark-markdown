"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return FootnotesListMarkdownNode;
    }
});
var _markdown = /*#__PURE__*/ _interop_require_default(require("../../node/markdown"));
var _footnoteItem = /*#__PURE__*/ _interop_require_default(require("./footnoteItem"));
var _ruleNames = require("../../ruleNames");
var _query = require("../../utilities/query");
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
var FootnotesListMarkdownNode = /*#__PURE__*/ function(MarkdownNode) {
    _inherits(FootnotesListMarkdownNode, MarkdownNode);
    var _super = _create_super(FootnotesListMarkdownNode);
    function FootnotesListMarkdownNode() {
        _class_call_check(this, FootnotesListMarkdownNode);
        return _super.apply(this, arguments);
    }
    _create_class(FootnotesListMarkdownNode, [
        {
            key: "identifiers",
            value: function identifiers(context) {
                var childNodes = this.getChildNodes(), footnoteItemMarkdownNodes = childNodes, identifiers = footnoteItemMarkdownNodes.map(function(footnoteItemMarkdownNode) {
                    var identifier = footnoteItemMarkdownNode.identifier(context);
                    return identifier;
                });
                return identifiers;
            }
        }
    ], [
        {
            key: "fromDivisionMarkdownNode",
            value: function fromDivisionMarkdownNode(divisionMarkdownNode, context) {
                var node = divisionMarkdownNode, linkMarkdownNodes = (0, _query.linkMarkdownNodesFromNode)(node), footnoteMarkdownNodes = (0, _query.footnoteMarkdownNodesFromNode)(node), linkMarkdownNodesLength = linkMarkdownNodes.length, footnoteMarkdownNodesLength = footnoteMarkdownNodes.length;
                if (linkMarkdownNodesLength === 0 || footnoteMarkdownNodesLength === 0) {
                    return;
                }
                var identifierToFootnoteMarkdownNodeMap = {};
                footnoteMarkdownNodes.forEach(function(footnoteMarkdownNode) {
                    var identifier = footnoteMarkdownNode.identifier(context);
                    identifierToFootnoteMarkdownNodeMap[identifier] = footnoteMarkdownNode;
                });
                var footnoteItemMarkdownNodes = [];
                linkMarkdownNodes.forEach(function(linkMarkdownNode) {
                    var identifier = linkMarkdownNode.identifier(context), footnoteMarkdownNode = identifierToFootnoteMarkdownNodeMap[identifier] || null;
                    if (footnoteMarkdownNode !== null) {
                        var footnoteItemMarkdownNode = _footnoteItem.default.fromFootnoteMarkdownNodeAndIdentifier(footnoteMarkdownNode, identifier);
                        footnoteItemMarkdownNodes.push(footnoteItemMarkdownNode);
                        delete identifierToFootnoteMarkdownNodeMap[identifier];
                    }
                });
                var ruleName = _ruleNames.FOOTNOTES_LIST_RULE_NAME, childNodes = footnoteItemMarkdownNodes, opacity = null, footnotesListMarkdownNode = _markdown.default.fromRuleNameChildNodesAndOpacity(FootnotesListMarkdownNode, ruleName, childNodes, opacity), replacementChildNode = footnotesListMarkdownNode; ///
                Object.assign(context, {
                    replacementChildNode: replacementChildNode
                });
            }
        }
    ]);
    return FootnotesListMarkdownNode;
}(_markdown.default);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ub2RlL21hcmtkb3duL2Zvb3Rub3Rlc0xpc3QuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBNYXJrZG93bk5vZGUgZnJvbSBcIi4uLy4uL25vZGUvbWFya2Rvd25cIjtcbmltcG9ydCBGb290bm90ZUl0ZW1NYXJrZG93bk5vZGUgZnJvbSBcIi4vZm9vdG5vdGVJdGVtXCI7XG5cbmltcG9ydCB7IEZPT1ROT1RFU19MSVNUX1JVTEVfTkFNRSB9IGZyb20gXCIuLi8uLi9ydWxlTmFtZXNcIjtcbmltcG9ydCB7IGxpbmtNYXJrZG93bk5vZGVzRnJvbU5vZGUsIGZvb3Rub3RlTWFya2Rvd25Ob2Rlc0Zyb21Ob2RlIH0gZnJvbSBcIi4uLy4uL3V0aWxpdGllcy9xdWVyeVwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBGb290bm90ZXNMaXN0TWFya2Rvd25Ob2RlIGV4dGVuZHMgTWFya2Rvd25Ob2RlIHtcbiAgaWRlbnRpZmllcnMoY29udGV4dCkge1xuICAgIGNvbnN0IGNoaWxkTm9kZXMgPSB0aGlzLmdldENoaWxkTm9kZXMoKSxcbiAgICAgICAgICBmb290bm90ZUl0ZW1NYXJrZG93bk5vZGVzID0gY2hpbGROb2RlcywgLy8vXG4gICAgICAgICAgaWRlbnRpZmllcnMgPSBmb290bm90ZUl0ZW1NYXJrZG93bk5vZGVzLm1hcCgoZm9vdG5vdGVJdGVtTWFya2Rvd25Ob2RlKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBpZGVudGlmaWVyID0gZm9vdG5vdGVJdGVtTWFya2Rvd25Ob2RlLmlkZW50aWZpZXIoY29udGV4dCk7XG5cbiAgICAgICAgICAgIHJldHVybiBpZGVudGlmaWVyO1xuICAgICAgICAgIH0pO1xuXG4gICAgcmV0dXJuIGlkZW50aWZpZXJzO1xuICB9XG5cbiAgc3RhdGljIGZyb21EaXZpc2lvbk1hcmtkb3duTm9kZShkaXZpc2lvbk1hcmtkb3duTm9kZSwgY29udGV4dCkge1xuICAgIGNvbnN0IG5vZGUgPSBkaXZpc2lvbk1hcmtkb3duTm9kZSwgIC8vL1xuICAgICAgICAgIGxpbmtNYXJrZG93bk5vZGVzID0gbGlua01hcmtkb3duTm9kZXNGcm9tTm9kZShub2RlKSxcbiAgICAgICAgICBmb290bm90ZU1hcmtkb3duTm9kZXMgPSBmb290bm90ZU1hcmtkb3duTm9kZXNGcm9tTm9kZShub2RlKSxcbiAgICAgICAgICBsaW5rTWFya2Rvd25Ob2Rlc0xlbmd0aCA9IGxpbmtNYXJrZG93bk5vZGVzLmxlbmd0aCxcbiAgICAgICAgICBmb290bm90ZU1hcmtkb3duTm9kZXNMZW5ndGggPSBmb290bm90ZU1hcmtkb3duTm9kZXMubGVuZ3RoO1xuXG4gICAgaWYgKChsaW5rTWFya2Rvd25Ob2Rlc0xlbmd0aCA9PT0gMCkgfHwgKGZvb3Rub3RlTWFya2Rvd25Ob2Rlc0xlbmd0aCA9PT0gMCkpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBpZGVudGlmaWVyVG9Gb290bm90ZU1hcmtkb3duTm9kZU1hcCA9IHt9O1xuXG4gICAgZm9vdG5vdGVNYXJrZG93bk5vZGVzLmZvckVhY2goKGZvb3Rub3RlTWFya2Rvd25Ob2RlKSA9PiB7XG4gICAgICBjb25zdCBpZGVudGlmaWVyID0gZm9vdG5vdGVNYXJrZG93bk5vZGUuaWRlbnRpZmllcihjb250ZXh0KTtcblxuICAgICAgaWRlbnRpZmllclRvRm9vdG5vdGVNYXJrZG93bk5vZGVNYXBbaWRlbnRpZmllcl0gPSBmb290bm90ZU1hcmtkb3duTm9kZTtcbiAgICB9KTtcblxuICAgIGNvbnN0IGZvb3Rub3RlSXRlbU1hcmtkb3duTm9kZXMgPSBbXTtcblxuICAgIGxpbmtNYXJrZG93bk5vZGVzLmZvckVhY2goKGxpbmtNYXJrZG93bk5vZGUpID0+IHtcbiAgICAgIGNvbnN0IGlkZW50aWZpZXIgPSBsaW5rTWFya2Rvd25Ob2RlLmlkZW50aWZpZXIoY29udGV4dCksXG4gICAgICAgICAgICBmb290bm90ZU1hcmtkb3duTm9kZSA9IGlkZW50aWZpZXJUb0Zvb3Rub3RlTWFya2Rvd25Ob2RlTWFwW2lkZW50aWZpZXJdIHx8IG51bGw7XG5cbiAgICAgIGlmIChmb290bm90ZU1hcmtkb3duTm9kZSAhPT0gbnVsbCkge1xuICAgICAgICBjb25zdCBmb290bm90ZUl0ZW1NYXJrZG93bk5vZGUgPSBGb290bm90ZUl0ZW1NYXJrZG93bk5vZGUuZnJvbUZvb3Rub3RlTWFya2Rvd25Ob2RlQW5kSWRlbnRpZmllcihmb290bm90ZU1hcmtkb3duTm9kZSwgaWRlbnRpZmllcik7XG5cbiAgICAgICAgZm9vdG5vdGVJdGVtTWFya2Rvd25Ob2Rlcy5wdXNoKGZvb3Rub3RlSXRlbU1hcmtkb3duTm9kZSk7XG5cbiAgICAgICAgZGVsZXRlIGlkZW50aWZpZXJUb0Zvb3Rub3RlTWFya2Rvd25Ob2RlTWFwW2lkZW50aWZpZXJdO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgY29uc3QgcnVsZU5hbWUgPSBGT09UTk9URVNfTElTVF9SVUxFX05BTUUsXG4gICAgICAgICAgY2hpbGROb2RlcyA9IGZvb3Rub3RlSXRlbU1hcmtkb3duTm9kZXMsIC8vL1xuICAgICAgICAgIG9wYWNpdHkgPSBudWxsLFxuICAgICAgICAgIGZvb3Rub3Rlc0xpc3RNYXJrZG93bk5vZGUgPSBNYXJrZG93bk5vZGUuZnJvbVJ1bGVOYW1lQ2hpbGROb2Rlc0FuZE9wYWNpdHkoRm9vdG5vdGVzTGlzdE1hcmtkb3duTm9kZSwgcnVsZU5hbWUsIGNoaWxkTm9kZXMsIG9wYWNpdHkpLFxuICAgICAgICAgIHJlcGxhY2VtZW50Q2hpbGROb2RlID0gZm9vdG5vdGVzTGlzdE1hcmtkb3duTm9kZTsgIC8vL1xuXG4gICAgT2JqZWN0LmFzc2lnbihjb250ZXh0LCB7XG4gICAgICByZXBsYWNlbWVudENoaWxkTm9kZVxuICAgIH0pO1xuICB9XG59XG4iXSwibmFtZXMiOlsiRm9vdG5vdGVzTGlzdE1hcmtkb3duTm9kZSIsImlkZW50aWZpZXJzIiwiY29udGV4dCIsImNoaWxkTm9kZXMiLCJnZXRDaGlsZE5vZGVzIiwiZm9vdG5vdGVJdGVtTWFya2Rvd25Ob2RlcyIsIm1hcCIsImZvb3Rub3RlSXRlbU1hcmtkb3duTm9kZSIsImlkZW50aWZpZXIiLCJmcm9tRGl2aXNpb25NYXJrZG93bk5vZGUiLCJkaXZpc2lvbk1hcmtkb3duTm9kZSIsIm5vZGUiLCJsaW5rTWFya2Rvd25Ob2RlcyIsImxpbmtNYXJrZG93bk5vZGVzRnJvbU5vZGUiLCJmb290bm90ZU1hcmtkb3duTm9kZXMiLCJmb290bm90ZU1hcmtkb3duTm9kZXNGcm9tTm9kZSIsImxpbmtNYXJrZG93bk5vZGVzTGVuZ3RoIiwibGVuZ3RoIiwiZm9vdG5vdGVNYXJrZG93bk5vZGVzTGVuZ3RoIiwiaWRlbnRpZmllclRvRm9vdG5vdGVNYXJrZG93bk5vZGVNYXAiLCJmb3JFYWNoIiwiZm9vdG5vdGVNYXJrZG93bk5vZGUiLCJsaW5rTWFya2Rvd25Ob2RlIiwiRm9vdG5vdGVJdGVtTWFya2Rvd25Ob2RlIiwiZnJvbUZvb3Rub3RlTWFya2Rvd25Ob2RlQW5kSWRlbnRpZmllciIsInB1c2giLCJydWxlTmFtZSIsIkZPT1ROT1RFU19MSVNUX1JVTEVfTkFNRSIsIm9wYWNpdHkiLCJmb290bm90ZXNMaXN0TWFya2Rvd25Ob2RlIiwiTWFya2Rvd25Ob2RlIiwiZnJvbVJ1bGVOYW1lQ2hpbGROb2Rlc0FuZE9wYWNpdHkiLCJyZXBsYWNlbWVudENoaWxkTm9kZSIsIk9iamVjdCIsImFzc2lnbiJdLCJyYW5nZU1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsiLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFRcUJBOzs7K0RBTkk7bUVBQ1k7eUJBRUk7cUJBQ2dDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRTFELElBQUEsQUFBTUEsMENBQUQsQUFBTDtjQUFNQTsrQkFBQUE7YUFBQUE7Z0NBQUFBOzs7a0JBQUFBOztZQUNuQkMsS0FBQUE7bUJBQUFBLFNBQUFBLFlBQVlDLE9BQU87Z0JBQ2pCLElBQU1DLGFBQWEsSUFBSSxDQUFDQyxhQUFhLElBQy9CQyw0QkFBNEJGLFlBQzVCRixjQUFjSSwwQkFBMEJDLEdBQUcsQ0FBQyxTQUFDQztvQkFDM0MsSUFBTUMsYUFBYUQseUJBQXlCQyxVQUFVLENBQUNOO29CQUV2RCxPQUFPTTtnQkFDVDtnQkFFTixPQUFPUDtZQUNUOzs7O1lBRU9RLEtBQUFBO21CQUFQLFNBQU9BLHlCQUF5QkMsb0JBQW9CLEVBQUVSLE9BQU87Z0JBQzNELElBQU1TLE9BQU9ELHNCQUNQRSxvQkFBb0JDLElBQUFBLGdDQUF5QixFQUFDRixPQUM5Q0csd0JBQXdCQyxJQUFBQSxvQ0FBNkIsRUFBQ0osT0FDdERLLDBCQUEwQkosa0JBQWtCSyxNQUFNLEVBQ2xEQyw4QkFBOEJKLHNCQUFzQkcsTUFBTTtnQkFFaEUsSUFBSSxBQUFDRCw0QkFBNEIsS0FBT0UsZ0NBQWdDLEdBQUk7b0JBQzFFO2dCQUNGO2dCQUVBLElBQU1DLHNDQUFzQyxDQUFDO2dCQUU3Q0wsc0JBQXNCTSxPQUFPLENBQUMsU0FBQ0M7b0JBQzdCLElBQU1iLGFBQWFhLHFCQUFxQmIsVUFBVSxDQUFDTjtvQkFFbkRpQixtQ0FBbUMsQ0FBQ1gsV0FBVyxHQUFHYTtnQkFDcEQ7Z0JBRUEsSUFBTWhCLDRCQUE0QixFQUFFO2dCQUVwQ08sa0JBQWtCUSxPQUFPLENBQUMsU0FBQ0U7b0JBQ3pCLElBQU1kLGFBQWFjLGlCQUFpQmQsVUFBVSxDQUFDTixVQUN6Q21CLHVCQUF1QkYsbUNBQW1DLENBQUNYLFdBQVcsSUFBSTtvQkFFaEYsSUFBSWEseUJBQXlCLE1BQU07d0JBQ2pDLElBQU1kLDJCQUEyQmdCLHFCQUF3QixDQUFDQyxxQ0FBcUMsQ0FBQ0gsc0JBQXNCYjt3QkFFdEhILDBCQUEwQm9CLElBQUksQ0FBQ2xCO3dCQUUvQixPQUFPWSxtQ0FBbUMsQ0FBQ1gsV0FBVztvQkFDeEQ7Z0JBQ0Y7Z0JBRUEsSUFBTWtCLFdBQVdDLG1DQUF3QixFQUNuQ3hCLGFBQWFFLDJCQUNidUIsVUFBVSxNQUNWQyw0QkFBNEJDLGlCQUFZLENBQUNDLGdDQUFnQyxDQWxEOUQvQiwyQkFrRDBGMEIsVUFBVXZCLFlBQVl5QixVQUMzSEksdUJBQXVCSCwyQkFBNEIsR0FBRztnQkFFNURJLE9BQU9DLE1BQU0sQ0FBQ2hDLFNBQVM7b0JBQ3JCOEIsc0JBQUFBO2dCQUNGO1lBQ0Y7OztXQXhEbUJoQztFQUFrQzhCLGlCQUFZIn0=