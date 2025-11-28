"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return FootnoteItemHTMLNode;
    }
});
var _html = /*#__PURE__*/ _interop_require_default(require("../../../node/html"));
var _footnote = /*#__PURE__*/ _interop_require_default(require("../anchor/footnote"));
var _markdown = require("../../../ruleNames/markdown");
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
function _define_property(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else {
        obj[key] = value;
    }
    return obj;
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
var FootnoteItemHTMLNode = /*#__PURE__*/ function(HTMLNode) {
    _inherits(FootnoteItemHTMLNode, HTMLNode);
    function FootnoteItemHTMLNode() {
        _class_call_check(this, FootnoteItemHTMLNode);
        return _call_super(this, FootnoteItemHTMLNode, arguments);
    }
    _create_class(FootnoteItemHTMLNode, [
        {
            key: "getRuleName",
            value: function getRuleName() {
                var ruleName = _markdown.FOOTNOTE_ITEM_MARKDOWN_RULE_NAME; ///
                return ruleName;
            }
        },
        {
            key: "asString",
            value: function asString() {
                var ruleName = this.getRuleName(), string = ruleName; ///
                return string;
            }
        }
    ], [
        {
            key: "fromParagraphTMLNodeAndIdentifier",
            value: function fromParagraphTMLNodeAndIdentifier(paragraphHTMLNode, identifier) {
                var footnoteAnchorHTMLNode = _footnote.default.fromIdentifier(identifier), childHTMLNodes = [
                    footnoteAnchorHTMLNode,
                    paragraphHTMLNode
                ], footnoteItemHTMLNode = _html.default.fromChildHTMLNodes(FootnoteItemHTMLNode, childHTMLNodes);
                return footnoteItemHTMLNode;
            }
        }
    ]);
    return FootnoteItemHTMLNode;
}(_html.default);
_define_property(FootnoteItemHTMLNode, "tagName", "li");
_define_property(FootnoteItemHTMLNode, "className", "footnote");

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9ub2RlL2h0bWwvaXRlbS9mb290bm90ZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IEhUTUxOb2RlIGZyb20gXCIuLi8uLi8uLi9ub2RlL2h0bWxcIjtcbmltcG9ydCBGb290bm90ZUFuY2hvckhUTUxOb2RlIGZyb20gXCIuLi9hbmNob3IvZm9vdG5vdGVcIjtcblxuaW1wb3J0IHsgRk9PVE5PVEVfSVRFTV9NQVJLRE9XTl9SVUxFX05BTUUgfSBmcm9tIFwiLi4vLi4vLi4vcnVsZU5hbWVzL21hcmtkb3duXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEZvb3Rub3RlSXRlbUhUTUxOb2RlIGV4dGVuZHMgSFRNTE5vZGUge1xuICBnZXRSdWxlTmFtZSgpIHtcbiAgICBjb25zdCBydWxlTmFtZSA9IEZPT1ROT1RFX0lURU1fTUFSS0RPV05fUlVMRV9OQU1FOyAvLy9cblxuICAgIHJldHVybiBydWxlTmFtZTtcbiAgfVxuXG4gIGFzU3RyaW5nKCkge1xuICAgIGNvbnN0IHJ1bGVOYW1lID0gdGhpcy5nZXRSdWxlTmFtZSgpLFxuICAgICAgICAgIHN0cmluZyA9IHJ1bGVOYW1lOyAgLy8vXG5cbiAgICByZXR1cm4gc3RyaW5nO1xuICB9XG5cbiAgc3RhdGljIHRhZ05hbWUgPSBcImxpXCI7XG5cbiAgc3RhdGljIGNsYXNzTmFtZSA9IFwiZm9vdG5vdGVcIjtcblxuICBzdGF0aWMgZnJvbVBhcmFncmFwaFRNTE5vZGVBbmRJZGVudGlmaWVyKHBhcmFncmFwaEhUTUxOb2RlLCBpZGVudGlmaWVyKSB7XG4gICAgY29uc3QgZm9vdG5vdGVBbmNob3JIVE1MTm9kZSA9IEZvb3Rub3RlQW5jaG9ySFRNTE5vZGUuZnJvbUlkZW50aWZpZXIoaWRlbnRpZmllciksXG4gICAgICAgICAgY2hpbGRIVE1MTm9kZXMgPSBbXG4gICAgICAgICAgICBmb290bm90ZUFuY2hvckhUTUxOb2RlLFxuICAgICAgICAgICAgcGFyYWdyYXBoSFRNTE5vZGVcbiAgICAgICAgICBdLFxuICAgICAgICAgIGZvb3Rub3RlSXRlbUhUTUxOb2RlID0gSFRNTE5vZGUuZnJvbUNoaWxkSFRNTE5vZGVzKEZvb3Rub3RlSXRlbUhUTUxOb2RlLCBjaGlsZEhUTUxOb2Rlcyk7XG5cbiAgICByZXR1cm4gZm9vdG5vdGVJdGVtSFRNTE5vZGU7XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJGb290bm90ZUl0ZW1IVE1MTm9kZSIsImdldFJ1bGVOYW1lIiwicnVsZU5hbWUiLCJGT09UTk9URV9JVEVNX01BUktET1dOX1JVTEVfTkFNRSIsImFzU3RyaW5nIiwic3RyaW5nIiwiZnJvbVBhcmFncmFwaFRNTE5vZGVBbmRJZGVudGlmaWVyIiwicGFyYWdyYXBoSFRNTE5vZGUiLCJpZGVudGlmaWVyIiwiZm9vdG5vdGVBbmNob3JIVE1MTm9kZSIsIkZvb3Rub3RlQW5jaG9ySFRNTE5vZGUiLCJmcm9tSWRlbnRpZmllciIsImNoaWxkSFRNTE5vZGVzIiwiZm9vdG5vdGVJdGVtSFRNTE5vZGUiLCJIVE1MTm9kZSIsImZyb21DaGlsZEhUTUxOb2RlcyIsInRhZ05hbWUiLCJjbGFzc05hbWUiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBT3FCQTs7OzJEQUxBOytEQUNjO3dCQUVjOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVsQyxJQUFBLEFBQU1BLHFDQUFOO2NBQU1BO2FBQUFBO2dDQUFBQTtRQUFOLE9BQUEsa0JBQU1BOztrQkFBQUE7O1lBQ25CQyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBTUMsV0FBV0MsMENBQWdDLEVBQUUsR0FBRztnQkFFdEQsT0FBT0Q7WUFDVDs7O1lBRUFFLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFNRixXQUFXLElBQUksQ0FBQ0QsV0FBVyxJQUMzQkksU0FBU0gsVUFBVyxHQUFHO2dCQUU3QixPQUFPRztZQUNUOzs7O1lBTU9DLEtBQUFBO21CQUFQLFNBQU9BLGtDQUFrQ0MsaUJBQWlCLEVBQUVDLFVBQVU7Z0JBQ3BFLElBQU1DLHlCQUF5QkMsaUJBQXNCLENBQUNDLGNBQWMsQ0FBQ0gsYUFDL0RJLGlCQUFpQjtvQkFDZkg7b0JBQ0FGO2lCQUNELEVBQ0RNLHVCQUF1QkMsYUFBUSxDQUFDQyxrQkFBa0IsQ0F4QnZDZixzQkF3QjhEWTtnQkFFL0UsT0FBT0M7WUFDVDs7O1dBM0JtQmI7RUFBNkJjLGFBQVE7QUFjeEQsaUJBZG1CZCxzQkFjWmdCLFdBQVU7QUFFakIsaUJBaEJtQmhCLHNCQWdCWmlCLGFBQVkifQ==