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
_define_property(BlockLineHTMLNode, "lines", 1);
_define_property(BlockLineHTMLNode, "tagName", "span");
_define_property(BlockLineHTMLNode, "className", "block-line");

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9ub2RlL2h0bWwvbGluZS9ibG9jay5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IExpbmVIVE1MTm9kZSBmcm9tIFwiLi4vLi4vLi4vbm9kZS9odG1sL2xpbmVcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQmxvY2tMaW5lSFRNTE5vZGUgZXh0ZW5kcyBMaW5lSFRNTE5vZGUge1xuICBsaW5lcyhjb250ZXh0KSB7XG4gICAgY29uc3QgeyBsaW5lcyB9ID0gdGhpcy5jb25zdHJ1Y3RvcjtcblxuICAgIHJldHVybiBsaW5lcztcbiAgfVxuXG4gIHN0YXRpYyBsaW5lcyA9IDE7XG5cbiAgc3RhdGljIHRhZ05hbWUgPSBcInNwYW5cIjtcblxuICBzdGF0aWMgY2xhc3NOYW1lID0gXCJibG9jay1saW5lXCI7XG5cbiAgc3RhdGljIGZyb21Ob3RoaW5nKCkgeyByZXR1cm4gTGluZUhUTUxOb2RlLmZyb21Ob3RoaW5nKEJsb2NrTGluZUhUTUxOb2RlKTsgfVxuXG4gIHN0YXRpYyBmcm9tT3V0ZXJOb2RlKG91dGVyTm9kZSkgeyByZXR1cm4gTGluZUhUTUxOb2RlLmZyb21PdXRlck5vZGUoQmxvY2tMaW5lSFRNTE5vZGUsIG91dGVyTm9kZSk7IH1cbn1cbiJdLCJuYW1lcyI6WyJCbG9ja0xpbmVIVE1MTm9kZSIsImxpbmVzIiwiY29udGV4dCIsImZyb21Ob3RoaW5nIiwiTGluZUhUTUxOb2RlIiwiZnJvbU91dGVyTm9kZSIsIm91dGVyTm9kZSIsInRhZ05hbWUiLCJjbGFzc05hbWUiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBSXFCQTs7OzJEQUZJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVWLElBQUEsQUFBTUEsa0NBQU47Y0FBTUE7YUFBQUE7Z0NBQUFBO1FBQU4sT0FBQSxrQkFBTUE7O2tCQUFBQTs7WUFDbkJDLEtBQUFBO21CQUFBQSxTQUFBQSxNQUFNQyxPQUFPO2dCQUNYLElBQU0sQUFBRUQsUUFBVSxJQUFJLENBQUMsV0FBVyxDQUExQkE7Z0JBRVIsT0FBT0E7WUFDVDs7OztZQVFPRSxLQUFBQTttQkFBUCxTQUFPQTtnQkFBZ0IsT0FBT0MsYUFBWSxDQUFDRCxXQUFXLENBYm5DSDtZQWF3RDs7O1lBRXBFSyxLQUFBQTttQkFBUCxTQUFPQSxjQUFjQyxTQUFTO2dCQUFJLE9BQU9GLGFBQVksQ0FBQ0MsYUFBYSxDQWZoREwsbUJBZW9FTTtZQUFZOzs7V0FmaEZOO0VBQTBCSSxhQUFZO0FBT3pELGlCQVBtQkosbUJBT1pDLFNBQVE7QUFFZixpQkFUbUJELG1CQVNaTyxXQUFVO0FBRWpCLGlCQVhtQlAsbUJBV1pRLGFBQVkifQ==