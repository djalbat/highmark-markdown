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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ub2RlL2Nzcy9kZWNsYXJhdGlvbi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IENTU05vZGUgZnJvbSBcIi4uLy4uL25vZGUvY3NzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERlY2xhcmF0aW9uQ1NTTm9kZSBleHRlbmRzIENTU05vZGUge1xuICBhc0NTUyhjb250ZXh0KSB7XG4gICAgY29uc3QgbmFtZSA9IHRoaXMuZnJvbUZpcnN0Q2hpbGROb2RlKChmaXJzdENoaWxkTm9kZSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgbmFtZUNTU05vZGUgPSBmaXJzdENoaWxkTm9kZSwgLy8vXG4gICAgICAgICAgICAgICAgICBuYW1lQ1NTTm9kZUNTUyA9IG5hbWVDU1NOb2RlLmFzQ1NTKGNvbnRleHQpLFxuICAgICAgICAgICAgICAgICAgbmFtZSA9IG5hbWVDU1NOb2RlQ1NTOyAgLy8vXG5cbiAgICAgICAgICAgIHJldHVybiBuYW1lO1xuICAgICAgICAgIH0pLFxuICAgICAgICAgIHZhbHVlcyA9IHRoaXMuZnJvbVNlY29uZENoaWxkTm9kZSgoc2Vjb25kQ2hpbGROb2RlKSA9PiB7XG4gICAgICAgICAgICBjb25zdCB2YWx1ZXNDU1NOb2RlID0gc2Vjb25kQ2hpbGROb2RlLFxuICAgICAgICAgICAgICAgICAgdmFsdWVzQ1NTTm9kZUNTUyA9IHZhbHVlc0NTU05vZGUuYXNDU1MoY29udGV4dCksXG4gICAgICAgICAgICAgICAgICB2YWx1ZXMgPSB2YWx1ZXNDU1NOb2RlQ1NTOyAgLy8vXG5cbiAgICAgICAgICAgIHJldHVybiB2YWx1ZXM7XG4gICAgICAgICAgfSksXG4gICAgICAgICAgY3NzID0gYCAgJHtuYW1lfTogJHt2YWx1ZXN9O1xuYDtcblxuICAgIHJldHVybiBjc3M7XG4gIH1cblxuICBzdGF0aWMgZnJvbU5vdGhpbmcoKSB7IHJldHVybiBDU1NOb2RlLmZyb21Ob3RoaW5nKERlY2xhcmF0aW9uQ1NTTm9kZSk7IH1cblxuICBzdGF0aWMgZnJvbU91dGVyTm9kZShvdXRlck5vZGUpIHsgcmV0dXJuIENTU05vZGUuZnJvbU91dGVyTm9kZShEZWNsYXJhdGlvbkNTU05vZGUsIG91dGVyTm9kZSk7IH1cbn1cbiJdLCJuYW1lcyI6WyJEZWNsYXJhdGlvbkNTU05vZGUiLCJhc0NTUyIsImNvbnRleHQiLCJuYW1lIiwiZnJvbUZpcnN0Q2hpbGROb2RlIiwiZmlyc3RDaGlsZE5vZGUiLCJuYW1lQ1NTTm9kZSIsIm5hbWVDU1NOb2RlQ1NTIiwidmFsdWVzIiwiZnJvbVNlY29uZENoaWxkTm9kZSIsInNlY29uZENoaWxkTm9kZSIsInZhbHVlc0NTU05vZGUiLCJ2YWx1ZXNDU1NOb2RlQ1NTIiwiY3NzIiwiZnJvbU5vdGhpbmciLCJDU1NOb2RlIiwiZnJvbU91dGVyTm9kZSIsIm91dGVyTm9kZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFJcUJBOzs7MERBRkQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFTCxJQUFBLEFBQU1BLG1DQUFOO2NBQU1BO2FBQUFBO2dDQUFBQTtlQUFOLGtCQUFNQTs7a0JBQUFBOztZQUNuQkMsS0FBQUE7bUJBQUFBLFNBQUFBLE1BQU1DLE9BQU87Z0JBQ1gsSUFBTUMsT0FBTyxJQUFJLENBQUNDLGtCQUFrQixDQUFDLFNBQUNDO29CQUM5QixJQUFNQyxjQUFjRCxnQkFDZEUsaUJBQWlCRCxZQUFZTCxLQUFLLENBQUNDLFVBQ25DQyxPQUFPSSxnQkFBaUIsR0FBRztvQkFFakMsT0FBT0o7Z0JBQ1QsSUFDQUssU0FBUyxJQUFJLENBQUNDLG1CQUFtQixDQUFDLFNBQUNDO29CQUNqQyxJQUFNQyxnQkFBZ0JELGlCQUNoQkUsbUJBQW1CRCxjQUFjVixLQUFLLENBQUNDLFVBQ3ZDTSxTQUFTSSxrQkFBbUIsR0FBRztvQkFFckMsT0FBT0o7Z0JBQ1QsSUFDQUssTUFBTSxBQUFDLEtBQWFMLE9BQVRMLE1BQUssTUFBVyxPQUFQSyxRQUFPO2dCQUdqQyxPQUFPSztZQUNUOzs7O1lBRU9DLEtBQUFBO21CQUFQLFNBQU9BO2dCQUFnQixPQUFPQyxZQUFPLENBQUNELFdBQVcsQ0F0QjlCZDtZQXNCb0Q7OztZQUVoRWdCLEtBQUFBO21CQUFQLFNBQU9BLGNBQWNDLFNBQVM7Z0JBQUksT0FBT0YsWUFBTyxDQUFDQyxhQUFhLENBeEIzQ2hCLG9CQXdCZ0VpQjtZQUFZOzs7V0F4QjVFakI7RUFBMkJlLFlBQU8ifQ==