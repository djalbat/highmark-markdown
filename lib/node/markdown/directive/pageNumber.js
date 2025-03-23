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
            key: "asHTML",
            value: function asHTML(indent, context) {
                indent = this.adjustIndent(indent);
                var childNodesHTML = this.childNodesAsHTML(indent, context), startingTag = this.startingTag(context), closingTag = this.closingTag(context), html = "".concat(indent).concat(startingTag).concat(childNodesHTML).concat(closingTag, "\n");
                return html;
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
            key: "childNodesAsHTML",
            value: function childNodesAsHTML(indent, context) {
                var content = this.content(context), childNodesHTML = content; ///
                return childNodesHTML;
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9ub2RlL21hcmtkb3duL2RpcmVjdGl2ZS9wYWdlTnVtYmVyLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgRGlyZWN0aXZlTWFya2Rvd25Ob2RlIGZyb20gXCIuLi8uLi8uLi9ub2RlL21hcmtkb3duL2RpcmVjdGl2ZVwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQYWdlTnVtYmVyRGlyZWN0aXZlTWFya2Rvd25Ob2RlIGV4dGVuZHMgRGlyZWN0aXZlTWFya2Rvd25Ob2RlIHtcbiAgY29uc3RydWN0b3IocnVsZU5hbWUsIGNoaWxkTm9kZXMsIHByZWNlZGVuY2UsIG9wYWNpdHksIGRvbUVsZW1lbnQsIHBhZ2VOdW1iZXIpIHtcbiAgICBzdXBlcihydWxlTmFtZSwgY2hpbGROb2RlcywgcHJlY2VkZW5jZSwgb3BhY2l0eSwgZG9tRWxlbWVudCk7XG5cbiAgICB0aGlzLnBhZ2VOdW1iZXIgPSBwYWdlTnVtYmVyO1xuICB9XG5cbiAgZ2V0UGFnZU51bWJlcigpIHtcbiAgICByZXR1cm4gdGhpcy5wYWdlTnVtYmVyO1xuICB9XG5cbiAgc2V0UGFnZU51bWJlcihwYWdlTnVtYmVyKSB7XG4gICAgdGhpcy5wYWdlTnVtYmVyID0gcGFnZU51bWJlcjtcbiAgfVxuXG4gIGNvbnRlbnQoY29udGV4dCkge1xuICAgIGNvbnN0IGNvbnRlbnQgPSB0aGlzLnBhZ2VOdW1iZXI7XG5cbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGFzSFRNTChpbmRlbnQsIGNvbnRleHQpIHtcbiAgICBpbmRlbnQgPSB0aGlzLmFkanVzdEluZGVudChpbmRlbnQpO1xuXG4gICAgY29uc3QgY2hpbGROb2Rlc0hUTUwgPSB0aGlzLmNoaWxkTm9kZXNBc0hUTUwoaW5kZW50LCBjb250ZXh0KSxcbiAgICAgICAgICBzdGFydGluZ1RhZyA9IHRoaXMuc3RhcnRpbmdUYWcoY29udGV4dCksXG4gICAgICAgICAgY2xvc2luZ1RhZyA9IHRoaXMuY2xvc2luZ1RhZyhjb250ZXh0KSxcbiAgICAgICAgICBodG1sID0gYCR7aW5kZW50fSR7c3RhcnRpbmdUYWd9JHtjaGlsZE5vZGVzSFRNTH0ke2Nsb3NpbmdUYWd9XG5gO1xuXG4gICAgcmV0dXJuIGh0bWw7XG4gIH1cblxuICBjcmVhdGVET01FbGVtZW50KGNvbnRleHQpIHtcbiAgICBsZXQgZG9tRWxlbWVudDtcblxuICAgIGNvbnN0IGNvbnRlbnQgPSB0aGlzLmNvbnRlbnQoY29udGV4dCksXG4gICAgICAgICAgdGV4dE5vZGUgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjb250ZW50KTtcblxuICAgIGRvbUVsZW1lbnQgPSBzdXBlci5jcmVhdGVET01FbGVtZW50KGNvbnRleHQpO1xuXG4gICAgY29uc3QgcGFyZW50RE9NRWxlbWVudCA9IGRvbUVsZW1lbnQ7ICAvLy9cblxuICAgIGRvbUVsZW1lbnQgPSB0ZXh0Tm9kZTsgLy8vXG5cbiAgICBwYXJlbnRET01FbGVtZW50LmFwcGVuZENoaWxkKGRvbUVsZW1lbnQpO1xuXG4gICAgZG9tRWxlbWVudCA9IHBhcmVudERPTUVsZW1lbnQ7XG5cbiAgICByZXR1cm4gZG9tRWxlbWVudDtcbiAgfVxuXG4gIGNoaWxkTm9kZXNBc0hUTUwoaW5kZW50LCBjb250ZXh0KSB7XG4gICAgY29uc3QgY29udGVudCA9IHRoaXMuY29udGVudChjb250ZXh0KSxcbiAgICAgICAgICBjaGlsZE5vZGVzSFRNTCA9IGNvbnRlbnQ7IC8vL1xuXG4gICAgcmV0dXJuIGNoaWxkTm9kZXNIVE1MO1xuICB9XG5cbiAgY2xvbmUoKSB7IHJldHVybiBzdXBlci5jbG9uZSh0aGlzLnBhZ2VOdW1iZXIpOyB9XG5cbiAgc3RhdGljIGZyb21SdWxlTmFtZUNoaWxkTm9kZXNBbmRPcGFjaXR5KHJ1bGVOYW1lLCBjaGlsZE5vZGVzLCBvcGFjaXR5KSB7XG4gICAgY29uc3QgcGFnZU51bWJlciA9IG51bGwsXG4gICAgICAgICAgcGFnZU51bWJlckRpcmVjdGl2ZU1hcmtkb3duTm9kZSA9IERpcmVjdGl2ZU1hcmtkb3duTm9kZS5mcm9tUnVsZU5hbWVDaGlsZE5vZGVzQW5kT3BhY2l0eShQYWdlTnVtYmVyRGlyZWN0aXZlTWFya2Rvd25Ob2RlLCBydWxlTmFtZSwgY2hpbGROb2Rlcywgb3BhY2l0eSwgcGFnZU51bWJlcik7XG5cbiAgICByZXR1cm4gcGFnZU51bWJlckRpcmVjdGl2ZU1hcmtkb3duTm9kZTtcbiAgfVxufVxuIl0sIm5hbWVzIjpbIlBhZ2VOdW1iZXJEaXJlY3RpdmVNYXJrZG93bk5vZGUiLCJydWxlTmFtZSIsImNoaWxkTm9kZXMiLCJwcmVjZWRlbmNlIiwib3BhY2l0eSIsImRvbUVsZW1lbnQiLCJwYWdlTnVtYmVyIiwiZ2V0UGFnZU51bWJlciIsInNldFBhZ2VOdW1iZXIiLCJjb250ZW50IiwiY29udGV4dCIsImFzSFRNTCIsImluZGVudCIsImFkanVzdEluZGVudCIsImNoaWxkTm9kZXNIVE1MIiwiY2hpbGROb2Rlc0FzSFRNTCIsInN0YXJ0aW5nVGFnIiwiY2xvc2luZ1RhZyIsImh0bWwiLCJjcmVhdGVET01FbGVtZW50IiwidGV4dE5vZGUiLCJkb2N1bWVudCIsImNyZWF0ZVRleHROb2RlIiwicGFyZW50RE9NRWxlbWVudCIsImFwcGVuZENoaWxkIiwiY2xvbmUiLCJmcm9tUnVsZU5hbWVDaGlsZE5vZGVzQW5kT3BhY2l0eSIsInBhZ2VOdW1iZXJEaXJlY3RpdmVNYXJrZG93bk5vZGUiLCJEaXJlY3RpdmVNYXJrZG93bk5vZGUiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBSXFCQTs7O2dFQUZhOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFbkIsSUFBQSxBQUFNQSxnREFBTjtjQUFNQTthQUFBQSxnQ0FDUEMsUUFBUSxFQUFFQyxVQUFVLEVBQUVDLFVBQVUsRUFBRUMsT0FBTyxFQUFFQyxVQUFVLEVBQUVDLFVBQVU7Z0NBRDFETjs7Z0JBRWpCLGtCQUZpQkE7WUFFWEM7WUFBVUM7WUFBWUM7WUFBWUM7WUFBU0M7O1FBRWpELE1BQUtDLFVBQVUsR0FBR0E7OztrQkFKRE47O1lBT25CTyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNELFVBQVU7WUFDeEI7OztZQUVBRSxLQUFBQTttQkFBQUEsU0FBQUEsY0FBY0YsVUFBVTtnQkFDdEIsSUFBSSxDQUFDQSxVQUFVLEdBQUdBO1lBQ3BCOzs7WUFFQUcsS0FBQUE7bUJBQUFBLFNBQUFBLFFBQVFDLE9BQU87Z0JBQ2IsSUFBTUQsVUFBVSxJQUFJLENBQUNILFVBQVU7Z0JBRS9CLE9BQU9HO1lBQ1Q7OztZQUVBRSxLQUFBQTttQkFBQUEsU0FBQUEsT0FBT0MsTUFBTSxFQUFFRixPQUFPO2dCQUNwQkUsU0FBUyxJQUFJLENBQUNDLFlBQVksQ0FBQ0Q7Z0JBRTNCLElBQU1FLGlCQUFpQixJQUFJLENBQUNDLGdCQUFnQixDQUFDSCxRQUFRRixVQUMvQ00sY0FBYyxJQUFJLENBQUNBLFdBQVcsQ0FBQ04sVUFDL0JPLGFBQWEsSUFBSSxDQUFDQSxVQUFVLENBQUNQLFVBQzdCUSxPQUFPLEFBQUMsR0FBV0YsT0FBVEosUUFBdUJFLE9BQWRFLGFBQStCQyxPQUFqQkgsZ0JBQTRCLE9BQVhHLFlBQVc7Z0JBR25FLE9BQU9DO1lBQ1Q7OztZQUVBQyxLQUFBQTttQkFBQUEsU0FBQUEsaUJBQWlCVCxPQUFPO2dCQUN0QixJQUFJTDtnQkFFSixJQUFNSSxVQUFVLElBQUksQ0FBQ0EsT0FBTyxDQUFDQyxVQUN2QlUsV0FBV0MsU0FBU0MsY0FBYyxDQUFDYjtnQkFFekNKLGFBQWEsdUJBdkNJTCw0Q0F1Q0VtQixvQkFBTixJQUFLLGFBQWtCVDtnQkFFcEMsSUFBTWEsbUJBQW1CbEIsWUFBYSxHQUFHO2dCQUV6Q0EsYUFBYWUsVUFBVSxHQUFHO2dCQUUxQkcsaUJBQWlCQyxXQUFXLENBQUNuQjtnQkFFN0JBLGFBQWFrQjtnQkFFYixPQUFPbEI7WUFDVDs7O1lBRUFVLEtBQUFBO21CQUFBQSxTQUFBQSxpQkFBaUJILE1BQU0sRUFBRUYsT0FBTztnQkFDOUIsSUFBTUQsVUFBVSxJQUFJLENBQUNBLE9BQU8sQ0FBQ0MsVUFDdkJJLGlCQUFpQkwsU0FBUyxHQUFHO2dCQUVuQyxPQUFPSztZQUNUOzs7WUFFQVcsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUFVLE9BQU8sdUJBM0RFekIsNENBMkRJeUIsU0FBTixJQUFLLGFBQU8sSUFBSSxDQUFDbkIsVUFBVTtZQUFHOzs7O1lBRXhDb0IsS0FBQUE7bUJBQVAsU0FBT0EsaUNBQWlDekIsUUFBUSxFQUFFQyxVQUFVLEVBQUVFLE9BQU87Z0JBQ25FLElBQU1FLGFBQWEsTUFDYnFCLGtDQUFrQ0Msa0JBQXFCLENBQUNGLGdDQUFnQyxDQS9EN0UxQixpQ0ErRCtHQyxVQUFVQyxZQUFZRSxTQUFTRTtnQkFFL0osT0FBT3FCO1lBQ1Q7OztXQWxFbUIzQjtFQUF3QzRCLGtCQUFxQiJ9