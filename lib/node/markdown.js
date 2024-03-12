"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return _default;
    }
});
var _occamparsers = require("occam-parsers");
var _node = /*#__PURE__*/ _interop_require_default(require("../mixins/node"));
var _element = /*#__PURE__*/ _interop_require_default(require("../mixins/element"));
var _ruleNameToHTMLMap = /*#__PURE__*/ _interop_require_default(require("../ruleNameToHTMLMap"));
function _array_like_to_array(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _array_without_holes(arr) {
    if (Array.isArray(arr)) return _array_like_to_array(arr);
}
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
function _iterable_to_array(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
function _non_iterable_spread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
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
function _to_consumable_array(arr) {
    return _array_without_holes(arr) || _iterable_to_array(arr) || _unsupported_iterable_to_array(arr) || _non_iterable_spread();
}
function _type_of(obj) {
    "@swc/helpers - typeof";
    return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
}
function _unsupported_iterable_to_array(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _array_like_to_array(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(n);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _array_like_to_array(o, minLen);
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
var MarkdownNode = /*#__PURE__*/ function(NonTerminalNode) {
    _inherits(MarkdownNode, NonTerminalNode);
    var _super = _create_super(MarkdownNode);
    function MarkdownNode(ruleName, childNodes, precedence, ambiguous, domElement) {
        _class_call_check(this, MarkdownNode);
        var _this;
        _this = _super.call(this, ruleName, childNodes, precedence, ambiguous);
        _this.domElement = domElement;
        return _this;
    }
    _create_class(MarkdownNode, [
        {
            key: "getDOMElement",
            value: function getDOMElement() {
                return this.domElement;
            }
        },
        {
            key: "setDOMElement",
            value: function setDOMElement(domElement) {
                this.domElement = domElement;
            }
        },
        {
            key: "getTagName",
            value: function getTagName() {
                var html = _ruleNameToHTMLMap.default[this.ruleName], tagName = html.tagName;
                return tagName;
            }
        },
        {
            key: "getClassName",
            value: function getClassName() {
                var html = _ruleNameToHTMLMap.default[this.ruleName], className = html.className;
                return className;
            }
        },
        {
            key: "setInnerHTML",
            value: function setInnerHTML(innerHTML) {
                this.domElement.innerHTML = innerHTML;
            }
        },
        {
            key: "setAttribute",
            value: function setAttribute(name, value) {
                this.domElement.setAttribute(name, value);
            }
        },
        {
            key: "createDOMElement",
            value: function createDOMElement(context) {
                var domElement = null;
                var tagName = this.getTagName();
                if (tagName !== null) {
                    domElement = document.createElement(tagName);
                    var className = this.getClassName();
                    if (className !== null) {
                        Object.assign(domElement, {
                            className: className
                        });
                    }
                    this.setDOMElement(domElement);
                    this.createChildNodeDOMElements(context);
                }
                return domElement;
            }
        },
        {
            key: "createChildNodeDOMElements",
            value: function createChildNodeDOMElements(context) {
                var _this = this;
                var childNodes = this.getChildNodes();
                childNodes.forEach(function(childNode) {
                    var childNodeNonTerminalNode = childNode.isNonTerminalNode();
                    if (childNodeNonTerminalNode) {
                        var domElement = childNode.createDOMElement(context);
                        if (domElement !== null) {
                            _this.insertDOMElement(domElement);
                        }
                    }
                });
            }
        },
        {
            key: "insertDOMElement",
            value: function insertDOMElement(domElement) {
                var parentDOMElement = this.domElement, siblingDOMElement = null;
                parentDOMElement.insertBefore(domElement, siblingDOMElement);
            }
        }
    ], [
        {
            key: "fromRuleNameChildNodesAndAmbiguous",
            value: function fromRuleNameChildNodesAndAmbiguous(Class, ruleName, childNodes, ambiguous) {
                for(var _len = arguments.length, remainingArguments = new Array(_len > 4 ? _len - 4 : 0), _key = 4; _key < _len; _key++){
                    remainingArguments[_key - 4] = arguments[_key];
                }
                var _NonTerminalNode;
                var domElement = null, markdownNode = (_NonTerminalNode = _occamparsers.NonTerminalNode).fromRuleNameChildNodesAndAmbiguous.apply(_NonTerminalNode, [
                    Class,
                    ruleName,
                    childNodes,
                    ambiguous,
                    domElement
                ].concat(_to_consumable_array(remainingArguments)));
                return markdownNode;
            }
        }
    ]);
    return MarkdownNode;
}(_occamparsers.NonTerminalNode);
Object.assign(MarkdownNode.prototype, _node.default);
Object.assign(MarkdownNode.prototype, _element.default);
var _default = MarkdownNode;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9ub2RlL21hcmtkb3duLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBOb25UZXJtaW5hbE5vZGUgfSBmcm9tIFwib2NjYW0tcGFyc2Vyc1wiO1xuXG5pbXBvcnQgbm9kZU1peGlucyBmcm9tIFwiLi4vbWl4aW5zL25vZGVcIjtcbmltcG9ydCBlbGVtZW50TWl4aW5zIGZyb20gXCIuLi9taXhpbnMvZWxlbWVudFwiO1xuaW1wb3J0IHJ1bGVOYW1lVG9IVE1MTWFwIGZyb20gXCIuLi9ydWxlTmFtZVRvSFRNTE1hcFwiO1xuXG5jbGFzcyBNYXJrZG93bk5vZGUgZXh0ZW5kcyBOb25UZXJtaW5hbE5vZGUge1xuICBjb25zdHJ1Y3RvcihydWxlTmFtZSwgY2hpbGROb2RlcywgcHJlY2VkZW5jZSwgYW1iaWd1b3VzLCBkb21FbGVtZW50KSB7XG4gICAgc3VwZXIocnVsZU5hbWUsIGNoaWxkTm9kZXMsIHByZWNlZGVuY2UsIGFtYmlndW91cyk7XG5cbiAgICB0aGlzLmRvbUVsZW1lbnQgPSBkb21FbGVtZW50O1xuICB9XG5cbiAgZ2V0RE9NRWxlbWVudCgpIHtcbiAgICByZXR1cm4gdGhpcy5kb21FbGVtZW50O1xuICB9XG5cbiAgc2V0RE9NRWxlbWVudChkb21FbGVtZW50KSB7XG4gICAgdGhpcy5kb21FbGVtZW50ID0gZG9tRWxlbWVudDtcbiAgfVxuXG4gIGdldFRhZ05hbWUoKSB7XG4gICAgY29uc3QgaHRtbCA9IHJ1bGVOYW1lVG9IVE1MTWFwW3RoaXMucnVsZU5hbWVdLFxuICAgICAgICAgIHsgdGFnTmFtZSB9ID0gaHRtbDtcblxuICAgIHJldHVybiB0YWdOYW1lO1xuICB9XG5cbiAgZ2V0Q2xhc3NOYW1lKCkge1xuICAgIGNvbnN0IGh0bWwgPSBydWxlTmFtZVRvSFRNTE1hcFt0aGlzLnJ1bGVOYW1lXSxcbiAgICAgICAgICB7IGNsYXNzTmFtZSB9ID0gaHRtbDtcblxuICAgIHJldHVybiBjbGFzc05hbWU7XG4gIH1cblxuICBzZXRJbm5lckhUTUwoaW5uZXJIVE1MKSB7IHRoaXMuZG9tRWxlbWVudC5pbm5lckhUTUwgPSBpbm5lckhUTUw7IH1cblxuICBzZXRBdHRyaWJ1dGUobmFtZSwgdmFsdWUpIHsgdGhpcy5kb21FbGVtZW50LnNldEF0dHJpYnV0ZShuYW1lLCB2YWx1ZSk7IH1cblxuICBjcmVhdGVET01FbGVtZW50KGNvbnRleHQpIHtcbiAgICBsZXQgZG9tRWxlbWVudCA9IG51bGw7XG5cbiAgICBjb25zdCB0YWdOYW1lID0gdGhpcy5nZXRUYWdOYW1lKCk7XG5cbiAgICBpZiAodGFnTmFtZSAhPT0gbnVsbCkge1xuICAgICAgZG9tRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQodGFnTmFtZSk7XG5cbiAgICAgIGNvbnN0IGNsYXNzTmFtZSA9IHRoaXMuZ2V0Q2xhc3NOYW1lKCk7XG5cbiAgICAgIGlmIChjbGFzc05hbWUgIT09IG51bGwpIHtcbiAgICAgICAgT2JqZWN0LmFzc2lnbihkb21FbGVtZW50LCB7XG4gICAgICAgICAgY2xhc3NOYW1lXG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICB0aGlzLnNldERPTUVsZW1lbnQoZG9tRWxlbWVudCk7XG5cbiAgICAgIHRoaXMuY3JlYXRlQ2hpbGROb2RlRE9NRWxlbWVudHMoY29udGV4dCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGRvbUVsZW1lbnQ7XG4gIH1cblxuICBjcmVhdGVDaGlsZE5vZGVET01FbGVtZW50cyhjb250ZXh0KSB7XG4gICAgY29uc3QgY2hpbGROb2RlcyA9IHRoaXMuZ2V0Q2hpbGROb2RlcygpO1xuXG4gICAgY2hpbGROb2Rlcy5mb3JFYWNoKChjaGlsZE5vZGUpID0+IHtcbiAgICAgIGNvbnN0IGNoaWxkTm9kZU5vblRlcm1pbmFsTm9kZSA9IGNoaWxkTm9kZS5pc05vblRlcm1pbmFsTm9kZSgpO1xuXG4gICAgICBpZiAoY2hpbGROb2RlTm9uVGVybWluYWxOb2RlKSB7XG4gICAgICAgIGNvbnN0IGRvbUVsZW1lbnQgPSBjaGlsZE5vZGUuY3JlYXRlRE9NRWxlbWVudChjb250ZXh0KTtcblxuICAgICAgICBpZiAoZG9tRWxlbWVudCAhPT0gbnVsbCkge1xuICAgICAgICAgIHRoaXMuaW5zZXJ0RE9NRWxlbWVudChkb21FbGVtZW50KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgaW5zZXJ0RE9NRWxlbWVudChkb21FbGVtZW50KSB7XG4gICAgY29uc3QgcGFyZW50RE9NRWxlbWVudCA9IHRoaXMuZG9tRWxlbWVudCwgIC8vL1xuICAgICAgICAgIHNpYmxpbmdET01FbGVtZW50ID0gbnVsbDtcblxuICAgIHBhcmVudERPTUVsZW1lbnQuaW5zZXJ0QmVmb3JlKGRvbUVsZW1lbnQsIHNpYmxpbmdET01FbGVtZW50KTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUnVsZU5hbWVDaGlsZE5vZGVzQW5kQW1iaWd1b3VzKENsYXNzLCBydWxlTmFtZSwgY2hpbGROb2RlcywgYW1iaWd1b3VzLCAuLi5yZW1haW5pbmdBcmd1bWVudHMpIHtcbiAgICBjb25zdCBkb21FbGVtZW50ID0gbnVsbCxcbiAgICAgICAgICBtYXJrZG93bk5vZGUgPSBOb25UZXJtaW5hbE5vZGUuZnJvbVJ1bGVOYW1lQ2hpbGROb2Rlc0FuZEFtYmlndW91cyhDbGFzcywgcnVsZU5hbWUsIGNoaWxkTm9kZXMsIGFtYmlndW91cywgZG9tRWxlbWVudCwgLi4ucmVtYWluaW5nQXJndW1lbnRzKTtcblxuICAgIHJldHVybiBtYXJrZG93bk5vZGU7XG4gIH1cbn1cblxuT2JqZWN0LmFzc2lnbihNYXJrZG93bk5vZGUucHJvdG90eXBlLCBub2RlTWl4aW5zKTtcbk9iamVjdC5hc3NpZ24oTWFya2Rvd25Ob2RlLnByb3RvdHlwZSwgZWxlbWVudE1peGlucyk7XG5cbmV4cG9ydCBkZWZhdWx0IE1hcmtkb3duTm9kZTtcbiJdLCJuYW1lcyI6WyJNYXJrZG93bk5vZGUiLCJydWxlTmFtZSIsImNoaWxkTm9kZXMiLCJwcmVjZWRlbmNlIiwiYW1iaWd1b3VzIiwiZG9tRWxlbWVudCIsImdldERPTUVsZW1lbnQiLCJzZXRET01FbGVtZW50IiwiZ2V0VGFnTmFtZSIsImh0bWwiLCJydWxlTmFtZVRvSFRNTE1hcCIsInRhZ05hbWUiLCJnZXRDbGFzc05hbWUiLCJjbGFzc05hbWUiLCJzZXRJbm5lckhUTUwiLCJpbm5lckhUTUwiLCJzZXRBdHRyaWJ1dGUiLCJuYW1lIiwidmFsdWUiLCJjcmVhdGVET01FbGVtZW50IiwiY29udGV4dCIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsIk9iamVjdCIsImFzc2lnbiIsImNyZWF0ZUNoaWxkTm9kZURPTUVsZW1lbnRzIiwiZ2V0Q2hpbGROb2RlcyIsImZvckVhY2giLCJjaGlsZE5vZGUiLCJjaGlsZE5vZGVOb25UZXJtaW5hbE5vZGUiLCJpc05vblRlcm1pbmFsTm9kZSIsImluc2VydERPTUVsZW1lbnQiLCJwYXJlbnRET01FbGVtZW50Iiwic2libGluZ0RPTUVsZW1lbnQiLCJpbnNlcnRCZWZvcmUiLCJmcm9tUnVsZU5hbWVDaGlsZE5vZGVzQW5kQW1iaWd1b3VzIiwiQ2xhc3MiLCJyZW1haW5pbmdBcmd1bWVudHMiLCJOb25UZXJtaW5hbE5vZGUiLCJtYXJrZG93bk5vZGUiLCJwcm90b3R5cGUiLCJub2RlTWl4aW5zIiwiZWxlbWVudE1peGlucyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBbUdBOzs7ZUFBQTs7OzRCQWpHZ0M7MkRBRVQ7OERBQ0c7d0VBQ0k7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRTlCLElBQUEsQUFBTUEsNkJBQUQsQUFBTDtjQUFNQTsrQkFBQUE7YUFBQUEsYUFDUUMsUUFBUSxFQUFFQyxVQUFVLEVBQUVDLFVBQVUsRUFBRUMsU0FBUyxFQUFFQyxVQUFVO2dDQUQvREw7O2tDQUVJQyxVQUFV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