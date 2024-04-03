"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return SubDivisionMarkdownNode;
    }
});
var _necessary = require("necessary");
var _markdown = /*#__PURE__*/ _interop_require_default(require("../../node/markdown"));
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
var second = _necessary.arrayUtilities.second;
var SubDivisionMarkdownNode = /*#__PURE__*/ function(MarkdownNode) {
    _inherits(SubDivisionMarkdownNode, MarkdownNode);
    var _super = _create_super(SubDivisionMarkdownNode);
    function SubDivisionMarkdownNode() {
        _class_call_check(this, SubDivisionMarkdownNode);
        return _super.apply(this, arguments);
    }
    _create_class(SubDivisionMarkdownNode, [
        {
            key: "getDOMElement",
            value: function getDOMElement() {
                var childNodes = this.getChildNodes(), secondChildNode = second(childNodes), secondChildNodeDOMElement = secondChildNode.getDOMElement(), domElement = secondChildNodeDOMElement; ///
                return domElement;
            }
        },
        {
            key: "asHTML",
            value: function asHTML(indent, context) {
                var childNodes = this.getChildNodes(), secondChildNode = second(childNodes), secondChildNodeHTML = secondChildNode.asHTML(indent, context), html = secondChildNodeHTML; ///
                return html;
            }
        },
        {
            key: "createDOMElement",
            value: function createDOMElement(context) {
                var childNodes = this.getChildNodes(), secondChildNode = second(childNodes), secondChildNodeDOMElement = secondChildNode.createDOMElement(context), domElement = secondChildNodeDOMElement; ///
                return domElement;
            }
        }
    ], [
        {
            key: "fromRuleNameChildNodesAndOpacity",
            value: function fromRuleNameChildNodesAndOpacity(ruleName, childNodes, opacity) {
                return _markdown.default.fromRuleNameChildNodesAndOpacity(SubDivisionMarkdownNode, ruleName, childNodes, opacity);
            }
        }
    ]);
    return SubDivisionMarkdownNode;
}(_markdown.default);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ub2RlL21hcmtkb3duL3N1YkRpdmlzaW9uLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBhcnJheVV0aWxpdGllcyB9IGZyb20gXCJuZWNlc3NhcnlcIjtcblxuaW1wb3J0IE1hcmtkb3duTm9kZSBmcm9tIFwiLi4vLi4vbm9kZS9tYXJrZG93blwiO1xuXG5jb25zdCB7IHNlY29uZCB9ID0gYXJyYXlVdGlsaXRpZXM7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFN1YkRpdmlzaW9uTWFya2Rvd25Ob2RlIGV4dGVuZHMgTWFya2Rvd25Ob2RlIHtcbiAgZ2V0RE9NRWxlbWVudCgpIHtcbiAgICBjb25zdCBjaGlsZE5vZGVzID0gdGhpcy5nZXRDaGlsZE5vZGVzKCksXG4gICAgICAgICAgc2Vjb25kQ2hpbGROb2RlID0gc2Vjb25kKGNoaWxkTm9kZXMpLFxuICAgICAgICAgIHNlY29uZENoaWxkTm9kZURPTUVsZW1lbnQgPSBzZWNvbmRDaGlsZE5vZGUuZ2V0RE9NRWxlbWVudCgpLFxuICAgICAgICAgIGRvbUVsZW1lbnQgPSBzZWNvbmRDaGlsZE5vZGVET01FbGVtZW50OyAgLy8vXG5cbiAgICByZXR1cm4gZG9tRWxlbWVudDtcbiAgfVxuXG4gIGFzSFRNTChpbmRlbnQsIGNvbnRleHQpIHtcbiAgICBjb25zdCBjaGlsZE5vZGVzID0gdGhpcy5nZXRDaGlsZE5vZGVzKCksXG4gICAgICAgICAgc2Vjb25kQ2hpbGROb2RlID0gc2Vjb25kKGNoaWxkTm9kZXMpLFxuICAgICAgICAgIHNlY29uZENoaWxkTm9kZUhUTUwgPSBzZWNvbmRDaGlsZE5vZGUuYXNIVE1MKGluZGVudCwgY29udGV4dCksXG4gICAgICAgICAgaHRtbCA9IHNlY29uZENoaWxkTm9kZUhUTUw7ICAvLy9cblxuICAgIHJldHVybiBodG1sO1xuICB9XG5cbiAgY3JlYXRlRE9NRWxlbWVudChjb250ZXh0KSB7XG4gICAgY29uc3QgY2hpbGROb2RlcyA9IHRoaXMuZ2V0Q2hpbGROb2RlcygpLFxuICAgICAgICAgIHNlY29uZENoaWxkTm9kZSA9IHNlY29uZChjaGlsZE5vZGVzKSxcbiAgICAgICAgICBzZWNvbmRDaGlsZE5vZGVET01FbGVtZW50ID0gc2Vjb25kQ2hpbGROb2RlLmNyZWF0ZURPTUVsZW1lbnQoY29udGV4dCksXG4gICAgICAgICAgZG9tRWxlbWVudCA9IHNlY29uZENoaWxkTm9kZURPTUVsZW1lbnQ7ICAvLy9cblxuICAgIHJldHVybiBkb21FbGVtZW50O1xuICB9XG5cbiAgc3RhdGljIGZyb21SdWxlTmFtZUNoaWxkTm9kZXNBbmRPcGFjaXR5KHJ1bGVOYW1lLCBjaGlsZE5vZGVzLCBvcGFjaXR5KSB7IHJldHVybiBNYXJrZG93bk5vZGUuZnJvbVJ1bGVOYW1lQ2hpbGROb2Rlc0FuZE9wYWNpdHkoU3ViRGl2aXNpb25NYXJrZG93bk5vZGUsIHJ1bGVOYW1lLCBjaGlsZE5vZGVzLCBvcGFjaXR5KTsgfVxufVxuIl0sIm5hbWVzIjpbIlN1YkRpdmlzaW9uTWFya2Rvd25Ob2RlIiwic2Vjb25kIiwiYXJyYXlVdGlsaXRpZXMiLCJnZXRET01FbGVtZW50IiwiY2hpbGROb2RlcyIsImdldENoaWxkTm9kZXMiLCJzZWNvbmRDaGlsZE5vZGUiLCJzZWNvbmRDaGlsZE5vZGVET01FbGVtZW50IiwiZG9tRWxlbWVudCIsImFzSFRNTCIsImluZGVudCIsImNvbnRleHQiLCJzZWNvbmRDaGlsZE5vZGVIVE1MIiwiaHRtbCIsImNyZWF0ZURPTUVsZW1lbnQiLCJmcm9tUnVsZU5hbWVDaGlsZE5vZGVzQW5kT3BhY2l0eSIsInJ1bGVOYW1lIiwib3BhY2l0eSIsIk1hcmtkb3duTm9kZSJdLCJyYW5nZU1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7IiwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBUXFCQTs7O3lCQU5VOytEQUVOOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRXpCLElBQU0sQUFBRUMsU0FBV0MseUJBQWMsQ0FBekJEO0FBRU8sSUFBQSxBQUFNRCx3Q0FBRCxBQUFMO2NBQU1BOytCQUFBQTthQUFBQTtnQ0FBQUE7OztrQkFBQUE7O1lBQ25CRyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBTUMsYUFBYSxJQUFJLENBQUNDLGFBQWEsSUFDL0JDLGtCQUFrQkwsT0FBT0csYUFDekJHLDRCQUE0QkQsZ0JBQWdCSCxhQUFhLElBQ3pESyxhQUFhRCwyQkFBNEIsR0FBRztnQkFFbEQsT0FBT0M7WUFDVDs7O1lBRUFDLEtBQUFBO21CQUFBQSxTQUFBQSxPQUFPQyxNQUFNLEVBQUVDLE9BQU87Z0JBQ3BCLElBQU1QLGFBQWEsSUFBSSxDQUFDQyxhQUFhLElBQy9CQyxrQkFBa0JMLE9BQU9HLGFBQ3pCUSxzQkFBc0JOLGdCQUFnQkcsTUFBTSxDQUFDQyxRQUFRQyxVQUNyREUsT0FBT0QscUJBQXNCLEdBQUc7Z0JBRXRDLE9BQU9DO1lBQ1Q7OztZQUVBQyxLQUFBQTttQkFBQUEsU0FBQUEsaUJBQWlCSCxPQUFPO2dCQUN0QixJQUFNUCxhQUFhLElBQUksQ0FBQ0MsYUFBYSxJQUMvQkMsa0JBQWtCTCxPQUFPRyxhQUN6QkcsNEJBQTRCRCxnQkFBZ0JRLGdCQUFnQixDQUFDSCxVQUM3REgsYUFBYUQsMkJBQTRCLEdBQUc7Z0JBRWxELE9BQU9DO1lBQ1Q7Ozs7WUFFT08sS0FBQUE7bUJBQVAsU0FBT0EsaUNBQWlDQyxRQUFRLEVBQUVaLFVBQVUsRUFBRWEsT0FBTztnQkFBSSxPQUFPQyxpQkFBWSxDQUFDSCxnQ0FBZ0MsQ0E1QjFHZix5QkE0Qm9JZ0IsVUFBVVosWUFBWWE7WUFBVTs7O1dBNUJwS2pCO0VBQWdDa0IsaUJBQVkifQ==