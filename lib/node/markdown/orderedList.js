"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return OrderedListMarkdownNode;
    }
});
var _necessary = require("necessary");
var _markdown = /*#__PURE__*/ _interop_require_default(require("../../node/markdown"));
var _attributeNames = require("../../attributeNames");
var _constants = require("../../constants");
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
var first = _necessary.arrayUtilities.first;
var OrderedListMarkdownNode = /*#__PURE__*/ function(MarkdownNode) {
    _inherits(OrderedListMarkdownNode, MarkdownNode);
    var _super = _create_super(OrderedListMarkdownNode);
    function OrderedListMarkdownNode() {
        _class_call_check(this, OrderedListMarkdownNode);
        return _super.apply(this, arguments);
    }
    _create_class(OrderedListMarkdownNode, [
        {
            key: "asHTML",
            value: function asHTML(indent, context) {
                indent = this.adjustIndent(indent);
                var start = this.getStart(), tagName = this.getTagName(), childNodesHTML = this.childNodesAsHTML(indent, context), startingTag = "<".concat(tagName, ' start="').concat(start, '">'), closingTag = "<\\".concat(tagName, ">"), html = "".concat(indent).concat(startingTag, "\n").concat(childNodesHTML).concat(indent).concat(closingTag, "\n");
                return html;
            }
        },
        {
            key: "getAttributeName",
            value: function getAttributeName() {
                var attributeName = _attributeNames.START_ATTRIBUTE_NAME;
                return attributeName;
            }
        },
        {
            key: "getAttributeValue",
            value: function getAttributeValue(context) {
                var start = this.getStart(), attributeValue = start; ///
                return attributeValue;
            }
        },
        {
            key: "getStart",
            value: function getStart() {
                var childNodes = this.getChildNodes(), firstChildNode = first(childNodes), firstOrderedListItemMarkdownNode = firstChildNode, start = firstOrderedListItemMarkdownNode.getStart();
                return start;
            }
        }
    ], [
        {
            key: "fromRuleNameChildNodesAndAmbiguous",
            value: function fromRuleNameChildNodesAndAmbiguous(ruleName, childNodes, ambiguous) {
                return _markdown.default.fromRuleNameChildNodesAndAmbiguous(OrderedListMarkdownNode, ruleName, childNodes, ambiguous);
            }
        }
    ]);
    return OrderedListMarkdownNode;
}(_markdown.default);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ub2RlL21hcmtkb3duL29yZGVyZWRMaXN0LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBhcnJheVV0aWxpdGllcyB9IGZyb20gXCJuZWNlc3NhcnlcIjtcblxuaW1wb3J0IE1hcmtkb3duTm9kZSBmcm9tIFwiLi4vLi4vbm9kZS9tYXJrZG93blwiO1xuXG5pbXBvcnQgeyBTVEFSVF9BVFRSSUJVVEVfTkFNRSB9IGZyb20gXCIuLi8uLi9hdHRyaWJ1dGVOYW1lc1wiO1xuaW1wb3J0IHtFTVBUWV9TVFJJTkd9IGZyb20gXCIuLi8uLi9jb25zdGFudHNcIjtcblxuY29uc3QgeyBmaXJzdCB9ID0gYXJyYXlVdGlsaXRpZXM7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE9yZGVyZWRMaXN0TWFya2Rvd25Ob2RlIGV4dGVuZHMgTWFya2Rvd25Ob2RlIHtcbiAgYXNIVE1MKGluZGVudCwgY29udGV4dCkge1xuICAgIGluZGVudCA9IHRoaXMuYWRqdXN0SW5kZW50KGluZGVudCk7XG5cbiAgICBjb25zdCBzdGFydCA9IHRoaXMuZ2V0U3RhcnQoKSxcbiAgICAgICAgICB0YWdOYW1lID0gdGhpcy5nZXRUYWdOYW1lKCksXG4gICAgICAgICAgY2hpbGROb2Rlc0hUTUwgPSB0aGlzLmNoaWxkTm9kZXNBc0hUTUwoaW5kZW50LCBjb250ZXh0KSxcbiAgICAgICAgICBzdGFydGluZ1RhZyA9IGA8JHt0YWdOYW1lfSBzdGFydD1cIiR7c3RhcnR9XCI+YCxcbiAgICAgICAgICBjbG9zaW5nVGFnID0gYDxcXFxcJHt0YWdOYW1lfT5gLFxuICAgICAgICAgIGh0bWwgPSBgJHtpbmRlbnR9JHtzdGFydGluZ1RhZ31cbiR7Y2hpbGROb2Rlc0hUTUx9JHtpbmRlbnR9JHtjbG9zaW5nVGFnfVxuYDtcblxuICAgIHJldHVybiBodG1sO1xuICB9XG5cbiAgZ2V0QXR0cmlidXRlTmFtZSgpIHtcbiAgICBjb25zdCBhdHRyaWJ1dGVOYW1lID0gU1RBUlRfQVRUUklCVVRFX05BTUU7XG5cbiAgICByZXR1cm4gYXR0cmlidXRlTmFtZTtcbiAgfVxuXG4gIGdldEF0dHJpYnV0ZVZhbHVlKGNvbnRleHQpIHtcbiAgICBjb25zdCBzdGFydCA9IHRoaXMuZ2V0U3RhcnQoKSxcbiAgICAgICAgICBhdHRyaWJ1dGVWYWx1ZSA9IHN0YXJ0OyAvLy9cblxuICAgIHJldHVybiBhdHRyaWJ1dGVWYWx1ZTtcbiAgfVxuXG4gIGdldFN0YXJ0KCkge1xuICAgIGNvbnN0IGNoaWxkTm9kZXMgPSB0aGlzLmdldENoaWxkTm9kZXMoKSxcbiAgICAgICAgICBmaXJzdENoaWxkTm9kZSA9IGZpcnN0KGNoaWxkTm9kZXMpLFxuICAgICAgICAgIGZpcnN0T3JkZXJlZExpc3RJdGVtTWFya2Rvd25Ob2RlID0gZmlyc3RDaGlsZE5vZGUsICAvLy9cbiAgICAgICAgICBzdGFydCA9IGZpcnN0T3JkZXJlZExpc3RJdGVtTWFya2Rvd25Ob2RlLmdldFN0YXJ0KCk7XG5cbiAgICByZXR1cm4gc3RhcnQ7XG4gIH1cblxuICBzdGF0aWMgZnJvbVJ1bGVOYW1lQ2hpbGROb2Rlc0FuZEFtYmlndW91cyhydWxlTmFtZSwgY2hpbGROb2RlcywgYW1iaWd1b3VzKSB7IHJldHVybiBNYXJrZG93bk5vZGUuZnJvbVJ1bGVOYW1lQ2hpbGROb2Rlc0FuZEFtYmlndW91cyhPcmRlcmVkTGlzdE1hcmtkb3duTm9kZSwgcnVsZU5hbWUsIGNoaWxkTm9kZXMsIGFtYmlndW91cyk7IH1cbn1cbiJdLCJuYW1lcyI6WyJPcmRlcmVkTGlzdE1hcmtkb3duTm9kZSIsImZpcnN0IiwiYXJyYXlVdGlsaXRpZXMiLCJhc0hUTUwiLCJpbmRlbnQiLCJjb250ZXh0IiwiYWRqdXN0SW5kZW50Iiwic3RhcnQiLCJnZXRTdGFydCIsInRhZ05hbWUiLCJnZXRUYWdOYW1lIiwiY2hpbGROb2Rlc0hUTUwiLCJjaGlsZE5vZGVzQXNIVE1MIiwic3RhcnRpbmdUYWciLCJjbG9zaW5nVGFnIiwiaHRtbCIsImdldEF0dHJpYnV0ZU5hbWUiLCJhdHRyaWJ1dGVOYW1lIiwiU1RBUlRfQVRUUklCVVRFX05BTUUiLCJnZXRBdHRyaWJ1dGVWYWx1ZSIsImF0dHJpYnV0ZVZhbHVlIiwiY2hpbGROb2RlcyIsImdldENoaWxkTm9kZXMiLCJmaXJzdENoaWxkTm9kZSIsImZpcnN0T3JkZXJlZExpc3RJdGVtTWFya2Rvd25Ob2RlIiwiZnJvbVJ1bGVOYW1lQ2hpbGROb2Rlc0FuZEFtYmlndW91cyIsInJ1bGVOYW1lIiwiYW1iaWd1b3VzIiwiTWFya2Rvd25Ob2RlIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQVdxQkE7Ozt5QkFUVTsrREFFTjs4QkFFWTt5QkFDVjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUUzQixJQUFNLEFBQUVDLFFBQVVDLHlCQUFjLENBQXhCRDtBQUVPLElBQUEsQUFBTUQsd0NBQUQsQUFBTDtjQUFNQTsrQkFBQUE7YUFBQUE7Z0NBQUFBOzs7a0JBQUFBOztZQUNuQkcsS0FBQUE7bUJBQUFBLFNBQUFBLE9BQU9DLE1BQU0sRUFBRUMsT0FBTztnQkFDcEJELFNBQVMsSUFBSSxDQUFDRSxZQUFZLENBQUNGO2dCQUUzQixJQUFNRyxRQUFRLElBQUksQ0FBQ0MsUUFBUSxJQUNyQkMsVUFBVSxJQUFJLENBQUNDLFVBQVUsSUFDekJDLGlCQUFpQixJQUFJLENBQUNDLGdCQUFnQixDQUFDUixRQUFRQyxVQUMvQ1EsY0FBYyxBQUFDLElBQXFCTixPQUFsQkUsU0FBUSxZQUFnQixPQUFORixPQUFNLE9BQzFDTyxhQUFhLEFBQUMsTUFBYSxPQUFSTCxTQUFRLE1BQzNCTSxPQUFPLEFBQUMsR0FBV0YsT0FBVFQsUUFDbEJPLE9BRDJCRSxhQUFZLE1BQ3RCVCxPQUFqQk8sZ0JBQTBCRyxPQUFUVixRQUFvQixPQUFYVSxZQUFXO2dCQUduQyxPQUFPQztZQUNUOzs7WUFFQUMsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQU1DLGdCQUFnQkMsb0NBQW9CO2dCQUUxQyxPQUFPRDtZQUNUOzs7WUFFQUUsS0FBQUE7bUJBQUFBLFNBQUFBLGtCQUFrQmQsT0FBTztnQkFDdkIsSUFBTUUsUUFBUSxJQUFJLENBQUNDLFFBQVEsSUFDckJZLGlCQUFpQmIsT0FBTyxHQUFHO2dCQUVqQyxPQUFPYTtZQUNUOzs7WUFFQVosS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQU1hLGFBQWEsSUFBSSxDQUFDQyxhQUFhLElBQy9CQyxpQkFBaUJ0QixNQUFNb0IsYUFDdkJHLG1DQUFtQ0QsZ0JBQ25DaEIsUUFBUWlCLGlDQUFpQ2hCLFFBQVE7Z0JBRXZELE9BQU9EO1lBQ1Q7Ozs7WUFFT2tCLEtBQUFBO21CQUFQLFNBQU9BLG1DQUFtQ0MsUUFBUSxFQUFFTCxVQUFVLEVBQUVNLFNBQVM7Z0JBQUksT0FBT0MsaUJBQVksQ0FBQ0gsa0NBQWtDLENBdENoSHpCLHlCQXNDMEkwQixVQUFVTCxZQUFZTTtZQUFZOzs7V0F0QzVLM0I7RUFBZ0M0QixpQkFBWSJ9