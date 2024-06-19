"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return FootnoteReplacement;
    }
});
var _replacement = /*#__PURE__*/ _interop_require_default(require("../replacement"));
var _query = require("../utilities/query");
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
var FootnoteReplacement = /*#__PURE__*/ function(Replacement) {
    _inherits(FootnoteReplacement, Replacement);
    var _super = _create_super(FootnoteReplacement);
    function FootnoteReplacement() {
        _class_call_check(this, FootnoteReplacement);
        return _super.apply(this, arguments);
    }
    _create_class(FootnoteReplacement, [
        {
            key: "getFootnoteMarkdownNode",
            value: function getFootnoteMarkdownNode() {
                var node = this.getNode(), footnoteMarkdownNode = node; ///
                return footnoteMarkdownNode;
            }
        }
    ], [
        {
            key: "fromNode",
            value: function fromNode(node, context) {
                return _replacement.default.fromNode(FootnoteReplacement, node, context);
            }
        },
        {
            key: "fromFootnoteSubDivisionReplacement",
            value: function fromFootnoteSubDivisionReplacement(footnoteSubDivisionReplacement) {
                var node = footnoteSubDivisionReplacement.getNode(), footnoteMarkdownNode = (0, _query.footnoteMarkdownNodeFromNode)(node), descendentNode = footnoteMarkdownNode, footnoteReplacement = footnoteSubDivisionReplacement.contract(FootnoteReplacement, descendentNode);
                return footnoteReplacement;
            }
        }
    ]);
    return FootnoteReplacement;
}(_replacement.default);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9yZXBsYWNlbWVudC9mb290bm90ZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IFJlcGxhY2VtZW50IGZyb20gXCIuLi9yZXBsYWNlbWVudFwiO1xuXG5pbXBvcnQgeyBmb290bm90ZU1hcmtkb3duTm9kZUZyb21Ob2RlIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9xdWVyeVwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBGb290bm90ZVJlcGxhY2VtZW50IGV4dGVuZHMgUmVwbGFjZW1lbnQge1xuICBnZXRGb290bm90ZU1hcmtkb3duTm9kZSgpIHtcbiAgICBjb25zdCBub2RlID0gdGhpcy5nZXROb2RlKCksXG4gICAgICAgICAgZm9vdG5vdGVNYXJrZG93bk5vZGUgPSBub2RlOyAgLy8vXG5cbiAgICByZXR1cm4gZm9vdG5vdGVNYXJrZG93bk5vZGU7XG4gIH1cblxuICBzdGF0aWMgZnJvbU5vZGUobm9kZSwgY29udGV4dCkgeyByZXR1cm4gUmVwbGFjZW1lbnQuZnJvbU5vZGUoRm9vdG5vdGVSZXBsYWNlbWVudCwgbm9kZSwgY29udGV4dCk7IH1cblxuICBzdGF0aWMgZnJvbUZvb3Rub3RlU3ViRGl2aXNpb25SZXBsYWNlbWVudChmb290bm90ZVN1YkRpdmlzaW9uUmVwbGFjZW1lbnQpIHtcbiAgICBjb25zdCBub2RlID0gZm9vdG5vdGVTdWJEaXZpc2lvblJlcGxhY2VtZW50LmdldE5vZGUoKSxcbiAgICAgICAgICBmb290bm90ZU1hcmtkb3duTm9kZSA9IGZvb3Rub3RlTWFya2Rvd25Ob2RlRnJvbU5vZGUobm9kZSksXG4gICAgICAgICAgZGVzY2VuZGVudE5vZGUgPSBmb290bm90ZU1hcmtkb3duTm9kZSwgIC8vL1xuICAgICAgICAgIGZvb3Rub3RlUmVwbGFjZW1lbnQgPSBmb290bm90ZVN1YkRpdmlzaW9uUmVwbGFjZW1lbnQuY29udHJhY3QoRm9vdG5vdGVSZXBsYWNlbWVudCwgZGVzY2VuZGVudE5vZGUpO1xuXG4gICAgcmV0dXJuIGZvb3Rub3RlUmVwbGFjZW1lbnQ7XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJGb290bm90ZVJlcGxhY2VtZW50IiwiZ2V0Rm9vdG5vdGVNYXJrZG93bk5vZGUiLCJub2RlIiwiZ2V0Tm9kZSIsImZvb3Rub3RlTWFya2Rvd25Ob2RlIiwiZnJvbU5vZGUiLCJjb250ZXh0IiwiUmVwbGFjZW1lbnQiLCJmcm9tRm9vdG5vdGVTdWJEaXZpc2lvblJlcGxhY2VtZW50IiwiZm9vdG5vdGVTdWJEaXZpc2lvblJlcGxhY2VtZW50IiwiZm9vdG5vdGVNYXJrZG93bk5vZGVGcm9tTm9kZSIsImRlc2NlbmRlbnROb2RlIiwiZm9vdG5vdGVSZXBsYWNlbWVudCIsImNvbnRyYWN0Il0sInJhbmdlTWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7IiwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBTXFCQTs7O2tFQUpHO3FCQUVxQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUU5QixJQUFBLEFBQU1BLG9DQUFELEFBQUw7Y0FBTUE7K0JBQUFBO2FBQUFBO2dDQUFBQTs7O2tCQUFBQTs7WUFDbkJDLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFNQyxPQUFPLElBQUksQ0FBQ0MsT0FBTyxJQUNuQkMsdUJBQXVCRixNQUFPLEdBQUc7Z0JBRXZDLE9BQU9FO1lBQ1Q7Ozs7WUFFT0MsS0FBQUE7bUJBQVAsU0FBT0EsU0FBU0gsSUFBSSxFQUFFSSxPQUFPO2dCQUFJLE9BQU9DLG9CQUFXLENBQUNGLFFBQVEsQ0FSekNMLHFCQVErREUsTUFBTUk7WUFBVTs7O1lBRTNGRSxLQUFBQTttQkFBUCxTQUFPQSxtQ0FBbUNDLDhCQUE4QjtnQkFDdEUsSUFBTVAsT0FBT08sK0JBQStCTixPQUFPLElBQzdDQyx1QkFBdUJNLElBQUFBLG1DQUE0QixFQUFDUixPQUNwRFMsaUJBQWlCUCxzQkFDakJRLHNCQUFzQkgsK0JBQStCSSxRQUFRLENBZGxEYixxQkFjd0VXO2dCQUV6RixPQUFPQztZQUNUOzs7V0FqQm1CWjtFQUE0Qk8sb0JBQVcifQ==