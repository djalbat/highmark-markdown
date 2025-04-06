"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return PageNumberDirectiveMarkdownNode;
    }
});
var _directive = /*#__PURE__*/ _interop_require_default(require("../../../node/markdown/directive"));
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
var PageNumberDirectiveMarkdownNode = /*#__PURE__*/ function(DirectiveMarkdownNode) {
    _inherits(PageNumberDirectiveMarkdownNode, DirectiveMarkdownNode);
    function PageNumberDirectiveMarkdownNode(ruleName, childNodes, precedence, opacity, domElement, pageNumber) {
        _class_call_check(this, PageNumberDirectiveMarkdownNode);
        var _this;
        _this = _call_super(this, PageNumberDirectiveMarkdownNode, [
            ruleName,
            childNodes,
            precedence,
            opacity,
            domElement
        ]);
        _this.pageNumber = pageNumber;
        return _this;
    }
    _create_class(PageNumberDirectiveMarkdownNode, [
        {
            key: "getPageNumber",
            value: function getPageNumber() {
                return this.pageNumber;
            }
        },
        {
            key: "setPageNumber",
            value: function setPageNumber(pageNumber) {
                this.pageNumber = pageNumber;
            }
        },
        {
            key: "content",
            value: function content(context) {
                var content = this.pageNumber;
                return content;
            }
        },
        {
            key: "createDOMElement",
            value: function createDOMElement(context) {
                var domElement;
                var content = this.content(context), textNode = document.createTextNode(content);
                domElement = _get(_get_prototype_of(PageNumberDirectiveMarkdownNode.prototype), "createDOMElement", this).call(this, context);
                var parentDOMElement = domElement; ///
                domElement = textNode; ///
                parentDOMElement.appendChild(domElement);
                domElement = parentDOMElement;
                return domElement;
            }
        },
        {
            key: "clone",
            value: function clone() {
                return _get(_get_prototype_of(PageNumberDirectiveMarkdownNode.prototype), "clone", this).call(this, this.pageNumber);
            }
        }
    ], [
        {
            key: "fromRuleNameChildNodesAndOpacity",
            value: function fromRuleNameChildNodesAndOpacity(ruleName, childNodes, opacity) {
                var pageNumber = null, pageNumberDirectiveMarkdownNode = _directive.default.fromRuleNameChildNodesAndOpacity(PageNumberDirectiveMarkdownNode, ruleName, childNodes, opacity, pageNumber);
                return pageNumberDirectiveMarkdownNode;
            }
        }
    ]);
    return PageNumberDirectiveMarkdownNode;
}(_directive.default);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9ub2RlL21hcmtkb3duL2RpcmVjdGl2ZS9wYWdlTnVtYmVyLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgRGlyZWN0aXZlTWFya2Rvd25Ob2RlIGZyb20gXCIuLi8uLi8uLi9ub2RlL21hcmtkb3duL2RpcmVjdGl2ZVwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQYWdlTnVtYmVyRGlyZWN0aXZlTWFya2Rvd25Ob2RlIGV4dGVuZHMgRGlyZWN0aXZlTWFya2Rvd25Ob2RlIHtcbiAgY29uc3RydWN0b3IocnVsZU5hbWUsIGNoaWxkTm9kZXMsIHByZWNlZGVuY2UsIG9wYWNpdHksIGRvbUVsZW1lbnQsIHBhZ2VOdW1iZXIpIHtcbiAgICBzdXBlcihydWxlTmFtZSwgY2hpbGROb2RlcywgcHJlY2VkZW5jZSwgb3BhY2l0eSwgZG9tRWxlbWVudCk7XG5cbiAgICB0aGlzLnBhZ2VOdW1iZXIgPSBwYWdlTnVtYmVyO1xuICB9XG5cbiAgZ2V0UGFnZU51bWJlcigpIHtcbiAgICByZXR1cm4gdGhpcy5wYWdlTnVtYmVyO1xuICB9XG5cbiAgc2V0UGFnZU51bWJlcihwYWdlTnVtYmVyKSB7XG4gICAgdGhpcy5wYWdlTnVtYmVyID0gcGFnZU51bWJlcjtcbiAgfVxuXG4gIGNvbnRlbnQoY29udGV4dCkge1xuICAgIGNvbnN0IGNvbnRlbnQgPSB0aGlzLnBhZ2VOdW1iZXI7XG5cbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGNyZWF0ZURPTUVsZW1lbnQoY29udGV4dCkge1xuICAgIGxldCBkb21FbGVtZW50O1xuXG4gICAgY29uc3QgY29udGVudCA9IHRoaXMuY29udGVudChjb250ZXh0KSxcbiAgICAgICAgICB0ZXh0Tm9kZSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNvbnRlbnQpO1xuXG4gICAgZG9tRWxlbWVudCA9IHN1cGVyLmNyZWF0ZURPTUVsZW1lbnQoY29udGV4dCk7XG5cbiAgICBjb25zdCBwYXJlbnRET01FbGVtZW50ID0gZG9tRWxlbWVudDsgIC8vL1xuXG4gICAgZG9tRWxlbWVudCA9IHRleHROb2RlOyAvLy9cblxuICAgIHBhcmVudERPTUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9tRWxlbWVudCk7XG5cbiAgICBkb21FbGVtZW50ID0gcGFyZW50RE9NRWxlbWVudDtcblxuICAgIHJldHVybiBkb21FbGVtZW50O1xuICB9XG5cbiAgY2xvbmUoKSB7IHJldHVybiBzdXBlci5jbG9uZSh0aGlzLnBhZ2VOdW1iZXIpOyB9XG5cbiAgc3RhdGljIGZyb21SdWxlTmFtZUNoaWxkTm9kZXNBbmRPcGFjaXR5KHJ1bGVOYW1lLCBjaGlsZE5vZGVzLCBvcGFjaXR5KSB7XG4gICAgY29uc3QgcGFnZU51bWJlciA9IG51bGwsXG4gICAgICAgICAgcGFnZU51bWJlckRpcmVjdGl2ZU1hcmtkb3duTm9kZSA9IERpcmVjdGl2ZU1hcmtkb3duTm9kZS5mcm9tUnVsZU5hbWVDaGlsZE5vZGVzQW5kT3BhY2l0eShQYWdlTnVtYmVyRGlyZWN0aXZlTWFya2Rvd25Ob2RlLCBydWxlTmFtZSwgY2hpbGROb2Rlcywgb3BhY2l0eSwgcGFnZU51bWJlcik7XG5cbiAgICByZXR1cm4gcGFnZU51bWJlckRpcmVjdGl2ZU1hcmtkb3duTm9kZTtcbiAgfVxufVxuIl0sIm5hbWVzIjpbIlBhZ2VOdW1iZXJEaXJlY3RpdmVNYXJrZG93bk5vZGUiLCJydWxlTmFtZSIsImNoaWxkTm9kZXMiLCJwcmVjZWRlbmNlIiwib3BhY2l0eSIsImRvbUVsZW1lbnQiLCJwYWdlTnVtYmVyIiwiZ2V0UGFnZU51bWJlciIsInNldFBhZ2VOdW1iZXIiLCJjb250ZW50IiwiY29udGV4dCIsImNyZWF0ZURPTUVsZW1lbnQiLCJ0ZXh0Tm9kZSIsImRvY3VtZW50IiwiY3JlYXRlVGV4dE5vZGUiLCJwYXJlbnRET01FbGVtZW50IiwiYXBwZW5kQ2hpbGQiLCJjbG9uZSIsImZyb21SdWxlTmFtZUNoaWxkTm9kZXNBbmRPcGFjaXR5IiwicGFnZU51bWJlckRpcmVjdGl2ZU1hcmtkb3duTm9kZSIsIkRpcmVjdGl2ZU1hcmtkb3duTm9kZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFJcUJBOzs7Z0VBRmE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVuQixJQUFBLEFBQU1BLGdEQUFOO2NBQU1BO2FBQUFBLGdDQUNQQyxRQUFRLEVBQUVDLFVBQVUsRUFBRUMsVUFBVSxFQUFFQyxPQUFPLEVBQUVDLFVBQVUsRUFBRUMsVUFBVTtnQ0FEMUROOztnQkFFakIsa0JBRmlCQTtZQUVYQztZQUFVQztZQUFZQztZQUFZQztZQUFTQzs7UUFFakQsTUFBS0MsVUFBVSxHQUFHQTs7O2tCQUpETjs7WUFPbkJPLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0QsVUFBVTtZQUN4Qjs7O1lBRUFFLEtBQUFBO21CQUFBQSxTQUFBQSxjQUFjRixVQUFVO2dCQUN0QixJQUFJLENBQUNBLFVBQVUsR0FBR0E7WUFDcEI7OztZQUVBRyxLQUFBQTttQkFBQUEsU0FBQUEsUUFBUUMsT0FBTztnQkFDYixJQUFNRCxVQUFVLElBQUksQ0FBQ0gsVUFBVTtnQkFFL0IsT0FBT0c7WUFDVDs7O1lBRUFFLEtBQUFBO21CQUFBQSxTQUFBQSxpQkFBaUJELE9BQU87Z0JBQ3RCLElBQUlMO2dCQUVKLElBQU1JLFVBQVUsSUFBSSxDQUFDQSxPQUFPLENBQUNDLFVBQ3ZCRSxXQUFXQyxTQUFTQyxjQUFjLENBQUNMO2dCQUV6Q0osYUFBYSx1QkEzQklMLDRDQTJCRVcsb0JBQU4sSUFBSyxhQUFrQkQ7Z0JBRXBDLElBQU1LLG1CQUFtQlYsWUFBYSxHQUFHO2dCQUV6Q0EsYUFBYU8sVUFBVSxHQUFHO2dCQUUxQkcsaUJBQWlCQyxXQUFXLENBQUNYO2dCQUU3QkEsYUFBYVU7Z0JBRWIsT0FBT1Y7WUFDVDs7O1lBRUFZLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFBVSxPQUFPLHVCQXhDRWpCLDRDQXdDSWlCLFNBQU4sSUFBSyxhQUFPLElBQUksQ0FBQ1gsVUFBVTtZQUFHOzs7O1lBRXhDWSxLQUFBQTttQkFBUCxTQUFPQSxpQ0FBaUNqQixRQUFRLEVBQUVDLFVBQVUsRUFBRUUsT0FBTztnQkFDbkUsSUFBTUUsYUFBYSxNQUNiYSxrQ0FBa0NDLGtCQUFxQixDQUFDRixnQ0FBZ0MsQ0E1QzdFbEIsaUNBNEMrR0MsVUFBVUMsWUFBWUUsU0FBU0U7Z0JBRS9KLE9BQU9hO1lBQ1Q7OztXQS9DbUJuQjtFQUF3Q29CLGtCQUFxQiJ9