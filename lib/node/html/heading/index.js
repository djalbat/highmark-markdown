"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return IndexHeadingHTMLNode;
    }
});
var _html = /*#__PURE__*/ _interop_require_default(require("../../../node/html"));
var _markdown = require("../../../ruleNames/markdown");
var _dom = require("../../../utilities/dom");
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
var IndexHeadingHTMLNode = /*#__PURE__*/ function(HTMLNode) {
    _inherits(IndexHeadingHTMLNode, HTMLNode);
    function IndexHeadingHTMLNode(outerNode, parentNode, childNodes, domElement, letter) {
        _class_call_check(this, IndexHeadingHTMLNode);
        var _this;
        _this = _call_super(this, IndexHeadingHTMLNode, [
            outerNode,
            parentNode,
            childNodes,
            domElement
        ]);
        _this.letter = letter;
        return _this;
    }
    _create_class(IndexHeadingHTMLNode, [
        {
            key: "getLetter",
            value: function getLetter() {
                return this.letter;
            }
        },
        {
            key: "getRuleName",
            value: function getRuleName() {
                var ruleName = _markdown.INDEX_HEADING_MARKDOWN_RULE_NAME;
                return ruleName;
            }
        },
        {
            key: "mount",
            value: function mount(parentDOMElement, siblingDOMElement, context) {
                var domElement;
                domElement = this.createDOMElement(context);
                this.setDOMElement(domElement);
                siblingDOMElement !== null ? (0, _dom.insertAfter)(domElement, parentDOMElement, siblingDOMElement) : (0, _dom.insertAfterwards)(domElement, parentDOMElement);
                parentDOMElement = domElement; ///
                var content = this.letter, textNode = document.createTextNode(content);
                domElement = textNode; ///
                (0, _dom.insertAfterwards)(domElement, parentDOMElement);
                domElement = this.getDOMElement();
                siblingDOMElement = domElement; ///
                return siblingDOMElement;
            }
        },
        {
            key: "unmount",
            value: function unmount(parentDOMElement, context) {
                var domElement;
                {
                    domElement = this.getDOMElement();
                    var _$parentDOMElement = domElement, firstChild = domElement.firstChild;
                    domElement = firstChild; ///
                    (0, _dom.remove)(domElement, _$parentDOMElement);
                }
                domElement = this.getDOMElement();
                parentDOMElement.removeChild(domElement);
                this.resetDOMElement();
            }
        },
        {
            key: "childNodesAsHTML",
            value: function childNodesAsHTML(indent, context) {
                var childNodesHTML = "".concat(this.letter, "\n");
                return childNodesHTML;
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
            key: "fromLetter",
            value: function fromLetter(letter) {
                var indexHeadingHTMLNode = _html.default.fromNothing(IndexHeadingHTMLNode, letter);
                return indexHeadingHTMLNode;
            }
        }
    ]);
    return IndexHeadingHTMLNode;
}(_html.default);
_define_property(IndexHeadingHTMLNode, "tagName", "h3");
_define_property(IndexHeadingHTMLNode, "className", "index");

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9ub2RlL2h0bWwvaGVhZGluZy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IEhUTUxOb2RlIGZyb20gXCIuLi8uLi8uLi9ub2RlL2h0bWxcIjtcblxuaW1wb3J0IHsgSU5ERVhfSEVBRElOR19NQVJLRE9XTl9SVUxFX05BTUUgfSBmcm9tIFwiLi4vLi4vLi4vcnVsZU5hbWVzL21hcmtkb3duXCI7XG5pbXBvcnQgeyByZW1vdmUsIGluc2VydEFmdGVyLCBpbnNlcnRBZnRlcndhcmRzIH0gZnJvbSBcIi4uLy4uLy4uL3V0aWxpdGllcy9kb21cIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW5kZXhIZWFkaW5nSFRNTE5vZGUgZXh0ZW5kcyBIVE1MTm9kZSB7XG4gIGNvbnN0cnVjdG9yKG91dGVyTm9kZSwgcGFyZW50Tm9kZSwgY2hpbGROb2RlcywgZG9tRWxlbWVudCwgbGV0dGVyKSB7XG4gICAgc3VwZXIob3V0ZXJOb2RlLCBwYXJlbnROb2RlLCBjaGlsZE5vZGVzLCBkb21FbGVtZW50KTtcblxuICAgIHRoaXMubGV0dGVyID0gbGV0dGVyO1xuICB9XG5cbiAgZ2V0TGV0dGVyKCkge1xuICAgIHJldHVybiB0aGlzLmxldHRlcjtcbiAgfVxuXG4gIGdldFJ1bGVOYW1lKCkge1xuICAgIGNvbnN0IHJ1bGVOYW1lID0gSU5ERVhfSEVBRElOR19NQVJLRE9XTl9SVUxFX05BTUU7XG5cbiAgICByZXR1cm4gcnVsZU5hbWU7XG4gIH1cblxuICBtb3VudChwYXJlbnRET01FbGVtZW50LCBzaWJsaW5nRE9NRWxlbWVudCwgY29udGV4dCkge1xuICAgIGxldCBkb21FbGVtZW50O1xuXG4gICAgZG9tRWxlbWVudCA9IHRoaXMuY3JlYXRlRE9NRWxlbWVudChjb250ZXh0KTtcblxuICAgIHRoaXMuc2V0RE9NRWxlbWVudChkb21FbGVtZW50KTtcblxuICAgIChzaWJsaW5nRE9NRWxlbWVudCAhPT0gbnVsbCkgP1xuICAgICAgaW5zZXJ0QWZ0ZXIoZG9tRWxlbWVudCwgcGFyZW50RE9NRWxlbWVudCwgc2libGluZ0RPTUVsZW1lbnQpIDpcbiAgICAgICAgaW5zZXJ0QWZ0ZXJ3YXJkcyhkb21FbGVtZW50LCBwYXJlbnRET01FbGVtZW50KTtcblxuICAgIHBhcmVudERPTUVsZW1lbnQgPSBkb21FbGVtZW50OyAvLy9cblxuICAgIGNvbnN0IGNvbnRlbnQgPSB0aGlzLmxldHRlciwgIC8vL1xuICAgICAgICAgIHRleHROb2RlID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY29udGVudCk7XG5cbiAgICBkb21FbGVtZW50ID0gdGV4dE5vZGU7ICAvLy9cblxuICAgIGluc2VydEFmdGVyd2FyZHMoZG9tRWxlbWVudCwgcGFyZW50RE9NRWxlbWVudCk7XG5cbiAgICBkb21FbGVtZW50ID0gdGhpcy5nZXRET01FbGVtZW50KCk7XG5cbiAgICBzaWJsaW5nRE9NRWxlbWVudCA9IGRvbUVsZW1lbnQ7IC8vL1xuXG4gICAgcmV0dXJuIHNpYmxpbmdET01FbGVtZW50O1xuICB9XG5cbiAgdW5tb3VudChwYXJlbnRET01FbGVtZW50LCBjb250ZXh0KSB7XG4gICAgbGV0IGRvbUVsZW1lbnQ7XG5cbiAgICB7XG4gICAgICBkb21FbGVtZW50ID0gdGhpcy5nZXRET01FbGVtZW50KCk7XG5cbiAgICAgIGNvbnN0IHBhcmVudERPTUVsZW1lbnQgPSBkb21FbGVtZW50LCAgLy8vXG4gICAgICAgICAgICBmaXJzdENoaWxkID0gZG9tRWxlbWVudC5maXJzdENoaWxkXG5cbiAgICAgIGRvbUVsZW1lbnQgPSBmaXJzdENoaWxkOyAgLy8vXG5cbiAgICAgIHJlbW92ZShkb21FbGVtZW50LCBwYXJlbnRET01FbGVtZW50KTtcbiAgICB9XG5cbiAgICBkb21FbGVtZW50ID0gdGhpcy5nZXRET01FbGVtZW50KCk7XG5cbiAgICBwYXJlbnRET01FbGVtZW50LnJlbW92ZUNoaWxkKGRvbUVsZW1lbnQpO1xuXG4gICAgdGhpcy5yZXNldERPTUVsZW1lbnQoKTtcbiAgfVxuXG4gIGNoaWxkTm9kZXNBc0hUTUwoaW5kZW50LCBjb250ZXh0KSB7XG4gICAgY29uc3QgY2hpbGROb2Rlc0hUTUwgPSBgJHt0aGlzLmxldHRlcn1cbmA7XG5cbiAgICByZXR1cm4gY2hpbGROb2Rlc0hUTUw7XG4gIH1cblxuICBhc1N0cmluZygpIHtcbiAgICBjb25zdCBydWxlTmFtZSA9IHRoaXMuZ2V0UnVsZU5hbWUoKSxcbiAgICAgICAgICBzdHJpbmcgPSBydWxlTmFtZTsgIC8vL1xuXG4gICAgcmV0dXJuIHN0cmluZztcbiAgfVxuXG4gIHN0YXRpYyB0YWdOYW1lID0gXCJoM1wiO1xuXG4gIHN0YXRpYyBjbGFzc05hbWUgPSBcImluZGV4XCI7XG5cbiAgc3RhdGljIGZyb21MZXR0ZXIobGV0dGVyKSB7XG4gICAgY29uc3QgaW5kZXhIZWFkaW5nSFRNTE5vZGUgPSBIVE1MTm9kZS5mcm9tTm90aGluZyhJbmRleEhlYWRpbmdIVE1MTm9kZSwgbGV0dGVyKTtcblxuICAgIHJldHVybiBpbmRleEhlYWRpbmdIVE1MTm9kZTtcbiAgfVxufVxuIl0sIm5hbWVzIjpbIkluZGV4SGVhZGluZ0hUTUxOb2RlIiwib3V0ZXJOb2RlIiwicGFyZW50Tm9kZSIsImNoaWxkTm9kZXMiLCJkb21FbGVtZW50IiwibGV0dGVyIiwiZ2V0TGV0dGVyIiwiZ2V0UnVsZU5hbWUiLCJydWxlTmFtZSIsIklOREVYX0hFQURJTkdfTUFSS0RPV05fUlVMRV9OQU1FIiwibW91bnQiLCJwYXJlbnRET01FbGVtZW50Iiwic2libGluZ0RPTUVsZW1lbnQiLCJjb250ZXh0IiwiY3JlYXRlRE9NRWxlbWVudCIsInNldERPTUVsZW1lbnQiLCJpbnNlcnRBZnRlciIsImluc2VydEFmdGVyd2FyZHMiLCJjb250ZW50IiwidGV4dE5vZGUiLCJkb2N1bWVudCIsImNyZWF0ZVRleHROb2RlIiwiZ2V0RE9NRWxlbWVudCIsInVubW91bnQiLCJmaXJzdENoaWxkIiwicmVtb3ZlIiwicmVtb3ZlQ2hpbGQiLCJyZXNldERPTUVsZW1lbnQiLCJjaGlsZE5vZGVzQXNIVE1MIiwiaW5kZW50IiwiY2hpbGROb2Rlc0hUTUwiLCJhc1N0cmluZyIsInN0cmluZyIsImZyb21MZXR0ZXIiLCJpbmRleEhlYWRpbmdIVE1MTm9kZSIsIkhUTUxOb2RlIiwiZnJvbU5vdGhpbmciLCJ0YWdOYW1lIiwiY2xhc3NOYW1lIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQU9xQkE7OzsyREFMQTt3QkFFNEI7bUJBQ0s7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRXZDLElBQUEsQUFBTUEscUNBQU47Y0FBTUE7YUFBQUEscUJBQ1BDLFNBQVMsRUFBRUMsVUFBVSxFQUFFQyxVQUFVLEVBQUVDLFVBQVUsRUFBRUMsTUFBTTtnQ0FEOUNMOztnQkFFakIsa0JBRmlCQTtZQUVYQztZQUFXQztZQUFZQztZQUFZQzs7UUFFekMsTUFBS0MsTUFBTSxHQUFHQTs7O2tCQUpHTDs7WUFPbkJNLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0QsTUFBTTtZQUNwQjs7O1lBRUFFLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFNQyxXQUFXQywwQ0FBZ0M7Z0JBRWpELE9BQU9EO1lBQ1Q7OztZQUVBRSxLQUFBQTttQkFBQUEsU0FBQUEsTUFBTUMsZ0JBQWdCLEVBQUVDLGlCQUFpQixFQUFFQyxPQUFPO2dCQUNoRCxJQUFJVDtnQkFFSkEsYUFBYSxJQUFJLENBQUNVLGdCQUFnQixDQUFDRDtnQkFFbkMsSUFBSSxDQUFDRSxhQUFhLENBQUNYO2dCQUVsQlEsc0JBQXNCLE9BQ3JCSSxJQUFBQSxnQkFBVyxFQUFDWixZQUFZTyxrQkFBa0JDLHFCQUN4Q0ssSUFBQUEscUJBQWdCLEVBQUNiLFlBQVlPO2dCQUVqQ0EsbUJBQW1CUCxZQUFZLEdBQUc7Z0JBRWxDLElBQU1jLFVBQVUsSUFBSSxDQUFDYixNQUFNLEVBQ3JCYyxXQUFXQyxTQUFTQyxjQUFjLENBQUNIO2dCQUV6Q2QsYUFBYWUsVUFBVyxHQUFHO2dCQUUzQkYsSUFBQUEscUJBQWdCLEVBQUNiLFlBQVlPO2dCQUU3QlAsYUFBYSxJQUFJLENBQUNrQixhQUFhO2dCQUUvQlYsb0JBQW9CUixZQUFZLEdBQUc7Z0JBRW5DLE9BQU9RO1lBQ1Q7OztZQUVBVyxLQUFBQTttQkFBQUEsU0FBQUEsUUFBUVosZ0JBQWdCLEVBQUVFLE9BQU87Z0JBQy9CLElBQUlUO2dCQUVKO29CQUNFQSxhQUFhLElBQUksQ0FBQ2tCLGFBQWE7b0JBRS9CLElBQU1YLHFCQUFtQlAsWUFDbkJvQixhQUFhcEIsV0FBV29CLFVBQVU7b0JBRXhDcEIsYUFBYW9CLFlBQWEsR0FBRztvQkFFN0JDLElBQUFBLFdBQU0sRUFBQ3JCLFlBQVlPO2dCQUNyQjtnQkFFQVAsYUFBYSxJQUFJLENBQUNrQixhQUFhO2dCQUUvQlgsaUJBQWlCZSxXQUFXLENBQUN0QjtnQkFFN0IsSUFBSSxDQUFDdUIsZUFBZTtZQUN0Qjs7O1lBRUFDLEtBQUFBO21CQUFBQSxTQUFBQSxpQkFBaUJDLE1BQU0sRUFBRWhCLE9BQU87Z0JBQzlCLElBQU1pQixpQkFBaUIsQUFBQyxHQUFjLE9BQVosSUFBSSxDQUFDekIsTUFBTSxFQUFDO2dCQUd0QyxPQUFPeUI7WUFDVDs7O1lBRUFDLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFNdkIsV0FBVyxJQUFJLENBQUNELFdBQVcsSUFDM0J5QixTQUFTeEIsVUFBVyxHQUFHO2dCQUU3QixPQUFPd0I7WUFDVDs7OztZQU1PQyxLQUFBQTttQkFBUCxTQUFPQSxXQUFXNUIsTUFBTTtnQkFDdEIsSUFBTTZCLHVCQUF1QkMsYUFBUSxDQUFDQyxXQUFXLENBcEZoQ3BDLHNCQW9GdURLO2dCQUV4RSxPQUFPNkI7WUFDVDs7O1dBdkZtQmxDO0VBQTZCbUMsYUFBUTtBQStFeEQsaUJBL0VtQm5DLHNCQStFWnFDLFdBQVU7QUFFakIsaUJBakZtQnJDLHNCQWlGWnNDLGFBQVkifQ==