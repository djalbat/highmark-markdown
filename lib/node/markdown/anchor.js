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
var _occamparsers = require("occam-parsers");
var _markdown = /*#__PURE__*/ _interop_require_default(require("../../node/markdown"));
var _constants = require("../../constants");
var _ruleNames = require("../../ruleNames");
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
var AnchorMarkdownNode = /*#__PURE__*/ function(MarkdownNode) {
    _inherits(AnchorMarkdownNode, MarkdownNode);
    var _super = _create_super(AnchorMarkdownNode);
    function AnchorMarkdownNode(ruleName, childNodes, opacity, precedence, domElement, prepend, identifier) {
        _class_call_check(this, AnchorMarkdownNode);
        var _this;
        _this = _super.call(this, ruleName, childNodes, opacity, precedence, domElement, prepend);
        _this.prepend = prepend;
        _this.identifier = identifier;
        return _this;
    }
    _create_class(AnchorMarkdownNode, [
        {
            key: "getPrepend",
            value: function getPrepend() {
                return this.prepend;
            }
        },
        {
            key: "getIdentifier",
            value: function getIdentifier() {
                return this.identifier;
            }
        },
        {
            key: "attributeName",
            value: function attributeName(context) {
                var attributeName = _attributeNames.ID_ATTRIBUTE_NAME;
                return attributeName;
            }
        },
        {
            key: "attributeValue",
            value: function attributeValue(context) {
                var attributeValue = "".concat(this.prepend, "-").concat(this.identifier);
                return attributeValue;
            }
        },
        {
            key: "childNodesAsHTML",
            value: function childNodesAsHTML(indent, context) {
                var content = _constants.EMPTY_STRING, childNodesHTML = content; ///
                return childNodesHTML;
            }
        },
        {
            key: "createChildNodeDOMElements",
            value: function createChildNodeDOMElements(context) {
                var content = _constants.EMPTY_STRING, textNode = document.createTextNode(content), domElement = textNode; ///
                this.addDOMElement(domElement);
            }
        },
        {
            key: "clone",
            value: function clone() {
                return _get(_get_prototype_of(AnchorMarkdownNode.prototype), "clone", this).call(this, this.prepend, this.identifier);
            }
        }
    ], [
        {
            key: "fromPrependAndIdentifier",
            value: function fromPrependAndIdentifier(prepend, identifier) {
                var epsilonNode = _occamparsers.EpsilonNode.fromNothing(), ruleName = _ruleNames.ANCHOR_RULE_NAME, childNodes = [
                    epsilonNode
                ], opacity = null, anchorMarkdownNode = _markdown.default.fromRuleNameChildNodesAndOpacity(AnchorMarkdownNode, ruleName, childNodes, opacity, prepend, identifier);
                return anchorMarkdownNode;
            }
        }
    ]);
    return AnchorMarkdownNode;
}(_markdown.default);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ub2RlL21hcmtkb3duL2FuY2hvci5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgRXBzaWxvbk5vZGUgfSBmcm9tIFwib2NjYW0tcGFyc2Vyc1wiO1xuXG5pbXBvcnQgTWFya2Rvd25Ob2RlIGZyb20gXCIuLi8uLi9ub2RlL21hcmtkb3duXCI7XG5cbmltcG9ydCB7IEVNUFRZX1NUUklORyB9IGZyb20gXCIuLi8uLi9jb25zdGFudHNcIjtcbmltcG9ydCB7IEFOQ0hPUl9SVUxFX05BTUUgfSBmcm9tIFwiLi4vLi4vcnVsZU5hbWVzXCI7XG5pbXBvcnQgeyBJRF9BVFRSSUJVVEVfTkFNRSB9IGZyb20gXCIuLi8uLi9hdHRyaWJ1dGVOYW1lc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBbmNob3JNYXJrZG93bk5vZGUgZXh0ZW5kcyBNYXJrZG93bk5vZGUge1xuICBjb25zdHJ1Y3RvcihydWxlTmFtZSwgY2hpbGROb2Rlcywgb3BhY2l0eSwgcHJlY2VkZW5jZSwgZG9tRWxlbWVudCwgcHJlcGVuZCwgaWRlbnRpZmllcikge1xuICAgIHN1cGVyKHJ1bGVOYW1lLCBjaGlsZE5vZGVzLCBvcGFjaXR5LCBwcmVjZWRlbmNlLCBkb21FbGVtZW50LCBwcmVwZW5kKTtcblxuICAgIHRoaXMucHJlcGVuZCA9IHByZXBlbmQ7XG4gICAgdGhpcy5pZGVudGlmaWVyID0gaWRlbnRpZmllcjtcbiAgfVxuXG4gIGdldFByZXBlbmQoKSB7XG4gICAgcmV0dXJuIHRoaXMucHJlcGVuZDtcbiAgfVxuXG4gIGdldElkZW50aWZpZXIoKSB7XG4gICAgcmV0dXJuIHRoaXMuaWRlbnRpZmllcjtcbiAgfVxuXG4gIGF0dHJpYnV0ZU5hbWUoY29udGV4dCkge1xuICAgIGNvbnN0IGF0dHJpYnV0ZU5hbWUgPSBJRF9BVFRSSUJVVEVfTkFNRTtcblxuICAgIHJldHVybiBhdHRyaWJ1dGVOYW1lO1xuICB9XG5cbiAgYXR0cmlidXRlVmFsdWUoY29udGV4dCkge1xuICAgIGNvbnN0IGF0dHJpYnV0ZVZhbHVlID0gYCR7dGhpcy5wcmVwZW5kfS0ke3RoaXMuaWRlbnRpZmllcn1gO1xuXG4gICAgcmV0dXJuIGF0dHJpYnV0ZVZhbHVlO1xuICB9XG5cbiAgY2hpbGROb2Rlc0FzSFRNTChpbmRlbnQsIGNvbnRleHQpIHtcbiAgICBjb25zdCBjb250ZW50ID0gRU1QVFlfU1RSSU5HLFxuICAgICAgICAgIGNoaWxkTm9kZXNIVE1MID0gY29udGVudDsgLy8vXG5cbiAgICByZXR1cm4gY2hpbGROb2Rlc0hUTUw7XG4gIH1cblxuICBjcmVhdGVDaGlsZE5vZGVET01FbGVtZW50cyhjb250ZXh0KSB7XG4gICAgY29uc3QgY29udGVudCA9IEVNUFRZX1NUUklORyxcbiAgICAgICAgICB0ZXh0Tm9kZSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNvbnRlbnQpLFxuICAgICAgICAgIGRvbUVsZW1lbnQgPSB0ZXh0Tm9kZTsgLy8vXG5cbiAgICB0aGlzLmFkZERPTUVsZW1lbnQoZG9tRWxlbWVudCk7XG4gIH1cblxuICBjbG9uZSgpIHsgcmV0dXJuIHN1cGVyLmNsb25lKHRoaXMucHJlcGVuZCwgdGhpcy5pZGVudGlmaWVyKTsgfVxuXG4gIHN0YXRpYyBmcm9tUHJlcGVuZEFuZElkZW50aWZpZXIocHJlcGVuZCwgaWRlbnRpZmllcikge1xuICAgIGNvbnN0IGVwc2lsb25Ob2RlID0gRXBzaWxvbk5vZGUuZnJvbU5vdGhpbmcoKSxcbiAgICAgICAgICBydWxlTmFtZSA9IEFOQ0hPUl9SVUxFX05BTUUsXG4gICAgICAgICAgY2hpbGROb2RlcyA9IFtcbiAgICAgICAgICAgIGVwc2lsb25Ob2RlXG4gICAgICAgICAgXSxcbiAgICAgICAgICBvcGFjaXR5ID0gbnVsbCxcbiAgICAgICAgICBhbmNob3JNYXJrZG93bk5vZGUgPSBNYXJrZG93bk5vZGUuZnJvbVJ1bGVOYW1lQ2hpbGROb2Rlc0FuZE9wYWNpdHkoQW5jaG9yTWFya2Rvd25Ob2RlLCBydWxlTmFtZSwgY2hpbGROb2Rlcywgb3BhY2l0eSwgcHJlcGVuZCwgaWRlbnRpZmllcik7XG5cbiAgICByZXR1cm4gYW5jaG9yTWFya2Rvd25Ob2RlO1xuICB9XG59XG4iXSwibmFtZXMiOlsiQW5jaG9yTWFya2Rvd25Ob2RlIiwicnVsZU5hbWUiLCJjaGlsZE5vZGVzIiwib3BhY2l0eSIsInByZWNlZGVuY2UiLCJkb21FbGVtZW50IiwicHJlcGVuZCIsImlkZW50aWZpZXIiLCJnZXRQcmVwZW5kIiwiZ2V0SWRlbnRpZmllciIsImF0dHJpYnV0ZU5hbWUiLCJjb250ZXh0IiwiSURfQVRUUklCVVRFX05BTUUiLCJhdHRyaWJ1dGVWYWx1ZSIsImNoaWxkTm9kZXNBc0hUTUwiLCJpbmRlbnQiLCJjb250ZW50IiwiRU1QVFlfU1RSSU5HIiwiY2hpbGROb2Rlc0hUTUwiLCJjcmVhdGVDaGlsZE5vZGVET01FbGVtZW50cyIsInRleHROb2RlIiwiZG9jdW1lbnQiLCJjcmVhdGVUZXh0Tm9kZSIsImFkZERPTUVsZW1lbnQiLCJjbG9uZSIsImZyb21QcmVwZW5kQW5kSWRlbnRpZmllciIsImVwc2lsb25Ob2RlIiwiRXBzaWxvbk5vZGUiLCJmcm9tTm90aGluZyIsIkFOQ0hPUl9SVUxFX05BTUUiLCJhbmNob3JNYXJrZG93bk5vZGUiLCJNYXJrZG93bk5vZGUiLCJmcm9tUnVsZU5hbWVDaGlsZE5vZGVzQW5kT3BhY2l0eSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFVcUJBOzs7NEJBUk87K0RBRUg7eUJBRUk7eUJBQ0k7OEJBQ0M7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVuQixJQUFBLEFBQU1BLG1DQUFELEFBQUw7Y0FBTUE7K0JBQUFBO2FBQUFBLG1CQUNQQyxRQUFRLEVBQUVDLFVBQVUsRUFBRUMsT0FBTyxFQUFFQyxVQUFVLEVBQUVDLFVBQVUsRUFBRUMsT0FBTyxFQUFFQyxVQUFVO2dDQURuRVA7O2tDQUVYQyxVQUFVQyxZQUFZQyxTQUFTQyxZQUFZQyxZQUFZQztRQUU3RCxNQUFLQSxPQUFPLEdBQUdBO1FBQ2YsTUFBS0MsVUFBVSxHQUFHQTs7O2tCQUxEUDs7WUFRbkJRLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0YsT0FBTztZQUNyQjs7O1lBRUFHLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0YsVUFBVTtZQUN4Qjs7O1lBRUFHLEtBQUFBO21CQUFBQSxTQUFBQSxjQUFjQyxPQUFPO2dCQUNuQixJQUFNRCxnQkFBZ0JFLGlDQUFpQjtnQkFFdkMsT0FBT0Y7WUFDVDs7O1lBRUFHLEtBQUFBO21CQUFBQSxTQUFBQSxlQUFlRixPQUFPO2dCQUNwQixJQUFNRSxpQkFBaUIsQUFBQyxHQUFrQixPQUFoQixJQUFJLENBQUNQLE9BQU8sRUFBQyxLQUFtQixPQUFoQixJQUFJLENBQUNDLFVBQVU7Z0JBRXpELE9BQU9NO1lBQ1Q7OztZQUVBQyxLQUFBQTttQkFBQUEsU0FBQUEsaUJBQWlCQyxNQUFNLEVBQUVKLE9BQU87Z0JBQzlCLElBQU1LLFVBQVVDLHVCQUFZLEVBQ3RCQyxpQkFBaUJGLFNBQVMsR0FBRztnQkFFbkMsT0FBT0U7WUFDVDs7O1lBRUFDLEtBQUFBO21CQUFBQSxTQUFBQSwyQkFBMkJSLE9BQU87Z0JBQ2hDLElBQU1LLFVBQVVDLHVCQUFZLEVBQ3RCRyxXQUFXQyxTQUFTQyxjQUFjLENBQUNOLFVBQ25DWCxhQUFhZSxVQUFVLEdBQUc7Z0JBRWhDLElBQUksQ0FBQ0csYUFBYSxDQUFDbEI7WUFDckI7OztZQUVBbUIsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUFVLE9BQU8sdUJBM0NFeEIsK0JBMkNJd0IsU0FBTixJQUFLLGFBQU8sSUFBSSxDQUFDbEIsT0FBTyxFQUFFLElBQUksQ0FBQ0MsVUFBVTtZQUFHOzs7O1lBRXREa0IsS0FBQUE7bUJBQVAsU0FBT0EseUJBQXlCbkIsT0FBTyxFQUFFQyxVQUFVO2dCQUNqRCxJQUFNbUIsY0FBY0MseUJBQVcsQ0FBQ0MsV0FBVyxJQUNyQzNCLFdBQVc0QiwyQkFBZ0IsRUFDM0IzQixhQUFhO29CQUNYd0I7aUJBQ0QsRUFDRHZCLFVBQVUsTUFDVjJCLHFCQUFxQkMsaUJBQVksQ0FBQ0MsZ0NBQWdDLENBcER2RGhDLG9CQW9ENEVDLFVBQVVDLFlBQVlDLFNBQVNHLFNBQVNDO2dCQUVySSxPQUFPdUI7WUFDVDs7O1dBdkRtQjlCO0VBQTJCK0IsaUJBQVkifQ==