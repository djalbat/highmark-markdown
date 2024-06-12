"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return LinkMarkdownNode;
    }
});
var _necessary = require("necessary");
var _markdown = /*#__PURE__*/ _interop_require_default(require("../../node/markdown"));
var _constants = require("../../constants");
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
var first = _necessary.arrayUtilities.first;
var LinkMarkdownNode = /*#__PURE__*/ function(MarkdownNode) {
    _inherits(LinkMarkdownNode, MarkdownNode);
    var _super = _create_super(LinkMarkdownNode);
    function LinkMarkdownNode(ruleName, childNodes, opacity, precedence, domElement, number) {
        _class_call_check(this, LinkMarkdownNode);
        var _this;
        _this = _super.call(this, ruleName, childNodes, opacity, precedence, domElement);
        _this.number = number;
        return _this;
    }
    _create_class(LinkMarkdownNode, [
        {
            key: "getNumber",
            value: function getNumber() {
                return this.number;
            }
        },
        {
            key: "setNumber",
            value: function setNumber(number) {
                this.number = number;
            }
        },
        {
            key: "content",
            value: function content(context) {
                var content = this.number !== null ? this.number : _constants.EMPTY_STRING;
                return content;
            }
        },
        {
            key: "identifier",
            value: function identifier(context) {
                var childNodes = this.getChildNodes(), firstChildNode = first(childNodes), linkTerminalNode = firstChildNode, identifier = identifierFromLinkTerminalNode(linkTerminalNode);
                return identifier;
            }
        },
        {
            key: "attributeName",
            value: function attributeName(context) {
                var attributeName = _attributeNames.HREF_ATTRIBUTE_NAME;
                return attributeName;
            }
        },
        {
            key: "attributeValue",
            value: function attributeValue(context) {
                var identifier = this.identifier(context), attributeValue = "#".concat(identifier); ///
                return attributeValue;
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
                return _get(_get_prototype_of(LinkMarkdownNode.prototype), "clone", this).call(this, this.number);
            }
        }
    ], [
        {
            key: "fromRuleNameChildNodesAndOpacity",
            value: function fromRuleNameChildNodesAndOpacity(ruleName, childNodes, opacity) {
                var number = null, linkMarkdownNode = _markdown.default.fromRuleNameChildNodesAndOpacity(LinkMarkdownNode, ruleName, childNodes, opacity, number);
                return linkMarkdownNode;
            }
        }
    ]);
    return LinkMarkdownNode;
}(_markdown.default);
function identifierFromLinkTerminalNode(linkTerminalNode) {
    var content = linkTerminalNode.getContent(), matches = content.match(/\[([^\]]+)]:/), secondMatch = second(matches), identifier = secondMatch; ///
    return identifier;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ub2RlL21hcmtkb3duL2xpbmsuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IGFycmF5VXRpbGl0aWVzIH0gZnJvbSBcIm5lY2Vzc2FyeVwiO1xuXG5pbXBvcnQgTWFya2Rvd25Ob2RlIGZyb20gXCIuLi8uLi9ub2RlL21hcmtkb3duXCI7XG5cbmltcG9ydCB7IEVNUFRZX1NUUklORyB9IGZyb20gXCIuLi8uLi9jb25zdGFudHNcIjtcbmltcG9ydCB7IEhSRUZfQVRUUklCVVRFX05BTUUgfSBmcm9tIFwiLi4vLi4vYXR0cmlidXRlTmFtZXNcIjtcblxuY29uc3QgeyBmaXJzdCB9ID0gYXJyYXlVdGlsaXRpZXM7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIExpbmtNYXJrZG93bk5vZGUgZXh0ZW5kcyBNYXJrZG93bk5vZGUge1xuICBjb25zdHJ1Y3RvcihydWxlTmFtZSwgY2hpbGROb2Rlcywgb3BhY2l0eSwgcHJlY2VkZW5jZSwgZG9tRWxlbWVudCwgbnVtYmVyKSB7XG4gICAgc3VwZXIocnVsZU5hbWUsIGNoaWxkTm9kZXMsIG9wYWNpdHksIHByZWNlZGVuY2UsIGRvbUVsZW1lbnQpO1xuXG4gICAgdGhpcy5udW1iZXIgPSBudW1iZXI7XG4gIH1cblxuICBnZXROdW1iZXIoKSB7XG4gICAgcmV0dXJuIHRoaXMubnVtYmVyO1xuICB9XG5cbiAgc2V0TnVtYmVyKG51bWJlcikge1xuICAgIHRoaXMubnVtYmVyID0gbnVtYmVyO1xuICB9XG5cbiAgY29udGVudChjb250ZXh0KSB7XG4gICAgY29uc3QgY29udGVudCA9ICh0aGlzLm51bWJlciAhPT0gbnVsbCkgP1xuICAgICAgICAgICAgICAgICAgICAgIHRoaXMubnVtYmVyIDpcbiAgICAgICAgICAgICAgICAgICAgICAgIEVNUFRZX1NUUklORztcblxuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWRlbnRpZmllcihjb250ZXh0KSB7XG4gICAgY29uc3QgY2hpbGROb2RlcyA9IHRoaXMuZ2V0Q2hpbGROb2RlcygpLFxuICAgICAgICAgIGZpcnN0Q2hpbGROb2RlID0gZmlyc3QoY2hpbGROb2RlcyksXG4gICAgICAgICAgbGlua1Rlcm1pbmFsTm9kZSA9IGZpcnN0Q2hpbGROb2RlLCAgLy8vXG4gICAgICAgICAgaWRlbnRpZmllciA9IGlkZW50aWZpZXJGcm9tTGlua1Rlcm1pbmFsTm9kZShsaW5rVGVybWluYWxOb2RlKTtcblxuICAgIHJldHVybiBpZGVudGlmaWVyO1xuICB9XG5cbiAgYXR0cmlidXRlTmFtZShjb250ZXh0KSB7XG4gICAgY29uc3QgYXR0cmlidXRlTmFtZSA9IEhSRUZfQVRUUklCVVRFX05BTUU7XG5cbiAgICByZXR1cm4gYXR0cmlidXRlTmFtZTtcbiAgfVxuXG4gIGF0dHJpYnV0ZVZhbHVlKGNvbnRleHQpIHtcbiAgICBjb25zdCBpZGVudGlmaWVyID0gdGhpcy5pZGVudGlmaWVyKGNvbnRleHQpLFxuICAgICAgICAgIGF0dHJpYnV0ZVZhbHVlID0gYCMke2lkZW50aWZpZXJ9YDsgLy8vXG5cbiAgICByZXR1cm4gYXR0cmlidXRlVmFsdWU7XG4gIH1cblxuICBjaGlsZE5vZGVzQXNIVE1MKGluZGVudCwgY29udGV4dCkge1xuICAgIGNvbnN0IGNvbnRlbnQgPSB0aGlzLmNvbnRlbnQoY29udGV4dCksXG4gICAgICAgICAgY2hpbGROb2Rlc0hUTUwgPSBjb250ZW50OyAvLy9cblxuICAgIHJldHVybiBjaGlsZE5vZGVzSFRNTDtcbiAgfVxuXG4gIGNyZWF0ZUNoaWxkTm9kZURPTUVsZW1lbnRzKGNvbnRleHQpIHtcbiAgICBjb25zdCBjb250ZW50ID0gdGhpcy5jb250ZW50KGNvbnRleHQpLFxuICAgICAgICAgIHRleHROb2RlID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY29udGVudCksXG4gICAgICAgICAgZG9tRWxlbWVudCA9IHRleHROb2RlOyAvLy9cblxuICAgIHRoaXMuYWRkRE9NRWxlbWVudChkb21FbGVtZW50KTtcbiAgfVxuXG4gIGNsb25lKCkgeyByZXR1cm4gc3VwZXIuY2xvbmUodGhpcy5udW1iZXIpOyB9XG5cbiAgc3RhdGljIGZyb21SdWxlTmFtZUNoaWxkTm9kZXNBbmRPcGFjaXR5KHJ1bGVOYW1lLCBjaGlsZE5vZGVzLCBvcGFjaXR5KSB7XG4gICAgY29uc3QgbnVtYmVyID0gbnVsbCxcbiAgICAgICAgICBsaW5rTWFya2Rvd25Ob2RlID0gTWFya2Rvd25Ob2RlLmZyb21SdWxlTmFtZUNoaWxkTm9kZXNBbmRPcGFjaXR5KExpbmtNYXJrZG93bk5vZGUsIHJ1bGVOYW1lLCBjaGlsZE5vZGVzLCBvcGFjaXR5LCBudW1iZXIpO1xuXG4gICAgcmV0dXJuIGxpbmtNYXJrZG93bk5vZGU7XG4gIH1cbn1cblxuZnVuY3Rpb24gaWRlbnRpZmllckZyb21MaW5rVGVybWluYWxOb2RlKGxpbmtUZXJtaW5hbE5vZGUpIHtcbiAgY29uc3QgY29udGVudCA9IGxpbmtUZXJtaW5hbE5vZGUuZ2V0Q29udGVudCgpLFxuICAgICAgICBtYXRjaGVzID0gY29udGVudC5tYXRjaCgvXFxbKFteXFxdXSspXTovKSxcbiAgICAgICAgc2Vjb25kTWF0Y2ggPSBzZWNvbmQobWF0Y2hlcyksXG4gICAgICAgIGlkZW50aWZpZXIgPSBzZWNvbmRNYXRjaDsgLy8vXG5cbiAgcmV0dXJuIGlkZW50aWZpZXI7XG59Il0sIm5hbWVzIjpbIkxpbmtNYXJrZG93bk5vZGUiLCJmaXJzdCIsImFycmF5VXRpbGl0aWVzIiwicnVsZU5hbWUiLCJjaGlsZE5vZGVzIiwib3BhY2l0eSIsInByZWNlZGVuY2UiLCJkb21FbGVtZW50IiwibnVtYmVyIiwiZ2V0TnVtYmVyIiwic2V0TnVtYmVyIiwiY29udGVudCIsImNvbnRleHQiLCJFTVBUWV9TVFJJTkciLCJpZGVudGlmaWVyIiwiZ2V0Q2hpbGROb2RlcyIsImZpcnN0Q2hpbGROb2RlIiwibGlua1Rlcm1pbmFsTm9kZSIsImlkZW50aWZpZXJGcm9tTGlua1Rlcm1pbmFsTm9kZSIsImF0dHJpYnV0ZU5hbWUiLCJIUkVGX0FUVFJJQlVURV9OQU1FIiwiYXR0cmlidXRlVmFsdWUiLCJjaGlsZE5vZGVzQXNIVE1MIiwiaW5kZW50IiwiY2hpbGROb2Rlc0hUTUwiLCJjcmVhdGVDaGlsZE5vZGVET01FbGVtZW50cyIsInRleHROb2RlIiwiZG9jdW1lbnQiLCJjcmVhdGVUZXh0Tm9kZSIsImFkZERPTUVsZW1lbnQiLCJjbG9uZSIsImZyb21SdWxlTmFtZUNoaWxkTm9kZXNBbmRPcGFjaXR5IiwibGlua01hcmtkb3duTm9kZSIsIk1hcmtkb3duTm9kZSIsImdldENvbnRlbnQiLCJtYXRjaGVzIiwibWF0Y2giLCJzZWNvbmRNYXRjaCIsInNlY29uZCJdLCJyYW5nZU1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7IiwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBV3FCQTs7O3lCQVRVOytEQUVOO3lCQUVJOzhCQUNPOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFcEMsSUFBTSxBQUFFQyxRQUFVQyx5QkFBYyxDQUF4QkQ7QUFFTyxJQUFBLEFBQU1ELGlDQUFELEFBQUw7Y0FBTUE7K0JBQUFBO2FBQUFBLGlCQUNQRyxRQUFRLEVBQUVDLFVBQVUsRUFBRUMsT0FBTyxFQUFFQyxVQUFVLEVBQUVDLFVBQVUsRUFBRUMsTUFBTTtnQ0FEdERSOztrQ0FFWEcsVUFBVUMsWUFBWUMsU0FBU0MsWUFBWUM7UUFFakQsTUFBS0MsTUFBTSxHQUFHQTs7O2tCQUpHUjs7WUFPbkJTLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0QsTUFBTTtZQUNwQjs7O1lBRUFFLEtBQUFBO21CQUFBQSxTQUFBQSxVQUFVRixNQUFNO2dCQUNkLElBQUksQ0FBQ0EsTUFBTSxHQUFHQTtZQUNoQjs7O1lBRUFHLEtBQUFBO21CQUFBQSxTQUFBQSxRQUFRQyxPQUFPO2dCQUNiLElBQU1ELFVBQVUsQUFBQyxJQUFJLENBQUNILE1BQU0sS0FBSyxPQUNmLElBQUksQ0FBQ0EsTUFBTSxHQUNUSyx1QkFBWTtnQkFFaEMsT0FBT0Y7WUFDVDs7O1lBRUFHLEtBQUFBO21CQUFBQSxTQUFBQSxXQUFXRixPQUFPO2dCQUNoQixJQUFNUixhQUFhLElBQUksQ0FBQ1csYUFBYSxJQUMvQkMsaUJBQWlCZixNQUFNRyxhQUN2QmEsbUJBQW1CRCxnQkFDbkJGLGFBQWFJLCtCQUErQkQ7Z0JBRWxELE9BQU9IO1lBQ1Q7OztZQUVBSyxLQUFBQTttQkFBQUEsU0FBQUEsY0FBY1AsT0FBTztnQkFDbkIsSUFBTU8sZ0JBQWdCQyxtQ0FBbUI7Z0JBRXpDLE9BQU9EO1lBQ1Q7OztZQUVBRSxLQUFBQTttQkFBQUEsU0FBQUEsZUFBZVQsT0FBTztnQkFDcEIsSUFBTUUsYUFBYSxJQUFJLENBQUNBLFVBQVUsQ0FBQ0YsVUFDN0JTLGlCQUFpQixBQUFDLElBQWMsT0FBWFAsYUFBYyxHQUFHO2dCQUU1QyxPQUFPTztZQUNUOzs7WUFFQUMsS0FBQUE7bUJBQUFBLFNBQUFBLGlCQUFpQkMsTUFBTSxFQUFFWCxPQUFPO2dCQUM5QixJQUFNRCxVQUFVLElBQUksQ0FBQ0EsT0FBTyxDQUFDQyxVQUN2QlksaUJBQWlCYixTQUFTLEdBQUc7Z0JBRW5DLE9BQU9hO1lBQ1Q7OztZQUVBQyxLQUFBQTttQkFBQUEsU0FBQUEsMkJBQTJCYixPQUFPO2dCQUNoQyxJQUFNRCxVQUFVLElBQUksQ0FBQ0EsT0FBTyxDQUFDQyxVQUN2QmMsV0FBV0MsU0FBU0MsY0FBYyxDQUFDakIsVUFDbkNKLGFBQWFtQixVQUFVLEdBQUc7Z0JBRWhDLElBQUksQ0FBQ0csYUFBYSxDQUFDdEI7WUFDckI7OztZQUVBdUIsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUFVLE9BQU8sdUJBNURFOUIsNkJBNERJOEIsU0FBTixJQUFLLGFBQU8sSUFBSSxDQUFDdEIsTUFBTTtZQUFHOzs7O1lBRXBDdUIsS0FBQUE7bUJBQVAsU0FBT0EsaUNBQWlDNUIsUUFBUSxFQUFFQyxVQUFVLEVBQUVDLE9BQU87Z0JBQ25FLElBQU1HLFNBQVMsTUFDVHdCLG1CQUFtQkMsaUJBQVksQ0FBQ0YsZ0NBQWdDLENBaEVyRC9CLGtCQWdFd0VHLFVBQVVDLFlBQVlDLFNBQVNHO2dCQUV4SCxPQUFPd0I7WUFDVDs7O1dBbkVtQmhDO0VBQXlCaUMsaUJBQVk7QUFzRTFELFNBQVNmLCtCQUErQkQsZ0JBQWdCO0lBQ3RELElBQU1OLFVBQVVNLGlCQUFpQmlCLFVBQVUsSUFDckNDLFVBQVV4QixRQUFReUIsS0FBSyxDQUFDLGlCQUN4QkMsY0FBY0MsT0FBT0gsVUFDckJyQixhQUFhdUIsYUFBYSxHQUFHO0lBRW5DLE9BQU92QjtBQUNUIn0=