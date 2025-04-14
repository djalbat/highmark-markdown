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
                    var url = this.url(context), content = url, textNode = document.createTextNode(content), domElement = textNode, _$parentDOMElement = this.domElement, _$siblingDOMElement = null;
                    _$parentDOMElement.insertBefore(domElement, _$siblingDOMElement);
                }
            }
        },
        {
            key: "unmount",
            value: function unmount(parentDOMElement, context) {
                var simple = this.isSimple();
                if (simple) {
                    var _$parentDOMElement = this.domElement, firstChild = _$parentDOMElement.firstChild, domElement = firstChild; ///
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9ub2RlL2h0bWwvbGluay9oeXBlci5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IEhUTUxOb2RlIGZyb20gXCIuLi8uLi8uLi9ub2RlL2h0bWxcIjtcblxuaW1wb3J0IHsgSFJFRl9BVFRSSUJVVEVfTkFNRSB9IGZyb20gXCIuLi8uLi8uLi9hdHRyaWJ1dGVOYW1lc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBIeXBlcmxpbmtIVE1MTm9kZSBleHRlbmRzIEhUTUxOb2RlIHtcbiAgaXNTaW1wbGUoKSB7IHJldHVybiB0aGlzLm91dGVyTm9kZS5pc1NpbXBsZSgpOyB9XG5cbiAgdXJsKGNvbnRleHQpIHsgcmV0dXJuIHRoaXMub3V0ZXJOb2RlLnVybChjb250ZXh0KTsgfVxuXG4gIGF0dHJpYnV0ZU5hbWUoY29udGV4dCkge1xuICAgIGNvbnN0IGF0dHJpYnV0ZU5hbWUgPSBIUkVGX0FUVFJJQlVURV9OQU1FO1xuXG4gICAgcmV0dXJuIGF0dHJpYnV0ZU5hbWU7XG4gIH1cblxuICBhdHRyaWJ1dGVWYWx1ZShjb250ZXh0KSB7XG4gICAgY29uc3QgdXJsID0gdGhpcy51cmwoY29udGV4dCksXG4gICAgICAgICAgYXR0cmlidXRlVmFsdWUgPSB1cmw7IC8vL1xuXG4gICAgcmV0dXJuIGF0dHJpYnV0ZVZhbHVlO1xuICB9XG5cbiAgbW91bnQocGFyZW50RE9NRWxlbWVudCwgc2libGluZ0RPTUVsZW1lbnQsIGNvbnRleHQpIHtcbiAgICBzdXBlci5tb3VudChwYXJlbnRET01FbGVtZW50LCBzaWJsaW5nRE9NRWxlbWVudCwgY29udGV4dCk7XG5cbiAgICBjb25zdCBzaW1wbGUgPSB0aGlzLmlzU2ltcGxlKCk7XG5cbiAgICBpZiAoc2ltcGxlKSB7XG4gICAgICBjb25zdCB1cmwgPSB0aGlzLnVybChjb250ZXh0KSxcbiAgICAgICAgICAgIGNvbnRlbnQgPSB1cmwsIC8vL1xuICAgICAgICAgICAgdGV4dE5vZGUgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjb250ZW50KSxcbiAgICAgICAgICAgIGRvbUVsZW1lbnQgPSB0ZXh0Tm9kZSwgIC8vL1xuICAgICAgICAgICAgcGFyZW50RE9NRWxlbWVudCA9IHRoaXMuZG9tRWxlbWVudCwgLy8vXG4gICAgICAgICAgICBzaWJsaW5nRE9NRWxlbWVudCA9IG51bGw7XG5cbiAgICAgIHBhcmVudERPTUVsZW1lbnQuaW5zZXJ0QmVmb3JlKGRvbUVsZW1lbnQsIHNpYmxpbmdET01FbGVtZW50KVxuICAgIH1cbiAgfVxuXG4gIHVubW91bnQocGFyZW50RE9NRWxlbWVudCwgY29udGV4dCkge1xuICAgIGNvbnN0IHNpbXBsZSA9IHRoaXMuaXNTaW1wbGUoKTtcblxuICAgIGlmIChzaW1wbGUpIHtcbiAgICAgIGNvbnN0IHBhcmVudERPTUVsZW1lbnQgPSB0aGlzLmRvbUVsZW1lbnQsXG4gICAgICAgICAgICBmaXJzdENoaWxkID0gcGFyZW50RE9NRWxlbWVudC5maXJzdENoaWxkLFxuICAgICAgICAgICAgZG9tRWxlbWVudCA9IGZpcnN0Q2hpbGQ7ICAvLy9cblxuICAgICAgcGFyZW50RE9NRWxlbWVudC5yZW1vdmVDaGlsZChkb21FbGVtZW50KVxuICAgIH1cblxuICAgIHN1cGVyLnVubW91bnQocGFyZW50RE9NRWxlbWVudCwgY29udGV4dCk7XG4gIH1cblxuICBhc1BsYWluVGV4dChjb250ZXh0KSB7XG4gICAgbGV0IHBsYWluVGV4dDtcblxuICAgIGNvbnN0IHNpbXBsZSA9IHRoaXMuaXNTaW1wbGUoKTtcblxuICAgIGlmIChzaW1wbGUpIHtcbiAgICAgIGNvbnN0IHVybCA9IHRoaXMudXJsKGNvbnRleHQpO1xuXG4gICAgICBwbGFpblRleHQgPSB1cmw7IC8vL1xuICAgIH0gZWxzZSB7XG4gICAgICBwbGFpblRleHQgPSBzdXBlci5hc1BsYWluVGV4dChjb250ZXh0KTtcbiAgICB9XG5cbiAgICByZXR1cm4gcGxhaW5UZXh0O1xuICB9XG5cbiAgY2hpbGROb2Rlc0FzSFRNTChpbmRlbnQsIGNvbnRleHQpIHtcbiAgICBsZXQgY2hpbGROb2Rlc0hUTUw7XG5cbiAgICBjb25zdCBzaW1wbGUgPSB0aGlzLmlzU2ltcGxlKCk7XG5cbiAgICBpZiAoc2ltcGxlKSB7XG4gICAgICBjb25zdCB1cmwgPSB0aGlzLnVybChjb250ZXh0KTtcblxuICAgICAgY2hpbGROb2Rlc0hUTUwgPSBgJHt1cmx9XG5gO1xuICAgIH0gZWxzZSB7XG4gICAgICBjaGlsZE5vZGVzSFRNTCA9IHN1cGVyLmNoaWxkTm9kZXNBc0hUTUwoaW5kZW50LCBjb250ZXh0KTtcbiAgICB9XG5cbiAgICByZXR1cm4gY2hpbGROb2Rlc0hUTUw7XG4gIH1cblxuICBzdGF0aWMgdGFnTmFtZSA9IFwiYVwiO1xuXG4gIHN0YXRpYyBjbGFzc05hbWUgPSBcImh5cGVybGlua1wiO1xuXG4gIHN0YXRpYyBmcm9tTm90aGluZygpIHsgcmV0dXJuIEhUTUxOb2RlLmZyb21Ob3RoaW5nKEh5cGVybGlua0hUTUxOb2RlKTsgfVxuXG4gIHN0YXRpYyBmcm9tT3V0ZXJOb2RlKG91dGVyTm9kZSkgeyByZXR1cm4gSFRNTE5vZGUuZnJvbU91dGVyTm9kZShIeXBlcmxpbmtIVE1MTm9kZSwgb3V0ZXJOb2RlKTsgfVxufVxuIl0sIm5hbWVzIjpbIkh5cGVybGlua0hUTUxOb2RlIiwiaXNTaW1wbGUiLCJvdXRlck5vZGUiLCJ1cmwiLCJjb250ZXh0IiwiYXR0cmlidXRlTmFtZSIsIkhSRUZfQVRUUklCVVRFX05BTUUiLCJhdHRyaWJ1dGVWYWx1ZSIsIm1vdW50IiwicGFyZW50RE9NRWxlbWVudCIsInNpYmxpbmdET01FbGVtZW50Iiwic2ltcGxlIiwiY29udGVudCIsInRleHROb2RlIiwiZG9jdW1lbnQiLCJjcmVhdGVUZXh0Tm9kZSIsImRvbUVsZW1lbnQiLCJpbnNlcnRCZWZvcmUiLCJ1bm1vdW50IiwiZmlyc3RDaGlsZCIsInJlbW92ZUNoaWxkIiwiYXNQbGFpblRleHQiLCJwbGFpblRleHQiLCJjaGlsZE5vZGVzQXNIVE1MIiwiaW5kZW50IiwiY2hpbGROb2Rlc0hUTUwiLCJmcm9tTm90aGluZyIsIkhUTUxOb2RlIiwiZnJvbU91dGVyTm9kZSIsInRhZ05hbWUiLCJjbGFzc05hbWUiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBTXFCQTs7OzJEQUpBOzhCQUVlOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRXJCLElBQUEsQUFBTUEsa0NBQU47Y0FBTUE7YUFBQUE7Z0NBQUFBO2VBQU4sa0JBQU1BOztrQkFBQUE7O1lBQ25CQyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQWEsT0FBTyxJQUFJLENBQUNDLFNBQVMsQ0FBQ0QsUUFBUTtZQUFJOzs7WUFFL0NFLEtBQUFBO21CQUFBQSxTQUFBQSxJQUFJQyxPQUFPO2dCQUFJLE9BQU8sSUFBSSxDQUFDRixTQUFTLENBQUNDLEdBQUcsQ0FBQ0M7WUFBVTs7O1lBRW5EQyxLQUFBQTttQkFBQUEsU0FBQUEsY0FBY0QsT0FBTztnQkFDbkIsSUFBTUMsZ0JBQWdCQyxtQ0FBbUI7Z0JBRXpDLE9BQU9EO1lBQ1Q7OztZQUVBRSxLQUFBQTttQkFBQUEsU0FBQUEsZUFBZUgsT0FBTztnQkFDcEIsSUFBTUQsTUFBTSxJQUFJLENBQUNBLEdBQUcsQ0FBQ0MsVUFDZkcsaUJBQWlCSixLQUFLLEdBQUc7Z0JBRS9CLE9BQU9JO1lBQ1Q7OztZQUVBQyxLQUFBQTttQkFBQUEsU0FBQUEsTUFBTUMsZ0JBQWdCLEVBQUVDLGlCQUFpQixFQUFFTixPQUFPO2dCQUNoRCx1QkFuQmlCSiw4QkFtQlhRLFNBQU4sSUFBSyxhQUFPQyxrQkFBa0JDLG1CQUFtQk47Z0JBRWpELElBQU1PLFNBQVMsSUFBSSxDQUFDVixRQUFRO2dCQUU1QixJQUFJVSxRQUFRO29CQUNWLElBQU1SLE1BQU0sSUFBSSxDQUFDQSxHQUFHLENBQUNDLFVBQ2ZRLFVBQVVULEtBQ1ZVLFdBQVdDLFNBQVNDLGNBQWMsQ0FBQ0gsVUFDbkNJLGFBQWFILFVBQ2JKLHFCQUFtQixJQUFJLENBQUNPLFVBQVUsRUFDbENOLHNCQUFvQjtvQkFFMUJELG1CQUFpQlEsWUFBWSxDQUFDRCxZQUFZTjtnQkFDNUM7WUFDRjs7O1lBRUFRLEtBQUFBO21CQUFBQSxTQUFBQSxRQUFRVCxnQkFBZ0IsRUFBRUwsT0FBTztnQkFDL0IsSUFBTU8sU0FBUyxJQUFJLENBQUNWLFFBQVE7Z0JBRTVCLElBQUlVLFFBQVE7b0JBQ1YsSUFBTUYscUJBQW1CLElBQUksQ0FBQ08sVUFBVSxFQUNsQ0csYUFBYVYsbUJBQWlCVSxVQUFVLEVBQ3hDSCxhQUFhRyxZQUFhLEdBQUc7b0JBRW5DVixtQkFBaUJXLFdBQVcsQ0FBQ0o7Z0JBQy9CO2dCQUVBLHVCQTlDaUJoQiw4QkE4Q1hrQixXQUFOLElBQUssYUFBU1Qsa0JBQWtCTDtZQUNsQzs7O1lBRUFpQixLQUFBQTttQkFBQUEsU0FBQUEsWUFBWWpCLE9BQU87Z0JBQ2pCLElBQUlrQjtnQkFFSixJQUFNWCxTQUFTLElBQUksQ0FBQ1YsUUFBUTtnQkFFNUIsSUFBSVUsUUFBUTtvQkFDVixJQUFNUixNQUFNLElBQUksQ0FBQ0EsR0FBRyxDQUFDQztvQkFFckJrQixZQUFZbkIsS0FBSyxHQUFHO2dCQUN0QixPQUFPO29CQUNMbUIsWUFBWSx1QkEzREd0Qiw4QkEyREdxQixlQUFOLElBQUssYUFBYWpCO2dCQUNoQztnQkFFQSxPQUFPa0I7WUFDVDs7O1lBRUFDLEtBQUFBO21CQUFBQSxTQUFBQSxpQkFBaUJDLE1BQU0sRUFBRXBCLE9BQU87Z0JBQzlCLElBQUlxQjtnQkFFSixJQUFNZCxTQUFTLElBQUksQ0FBQ1YsUUFBUTtnQkFFNUIsSUFBSVUsUUFBUTtvQkFDVixJQUFNUixNQUFNLElBQUksQ0FBQ0EsR0FBRyxDQUFDQztvQkFFckJxQixpQkFBaUIsQUFBQyxHQUFNLE9BQUp0QixLQUFJO2dCQUUxQixPQUFPO29CQUNMc0IsaUJBQWlCLHVCQTVFRnpCLDhCQTRFUXVCLG9CQUFOLElBQUssYUFBa0JDLFFBQVFwQjtnQkFDbEQ7Z0JBRUEsT0FBT3FCO1lBQ1Q7Ozs7WUFNT0MsS0FBQUE7bUJBQVAsU0FBT0E7Z0JBQWdCLE9BQU9DLGFBQVEsQ0FBQ0QsV0FBVyxDQXRGL0IxQjtZQXNGb0Q7OztZQUVoRTRCLEtBQUFBO21CQUFQLFNBQU9BLGNBQWMxQixTQUFTO2dCQUFJLE9BQU95QixhQUFRLENBQUNDLGFBQWEsQ0F4RjVDNUIsbUJBd0ZnRUU7WUFBWTs7O1dBeEY1RUY7RUFBMEIyQixhQUFRO0FBa0ZyRCxpQkFsRm1CM0IsbUJBa0ZaNkIsV0FBVTtBQUVqQixpQkFwRm1CN0IsbUJBb0ZaOEIsYUFBWSJ9