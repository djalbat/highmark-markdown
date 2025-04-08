"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return InlineListingHTMLNode;
    }
});
var _html = /*#__PURE__*/ _interop_require_default(require("../../node/html"));
var _html1 = require("../../utilities/html");
var _string = require("../../utilities/string");
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
var InlineListingHTMLNode = /*#__PURE__*/ function(HTMLNode) {
    _inherits(InlineListingHTMLNode, HTMLNode);
    function InlineListingHTMLNode() {
        _class_call_check(this, InlineListingHTMLNode);
        return _call_super(this, InlineListingHTMLNode, arguments);
    }
    _create_class(InlineListingHTMLNode, [
        {
            key: "createDOMElement",
            value: function createDOMElement(context) {
                var domElement, content = this.content(context);
                content = (0, _string.removeBackticks)(content); ///
                content = (0, _html1.replaceEntities)(content); ///
                var textNode = document.createTextNode(content);
                domElement = _get(_get_prototype_of(InlineListingHTMLNode.prototype), "createDOMElement", this).call(this, context);
                var parentDOMElement = domElement; ///
                domElement = textNode; ///
                parentDOMElement.appendChild(domElement);
                domElement = parentDOMElement; ///
                return domElement;
            }
        },
        {
            key: "childNodesAsHTML",
            value: function childNodesAsHTML(indent, context) {
                var childNodesHTML;
                var content = this.content(context);
                content = (0, _string.removeBackticks)(content); ///
                childNodesHTML = content; ///
                return childNodesHTML;
            }
        }
    ], [
        {
            key: "fromNothing",
            value: function fromNothing() {
                return _html.default.fromNothing(InlineListingHTMLNode);
            }
        },
        {
            key: "fromOuterNode",
            value: function fromOuterNode(outerNode) {
                return _html.default.fromOuterNode(InlineListingHTMLNode, outerNode);
            }
        }
    ]);
    return InlineListingHTMLNode;
}(_html.default);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ub2RlL2h0bWwvaW5saW5lTGlzdGluZy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IEhUTUxOb2RlIGZyb20gXCIuLi8uLi9ub2RlL2h0bWxcIjtcblxuaW1wb3J0IHsgcmVwbGFjZUVudGl0aWVzIH0gZnJvbSBcIi4uLy4uL3V0aWxpdGllcy9odG1sXCI7XG5pbXBvcnQgeyByZW1vdmVCYWNrdGlja3MgfSBmcm9tIFwiLi4vLi4vdXRpbGl0aWVzL3N0cmluZ1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJbmxpbmVMaXN0aW5nSFRNTE5vZGUgZXh0ZW5kcyBIVE1MTm9kZSB7XG4gIGNyZWF0ZURPTUVsZW1lbnQoY29udGV4dCkge1xuICAgIGxldCBkb21FbGVtZW50LFxuICAgICAgICBjb250ZW50ID0gdGhpcy5jb250ZW50KGNvbnRleHQpO1xuXG4gICAgY29udGVudCA9IHJlbW92ZUJhY2t0aWNrcyhjb250ZW50KTsgLy8vXG5cbiAgICBjb250ZW50ID0gcmVwbGFjZUVudGl0aWVzKGNvbnRlbnQpOyAvLy9cblxuICAgIGNvbnN0IHRleHROb2RlID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY29udGVudCk7XG5cbiAgICBkb21FbGVtZW50ID0gc3VwZXIuY3JlYXRlRE9NRWxlbWVudChjb250ZXh0KTtcblxuICAgIGNvbnN0IHBhcmVudERPTUVsZW1lbnQgPSBkb21FbGVtZW50OyAgLy8vXG5cbiAgICBkb21FbGVtZW50ID0gdGV4dE5vZGU7IC8vL1xuXG4gICAgcGFyZW50RE9NRWxlbWVudC5hcHBlbmRDaGlsZChkb21FbGVtZW50KTtcblxuICAgIGRvbUVsZW1lbnQgPSBwYXJlbnRET01FbGVtZW50OyAgLy8vXG5cbiAgICByZXR1cm4gZG9tRWxlbWVudDtcbiAgfVxuXG4gIGNoaWxkTm9kZXNBc0hUTUwoaW5kZW50LCBjb250ZXh0KSB7XG4gICAgbGV0IGNoaWxkTm9kZXNIVE1MO1xuXG4gICAgbGV0IGNvbnRlbnQgPSB0aGlzLmNvbnRlbnQoY29udGV4dCk7XG5cbiAgICBjb250ZW50ID0gcmVtb3ZlQmFja3RpY2tzKGNvbnRlbnQpOyAvLy9cblxuICAgIGNoaWxkTm9kZXNIVE1MID0gY29udGVudDsgLy8vXG5cbiAgICByZXR1cm4gY2hpbGROb2Rlc0hUTUw7XG4gIH1cblxuICBzdGF0aWMgZnJvbU5vdGhpbmcoKSB7IHJldHVybiBIVE1MTm9kZS5mcm9tTm90aGluZyhJbmxpbmVMaXN0aW5nSFRNTE5vZGUpOyB9XG5cbiAgc3RhdGljIGZyb21PdXRlck5vZGUob3V0ZXJOb2RlKSB7IHJldHVybiBIVE1MTm9kZS5mcm9tT3V0ZXJOb2RlKElubGluZUxpc3RpbmdIVE1MTm9kZSwgb3V0ZXJOb2RlKTsgfVxufVxuIl0sIm5hbWVzIjpbIklubGluZUxpc3RpbmdIVE1MTm9kZSIsImNyZWF0ZURPTUVsZW1lbnQiLCJjb250ZXh0IiwiZG9tRWxlbWVudCIsImNvbnRlbnQiLCJyZW1vdmVCYWNrdGlja3MiLCJyZXBsYWNlRW50aXRpZXMiLCJ0ZXh0Tm9kZSIsImRvY3VtZW50IiwiY3JlYXRlVGV4dE5vZGUiLCJwYXJlbnRET01FbGVtZW50IiwiYXBwZW5kQ2hpbGQiLCJjaGlsZE5vZGVzQXNIVE1MIiwiaW5kZW50IiwiY2hpbGROb2Rlc0hUTUwiLCJmcm9tTm90aGluZyIsIkhUTUxOb2RlIiwiZnJvbU91dGVyTm9kZSIsIm91dGVyTm9kZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFPcUJBOzs7MkRBTEE7cUJBRVc7c0JBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVqQixJQUFBLEFBQU1BLHNDQUFOO2NBQU1BO2FBQUFBO2dDQUFBQTtlQUFOLGtCQUFNQTs7a0JBQUFBOztZQUNuQkMsS0FBQUE7bUJBQUFBLFNBQUFBLGlCQUFpQkMsT0FBTztnQkFDdEIsSUFBSUMsWUFDQUMsVUFBVSxJQUFJLENBQUNBLE9BQU8sQ0FBQ0Y7Z0JBRTNCRSxVQUFVQyxJQUFBQSx1QkFBZSxFQUFDRCxVQUFVLEdBQUc7Z0JBRXZDQSxVQUFVRSxJQUFBQSxzQkFBZSxFQUFDRixVQUFVLEdBQUc7Z0JBRXZDLElBQU1HLFdBQVdDLFNBQVNDLGNBQWMsQ0FBQ0w7Z0JBRXpDRCxhQUFhLHVCQVhJSCxrQ0FXRUMsb0JBQU4sSUFBSyxhQUFrQkM7Z0JBRXBDLElBQU1RLG1CQUFtQlAsWUFBYSxHQUFHO2dCQUV6Q0EsYUFBYUksVUFBVSxHQUFHO2dCQUUxQkcsaUJBQWlCQyxXQUFXLENBQUNSO2dCQUU3QkEsYUFBYU8sa0JBQW1CLEdBQUc7Z0JBRW5DLE9BQU9QO1lBQ1Q7OztZQUVBUyxLQUFBQTttQkFBQUEsU0FBQUEsaUJBQWlCQyxNQUFNLEVBQUVYLE9BQU87Z0JBQzlCLElBQUlZO2dCQUVKLElBQUlWLFVBQVUsSUFBSSxDQUFDQSxPQUFPLENBQUNGO2dCQUUzQkUsVUFBVUMsSUFBQUEsdUJBQWUsRUFBQ0QsVUFBVSxHQUFHO2dCQUV2Q1UsaUJBQWlCVixTQUFTLEdBQUc7Z0JBRTdCLE9BQU9VO1lBQ1Q7Ozs7WUFFT0MsS0FBQUE7bUJBQVAsU0FBT0E7Z0JBQWdCLE9BQU9DLGFBQVEsQ0FBQ0QsV0FBVyxDQXBDL0JmO1lBb0N3RDs7O1lBRXBFaUIsS0FBQUE7bUJBQVAsU0FBT0EsY0FBY0MsU0FBUztnQkFBSSxPQUFPRixhQUFRLENBQUNDLGFBQWEsQ0F0QzVDakIsdUJBc0NvRWtCO1lBQVk7OztXQXRDaEZsQjtFQUE4QmdCLGFBQVEifQ==