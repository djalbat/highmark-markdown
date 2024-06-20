"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return HeadingMarkdownNode;
    }
});
var _necessary = require("necessary");
var _markdown = /*#__PURE__*/ _interop_require_default(require("../../node/markdown"));
var _anchor = /*#__PURE__*/ _interop_require_default(require("../../node/markdown/anchor"));
var _childNodes = require("../../utilities/childNodes");
var _string = require("../../utilities/string");
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
var last = _necessary.arrayUtilities.last;
var HeadingMarkdownNode = /*#__PURE__*/ function(MarkdownNode) {
    _inherits(HeadingMarkdownNode, MarkdownNode);
    var _super = _create_super(HeadingMarkdownNode);
    function HeadingMarkdownNode() {
        _class_call_check(this, HeadingMarkdownNode);
        return _super.apply(this, arguments);
    }
    _create_class(HeadingMarkdownNode, [
        {
            key: "getDepth",
            value: function getDepth() {
                var depth = this.constructor.depth;
                return depth;
            }
        },
        {
            key: "addAnchor",
            value: function addAnchor(context) {
                var identifier = this.identifier(context), anchorMarkdownNode = _anchor.default.fromIdentifier(identifier), prependedChildNode = anchorMarkdownNode; ///
                this.prependChildNode(prependedChildNode);
            }
        },
        {
            key: "identifier",
            value: function identifier(context) {
                var childNodes = this.getChildNodes(), plainText = (0, _childNodes.plainTextFromChildNodes)(childNodes, context), identifier = identifierFromPlainText(plainText);
                return identifier;
            }
        },
        {
            key: "getLineMarkdownNode",
            value: function getLineMarkdownNode() {
                var childNodes = this.getChildNodes(), lastChildNode = last(childNodes), lineMarkdownNode = lastChildNode; ///
                return lineMarkdownNode;
            }
        }
    ], [
        {
            key: "fromRuleNameChildNodesAndOpacity",
            value: function fromRuleNameChildNodesAndOpacity(Class, ruleName, childNodes, opacity) {
                return _markdown.default.fromRuleNameChildNodesAndOpacity(Class, ruleName, childNodes, opacity);
            }
        }
    ]);
    return HeadingMarkdownNode;
}(_markdown.default);
function identifierFromPlainText(plainText) {
    plainText = plainText.toLowerCase(); ///
    plainText = (0, _string.removedLeadingWhitespace)(plainText); ///
    plainText = (0, _string.removeNonAlphabeticAndSpaceCharacters)(plainText); ///
    plainText = (0, _string.replaceSpacesWithHyphens)(plainText); ///
    var identifier = plainText; ///
    return identifier;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ub2RlL21hcmtkb3duL2hlYWRpbmcuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IGFycmF5VXRpbGl0aWVzIH0gZnJvbSBcIm5lY2Vzc2FyeVwiO1xuXG5pbXBvcnQgTWFya2Rvd25Ob2RlIGZyb20gXCIuLi8uLi9ub2RlL21hcmtkb3duXCI7XG5pbXBvcnQgQW5jaG9yTWFya2Rvd25Ob2RlIGZyb20gXCIuLi8uLi9ub2RlL21hcmtkb3duL2FuY2hvclwiO1xuXG5pbXBvcnQgeyBwbGFpblRleHRGcm9tQ2hpbGROb2RlcyB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvY2hpbGROb2Rlc1wiO1xuaW1wb3J0IHsgcmVwbGFjZVNwYWNlc1dpdGhIeXBoZW5zLCByZW1vdmVkTGVhZGluZ1doaXRlc3BhY2UsIHJlbW92ZU5vbkFscGhhYmV0aWNBbmRTcGFjZUNoYXJhY3RlcnMgfSBmcm9tIFwiLi4vLi4vdXRpbGl0aWVzL3N0cmluZ1wiO1xuXG5jb25zdCB7IGxhc3QgfSA9IGFycmF5VXRpbGl0aWVzO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBIZWFkaW5nTWFya2Rvd25Ob2RlIGV4dGVuZHMgTWFya2Rvd25Ob2RlIHtcbiAgZ2V0RGVwdGgoKSB7XG4gICAgY29uc3QgeyBkZXB0aCB9ID0gdGhpcy5jb25zdHJ1Y3RvcjtcblxuICAgIHJldHVybiBkZXB0aDtcbiAgfVxuXG4gIGFkZEFuY2hvcihjb250ZXh0KSB7XG4gICAgY29uc3QgaWRlbnRpZmllciA9IHRoaXMuaWRlbnRpZmllcihjb250ZXh0KSxcbiAgICAgICAgICBhbmNob3JNYXJrZG93bk5vZGUgPSBBbmNob3JNYXJrZG93bk5vZGUuZnJvbUlkZW50aWZpZXIoaWRlbnRpZmllciksXG4gICAgICAgICAgcHJlcGVuZGVkQ2hpbGROb2RlID0gYW5jaG9yTWFya2Rvd25Ob2RlOyAvLy9cblxuICAgIHRoaXMucHJlcGVuZENoaWxkTm9kZShwcmVwZW5kZWRDaGlsZE5vZGUpO1xuICB9XG5cbiAgaWRlbnRpZmllcihjb250ZXh0KSB7XG4gICAgY29uc3QgY2hpbGROb2RlcyA9IHRoaXMuZ2V0Q2hpbGROb2RlcygpLFxuICAgICAgICAgIHBsYWluVGV4dCA9IHBsYWluVGV4dEZyb21DaGlsZE5vZGVzKGNoaWxkTm9kZXMsIGNvbnRleHQpLFxuICAgICAgICAgIGlkZW50aWZpZXIgPSBpZGVudGlmaWVyRnJvbVBsYWluVGV4dChwbGFpblRleHQpO1xuXG4gICAgcmV0dXJuIGlkZW50aWZpZXI7XG4gIH1cblxuICBnZXRMaW5lTWFya2Rvd25Ob2RlKCkge1xuICAgIGNvbnN0IGNoaWxkTm9kZXMgPSB0aGlzLmdldENoaWxkTm9kZXMoKSxcbiAgICAgICAgICBsYXN0Q2hpbGROb2RlID0gbGFzdChjaGlsZE5vZGVzKSxcbiAgICAgICAgICBsaW5lTWFya2Rvd25Ob2RlID0gbGFzdENoaWxkTm9kZTsgIC8vL1xuXG4gICAgcmV0dXJuIGxpbmVNYXJrZG93bk5vZGU7XG4gIH1cblxuICBzdGF0aWMgZnJvbVJ1bGVOYW1lQ2hpbGROb2Rlc0FuZE9wYWNpdHkoQ2xhc3MsIHJ1bGVOYW1lLCBjaGlsZE5vZGVzLCBvcGFjaXR5KSB7IHJldHVybiBNYXJrZG93bk5vZGUuZnJvbVJ1bGVOYW1lQ2hpbGROb2Rlc0FuZE9wYWNpdHkoQ2xhc3MsIHJ1bGVOYW1lLCBjaGlsZE5vZGVzLCBvcGFjaXR5KTsgfVxufVxuXG5mdW5jdGlvbiBpZGVudGlmaWVyRnJvbVBsYWluVGV4dChwbGFpblRleHQpIHtcbiAgcGxhaW5UZXh0ID0gcGxhaW5UZXh0LnRvTG93ZXJDYXNlKCk7ICAvLy9cblxuICBwbGFpblRleHQgPSByZW1vdmVkTGVhZGluZ1doaXRlc3BhY2UocGxhaW5UZXh0KTsgIC8vL1xuXG4gIHBsYWluVGV4dCA9IHJlbW92ZU5vbkFscGhhYmV0aWNBbmRTcGFjZUNoYXJhY3RlcnMocGxhaW5UZXh0KTsgLy8vXG5cbiAgcGxhaW5UZXh0ID0gcmVwbGFjZVNwYWNlc1dpdGhIeXBoZW5zKHBsYWluVGV4dCk7ICAvLy9cblxuICBjb25zdCBpZGVudGlmaWVyID0gcGxhaW5UZXh0OyAvLy9cblxuICByZXR1cm4gaWRlbnRpZmllcjtcbn1cbiJdLCJuYW1lcyI6WyJIZWFkaW5nTWFya2Rvd25Ob2RlIiwibGFzdCIsImFycmF5VXRpbGl0aWVzIiwiZ2V0RGVwdGgiLCJkZXB0aCIsImNvbnN0cnVjdG9yIiwiYWRkQW5jaG9yIiwiY29udGV4dCIsImlkZW50aWZpZXIiLCJhbmNob3JNYXJrZG93bk5vZGUiLCJBbmNob3JNYXJrZG93bk5vZGUiLCJmcm9tSWRlbnRpZmllciIsInByZXBlbmRlZENoaWxkTm9kZSIsInByZXBlbmRDaGlsZE5vZGUiLCJjaGlsZE5vZGVzIiwiZ2V0Q2hpbGROb2RlcyIsInBsYWluVGV4dCIsInBsYWluVGV4dEZyb21DaGlsZE5vZGVzIiwiaWRlbnRpZmllckZyb21QbGFpblRleHQiLCJnZXRMaW5lTWFya2Rvd25Ob2RlIiwibGFzdENoaWxkTm9kZSIsImxpbmVNYXJrZG93bk5vZGUiLCJmcm9tUnVsZU5hbWVDaGlsZE5vZGVzQW5kT3BhY2l0eSIsIkNsYXNzIiwicnVsZU5hbWUiLCJvcGFjaXR5IiwiTWFya2Rvd25Ob2RlIiwidG9Mb3dlckNhc2UiLCJyZW1vdmVkTGVhZGluZ1doaXRlc3BhY2UiLCJyZW1vdmVOb25BbHBoYWJldGljQW5kU3BhY2VDaGFyYWN0ZXJzIiwicmVwbGFjZVNwYWNlc1dpdGhIeXBoZW5zIl0sInJhbmdlTWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsiLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFZcUJBOzs7eUJBVlU7K0RBRU47NkRBQ007MEJBRVM7c0JBQ2tFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRTFHLElBQU0sQUFBRUMsT0FBU0MseUJBQWMsQ0FBdkJEO0FBRU8sSUFBQSxBQUFNRCxvQ0FBRCxBQUFMO2NBQU1BOytCQUFBQTthQUFBQTtnQ0FBQUE7OztrQkFBQUE7O1lBQ25CRyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBTSxBQUFFQyxRQUFVLElBQUksQ0FBQ0MsV0FBVyxDQUExQkQ7Z0JBRVIsT0FBT0E7WUFDVDs7O1lBRUFFLEtBQUFBO21CQUFBQSxTQUFBQSxVQUFVQyxPQUFPO2dCQUNmLElBQU1DLGFBQWEsSUFBSSxDQUFDQSxVQUFVLENBQUNELFVBQzdCRSxxQkFBcUJDLGVBQWtCLENBQUNDLGNBQWMsQ0FBQ0gsYUFDdkRJLHFCQUFxQkgsb0JBQW9CLEdBQUc7Z0JBRWxELElBQUksQ0FBQ0ksZ0JBQWdCLENBQUNEO1lBQ3hCOzs7WUFFQUosS0FBQUE7bUJBQUFBLFNBQUFBLFdBQVdELE9BQU87Z0JBQ2hCLElBQU1PLGFBQWEsSUFBSSxDQUFDQyxhQUFhLElBQy9CQyxZQUFZQyxJQUFBQSxtQ0FBdUIsRUFBQ0gsWUFBWVAsVUFDaERDLGFBQWFVLHdCQUF3QkY7Z0JBRTNDLE9BQU9SO1lBQ1Q7OztZQUVBVyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBTUwsYUFBYSxJQUFJLENBQUNDLGFBQWEsSUFDL0JLLGdCQUFnQm5CLEtBQUthLGFBQ3JCTyxtQkFBbUJELGVBQWdCLEdBQUc7Z0JBRTVDLE9BQU9DO1lBQ1Q7Ozs7WUFFT0MsS0FBQUE7bUJBQVAsU0FBT0EsaUNBQWlDQyxLQUFLLEVBQUVDLFFBQVEsRUFBRVYsVUFBVSxFQUFFVyxPQUFPO2dCQUFJLE9BQU9DLGlCQUFZLENBQUNKLGdDQUFnQyxDQUFDQyxPQUFPQyxVQUFVVixZQUFZVztZQUFVOzs7V0EvQnpKekI7RUFBNEIwQixpQkFBWTtBQWtDN0QsU0FBU1Isd0JBQXdCRixTQUFTO0lBQ3hDQSxZQUFZQSxVQUFVVyxXQUFXLElBQUssR0FBRztJQUV6Q1gsWUFBWVksSUFBQUEsZ0NBQXdCLEVBQUNaLFlBQWEsR0FBRztJQUVyREEsWUFBWWEsSUFBQUEsNkNBQXFDLEVBQUNiLFlBQVksR0FBRztJQUVqRUEsWUFBWWMsSUFBQUEsZ0NBQXdCLEVBQUNkLFlBQWEsR0FBRztJQUVyRCxJQUFNUixhQUFhUSxXQUFXLEdBQUc7SUFFakMsT0FBT1I7QUFDVCJ9