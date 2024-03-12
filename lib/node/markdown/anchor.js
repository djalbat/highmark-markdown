"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return AnchorMarkdownNode;
    }
});
var _markdown = /*#__PURE__*/ _interop_require_default(require("../../node/markdown"));
var _attributeNames = require("../../attributeNames");
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
function _get(target, property, receiver) {
    if (typeof Reflect !== "undefined" && Reflect.get) {
        _get = Reflect.get;
    } else {
        _get = function get(target, property, receiver) {
            var base = _super_prop_base(target, property);
            if (!base) return;
            var desc = Object.getOwnPropertyDescriptor(base, property);
            if (desc.get) {
                return desc.get.call(receiver || target);
            }
            return desc.value;
        };
    }
    return _get(target, property, receiver || target);
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
function _super_prop_base(object, property) {
    while(!Object.prototype.hasOwnProperty.call(object, property)){
        object = _get_prototype_of(object);
        if (object === null) break;
    }
    return object;
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
var AnchorMarkdownNode = /*#__PURE__*/ function(MarkdownNode) {
    _inherits(AnchorMarkdownNode, MarkdownNode);
    var _super = _create_super(AnchorMarkdownNode);
    function AnchorMarkdownNode(ruleName, childNodes, ambiguous, precedence, domElement, identifier) {
        _class_call_check(this, AnchorMarkdownNode);
        var _this;
        _this = _super.call(this, ruleName, childNodes, ambiguous, precedence, domElement);
        _this.identifier = identifier;
        return _this;
    }
    _create_class(AnchorMarkdownNode, [
        {
            key: "getIdentifier",
            value: function getIdentifier() {
                return this.identifier;
            }
        },
        {
            key: "createDOMElement",
            value: function createDOMElement(context) {
                var domElement = _get(_get_prototype_of(AnchorMarkdownNode.prototype), "createDOMElement", this).call(this, context), name = _attributeNames.ID_ATTRIBUTE_NAME, value = this.identifier;
                this.setAttribute(name, value);
                return domElement;
            }
        }
    ], [
        {
            key: "fromIdentifier",
            value: function fromIdentifier(identifier) {
                var ruleName = _ruleNames.ANCHOR_RULE_NAME, childNodes = [], ambiguous = false, anchorMarkdownNode = _markdown.default.fromRuleNameChildNodesAndAmbiguous(AnchorMarkdownNode, ruleName, childNodes, ambiguous, identifier);
                return anchorMarkdownNode;
            }
        }
    ]);
    return AnchorMarkdownNode;
}(_markdown.default);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ub2RlL21hcmtkb3duL2FuY2hvci5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IE1hcmtkb3duTm9kZSBmcm9tIFwiLi4vLi4vbm9kZS9tYXJrZG93blwiO1xuXG5pbXBvcnQgeyBJRF9BVFRSSUJVVEVfTkFNRSB9IGZyb20gXCIuLi8uLi9hdHRyaWJ1dGVOYW1lc1wiO1xuaW1wb3J0IHsgQU5DSE9SX1JVTEVfTkFNRSB9IGZyb20gXCIuLi8uLi9ydWxlTmFtZXNcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQW5jaG9yTWFya2Rvd25Ob2RlIGV4dGVuZHMgTWFya2Rvd25Ob2RlIHtcbiAgY29uc3RydWN0b3IocnVsZU5hbWUsIGNoaWxkTm9kZXMsIGFtYmlndW91cywgcHJlY2VkZW5jZSwgZG9tRWxlbWVudCwgaWRlbnRpZmllcikge1xuICAgIHN1cGVyKHJ1bGVOYW1lLCBjaGlsZE5vZGVzLCBhbWJpZ3VvdXMsIHByZWNlZGVuY2UsIGRvbUVsZW1lbnQpO1xuXG4gICAgdGhpcy5pZGVudGlmaWVyID0gaWRlbnRpZmllcjtcbiAgfVxuXG4gIGdldElkZW50aWZpZXIoKSB7XG4gICAgcmV0dXJuIHRoaXMuaWRlbnRpZmllcjtcbiAgfVxuXG4gIGNyZWF0ZURPTUVsZW1lbnQoY29udGV4dCkge1xuICAgIGNvbnN0IGRvbUVsZW1lbnQgPSBzdXBlci5jcmVhdGVET01FbGVtZW50KGNvbnRleHQpLFxuICAgICAgICAgIG5hbWUgPSBJRF9BVFRSSUJVVEVfTkFNRSxcbiAgICAgICAgICB2YWx1ZSA9IHRoaXMuaWRlbnRpZmllcjtcblxuICAgIHRoaXMuc2V0QXR0cmlidXRlKG5hbWUsIHZhbHVlKTtcblxuICAgIHJldHVybiBkb21FbGVtZW50O1xuICB9XG5cbiAgc3RhdGljIGZyb21JZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgICBjb25zdCBydWxlTmFtZSA9IEFOQ0hPUl9SVUxFX05BTUUsXG4gICAgICAgICAgY2hpbGROb2RlcyA9IFtdLFxuICAgICAgICAgIGFtYmlndW91cyA9IGZhbHNlLFxuICAgICAgICAgIGFuY2hvck1hcmtkb3duTm9kZSA9IE1hcmtkb3duTm9kZS5mcm9tUnVsZU5hbWVDaGlsZE5vZGVzQW5kQW1iaWd1b3VzKEFuY2hvck1hcmtkb3duTm9kZSwgcnVsZU5hbWUsIGNoaWxkTm9kZXMsIGFtYmlndW91cywgaWRlbnRpZmllcik7XG5cbiAgICByZXR1cm4gYW5jaG9yTWFya2Rvd25Ob2RlO1xuICB9XG59XG4iXSwibmFtZXMiOlsiQW5jaG9yTWFya2Rvd25Ob2RlIiwicnVsZU5hbWUiLCJjaGlsZE5vZGVzIiwiYW1iaWd1b3VzIiwicHJlY2VkZW5jZSIsImRvbUVsZW1lbnQiLCJpZGVudGlmaWVyIiwiZ2V0SWRlbnRpZmllciIsImNyZWF0ZURPTUVsZW1lbnQiLCJjb250ZXh0IiwibmFtZSIsIklEX0FUVFJJQlVURV9OQU1FIiwidmFsdWUiLCJzZXRBdHRyaWJ1dGUiLCJmcm9tSWRlbnRpZmllciIsIkFOQ0hPUl9SVUxFX05BTUUiLCJhbmNob3JNYXJrZG93bk5vZGUiLCJNYXJrZG93bk5vZGUiLCJmcm9tUnVsZU5hbWVDaGlsZE5vZGVzQW5kQW1iaWd1b3VzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQU9xQkE7OzsrREFMSTs4QkFFUzt5QkFDRDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRWxCLElBQUEsQUFBTUEsbUNBQUQsQUFBTDtjQUFNQTsrQkFBQUE7YUFBQUEsbUJBQ1BDLFFBQVEsRUFBRUMsVUFBVSxFQUFFQyxTQUFTLEVBQUVDLFVBQVUsRUFBRUMsVUFBVSxFQUFFQyxVQUFVO2dDQUQ1RE47O2tDQUVYQyxVQUFVQyxZQUFZQyxXQUFXQyxZQUFZQztRQUVuRCxNQUFLQyxVQUFVLEdBQUdBOzs7a0JBSkROOztZQU9uQk8sS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDRCxVQUFVO1lBQ3hCOzs7WUFFQUUsS0FBQUE7bUJBQUFBLFNBQUFBLGlCQUFpQkMsT0FBTztnQkFDdEIsSUFBTUosYUFBYSx1QkFaRkwsK0JBWVFRLG9CQUFOLElBQUssYUFBa0JDLFVBQ3BDQyxPQUFPQyxpQ0FBaUIsRUFDeEJDLFFBQVEsSUFBSSxDQUFDTixVQUFVO2dCQUU3QixJQUFJLENBQUNPLFlBQVksQ0FBQ0gsTUFBTUU7Z0JBRXhCLE9BQU9QO1lBQ1Q7Ozs7WUFFT1MsS0FBQUE7bUJBQVAsU0FBT0EsZUFBZVIsVUFBVTtnQkFDOUIsSUFBTUwsV0FBV2MsMkJBQWdCLEVBQzNCYixhQUFhLEVBQUUsRUFDZkMsWUFBWSxPQUNaYSxxQkFBcUJDLGlCQUFZLENBQUNDLGtDQUFrQyxDQXpCekRsQixvQkF5QjhFQyxVQUFVQyxZQUFZQyxXQUFXRztnQkFFaEksT0FBT1U7WUFDVDs7O1dBNUJtQmhCO0VBQTJCaUIsaUJBQVkifQ==