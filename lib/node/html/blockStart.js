"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return BlockHStartHTMLNode;
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
var BlockHStartHTMLNode = /*#__PURE__*/ function(HHTMLNode) {
    _inherits(BlockHStartHTMLNode, HHTMLNode);
    function BlockHStartHTMLNode() {
        _class_call_check(this, BlockHStartHTMLNode);
        return _call_super(this, BlockHStartHTMLNode, arguments);
    }
    _create_class(BlockHStartHTMLNode, [
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
                return _html.default.fromNothing(BlockHStartHTMLNode);
            }
        },
        {
            key: "fromOuterNode",
            value: function fromOuterNode(outerNode) {
                return _html.default.fromOuterNode(BlockHStartHTMLNode, outerNode);
            }
        }
    ]);
    return BlockHStartHTMLNode;
}(_html.default);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ub2RlL2h0bWwvYmxvY2tTdGFydC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IEhIVE1MTm9kZSBmcm9tIFwiLi4vLi4vbm9kZS9odG1sXCI7XG5cbmltcG9ydCB7IEVNUFRZX1NUUklORyB9IGZyb20gXCIuLi8uLi9jb25zdGFudHNcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQmxvY2tIU3RhcnRIVE1MTm9kZSBleHRlbmRzIEhIVE1MTm9kZSB7XG4gIGNsYXNzTmFtZShjb250ZXh0KSB7XG4gICAgY29uc3QgY2xhc3NOYW1lID0gdGhpcy5mcm9tRmlyc3RDaGlsZE5vZGUoKGZpcnN0Q2hpbGROb2RlKSA9PiB7XG4gICAgICBjb25zdCBjbGFzc05hbWVIVE1MTm9kZSA9IGZpcnN0Q2hpbGROb2RlLCAvLy9cbiAgICAgICAgICAgIGNsYXNzTmFtZSA9IGNsYXNzTmFtZUhUTUxOb2RlLmNsYXNzTmFtZShjb250ZXh0KTsgIC8vL1xuXG4gICAgICByZXR1cm4gY2xhc3NOYW1lO1xuICAgIH0pIHx8IG51bGw7XG5cbiAgICByZXR1cm4gY2xhc3NOYW1lO1xuICB9XG5cbiAgbW91bnQocGFyZW50RE9NRWxlbWVudCwgc2libGluZ0RPTUVsZW1lbnQsIGNvbnRleHQpIHtcbiAgICAvLy8vXG4gIH1cblxuICB1bm1vdW50KHBhcmVudERPTUVsZW1lbnQsIGNvbnRleHQpIHtcbiAgICAvLy9cbiAgfVxuXG4gIGFzSFRNTChpbmRlbnQsIGNvbnRleHQpIHtcbiAgICBjb25zdCBodG1sID0gRU1QVFlfU1RSSU5HO1xuXG4gICAgcmV0dXJuIGh0bWw7XG4gIH1cblxuICBhc1BsYWluVGV4dChpbmRlbnQsIGNvbnRleHQpIHtcbiAgICBjb25zdCBwbGFpblRleHQgPSBFTVBUWV9TVFJJTkc7XG5cbiAgICByZXR1cm4gcGxhaW5UZXh0O1xuICB9XG5cbiAgc3RhdGljIGZyb21Ob3RoaW5nKCkgeyByZXR1cm4gSEhUTUxOb2RlLmZyb21Ob3RoaW5nKEJsb2NrSFN0YXJ0SFRNTE5vZGUpOyB9XG5cbiAgc3RhdGljIGZyb21PdXRlck5vZGUob3V0ZXJOb2RlKSB7IHJldHVybiBISFRNTE5vZGUuZnJvbU91dGVyTm9kZShCbG9ja0hTdGFydEhUTUxOb2RlLCBvdXRlck5vZGUpOyB9XG59XG4iXSwibmFtZXMiOlsiQmxvY2tIU3RhcnRIVE1MTm9kZSIsImNsYXNzTmFtZSIsImNvbnRleHQiLCJmcm9tRmlyc3RDaGlsZE5vZGUiLCJmaXJzdENoaWxkTm9kZSIsImNsYXNzTmFtZUhUTUxOb2RlIiwibW91bnQiLCJwYXJlbnRET01FbGVtZW50Iiwic2libGluZ0RPTUVsZW1lbnQiLCJ1bm1vdW50IiwiYXNIVE1MIiwiaW5kZW50IiwiaHRtbCIsIkVNUFRZX1NUUklORyIsImFzUGxhaW5UZXh0IiwicGxhaW5UZXh0IiwiZnJvbU5vdGhpbmciLCJISFRNTE5vZGUiLCJmcm9tT3V0ZXJOb2RlIiwib3V0ZXJOb2RlIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQU1xQkE7OzsyREFKQzt5QkFFTzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVkLElBQUEsQUFBTUEsb0NBQU47Y0FBTUE7YUFBQUE7Z0NBQUFBO2VBQU4sa0JBQU1BOztrQkFBQUE7O1lBQ25CQyxLQUFBQTttQkFBQUEsU0FBQUEsVUFBVUMsT0FBTztnQkFDZixJQUFNRCxZQUFZLElBQUksQ0FBQ0Usa0JBQWtCLENBQUMsU0FBQ0M7b0JBQ3pDLElBQU1DLG9CQUFvQkQsZ0JBQ3BCSCxZQUFZSSxrQkFBa0JKLFNBQVMsQ0FBQ0MsVUFBVyxHQUFHO29CQUU1RCxPQUFPRDtnQkFDVCxNQUFNO2dCQUVOLE9BQU9BO1lBQ1Q7OztZQUVBSyxLQUFBQTttQkFBQUEsU0FBQUEsTUFBTUMsZ0JBQWdCLEVBQUVDLGlCQUFpQixFQUFFTixPQUFPO1lBQ2hELElBQUk7WUFDTjs7O1lBRUFPLEtBQUFBO21CQUFBQSxTQUFBQSxRQUFRRixnQkFBZ0IsRUFBRUwsT0FBTztZQUMvQixHQUFHO1lBQ0w7OztZQUVBUSxLQUFBQTttQkFBQUEsU0FBQUEsT0FBT0MsTUFBTSxFQUFFVCxPQUFPO2dCQUNwQixJQUFNVSxPQUFPQyx1QkFBWTtnQkFFekIsT0FBT0Q7WUFDVDs7O1lBRUFFLEtBQUFBO21CQUFBQSxTQUFBQSxZQUFZSCxNQUFNLEVBQUVULE9BQU87Z0JBQ3pCLElBQU1hLFlBQVlGLHVCQUFZO2dCQUU5QixPQUFPRTtZQUNUOzs7O1lBRU9DLEtBQUFBO21CQUFQLFNBQU9BO2dCQUFnQixPQUFPQyxhQUFTLENBQUNELFdBQVcsQ0FoQ2hDaEI7WUFnQ3VEOzs7WUFFbkVrQixLQUFBQTttQkFBUCxTQUFPQSxjQUFjQyxTQUFTO2dCQUFJLE9BQU9GLGFBQVMsQ0FBQ0MsYUFBYSxDQWxDN0NsQixxQkFrQ21FbUI7WUFBWTs7O1dBbEMvRW5CO0VBQTRCaUIsYUFBUyJ9