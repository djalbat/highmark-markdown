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
var _line = require("../../utilities/line");
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
            }
        },
        {
            key: "unmount",
            value: function unmount(parentDOMElement, context) {
                if (this.domElement !== null) {
                    parentDOMElement.removeChild(this.domElement);
                    this.domElement = null;
                }
            }
        },
        {
            key: "asHTML",
            value: function asHTML(indent, context) {
                indent = this.adjustIndent(indent);
                var childNodesHTML = this.childNodesAsHTML(indent, context), startingTag = this.startingTag(context), closingTag = this.closingTag(context), html = indent !== null ? "".concat(indent).concat(startingTag).concat(childNodesHTML).concat(closingTag, "\n") : "".concat(startingTag).concat(childNodesHTML).concat(closingTag);
                return html;
            }
        },
        {
            key: "createDOMElement",
            value: function createDOMElement(context) {
                var markdownNode = this, domElement = _get(_get_prototype_of(LineHTMLNode.prototype), "createDOMElement", this).call(this, context), domElements = (0, _line.domElementsFromMarkdownNode)(markdownNode, context), parentDOMElement = domElement, childNodeDOMElements = domElements; ///
                childNodeDOMElements.forEach(function(childNodeDOMElement) {
                    var domElement = childNodeDOMElement; ///
                    parentDOMElement.appendChild(domElement);
                });
                return domElement;
            }
        },
        {
            key: "childNodesAsPlainText",
            value: function childNodesAsPlainText(context) {
                var markdownNode = this, plainText = (0, _line.plainTextFromMarkdownNode)(markdownNode, context), childNodesPlainText = plainText; ///
                return childNodesPlainText;
            }
        },
        {
            key: "childNodesAsHTML",
            value: function childNodesAsHTML(indent, context) {
                var markdownNode = this, html = (0, _line.htmlFromMarkdownNode)(markdownNode, context), childNodesHTML = html; ///
                return childNodesHTML;
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ub2RlL2h0bWwvbGluZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IEhUTUxOb2RlIGZyb20gXCIuLi8uLi9ub2RlL2h0bWxcIjtcblxuaW1wb3J0IHsgaHRtbEZyb21NYXJrZG93bk5vZGUsIHBsYWluVGV4dEZyb21NYXJrZG93bk5vZGUsIGRvbUVsZW1lbnRzRnJvbU1hcmtkb3duTm9kZSB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvbGluZVwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBMaW5lSFRNTE5vZGUgZXh0ZW5kcyBIVE1MTm9kZSB7XG4gIG1vdW50KHBhcmVudERPTUVsZW1lbnQsIHNpYmxpbmdET01FbGVtZW50LCBjb250ZXh0KSB7XG4gICAgdGhpcy5kb21FbGVtZW50ID0gdGhpcy5jcmVhdGVET01FbGVtZW50KGNvbnRleHQpO1xuXG4gICAgcGFyZW50RE9NRWxlbWVudC5pbnNlcnRCZWZvcmUodGhpcy5kb21FbGVtZW50LCBzaWJsaW5nRE9NRWxlbWVudCk7XG4gIH1cblxuICB1bm1vdW50KHBhcmVudERPTUVsZW1lbnQsIGNvbnRleHQpIHtcbiAgICBpZiAodGhpcy5kb21FbGVtZW50ICE9PSBudWxsKSB7XG4gICAgICBwYXJlbnRET01FbGVtZW50LnJlbW92ZUNoaWxkKHRoaXMuZG9tRWxlbWVudCk7XG5cbiAgICAgIHRoaXMuZG9tRWxlbWVudCA9IG51bGw7XG4gICAgfVxuICB9XG5cbiAgYXNIVE1MKGluZGVudCwgY29udGV4dCkge1xuICAgIGluZGVudCA9IHRoaXMuYWRqdXN0SW5kZW50KGluZGVudCk7XG5cbiAgICBjb25zdCBjaGlsZE5vZGVzSFRNTCA9IHRoaXMuY2hpbGROb2Rlc0FzSFRNTChpbmRlbnQsIGNvbnRleHQpLFxuICAgICAgICAgIHN0YXJ0aW5nVGFnID0gdGhpcy5zdGFydGluZ1RhZyhjb250ZXh0KSxcbiAgICAgICAgICBjbG9zaW5nVGFnID0gdGhpcy5jbG9zaW5nVGFnKGNvbnRleHQpLFxuICAgICAgICAgIGh0bWwgPSAoaW5kZW50ICE9PSBudWxsKSA/XG4gICAgICAgICAgICAgICAgICBgJHtpbmRlbnR9JHtzdGFydGluZ1RhZ30ke2NoaWxkTm9kZXNIVE1MfSR7Y2xvc2luZ1RhZ31cbmA6ICAgICAgICAgICAgICAgICAgIGAke3N0YXJ0aW5nVGFnfSR7Y2hpbGROb2Rlc0hUTUx9JHtjbG9zaW5nVGFnfWA7XG5cbiAgICByZXR1cm4gaHRtbDtcbiAgfVxuXG4gIGNyZWF0ZURPTUVsZW1lbnQoY29udGV4dCkge1xuICAgIGNvbnN0IG1hcmtkb3duTm9kZSA9IHRoaXMsXG4gICAgICAgICAgZG9tRWxlbWVudCA9IHN1cGVyLmNyZWF0ZURPTUVsZW1lbnQoY29udGV4dCksXG4gICAgICAgICAgZG9tRWxlbWVudHMgPSBkb21FbGVtZW50c0Zyb21NYXJrZG93bk5vZGUobWFya2Rvd25Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgICBwYXJlbnRET01FbGVtZW50ID0gZG9tRWxlbWVudCwgIC8vL1xuICAgICAgICAgIGNoaWxkTm9kZURPTUVsZW1lbnRzID0gZG9tRWxlbWVudHM7IC8vL1xuXG4gICAgY2hpbGROb2RlRE9NRWxlbWVudHMuZm9yRWFjaCgoY2hpbGROb2RlRE9NRWxlbWVudCkgPT4ge1xuICAgICAgY29uc3QgZG9tRWxlbWVudCA9IGNoaWxkTm9kZURPTUVsZW1lbnQ7IC8vL1xuXG4gICAgICBwYXJlbnRET01FbGVtZW50LmFwcGVuZENoaWxkKGRvbUVsZW1lbnQpO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIGRvbUVsZW1lbnQ7XG4gIH1cblxuICBjaGlsZE5vZGVzQXNQbGFpblRleHQoY29udGV4dCkge1xuICAgIGNvbnN0IG1hcmtkb3duTm9kZSA9IHRoaXMsIC8vL1xuICAgICAgICAgIHBsYWluVGV4dCA9IHBsYWluVGV4dEZyb21NYXJrZG93bk5vZGUobWFya2Rvd25Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgICBjaGlsZE5vZGVzUGxhaW5UZXh0ID0gcGxhaW5UZXh0OyAgLy8vXG5cbiAgICByZXR1cm4gY2hpbGROb2Rlc1BsYWluVGV4dDtcbiAgfVxuXG4gIGNoaWxkTm9kZXNBc0hUTUwoaW5kZW50LCBjb250ZXh0KSB7XG4gICAgY29uc3QgbWFya2Rvd25Ob2RlID0gdGhpcyxcbiAgICAgICAgICBodG1sID0gaHRtbEZyb21NYXJrZG93bk5vZGUobWFya2Rvd25Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgICBjaGlsZE5vZGVzSFRNTCA9IGh0bWw7ICAvLy9cblxuICAgIHJldHVybiBjaGlsZE5vZGVzSFRNTDtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tTm90aGluZygpIHsgcmV0dXJuIEhUTUxOb2RlLmZyb21Ob3RoaW5nKExpbmVIVE1MTm9kZSk7IH1cblxuICBzdGF0aWMgZnJvbU91dGVyTm9kZShvdXRlck5vZGUpIHsgcmV0dXJuIEhUTUxOb2RlLmZyb21PdXRlck5vZGUoTGluZUhUTUxOb2RlLCBvdXRlck5vZGUpOyB9XG59XG4iXSwibmFtZXMiOlsiTGluZUhUTUxOb2RlIiwibW91bnQiLCJwYXJlbnRET01FbGVtZW50Iiwic2libGluZ0RPTUVsZW1lbnQiLCJjb250ZXh0IiwiZG9tRWxlbWVudCIsImNyZWF0ZURPTUVsZW1lbnQiLCJpbnNlcnRCZWZvcmUiLCJ1bm1vdW50IiwicmVtb3ZlQ2hpbGQiLCJhc0hUTUwiLCJpbmRlbnQiLCJhZGp1c3RJbmRlbnQiLCJjaGlsZE5vZGVzSFRNTCIsImNoaWxkTm9kZXNBc0hUTUwiLCJzdGFydGluZ1RhZyIsImNsb3NpbmdUYWciLCJodG1sIiwibWFya2Rvd25Ob2RlIiwiZG9tRWxlbWVudHMiLCJkb21FbGVtZW50c0Zyb21NYXJrZG93bk5vZGUiLCJjaGlsZE5vZGVET01FbGVtZW50cyIsImZvckVhY2giLCJjaGlsZE5vZGVET01FbGVtZW50IiwiYXBwZW5kQ2hpbGQiLCJjaGlsZE5vZGVzQXNQbGFpblRleHQiLCJwbGFpblRleHQiLCJwbGFpblRleHRGcm9tTWFya2Rvd25Ob2RlIiwiY2hpbGROb2Rlc1BsYWluVGV4dCIsImh0bWxGcm9tTWFya2Rvd25Ob2RlIiwiZnJvbU5vdGhpbmciLCJIVE1MTm9kZSIsImZyb21PdXRlck5vZGUiLCJvdXRlck5vZGUiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBTXFCQTs7OzJEQUpBO29CQUV3RTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRTlFLElBQUEsQUFBTUEsNkJBQU47Y0FBTUE7YUFBQUE7Z0NBQUFBO2VBQU4sa0JBQU1BOztrQkFBQUE7O1lBQ25CQyxLQUFBQTttQkFBQUEsU0FBQUEsTUFBTUMsZ0JBQWdCLEVBQUVDLGlCQUFpQixFQUFFQyxPQUFPO2dCQUNoRCxJQUFJLENBQUNDLFVBQVUsR0FBRyxJQUFJLENBQUNDLGdCQUFnQixDQUFDRjtnQkFFeENGLGlCQUFpQkssWUFBWSxDQUFDLElBQUksQ0FBQ0YsVUFBVSxFQUFFRjtZQUNqRDs7O1lBRUFLLEtBQUFBO21CQUFBQSxTQUFBQSxRQUFRTixnQkFBZ0IsRUFBRUUsT0FBTztnQkFDL0IsSUFBSSxJQUFJLENBQUNDLFVBQVUsS0FBSyxNQUFNO29CQUM1QkgsaUJBQWlCTyxXQUFXLENBQUMsSUFBSSxDQUFDSixVQUFVO29CQUU1QyxJQUFJLENBQUNBLFVBQVUsR0FBRztnQkFDcEI7WUFDRjs7O1lBRUFLLEtBQUFBO21CQUFBQSxTQUFBQSxPQUFPQyxNQUFNLEVBQUVQLE9BQU87Z0JBQ3BCTyxTQUFTLElBQUksQ0FBQ0MsWUFBWSxDQUFDRDtnQkFFM0IsSUFBTUUsaUJBQWlCLElBQUksQ0FBQ0MsZ0JBQWdCLENBQUNILFFBQVFQLFVBQy9DVyxjQUFjLElBQUksQ0FBQ0EsV0FBVyxDQUFDWCxVQUMvQlksYUFBYSxJQUFJLENBQUNBLFVBQVUsQ0FBQ1osVUFDN0JhLE9BQU8sQUFBQ04sV0FBVyxPQUNYLEFBQUMsR0FBV0ksT0FBVEosUUFBdUJFLE9BQWRFLGFBQStCQyxPQUFqQkgsZ0JBQTRCLE9BQVhHLFlBQVcsUUFDbkQsQUFBQyxHQUFnQkgsT0FBZEUsYUFBK0JDLE9BQWpCSCxnQkFBNEIsT0FBWEc7Z0JBRW5ELE9BQU9DO1lBQ1Q7OztZQUVBWCxLQUFBQTttQkFBQUEsU0FBQUEsaUJBQWlCRixPQUFPO2dCQUN0QixJQUFNYyxlQUFlLElBQUksRUFDbkJiLGFBQWEsdUJBOUJGTCx5QkE4QlFNLG9CQUFOLElBQUssYUFBa0JGLFVBQ3BDZSxjQUFjQyxJQUFBQSxpQ0FBMkIsRUFBQ0YsY0FBY2QsVUFDeERGLG1CQUFtQkcsWUFDbkJnQix1QkFBdUJGLGFBQWEsR0FBRztnQkFFN0NFLHFCQUFxQkMsT0FBTyxDQUFDLFNBQUNDO29CQUM1QixJQUFNbEIsYUFBYWtCLHFCQUFxQixHQUFHO29CQUUzQ3JCLGlCQUFpQnNCLFdBQVcsQ0FBQ25CO2dCQUMvQjtnQkFFQSxPQUFPQTtZQUNUOzs7WUFFQW9CLEtBQUFBO21CQUFBQSxTQUFBQSxzQkFBc0JyQixPQUFPO2dCQUMzQixJQUFNYyxlQUFlLElBQUksRUFDbkJRLFlBQVlDLElBQUFBLCtCQUF5QixFQUFDVCxjQUFjZCxVQUNwRHdCLHNCQUFzQkYsV0FBWSxHQUFHO2dCQUUzQyxPQUFPRTtZQUNUOzs7WUFFQWQsS0FBQUE7bUJBQUFBLFNBQUFBLGlCQUFpQkgsTUFBTSxFQUFFUCxPQUFPO2dCQUM5QixJQUFNYyxlQUFlLElBQUksRUFDbkJELE9BQU9ZLElBQUFBLDBCQUFvQixFQUFDWCxjQUFjZCxVQUMxQ1MsaUJBQWlCSSxNQUFPLEdBQUc7Z0JBRWpDLE9BQU9KO1lBQ1Q7Ozs7WUFFT2lCLEtBQUFBO21CQUFQLFNBQU9BO2dCQUFnQixPQUFPQyxhQUFRLENBQUNELFdBQVcsQ0E1RC9COUI7WUE0RCtDOzs7WUFFM0RnQyxLQUFBQTttQkFBUCxTQUFPQSxjQUFjQyxTQUFTO2dCQUFJLE9BQU9GLGFBQVEsQ0FBQ0MsYUFBYSxDQTlENUNoQyxjQThEMkRpQztZQUFZOzs7V0E5RHZFakM7RUFBcUIrQixhQUFRIn0=