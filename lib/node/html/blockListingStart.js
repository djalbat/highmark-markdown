"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return BlockListingHStartHTMLNode;
    }
});
var _html = /*#__PURE__*/ _interop_require_default(require("../../node/html"));
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
var BlockListingHStartHTMLNode = /*#__PURE__*/ function(HHTMLNode) {
    _inherits(BlockListingHStartHTMLNode, HHTMLNode);
    function BlockListingHStartHTMLNode() {
        _class_call_check(this, BlockListingHStartHTMLNode);
        return _call_super(this, BlockListingHStartHTMLNode, arguments);
    }
    _create_class(BlockListingHStartHTMLNode, [
        {
            key: "className",
            value: function className(context) {
                var className = this.fromFirstChildNode(function(firstChildNode) {
                    var classNameHTMLNode = firstChildNode, className = classNameHTMLNode.className(context); ///
                    return className;
                }) || null;
                return className;
            }
        },
        {
            key: "mount",
            value: function mount(parentDOMElement, siblingDOMElement, context) {
            ////
            }
        },
        {
            key: "unmount",
            value: function unmount(parentDOMElement, context) {
            ///
            }
        },
        {
            key: "asHTML",
            value: function asHTML(indent, context) {
                var html = _constants.EMPTY_STRING;
                return html;
            }
        },
        {
            key: "asPlainText",
            value: function asPlainText(indent, context) {
                var plainText = _constants.EMPTY_STRING;
                return plainText;
            }
        }
    ], [
        {
            key: "fromNothing",
            value: function fromNothing() {
                return _html.default.fromNothing(BlockListingHStartHTMLNode);
            }
        },
        {
            key: "fromOuterNode",
            value: function fromOuterNode(outerNode) {
                return _html.default.fromOuterNode(BlockListingHStartHTMLNode, outerNode);
            }
        }
    ]);
    return BlockListingHStartHTMLNode;
}(_html.default);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ub2RlL2h0bWwvYmxvY2tMaXN0aW5nU3RhcnQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBISFRNTE5vZGUgZnJvbSBcIi4uLy4uL25vZGUvaHRtbFwiO1xuXG5pbXBvcnQgeyBFTVBUWV9TVFJJTkcgfSBmcm9tIFwiLi4vLi4vY29uc3RhbnRzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJsb2NrTGlzdGluZ0hTdGFydEhUTUxOb2RlIGV4dGVuZHMgSEhUTUxOb2RlIHtcbiAgY2xhc3NOYW1lKGNvbnRleHQpIHtcbiAgICBjb25zdCBjbGFzc05hbWUgPSB0aGlzLmZyb21GaXJzdENoaWxkTm9kZSgoZmlyc3RDaGlsZE5vZGUpID0+IHtcbiAgICAgIGNvbnN0IGNsYXNzTmFtZUhUTUxOb2RlID0gZmlyc3RDaGlsZE5vZGUsIC8vL1xuICAgICAgICAgICAgY2xhc3NOYW1lID0gY2xhc3NOYW1lSFRNTE5vZGUuY2xhc3NOYW1lKGNvbnRleHQpOyAgLy8vXG5cbiAgICAgIHJldHVybiBjbGFzc05hbWU7XG4gICAgfSkgfHwgbnVsbDtcblxuICAgIHJldHVybiBjbGFzc05hbWU7XG4gIH1cblxuICBtb3VudChwYXJlbnRET01FbGVtZW50LCBzaWJsaW5nRE9NRWxlbWVudCwgY29udGV4dCkge1xuICAgIC8vLy9cbiAgfVxuXG4gIHVubW91bnQocGFyZW50RE9NRWxlbWVudCwgY29udGV4dCkge1xuICAgIC8vL1xuICB9XG5cbiAgYXNIVE1MKGluZGVudCwgY29udGV4dCkge1xuICAgIGNvbnN0IGh0bWwgPSBFTVBUWV9TVFJJTkc7XG5cbiAgICByZXR1cm4gaHRtbDtcbiAgfVxuXG4gIGFzUGxhaW5UZXh0KGluZGVudCwgY29udGV4dCkge1xuICAgIGNvbnN0IHBsYWluVGV4dCA9IEVNUFRZX1NUUklORztcblxuICAgIHJldHVybiBwbGFpblRleHQ7XG4gIH1cblxuICBzdGF0aWMgZnJvbU5vdGhpbmcoKSB7IHJldHVybiBISFRNTE5vZGUuZnJvbU5vdGhpbmcoQmxvY2tMaXN0aW5nSFN0YXJ0SFRNTE5vZGUpOyB9XG5cbiAgc3RhdGljIGZyb21PdXRlck5vZGUob3V0ZXJOb2RlKSB7IHJldHVybiBISFRNTE5vZGUuZnJvbU91dGVyTm9kZShCbG9ja0xpc3RpbmdIU3RhcnRIVE1MTm9kZSwgb3V0ZXJOb2RlKTsgfVxufVxuIl0sIm5hbWVzIjpbIkJsb2NrTGlzdGluZ0hTdGFydEhUTUxOb2RlIiwiY2xhc3NOYW1lIiwiY29udGV4dCIsImZyb21GaXJzdENoaWxkTm9kZSIsImZpcnN0Q2hpbGROb2RlIiwiY2xhc3NOYW1lSFRNTE5vZGUiLCJtb3VudCIsInBhcmVudERPTUVsZW1lbnQiLCJzaWJsaW5nRE9NRWxlbWVudCIsInVubW91bnQiLCJhc0hUTUwiLCJpbmRlbnQiLCJodG1sIiwiRU1QVFlfU1RSSU5HIiwiYXNQbGFpblRleHQiLCJwbGFpblRleHQiLCJmcm9tTm90aGluZyIsIkhIVE1MTm9kZSIsImZyb21PdXRlck5vZGUiLCJvdXRlck5vZGUiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBTXFCQTs7OzJEQUpDO3lCQUVPOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRWQsSUFBQSxBQUFNQSwyQ0FBTjtjQUFNQTthQUFBQTtnQ0FBQUE7ZUFBTixrQkFBTUE7O2tCQUFBQTs7WUFDbkJDLEtBQUFBO21CQUFBQSxTQUFBQSxVQUFVQyxPQUFPO2dCQUNmLElBQU1ELFlBQVksSUFBSSxDQUFDRSxrQkFBa0IsQ0FBQyxTQUFDQztvQkFDekMsSUFBTUMsb0JBQW9CRCxnQkFDcEJILFlBQVlJLGtCQUFrQkosU0FBUyxDQUFDQyxVQUFXLEdBQUc7b0JBRTVELE9BQU9EO2dCQUNULE1BQU07Z0JBRU4sT0FBT0E7WUFDVDs7O1lBRUFLLEtBQUFBO21CQUFBQSxTQUFBQSxNQUFNQyxnQkFBZ0IsRUFBRUMsaUJBQWlCLEVBQUVOLE9BQU87WUFDaEQsSUFBSTtZQUNOOzs7WUFFQU8sS0FBQUE7bUJBQUFBLFNBQUFBLFFBQVFGLGdCQUFnQixFQUFFTCxPQUFPO1lBQy9CLEdBQUc7WUFDTDs7O1lBRUFRLEtBQUFBO21CQUFBQSxTQUFBQSxPQUFPQyxNQUFNLEVBQUVULE9BQU87Z0JBQ3BCLElBQU1VLE9BQU9DLHVCQUFZO2dCQUV6QixPQUFPRDtZQUNUOzs7WUFFQUUsS0FBQUE7bUJBQUFBLFNBQUFBLFlBQVlILE1BQU0sRUFBRVQsT0FBTztnQkFDekIsSUFBTWEsWUFBWUYsdUJBQVk7Z0JBRTlCLE9BQU9FO1lBQ1Q7Ozs7WUFFT0MsS0FBQUE7bUJBQVAsU0FBT0E7Z0JBQWdCLE9BQU9DLGFBQVMsQ0FBQ0QsV0FBVyxDQWhDaENoQjtZQWdDOEQ7OztZQUUxRWtCLEtBQUFBO21CQUFQLFNBQU9BLGNBQWNDLFNBQVM7Z0JBQUksT0FBT0YsYUFBUyxDQUFDQyxhQUFhLENBbEM3Q2xCLDRCQWtDMEVtQjtZQUFZOzs7V0FsQ3RGbkI7RUFBbUNpQixhQUFTIn0=