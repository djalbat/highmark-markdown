"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return PageNumberTMLTransform;
    }
});
var _html = /*#__PURE__*/ _interop_require_default(require("../../transform/html"));
var _pageNumber = /*#__PURE__*/ _interop_require_default(require("../../node/html/pageNumber"));
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
var PageNumberTMLTransform = /*#__PURE__*/ function(HTMLTransform) {
    _inherits(PageNumberTMLTransform, HTMLTransform);
    function PageNumberTMLTransform() {
        _class_call_check(this, PageNumberTMLTransform);
        return _call_super(this, PageNumberTMLTransform, arguments);
    }
    _create_class(PageNumberTMLTransform, [
        {
            key: "getPageNumberHTMLNode",
            value: function getPageNumberHTMLNode() {
                var htmlNode = this.getHTMLNode(), pageNumberHTNONode = htmlNode; ///
                return pageNumberHTNONode;
            }
        },
        {
            key: "appendToDivisionHTMLNode",
            value: function appendToDivisionHTMLNode(divisionHTMLNode) {
                var parentHTMLNode = divisionHTMLNode; ///
                this.appendTo(parentHTMLNode);
            }
        }
    ], [
        {
            key: "fromPageNumber",
            value: function fromPageNumber(pageNumber) {
                var pageNumberHTMLNode = _pageNumber.default.fromPageNumber(pageNumber), htmlNode = pageNumberHTMLNode, paragraphHTMLTransform = _html.default.fromHTMLNode(PageNumberTMLTransform, htmlNode);
                return paragraphHTMLTransform;
            }
        }
    ]);
    return PageNumberTMLTransform;
}(_html.default);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy90cmFuc2Zvcm0vaHRtbC9wYWdlTnVtYmVyLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgSFRNTFRyYW5zZm9ybSBmcm9tIFwiLi4vLi4vdHJhbnNmb3JtL2h0bWxcIlxuaW1wb3J0IFBhZ2VOdW1iZXJIVE1MTm9kZSBmcm9tIFwiLi4vLi4vbm9kZS9odG1sL3BhZ2VOdW1iZXJcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGFnZU51bWJlclRNTFRyYW5zZm9ybSBleHRlbmRzIEhUTUxUcmFuc2Zvcm0ge1xuICBnZXRQYWdlTnVtYmVySFRNTE5vZGUoKSB7XG4gICAgY29uc3QgaHRtbE5vZGUgPSB0aGlzLmdldEhUTUxOb2RlKCksXG4gICAgICAgICAgcGFnZU51bWJlckhUTk9Ob2RlID0gaHRtbE5vZGU7IC8vL1xuXG4gICAgcmV0dXJuIHBhZ2VOdW1iZXJIVE5PTm9kZTtcbiAgfVxuXG4gIGFwcGVuZFRvRGl2aXNpb25IVE1MTm9kZShkaXZpc2lvbkhUTUxOb2RlKSB7XG4gICAgY29uc3QgcGFyZW50SFRNTE5vZGUgPSBkaXZpc2lvbkhUTUxOb2RlOyAgLy8vXG5cbiAgICB0aGlzLmFwcGVuZFRvKHBhcmVudEhUTUxOb2RlKTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUGFnZU51bWJlcihwYWdlTnVtYmVyKSB7XG4gICAgY29uc3QgcGFnZU51bWJlckhUTUxOb2RlID0gUGFnZU51bWJlckhUTUxOb2RlLmZyb21QYWdlTnVtYmVyKHBhZ2VOdW1iZXIpLFxuICAgICAgICAgIGh0bWxOb2RlID0gcGFnZU51bWJlckhUTUxOb2RlLCAvLy9cbiAgICAgICAgICBwYXJhZ3JhcGhIVE1MVHJhbnNmb3JtID0gSFRNTFRyYW5zZm9ybS5mcm9tSFRNTE5vZGUoUGFnZU51bWJlclRNTFRyYW5zZm9ybSwgaHRtbE5vZGUpO1xuXG4gICAgcmV0dXJuIHBhcmFncmFwaEhUTUxUcmFuc2Zvcm07XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJQYWdlTnVtYmVyVE1MVHJhbnNmb3JtIiwiZ2V0UGFnZU51bWJlckhUTUxOb2RlIiwiaHRtbE5vZGUiLCJnZXRIVE1MTm9kZSIsInBhZ2VOdW1iZXJIVE5PTm9kZSIsImFwcGVuZFRvRGl2aXNpb25IVE1MTm9kZSIsImRpdmlzaW9uSFRNTE5vZGUiLCJwYXJlbnRIVE1MTm9kZSIsImFwcGVuZFRvIiwiZnJvbVBhZ2VOdW1iZXIiLCJwYWdlTnVtYmVyIiwicGFnZU51bWJlckhUTUxOb2RlIiwiUGFnZU51bWJlckhUTUxOb2RlIiwicGFyYWdyYXBoSFRNTFRyYW5zZm9ybSIsIkhUTUxUcmFuc2Zvcm0iLCJmcm9tSFRNTE5vZGUiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBS3FCQTs7OzJEQUhLO2lFQUNLOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRWhCLElBQUEsQUFBTUEsdUNBQU47Y0FBTUE7YUFBQUE7Z0NBQUFBO1FBQU4sT0FBQSxrQkFBTUE7O2tCQUFBQTs7WUFDbkJDLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFNQyxXQUFXLElBQUksQ0FBQ0MsV0FBVyxJQUMzQkMscUJBQXFCRixVQUFVLEdBQUc7Z0JBRXhDLE9BQU9FO1lBQ1Q7OztZQUVBQyxLQUFBQTttQkFBQUEsU0FBQUEseUJBQXlCQyxnQkFBZ0I7Z0JBQ3ZDLElBQU1DLGlCQUFpQkQsa0JBQW1CLEdBQUc7Z0JBRTdDLElBQUksQ0FBQ0UsUUFBUSxDQUFDRDtZQUNoQjs7OztZQUVPRSxLQUFBQTttQkFBUCxTQUFPQSxlQUFlQyxVQUFVO2dCQUM5QixJQUFNQyxxQkFBcUJDLG1CQUFrQixDQUFDSCxjQUFjLENBQUNDLGFBQ3ZEUixXQUFXUyxvQkFDWEUseUJBQXlCQyxhQUFhLENBQUNDLFlBQVksQ0FqQnhDZix3QkFpQmlFRTtnQkFFbEYsT0FBT1c7WUFDVDs7O1dBcEJtQmI7RUFBK0JjLGFBQWEifQ==