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
var _constants = require("../../constants");
var _attributeNames = require("../../attributeNames");
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
    function DivisionMarkdownNode() {
        _class_call_check(this, DivisionMarkdownNode);
        return _super.apply(this, arguments);
    }
    _create_class(DivisionMarkdownNode, [
        {
            key: "adjustIndent",
            value: function adjustIndent(indent) {
                indent = _constants.EMPTY_STRING;
                return indent;
            }
        },
        {
            key: "attributeName",
            value: function attributeName(context) {
                var attributeName = _attributeNames.ID_ATTRIBUTE_NAME;
                return attributeName;
            }
        },
        {
            key: "attributeValue",
            value: function attributeValue(context) {
                var _context_divisionIdentifier = context.divisionIdentifier, divisionIdentifier = _context_divisionIdentifier === void 0 ? null : _context_divisionIdentifier, attributeValue = divisionIdentifier; ///
                return attributeValue;
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
                return _markdown.default.fromRuleNameChildNodesAndOpacity(DivisionMarkdownNode, ruleName, childNodes, opacity);
            }
        }
    ]);
    return DivisionMarkdownNode;
}(_markdown.default);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ub2RlL21hcmtkb3duL2RpdmlzaW9uLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgTWFya2Rvd25Ob2RlIGZyb20gXCIuLi8uLi9ub2RlL21hcmtkb3duXCI7XG5pbXBvcnQgRm9vdG5vdGVzTGlzdE1hcmtkb3duTm9kZSBmcm9tIFwiLi4vLi4vbm9kZS9tYXJrZG93bi9mb290bm90ZXNMaXN0XCI7XG5cbmltcG9ydCB7IEVNUFRZX1NUUklORyB9IGZyb20gXCIuLi8uLi9jb25zdGFudHNcIjtcbmltcG9ydCB7IElEX0FUVFJJQlVURV9OQU1FIH0gZnJvbSBcIi4uLy4uL2F0dHJpYnV0ZU5hbWVzXCI7XG5pbXBvcnQgeyByZW51bWJlckxpbmtNYXJrZG93bk5vZGVzLCByZW51bWJlckxpbmtNYXJrZG93bk5vZGVzSFRNTCB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvbGlua1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEaXZpc2lvbk1hcmtkb3duTm9kZSBleHRlbmRzIE1hcmtkb3duTm9kZSB7XG4gIGFkanVzdEluZGVudChpbmRlbnQpIHtcbiAgICBpbmRlbnQgPSBFTVBUWV9TVFJJTkc7XG5cbiAgICByZXR1cm4gaW5kZW50O1xuICB9XG5cbiAgYXR0cmlidXRlTmFtZShjb250ZXh0KSB7XG4gICAgY29uc3QgYXR0cmlidXRlTmFtZSA9IElEX0FUVFJJQlVURV9OQU1FO1xuXG4gICAgcmV0dXJuIGF0dHJpYnV0ZU5hbWU7XG4gIH1cblxuICBhdHRyaWJ1dGVWYWx1ZShjb250ZXh0KSB7XG4gICAgY29uc3QgeyBkaXZpc2lvbklkZW50aWZpZXIgPSBudWxsIH0gPSBjb250ZXh0LFxuICAgICAgICAgIGF0dHJpYnV0ZVZhbHVlID0gZGl2aXNpb25JZGVudGlmaWVyOyAvLy9cblxuICAgIHJldHVybiBhdHRyaWJ1dGVWYWx1ZTtcbiAgfVxuXG4gIGNoaWxkTm9kZXNBc0hUTUwoaW5kZW50LCBjb250ZXh0KSB7XG4gICAgY29uc3QgZGl2aXNpb25NYXJrZG93bk5vZGUgPSB0aGlzLCAgLy8vXG4gICAgICAgICAgZm9vdG5vdGVzTGlzdE1hcmtkb3duTm9kZSA9IEZvb3Rub3Rlc0xpc3RNYXJrZG93bk5vZGUuZnJvbURpdmlzaW9uTWFya2Rvd25Ob2RlKGRpdmlzaW9uTWFya2Rvd25Ob2RlLCBjb250ZXh0KTtcblxuICAgIGxldCBjaGlsZE5vZGVzSFRNTCA9IHN1cGVyLmNoaWxkTm9kZXNBc0hUTUwoaW5kZW50LCBjb250ZXh0KTtcblxuICAgIGlmIChmb290bm90ZXNMaXN0TWFya2Rvd25Ob2RlICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBmb290bm90ZXNMaXN0TWFya2Rvd25Ob2RlSFRNTCA9IGZvb3Rub3Rlc0xpc3RNYXJrZG93bk5vZGUuYXNIVE1MKGluZGVudCwgY29udGV4dCk7XG5cbiAgICAgIGNoaWxkTm9kZXNIVE1MID0gYCR7Y2hpbGROb2Rlc0hUTUx9JHtmb290bm90ZXNMaXN0TWFya2Rvd25Ob2RlSFRNTH1gO1xuXG4gICAgICBjaGlsZE5vZGVzSFRNTCA9IHJlbnVtYmVyTGlua01hcmtkb3duTm9kZXNIVE1MKGNoaWxkTm9kZXNIVE1MLCBkaXZpc2lvbk1hcmtkb3duTm9kZSwgZm9vdG5vdGVzTGlzdE1hcmtkb3duTm9kZSwgY29udGV4dCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGNoaWxkTm9kZXNIVE1MO1xuICB9XG5cbiAgY3JlYXRlQ2hpbGROb2RlRE9NRWxlbWVudHMoY29udGV4dCkge1xuICAgIGNvbnN0IGRpdmlzaW9uTWFya2Rvd25Ob2RlID0gdGhpcywgIC8vL1xuICAgICAgICAgIGZvb3Rub3Rlc0xpc3RNYXJrZG93bk5vZGUgPSBGb290bm90ZXNMaXN0TWFya2Rvd25Ob2RlLmZyb21EaXZpc2lvbk1hcmtkb3duTm9kZShkaXZpc2lvbk1hcmtkb3duTm9kZSwgY29udGV4dCk7XG5cbiAgICBzdXBlci5jcmVhdGVDaGlsZE5vZGVET01FbGVtZW50cyhjb250ZXh0KTtcblxuICAgIGlmIChmb290bm90ZXNMaXN0TWFya2Rvd25Ob2RlICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBmb290bm90ZXNMaXN0TWFya2Rvd25Ob2RlRE9NRWxlbWVudCA9IGZvb3Rub3Rlc0xpc3RNYXJrZG93bk5vZGUuY3JlYXRlRE9NRWxlbWVudChjb250ZXh0KSxcbiAgICAgICAgICAgIGNoaWxkTm9kZURPTUVsZW1lbnQgPSBmb290bm90ZXNMaXN0TWFya2Rvd25Ob2RlRE9NRWxlbWVudDsgIC8vL1xuXG4gICAgICB0aGlzLmluc2VydERPTUVsZW1lbnQoY2hpbGROb2RlRE9NRWxlbWVudCk7XG5cbiAgICAgIHJlbnVtYmVyTGlua01hcmtkb3duTm9kZXMoZGl2aXNpb25NYXJrZG93bk5vZGUsIGZvb3Rub3Rlc0xpc3RNYXJrZG93bk5vZGUsIGNvbnRleHQpO1xuICAgIH1cbiAgfVxuXG4gIHN0YXRpYyBmcm9tUnVsZU5hbWVDaGlsZE5vZGVzQW5kT3BhY2l0eShydWxlTmFtZSwgY2hpbGROb2Rlcywgb3BhY2l0eSkgeyByZXR1cm4gTWFya2Rvd25Ob2RlLmZyb21SdWxlTmFtZUNoaWxkTm9kZXNBbmRPcGFjaXR5KERpdmlzaW9uTWFya2Rvd25Ob2RlLCBydWxlTmFtZSwgY2hpbGROb2Rlcywgb3BhY2l0eSk7IH1cbn1cblxuIl0sIm5hbWVzIjpbIkRpdmlzaW9uTWFya2Rvd25Ob2RlIiwiYWRqdXN0SW5kZW50IiwiaW5kZW50IiwiRU1QVFlfU1RSSU5HIiwiYXR0cmlidXRlTmFtZSIsImNvbnRleHQiLCJJRF9BVFRSSUJVVEVfTkFNRSIsImF0dHJpYnV0ZVZhbHVlIiwiZGl2aXNpb25JZGVudGlmaWVyIiwiY2hpbGROb2Rlc0FzSFRNTCIsImRpdmlzaW9uTWFya2Rvd25Ob2RlIiwiZm9vdG5vdGVzTGlzdE1hcmtkb3duTm9kZSIsIkZvb3Rub3Rlc0xpc3RNYXJrZG93bk5vZGUiLCJmcm9tRGl2aXNpb25NYXJrZG93bk5vZGUiLCJjaGlsZE5vZGVzSFRNTCIsImZvb3Rub3Rlc0xpc3RNYXJrZG93bk5vZGVIVE1MIiwiYXNIVE1MIiwicmVudW1iZXJMaW5rTWFya2Rvd25Ob2Rlc0hUTUwiLCJjcmVhdGVDaGlsZE5vZGVET01FbGVtZW50cyIsImZvb3Rub3Rlc0xpc3RNYXJrZG93bk5vZGVET01FbGVtZW50IiwiY3JlYXRlRE9NRWxlbWVudCIsImNoaWxkTm9kZURPTUVsZW1lbnQiLCJpbnNlcnRET01FbGVtZW50IiwicmVudW1iZXJMaW5rTWFya2Rvd25Ob2RlcyIsImZyb21SdWxlTmFtZUNoaWxkTm9kZXNBbmRPcGFjaXR5IiwicnVsZU5hbWUiLCJjaGlsZE5vZGVzIiwib3BhY2l0eSIsIk1hcmtkb3duTm9kZSJdLCJyYW5nZU1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsiLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFTcUJBOzs7K0RBUEk7b0VBQ2E7eUJBRVQ7OEJBQ0s7b0JBQ3VDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFMUQsSUFBQSxBQUFNQSxxQ0FBRCxBQUFMO2NBQU1BOytCQUFBQTthQUFBQTtnQ0FBQUE7OztrQkFBQUE7O1lBQ25CQyxLQUFBQTttQkFBQUEsU0FBQUEsYUFBYUMsTUFBTTtnQkFDakJBLFNBQVNDLHVCQUFZO2dCQUVyQixPQUFPRDtZQUNUOzs7WUFFQUUsS0FBQUE7bUJBQUFBLFNBQUFBLGNBQWNDLE9BQU87Z0JBQ25CLElBQU1ELGdCQUFnQkUsaUNBQWlCO2dCQUV2QyxPQUFPRjtZQUNUOzs7WUFFQUcsS0FBQUE7bUJBQUFBLFNBQUFBLGVBQWVGLE9BQU87Z0JBQ3BCLGtDQUFzQ0EsUUFBOUJHLG9CQUFBQSw4REFBcUIsb0NBQ3ZCRCxpQkFBaUJDLG9CQUFvQixHQUFHO2dCQUU5QyxPQUFPRDtZQUNUOzs7WUFFQUUsS0FBQUE7bUJBQUFBLFNBQUFBLGlCQUFpQlAsTUFBTSxFQUFFRyxPQUFPO2dCQUM5QixJQUFNSyx1QkFBdUIsSUFBSSxFQUMzQkMsNEJBQTRCQyxzQkFBeUIsQ0FBQ0Msd0JBQXdCLENBQUNILHNCQUFzQkw7Z0JBRTNHLElBQUlTLGlCQUFpQix1QkF4QkpkLGlDQXdCVVMsb0JBQU4sSUFBSyxhQUFrQlAsUUFBUUc7Z0JBRXBELElBQUlNLDhCQUE4QixNQUFNO29CQUN0QyxJQUFNSSxnQ0FBZ0NKLDBCQUEwQkssTUFBTSxDQUFDZCxRQUFRRztvQkFFL0VTLGlCQUFpQixBQUFDLEdBQW1CQyxPQUFqQkQsZ0JBQStDLE9BQTlCQztvQkFFckNELGlCQUFpQkcsSUFBQUEsbUNBQTZCLEVBQUNILGdCQUFnQkosc0JBQXNCQywyQkFBMkJOO2dCQUNsSDtnQkFFQSxPQUFPUztZQUNUOzs7WUFFQUksS0FBQUE7bUJBQUFBLFNBQUFBLDJCQUEyQmIsT0FBTztnQkFDaEMsSUFBTUssdUJBQXVCLElBQUksRUFDM0JDLDRCQUE0QkMsc0JBQXlCLENBQUNDLHdCQUF3QixDQUFDSCxzQkFBc0JMO2dCQUUzRyx1QkF6Q2lCTCxpQ0F5Q1hrQiw4QkFBTixJQUFLLGFBQTRCYjtnQkFFakMsSUFBSU0sOEJBQThCLE1BQU07b0JBQ3RDLElBQU1RLHNDQUFzQ1IsMEJBQTBCUyxnQkFBZ0IsQ0FBQ2YsVUFDakZnQixzQkFBc0JGLHFDQUFzQyxHQUFHO29CQUVyRSxJQUFJLENBQUNHLGdCQUFnQixDQUFDRDtvQkFFdEJFLElBQUFBLCtCQUF5QixFQUFDYixzQkFBc0JDLDJCQUEyQk47Z0JBQzdFO1lBQ0Y7Ozs7WUFFT21CLEtBQUFBO21CQUFQLFNBQU9BLGlDQUFpQ0MsUUFBUSxFQUFFQyxVQUFVLEVBQUVDLE9BQU87Z0JBQUksT0FBT0MsaUJBQVksQ0FBQ0osZ0NBQWdDLENBckQxR3hCLHNCQXFEaUl5QixVQUFVQyxZQUFZQztZQUFVOzs7V0FyRGpLM0I7RUFBNkI0QixpQkFBWSJ9