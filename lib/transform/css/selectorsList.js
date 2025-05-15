"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return SelectorsListCSSTransform;
    }
});
var _css = /*#__PURE__*/ _interop_require_default(require("../../transform/css"));
var _selectors = /*#__PURE__*/ _interop_require_default(require("./selectors"));
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
var SelectorsListCSSTransform = /*#__PURE__*/ function(CSSTransform) {
    _inherits(SelectorsListCSSTransform, CSSTransform);
    function SelectorsListCSSTransform(cssNode, selectorsCSSTransforms) {
        _class_call_check(this, SelectorsListCSSTransform);
        var _this;
        _this = _call_super(this, SelectorsListCSSTransform, [
            cssNode
        ]);
        _this.selectorsCSSTransforms = selectorsCSSTransforms;
        return _this;
    }
    _create_class(SelectorsListCSSTransform, [
        {
            key: "getSelectorsCSSTransforms",
            value: function getSelectorsCSSTransforms() {
                return this.selectorsCSSTransforms;
            }
        },
        {
            key: "mergeWithSelectorsListCSSNode",
            value: function mergeWithSelectorsListCSSNode(selectorsListCSSNode) {
                var selectorsCSSNodes = selectorsListCSSNode.getSelectorsCSSNodes();
                this.selectorsCSSTransforms.forEach(function(selectorsCSSTransform) {
                    selectorsCSSNodes.forEach(function(selectorsCSSNode) {
                        selectorsCSSTransform.mergeWithSelectorsCSSNode(selectorsCSSNode);
                    });
                });
            }
        }
    ], [
        {
            key: "fromSelectorsListCSSNode",
            value: function fromSelectorsListCSSNode(selectorsListCSSNode) {
                var cssNode = selectorsListCSSNode, selectorsCSSTransforms = selectorsCSSTransformsFromSelectorsListCSSNode(selectorsListCSSNode), selectorsListCSSTransform = _css.default.fromCSSNode(SelectorsListCSSTransform, cssNode, selectorsCSSTransforms);
                return selectorsListCSSTransform;
            }
        }
    ]);
    return SelectorsListCSSTransform;
}(_css.default);
function selectorsCSSTransformsFromSelectorsListCSSNode(selectorsListCSSNode) {
    var selectorsCSSNodes = selectorsListCSSNode.getSelectorsCSSNodes(), selectorsCSSTransforms = selectorsCSSNodes.map(function(selectorsCSSNode) {
        var selectorsCSSTransform = _selectors.default.fromSelectorsCSSNode(selectorsCSSNode);
        return selectorsCSSTransform;
    });
    return selectorsCSSTransforms;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy90cmFuc2Zvcm0vY3NzL3NlbGVjdG9yc0xpc3QuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBDU1NUcmFuc2Zvcm0gZnJvbSBcIi4uLy4uL3RyYW5zZm9ybS9jc3NcIlxuaW1wb3J0IFNlbGVjdG9yc0NTU1RyYW5zZm9ybSBmcm9tIFwiLi9zZWxlY3RvcnNcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2VsZWN0b3JzTGlzdENTU1RyYW5zZm9ybSBleHRlbmRzIENTU1RyYW5zZm9ybSB7XG4gIGNvbnN0cnVjdG9yKGNzc05vZGUsIHNlbGVjdG9yc0NTU1RyYW5zZm9ybXMpIHtcbiAgICBzdXBlcihjc3NOb2RlKTtcblxuICAgIHRoaXMuc2VsZWN0b3JzQ1NTVHJhbnNmb3JtcyA9IHNlbGVjdG9yc0NTU1RyYW5zZm9ybXM7XG4gIH1cblxuICBnZXRTZWxlY3RvcnNDU1NUcmFuc2Zvcm1zKCkge1xuICAgIHJldHVybiB0aGlzLnNlbGVjdG9yc0NTU1RyYW5zZm9ybXM7XG4gIH1cblxuICBtZXJnZVdpdGhTZWxlY3RvcnNMaXN0Q1NTTm9kZShzZWxlY3RvcnNMaXN0Q1NTTm9kZSkge1xuICAgIGNvbnN0IHNlbGVjdG9yc0NTU05vZGVzID0gc2VsZWN0b3JzTGlzdENTU05vZGUuZ2V0U2VsZWN0b3JzQ1NTTm9kZXMoKTtcblxuICAgIHRoaXMuc2VsZWN0b3JzQ1NTVHJhbnNmb3Jtcy5mb3JFYWNoKChzZWxlY3RvcnNDU1NUcmFuc2Zvcm0pID0+IHtcbiAgICAgIHNlbGVjdG9yc0NTU05vZGVzLmZvckVhY2goKHNlbGVjdG9yc0NTU05vZGUpID0+IHtcbiAgICAgICAgc2VsZWN0b3JzQ1NTVHJhbnNmb3JtLm1lcmdlV2l0aFNlbGVjdG9yc0NTU05vZGUoc2VsZWN0b3JzQ1NTTm9kZSk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tU2VsZWN0b3JzTGlzdENTU05vZGUoc2VsZWN0b3JzTGlzdENTU05vZGUpIHtcbiAgICBjb25zdCBjc3NOb2RlID0gc2VsZWN0b3JzTGlzdENTU05vZGUsIC8vL1xuICAgICAgICAgIHNlbGVjdG9yc0NTU1RyYW5zZm9ybXMgPSBzZWxlY3RvcnNDU1NUcmFuc2Zvcm1zRnJvbVNlbGVjdG9yc0xpc3RDU1NOb2RlKHNlbGVjdG9yc0xpc3RDU1NOb2RlKSxcbiAgICAgICAgICBzZWxlY3RvcnNMaXN0Q1NTVHJhbnNmb3JtID0gQ1NTVHJhbnNmb3JtLmZyb21DU1NOb2RlKFNlbGVjdG9yc0xpc3RDU1NUcmFuc2Zvcm0sIGNzc05vZGUsIHNlbGVjdG9yc0NTU1RyYW5zZm9ybXMpO1xuXG4gICAgcmV0dXJuIHNlbGVjdG9yc0xpc3RDU1NUcmFuc2Zvcm07XG4gIH1cbn1cblxuZnVuY3Rpb24gc2VsZWN0b3JzQ1NTVHJhbnNmb3Jtc0Zyb21TZWxlY3RvcnNMaXN0Q1NTTm9kZShzZWxlY3RvcnNMaXN0Q1NTTm9kZSkge1xuICBjb25zdCBzZWxlY3RvcnNDU1NOb2RlcyA9IHNlbGVjdG9yc0xpc3RDU1NOb2RlLmdldFNlbGVjdG9yc0NTU05vZGVzKCksXG4gICAgICAgIHNlbGVjdG9yc0NTU1RyYW5zZm9ybXMgPSBzZWxlY3RvcnNDU1NOb2Rlcy5tYXAoKHNlbGVjdG9yc0NTU05vZGUpID0+IHtcbiAgICAgICAgICBjb25zdCBzZWxlY3RvcnNDU1NUcmFuc2Zvcm0gPSBTZWxlY3RvcnNDU1NUcmFuc2Zvcm0uZnJvbVNlbGVjdG9yc0NTU05vZGUoc2VsZWN0b3JzQ1NTTm9kZSk7XG5cbiAgICAgICAgICByZXR1cm4gc2VsZWN0b3JzQ1NTVHJhbnNmb3JtO1xuICAgICAgICB9KTtcblxuICByZXR1cm4gc2VsZWN0b3JzQ1NTVHJhbnNmb3Jtcztcbn0iXSwibmFtZXMiOlsiU2VsZWN0b3JzTGlzdENTU1RyYW5zZm9ybSIsImNzc05vZGUiLCJzZWxlY3RvcnNDU1NUcmFuc2Zvcm1zIiwiZ2V0U2VsZWN0b3JzQ1NTVHJhbnNmb3JtcyIsIm1lcmdlV2l0aFNlbGVjdG9yc0xpc3RDU1NOb2RlIiwic2VsZWN0b3JzTGlzdENTU05vZGUiLCJzZWxlY3RvcnNDU1NOb2RlcyIsImdldFNlbGVjdG9yc0NTU05vZGVzIiwiZm9yRWFjaCIsInNlbGVjdG9yc0NTU1RyYW5zZm9ybSIsInNlbGVjdG9yc0NTU05vZGUiLCJtZXJnZVdpdGhTZWxlY3RvcnNDU1NOb2RlIiwiZnJvbVNlbGVjdG9yc0xpc3RDU1NOb2RlIiwic2VsZWN0b3JzQ1NTVHJhbnNmb3Jtc0Zyb21TZWxlY3RvcnNMaXN0Q1NTTm9kZSIsInNlbGVjdG9yc0xpc3RDU1NUcmFuc2Zvcm0iLCJDU1NUcmFuc2Zvcm0iLCJmcm9tQ1NTTm9kZSIsIm1hcCIsIlNlbGVjdG9yc0NTU1RyYW5zZm9ybSIsImZyb21TZWxlY3RvcnNDU1NOb2RlIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQUtxQkE7OzswREFISTtnRUFDUzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVuQixJQUFBLEFBQU1BLDBDQUFOO2NBQU1BO2FBQUFBLDBCQUNQQyxPQUFPLEVBQUVDLHNCQUFzQjtnQ0FEeEJGOztnQkFFakIsa0JBRmlCQTtZQUVYQzs7UUFFTixNQUFLQyxzQkFBc0IsR0FBR0E7OztrQkFKYkY7O1lBT25CRyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNELHNCQUFzQjtZQUNwQzs7O1lBRUFFLEtBQUFBO21CQUFBQSxTQUFBQSw4QkFBOEJDLG9CQUFvQjtnQkFDaEQsSUFBTUMsb0JBQW9CRCxxQkFBcUJFLG9CQUFvQjtnQkFFbkUsSUFBSSxDQUFDTCxzQkFBc0IsQ0FBQ00sT0FBTyxDQUFDLFNBQUNDO29CQUNuQ0gsa0JBQWtCRSxPQUFPLENBQUMsU0FBQ0U7d0JBQ3pCRCxzQkFBc0JFLHlCQUF5QixDQUFDRDtvQkFDbEQ7Z0JBQ0Y7WUFDRjs7OztZQUVPRSxLQUFBQTttQkFBUCxTQUFPQSx5QkFBeUJQLG9CQUFvQjtnQkFDbEQsSUFBTUosVUFBVUksc0JBQ1ZILHlCQUF5QlcsK0NBQStDUix1QkFDeEVTLDRCQUE0QkMsWUFBWSxDQUFDQyxXQUFXLENBeEJ6Q2hCLDJCQXdCcUVDLFNBQVNDO2dCQUUvRixPQUFPWTtZQUNUOzs7V0EzQm1CZDtFQUFrQ2UsWUFBWTtBQThCbkUsU0FBU0YsK0NBQStDUixvQkFBb0I7SUFDMUUsSUFBTUMsb0JBQW9CRCxxQkFBcUJFLG9CQUFvQixJQUM3REwseUJBQXlCSSxrQkFBa0JXLEdBQUcsQ0FBQyxTQUFDUDtRQUM5QyxJQUFNRCx3QkFBd0JTLGtCQUFxQixDQUFDQyxvQkFBb0IsQ0FBQ1Q7UUFFekUsT0FBT0Q7SUFDVDtJQUVOLE9BQU9QO0FBQ1QifQ==