"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return LineMarkdownNode;
    }
});
var _markdown = /*#__PURE__*/ _interop_require_default(require("../../node/markdown"));
var _childNodes = require("../../utilities/childNodes");
function _assert_this_initialized(self) {
    if (self === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return self;
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
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;
    try {
        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
        return true;
    } catch (e) {
        return false;
    }
}
function _create_super(Derived) {
    var hasNativeReflectConstruct = _is_native_reflect_construct();
    return function _createSuperInternal() {
        var Super = _get_prototype_of(Derived), result;
        if (hasNativeReflectConstruct) {
            var NewTarget = _get_prototype_of(this).constructor;
            result = Reflect.construct(Super, arguments, NewTarget);
        } else {
            result = Super.apply(this, arguments);
        }
        return _possible_constructor_return(this, result);
    };
}
var LineMarkdownNode = /*#__PURE__*/ function(MarkdownNode) {
    _inherits(LineMarkdownNode, MarkdownNode);
    var _super = _create_super(LineMarkdownNode);
    function LineMarkdownNode() {
        _class_call_check(this, LineMarkdownNode);
        return _super.apply(this, arguments);
    }
    _create_class(LineMarkdownNode, [
        {
            key: "asHTML",
            value: function asHTML(indent, context) {
                var childNodes = this.getChildNodes(), html = (0, _childNodes.htmlFromChildNodes)(childNodes, context);
                return html;
            }
        },
        {
            key: "createChildNodeDOMElements",
            value: function createChildNodeDOMElements(context) {
                var childNodes = this.getChildNodes(), domElement = this.getDOMElement(), domElements = (0, _childNodes.domElementsFromChildNodes)(childNodes, context), parentDOMElement = domElement, siblingDOMElement = null;
                domElements.forEach(function(domElement) {
                    parentDOMElement.insertBefore(domElement, siblingDOMElement);
                });
            }
        }
    ], [
        {
            key: "fromRuleNameChildNodesAndAmbiguous",
            value: function fromRuleNameChildNodesAndAmbiguous(ruleName, childNodes, ambiguous) {
                return _markdown.default.fromRuleNameChildNodesAndAmbiguous(LineMarkdownNode, ruleName, childNodes, ambiguous);
            }
        }
    ]);
    return LineMarkdownNode;
}(_markdown.default);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ub2RlL21hcmtkb3duL2xpbmUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBNYXJrZG93bk5vZGUgZnJvbSBcIi4uLy4uL25vZGUvbWFya2Rvd25cIjtcblxuaW1wb3J0IHsgaHRtbEZyb21DaGlsZE5vZGVzLCBkb21FbGVtZW50c0Zyb21DaGlsZE5vZGVzIH0gZnJvbSBcIi4uLy4uL3V0aWxpdGllcy9jaGlsZE5vZGVzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIExpbmVNYXJrZG93bk5vZGUgZXh0ZW5kcyBNYXJrZG93bk5vZGUge1xuICBhc0hUTUwoaW5kZW50LCBjb250ZXh0KSB7XG4gICAgY29uc3QgY2hpbGROb2RlcyA9IHRoaXMuZ2V0Q2hpbGROb2RlcygpLFxuICAgICAgICAgIGh0bWwgPSBodG1sRnJvbUNoaWxkTm9kZXMoY2hpbGROb2RlcywgY29udGV4dCk7XG5cbiAgICByZXR1cm4gaHRtbDtcbiAgfVxuXG4gIGNyZWF0ZUNoaWxkTm9kZURPTUVsZW1lbnRzKGNvbnRleHQpIHtcbiAgICBjb25zdCBjaGlsZE5vZGVzID0gdGhpcy5nZXRDaGlsZE5vZGVzKCksXG4gICAgICAgICAgZG9tRWxlbWVudCA9IHRoaXMuZ2V0RE9NRWxlbWVudCgpLFxuICAgICAgICAgIGRvbUVsZW1lbnRzID0gZG9tRWxlbWVudHNGcm9tQ2hpbGROb2RlcyhjaGlsZE5vZGVzLCBjb250ZXh0KSxcbiAgICAgICAgICBwYXJlbnRET01FbGVtZW50ID0gZG9tRWxlbWVudCwgIC8vL1xuICAgICAgICAgIHNpYmxpbmdET01FbGVtZW50ID0gbnVsbDtcblxuICAgIGRvbUVsZW1lbnRzLmZvckVhY2goKGRvbUVsZW1lbnQpID0+IHtcbiAgICAgIHBhcmVudERPTUVsZW1lbnQuaW5zZXJ0QmVmb3JlKGRvbUVsZW1lbnQsIHNpYmxpbmdET01FbGVtZW50KTtcbiAgICB9KTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUnVsZU5hbWVDaGlsZE5vZGVzQW5kQW1iaWd1b3VzKHJ1bGVOYW1lLCBjaGlsZE5vZGVzLCBhbWJpZ3VvdXMpIHsgcmV0dXJuIE1hcmtkb3duTm9kZS5mcm9tUnVsZU5hbWVDaGlsZE5vZGVzQW5kQW1iaWd1b3VzKExpbmVNYXJrZG93bk5vZGUsIHJ1bGVOYW1lLCBjaGlsZE5vZGVzLCBhbWJpZ3VvdXMpOyB9XG59XG4iXSwibmFtZXMiOlsiTGluZU1hcmtkb3duTm9kZSIsImFzSFRNTCIsImluZGVudCIsImNvbnRleHQiLCJjaGlsZE5vZGVzIiwiZ2V0Q2hpbGROb2RlcyIsImh0bWwiLCJodG1sRnJvbUNoaWxkTm9kZXMiLCJjcmVhdGVDaGlsZE5vZGVET01FbGVtZW50cyIsImRvbUVsZW1lbnQiLCJnZXRET01FbGVtZW50IiwiZG9tRWxlbWVudHMiLCJkb21FbGVtZW50c0Zyb21DaGlsZE5vZGVzIiwicGFyZW50RE9NRWxlbWVudCIsInNpYmxpbmdET01FbGVtZW50IiwiZm9yRWFjaCIsImluc2VydEJlZm9yZSIsImZyb21SdWxlTmFtZUNoaWxkTm9kZXNBbmRBbWJpZ3VvdXMiLCJydWxlTmFtZSIsImFtYmlndW91cyIsIk1hcmtkb3duTm9kZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFNcUJBOzs7K0RBSkk7MEJBRXFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRS9DLElBQUEsQUFBTUEsaUNBQUQsQUFBTDtjQUFNQTsrQkFBQUE7YUFBQUE7Z0NBQUFBOzs7a0JBQUFBOztZQUNuQkMsS0FBQUE7bUJBQUFBLFNBQUFBLE9BQU9DLE1BQU0sRUFBRUMsT0FBTztnQkFDcEIsSUFBTUMsYUFBYSxJQUFJLENBQUNDLGFBQWEsSUFDL0JDLE9BQU9DLElBQUFBLDhCQUFrQixFQUFDSCxZQUFZRDtnQkFFNUMsT0FBT0c7WUFDVDs7O1lBRUFFLEtBQUFBO21CQUFBQSxTQUFBQSwyQkFBMkJMLE9BQU87Z0JBQ2hDLElBQU1DLGFBQWEsSUFBSSxDQUFDQyxhQUFhLElBQy9CSSxhQUFhLElBQUksQ0FBQ0MsYUFBYSxJQUMvQkMsY0FBY0MsSUFBQUEscUNBQXlCLEVBQUNSLFlBQVlELFVBQ3BEVSxtQkFBbUJKLFlBQ25CSyxvQkFBb0I7Z0JBRTFCSCxZQUFZSSxPQUFPLENBQUMsU0FBQ047b0JBQ25CSSxpQkFBaUJHLFlBQVksQ0FBQ1AsWUFBWUs7Z0JBQzVDO1lBQ0Y7Ozs7WUFFT0csS0FBQUE7bUJBQVAsU0FBT0EsbUNBQW1DQyxRQUFRLEVBQUVkLFVBQVUsRUFBRWUsU0FBUztnQkFBSSxPQUFPQyxpQkFBWSxDQUFDSCxrQ0FBa0MsQ0FwQmhIakIsa0JBb0JtSWtCLFVBQVVkLFlBQVllO1lBQVk7OztXQXBCcktuQjtFQUF5Qm9CLGlCQUFZIn0=