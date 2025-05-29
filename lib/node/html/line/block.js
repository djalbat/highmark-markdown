"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return BlockLineHTMLNode;
    }
});
var _line = /*#__PURE__*/ _interop_require_default(require("../../../node/html/line"));
var _whitespace = require("../../../utilities/whitespace");
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
function _define_property(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else {
        obj[key] = value;
    }
    return obj;
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
    try {
        var result = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
    } catch (_) {}
    return (_is_native_reflect_construct = function() {
        return !!result;
    })();
}
var BlockLineHTMLNode = /*#__PURE__*/ function(LineHTMLNode) {
    _inherits(BlockLineHTMLNode, LineHTMLNode);
    function BlockLineHTMLNode() {
        _class_call_check(this, BlockLineHTMLNode);
        return _call_super(this, BlockLineHTMLNode, arguments);
    }
    _create_class(BlockLineHTMLNode, [
        {
            key: "lines",
            value: function lines(context) {
                var lines = this.constructor.lines;
                return lines;
            }
        },
        {
            key: "childNodesAsHTML",
            value: function childNodesAsHTML(indent, context) {
                var childNodesHTML;
                var htmlNode = this; ///
                (0, _whitespace.assignIndexes)(htmlNode, context);
                childNodesHTML = _get(_get_prototype_of(BlockLineHTMLNode.prototype), "childNodesAsHTML", this).call(this, indent, context);
                (0, _whitespace.deleteIndexes)(context);
                return childNodesHTML;
            }
        }
    ], [
        {
            key: "fromNothing",
            value: function fromNothing() {
                return HTMLNode.fromNothing(BlockLineHTMLNode);
            }
        },
        {
            key: "fromOuterNode",
            value: function fromOuterNode(outerNode) {
                return HTMLNode.fromOuterNode(BlockLineHTMLNode, outerNode);
            }
        }
    ]);
    return BlockLineHTMLNode;
}(_line.default);
_define_property(BlockLineHTMLNode, "lines", 2);
_define_property(BlockLineHTMLNode, "tagName", "span");
_define_property(BlockLineHTMLNode, "className", "block-line");

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9ub2RlL2h0bWwvbGluZS9ibG9jay5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IExpbmVIVE1MTm9kZSBmcm9tIFwiLi4vLi4vLi4vbm9kZS9odG1sL2xpbmVcIjtcblxuaW1wb3J0IHsgYXNzaWduSW5kZXhlcywgZGVsZXRlSW5kZXhlcyB9IGZyb20gXCIuLi8uLi8uLi91dGlsaXRpZXMvd2hpdGVzcGFjZVwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBCbG9ja0xpbmVIVE1MTm9kZSBleHRlbmRzIExpbmVIVE1MTm9kZSB7XG4gIGxpbmVzKGNvbnRleHQpIHtcbiAgICBjb25zdCB7IGxpbmVzIH0gPSB0aGlzLmNvbnN0cnVjdG9yO1xuXG4gICAgcmV0dXJuIGxpbmVzO1xuICB9XG5cbiAgY2hpbGROb2Rlc0FzSFRNTChpbmRlbnQsIGNvbnRleHQpIHtcbiAgICBsZXQgY2hpbGROb2Rlc0hUTUw7XG5cbiAgICBjb25zdCBodG1sTm9kZSA9IHRoaXM7ICAvLy9cblxuICAgIGFzc2lnbkluZGV4ZXMoaHRtbE5vZGUsIGNvbnRleHQpO1xuXG4gICAgY2hpbGROb2Rlc0hUTUwgPSBzdXBlci5jaGlsZE5vZGVzQXNIVE1MKGluZGVudCwgY29udGV4dCk7XG5cbiAgICBkZWxldGVJbmRleGVzKGNvbnRleHQpO1xuXG4gICAgcmV0dXJuIGNoaWxkTm9kZXNIVE1MO1xuICB9XG5cbiAgc3RhdGljIGxpbmVzID0gMjtcblxuICBzdGF0aWMgdGFnTmFtZSA9IFwic3BhblwiO1xuXG4gIHN0YXRpYyBjbGFzc05hbWUgPSBcImJsb2NrLWxpbmVcIjtcblxuICBzdGF0aWMgZnJvbU5vdGhpbmcoKSB7IHJldHVybiBIVE1MTm9kZS5mcm9tTm90aGluZyhCbG9ja0xpbmVIVE1MTm9kZSk7IH1cblxuICBzdGF0aWMgZnJvbU91dGVyTm9kZShvdXRlck5vZGUpIHsgcmV0dXJuIEhUTUxOb2RlLmZyb21PdXRlck5vZGUoQmxvY2tMaW5lSFRNTE5vZGUsIG91dGVyTm9kZSk7IH1cbn1cbiJdLCJuYW1lcyI6WyJCbG9ja0xpbmVIVE1MTm9kZSIsImxpbmVzIiwiY29udGV4dCIsImNvbnN0cnVjdG9yIiwiY2hpbGROb2Rlc0FzSFRNTCIsImluZGVudCIsImNoaWxkTm9kZXNIVE1MIiwiaHRtbE5vZGUiLCJhc3NpZ25JbmRleGVzIiwiZGVsZXRlSW5kZXhlcyIsImZyb21Ob3RoaW5nIiwiSFRNTE5vZGUiLCJmcm9tT3V0ZXJOb2RlIiwib3V0ZXJOb2RlIiwiTGluZUhUTUxOb2RlIiwidGFnTmFtZSIsImNsYXNzTmFtZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFNcUJBOzs7MkRBSkk7MEJBRW9COzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRTlCLElBQUEsQUFBTUEsa0NBQU47Y0FBTUE7YUFBQUE7Z0NBQUFBO2VBQU4sa0JBQU1BOztrQkFBQUE7O1lBQ25CQyxLQUFBQTttQkFBQUEsU0FBQUEsTUFBTUMsT0FBTztnQkFDWCxJQUFNLEFBQUVELFFBQVUsSUFBSSxDQUFDRSxXQUFXLENBQTFCRjtnQkFFUixPQUFPQTtZQUNUOzs7WUFFQUcsS0FBQUE7bUJBQUFBLFNBQUFBLGlCQUFpQkMsTUFBTSxFQUFFSCxPQUFPO2dCQUM5QixJQUFJSTtnQkFFSixJQUFNQyxXQUFXLElBQUksRUFBRyxHQUFHO2dCQUUzQkMsSUFBQUEseUJBQWEsRUFBQ0QsVUFBVUw7Z0JBRXhCSSxpQkFBaUIsdUJBZEFOLDhCQWNNSSxvQkFBTixJQUFLLGFBQWtCQyxRQUFRSDtnQkFFaERPLElBQUFBLHlCQUFhLEVBQUNQO2dCQUVkLE9BQU9JO1lBQ1Q7Ozs7WUFRT0ksS0FBQUE7bUJBQVAsU0FBT0E7Z0JBQWdCLE9BQU9DLFNBQVNELFdBQVcsQ0EzQi9CVjtZQTJCb0Q7OztZQUVoRVksS0FBQUE7bUJBQVAsU0FBT0EsY0FBY0MsU0FBUztnQkFBSSxPQUFPRixTQUFTQyxhQUFhLENBN0I1Q1osbUJBNkJnRWE7WUFBWTs7O1dBN0I1RWI7RUFBMEJjLGFBQVk7QUFxQnpELGlCQXJCbUJkLG1CQXFCWkMsU0FBUTtBQUVmLGlCQXZCbUJELG1CQXVCWmUsV0FBVTtBQUVqQixpQkF6Qm1CZixtQkF5QlpnQixhQUFZIn0=