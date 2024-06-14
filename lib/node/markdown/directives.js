"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return DirectivesMarkdownNode;
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
var clear = _necessary.arrayUtilities.clear, first = _necessary.arrayUtilities.first, push = _necessary.arrayUtilities.push;
var DirectivesMarkdownNode = /*#__PURE__*/ function(MarkdownNode) {
    _inherits(DirectivesMarkdownNode, MarkdownNode);
    var _super = _create_super(DirectivesMarkdownNode);
    function DirectivesMarkdownNode(ruleName, childNodes, opacity, precedence, domElement, domElements) {
        _class_call_check(this, DirectivesMarkdownNode);
        var _this;
        _this = _super.call(this, ruleName, childNodes, opacity, precedence, domElement);
        _this.domElements = domElements;
        return _this;
    }
    _create_class(DirectivesMarkdownNode, [
        {
            key: "getDOMElement",
            value: function getDOMElement() {
                var domElement = null;
                var domElementsLength = this.domElements.length;
                if (domElementsLength > 0) {
                    var firstDOMElement = first(this.domElements);
                    domElement = firstDOMElement; ///
                }
                return domElement;
            }
        },
        {
            key: "getDOMElements",
            value: function getDOMElements() {
                return this.domElements;
            }
        },
        {
            key: "asHTML",
            value: function asHTML(indent, context) {
                var childNodesHTML = this.childNodesAsHTML(indent, context), html = childNodesHTML; ///
                return html;
            }
        },
        {
            key: "createDOMElement",
            value: function createDOMElement(context) {
                var _this = this;
                var domElement = null, childNodes = this.getChildNodes();
                clear(this.domElements);
                childNodes.forEach(function(childNode) {
                    var childNodeNonTerminalNode = childNode.isNonTerminalNode();
                    if (childNodeNonTerminalNode) {
                        var nonTerminalNode = childNode, markdownNode = nonTerminalNode; ///
                        markdownNode.createDOMElement(context);
                        var markdownNodeDOMElements = markdownNode.getDOMElements();
                        push(_this.domElements, markdownNodeDOMElements);
                    }
                });
                return domElement;
            }
        },
        {
            key: "clone",
            value: function clone() {
                var domElements = [], directivesMarkdownNode = _get(_get_prototype_of(DirectivesMarkdownNode.prototype), "clone", this).call(this, domElements);
                return directivesMarkdownNode;
            }
        }
    ], [
        {
            key: "fromRuleNameChildNodesAndOpacity",
            value: function fromRuleNameChildNodesAndOpacity(ruleName, childNodes, opacity) {
                var domElements = [], directivesMarkdownNode = _markdown.default.fromRuleNameChildNodesAndOpacity(DirectivesMarkdownNode, ruleName, childNodes, opacity, domElements);
                return directivesMarkdownNode;
            }
        }
    ]);
    return DirectivesMarkdownNode;
}(_markdown.default);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ub2RlL21hcmtkb3duL2RpcmVjdGl2ZXMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IGFycmF5VXRpbGl0aWVzIH0gZnJvbSBcIm5lY2Vzc2FyeVwiO1xuXG5pbXBvcnQgTWFya2Rvd25Ob2RlIGZyb20gXCIuLi8uLi9ub2RlL21hcmtkb3duXCI7XG5cbmNvbnN0IHsgY2xlYXIsIGZpcnN0LCBwdXNoIH0gPSBhcnJheVV0aWxpdGllcztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRGlyZWN0aXZlc01hcmtkb3duTm9kZSBleHRlbmRzIE1hcmtkb3duTm9kZSB7XG4gIGNvbnN0cnVjdG9yKHJ1bGVOYW1lLCBjaGlsZE5vZGVzLCBvcGFjaXR5LCBwcmVjZWRlbmNlLCBkb21FbGVtZW50LCBkb21FbGVtZW50cykge1xuICAgIHN1cGVyKHJ1bGVOYW1lLCBjaGlsZE5vZGVzLCBvcGFjaXR5LCBwcmVjZWRlbmNlLCBkb21FbGVtZW50KTtcblxuICAgIHRoaXMuZG9tRWxlbWVudHMgPSBkb21FbGVtZW50cztcbiAgfVxuXG4gIGdldERPTUVsZW1lbnQoKSB7XG4gICAgbGV0IGRvbUVsZW1lbnQgPSBudWxsO1xuXG4gICAgY29uc3QgZG9tRWxlbWVudHNMZW5ndGggPSB0aGlzLmRvbUVsZW1lbnRzLmxlbmd0aDtcblxuICAgIGlmIChkb21FbGVtZW50c0xlbmd0aCA+IDApIHtcbiAgICAgIGNvbnN0IGZpcnN0RE9NRWxlbWVudCA9IGZpcnN0KHRoaXMuZG9tRWxlbWVudHMpO1xuXG4gICAgICBkb21FbGVtZW50ID0gZmlyc3RET01FbGVtZW50OyAvLy9cbiAgICB9XG5cbiAgICByZXR1cm4gZG9tRWxlbWVudDtcbiAgfVxuXG4gIGdldERPTUVsZW1lbnRzKCkge1xuICAgIHJldHVybiB0aGlzLmRvbUVsZW1lbnRzO1xuICB9XG5cbiAgYXNIVE1MKGluZGVudCwgY29udGV4dCkge1xuICAgIGNvbnN0IGNoaWxkTm9kZXNIVE1MID0gdGhpcy5jaGlsZE5vZGVzQXNIVE1MKGluZGVudCwgY29udGV4dCksXG4gICAgICAgICAgaHRtbCA9IGNoaWxkTm9kZXNIVE1MOyAgLy8vXG5cbiAgICByZXR1cm4gaHRtbDtcbiAgfVxuXG4gIGNyZWF0ZURPTUVsZW1lbnQoY29udGV4dCkge1xuICAgIGNvbnN0IGRvbUVsZW1lbnQgPSBudWxsLFxuICAgICAgICAgIGNoaWxkTm9kZXMgPSB0aGlzLmdldENoaWxkTm9kZXMoKTtcblxuICAgIGNsZWFyKHRoaXMuZG9tRWxlbWVudHMpO1xuXG4gICAgY2hpbGROb2Rlcy5mb3JFYWNoKChjaGlsZE5vZGUpID0+IHtcbiAgICAgIGNvbnN0IGNoaWxkTm9kZU5vblRlcm1pbmFsTm9kZSA9IGNoaWxkTm9kZS5pc05vblRlcm1pbmFsTm9kZSgpO1xuXG4gICAgICBpZiAoY2hpbGROb2RlTm9uVGVybWluYWxOb2RlKSB7XG4gICAgICAgIGNvbnN0IG5vblRlcm1pbmFsTm9kZSA9IGNoaWxkTm9kZSwgIC8vL1xuICAgICAgICAgICAgICBtYXJrZG93bk5vZGUgPSBub25UZXJtaW5hbE5vZGU7IC8vL1xuXG4gICAgICAgIG1hcmtkb3duTm9kZS5jcmVhdGVET01FbGVtZW50KGNvbnRleHQpO1xuXG4gICAgICAgIGNvbnN0IG1hcmtkb3duTm9kZURPTUVsZW1lbnRzID0gbWFya2Rvd25Ob2RlLmdldERPTUVsZW1lbnRzKCk7XG5cbiAgICAgICAgcHVzaCh0aGlzLmRvbUVsZW1lbnRzLCBtYXJrZG93bk5vZGVET01FbGVtZW50cyk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICByZXR1cm4gZG9tRWxlbWVudDtcbiAgfVxuXG4gIGNsb25lKCkge1xuICAgIGNvbnN0IGRvbUVsZW1lbnRzID0gW10sXG4gICAgICAgICAgZGlyZWN0aXZlc01hcmtkb3duTm9kZSA9IHN1cGVyLmNsb25lKGRvbUVsZW1lbnRzKTtcblxuICAgIHJldHVybiBkaXJlY3RpdmVzTWFya2Rvd25Ob2RlO1xuICB9XG5cbiAgc3RhdGljIGZyb21SdWxlTmFtZUNoaWxkTm9kZXNBbmRPcGFjaXR5KHJ1bGVOYW1lLCBjaGlsZE5vZGVzLCBvcGFjaXR5KSB7XG4gICAgY29uc3QgZG9tRWxlbWVudHMgPSBbXSxcbiAgICAgICAgICBkaXJlY3RpdmVzTWFya2Rvd25Ob2RlID0gTWFya2Rvd25Ob2RlLmZyb21SdWxlTmFtZUNoaWxkTm9kZXNBbmRPcGFjaXR5KERpcmVjdGl2ZXNNYXJrZG93bk5vZGUsIHJ1bGVOYW1lLCBjaGlsZE5vZGVzLCBvcGFjaXR5LCBkb21FbGVtZW50cyk7XG5cbiAgICByZXR1cm4gZGlyZWN0aXZlc01hcmtkb3duTm9kZTtcbiAgfVxufVxuIl0sIm5hbWVzIjpbIkRpcmVjdGl2ZXNNYXJrZG93bk5vZGUiLCJjbGVhciIsImFycmF5VXRpbGl0aWVzIiwiZmlyc3QiLCJwdXNoIiwicnVsZU5hbWUiLCJjaGlsZE5vZGVzIiwib3BhY2l0eSIsInByZWNlZGVuY2UiLCJkb21FbGVtZW50IiwiZG9tRWxlbWVudHMiLCJnZXRET01FbGVtZW50IiwiZG9tRWxlbWVudHNMZW5ndGgiLCJsZW5ndGgiLCJmaXJzdERPTUVsZW1lbnQiLCJnZXRET01FbGVtZW50cyIsImFzSFRNTCIsImluZGVudCIsImNvbnRleHQiLCJjaGlsZE5vZGVzSFRNTCIsImNoaWxkTm9kZXNBc0hUTUwiLCJodG1sIiwiY3JlYXRlRE9NRWxlbWVudCIsImdldENoaWxkTm9kZXMiLCJmb3JFYWNoIiwiY2hpbGROb2RlIiwiY2hpbGROb2RlTm9uVGVybWluYWxOb2RlIiwiaXNOb25UZXJtaW5hbE5vZGUiLCJub25UZXJtaW5hbE5vZGUiLCJtYXJrZG93bk5vZGUiLCJtYXJrZG93bk5vZGVET01FbGVtZW50cyIsImNsb25lIiwiZGlyZWN0aXZlc01hcmtkb3duTm9kZSIsImZyb21SdWxlTmFtZUNoaWxkTm9kZXNBbmRPcGFjaXR5IiwiTWFya2Rvd25Ob2RlIl0sInJhbmdlTWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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