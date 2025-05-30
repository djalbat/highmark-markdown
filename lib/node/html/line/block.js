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
            key: "content",
            value: function content(context) {
                var plainText = this.asPlainText(context), content = plainText; ///
                return content;
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
                return _line.default.fromNothing(BlockLineHTMLNode);
            }
        },
        {
            key: "fromOuterNode",
            value: function fromOuterNode(outerNode) {
                return _line.default.fromOuterNode(BlockLineHTMLNode, outerNode);
            }
        }
    ]);
    return BlockLineHTMLNode;
}(_line.default);
_define_property(BlockLineHTMLNode, "lines", 2);
_define_property(BlockLineHTMLNode, "tagName", "span");
_define_property(BlockLineHTMLNode, "className", "block-line");

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9ub2RlL2h0bWwvbGluZS9ibG9jay5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IExpbmVIVE1MTm9kZSBmcm9tIFwiLi4vLi4vLi4vbm9kZS9odG1sL2xpbmVcIjtcblxuaW1wb3J0IHsgYXNzaWduSW5kZXhlcywgZGVsZXRlSW5kZXhlcyB9IGZyb20gXCIuLi8uLi8uLi91dGlsaXRpZXMvd2hpdGVzcGFjZVwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBCbG9ja0xpbmVIVE1MTm9kZSBleHRlbmRzIExpbmVIVE1MTm9kZSB7XG4gIGxpbmVzKGNvbnRleHQpIHtcbiAgICBjb25zdCB7IGxpbmVzIH0gPSB0aGlzLmNvbnN0cnVjdG9yO1xuXG4gICAgcmV0dXJuIGxpbmVzO1xuICB9XG5cbiAgY29udGVudChjb250ZXh0KSB7XG4gICAgY29uc3QgcGxhaW5UZXh0ID0gdGhpcy5hc1BsYWluVGV4dChjb250ZXh0KSxcbiAgICAgICAgICBjb250ZW50ID0gcGxhaW5UZXh0OyAgLy8vXG5cbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGNoaWxkTm9kZXNBc0hUTUwoaW5kZW50LCBjb250ZXh0KSB7XG4gICAgbGV0IGNoaWxkTm9kZXNIVE1MO1xuXG4gICAgY29uc3QgaHRtbE5vZGUgPSB0aGlzOyAgLy8vXG5cbiAgICBhc3NpZ25JbmRleGVzKGh0bWxOb2RlLCBjb250ZXh0KTtcblxuICAgIGNoaWxkTm9kZXNIVE1MID0gc3VwZXIuY2hpbGROb2Rlc0FzSFRNTChpbmRlbnQsIGNvbnRleHQpO1xuXG4gICAgZGVsZXRlSW5kZXhlcyhjb250ZXh0KTtcblxuICAgIHJldHVybiBjaGlsZE5vZGVzSFRNTDtcbiAgfVxuXG4gIHN0YXRpYyBsaW5lcyA9IDI7XG5cbiAgc3RhdGljIHRhZ05hbWUgPSBcInNwYW5cIjtcblxuICBzdGF0aWMgY2xhc3NOYW1lID0gXCJibG9jay1saW5lXCI7XG5cbiAgc3RhdGljIGZyb21Ob3RoaW5nKCkgeyByZXR1cm4gTGluZUhUTUxOb2RlLmZyb21Ob3RoaW5nKEJsb2NrTGluZUhUTUxOb2RlKTsgfVxuXG4gIHN0YXRpYyBmcm9tT3V0ZXJOb2RlKG91dGVyTm9kZSkgeyByZXR1cm4gTGluZUhUTUxOb2RlLmZyb21PdXRlck5vZGUoQmxvY2tMaW5lSFRNTE5vZGUsIG91dGVyTm9kZSk7IH1cbn1cbiJdLCJuYW1lcyI6WyJCbG9ja0xpbmVIVE1MTm9kZSIsImxpbmVzIiwiY29udGV4dCIsImNvbnN0cnVjdG9yIiwiY29udGVudCIsInBsYWluVGV4dCIsImFzUGxhaW5UZXh0IiwiY2hpbGROb2Rlc0FzSFRNTCIsImluZGVudCIsImNoaWxkTm9kZXNIVE1MIiwiaHRtbE5vZGUiLCJhc3NpZ25JbmRleGVzIiwiZGVsZXRlSW5kZXhlcyIsImZyb21Ob3RoaW5nIiwiTGluZUhUTUxOb2RlIiwiZnJvbU91dGVyTm9kZSIsIm91dGVyTm9kZSIsInRhZ05hbWUiLCJjbGFzc05hbWUiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBTXFCQTs7OzJEQUpJOzBCQUVvQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUU5QixJQUFBLEFBQU1BLGtDQUFOO2NBQU1BO2FBQUFBO2dDQUFBQTtlQUFOLGtCQUFNQTs7a0JBQUFBOztZQUNuQkMsS0FBQUE7bUJBQUFBLFNBQUFBLE1BQU1DLE9BQU87Z0JBQ1gsSUFBTSxBQUFFRCxRQUFVLElBQUksQ0FBQ0UsV0FBVyxDQUExQkY7Z0JBRVIsT0FBT0E7WUFDVDs7O1lBRUFHLEtBQUFBO21CQUFBQSxTQUFBQSxRQUFRRixPQUFPO2dCQUNiLElBQU1HLFlBQVksSUFBSSxDQUFDQyxXQUFXLENBQUNKLFVBQzdCRSxVQUFVQyxXQUFZLEdBQUc7Z0JBRS9CLE9BQU9EO1lBQ1Q7OztZQUVBRyxLQUFBQTttQkFBQUEsU0FBQUEsaUJBQWlCQyxNQUFNLEVBQUVOLE9BQU87Z0JBQzlCLElBQUlPO2dCQUVKLElBQU1DLFdBQVcsSUFBSSxFQUFHLEdBQUc7Z0JBRTNCQyxJQUFBQSx5QkFBYSxFQUFDRCxVQUFVUjtnQkFFeEJPLGlCQUFpQix1QkFyQkFULDhCQXFCTU8sb0JBQU4sSUFBSyxhQUFrQkMsUUFBUU47Z0JBRWhEVSxJQUFBQSx5QkFBYSxFQUFDVjtnQkFFZCxPQUFPTztZQUNUOzs7O1lBUU9JLEtBQUFBO21CQUFQLFNBQU9BO2dCQUFnQixPQUFPQyxhQUFZLENBQUNELFdBQVcsQ0FsQ25DYjtZQWtDd0Q7OztZQUVwRWUsS0FBQUE7bUJBQVAsU0FBT0EsY0FBY0MsU0FBUztnQkFBSSxPQUFPRixhQUFZLENBQUNDLGFBQWEsQ0FwQ2hEZixtQkFvQ29FZ0I7WUFBWTs7O1dBcENoRmhCO0VBQTBCYyxhQUFZO0FBNEJ6RCxpQkE1Qm1CZCxtQkE0QlpDLFNBQVE7QUFFZixpQkE5Qm1CRCxtQkE4QlppQixXQUFVO0FBRWpCLGlCQWhDbUJqQixtQkFnQ1prQixhQUFZIn0=