"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return StrongTextHTMLNode;
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
var StrongTextHTMLNode = /*#__PURE__*/ function(HTMLNode) {
    _inherits(StrongTextHTMLNode, HTMLNode);
    function StrongTextHTMLNode() {
        _class_call_check(this, StrongTextHTMLNode);
        return _call_super(this, StrongTextHTMLNode, arguments);
    }
    _create_class(StrongTextHTMLNode, [
        {
            key: "inlineText",
            value: function inlineText(context) {
                var inlineText = this.fromSecondChildNode(function(secondChildNode) {
                    var indent = null, inlineTextMarkdownNode = secondChildNode, inlineTextMarkdownNodeHTML = inlineTextMarkdownNode.asHTML(indent, context), inlineText = inlineTextMarkdownNodeHTML; ///
                    return inlineText;
                });
                return inlineText;
            }
        },
        {
            key: "createDOMElement",
            value: function createDOMElement(context) {
                var domElement;
                var inlineText = this.inlineText(context), content = inlineText; ///
                var textNode = document.createTextNode(content);
                domElement = _get(_get_prototype_of(StrongTextHTMLNode.prototype), "createDOMElement", this).call(this, context);
                var parentDOMElement = domElement; ///
                domElement = textNode; ///
                parentDOMElement.appendChild(domElement);
                domElement = parentDOMElement; ///
                return domElement;
            }
        }
    ], [
        {
            key: "fromNothing",
            value: function fromNothing() {
                return _html.default.fromNothing(StrongTextHTMLNode);
            }
        },
        {
            key: "fromOuterNode",
            value: function fromOuterNode(outerNode) {
                return _html.default.fromOuterNode(StrongTextHTMLNode, outerNode);
            }
        }
    ]);
    return StrongTextHTMLNode;
}(_html.default);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ub2RlL2h0bWwvc3Ryb25nVGV4dC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IEhUTUxOb2RlIGZyb20gXCIuLi8uLi9ub2RlL2h0bWxcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU3Ryb25nVGV4dEhUTUxOb2RlIGV4dGVuZHMgSFRNTE5vZGUge1xuICBpbmxpbmVUZXh0KGNvbnRleHQpIHtcbiAgICBjb25zdCBpbmxpbmVUZXh0ID0gdGhpcy5mcm9tU2Vjb25kQ2hpbGROb2RlKChzZWNvbmRDaGlsZE5vZGUpID0+IHtcbiAgICAgIGNvbnN0IGluZGVudCA9IG51bGwsXG4gICAgICAgICAgaW5saW5lVGV4dE1hcmtkb3duTm9kZSA9IHNlY29uZENoaWxkTm9kZSwgLy8vXG4gICAgICAgICAgaW5saW5lVGV4dE1hcmtkb3duTm9kZUhUTUwgPSBpbmxpbmVUZXh0TWFya2Rvd25Ob2RlLmFzSFRNTChpbmRlbnQsIGNvbnRleHQpLFxuICAgICAgICAgIGlubGluZVRleHQgPSBpbmxpbmVUZXh0TWFya2Rvd25Ob2RlSFRNTDsgIC8vL1xuXG4gICAgICByZXR1cm4gaW5saW5lVGV4dDtcbiAgICB9KTtcblxuICAgIHJldHVybiBpbmxpbmVUZXh0O1xuICB9XG5cbiAgY3JlYXRlRE9NRWxlbWVudChjb250ZXh0KSB7XG4gICAgbGV0IGRvbUVsZW1lbnQ7XG5cbiAgICBjb25zdCBpbmxpbmVUZXh0ID0gdGhpcy5pbmxpbmVUZXh0KGNvbnRleHQpLFxuICAgICAgICAgIGNvbnRlbnQgPSBpbmxpbmVUZXh0OyAvLy9cblxuICAgIGNvbnN0IHRleHROb2RlID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY29udGVudCk7XG5cbiAgICBkb21FbGVtZW50ID0gc3VwZXIuY3JlYXRlRE9NRWxlbWVudChjb250ZXh0KTtcblxuICAgIGNvbnN0IHBhcmVudERPTUVsZW1lbnQgPSBkb21FbGVtZW50OyAgLy8vXG5cbiAgICBkb21FbGVtZW50ID0gdGV4dE5vZGU7IC8vL1xuXG4gICAgcGFyZW50RE9NRWxlbWVudC5hcHBlbmRDaGlsZChkb21FbGVtZW50KTtcblxuICAgIGRvbUVsZW1lbnQgPSBwYXJlbnRET01FbGVtZW50OyAgLy8vXG5cbiAgICByZXR1cm4gZG9tRWxlbWVudDtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tTm90aGluZygpIHsgcmV0dXJuIEhUTUxOb2RlLmZyb21Ob3RoaW5nKFN0cm9uZ1RleHRIVE1MTm9kZSk7IH1cblxuICBzdGF0aWMgZnJvbU91dGVyTm9kZShvdXRlck5vZGUpIHsgcmV0dXJuIEhUTUxOb2RlLmZyb21PdXRlck5vZGUoU3Ryb25nVGV4dEhUTUxOb2RlLCBvdXRlck5vZGUpOyB9XG59XG4iXSwibmFtZXMiOlsiU3Ryb25nVGV4dEhUTUxOb2RlIiwiaW5saW5lVGV4dCIsImNvbnRleHQiLCJmcm9tU2Vjb25kQ2hpbGROb2RlIiwic2Vjb25kQ2hpbGROb2RlIiwiaW5kZW50IiwiaW5saW5lVGV4dE1hcmtkb3duTm9kZSIsImlubGluZVRleHRNYXJrZG93bk5vZGVIVE1MIiwiYXNIVE1MIiwiY3JlYXRlRE9NRWxlbWVudCIsImRvbUVsZW1lbnQiLCJjb250ZW50IiwidGV4dE5vZGUiLCJkb2N1bWVudCIsImNyZWF0ZVRleHROb2RlIiwicGFyZW50RE9NRWxlbWVudCIsImFwcGVuZENoaWxkIiwiZnJvbU5vdGhpbmciLCJIVE1MTm9kZSIsImZyb21PdXRlck5vZGUiLCJvdXRlck5vZGUiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBSXFCQTs7OzJEQUZBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFTixJQUFBLEFBQU1BLG1DQUFOO2NBQU1BO2FBQUFBO2dDQUFBQTtlQUFOLGtCQUFNQTs7a0JBQUFBOztZQUNuQkMsS0FBQUE7bUJBQUFBLFNBQUFBLFdBQVdDLE9BQU87Z0JBQ2hCLElBQU1ELGFBQWEsSUFBSSxDQUFDRSxtQkFBbUIsQ0FBQyxTQUFDQztvQkFDM0MsSUFBTUMsU0FBUyxNQUNYQyx5QkFBeUJGLGlCQUN6QkcsNkJBQTZCRCx1QkFBdUJFLE1BQU0sQ0FBQ0gsUUFBUUgsVUFDbkVELGFBQWFNLDRCQUE2QixHQUFHO29CQUVqRCxPQUFPTjtnQkFDVDtnQkFFQSxPQUFPQTtZQUNUOzs7WUFFQVEsS0FBQUE7bUJBQUFBLFNBQUFBLGlCQUFpQlAsT0FBTztnQkFDdEIsSUFBSVE7Z0JBRUosSUFBTVQsYUFBYSxJQUFJLENBQUNBLFVBQVUsQ0FBQ0MsVUFDN0JTLFVBQVVWLFlBQVksR0FBRztnQkFFL0IsSUFBTVcsV0FBV0MsU0FBU0MsY0FBYyxDQUFDSDtnQkFFekNELGFBQWEsdUJBdEJJViwrQkFzQkVTLG9CQUFOLElBQUssYUFBa0JQO2dCQUVwQyxJQUFNYSxtQkFBbUJMLFlBQWEsR0FBRztnQkFFekNBLGFBQWFFLFVBQVUsR0FBRztnQkFFMUJHLGlCQUFpQkMsV0FBVyxDQUFDTjtnQkFFN0JBLGFBQWFLLGtCQUFtQixHQUFHO2dCQUVuQyxPQUFPTDtZQUNUOzs7O1lBRU9PLEtBQUFBO21CQUFQLFNBQU9BO2dCQUFnQixPQUFPQyxhQUFRLENBQUNELFdBQVcsQ0FuQy9CakI7WUFtQ3FEOzs7WUFFakVtQixLQUFBQTttQkFBUCxTQUFPQSxjQUFjQyxTQUFTO2dCQUFJLE9BQU9GLGFBQVEsQ0FBQ0MsYUFBYSxDQXJDNUNuQixvQkFxQ2lFb0I7WUFBWTs7O1dBckM3RXBCO0VBQTJCa0IsYUFBUSJ9