"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return HyperlinkHTMLNode;
    }
});
var _html = /*#__PURE__*/ _interop_require_default(require("../../../node/html"));
var _attributeNames = require("../../../attributeNames");
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
var HyperlinkHTMLNode = /*#__PURE__*/ function(HTMLNode) {
    _inherits(HyperlinkHTMLNode, HTMLNode);
    function HyperlinkHTMLNode() {
        _class_call_check(this, HyperlinkHTMLNode);
        return _call_super(this, HyperlinkHTMLNode, arguments);
    }
    _create_class(HyperlinkHTMLNode, [
        {
            key: "isSimple",
            value: function isSimple() {
                return this.outerNode.isSimple();
            }
        },
        {
            key: "url",
            value: function url(context) {
                return this.outerNode.url(context);
            }
        },
        {
            key: "attributeName",
            value: function attributeName(context) {
                var attributeName = _attributeNames.HREF_ATTRIBUTE_NAME;
                return attributeName;
            }
        },
        {
            key: "attributeValue",
            value: function attributeValue(context) {
                var url = this.url(context), attributeValue = url; ///
                return attributeValue;
            }
        },
        {
            key: "mount",
            value: function mount(parentDOMElement, siblingDOMElement, context) {
                _get(_get_prototype_of(HyperlinkHTMLNode.prototype), "mount", this).call(this, parentDOMElement, siblingDOMElement, context);
                var simple = this.isSimple();
                if (simple) {
                    var domElement;
                    domElement = this.getDOMElement();
                    var _$siblingDOMElement = null, _$parentDOMElement = domElement, url = this.url(context), content = url, textNode = document.createTextNode(content);
                    domElement = textNode; ///
                    _$parentDOMElement.insertBefore(domElement, _$siblingDOMElement);
                }
            }
        },
        {
            key: "unmount",
            value: function unmount(parentDOMElement, context) {
                var simple = this.isSimple();
                if (simple) {
                    var domElement;
                    domElement = this.getDOMElement();
                    var _$parentDOMElement = domElement, firstChild = _$parentDOMElement.firstChild;
                    domElement = firstChild; ///
                    _$parentDOMElement.removeChild(domElement);
                }
                _get(_get_prototype_of(HyperlinkHTMLNode.prototype), "unmount", this).call(this, parentDOMElement, context);
            }
        },
        {
            key: "asPlainText",
            value: function asPlainText(context) {
                var plainText;
                var simple = this.isSimple();
                if (simple) {
                    var url = this.url(context);
                    plainText = url; ///
                } else {
                    plainText = _get(_get_prototype_of(HyperlinkHTMLNode.prototype), "asPlainText", this).call(this, context);
                }
                return plainText;
            }
        },
        {
            key: "childNodesAsHTML",
            value: function childNodesAsHTML(indent, context) {
                var childNodesHTML;
                var simple = this.isSimple();
                if (simple) {
                    var url = this.url(context);
                    childNodesHTML = "".concat(url, "\n");
                } else {
                    childNodesHTML = _get(_get_prototype_of(HyperlinkHTMLNode.prototype), "childNodesAsHTML", this).call(this, indent, context);
                }
                return childNodesHTML;
            }
        }
    ], [
        {
            key: "fromNothing",
            value: function fromNothing() {
                return _html.default.fromNothing(HyperlinkHTMLNode);
            }
        },
        {
            key: "fromOuterNode",
            value: function fromOuterNode(outerNode) {
                return _html.default.fromOuterNode(HyperlinkHTMLNode, outerNode);
            }
        }
    ]);
    return HyperlinkHTMLNode;
}(_html.default);
_define_property(HyperlinkHTMLNode, "tagName", "a");
_define_property(HyperlinkHTMLNode, "className", "hyperlink");

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9ub2RlL2h0bWwvbGluay9oeXBlci5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IEhUTUxOb2RlIGZyb20gXCIuLi8uLi8uLi9ub2RlL2h0bWxcIjtcblxuaW1wb3J0IHsgSFJFRl9BVFRSSUJVVEVfTkFNRSB9IGZyb20gXCIuLi8uLi8uLi9hdHRyaWJ1dGVOYW1lc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBIeXBlcmxpbmtIVE1MTm9kZSBleHRlbmRzIEhUTUxOb2RlIHtcbiAgaXNTaW1wbGUoKSB7IHJldHVybiB0aGlzLm91dGVyTm9kZS5pc1NpbXBsZSgpOyB9XG5cbiAgdXJsKGNvbnRleHQpIHsgcmV0dXJuIHRoaXMub3V0ZXJOb2RlLnVybChjb250ZXh0KTsgfVxuXG4gIGF0dHJpYnV0ZU5hbWUoY29udGV4dCkge1xuICAgIGNvbnN0IGF0dHJpYnV0ZU5hbWUgPSBIUkVGX0FUVFJJQlVURV9OQU1FO1xuXG4gICAgcmV0dXJuIGF0dHJpYnV0ZU5hbWU7XG4gIH1cblxuICBhdHRyaWJ1dGVWYWx1ZShjb250ZXh0KSB7XG4gICAgY29uc3QgdXJsID0gdGhpcy51cmwoY29udGV4dCksXG4gICAgICAgICAgYXR0cmlidXRlVmFsdWUgPSB1cmw7IC8vL1xuXG4gICAgcmV0dXJuIGF0dHJpYnV0ZVZhbHVlO1xuICB9XG5cbiAgbW91bnQocGFyZW50RE9NRWxlbWVudCwgc2libGluZ0RPTUVsZW1lbnQsIGNvbnRleHQpIHtcbiAgICBzdXBlci5tb3VudChwYXJlbnRET01FbGVtZW50LCBzaWJsaW5nRE9NRWxlbWVudCwgY29udGV4dCk7XG5cbiAgICBjb25zdCBzaW1wbGUgPSB0aGlzLmlzU2ltcGxlKCk7XG5cbiAgICBpZiAoc2ltcGxlKSB7XG4gICAgICBsZXQgZG9tRWxlbWVudDtcblxuICAgICAgZG9tRWxlbWVudCA9IHRoaXMuZ2V0RE9NRWxlbWVudCgpO1xuXG4gICAgICBjb25zdCBzaWJsaW5nRE9NRWxlbWVudCA9IG51bGwsXG4gICAgICAgICAgICBwYXJlbnRET01FbGVtZW50ID0gZG9tRWxlbWVudCwgLy8vXG4gICAgICAgICAgICB1cmwgPSB0aGlzLnVybChjb250ZXh0KSxcbiAgICAgICAgICAgIGNvbnRlbnQgPSB1cmwsIC8vL1xuICAgICAgICAgICAgdGV4dE5vZGUgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjb250ZW50KTtcblxuICAgICAgZG9tRWxlbWVudCA9IHRleHROb2RlOyAgLy8vXG5cbiAgICAgIHBhcmVudERPTUVsZW1lbnQuaW5zZXJ0QmVmb3JlKGRvbUVsZW1lbnQsIHNpYmxpbmdET01FbGVtZW50KVxuICAgIH1cbiAgfVxuXG4gIHVubW91bnQocGFyZW50RE9NRWxlbWVudCwgY29udGV4dCkge1xuICAgIGNvbnN0IHNpbXBsZSA9IHRoaXMuaXNTaW1wbGUoKTtcblxuICAgIGlmIChzaW1wbGUpIHtcbiAgICAgIGxldCBkb21FbGVtZW50O1xuXG4gICAgICBkb21FbGVtZW50ID0gdGhpcy5nZXRET01FbGVtZW50KCk7XG5cbiAgICAgIGNvbnN0IHBhcmVudERPTUVsZW1lbnQgPSBkb21FbGVtZW50LCAvLy9cbiAgICAgICAgICAgIGZpcnN0Q2hpbGQgPSBwYXJlbnRET01FbGVtZW50LmZpcnN0Q2hpbGQ7XG5cbiAgICAgIGRvbUVsZW1lbnQgPSBmaXJzdENoaWxkOyAgLy8vXG5cbiAgICAgIHBhcmVudERPTUVsZW1lbnQucmVtb3ZlQ2hpbGQoZG9tRWxlbWVudCk7XG4gICAgfVxuXG4gICAgc3VwZXIudW5tb3VudChwYXJlbnRET01FbGVtZW50LCBjb250ZXh0KTtcbiAgfVxuXG4gIGFzUGxhaW5UZXh0KGNvbnRleHQpIHtcbiAgICBsZXQgcGxhaW5UZXh0O1xuXG4gICAgY29uc3Qgc2ltcGxlID0gdGhpcy5pc1NpbXBsZSgpO1xuXG4gICAgaWYgKHNpbXBsZSkge1xuICAgICAgY29uc3QgdXJsID0gdGhpcy51cmwoY29udGV4dCk7XG5cbiAgICAgIHBsYWluVGV4dCA9IHVybDsgLy8vXG4gICAgfSBlbHNlIHtcbiAgICAgIHBsYWluVGV4dCA9IHN1cGVyLmFzUGxhaW5UZXh0KGNvbnRleHQpO1xuICAgIH1cblxuICAgIHJldHVybiBwbGFpblRleHQ7XG4gIH1cblxuICBjaGlsZE5vZGVzQXNIVE1MKGluZGVudCwgY29udGV4dCkge1xuICAgIGxldCBjaGlsZE5vZGVzSFRNTDtcblxuICAgIGNvbnN0IHNpbXBsZSA9IHRoaXMuaXNTaW1wbGUoKTtcblxuICAgIGlmIChzaW1wbGUpIHtcbiAgICAgIGNvbnN0IHVybCA9IHRoaXMudXJsKGNvbnRleHQpO1xuXG4gICAgICBjaGlsZE5vZGVzSFRNTCA9IGAke3VybH1cbmA7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNoaWxkTm9kZXNIVE1MID0gc3VwZXIuY2hpbGROb2Rlc0FzSFRNTChpbmRlbnQsIGNvbnRleHQpO1xuICAgIH1cblxuICAgIHJldHVybiBjaGlsZE5vZGVzSFRNTDtcbiAgfVxuXG4gIHN0YXRpYyB0YWdOYW1lID0gXCJhXCI7XG5cbiAgc3RhdGljIGNsYXNzTmFtZSA9IFwiaHlwZXJsaW5rXCI7XG5cbiAgc3RhdGljIGZyb21Ob3RoaW5nKCkgeyByZXR1cm4gSFRNTE5vZGUuZnJvbU5vdGhpbmcoSHlwZXJsaW5rSFRNTE5vZGUpOyB9XG5cbiAgc3RhdGljIGZyb21PdXRlck5vZGUob3V0ZXJOb2RlKSB7IHJldHVybiBIVE1MTm9kZS5mcm9tT3V0ZXJOb2RlKEh5cGVybGlua0hUTUxOb2RlLCBvdXRlck5vZGUpOyB9XG59XG4iXSwibmFtZXMiOlsiSHlwZXJsaW5rSFRNTE5vZGUiLCJpc1NpbXBsZSIsIm91dGVyTm9kZSIsInVybCIsImNvbnRleHQiLCJhdHRyaWJ1dGVOYW1lIiwiSFJFRl9BVFRSSUJVVEVfTkFNRSIsImF0dHJpYnV0ZVZhbHVlIiwibW91bnQiLCJwYXJlbnRET01FbGVtZW50Iiwic2libGluZ0RPTUVsZW1lbnQiLCJzaW1wbGUiLCJkb21FbGVtZW50IiwiZ2V0RE9NRWxlbWVudCIsImNvbnRlbnQiLCJ0ZXh0Tm9kZSIsImRvY3VtZW50IiwiY3JlYXRlVGV4dE5vZGUiLCJpbnNlcnRCZWZvcmUiLCJ1bm1vdW50IiwiZmlyc3RDaGlsZCIsInJlbW92ZUNoaWxkIiwiYXNQbGFpblRleHQiLCJwbGFpblRleHQiLCJjaGlsZE5vZGVzQXNIVE1MIiwiaW5kZW50IiwiY2hpbGROb2Rlc0hUTUwiLCJmcm9tTm90aGluZyIsIkhUTUxOb2RlIiwiZnJvbU91dGVyTm9kZSIsInRhZ05hbWUiLCJjbGFzc05hbWUiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBTXFCQTs7OzJEQUpBOzhCQUVlOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRXJCLElBQUEsQUFBTUEsa0NBQU47Y0FBTUE7YUFBQUE7Z0NBQUFBO2VBQU4sa0JBQU1BOztrQkFBQUE7O1lBQ25CQyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQWEsT0FBTyxJQUFJLENBQUNDLFNBQVMsQ0FBQ0QsUUFBUTtZQUFJOzs7WUFFL0NFLEtBQUFBO21CQUFBQSxTQUFBQSxJQUFJQyxPQUFPO2dCQUFJLE9BQU8sSUFBSSxDQUFDRixTQUFTLENBQUNDLEdBQUcsQ0FBQ0M7WUFBVTs7O1lBRW5EQyxLQUFBQTttQkFBQUEsU0FBQUEsY0FBY0QsT0FBTztnQkFDbkIsSUFBTUMsZ0JBQWdCQyxtQ0FBbUI7Z0JBRXpDLE9BQU9EO1lBQ1Q7OztZQUVBRSxLQUFBQTttQkFBQUEsU0FBQUEsZUFBZUgsT0FBTztnQkFDcEIsSUFBTUQsTUFBTSxJQUFJLENBQUNBLEdBQUcsQ0FBQ0MsVUFDZkcsaUJBQWlCSixLQUFLLEdBQUc7Z0JBRS9CLE9BQU9JO1lBQ1Q7OztZQUVBQyxLQUFBQTttQkFBQUEsU0FBQUEsTUFBTUMsZ0JBQWdCLEVBQUVDLGlCQUFpQixFQUFFTixPQUFPO2dCQUNoRCx1QkFuQmlCSiw4QkFtQlhRLFNBQU4sSUFBSyxhQUFPQyxrQkFBa0JDLG1CQUFtQk47Z0JBRWpELElBQU1PLFNBQVMsSUFBSSxDQUFDVixRQUFRO2dCQUU1QixJQUFJVSxRQUFRO29CQUNWLElBQUlDO29CQUVKQSxhQUFhLElBQUksQ0FBQ0MsYUFBYTtvQkFFL0IsSUFBTUgsc0JBQW9CLE1BQ3BCRCxxQkFBbUJHLFlBQ25CVCxNQUFNLElBQUksQ0FBQ0EsR0FBRyxDQUFDQyxVQUNmVSxVQUFVWCxLQUNWWSxXQUFXQyxTQUFTQyxjQUFjLENBQUNIO29CQUV6Q0YsYUFBYUcsVUFBVyxHQUFHO29CQUUzQk4sbUJBQWlCUyxZQUFZLENBQUNOLFlBQVlGO2dCQUM1QztZQUNGOzs7WUFFQVMsS0FBQUE7bUJBQUFBLFNBQUFBLFFBQVFWLGdCQUFnQixFQUFFTCxPQUFPO2dCQUMvQixJQUFNTyxTQUFTLElBQUksQ0FBQ1YsUUFBUTtnQkFFNUIsSUFBSVUsUUFBUTtvQkFDVixJQUFJQztvQkFFSkEsYUFBYSxJQUFJLENBQUNDLGFBQWE7b0JBRS9CLElBQU1KLHFCQUFtQkcsWUFDbkJRLGFBQWFYLG1CQUFpQlcsVUFBVTtvQkFFOUNSLGFBQWFRLFlBQWEsR0FBRztvQkFFN0JYLG1CQUFpQlksV0FBVyxDQUFDVDtnQkFDL0I7Z0JBRUEsdUJBeERpQlosOEJBd0RYbUIsV0FBTixJQUFLLGFBQVNWLGtCQUFrQkw7WUFDbEM7OztZQUVBa0IsS0FBQUE7bUJBQUFBLFNBQUFBLFlBQVlsQixPQUFPO2dCQUNqQixJQUFJbUI7Z0JBRUosSUFBTVosU0FBUyxJQUFJLENBQUNWLFFBQVE7Z0JBRTVCLElBQUlVLFFBQVE7b0JBQ1YsSUFBTVIsTUFBTSxJQUFJLENBQUNBLEdBQUcsQ0FBQ0M7b0JBRXJCbUIsWUFBWXBCLEtBQUssR0FBRztnQkFDdEIsT0FBTztvQkFDTG9CLFlBQVksdUJBckVHdkIsOEJBcUVHc0IsZUFBTixJQUFLLGFBQWFsQjtnQkFDaEM7Z0JBRUEsT0FBT21CO1lBQ1Q7OztZQUVBQyxLQUFBQTttQkFBQUEsU0FBQUEsaUJBQWlCQyxNQUFNLEVBQUVyQixPQUFPO2dCQUM5QixJQUFJc0I7Z0JBRUosSUFBTWYsU0FBUyxJQUFJLENBQUNWLFFBQVE7Z0JBRTVCLElBQUlVLFFBQVE7b0JBQ1YsSUFBTVIsTUFBTSxJQUFJLENBQUNBLEdBQUcsQ0FBQ0M7b0JBRXJCc0IsaUJBQWlCLEFBQUMsR0FBTSxPQUFKdkIsS0FBSTtnQkFFMUIsT0FBTztvQkFDTHVCLGlCQUFpQix1QkF0RkYxQiw4QkFzRlF3QixvQkFBTixJQUFLLGFBQWtCQyxRQUFRckI7Z0JBQ2xEO2dCQUVBLE9BQU9zQjtZQUNUOzs7O1lBTU9DLEtBQUFBO21CQUFQLFNBQU9BO2dCQUFnQixPQUFPQyxhQUFRLENBQUNELFdBQVcsQ0FoRy9CM0I7WUFnR29EOzs7WUFFaEU2QixLQUFBQTttQkFBUCxTQUFPQSxjQUFjM0IsU0FBUztnQkFBSSxPQUFPMEIsYUFBUSxDQUFDQyxhQUFhLENBbEc1QzdCLG1CQWtHZ0VFO1lBQVk7OztXQWxHNUVGO0VBQTBCNEIsYUFBUTtBQTRGckQsaUJBNUZtQjVCLG1CQTRGWjhCLFdBQVU7QUFFakIsaUJBOUZtQjlCLG1CQThGWitCLGFBQVkifQ==