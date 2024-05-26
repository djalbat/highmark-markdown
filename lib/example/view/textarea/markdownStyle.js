"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return _default;
    }
});
var _easywithstyle = /*#__PURE__*/ _interop_require_default(require("easy-with-style"));
var _textarea = /*#__PURE__*/ _interop_require_default(require("../textarea"));
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
function _tagged_template_literal(strings, raw) {
    if (!raw) {
        raw = strings.slice(0);
    }
    return Object.freeze(Object.defineProperties(strings, {
        raw: {
            value: Object.freeze(raw)
        }
    }));
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
function _templateObject() {
    var data = _tagged_template_literal([
        "\n\n  width: 100%;\n  height: 24rem;\n  \n"
    ]);
    _templateObject = function _templateObject() {
        return data;
    };
    return data;
}
var MarkdownStyleTextarea = /*#__PURE__*/ function(Textarea) {
    _inherits(MarkdownStyleTextarea, Textarea);
    var _super = _create_super(MarkdownStyleTextarea);
    function MarkdownStyleTextarea() {
        _class_call_check(this, MarkdownStyleTextarea);
        return _super.apply(this, arguments);
    }
    _create_class(MarkdownStyleTextarea, [
        {
            key: "getMarkdownStyle",
            value: function getMarkdownStyle() {
                var value = this.getValue(), markdownStyle = value; ///
                return markdownStyle;
            }
        },
        {
            key: "setMarkdownStyle",
            value: function setMarkdownStyle(markdownStyle) {
                var value = markdownStyle; ///
                this.setValue(value);
            }
        },
        {
            key: "parentContext",
            value: function parentContext() {
                var getMarkdownStyle = this.getMarkdownStyle.bind(this), setMarkdownStyle = this.setMarkdownStyle.bind(this);
                return {
                    getMarkdownStyle: getMarkdownStyle,
                    setMarkdownStyle: setMarkdownStyle
                };
            }
        }
    ]);
    return MarkdownStyleTextarea;
}(_textarea.default);
_define_property(MarkdownStyleTextarea, "defaultProperties", {
    className: "markdown-style",
    spellCheck: "false"
});
var _default = (0, _easywithstyle.default)(MarkdownStyleTextarea)(_templateObject());

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9leGFtcGxlL3ZpZXcvdGV4dGFyZWEvbWFya2Rvd25TdHlsZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHdpdGhTdHlsZSBmcm9tIFwiZWFzeS13aXRoLXN0eWxlXCI7ICAvLy9cblxuaW1wb3J0IFRleHRhcmVhIGZyb20gXCIuLi90ZXh0YXJlYVwiO1xuXG5jbGFzcyBNYXJrZG93blN0eWxlVGV4dGFyZWEgZXh0ZW5kcyBUZXh0YXJlYSB7XG4gIGdldE1hcmtkb3duU3R5bGUoKSB7XG4gICAgY29uc3QgdmFsdWUgPSB0aGlzLmdldFZhbHVlKCksXG4gICAgICAgICAgbWFya2Rvd25TdHlsZSA9IHZhbHVlOyAvLy9cblxuICAgIHJldHVybiBtYXJrZG93blN0eWxlO1xuICB9XG5cbiAgc2V0TWFya2Rvd25TdHlsZShtYXJrZG93blN0eWxlKSB7XG4gICAgY29uc3QgdmFsdWUgPSBtYXJrZG93blN0eWxlOyAgLy8vXG5cbiAgICB0aGlzLnNldFZhbHVlKHZhbHVlKTtcbiAgfVxuXG4gIHBhcmVudENvbnRleHQoKSB7XG4gICAgY29uc3QgZ2V0TWFya2Rvd25TdHlsZSA9IHRoaXMuZ2V0TWFya2Rvd25TdHlsZS5iaW5kKHRoaXMpLFxuICAgICAgICAgIHNldE1hcmtkb3duU3R5bGUgPSB0aGlzLnNldE1hcmtkb3duU3R5bGUuYmluZCh0aGlzKTtcblxuICAgIHJldHVybiAoe1xuICAgICAgZ2V0TWFya2Rvd25TdHlsZSxcbiAgICAgIHNldE1hcmtkb3duU3R5bGVcbiAgICB9KTtcbiAgfVxuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcGVydGllcyA9IHtcbiAgICBjbGFzc05hbWU6IFwibWFya2Rvd24tc3R5bGVcIixcbiAgICBzcGVsbENoZWNrOiBcImZhbHNlXCJcbiAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgd2l0aFN0eWxlKE1hcmtkb3duU3R5bGVUZXh0YXJlYSlgXG5cbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMjRyZW07XG4gIFxuYDsiXSwibmFtZXMiOlsiTWFya2Rvd25TdHlsZVRleHRhcmVhIiwiZ2V0TWFya2Rvd25TdHlsZSIsInZhbHVlIiwiZ2V0VmFsdWUiLCJtYXJrZG93blN0eWxlIiwic2V0TWFya2Rvd25TdHlsZSIsInNldFZhbHVlIiwicGFyZW50Q29udGV4dCIsImJpbmQiLCJUZXh0YXJlYSIsImRlZmF1bHRQcm9wZXJ0aWVzIiwiY2xhc3NOYW1lIiwic3BlbGxDaGVjayIsIndpdGhTdHlsZSJdLCJyYW5nZU1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsiLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBb0NBOzs7ZUFBQTs7O29FQWxDc0I7K0RBRUQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVyQixJQUFBLEFBQU1BLHNDQUFELEFBQUw7Y0FBTUE7K0JBQUFBO2FBQUFBO2dDQUFBQTs7O2tCQUFBQTs7WUFDSkMsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQU1DLFFBQVEsSUFBSSxDQUFDQyxRQUFRLElBQ3JCQyxnQkFBZ0JGLE9BQU8sR0FBRztnQkFFaEMsT0FBT0U7WUFDVDs7O1lBRUFDLEtBQUFBO21CQUFBQSxTQUFBQSxpQkFBaUJELGFBQWE7Z0JBQzVCLElBQU1GLFFBQVFFLGVBQWdCLEdBQUc7Z0JBRWpDLElBQUksQ0FBQ0UsUUFBUSxDQUFDSjtZQUNoQjs7O1lBRUFLLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFNTixtQkFBbUIsSUFBSSxDQUFDQSxnQkFBZ0IsQ0FBQ08sSUFBSSxDQUFDLElBQUksR0FDbERILG1CQUFtQixJQUFJLENBQUNBLGdCQUFnQixDQUFDRyxJQUFJLENBQUMsSUFBSTtnQkFFeEQsT0FBUTtvQkFDTlAsa0JBQUFBO29CQUNBSSxrQkFBQUE7Z0JBQ0Y7WUFDRjs7O1dBdEJJTDtFQUE4QlMsaUJBQVE7QUF3QjFDLGlCQXhCSVQsdUJBd0JHVSxxQkFBb0I7SUFDekJDLFdBQVc7SUFDWEMsWUFBWTtBQUNkO0lBR0YsV0FBZUMsSUFBQUEsc0JBQVMsRUFBQ2IifQ==