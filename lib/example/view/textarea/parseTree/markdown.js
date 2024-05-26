"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return MarkdownParseTreeTextarea;
    }
});
var _parseTree = /*#__PURE__*/ _interop_require_default(require("../../textarea/parseTree"));
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
var MarkdownParseTreeTextarea = /*#__PURE__*/ function(ParseTreeTextarea) {
    _inherits(MarkdownParseTreeTextarea, ParseTreeTextarea);
    var _super = _create_super(MarkdownParseTreeTextarea);
    function MarkdownParseTreeTextarea() {
        _class_call_check(this, MarkdownParseTreeTextarea);
        return _super.apply(this, arguments);
    }
    _create_class(MarkdownParseTreeTextarea, [
        {
            key: "parentContext",
            value: function parentContext() {
                var clearMarkdownParseTreeTextarea = this.clear.bind(this), updateMarkdownParseTreeTextarea = this.update.bind(this); ///
                return {
                    clearMarkdownParseTreeTextarea: clearMarkdownParseTreeTextarea,
                    updateMarkdownParseTreeTextarea: updateMarkdownParseTreeTextarea
                };
            }
        }
    ]);
    return MarkdownParseTreeTextarea;
}(_parseTree.default);
_define_property(MarkdownParseTreeTextarea, "defaultProperties", {
    className: "markdown"
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9leGFtcGxlL3ZpZXcvdGV4dGFyZWEvcGFyc2VUcmVlL21hcmtkb3duLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgUGFyc2VUcmVlVGV4dGFyZWEgZnJvbSBcIi4uLy4uL3RleHRhcmVhL3BhcnNlVHJlZVwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNYXJrZG93blBhcnNlVHJlZVRleHRhcmVhIGV4dGVuZHMgUGFyc2VUcmVlVGV4dGFyZWEge1xuICBwYXJlbnRDb250ZXh0KCkge1xuICAgIGNvbnN0IGNsZWFyTWFya2Rvd25QYXJzZVRyZWVUZXh0YXJlYSA9IHRoaXMuY2xlYXIuYmluZCh0aGlzKSwgLy8vXG4gICAgICAgICAgdXBkYXRlTWFya2Rvd25QYXJzZVRyZWVUZXh0YXJlYSA9IHRoaXMudXBkYXRlLmJpbmQodGhpcyk7IC8vL1xuXG4gICAgcmV0dXJuICh7XG4gICAgICBjbGVhck1hcmtkb3duUGFyc2VUcmVlVGV4dGFyZWEsXG4gICAgICB1cGRhdGVNYXJrZG93blBhcnNlVHJlZVRleHRhcmVhXG4gICAgfSk7XG4gIH1cblxuICBzdGF0aWMgZGVmYXVsdFByb3BlcnRpZXMgPSB7XG4gICAgY2xhc3NOYW1lOiBcIm1hcmtkb3duXCJcbiAgfTtcbn07XG4iXSwibmFtZXMiOlsiTWFya2Rvd25QYXJzZVRyZWVUZXh0YXJlYSIsInBhcmVudENvbnRleHQiLCJjbGVhck1hcmtkb3duUGFyc2VUcmVlVGV4dGFyZWEiLCJjbGVhciIsImJpbmQiLCJ1cGRhdGVNYXJrZG93blBhcnNlVHJlZVRleHRhcmVhIiwidXBkYXRlIiwiUGFyc2VUcmVlVGV4dGFyZWEiLCJkZWZhdWx0UHJvcGVydGllcyIsImNsYXNzTmFtZSJdLCJyYW5nZU1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsiLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFJcUJBOzs7Z0VBRlM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRWYsSUFBQSxBQUFNQSwwQ0FBRCxBQUFMO2NBQU1BOytCQUFBQTthQUFBQTtnQ0FBQUE7OztrQkFBQUE7O1lBQ25CQyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBTUMsaUNBQWlDLElBQUksQ0FBQ0MsS0FBSyxDQUFDQyxJQUFJLENBQUMsSUFBSSxHQUNyREMsa0NBQWtDLElBQUksQ0FBQ0MsTUFBTSxDQUFDRixJQUFJLENBQUMsSUFBSSxHQUFHLEdBQUc7Z0JBRW5FLE9BQVE7b0JBQ05GLGdDQUFBQTtvQkFDQUcsaUNBQUFBO2dCQUNGO1lBQ0Y7OztXQVRtQkw7RUFBa0NPLGtCQUFpQjtBQVd0RSxpQkFYbUJQLDJCQVdaUSxxQkFBb0I7SUFDekJDLFdBQVc7QUFDYiJ9