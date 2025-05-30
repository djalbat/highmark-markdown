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
                    content = content !== null ? "".concat(content, "\n").concat(blockLineHTMLNodeContent) : blockLineHTMLNodeContent; ///
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9ub2RlL2h0bWwvbGlzdGluZy9ibG9jay5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IEhUTUxOb2RlIGZyb20gXCIuLi8uLi8uLi9ub2RlL2h0bWxcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQmxvY2tMaXN0aW5nSFRNTE5vZGUgZXh0ZW5kcyBIVE1MTm9kZSB7XG4gIGNvbnRlbnQoY29udGV4dCkge1xuICAgIGNvbnN0IGNvbnRlbnQgPSB0aGlzLnJlZHVjZUNoaWxkSFRNTE5vZGUoKGNvbnRlbnQsIGNoaWxkSFROTE5vZGUpID0+IHtcbiAgICAgIGNvbnN0IGJsb2NrTGluZUhUTUxOb2RlID0gY2hpbGRIVE5MTm9kZSwgIC8vL1xuICAgICAgICAgICAgYmxvY2tMaW5lSFRNTE5vZGVDb250ZW50ID0gYmxvY2tMaW5lSFRNTE5vZGUuY29udGVudChjb250ZXh0KTtcblxuICAgICAgY29udGVudCA9IChjb250ZW50ICE9PSBudWxsKSA/XG4gICAgICAgICAgICAgICAgICBgJHtjb250ZW50fVxuJHtibG9ja0xpbmVIVE1MTm9kZUNvbnRlbnR9YCA6XG4gICAgICAgICAgICAgICAgICAgIGJsb2NrTGluZUhUTUxOb2RlQ29udGVudDsgLy8vXG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0sIG51bGwpO1xuXG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBjbGFzc05hbWUoY29udGV4dCkge1xuICAgIGNvbnN0IG1hcmtkb3duTm9kZSA9IHRoaXMuZ2V0TWFya2Rvd25Ob2RlKCksXG4gICAgICAgICAgY2xhc3NOYW1lID0gbWFya2Rvd25Ob2RlLmNsYXNzTmFtZShjb250ZXh0KTtcblxuICAgIHJldHVybiBjbGFzc05hbWU7XG4gIH1cblxuICBzdGF0aWMgbGluZXMgPSAyO1xuXG4gIHN0YXRpYyB0YWdOYW1lID0gXCJwcmVcIjtcblxuICBzdGF0aWMgY2xhc3NOYW1lID0gbnVsbDtcblxuICBzdGF0aWMgZnJvbU5vdGhpbmcoQ2xhc3MpIHtcbiAgICBpZiAoQ2xhc3MgPT09IHVuZGVmaW5lZCkge1xuICAgICAgQ2xhc3MgPSBCbG9ja0xpc3RpbmdIVE1MTm9kZTsgLy8vXG4gICAgfVxuXG4gICAgY29uc3QgYmxvY2tMaXN0aW5nSFRNTE5vZGUgPSBIVE1MTm9kZS5mcm9tTm90aGluZyhDbGFzcyk7XG5cbiAgICByZXR1cm4gYmxvY2tMaXN0aW5nSFRNTE5vZGU7XG4gIH1cblxuICBzdGF0aWMgZnJvbU91dGVyTm9kZShDbGFzcywgb3V0ZXJOb2RlKSB7XG4gICAgaWYgKENsYXNzID09PSB1bmRlZmluZWQpIHtcbiAgICAgIG91dGVyTm9kZSA9IENsYXNzOyAgLy8vXG5cbiAgICAgIENsYXNzID0gQmxvY2tMaXN0aW5nSFRNTE5vZGU7IC8vL1xuICAgIH1cblxuICAgIGNvbnN0IGJsb2NrTGlzdGluZ0hUTUxOb2RlID0gSFRNTE5vZGUuZnJvbU91dGVyTm9kZShDbGFzcywgb3V0ZXJOb2RlKTtcblxuICAgIHJldHVybiBibG9ja0xpc3RpbmdIVE1MTm9kZTtcbiAgfVxufVxuIl0sIm5hbWVzIjpbIkJsb2NrTGlzdGluZ0hUTUxOb2RlIiwiY29udGVudCIsImNvbnRleHQiLCJyZWR1Y2VDaGlsZEhUTUxOb2RlIiwiY2hpbGRIVE5MTm9kZSIsImJsb2NrTGluZUhUTUxOb2RlIiwiYmxvY2tMaW5lSFRNTE5vZGVDb250ZW50IiwiY2xhc3NOYW1lIiwibWFya2Rvd25Ob2RlIiwiZ2V0TWFya2Rvd25Ob2RlIiwiZnJvbU5vdGhpbmciLCJDbGFzcyIsInVuZGVmaW5lZCIsImJsb2NrTGlzdGluZ0hUTUxOb2RlIiwiSFRNTE5vZGUiLCJmcm9tT3V0ZXJOb2RlIiwib3V0ZXJOb2RlIiwibGluZXMiLCJ0YWdOYW1lIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQUlxQkE7OzsyREFGQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFTixJQUFBLEFBQU1BLHFDQUFOO2NBQU1BO2FBQUFBO2dDQUFBQTtlQUFOLGtCQUFNQTs7a0JBQUFBOztZQUNuQkMsS0FBQUE7bUJBQUFBLFNBQUFBLFFBQVFDLE9BQU87Z0JBQ2IsSUFBTUQsVUFBVSxJQUFJLENBQUNFLG1CQUFtQixDQUFDLFNBQUNGLFNBQVNHO29CQUNqRCxJQUFNQyxvQkFBb0JELGVBQ3BCRSwyQkFBMkJELGtCQUFrQkosT0FBTyxDQUFDQztvQkFFM0RELFVBQVUsQUFBQ0EsWUFBWSxPQUNYLEFBQUMsR0FDakJLLE9BRG1CTCxTQUFRLE1BQ0YsT0FBekJLLDRCQUNrQkEsMEJBQTBCLEdBQUc7b0JBRTNDLE9BQU9MO2dCQUNULEdBQUc7Z0JBRUgsT0FBT0E7WUFDVDs7O1lBRUFNLEtBQUFBO21CQUFBQSxTQUFBQSxVQUFVTCxPQUFPO2dCQUNmLElBQU1NLGVBQWUsSUFBSSxDQUFDQyxlQUFlLElBQ25DRixZQUFZQyxhQUFhRCxTQUFTLENBQUNMO2dCQUV6QyxPQUFPSztZQUNUOzs7O1lBUU9HLEtBQUFBO21CQUFQLFNBQU9BLFlBQVlDLEtBQUs7Z0JBQ3RCLElBQUlBLFVBQVVDLFdBQVc7b0JBQ3ZCRCxRQWhDZVgsc0JBZ0NlLEdBQUc7Z0JBQ25DO2dCQUVBLElBQU1hLHVCQUF1QkMsYUFBUSxDQUFDSixXQUFXLENBQUNDO2dCQUVsRCxPQUFPRTtZQUNUOzs7WUFFT0UsS0FBQUE7bUJBQVAsU0FBT0EsY0FBY0osS0FBSyxFQUFFSyxTQUFTO2dCQUNuQyxJQUFJTCxVQUFVQyxXQUFXO29CQUN2QkksWUFBWUwsT0FBUSxHQUFHO29CQUV2QkEsUUE1Q2VYLHNCQTRDZSxHQUFHO2dCQUNuQztnQkFFQSxJQUFNYSx1QkFBdUJDLGFBQVEsQ0FBQ0MsYUFBYSxDQUFDSixPQUFPSztnQkFFM0QsT0FBT0g7WUFDVDs7O1dBbERtQmI7RUFBNkJjLGFBQVE7QUF3QnhELGlCQXhCbUJkLHNCQXdCWmlCLFNBQVE7QUFFZixpQkExQm1CakIsc0JBMEJaa0IsV0FBVTtBQUVqQixpQkE1Qm1CbEIsc0JBNEJaTyxhQUFZIn0=