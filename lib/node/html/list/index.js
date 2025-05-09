"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return IndexListHTMLNode;
    }
});
var _html = /*#__PURE__*/ _interop_require_default(require("../../../node/html"));
var _ruleNames = require("../../../ruleNames");
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
function _define_property(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else {
        obj[key] = value;
    }
    return obj;
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
var IndexListHTMLNode = /*#__PURE__*/ function(HTMLNode) {
    _inherits(IndexListHTMLNode, HTMLNode);
    function IndexListHTMLNode() {
        _class_call_check(this, IndexListHTMLNode);
        return _call_super(this, IndexListHTMLNode, arguments);
    }
    _create_class(IndexListHTMLNode, [
        {
            key: "getRuleName",
            value: function getRuleName() {
                var ruleName = _ruleNames.INDEX_LIST_RULE_NAME;
                return ruleName;
            }
        },
        {
            key: "asString",
            value: function asString() {
                var ruleName = this.getRuleName(), string = ruleName; ///
                return string;
            }
        }
    ], [
        {
            key: "fromIndexItemHTMLTransforms",
            value: function fromIndexItemHTMLTransforms(indexItemHTMLTransforms) {
                var indexItemHTMLNodes = indexItemHTMLTransforms.map(function(indexItemHTMLTransform) {
                    var indexListHTMLNode = indexItemHTMLTransform.getIndexItemHTMLNode();
                    return indexListHTMLNode;
                }), childNodes = indexItemHTMLNodes, indexListHTMLNode = _html.default.fromChildNodes(IndexListHTMLNode, childNodes);
                return indexListHTMLNode;
            }
        }
    ]);
    return IndexListHTMLNode;
}(_html.default);
_define_property(IndexListHTMLNode, "tagName", "ul");
_define_property(IndexListHTMLNode, "className", "index");

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9ub2RlL2h0bWwvbGlzdC9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IEhUTUxOb2RlIGZyb20gXCIuLi8uLi8uLi9ub2RlL2h0bWxcIjtcblxuaW1wb3J0IHsgSU5ERVhfTElTVF9SVUxFX05BTUUgfSBmcm9tIFwiLi4vLi4vLi4vcnVsZU5hbWVzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEluZGV4TGlzdEhUTUxOb2RlIGV4dGVuZHMgSFRNTE5vZGUge1xuICBnZXRSdWxlTmFtZSgpIHtcbiAgICBjb25zdCBydWxlTmFtZSA9IElOREVYX0xJU1RfUlVMRV9OQU1FO1xuXG4gICAgcmV0dXJuIHJ1bGVOYW1lO1xuICB9XG5cbiAgYXNTdHJpbmcoKSB7XG4gICAgY29uc3QgcnVsZU5hbWUgPSB0aGlzLmdldFJ1bGVOYW1lKCksXG4gICAgICAgICAgc3RyaW5nID0gcnVsZU5hbWU7ICAvLy9cblxuICAgIHJldHVybiBzdHJpbmc7XG4gIH1cblxuICBzdGF0aWMgdGFnTmFtZSA9IFwidWxcIjtcblxuICBzdGF0aWMgY2xhc3NOYW1lID0gXCJpbmRleFwiO1xuXG4gIHN0YXRpYyBmcm9tSW5kZXhJdGVtSFRNTFRyYW5zZm9ybXMoaW5kZXhJdGVtSFRNTFRyYW5zZm9ybXMpIHtcbiAgICBjb25zdCBpbmRleEl0ZW1IVE1MTm9kZXMgPSBpbmRleEl0ZW1IVE1MVHJhbnNmb3Jtcy5tYXAoKGluZGV4SXRlbUhUTUxUcmFuc2Zvcm0pID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGluZGV4TGlzdEhUTUxOb2RlID0gaW5kZXhJdGVtSFRNTFRyYW5zZm9ybS5nZXRJbmRleEl0ZW1IVE1MTm9kZSgpO1xuXG4gICAgICAgICAgICByZXR1cm4gaW5kZXhMaXN0SFRNTE5vZGU7XG4gICAgICAgICAgfSksXG4gICAgICAgICAgY2hpbGROb2RlcyA9IGluZGV4SXRlbUhUTUxOb2RlcyxcbiAgICAgICAgICBpbmRleExpc3RIVE1MTm9kZSA9IEhUTUxOb2RlLmZyb21DaGlsZE5vZGVzKEluZGV4TGlzdEhUTUxOb2RlLCBjaGlsZE5vZGVzKTtcblxuICAgIHJldHVybiBpbmRleExpc3RIVE1MTm9kZTtcbiAgfVxufVxuIl0sIm5hbWVzIjpbIkluZGV4TGlzdEhUTUxOb2RlIiwiZ2V0UnVsZU5hbWUiLCJydWxlTmFtZSIsIklOREVYX0xJU1RfUlVMRV9OQU1FIiwiYXNTdHJpbmciLCJzdHJpbmciLCJmcm9tSW5kZXhJdGVtSFRNTFRyYW5zZm9ybXMiLCJpbmRleEl0ZW1IVE1MVHJhbnNmb3JtcyIsImluZGV4SXRlbUhUTUxOb2RlcyIsIm1hcCIsImluZGV4SXRlbUhUTUxUcmFuc2Zvcm0iLCJpbmRleExpc3RIVE1MTm9kZSIsImdldEluZGV4SXRlbUhUTUxOb2RlIiwiY2hpbGROb2RlcyIsIkhUTUxOb2RlIiwiZnJvbUNoaWxkTm9kZXMiLCJ0YWdOYW1lIiwiY2xhc3NOYW1lIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQU1xQkE7OzsyREFKQTt5QkFFZ0I7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRXRCLElBQUEsQUFBTUEsa0NBQU47Y0FBTUE7YUFBQUE7Z0NBQUFBO2VBQU4sa0JBQU1BOztrQkFBQUE7O1lBQ25CQyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBTUMsV0FBV0MsK0JBQW9CO2dCQUVyQyxPQUFPRDtZQUNUOzs7WUFFQUUsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQU1GLFdBQVcsSUFBSSxDQUFDRCxXQUFXLElBQzNCSSxTQUFTSCxVQUFXLEdBQUc7Z0JBRTdCLE9BQU9HO1lBQ1Q7Ozs7WUFNT0MsS0FBQUE7bUJBQVAsU0FBT0EsNEJBQTRCQyx1QkFBdUI7Z0JBQ3hELElBQU1DLHFCQUFxQkQsd0JBQXdCRSxHQUFHLENBQUMsU0FBQ0M7b0JBQ2hELElBQU1DLG9CQUFvQkQsdUJBQXVCRSxvQkFBb0I7b0JBRXJFLE9BQU9EO2dCQUNULElBQ0FFLGFBQWFMLG9CQUNiRyxvQkFBb0JHLGFBQVEsQ0FBQ0MsY0FBYyxDQXpCaENmLG1CQXlCb0RhO2dCQUVyRSxPQUFPRjtZQUNUOzs7V0E1Qm1CWDtFQUEwQmMsYUFBUTtBQWNyRCxpQkFkbUJkLG1CQWNaZ0IsV0FBVTtBQUVqQixpQkFoQm1CaEIsbUJBZ0JaaUIsYUFBWSJ9