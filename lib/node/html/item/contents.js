"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return ContentsItemHTMLNode;
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
var ContentsItemHTMLNode = /*#__PURE__*/ function(HTMLNode) {
    _inherits(ContentsItemHTMLNode, HTMLNode);
    function ContentsItemHTMLNode() {
        _class_call_check(this, ContentsItemHTMLNode);
        return _call_super(this, ContentsItemHTMLNode, arguments);
    }
    _create_class(ContentsItemHTMLNode, null, [
        {
            key: "fromNothing",
            value: function fromNothing() {
                return _html.default.fromNothing(ContentsItemHTMLNode);
            }
        },
        {
            key: "fromOuterNode",
            value: function fromOuterNode(outerNode) {
                return _html.default.fromOuterNode(ContentsItemHTMLNode, outerNode);
            }
        },
        {
            key: "fromHTMLTransforms",
            value: function fromHTMLTransforms(htmlTransforms) {
                var htmlNodes = htmlTransforms.map(function(htmlTransform) {
                    var htmlNode = htmlTransform.getHTMLNode();
                    return htmlNode;
                }), childNodes = htmlNodes, contentsItemHTMLNode = _html.default.fromChildNodes(ContentsItemHTMLNode, childNodes);
                return contentsItemHTMLNode;
            }
        }
    ]);
    return ContentsItemHTMLNode;
}(_html.default);
_define_property(ContentsItemHTMLNode, "tagName", "li");
_define_property(ContentsItemHTMLNode, "className", "contents");

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9ub2RlL2h0bWwvaXRlbS9jb250ZW50cy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IEhUTUxOb2RlIGZyb20gXCIuLi8uLi8uLi9ub2RlL2h0bWxcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29udGVudHNJdGVtSFRNTE5vZGUgZXh0ZW5kcyBIVE1MTm9kZSB7XG4gIHN0YXRpYyB0YWdOYW1lID0gXCJsaVwiO1xuXG4gIHN0YXRpYyBjbGFzc05hbWUgPSBcImNvbnRlbnRzXCI7XG5cbiAgc3RhdGljIGZyb21Ob3RoaW5nKCkgeyByZXR1cm4gSFRNTE5vZGUuZnJvbU5vdGhpbmcoQ29udGVudHNJdGVtSFRNTE5vZGUpOyB9XG5cbiAgc3RhdGljIGZyb21PdXRlck5vZGUob3V0ZXJOb2RlKSB7IHJldHVybiBIVE1MTm9kZS5mcm9tT3V0ZXJOb2RlKENvbnRlbnRzSXRlbUhUTUxOb2RlLCBvdXRlck5vZGUpOyB9XG5cbiAgc3RhdGljIGZyb21IVE1MVHJhbnNmb3JtcyhodG1sVHJhbnNmb3Jtcykge1xuICAgIGNvbnN0IGh0bWxOb2RlcyA9IGh0bWxUcmFuc2Zvcm1zLm1hcCgoaHRtbFRyYW5zZm9ybSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgaHRtbE5vZGUgPSBodG1sVHJhbnNmb3JtLmdldEhUTUxOb2RlKCk7XG5cbiAgICAgICAgICAgIHJldHVybiBodG1sTm9kZTtcbiAgICAgICAgICB9KSxcbiAgICAgICAgICBjaGlsZE5vZGVzID0gaHRtbE5vZGVzLCAvLy9cbiAgICAgICAgICBjb250ZW50c0l0ZW1IVE1MTm9kZSA9IEhUTUxOb2RlLmZyb21DaGlsZE5vZGVzKENvbnRlbnRzSXRlbUhUTUxOb2RlLCBjaGlsZE5vZGVzKTtcblxuICAgIHJldHVybiBjb250ZW50c0l0ZW1IVE1MTm9kZTtcbiAgfVxufVxuIl0sIm5hbWVzIjpbIkNvbnRlbnRzSXRlbUhUTUxOb2RlIiwiZnJvbU5vdGhpbmciLCJIVE1MTm9kZSIsImZyb21PdXRlck5vZGUiLCJvdXRlck5vZGUiLCJmcm9tSFRNTFRyYW5zZm9ybXMiLCJodG1sVHJhbnNmb3JtcyIsImh0bWxOb2RlcyIsIm1hcCIsImh0bWxUcmFuc2Zvcm0iLCJodG1sTm9kZSIsImdldEhUTUxOb2RlIiwiY2hpbGROb2RlcyIsImNvbnRlbnRzSXRlbUhUTUxOb2RlIiwiZnJvbUNoaWxkTm9kZXMiLCJ0YWdOYW1lIiwiY2xhc3NOYW1lIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQUlxQkE7OzsyREFGQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFTixJQUFBLEFBQU1BLHFDQUFOO2NBQU1BO2FBQUFBO2dDQUFBQTtlQUFOLGtCQUFNQTs7a0JBQUFBOztZQUtaQyxLQUFBQTttQkFBUCxTQUFPQTtnQkFBZ0IsT0FBT0MsYUFBUSxDQUFDRCxXQUFXLENBTC9CRDtZQUt1RDs7O1lBRW5FRyxLQUFBQTttQkFBUCxTQUFPQSxjQUFjQyxTQUFTO2dCQUFJLE9BQU9GLGFBQVEsQ0FBQ0MsYUFBYSxDQVA1Q0gsc0JBT21FSTtZQUFZOzs7WUFFM0ZDLEtBQUFBO21CQUFQLFNBQU9BLG1CQUFtQkMsY0FBYztnQkFDdEMsSUFBTUMsWUFBWUQsZUFBZUUsR0FBRyxDQUFDLFNBQUNDO29CQUM5QixJQUFNQyxXQUFXRCxjQUFjRSxXQUFXO29CQUUxQyxPQUFPRDtnQkFDVCxJQUNBRSxhQUFhTCxXQUNiTSx1QkFBdUJYLGFBQVEsQ0FBQ1ksY0FBYyxDQWhCbkNkLHNCQWdCMERZO2dCQUUzRSxPQUFPQztZQUNUOzs7V0FuQm1CYjtFQUE2QkUsYUFBUTtBQUN4RCxpQkFEbUJGLHNCQUNaZSxXQUFVO0FBRWpCLGlCQUhtQmYsc0JBR1pnQixhQUFZIn0=