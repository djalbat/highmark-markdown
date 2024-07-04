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
var _markdown = /*#__PURE__*/ _interop_require_default(require("../../node/markdown"));
var _content = /*#__PURE__*/ _interop_require_default(require("../../mixins/content"));
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
var ErrorMarkdownNode = /*#__PURE__*/ function(MarkdownNode) {
    _inherits(ErrorMarkdownNode, MarkdownNode);
    var _super = _create_super(ErrorMarkdownNode);
    function ErrorMarkdownNode() {
        _class_call_check(this, ErrorMarkdownNode);
        return _super.apply(this, arguments);
    }
    _create_class(ErrorMarkdownNode, [
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
                domElement = _get(_get_prototype_of(ErrorMarkdownNode.prototype), "createDOMElement", this).call(this, context);
                var parentDOMElement = domElement;
                domElement = textNode; ///
                parentDOMElement.appendChild(domElement);
                domElement = parentDOMElement; ///
                return domElement;
            }
        },
        {
            key: "childNodesAsHTML",
            value: function childNodesAsHTML(indent, context) {
                var content = this.content(context), childNodesHTML = content;
                return childNodesHTML;
            }
        }
    ], [
        {
            key: "fromRuleNameChildNodesAndOpacity",
            value: function fromRuleNameChildNodesAndOpacity(ruleName, childNodes, opacity) {
                return _markdown.default.fromRuleNameChildNodesAndOpacity(ErrorMarkdownNode, ruleName, childNodes, opacity);
            }
        }
    ]);
    return ErrorMarkdownNode;
}(_markdown.default);
Object.assign(ErrorMarkdownNode.prototype, _content.default);
var _default = ErrorMarkdownNode;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ub2RlL21hcmtkb3duL2Vycm9yLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgTWFya2Rvd25Ob2RlIGZyb20gXCIuLi8uLi9ub2RlL21hcmtkb3duXCI7XG5pbXBvcnQgY29udGVudE1peGlucyBmcm9tIFwiLi4vLi4vbWl4aW5zL2NvbnRlbnRcIjtcblxuY2xhc3MgRXJyb3JNYXJrZG93bk5vZGUgZXh0ZW5kcyBNYXJrZG93bk5vZGUge1xuICBhc0hUTUwoaW5kZW50LCBjb250ZXh0KSB7XG4gICAgaW5kZW50ID0gdGhpcy5hZGp1c3RJbmRlbnQoaW5kZW50KTtcblxuICAgIGNvbnN0IGNoaWxkTm9kZXNIVE1MID0gdGhpcy5jaGlsZE5vZGVzQXNIVE1MKGluZGVudCwgY29udGV4dCksXG4gICAgICAgICAgc3RhcnRpbmdUYWcgPSB0aGlzLnN0YXJ0aW5nVGFnKGNvbnRleHQpLFxuICAgICAgICAgIGNsb3NpbmdUYWcgPSB0aGlzLmNsb3NpbmdUYWcoY29udGV4dCksXG4gICAgICAgICAgaHRtbCA9IGAke2luZGVudH0ke3N0YXJ0aW5nVGFnfSR7Y2hpbGROb2Rlc0hUTUx9JHtjbG9zaW5nVGFnfVxuYDtcblxuICAgIHJldHVybiBodG1sO1xuICB9XG5cbiAgY3JlYXRlRE9NRWxlbWVudChjb250ZXh0KSB7XG4gICAgbGV0IGRvbUVsZW1lbnQ7XG5cbiAgICBjb25zdCBjb250ZW50ID0gdGhpcy5jb250ZW50KGNvbnRleHQpLFxuICAgICAgICAgIHRleHROb2RlICA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNvbnRlbnQpO1xuXG4gICAgZG9tRWxlbWVudCA9IHN1cGVyLmNyZWF0ZURPTUVsZW1lbnQoY29udGV4dCk7XG5cbiAgICBjb25zdCBwYXJlbnRET01FbGVtZW50ID0gZG9tRWxlbWVudDtcblxuICAgIGRvbUVsZW1lbnQgPSB0ZXh0Tm9kZTsgLy8vXG5cbiAgICBwYXJlbnRET01FbGVtZW50LmFwcGVuZENoaWxkKGRvbUVsZW1lbnQpO1xuXG4gICAgZG9tRWxlbWVudCA9IHBhcmVudERPTUVsZW1lbnQ7ICAvLy9cblxuICAgIHJldHVybiBkb21FbGVtZW50O1xuICB9XG5cbiAgY2hpbGROb2Rlc0FzSFRNTChpbmRlbnQsIGNvbnRleHQpIHtcbiAgICBjb25zdCBjb250ZW50ID0gdGhpcy5jb250ZW50KGNvbnRleHQpLFxuICAgICAgICAgIGNoaWxkTm9kZXNIVE1MID0gY29udGVudDtcblxuICAgIHJldHVybiBjaGlsZE5vZGVzSFRNTDtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUnVsZU5hbWVDaGlsZE5vZGVzQW5kT3BhY2l0eShydWxlTmFtZSwgY2hpbGROb2Rlcywgb3BhY2l0eSkgeyByZXR1cm4gTWFya2Rvd25Ob2RlLmZyb21SdWxlTmFtZUNoaWxkTm9kZXNBbmRPcGFjaXR5KEVycm9yTWFya2Rvd25Ob2RlLCBydWxlTmFtZSwgY2hpbGROb2Rlcywgb3BhY2l0eSk7IH1cbn1cblxuT2JqZWN0LmFzc2lnbihFcnJvck1hcmtkb3duTm9kZS5wcm90b3R5cGUsIGNvbnRlbnRNaXhpbnMpO1xuXG5leHBvcnQgZGVmYXVsdCBFcnJvck1hcmtkb3duTm9kZTtcbiJdLCJuYW1lcyI6WyJFcnJvck1hcmtkb3duTm9kZSIsImFzSFRNTCIsImluZGVudCIsImNvbnRleHQiLCJhZGp1c3RJbmRlbnQiLCJjaGlsZE5vZGVzSFRNTCIsImNoaWxkTm9kZXNBc0hUTUwiLCJzdGFydGluZ1RhZyIsImNsb3NpbmdUYWciLCJodG1sIiwiY3JlYXRlRE9NRWxlbWVudCIsImRvbUVsZW1lbnQiLCJjb250ZW50IiwidGV4dE5vZGUiLCJkb2N1bWVudCIsImNyZWF0ZVRleHROb2RlIiwicGFyZW50RE9NRWxlbWVudCIsImFwcGVuZENoaWxkIiwiZnJvbVJ1bGVOYW1lQ2hpbGROb2Rlc0FuZE9wYWNpdHkiLCJydWxlTmFtZSIsImNoaWxkTm9kZXMiLCJvcGFjaXR5IiwiTWFya2Rvd25Ob2RlIiwiT2JqZWN0IiwiYXNzaWduIiwicHJvdG90eXBlIiwiY29udGVudE1peGlucyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBaURBOzs7ZUFBQTs7OytEQS9DeUI7OERBQ0M7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUUxQixJQUFBLEFBQU1BLGtDQUFELEFBQUw7Y0FBTUE7K0JBQUFBO2FBQUFBO2dDQUFBQTs7O2tCQUFBQTs7WUFDSkMsS0FBQUE7bUJBQUFBLFNBQUFBLE9BQU9DLE1BQU0sRUFBRUMsT0FBTztnQkFDcEJELFNBQVMsSUFBSSxDQUFDRSxZQUFZLENBQUNGO2dCQUUzQixJQUFNRyxpQkFBaUIsSUFBSSxDQUFDQyxnQkFBZ0IsQ0FBQ0osUUFBUUMsVUFDL0NJLGNBQWMsSUFBSSxDQUFDQSxXQUFXLENBQUNKLFVBQy9CSyxhQUFhLElBQUksQ0FBQ0EsVUFBVSxDQUFDTCxVQUM3Qk0sT0FBTyxBQUFDLEdBQVdGLE9BQVRMLFFBQXVCRyxPQUFkRSxhQUErQkMsT0FBakJILGdCQUE0QixPQUFYRyxZQUFXO2dCQUduRSxPQUFPQztZQUNUOzs7WUFFQUMsS0FBQUE7bUJBQUFBLFNBQUFBLGlCQUFpQlAsT0FBTztnQkFDdEIsSUFBSVE7Z0JBRUosSUFBTUMsVUFBVSxJQUFJLENBQUNBLE9BQU8sQ0FBQ1QsVUFDdkJVLFdBQVlDLFNBQVNDLGNBQWMsQ0FBQ0g7Z0JBRTFDRCxhQUFhLHVCQW5CWFgsOEJBbUJpQlUsb0JBQU4sSUFBSyxhQUFrQlA7Z0JBRXBDLElBQU1hLG1CQUFtQkw7Z0JBRXpCQSxhQUFhRSxVQUFVLEdBQUc7Z0JBRTFCRyxpQkFBaUJDLFdBQVcsQ0FBQ047Z0JBRTdCQSxhQUFhSyxrQkFBbUIsR0FBRztnQkFFbkMsT0FBT0w7WUFDVDs7O1lBRUFMLEtBQUFBO21CQUFBQSxTQUFBQSxpQkFBaUJKLE1BQU0sRUFBRUMsT0FBTztnQkFDOUIsSUFBTVMsVUFBVSxJQUFJLENBQUNBLE9BQU8sQ0FBQ1QsVUFDdkJFLGlCQUFpQk87Z0JBRXZCLE9BQU9QO1lBQ1Q7Ozs7WUFFT2EsS0FBQUE7bUJBQVAsU0FBT0EsaUNBQWlDQyxRQUFRLEVBQUVDLFVBQVUsRUFBRUMsT0FBTztnQkFBSSxPQUFPQyxpQkFBWSxDQUFDSixnQ0FBZ0MsQ0F2Q3pIbEIsbUJBdUM2SW1CLFVBQVVDLFlBQVlDO1lBQVU7OztXQXZDN0tyQjtFQUEwQnNCLGlCQUFZO0FBMEM1Q0MsT0FBT0MsTUFBTSxDQUFDeEIsa0JBQWtCeUIsU0FBUyxFQUFFQyxnQkFBYTtJQUV4RCxXQUFlMUIifQ==