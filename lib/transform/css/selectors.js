"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return SelectorsCSSTransform;
    }
});
var _css = /*#__PURE__*/ _interop_require_default(require("../../transform/css"));
var _selector = /*#__PURE__*/ _interop_require_default(require("../../transform/css/selector"));
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
var SelectorsCSSTransform = /*#__PURE__*/ function(CSSTransform) {
    _inherits(SelectorsCSSTransform, CSSTransform);
    function SelectorsCSSTransform(cssNode, selectorCSSTransforms) {
        _class_call_check(this, SelectorsCSSTransform);
        var _this;
        _this = _call_super(this, SelectorsCSSTransform, [
            cssNode
        ]);
        _this.selectorCSSTransforms = selectorCSSTransforms;
        return _this;
    }
    _create_class(SelectorsCSSTransform, [
        {
            key: "getSelectorCSSTransforms",
            value: function getSelectorCSSTransforms() {
                return this.selectorCSSTransforms;
            }
        },
        {
            key: "mergeWithSelectorsCSSNode",
            value: function mergeWithSelectorsCSSNode(selectorsCSSNode) {
                var selectorCSSNodes = selectorsCSSNode.getSelectorCSSNodes();
                this.selectorCSSTransforms.forEach(function(selectorCSSTransform) {
                    selectorCSSNodes.forEach(function(selectorCSSNode) {
                        selectorCSSTransform.mergeWithSelectorCSSNode(selectorCSSNode);
                    });
                });
            }
        }
    ], [
        {
            key: "fromSelectorsCSSNode",
            value: function fromSelectorsCSSNode(selectorsCSSNode) {
                var cssNode = selectorsCSSNode, selectorCSSTransforms = selectorCSSTransformsFromSelectorsCSSNode(selectorsCSSNode), selectorsCSSTransform = _css.default.fromCSSNode(SelectorsCSSTransform, cssNode, selectorCSSTransforms);
                return selectorsCSSTransform;
            }
        }
    ]);
    return SelectorsCSSTransform;
}(_css.default);
function selectorCSSTransformsFromSelectorsCSSNode(selectorsCSSNode) {
    var selectorCSSNodes = selectorsCSSNode.getSelectorCSSNodes(), selectorCSSTransforms = selectorCSSNodes.map(function(selectorCSSNode) {
        var selectorCSSTransform = _selector.default.fromSelectorCSSNode(selectorCSSNode);
        return selectorCSSTransform;
    });
    return selectorCSSTransforms;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy90cmFuc2Zvcm0vY3NzL3NlbGVjdG9ycy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IENTU1RyYW5zZm9ybSBmcm9tIFwiLi4vLi4vdHJhbnNmb3JtL2Nzc1wiXG5pbXBvcnQgU2VsZWN0b3JDU1NUcmFuc2Zvcm0gZnJvbSBcIi4uLy4uL3RyYW5zZm9ybS9jc3Mvc2VsZWN0b3JcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2VsZWN0b3JzQ1NTVHJhbnNmb3JtIGV4dGVuZHMgQ1NTVHJhbnNmb3JtIHtcbiAgY29uc3RydWN0b3IoY3NzTm9kZSwgc2VsZWN0b3JDU1NUcmFuc2Zvcm1zKSB7XG4gICAgc3VwZXIoY3NzTm9kZSk7XG5cbiAgICB0aGlzLnNlbGVjdG9yQ1NTVHJhbnNmb3JtcyA9IHNlbGVjdG9yQ1NTVHJhbnNmb3JtcztcbiAgfVxuXG4gIGdldFNlbGVjdG9yQ1NTVHJhbnNmb3JtcygpIHtcbiAgICByZXR1cm4gdGhpcy5zZWxlY3RvckNTU1RyYW5zZm9ybXM7XG4gIH1cblxuICBtZXJnZVdpdGhTZWxlY3RvcnNDU1NOb2RlKHNlbGVjdG9yc0NTU05vZGUpIHtcbiAgICBjb25zdCBzZWxlY3RvckNTU05vZGVzID0gc2VsZWN0b3JzQ1NTTm9kZS5nZXRTZWxlY3RvckNTU05vZGVzKCk7XG5cbiAgICB0aGlzLnNlbGVjdG9yQ1NTVHJhbnNmb3Jtcy5mb3JFYWNoKChzZWxlY3RvckNTU1RyYW5zZm9ybSkgPT4ge1xuICAgICAgc2VsZWN0b3JDU1NOb2Rlcy5mb3JFYWNoKChzZWxlY3RvckNTU05vZGUpID0+IHtcbiAgICAgICAgc2VsZWN0b3JDU1NUcmFuc2Zvcm0ubWVyZ2VXaXRoU2VsZWN0b3JDU1NOb2RlKHNlbGVjdG9yQ1NTTm9kZSk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tU2VsZWN0b3JzQ1NTTm9kZShzZWxlY3RvcnNDU1NOb2RlKSB7XG4gICAgY29uc3QgY3NzTm9kZSA9IHNlbGVjdG9yc0NTU05vZGUsIC8vL1xuICAgICAgICAgIHNlbGVjdG9yQ1NTVHJhbnNmb3JtcyA9IHNlbGVjdG9yQ1NTVHJhbnNmb3Jtc0Zyb21TZWxlY3RvcnNDU1NOb2RlKHNlbGVjdG9yc0NTU05vZGUpLFxuICAgICAgICAgIHNlbGVjdG9yc0NTU1RyYW5zZm9ybSA9IENTU1RyYW5zZm9ybS5mcm9tQ1NTTm9kZShTZWxlY3RvcnNDU1NUcmFuc2Zvcm0sIGNzc05vZGUsIHNlbGVjdG9yQ1NTVHJhbnNmb3Jtcyk7XG5cbiAgICByZXR1cm4gc2VsZWN0b3JzQ1NTVHJhbnNmb3JtO1xuICB9XG59XG5cbmZ1bmN0aW9uIHNlbGVjdG9yQ1NTVHJhbnNmb3Jtc0Zyb21TZWxlY3RvcnNDU1NOb2RlKHNlbGVjdG9yc0NTU05vZGUpIHtcbiAgY29uc3Qgc2VsZWN0b3JDU1NOb2RlcyA9IHNlbGVjdG9yc0NTU05vZGUuZ2V0U2VsZWN0b3JDU1NOb2RlcygpLFxuICAgICAgICBzZWxlY3RvckNTU1RyYW5zZm9ybXMgPSBzZWxlY3RvckNTU05vZGVzLm1hcCgoc2VsZWN0b3JDU1NOb2RlKSA9PiB7XG4gICAgICAgICAgY29uc3Qgc2VsZWN0b3JDU1NUcmFuc2Zvcm0gPSBTZWxlY3RvckNTU1RyYW5zZm9ybS5mcm9tU2VsZWN0b3JDU1NOb2RlKHNlbGVjdG9yQ1NTTm9kZSk7XG5cbiAgICAgICAgICByZXR1cm4gc2VsZWN0b3JDU1NUcmFuc2Zvcm07XG4gICAgICAgIH0pO1xuXG4gIHJldHVybiBzZWxlY3RvckNTU1RyYW5zZm9ybXM7XG59Il0sIm5hbWVzIjpbIlNlbGVjdG9yc0NTU1RyYW5zZm9ybSIsImNzc05vZGUiLCJzZWxlY3RvckNTU1RyYW5zZm9ybXMiLCJnZXRTZWxlY3RvckNTU1RyYW5zZm9ybXMiLCJtZXJnZVdpdGhTZWxlY3RvcnNDU1NOb2RlIiwic2VsZWN0b3JzQ1NTTm9kZSIsInNlbGVjdG9yQ1NTTm9kZXMiLCJnZXRTZWxlY3RvckNTU05vZGVzIiwiZm9yRWFjaCIsInNlbGVjdG9yQ1NTVHJhbnNmb3JtIiwic2VsZWN0b3JDU1NOb2RlIiwibWVyZ2VXaXRoU2VsZWN0b3JDU1NOb2RlIiwiZnJvbVNlbGVjdG9yc0NTU05vZGUiLCJzZWxlY3RvckNTU1RyYW5zZm9ybXNGcm9tU2VsZWN0b3JzQ1NTTm9kZSIsInNlbGVjdG9yc0NTU1RyYW5zZm9ybSIsIkNTU1RyYW5zZm9ybSIsImZyb21DU1NOb2RlIiwibWFwIiwiU2VsZWN0b3JDU1NUcmFuc2Zvcm0iLCJmcm9tU2VsZWN0b3JDU1NOb2RlIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQUtxQkE7OzswREFISTsrREFDUTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVsQixJQUFBLEFBQU1BLHNDQUFOO2NBQU1BO2FBQUFBLHNCQUNQQyxPQUFPLEVBQUVDLHFCQUFxQjtnQ0FEdkJGOztnQkFFakIsa0JBRmlCQTtZQUVYQzs7UUFFTixNQUFLQyxxQkFBcUIsR0FBR0E7OztrQkFKWkY7O1lBT25CRyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNELHFCQUFxQjtZQUNuQzs7O1lBRUFFLEtBQUFBO21CQUFBQSxTQUFBQSwwQkFBMEJDLGdCQUFnQjtnQkFDeEMsSUFBTUMsbUJBQW1CRCxpQkFBaUJFLG1CQUFtQjtnQkFFN0QsSUFBSSxDQUFDTCxxQkFBcUIsQ0FBQ00sT0FBTyxDQUFDLFNBQUNDO29CQUNsQ0gsaUJBQWlCRSxPQUFPLENBQUMsU0FBQ0U7d0JBQ3hCRCxxQkFBcUJFLHdCQUF3QixDQUFDRDtvQkFDaEQ7Z0JBQ0Y7WUFDRjs7OztZQUVPRSxLQUFBQTttQkFBUCxTQUFPQSxxQkFBcUJQLGdCQUFnQjtnQkFDMUMsSUFBTUosVUFBVUksa0JBQ1ZILHdCQUF3QlcsMENBQTBDUixtQkFDbEVTLHdCQUF3QkMsWUFBWSxDQUFDQyxXQUFXLENBeEJyQ2hCLHVCQXdCNkRDLFNBQVNDO2dCQUV2RixPQUFPWTtZQUNUOzs7V0EzQm1CZDtFQUE4QmUsWUFBWTtBQThCL0QsU0FBU0YsMENBQTBDUixnQkFBZ0I7SUFDakUsSUFBTUMsbUJBQW1CRCxpQkFBaUJFLG1CQUFtQixJQUN2REwsd0JBQXdCSSxpQkFBaUJXLEdBQUcsQ0FBQyxTQUFDUDtRQUM1QyxJQUFNRCx1QkFBdUJTLGlCQUFvQixDQUFDQyxtQkFBbUIsQ0FBQ1Q7UUFFdEUsT0FBT0Q7SUFDVDtJQUVOLE9BQU9QO0FBQ1QifQ==