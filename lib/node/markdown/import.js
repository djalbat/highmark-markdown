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
var _string = require("../../utilities/string");
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
            key: "asHTML",
            value: function asHTML(indent, context) {
                var html = null;
                var _context_importer = context.importer, importer = _context_importer === void 0 ? null : _context_importer;
                if (importer !== null) {
                    var filePath = this.filePath(context);
                    indent = this.adjustIndent(indent);
                    html = importer(filePath, indent, context);
                }
                return html;
            }
        },
        {
            key: "filePath",
            value: function filePath(context) {
                var childNodes = this.getChildNodes(), fourthChildNode = fourth(childNodes), doublyQuotedStringLiteralTerminalNode = fourthChildNode, content = doublyQuotedStringLiteralTerminalNode.getContent(), filePath = filePathFromContent(content);
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
function filePathFromContent(content) {
    content = (0, _string.shave)(content); ///
    var filePath = content;
    return filePath;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ub2RlL21hcmtkb3duL2ltcG9ydC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgYXJyYXlVdGlsaXRpZXMgfSBmcm9tIFwibmVjZXNzYXJ5XCI7XG5cbmltcG9ydCBNYXJrZG93bk5vZGUgZnJvbSBcIi4uLy4uL25vZGUvbWFya2Rvd25cIjtcblxuaW1wb3J0IHsgc2hhdmUgfSBmcm9tIFwiLi4vLi4vdXRpbGl0aWVzL3N0cmluZ1wiO1xuXG5jb25zdCB7IGZvdXJ0aCB9ID0gYXJyYXlVdGlsaXRpZXM7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEltcG9ydE1hcmtkb3duTm9kZSBleHRlbmRzIE1hcmtkb3duTm9kZSB7XG4gIGFzSFRNTChpbmRlbnQsIGNvbnRleHQpIHtcbiAgICBsZXQgaHRtbCA9IG51bGw7XG5cbiAgICBjb25zdCB7IGltcG9ydGVyID0gbnVsbCB9ID0gY29udGV4dDtcblxuICAgIGlmIChpbXBvcnRlciAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgZmlsZVBhdGggPSB0aGlzLmZpbGVQYXRoKGNvbnRleHQpO1xuXG4gICAgICBpbmRlbnQgPSB0aGlzLmFkanVzdEluZGVudChpbmRlbnQpO1xuXG4gICAgICBodG1sID0gaW1wb3J0ZXIoZmlsZVBhdGgsIGluZGVudCwgY29udGV4dCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGh0bWw7XG4gIH1cblxuICBmaWxlUGF0aChjb250ZXh0KSB7XG4gICAgY29uc3QgY2hpbGROb2RlcyA9IHRoaXMuZ2V0Q2hpbGROb2RlcygpLFxuICAgICAgICAgIGZvdXJ0aENoaWxkTm9kZSA9IGZvdXJ0aChjaGlsZE5vZGVzKSxcbiAgICAgICAgICBkb3VibHlRdW90ZWRTdHJpbmdMaXRlcmFsVGVybWluYWxOb2RlICA9IGZvdXJ0aENoaWxkTm9kZSxcbiAgICAgICAgICBjb250ZW50ID0gZG91Ymx5UXVvdGVkU3RyaW5nTGl0ZXJhbFRlcm1pbmFsTm9kZS5nZXRDb250ZW50KCksXG4gICAgICAgICAgZmlsZVBhdGggPSBmaWxlUGF0aEZyb21Db250ZW50KGNvbnRlbnQpO1xuXG4gICAgcmV0dXJuIGZpbGVQYXRoO1xuICB9XG5cbiAgc3RhdGljIGZyb21SdWxlTmFtZUNoaWxkTm9kZXNBbmRPcGFjaXR5KHJ1bGVOYW1lLCBjaGlsZE5vZGVzLCBvcGFjaXR5KSB7IHJldHVybiBNYXJrZG93bk5vZGUuZnJvbVJ1bGVOYW1lQ2hpbGROb2Rlc0FuZE9wYWNpdHkoSW1wb3J0TWFya2Rvd25Ob2RlLCBydWxlTmFtZSwgY2hpbGROb2Rlcywgb3BhY2l0eSk7IH1cbn1cblxuZnVuY3Rpb24gZmlsZVBhdGhGcm9tQ29udGVudChjb250ZW50KSB7XG4gIGNvbnRlbnQgPSBzaGF2ZShjb250ZW50KTsgLy8vXG5cbiAgY29uc3QgZmlsZVBhdGggPSBjb250ZW50O1xuXG4gIHJldHVybiBmaWxlUGF0aDtcbn1cbiJdLCJuYW1lcyI6WyJJbXBvcnRNYXJrZG93bk5vZGUiLCJmb3VydGgiLCJhcnJheVV0aWxpdGllcyIsImFzSFRNTCIsImluZGVudCIsImNvbnRleHQiLCJodG1sIiwiaW1wb3J0ZXIiLCJmaWxlUGF0aCIsImFkanVzdEluZGVudCIsImNoaWxkTm9kZXMiLCJnZXRDaGlsZE5vZGVzIiwiZm91cnRoQ2hpbGROb2RlIiwiZG91Ymx5UXVvdGVkU3RyaW5nTGl0ZXJhbFRlcm1pbmFsTm9kZSIsImNvbnRlbnQiLCJnZXRDb250ZW50IiwiZmlsZVBhdGhGcm9tQ29udGVudCIsImZyb21SdWxlTmFtZUNoaWxkTm9kZXNBbmRPcGFjaXR5IiwicnVsZU5hbWUiLCJvcGFjaXR5IiwiTWFya2Rvd25Ob2RlIiwic2hhdmUiXSwicmFuZ2VNYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7IiwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBVXFCQTs7O3lCQVJVOytEQUVOO3NCQUVIOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRXRCLElBQU0sQUFBRUMsU0FBV0MseUJBQWMsQ0FBekJEO0FBRU8sSUFBQSxBQUFNRCxtQ0FBRCxBQUFMO2NBQU1BOytCQUFBQTthQUFBQTtnQ0FBQUE7OztrQkFBQUE7O1lBQ25CRyxLQUFBQTttQkFBQUEsU0FBQUEsT0FBT0MsTUFBTSxFQUFFQyxPQUFPO2dCQUNwQixJQUFJQyxPQUFPO2dCQUVYLHdCQUE0QkQsUUFBcEJFLFVBQUFBLDBDQUFXO2dCQUVuQixJQUFJQSxhQUFhLE1BQU07b0JBQ3JCLElBQU1DLFdBQVcsSUFBSSxDQUFDQSxRQUFRLENBQUNIO29CQUUvQkQsU0FBUyxJQUFJLENBQUNLLFlBQVksQ0FBQ0w7b0JBRTNCRSxPQUFPQyxTQUFTQyxVQUFVSixRQUFRQztnQkFDcEM7Z0JBRUEsT0FBT0M7WUFDVDs7O1lBRUFFLEtBQUFBO21CQUFBQSxTQUFBQSxTQUFTSCxPQUFPO2dCQUNkLElBQU1LLGFBQWEsSUFBSSxDQUFDQyxhQUFhLElBQy9CQyxrQkFBa0JYLE9BQU9TLGFBQ3pCRyx3Q0FBeUNELGlCQUN6Q0UsVUFBVUQsc0NBQXNDRSxVQUFVLElBQzFEUCxXQUFXUSxvQkFBb0JGO2dCQUVyQyxPQUFPTjtZQUNUOzs7O1lBRU9TLEtBQUFBO21CQUFQLFNBQU9BLGlDQUFpQ0MsUUFBUSxFQUFFUixVQUFVLEVBQUVTLE9BQU87Z0JBQUksT0FBT0MsaUJBQVksQ0FBQ0gsZ0NBQWdDLENBM0IxR2pCLG9CQTJCK0hrQixVQUFVUixZQUFZUztZQUFVOzs7V0EzQi9KbkI7RUFBMkJvQixpQkFBWTtBQThCNUQsU0FBU0osb0JBQW9CRixPQUFPO0lBQ2xDQSxVQUFVTyxJQUFBQSxhQUFLLEVBQUNQLFVBQVUsR0FBRztJQUU3QixJQUFNTixXQUFXTTtJQUVqQixPQUFPTjtBQUNUIn0=