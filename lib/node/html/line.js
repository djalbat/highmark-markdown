"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return LineHTMLNode;
    }
});
var _html = /*#__PURE__*/ _interop_require_default(require("../../node/html"));
var _dom = require("../../utilities/dom");
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
function _get(target, property, receiver) {
    if (typeof Reflect !== "undefined" && Reflect.get) {
        _get = Reflect.get;
    } else {
        _get = function get(target, property, receiver) {
            var base = _super_prop_base(target, property);
            if (!base) return;
            var desc = Object.getOwnPropertyDescriptor(base, property);
            if (desc.get) {
                return desc.get.call(receiver || target);
            }
            return desc.value;
        };
    }
    return _get(target, property, receiver || target);
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
function _super_prop_base(object, property) {
    while(!Object.prototype.hasOwnProperty.call(object, property)){
        object = _get_prototype_of(object);
        if (object === null) break;
    }
    return object;
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
var LineHTMLNode = /*#__PURE__*/ function(HTMLNode) {
    _inherits(LineHTMLNode, HTMLNode);
    function LineHTMLNode() {
        _class_call_check(this, LineHTMLNode);
        return _call_super(this, LineHTMLNode, arguments);
    }
    _create_class(LineHTMLNode, [
        {
            key: "lines",
            value: function lines(context) {
                var _context_maximumLineCharacters = context.maximumLineCharacters, maximumLineCharacters = _context_maximumLineCharacters === void 0 ? _constants.DEFAULT_MAXIMUM_LINE_CHARACTERS : _context_maximumLineCharacters, plainText = this.asPlainText(context), plainTextLength = plainText.length, characters = plainTextLength, lines = characters / maximumLineCharacters + 1;
                return lines;
            }
        },
        {
            key: "mount",
            value: function mount(parentDOMElement, siblingDOMElement, context) {
                var domElement;
                _get(_get_prototype_of(LineHTMLNode.prototype), "mount", this).call(this, parentDOMElement, siblingDOMElement, context);
                domElement = this.getDOMElement();
                parentDOMElement = domElement; ///
                var content = _constants.CARRIAGE_RETURN, textNode = document.createTextNode(content);
                domElement = textNode; ///
                (0, _dom.insertAfterwards)(domElement, parentDOMElement);
                domElement = this.getDOMElement();
                siblingDOMElement = domElement; ///
                return siblingDOMElement;
            }
        },
        {
            key: "unmount",
            value: function unmount(parentDOMElement) {
                {
                    var domElement;
                    domElement = this.getDOMElement();
                    var _$parentDOMElement = domElement, lastChild = domElement.lastChild;
                    domElement = lastChild; ///
                    (0, _dom.remove)(domElement, _$parentDOMElement);
                }
                _get(_get_prototype_of(LineHTMLNode.prototype), "unmount", this).call(this, parentDOMElement);
            }
        },
        {
            key: "childNodesAsPlainText",
            value: function childNodesAsPlainText(context) {
                var childNodesPlainText = this.reduceChildNode(function(childNodesPlainText, childNode) {
                    var childNodePlainText = childNode.asPlainText(context);
                    childNodesPlainText = "".concat(childNodesPlainText).concat(childNodePlainText);
                    return childNodesPlainText;
                }, _constants.EMPTY_STRING);
                return childNodesPlainText;
            }
        }
    ], [
        {
            key: "fromNothing",
            value: function fromNothing(Class) {
                if (Class === undefined) {
                    Class = LineHTMLNode; ///
                }
                var lineHTMLNode = _html.default.fromNothing(Class);
                return lineHTMLNode;
            }
        },
        {
            key: "fromOuterNode",
            value: function fromOuterNode(Class, outerNode) {
                if (outerNode === undefined) {
                    outerNode = Class; ///
                    Class = LineHTMLNode; ///
                }
                var lineHTMLNode = _html.default.fromOuterNode(Class, outerNode);
                return lineHTMLNode;
            }
        }
    ]);
    return LineHTMLNode;
}(_html.default);
_define_property(LineHTMLNode, "tagName", "span");
_define_property(LineHTMLNode, "className", "line");

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ub2RlL2h0bWwvbGluZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IEhUTUxOb2RlIGZyb20gXCIuLi8uLi9ub2RlL2h0bWxcIjtcblxuaW1wb3J0IHsgcmVtb3ZlLCBpbnNlcnRBZnRlcndhcmRzIH0gZnJvbSBcIi4uLy4uL3V0aWxpdGllcy9kb21cIjtcbmltcG9ydCB7IEVNUFRZX1NUUklORywgQ0FSUklBR0VfUkVUVVJOLCBERUZBVUxUX01BWElNVU1fTElORV9DSEFSQUNURVJTIH0gZnJvbSBcIi4uLy4uL2NvbnN0YW50c1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBMaW5lSFRNTE5vZGUgZXh0ZW5kcyBIVE1MTm9kZSB7XG4gIGxpbmVzKGNvbnRleHQpIHtcbiAgICBjb25zdCB7IG1heGltdW1MaW5lQ2hhcmFjdGVycyA9IERFRkFVTFRfTUFYSU1VTV9MSU5FX0NIQVJBQ1RFUlMgfSA9IGNvbnRleHQsXG4gICAgICAgICAgcGxhaW5UZXh0ID0gdGhpcy5hc1BsYWluVGV4dChjb250ZXh0KSxcbiAgICAgICAgICBwbGFpblRleHRMZW5ndGggPSBwbGFpblRleHQubGVuZ3RoLFxuICAgICAgICAgIGNoYXJhY3RlcnMgPSBwbGFpblRleHRMZW5ndGgsIC8vL1xuICAgICAgICAgIGxpbmVzID0gKGNoYXJhY3RlcnMgLyBtYXhpbXVtTGluZUNoYXJhY3RlcnMpICsgMTtcblxuICAgIHJldHVybiBsaW5lcztcbiAgfVxuXG4gIG1vdW50KHBhcmVudERPTUVsZW1lbnQsIHNpYmxpbmdET01FbGVtZW50LCBjb250ZXh0KSB7XG4gICAgbGV0IGRvbUVsZW1lbnQ7XG5cbiAgICBzdXBlci5tb3VudChwYXJlbnRET01FbGVtZW50LCBzaWJsaW5nRE9NRWxlbWVudCwgY29udGV4dCk7XG5cbiAgICBkb21FbGVtZW50ID0gdGhpcy5nZXRET01FbGVtZW50KCk7XG5cbiAgICBwYXJlbnRET01FbGVtZW50ID0gZG9tRWxlbWVudDsgIC8vL1xuXG4gICAgY29uc3QgY29udGVudCA9IENBUlJJQUdFX1JFVFVSTixcbiAgICAgICAgICB0ZXh0Tm9kZSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNvbnRlbnQpO1xuXG4gICAgZG9tRWxlbWVudCA9IHRleHROb2RlOyAgLy8vXG5cbiAgICBpbnNlcnRBZnRlcndhcmRzKGRvbUVsZW1lbnQsIHBhcmVudERPTUVsZW1lbnQpO1xuXG4gICAgZG9tRWxlbWVudCA9IHRoaXMuZ2V0RE9NRWxlbWVudCgpO1xuXG4gICAgc2libGluZ0RPTUVsZW1lbnQgPSBkb21FbGVtZW50OyAvLy9cblxuICAgIHJldHVybiBzaWJsaW5nRE9NRWxlbWVudDtcbiAgfVxuXG4gIHVubW91bnQocGFyZW50RE9NRWxlbWVudCkge1xuICAgIHtcbiAgICAgIGxldCBkb21FbGVtZW50O1xuXG4gICAgICBkb21FbGVtZW50ID0gdGhpcy5nZXRET01FbGVtZW50KCk7XG5cbiAgICAgIGNvbnN0IHBhcmVudERPTUVsZW1lbnQgPSBkb21FbGVtZW50LCAgLy8vXG4gICAgICAgICAgICBsYXN0Q2hpbGQgPSBkb21FbGVtZW50Lmxhc3RDaGlsZFxuXG4gICAgICBkb21FbGVtZW50ID0gbGFzdENoaWxkOyAgLy8vXG5cbiAgICAgIHJlbW92ZShkb21FbGVtZW50LCBwYXJlbnRET01FbGVtZW50KTtcbiAgICB9XG5cbiAgICBzdXBlci51bm1vdW50KHBhcmVudERPTUVsZW1lbnQpO1xuICB9XG5cbiAgY2hpbGROb2Rlc0FzUGxhaW5UZXh0KGNvbnRleHQpIHtcbiAgICBjb25zdCBjaGlsZE5vZGVzUGxhaW5UZXh0ID0gdGhpcy5yZWR1Y2VDaGlsZE5vZGUoKGNoaWxkTm9kZXNQbGFpblRleHQsIGNoaWxkTm9kZSkgPT4ge1xuICAgICAgY29uc3QgY2hpbGROb2RlUGxhaW5UZXh0ID0gY2hpbGROb2RlLmFzUGxhaW5UZXh0KGNvbnRleHQpO1xuXG4gICAgICBjaGlsZE5vZGVzUGxhaW5UZXh0ID0gYCR7Y2hpbGROb2Rlc1BsYWluVGV4dH0ke2NoaWxkTm9kZVBsYWluVGV4dH1gO1xuXG4gICAgICByZXR1cm4gY2hpbGROb2Rlc1BsYWluVGV4dDtcbiAgICB9LCBFTVBUWV9TVFJJTkcpO1xuXG4gICAgcmV0dXJuIGNoaWxkTm9kZXNQbGFpblRleHQ7XG4gIH1cblxuICBzdGF0aWMgdGFnTmFtZSA9IFwic3BhblwiO1xuXG4gIHN0YXRpYyBjbGFzc05hbWUgPSBcImxpbmVcIjtcblxuICBzdGF0aWMgZnJvbU5vdGhpbmcoQ2xhc3MpIHtcbiAgICBpZiAoQ2xhc3MgPT09IHVuZGVmaW5lZCkge1xuICAgICAgQ2xhc3MgPSBMaW5lSFRNTE5vZGU7IC8vL1xuICAgIH1cblxuICAgIGNvbnN0IGxpbmVIVE1MTm9kZSA9IEhUTUxOb2RlLmZyb21Ob3RoaW5nKENsYXNzKTtcblxuICAgIHJldHVybiBsaW5lSFRNTE5vZGU7XG4gIH1cblxuICBzdGF0aWMgZnJvbU91dGVyTm9kZShDbGFzcywgb3V0ZXJOb2RlKSB7XG4gICAgaWYgKG91dGVyTm9kZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICBvdXRlck5vZGUgPSBDbGFzczsgIC8vL1xuXG4gICAgICBDbGFzcyA9IExpbmVIVE1MTm9kZTsgLy8vXG4gICAgfVxuXG4gICAgY29uc3QgbGluZUhUTUxOb2RlID0gSFRNTE5vZGUuZnJvbU91dGVyTm9kZShDbGFzcywgb3V0ZXJOb2RlKTtcblxuICAgIHJldHVybiBsaW5lSFRNTE5vZGU7XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJMaW5lSFRNTE5vZGUiLCJsaW5lcyIsImNvbnRleHQiLCJtYXhpbXVtTGluZUNoYXJhY3RlcnMiLCJERUZBVUxUX01BWElNVU1fTElORV9DSEFSQUNURVJTIiwicGxhaW5UZXh0IiwiYXNQbGFpblRleHQiLCJwbGFpblRleHRMZW5ndGgiLCJsZW5ndGgiLCJjaGFyYWN0ZXJzIiwibW91bnQiLCJwYXJlbnRET01FbGVtZW50Iiwic2libGluZ0RPTUVsZW1lbnQiLCJkb21FbGVtZW50IiwiZ2V0RE9NRWxlbWVudCIsImNvbnRlbnQiLCJDQVJSSUFHRV9SRVRVUk4iLCJ0ZXh0Tm9kZSIsImRvY3VtZW50IiwiY3JlYXRlVGV4dE5vZGUiLCJpbnNlcnRBZnRlcndhcmRzIiwidW5tb3VudCIsImxhc3RDaGlsZCIsInJlbW92ZSIsImNoaWxkTm9kZXNBc1BsYWluVGV4dCIsImNoaWxkTm9kZXNQbGFpblRleHQiLCJyZWR1Y2VDaGlsZE5vZGUiLCJjaGlsZE5vZGUiLCJjaGlsZE5vZGVQbGFpblRleHQiLCJFTVBUWV9TVFJJTkciLCJmcm9tTm90aGluZyIsIkNsYXNzIiwidW5kZWZpbmVkIiwibGluZUhUTUxOb2RlIiwiSFRNTE5vZGUiLCJmcm9tT3V0ZXJOb2RlIiwib3V0ZXJOb2RlIiwidGFnTmFtZSIsImNsYXNzTmFtZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFPcUJBOzs7MkRBTEE7bUJBRW9CO3lCQUNzQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVoRSxJQUFBLEFBQU1BLDZCQUFOO2NBQU1BO2FBQUFBO2dDQUFBQTtRQUFOLE9BQUEsa0JBQU1BOztrQkFBQUE7O1lBQ25CQyxLQUFBQTttQkFBQUEsU0FBQUEsTUFBTUMsT0FBTztnQkFDWCxxQ0FBb0VBLFFBQTVEQyx1QkFBQUEsb0VBQXdCQywwQ0FBK0IsbUNBQ3pEQyxZQUFZLElBQUksQ0FBQ0MsV0FBVyxDQUFDSixVQUM3Qkssa0JBQWtCRixVQUFVRyxNQUFNLEVBQ2xDQyxhQUFhRixpQkFDYk4sUUFBUSxBQUFDUSxhQUFhTix3QkFBeUI7Z0JBRXJELE9BQU9GO1lBQ1Q7OztZQUVBUyxLQUFBQTttQkFBQUEsU0FBQUEsTUFBTUMsZ0JBQWdCLEVBQUVDLGlCQUFpQixFQUFFVixPQUFPO2dCQUNoRCxJQUFJVztnQkFFSix1QkFkaUJiLHlCQWNYVSxTQUFOLElBQUssYUFBT0Msa0JBQWtCQyxtQkFBbUJWO2dCQUVqRFcsYUFBYSxJQUFJLENBQUNDLGFBQWE7Z0JBRS9CSCxtQkFBbUJFLFlBQWEsR0FBRztnQkFFbkMsSUFBTUUsVUFBVUMsMEJBQWUsRUFDekJDLFdBQVdDLFNBQVNDLGNBQWMsQ0FBQ0o7Z0JBRXpDRixhQUFhSSxVQUFXLEdBQUc7Z0JBRTNCRyxJQUFBQSxxQkFBZ0IsRUFBQ1AsWUFBWUY7Z0JBRTdCRSxhQUFhLElBQUksQ0FBQ0MsYUFBYTtnQkFFL0JGLG9CQUFvQkMsWUFBWSxHQUFHO2dCQUVuQyxPQUFPRDtZQUNUOzs7WUFFQVMsS0FBQUE7bUJBQUFBLFNBQUFBLFFBQVFWLGdCQUFnQjtnQkFDdEI7b0JBQ0UsSUFBSUU7b0JBRUpBLGFBQWEsSUFBSSxDQUFDQyxhQUFhO29CQUUvQixJQUFNSCxxQkFBbUJFLFlBQ25CUyxZQUFZVCxXQUFXUyxTQUFTO29CQUV0Q1QsYUFBYVMsV0FBWSxHQUFHO29CQUU1QkMsSUFBQUEsV0FBTSxFQUFDVixZQUFZRjtnQkFDckI7Z0JBRUEsdUJBaERpQlgseUJBZ0RYcUIsV0FBTixJQUFLLGFBQVNWO1lBQ2hCOzs7WUFFQWEsS0FBQUE7bUJBQUFBLFNBQUFBLHNCQUFzQnRCLE9BQU87Z0JBQzNCLElBQU11QixzQkFBc0IsSUFBSSxDQUFDQyxlQUFlLENBQUMsU0FBQ0QscUJBQXFCRTtvQkFDckUsSUFBTUMscUJBQXFCRCxVQUFVckIsV0FBVyxDQUFDSjtvQkFFakR1QixzQkFBc0IsQUFBQyxHQUF3QkcsT0FBdEJILHFCQUF5QyxPQUFuQkc7b0JBRS9DLE9BQU9IO2dCQUNULEdBQUdJLHVCQUFZO2dCQUVmLE9BQU9KO1lBQ1Q7Ozs7WUFNT0ssS0FBQUE7bUJBQVAsU0FBT0EsWUFBWUMsS0FBSztnQkFDdEIsSUFBSUEsVUFBVUMsV0FBVztvQkFDdkJELFFBckVlL0IsY0FxRU8sR0FBRztnQkFDM0I7Z0JBRUEsSUFBTWlDLGVBQWVDLGFBQVEsQ0FBQ0osV0FBVyxDQUFDQztnQkFFMUMsT0FBT0U7WUFDVDs7O1lBRU9FLEtBQUFBO21CQUFQLFNBQU9BLGNBQWNKLEtBQUssRUFBRUssU0FBUztnQkFDbkMsSUFBSUEsY0FBY0osV0FBVztvQkFDM0JJLFlBQVlMLE9BQVEsR0FBRztvQkFFdkJBLFFBakZlL0IsY0FpRk8sR0FBRztnQkFDM0I7Z0JBRUEsSUFBTWlDLGVBQWVDLGFBQVEsQ0FBQ0MsYUFBYSxDQUFDSixPQUFPSztnQkFFbkQsT0FBT0g7WUFDVDs7O1dBdkZtQmpDO0VBQXFCa0MsYUFBUTtBQStEaEQsaUJBL0RtQmxDLGNBK0RacUMsV0FBVTtBQUVqQixpQkFqRW1CckMsY0FpRVpzQyxhQUFZIn0=