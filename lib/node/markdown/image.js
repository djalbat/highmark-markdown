"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return ImageMarkdownNode;
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
var ImageMarkdownNode = /*#__PURE__*/ function(MarkdownNode) {
    _inherits(ImageMarkdownNode, MarkdownNode);
    var _super = _create_super(ImageMarkdownNode);
    function ImageMarkdownNode() {
        _class_call_check(this, ImageMarkdownNode);
        return _super.apply(this, arguments);
    }
    _create_class(ImageMarkdownNode, [
        {
            key: "createDOMElement",
            value: function createDOMElement(context) {
                var domElement = _get(_get_prototype_of(ImageMarkdownNode.prototype), "createDOMElement", this).call(this, context), innerHTML = this.getInnerHTML(context), src = this.getSrc(context), name = _attributeNames.SRC_ATTRIBUTE_NAME, value = src; ///
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
            key: "getSrc",
            value: function getSrc(context) {
                var childNodes = this.getChildNodes(), secondLastChildNode = secondLast(childNodes), URLMarkdownNode = secondLastChildNode, URLMarkdownNodeContent = URLMarkdownNode.getContent(context), src = URLMarkdownNodeContent; ///
                return src;
            }
        }
    ], [
        {
            key: "fromRuleNameChildNodesAndAmbiguous",
            value: function fromRuleNameChildNodesAndAmbiguous(ruleName, childNodes, ambiguous) {
                return _markdown.default.fromRuleNameChildNodesAndAmbiguous(ImageMarkdownNode, ruleName, childNodes, ambiguous);
            }
        }
    ]);
    return ImageMarkdownNode;
}(_markdown.default);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ub2RlL21hcmtkb3duL2ltYWdlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBhcnJheVV0aWxpdGllcyB9IGZyb20gXCJuZWNlc3NhcnlcIjtcblxuaW1wb3J0IE1hcmtkb3duTm9kZSBmcm9tIFwiLi4vLi4vbm9kZS9tYXJrZG93blwiO1xuXG5pbXBvcnQgeyBTUkNfQVRUUklCVVRFX05BTUUgfSBmcm9tIFwiLi4vLi4vYXR0cmlidXRlTmFtZXNcIjtcblxuY29uc3QgeyBzZWNvbmQsIHNlY29uZExhc3QgfSA9IGFycmF5VXRpbGl0aWVzO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJbWFnZU1hcmtkb3duTm9kZSBleHRlbmRzIE1hcmtkb3duTm9kZSB7XG4gIGNyZWF0ZURPTUVsZW1lbnQoY29udGV4dCkge1xuICAgIGNvbnN0IGRvbUVsZW1lbnQgPSBzdXBlci5jcmVhdGVET01FbGVtZW50KGNvbnRleHQpLFxuICAgICAgICAgIGlubmVySFRNTCA9IHRoaXMuZ2V0SW5uZXJIVE1MKGNvbnRleHQpLFxuICAgICAgICAgIHNyYyA9IHRoaXMuZ2V0U3JjKGNvbnRleHQpLFxuICAgICAgICAgIG5hbWUgPSBTUkNfQVRUUklCVVRFX05BTUUsXG4gICAgICAgICAgdmFsdWUgPSBzcmM7IC8vL1xuXG4gICAgdGhpcy5zZXRBdHRyaWJ1dGUobmFtZSwgdmFsdWUpO1xuXG4gICAgdGhpcy5zZXRJbm5lckhUTUwoaW5uZXJIVE1MKTtcblxuICAgIHJldHVybiBkb21FbGVtZW50O1xuICB9XG5cbiAgZ2V0SW5uZXJIVE1MKGNvbnRleHQpIHtcbiAgICBjb25zdCBjaGlsZE5vZGVzID0gdGhpcy5nZXRDaGlsZE5vZGVzKCksXG4gICAgICAgICAgc2Vjb25kQ2hpbGROb2RlID0gc2Vjb25kKGNoaWxkTm9kZXMpLFxuICAgICAgICAgIGlubGluZVRleHRNYXJrZG93bk5vZGUgPSBzZWNvbmRDaGlsZE5vZGUsICAvLy9cbiAgICAgICAgICBpbmxpbmVUZXh0TWFya2Rvd25Ob2RlQ29udGVudCA9IGlubGluZVRleHRNYXJrZG93bk5vZGUuZ2V0Q29udGVudChjb250ZXh0KSxcbiAgICAgICAgICBpbm5lckhUTUwgPSBpbmxpbmVUZXh0TWFya2Rvd25Ob2RlQ29udGVudDsgLy8vXG5cbiAgICByZXR1cm4gaW5uZXJIVE1MO1xuICB9XG5cbiAgZ2V0U3JjKGNvbnRleHQpIHtcbiAgICBjb25zdCBjaGlsZE5vZGVzID0gdGhpcy5nZXRDaGlsZE5vZGVzKCksXG4gICAgICAgICAgc2Vjb25kTGFzdENoaWxkTm9kZSA9IHNlY29uZExhc3QoY2hpbGROb2RlcyksXG4gICAgICAgICAgVVJMTWFya2Rvd25Ob2RlID0gc2Vjb25kTGFzdENoaWxkTm9kZSwgIC8vL1xuICAgICAgICAgIFVSTE1hcmtkb3duTm9kZUNvbnRlbnQgPSBVUkxNYXJrZG93bk5vZGUuZ2V0Q29udGVudChjb250ZXh0KSxcbiAgICAgICAgICBzcmMgPSBVUkxNYXJrZG93bk5vZGVDb250ZW50OyAvLy9cblxuICAgIHJldHVybiBzcmM7XG4gIH1cblxuICBzdGF0aWMgZnJvbVJ1bGVOYW1lQ2hpbGROb2Rlc0FuZEFtYmlndW91cyhydWxlTmFtZSwgY2hpbGROb2RlcywgYW1iaWd1b3VzKSB7IHJldHVybiBNYXJrZG93bk5vZGUuZnJvbVJ1bGVOYW1lQ2hpbGROb2Rlc0FuZEFtYmlndW91cyhJbWFnZU1hcmtkb3duTm9kZSwgcnVsZU5hbWUsIGNoaWxkTm9kZXMsIGFtYmlndW91cyk7IH1cbn1cbiJdLCJuYW1lcyI6WyJJbWFnZU1hcmtkb3duTm9kZSIsInNlY29uZCIsImFycmF5VXRpbGl0aWVzIiwic2Vjb25kTGFzdCIsImNyZWF0ZURPTUVsZW1lbnQiLCJjb250ZXh0IiwiZG9tRWxlbWVudCIsImlubmVySFRNTCIsImdldElubmVySFRNTCIsInNyYyIsImdldFNyYyIsIm5hbWUiLCJTUkNfQVRUUklCVVRFX05BTUUiLCJ2YWx1ZSIsInNldEF0dHJpYnV0ZSIsInNldElubmVySFRNTCIsImNoaWxkTm9kZXMiLCJnZXRDaGlsZE5vZGVzIiwic2Vjb25kQ2hpbGROb2RlIiwiaW5saW5lVGV4dE1hcmtkb3duTm9kZSIsImlubGluZVRleHRNYXJrZG93bk5vZGVDb250ZW50IiwiZ2V0Q29udGVudCIsInNlY29uZExhc3RDaGlsZE5vZGUiLCJVUkxNYXJrZG93bk5vZGUiLCJVUkxNYXJrZG93bk5vZGVDb250ZW50IiwiZnJvbVJ1bGVOYW1lQ2hpbGROb2Rlc0FuZEFtYmlndW91cyIsInJ1bGVOYW1lIiwiYW1iaWd1b3VzIiwiTWFya2Rvd25Ob2RlIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQVVxQkE7Ozt5QkFSVTsrREFFTjs4QkFFVTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRW5DLElBQVFDLFNBQXVCQyx5QkFBYyxDQUFyQ0QsUUFBUUUsYUFBZUQseUJBQWMsQ0FBN0JDO0FBRUQsSUFBQSxBQUFNSCxrQ0FBRCxBQUFMO2NBQU1BOytCQUFBQTthQUFBQTtnQ0FBQUE7OztrQkFBQUE7O1lBQ25CSSxLQUFBQTttQkFBQUEsU0FBQUEsaUJBQWlCQyxPQUFPO2dCQUN0QixJQUFNQyxhQUFhLHVCQUZGTiw4QkFFUUksb0JBQU4sSUFBSyxhQUFrQkMsVUFDcENFLFlBQVksSUFBSSxDQUFDQyxZQUFZLENBQUNILFVBQzlCSSxNQUFNLElBQUksQ0FBQ0MsTUFBTSxDQUFDTCxVQUNsQk0sT0FBT0Msa0NBQWtCLEVBQ3pCQyxRQUFRSixLQUFLLEdBQUc7Z0JBRXRCLElBQUksQ0FBQ0ssWUFBWSxDQUFDSCxNQUFNRTtnQkFFeEIsSUFBSSxDQUFDRSxZQUFZLENBQUNSO2dCQUVsQixPQUFPRDtZQUNUOzs7WUFFQUUsS0FBQUE7bUJBQUFBLFNBQUFBLGFBQWFILE9BQU87Z0JBQ2xCLElBQU1XLGFBQWEsSUFBSSxDQUFDQyxhQUFhLElBQy9CQyxrQkFBa0JqQixPQUFPZSxhQUN6QkcseUJBQXlCRCxpQkFDekJFLGdDQUFnQ0QsdUJBQXVCRSxVQUFVLENBQUNoQixVQUNsRUUsWUFBWWEsK0JBQStCLEdBQUc7Z0JBRXBELE9BQU9iO1lBQ1Q7OztZQUVBRyxLQUFBQTttQkFBQUEsU0FBQUEsT0FBT0wsT0FBTztnQkFDWixJQUFNVyxhQUFhLElBQUksQ0FBQ0MsYUFBYSxJQUMvQkssc0JBQXNCbkIsV0FBV2EsYUFDakNPLGtCQUFrQkQscUJBQ2xCRSx5QkFBeUJELGdCQUFnQkYsVUFBVSxDQUFDaEIsVUFDcERJLE1BQU1lLHdCQUF3QixHQUFHO2dCQUV2QyxPQUFPZjtZQUNUOzs7O1lBRU9nQixLQUFBQTttQkFBUCxTQUFPQSxtQ0FBbUNDLFFBQVEsRUFBRVYsVUFBVSxFQUFFVyxTQUFTO2dCQUFJLE9BQU9DLGlCQUFZLENBQUNILGtDQUFrQyxDQW5DaEh6QixtQkFtQ29JMEIsVUFBVVYsWUFBWVc7WUFBWTs7O1dBbkN0SzNCO0VBQTBCNEIsaUJBQVkifQ==