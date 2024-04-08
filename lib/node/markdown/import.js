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
    content = (0, _string.trim)(content); ///
    var filePath = content;
    return filePath;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ub2RlL21hcmtkb3duL2ltcG9ydC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgYXJyYXlVdGlsaXRpZXMgfSBmcm9tIFwibmVjZXNzYXJ5XCI7XG5cbmltcG9ydCBNYXJrZG93bk5vZGUgZnJvbSBcIi4uLy4uL25vZGUvbWFya2Rvd25cIjtcblxuaW1wb3J0IHsgdHJpbSB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvc3RyaW5nXCI7XG5cbmNvbnN0IHsgZm91cnRoIH0gPSBhcnJheVV0aWxpdGllcztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW1wb3J0TWFya2Rvd25Ob2RlIGV4dGVuZHMgTWFya2Rvd25Ob2RlIHtcbiAgYXNIVE1MKGluZGVudCwgY29udGV4dCkge1xuICAgIGxldCBodG1sID0gbnVsbDtcblxuICAgIGNvbnN0IHsgaW1wb3J0ZXIgPSBudWxsIH0gPSBjb250ZXh0O1xuXG4gICAgaWYgKGltcG9ydGVyICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBmaWxlUGF0aCA9IHRoaXMuZmlsZVBhdGgoY29udGV4dCk7XG5cbiAgICAgIGluZGVudCA9IHRoaXMuYWRqdXN0SW5kZW50KGluZGVudCk7XG5cbiAgICAgIGNvbnN0IHsgdG9rZW5zIH0gPSBjb250ZXh0O1xuXG4gICAgICBodG1sID0gaW1wb3J0ZXIoZmlsZVBhdGgsIGluZGVudCwgY29udGV4dCk7XG5cbiAgICAgIE9iamVjdC5hc3NpZ24oY29udGV4dCwge1xuICAgICAgICB0b2tlbnNcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiBodG1sO1xuICB9XG5cbiAgZmlsZVBhdGgoY29udGV4dCkge1xuICAgIGNvbnN0IGNoaWxkTm9kZXMgPSB0aGlzLmdldENoaWxkTm9kZXMoKSxcbiAgICAgICAgICBmb3VydGhDaGlsZE5vZGUgPSBmb3VydGgoY2hpbGROb2RlcyksXG4gICAgICAgICAgZG91Ymx5UXVvdGVkU3RyaW5nTGl0ZXJhbFRlcm1pbmFsTm9kZSAgPSBmb3VydGhDaGlsZE5vZGUsXG4gICAgICAgICAgY29udGVudCA9IGRvdWJseVF1b3RlZFN0cmluZ0xpdGVyYWxUZXJtaW5hbE5vZGUuZ2V0Q29udGVudCgpLFxuICAgICAgICAgIGZpbGVQYXRoID0gZmlsZVBhdGhGcm9tQ29udGVudChjb250ZW50KTtcblxuICAgIHJldHVybiBmaWxlUGF0aDtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUnVsZU5hbWVDaGlsZE5vZGVzQW5kT3BhY2l0eShydWxlTmFtZSwgY2hpbGROb2Rlcywgb3BhY2l0eSkgeyByZXR1cm4gTWFya2Rvd25Ob2RlLmZyb21SdWxlTmFtZUNoaWxkTm9kZXNBbmRPcGFjaXR5KEltcG9ydE1hcmtkb3duTm9kZSwgcnVsZU5hbWUsIGNoaWxkTm9kZXMsIG9wYWNpdHkpOyB9XG59XG5cbmZ1bmN0aW9uIGZpbGVQYXRoRnJvbUNvbnRlbnQoY29udGVudCkge1xuICBjb250ZW50ID0gdHJpbShjb250ZW50KTsgLy8vXG5cbiAgY29uc3QgZmlsZVBhdGggPSBjb250ZW50O1xuXG4gIHJldHVybiBmaWxlUGF0aDtcbn1cbiJdLCJuYW1lcyI6WyJJbXBvcnRNYXJrZG93bk5vZGUiLCJmb3VydGgiLCJhcnJheVV0aWxpdGllcyIsImFzSFRNTCIsImluZGVudCIsImNvbnRleHQiLCJodG1sIiwiaW1wb3J0ZXIiLCJmaWxlUGF0aCIsImFkanVzdEluZGVudCIsInRva2VucyIsIk9iamVjdCIsImFzc2lnbiIsImNoaWxkTm9kZXMiLCJnZXRDaGlsZE5vZGVzIiwiZm91cnRoQ2hpbGROb2RlIiwiZG91Ymx5UXVvdGVkU3RyaW5nTGl0ZXJhbFRlcm1pbmFsTm9kZSIsImNvbnRlbnQiLCJnZXRDb250ZW50IiwiZmlsZVBhdGhGcm9tQ29udGVudCIsImZyb21SdWxlTmFtZUNoaWxkTm9kZXNBbmRPcGFjaXR5IiwicnVsZU5hbWUiLCJvcGFjaXR5IiwiTWFya2Rvd25Ob2RlIiwidHJpbSJdLCJyYW5nZU1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7IiwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBVXFCQTs7O3lCQVJVOytEQUVOO3NCQUVKOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRXJCLElBQU0sQUFBRUMsU0FBV0MseUJBQWMsQ0FBekJEO0FBRU8sSUFBQSxBQUFNRCxtQ0FBRCxBQUFMO2NBQU1BOytCQUFBQTthQUFBQTtnQ0FBQUE7OztrQkFBQUE7O1lBQ25CRyxLQUFBQTttQkFBQUEsU0FBQUEsT0FBT0MsTUFBTSxFQUFFQyxPQUFPO2dCQUNwQixJQUFJQyxPQUFPO2dCQUVYLHdCQUE0QkQsUUFBcEJFLFVBQUFBLDBDQUFXO2dCQUVuQixJQUFJQSxhQUFhLE1BQU07b0JBQ3JCLElBQU1DLFdBQVcsSUFBSSxDQUFDQSxRQUFRLENBQUNIO29CQUUvQkQsU0FBUyxJQUFJLENBQUNLLFlBQVksQ0FBQ0w7b0JBRTNCLElBQU0sQUFBRU0sU0FBV0wsUUFBWEs7b0JBRVJKLE9BQU9DLFNBQVNDLFVBQVVKLFFBQVFDO29CQUVsQ00sT0FBT0MsTUFBTSxDQUFDUCxTQUFTO3dCQUNyQkssUUFBQUE7b0JBQ0Y7Z0JBQ0Y7Z0JBRUEsT0FBT0o7WUFDVDs7O1lBRUFFLEtBQUFBO21CQUFBQSxTQUFBQSxTQUFTSCxPQUFPO2dCQUNkLElBQU1RLGFBQWEsSUFBSSxDQUFDQyxhQUFhLElBQy9CQyxrQkFBa0JkLE9BQU9ZLGFBQ3pCRyx3Q0FBeUNELGlCQUN6Q0UsVUFBVUQsc0NBQXNDRSxVQUFVLElBQzFEVixXQUFXVyxvQkFBb0JGO2dCQUVyQyxPQUFPVDtZQUNUOzs7O1lBRU9ZLEtBQUFBO21CQUFQLFNBQU9BLGlDQUFpQ0MsUUFBUSxFQUFFUixVQUFVLEVBQUVTLE9BQU87Z0JBQUksT0FBT0MsaUJBQVksQ0FBQ0gsZ0NBQWdDLENBakMxR3BCLG9CQWlDK0hxQixVQUFVUixZQUFZUztZQUFVOzs7V0FqQy9KdEI7RUFBMkJ1QixpQkFBWTtBQW9DNUQsU0FBU0osb0JBQW9CRixPQUFPO0lBQ2xDQSxVQUFVTyxJQUFBQSxZQUFJLEVBQUNQLFVBQVUsR0FBRztJQUU1QixJQUFNVCxXQUFXUztJQUVqQixPQUFPVDtBQUNUIn0=