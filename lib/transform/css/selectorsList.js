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
                var _this = this;
                var selectorsCSSNodes = selectorsListCSSNode.getSelectorsCSSNodes();
                selectorsCSSNodes.forEach(function(selectorsCSSNode) {
                    _this.selectorsCSSTransforms.forEach(function(selectorsCSSTransform) {
                    // selectorsCSSTransform.mergeWithSelectorsCSSNode(selectorsCSSNode);
                    });
                });
            }
        },
        {
            key: "prependToRuleSetCSSNode",
            value: function prependToRuleSetCSSNode(ruleSetCSSNode) {
                var parentCSSNode = ruleSetCSSNode, clone = true;
                this.prependTo(parentCSSNode, clone);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy90cmFuc2Zvcm0vY3NzL3NlbGVjdG9yc0xpc3QuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBDU1NUcmFuc2Zvcm0gZnJvbSBcIi4uLy4uL3RyYW5zZm9ybS9jc3NcIlxuaW1wb3J0IFNlbGVjdG9yc0NTU1RyYW5zZm9ybSBmcm9tIFwiLi9zZWxlY3RvcnNcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2VsZWN0b3JzTGlzdENTU1RyYW5zZm9ybSBleHRlbmRzIENTU1RyYW5zZm9ybSB7XG4gIGNvbnN0cnVjdG9yKGNzc05vZGUsIHNlbGVjdG9yc0NTU1RyYW5zZm9ybXMpIHtcbiAgICBzdXBlcihjc3NOb2RlKTtcblxuICAgIHRoaXMuc2VsZWN0b3JzQ1NTVHJhbnNmb3JtcyA9IHNlbGVjdG9yc0NTU1RyYW5zZm9ybXM7XG4gIH1cblxuICBnZXRTZWxlY3RvcnNDU1NUcmFuc2Zvcm1zKCkge1xuICAgIHJldHVybiB0aGlzLnNlbGVjdG9yc0NTU1RyYW5zZm9ybXM7XG4gIH1cblxuICBtZXJnZVdpdGhTZWxlY3RvcnNMaXN0Q1NTTm9kZShzZWxlY3RvcnNMaXN0Q1NTTm9kZSkge1xuICAgIGNvbnN0IHNlbGVjdG9yc0NTU05vZGVzID0gc2VsZWN0b3JzTGlzdENTU05vZGUuZ2V0U2VsZWN0b3JzQ1NTTm9kZXMoKTtcblxuICAgIHNlbGVjdG9yc0NTU05vZGVzLmZvckVhY2goKHNlbGVjdG9yc0NTU05vZGUpID0+IHtcbiAgICAgIHRoaXMuc2VsZWN0b3JzQ1NTVHJhbnNmb3Jtcy5mb3JFYWNoKChzZWxlY3RvcnNDU1NUcmFuc2Zvcm0pID0+IHtcbiAgICAgICAgLy8gc2VsZWN0b3JzQ1NTVHJhbnNmb3JtLm1lcmdlV2l0aFNlbGVjdG9yc0NTU05vZGUoc2VsZWN0b3JzQ1NTTm9kZSk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIHByZXBlbmRUb1J1bGVTZXRDU1NOb2RlKHJ1bGVTZXRDU1NOb2RlKSB7XG4gICAgY29uc3QgcGFyZW50Q1NTTm9kZSA9IHJ1bGVTZXRDU1NOb2RlLCAvLy9cbiAgICAgICAgICBjbG9uZSA9IHRydWU7XG5cbiAgICB0aGlzLnByZXBlbmRUbyhwYXJlbnRDU1NOb2RlLCBjbG9uZSk7XG4gIH1cblxuICBzdGF0aWMgZnJvbVNlbGVjdG9yc0xpc3RDU1NOb2RlKHNlbGVjdG9yc0xpc3RDU1NOb2RlKSB7XG4gICAgY29uc3QgY3NzTm9kZSA9IHNlbGVjdG9yc0xpc3RDU1NOb2RlLCAvLy9cbiAgICAgICAgICBzZWxlY3RvcnNDU1NUcmFuc2Zvcm1zID0gc2VsZWN0b3JzQ1NTVHJhbnNmb3Jtc0Zyb21TZWxlY3RvcnNMaXN0Q1NTTm9kZShzZWxlY3RvcnNMaXN0Q1NTTm9kZSksXG4gICAgICAgICAgc2VsZWN0b3JzTGlzdENTU1RyYW5zZm9ybSA9IENTU1RyYW5zZm9ybS5mcm9tQ1NTTm9kZShTZWxlY3RvcnNMaXN0Q1NTVHJhbnNmb3JtLCBjc3NOb2RlLCBzZWxlY3RvcnNDU1NUcmFuc2Zvcm1zKTtcblxuICAgIHJldHVybiBzZWxlY3RvcnNMaXN0Q1NTVHJhbnNmb3JtO1xuICB9XG59XG5cbmZ1bmN0aW9uIHNlbGVjdG9yc0NTU1RyYW5zZm9ybXNGcm9tU2VsZWN0b3JzTGlzdENTU05vZGUoc2VsZWN0b3JzTGlzdENTU05vZGUpIHtcbiAgY29uc3Qgc2VsZWN0b3JzQ1NTTm9kZXMgPSBzZWxlY3RvcnNMaXN0Q1NTTm9kZS5nZXRTZWxlY3RvcnNDU1NOb2RlcygpLFxuICAgICAgICBzZWxlY3RvcnNDU1NUcmFuc2Zvcm1zID0gc2VsZWN0b3JzQ1NTTm9kZXMubWFwKChzZWxlY3RvcnNDU1NOb2RlKSA9PiB7XG4gICAgICAgICAgY29uc3Qgc2VsZWN0b3JzQ1NTVHJhbnNmb3JtID0gU2VsZWN0b3JzQ1NTVHJhbnNmb3JtLmZyb21TZWxlY3RvcnNDU1NOb2RlKHNlbGVjdG9yc0NTU05vZGUpO1xuXG4gICAgICAgICAgcmV0dXJuIHNlbGVjdG9yc0NTU1RyYW5zZm9ybTtcbiAgICAgICAgfSk7XG5cbiAgcmV0dXJuIHNlbGVjdG9yc0NTU1RyYW5zZm9ybXM7XG59Il0sIm5hbWVzIjpbIlNlbGVjdG9yc0xpc3RDU1NUcmFuc2Zvcm0iLCJjc3NOb2RlIiwic2VsZWN0b3JzQ1NTVHJhbnNmb3JtcyIsImdldFNlbGVjdG9yc0NTU1RyYW5zZm9ybXMiLCJtZXJnZVdpdGhTZWxlY3RvcnNMaXN0Q1NTTm9kZSIsInNlbGVjdG9yc0xpc3RDU1NOb2RlIiwic2VsZWN0b3JzQ1NTTm9kZXMiLCJnZXRTZWxlY3RvcnNDU1NOb2RlcyIsImZvckVhY2giLCJzZWxlY3RvcnNDU1NOb2RlIiwic2VsZWN0b3JzQ1NTVHJhbnNmb3JtIiwicHJlcGVuZFRvUnVsZVNldENTU05vZGUiLCJydWxlU2V0Q1NTTm9kZSIsInBhcmVudENTU05vZGUiLCJjbG9uZSIsInByZXBlbmRUbyIsImZyb21TZWxlY3RvcnNMaXN0Q1NTTm9kZSIsInNlbGVjdG9yc0NTU1RyYW5zZm9ybXNGcm9tU2VsZWN0b3JzTGlzdENTU05vZGUiLCJzZWxlY3RvcnNMaXN0Q1NTVHJhbnNmb3JtIiwiQ1NTVHJhbnNmb3JtIiwiZnJvbUNTU05vZGUiLCJtYXAiLCJTZWxlY3RvcnNDU1NUcmFuc2Zvcm0iLCJmcm9tU2VsZWN0b3JzQ1NTTm9kZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFLcUJBOzs7MERBSEk7Z0VBQ1M7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFbkIsSUFBQSxBQUFNQSwwQ0FBTjtjQUFNQTthQUFBQSwwQkFDUEMsT0FBTyxFQUFFQyxzQkFBc0I7Z0NBRHhCRjs7Z0JBRWpCLGtCQUZpQkE7WUFFWEM7O1FBRU4sTUFBS0Msc0JBQXNCLEdBQUdBOzs7a0JBSmJGOztZQU9uQkcsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDRCxzQkFBc0I7WUFDcEM7OztZQUVBRSxLQUFBQTttQkFBQUEsU0FBQUEsOEJBQThCQyxvQkFBb0I7O2dCQUNoRCxJQUFNQyxvQkFBb0JELHFCQUFxQkUsb0JBQW9CO2dCQUVuRUQsa0JBQWtCRSxPQUFPLENBQUMsU0FBQ0M7b0JBQ3pCLE1BQUtQLHNCQUFzQixDQUFDTSxPQUFPLENBQUMsU0FBQ0U7b0JBQ25DLHFFQUFxRTtvQkFDdkU7Z0JBQ0Y7WUFDRjs7O1lBRUFDLEtBQUFBO21CQUFBQSxTQUFBQSx3QkFBd0JDLGNBQWM7Z0JBQ3BDLElBQU1DLGdCQUFnQkQsZ0JBQ2hCRSxRQUFRO2dCQUVkLElBQUksQ0FBQ0MsU0FBUyxDQUFDRixlQUFlQztZQUNoQzs7OztZQUVPRSxLQUFBQTttQkFBUCxTQUFPQSx5QkFBeUJYLG9CQUFvQjtnQkFDbEQsSUFBTUosVUFBVUksc0JBQ1ZILHlCQUF5QmUsK0NBQStDWix1QkFDeEVhLDRCQUE0QkMsWUFBWSxDQUFDQyxXQUFXLENBL0J6Q3BCLDJCQStCcUVDLFNBQVNDO2dCQUUvRixPQUFPZ0I7WUFDVDs7O1dBbENtQmxCO0VBQWtDbUIsWUFBWTtBQXFDbkUsU0FBU0YsK0NBQStDWixvQkFBb0I7SUFDMUUsSUFBTUMsb0JBQW9CRCxxQkFBcUJFLG9CQUFvQixJQUM3REwseUJBQXlCSSxrQkFBa0JlLEdBQUcsQ0FBQyxTQUFDWjtRQUM5QyxJQUFNQyx3QkFBd0JZLGtCQUFxQixDQUFDQyxvQkFBb0IsQ0FBQ2Q7UUFFekUsT0FBT0M7SUFDVDtJQUVOLE9BQU9SO0FBQ1QifQ==