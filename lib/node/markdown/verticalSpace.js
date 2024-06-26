"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return VerticalSpaceMarkdownNode;
    }
});
var _occamparsers = require("occam-parsers");
var _markdown = /*#__PURE__*/ _interop_require_default(require("../../node/markdown"));
var _constants = require("../../constants");
var _ruleNames = require("../../ruleNames");
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
var VerticalSpaceMarkdownNode = /*#__PURE__*/ function(MarkdownNode) {
    _inherits(VerticalSpaceMarkdownNode, MarkdownNode);
    var _super = _create_super(VerticalSpaceMarkdownNode);
    function VerticalSpaceMarkdownNode() {
        _class_call_check(this, VerticalSpaceMarkdownNode);
        return _super.apply(this, arguments);
    }
    _create_class(VerticalSpaceMarkdownNode, [
        {
            key: "asHTML",
            value: function asHTML(indent, context) {
                var html = _constants.CARRIAGE_RETURN; ///
                return html;
            }
        },
        {
            key: "createDOMElement",
            value: function createDOMElement(context) {
                var content = _constants.CARRIAGE_RETURN, textNode = document.createTextNode(content), domElement = textNode; ///
                this.setDOMElement(domElement);
                return domElement;
            }
        }
    ], [
        {
            key: "fromNothing",
            value: function fromNothing() {
                var startOfContentNode = _occamparsers.StartOfContentNode.fromNothing(), ruleName = _ruleNames.VERTICAL_SPACE_RULE_NAME, childNodes = [
                    startOfContentNode
                ], opacity = null, verticalSpaceMarkdownNode = _markdown.default.fromRuleNameChildNodesAndOpacity(VerticalSpaceMarkdownNode, ruleName, childNodes, opacity);
                return verticalSpaceMarkdownNode;
            }
        },
        {
            key: "fromRuleNameChildNodesAndOpacity",
            value: function fromRuleNameChildNodesAndOpacity(ruleName, childNodes, opacity) {
                return _markdown.default.fromRuleNameChildNodesAndOpacity(VerticalSpaceMarkdownNode, ruleName, childNodes, opacity);
            }
        }
    ]);
    return VerticalSpaceMarkdownNode;
}(_markdown.default);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ub2RlL21hcmtkb3duL3ZlcnRpY2FsU3BhY2UuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IFN0YXJ0T2ZDb250ZW50Tm9kZSB9IGZyb20gXCJvY2NhbS1wYXJzZXJzXCI7XG5cbmltcG9ydCBNYXJrZG93bk5vZGUgZnJvbSBcIi4uLy4uL25vZGUvbWFya2Rvd25cIjtcblxuaW1wb3J0IHsgQ0FSUklBR0VfUkVUVVJOIH0gZnJvbSBcIi4uLy4uL2NvbnN0YW50c1wiO1xuaW1wb3J0IHsgVkVSVElDQUxfU1BBQ0VfUlVMRV9OQU1FIH0gZnJvbSBcIi4uLy4uL3J1bGVOYW1lc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBWZXJ0aWNhbFNwYWNlTWFya2Rvd25Ob2RlIGV4dGVuZHMgTWFya2Rvd25Ob2RlIHtcbiAgYXNIVE1MKGluZGVudCwgY29udGV4dCkge1xuICAgIGNvbnN0IGh0bWwgPSBDQVJSSUFHRV9SRVRVUk47ICAvLy9cblxuICAgIHJldHVybiBodG1sO1xuICB9XG5cbiAgY3JlYXRlRE9NRWxlbWVudChjb250ZXh0KSB7XG4gICAgY29uc3QgY29udGVudCA9IENBUlJJQUdFX1JFVFVSTiwgLy8vXG4gICAgICAgICAgdGV4dE5vZGUgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjb250ZW50KSxcbiAgICAgICAgICBkb21FbGVtZW50ID0gdGV4dE5vZGU7ICAvLy9cblxuICAgIHRoaXMuc2V0RE9NRWxlbWVudChkb21FbGVtZW50KTtcblxuICAgIHJldHVybiBkb21FbGVtZW50O1xuICB9XG5cbiAgc3RhdGljIGZyb21Ob3RoaW5nKCkge1xuICAgIGNvbnN0IHN0YXJ0T2ZDb250ZW50Tm9kZSA9IFN0YXJ0T2ZDb250ZW50Tm9kZS5mcm9tTm90aGluZygpLFxuICAgICAgICAgIHJ1bGVOYW1lID0gVkVSVElDQUxfU1BBQ0VfUlVMRV9OQU1FLFxuICAgICAgICAgIGNoaWxkTm9kZXMgPSBbXG4gICAgICAgICAgICBzdGFydE9mQ29udGVudE5vZGVcbiAgICAgICAgICBdLFxuICAgICAgICAgIG9wYWNpdHkgPSBudWxsLFxuICAgICAgICAgIHZlcnRpY2FsU3BhY2VNYXJrZG93bk5vZGUgPSBNYXJrZG93bk5vZGUuZnJvbVJ1bGVOYW1lQ2hpbGROb2Rlc0FuZE9wYWNpdHkoVmVydGljYWxTcGFjZU1hcmtkb3duTm9kZSwgcnVsZU5hbWUsIGNoaWxkTm9kZXMsIG9wYWNpdHkpO1xuXG4gICAgcmV0dXJuIHZlcnRpY2FsU3BhY2VNYXJrZG93bk5vZGU7XG4gIH1cblxuICBzdGF0aWMgZnJvbVJ1bGVOYW1lQ2hpbGROb2Rlc0FuZE9wYWNpdHkocnVsZU5hbWUsIGNoaWxkTm9kZXMsIG9wYWNpdHkpIHsgcmV0dXJuIE1hcmtkb3duTm9kZS5mcm9tUnVsZU5hbWVDaGlsZE5vZGVzQW5kT3BhY2l0eShWZXJ0aWNhbFNwYWNlTWFya2Rvd25Ob2RlLCBydWxlTmFtZSwgY2hpbGROb2Rlcywgb3BhY2l0eSk7IH1cbn1cbiJdLCJuYW1lcyI6WyJWZXJ0aWNhbFNwYWNlTWFya2Rvd25Ob2RlIiwiYXNIVE1MIiwiaW5kZW50IiwiY29udGV4dCIsImh0bWwiLCJDQVJSSUFHRV9SRVRVUk4iLCJjcmVhdGVET01FbGVtZW50IiwiY29udGVudCIsInRleHROb2RlIiwiZG9jdW1lbnQiLCJjcmVhdGVUZXh0Tm9kZSIsImRvbUVsZW1lbnQiLCJzZXRET01FbGVtZW50IiwiZnJvbU5vdGhpbmciLCJzdGFydE9mQ29udGVudE5vZGUiLCJTdGFydE9mQ29udGVudE5vZGUiLCJydWxlTmFtZSIsIlZFUlRJQ0FMX1NQQUNFX1JVTEVfTkFNRSIsImNoaWxkTm9kZXMiLCJvcGFjaXR5IiwidmVydGljYWxTcGFjZU1hcmtkb3duTm9kZSIsIk1hcmtkb3duTm9kZSIsImZyb21SdWxlTmFtZUNoaWxkTm9kZXNBbmRPcGFjaXR5Il0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQVNxQkE7Ozs0QkFQYzsrREFFVjt5QkFFTzt5QkFDUzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUUxQixJQUFBLEFBQU1BLDBDQUFELEFBQUw7Y0FBTUE7K0JBQUFBO2FBQUFBO2dDQUFBQTs7O2tCQUFBQTs7WUFDbkJDLEtBQUFBO21CQUFBQSxTQUFBQSxPQUFPQyxNQUFNLEVBQUVDLE9BQU87Z0JBQ3BCLElBQU1DLE9BQU9DLDBCQUFlLEVBQUcsR0FBRztnQkFFbEMsT0FBT0Q7WUFDVDs7O1lBRUFFLEtBQUFBO21CQUFBQSxTQUFBQSxpQkFBaUJILE9BQU87Z0JBQ3RCLElBQU1JLFVBQVVGLDBCQUFlLEVBQ3pCRyxXQUFXQyxTQUFTQyxjQUFjLENBQUNILFVBQ25DSSxhQUFhSCxVQUFXLEdBQUc7Z0JBRWpDLElBQUksQ0FBQ0ksYUFBYSxDQUFDRDtnQkFFbkIsT0FBT0E7WUFDVDs7OztZQUVPRSxLQUFBQTttQkFBUCxTQUFPQTtnQkFDTCxJQUFNQyxxQkFBcUJDLGdDQUFrQixDQUFDRixXQUFXLElBQ25ERyxXQUFXQyxtQ0FBd0IsRUFDbkNDLGFBQWE7b0JBQ1hKO2lCQUNELEVBQ0RLLFVBQVUsTUFDVkMsNEJBQTRCQyxpQkFBWSxDQUFDQyxnQ0FBZ0MsQ0F4QjlEdEIsMkJBd0IwRmdCLFVBQVVFLFlBQVlDO2dCQUVqSSxPQUFPQztZQUNUOzs7WUFFT0UsS0FBQUE7bUJBQVAsU0FBT0EsaUNBQWlDTixRQUFRLEVBQUVFLFVBQVUsRUFBRUMsT0FBTztnQkFBSSxPQUFPRSxpQkFBWSxDQUFDQyxnQ0FBZ0MsQ0E3QjFHdEIsMkJBNkJzSWdCLFVBQVVFLFlBQVlDO1lBQVU7OztXQTdCdEtuQjtFQUFrQ3FCLGlCQUFZIn0=