"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return HyperlinkMarkdownNode;
    }
});
var _necessary = require("necessary");
var _markdown = /*#__PURE__*/ _interop_require_default(require("../../node/markdown"));
var _attributeNames = require("../../attributeNames");
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
var second = _necessary.arrayUtilities.second, secondLast = _necessary.arrayUtilities.secondLast;
var HyperlinkMarkdownNode = /*#__PURE__*/ function(MarkdownNode) {
    _inherits(HyperlinkMarkdownNode, MarkdownNode);
    var _super = _create_super(HyperlinkMarkdownNode);
    function HyperlinkMarkdownNode() {
        _class_call_check(this, HyperlinkMarkdownNode);
        return _super.apply(this, arguments);
    }
    _create_class(HyperlinkMarkdownNode, [
        {
            key: "createDOMElement",
            value: function createDOMElement(context) {
                var domElement = _get(_get_prototype_of(HyperlinkMarkdownNode.prototype), "createDOMElement", this).call(this, context), innerHTML = this.getInnerHTML(context), href = this.getHref(context), name = _attributeNames.HREF_ATTRIBUTE_NAME, value = href; ///
                this.setAttribute(name, value);
                this.setInnerHTML(innerHTML);
                return domElement;
            }
        },
        {
            key: "getInnerHTML",
            value: function getInnerHTML(context) {
                var childNodes = this.getChildNodes(), secondChildNode = second(childNodes), inlineTextMarkdownNode = secondChildNode, inlineTextMarkdownNodeContent = inlineTextMarkdownNode.getContent(context), innerHTML = inlineTextMarkdownNodeContent; ///
                return innerHTML;
            }
        },
        {
            key: "getHref",
            value: function getHref(context) {
                var childNodes = this.getChildNodes(), secondLastChildNode = secondLast(childNodes), URLMarkdownNode = secondLastChildNode, URLMarkdownNodeContent = URLMarkdownNode.getContent(context), href = URLMarkdownNodeContent; ///
                return href;
            }
        }
    ], [
        {
            key: "fromRuleNameChildNodesAndAmbiguous",
            value: function fromRuleNameChildNodesAndAmbiguous(ruleName, childNodes, ambiguous) {
                return _markdown.default.fromRuleNameChildNodesAndAmbiguous(HyperlinkMarkdownNode, ruleName, childNodes, ambiguous);
            }
        }
    ]);
    return HyperlinkMarkdownNode;
}(_markdown.default);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ub2RlL21hcmtkb3duL2h5cGVybGluay5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgYXJyYXlVdGlsaXRpZXMgfSBmcm9tIFwibmVjZXNzYXJ5XCI7XG5cbmltcG9ydCBNYXJrZG93bk5vZGUgZnJvbSBcIi4uLy4uL25vZGUvbWFya2Rvd25cIjtcblxuaW1wb3J0IHsgSFJFRl9BVFRSSUJVVEVfTkFNRSB9IGZyb20gXCIuLi8uLi9hdHRyaWJ1dGVOYW1lc1wiO1xuXG5jb25zdCB7IHNlY29uZCwgc2Vjb25kTGFzdCB9ID0gYXJyYXlVdGlsaXRpZXM7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEh5cGVybGlua01hcmtkb3duTm9kZSBleHRlbmRzIE1hcmtkb3duTm9kZSB7XG4gIGNyZWF0ZURPTUVsZW1lbnQoY29udGV4dCkge1xuICAgIGNvbnN0IGRvbUVsZW1lbnQgPSBzdXBlci5jcmVhdGVET01FbGVtZW50KGNvbnRleHQpLFxuICAgICAgICAgIGlubmVySFRNTCA9IHRoaXMuZ2V0SW5uZXJIVE1MKGNvbnRleHQpLFxuICAgICAgICAgIGhyZWYgPSB0aGlzLmdldEhyZWYoY29udGV4dCksXG4gICAgICAgICAgbmFtZSA9IEhSRUZfQVRUUklCVVRFX05BTUUsXG4gICAgICAgICAgdmFsdWUgPSBocmVmOyAvLy9cblxuICAgIHRoaXMuc2V0QXR0cmlidXRlKG5hbWUsIHZhbHVlKTtcblxuICAgIHRoaXMuc2V0SW5uZXJIVE1MKGlubmVySFRNTCk7XG5cbiAgICByZXR1cm4gZG9tRWxlbWVudDtcbiAgfVxuXG4gIGdldElubmVySFRNTChjb250ZXh0KSB7XG4gICAgY29uc3QgY2hpbGROb2RlcyA9IHRoaXMuZ2V0Q2hpbGROb2RlcygpLFxuICAgICAgICAgIHNlY29uZENoaWxkTm9kZSA9IHNlY29uZChjaGlsZE5vZGVzKSxcbiAgICAgICAgICBpbmxpbmVUZXh0TWFya2Rvd25Ob2RlID0gc2Vjb25kQ2hpbGROb2RlLCAgLy8vXG4gICAgICAgICAgaW5saW5lVGV4dE1hcmtkb3duTm9kZUNvbnRlbnQgPSBpbmxpbmVUZXh0TWFya2Rvd25Ob2RlLmdldENvbnRlbnQoY29udGV4dCksXG4gICAgICAgICAgaW5uZXJIVE1MID0gaW5saW5lVGV4dE1hcmtkb3duTm9kZUNvbnRlbnQ7IC8vL1xuXG4gICAgcmV0dXJuIGlubmVySFRNTDtcbiAgfVxuXG4gIGdldEhyZWYoY29udGV4dCkge1xuICAgIGNvbnN0IGNoaWxkTm9kZXMgPSB0aGlzLmdldENoaWxkTm9kZXMoKSxcbiAgICAgICAgICBzZWNvbmRMYXN0Q2hpbGROb2RlID0gc2Vjb25kTGFzdChjaGlsZE5vZGVzKSxcbiAgICAgICAgICBVUkxNYXJrZG93bk5vZGUgPSBzZWNvbmRMYXN0Q2hpbGROb2RlLCAgLy8vXG4gICAgICAgICAgVVJMTWFya2Rvd25Ob2RlQ29udGVudCA9IFVSTE1hcmtkb3duTm9kZS5nZXRDb250ZW50KGNvbnRleHQpLFxuICAgICAgICAgIGhyZWYgPSBVUkxNYXJrZG93bk5vZGVDb250ZW50OyAvLy9cblxuICAgIHJldHVybiBocmVmO1xuICB9XG5cbiAgc3RhdGljIGZyb21SdWxlTmFtZUNoaWxkTm9kZXNBbmRBbWJpZ3VvdXMocnVsZU5hbWUsIGNoaWxkTm9kZXMsIGFtYmlndW91cykgeyByZXR1cm4gTWFya2Rvd25Ob2RlLmZyb21SdWxlTmFtZUNoaWxkTm9kZXNBbmRBbWJpZ3VvdXMoSHlwZXJsaW5rTWFya2Rvd25Ob2RlLCBydWxlTmFtZSwgY2hpbGROb2RlcywgYW1iaWd1b3VzKTsgfVxufVxuIl0sIm5hbWVzIjpbIkh5cGVybGlua01hcmtkb3duTm9kZSIsInNlY29uZCIsImFycmF5VXRpbGl0aWVzIiwic2Vjb25kTGFzdCIsImNyZWF0ZURPTUVsZW1lbnQiLCJjb250ZXh0IiwiZG9tRWxlbWVudCIsImlubmVySFRNTCIsImdldElubmVySFRNTCIsImhyZWYiLCJnZXRIcmVmIiwibmFtZSIsIkhSRUZfQVRUUklCVVRFX05BTUUiLCJ2YWx1ZSIsInNldEF0dHJpYnV0ZSIsInNldElubmVySFRNTCIsImNoaWxkTm9kZXMiLCJnZXRDaGlsZE5vZGVzIiwic2Vjb25kQ2hpbGROb2RlIiwiaW5saW5lVGV4dE1hcmtkb3duTm9kZSIsImlubGluZVRleHRNYXJrZG93bk5vZGVDb250ZW50IiwiZ2V0Q29udGVudCIsInNlY29uZExhc3RDaGlsZE5vZGUiLCJVUkxNYXJrZG93bk5vZGUiLCJVUkxNYXJrZG93bk5vZGVDb250ZW50IiwiZnJvbVJ1bGVOYW1lQ2hpbGROb2Rlc0FuZEFtYmlndW91cyIsInJ1bGVOYW1lIiwiYW1iaWd1b3VzIiwiTWFya2Rvd25Ob2RlIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQVVxQkE7Ozt5QkFSVTsrREFFTjs4QkFFVzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRXBDLElBQVFDLFNBQXVCQyx5QkFBYyxDQUFyQ0QsUUFBUUUsYUFBZUQseUJBQWMsQ0FBN0JDO0FBRUQsSUFBQSxBQUFNSCxzQ0FBRCxBQUFMO2NBQU1BOytCQUFBQTthQUFBQTtnQ0FBQUE7OztrQkFBQUE7O1lBQ25CSSxLQUFBQTttQkFBQUEsU0FBQUEsaUJBQWlCQyxPQUFPO2dCQUN0QixJQUFNQyxhQUFhLHVCQUZGTixrQ0FFUUksb0JBQU4sSUFBSyxhQUFrQkMsVUFDcENFLFlBQVksSUFBSSxDQUFDQyxZQUFZLENBQUNILFVBQzlCSSxPQUFPLElBQUksQ0FBQ0MsT0FBTyxDQUFDTCxVQUNwQk0sT0FBT0MsbUNBQW1CLEVBQzFCQyxRQUFRSixNQUFNLEdBQUc7Z0JBRXZCLElBQUksQ0FBQ0ssWUFBWSxDQUFDSCxNQUFNRTtnQkFFeEIsSUFBSSxDQUFDRSxZQUFZLENBQUNSO2dCQUVsQixPQUFPRDtZQUNUOzs7WUFFQUUsS0FBQUE7bUJBQUFBLFNBQUFBLGFBQWFILE9BQU87Z0JBQ2xCLElBQU1XLGFBQWEsSUFBSSxDQUFDQyxhQUFhLElBQy9CQyxrQkFBa0JqQixPQUFPZSxhQUN6QkcseUJBQXlCRCxpQkFDekJFLGdDQUFnQ0QsdUJBQXVCRSxVQUFVLENBQUNoQixVQUNsRUUsWUFBWWEsK0JBQStCLEdBQUc7Z0JBRXBELE9BQU9iO1lBQ1Q7OztZQUVBRyxLQUFBQTttQkFBQUEsU0FBQUEsUUFBUUwsT0FBTztnQkFDYixJQUFNVyxhQUFhLElBQUksQ0FBQ0MsYUFBYSxJQUMvQkssc0JBQXNCbkIsV0FBV2EsYUFDakNPLGtCQUFrQkQscUJBQ2xCRSx5QkFBeUJELGdCQUFnQkYsVUFBVSxDQUFDaEIsVUFDcERJLE9BQU9lLHdCQUF3QixHQUFHO2dCQUV4QyxPQUFPZjtZQUNUOzs7O1lBRU9nQixLQUFBQTttQkFBUCxTQUFPQSxtQ0FBbUNDLFFBQVEsRUFBRVYsVUFBVSxFQUFFVyxTQUFTO2dCQUFJLE9BQU9DLGlCQUFZLENBQUNILGtDQUFrQyxDQW5DaEh6Qix1QkFtQ3dJMEIsVUFBVVYsWUFBWVc7WUFBWTs7O1dBbkMxSzNCO0VBQThCNEIsaUJBQVkifQ==