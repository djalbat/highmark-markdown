"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return DivisionMarkdownNode;
    }
});
var _markdown = /*#__PURE__*/ _interop_require_default(require("../../node/markdown"));
var _footnotesList = /*#__PURE__*/ _interop_require_default(require("../../node/markdown/footnotesList"));
var _link = require("../../utilities/link");
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
var DivisionMarkdownNode = /*#__PURE__*/ function(MarkdownNode) {
    _inherits(DivisionMarkdownNode, MarkdownNode);
    var _super = _create_super(DivisionMarkdownNode);
    function DivisionMarkdownNode(ruleName, childNodes, precedence, opacity, domElement, className) {
        _class_call_check(this, DivisionMarkdownNode);
        var _this;
        _this = _super.call(this, ruleName, childNodes, precedence, opacity, domElement);
        _this.className = className;
        return _this;
    }
    _create_class(DivisionMarkdownNode, [
        {
            key: "getClassName",
            value: function getClassName() {
                return this.className;
            }
        },
        {
            key: "adjustIndent",
            value: function adjustIndent(indent) {
                return indent;
            }
        },
        {
            key: "className",
            value: function className(context) {
                return this.className;
            }
        },
        {
            key: "asHTML",
            value: function asHTML(indent, context) {
                var _context_divisionClassName = context.divisionClassName, divisionClassName = _context_divisionClassName === void 0 ? null : _context_divisionClassName;
                this.className = divisionClassName; ///
                var html = _get(_get_prototype_of(DivisionMarkdownNode.prototype), "asHTML", this).call(this, indent, context);
                return html;
            }
        },
        {
            key: "childNodesAsHTML",
            value: function childNodesAsHTML(indent, context) {
                var divisionMarkdownNode = this, footnotesListMarkdownNode = _footnotesList.default.fromDivisionMarkdownNode(divisionMarkdownNode, context);
                var childNodesHTML = _get(_get_prototype_of(DivisionMarkdownNode.prototype), "childNodesAsHTML", this).call(this, indent, context);
                if (footnotesListMarkdownNode !== null) {
                    var footnotesListMarkdownNodeHTML = footnotesListMarkdownNode.asHTML(indent, context);
                    childNodesHTML = "".concat(childNodesHTML).concat(footnotesListMarkdownNodeHTML);
                    childNodesHTML = (0, _link.renumberLinkMarkdownNodesHTML)(childNodesHTML, divisionMarkdownNode, footnotesListMarkdownNode, context);
                }
                return childNodesHTML;
            }
        },
        {
            key: "createChildNodeDOMElements",
            value: function createChildNodeDOMElements(context) {
                var divisionMarkdownNode = this, footnotesListMarkdownNode = _footnotesList.default.fromDivisionMarkdownNode(divisionMarkdownNode, context);
                _get(_get_prototype_of(DivisionMarkdownNode.prototype), "createChildNodeDOMElements", this).call(this, context);
                if (footnotesListMarkdownNode !== null) {
                    var footnotesListMarkdownNodeDOMElement = footnotesListMarkdownNode.createDOMElement(context), childNodeDOMElement = footnotesListMarkdownNodeDOMElement; ///
                    this.insertDOMElement(childNodeDOMElement);
                    (0, _link.renumberLinkMarkdownNodes)(divisionMarkdownNode, footnotesListMarkdownNode, context);
                }
            }
        }
    ], [
        {
            key: "fromRuleNameChildNodesAndOpacity",
            value: function fromRuleNameChildNodesAndOpacity(ruleName, childNodes, opacity) {
                var className = null, divisionMarkdownNode = _markdown.default.fromRuleNameChildNodesAndOpacity(DivisionMarkdownNode, ruleName, childNodes, opacity, className);
                return divisionMarkdownNode;
            }
        }
    ]);
    return DivisionMarkdownNode;
}(_markdown.default);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ub2RlL21hcmtkb3duL2RpdmlzaW9uLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgTWFya2Rvd25Ob2RlIGZyb20gXCIuLi8uLi9ub2RlL21hcmtkb3duXCI7XG5pbXBvcnQgRm9vdG5vdGVzTGlzdE1hcmtkb3duTm9kZSBmcm9tIFwiLi4vLi4vbm9kZS9tYXJrZG93bi9mb290bm90ZXNMaXN0XCI7XG5cbmltcG9ydCB7IHJlbnVtYmVyTGlua01hcmtkb3duTm9kZXMsIHJlbnVtYmVyTGlua01hcmtkb3duTm9kZXNIVE1MIH0gZnJvbSBcIi4uLy4uL3V0aWxpdGllcy9saW5rXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERpdmlzaW9uTWFya2Rvd25Ob2RlIGV4dGVuZHMgTWFya2Rvd25Ob2RlIHtcbiAgY29uc3RydWN0b3IocnVsZU5hbWUsIGNoaWxkTm9kZXMsIHByZWNlZGVuY2UsIG9wYWNpdHksIGRvbUVsZW1lbnQsIGNsYXNzTmFtZSkge1xuICAgIHN1cGVyKHJ1bGVOYW1lLCBjaGlsZE5vZGVzLCBwcmVjZWRlbmNlLCBvcGFjaXR5LCBkb21FbGVtZW50KTtcblxuICAgIHRoaXMuY2xhc3NOYW1lID0gY2xhc3NOYW1lO1xuICB9XG5cbiAgZ2V0Q2xhc3NOYW1lKCkge1xuICAgIHJldHVybiB0aGlzLmNsYXNzTmFtZTtcbiAgfVxuXG4gIGFkanVzdEluZGVudChpbmRlbnQpIHtcbiAgICByZXR1cm4gaW5kZW50O1xuICB9XG5cbiAgY2xhc3NOYW1lKGNvbnRleHQpIHtcbiAgICByZXR1cm4gdGhpcy5jbGFzc05hbWU7XG4gIH1cblxuICBhc0hUTUwoaW5kZW50LCBjb250ZXh0KSB7XG4gICAgY29uc3QgeyBkaXZpc2lvbkNsYXNzTmFtZSA9IG51bGwgfSA9IGNvbnRleHQ7XG5cbiAgICB0aGlzLmNsYXNzTmFtZSA9IGRpdmlzaW9uQ2xhc3NOYW1lOyAvLy9cblxuICAgIGNvbnN0IGh0bWwgPSBzdXBlci5hc0hUTUwoaW5kZW50LCBjb250ZXh0KTtcblxuICAgIHJldHVybiBodG1sO1xuICB9XG5cbiAgY2hpbGROb2Rlc0FzSFRNTChpbmRlbnQsIGNvbnRleHQpIHtcbiAgICBjb25zdCBkaXZpc2lvbk1hcmtkb3duTm9kZSA9IHRoaXMsICAvLy9cbiAgICAgICAgICBmb290bm90ZXNMaXN0TWFya2Rvd25Ob2RlID0gRm9vdG5vdGVzTGlzdE1hcmtkb3duTm9kZS5mcm9tRGl2aXNpb25NYXJrZG93bk5vZGUoZGl2aXNpb25NYXJrZG93bk5vZGUsIGNvbnRleHQpO1xuXG4gICAgbGV0IGNoaWxkTm9kZXNIVE1MID0gc3VwZXIuY2hpbGROb2Rlc0FzSFRNTChpbmRlbnQsIGNvbnRleHQpO1xuXG4gICAgaWYgKGZvb3Rub3Rlc0xpc3RNYXJrZG93bk5vZGUgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IGZvb3Rub3Rlc0xpc3RNYXJrZG93bk5vZGVIVE1MID0gZm9vdG5vdGVzTGlzdE1hcmtkb3duTm9kZS5hc0hUTUwoaW5kZW50LCBjb250ZXh0KTtcblxuICAgICAgY2hpbGROb2Rlc0hUTUwgPSBgJHtjaGlsZE5vZGVzSFRNTH0ke2Zvb3Rub3Rlc0xpc3RNYXJrZG93bk5vZGVIVE1MfWA7XG5cbiAgICAgIGNoaWxkTm9kZXNIVE1MID0gcmVudW1iZXJMaW5rTWFya2Rvd25Ob2Rlc0hUTUwoY2hpbGROb2Rlc0hUTUwsIGRpdmlzaW9uTWFya2Rvd25Ob2RlLCBmb290bm90ZXNMaXN0TWFya2Rvd25Ob2RlLCBjb250ZXh0KTtcbiAgICB9XG5cbiAgICByZXR1cm4gY2hpbGROb2Rlc0hUTUw7XG4gIH1cblxuICBjcmVhdGVDaGlsZE5vZGVET01FbGVtZW50cyhjb250ZXh0KSB7XG4gICAgY29uc3QgZGl2aXNpb25NYXJrZG93bk5vZGUgPSB0aGlzLCAgLy8vXG4gICAgICAgICAgZm9vdG5vdGVzTGlzdE1hcmtkb3duTm9kZSA9IEZvb3Rub3Rlc0xpc3RNYXJrZG93bk5vZGUuZnJvbURpdmlzaW9uTWFya2Rvd25Ob2RlKGRpdmlzaW9uTWFya2Rvd25Ob2RlLCBjb250ZXh0KTtcblxuICAgIHN1cGVyLmNyZWF0ZUNoaWxkTm9kZURPTUVsZW1lbnRzKGNvbnRleHQpO1xuXG4gICAgaWYgKGZvb3Rub3Rlc0xpc3RNYXJrZG93bk5vZGUgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IGZvb3Rub3Rlc0xpc3RNYXJrZG93bk5vZGVET01FbGVtZW50ID0gZm9vdG5vdGVzTGlzdE1hcmtkb3duTm9kZS5jcmVhdGVET01FbGVtZW50KGNvbnRleHQpLFxuICAgICAgICAgICAgY2hpbGROb2RlRE9NRWxlbWVudCA9IGZvb3Rub3Rlc0xpc3RNYXJrZG93bk5vZGVET01FbGVtZW50OyAgLy8vXG5cbiAgICAgIHRoaXMuaW5zZXJ0RE9NRWxlbWVudChjaGlsZE5vZGVET01FbGVtZW50KTtcblxuICAgICAgcmVudW1iZXJMaW5rTWFya2Rvd25Ob2RlcyhkaXZpc2lvbk1hcmtkb3duTm9kZSwgZm9vdG5vdGVzTGlzdE1hcmtkb3duTm9kZSwgY29udGV4dCk7XG4gICAgfVxuICB9XG5cbiAgc3RhdGljIGZyb21SdWxlTmFtZUNoaWxkTm9kZXNBbmRPcGFjaXR5KHJ1bGVOYW1lLCBjaGlsZE5vZGVzLCBvcGFjaXR5KSB7XG4gICAgY29uc3QgY2xhc3NOYW1lID0gbnVsbCxcbiAgICAgICAgICBkaXZpc2lvbk1hcmtkb3duTm9kZSA9IE1hcmtkb3duTm9kZS5mcm9tUnVsZU5hbWVDaGlsZE5vZGVzQW5kT3BhY2l0eShEaXZpc2lvbk1hcmtkb3duTm9kZSwgcnVsZU5hbWUsIGNoaWxkTm9kZXMsIG9wYWNpdHksIGNsYXNzTmFtZSk7XG5cbiAgICByZXR1cm4gZGl2aXNpb25NYXJrZG93bk5vZGU7XG4gIH1cbn1cblxuIl0sIm5hbWVzIjpbIkRpdmlzaW9uTWFya2Rvd25Ob2RlIiwicnVsZU5hbWUiLCJjaGlsZE5vZGVzIiwicHJlY2VkZW5jZSIsIm9wYWNpdHkiLCJkb21FbGVtZW50IiwiY2xhc3NOYW1lIiwiZ2V0Q2xhc3NOYW1lIiwiYWRqdXN0SW5kZW50IiwiaW5kZW50IiwiY29udGV4dCIsImFzSFRNTCIsImRpdmlzaW9uQ2xhc3NOYW1lIiwiaHRtbCIsImNoaWxkTm9kZXNBc0hUTUwiLCJkaXZpc2lvbk1hcmtkb3duTm9kZSIsImZvb3Rub3Rlc0xpc3RNYXJrZG93bk5vZGUiLCJGb290bm90ZXNMaXN0TWFya2Rvd25Ob2RlIiwiZnJvbURpdmlzaW9uTWFya2Rvd25Ob2RlIiwiY2hpbGROb2Rlc0hUTUwiLCJmb290bm90ZXNMaXN0TWFya2Rvd25Ob2RlSFRNTCIsInJlbnVtYmVyTGlua01hcmtkb3duTm9kZXNIVE1MIiwiY3JlYXRlQ2hpbGROb2RlRE9NRWxlbWVudHMiLCJmb290bm90ZXNMaXN0TWFya2Rvd25Ob2RlRE9NRWxlbWVudCIsImNyZWF0ZURPTUVsZW1lbnQiLCJjaGlsZE5vZGVET01FbGVtZW50IiwiaW5zZXJ0RE9NRWxlbWVudCIsInJlbnVtYmVyTGlua01hcmtkb3duTm9kZXMiLCJmcm9tUnVsZU5hbWVDaGlsZE5vZGVzQW5kT3BhY2l0eSIsIk1hcmtkb3duTm9kZSJdLCJyYW5nZU1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OyIsIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQU9xQkE7OzsrREFMSTtvRUFDYTtvQkFFbUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUUxRCxJQUFBLEFBQU1BLHFDQUFELEFBQUw7Y0FBTUE7K0JBQUFBO2FBQUFBLHFCQUNQQyxRQUFRLEVBQUVDLFVBQVUsRUFBRUMsVUFBVSxFQUFFQyxPQUFPLEVBQUVDLFVBQVUsRUFBRUMsU0FBUztnQ0FEekROOztrQ0FFWEMsVUFBVUMsWUFBWUMsWUFBWUMsU0FBU0M7UUFFakQsTUFBS0MsU0FBUyxHQUFHQTs7O2tCQUpBTjs7WUFPbkJPLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0QsU0FBUztZQUN2Qjs7O1lBRUFFLEtBQUFBO21CQUFBQSxTQUFBQSxhQUFhQyxNQUFNO2dCQUNqQixPQUFPQTtZQUNUOzs7WUFFQUgsS0FBQUE7bUJBQUFBLFNBQUFBLFVBQVVJLE9BQU87Z0JBQ2YsT0FBTyxJQUFJLENBQUNKLFNBQVM7WUFDdkI7OztZQUVBSyxLQUFBQTttQkFBQUEsU0FBQUEsT0FBT0YsTUFBTSxFQUFFQyxPQUFPO2dCQUNwQixpQ0FBcUNBLFFBQTdCRSxtQkFBQUEsNERBQW9CO2dCQUU1QixJQUFJLENBQUNOLFNBQVMsR0FBR00sbUJBQW1CLEdBQUc7Z0JBRXZDLElBQU1DLE9BQU8sdUJBeEJJYixpQ0F3QkVXLFVBQU4sSUFBSyxhQUFRRixRQUFRQztnQkFFbEMsT0FBT0c7WUFDVDs7O1lBRUFDLEtBQUFBO21CQUFBQSxTQUFBQSxpQkFBaUJMLE1BQU0sRUFBRUMsT0FBTztnQkFDOUIsSUFBTUssdUJBQXVCLElBQUksRUFDM0JDLDRCQUE0QkMsc0JBQXlCLENBQUNDLHdCQUF3QixDQUFDSCxzQkFBc0JMO2dCQUUzRyxJQUFJUyxpQkFBaUIsdUJBakNKbkIsaUNBaUNVYyxvQkFBTixJQUFLLGFBQWtCTCxRQUFRQztnQkFFcEQsSUFBSU0sOEJBQThCLE1BQU07b0JBQ3RDLElBQU1JLGdDQUFnQ0osMEJBQTBCTCxNQUFNLENBQUNGLFFBQVFDO29CQUUvRVMsaUJBQWlCLEFBQUMsR0FBbUJDLE9BQWpCRCxnQkFBK0MsT0FBOUJDO29CQUVyQ0QsaUJBQWlCRSxJQUFBQSxtQ0FBNkIsRUFBQ0YsZ0JBQWdCSixzQkFBc0JDLDJCQUEyQk47Z0JBQ2xIO2dCQUVBLE9BQU9TO1lBQ1Q7OztZQUVBRyxLQUFBQTttQkFBQUEsU0FBQUEsMkJBQTJCWixPQUFPO2dCQUNoQyxJQUFNSyx1QkFBdUIsSUFBSSxFQUMzQkMsNEJBQTRCQyxzQkFBeUIsQ0FBQ0Msd0JBQXdCLENBQUNILHNCQUFzQkw7Z0JBRTNHLHVCQWxEaUJWLGlDQWtEWHNCLDhCQUFOLElBQUssYUFBNEJaO2dCQUVqQyxJQUFJTSw4QkFBOEIsTUFBTTtvQkFDdEMsSUFBTU8sc0NBQXNDUCwwQkFBMEJRLGdCQUFnQixDQUFDZCxVQUNqRmUsc0JBQXNCRixxQ0FBc0MsR0FBRztvQkFFckUsSUFBSSxDQUFDRyxnQkFBZ0IsQ0FBQ0Q7b0JBRXRCRSxJQUFBQSwrQkFBeUIsRUFBQ1osc0JBQXNCQywyQkFBMkJOO2dCQUM3RTtZQUNGOzs7O1lBRU9rQixLQUFBQTttQkFBUCxTQUFPQSxpQ0FBaUMzQixRQUFRLEVBQUVDLFVBQVUsRUFBRUUsT0FBTztnQkFDbkUsSUFBTUUsWUFBWSxNQUNaUyx1QkFBdUJjLGlCQUFZLENBQUNELGdDQUFnQyxDQWhFekQ1QixzQkFnRWdGQyxVQUFVQyxZQUFZRSxTQUFTRTtnQkFFaEksT0FBT1M7WUFDVDs7O1dBbkVtQmY7RUFBNkI2QixpQkFBWSJ9