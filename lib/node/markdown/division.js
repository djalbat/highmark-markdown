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
    function DivisionMarkdownNode(ruleName, childNodes, precedence, opacity, domElement, divisionClassName) {
        _class_call_check(this, DivisionMarkdownNode);
        var _this;
        _this = _super.call(this, ruleName, childNodes, precedence, opacity, domElement);
        _this.divisionClassName = divisionClassName;
        return _this;
    }
    _create_class(DivisionMarkdownNode, [
        {
            key: "getDivisionClassName",
            value: function getDivisionClassName() {
                return this.divisionClassName;
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
                var className = this.divisionClassName; ///
                return className;
            }
        },
        {
            key: "asHTML",
            value: function asHTML(indent, context) {
                var _context_divisionClassName = context.divisionClassName, divisionClassName = _context_divisionClassName === void 0 ? null : _context_divisionClassName;
                this.divisionClassName = divisionClassName; ///
                var html = _get(_get_prototype_of(DivisionMarkdownNode.prototype), "asHTML", this).call(this, indent, context);
                return html;
            }
        },
        {
            key: "createDOMElement",
            value: function createDOMElement(context) {
                var _context_divisionClassName = context.divisionClassName, divisionClassName = _context_divisionClassName === void 0 ? null : _context_divisionClassName;
                this.divisionClassName = divisionClassName; ///
                var domElement = _get(_get_prototype_of(DivisionMarkdownNode.prototype), "createDOMElement", this).call(this, context);
                return domElement;
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
                var divisionClassName = null, divisionMarkdownNode = _markdown.default.fromRuleNameChildNodesAndOpacity(DivisionMarkdownNode, ruleName, childNodes, opacity, divisionClassName);
                return divisionMarkdownNode;
            }
        }
    ]);
    return DivisionMarkdownNode;
}(_markdown.default);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ub2RlL21hcmtkb3duL2RpdmlzaW9uLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgTWFya2Rvd25Ob2RlIGZyb20gXCIuLi8uLi9ub2RlL21hcmtkb3duXCI7XG5pbXBvcnQgRm9vdG5vdGVzTGlzdE1hcmtkb3duTm9kZSBmcm9tIFwiLi4vLi4vbm9kZS9tYXJrZG93bi9mb290bm90ZXNMaXN0XCI7XG5cbmltcG9ydCB7IHJlbnVtYmVyTGlua01hcmtkb3duTm9kZXMsIHJlbnVtYmVyTGlua01hcmtkb3duTm9kZXNIVE1MIH0gZnJvbSBcIi4uLy4uL3V0aWxpdGllcy9saW5rXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERpdmlzaW9uTWFya2Rvd25Ob2RlIGV4dGVuZHMgTWFya2Rvd25Ob2RlIHtcbiAgY29uc3RydWN0b3IocnVsZU5hbWUsIGNoaWxkTm9kZXMsIHByZWNlZGVuY2UsIG9wYWNpdHksIGRvbUVsZW1lbnQsIGRpdmlzaW9uQ2xhc3NOYW1lKSB7XG4gICAgc3VwZXIocnVsZU5hbWUsIGNoaWxkTm9kZXMsIHByZWNlZGVuY2UsIG9wYWNpdHksIGRvbUVsZW1lbnQpO1xuXG4gICAgdGhpcy5kaXZpc2lvbkNsYXNzTmFtZSA9IGRpdmlzaW9uQ2xhc3NOYW1lO1xuICB9XG5cbiAgZ2V0RGl2aXNpb25DbGFzc05hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZGl2aXNpb25DbGFzc05hbWU7XG4gIH1cblxuICBhZGp1c3RJbmRlbnQoaW5kZW50KSB7XG4gICAgcmV0dXJuIGluZGVudDtcbiAgfVxuXG4gIGNsYXNzTmFtZShjb250ZXh0KSB7XG4gICAgY29uc3QgY2xhc3NOYW1lID0gdGhpcy5kaXZpc2lvbkNsYXNzTmFtZTsgLy8vXG5cbiAgICByZXR1cm4gY2xhc3NOYW1lO1xuICB9XG5cbiAgYXNIVE1MKGluZGVudCwgY29udGV4dCkge1xuICAgIGNvbnN0IHsgZGl2aXNpb25DbGFzc05hbWUgPSBudWxsIH0gPSBjb250ZXh0O1xuXG4gICAgdGhpcy5kaXZpc2lvbkNsYXNzTmFtZSA9IGRpdmlzaW9uQ2xhc3NOYW1lOyAvLy9cblxuICAgIGNvbnN0IGh0bWwgPSBzdXBlci5hc0hUTUwoaW5kZW50LCBjb250ZXh0KTtcblxuICAgIHJldHVybiBodG1sO1xuICB9XG5cbiAgY3JlYXRlRE9NRWxlbWVudChjb250ZXh0KSB7XG4gICAgY29uc3QgeyBkaXZpc2lvbkNsYXNzTmFtZSA9IG51bGwgfSA9IGNvbnRleHQ7XG5cbiAgICB0aGlzLmRpdmlzaW9uQ2xhc3NOYW1lID0gZGl2aXNpb25DbGFzc05hbWU7IC8vL1xuXG4gICAgY29uc3QgZG9tRWxlbWVudCA9IHN1cGVyLmNyZWF0ZURPTUVsZW1lbnQoY29udGV4dCk7XG5cbiAgICByZXR1cm4gZG9tRWxlbWVudDtcbiAgfVxuXG4gIGNoaWxkTm9kZXNBc0hUTUwoaW5kZW50LCBjb250ZXh0KSB7XG4gICAgY29uc3QgZGl2aXNpb25NYXJrZG93bk5vZGUgPSB0aGlzLCAgLy8vXG4gICAgICAgICAgZm9vdG5vdGVzTGlzdE1hcmtkb3duTm9kZSA9IEZvb3Rub3Rlc0xpc3RNYXJrZG93bk5vZGUuZnJvbURpdmlzaW9uTWFya2Rvd25Ob2RlKGRpdmlzaW9uTWFya2Rvd25Ob2RlLCBjb250ZXh0KTtcblxuICAgIGxldCBjaGlsZE5vZGVzSFRNTCA9IHN1cGVyLmNoaWxkTm9kZXNBc0hUTUwoaW5kZW50LCBjb250ZXh0KTtcblxuICAgIGlmIChmb290bm90ZXNMaXN0TWFya2Rvd25Ob2RlICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBmb290bm90ZXNMaXN0TWFya2Rvd25Ob2RlSFRNTCA9IGZvb3Rub3Rlc0xpc3RNYXJrZG93bk5vZGUuYXNIVE1MKGluZGVudCwgY29udGV4dCk7XG5cbiAgICAgIGNoaWxkTm9kZXNIVE1MID0gYCR7Y2hpbGROb2Rlc0hUTUx9JHtmb290bm90ZXNMaXN0TWFya2Rvd25Ob2RlSFRNTH1gO1xuXG4gICAgICBjaGlsZE5vZGVzSFRNTCA9IHJlbnVtYmVyTGlua01hcmtkb3duTm9kZXNIVE1MKGNoaWxkTm9kZXNIVE1MLCBkaXZpc2lvbk1hcmtkb3duTm9kZSwgZm9vdG5vdGVzTGlzdE1hcmtkb3duTm9kZSwgY29udGV4dCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGNoaWxkTm9kZXNIVE1MO1xuICB9XG5cbiAgY3JlYXRlQ2hpbGROb2RlRE9NRWxlbWVudHMoY29udGV4dCkge1xuICAgIGNvbnN0IGRpdmlzaW9uTWFya2Rvd25Ob2RlID0gdGhpcywgIC8vL1xuICAgICAgICAgIGZvb3Rub3Rlc0xpc3RNYXJrZG93bk5vZGUgPSBGb290bm90ZXNMaXN0TWFya2Rvd25Ob2RlLmZyb21EaXZpc2lvbk1hcmtkb3duTm9kZShkaXZpc2lvbk1hcmtkb3duTm9kZSwgY29udGV4dCk7XG5cbiAgICBzdXBlci5jcmVhdGVDaGlsZE5vZGVET01FbGVtZW50cyhjb250ZXh0KTtcblxuICAgIGlmIChmb290bm90ZXNMaXN0TWFya2Rvd25Ob2RlICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBmb290bm90ZXNMaXN0TWFya2Rvd25Ob2RlRE9NRWxlbWVudCA9IGZvb3Rub3Rlc0xpc3RNYXJrZG93bk5vZGUuY3JlYXRlRE9NRWxlbWVudChjb250ZXh0KSxcbiAgICAgICAgICAgIGNoaWxkTm9kZURPTUVsZW1lbnQgPSBmb290bm90ZXNMaXN0TWFya2Rvd25Ob2RlRE9NRWxlbWVudDsgIC8vL1xuXG4gICAgICB0aGlzLmluc2VydERPTUVsZW1lbnQoY2hpbGROb2RlRE9NRWxlbWVudCk7XG5cbiAgICAgIHJlbnVtYmVyTGlua01hcmtkb3duTm9kZXMoZGl2aXNpb25NYXJrZG93bk5vZGUsIGZvb3Rub3Rlc0xpc3RNYXJrZG93bk5vZGUsIGNvbnRleHQpO1xuICAgIH1cbiAgfVxuXG4gIHN0YXRpYyBmcm9tUnVsZU5hbWVDaGlsZE5vZGVzQW5kT3BhY2l0eShydWxlTmFtZSwgY2hpbGROb2Rlcywgb3BhY2l0eSkge1xuICAgIGNvbnN0IGRpdmlzaW9uQ2xhc3NOYW1lID0gbnVsbCxcbiAgICAgICAgICBkaXZpc2lvbk1hcmtkb3duTm9kZSA9IE1hcmtkb3duTm9kZS5mcm9tUnVsZU5hbWVDaGlsZE5vZGVzQW5kT3BhY2l0eShEaXZpc2lvbk1hcmtkb3duTm9kZSwgcnVsZU5hbWUsIGNoaWxkTm9kZXMsIG9wYWNpdHksIGRpdmlzaW9uQ2xhc3NOYW1lKTtcblxuICAgIHJldHVybiBkaXZpc2lvbk1hcmtkb3duTm9kZTtcbiAgfVxufVxuXG4iXSwibmFtZXMiOlsiRGl2aXNpb25NYXJrZG93bk5vZGUiLCJydWxlTmFtZSIsImNoaWxkTm9kZXMiLCJwcmVjZWRlbmNlIiwib3BhY2l0eSIsImRvbUVsZW1lbnQiLCJkaXZpc2lvbkNsYXNzTmFtZSIsImdldERpdmlzaW9uQ2xhc3NOYW1lIiwiYWRqdXN0SW5kZW50IiwiaW5kZW50IiwiY2xhc3NOYW1lIiwiY29udGV4dCIsImFzSFRNTCIsImh0bWwiLCJjcmVhdGVET01FbGVtZW50IiwiY2hpbGROb2Rlc0FzSFRNTCIsImRpdmlzaW9uTWFya2Rvd25Ob2RlIiwiZm9vdG5vdGVzTGlzdE1hcmtkb3duTm9kZSIsIkZvb3Rub3Rlc0xpc3RNYXJrZG93bk5vZGUiLCJmcm9tRGl2aXNpb25NYXJrZG93bk5vZGUiLCJjaGlsZE5vZGVzSFRNTCIsImZvb3Rub3Rlc0xpc3RNYXJrZG93bk5vZGVIVE1MIiwicmVudW1iZXJMaW5rTWFya2Rvd25Ob2Rlc0hUTUwiLCJjcmVhdGVDaGlsZE5vZGVET01FbGVtZW50cyIsImZvb3Rub3Rlc0xpc3RNYXJrZG93bk5vZGVET01FbGVtZW50IiwiY2hpbGROb2RlRE9NRWxlbWVudCIsImluc2VydERPTUVsZW1lbnQiLCJyZW51bWJlckxpbmtNYXJrZG93bk5vZGVzIiwiZnJvbVJ1bGVOYW1lQ2hpbGROb2Rlc0FuZE9wYWNpdHkiLCJNYXJrZG93bk5vZGUiXSwicmFuZ2VNYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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