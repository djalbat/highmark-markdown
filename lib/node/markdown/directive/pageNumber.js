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
var PageNumberDirectiveMarkdownNode = /*#__PURE__*/ function(DirectiveMarkdownNode) {
    _inherits(PageNumberDirectiveMarkdownNode, DirectiveMarkdownNode);
    var _super = _create_super(PageNumberDirectiveMarkdownNode);
    function PageNumberDirectiveMarkdownNode(ruleName, childNodes, precedence, opacity, domElement, pageNumber) {
        _class_call_check(this, PageNumberDirectiveMarkdownNode);
        var _this;
        _this = _super.call(this, ruleName, childNodes, precedence, opacity, domElement);
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
                var tagName = this.tagName(context), className = this.className(context), domElement = document.createElement(tagName);
                Object.assign(domElement, {
                    className: className
                });
                this.setDOMElement(domElement);
                this.createChildNodeDOMElements(context);
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
            key: "createChildNodeDOMElements",
            value: function createChildNodeDOMElements(context) {
                var content = this.content(context), textNode = document.createTextNode(content), domElement = textNode; ///
                this.addDOMElement(domElement);
            }
        },
        {
            key: "clone",
            value: function clone() {
                return _get(_get_prototype_of(PageNumberDirectiveMarkdownNode.prototype), "clone", this).call(this, this.number);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9ub2RlL21hcmtkb3duL2RpcmVjdGl2ZS9wYWdlTnVtYmVyLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgRGlyZWN0aXZlTWFya2Rvd25Ob2RlIGZyb20gXCIuLi8uLi8uLi9ub2RlL21hcmtkb3duL2RpcmVjdGl2ZVwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQYWdlTnVtYmVyRGlyZWN0aXZlTWFya2Rvd25Ob2RlIGV4dGVuZHMgRGlyZWN0aXZlTWFya2Rvd25Ob2RlIHtcbiAgY29uc3RydWN0b3IocnVsZU5hbWUsIGNoaWxkTm9kZXMsIHByZWNlZGVuY2UsIG9wYWNpdHksIGRvbUVsZW1lbnQsIHBhZ2VOdW1iZXIpIHtcbiAgICBzdXBlcihydWxlTmFtZSwgY2hpbGROb2RlcywgcHJlY2VkZW5jZSwgb3BhY2l0eSwgZG9tRWxlbWVudCk7XG5cbiAgICB0aGlzLnBhZ2VOdW1iZXIgPSBwYWdlTnVtYmVyO1xuICB9XG5cbiAgZ2V0UGFnZU51bWJlcigpIHtcbiAgICByZXR1cm4gdGhpcy5wYWdlTnVtYmVyO1xuICB9XG5cbiAgc2V0UGFnZU51bWJlcihwYWdlTnVtYmVyKSB7XG4gICAgdGhpcy5wYWdlTnVtYmVyID0gcGFnZU51bWJlcjtcbiAgfVxuXG4gIGNvbnRlbnQoY29udGV4dCkge1xuICAgIGNvbnN0IGNvbnRlbnQgPSB0aGlzLnBhZ2VOdW1iZXI7XG5cbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGFzSFRNTChpbmRlbnQsIGNvbnRleHQpIHtcbiAgICBpbmRlbnQgPSB0aGlzLmFkanVzdEluZGVudChpbmRlbnQpO1xuXG4gICAgY29uc3QgY2hpbGROb2Rlc0hUTUwgPSB0aGlzLmNoaWxkTm9kZXNBc0hUTUwoaW5kZW50LCBjb250ZXh0KSxcbiAgICAgICAgICBzdGFydGluZ1RhZyA9IHRoaXMuc3RhcnRpbmdUYWcoY29udGV4dCksXG4gICAgICAgICAgY2xvc2luZ1RhZyA9IHRoaXMuY2xvc2luZ1RhZyhjb250ZXh0KSxcbiAgICAgICAgICBodG1sID0gYCR7aW5kZW50fSR7c3RhcnRpbmdUYWd9JHtjaGlsZE5vZGVzSFRNTH0ke2Nsb3NpbmdUYWd9XG5gO1xuXG4gICAgcmV0dXJuIGh0bWw7XG4gIH1cblxuICBjcmVhdGVET01FbGVtZW50KGNvbnRleHQpIHtcbiAgICBjb25zdCB0YWdOYW1lID0gdGhpcy50YWdOYW1lKGNvbnRleHQpLFxuICAgICAgICAgIGNsYXNzTmFtZSA9IHRoaXMuY2xhc3NOYW1lKGNvbnRleHQpLFxuICAgICAgICAgIGRvbUVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHRhZ05hbWUpO1xuXG4gICAgT2JqZWN0LmFzc2lnbihkb21FbGVtZW50LCB7XG4gICAgICBjbGFzc05hbWVcbiAgICB9KTtcblxuICAgIHRoaXMuc2V0RE9NRWxlbWVudChkb21FbGVtZW50KTtcblxuICAgIHRoaXMuY3JlYXRlQ2hpbGROb2RlRE9NRWxlbWVudHMoY29udGV4dCk7XG5cbiAgICByZXR1cm4gZG9tRWxlbWVudDtcbiAgfVxuXG4gIGNoaWxkTm9kZXNBc0hUTUwoaW5kZW50LCBjb250ZXh0KSB7XG4gICAgY29uc3QgY29udGVudCA9IHRoaXMuY29udGVudChjb250ZXh0KSxcbiAgICAgICAgICBjaGlsZE5vZGVzSFRNTCA9IGNvbnRlbnQ7IC8vL1xuXG4gICAgcmV0dXJuIGNoaWxkTm9kZXNIVE1MO1xuICB9XG5cbiAgY3JlYXRlQ2hpbGROb2RlRE9NRWxlbWVudHMoY29udGV4dCkge1xuICAgIGNvbnN0IGNvbnRlbnQgPSB0aGlzLmNvbnRlbnQoY29udGV4dCksXG4gICAgICAgICAgdGV4dE5vZGUgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjb250ZW50KSxcbiAgICAgICAgICBkb21FbGVtZW50ID0gdGV4dE5vZGU7IC8vL1xuXG4gICAgdGhpcy5hZGRET01FbGVtZW50KGRvbUVsZW1lbnQpO1xuICB9XG5cbiAgY2xvbmUoKSB7IHJldHVybiBzdXBlci5jbG9uZSh0aGlzLm51bWJlcik7IH1cblxuICBzdGF0aWMgZnJvbVJ1bGVOYW1lQ2hpbGROb2Rlc0FuZE9wYWNpdHkocnVsZU5hbWUsIGNoaWxkTm9kZXMsIG9wYWNpdHkpIHtcbiAgICBjb25zdCBwYWdlTnVtYmVyID0gbnVsbCxcbiAgICAgICAgICBwYWdlTnVtYmVyRGlyZWN0aXZlTWFya2Rvd25Ob2RlID0gRGlyZWN0aXZlTWFya2Rvd25Ob2RlLmZyb21SdWxlTmFtZUNoaWxkTm9kZXNBbmRPcGFjaXR5KFBhZ2VOdW1iZXJEaXJlY3RpdmVNYXJrZG93bk5vZGUsIHJ1bGVOYW1lLCBjaGlsZE5vZGVzLCBvcGFjaXR5LCBwYWdlTnVtYmVyKTtcblxuICAgIHJldHVybiBwYWdlTnVtYmVyRGlyZWN0aXZlTWFya2Rvd25Ob2RlO1xuICB9XG59XG4iXSwibmFtZXMiOlsiUGFnZU51bWJlckRpcmVjdGl2ZU1hcmtkb3duTm9kZSIsInJ1bGVOYW1lIiwiY2hpbGROb2RlcyIsInByZWNlZGVuY2UiLCJvcGFjaXR5IiwiZG9tRWxlbWVudCIsInBhZ2VOdW1iZXIiLCJnZXRQYWdlTnVtYmVyIiwic2V0UGFnZU51bWJlciIsImNvbnRlbnQiLCJjb250ZXh0IiwiYXNIVE1MIiwiaW5kZW50IiwiYWRqdXN0SW5kZW50IiwiY2hpbGROb2Rlc0hUTUwiLCJjaGlsZE5vZGVzQXNIVE1MIiwic3RhcnRpbmdUYWciLCJjbG9zaW5nVGFnIiwiaHRtbCIsImNyZWF0ZURPTUVsZW1lbnQiLCJ0YWdOYW1lIiwiY2xhc3NOYW1lIiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50IiwiT2JqZWN0IiwiYXNzaWduIiwic2V0RE9NRWxlbWVudCIsImNyZWF0ZUNoaWxkTm9kZURPTUVsZW1lbnRzIiwidGV4dE5vZGUiLCJjcmVhdGVUZXh0Tm9kZSIsImFkZERPTUVsZW1lbnQiLCJjbG9uZSIsIm51bWJlciIsImZyb21SdWxlTmFtZUNoaWxkTm9kZXNBbmRPcGFjaXR5IiwicGFnZU51bWJlckRpcmVjdGl2ZU1hcmtkb3duTm9kZSIsIkRpcmVjdGl2ZU1hcmtkb3duTm9kZSJdLCJyYW5nZU1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7IiwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBSXFCQTs7O2dFQUZhOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFbkIsSUFBQSxBQUFNQSxnREFBRCxBQUFMO2NBQU1BOytCQUFBQTthQUFBQSxnQ0FDUEMsUUFBUSxFQUFFQyxVQUFVLEVBQUVDLFVBQVUsRUFBRUMsT0FBTyxFQUFFQyxVQUFVLEVBQUVDLFVBQVU7Z0NBRDFETjs7a0NBRVhDLFVBQVVDLFlBQVlDLFlBQVlDLFNBQVNDO1FBRWpELE1BQUtDLFVBQVUsR0FBR0E7OztrQkFKRE47O1lBT25CTyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNELFVBQVU7WUFDeEI7OztZQUVBRSxLQUFBQTttQkFBQUEsU0FBQUEsY0FBY0YsVUFBVTtnQkFDdEIsSUFBSSxDQUFDQSxVQUFVLEdBQUdBO1lBQ3BCOzs7WUFFQUcsS0FBQUE7bUJBQUFBLFNBQUFBLFFBQVFDLE9BQU87Z0JBQ2IsSUFBTUQsVUFBVSxJQUFJLENBQUNILFVBQVU7Z0JBRS9CLE9BQU9HO1lBQ1Q7OztZQUVBRSxLQUFBQTttQkFBQUEsU0FBQUEsT0FBT0MsTUFBTSxFQUFFRixPQUFPO2dCQUNwQkUsU0FBUyxJQUFJLENBQUNDLFlBQVksQ0FBQ0Q7Z0JBRTNCLElBQU1FLGlCQUFpQixJQUFJLENBQUNDLGdCQUFnQixDQUFDSCxRQUFRRixVQUMvQ00sY0FBYyxJQUFJLENBQUNBLFdBQVcsQ0FBQ04sVUFDL0JPLGFBQWEsSUFBSSxDQUFDQSxVQUFVLENBQUNQLFVBQzdCUSxPQUFPLEFBQUMsR0FBV0YsT0FBVEosUUFBdUJFLE9BQWRFLGFBQStCQyxPQUFqQkgsZ0JBQTRCLE9BQVhHLFlBQVc7Z0JBR25FLE9BQU9DO1lBQ1Q7OztZQUVBQyxLQUFBQTttQkFBQUEsU0FBQUEsaUJBQWlCVCxPQUFPO2dCQUN0QixJQUFNVSxVQUFVLElBQUksQ0FBQ0EsT0FBTyxDQUFDVixVQUN2QlcsWUFBWSxJQUFJLENBQUNBLFNBQVMsQ0FBQ1gsVUFDM0JMLGFBQWFpQixTQUFTQyxhQUFhLENBQUNIO2dCQUUxQ0ksT0FBT0MsTUFBTSxDQUFDcEIsWUFBWTtvQkFDeEJnQixXQUFBQTtnQkFDRjtnQkFFQSxJQUFJLENBQUNLLGFBQWEsQ0FBQ3JCO2dCQUVuQixJQUFJLENBQUNzQiwwQkFBMEIsQ0FBQ2pCO2dCQUVoQyxPQUFPTDtZQUNUOzs7WUFFQVUsS0FBQUE7bUJBQUFBLFNBQUFBLGlCQUFpQkgsTUFBTSxFQUFFRixPQUFPO2dCQUM5QixJQUFNRCxVQUFVLElBQUksQ0FBQ0EsT0FBTyxDQUFDQyxVQUN2QkksaUJBQWlCTCxTQUFTLEdBQUc7Z0JBRW5DLE9BQU9LO1lBQ1Q7OztZQUVBYSxLQUFBQTttQkFBQUEsU0FBQUEsMkJBQTJCakIsT0FBTztnQkFDaEMsSUFBTUQsVUFBVSxJQUFJLENBQUNBLE9BQU8sQ0FBQ0MsVUFDdkJrQixXQUFXTixTQUFTTyxjQUFjLENBQUNwQixVQUNuQ0osYUFBYXVCLFVBQVUsR0FBRztnQkFFaEMsSUFBSSxDQUFDRSxhQUFhLENBQUN6QjtZQUNyQjs7O1lBRUEwQixLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQVUsT0FBTyx1QkFoRUUvQiw0Q0FnRUkrQixTQUFOLElBQUssYUFBTyxJQUFJLENBQUNDLE1BQU07WUFBRzs7OztZQUVwQ0MsS0FBQUE7bUJBQVAsU0FBT0EsaUNBQWlDaEMsUUFBUSxFQUFFQyxVQUFVLEVBQUVFLE9BQU87Z0JBQ25FLElBQU1FLGFBQWEsTUFDYjRCLGtDQUFrQ0Msa0JBQXFCLENBQUNGLGdDQUFnQyxDQXBFN0VqQyxpQ0FvRStHQyxVQUFVQyxZQUFZRSxTQUFTRTtnQkFFL0osT0FBTzRCO1lBQ1Q7OztXQXZFbUJsQztFQUF3Q21DLGtCQUFxQiJ9