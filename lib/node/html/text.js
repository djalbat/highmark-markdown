"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return TextHTMLNode;
    }
});
var _html = /*#__PURE__*/ _interop_require_default(require("../../node/html"));
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
var TextHTMLNode = /*#__PURE__*/ function(HTMLNode) {
    _inherits(TextHTMLNode, HTMLNode);
    function TextHTMLNode() {
        _class_call_check(this, TextHTMLNode);
        return _call_super(this, TextHTMLNode, arguments);
    }
    _create_class(TextHTMLNode, [
        {
            key: "text",
            value: function text(content) {
                return this.outerNode.text(content);
            }
        },
        {
            key: "createDOMElement",
            value: function createDOMElement(context) {
                var text = this.text(context), content = text, textNode = document.createTextNode(content), domElement = textNode; ///
                return domElement;
            }
        },
        {
            key: "asHTML",
            value: function asHTML(indent, context) {
                var text = this.text(context), html = text; ///
                return html;
            }
        },
        {
            key: "asPlainText",
            value: function asPlainText(context) {
                var text = this.text(context), plainText = text; ///
                return plainText;
            }
        }
    ], [
        {
            key: "fromNothing",
            value: function fromNothing(Class) {
                return _html.default.fromNothing(Class);
            }
        },
        {
            key: "fromOuterNode",
            value: function fromOuterNode(Class, outerNode) {
                return _html.default.fromOuterNode(Class, outerNode);
            }
        }
    ]);
    return TextHTMLNode;
}(_html.default);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ub2RlL2h0bWwvdGV4dC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IEhUTUxOb2RlIGZyb20gXCIuLi8uLi9ub2RlL2h0bWxcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGV4dEhUTUxOb2RlIGV4dGVuZHMgSFRNTE5vZGUge1xuICB0ZXh0KGNvbnRlbnQpIHsgcmV0dXJuIHRoaXMub3V0ZXJOb2RlLnRleHQoY29udGVudCk7IH1cblxuICBjcmVhdGVET01FbGVtZW50KGNvbnRleHQpIHtcbiAgICBjb25zdCB0ZXh0ID0gdGhpcy50ZXh0KGNvbnRleHQpLFxuICAgICAgICAgIGNvbnRlbnQgPSB0ZXh0LCAvLy9cbiAgICAgICAgICB0ZXh0Tm9kZSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNvbnRlbnQpLFxuICAgICAgICAgIGRvbUVsZW1lbnQgPSB0ZXh0Tm9kZTsgIC8vL1xuXG4gICAgcmV0dXJuIGRvbUVsZW1lbnQ7XG4gIH1cblxuICBhc0hUTUwoaW5kZW50LCBjb250ZXh0KSB7XG4gICAgY29uc3QgdGV4dCA9IHRoaXMudGV4dChjb250ZXh0KSxcbiAgICAgICAgICBodG1sID0gdGV4dDsgLy8vXG5cbiAgICByZXR1cm4gaHRtbDtcbiAgfVxuXG4gIGFzUGxhaW5UZXh0KGNvbnRleHQpIHtcbiAgICBjb25zdCB0ZXh0ID0gdGhpcy50ZXh0KGNvbnRleHQpLFxuICAgICAgICAgIHBsYWluVGV4dCA9IHRleHQ7IC8vL1xuXG4gICAgcmV0dXJuIHBsYWluVGV4dDtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tTm90aGluZyhDbGFzcykgeyByZXR1cm4gSFRNTE5vZGUuZnJvbU5vdGhpbmcoQ2xhc3MpOyB9XG5cbiAgc3RhdGljIGZyb21PdXRlck5vZGUoQ2xhc3MsIG91dGVyTm9kZSkgeyByZXR1cm4gSFRNTE5vZGUuZnJvbU91dGVyTm9kZShDbGFzcywgb3V0ZXJOb2RlKTsgfVxufVxuIl0sIm5hbWVzIjpbIlRleHRIVE1MTm9kZSIsInRleHQiLCJjb250ZW50Iiwib3V0ZXJOb2RlIiwiY3JlYXRlRE9NRWxlbWVudCIsImNvbnRleHQiLCJ0ZXh0Tm9kZSIsImRvY3VtZW50IiwiY3JlYXRlVGV4dE5vZGUiLCJkb21FbGVtZW50IiwiYXNIVE1MIiwiaW5kZW50IiwiaHRtbCIsImFzUGxhaW5UZXh0IiwicGxhaW5UZXh0IiwiZnJvbU5vdGhpbmciLCJDbGFzcyIsIkhUTUxOb2RlIiwiZnJvbU91dGVyTm9kZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFJcUJBOzs7MkRBRkE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFTixJQUFBLEFBQU1BLDZCQUFOO2NBQU1BO2FBQUFBO2dDQUFBQTtlQUFOLGtCQUFNQTs7a0JBQUFBOztZQUNuQkMsS0FBQUE7bUJBQUFBLFNBQUFBLEtBQUtDLE9BQU87Z0JBQUksT0FBTyxJQUFJLENBQUNDLFNBQVMsQ0FBQ0YsSUFBSSxDQUFDQztZQUFVOzs7WUFFckRFLEtBQUFBO21CQUFBQSxTQUFBQSxpQkFBaUJDLE9BQU87Z0JBQ3RCLElBQU1KLE9BQU8sSUFBSSxDQUFDQSxJQUFJLENBQUNJLFVBQ2pCSCxVQUFVRCxNQUNWSyxXQUFXQyxTQUFTQyxjQUFjLENBQUNOLFVBQ25DTyxhQUFhSCxVQUFXLEdBQUc7Z0JBRWpDLE9BQU9HO1lBQ1Q7OztZQUVBQyxLQUFBQTttQkFBQUEsU0FBQUEsT0FBT0MsTUFBTSxFQUFFTixPQUFPO2dCQUNwQixJQUFNSixPQUFPLElBQUksQ0FBQ0EsSUFBSSxDQUFDSSxVQUNqQk8sT0FBT1gsTUFBTSxHQUFHO2dCQUV0QixPQUFPVztZQUNUOzs7WUFFQUMsS0FBQUE7bUJBQUFBLFNBQUFBLFlBQVlSLE9BQU87Z0JBQ2pCLElBQU1KLE9BQU8sSUFBSSxDQUFDQSxJQUFJLENBQUNJLFVBQ2pCUyxZQUFZYixNQUFNLEdBQUc7Z0JBRTNCLE9BQU9hO1lBQ1Q7Ozs7WUFFT0MsS0FBQUE7bUJBQVAsU0FBT0EsWUFBWUMsS0FBSztnQkFBSSxPQUFPQyxhQUFRLENBQUNGLFdBQVcsQ0FBQ0M7WUFBUTs7O1lBRXpERSxLQUFBQTttQkFBUCxTQUFPQSxjQUFjRixLQUFLLEVBQUViLFNBQVM7Z0JBQUksT0FBT2MsYUFBUSxDQUFDQyxhQUFhLENBQUNGLE9BQU9iO1lBQVk7OztXQTVCdkVIO0VBQXFCaUIsYUFBUSJ9