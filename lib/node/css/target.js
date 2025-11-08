"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return ContentCSSNode;
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
var ContentCSSNode = /*#__PURE__*/ function(CSSNode) {
    _inherits(ContentCSSNode, CSSNode);
    function ContentCSSNode() {
        _class_call_check(this, ContentCSSNode);
        return _call_super(this, ContentCSSNode, arguments);
    }
    _create_class(ContentCSSNode, [
        {
            key: "target",
            value: function target(context) {
                var markdownStyleNode = this.getMarkdownStyleNode(), targetMarkdownStyleNode = markdownStyleNode, target = targetMarkdownStyleNode.target(context);
                return target;
            }
        }
    ], [
        {
            key: "fromNothing",
            value: function fromNothing() {
                return _css.default.fromNothing(ContentCSSNode);
            }
        },
        {
            key: "fromOuterNode",
            value: function fromOuterNode(outerNode) {
                return _css.default.fromOuterNode(ContentCSSNode, outerNode);
            }
        }
    ]);
    return ContentCSSNode;
}(_css.default);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ub2RlL2Nzcy90YXJnZXQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBDU1NOb2RlIGZyb20gXCIuLi8uLi9ub2RlL2Nzc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDb250ZW50Q1NTTm9kZSBleHRlbmRzIENTU05vZGUge1xuICB0YXJnZXQoY29udGV4dCkge1xuICAgIGNvbnN0IG1hcmtkb3duU3R5bGVOb2RlID0gdGhpcy5nZXRNYXJrZG93blN0eWxlTm9kZSgpLFxuICAgICAgICAgIHRhcmdldE1hcmtkb3duU3R5bGVOb2RlID0gbWFya2Rvd25TdHlsZU5vZGUsICAvLy9cbiAgICAgICAgICB0YXJnZXQgPSB0YXJnZXRNYXJrZG93blN0eWxlTm9kZS50YXJnZXQoY29udGV4dCk7XG5cbiAgICByZXR1cm4gdGFyZ2V0O1xuICB9XG5cbiAgc3RhdGljIGZyb21Ob3RoaW5nKCkgeyByZXR1cm4gQ1NTTm9kZS5mcm9tTm90aGluZyhDb250ZW50Q1NTTm9kZSk7IH1cblxuICBzdGF0aWMgZnJvbU91dGVyTm9kZShvdXRlck5vZGUpIHsgcmV0dXJuIENTU05vZGUuZnJvbU91dGVyTm9kZShDb250ZW50Q1NTTm9kZSwgb3V0ZXJOb2RlKTsgfVxufVxuIl0sIm5hbWVzIjpbIkNvbnRlbnRDU1NOb2RlIiwidGFyZ2V0IiwiY29udGV4dCIsIm1hcmtkb3duU3R5bGVOb2RlIiwiZ2V0TWFya2Rvd25TdHlsZU5vZGUiLCJ0YXJnZXRNYXJrZG93blN0eWxlTm9kZSIsImZyb21Ob3RoaW5nIiwiQ1NTTm9kZSIsImZyb21PdXRlck5vZGUiLCJvdXRlck5vZGUiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBSXFCQTs7OzBEQUZEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUwsSUFBQSxBQUFNQSwrQkFBTjtjQUFNQTthQUFBQTtnQ0FBQUE7UUFBTixPQUFBLGtCQUFNQTs7a0JBQUFBOztZQUNuQkMsS0FBQUE7bUJBQUFBLFNBQUFBLE9BQU9DLE9BQU87Z0JBQ1osSUFBTUMsb0JBQW9CLElBQUksQ0FBQ0Msb0JBQW9CLElBQzdDQywwQkFBMEJGLG1CQUMxQkYsU0FBU0ksd0JBQXdCSixNQUFNLENBQUNDO2dCQUU5QyxPQUFPRDtZQUNUOzs7O1lBRU9LLEtBQUFBO21CQUFQLFNBQU9BO2dCQUFnQixPQUFPQyxZQUFPLENBQUNELFdBQVcsQ0FUOUJOO1lBU2dEOzs7WUFFNURRLEtBQUFBO21CQUFQLFNBQU9BLGNBQWNDLFNBQVM7Z0JBQUksT0FBT0YsWUFBTyxDQUFDQyxhQUFhLENBWDNDUixnQkFXNERTO1lBQVk7OztXQVh4RVQ7RUFBdUJPLFlBQU8ifQ==