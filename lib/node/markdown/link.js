"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return LinkMarkdownNode;
    }
});
var _necessary = require("necessary");
var _markdown = /*#__PURE__*/ _interop_require_default(require("../../node/markdown"));
var _constants = require("../../constants");
var _attributeNames = require("../../attributeNames");
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
var LinkMarkdownNode = /*#__PURE__*/ function(MarkdownNode) {
    _inherits(LinkMarkdownNode, MarkdownNode);
    var _super = _create_super(LinkMarkdownNode);
    function LinkMarkdownNode() {
        _class_call_check(this, LinkMarkdownNode);
        return _super.apply(this, arguments);
    }
    _create_class(LinkMarkdownNode, [
        {
            key: "getHRef",
            value: function getHRef(context) {
                var identifier = this.getIdentifier(context), href = "#".concat(identifier);
                return href;
            }
        },
        {
            key: "getIdentifier",
            value: function getIdentifier(context) {
                var childNodes = this.getChildNodes(), secondChildNode = second(childNodes), textMarkdownNode = secondChildNode, textMarkdownNodeContent = textMarkdownNode.getContent(context), identifier = textMarkdownNodeContent; ///
                return identifier;
            }
        },
        {
            key: "getAttributeName",
            value: function getAttributeName() {
                var attributeName = _attributeNames.HREF_ATTRIBUTE_NAME;
                return attributeName;
            }
        },
        {
            key: "getAttributeValue",
            value: function getAttributeValue(context) {
                var href = this.getHRef(context), attributeValue = href; ///
                return attributeValue;
            }
        },
        {
            key: "clear",
            value: function clear() {
                var innerHTML = _constants.EMPTY_STRING;
                this.setInnerHTML(innerHTML);
            }
        },
        {
            key: "setNumber",
            value: function setNumber(number) {
                var innerHTML = "".concat(number);
                this.setInnerHTML(innerHTML);
            }
        }
    ], [
        {
            key: "fromRuleNameChildNodesAndAmbiguous",
            value: function fromRuleNameChildNodesAndAmbiguous(ruleName, childNodes, ambiguous) {
                return _markdown.default.fromRuleNameChildNodesAndAmbiguous(LinkMarkdownNode, ruleName, childNodes, ambiguous);
            }
        }
    ]);
    return LinkMarkdownNode;
}(_markdown.default);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ub2RlL21hcmtkb3duL2xpbmsuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IGFycmF5VXRpbGl0aWVzIH0gZnJvbSBcIm5lY2Vzc2FyeVwiO1xuXG5pbXBvcnQgTWFya2Rvd25Ob2RlIGZyb20gXCIuLi8uLi9ub2RlL21hcmtkb3duXCI7XG5cbmltcG9ydCB7IEVNUFRZX1NUUklORyB9IGZyb20gXCIuLi8uLi9jb25zdGFudHNcIjtcbmltcG9ydCB7IEhSRUZfQVRUUklCVVRFX05BTUUgfSBmcm9tIFwiLi4vLi4vYXR0cmlidXRlTmFtZXNcIjtcblxuY29uc3QgeyBzZWNvbmQgfSA9IGFycmF5VXRpbGl0aWVzO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBMaW5rTWFya2Rvd25Ob2RlIGV4dGVuZHMgTWFya2Rvd25Ob2RlIHtcbiAgZ2V0SFJlZihjb250ZXh0KSB7XG4gICAgY29uc3QgaWRlbnRpZmllciA9IHRoaXMuZ2V0SWRlbnRpZmllcihjb250ZXh0KSxcbiAgICAgICAgICBocmVmID0gYCMke2lkZW50aWZpZXJ9YDtcblxuICAgIHJldHVybiBocmVmO1xuICB9XG5cbiAgZ2V0SWRlbnRpZmllcihjb250ZXh0KSB7XG4gICAgY29uc3QgY2hpbGROb2RlcyA9IHRoaXMuZ2V0Q2hpbGROb2RlcygpLFxuICAgICAgICAgIHNlY29uZENoaWxkTm9kZSA9IHNlY29uZChjaGlsZE5vZGVzKSxcbiAgICAgICAgICB0ZXh0TWFya2Rvd25Ob2RlID0gc2Vjb25kQ2hpbGROb2RlLCAgLy8vXG4gICAgICAgICAgdGV4dE1hcmtkb3duTm9kZUNvbnRlbnQgPSB0ZXh0TWFya2Rvd25Ob2RlLmdldENvbnRlbnQoY29udGV4dCksXG4gICAgICAgICAgaWRlbnRpZmllciA9IHRleHRNYXJrZG93bk5vZGVDb250ZW50OyAvLy9cblxuICAgIHJldHVybiBpZGVudGlmaWVyO1xuICB9XG5cbiAgZ2V0QXR0cmlidXRlTmFtZSgpIHtcbiAgICBjb25zdCBhdHRyaWJ1dGVOYW1lID0gSFJFRl9BVFRSSUJVVEVfTkFNRTtcblxuICAgIHJldHVybiBhdHRyaWJ1dGVOYW1lO1xuICB9XG5cbiAgZ2V0QXR0cmlidXRlVmFsdWUoY29udGV4dCkge1xuICAgIGNvbnN0IGhyZWYgPSB0aGlzLmdldEhSZWYoY29udGV4dCksXG4gICAgICAgICAgYXR0cmlidXRlVmFsdWUgPSBocmVmOyAvLy9cblxuICAgIHJldHVybiBhdHRyaWJ1dGVWYWx1ZTtcbiAgfVxuXG4gIGNsZWFyKCkge1xuICAgIGNvbnN0IGlubmVySFRNTCA9IEVNUFRZX1NUUklORztcblxuICAgIHRoaXMuc2V0SW5uZXJIVE1MKGlubmVySFRNTCk7XG4gIH1cblxuICBzZXROdW1iZXIobnVtYmVyKSB7XG4gICAgY29uc3QgaW5uZXJIVE1MID0gYCR7bnVtYmVyfWA7XG5cbiAgICB0aGlzLnNldElubmVySFRNTChpbm5lckhUTUwpO1xuICB9XG5cbiAgc3RhdGljIGZyb21SdWxlTmFtZUNoaWxkTm9kZXNBbmRBbWJpZ3VvdXMocnVsZU5hbWUsIGNoaWxkTm9kZXMsIGFtYmlndW91cykgeyByZXR1cm4gTWFya2Rvd25Ob2RlLmZyb21SdWxlTmFtZUNoaWxkTm9kZXNBbmRBbWJpZ3VvdXMoTGlua01hcmtkb3duTm9kZSwgcnVsZU5hbWUsIGNoaWxkTm9kZXMsIGFtYmlndW91cyk7IH1cbn1cbiJdLCJuYW1lcyI6WyJMaW5rTWFya2Rvd25Ob2RlIiwic2Vjb25kIiwiYXJyYXlVdGlsaXRpZXMiLCJnZXRIUmVmIiwiY29udGV4dCIsImlkZW50aWZpZXIiLCJnZXRJZGVudGlmaWVyIiwiaHJlZiIsImNoaWxkTm9kZXMiLCJnZXRDaGlsZE5vZGVzIiwic2Vjb25kQ2hpbGROb2RlIiwidGV4dE1hcmtkb3duTm9kZSIsInRleHRNYXJrZG93bk5vZGVDb250ZW50IiwiZ2V0Q29udGVudCIsImdldEF0dHJpYnV0ZU5hbWUiLCJhdHRyaWJ1dGVOYW1lIiwiSFJFRl9BVFRSSUJVVEVfTkFNRSIsImdldEF0dHJpYnV0ZVZhbHVlIiwiYXR0cmlidXRlVmFsdWUiLCJjbGVhciIsImlubmVySFRNTCIsIkVNUFRZX1NUUklORyIsInNldElubmVySFRNTCIsInNldE51bWJlciIsIm51bWJlciIsImZyb21SdWxlTmFtZUNoaWxkTm9kZXNBbmRBbWJpZ3VvdXMiLCJydWxlTmFtZSIsImFtYmlndW91cyIsIk1hcmtkb3duTm9kZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFXcUJBOzs7eUJBVFU7K0RBRU47eUJBRUk7OEJBQ087Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFcEMsSUFBTSxBQUFFQyxTQUFXQyx5QkFBYyxDQUF6QkQ7QUFFTyxJQUFBLEFBQU1ELGlDQUFELEFBQUw7Y0FBTUE7K0JBQUFBO2FBQUFBO2dDQUFBQTs7O2tCQUFBQTs7WUFDbkJHLEtBQUFBO21CQUFBQSxTQUFBQSxRQUFRQyxPQUFPO2dCQUNiLElBQU1DLGFBQWEsSUFBSSxDQUFDQyxhQUFhLENBQUNGLFVBQ2hDRyxPQUFPLEFBQUMsSUFBYyxPQUFYRjtnQkFFakIsT0FBT0U7WUFDVDs7O1lBRUFELEtBQUFBO21CQUFBQSxTQUFBQSxjQUFjRixPQUFPO2dCQUNuQixJQUFNSSxhQUFhLElBQUksQ0FBQ0MsYUFBYSxJQUMvQkMsa0JBQWtCVCxPQUFPTyxhQUN6QkcsbUJBQW1CRCxpQkFDbkJFLDBCQUEwQkQsaUJBQWlCRSxVQUFVLENBQUNULFVBQ3REQyxhQUFhTyx5QkFBeUIsR0FBRztnQkFFL0MsT0FBT1A7WUFDVDs7O1lBRUFTLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFNQyxnQkFBZ0JDLG1DQUFtQjtnQkFFekMsT0FBT0Q7WUFDVDs7O1lBRUFFLEtBQUFBO21CQUFBQSxTQUFBQSxrQkFBa0JiLE9BQU87Z0JBQ3ZCLElBQU1HLE9BQU8sSUFBSSxDQUFDSixPQUFPLENBQUNDLFVBQ3BCYyxpQkFBaUJYLE1BQU0sR0FBRztnQkFFaEMsT0FBT1c7WUFDVDs7O1lBRUFDLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFNQyxZQUFZQyx1QkFBWTtnQkFFOUIsSUFBSSxDQUFDQyxZQUFZLENBQUNGO1lBQ3BCOzs7WUFFQUcsS0FBQUE7bUJBQUFBLFNBQUFBLFVBQVVDLE1BQU07Z0JBQ2QsSUFBTUosWUFBWSxBQUFDLEdBQVMsT0FBUEk7Z0JBRXJCLElBQUksQ0FBQ0YsWUFBWSxDQUFDRjtZQUNwQjs7OztZQUVPSyxLQUFBQTttQkFBUCxTQUFPQSxtQ0FBbUNDLFFBQVEsRUFBRWxCLFVBQVUsRUFBRW1CLFNBQVM7Z0JBQUksT0FBT0MsaUJBQVksQ0FBQ0gsa0NBQWtDLENBM0NoSHpCLGtCQTJDbUkwQixVQUFVbEIsWUFBWW1CO1lBQVk7OztXQTNDckszQjtFQUF5QjRCLGlCQUFZIn0=