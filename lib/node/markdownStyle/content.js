"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return ContentMarkdownStyleNode;
    }
});
var _markdownStyle = /*#__PURE__*/ _interop_require_default(require("../../node/markdownStyle"));
var _string = require("../../utilities/string");
var _constants = require("../../constants");
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
var ContentMarkdownStyleNode = /*#__PURE__*/ function(MarkdownStyleNode) {
    _inherits(ContentMarkdownStyleNode, MarkdownStyleNode);
    function ContentMarkdownStyleNode() {
        _class_call_check(this, ContentMarkdownStyleNode);
        return _call_super(this, ContentMarkdownStyleNode, arguments);
    }
    _create_class(ContentMarkdownStyleNode, [
        {
            key: "content",
            value: function content(context) {
                var firstTokenIndex = this.getFirstTokenIndex(context), lastTokenIndex = this.getLastTokenIndex(context), start = firstTokenIndex, end = lastTokenIndex + 1;
                var tokens = context.tokens;
                tokens = tokens.slice(start, end);
                var content = _constants.EMPTY_STRING;
                tokens.forEach(function(token) {
                    var tokenContent = token.getContent();
                    content += tokenContent;
                });
                content = (0, _string.removeWhitespace)(content);
                content += _constants.CARRIAGE_RETURN;
                content += _constants.CARRIAGE_RETURN;
                return content;
            }
        }
    ], [
        {
            key: "fromRuleNameChildNodesOpacityAndPrecedence",
            value: function fromRuleNameChildNodesOpacityAndPrecedence(ruleName, childNodes, opacity, precedence) {
                return _markdownStyle.default.fromRuleNameChildNodesOpacityAndPrecedence(ContentMarkdownStyleNode, ruleName, childNodes, opacity, precedence);
            }
        }
    ]);
    return ContentMarkdownStyleNode;
}(_markdownStyle.default);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ub2RlL21hcmtkb3duU3R5bGUvY29udGVudC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IE1hcmtkb3duU3R5bGVOb2RlIGZyb20gXCIuLi8uLi9ub2RlL21hcmtkb3duU3R5bGVcIjtcblxuaW1wb3J0IHsgcmVtb3ZlV2hpdGVzcGFjZSB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvc3RyaW5nXCI7XG5pbXBvcnQgeyBFTVBUWV9TVFJJTkcsIENBUlJJQUdFX1JFVFVSTiB9IGZyb20gXCIuLi8uLi9jb25zdGFudHNcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29udGVudE1hcmtkb3duU3R5bGVOb2RlIGV4dGVuZHMgTWFya2Rvd25TdHlsZU5vZGUge1xuICBjb250ZW50KGNvbnRleHQpIHtcbiAgICBjb25zdCBmaXJzdFRva2VuSW5kZXggPSB0aGlzLmdldEZpcnN0VG9rZW5JbmRleChjb250ZXh0KSxcbiAgICAgICAgICBsYXN0VG9rZW5JbmRleCA9IHRoaXMuZ2V0TGFzdFRva2VuSW5kZXgoY29udGV4dCksXG4gICAgICAgICAgc3RhcnQgPSBmaXJzdFRva2VuSW5kZXgsICAvLy9cbiAgICAgICAgICBlbmQgPSBsYXN0VG9rZW5JbmRleCArIDE7XG5cbiAgICBsZXQgeyB0b2tlbnMgfSA9IGNvbnRleHQ7XG5cbiAgICB0b2tlbnMgPSB0b2tlbnMuc2xpY2Uoc3RhcnQsIGVuZCk7XG5cbiAgICBsZXQgY29udGVudCA9IEVNUFRZX1NUUklORztcblxuICAgIHRva2Vucy5mb3JFYWNoKCh0b2tlbikgPT4ge1xuICAgICAgY29uc3QgdG9rZW5Db250ZW50ID0gdG9rZW4uZ2V0Q29udGVudCgpO1xuXG4gICAgICBjb250ZW50ICs9IHRva2VuQ29udGVudDtcbiAgICB9KTtcblxuICAgIGNvbnRlbnQgPSByZW1vdmVXaGl0ZXNwYWNlKGNvbnRlbnQpO1xuXG4gICAgY29udGVudCArPSBDQVJSSUFHRV9SRVRVUk47XG4gICAgY29udGVudCArPSBDQVJSSUFHRV9SRVRVUk47XG5cbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUnVsZU5hbWVDaGlsZE5vZGVzT3BhY2l0eUFuZFByZWNlZGVuY2UocnVsZU5hbWUsIGNoaWxkTm9kZXMsIG9wYWNpdHksIHByZWNlZGVuY2UpIHsgcmV0dXJuIE1hcmtkb3duU3R5bGVOb2RlLmZyb21SdWxlTmFtZUNoaWxkTm9kZXNPcGFjaXR5QW5kUHJlY2VkZW5jZShDb250ZW50TWFya2Rvd25TdHlsZU5vZGUsIHJ1bGVOYW1lLCBjaGlsZE5vZGVzLCBvcGFjaXR5LCBwcmVjZWRlbmNlKTsgfVxufVxuIl0sIm5hbWVzIjpbIkNvbnRlbnRNYXJrZG93blN0eWxlTm9kZSIsImNvbnRlbnQiLCJjb250ZXh0IiwiZmlyc3RUb2tlbkluZGV4IiwiZ2V0Rmlyc3RUb2tlbkluZGV4IiwibGFzdFRva2VuSW5kZXgiLCJnZXRMYXN0VG9rZW5JbmRleCIsInN0YXJ0IiwiZW5kIiwidG9rZW5zIiwic2xpY2UiLCJFTVBUWV9TVFJJTkciLCJmb3JFYWNoIiwidG9rZW4iLCJ0b2tlbkNvbnRlbnQiLCJnZXRDb250ZW50IiwicmVtb3ZlV2hpdGVzcGFjZSIsIkNBUlJJQUdFX1JFVFVSTiIsImZyb21SdWxlTmFtZUNoaWxkTm9kZXNPcGFjaXR5QW5kUHJlY2VkZW5jZSIsInJ1bGVOYW1lIiwiY2hpbGROb2RlcyIsIm9wYWNpdHkiLCJwcmVjZWRlbmNlIiwiTWFya2Rvd25TdHlsZU5vZGUiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBT3FCQTs7O29FQUxTO3NCQUVHO3lCQUNhOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRS9CLElBQUEsQUFBTUEseUNBQU47Y0FBTUE7YUFBQUE7Z0NBQUFBO1FBQU4sT0FBQSxrQkFBTUE7O2tCQUFBQTs7WUFDbkJDLEtBQUFBO21CQUFBQSxTQUFBQSxRQUFRQyxPQUFPO2dCQUNiLElBQU1DLGtCQUFrQixJQUFJLENBQUNDLGtCQUFrQixDQUFDRixVQUMxQ0csaUJBQWlCLElBQUksQ0FBQ0MsaUJBQWlCLENBQUNKLFVBQ3hDSyxRQUFRSixpQkFDUkssTUFBTUgsaUJBQWlCO2dCQUU3QixJQUFJLEFBQUVJLFNBQVdQLFFBQVhPO2dCQUVOQSxTQUFTQSxPQUFPQyxLQUFLLENBQUNILE9BQU9DO2dCQUU3QixJQUFJUCxVQUFVVSx1QkFBWTtnQkFFMUJGLE9BQU9HLE9BQU8sQ0FBQyxTQUFDQztvQkFDZCxJQUFNQyxlQUFlRCxNQUFNRSxVQUFVO29CQUVyQ2QsV0FBV2E7Z0JBQ2I7Z0JBRUFiLFVBQVVlLElBQUFBLHdCQUFnQixFQUFDZjtnQkFFM0JBLFdBQVdnQiwwQkFBZTtnQkFDMUJoQixXQUFXZ0IsMEJBQWU7Z0JBRTFCLE9BQU9oQjtZQUNUOzs7O1lBRU9pQixLQUFBQTttQkFBUCxTQUFPQSwyQ0FBMkNDLFFBQVEsRUFBRUMsVUFBVSxFQUFFQyxPQUFPLEVBQUVDLFVBQVU7Z0JBQUksT0FBT0Msc0JBQWlCLENBQUNMLDBDQUEwQyxDQTNCL0lsQiwwQkEyQjBLbUIsVUFBVUMsWUFBWUMsU0FBU0M7WUFBYTs7O1dBM0J0TnRCO0VBQWlDdUIsc0JBQWlCIn0=