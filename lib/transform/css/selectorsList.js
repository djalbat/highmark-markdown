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
                var selectorsCSSNodes = selectorsListCSSNode.getSelectorsCSSNodes(), selectorsCSSTransforms = selectorsCSSTransformsFromSelectorsListCSSNode(selectorsListCSSNode);
                selectorsCSSNodes.forEach(function(selectorsCSSNode) {
                    _this.selectorsCSSTransforms.forEach(function(selectorsCSSTransform) {
                        selectorsCSSTransform = selectorsCSSTransform.mergeWithSelectorsCSSNode(selectorsCSSNode); ///
                        selectorsCSSTransform.appendToSelectorsListCSSNode(selectorsListCSSNode);
                    });
                });
                selectorsCSSTransforms.forEach(function(selectorsCSSTransform) {
                    selectorsCSSTransform.remove();
                });
            }
        }
    ], [
        {
            key: "fromRuleSetCSSNode",
            value: function fromRuleSetCSSNode(ruleSetCSSNode) {
                var selectorsListCSSNode = ruleSetCSSNode.getSelectorsListCSSNode(), cssNode = null, selectorsCSSTransforms = selectorsCSSTransformsFromSelectorsListCSSNode(selectorsListCSSNode), selectorsListCSSTransform = _css.default.fromCSSNode(SelectorsListCSSTransform, cssNode, selectorsCSSTransforms);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy90cmFuc2Zvcm0vY3NzL3NlbGVjdG9yc0xpc3QuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBDU1NUcmFuc2Zvcm0gZnJvbSBcIi4uLy4uL3RyYW5zZm9ybS9jc3NcIlxuaW1wb3J0IFNlbGVjdG9yc0NTU1RyYW5zZm9ybSBmcm9tIFwiLi9zZWxlY3RvcnNcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2VsZWN0b3JzTGlzdENTU1RyYW5zZm9ybSBleHRlbmRzIENTU1RyYW5zZm9ybSB7XG4gIGNvbnN0cnVjdG9yKGNzc05vZGUsIHNlbGVjdG9yc0NTU1RyYW5zZm9ybXMpIHtcbiAgICBzdXBlcihjc3NOb2RlKTtcblxuICAgIHRoaXMuc2VsZWN0b3JzQ1NTVHJhbnNmb3JtcyA9IHNlbGVjdG9yc0NTU1RyYW5zZm9ybXM7XG4gIH1cblxuICBnZXRTZWxlY3RvcnNDU1NUcmFuc2Zvcm1zKCkge1xuICAgIHJldHVybiB0aGlzLnNlbGVjdG9yc0NTU1RyYW5zZm9ybXM7XG4gIH1cblxuICBtZXJnZVdpdGhTZWxlY3RvcnNMaXN0Q1NTTm9kZShzZWxlY3RvcnNMaXN0Q1NTTm9kZSkge1xuICAgIGNvbnN0IHNlbGVjdG9yc0NTU05vZGVzID0gc2VsZWN0b3JzTGlzdENTU05vZGUuZ2V0U2VsZWN0b3JzQ1NTTm9kZXMoKSxcbiAgICAgICAgICBzZWxlY3RvcnNDU1NUcmFuc2Zvcm1zID0gc2VsZWN0b3JzQ1NTVHJhbnNmb3Jtc0Zyb21TZWxlY3RvcnNMaXN0Q1NTTm9kZShzZWxlY3RvcnNMaXN0Q1NTTm9kZSk7XG5cbiAgICBzZWxlY3RvcnNDU1NOb2Rlcy5mb3JFYWNoKChzZWxlY3RvcnNDU1NOb2RlKSA9PiB7XG4gICAgICB0aGlzLnNlbGVjdG9yc0NTU1RyYW5zZm9ybXMuZm9yRWFjaCgoc2VsZWN0b3JzQ1NTVHJhbnNmb3JtKSA9PiB7XG4gICAgICAgIHNlbGVjdG9yc0NTU1RyYW5zZm9ybSA9IHNlbGVjdG9yc0NTU1RyYW5zZm9ybS5tZXJnZVdpdGhTZWxlY3RvcnNDU1NOb2RlKHNlbGVjdG9yc0NTU05vZGUpOyAgLy8vXG5cbiAgICAgICAgc2VsZWN0b3JzQ1NTVHJhbnNmb3JtLmFwcGVuZFRvU2VsZWN0b3JzTGlzdENTU05vZGUoc2VsZWN0b3JzTGlzdENTU05vZGUpO1xuICAgICAgfSk7XG4gICAgfSk7XG5cbiAgICBzZWxlY3RvcnNDU1NUcmFuc2Zvcm1zLmZvckVhY2goKHNlbGVjdG9yc0NTU1RyYW5zZm9ybSkgPT4ge1xuICAgICAgc2VsZWN0b3JzQ1NTVHJhbnNmb3JtLnJlbW92ZSgpO1xuICAgIH0pO1xuICB9XG5cbiAgc3RhdGljIGZyb21SdWxlU2V0Q1NTTm9kZShydWxlU2V0Q1NTTm9kZSkge1xuICAgIGNvbnN0IHNlbGVjdG9yc0xpc3RDU1NOb2RlID0gcnVsZVNldENTU05vZGUuZ2V0U2VsZWN0b3JzTGlzdENTU05vZGUoKSxcbiAgICAgICAgICBjc3NOb2RlID0gbnVsbCwgLy8vXG4gICAgICAgICAgc2VsZWN0b3JzQ1NTVHJhbnNmb3JtcyA9IHNlbGVjdG9yc0NTU1RyYW5zZm9ybXNGcm9tU2VsZWN0b3JzTGlzdENTU05vZGUoc2VsZWN0b3JzTGlzdENTU05vZGUpLFxuICAgICAgICAgIHNlbGVjdG9yc0xpc3RDU1NUcmFuc2Zvcm0gPSBDU1NUcmFuc2Zvcm0uZnJvbUNTU05vZGUoU2VsZWN0b3JzTGlzdENTU1RyYW5zZm9ybSwgY3NzTm9kZSwgc2VsZWN0b3JzQ1NTVHJhbnNmb3Jtcyk7XG5cbiAgICByZXR1cm4gc2VsZWN0b3JzTGlzdENTU1RyYW5zZm9ybTtcbiAgfVxufVxuXG5mdW5jdGlvbiBzZWxlY3RvcnNDU1NUcmFuc2Zvcm1zRnJvbVNlbGVjdG9yc0xpc3RDU1NOb2RlKHNlbGVjdG9yc0xpc3RDU1NOb2RlKSB7XG4gIGNvbnN0IHNlbGVjdG9yc0NTU05vZGVzID0gc2VsZWN0b3JzTGlzdENTU05vZGUuZ2V0U2VsZWN0b3JzQ1NTTm9kZXMoKSxcbiAgICAgICAgc2VsZWN0b3JzQ1NTVHJhbnNmb3JtcyA9IHNlbGVjdG9yc0NTU05vZGVzLm1hcCgoc2VsZWN0b3JzQ1NTTm9kZSkgPT4ge1xuICAgICAgICAgIGNvbnN0IHNlbGVjdG9yc0NTU1RyYW5zZm9ybSA9IFNlbGVjdG9yc0NTU1RyYW5zZm9ybS5mcm9tU2VsZWN0b3JzQ1NTTm9kZShzZWxlY3RvcnNDU1NOb2RlKTtcblxuICAgICAgICAgIHJldHVybiBzZWxlY3RvcnNDU1NUcmFuc2Zvcm07XG4gICAgICAgIH0pO1xuXG4gIHJldHVybiBzZWxlY3RvcnNDU1NUcmFuc2Zvcm1zO1xufSJdLCJuYW1lcyI6WyJTZWxlY3RvcnNMaXN0Q1NTVHJhbnNmb3JtIiwiY3NzTm9kZSIsInNlbGVjdG9yc0NTU1RyYW5zZm9ybXMiLCJnZXRTZWxlY3RvcnNDU1NUcmFuc2Zvcm1zIiwibWVyZ2VXaXRoU2VsZWN0b3JzTGlzdENTU05vZGUiLCJzZWxlY3RvcnNMaXN0Q1NTTm9kZSIsInNlbGVjdG9yc0NTU05vZGVzIiwiZ2V0U2VsZWN0b3JzQ1NTTm9kZXMiLCJzZWxlY3RvcnNDU1NUcmFuc2Zvcm1zRnJvbVNlbGVjdG9yc0xpc3RDU1NOb2RlIiwiZm9yRWFjaCIsInNlbGVjdG9yc0NTU05vZGUiLCJzZWxlY3RvcnNDU1NUcmFuc2Zvcm0iLCJtZXJnZVdpdGhTZWxlY3RvcnNDU1NOb2RlIiwiYXBwZW5kVG9TZWxlY3RvcnNMaXN0Q1NTTm9kZSIsInJlbW92ZSIsImZyb21SdWxlU2V0Q1NTTm9kZSIsInJ1bGVTZXRDU1NOb2RlIiwiZ2V0U2VsZWN0b3JzTGlzdENTU05vZGUiLCJzZWxlY3RvcnNMaXN0Q1NTVHJhbnNmb3JtIiwiQ1NTVHJhbnNmb3JtIiwiZnJvbUNTU05vZGUiLCJtYXAiLCJTZWxlY3RvcnNDU1NUcmFuc2Zvcm0iLCJmcm9tU2VsZWN0b3JzQ1NTTm9kZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFLcUJBOzs7MERBSEk7Z0VBQ1M7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFbkIsSUFBQSxBQUFNQSwwQ0FBTjtjQUFNQTthQUFBQSwwQkFDUEMsT0FBTyxFQUFFQyxzQkFBc0I7Z0NBRHhCRjs7Z0JBRWpCLGtCQUZpQkE7WUFFWEM7O1FBRU4sTUFBS0Msc0JBQXNCLEdBQUdBOzs7a0JBSmJGOztZQU9uQkcsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDRCxzQkFBc0I7WUFDcEM7OztZQUVBRSxLQUFBQTttQkFBQUEsU0FBQUEsOEJBQThCQyxvQkFBb0I7O2dCQUNoRCxJQUFNQyxvQkFBb0JELHFCQUFxQkUsb0JBQW9CLElBQzdETCx5QkFBeUJNLCtDQUErQ0g7Z0JBRTlFQyxrQkFBa0JHLE9BQU8sQ0FBQyxTQUFDQztvQkFDekIsTUFBS1Isc0JBQXNCLENBQUNPLE9BQU8sQ0FBQyxTQUFDRTt3QkFDbkNBLHdCQUF3QkEsc0JBQXNCQyx5QkFBeUIsQ0FBQ0YsbUJBQW9CLEdBQUc7d0JBRS9GQyxzQkFBc0JFLDRCQUE0QixDQUFDUjtvQkFDckQ7Z0JBQ0Y7Z0JBRUFILHVCQUF1Qk8sT0FBTyxDQUFDLFNBQUNFO29CQUM5QkEsc0JBQXNCRyxNQUFNO2dCQUM5QjtZQUNGOzs7O1lBRU9DLEtBQUFBO21CQUFQLFNBQU9BLG1CQUFtQkMsY0FBYztnQkFDdEMsSUFBTVgsdUJBQXVCVyxlQUFlQyx1QkFBdUIsSUFDN0RoQixVQUFVLE1BQ1ZDLHlCQUF5Qk0sK0NBQStDSCx1QkFDeEVhLDRCQUE0QkMsWUFBWSxDQUFDQyxXQUFXLENBaEN6Q3BCLDJCQWdDcUVDLFNBQVNDO2dCQUUvRixPQUFPZ0I7WUFDVDs7O1dBbkNtQmxCO0VBQWtDbUIsWUFBWTtBQXNDbkUsU0FBU1gsK0NBQStDSCxvQkFBb0I7SUFDMUUsSUFBTUMsb0JBQW9CRCxxQkFBcUJFLG9CQUFvQixJQUM3REwseUJBQXlCSSxrQkFBa0JlLEdBQUcsQ0FBQyxTQUFDWDtRQUM5QyxJQUFNQyx3QkFBd0JXLGtCQUFxQixDQUFDQyxvQkFBb0IsQ0FBQ2I7UUFFekUsT0FBT0M7SUFDVDtJQUVOLE9BQU9UO0FBQ1QifQ==