"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return HTMLTransform;
    }
});
var _occamdom = require("occam-dom");
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
var HTMLTransform = /*#__PURE__*/ function(Transform) {
    _inherits(HTMLTransform, Transform);
    function HTMLTransform() {
        _class_call_check(this, HTMLTransform);
        return _call_super(this, HTMLTransform, arguments);
    }
    _create_class(HTMLTransform, [
        {
            key: "remove",
            value: function remove(context) {
                var node = this.getNode(), childNode = node, parentNode = node.getParentNode();
                parentNode.removeChildNode(childNode);
            }
        }
    ], [
        {
            key: "fromHTNLNOde",
            value: function fromHTNLNOde(Class, htmlNode, context) {
                var node = htmlNode, tokens = null, htmlTransform = _occamdom.Transform.fromNodeAndTokens(Class, node, tokens);
                return htmlTransform;
            }
        }
    ]);
    return HTMLTransform;
}(_occamdom.Transform);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy90cmFuc2Zvcm0vaHRtbC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgVHJhbnNmb3JtIH0gZnJvbSBcIm9jY2FtLWRvbVwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBIVE1MVHJhbnNmb3JtIGV4dGVuZHMgVHJhbnNmb3JtIHtcbiAgcmVtb3ZlKGNvbnRleHQpIHtcbiAgICBjb25zdCBub2RlID0gdGhpcy5nZXROb2RlKCksXG4gICAgICAgICAgY2hpbGROb2RlID0gbm9kZSwgLy8vXG4gICAgICAgICAgcGFyZW50Tm9kZSA9IG5vZGUuZ2V0UGFyZW50Tm9kZSgpO1xuXG4gICAgcGFyZW50Tm9kZS5yZW1vdmVDaGlsZE5vZGUoY2hpbGROb2RlKTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tSFROTE5PZGUoQ2xhc3MsIGh0bWxOb2RlLCBjb250ZXh0KSB7XG4gICAgY29uc3Qgbm9kZSA9IGh0bWxOb2RlLCAgLy8vXG4gICAgICAgICAgdG9rZW5zID0gbnVsbCxcbiAgICAgICAgICBodG1sVHJhbnNmb3JtID0gVHJhbnNmb3JtLmZyb21Ob2RlQW5kVG9rZW5zKENsYXNzLCBub2RlLCB0b2tlbnMpO1xuXG4gICAgcmV0dXJuIGh0bWxUcmFuc2Zvcm07XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJIVE1MVHJhbnNmb3JtIiwicmVtb3ZlIiwiY29udGV4dCIsIm5vZGUiLCJnZXROb2RlIiwiY2hpbGROb2RlIiwicGFyZW50Tm9kZSIsImdldFBhcmVudE5vZGUiLCJyZW1vdmVDaGlsZE5vZGUiLCJmcm9tSFROTE5PZGUiLCJDbGFzcyIsImh0bWxOb2RlIiwidG9rZW5zIiwiaHRtbFRyYW5zZm9ybSIsIlRyYW5zZm9ybSIsImZyb21Ob2RlQW5kVG9rZW5zIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQUlxQkE7Ozt3QkFGSzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFWCxJQUFBLEFBQU1BLDhCQUFOO2NBQU1BO2FBQUFBO2dDQUFBQTtlQUFOLGtCQUFNQTs7a0JBQUFBOztZQUNuQkMsS0FBQUE7bUJBQUFBLFNBQUFBLE9BQU9DLE9BQU87Z0JBQ1osSUFBTUMsT0FBTyxJQUFJLENBQUNDLE9BQU8sSUFDbkJDLFlBQVlGLE1BQ1pHLGFBQWFILEtBQUtJLGFBQWE7Z0JBRXJDRCxXQUFXRSxlQUFlLENBQUNIO1lBQzdCOzs7O1lBRU9JLEtBQUFBO21CQUFQLFNBQU9BLGFBQWFDLEtBQUssRUFBRUMsUUFBUSxFQUFFVCxPQUFPO2dCQUMxQyxJQUFNQyxPQUFPUSxVQUNQQyxTQUFTLE1BQ1RDLGdCQUFnQkMsbUJBQVMsQ0FBQ0MsaUJBQWlCLENBQUNMLE9BQU9QLE1BQU1TO2dCQUUvRCxPQUFPQztZQUNUOzs7V0FmbUJiO0VBQXNCYyxtQkFBUyJ9