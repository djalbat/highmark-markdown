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
var _childNodes = require("../../utilities/childNodes");
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
var LineHTMLNode = /*#__PURE__*/ function(HTMLNode) {
    _inherits(LineHTMLNode, HTMLNode);
    function LineHTMLNode() {
        _class_call_check(this, LineHTMLNode);
        return _call_super(this, LineHTMLNode, arguments);
    }
    _create_class(LineHTMLNode, [
        {
            key: "mount",
            value: function mount(parentDOMElement, siblingDOMElement, context) {
                this.domElement = this.createDOMElement(context);
                parentDOMElement.insertBefore(this.domElement, siblingDOMElement);
                parentDOMElement = this.domElement; ///
                var childDOMElements = this.createChildDOMElements(context);
                childDOMElements.forEach(function(childDOMElement) {
                    parentDOMElement.appendChild(childDOMElement);
                });
            }
        },
        {
            key: "unmount",
            value: function unmount(parentDOMElement, context) {
                {
                    var childDOMElement;
                    var _$parentDOMElement = this.domElement; ///
                    childDOMElement = _$parentDOMElement.firstChild || null;
                    while(childDOMElement !== null){
                        _$parentDOMElement.removeChild(childDOMElement);
                        childDOMElement = _$parentDOMElement.firstChild || null;
                    }
                }
                parentDOMElement.removeChild(this.domElement);
                this.domElement = null;
            }
        },
        {
            key: "asHTML",
            value: function asHTML(indent, context) {
                indent = this.adjustIndent(indent);
                var childNodesHTML = this.childNodesAsHTML(indent, context), startingTag = this.startingTag(context), closingTag = this.closingTag(context), html = "".concat(indent).concat(startingTag).concat(childNodesHTML).concat(closingTag, "\n");
                return html;
            }
        },
        {
            key: "childNodesAsHTML",
            value: function childNodesAsHTML(indent, context) {
                var htmlNode = this, html = (0, _childNodes.childNodesAsHTML)(htmlNode, context), childNodesHTML = html; ///
                return childNodesHTML;
            }
        },
        {
            key: "childNodesAsPlainText",
            value: function childNodesAsPlainText(context) {
                var htmlNode = this, plainText = (0, _childNodes.childNodesAsPlainText)(htmlNode, context);
                return plainText;
            }
        },
        {
            key: "createChildDOMElements",
            value: function createChildDOMElements(context) {
                var htmlNode = this, domElements = (0, _childNodes.childNodesAsDOMElements)(htmlNode, context), childDOMElements = domElements; ///
                return childDOMElements;
            }
        }
    ], [
        {
            key: "fromNothing",
            value: function fromNothing() {
                return _html.default.fromNothing(LineHTMLNode);
            }
        },
        {
            key: "fromOuterNode",
            value: function fromOuterNode(outerNode) {
                return _html.default.fromOuterNode(LineHTMLNode, outerNode);
            }
        }
    ]);
    return LineHTMLNode;
}(_html.default);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ub2RlL2h0bWwvbGluZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IEhUTUxOb2RlIGZyb20gXCIuLi8uLi9ub2RlL2h0bWxcIjtcblxuaW1wb3J0IHsgY2hpbGROb2Rlc0FzSFRNTCwgY2hpbGROb2Rlc0FzUGxhaW5UZXh0LCBjaGlsZE5vZGVzQXNET01FbGVtZW50cyB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvY2hpbGROb2Rlc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBMaW5lSFRNTE5vZGUgZXh0ZW5kcyBIVE1MTm9kZSB7XG4gIG1vdW50KHBhcmVudERPTUVsZW1lbnQsIHNpYmxpbmdET01FbGVtZW50LCBjb250ZXh0KSB7XG4gICAgdGhpcy5kb21FbGVtZW50ID0gdGhpcy5jcmVhdGVET01FbGVtZW50KGNvbnRleHQpO1xuXG4gICAgcGFyZW50RE9NRWxlbWVudC5pbnNlcnRCZWZvcmUodGhpcy5kb21FbGVtZW50LCBzaWJsaW5nRE9NRWxlbWVudClcblxuICAgIHBhcmVudERPTUVsZW1lbnQgPSB0aGlzLmRvbUVsZW1lbnQ7IC8vL1xuXG4gICAgY29uc3QgY2hpbGRET01FbGVtZW50cyA9IHRoaXMuY3JlYXRlQ2hpbGRET01FbGVtZW50cyhjb250ZXh0KTtcblxuICAgIGNoaWxkRE9NRWxlbWVudHMuZm9yRWFjaCgoY2hpbGRET01FbGVtZW50KSA9PiB7XG4gICAgICBwYXJlbnRET01FbGVtZW50LmFwcGVuZENoaWxkKGNoaWxkRE9NRWxlbWVudCk7XG4gICAgfSk7XG4gIH1cblxuICB1bm1vdW50KHBhcmVudERPTUVsZW1lbnQsIGNvbnRleHQpIHtcbiAgICB7XG4gICAgICBsZXQgY2hpbGRET01FbGVtZW50O1xuXG4gICAgICBjb25zdCBwYXJlbnRET01FbGVtZW50ID0gdGhpcy5kb21FbGVtZW50OyAvLy9cblxuICAgICAgY2hpbGRET01FbGVtZW50ID0gcGFyZW50RE9NRWxlbWVudC5maXJzdENoaWxkIHx8IG51bGw7XG5cbiAgICAgIHdoaWxlIChjaGlsZERPTUVsZW1lbnQgIT09IG51bGwpIHtcbiAgICAgICAgcGFyZW50RE9NRWxlbWVudC5yZW1vdmVDaGlsZChjaGlsZERPTUVsZW1lbnQpO1xuXG4gICAgICAgIGNoaWxkRE9NRWxlbWVudCA9IHBhcmVudERPTUVsZW1lbnQuZmlyc3RDaGlsZCB8fCBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIHBhcmVudERPTUVsZW1lbnQucmVtb3ZlQ2hpbGQodGhpcy5kb21FbGVtZW50KTtcblxuICAgIHRoaXMuZG9tRWxlbWVudCA9IG51bGw7XG4gIH1cblxuICBhc0hUTUwoaW5kZW50LCBjb250ZXh0KSB7XG4gICAgaW5kZW50ID0gdGhpcy5hZGp1c3RJbmRlbnQoaW5kZW50KTtcblxuICAgIGNvbnN0IGNoaWxkTm9kZXNIVE1MID0gdGhpcy5jaGlsZE5vZGVzQXNIVE1MKGluZGVudCwgY29udGV4dCksXG4gICAgICAgICAgc3RhcnRpbmdUYWcgPSB0aGlzLnN0YXJ0aW5nVGFnKGNvbnRleHQpLFxuICAgICAgICAgIGNsb3NpbmdUYWcgPSB0aGlzLmNsb3NpbmdUYWcoY29udGV4dCksXG4gICAgICAgICAgaHRtbCA9IGAke2luZGVudH0ke3N0YXJ0aW5nVGFnfSR7Y2hpbGROb2Rlc0hUTUx9JHtjbG9zaW5nVGFnfVxuYDtcblxuICAgIHJldHVybiBodG1sO1xuICB9XG5cbiAgY2hpbGROb2Rlc0FzSFRNTChpbmRlbnQsIGNvbnRleHQpIHtcbiAgICBjb25zdCBodG1sTm9kZSA9IHRoaXMsICAvLy9cbiAgICAgICAgICBodG1sID0gY2hpbGROb2Rlc0FzSFRNTChodG1sTm9kZSwgY29udGV4dCksXG4gICAgICAgICAgY2hpbGROb2Rlc0hUTUwgPSBodG1sOyAgLy8vXG5cbiAgICByZXR1cm4gY2hpbGROb2Rlc0hUTUw7XG4gIH1cblxuICBjaGlsZE5vZGVzQXNQbGFpblRleHQoY29udGV4dCkge1xuICAgIGNvbnN0IGh0bWxOb2RlID0gdGhpcywgIC8vL1xuICAgICAgICAgIHBsYWluVGV4dCA9IGNoaWxkTm9kZXNBc1BsYWluVGV4dChodG1sTm9kZSwgY29udGV4dCk7XG5cbiAgICByZXR1cm4gcGxhaW5UZXh0O1xuICB9XG5cbiAgY3JlYXRlQ2hpbGRET01FbGVtZW50cyhjb250ZXh0KSB7XG4gICAgY29uc3QgaHRtbE5vZGUgPSB0aGlzLCAgLy8vXG4gICAgICAgICAgZG9tRWxlbWVudHMgPSBjaGlsZE5vZGVzQXNET01FbGVtZW50cyhodG1sTm9kZSwgY29udGV4dCksXG4gICAgICAgICAgY2hpbGRET01FbGVtZW50cyA9IGRvbUVsZW1lbnRzOyAvLy9cblxuICAgIHJldHVybiBjaGlsZERPTUVsZW1lbnRzO1xuICB9XG5cbiAgc3RhdGljIGZyb21Ob3RoaW5nKCkgeyByZXR1cm4gSFRNTE5vZGUuZnJvbU5vdGhpbmcoTGluZUhUTUxOb2RlKTsgfVxuXG4gIHN0YXRpYyBmcm9tT3V0ZXJOb2RlKG91dGVyTm9kZSkgeyByZXR1cm4gSFRNTE5vZGUuZnJvbU91dGVyTm9kZShMaW5lSFRNTE5vZGUsIG91dGVyTm9kZSk7IH1cbn1cbiJdLCJuYW1lcyI6WyJMaW5lSFRNTE5vZGUiLCJtb3VudCIsInBhcmVudERPTUVsZW1lbnQiLCJzaWJsaW5nRE9NRWxlbWVudCIsImNvbnRleHQiLCJkb21FbGVtZW50IiwiY3JlYXRlRE9NRWxlbWVudCIsImluc2VydEJlZm9yZSIsImNoaWxkRE9NRWxlbWVudHMiLCJjcmVhdGVDaGlsZERPTUVsZW1lbnRzIiwiZm9yRWFjaCIsImNoaWxkRE9NRWxlbWVudCIsImFwcGVuZENoaWxkIiwidW5tb3VudCIsImZpcnN0Q2hpbGQiLCJyZW1vdmVDaGlsZCIsImFzSFRNTCIsImluZGVudCIsImFkanVzdEluZGVudCIsImNoaWxkTm9kZXNIVE1MIiwiY2hpbGROb2Rlc0FzSFRNTCIsInN0YXJ0aW5nVGFnIiwiY2xvc2luZ1RhZyIsImh0bWwiLCJodG1sTm9kZSIsImNoaWxkTm9kZXNBc1BsYWluVGV4dCIsInBsYWluVGV4dCIsImRvbUVsZW1lbnRzIiwiY2hpbGROb2Rlc0FzRE9NRWxlbWVudHMiLCJmcm9tTm90aGluZyIsIkhUTUxOb2RlIiwiZnJvbU91dGVyTm9kZSIsIm91dGVyTm9kZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFNcUJBOzs7MkRBSkE7MEJBRTREOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRWxFLElBQUEsQUFBTUEsNkJBQU47Y0FBTUE7YUFBQUE7Z0NBQUFBO2VBQU4sa0JBQU1BOztrQkFBQUE7O1lBQ25CQyxLQUFBQTttQkFBQUEsU0FBQUEsTUFBTUMsZ0JBQWdCLEVBQUVDLGlCQUFpQixFQUFFQyxPQUFPO2dCQUNoRCxJQUFJLENBQUNDLFVBQVUsR0FBRyxJQUFJLENBQUNDLGdCQUFnQixDQUFDRjtnQkFFeENGLGlCQUFpQkssWUFBWSxDQUFDLElBQUksQ0FBQ0YsVUFBVSxFQUFFRjtnQkFFL0NELG1CQUFtQixJQUFJLENBQUNHLFVBQVUsRUFBRSxHQUFHO2dCQUV2QyxJQUFNRyxtQkFBbUIsSUFBSSxDQUFDQyxzQkFBc0IsQ0FBQ0w7Z0JBRXJESSxpQkFBaUJFLE9BQU8sQ0FBQyxTQUFDQztvQkFDeEJULGlCQUFpQlUsV0FBVyxDQUFDRDtnQkFDL0I7WUFDRjs7O1lBRUFFLEtBQUFBO21CQUFBQSxTQUFBQSxRQUFRWCxnQkFBZ0IsRUFBRUUsT0FBTztnQkFDL0I7b0JBQ0UsSUFBSU87b0JBRUosSUFBTVQscUJBQW1CLElBQUksQ0FBQ0csVUFBVSxFQUFFLEdBQUc7b0JBRTdDTSxrQkFBa0JULG1CQUFpQlksVUFBVSxJQUFJO29CQUVqRCxNQUFPSCxvQkFBb0IsS0FBTTt3QkFDL0JULG1CQUFpQmEsV0FBVyxDQUFDSjt3QkFFN0JBLGtCQUFrQlQsbUJBQWlCWSxVQUFVLElBQUk7b0JBQ25EO2dCQUNGO2dCQUVBWixpQkFBaUJhLFdBQVcsQ0FBQyxJQUFJLENBQUNWLFVBQVU7Z0JBRTVDLElBQUksQ0FBQ0EsVUFBVSxHQUFHO1lBQ3BCOzs7WUFFQVcsS0FBQUE7bUJBQUFBLFNBQUFBLE9BQU9DLE1BQU0sRUFBRWIsT0FBTztnQkFDcEJhLFNBQVMsSUFBSSxDQUFDQyxZQUFZLENBQUNEO2dCQUUzQixJQUFNRSxpQkFBaUIsSUFBSSxDQUFDQyxnQkFBZ0IsQ0FBQ0gsUUFBUWIsVUFDL0NpQixjQUFjLElBQUksQ0FBQ0EsV0FBVyxDQUFDakIsVUFDL0JrQixhQUFhLElBQUksQ0FBQ0EsVUFBVSxDQUFDbEIsVUFDN0JtQixPQUFPLEFBQUMsR0FBV0YsT0FBVEosUUFBdUJFLE9BQWRFLGFBQStCQyxPQUFqQkgsZ0JBQTRCLE9BQVhHLFlBQVc7Z0JBR25FLE9BQU9DO1lBQ1Q7OztZQUVBSCxLQUFBQTttQkFBQUEsU0FBQUEsaUJBQWlCSCxNQUFNLEVBQUViLE9BQU87Z0JBQzlCLElBQU1vQixXQUFXLElBQUksRUFDZkQsT0FBT0gsSUFBQUEsNEJBQWdCLEVBQUNJLFVBQVVwQixVQUNsQ2UsaUJBQWlCSSxNQUFPLEdBQUc7Z0JBRWpDLE9BQU9KO1lBQ1Q7OztZQUVBTSxLQUFBQTttQkFBQUEsU0FBQUEsc0JBQXNCckIsT0FBTztnQkFDM0IsSUFBTW9CLFdBQVcsSUFBSSxFQUNmRSxZQUFZRCxJQUFBQSxpQ0FBcUIsRUFBQ0QsVUFBVXBCO2dCQUVsRCxPQUFPc0I7WUFDVDs7O1lBRUFqQixLQUFBQTttQkFBQUEsU0FBQUEsdUJBQXVCTCxPQUFPO2dCQUM1QixJQUFNb0IsV0FBVyxJQUFJLEVBQ2ZHLGNBQWNDLElBQUFBLG1DQUF1QixFQUFDSixVQUFVcEIsVUFDaERJLG1CQUFtQm1CLGFBQWEsR0FBRztnQkFFekMsT0FBT25CO1lBQ1Q7Ozs7WUFFT3FCLEtBQUFBO21CQUFQLFNBQU9BO2dCQUFnQixPQUFPQyxhQUFRLENBQUNELFdBQVcsQ0F0RS9CN0I7WUFzRStDOzs7WUFFM0QrQixLQUFBQTttQkFBUCxTQUFPQSxjQUFjQyxTQUFTO2dCQUFJLE9BQU9GLGFBQVEsQ0FBQ0MsYUFBYSxDQXhFNUMvQixjQXdFMkRnQztZQUFZOzs7V0F4RXZFaEM7RUFBcUI4QixhQUFRIn0=