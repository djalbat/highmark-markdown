"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return FootnotesListHTMLNode;
    }
});
var _html = /*#__PURE__*/ _interop_require_default(require("../../../node/html"));
var _attributeNames = require("../../../attributeNames");
var _ruleNames = require("../../../ruleNames");
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
var FootnotesListHTMLNode = /*#__PURE__*/ function(HTMLNode) {
    _inherits(FootnotesListHTMLNode, HTMLNode);
    function FootnotesListHTMLNode(outerNode, parentNode, childNodes, domElement, start) {
        _class_call_check(this, FootnotesListHTMLNode);
        var _this;
        _this = _call_super(this, FootnotesListHTMLNode, [
            outerNode,
            parentNode,
            childNodes,
            domElement
        ]);
        _this.start = start;
        return _this;
    }
    _create_class(FootnotesListHTMLNode, [
        {
            key: "getStart",
            value: function getStart() {
                return this.start;
            }
        },
        {
            key: "getRuleName",
            value: function getRuleName() {
                var ruleName = _ruleNames.FOOTNOTES_LIST_RULE_NAME;
                return ruleName;
            }
        },
        {
            key: "attributeName",
            value: function attributeName(context) {
                var attributeName = _attributeNames.START_ATTRIBUTE_NAME;
                return attributeName;
            }
        },
        {
            key: "attributeValue",
            value: function attributeValue(context) {
                var attributeValue = this.start; ///
                return attributeValue;
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
            key: "fromStartAndFootnoteItemHTMLTransforms",
            value: function fromStartAndFootnoteItemHTMLTransforms(start, footnoteItemHTMLTransforms) {
                var footnoteItemHTMLNodes = footnoteItemHTMLTransforms.map(function(footnoteItemHTMLTransform) {
                    var footnoteItemHTMLNode = footnoteItemHTMLTransform.getFootnoteItemHTMLNode();
                    return footnoteItemHTMLNode;
                }), childNodes = footnoteItemHTMLNodes, footnotesListHTMLNode = _html.default.fromChildNodes(FootnotesListHTMLNode, childNodes, start);
                return footnotesListHTMLNode;
            }
        }
    ]);
    return FootnotesListHTMLNode;
}(_html.default);
_define_property(FootnotesListHTMLNode, "tagName", "ol");
_define_property(FootnotesListHTMLNode, "className", "footnotes");

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9ub2RlL2h0bWwvbGlzdC9mb290bm90ZXMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBIVE1MTm9kZSBmcm9tIFwiLi4vLi4vLi4vbm9kZS9odG1sXCI7XG5cbmltcG9ydCB7IFNUQVJUX0FUVFJJQlVURV9OQU1FIH0gZnJvbSBcIi4uLy4uLy4uL2F0dHJpYnV0ZU5hbWVzXCI7XG5pbXBvcnQgeyBGT09UTk9URVNfTElTVF9SVUxFX05BTUUgfSBmcm9tIFwiLi4vLi4vLi4vcnVsZU5hbWVzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEZvb3Rub3Rlc0xpc3RIVE1MTm9kZSBleHRlbmRzIEhUTUxOb2RlIHtcbiAgY29uc3RydWN0b3Iob3V0ZXJOb2RlLCBwYXJlbnROb2RlLCBjaGlsZE5vZGVzLCBkb21FbGVtZW50LCBzdGFydCkge1xuICAgIHN1cGVyKG91dGVyTm9kZSwgcGFyZW50Tm9kZSwgY2hpbGROb2RlcywgZG9tRWxlbWVudCk7XG5cbiAgICB0aGlzLnN0YXJ0ID0gc3RhcnQ7XG4gIH1cblxuICBnZXRTdGFydCgpIHtcbiAgICByZXR1cm4gdGhpcy5zdGFydDtcbiAgfVxuXG4gIGdldFJ1bGVOYW1lKCkge1xuICAgIGNvbnN0IHJ1bGVOYW1lID0gRk9PVE5PVEVTX0xJU1RfUlVMRV9OQU1FO1xuXG4gICAgcmV0dXJuIHJ1bGVOYW1lO1xuICB9XG5cbiAgYXR0cmlidXRlTmFtZShjb250ZXh0KSB7XG4gICAgY29uc3QgYXR0cmlidXRlTmFtZSA9IFNUQVJUX0FUVFJJQlVURV9OQU1FO1xuXG4gICAgcmV0dXJuIGF0dHJpYnV0ZU5hbWU7XG4gIH1cblxuICBhdHRyaWJ1dGVWYWx1ZShjb250ZXh0KSB7XG4gICAgY29uc3QgYXR0cmlidXRlVmFsdWUgPSB0aGlzLnN0YXJ0OyAgLy8vXG5cbiAgICByZXR1cm4gYXR0cmlidXRlVmFsdWU7XG4gIH1cblxuICBhc1N0cmluZygpIHtcbiAgICBjb25zdCBydWxlTmFtZSA9IHRoaXMuZ2V0UnVsZU5hbWUoKSxcbiAgICAgICAgICBzdHJpbmcgPSBydWxlTmFtZTsgIC8vL1xuXG4gICAgcmV0dXJuIHN0cmluZztcbiAgfVxuXG4gIHN0YXRpYyB0YWdOYW1lID0gXCJvbFwiO1xuXG4gIHN0YXRpYyBjbGFzc05hbWUgPSBcImZvb3Rub3Rlc1wiO1xuXG4gIHN0YXRpYyBmcm9tU3RhcnRBbmRGb290bm90ZUl0ZW1IVE1MVHJhbnNmb3JtcyhzdGFydCwgZm9vdG5vdGVJdGVtSFRNTFRyYW5zZm9ybXMpIHtcbiAgICBjb25zdCBmb290bm90ZUl0ZW1IVE1MTm9kZXMgPSBmb290bm90ZUl0ZW1IVE1MVHJhbnNmb3Jtcy5tYXAoKGZvb3Rub3RlSXRlbUhUTUxUcmFuc2Zvcm0pID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGZvb3Rub3RlSXRlbUhUTUxOb2RlID0gZm9vdG5vdGVJdGVtSFRNTFRyYW5zZm9ybS5nZXRGb290bm90ZUl0ZW1IVE1MTm9kZSgpO1xuXG4gICAgICAgICAgICByZXR1cm4gZm9vdG5vdGVJdGVtSFRNTE5vZGU7XG4gICAgICAgICAgfSksXG4gICAgICAgICAgY2hpbGROb2RlcyA9IGZvb3Rub3RlSXRlbUhUTUxOb2RlcywgLy8vXG4gICAgICAgICAgZm9vdG5vdGVzTGlzdEhUTUxOb2RlID0gSFRNTE5vZGUuZnJvbUNoaWxkTm9kZXMoRm9vdG5vdGVzTGlzdEhUTUxOb2RlLCBjaGlsZE5vZGVzLCBzdGFydCk7XG5cbiAgICByZXR1cm4gZm9vdG5vdGVzTGlzdEhUTUxOb2RlO1xuICB9XG59XG4iXSwibmFtZXMiOlsiRm9vdG5vdGVzTGlzdEhUTUxOb2RlIiwib3V0ZXJOb2RlIiwicGFyZW50Tm9kZSIsImNoaWxkTm9kZXMiLCJkb21FbGVtZW50Iiwic3RhcnQiLCJnZXRTdGFydCIsImdldFJ1bGVOYW1lIiwicnVsZU5hbWUiLCJGT09UTk9URVNfTElTVF9SVUxFX05BTUUiLCJhdHRyaWJ1dGVOYW1lIiwiY29udGV4dCIsIlNUQVJUX0FUVFJJQlVURV9OQU1FIiwiYXR0cmlidXRlVmFsdWUiLCJhc1N0cmluZyIsInN0cmluZyIsImZyb21TdGFydEFuZEZvb3Rub3RlSXRlbUhUTUxUcmFuc2Zvcm1zIiwiZm9vdG5vdGVJdGVtSFRNTFRyYW5zZm9ybXMiLCJmb290bm90ZUl0ZW1IVE1MTm9kZXMiLCJtYXAiLCJmb290bm90ZUl0ZW1IVE1MVHJhbnNmb3JtIiwiZm9vdG5vdGVJdGVtSFRNTE5vZGUiLCJnZXRGb290bm90ZUl0ZW1IVE1MTm9kZSIsImZvb3Rub3Rlc0xpc3RIVE1MTm9kZSIsIkhUTUxOb2RlIiwiZnJvbUNoaWxkTm9kZXMiLCJ0YWdOYW1lIiwiY2xhc3NOYW1lIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQU9xQkE7OzsyREFMQTs4QkFFZ0I7eUJBQ0k7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRTFCLElBQUEsQUFBTUEsc0NBQU47Y0FBTUE7YUFBQUEsc0JBQ1BDLFNBQVMsRUFBRUMsVUFBVSxFQUFFQyxVQUFVLEVBQUVDLFVBQVUsRUFBRUMsS0FBSztnQ0FEN0NMOztnQkFFakIsa0JBRmlCQTtZQUVYQztZQUFXQztZQUFZQztZQUFZQzs7UUFFekMsTUFBS0MsS0FBSyxHQUFHQTs7O2tCQUpJTDs7WUFPbkJNLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0QsS0FBSztZQUNuQjs7O1lBRUFFLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFNQyxXQUFXQyxtQ0FBd0I7Z0JBRXpDLE9BQU9EO1lBQ1Q7OztZQUVBRSxLQUFBQTttQkFBQUEsU0FBQUEsY0FBY0MsT0FBTztnQkFDbkIsSUFBTUQsZ0JBQWdCRSxvQ0FBb0I7Z0JBRTFDLE9BQU9GO1lBQ1Q7OztZQUVBRyxLQUFBQTttQkFBQUEsU0FBQUEsZUFBZUYsT0FBTztnQkFDcEIsSUFBTUUsaUJBQWlCLElBQUksQ0FBQ1IsS0FBSyxFQUFHLEdBQUc7Z0JBRXZDLE9BQU9RO1lBQ1Q7OztZQUVBQyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBTU4sV0FBVyxJQUFJLENBQUNELFdBQVcsSUFDM0JRLFNBQVNQLFVBQVcsR0FBRztnQkFFN0IsT0FBT087WUFDVDs7OztZQU1PQyxLQUFBQTttQkFBUCxTQUFPQSx1Q0FBdUNYLEtBQUssRUFBRVksMEJBQTBCO2dCQUM3RSxJQUFNQyx3QkFBd0JELDJCQUEyQkUsR0FBRyxDQUFDLFNBQUNDO29CQUN0RCxJQUFNQyx1QkFBdUJELDBCQUEwQkUsdUJBQXVCO29CQUU5RSxPQUFPRDtnQkFDVCxJQUNBbEIsYUFBYWUsdUJBQ2JLLHdCQUF3QkMsYUFBUSxDQUFDQyxjQUFjLENBL0NwQ3pCLHVCQStDNERHLFlBQVlFO2dCQUV6RixPQUFPa0I7WUFDVDs7O1dBbERtQnZCO0VBQThCd0IsYUFBUTtBQW9DekQsaUJBcENtQnhCLHVCQW9DWjBCLFdBQVU7QUFFakIsaUJBdENtQjFCLHVCQXNDWjJCLGFBQVkifQ==