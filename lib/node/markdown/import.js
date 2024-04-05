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
var sixth = _necessary.arrayUtilities.sixth;
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
                    var path = this.path(context);
                    html = importer(path, indent, context);
                }
                return html;
            }
        },
        {
            key: "path",
            value: function path(context) {
                var childNodes = this.getChildNodes(), sixthChildNode = sixth(childNodes), doublyQuotedStringLiteralTerminalNode = sixthChildNode, content = doublyQuotedStringLiteralTerminalNode.getContent(), path = (0, _string.shave)(content); ///
                return path;
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ub2RlL21hcmtkb3duL2ltcG9ydC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgYXJyYXlVdGlsaXRpZXMgfSBmcm9tIFwibmVjZXNzYXJ5XCI7XG5cbmltcG9ydCBNYXJrZG93bk5vZGUgZnJvbSBcIi4uLy4uL25vZGUvbWFya2Rvd25cIjtcblxuaW1wb3J0IHsgc2hhdmUgfSBmcm9tIFwiLi4vLi4vdXRpbGl0aWVzL3N0cmluZ1wiO1xuXG5jb25zdCB7IHNpeHRoIH0gPSBhcnJheVV0aWxpdGllcztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW1wb3J0TWFya2Rvd25Ob2RlIGV4dGVuZHMgTWFya2Rvd25Ob2RlIHtcbiAgYXNIVE1MKGluZGVudCwgY29udGV4dCkge1xuICAgIGxldCBodG1sID0gbnVsbDtcblxuICAgIGNvbnN0IHsgaW1wb3J0ZXIgPSBudWxsIH0gPSBjb250ZXh0O1xuXG4gICAgaWYgKGltcG9ydGVyICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBwYXRoID0gdGhpcy5wYXRoKGNvbnRleHQpO1xuXG4gICAgICBodG1sID0gaW1wb3J0ZXIocGF0aCwgaW5kZW50LCBjb250ZXh0KTtcbiAgICB9XG5cbiAgICByZXR1cm4gaHRtbDtcbiAgfVxuXG4gIHBhdGgoY29udGV4dCkge1xuICAgIGNvbnN0IGNoaWxkTm9kZXMgPSB0aGlzLmdldENoaWxkTm9kZXMoKSxcbiAgICAgICAgICBzaXh0aENoaWxkTm9kZSA9IHNpeHRoKGNoaWxkTm9kZXMpLFxuICAgICAgICAgIGRvdWJseVF1b3RlZFN0cmluZ0xpdGVyYWxUZXJtaW5hbE5vZGUgID0gc2l4dGhDaGlsZE5vZGUsXG4gICAgICAgICAgY29udGVudCA9IGRvdWJseVF1b3RlZFN0cmluZ0xpdGVyYWxUZXJtaW5hbE5vZGUuZ2V0Q29udGVudCgpLFxuICAgICAgICAgIHBhdGggPSBzaGF2ZShjb250ZW50KTsgIC8vL1xuXG4gICAgcmV0dXJuIHBhdGg7XG4gIH1cblxuICBzdGF0aWMgZnJvbVJ1bGVOYW1lQ2hpbGROb2Rlc0FuZE9wYWNpdHkocnVsZU5hbWUsIGNoaWxkTm9kZXMsIG9wYWNpdHkpIHsgcmV0dXJuIE1hcmtkb3duTm9kZS5mcm9tUnVsZU5hbWVDaGlsZE5vZGVzQW5kT3BhY2l0eShJbXBvcnRNYXJrZG93bk5vZGUsIHJ1bGVOYW1lLCBjaGlsZE5vZGVzLCBvcGFjaXR5KTsgfVxufVxuIl0sIm5hbWVzIjpbIkltcG9ydE1hcmtkb3duTm9kZSIsInNpeHRoIiwiYXJyYXlVdGlsaXRpZXMiLCJhc0hUTUwiLCJpbmRlbnQiLCJjb250ZXh0IiwiaHRtbCIsImltcG9ydGVyIiwicGF0aCIsImNoaWxkTm9kZXMiLCJnZXRDaGlsZE5vZGVzIiwic2l4dGhDaGlsZE5vZGUiLCJkb3VibHlRdW90ZWRTdHJpbmdMaXRlcmFsVGVybWluYWxOb2RlIiwiY29udGVudCIsImdldENvbnRlbnQiLCJzaGF2ZSIsImZyb21SdWxlTmFtZUNoaWxkTm9kZXNBbmRPcGFjaXR5IiwicnVsZU5hbWUiLCJvcGFjaXR5IiwiTWFya2Rvd25Ob2RlIl0sInJhbmdlTWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OyIsIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQVVxQkE7Ozt5QkFSVTsrREFFTjtzQkFFSDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUV0QixJQUFNLEFBQUVDLFFBQVVDLHlCQUFjLENBQXhCRDtBQUVPLElBQUEsQUFBTUQsbUNBQUQsQUFBTDtjQUFNQTsrQkFBQUE7YUFBQUE7Z0NBQUFBOzs7a0JBQUFBOztZQUNuQkcsS0FBQUE7bUJBQUFBLFNBQUFBLE9BQU9DLE1BQU0sRUFBRUMsT0FBTztnQkFDcEIsSUFBSUMsT0FBTztnQkFFWCx3QkFBNEJELFFBQXBCRSxVQUFBQSwwQ0FBVztnQkFFbkIsSUFBSUEsYUFBYSxNQUFNO29CQUNyQixJQUFNQyxPQUFPLElBQUksQ0FBQ0EsSUFBSSxDQUFDSDtvQkFFdkJDLE9BQU9DLFNBQVNDLE1BQU1KLFFBQVFDO2dCQUNoQztnQkFFQSxPQUFPQztZQUNUOzs7WUFFQUUsS0FBQUE7bUJBQUFBLFNBQUFBLEtBQUtILE9BQU87Z0JBQ1YsSUFBTUksYUFBYSxJQUFJLENBQUNDLGFBQWEsSUFDL0JDLGlCQUFpQlYsTUFBTVEsYUFDdkJHLHdDQUF5Q0QsZ0JBQ3pDRSxVQUFVRCxzQ0FBc0NFLFVBQVUsSUFDMUROLE9BQU9PLElBQUFBLGFBQUssRUFBQ0YsVUFBVyxHQUFHO2dCQUVqQyxPQUFPTDtZQUNUOzs7O1lBRU9RLEtBQUFBO21CQUFQLFNBQU9BLGlDQUFpQ0MsUUFBUSxFQUFFUixVQUFVLEVBQUVTLE9BQU87Z0JBQUksT0FBT0MsaUJBQVksQ0FBQ0gsZ0NBQWdDLENBekIxR2hCLG9CQXlCK0hpQixVQUFVUixZQUFZUztZQUFVOzs7V0F6Qi9KbEI7RUFBMkJtQixpQkFBWSJ9