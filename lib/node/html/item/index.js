"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return IndexItemHTMLNode;
    }
});
var _html = /*#__PURE__*/ _interop_require_default(require("../../../node/html"));
var _index = /*#__PURE__*/ _interop_require_default(require("../../../node/html/text/index"));
var _index1 = /*#__PURE__*/ _interop_require_default(require("../../../node/html/link/index"));
var _ruleNames = require("../../../ruleNames");
var _comma = /*#__PURE__*/ _interop_require_default(require("../text/comma"));
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
var IndexItemHTMLNode = /*#__PURE__*/ function(HTMLNode) {
    _inherits(IndexItemHTMLNode, HTMLNode);
    function IndexItemHTMLNode() {
        _class_call_check(this, IndexItemHTMLNode);
        return _call_super(this, IndexItemHTMLNode, arguments);
    }
    _create_class(IndexItemHTMLNode, [
        {
            key: "getRuleName",
            value: function getRuleName() {
                var ruleName = _ruleNames.INDEX_ITEM_RULE_NAME;
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
            key: "fromIndexItem",
            value: function fromIndexItem(indexItem) {
                var wordOrPhrase = indexItem.getWordOrPhrase(), pageNumbers = indexItem.getPageNumbers(), indexSpanHTMLNode = _index.default.fromWordOrPhrase(wordOrPhrase), childNodes = [
                    indexSpanHTMLNode
                ];
                pageNumbers.forEach(function(pageNumber) {
                    var indexLinkHTMLNOde = _index1.default.fromPageNumber(pageNumber);
                    childNodes.push(indexLinkHTMLNOde);
                    var commaTextHTMLNode = _comma.default.fromNothing();
                    childNodes.push(commaTextHTMLNode);
                });
                childNodes.pop();
                var indexItemHTMLNode = _html.default.fromChildNodes(IndexItemHTMLNode, childNodes);
                return indexItemHTMLNode;
            }
        }
    ]);
    return IndexItemHTMLNode;
}(_html.default);
_define_property(IndexItemHTMLNode, "tagName", "li");
_define_property(IndexItemHTMLNode, "className", "index");

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9ub2RlL2h0bWwvaXRlbS9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IEhUTUxOb2RlIGZyb20gXCIuLi8uLi8uLi9ub2RlL2h0bWxcIjtcbmltcG9ydCBJbmRleFRleHRIVE1MTm9kZSBmcm9tIFwiLi4vLi4vLi4vbm9kZS9odG1sL3RleHQvaW5kZXhcIjtcbmltcG9ydCBJbmRleExpbmtIVE1MTm9kZSBmcm9tIFwiLi4vLi4vLi4vbm9kZS9odG1sL2xpbmsvaW5kZXhcIjtcblxuaW1wb3J0IHsgSU5ERVhfSVRFTV9SVUxFX05BTUUgfSBmcm9tIFwiLi4vLi4vLi4vcnVsZU5hbWVzXCI7XG5pbXBvcnQgQ29tbWFUZXh0SFRNTE5vZGUgZnJvbSBcIi4uL3RleHQvY29tbWFcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW5kZXhJdGVtSFRNTE5vZGUgZXh0ZW5kcyBIVE1MTm9kZSB7XG4gIGdldFJ1bGVOYW1lKCkge1xuICAgIGNvbnN0IHJ1bGVOYW1lID0gSU5ERVhfSVRFTV9SVUxFX05BTUU7XG5cbiAgICByZXR1cm4gcnVsZU5hbWU7XG4gIH1cblxuICBhc1N0cmluZygpIHtcbiAgICBjb25zdCBydWxlTmFtZSA9IHRoaXMuZ2V0UnVsZU5hbWUoKSxcbiAgICAgICAgICBzdHJpbmcgPSBydWxlTmFtZTsgIC8vL1xuXG4gICAgcmV0dXJuIHN0cmluZztcbiAgfVxuXG4gIHN0YXRpYyB0YWdOYW1lID0gXCJsaVwiO1xuXG4gIHN0YXRpYyBjbGFzc05hbWUgPSBcImluZGV4XCI7XG5cbiAgc3RhdGljIGZyb21JbmRleEl0ZW0oaW5kZXhJdGVtKSB7XG4gICAgY29uc3Qgd29yZE9yUGhyYXNlID0gaW5kZXhJdGVtLmdldFdvcmRPclBocmFzZSgpLFxuICAgICAgICAgIHBhZ2VOdW1iZXJzID0gaW5kZXhJdGVtLmdldFBhZ2VOdW1iZXJzKCksXG4gICAgICAgICAgaW5kZXhTcGFuSFRNTE5vZGUgPSBJbmRleFRleHRIVE1MTm9kZS5mcm9tV29yZE9yUGhyYXNlKHdvcmRPclBocmFzZSksXG4gICAgICAgICAgY2hpbGROb2RlcyA9IFtcbiAgICAgICAgICAgIGluZGV4U3BhbkhUTUxOb2RlXG4gICAgICAgICAgXTtcblxuICAgIHBhZ2VOdW1iZXJzLmZvckVhY2goKHBhZ2VOdW1iZXIpID0+IHtcbiAgICAgIGNvbnN0IGluZGV4TGlua0hUTUxOT2RlID0gSW5kZXhMaW5rSFRNTE5vZGUuZnJvbVBhZ2VOdW1iZXIocGFnZU51bWJlcik7XG5cbiAgICAgIGNoaWxkTm9kZXMucHVzaChpbmRleExpbmtIVE1MTk9kZSk7XG5cbiAgICAgIGNvbnN0IGNvbW1hVGV4dEhUTUxOb2RlID0gQ29tbWFUZXh0SFRNTE5vZGUuZnJvbU5vdGhpbmcoKTtcblxuICAgICAgY2hpbGROb2Rlcy5wdXNoKGNvbW1hVGV4dEhUTUxOb2RlKTtcbiAgICB9KTtcblxuICAgIGNoaWxkTm9kZXMucG9wKCk7XG5cbiAgICBjb25zdCBpbmRleEl0ZW1IVE1MTm9kZSA9IEhUTUxOb2RlLmZyb21DaGlsZE5vZGVzKEluZGV4SXRlbUhUTUxOb2RlLCBjaGlsZE5vZGVzKTtcblxuICAgIHJldHVybiBpbmRleEl0ZW1IVE1MTm9kZTtcbiAgfVxufVxuIl0sIm5hbWVzIjpbIkluZGV4SXRlbUhUTUxOb2RlIiwiZ2V0UnVsZU5hbWUiLCJydWxlTmFtZSIsIklOREVYX0lURU1fUlVMRV9OQU1FIiwiYXNTdHJpbmciLCJzdHJpbmciLCJmcm9tSW5kZXhJdGVtIiwiaW5kZXhJdGVtIiwid29yZE9yUGhyYXNlIiwiZ2V0V29yZE9yUGhyYXNlIiwicGFnZU51bWJlcnMiLCJnZXRQYWdlTnVtYmVycyIsImluZGV4U3BhbkhUTUxOb2RlIiwiSW5kZXhUZXh0SFRNTE5vZGUiLCJmcm9tV29yZE9yUGhyYXNlIiwiY2hpbGROb2RlcyIsImZvckVhY2giLCJwYWdlTnVtYmVyIiwiaW5kZXhMaW5rSFRNTE5PZGUiLCJJbmRleExpbmtIVE1MTm9kZSIsImZyb21QYWdlTnVtYmVyIiwicHVzaCIsImNvbW1hVGV4dEhUTUxOb2RlIiwiQ29tbWFUZXh0SFRNTE5vZGUiLCJmcm9tTm90aGluZyIsInBvcCIsImluZGV4SXRlbUhUTUxOb2RlIiwiSFRNTE5vZGUiLCJmcm9tQ2hpbGROb2RlcyIsInRhZ05hbWUiLCJjbGFzc05hbWUiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBU3FCQTs7OzJEQVBBOzREQUNTOzZEQUNBO3lCQUVPOzREQUNQOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVmLElBQUEsQUFBTUEsa0NBQU47Y0FBTUE7YUFBQUE7Z0NBQUFBO2VBQU4sa0JBQU1BOztrQkFBQUE7O1lBQ25CQyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBTUMsV0FBV0MsK0JBQW9CO2dCQUVyQyxPQUFPRDtZQUNUOzs7WUFFQUUsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQU1GLFdBQVcsSUFBSSxDQUFDRCxXQUFXLElBQzNCSSxTQUFTSCxVQUFXLEdBQUc7Z0JBRTdCLE9BQU9HO1lBQ1Q7Ozs7WUFNT0MsS0FBQUE7bUJBQVAsU0FBT0EsY0FBY0MsU0FBUztnQkFDNUIsSUFBTUMsZUFBZUQsVUFBVUUsZUFBZSxJQUN4Q0MsY0FBY0gsVUFBVUksY0FBYyxJQUN0Q0Msb0JBQW9CQyxjQUFpQixDQUFDQyxnQkFBZ0IsQ0FBQ04sZUFDdkRPLGFBQWE7b0JBQ1hIO2lCQUNEO2dCQUVQRixZQUFZTSxPQUFPLENBQUMsU0FBQ0M7b0JBQ25CLElBQU1DLG9CQUFvQkMsZUFBaUIsQ0FBQ0MsY0FBYyxDQUFDSDtvQkFFM0RGLFdBQVdNLElBQUksQ0FBQ0g7b0JBRWhCLElBQU1JLG9CQUFvQkMsY0FBaUIsQ0FBQ0MsV0FBVztvQkFFdkRULFdBQVdNLElBQUksQ0FBQ0M7Z0JBQ2xCO2dCQUVBUCxXQUFXVSxHQUFHO2dCQUVkLElBQU1DLG9CQUFvQkMsYUFBUSxDQUFDQyxjQUFjLENBdENoQzVCLG1CQXNDb0RlO2dCQUVyRSxPQUFPVztZQUNUOzs7V0F6Q21CMUI7RUFBMEIyQixhQUFRO0FBY3JELGlCQWRtQjNCLG1CQWNaNkIsV0FBVTtBQUVqQixpQkFoQm1CN0IsbUJBZ0JaOEIsYUFBWSJ9