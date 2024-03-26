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
            key: "childNodesAsHTML",
            value: function childNodesAsHTML(indent, context) {
                var content = this.content(context), childNodesHTML = content; ///
                return childNodesHTML;
            }
        },
        {
            key: "createChildNodeDOMElements",
            value: function createChildNodeDOMElements(context) {
                var content = this.content(context), domElement = this.getDOMElement(), parentDOMElement = domElement, siblingDOMElement = null, childNodeDOMElement = document.createTextNode(content);
                parentDOMElement.insertBefore(childNodeDOMElement, siblingDOMElement);
            }
        },
        {
            key: "content",
            value: function content(context) {
                var childNodes = this.getChildNodes(), secondChildNode = second(childNodes), inlineTextMarkdownNode = secondChildNode, content = inlineTextMarkdownNode.content(context);
                return content;
            }
        },
        {
            key: "attributeName",
            value: function attributeName(context) {
                var attributeName = _attributeNames.SRC_ATTRIBUTE_NAME;
                return attributeName;
            }
        },
        {
            key: "attributeValue",
            value: function attributeValue(context) {
                var _context_pathToURL = context.pathToURL, pathToURL = _context_pathToURL === void 0 ? null : _context_pathToURL, childNodes = this.getChildNodes(), secondLastChildNode = secondLast(childNodes), pathTerminalNode = secondLastChildNode, pathTerminalNodeContent = pathTerminalNode.getContent(), path = pathTerminalNodeContent, imageURL = pathToURL === null ? path : pathToURL(path), attributeValue = imageURL; ///
                return attributeValue;
            }
        }
    ], [
        {
            key: "fromRuleNameChildNodesAndOpacity",
            value: function fromRuleNameChildNodesAndOpacity(ruleName, childNodes, opacity) {
                return _markdown.default.fromRuleNameChildNodesAndOpacity(ImageMarkdownNode, ruleName, childNodes, opacity);
            }
        }
    ]);
    return ImageMarkdownNode;
}(_markdown.default);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ub2RlL21hcmtkb3duL2ltYWdlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBhcnJheVV0aWxpdGllcyB9IGZyb20gXCJuZWNlc3NhcnlcIjtcblxuaW1wb3J0IE1hcmtkb3duTm9kZSBmcm9tIFwiLi4vLi4vbm9kZS9tYXJrZG93blwiO1xuXG5pbXBvcnQgeyBTUkNfQVRUUklCVVRFX05BTUUgfSBmcm9tIFwiLi4vLi4vYXR0cmlidXRlTmFtZXNcIjtcblxuY29uc3QgeyBzZWNvbmQsIHNlY29uZExhc3QgfSA9IGFycmF5VXRpbGl0aWVzO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJbWFnZU1hcmtkb3duTm9kZSBleHRlbmRzIE1hcmtkb3duTm9kZSB7XG4gIGNoaWxkTm9kZXNBc0hUTUwoaW5kZW50LCBjb250ZXh0KSB7XG4gICAgY29uc3QgY29udGVudCA9IHRoaXMuY29udGVudChjb250ZXh0KSxcbiAgICAgICAgICBjaGlsZE5vZGVzSFRNTCA9IGNvbnRlbnQ7IC8vL1xuXG4gICAgcmV0dXJuIGNoaWxkTm9kZXNIVE1MO1xuICB9XG5cbiAgY3JlYXRlQ2hpbGROb2RlRE9NRWxlbWVudHMoY29udGV4dCkge1xuICAgIGNvbnN0IGNvbnRlbnQgPSB0aGlzLmNvbnRlbnQoY29udGV4dCksXG4gICAgICAgICAgZG9tRWxlbWVudCA9IHRoaXMuZ2V0RE9NRWxlbWVudCgpLFxuICAgICAgICAgIHBhcmVudERPTUVsZW1lbnQgPSBkb21FbGVtZW50LCAgLy8vXG4gICAgICAgICAgc2libGluZ0RPTUVsZW1lbnQgPSBudWxsLFxuICAgICAgICAgIGNoaWxkTm9kZURPTUVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjb250ZW50KTtcblxuICAgIHBhcmVudERPTUVsZW1lbnQuaW5zZXJ0QmVmb3JlKGNoaWxkTm9kZURPTUVsZW1lbnQsIHNpYmxpbmdET01FbGVtZW50KTtcbiAgfVxuXG4gIGNvbnRlbnQoY29udGV4dCkge1xuICAgIGNvbnN0IGNoaWxkTm9kZXMgPSB0aGlzLmdldENoaWxkTm9kZXMoKSxcbiAgICAgICAgICBzZWNvbmRDaGlsZE5vZGUgPSBzZWNvbmQoY2hpbGROb2RlcyksXG4gICAgICAgICAgaW5saW5lVGV4dE1hcmtkb3duTm9kZSA9IHNlY29uZENoaWxkTm9kZSwgIC8vL1xuICAgICAgICAgIGNvbnRlbnQgPSBpbmxpbmVUZXh0TWFya2Rvd25Ob2RlLmNvbnRlbnQoY29udGV4dCk7XG5cbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGF0dHJpYnV0ZU5hbWUoY29udGV4dCkge1xuICAgIGNvbnN0IGF0dHJpYnV0ZU5hbWUgPSBTUkNfQVRUUklCVVRFX05BTUU7XG5cbiAgICByZXR1cm4gYXR0cmlidXRlTmFtZTtcbiAgfVxuXG4gIGF0dHJpYnV0ZVZhbHVlKGNvbnRleHQpIHtcbiAgICBjb25zdCB7IHBhdGhUb1VSTCA9IG51bGwgfSA9IGNvbnRleHQsXG4gICAgICAgICAgY2hpbGROb2RlcyA9IHRoaXMuZ2V0Q2hpbGROb2RlcygpLFxuICAgICAgICAgIHNlY29uZExhc3RDaGlsZE5vZGUgPSBzZWNvbmRMYXN0KGNoaWxkTm9kZXMpLFxuICAgICAgICAgIHBhdGhUZXJtaW5hbE5vZGUgPSBzZWNvbmRMYXN0Q2hpbGROb2RlLCAgLy8vXG4gICAgICAgICAgcGF0aFRlcm1pbmFsTm9kZUNvbnRlbnQgPSBwYXRoVGVybWluYWxOb2RlLmdldENvbnRlbnQoKSxcbiAgICAgICAgICBwYXRoID0gcGF0aFRlcm1pbmFsTm9kZUNvbnRlbnQsIC8vL1xuICAgICAgICAgIGltYWdlVVJMID0gKHBhdGhUb1VSTCA9PT0gbnVsbCkgP1xuICAgICAgICAgICAgICAgICAgICAgIHBhdGggOiAvLy9cbiAgICAgICAgICAgICAgICAgICAgICAgIHBhdGhUb1VSTChwYXRoKSxcbiAgICAgICAgICBhdHRyaWJ1dGVWYWx1ZSA9IGltYWdlVVJMOyAvLy9cblxuICAgIHJldHVybiBhdHRyaWJ1dGVWYWx1ZTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUnVsZU5hbWVDaGlsZE5vZGVzQW5kT3BhY2l0eShydWxlTmFtZSwgY2hpbGROb2Rlcywgb3BhY2l0eSkgeyByZXR1cm4gTWFya2Rvd25Ob2RlLmZyb21SdWxlTmFtZUNoaWxkTm9kZXNBbmRPcGFjaXR5KEltYWdlTWFya2Rvd25Ob2RlLCBydWxlTmFtZSwgY2hpbGROb2Rlcywgb3BhY2l0eSk7IH1cbn1cbiJdLCJuYW1lcyI6WyJJbWFnZU1hcmtkb3duTm9kZSIsInNlY29uZCIsImFycmF5VXRpbGl0aWVzIiwic2Vjb25kTGFzdCIsImNoaWxkTm9kZXNBc0hUTUwiLCJpbmRlbnQiLCJjb250ZXh0IiwiY29udGVudCIsImNoaWxkTm9kZXNIVE1MIiwiY3JlYXRlQ2hpbGROb2RlRE9NRWxlbWVudHMiLCJkb21FbGVtZW50IiwiZ2V0RE9NRWxlbWVudCIsInBhcmVudERPTUVsZW1lbnQiLCJzaWJsaW5nRE9NRWxlbWVudCIsImNoaWxkTm9kZURPTUVsZW1lbnQiLCJkb2N1bWVudCIsImNyZWF0ZVRleHROb2RlIiwiaW5zZXJ0QmVmb3JlIiwiY2hpbGROb2RlcyIsImdldENoaWxkTm9kZXMiLCJzZWNvbmRDaGlsZE5vZGUiLCJpbmxpbmVUZXh0TWFya2Rvd25Ob2RlIiwiYXR0cmlidXRlTmFtZSIsIlNSQ19BVFRSSUJVVEVfTkFNRSIsImF0dHJpYnV0ZVZhbHVlIiwicGF0aFRvVVJMIiwic2Vjb25kTGFzdENoaWxkTm9kZSIsInBhdGhUZXJtaW5hbE5vZGUiLCJwYXRoVGVybWluYWxOb2RlQ29udGVudCIsImdldENvbnRlbnQiLCJwYXRoIiwiaW1hZ2VVUkwiLCJmcm9tUnVsZU5hbWVDaGlsZE5vZGVzQW5kT3BhY2l0eSIsInJ1bGVOYW1lIiwib3BhY2l0eSIsIk1hcmtkb3duTm9kZSJdLCJyYW5nZU1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7IiwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBVXFCQTs7O3lCQVJVOytEQUVOOzhCQUVVOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRW5DLElBQVFDLFNBQXVCQyx5QkFBYyxDQUFyQ0QsUUFBUUUsYUFBZUQseUJBQWMsQ0FBN0JDO0FBRUQsSUFBQSxBQUFNSCxrQ0FBRCxBQUFMO2NBQU1BOytCQUFBQTthQUFBQTtnQ0FBQUE7OztrQkFBQUE7O1lBQ25CSSxLQUFBQTttQkFBQUEsU0FBQUEsaUJBQWlCQyxNQUFNLEVBQUVDLE9BQU87Z0JBQzlCLElBQU1DLFVBQVUsSUFBSSxDQUFDQSxPQUFPLENBQUNELFVBQ3ZCRSxpQkFBaUJELFNBQVMsR0FBRztnQkFFbkMsT0FBT0M7WUFDVDs7O1lBRUFDLEtBQUFBO21CQUFBQSxTQUFBQSwyQkFBMkJILE9BQU87Z0JBQ2hDLElBQU1DLFVBQVUsSUFBSSxDQUFDQSxPQUFPLENBQUNELFVBQ3ZCSSxhQUFhLElBQUksQ0FBQ0MsYUFBYSxJQUMvQkMsbUJBQW1CRixZQUNuQkcsb0JBQW9CLE1BQ3BCQyxzQkFBc0JDLFNBQVNDLGNBQWMsQ0FBQ1Q7Z0JBRXBESyxpQkFBaUJLLFlBQVksQ0FBQ0gscUJBQXFCRDtZQUNyRDs7O1lBRUFOLEtBQUFBO21CQUFBQSxTQUFBQSxRQUFRRCxPQUFPO2dCQUNiLElBQU1ZLGFBQWEsSUFBSSxDQUFDQyxhQUFhLElBQy9CQyxrQkFBa0JuQixPQUFPaUIsYUFDekJHLHlCQUF5QkQsaUJBQ3pCYixVQUFVYyx1QkFBdUJkLE9BQU8sQ0FBQ0Q7Z0JBRS9DLE9BQU9DO1lBQ1Q7OztZQUVBZSxLQUFBQTttQkFBQUEsU0FBQUEsY0FBY2hCLE9BQU87Z0JBQ25CLElBQU1nQixnQkFBZ0JDLGtDQUFrQjtnQkFFeEMsT0FBT0Q7WUFDVDs7O1lBRUFFLEtBQUFBO21CQUFBQSxTQUFBQSxlQUFlbEIsT0FBTztnQkFDcEIseUJBQTZCQSxRQUFyQm1CLFdBQUFBLDRDQUFZLDJCQUNkUCxhQUFhLElBQUksQ0FBQ0MsYUFBYSxJQUMvQk8sc0JBQXNCdkIsV0FBV2UsYUFDakNTLG1CQUFtQkQscUJBQ25CRSwwQkFBMEJELGlCQUFpQkUsVUFBVSxJQUNyREMsT0FBT0YseUJBQ1BHLFdBQVcsQUFBQ04sY0FBYyxPQUNkSyxPQUNFTCxVQUFVSyxPQUN4Qk4saUJBQWlCTyxVQUFVLEdBQUc7Z0JBRXBDLE9BQU9QO1lBQ1Q7Ozs7WUFFT1EsS0FBQUE7bUJBQVAsU0FBT0EsaUNBQWlDQyxRQUFRLEVBQUVmLFVBQVUsRUFBRWdCLE9BQU87Z0JBQUksT0FBT0MsaUJBQVksQ0FBQ0gsZ0NBQWdDLENBaEQxR2hDLG1CQWdEOEhpQyxVQUFVZixZQUFZZ0I7WUFBVTs7O1dBaEQ5SmxDO0VBQTBCbUMsaUJBQVkifQ==