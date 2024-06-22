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
var first = _necessary.arrayUtilities.first;
var DirectivesMarkdownNode = /*#__PURE__*/ function(MarkdownNode) {
    _inherits(DirectivesMarkdownNode, MarkdownNode);
    var _super = _create_super(DirectivesMarkdownNode);
    function DirectivesMarkdownNode() {
        _class_call_check(this, DirectivesMarkdownNode);
        return _super.apply(this, arguments);
    }
    _create_class(DirectivesMarkdownNode, [
        {
            key: "getDOMElement",
            value: function getDOMElement() {
                var directiveMarkdownNode = this.getDirectiveMarkdownNode(), directiveMarkdownNodeDOMElement = directiveMarkdownNode.getDOMElement(), domElement = directiveMarkdownNodeDOMElement; ///
                return domElement;
            }
        },
        {
            key: "asHTML",
            value: function asHTML(indent, context) {
                var directiveMarkdownNode = this.getDirectiveMarkdownNode(), directiveMarkdownNodeHTML = directiveMarkdownNode.asHTML(indent, context), html = directiveMarkdownNodeHTML; ///
                return html;
            }
        },
        {
            key: "createDOMElement",
            value: function createDOMElement(context) {
                var directiveMarkdownNode = this.getDirectiveMarkdownNode();
                directiveMarkdownNode.createDOMElement(context);
            }
        },
        {
            key: "getDirectiveMarkdownNode",
            value: function getDirectiveMarkdownNode() {
                var childNodes = this.getChildNodes(), firstChildNode = first(childNodes), directiveMarkdownNode = firstChildNode; ///
                return directiveMarkdownNode;
            }
        }
    ], [
        {
            key: "fromRuleNameChildNodesAndOpacity",
            value: function fromRuleNameChildNodesAndOpacity(ruleName, childNodes, opacity) {
                return _markdown.default.fromRuleNameChildNodesAndOpacity(DirectivesMarkdownNode, ruleName, childNodes, opacity);
            }
        }
    ]);
    return DirectivesMarkdownNode;
}(_markdown.default);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ub2RlL21hcmtkb3duL2RpcmVjdGl2ZXMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IGFycmF5VXRpbGl0aWVzIH0gZnJvbSBcIm5lY2Vzc2FyeVwiO1xuXG5pbXBvcnQgTWFya2Rvd25Ob2RlIGZyb20gXCIuLi8uLi9ub2RlL21hcmtkb3duXCI7XG5cbmNvbnN0IHsgZmlyc3QgfSA9IGFycmF5VXRpbGl0aWVzO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEaXJlY3RpdmVzTWFya2Rvd25Ob2RlIGV4dGVuZHMgTWFya2Rvd25Ob2RlIHtcbiAgZ2V0RE9NRWxlbWVudCgpIHtcbiAgICBjb25zdCBkaXJlY3RpdmVNYXJrZG93bk5vZGUgPSB0aGlzLmdldERpcmVjdGl2ZU1hcmtkb3duTm9kZSgpLFxuICAgICAgICAgIGRpcmVjdGl2ZU1hcmtkb3duTm9kZURPTUVsZW1lbnQgPSBkaXJlY3RpdmVNYXJrZG93bk5vZGUuZ2V0RE9NRWxlbWVudCgpLFxuICAgICAgICAgIGRvbUVsZW1lbnQgPSBkaXJlY3RpdmVNYXJrZG93bk5vZGVET01FbGVtZW50OyAvLy9cblxuICAgIHJldHVybiBkb21FbGVtZW50O1xuICB9XG5cbiAgYXNIVE1MKGluZGVudCwgY29udGV4dCkge1xuICAgIGNvbnN0IGRpcmVjdGl2ZU1hcmtkb3duTm9kZSA9IHRoaXMuZ2V0RGlyZWN0aXZlTWFya2Rvd25Ob2RlKCksXG4gICAgICAgICAgZGlyZWN0aXZlTWFya2Rvd25Ob2RlSFRNTCA9IGRpcmVjdGl2ZU1hcmtkb3duTm9kZS5hc0hUTUwoaW5kZW50LCBjb250ZXh0KSxcbiAgICAgICAgICBodG1sID0gZGlyZWN0aXZlTWFya2Rvd25Ob2RlSFRNTDsgIC8vL1xuXG4gICAgcmV0dXJuIGh0bWw7XG4gIH1cblxuICBjcmVhdGVET01FbGVtZW50KGNvbnRleHQpIHtcbiAgICBjb25zdCBkaXJlY3RpdmVNYXJrZG93bk5vZGUgPSB0aGlzLmdldERpcmVjdGl2ZU1hcmtkb3duTm9kZSgpO1xuXG4gICAgZGlyZWN0aXZlTWFya2Rvd25Ob2RlLmNyZWF0ZURPTUVsZW1lbnQoY29udGV4dCk7XG4gIH1cblxuICBnZXREaXJlY3RpdmVNYXJrZG93bk5vZGUoKSB7XG4gICAgY29uc3QgY2hpbGROb2RlcyA9IHRoaXMuZ2V0Q2hpbGROb2RlcygpLFxuICAgICAgICAgIGZpcnN0Q2hpbGROb2RlID0gZmlyc3QoY2hpbGROb2RlcyksXG4gICAgICAgICAgZGlyZWN0aXZlTWFya2Rvd25Ob2RlID0gZmlyc3RDaGlsZE5vZGU7IC8vL1xuXG4gICAgcmV0dXJuIGRpcmVjdGl2ZU1hcmtkb3duTm9kZTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUnVsZU5hbWVDaGlsZE5vZGVzQW5kT3BhY2l0eShydWxlTmFtZSwgY2hpbGROb2Rlcywgb3BhY2l0eSkgeyByZXR1cm4gTWFya2Rvd25Ob2RlLmZyb21SdWxlTmFtZUNoaWxkTm9kZXNBbmRPcGFjaXR5KERpcmVjdGl2ZXNNYXJrZG93bk5vZGUsIHJ1bGVOYW1lLCBjaGlsZE5vZGVzLCBvcGFjaXR5KTsgfVxufVxuIl0sIm5hbWVzIjpbIkRpcmVjdGl2ZXNNYXJrZG93bk5vZGUiLCJmaXJzdCIsImFycmF5VXRpbGl0aWVzIiwiZ2V0RE9NRWxlbWVudCIsImRpcmVjdGl2ZU1hcmtkb3duTm9kZSIsImdldERpcmVjdGl2ZU1hcmtkb3duTm9kZSIsImRpcmVjdGl2ZU1hcmtkb3duTm9kZURPTUVsZW1lbnQiLCJkb21FbGVtZW50IiwiYXNIVE1MIiwiaW5kZW50IiwiY29udGV4dCIsImRpcmVjdGl2ZU1hcmtkb3duTm9kZUhUTUwiLCJodG1sIiwiY3JlYXRlRE9NRWxlbWVudCIsImNoaWxkTm9kZXMiLCJnZXRDaGlsZE5vZGVzIiwiZmlyc3RDaGlsZE5vZGUiLCJmcm9tUnVsZU5hbWVDaGlsZE5vZGVzQW5kT3BhY2l0eSIsInJ1bGVOYW1lIiwib3BhY2l0eSIsIk1hcmtkb3duTm9kZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFRcUJBOzs7eUJBTlU7K0RBRU47Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFekIsSUFBTSxBQUFFQyxRQUFVQyx5QkFBYyxDQUF4QkQ7QUFFTyxJQUFBLEFBQU1ELHVDQUFELEFBQUw7Y0FBTUE7K0JBQUFBO2FBQUFBO2dDQUFBQTs7O2tCQUFBQTs7WUFDbkJHLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFNQyx3QkFBd0IsSUFBSSxDQUFDQyx3QkFBd0IsSUFDckRDLGtDQUFrQ0Ysc0JBQXNCRCxhQUFhLElBQ3JFSSxhQUFhRCxpQ0FBaUMsR0FBRztnQkFFdkQsT0FBT0M7WUFDVDs7O1lBRUFDLEtBQUFBO21CQUFBQSxTQUFBQSxPQUFPQyxNQUFNLEVBQUVDLE9BQU87Z0JBQ3BCLElBQU1OLHdCQUF3QixJQUFJLENBQUNDLHdCQUF3QixJQUNyRE0sNEJBQTRCUCxzQkFBc0JJLE1BQU0sQ0FBQ0MsUUFBUUMsVUFDakVFLE9BQU9ELDJCQUE0QixHQUFHO2dCQUU1QyxPQUFPQztZQUNUOzs7WUFFQUMsS0FBQUE7bUJBQUFBLFNBQUFBLGlCQUFpQkgsT0FBTztnQkFDdEIsSUFBTU4sd0JBQXdCLElBQUksQ0FBQ0Msd0JBQXdCO2dCQUUzREQsc0JBQXNCUyxnQkFBZ0IsQ0FBQ0g7WUFDekM7OztZQUVBTCxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBTVMsYUFBYSxJQUFJLENBQUNDLGFBQWEsSUFDL0JDLGlCQUFpQmYsTUFBTWEsYUFDdkJWLHdCQUF3QlksZ0JBQWdCLEdBQUc7Z0JBRWpELE9BQU9aO1lBQ1Q7Ozs7WUFFT2EsS0FBQUE7bUJBQVAsU0FBT0EsaUNBQWlDQyxRQUFRLEVBQUVKLFVBQVUsRUFBRUssT0FBTztnQkFBSSxPQUFPQyxpQkFBWSxDQUFDSCxnQ0FBZ0MsQ0EvQjFHakIsd0JBK0JtSWtCLFVBQVVKLFlBQVlLO1lBQVU7OztXQS9CbktuQjtFQUErQm9CLGlCQUFZIn0=