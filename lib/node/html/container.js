"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return ContainerHTMLNode;
    }
});
var _html = /*#__PURE__*/ _interop_require_default(require("../../node/html"));
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
var ContainerHTMLNode = /*#__PURE__*/ function(HTMLNode) {
    _inherits(ContainerHTMLNode, HTMLNode);
    function ContainerHTMLNode() {
        _class_call_check(this, ContainerHTMLNode);
        return _call_super(this, ContainerHTMLNode, arguments);
    }
    _create_class(ContainerHTMLNode, [
        {
            key: "getContainerMarkdownNode",
            value: function getContainerMarkdownNode() {
                var outerNode = this.getOuterNode(), containerMarkdownNode = outerNode; ///
                return containerMarkdownNode;
            }
        },
        {
            key: "className",
            value: function className(context) {
                var className;
                var containerMarkdownNode = this.getContainerMarkdownNode();
                className = containerMarkdownNode.className(context);
                var markdownClassName = className; ///
                className = _get(_get_prototype_of(ContainerHTMLNode.prototype), "className", this).call(this, context);
                if (markdownClassName !== null) {
                    className = "".concat(className, " ").concat(markdownClassName);
                }
                return className;
            }
        }
    ], [
        {
            key: "fromNothing",
            value: function fromNothing() {
                return _html.default.fromNothing(ContainerHTMLNode);
            }
        },
        {
            key: "fromOuterNode",
            value: function fromOuterNode(outerNode) {
                return _html.default.fromOuterNode(ContainerHTMLNode, outerNode);
            }
        }
    ]);
    return ContainerHTMLNode;
}(_html.default);
_define_property(ContainerHTMLNode, "tagName", "div");
_define_property(ContainerHTMLNode, "className", "container");

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ub2RlL2h0bWwvY29udGFpbmVyLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgSFRNTE5vZGUgZnJvbSBcIi4uLy4uL25vZGUvaHRtbFwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDb250YWluZXJIVE1MTm9kZSBleHRlbmRzIEhUTUxOb2RlIHtcbiAgZ2V0Q29udGFpbmVyTWFya2Rvd25Ob2RlKCkge1xuICAgIGNvbnN0IG91dGVyTm9kZSA9IHRoaXMuZ2V0T3V0ZXJOb2RlKCksXG4gICAgICAgICAgY29udGFpbmVyTWFya2Rvd25Ob2RlID0gb3V0ZXJOb2RlOyAgLy8vXG5cbiAgICByZXR1cm4gY29udGFpbmVyTWFya2Rvd25Ob2RlO1xuICB9XG5cbiAgY2xhc3NOYW1lKGNvbnRleHQpIHtcbiAgICBsZXQgY2xhc3NOYW1lO1xuXG4gICAgY29uc3QgY29udGFpbmVyTWFya2Rvd25Ob2RlID0gdGhpcy5nZXRDb250YWluZXJNYXJrZG93bk5vZGUoKTtcblxuICAgIGNsYXNzTmFtZSA9IGNvbnRhaW5lck1hcmtkb3duTm9kZS5jbGFzc05hbWUoY29udGV4dCk7XG5cbiAgICBjb25zdCBtYXJrZG93bkNsYXNzTmFtZSA9IGNsYXNzTmFtZTsgIC8vL1xuXG4gICAgY2xhc3NOYW1lID0gc3VwZXIuY2xhc3NOYW1lKGNvbnRleHQpO1xuXG4gICAgaWYgKG1hcmtkb3duQ2xhc3NOYW1lICE9PSBudWxsKSB7XG4gICAgICBjbGFzc05hbWUgPSBgJHtjbGFzc05hbWV9ICR7bWFya2Rvd25DbGFzc05hbWV9YDtcbiAgICB9XG5cbiAgICByZXR1cm4gY2xhc3NOYW1lO1xuICB9XG5cbiAgc3RhdGljIHRhZ05hbWUgPSBcImRpdlwiO1xuXG4gIHN0YXRpYyBjbGFzc05hbWUgPSBcImNvbnRhaW5lclwiO1xuXG4gIHN0YXRpYyBmcm9tTm90aGluZygpIHsgcmV0dXJuIEhUTUxOb2RlLmZyb21Ob3RoaW5nKENvbnRhaW5lckhUTUxOb2RlKTsgfVxuXG4gIHN0YXRpYyBmcm9tT3V0ZXJOb2RlKG91dGVyTm9kZSkgeyByZXR1cm4gSFRNTE5vZGUuZnJvbU91dGVyTm9kZShDb250YWluZXJIVE1MTm9kZSwgb3V0ZXJOb2RlKTsgfVxufVxuIl0sIm5hbWVzIjpbIkNvbnRhaW5lckhUTUxOb2RlIiwiZ2V0Q29udGFpbmVyTWFya2Rvd25Ob2RlIiwib3V0ZXJOb2RlIiwiZ2V0T3V0ZXJOb2RlIiwiY29udGFpbmVyTWFya2Rvd25Ob2RlIiwiY2xhc3NOYW1lIiwiY29udGV4dCIsIm1hcmtkb3duQ2xhc3NOYW1lIiwiZnJvbU5vdGhpbmciLCJIVE1MTm9kZSIsImZyb21PdXRlck5vZGUiLCJ0YWdOYW1lIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQUlxQkE7OzsyREFGQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVOLElBQUEsQUFBTUEsa0NBQU47Y0FBTUE7YUFBQUE7Z0NBQUFBO1FBQU4sT0FBQSxrQkFBTUE7O2tCQUFBQTs7WUFDbkJDLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFNQyxZQUFZLElBQUksQ0FBQ0MsWUFBWSxJQUM3QkMsd0JBQXdCRixXQUFZLEdBQUc7Z0JBRTdDLE9BQU9FO1lBQ1Q7OztZQUVBQyxLQUFBQTttQkFBQUEsU0FBQUEsVUFBVUMsT0FBTztnQkFDZixJQUFJRDtnQkFFSixJQUFNRCx3QkFBd0IsSUFBSSxDQUFDSCx3QkFBd0I7Z0JBRTNESSxZQUFZRCxzQkFBc0JDLFNBQVMsQ0FBQ0M7Z0JBRTVDLElBQU1DLG9CQUFvQkYsV0FBWSxHQUFHO2dCQUV6Q0EsWUFBWSx1QkFqQktMLDhCQWlCQ0ssYUFBTixJQUFLLGFBQVdDO2dCQUU1QixJQUFJQyxzQkFBc0IsTUFBTTtvQkFDOUJGLFlBQVksQUFBQyxHQUFlRSxPQUFiRixXQUFVLEtBQXFCLE9BQWxCRTtnQkFDOUI7Z0JBRUEsT0FBT0Y7WUFDVDs7OztZQU1PRyxLQUFBQTttQkFBUCxTQUFPQTtnQkFBZ0IsT0FBT0MsYUFBUSxDQUFDRCxXQUFXLENBOUIvQlI7WUE4Qm9EOzs7WUFFaEVVLEtBQUFBO21CQUFQLFNBQU9BLGNBQWNSLFNBQVM7Z0JBQUksT0FBT08sYUFBUSxDQUFDQyxhQUFhLENBaEM1Q1YsbUJBZ0NnRUU7WUFBWTs7O1dBaEM1RUY7RUFBMEJTLGFBQVE7QUEwQnJELGlCQTFCbUJULG1CQTBCWlcsV0FBVTtBQUVqQixpQkE1Qm1CWCxtQkE0QlpLLGFBQVkifQ==