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
var _preview = /*#__PURE__*/ _interop_require_default(require("../../div/preview"));
var _container = /*#__PURE__*/ _interop_require_default(require("../../div/container"));
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
function _object_spread(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = arguments[i] != null ? arguments[i] : {};
        var ownKeys = Object.keys(source);
        if (typeof Object.getOwnPropertySymbols === "function") {
            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
                return Object.getOwnPropertyDescriptor(source, sym).enumerable;
            }));
        }
        ownKeys.forEach(function(key) {
            _define_property(target, key, source[key]);
        });
    }
    return target;
}
function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        if (enumerableOnly) {
            symbols = symbols.filter(function(sym) {
                return Object.getOwnPropertyDescriptor(object, sym).enumerable;
            });
        }
        keys.push.apply(keys, symbols);
    }
    return keys;
}
function _object_spread_props(target, source) {
    source = source != null ? source : {};
    if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
        ownKeys(Object(source)).forEach(function(key) {
            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
    }
    return target;
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
        "\n  \n  height: 56rem;\n  padding: 0;\n  position: relative;\n  \n"
    ]);
    _templateObject = function _templateObject() {
        return data;
    };
    return data;
}
var PreviewContainerDiv = /*#__PURE__*/ function(ContainerDiv) {
    _inherits(PreviewContainerDiv, ContainerDiv);
    var _super = _create_super(PreviewContainerDiv);
    function PreviewContainerDiv() {
        _class_call_check(this, PreviewContainerDiv);
        return _super.apply(this, arguments);
    }
    _create_class(PreviewContainerDiv, [
        {
            key: "childElements",
            value: function childElements() {
                var onCustomPageUpdate = this.properties.onCustomPageUpdate, pageUpdateCustomHandler = onCustomPageUpdate; ///
                return [
                    /*#__PURE__*/ React.createElement(_preview.default, {
                        onCustomPageUpdate: pageUpdateCustomHandler
                    })
                ];
            }
        },
        {
            key: "parentContext",
            value: function parentContext() {
                var context = this.getContext(), showPreviewContainerDiv = this.show.bind(this), hidePreviewContainerDiv = this.hide.bind(this); ///
                return _object_spread_props(_object_spread({}, context), {
                    showPreviewContainerDiv: showPreviewContainerDiv,
                    hidePreviewContainerDiv: hidePreviewContainerDiv
                });
            }
        }
    ]);
    return PreviewContainerDiv;
}(_container.default);
_define_property(PreviewContainerDiv, "ignoredProperties", [
    "onCustomPageUpdate"
]);
var _default = (0, _easywithstyle.default)(PreviewContainerDiv)(_templateObject());

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9leGFtcGxlL3ZpZXcvZGl2L2NvbnRhaW5lci9wcmV2aWV3LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgd2l0aFN0eWxlIGZyb20gXCJlYXN5LXdpdGgtc3R5bGVcIjsgIC8vL1xuXG5pbXBvcnQgUHJldmlld0RpdiBmcm9tIFwiLi4vLi4vZGl2L3ByZXZpZXdcIjtcbmltcG9ydCBDb250YWluZXJEaXYgZnJvbSBcIi4uLy4uL2Rpdi9jb250YWluZXJcIjtcblxuY2xhc3MgUHJldmlld0NvbnRhaW5lckRpdiBleHRlbmRzIENvbnRhaW5lckRpdiB7XG4gIGNoaWxkRWxlbWVudHMoKSB7XG4gICAgY29uc3QgeyBvbkN1c3RvbVBhZ2VVcGRhdGUgfSA9IHRoaXMucHJvcGVydGllcyxcbiAgICAgICAgICBwYWdlVXBkYXRlQ3VzdG9tSGFuZGxlciA9IG9uQ3VzdG9tUGFnZVVwZGF0ZTsgLy8vXG5cbiAgICByZXR1cm4gKFtcblxuICAgICAgPFByZXZpZXdEaXYgb25DdXN0b21QYWdlVXBkYXRlPXtwYWdlVXBkYXRlQ3VzdG9tSGFuZGxlcn0gLz5cblxuICAgIF0pO1xuICB9XG5cbiAgcGFyZW50Q29udGV4dCgpIHtcbiAgICBjb25zdCBjb250ZXh0ID0gdGhpcy5nZXRDb250ZXh0KCksXG4gICAgICAgICAgc2hvd1ByZXZpZXdDb250YWluZXJEaXYgPSB0aGlzLnNob3cuYmluZCh0aGlzKSwgIC8vL1xuICAgICAgICAgIGhpZGVQcmV2aWV3Q29udGFpbmVyRGl2ID0gdGhpcy5oaWRlLmJpbmQodGhpcyk7ICAvLy9cblxuICAgIHJldHVybiAoe1xuICAgICAgLi4uY29udGV4dCxcbiAgICAgIHNob3dQcmV2aWV3Q29udGFpbmVyRGl2LFxuICAgICAgaGlkZVByZXZpZXdDb250YWluZXJEaXZcbiAgICB9KTtcbiAgfVxuXG4gIHN0YXRpYyBpZ25vcmVkUHJvcGVydGllcyA9IFtcbiAgICBcIm9uQ3VzdG9tUGFnZVVwZGF0ZVwiXG4gIF07XG59XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhTdHlsZShQcmV2aWV3Q29udGFpbmVyRGl2KWBcbiAgXG4gIGhlaWdodDogNTZyZW07XG4gIHBhZGRpbmc6IDA7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgXG5gO1xuIl0sIm5hbWVzIjpbIlByZXZpZXdDb250YWluZXJEaXYiLCJjaGlsZEVsZW1lbnRzIiwib25DdXN0b21QYWdlVXBkYXRlIiwicHJvcGVydGllcyIsInBhZ2VVcGRhdGVDdXN0b21IYW5kbGVyIiwiUHJldmlld0RpdiIsInBhcmVudENvbnRleHQiLCJjb250ZXh0IiwiZ2V0Q29udGV4dCIsInNob3dQcmV2aWV3Q29udGFpbmVyRGl2Iiwic2hvdyIsImJpbmQiLCJoaWRlUHJldmlld0NvbnRhaW5lckRpdiIsImhpZGUiLCJDb250YWluZXJEaXYiLCJpZ25vcmVkUHJvcGVydGllcyIsIndpdGhTdHlsZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBb0NBOzs7ZUFBQTs7O29FQWxDc0I7OERBRUM7Z0VBQ0U7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUV6QixJQUFBLEFBQU1BLG9DQUFELEFBQUw7Y0FBTUE7K0JBQUFBO2FBQUFBO2dDQUFBQTs7O2tCQUFBQTs7WUFDSkMsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQU0sQUFBRUMscUJBQXVCLElBQUksQ0FBQ0MsVUFBVSxDQUF0Q0Qsb0JBQ0ZFLDBCQUEwQkYsb0JBQW9CLEdBQUc7Z0JBRXZELE9BQVE7a0NBRU4sb0JBQUNHLGdCQUFVO3dCQUFDSCxvQkFBb0JFOztpQkFFakM7WUFDSDs7O1lBRUFFLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFNQyxVQUFVLElBQUksQ0FBQ0MsVUFBVSxJQUN6QkMsMEJBQTBCLElBQUksQ0FBQ0MsSUFBSSxDQUFDQyxJQUFJLENBQUMsSUFBSSxHQUM3Q0MsMEJBQTBCLElBQUksQ0FBQ0MsSUFBSSxDQUFDRixJQUFJLENBQUMsSUFBSSxHQUFJLEdBQUc7Z0JBRTFELE9BQVEsd0NBQ0hKO29CQUNIRSx5QkFBQUE7b0JBQ0FHLHlCQUFBQTs7WUFFSjs7O1dBdEJJWjtFQUE0QmMsa0JBQVk7QUF3QjVDLGlCQXhCSWQscUJBd0JHZSxxQkFBb0I7SUFDekI7Q0FDRDtJQUdILFdBQWVDLElBQUFBLHNCQUFTLEVBQUNoQiJ9