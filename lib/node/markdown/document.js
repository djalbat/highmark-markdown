"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return DocumentMarkdownNode;
    }
});
var _markdown = /*#__PURE__*/ _interop_require_default(require("../../node/markdown"));
var _footnotesList = /*#__PURE__*/ _interop_require_default(require("../../node/markdown/footnotesList"));
var _constants = require("../../constants");
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
var DocumentMarkdownNode = /*#__PURE__*/ function(MarkdownNode) {
    _inherits(DocumentMarkdownNode, MarkdownNode);
    var _super = _create_super(DocumentMarkdownNode);
    function DocumentMarkdownNode() {
        _class_call_check(this, DocumentMarkdownNode);
        return _super.apply(this, arguments);
    }
    _create_class(DocumentMarkdownNode, [
        {
            key: "adjustIndent",
            value: function adjustIndent(indent) {
                indent = _constants.EMPTY_STRING;
                return indent;
            }
        },
        {
            key: "childNodesAsHTML",
            value: function childNodesAsHTML(indent, context) {
                var documentMarkdownNode = this, footnotesListMarkdownNode = _footnotesList.default.fromDocumentMarkdownNode(documentMarkdownNode, context);
                var childNodesHTML = _get(_get_prototype_of(DocumentMarkdownNode.prototype), "childNodesAsHTML", this).call(this, indent, context);
                if (footnotesListMarkdownNode !== null) {
                    var footnotesListMarkdownNodeHTML = footnotesListMarkdownNode.asHTML(indent, context);
                    childNodesHTML = "".concat(childNodesHTML).concat(footnotesListMarkdownNodeHTML);
                    childNodesHTML = (0, _link.renumberLinkMarkdownNodesHTML)(childNodesHTML, documentMarkdownNode, footnotesListMarkdownNode, context);
                }
                return childNodesHTML;
            }
        },
        {
            key: "createChildNodeDOMElements",
            value: function createChildNodeDOMElements(context) {
                var documentMarkdownNode = this, footnotesListMarkdownNode = _footnotesList.default.fromDocumentMarkdownNode(documentMarkdownNode, context);
                _get(_get_prototype_of(DocumentMarkdownNode.prototype), "createChildNodeDOMElements", this).call(this, context);
                if (footnotesListMarkdownNode !== null) {
                    var footnotesListMarkdownNodeDOMElement = footnotesListMarkdownNode.createDOMElement(context), childNodeDOMElement = footnotesListMarkdownNodeDOMElement; ///
                    this.insertDOMElement(childNodeDOMElement);
                    (0, _link.renumberLinkMarkdownNodes)(documentMarkdownNode, footnotesListMarkdownNode, context);
                }
            }
        }
    ], [
        {
            key: "fromRuleNameChildNodesAndOpacity",
            value: function fromRuleNameChildNodesAndOpacity(ruleName, childNodes, opacity) {
                return _markdown.default.fromRuleNameChildNodesAndOpacity(DocumentMarkdownNode, ruleName, childNodes, opacity);
            }
        }
    ]);
    return DocumentMarkdownNode;
}(_markdown.default);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ub2RlL21hcmtkb3duL2RvY3VtZW50LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgTWFya2Rvd25Ob2RlIGZyb20gXCIuLi8uLi9ub2RlL21hcmtkb3duXCI7XG5pbXBvcnQgRm9vdG5vdGVzTGlzdE1hcmtkb3duTm9kZSBmcm9tIFwiLi4vLi4vbm9kZS9tYXJrZG93bi9mb290bm90ZXNMaXN0XCI7XG5cbmltcG9ydCB7IEVNUFRZX1NUUklORyB9IGZyb20gXCIuLi8uLi9jb25zdGFudHNcIjtcbmltcG9ydCB7IHJlbnVtYmVyTGlua01hcmtkb3duTm9kZXMsIHJlbnVtYmVyTGlua01hcmtkb3duTm9kZXNIVE1MIH0gZnJvbSBcIi4uLy4uL3V0aWxpdGllcy9saW5rXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERvY3VtZW50TWFya2Rvd25Ob2RlIGV4dGVuZHMgTWFya2Rvd25Ob2RlIHtcbiAgYWRqdXN0SW5kZW50KGluZGVudCkge1xuICAgIGluZGVudCA9IEVNUFRZX1NUUklORztcblxuICAgIHJldHVybiBpbmRlbnQ7XG4gIH1cblxuICBjaGlsZE5vZGVzQXNIVE1MKGluZGVudCwgY29udGV4dCkge1xuICAgIGNvbnN0IGRvY3VtZW50TWFya2Rvd25Ob2RlID0gdGhpcywgIC8vL1xuICAgICAgICAgIGZvb3Rub3Rlc0xpc3RNYXJrZG93bk5vZGUgPSBGb290bm90ZXNMaXN0TWFya2Rvd25Ob2RlLmZyb21Eb2N1bWVudE1hcmtkb3duTm9kZShkb2N1bWVudE1hcmtkb3duTm9kZSwgY29udGV4dCk7XG5cbiAgICBsZXQgY2hpbGROb2Rlc0hUTUwgPSBzdXBlci5jaGlsZE5vZGVzQXNIVE1MKGluZGVudCwgY29udGV4dCk7XG5cbiAgICBpZiAoZm9vdG5vdGVzTGlzdE1hcmtkb3duTm9kZSAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgZm9vdG5vdGVzTGlzdE1hcmtkb3duTm9kZUhUTUwgPSBmb290bm90ZXNMaXN0TWFya2Rvd25Ob2RlLmFzSFRNTChpbmRlbnQsIGNvbnRleHQpO1xuXG4gICAgICBjaGlsZE5vZGVzSFRNTCA9IGAke2NoaWxkTm9kZXNIVE1MfSR7Zm9vdG5vdGVzTGlzdE1hcmtkb3duTm9kZUhUTUx9YDtcblxuICAgICAgY2hpbGROb2Rlc0hUTUwgPSByZW51bWJlckxpbmtNYXJrZG93bk5vZGVzSFRNTChjaGlsZE5vZGVzSFRNTCwgZG9jdW1lbnRNYXJrZG93bk5vZGUsIGZvb3Rub3Rlc0xpc3RNYXJrZG93bk5vZGUsIGNvbnRleHQpO1xuICAgIH1cblxuICAgIHJldHVybiBjaGlsZE5vZGVzSFRNTDtcbiAgfVxuXG4gIGNyZWF0ZUNoaWxkTm9kZURPTUVsZW1lbnRzKGNvbnRleHQpIHtcbiAgICBjb25zdCBkb2N1bWVudE1hcmtkb3duTm9kZSA9IHRoaXMsICAvLy9cbiAgICAgICAgICBmb290bm90ZXNMaXN0TWFya2Rvd25Ob2RlID0gRm9vdG5vdGVzTGlzdE1hcmtkb3duTm9kZS5mcm9tRG9jdW1lbnRNYXJrZG93bk5vZGUoZG9jdW1lbnRNYXJrZG93bk5vZGUsIGNvbnRleHQpO1xuXG4gICAgc3VwZXIuY3JlYXRlQ2hpbGROb2RlRE9NRWxlbWVudHMoY29udGV4dCk7XG5cbiAgICBpZiAoZm9vdG5vdGVzTGlzdE1hcmtkb3duTm9kZSAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgZm9vdG5vdGVzTGlzdE1hcmtkb3duTm9kZURPTUVsZW1lbnQgPSBmb290bm90ZXNMaXN0TWFya2Rvd25Ob2RlLmNyZWF0ZURPTUVsZW1lbnQoY29udGV4dCksXG4gICAgICAgICAgICBjaGlsZE5vZGVET01FbGVtZW50ID0gZm9vdG5vdGVzTGlzdE1hcmtkb3duTm9kZURPTUVsZW1lbnQ7ICAvLy9cblxuICAgICAgdGhpcy5pbnNlcnRET01FbGVtZW50KGNoaWxkTm9kZURPTUVsZW1lbnQpO1xuXG4gICAgICByZW51bWJlckxpbmtNYXJrZG93bk5vZGVzKGRvY3VtZW50TWFya2Rvd25Ob2RlLCBmb290bm90ZXNMaXN0TWFya2Rvd25Ob2RlLCBjb250ZXh0KTtcbiAgICB9XG4gIH1cblxuICBzdGF0aWMgZnJvbVJ1bGVOYW1lQ2hpbGROb2Rlc0FuZE9wYWNpdHkocnVsZU5hbWUsIGNoaWxkTm9kZXMsIG9wYWNpdHkpIHsgcmV0dXJuIE1hcmtkb3duTm9kZS5mcm9tUnVsZU5hbWVDaGlsZE5vZGVzQW5kT3BhY2l0eShEb2N1bWVudE1hcmtkb3duTm9kZSwgcnVsZU5hbWUsIGNoaWxkTm9kZXMsIG9wYWNpdHkpOyB9XG59XG5cbiJdLCJuYW1lcyI6WyJEb2N1bWVudE1hcmtkb3duTm9kZSIsImFkanVzdEluZGVudCIsImluZGVudCIsIkVNUFRZX1NUUklORyIsImNoaWxkTm9kZXNBc0hUTUwiLCJjb250ZXh0IiwiZG9jdW1lbnRNYXJrZG93bk5vZGUiLCJmb290bm90ZXNMaXN0TWFya2Rvd25Ob2RlIiwiRm9vdG5vdGVzTGlzdE1hcmtkb3duTm9kZSIsImZyb21Eb2N1bWVudE1hcmtkb3duTm9kZSIsImNoaWxkTm9kZXNIVE1MIiwiZm9vdG5vdGVzTGlzdE1hcmtkb3duTm9kZUhUTUwiLCJhc0hUTUwiLCJyZW51bWJlckxpbmtNYXJrZG93bk5vZGVzSFRNTCIsImNyZWF0ZUNoaWxkTm9kZURPTUVsZW1lbnRzIiwiZm9vdG5vdGVzTGlzdE1hcmtkb3duTm9kZURPTUVsZW1lbnQiLCJjcmVhdGVET01FbGVtZW50IiwiY2hpbGROb2RlRE9NRWxlbWVudCIsImluc2VydERPTUVsZW1lbnQiLCJyZW51bWJlckxpbmtNYXJrZG93bk5vZGVzIiwiZnJvbVJ1bGVOYW1lQ2hpbGROb2Rlc0FuZE9wYWNpdHkiLCJydWxlTmFtZSIsImNoaWxkTm9kZXMiLCJvcGFjaXR5IiwiTWFya2Rvd25Ob2RlIl0sInJhbmdlTWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OyIsIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQVFxQkE7OzsrREFOSTtvRUFDYTt5QkFFVDtvQkFDNEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUUxRCxJQUFBLEFBQU1BLHFDQUFELEFBQUw7Y0FBTUE7K0JBQUFBO2FBQUFBO2dDQUFBQTs7O2tCQUFBQTs7WUFDbkJDLEtBQUFBO21CQUFBQSxTQUFBQSxhQUFhQyxNQUFNO2dCQUNqQkEsU0FBU0MsdUJBQVk7Z0JBRXJCLE9BQU9EO1lBQ1Q7OztZQUVBRSxLQUFBQTttQkFBQUEsU0FBQUEsaUJBQWlCRixNQUFNLEVBQUVHLE9BQU87Z0JBQzlCLElBQU1DLHVCQUF1QixJQUFJLEVBQzNCQyw0QkFBNEJDLHNCQUF5QixDQUFDQyx3QkFBd0IsQ0FBQ0gsc0JBQXNCRDtnQkFFM0csSUFBSUssaUJBQWlCLHVCQVhKVixpQ0FXVUksb0JBQU4sSUFBSyxhQUFrQkYsUUFBUUc7Z0JBRXBELElBQUlFLDhCQUE4QixNQUFNO29CQUN0QyxJQUFNSSxnQ0FBZ0NKLDBCQUEwQkssTUFBTSxDQUFDVixRQUFRRztvQkFFL0VLLGlCQUFpQixBQUFDLEdBQW1CQyxPQUFqQkQsZ0JBQStDLE9BQTlCQztvQkFFckNELGlCQUFpQkcsSUFBQUEsbUNBQTZCLEVBQUNILGdCQUFnQkosc0JBQXNCQywyQkFBMkJGO2dCQUNsSDtnQkFFQSxPQUFPSztZQUNUOzs7WUFFQUksS0FBQUE7bUJBQUFBLFNBQUFBLDJCQUEyQlQsT0FBTztnQkFDaEMsSUFBTUMsdUJBQXVCLElBQUksRUFDM0JDLDRCQUE0QkMsc0JBQXlCLENBQUNDLHdCQUF3QixDQUFDSCxzQkFBc0JEO2dCQUUzRyx1QkE1QmlCTCxpQ0E0QlhjLDhCQUFOLElBQUssYUFBNEJUO2dCQUVqQyxJQUFJRSw4QkFBOEIsTUFBTTtvQkFDdEMsSUFBTVEsc0NBQXNDUiwwQkFBMEJTLGdCQUFnQixDQUFDWCxVQUNqRlksc0JBQXNCRixxQ0FBc0MsR0FBRztvQkFFckUsSUFBSSxDQUFDRyxnQkFBZ0IsQ0FBQ0Q7b0JBRXRCRSxJQUFBQSwrQkFBeUIsRUFBQ2Isc0JBQXNCQywyQkFBMkJGO2dCQUM3RTtZQUNGOzs7O1lBRU9lLEtBQUFBO21CQUFQLFNBQU9BLGlDQUFpQ0MsUUFBUSxFQUFFQyxVQUFVLEVBQUVDLE9BQU87Z0JBQUksT0FBT0MsaUJBQVksQ0FBQ0osZ0NBQWdDLENBeEMxR3BCLHNCQXdDaUlxQixVQUFVQyxZQUFZQztZQUFVOzs7V0F4Q2pLdkI7RUFBNkJ3QixpQkFBWSJ9