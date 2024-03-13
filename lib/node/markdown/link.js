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
            key: "createDOMElement",
            value: function createDOMElement(context) {
                var domElement = _get(_get_prototype_of(LinkMarkdownNode.prototype), "createDOMElement", this).call(this, context), href = this.getHRef(context), name = _attributeNames.HREF_ATTRIBUTE_NAME, value = href; ///
                this.setAttribute(name, value);
                return domElement;
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
            key: "getHRef",
            value: function getHRef(context) {
                var identifier = this.getIdentifier(context), href = "#".concat(identifier);
                return href;
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ub2RlL21hcmtkb3duL2xpbmsuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IGFycmF5VXRpbGl0aWVzIH0gZnJvbSBcIm5lY2Vzc2FyeVwiO1xuXG5pbXBvcnQgTWFya2Rvd25Ob2RlIGZyb20gXCIuLi8uLi9ub2RlL21hcmtkb3duXCI7XG5cbmltcG9ydCB7IEVNUFRZX1NUUklORyB9IGZyb20gXCIuLi8uLi9jb25zdGFudHNcIjtcbmltcG9ydCB7IEhSRUZfQVRUUklCVVRFX05BTUUgfSBmcm9tIFwiLi4vLi4vYXR0cmlidXRlTmFtZXNcIjtcblxuY29uc3QgeyBzZWNvbmQgfSA9IGFycmF5VXRpbGl0aWVzO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBMaW5rTWFya2Rvd25Ob2RlIGV4dGVuZHMgTWFya2Rvd25Ob2RlIHtcbiAgY3JlYXRlRE9NRWxlbWVudChjb250ZXh0KSB7XG4gICAgY29uc3QgZG9tRWxlbWVudCA9IHN1cGVyLmNyZWF0ZURPTUVsZW1lbnQoY29udGV4dCksXG4gICAgICAgICAgaHJlZiA9IHRoaXMuZ2V0SFJlZihjb250ZXh0KSxcbiAgICAgICAgICBuYW1lID0gSFJFRl9BVFRSSUJVVEVfTkFNRSxcbiAgICAgICAgICB2YWx1ZSA9IGhyZWY7IC8vL1xuXG4gICAgdGhpcy5zZXRBdHRyaWJ1dGUobmFtZSwgdmFsdWUpO1xuXG4gICAgcmV0dXJuIGRvbUVsZW1lbnQ7XG4gIH1cblxuICBnZXRJZGVudGlmaWVyKGNvbnRleHQpIHtcbiAgICBjb25zdCBjaGlsZE5vZGVzID0gdGhpcy5nZXRDaGlsZE5vZGVzKCksXG4gICAgICAgICAgc2Vjb25kQ2hpbGROb2RlID0gc2Vjb25kKGNoaWxkTm9kZXMpLFxuICAgICAgICAgIHRleHRNYXJrZG93bk5vZGUgPSBzZWNvbmRDaGlsZE5vZGUsICAvLy9cbiAgICAgICAgICB0ZXh0TWFya2Rvd25Ob2RlQ29udGVudCA9IHRleHRNYXJrZG93bk5vZGUuZ2V0Q29udGVudChjb250ZXh0KSxcbiAgICAgICAgICBpZGVudGlmaWVyID0gdGV4dE1hcmtkb3duTm9kZUNvbnRlbnQ7IC8vL1xuXG4gICAgcmV0dXJuIGlkZW50aWZpZXI7XG4gIH1cblxuICBnZXRIUmVmKGNvbnRleHQpIHtcbiAgICBjb25zdCBpZGVudGlmaWVyID0gdGhpcy5nZXRJZGVudGlmaWVyKGNvbnRleHQpLFxuICAgICAgICAgIGhyZWYgPSBgIyR7aWRlbnRpZmllcn1gO1xuXG4gICAgcmV0dXJuIGhyZWY7XG4gIH1cblxuICBjbGVhcigpIHtcbiAgICBjb25zdCBpbm5lckhUTUwgPSBFTVBUWV9TVFJJTkc7XG5cbiAgICB0aGlzLnNldElubmVySFRNTChpbm5lckhUTUwpO1xuICB9XG5cbiAgc2V0TnVtYmVyKG51bWJlcikge1xuICAgIGNvbnN0IGlubmVySFRNTCA9IGAke251bWJlcn1gO1xuXG4gICAgdGhpcy5zZXRJbm5lckhUTUwoaW5uZXJIVE1MKTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUnVsZU5hbWVDaGlsZE5vZGVzQW5kQW1iaWd1b3VzKHJ1bGVOYW1lLCBjaGlsZE5vZGVzLCBhbWJpZ3VvdXMpIHsgcmV0dXJuIE1hcmtkb3duTm9kZS5mcm9tUnVsZU5hbWVDaGlsZE5vZGVzQW5kQW1iaWd1b3VzKExpbmtNYXJrZG93bk5vZGUsIHJ1bGVOYW1lLCBjaGlsZE5vZGVzLCBhbWJpZ3VvdXMpOyB9XG59XG4iXSwibmFtZXMiOlsiTGlua01hcmtkb3duTm9kZSIsInNlY29uZCIsImFycmF5VXRpbGl0aWVzIiwiY3JlYXRlRE9NRWxlbWVudCIsImNvbnRleHQiLCJkb21FbGVtZW50IiwiaHJlZiIsImdldEhSZWYiLCJuYW1lIiwiSFJFRl9BVFRSSUJVVEVfTkFNRSIsInZhbHVlIiwic2V0QXR0cmlidXRlIiwiZ2V0SWRlbnRpZmllciIsImNoaWxkTm9kZXMiLCJnZXRDaGlsZE5vZGVzIiwic2Vjb25kQ2hpbGROb2RlIiwidGV4dE1hcmtkb3duTm9kZSIsInRleHRNYXJrZG93bk5vZGVDb250ZW50IiwiZ2V0Q29udGVudCIsImlkZW50aWZpZXIiLCJjbGVhciIsImlubmVySFRNTCIsIkVNUFRZX1NUUklORyIsInNldElubmVySFRNTCIsInNldE51bWJlciIsIm51bWJlciIsImZyb21SdWxlTmFtZUNoaWxkTm9kZXNBbmRBbWJpZ3VvdXMiLCJydWxlTmFtZSIsImFtYmlndW91cyIsIk1hcmtkb3duTm9kZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFXcUJBOzs7eUJBVFU7K0RBRU47eUJBRUk7OEJBQ087Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVwQyxJQUFNLEFBQUVDLFNBQVdDLHlCQUFjLENBQXpCRDtBQUVPLElBQUEsQUFBTUQsaUNBQUQsQUFBTDtjQUFNQTsrQkFBQUE7YUFBQUE7Z0NBQUFBOzs7a0JBQUFBOztZQUNuQkcsS0FBQUE7bUJBQUFBLFNBQUFBLGlCQUFpQkMsT0FBTztnQkFDdEIsSUFBTUMsYUFBYSx1QkFGRkwsNkJBRVFHLG9CQUFOLElBQUssYUFBa0JDLFVBQ3BDRSxPQUFPLElBQUksQ0FBQ0MsT0FBTyxDQUFDSCxVQUNwQkksT0FBT0MsbUNBQW1CLEVBQzFCQyxRQUFRSixNQUFNLEdBQUc7Z0JBRXZCLElBQUksQ0FBQ0ssWUFBWSxDQUFDSCxNQUFNRTtnQkFFeEIsT0FBT0w7WUFDVDs7O1lBRUFPLEtBQUFBO21CQUFBQSxTQUFBQSxjQUFjUixPQUFPO2dCQUNuQixJQUFNUyxhQUFhLElBQUksQ0FBQ0MsYUFBYSxJQUMvQkMsa0JBQWtCZCxPQUFPWSxhQUN6QkcsbUJBQW1CRCxpQkFDbkJFLDBCQUEwQkQsaUJBQWlCRSxVQUFVLENBQUNkLFVBQ3REZSxhQUFhRix5QkFBeUIsR0FBRztnQkFFL0MsT0FBT0U7WUFDVDs7O1lBRUFaLEtBQUFBO21CQUFBQSxTQUFBQSxRQUFRSCxPQUFPO2dCQUNiLElBQU1lLGFBQWEsSUFBSSxDQUFDUCxhQUFhLENBQUNSLFVBQ2hDRSxPQUFPLEFBQUMsSUFBYyxPQUFYYTtnQkFFakIsT0FBT2I7WUFDVDs7O1lBRUFjLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFNQyxZQUFZQyx1QkFBWTtnQkFFOUIsSUFBSSxDQUFDQyxZQUFZLENBQUNGO1lBQ3BCOzs7WUFFQUcsS0FBQUE7bUJBQUFBLFNBQUFBLFVBQVVDLE1BQU07Z0JBQ2QsSUFBTUosWUFBWSxBQUFDLEdBQVMsT0FBUEk7Z0JBRXJCLElBQUksQ0FBQ0YsWUFBWSxDQUFDRjtZQUNwQjs7OztZQUVPSyxLQUFBQTttQkFBUCxTQUFPQSxtQ0FBbUNDLFFBQVEsRUFBRWQsVUFBVSxFQUFFZSxTQUFTO2dCQUFJLE9BQU9DLGlCQUFZLENBQUNILGtDQUFrQyxDQXpDaEgxQixrQkF5Q21JMkIsVUFBVWQsWUFBWWU7WUFBWTs7O1dBekNySzVCO0VBQXlCNkIsaUJBQVkifQ==