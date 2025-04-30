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
    function HTMLTransform(node, tokens, htmlNode) {
        _class_call_check(this, HTMLTransform);
        var _this;
        _this = _call_super(this, HTMLTransform, [
            node,
            tokens
        ]);
        _this.htmlNode = htmlNode;
        return _this;
    }
    _create_class(HTMLTransform, [
        {
            key: "getHTMLNode",
            value: function getHTMLNode() {
                return this.htmlNode;
            }
        },
        {
            key: "removeFrom",
            value: function removeFrom(parentHTNLNode, context) {
                var childNode = this.htmlNode; ///
                parentHTNLNode.removeChildNode(childNode);
            }
        }
    ], [
        {
            key: "fromHTNLNOde",
            value: function fromHTNLNOde(Class, htmlNode, context) {
                var outerNode = htmlNode.getOuterNode(), node = outerNode, footnoteHTMLTransform = _occamdom.Transform.fromNode(Class, node, htmlNode, context);
                return footnoteHTMLTransform;
            }
        }
    ]);
    return HTMLTransform;
}(_occamdom.Transform);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy90cmFuc2Zvcm0vaHRtbC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgVHJhbnNmb3JtIH0gZnJvbSBcIm9jY2FtLWRvbVwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBIVE1MVHJhbnNmb3JtIGV4dGVuZHMgVHJhbnNmb3JtIHtcbiAgY29uc3RydWN0b3Iobm9kZSwgdG9rZW5zLCBodG1sTm9kZSkge1xuICAgIHN1cGVyKG5vZGUsIHRva2Vucyk7XG5cbiAgICB0aGlzLmh0bWxOb2RlID0gaHRtbE5vZGU7XG4gIH1cblxuICBnZXRIVE1MTm9kZSgpIHtcbiAgICByZXR1cm4gdGhpcy5odG1sTm9kZTtcbiAgfVxuXG4gIHJlbW92ZUZyb20ocGFyZW50SFROTE5vZGUsIGNvbnRleHQpIHtcbiAgICBjb25zdCBjaGlsZE5vZGUgPSB0aGlzLmh0bWxOb2RlOyAgLy8vXG5cbiAgICBwYXJlbnRIVE5MTm9kZS5yZW1vdmVDaGlsZE5vZGUoY2hpbGROb2RlKTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tSFROTE5PZGUoQ2xhc3MsIGh0bWxOb2RlLCBjb250ZXh0KSB7XG4gICAgY29uc3Qgb3V0ZXJOb2RlID0gaHRtbE5vZGUuZ2V0T3V0ZXJOb2RlKCksXG4gICAgICAgICAgbm9kZSA9IG91dGVyTm9kZSwgLy8vXG4gICAgICAgICAgZm9vdG5vdGVIVE1MVHJhbnNmb3JtID0gVHJhbnNmb3JtLmZyb21Ob2RlKENsYXNzLCBub2RlLCBodG1sTm9kZSwgY29udGV4dCk7XG5cbiAgICByZXR1cm4gZm9vdG5vdGVIVE1MVHJhbnNmb3JtO1xuICB9XG59XG4iXSwibmFtZXMiOlsiSFRNTFRyYW5zZm9ybSIsIm5vZGUiLCJ0b2tlbnMiLCJodG1sTm9kZSIsImdldEhUTUxOb2RlIiwicmVtb3ZlRnJvbSIsInBhcmVudEhUTkxOb2RlIiwiY29udGV4dCIsImNoaWxkTm9kZSIsInJlbW92ZUNoaWxkTm9kZSIsImZyb21IVE5MTk9kZSIsIkNsYXNzIiwib3V0ZXJOb2RlIiwiZ2V0T3V0ZXJOb2RlIiwiZm9vdG5vdGVIVE1MVHJhbnNmb3JtIiwiVHJhbnNmb3JtIiwiZnJvbU5vZGUiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBSXFCQTs7O3dCQUZLOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVYLElBQUEsQUFBTUEsOEJBQU47Y0FBTUE7YUFBQUEsY0FDUEMsSUFBSSxFQUFFQyxNQUFNLEVBQUVDLFFBQVE7Z0NBRGZIOztnQkFFakIsa0JBRmlCQTtZQUVYQztZQUFNQzs7UUFFWixNQUFLQyxRQUFRLEdBQUdBOzs7a0JBSkNIOztZQU9uQkksS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDRCxRQUFRO1lBQ3RCOzs7WUFFQUUsS0FBQUE7bUJBQUFBLFNBQUFBLFdBQVdDLGNBQWMsRUFBRUMsT0FBTztnQkFDaEMsSUFBTUMsWUFBWSxJQUFJLENBQUNMLFFBQVEsRUFBRyxHQUFHO2dCQUVyQ0csZUFBZUcsZUFBZSxDQUFDRDtZQUNqQzs7OztZQUVPRSxLQUFBQTttQkFBUCxTQUFPQSxhQUFhQyxLQUFLLEVBQUVSLFFBQVEsRUFBRUksT0FBTztnQkFDMUMsSUFBTUssWUFBWVQsU0FBU1UsWUFBWSxJQUNqQ1osT0FBT1csV0FDUEUsd0JBQXdCQyxtQkFBUyxDQUFDQyxRQUFRLENBQUNMLE9BQU9WLE1BQU1FLFVBQVVJO2dCQUV4RSxPQUFPTztZQUNUOzs7V0F2Qm1CZDtFQUFzQmUsbUJBQVMifQ==