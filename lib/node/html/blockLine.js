"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return BlockLineHTMLNode;
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
var BlockLineHTMLNode = /*#__PURE__*/ function(HTMLNode) {
    _inherits(BlockLineHTMLNode, HTMLNode);
    function BlockLineHTMLNode() {
        _class_call_check(this, BlockLineHTMLNode);
        return _call_super(this, BlockLineHTMLNode, arguments);
    }
    _create_class(BlockLineHTMLNode, [
        {
            key: "mount",
            value: function mount(parentDOMElement, siblingDOMElement, context) {
                _get(_get_prototype_of(BlockLineHTMLNode.prototype), "mount", this).call(this, parentDOMElement, siblingDOMElement, context);
                var domElement;
                domElement = this.getDOMElement();
                parentDOMElement = domElement;
                siblingDOMElement = null;
                var content = _constants.CARRIAGE_RETURN, textNode = document.createTextNode(content);
                domElement = textNode;
                parentDOMElement.insertBefore(domElement, siblingDOMElement);
            }
        },
        {
            key: "unmount",
            value: function unmount(parentDOMElement, context) {
                {
                    var domElement;
                    domElement = this.getDOMElement();
                    var _$parentDOMElement = domElement, lastChild = domElement.lastChild;
                    domElement = lastChild; ///
                    _$parentDOMElement.removeChild(domElement);
                }
                _get(_get_prototype_of(BlockLineHTMLNode.prototype), "unmount", this).call(this, parentDOMElement, context);
            }
        },
        {
            key: "asHTML",
            value: function asHTML(indent, context) {
                var html;
                var childNodesHTML = this.childNodesAsHTML(indent, context), startingTag = this.startingTag(context), closingTag = this.closingTag(context);
                html = "".concat(startingTag).concat(childNodesHTML).concat(closingTag, "\n");
                return html;
            }
        },
        {
            key: "childNodesAsPlainText",
            value: function childNodesAsPlainText(context) {
                var childNodesPlainText = this.reduceChildNode(function(childNodesPlainText, childNode) {
                    var childNodePlainText = childNode.asPlainText(context);
                    childNodesPlainText = "".concat(childNodesPlainText).concat(childNodePlainText);
                    return childNodesPlainText;
                }, _constants.EMPTY_STRING);
                return childNodesPlainText;
            }
        }
    ], [
        {
            key: "fromNothing",
            value: function fromNothing() {
                return _html.default.fromNothing(BlockLineHTMLNode);
            }
        },
        {
            key: "fromOuterNode",
            value: function fromOuterNode(outerNode) {
                return _html.default.fromOuterNode(BlockLineHTMLNode, outerNode);
            }
        }
    ]);
    return BlockLineHTMLNode;
}(_html.default);
_define_property(BlockLineHTMLNode, "lines", 2);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ub2RlL2h0bWwvYmxvY2tMaW5lLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgSFRNTE5vZGUgZnJvbSBcIi4uLy4uL25vZGUvaHRtbFwiO1xuXG5pbXBvcnQgeyBFTVBUWV9TVFJJTkcsIENBUlJJQUdFX1JFVFVSTiB9IGZyb20gXCIuLi8uLi9jb25zdGFudHNcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQmxvY2tMaW5lSFRNTE5vZGUgZXh0ZW5kcyBIVE1MTm9kZSB7XG4gIG1vdW50KHBhcmVudERPTUVsZW1lbnQsIHNpYmxpbmdET01FbGVtZW50LCBjb250ZXh0KSB7XG4gICAgc3VwZXIubW91bnQocGFyZW50RE9NRWxlbWVudCwgc2libGluZ0RPTUVsZW1lbnQsIGNvbnRleHQpO1xuXG4gICAgbGV0IGRvbUVsZW1lbnQ7XG5cbiAgICBkb21FbGVtZW50ID0gdGhpcy5nZXRET01FbGVtZW50KCk7XG5cbiAgICBwYXJlbnRET01FbGVtZW50ID0gZG9tRWxlbWVudDtcblxuICAgIHNpYmxpbmdET01FbGVtZW50ID0gbnVsbDtcblxuICAgIGNvbnN0IGNvbnRlbnQgPSBDQVJSSUFHRV9SRVRVUk4sXG4gICAgICAgICAgdGV4dE5vZGUgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjb250ZW50KTtcblxuICAgIGRvbUVsZW1lbnQgPSB0ZXh0Tm9kZTtcblxuICAgIHBhcmVudERPTUVsZW1lbnQuaW5zZXJ0QmVmb3JlKGRvbUVsZW1lbnQsIHNpYmxpbmdET01FbGVtZW50KVxuICB9XG5cbiAgdW5tb3VudChwYXJlbnRET01FbGVtZW50LCBjb250ZXh0KSB7XG4gICAge1xuICAgICAgbGV0IGRvbUVsZW1lbnQ7XG5cbiAgICAgIGRvbUVsZW1lbnQgPSB0aGlzLmdldERPTUVsZW1lbnQoKTtcblxuICAgICAgY29uc3QgcGFyZW50RE9NRWxlbWVudCA9IGRvbUVsZW1lbnQsICAvLy9cbiAgICAgICAgICAgIGxhc3RDaGlsZCA9IGRvbUVsZW1lbnQubGFzdENoaWxkXG5cbiAgICAgIGRvbUVsZW1lbnQgPSBsYXN0Q2hpbGQ7ICAvLy9cblxuICAgICAgcGFyZW50RE9NRWxlbWVudC5yZW1vdmVDaGlsZChkb21FbGVtZW50KTtcbiAgICB9XG5cbiAgICBzdXBlci51bm1vdW50KHBhcmVudERPTUVsZW1lbnQsIGNvbnRleHQpO1xuICB9XG5cbiAgYXNIVE1MKGluZGVudCwgY29udGV4dCkge1xuICAgIGxldCBodG1sO1xuXG4gICAgY29uc3QgY2hpbGROb2Rlc0hUTUwgPSB0aGlzLmNoaWxkTm9kZXNBc0hUTUwoaW5kZW50LCBjb250ZXh0KSxcbiAgICAgICAgICBzdGFydGluZ1RhZyA9IHRoaXMuc3RhcnRpbmdUYWcoY29udGV4dCksXG4gICAgICAgICAgY2xvc2luZ1RhZyA9IHRoaXMuY2xvc2luZ1RhZyhjb250ZXh0KTtcblxuICAgIGh0bWwgPSBgJHtzdGFydGluZ1RhZ30ke2NoaWxkTm9kZXNIVE1MfSR7Y2xvc2luZ1RhZ31cbmA7XG5cbiAgICByZXR1cm4gaHRtbDtcbiAgfVxuXG4gIGNoaWxkTm9kZXNBc1BsYWluVGV4dChjb250ZXh0KSB7XG4gICAgY29uc3QgY2hpbGROb2Rlc1BsYWluVGV4dCA9IHRoaXMucmVkdWNlQ2hpbGROb2RlKChjaGlsZE5vZGVzUGxhaW5UZXh0LCBjaGlsZE5vZGUpID0+IHtcbiAgICAgIGNvbnN0IGNoaWxkTm9kZVBsYWluVGV4dCA9IGNoaWxkTm9kZS5hc1BsYWluVGV4dChjb250ZXh0KTtcblxuICAgICAgY2hpbGROb2Rlc1BsYWluVGV4dCA9IGAke2NoaWxkTm9kZXNQbGFpblRleHR9JHtjaGlsZE5vZGVQbGFpblRleHR9YDtcblxuICAgICAgcmV0dXJuIGNoaWxkTm9kZXNQbGFpblRleHQ7XG4gICAgfSwgRU1QVFlfU1RSSU5HKTtcblxuICAgIHJldHVybiBjaGlsZE5vZGVzUGxhaW5UZXh0O1xuICB9XG5cbiAgc3RhdGljIGxpbmVzID0gMjtcblxuICBzdGF0aWMgZnJvbU5vdGhpbmcoKSB7IHJldHVybiBIVE1MTm9kZS5mcm9tTm90aGluZyhCbG9ja0xpbmVIVE1MTm9kZSk7IH1cblxuICBzdGF0aWMgZnJvbU91dGVyTm9kZShvdXRlck5vZGUpIHsgcmV0dXJuIEhUTUxOb2RlLmZyb21PdXRlck5vZGUoQmxvY2tMaW5lSFRNTE5vZGUsIG91dGVyTm9kZSk7IH1cbn1cbiJdLCJuYW1lcyI6WyJCbG9ja0xpbmVIVE1MTm9kZSIsIm1vdW50IiwicGFyZW50RE9NRWxlbWVudCIsInNpYmxpbmdET01FbGVtZW50IiwiY29udGV4dCIsImRvbUVsZW1lbnQiLCJnZXRET01FbGVtZW50IiwiY29udGVudCIsIkNBUlJJQUdFX1JFVFVSTiIsInRleHROb2RlIiwiZG9jdW1lbnQiLCJjcmVhdGVUZXh0Tm9kZSIsImluc2VydEJlZm9yZSIsInVubW91bnQiLCJsYXN0Q2hpbGQiLCJyZW1vdmVDaGlsZCIsImFzSFRNTCIsImluZGVudCIsImh0bWwiLCJjaGlsZE5vZGVzSFRNTCIsImNoaWxkTm9kZXNBc0hUTUwiLCJzdGFydGluZ1RhZyIsImNsb3NpbmdUYWciLCJjaGlsZE5vZGVzQXNQbGFpblRleHQiLCJjaGlsZE5vZGVzUGxhaW5UZXh0IiwicmVkdWNlQ2hpbGROb2RlIiwiY2hpbGROb2RlIiwiY2hpbGROb2RlUGxhaW5UZXh0IiwiYXNQbGFpblRleHQiLCJFTVBUWV9TVFJJTkciLCJmcm9tTm90aGluZyIsIkhUTUxOb2RlIiwiZnJvbU91dGVyTm9kZSIsIm91dGVyTm9kZSIsImxpbmVzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQU1xQkE7OzsyREFKQTt5QkFFeUI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFL0IsSUFBQSxBQUFNQSxrQ0FBTjtjQUFNQTthQUFBQTtnQ0FBQUE7ZUFBTixrQkFBTUE7O2tCQUFBQTs7WUFDbkJDLEtBQUFBO21CQUFBQSxTQUFBQSxNQUFNQyxnQkFBZ0IsRUFBRUMsaUJBQWlCLEVBQUVDLE9BQU87Z0JBQ2hELHVCQUZpQkosOEJBRVhDLFNBQU4sSUFBSyxhQUFPQyxrQkFBa0JDLG1CQUFtQkM7Z0JBRWpELElBQUlDO2dCQUVKQSxhQUFhLElBQUksQ0FBQ0MsYUFBYTtnQkFFL0JKLG1CQUFtQkc7Z0JBRW5CRixvQkFBb0I7Z0JBRXBCLElBQU1JLFVBQVVDLDBCQUFlLEVBQ3pCQyxXQUFXQyxTQUFTQyxjQUFjLENBQUNKO2dCQUV6Q0YsYUFBYUk7Z0JBRWJQLGlCQUFpQlUsWUFBWSxDQUFDUCxZQUFZRjtZQUM1Qzs7O1lBRUFVLEtBQUFBO21CQUFBQSxTQUFBQSxRQUFRWCxnQkFBZ0IsRUFBRUUsT0FBTztnQkFDL0I7b0JBQ0UsSUFBSUM7b0JBRUpBLGFBQWEsSUFBSSxDQUFDQyxhQUFhO29CQUUvQixJQUFNSixxQkFBbUJHLFlBQ25CUyxZQUFZVCxXQUFXUyxTQUFTO29CQUV0Q1QsYUFBYVMsV0FBWSxHQUFHO29CQUU1QlosbUJBQWlCYSxXQUFXLENBQUNWO2dCQUMvQjtnQkFFQSx1QkFsQ2lCTCw4QkFrQ1hhLFdBQU4sSUFBSyxhQUFTWCxrQkFBa0JFO1lBQ2xDOzs7WUFFQVksS0FBQUE7bUJBQUFBLFNBQUFBLE9BQU9DLE1BQU0sRUFBRWIsT0FBTztnQkFDcEIsSUFBSWM7Z0JBRUosSUFBTUMsaUJBQWlCLElBQUksQ0FBQ0MsZ0JBQWdCLENBQUNILFFBQVFiLFVBQy9DaUIsY0FBYyxJQUFJLENBQUNBLFdBQVcsQ0FBQ2pCLFVBQy9Ca0IsYUFBYSxJQUFJLENBQUNBLFVBQVUsQ0FBQ2xCO2dCQUVuQ2MsT0FBTyxBQUFDLEdBQWdCQyxPQUFkRSxhQUErQkMsT0FBakJILGdCQUE0QixPQUFYRyxZQUFXO2dCQUdwRCxPQUFPSjtZQUNUOzs7WUFFQUssS0FBQUE7bUJBQUFBLFNBQUFBLHNCQUFzQm5CLE9BQU87Z0JBQzNCLElBQU1vQixzQkFBc0IsSUFBSSxDQUFDQyxlQUFlLENBQUMsU0FBQ0QscUJBQXFCRTtvQkFDckUsSUFBTUMscUJBQXFCRCxVQUFVRSxXQUFXLENBQUN4QjtvQkFFakRvQixzQkFBc0IsQUFBQyxHQUF3QkcsT0FBdEJILHFCQUF5QyxPQUFuQkc7b0JBRS9DLE9BQU9IO2dCQUNULEdBQUdLLHVCQUFZO2dCQUVmLE9BQU9MO1lBQ1Q7Ozs7WUFJT00sS0FBQUE7bUJBQVAsU0FBT0E7Z0JBQWdCLE9BQU9DLGFBQVEsQ0FBQ0QsV0FBVyxDQWhFL0I5QjtZQWdFb0Q7OztZQUVoRWdDLEtBQUFBO21CQUFQLFNBQU9BLGNBQWNDLFNBQVM7Z0JBQUksT0FBT0YsYUFBUSxDQUFDQyxhQUFhLENBbEU1Q2hDLG1CQWtFZ0VpQztZQUFZOzs7V0FsRTVFakM7RUFBMEIrQixhQUFRO0FBOERyRCxpQkE5RG1CL0IsbUJBOERaa0MsU0FBUSJ9