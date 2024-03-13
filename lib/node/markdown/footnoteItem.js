"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return FootnoteItemMarkdownNode;
    }
});
var _necessary = require("necessary");
var _markdown = /*#__PURE__*/ _interop_require_default(require("../../node/markdown"));
var _anchor = /*#__PURE__*/ _interop_require_default(require("../../node/markdown/anchor"));
var _ruleNames = require("../../ruleNames");
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
var first = _necessary.arrayUtilities.first, second = _necessary.arrayUtilities.second;
var FootnoteItemMarkdownNode = /*#__PURE__*/ function(MarkdownNode) {
    _inherits(FootnoteItemMarkdownNode, MarkdownNode);
    var _super = _create_super(FootnoteItemMarkdownNode);
    function FootnoteItemMarkdownNode() {
        _class_call_check(this, FootnoteItemMarkdownNode);
        return _super.apply(this, arguments);
    }
    _create_class(FootnoteItemMarkdownNode, [
        {
            key: "getIdentifier",
            value: function getIdentifier(context) {
                var childNodes = this.getChildNodes(), firstChildNode = first(childNodes), anchorMarkdownNode = firstChildNode, identifier = anchorMarkdownNode.getIdentifier(context);
                return identifier;
            }
        }
    ], [
        {
            key: "fromFootnoteMarkdownNodeAndIdentifier",
            value: function fromFootnoteMarkdownNodeAndIdentifier(footnoteMarkdownNode, identifier) {
                var anchorMarkdownNode = _anchor.default.fromIdentifier(identifier), footnoteMarkdownNodeChildNodes = footnoteMarkdownNode.getChildNodes(), secondFootnoteMarkdownNodeChildNode = second(footnoteMarkdownNodeChildNodes), paragraphMarkdownNode = secondFootnoteMarkdownNodeChildNode, ruleName = _ruleNames.FOOTNOTE_ITEM_RULE_NAME, childNodes = [
                    anchorMarkdownNode,
                    paragraphMarkdownNode
                ], ambiguous = false, footnoteItemMarkdownNode = _markdown.default.fromRuleNameChildNodesAndAmbiguous(FootnoteItemMarkdownNode, ruleName, childNodes, ambiguous);
                return footnoteItemMarkdownNode;
            }
        }
    ]);
    return FootnoteItemMarkdownNode;
}(_markdown.default);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ub2RlL21hcmtkb3duL2Zvb3Rub3RlSXRlbS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgYXJyYXlVdGlsaXRpZXMgfSBmcm9tIFwibmVjZXNzYXJ5XCI7XG5cbmltcG9ydCBNYXJrZG93bk5vZGUgZnJvbSBcIi4uLy4uL25vZGUvbWFya2Rvd25cIjtcbmltcG9ydCBBbmNob3JNYXJrZG93bk5vZGUgZnJvbSBcIi4uLy4uL25vZGUvbWFya2Rvd24vYW5jaG9yXCI7XG5cbmltcG9ydCB7IEZPT1ROT1RFX0lURU1fUlVMRV9OQU1FIH0gZnJvbSBcIi4uLy4uL3J1bGVOYW1lc1wiO1xuXG5jb25zdCB7IGZpcnN0LCBzZWNvbmQgfSA9IGFycmF5VXRpbGl0aWVzO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBGb290bm90ZUl0ZW1NYXJrZG93bk5vZGUgZXh0ZW5kcyBNYXJrZG93bk5vZGUge1xuICBnZXRJZGVudGlmaWVyKGNvbnRleHQpIHtcbiAgICBjb25zdCBjaGlsZE5vZGVzID0gdGhpcy5nZXRDaGlsZE5vZGVzKCksXG4gICAgICAgICAgZmlyc3RDaGlsZE5vZGUgPSBmaXJzdChjaGlsZE5vZGVzKSxcbiAgICAgICAgICBhbmNob3JNYXJrZG93bk5vZGUgPSBmaXJzdENoaWxkTm9kZSwgIC8vL1xuICAgICAgICAgIGlkZW50aWZpZXIgPSBhbmNob3JNYXJrZG93bk5vZGUuZ2V0SWRlbnRpZmllcihjb250ZXh0KTtcblxuICAgIHJldHVybiBpZGVudGlmaWVyO1xuICB9XG5cbiAgc3RhdGljIGZyb21Gb290bm90ZU1hcmtkb3duTm9kZUFuZElkZW50aWZpZXIoZm9vdG5vdGVNYXJrZG93bk5vZGUsIGlkZW50aWZpZXIpIHtcbiAgICBjb25zdCBhbmNob3JNYXJrZG93bk5vZGUgPSBBbmNob3JNYXJrZG93bk5vZGUuZnJvbUlkZW50aWZpZXIoaWRlbnRpZmllciksXG4gICAgICAgICAgZm9vdG5vdGVNYXJrZG93bk5vZGVDaGlsZE5vZGVzID0gZm9vdG5vdGVNYXJrZG93bk5vZGUuZ2V0Q2hpbGROb2RlcygpLFxuICAgICAgICAgIHNlY29uZEZvb3Rub3RlTWFya2Rvd25Ob2RlQ2hpbGROb2RlID0gc2Vjb25kKGZvb3Rub3RlTWFya2Rvd25Ob2RlQ2hpbGROb2RlcyksXG4gICAgICAgICAgcGFyYWdyYXBoTWFya2Rvd25Ob2RlID0gc2Vjb25kRm9vdG5vdGVNYXJrZG93bk5vZGVDaGlsZE5vZGUsICAvLy9cbiAgICAgICAgICBydWxlTmFtZSA9IEZPT1ROT1RFX0lURU1fUlVMRV9OQU1FLFxuICAgICAgICAgIGNoaWxkTm9kZXMgPSBbXG4gICAgICAgICAgICBhbmNob3JNYXJrZG93bk5vZGUsXG4gICAgICAgICAgICBwYXJhZ3JhcGhNYXJrZG93bk5vZGVcbiAgICAgICAgICBdLFxuICAgICAgICAgIGFtYmlndW91cyA9IGZhbHNlLFxuICAgICAgICAgIGZvb3Rub3RlSXRlbU1hcmtkb3duTm9kZSA9IE1hcmtkb3duTm9kZS5mcm9tUnVsZU5hbWVDaGlsZE5vZGVzQW5kQW1iaWd1b3VzKEZvb3Rub3RlSXRlbU1hcmtkb3duTm9kZSwgcnVsZU5hbWUsIGNoaWxkTm9kZXMsIGFtYmlndW91cyk7XG5cbiAgICByZXR1cm4gZm9vdG5vdGVJdGVtTWFya2Rvd25Ob2RlO1xuICB9XG59XG4iXSwibmFtZXMiOlsiRm9vdG5vdGVJdGVtTWFya2Rvd25Ob2RlIiwiZmlyc3QiLCJhcnJheVV0aWxpdGllcyIsInNlY29uZCIsImdldElkZW50aWZpZXIiLCJjb250ZXh0IiwiY2hpbGROb2RlcyIsImdldENoaWxkTm9kZXMiLCJmaXJzdENoaWxkTm9kZSIsImFuY2hvck1hcmtkb3duTm9kZSIsImlkZW50aWZpZXIiLCJmcm9tRm9vdG5vdGVNYXJrZG93bk5vZGVBbmRJZGVudGlmaWVyIiwiZm9vdG5vdGVNYXJrZG93bk5vZGUiLCJBbmNob3JNYXJrZG93bk5vZGUiLCJmcm9tSWRlbnRpZmllciIsImZvb3Rub3RlTWFya2Rvd25Ob2RlQ2hpbGROb2RlcyIsInNlY29uZEZvb3Rub3RlTWFya2Rvd25Ob2RlQ2hpbGROb2RlIiwicGFyYWdyYXBoTWFya2Rvd25Ob2RlIiwicnVsZU5hbWUiLCJGT09UTk9URV9JVEVNX1JVTEVfTkFNRSIsImFtYmlndW91cyIsImZvb3Rub3RlSXRlbU1hcmtkb3duTm9kZSIsIk1hcmtkb3duTm9kZSIsImZyb21SdWxlTmFtZUNoaWxkTm9kZXNBbmRBbWJpZ3VvdXMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBV3FCQTs7O3lCQVRVOytEQUVOOzZEQUNNO3lCQUVTOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRXhDLElBQVFDLFFBQWtCQyx5QkFBYyxDQUFoQ0QsT0FBT0UsU0FBV0QseUJBQWMsQ0FBekJDO0FBRUEsSUFBQSxBQUFNSCx5Q0FBRCxBQUFMO2NBQU1BOytCQUFBQTthQUFBQTtnQ0FBQUE7OztrQkFBQUE7O1lBQ25CSSxLQUFBQTttQkFBQUEsU0FBQUEsY0FBY0MsT0FBTztnQkFDbkIsSUFBTUMsYUFBYSxJQUFJLENBQUNDLGFBQWEsSUFDL0JDLGlCQUFpQlAsTUFBTUssYUFDdkJHLHFCQUFxQkQsZ0JBQ3JCRSxhQUFhRCxtQkFBbUJMLGFBQWEsQ0FBQ0M7Z0JBRXBELE9BQU9LO1lBQ1Q7Ozs7WUFFT0MsS0FBQUE7bUJBQVAsU0FBT0Esc0NBQXNDQyxvQkFBb0IsRUFBRUYsVUFBVTtnQkFDM0UsSUFBTUQscUJBQXFCSSxlQUFrQixDQUFDQyxjQUFjLENBQUNKLGFBQ3ZESyxpQ0FBaUNILHFCQUFxQkwsYUFBYSxJQUNuRVMsc0NBQXNDYixPQUFPWSxpQ0FDN0NFLHdCQUF3QkQscUNBQ3hCRSxXQUFXQyxrQ0FBdUIsRUFDbENiLGFBQWE7b0JBQ1hHO29CQUNBUTtpQkFDRCxFQUNERyxZQUFZLE9BQ1pDLDJCQUEyQkMsaUJBQVksQ0FBQ0Msa0NBQWtDLENBckIvRHZCLDBCQXFCMEZrQixVQUFVWixZQUFZYztnQkFFakksT0FBT0M7WUFDVDs7O1dBeEJtQnJCO0VBQWlDc0IsaUJBQVkifQ==