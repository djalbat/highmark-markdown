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
                    var tokens = context.tokens;
                    html = importer(filePath, indent, context);
                    Object.assign(context, {
                        tokens: tokens
                    });
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ub2RlL21hcmtkb3duL2ltcG9ydC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgYXJyYXlVdGlsaXRpZXMgfSBmcm9tIFwibmVjZXNzYXJ5XCI7XG5cbmltcG9ydCBNYXJrZG93bk5vZGUgZnJvbSBcIi4uLy4uL25vZGUvbWFya2Rvd25cIjtcblxuaW1wb3J0IHsgc2hhdmUgfSBmcm9tIFwiLi4vLi4vdXRpbGl0aWVzL3N0cmluZ1wiO1xuXG5jb25zdCB7IGZvdXJ0aCB9ID0gYXJyYXlVdGlsaXRpZXM7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEltcG9ydE1hcmtkb3duTm9kZSBleHRlbmRzIE1hcmtkb3duTm9kZSB7XG4gIGFzSFRNTChpbmRlbnQsIGNvbnRleHQpIHtcbiAgICBsZXQgaHRtbCA9IG51bGw7XG5cbiAgICBjb25zdCB7IGltcG9ydGVyID0gbnVsbCB9ID0gY29udGV4dDtcblxuICAgIGlmIChpbXBvcnRlciAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgZmlsZVBhdGggPSB0aGlzLmZpbGVQYXRoKGNvbnRleHQpO1xuXG4gICAgICBpbmRlbnQgPSB0aGlzLmFkanVzdEluZGVudChpbmRlbnQpO1xuXG4gICAgICBjb25zdCB7IHRva2VucyB9ID0gY29udGV4dDtcblxuICAgICAgaHRtbCA9IGltcG9ydGVyKGZpbGVQYXRoLCBpbmRlbnQsIGNvbnRleHQpO1xuXG4gICAgICBPYmplY3QuYXNzaWduKGNvbnRleHQsIHtcbiAgICAgICAgdG9rZW5zXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gaHRtbDtcbiAgfVxuXG4gIGZpbGVQYXRoKGNvbnRleHQpIHtcbiAgICBjb25zdCBjaGlsZE5vZGVzID0gdGhpcy5nZXRDaGlsZE5vZGVzKCksXG4gICAgICAgICAgZm91cnRoQ2hpbGROb2RlID0gZm91cnRoKGNoaWxkTm9kZXMpLFxuICAgICAgICAgIGRvdWJseVF1b3RlZFN0cmluZ0xpdGVyYWxUZXJtaW5hbE5vZGUgID0gZm91cnRoQ2hpbGROb2RlLFxuICAgICAgICAgIGNvbnRlbnQgPSBkb3VibHlRdW90ZWRTdHJpbmdMaXRlcmFsVGVybWluYWxOb2RlLmdldENvbnRlbnQoKSxcbiAgICAgICAgICBmaWxlUGF0aCA9IGZpbGVQYXRoRnJvbUNvbnRlbnQoY29udGVudCk7XG5cbiAgICByZXR1cm4gZmlsZVBhdGg7XG4gIH1cblxuICBzdGF0aWMgZnJvbVJ1bGVOYW1lQ2hpbGROb2Rlc0FuZE9wYWNpdHkocnVsZU5hbWUsIGNoaWxkTm9kZXMsIG9wYWNpdHkpIHsgcmV0dXJuIE1hcmtkb3duTm9kZS5mcm9tUnVsZU5hbWVDaGlsZE5vZGVzQW5kT3BhY2l0eShJbXBvcnRNYXJrZG93bk5vZGUsIHJ1bGVOYW1lLCBjaGlsZE5vZGVzLCBvcGFjaXR5KTsgfVxufVxuXG5mdW5jdGlvbiBmaWxlUGF0aEZyb21Db250ZW50KGNvbnRlbnQpIHtcbiAgY29udGVudCA9IHNoYXZlKGNvbnRlbnQpOyAvLy9cblxuICBjb25zdCBmaWxlUGF0aCA9IGNvbnRlbnQ7XG5cbiAgcmV0dXJuIGZpbGVQYXRoO1xufVxuIl0sIm5hbWVzIjpbIkltcG9ydE1hcmtkb3duTm9kZSIsImZvdXJ0aCIsImFycmF5VXRpbGl0aWVzIiwiYXNIVE1MIiwiaW5kZW50IiwiY29udGV4dCIsImh0bWwiLCJpbXBvcnRlciIsImZpbGVQYXRoIiwiYWRqdXN0SW5kZW50IiwidG9rZW5zIiwiT2JqZWN0IiwiYXNzaWduIiwiY2hpbGROb2RlcyIsImdldENoaWxkTm9kZXMiLCJmb3VydGhDaGlsZE5vZGUiLCJkb3VibHlRdW90ZWRTdHJpbmdMaXRlcmFsVGVybWluYWxOb2RlIiwiY29udGVudCIsImdldENvbnRlbnQiLCJmaWxlUGF0aEZyb21Db250ZW50IiwiZnJvbVJ1bGVOYW1lQ2hpbGROb2Rlc0FuZE9wYWNpdHkiLCJydWxlTmFtZSIsIm9wYWNpdHkiLCJNYXJrZG93bk5vZGUiLCJzaGF2ZSJdLCJyYW5nZU1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7IiwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBVXFCQTs7O3lCQVJVOytEQUVOO3NCQUVIOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRXRCLElBQU0sQUFBRUMsU0FBV0MseUJBQWMsQ0FBekJEO0FBRU8sSUFBQSxBQUFNRCxtQ0FBRCxBQUFMO2NBQU1BOytCQUFBQTthQUFBQTtnQ0FBQUE7OztrQkFBQUE7O1lBQ25CRyxLQUFBQTttQkFBQUEsU0FBQUEsT0FBT0MsTUFBTSxFQUFFQyxPQUFPO2dCQUNwQixJQUFJQyxPQUFPO2dCQUVYLHdCQUE0QkQsUUFBcEJFLFVBQUFBLDBDQUFXO2dCQUVuQixJQUFJQSxhQUFhLE1BQU07b0JBQ3JCLElBQU1DLFdBQVcsSUFBSSxDQUFDQSxRQUFRLENBQUNIO29CQUUvQkQsU0FBUyxJQUFJLENBQUNLLFlBQVksQ0FBQ0w7b0JBRTNCLElBQU0sQUFBRU0sU0FBV0wsUUFBWEs7b0JBRVJKLE9BQU9DLFNBQVNDLFVBQVVKLFFBQVFDO29CQUVsQ00sT0FBT0MsTUFBTSxDQUFDUCxTQUFTO3dCQUNyQkssUUFBQUE7b0JBQ0Y7Z0JBQ0Y7Z0JBRUEsT0FBT0o7WUFDVDs7O1lBRUFFLEtBQUFBO21CQUFBQSxTQUFBQSxTQUFTSCxPQUFPO2dCQUNkLElBQU1RLGFBQWEsSUFBSSxDQUFDQyxhQUFhLElBQy9CQyxrQkFBa0JkLE9BQU9ZLGFBQ3pCRyx3Q0FBeUNELGlCQUN6Q0UsVUFBVUQsc0NBQXNDRSxVQUFVLElBQzFEVixXQUFXVyxvQkFBb0JGO2dCQUVyQyxPQUFPVDtZQUNUOzs7O1lBRU9ZLEtBQUFBO21CQUFQLFNBQU9BLGlDQUFpQ0MsUUFBUSxFQUFFUixVQUFVLEVBQUVTLE9BQU87Z0JBQUksT0FBT0MsaUJBQVksQ0FBQ0gsZ0NBQWdDLENBakMxR3BCLG9CQWlDK0hxQixVQUFVUixZQUFZUztZQUFVOzs7V0FqQy9KdEI7RUFBMkJ1QixpQkFBWTtBQW9DNUQsU0FBU0osb0JBQW9CRixPQUFPO0lBQ2xDQSxVQUFVTyxJQUFBQSxhQUFLLEVBQUNQLFVBQVUsR0FBRztJQUU3QixJQUFNVCxXQUFXUztJQUVqQixPQUFPVDtBQUNUIn0=