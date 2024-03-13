"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return ErrorMarkdownNode;
    }
});
var _necessary = require("necessary");
var _markdown = /*#__PURE__*/ _interop_require_default(require("../../node/markdown"));
var _constants = require("../../constants");
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
                var tagName = this.getTagName(), className = this.getClassName(), childNodesHTML = this.childNodesAsHTML(indent, context), startTag = "<".concat(tagName, ' class="').concat(className, '">'), endTag = "<\\".concat(tagName, ">"), html = "".concat(indent).concat(startTag).concat(childNodesHTML).concat(endTag, "\n");
                return html;
            }
        },
        {
            key: "createDOMElement",
            value: function createDOMElement(context) {
                var domElement = _get(_get_prototype_of(ErrorMarkdownNode.prototype), "createDOMElement", this).call(this, context), content = this.getContent(context), textContent = content; ///
                Object.assign(domElement, {
                    textContent: textContent
                });
                return domElement;
            }
        },
        {
            key: "childNodesAsHTML",
            value: function childNodesAsHTML(indent, context) {
                var content = this.getContent(context), childNodesHTML = content; ///
                return childNodesHTML;
            }
        },
        {
            key: "createChildNodeDOMElements",
            value: function createChildNodeDOMElements(context) {
            ///
            }
        },
        {
            key: "getContent",
            value: function getContent(context) {
                var childNodes = this.getChildNodes(), firstChildNode = first(childNodes), terminalNode = firstChildNode, content = terminalNode.getContent();
                return content;
            }
        }
    ], [
        {
            key: "fromRuleNameChildNodesAndAmbiguous",
            value: function fromRuleNameChildNodesAndAmbiguous(ruleName, childNodes, ambiguous) {
                return _markdown.default.fromRuleNameChildNodesAndAmbiguous(ErrorMarkdownNode, ruleName, childNodes, ambiguous);
            }
        }
    ]);
    return ErrorMarkdownNode;
}(_markdown.default);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ub2RlL21hcmtkb3duL2Vycm9yLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBhcnJheVV0aWxpdGllcyB9IGZyb20gXCJuZWNlc3NhcnlcIjtcblxuaW1wb3J0IE1hcmtkb3duTm9kZSBmcm9tIFwiLi4vLi4vbm9kZS9tYXJrZG93blwiO1xuaW1wb3J0IHtFTVBUWV9TVFJJTkd9IGZyb20gXCIuLi8uLi9jb25zdGFudHNcIjtcblxuY29uc3QgeyBmaXJzdCB9ID0gYXJyYXlVdGlsaXRpZXM7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEVycm9yTWFya2Rvd25Ob2RlIGV4dGVuZHMgTWFya2Rvd25Ob2RlIHtcbiAgYXNIVE1MKGluZGVudCwgY29udGV4dCkge1xuICAgIGluZGVudCA9IHRoaXMuYWRqdXN0SW5kZW50KGluZGVudCk7XG5cbiAgICBjb25zdCB0YWdOYW1lID0gdGhpcy5nZXRUYWdOYW1lKCksXG4gICAgICAgICAgY2xhc3NOYW1lID0gdGhpcy5nZXRDbGFzc05hbWUoKSxcbiAgICAgICAgICBjaGlsZE5vZGVzSFRNTCA9IHRoaXMuY2hpbGROb2Rlc0FzSFRNTChpbmRlbnQsIGNvbnRleHQpLFxuICAgICAgICAgIHN0YXJ0VGFnID0gYDwke3RhZ05hbWV9IGNsYXNzPVwiJHtjbGFzc05hbWV9XCI+YCxcbiAgICAgICAgICBlbmRUYWcgPSBgPFxcXFwke3RhZ05hbWV9PmAsXG4gICAgICAgICAgaHRtbCA9IGAke2luZGVudH0ke3N0YXJ0VGFnfSR7Y2hpbGROb2Rlc0hUTUx9JHtlbmRUYWd9XG5gO1xuXG4gICAgcmV0dXJuIGh0bWw7XG4gIH1cblxuICBjcmVhdGVET01FbGVtZW50KGNvbnRleHQpIHtcbiAgICBjb25zdCBkb21FbGVtZW50ID0gc3VwZXIuY3JlYXRlRE9NRWxlbWVudChjb250ZXh0KSxcbiAgICAgICAgICBjb250ZW50ID0gdGhpcy5nZXRDb250ZW50KGNvbnRleHQpLFxuICAgICAgICAgIHRleHRDb250ZW50ID0gY29udGVudDsgIC8vL1xuXG4gICAgT2JqZWN0LmFzc2lnbihkb21FbGVtZW50LCB7XG4gICAgICB0ZXh0Q29udGVudFxuICAgIH0pO1xuXG4gICAgcmV0dXJuIGRvbUVsZW1lbnQ7XG4gIH1cblxuICBjaGlsZE5vZGVzQXNIVE1MKGluZGVudCwgY29udGV4dCkge1xuICAgIGNvbnN0IGNvbnRlbnQgPSB0aGlzLmdldENvbnRlbnQoY29udGV4dCksXG4gICAgICAgICAgY2hpbGROb2Rlc0hUTUwgPSBjb250ZW50OyAvLy9cblxuICAgIHJldHVybiBjaGlsZE5vZGVzSFRNTDtcbiAgfVxuXG4gIGNyZWF0ZUNoaWxkTm9kZURPTUVsZW1lbnRzKGNvbnRleHQpIHtcbiAgICAvLy9cbiAgfVxuXG4gIGdldENvbnRlbnQoY29udGV4dCkge1xuICAgIGNvbnN0IGNoaWxkTm9kZXMgPSB0aGlzLmdldENoaWxkTm9kZXMoKSxcbiAgICAgICAgICBmaXJzdENoaWxkTm9kZSA9IGZpcnN0KGNoaWxkTm9kZXMpLFxuICAgICAgICAgIHRlcm1pbmFsTm9kZSA9IGZpcnN0Q2hpbGROb2RlLCAgLy8vXG4gICAgICAgICAgY29udGVudCA9IHRlcm1pbmFsTm9kZS5nZXRDb250ZW50KCk7XG5cbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUnVsZU5hbWVDaGlsZE5vZGVzQW5kQW1iaWd1b3VzKHJ1bGVOYW1lLCBjaGlsZE5vZGVzLCBhbWJpZ3VvdXMpIHsgcmV0dXJuIE1hcmtkb3duTm9kZS5mcm9tUnVsZU5hbWVDaGlsZE5vZGVzQW5kQW1iaWd1b3VzKEVycm9yTWFya2Rvd25Ob2RlLCBydWxlTmFtZSwgY2hpbGROb2RlcywgYW1iaWd1b3VzKTsgfVxufSJdLCJuYW1lcyI6WyJFcnJvck1hcmtkb3duTm9kZSIsImZpcnN0IiwiYXJyYXlVdGlsaXRpZXMiLCJhc0hUTUwiLCJpbmRlbnQiLCJjb250ZXh0IiwiYWRqdXN0SW5kZW50IiwidGFnTmFtZSIsImdldFRhZ05hbWUiLCJjbGFzc05hbWUiLCJnZXRDbGFzc05hbWUiLCJjaGlsZE5vZGVzSFRNTCIsImNoaWxkTm9kZXNBc0hUTUwiLCJzdGFydFRhZyIsImVuZFRhZyIsImh0bWwiLCJjcmVhdGVET01FbGVtZW50IiwiZG9tRWxlbWVudCIsImNvbnRlbnQiLCJnZXRDb250ZW50IiwidGV4dENvbnRlbnQiLCJPYmplY3QiLCJhc3NpZ24iLCJjcmVhdGVDaGlsZE5vZGVET01FbGVtZW50cyIsImNoaWxkTm9kZXMiLCJnZXRDaGlsZE5vZGVzIiwiZmlyc3RDaGlsZE5vZGUiLCJ0ZXJtaW5hbE5vZGUiLCJmcm9tUnVsZU5hbWVDaGlsZE5vZGVzQW5kQW1iaWd1b3VzIiwicnVsZU5hbWUiLCJhbWJpZ3VvdXMiLCJNYXJrZG93bk5vZGUiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBU3FCQTs7O3lCQVBVOytEQUVOO3lCQUNFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFM0IsSUFBTSxBQUFFQyxRQUFVQyx5QkFBYyxDQUF4QkQ7QUFFTyxJQUFBLEFBQU1ELGtDQUFELEFBQUw7Y0FBTUE7K0JBQUFBO2FBQUFBO2dDQUFBQTs7O2tCQUFBQTs7WUFDbkJHLEtBQUFBO21CQUFBQSxTQUFBQSxPQUFPQyxNQUFNLEVBQUVDLE9BQU87Z0JBQ3BCRCxTQUFTLElBQUksQ0FBQ0UsWUFBWSxDQUFDRjtnQkFFM0IsSUFBTUcsVUFBVSxJQUFJLENBQUNDLFVBQVUsSUFDekJDLFlBQVksSUFBSSxDQUFDQyxZQUFZLElBQzdCQyxpQkFBaUIsSUFBSSxDQUFDQyxnQkFBZ0IsQ0FBQ1IsUUFBUUMsVUFDL0NRLFdBQVcsQUFBQyxJQUFxQkosT0FBbEJGLFNBQVEsWUFBb0IsT0FBVkUsV0FBVSxPQUMzQ0ssU0FBUyxBQUFDLE1BQWEsT0FBUlAsU0FBUSxNQUN2QlEsT0FBTyxBQUFDLEdBQVdGLE9BQVRULFFBQW9CTyxPQUFYRSxVQUE0QkMsT0FBakJILGdCQUF3QixPQUFQRyxRQUFPO2dCQUc1RCxPQUFPQztZQUNUOzs7WUFFQUMsS0FBQUE7bUJBQUFBLFNBQUFBLGlCQUFpQlgsT0FBTztnQkFDdEIsSUFBTVksYUFBYSx1QkFoQkZqQiw4QkFnQlFnQixvQkFBTixJQUFLLGFBQWtCWCxVQUNwQ2EsVUFBVSxJQUFJLENBQUNDLFVBQVUsQ0FBQ2QsVUFDMUJlLGNBQWNGLFNBQVUsR0FBRztnQkFFakNHLE9BQU9DLE1BQU0sQ0FBQ0wsWUFBWTtvQkFDeEJHLGFBQUFBO2dCQUNGO2dCQUVBLE9BQU9IO1lBQ1Q7OztZQUVBTCxLQUFBQTttQkFBQUEsU0FBQUEsaUJBQWlCUixNQUFNLEVBQUVDLE9BQU87Z0JBQzlCLElBQU1hLFVBQVUsSUFBSSxDQUFDQyxVQUFVLENBQUNkLFVBQzFCTSxpQkFBaUJPLFNBQVMsR0FBRztnQkFFbkMsT0FBT1A7WUFDVDs7O1lBRUFZLEtBQUFBO21CQUFBQSxTQUFBQSwyQkFBMkJsQixPQUFPO1lBQ2hDLEdBQUc7WUFDTDs7O1lBRUFjLEtBQUFBO21CQUFBQSxTQUFBQSxXQUFXZCxPQUFPO2dCQUNoQixJQUFNbUIsYUFBYSxJQUFJLENBQUNDLGFBQWEsSUFDL0JDLGlCQUFpQnpCLE1BQU11QixhQUN2QkcsZUFBZUQsZ0JBQ2ZSLFVBQVVTLGFBQWFSLFVBQVU7Z0JBRXZDLE9BQU9EO1lBQ1Q7Ozs7WUFFT1UsS0FBQUE7bUJBQVAsU0FBT0EsbUNBQW1DQyxRQUFRLEVBQUVMLFVBQVUsRUFBRU0sU0FBUztnQkFBSSxPQUFPQyxpQkFBWSxDQUFDSCxrQ0FBa0MsQ0EvQ2hINUIsbUJBK0NvSTZCLFVBQVVMLFlBQVlNO1lBQVk7OztXQS9DdEs5QjtFQUEwQitCLGlCQUFZIn0=