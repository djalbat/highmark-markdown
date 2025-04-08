"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return TableHeadCellHTMLNode;
    }
});
var _html = /*#__PURE__*/ _interop_require_default(require("../../node/html"));
function _assert_this_initialized(self) {
    if (self === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return self;
}
function _call_super(_this, derived, args) {
    derived = _get_prototype_of(derived);
    return _possible_constructor_return(_this, _is_native_reflect_construct() ? Reflect.construct(derived, args || [], _get_prototype_of(_this).constructor) : derived.apply(_this, args));
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
    try {
        var result = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
    } catch (_) {}
    return (_is_native_reflect_construct = function() {
        return !!result;
    })();
}
var TableHeadCellHTMLNode = /*#__PURE__*/ function(HTMLNode) {
    _inherits(TableHeadCellHTMLNode, HTMLNode);
    function TableHeadCellHTMLNode() {
        _class_call_check(this, TableHeadCellHTMLNode);
        return _call_super(this, TableHeadCellHTMLNode, arguments);
    }
    _create_class(TableHeadCellHTMLNode, [
        {
            key: "childNodesAsHTML",
            value: function childNodesAsHTML(indent, context) {
                var childNodesHTML = this.fromFirstChildNode(function(firstChildNode) {
                    var tableCellMarkdownNode = firstChildNode, childNodesHTML = tableCellMarkdownNode.childNodesAsHTML(indent, context);
                    return childNodesHTML;
                });
                return childNodesHTML;
            }
        },
        {
            key: "childNodesAsPlainText",
            value: function childNodesAsPlainText(indent, context) {
                var childNodesPlainText = this.fromFirstChildNode(function(firstChildNode) {
                    var tableCellMarkdownNode = firstChildNode, childNodesPlainText = tableCellMarkdownNode.childNodesAsPlainText(indent, context);
                    return childNodesPlainText;
                });
                return childNodesPlainText;
            }
        }
    ], [
        {
            key: "fromNothing",
            value: function fromNothing() {
                return _html.default.fromNothing(TableHeadCellHTMLNode);
            }
        },
        {
            key: "fromOuterNode",
            value: function fromOuterNode(outerNode) {
                return _html.default.fromOuterNode(TableHeadCellHTMLNode, outerNode);
            }
        }
    ]);
    return TableHeadCellHTMLNode;
}(_html.default);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ub2RlL2h0bWwvdGFibGVIZWFkQ2VsbC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IEhUTUxOb2RlIGZyb20gXCIuLi8uLi9ub2RlL2h0bWxcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGFibGVIZWFkQ2VsbEhUTUxOb2RlIGV4dGVuZHMgSFRNTE5vZGUge1xuICBjaGlsZE5vZGVzQXNIVE1MKGluZGVudCwgY29udGV4dCkge1xuICAgIGNvbnN0IGNoaWxkTm9kZXNIVE1MID0gdGhpcy5mcm9tRmlyc3RDaGlsZE5vZGUoKGZpcnN0Q2hpbGROb2RlKSA9PiB7XG4gICAgICBjb25zdCB0YWJsZUNlbGxNYXJrZG93bk5vZGUgPSBmaXJzdENoaWxkTm9kZSwgLy8vXG4gICAgICAgICAgICBjaGlsZE5vZGVzSFRNTCA9IHRhYmxlQ2VsbE1hcmtkb3duTm9kZS5jaGlsZE5vZGVzQXNIVE1MKGluZGVudCwgY29udGV4dCk7XG5cbiAgICAgIHJldHVybiBjaGlsZE5vZGVzSFRNTDtcbiAgICB9KTtcblxuICAgIHJldHVybiBjaGlsZE5vZGVzSFRNTDtcbiAgfVxuXG4gIGNoaWxkTm9kZXNBc1BsYWluVGV4dChpbmRlbnQsIGNvbnRleHQpIHtcbiAgICBjb25zdCBjaGlsZE5vZGVzUGxhaW5UZXh0ID0gdGhpcy5mcm9tRmlyc3RDaGlsZE5vZGUoKGZpcnN0Q2hpbGROb2RlKSA9PiB7XG4gICAgICBjb25zdCB0YWJsZUNlbGxNYXJrZG93bk5vZGUgPSBmaXJzdENoaWxkTm9kZSwgLy8vXG4gICAgICAgICAgICBjaGlsZE5vZGVzUGxhaW5UZXh0ID0gdGFibGVDZWxsTWFya2Rvd25Ob2RlLmNoaWxkTm9kZXNBc1BsYWluVGV4dChpbmRlbnQsIGNvbnRleHQpO1xuXG4gICAgICByZXR1cm4gY2hpbGROb2Rlc1BsYWluVGV4dDtcbiAgICB9KTtcblxuICAgIHJldHVybiBjaGlsZE5vZGVzUGxhaW5UZXh0O1xuICB9XG5cbiAgc3RhdGljIGZyb21Ob3RoaW5nKCkgeyByZXR1cm4gSFRNTE5vZGUuZnJvbU5vdGhpbmcoVGFibGVIZWFkQ2VsbEhUTUxOb2RlKTsgfVxuXG4gIHN0YXRpYyBmcm9tT3V0ZXJOb2RlKG91dGVyTm9kZSkgeyByZXR1cm4gSFRNTE5vZGUuZnJvbU91dGVyTm9kZShUYWJsZUhlYWRDZWxsSFRNTE5vZGUsIG91dGVyTm9kZSk7IH1cbn1cbiJdLCJuYW1lcyI6WyJUYWJsZUhlYWRDZWxsSFRNTE5vZGUiLCJjaGlsZE5vZGVzQXNIVE1MIiwiaW5kZW50IiwiY29udGV4dCIsImNoaWxkTm9kZXNIVE1MIiwiZnJvbUZpcnN0Q2hpbGROb2RlIiwiZmlyc3RDaGlsZE5vZGUiLCJ0YWJsZUNlbGxNYXJrZG93bk5vZGUiLCJjaGlsZE5vZGVzQXNQbGFpblRleHQiLCJjaGlsZE5vZGVzUGxhaW5UZXh0IiwiZnJvbU5vdGhpbmciLCJIVE1MTm9kZSIsImZyb21PdXRlck5vZGUiLCJvdXRlck5vZGUiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBSXFCQTs7OzJEQUZBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRU4sSUFBQSxBQUFNQSxzQ0FBTjtjQUFNQTthQUFBQTtnQ0FBQUE7ZUFBTixrQkFBTUE7O2tCQUFBQTs7WUFDbkJDLEtBQUFBO21CQUFBQSxTQUFBQSxpQkFBaUJDLE1BQU0sRUFBRUMsT0FBTztnQkFDOUIsSUFBTUMsaUJBQWlCLElBQUksQ0FBQ0Msa0JBQWtCLENBQUMsU0FBQ0M7b0JBQzlDLElBQU1DLHdCQUF3QkQsZ0JBQ3hCRixpQkFBaUJHLHNCQUFzQk4sZ0JBQWdCLENBQUNDLFFBQVFDO29CQUV0RSxPQUFPQztnQkFDVDtnQkFFQSxPQUFPQTtZQUNUOzs7WUFFQUksS0FBQUE7bUJBQUFBLFNBQUFBLHNCQUFzQk4sTUFBTSxFQUFFQyxPQUFPO2dCQUNuQyxJQUFNTSxzQkFBc0IsSUFBSSxDQUFDSixrQkFBa0IsQ0FBQyxTQUFDQztvQkFDbkQsSUFBTUMsd0JBQXdCRCxnQkFDeEJHLHNCQUFzQkYsc0JBQXNCQyxxQkFBcUIsQ0FBQ04sUUFBUUM7b0JBRWhGLE9BQU9NO2dCQUNUO2dCQUVBLE9BQU9BO1lBQ1Q7Ozs7WUFFT0MsS0FBQUE7bUJBQVAsU0FBT0E7Z0JBQWdCLE9BQU9DLGFBQVEsQ0FBQ0QsV0FBVyxDQXZCL0JWO1lBdUJ3RDs7O1lBRXBFWSxLQUFBQTttQkFBUCxTQUFPQSxjQUFjQyxTQUFTO2dCQUFJLE9BQU9GLGFBQVEsQ0FBQ0MsYUFBYSxDQXpCNUNaLHVCQXlCb0VhO1lBQVk7OztXQXpCaEZiO0VBQThCVyxhQUFRIn0=