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
    try {
        var result = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
    } catch (_) {}
    return (_is_native_reflect_construct = function() {
        return !!result;
    })();
}
var AnchorMarkdownNode = /*#__PURE__*/ function(MarkdownNode) {
    _inherits(AnchorMarkdownNode, MarkdownNode);
    function AnchorMarkdownNode(ruleName, childNodes, opacity, precedence, domElement, prepend, identifier) {
        _class_call_check(this, AnchorMarkdownNode);
        var _this;
        _this = _call_super(this, AnchorMarkdownNode, [
            ruleName,
            childNodes,
            opacity,
            precedence,
            domElement,
            prepend
        ]);
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
            key: "createDOMElement",
            value: function createDOMElement(context) {
                var domElement;
                var content = this.content(context), textNode = document.createTextNode(content);
                domElement = _get(_get_prototype_of(AnchorMarkdownNode.prototype), "createDOMElement", this).call(this, context);
                var parentDOMElement = domElement; ///
                domElement = textNode; ///
                parentDOMElement.appendChild(domElement);
                domElement = parentDOMElement; ///
                return domElement;
            }
        },
        {
            key: "asHTML",
            value: function asHTML(indent, context) {
                if (context === undefined) {
                    context = indent; ///
                    indent = null;
                }
                indent = this.adjustIndent(indent);
                var childNodesHTML = this.childNodesAsHTML(indent, context), startingTag = this.startingTag(context), closingTag = this.closingTag(context), html = indent === null ? "".concat(startingTag).concat(childNodesHTML).concat(closingTag) : "".concat(indent).concat(startingTag, "\n").concat(childNodesHTML).concat(indent).concat(closingTag, "\n");
                return html;
            }
        },
        {
            key: "childNodesAsHTML",
            value: function childNodesAsHTML(indent, context) {
                var content = this.content(context), childNodesHTML = content; ///
                return childNodesHTML;
            }
        },
        {
            key: "content",
            value: function content(context) {
                var content = _constants.EMPTY_STRING;
                return content;
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ub2RlL21hcmtkb3duL2FuY2hvci5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgRXBzaWxvbk5vZGUgfSBmcm9tIFwib2NjYW0tcGFyc2Vyc1wiO1xuXG5pbXBvcnQgTWFya2Rvd25Ob2RlIGZyb20gXCIuLi8uLi9ub2RlL21hcmtkb3duXCI7XG5cbmltcG9ydCB7IEVNUFRZX1NUUklORyB9IGZyb20gXCIuLi8uLi9jb25zdGFudHNcIjtcbmltcG9ydCB7IEFOQ0hPUl9SVUxFX05BTUUgfSBmcm9tIFwiLi4vLi4vcnVsZU5hbWVzXCI7XG5pbXBvcnQgeyBJRF9BVFRSSUJVVEVfTkFNRSB9IGZyb20gXCIuLi8uLi9hdHRyaWJ1dGVOYW1lc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBbmNob3JNYXJrZG93bk5vZGUgZXh0ZW5kcyBNYXJrZG93bk5vZGUge1xuICBjb25zdHJ1Y3RvcihydWxlTmFtZSwgY2hpbGROb2Rlcywgb3BhY2l0eSwgcHJlY2VkZW5jZSwgZG9tRWxlbWVudCwgcHJlcGVuZCwgaWRlbnRpZmllcikge1xuICAgIHN1cGVyKHJ1bGVOYW1lLCBjaGlsZE5vZGVzLCBvcGFjaXR5LCBwcmVjZWRlbmNlLCBkb21FbGVtZW50LCBwcmVwZW5kKTtcblxuICAgIHRoaXMucHJlcGVuZCA9IHByZXBlbmQ7XG4gICAgdGhpcy5pZGVudGlmaWVyID0gaWRlbnRpZmllcjtcbiAgfVxuXG4gIGdldFByZXBlbmQoKSB7XG4gICAgcmV0dXJuIHRoaXMucHJlcGVuZDtcbiAgfVxuXG4gIGdldElkZW50aWZpZXIoKSB7XG4gICAgcmV0dXJuIHRoaXMuaWRlbnRpZmllcjtcbiAgfVxuXG4gIGF0dHJpYnV0ZU5hbWUoY29udGV4dCkge1xuICAgIGNvbnN0IGF0dHJpYnV0ZU5hbWUgPSBJRF9BVFRSSUJVVEVfTkFNRTtcblxuICAgIHJldHVybiBhdHRyaWJ1dGVOYW1lO1xuICB9XG5cbiAgYXR0cmlidXRlVmFsdWUoY29udGV4dCkge1xuICAgIGNvbnN0IGF0dHJpYnV0ZVZhbHVlID0gYCR7dGhpcy5wcmVwZW5kfS0ke3RoaXMuaWRlbnRpZmllcn1gO1xuXG4gICAgcmV0dXJuIGF0dHJpYnV0ZVZhbHVlO1xuICB9XG5cbiAgY3JlYXRlRE9NRWxlbWVudChjb250ZXh0KSB7XG4gICAgbGV0IGRvbUVsZW1lbnQ7XG5cbiAgICBjb25zdCBjb250ZW50ID0gdGhpcy5jb250ZW50KGNvbnRleHQpLFxuICAgICAgICAgIHRleHROb2RlID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY29udGVudCk7XG5cbiAgICBkb21FbGVtZW50ID0gc3VwZXIuY3JlYXRlRE9NRWxlbWVudChjb250ZXh0KVxuXG4gICAgY29uc3QgcGFyZW50RE9NRWxlbWVudCA9IGRvbUVsZW1lbnQ7ICAvLy9cblxuICAgIGRvbUVsZW1lbnQgPSB0ZXh0Tm9kZTsgLy8vXG5cbiAgICBwYXJlbnRET01FbGVtZW50LmFwcGVuZENoaWxkKGRvbUVsZW1lbnQpO1xuXG4gICAgZG9tRWxlbWVudCA9IHBhcmVudERPTUVsZW1lbnQ7ICAvLy9cblxuICAgIHJldHVybiBkb21FbGVtZW50O1xuICB9XG5cbiAgYXNIVE1MKGluZGVudCwgY29udGV4dCkge1xuICAgIGlmIChjb250ZXh0ID09PSB1bmRlZmluZWQpIHtcbiAgICAgIGNvbnRleHQgPSBpbmRlbnQ7IC8vL1xuXG4gICAgICBpbmRlbnQgPSBudWxsO1xuICAgIH1cblxuICAgIGluZGVudCA9IHRoaXMuYWRqdXN0SW5kZW50KGluZGVudCk7XG5cbiAgICBjb25zdCBjaGlsZE5vZGVzSFRNTCA9IHRoaXMuY2hpbGROb2Rlc0FzSFRNTChpbmRlbnQsIGNvbnRleHQpLFxuICAgICAgICAgIHN0YXJ0aW5nVGFnID0gdGhpcy5zdGFydGluZ1RhZyhjb250ZXh0KSxcbiAgICAgICAgICBjbG9zaW5nVGFnID0gdGhpcy5jbG9zaW5nVGFnKGNvbnRleHQpLFxuICAgICAgICAgIGh0bWwgPSAoaW5kZW50ID09PSBudWxsKSA/XG4gICAgICAgICAgICAgICAgICBgJHtzdGFydGluZ1RhZ30ke2NoaWxkTm9kZXNIVE1MfSR7Y2xvc2luZ1RhZ31gIDpcbiAgICAgICAgICAgICAgICAgICAgYCR7aW5kZW50fSR7c3RhcnRpbmdUYWd9XG4ke2NoaWxkTm9kZXNIVE1MfSR7aW5kZW50fSR7Y2xvc2luZ1RhZ31cbmA7XG5cbiAgICByZXR1cm4gaHRtbDtcbiAgfVxuXG4gIGNoaWxkTm9kZXNBc0hUTUwoaW5kZW50LCBjb250ZXh0KSB7XG4gICAgY29uc3QgY29udGVudCA9IHRoaXMuY29udGVudChjb250ZXh0KSxcbiAgICAgICAgICBjaGlsZE5vZGVzSFRNTCA9IGNvbnRlbnQ7IC8vL1xuXG4gICAgcmV0dXJuIGNoaWxkTm9kZXNIVE1MO1xuICB9XG5cbiAgY29udGVudChjb250ZXh0KSB7XG4gICAgY29uc3QgY29udGVudCA9IEVNUFRZX1NUUklORztcblxuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgY2xvbmUoKSB7IHJldHVybiBzdXBlci5jbG9uZSh0aGlzLnByZXBlbmQsIHRoaXMuaWRlbnRpZmllcik7IH1cblxuICBzdGF0aWMgZnJvbVByZXBlbmRBbmRJZGVudGlmaWVyKHByZXBlbmQsIGlkZW50aWZpZXIpIHtcbiAgICBjb25zdCBlcHNpbG9uTm9kZSA9IEVwc2lsb25Ob2RlLmZyb21Ob3RoaW5nKCksXG4gICAgICAgICAgcnVsZU5hbWUgPSBBTkNIT1JfUlVMRV9OQU1FLFxuICAgICAgICAgIGNoaWxkTm9kZXMgPSBbXG4gICAgICAgICAgICBlcHNpbG9uTm9kZVxuICAgICAgICAgIF0sXG4gICAgICAgICAgb3BhY2l0eSA9IG51bGwsXG4gICAgICAgICAgYW5jaG9yTWFya2Rvd25Ob2RlID0gTWFya2Rvd25Ob2RlLmZyb21SdWxlTmFtZUNoaWxkTm9kZXNBbmRPcGFjaXR5KEFuY2hvck1hcmtkb3duTm9kZSwgcnVsZU5hbWUsIGNoaWxkTm9kZXMsIG9wYWNpdHksIHByZXBlbmQsIGlkZW50aWZpZXIpO1xuXG4gICAgcmV0dXJuIGFuY2hvck1hcmtkb3duTm9kZTtcbiAgfVxufVxuIl0sIm5hbWVzIjpbIkFuY2hvck1hcmtkb3duTm9kZSIsInJ1bGVOYW1lIiwiY2hpbGROb2RlcyIsIm9wYWNpdHkiLCJwcmVjZWRlbmNlIiwiZG9tRWxlbWVudCIsInByZXBlbmQiLCJpZGVudGlmaWVyIiwiZ2V0UHJlcGVuZCIsImdldElkZW50aWZpZXIiLCJhdHRyaWJ1dGVOYW1lIiwiY29udGV4dCIsIklEX0FUVFJJQlVURV9OQU1FIiwiYXR0cmlidXRlVmFsdWUiLCJjcmVhdGVET01FbGVtZW50IiwiY29udGVudCIsInRleHROb2RlIiwiZG9jdW1lbnQiLCJjcmVhdGVUZXh0Tm9kZSIsInBhcmVudERPTUVsZW1lbnQiLCJhcHBlbmRDaGlsZCIsImFzSFRNTCIsImluZGVudCIsInVuZGVmaW5lZCIsImFkanVzdEluZGVudCIsImNoaWxkTm9kZXNIVE1MIiwiY2hpbGROb2Rlc0FzSFRNTCIsInN0YXJ0aW5nVGFnIiwiY2xvc2luZ1RhZyIsImh0bWwiLCJFTVBUWV9TVFJJTkciLCJjbG9uZSIsImZyb21QcmVwZW5kQW5kSWRlbnRpZmllciIsImVwc2lsb25Ob2RlIiwiRXBzaWxvbk5vZGUiLCJmcm9tTm90aGluZyIsIkFOQ0hPUl9SVUxFX05BTUUiLCJhbmNob3JNYXJrZG93bk5vZGUiLCJNYXJrZG93bk5vZGUiLCJmcm9tUnVsZU5hbWVDaGlsZE5vZGVzQW5kT3BhY2l0eSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFVcUJBOzs7NEJBUk87K0RBRUg7eUJBRUk7eUJBQ0k7OEJBQ0M7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVuQixJQUFBLEFBQU1BLG1DQUFOO2NBQU1BO2FBQUFBLG1CQUNQQyxRQUFRLEVBQUVDLFVBQVUsRUFBRUMsT0FBTyxFQUFF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