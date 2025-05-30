"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return BlockListingHTMLNode;
    }
});
var _html = /*#__PURE__*/ _interop_require_default(require("../../../node/html"));
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
var BlockListingHTMLNode = /*#__PURE__*/ function(HTMLNode) {
    _inherits(BlockListingHTMLNode, HTMLNode);
    function BlockListingHTMLNode() {
        _class_call_check(this, BlockListingHTMLNode);
        return _call_super(this, BlockListingHTMLNode, arguments);
    }
    _create_class(BlockListingHTMLNode, [
        {
            key: "content",
            value: function content(context) {
                var content = this.reduceChildHTMLNode(function(content, childHTNLNode) {
                    var blockLineHTMLNode = childHTNLNode, blockLineHTMLNodeContent = blockLineHTMLNode.content(context);
                    content = content !== null ? "".concat(content).concat(blockLineHTMLNodeContent) : blockLineHTMLNodeContent; ///
                    return content;
                }, null);
                return content;
            }
        },
        {
            key: "className",
            value: function className(context) {
                var markdownNode = this.getMarkdownNode(), className = markdownNode.className(context);
                return className;
            }
        }
    ], [
        {
            key: "fromNothing",
            value: function fromNothing(Class) {
                if (Class === undefined) {
                    Class = BlockListingHTMLNode; ///
                }
                var blockListingHTMLNode = _html.default.fromNothing(Class);
                return blockListingHTMLNode;
            }
        },
        {
            key: "fromOuterNode",
            value: function fromOuterNode(Class, outerNode) {
                if (Class === undefined) {
                    outerNode = Class; ///
                    Class = BlockListingHTMLNode; ///
                }
                var blockListingHTMLNode = _html.default.fromOuterNode(Class, outerNode);
                return blockListingHTMLNode;
            }
        }
    ]);
    return BlockListingHTMLNode;
}(_html.default);
_define_property(BlockListingHTMLNode, "lines", 2);
_define_property(BlockListingHTMLNode, "tagName", "pre");
_define_property(BlockListingHTMLNode, "className", null);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9ub2RlL2h0bWwvbGlzdGluZy9ibG9jay5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IEhUTUxOb2RlIGZyb20gXCIuLi8uLi8uLi9ub2RlL2h0bWxcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQmxvY2tMaXN0aW5nSFRNTE5vZGUgZXh0ZW5kcyBIVE1MTm9kZSB7XG4gIGNvbnRlbnQoY29udGV4dCkge1xuICAgIGNvbnN0IGNvbnRlbnQgPSB0aGlzLnJlZHVjZUNoaWxkSFRNTE5vZGUoKGNvbnRlbnQsIGNoaWxkSFROTE5vZGUpID0+IHtcbiAgICAgIGNvbnN0IGJsb2NrTGluZUhUTUxOb2RlID0gY2hpbGRIVE5MTm9kZSwgIC8vL1xuICAgICAgICAgICAgYmxvY2tMaW5lSFRNTE5vZGVDb250ZW50ID0gYmxvY2tMaW5lSFRNTE5vZGUuY29udGVudChjb250ZXh0KTtcblxuICAgICAgY29udGVudCA9IChjb250ZW50ICE9PSBudWxsKSA/XG4gICAgICAgICAgICAgICAgICBgJHtjb250ZW50fSR7YmxvY2tMaW5lSFRNTE5vZGVDb250ZW50fWAgOlxuICAgICAgICAgICAgICAgICAgICBibG9ja0xpbmVIVE1MTm9kZUNvbnRlbnQ7IC8vL1xuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9LCBudWxsKTtcblxuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgY2xhc3NOYW1lKGNvbnRleHQpIHtcbiAgICBjb25zdCBtYXJrZG93bk5vZGUgPSB0aGlzLmdldE1hcmtkb3duTm9kZSgpLFxuICAgICAgICAgIGNsYXNzTmFtZSA9IG1hcmtkb3duTm9kZS5jbGFzc05hbWUoY29udGV4dCk7XG5cbiAgICByZXR1cm4gY2xhc3NOYW1lO1xuICB9XG5cbiAgc3RhdGljIGxpbmVzID0gMjtcblxuICBzdGF0aWMgdGFnTmFtZSA9IFwicHJlXCI7XG5cbiAgc3RhdGljIGNsYXNzTmFtZSA9IG51bGw7XG5cbiAgc3RhdGljIGZyb21Ob3RoaW5nKENsYXNzKSB7XG4gICAgaWYgKENsYXNzID09PSB1bmRlZmluZWQpIHtcbiAgICAgIENsYXNzID0gQmxvY2tMaXN0aW5nSFRNTE5vZGU7IC8vL1xuICAgIH1cblxuICAgIGNvbnN0IGJsb2NrTGlzdGluZ0hUTUxOb2RlID0gSFRNTE5vZGUuZnJvbU5vdGhpbmcoQ2xhc3MpO1xuXG4gICAgcmV0dXJuIGJsb2NrTGlzdGluZ0hUTUxOb2RlO1xuICB9XG5cbiAgc3RhdGljIGZyb21PdXRlck5vZGUoQ2xhc3MsIG91dGVyTm9kZSkge1xuICAgIGlmIChDbGFzcyA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICBvdXRlck5vZGUgPSBDbGFzczsgIC8vL1xuXG4gICAgICBDbGFzcyA9IEJsb2NrTGlzdGluZ0hUTUxOb2RlOyAvLy9cbiAgICB9XG5cbiAgICBjb25zdCBibG9ja0xpc3RpbmdIVE1MTm9kZSA9IEhUTUxOb2RlLmZyb21PdXRlck5vZGUoQ2xhc3MsIG91dGVyTm9kZSk7XG5cbiAgICByZXR1cm4gYmxvY2tMaXN0aW5nSFRNTE5vZGU7XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJCbG9ja0xpc3RpbmdIVE1MTm9kZSIsImNvbnRlbnQiLCJjb250ZXh0IiwicmVkdWNlQ2hpbGRIVE1MTm9kZSIsImNoaWxkSFROTE5vZGUiLCJibG9ja0xpbmVIVE1MTm9kZSIsImJsb2NrTGluZUhUTUxOb2RlQ29udGVudCIsImNsYXNzTmFtZSIsIm1hcmtkb3duTm9kZSIsImdldE1hcmtkb3duTm9kZSIsImZyb21Ob3RoaW5nIiwiQ2xhc3MiLCJ1bmRlZmluZWQiLCJibG9ja0xpc3RpbmdIVE1MTm9kZSIsIkhUTUxOb2RlIiwiZnJvbU91dGVyTm9kZSIsIm91dGVyTm9kZSIsImxpbmVzIiwidGFnTmFtZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFJcUJBOzs7MkRBRkE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRU4sSUFBQSxBQUFNQSxxQ0FBTjtjQUFNQTthQUFBQTtnQ0FBQUE7ZUFBTixrQkFBTUE7O2tCQUFBQTs7WUFDbkJDLEtBQUFBO21CQUFBQSxTQUFBQSxRQUFRQyxPQUFPO2dCQUNiLElBQU1ELFVBQVUsSUFBSSxDQUFDRSxtQkFBbUIsQ0FBQyxTQUFDRixTQUFTRztvQkFDakQsSUFBTUMsb0JBQW9CRCxlQUNwQkUsMkJBQTJCRCxrQkFBa0JKLE9BQU8sQ0FBQ0M7b0JBRTNERCxVQUFVLEFBQUNBLFlBQVksT0FDWCxBQUFDLEdBQVlLLE9BQVZMLFNBQW1DLE9BQXpCSyw0QkFDWEEsMEJBQTBCLEdBQUc7b0JBRTNDLE9BQU9MO2dCQUNULEdBQUc7Z0JBRUgsT0FBT0E7WUFDVDs7O1lBRUFNLEtBQUFBO21CQUFBQSxTQUFBQSxVQUFVTCxPQUFPO2dCQUNmLElBQU1NLGVBQWUsSUFBSSxDQUFDQyxlQUFlLElBQ25DRixZQUFZQyxhQUFhRCxTQUFTLENBQUNMO2dCQUV6QyxPQUFPSztZQUNUOzs7O1lBUU9HLEtBQUFBO21CQUFQLFNBQU9BLFlBQVlDLEtBQUs7Z0JBQ3RCLElBQUlBLFVBQVVDLFdBQVc7b0JBQ3ZCRCxRQS9CZVgsc0JBK0JlLEdBQUc7Z0JBQ25DO2dCQUVBLElBQU1hLHVCQUF1QkMsYUFBUSxDQUFDSixXQUFXLENBQUNDO2dCQUVsRCxPQUFPRTtZQUNUOzs7WUFFT0UsS0FBQUE7bUJBQVAsU0FBT0EsY0FBY0osS0FBSyxFQUFFSyxTQUFTO2dCQUNuQyxJQUFJTCxVQUFVQyxXQUFXO29CQUN2QkksWUFBWUwsT0FBUSxHQUFHO29CQUV2QkEsUUEzQ2VYLHNCQTJDZSxHQUFHO2dCQUNuQztnQkFFQSxJQUFNYSx1QkFBdUJDLGFBQVEsQ0FBQ0MsYUFBYSxDQUFDSixPQUFPSztnQkFFM0QsT0FBT0g7WUFDVDs7O1dBakRtQmI7RUFBNkJjLGFBQVE7QUF1QnhELGlCQXZCbUJkLHNCQXVCWmlCLFNBQVE7QUFFZixpQkF6Qm1CakIsc0JBeUJaa0IsV0FBVTtBQUVqQixpQkEzQm1CbEIsc0JBMkJaTyxhQUFZIn0=