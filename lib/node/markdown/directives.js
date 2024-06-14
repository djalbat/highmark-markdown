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
var first = _necessary.arrayUtilities.first, push = _necessary.arrayUtilities.push;
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ub2RlL21hcmtkb3duL2RpcmVjdGl2ZXMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IGFycmF5VXRpbGl0aWVzIH0gZnJvbSBcIm5lY2Vzc2FyeVwiO1xuXG5pbXBvcnQgTWFya2Rvd25Ob2RlIGZyb20gXCIuLi8uLi9ub2RlL21hcmtkb3duXCI7XG5cbmNvbnN0IHsgZmlyc3QsIHB1c2ggfSA9IGFycmF5VXRpbGl0aWVzO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEaXJlY3RpdmVzTWFya2Rvd25Ob2RlIGV4dGVuZHMgTWFya2Rvd25Ob2RlIHtcbiAgY29uc3RydWN0b3IocnVsZU5hbWUsIGNoaWxkTm9kZXMsIG9wYWNpdHksIHByZWNlZGVuY2UsIGRvbUVsZW1lbnQsIGRvbUVsZW1lbnRzKSB7XG4gICAgc3VwZXIocnVsZU5hbWUsIGNoaWxkTm9kZXMsIG9wYWNpdHksIHByZWNlZGVuY2UsIGRvbUVsZW1lbnQpO1xuXG4gICAgdGhpcy5kb21FbGVtZW50cyA9IGRvbUVsZW1lbnRzO1xuICB9XG5cbiAgZ2V0RE9NRWxlbWVudCgpIHtcbiAgICBsZXQgZG9tRWxlbWVudCA9IG51bGw7XG5cbiAgICBjb25zdCBkb21FbGVtZW50c0xlbmd0aCA9IHRoaXMuZG9tRWxlbWVudHMubGVuZ3RoO1xuXG4gICAgaWYgKGRvbUVsZW1lbnRzTGVuZ3RoID4gMCkge1xuICAgICAgY29uc3QgZmlyc3RET01FbGVtZW50ID0gZmlyc3QodGhpcy5kb21FbGVtZW50cyk7XG5cbiAgICAgIGRvbUVsZW1lbnQgPSBmaXJzdERPTUVsZW1lbnQ7IC8vL1xuICAgIH1cblxuICAgIHJldHVybiBkb21FbGVtZW50O1xuICB9XG5cbiAgZ2V0RE9NRWxlbWVudHMoKSB7XG4gICAgcmV0dXJuIHRoaXMuZG9tRWxlbWVudHM7XG4gIH1cblxuICBhc0hUTUwoaW5kZW50LCBjb250ZXh0KSB7XG4gICAgY29uc3QgY2hpbGROb2Rlc0hUTUwgPSB0aGlzLmNoaWxkTm9kZXNBc0hUTUwoaW5kZW50LCBjb250ZXh0KSxcbiAgICAgICAgICBodG1sID0gY2hpbGROb2Rlc0hUTUw7ICAvLy9cblxuICAgIHJldHVybiBodG1sO1xuICB9XG5cbiAgY3JlYXRlRE9NRWxlbWVudChjb250ZXh0KSB7XG4gICAgY29uc3QgZG9tRWxlbWVudCA9IG51bGwsXG4gICAgICAgICAgY2hpbGROb2RlcyA9IHRoaXMuZ2V0Q2hpbGROb2RlcygpO1xuXG4gICAgY2hpbGROb2Rlcy5mb3JFYWNoKChjaGlsZE5vZGUpID0+IHtcbiAgICAgIGNvbnN0IGNoaWxkTm9kZU5vblRlcm1pbmFsTm9kZSA9IGNoaWxkTm9kZS5pc05vblRlcm1pbmFsTm9kZSgpO1xuXG4gICAgICBpZiAoY2hpbGROb2RlTm9uVGVybWluYWxOb2RlKSB7XG4gICAgICAgIGNvbnN0IG5vblRlcm1pbmFsTm9kZSA9IGNoaWxkTm9kZSwgIC8vL1xuICAgICAgICAgICAgICBtYXJrZG93bk5vZGUgPSBub25UZXJtaW5hbE5vZGU7IC8vL1xuXG4gICAgICAgIG1hcmtkb3duTm9kZS5jcmVhdGVET01FbGVtZW50KGNvbnRleHQpO1xuXG4gICAgICAgIGNvbnN0IG1hcmtkb3duTm9kZURPTUVsZW1lbnRzID0gbWFya2Rvd25Ob2RlLmdldERPTUVsZW1lbnRzKCk7XG5cbiAgICAgICAgcHVzaCh0aGlzLmRvbUVsZW1lbnRzLCBtYXJrZG93bk5vZGVET01FbGVtZW50cyk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICByZXR1cm4gZG9tRWxlbWVudDtcbiAgfVxuXG4gIGNsb25lKCkge1xuICAgIGNvbnN0IGRvbUVsZW1lbnRzID0gW10sXG4gICAgICAgICAgZGlyZWN0aXZlc01hcmtkb3duTm9kZSA9IHN1cGVyLmNsb25lKGRvbUVsZW1lbnRzKTtcblxuICAgIHJldHVybiBkaXJlY3RpdmVzTWFya2Rvd25Ob2RlO1xuICB9XG5cbiAgc3RhdGljIGZyb21SdWxlTmFtZUNoaWxkTm9kZXNBbmRPcGFjaXR5KHJ1bGVOYW1lLCBjaGlsZE5vZGVzLCBvcGFjaXR5KSB7XG4gICAgY29uc3QgZG9tRWxlbWVudHMgPSBbXSxcbiAgICAgICAgICBkaXJlY3RpdmVzTWFya2Rvd25Ob2RlID0gTWFya2Rvd25Ob2RlLmZyb21SdWxlTmFtZUNoaWxkTm9kZXNBbmRPcGFjaXR5KERpcmVjdGl2ZXNNYXJrZG93bk5vZGUsIHJ1bGVOYW1lLCBjaGlsZE5vZGVzLCBvcGFjaXR5LCBkb21FbGVtZW50cyk7XG5cbiAgICByZXR1cm4gZGlyZWN0aXZlc01hcmtkb3duTm9kZTtcbiAgfVxufVxuIl0sIm5hbWVzIjpbIkRpcmVjdGl2ZXNNYXJrZG93bk5vZGUiLCJmaXJzdCIsImFycmF5VXRpbGl0aWVzIiwicHVzaCIsInJ1bGVOYW1lIiwiY2hpbGROb2RlcyIsIm9wYWNpdHkiLCJwcmVjZWRlbmNlIiwiZG9tRWxlbWVudCIsImRvbUVsZW1lbnRzIiwiZ2V0RE9NRWxlbWVudCIsImRvbUVsZW1lbnRzTGVuZ3RoIiwibGVuZ3RoIiwiZmlyc3RET01FbGVtZW50IiwiZ2V0RE9NRWxlbWVudHMiLCJhc0hUTUwiLCJpbmRlbnQiLCJjb250ZXh0IiwiY2hpbGROb2Rlc0hUTUwiLCJjaGlsZE5vZGVzQXNIVE1MIiwiaHRtbCIsImNyZWF0ZURPTUVsZW1lbnQiLCJnZXRDaGlsZE5vZGVzIiwiZm9yRWFjaCIsImNoaWxkTm9kZSIsImNoaWxkTm9kZU5vblRlcm1pbmFsTm9kZSIsImlzTm9uVGVybWluYWxOb2RlIiwibm9uVGVybWluYWxOb2RlIiwibWFya2Rvd25Ob2RlIiwibWFya2Rvd25Ob2RlRE9NRWxlbWVudHMiLCJjbG9uZSIsImRpcmVjdGl2ZXNNYXJrZG93bk5vZGUiLCJmcm9tUnVsZU5hbWVDaGlsZE5vZGVzQW5kT3BhY2l0eSIsIk1hcmtkb3duTm9kZSJdLCJyYW5nZU1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OyIsIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQVFxQkE7Ozt5QkFOVTsrREFFTjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRXpCLElBQVFDLFFBQWdCQyx5QkFBYyxDQUE5QkQsT0FBT0UsT0FBU0QseUJBQWMsQ0FBdkJDO0FBRUEsSUFBQSxBQUFNSCx1Q0FBRCxBQUFMO2NBQU1BOytCQUFBQTthQUFBQSx1QkFDUEksUUFBUSxFQUFFQyxVQUFVLEVBQUVDLE9BQU8sRUFBRUMsVUFBVSxFQUFFQyxVQUFVLEVBQUVDLFdBQVc7Z0NBRDNEVDs7a0NBRVhJLFVBQVVDLFlBQVlDLFNBQVNDLFlBQVlDO1FBRWpELE1BQUtDLFdBQVcsR0FBR0E7OztrQkFKRlQ7O1lBT25CVSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBSUYsYUFBYTtnQkFFakIsSUFBTUcsb0JBQW9CLElBQUksQ0FBQ0YsV0FBVyxDQUFDRyxNQUFNO2dCQUVqRCxJQUFJRCxvQkFBb0IsR0FBRztvQkFDekIsSUFBTUUsa0JBQWtCWixNQUFNLElBQUksQ0FBQ1EsV0FBVztvQkFFOUNELGFBQWFLLGlCQUFpQixHQUFHO2dCQUNuQztnQkFFQSxPQUFPTDtZQUNUOzs7WUFFQU0sS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDTCxXQUFXO1lBQ3pCOzs7WUFFQU0sS0FBQUE7bUJBQUFBLFNBQUFBLE9BQU9DLE1BQU0sRUFBRUMsT0FBTztnQkFDcEIsSUFBTUMsaUJBQWlCLElBQUksQ0FBQ0MsZ0JBQWdCLENBQUNILFFBQVFDLFVBQy9DRyxPQUFPRixnQkFBaUIsR0FBRztnQkFFakMsT0FBT0U7WUFDVDs7O1lBRUFDLEtBQUFBO21CQUFBQSxTQUFBQSxpQkFBaUJKLE9BQU87O2dCQUN0QixJQUFNVCxhQUFhLE1BQ2JILGFBQWEsSUFBSSxDQUFDaUIsYUFBYTtnQkFFckNqQixXQUFXa0IsT0FBTyxDQUFDLFNBQUNDO29CQUNsQixJQUFNQywyQkFBMkJELFVBQVVFLGlCQUFpQjtvQkFFNUQsSUFBSUQsMEJBQTBCO3dCQUM1QixJQUFNRSxrQkFBa0JILFdBQ2xCSSxlQUFlRCxpQkFBaUIsR0FBRzt3QkFFekNDLGFBQWFQLGdCQUFnQixDQUFDSjt3QkFFOUIsSUFBTVksMEJBQTBCRCxhQUFhZCxjQUFjO3dCQUUzRFgsS0FBSyxNQUFLTSxXQUFXLEVBQUVvQjtvQkFDekI7Z0JBQ0Y7Z0JBRUEsT0FBT3JCO1lBQ1Q7OztZQUVBc0IsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQU1yQixjQUFjLEVBQUUsRUFDaEJzQix5QkFBeUIsdUJBeERkL0IsbUNBd0RvQjhCLFNBQU4sSUFBSyxhQUFPckI7Z0JBRTNDLE9BQU9zQjtZQUNUOzs7O1lBRU9DLEtBQUFBO21CQUFQLFNBQU9BLGlDQUFpQzVCLFFBQVEsRUFBRUMsVUFBVSxFQUFFQyxPQUFPO2dCQUNuRSxJQUFNRyxjQUFjLEVBQUUsRUFDaEJzQix5QkFBeUJFLGlCQUFZLENBQUNELGdDQUFnQyxDQS9EM0RoQyx3QkErRG9GSSxVQUFVQyxZQUFZQyxTQUFTRztnQkFFcEksT0FBT3NCO1lBQ1Q7OztXQWxFbUIvQjtFQUErQmlDLGlCQUFZIn0=