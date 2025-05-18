"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return DeclarationCSSNode;
    }
});
var _css = /*#__PURE__*/ _interop_require_default(require("../../node/css"));
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
var DeclarationCSSNode = /*#__PURE__*/ function(CSSNode) {
    _inherits(DeclarationCSSNode, CSSNode);
    function DeclarationCSSNode() {
        _class_call_check(this, DeclarationCSSNode);
        return _call_super(this, DeclarationCSSNode, arguments);
    }
    _create_class(DeclarationCSSNode, [
        {
            key: "asCSS",
            value: function asCSS(context) {
                var name = this.fromFirstChildNode(function(firstChildNode) {
                    var nameCSSNode = firstChildNode, nameCSSNodeCSS = nameCSSNode.asCSS(context), name = nameCSSNodeCSS; ///
                    return name;
                }), values = this.fromSecondChildNode(function(secondChildNode) {
                    var valuesCSSNode = secondChildNode, valuesCSSNodeCSS = valuesCSSNode.asCSS(context), values = valuesCSSNodeCSS; ///
                    return values;
                }), css = "  ".concat(name, ": ").concat(values, ";\n");
                return css;
            }
        }
    ], [
        {
            key: "fromNothing",
            value: function fromNothing() {
                return _css.default.fromNothing(DeclarationCSSNode);
            }
        },
        {
            key: "fromOuterNode",
            value: function fromOuterNode(outerNode) {
                return _css.default.fromOuterNode(DeclarationCSSNode, outerNode);
            }
        }
    ]);
    return DeclarationCSSNode;
}(_css.default);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ub2RlL2Nzcy9kZWNsYXJhdGlvbi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IENTU05vZGUgZnJvbSBcIi4uLy4uL25vZGUvY3NzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERlY2xhcmF0aW9uQ1NTTm9kZSBleHRlbmRzIENTU05vZGUge1xuICBhc0NTUyhjb250ZXh0KSB7XG4gICAgY29uc3QgbmFtZSA9IHRoaXMuZnJvbUZpcnN0Q2hpbGROb2RlKChmaXJzdENoaWxkTm9kZSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgbmFtZUNTU05vZGUgPSBmaXJzdENoaWxkTm9kZSwgLy8vXG4gICAgICAgICAgICAgICAgICBuYW1lQ1NTTm9kZUNTUyA9IG5hbWVDU1NOb2RlLmFzQ1NTKGNvbnRleHQpLFxuICAgICAgICAgICAgICAgICAgbmFtZSA9IG5hbWVDU1NOb2RlQ1NTOyAgLy8vXG5cbiAgICAgICAgICAgIHJldHVybiBuYW1lO1xuICAgICAgICAgIH0pLFxuICAgICAgICAgIHZhbHVlcyA9IHRoaXMuZnJvbVNlY29uZENoaWxkTm9kZSgoc2Vjb25kQ2hpbGROb2RlKSA9PiB7XG4gICAgICAgICAgICBjb25zdCB2YWx1ZXNDU1NOb2RlID0gc2Vjb25kQ2hpbGROb2RlLCAgLy8vXG4gICAgICAgICAgICAgICAgICB2YWx1ZXNDU1NOb2RlQ1NTID0gdmFsdWVzQ1NTTm9kZS5hc0NTUyhjb250ZXh0KSxcbiAgICAgICAgICAgICAgICAgIHZhbHVlcyA9IHZhbHVlc0NTU05vZGVDU1M7ICAvLy9cblxuICAgICAgICAgICAgcmV0dXJuIHZhbHVlcztcbiAgICAgICAgICB9KSxcbiAgICAgICAgICBjc3MgPSBgICAke25hbWV9OiAke3ZhbHVlc307XG5gO1xuXG4gICAgcmV0dXJuIGNzcztcbiAgfVxuXG4gIHN0YXRpYyBmcm9tTm90aGluZygpIHsgcmV0dXJuIENTU05vZGUuZnJvbU5vdGhpbmcoRGVjbGFyYXRpb25DU1NOb2RlKTsgfVxuXG4gIHN0YXRpYyBmcm9tT3V0ZXJOb2RlKG91dGVyTm9kZSkgeyByZXR1cm4gQ1NTTm9kZS5mcm9tT3V0ZXJOb2RlKERlY2xhcmF0aW9uQ1NTTm9kZSwgb3V0ZXJOb2RlKTsgfVxufVxuIl0sIm5hbWVzIjpbIkRlY2xhcmF0aW9uQ1NTTm9kZSIsImFzQ1NTIiwiY29udGV4dCIsIm5hbWUiLCJmcm9tRmlyc3RDaGlsZE5vZGUiLCJmaXJzdENoaWxkTm9kZSIsIm5hbWVDU1NOb2RlIiwibmFtZUNTU05vZGVDU1MiLCJ2YWx1ZXMiLCJmcm9tU2Vjb25kQ2hpbGROb2RlIiwic2Vjb25kQ2hpbGROb2RlIiwidmFsdWVzQ1NTTm9kZSIsInZhbHVlc0NTU05vZGVDU1MiLCJjc3MiLCJmcm9tTm90aGluZyIsIkNTU05vZGUiLCJmcm9tT3V0ZXJOb2RlIiwib3V0ZXJOb2RlIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQUlxQkE7OzswREFGRDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVMLElBQUEsQUFBTUEsbUNBQU47Y0FBTUE7YUFBQUE7Z0NBQUFBO2VBQU4sa0JBQU1BOztrQkFBQUE7O1lBQ25CQyxLQUFBQTttQkFBQUEsU0FBQUEsTUFBTUMsT0FBTztnQkFDWCxJQUFNQyxPQUFPLElBQUksQ0FBQ0Msa0JBQWtCLENBQUMsU0FBQ0M7b0JBQzlCLElBQU1DLGNBQWNELGdCQUNkRSxpQkFBaUJELFlBQVlMLEtBQUssQ0FBQ0MsVUFDbkNDLE9BQU9JLGdCQUFpQixHQUFHO29CQUVqQyxPQUFPSjtnQkFDVCxJQUNBSyxTQUFTLElBQUksQ0FBQ0MsbUJBQW1CLENBQUMsU0FBQ0M7b0JBQ2pDLElBQU1DLGdCQUFnQkQsaUJBQ2hCRSxtQkFBbUJELGNBQWNWLEtBQUssQ0FBQ0MsVUFDdkNNLFNBQVNJLGtCQUFtQixHQUFHO29CQUVyQyxPQUFPSjtnQkFDVCxJQUNBSyxNQUFNLEFBQUMsS0FBYUwsT0FBVEwsTUFBSyxNQUFXLE9BQVBLLFFBQU87Z0JBR2pDLE9BQU9LO1lBQ1Q7Ozs7WUFFT0MsS0FBQUE7bUJBQVAsU0FBT0E7Z0JBQWdCLE9BQU9DLFlBQU8sQ0FBQ0QsV0FBVyxDQXRCOUJkO1lBc0JvRDs7O1lBRWhFZ0IsS0FBQUE7bUJBQVAsU0FBT0EsY0FBY0MsU0FBUztnQkFBSSxPQUFPRixZQUFPLENBQUNDLGFBQWEsQ0F4QjNDaEIsb0JBd0JnRWlCO1lBQVk7OztXQXhCNUVqQjtFQUEyQmUsWUFBTyJ9