"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return FootnotesItemReplacement;
    }
});
var _replacement = /*#__PURE__*/ _interop_require_default(require("../replacement"));
var _footnotesItem = /*#__PURE__*/ _interop_require_default(require("../node/markdown/footnotesItem"));
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
var FootnotesItemReplacement = /*#__PURE__*/ function(Replacement) {
    _inherits(FootnotesItemReplacement, Replacement);
    var _super = _create_super(FootnotesItemReplacement);
    function FootnotesItemReplacement() {
        _class_call_check(this, FootnotesItemReplacement);
        return _super.apply(this, arguments);
    }
    _create_class(FootnotesItemReplacement, null, [
        {
            key: "fromNode",
            value: function fromNode(node, context) {
                return _replacement.default.fromNode(FootnotesItemReplacement, node, context);
            }
        },
        {
            key: "fromFootnoteReplacementAndIdentifier",
            value: function fromFootnoteReplacementAndIdentifier(footnoteReplacement, identifier) {
                var footnoteMarkdownNode = footnoteReplacement.getFootnoteMarkdownNode(), footnotesItemMarkdownNode = _footnotesItem.default.fromFootnotesMarkdownNodeAndIdentifier(footnoteMarkdownNode, identifier), ascendantNode = footnotesItemMarkdownNode, footnotesItemReplacement = footnoteReplacement.expand(FootnotesItemReplacement, ascendantNode);
                return footnotesItemReplacement;
            }
        }
    ]);
    return FootnotesItemReplacement;
}(_replacement.default);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9yZXBsYWNlbWVudC9mb290bm90ZXNJdGVtLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgUmVwbGFjZW1lbnQgZnJvbSBcIi4uL3JlcGxhY2VtZW50XCI7XG5cbmltcG9ydCBGb290bm90ZXNJdGVtTWFya2Rvd25Ob2RlIGZyb20gXCIuLi9ub2RlL21hcmtkb3duL2Zvb3Rub3Rlc0l0ZW1cIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRm9vdG5vdGVzSXRlbVJlcGxhY2VtZW50IGV4dGVuZHMgUmVwbGFjZW1lbnQge1xuICBzdGF0aWMgZnJvbU5vZGUobm9kZSwgY29udGV4dCkgeyByZXR1cm4gUmVwbGFjZW1lbnQuZnJvbU5vZGUoRm9vdG5vdGVzSXRlbVJlcGxhY2VtZW50LCBub2RlLCBjb250ZXh0KTsgfVxuXG4gIHN0YXRpYyBmcm9tRm9vdG5vdGVSZXBsYWNlbWVudEFuZElkZW50aWZpZXIoZm9vdG5vdGVSZXBsYWNlbWVudCwgaWRlbnRpZmllcikge1xuICAgICAgY29uc3QgZm9vdG5vdGVNYXJrZG93bk5vZGUgPSBmb290bm90ZVJlcGxhY2VtZW50LmdldEZvb3Rub3RlTWFya2Rvd25Ob2RlKCksXG4gICAgICAgICAgICBmb290bm90ZXNJdGVtTWFya2Rvd25Ob2RlID0gRm9vdG5vdGVzSXRlbU1hcmtkb3duTm9kZS5mcm9tRm9vdG5vdGVzTWFya2Rvd25Ob2RlQW5kSWRlbnRpZmllcihmb290bm90ZU1hcmtkb3duTm9kZSwgaWRlbnRpZmllciksXG4gICAgICAgICAgICBhc2NlbmRhbnROb2RlID0gZm9vdG5vdGVzSXRlbU1hcmtkb3duTm9kZSwgLy8vXG4gICAgICAgICAgICBmb290bm90ZXNJdGVtUmVwbGFjZW1lbnQgPSBmb290bm90ZVJlcGxhY2VtZW50LmV4cGFuZChGb290bm90ZXNJdGVtUmVwbGFjZW1lbnQsIGFzY2VuZGFudE5vZGUpO1xuXG4gICAgcmV0dXJuIGZvb3Rub3Rlc0l0ZW1SZXBsYWNlbWVudDtcbiAgfVxufVxuIl0sIm5hbWVzIjpbIkZvb3Rub3Rlc0l0ZW1SZXBsYWNlbWVudCIsImZyb21Ob2RlIiwibm9kZSIsImNvbnRleHQiLCJSZXBsYWNlbWVudCIsImZyb21Gb290bm90ZVJlcGxhY2VtZW50QW5kSWRlbnRpZmllciIsImZvb3Rub3RlUmVwbGFjZW1lbnQiLCJpZGVudGlmaWVyIiwiZm9vdG5vdGVNYXJrZG93bk5vZGUiLCJnZXRGb290bm90ZU1hcmtkb3duTm9kZSIsImZvb3Rub3Rlc0l0ZW1NYXJrZG93bk5vZGUiLCJGb290bm90ZXNJdGVtTWFya2Rvd25Ob2RlIiwiZnJvbUZvb3Rub3Rlc01hcmtkb3duTm9kZUFuZElkZW50aWZpZXIiLCJhc2NlbmRhbnROb2RlIiwiZm9vdG5vdGVzSXRlbVJlcGxhY2VtZW50IiwiZXhwYW5kIl0sInJhbmdlTWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OyIsIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQU1xQkE7OztrRUFKRztvRUFFYzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUV2QixJQUFBLEFBQU1BLHlDQUFELEFBQUw7Y0FBTUE7K0JBQUFBO2FBQUFBO2dDQUFBQTs7O2tCQUFBQTs7WUFDWkMsS0FBQUE7bUJBQVAsU0FBT0EsU0FBU0MsSUFBSSxFQUFFQyxPQUFPO2dCQUFJLE9BQU9DLG9CQUFXLENBQUNILFFBQVEsQ0FEekNELDBCQUNvRUUsTUFBTUM7WUFBVTs7O1lBRWhHRSxLQUFBQTttQkFBUCxTQUFPQSxxQ0FBcUNDLG1CQUFtQixFQUFFQyxVQUFVO2dCQUN2RSxJQUFNQyx1QkFBdUJGLG9CQUFvQkcsdUJBQXVCLElBQ2xFQyw0QkFBNEJDLHNCQUF5QixDQUFDQyxzQ0FBc0MsQ0FBQ0osc0JBQXNCRCxhQUNuSE0sZ0JBQWdCSCwyQkFDaEJJLDJCQUEyQlIsb0JBQW9CUyxNQUFNLENBUDVDZiwwQkFPdUVhO2dCQUV4RixPQUFPQztZQUNUOzs7V0FWbUJkO0VBQWlDSSxvQkFBVyJ9