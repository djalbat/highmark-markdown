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
var _easy = require("easy");
var _pageButtons = /*#__PURE__*/ _interop_require_default(require("../div/pageButtons"));
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
function _construct(Parent, args, Class) {
    if (_is_native_reflect_construct()) {
        _construct = Reflect.construct;
    } else {
        _construct = function construct(Parent, args, Class) {
            var a = [
                null
            ];
            a.push.apply(a, args);
            var Constructor = Function.bind.apply(Parent, a);
            var instance = new Constructor();
            if (Class) _set_prototype_of(instance, Class.prototype);
            return instance;
        };
    }
    return _construct.apply(null, arguments);
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
function _is_native_function(fn) {
    return Function.toString.call(fn).indexOf("[native code]") !== -1;
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
function _wrap_native_super(Class) {
    var _cache = typeof Map === "function" ? new Map() : undefined;
    _wrap_native_super = function wrapNativeSuper(Class) {
        if (Class === null || !_is_native_function(Class)) return Class;
        if (typeof Class !== "function") {
            throw new TypeError("Super expression must either be null or a function");
        }
        if (typeof _cache !== "undefined") {
            if (_cache.has(Class)) return _cache.get(Class);
            _cache.set(Class, Wrapper);
        }
        function Wrapper() {
            return _construct(Class, arguments, _get_prototype_of(this).constructor);
        }
        Wrapper.prototype = Object.create(Class.prototype, {
            constructor: {
                value: Wrapper,
                enumerable: false,
                writable: true,
                configurable: true
            }
        });
        return _set_prototype_of(Wrapper, Class);
    };
    return _wrap_native_super(Class);
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
        "\n\n  height: 48rem;\n  border: 1px solid darkgrey;\n  overflow: scroll;\n  position: relative;\n  \n"
    ]);
    _templateObject = function _templateObject() {
        return data;
    };
    return data;
}
var PreviewDiv = /*#__PURE__*/ function(Element) {
    _inherits(PreviewDiv, Element);
    var _super = _create_super(PreviewDiv);
    function PreviewDiv() {
        _class_call_check(this, PreviewDiv);
        return _super.apply(this, arguments);
    }
    _create_class(PreviewDiv, [
        {
            key: "getParentDOMElement",
            value: function getParentDOMElement() {
                var domElement = this.getDOMElement(), parentDOMElement = domElement; ///
                return parentDOMElement;
            }
        },
        {
            key: "clear",
            value: function clear() {
                var markdownNode;
                markdownNode = this.getMarkdownNode();
                if (markdownNode !== null) {
                    var parentDOMElement = this.getParentDOMElement();
                    markdownNode.unmount(parentDOMElement);
                    markdownNode = null;
                    this.setMarkdownNode(markdownNode);
                }
            }
        },
        {
            key: "update",
            value: function update(markdownNode, context) {
                this.clear();
                var parentDOMElement = this.getParentDOMElement(), siblingDOMElement = null;
                markdownNode.mount(parentDOMElement, siblingDOMElement, context);
                this.setMarkdownNode(markdownNode);
            }
        },
        {
            key: "getMarkdownNode",
            value: function getMarkdownNode() {
                var markdownNode = this.getState().markdownNode;
                return markdownNode;
            }
        },
        {
            key: "setMarkdownNode",
            value: function setMarkdownNode(markdownNode) {
                this.updateState({
                    markdownNode: markdownNode
                });
            }
        },
        {
            key: "setInitialState",
            value: function setInitialState() {
                var markdownNode = null;
                this.setState({
                    markdownNode: markdownNode
                });
            }
        },
        {
            key: "childElements",
            value: function childElements() {
                var onCustomPageUpdate = this.properties.onCustomPageUpdate, pageUpdateCustomHandler = onCustomPageUpdate; ///
                return /*#__PURE__*/ React.createElement(_pageButtons.default, {
                    onCustomPageUpdate: pageUpdateCustomHandler
                });
            }
        },
        {
            key: "parentContext",
            value: function parentContext() {
                var context = this.getContext(), clearPreviewDiv = this.clear.bind(this), updatePreviewDiv = this.update.bind(this); ///
                return _object_spread_props(_object_spread({}, context), {
                    clearPreviewDiv: clearPreviewDiv,
                    updatePreviewDiv: updatePreviewDiv
                });
            }
        },
        {
            key: "initialise",
            value: function initialise() {
                this.setInitialState();
            }
        }
    ]);
    return PreviewDiv;
}(_wrap_native_super(_easy.Element));
_define_property(PreviewDiv, "tagName", "div");
_define_property(PreviewDiv, "ignoredProperties", [
    "onCustomPageUpdate"
]);
_define_property(PreviewDiv, "defaultProperties", {
    className: "preview"
});
var _default = (0, _easywithstyle.default)(PreviewDiv)(_templateObject());

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9leGFtcGxlL3ZpZXcvZGl2L3ByZXZpZXcuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB3aXRoU3R5bGUgZnJvbSBcImVhc3ktd2l0aC1zdHlsZVwiOyAgLy8vXG5cbmltcG9ydCB7IEVsZW1lbnQgfSBmcm9tIFwiZWFzeVwiO1xuXG5pbXBvcnQgUGFnZUJ1dHRvbnNEaXYgZnJvbSBcIi4uL2Rpdi9wYWdlQnV0dG9uc1wiO1xuXG5jbGFzcyBQcmV2aWV3RGl2IGV4dGVuZHMgRWxlbWVudCB7XG4gIGdldFBhcmVudERPTUVsZW1lbnQoKSB7XG4gICAgY29uc3QgZG9tRWxlbWVudCA9IHRoaXMuZ2V0RE9NRWxlbWVudCgpLFxuICAgICAgICAgIHBhcmVudERPTUVsZW1lbnQgPSBkb21FbGVtZW50OyAgLy8vXG5cbiAgICByZXR1cm4gcGFyZW50RE9NRWxlbWVudDtcbiAgfVxuXG4gIGNsZWFyKCkge1xuICAgIGxldCBtYXJrZG93bk5vZGU7XG5cbiAgICBtYXJrZG93bk5vZGUgPSB0aGlzLmdldE1hcmtkb3duTm9kZSgpO1xuXG4gICAgaWYgKG1hcmtkb3duTm9kZSAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgcGFyZW50RE9NRWxlbWVudCA9IHRoaXMuZ2V0UGFyZW50RE9NRWxlbWVudCgpO1xuXG4gICAgICBtYXJrZG93bk5vZGUudW5tb3VudChwYXJlbnRET01FbGVtZW50KTtcblxuICAgICAgbWFya2Rvd25Ob2RlID0gbnVsbDtcblxuICAgICAgdGhpcy5zZXRNYXJrZG93bk5vZGUobWFya2Rvd25Ob2RlKTtcbiAgICB9XG4gIH1cblxuICB1cGRhdGUobWFya2Rvd25Ob2RlLCBjb250ZXh0KSB7XG4gICAgdGhpcy5jbGVhcigpO1xuXG4gICAgY29uc3QgcGFyZW50RE9NRWxlbWVudCA9IHRoaXMuZ2V0UGFyZW50RE9NRWxlbWVudCgpLFxuICAgICAgICAgIHNpYmxpbmdET01FbGVtZW50ID0gbnVsbDtcblxuICAgIG1hcmtkb3duTm9kZS5tb3VudChwYXJlbnRET01FbGVtZW50LCBzaWJsaW5nRE9NRWxlbWVudCwgY29udGV4dCk7XG5cbiAgICB0aGlzLnNldE1hcmtkb3duTm9kZShtYXJrZG93bk5vZGUpO1xuICB9XG5cbiAgZ2V0TWFya2Rvd25Ob2RlKCkge1xuICAgIGNvbnN0IHsgbWFya2Rvd25Ob2RlIH0gPSB0aGlzLmdldFN0YXRlKCk7XG5cbiAgICByZXR1cm4gbWFya2Rvd25Ob2RlO1xuICB9XG5cbiAgc2V0TWFya2Rvd25Ob2RlKG1hcmtkb3duTm9kZSkge1xuICAgIHRoaXMudXBkYXRlU3RhdGUoe1xuICAgICAgbWFya2Rvd25Ob2RlXG4gICAgfSk7XG4gIH1cblxuICBzZXRJbml0aWFsU3RhdGUoKSB7XG4gICAgY29uc3QgbWFya2Rvd25Ob2RlID0gbnVsbDtcblxuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgbWFya2Rvd25Ob2RlXG4gICAgfSk7XG4gIH1cblxuICBjaGlsZEVsZW1lbnRzKCkge1xuICAgIGNvbnN0IHsgb25DdXN0b21QYWdlVXBkYXRlIH0gPSB0aGlzLnByb3BlcnRpZXMsXG4gICAgICAgICAgcGFnZVVwZGF0ZUN1c3RvbUhhbmRsZXIgPSBvbkN1c3RvbVBhZ2VVcGRhdGU7IC8vL1xuXG4gICAgcmV0dXJuIChcblxuICAgICAgPFBhZ2VCdXR0b25zRGl2IG9uQ3VzdG9tUGFnZVVwZGF0ZT17cGFnZVVwZGF0ZUN1c3RvbUhhbmRsZXJ9IC8+XG5cbiAgICApO1xuICB9XG5cbiAgcGFyZW50Q29udGV4dCgpIHtcbiAgICBjb25zdCBjb250ZXh0ID0gdGhpcy5nZXRDb250ZXh0KCksXG4gICAgICAgICAgY2xlYXJQcmV2aWV3RGl2ID0gdGhpcy5jbGVhci5iaW5kKHRoaXMpLCAvLy9cbiAgICAgICAgICB1cGRhdGVQcmV2aWV3RGl2ID0gdGhpcy51cGRhdGUuYmluZCh0aGlzKTsgIC8vL1xuXG4gICAgcmV0dXJuICh7XG4gICAgICAuLi5jb250ZXh0LFxuICAgICAgY2xlYXJQcmV2aWV3RGl2LFxuICAgICAgdXBkYXRlUHJldmlld0RpdlxuICAgIH0pO1xuICB9XG5cbiAgaW5pdGlhbGlzZSgpIHtcbiAgICB0aGlzLnNldEluaXRpYWxTdGF0ZSgpO1xuICB9XG5cbiAgc3RhdGljIHRhZ05hbWUgPSBcImRpdlwiO1xuXG4gIHN0YXRpYyBpZ25vcmVkUHJvcGVydGllcyA9IFtcbiAgICBcIm9uQ3VzdG9tUGFnZVVwZGF0ZVwiXG4gIF07XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wZXJ0aWVzID0ge1xuICAgIGNsYXNzTmFtZTogXCJwcmV2aWV3XCJcbiAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgd2l0aFN0eWxlKFByZXZpZXdEaXYpYFxuXG4gIGhlaWdodDogNDhyZW07XG4gIGJvcmRlcjogMXB4IHNvbGlkIGRhcmtncmV5O1xuICBvdmVyZmxvdzogc2Nyb2xsO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIFxuYDtcbiJdLCJuYW1lcyI6WyJQcmV2aWV3RGl2IiwiZ2V0UGFyZW50RE9NRWxlbWVudCIsImRvbUVsZW1lbnQiLCJnZXRET01FbGVtZW50IiwicGFyZW50RE9NRWxlbWVudCIsImNsZWFyIiwibWFya2Rvd25Ob2RlIiwiZ2V0TWFya2Rvd25Ob2RlIiwidW5tb3VudCIsInNldE1hcmtkb3duTm9kZSIsInVwZGF0ZSIsImNvbnRleHQiLCJzaWJsaW5nRE9NRWxlbWVudCIsIm1vdW50IiwiZ2V0U3RhdGUiLCJ1cGRhdGVTdGF0ZSIsInNldEluaXRpYWxTdGF0ZSIsInNldFN0YXRlIiwiY2hpbGRFbGVtZW50cyIsIm9uQ3VzdG9tUGFnZVVwZGF0ZSIsInByb3BlcnRpZXMiLCJwYWdlVXBkYXRlQ3VzdG9tSGFuZGxlciIsIlBhZ2VCdXR0b25zRGl2IiwicGFyZW50Q29udGV4dCIsImdldENvbnRleHQiLCJjbGVhclByZXZpZXdEaXYiLCJiaW5kIiwidXBkYXRlUHJldmlld0RpdiIsImluaXRpYWxpc2UiLCJFbGVtZW50IiwidGFnTmFtZSIsImlnbm9yZWRQcm9wZXJ0aWVzIiwiZGVmYXVsdFByb3BlcnRpZXMiLCJjbGFzc05hbWUiLCJ3aXRoU3R5bGUiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQXFHQTs7O2VBQUE7OztvRUFuR3NCO29CQUVFO2tFQUVHOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRTNCLElBQUEsQUFBTUEsMkJBQUQsQUFBTDtjQUFNQTsrQkFBQUE7YUFBQUE7Z0NBQUFBOzs7a0JBQUFBOztZQUNKQyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBTUMsYUFBYSxJQUFJLENBQUNDLGFBQWEsSUFDL0JDLG1CQUFtQkYsWUFBYSxHQUFHO2dCQUV6QyxPQUFPRTtZQUNUOzs7WUFFQUMsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQUlDO2dCQUVKQSxlQUFlLElBQUksQ0FBQ0MsZUFBZTtnQkFFbkMsSUFBSUQsaUJBQWlCLE1BQU07b0JBQ3pCLElBQU1GLG1CQUFtQixJQUFJLENBQUNILG1CQUFtQjtvQkFFakRLLGFBQWFFLE9BQU8sQ0FBQ0o7b0JBRXJCRSxlQUFlO29CQUVmLElBQUksQ0FBQ0csZUFBZSxDQUFDSDtnQkFDdkI7WUFDRjs7O1lBRUFJLEtBQUFBO21CQUFBQSxTQUFBQSxPQUFPSixZQUFZLEVBQUVLLE9BQU87Z0JBQzFCLElBQUksQ0FBQ04sS0FBSztnQkFFVixJQUFNRCxtQkFBbUIsSUFBSSxDQUFDSCxtQkFBbUIsSUFDM0NXLG9CQUFvQjtnQkFFMUJOLGFBQWFPLEtBQUssQ0FBQ1Qsa0JBQWtCUSxtQkFBbUJEO2dCQUV4RCxJQUFJLENBQUNGLGVBQWUsQ0FBQ0g7WUFDdkI7OztZQUVBQyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBTSxBQUFFRCxlQUFpQixJQUFJLENBQUNRLFFBQVEsR0FBOUJSO2dCQUVSLE9BQU9BO1lBQ1Q7OztZQUVBRyxLQUFBQTttQkFBQUEsU0FBQUEsZ0JBQWdCSCxZQUFZO2dCQUMxQixJQUFJLENBQUNTLFdBQVcsQ0FBQztvQkFDZlQsY0FBQUE7Z0JBQ0Y7WUFDRjs7O1lBRUFVLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFNVixlQUFlO2dCQUVyQixJQUFJLENBQUNXLFFBQVEsQ0FBQztvQkFDWlgsY0FBQUE7Z0JBQ0Y7WUFDRjs7O1lBRUFZLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFNLEFBQUVDLHFCQUF1QixJQUFJLENBQUNDLFVBQVUsQ0FBdENELG9CQUNGRSwwQkFBMEJGLG9CQUFvQixHQUFHO2dCQUV2RCxxQkFFRSxvQkFBQ0csb0JBQWM7b0JBQUNILG9CQUFvQkU7O1lBR3hDOzs7WUFFQUUsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQU1aLFVBQVUsSUFBSSxDQUFDYSxVQUFVLElBQ3pCQyxrQkFBa0IsSUFBSSxDQUFDcEIsS0FBSyxDQUFDcUIsSUFBSSxDQUFDLElBQUksR0FDdENDLG1CQUFtQixJQUFJLENBQUNqQixNQUFNLENBQUNnQixJQUFJLENBQUMsSUFBSSxHQUFJLEdBQUc7Z0JBRXJELE9BQVEsd0NBQ0hmO29CQUNIYyxpQkFBQUE7b0JBQ0FFLGtCQUFBQTs7WUFFSjs7O1lBRUFDLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFJLENBQUNaLGVBQWU7WUFDdEI7OztXQWhGSWhCO3FCQUFtQjZCLGFBQU87QUFrRjlCLGlCQWxGSTdCLFlBa0ZHOEIsV0FBVTtBQUVqQixpQkFwRkk5QixZQW9GRytCLHFCQUFvQjtJQUN6QjtDQUNEO0FBRUQsaUJBeEZJL0IsWUF3RkdnQyxxQkFBb0I7SUFDekJDLFdBQVc7QUFDYjtJQUdGLFdBQWVDLElBQUFBLHNCQUFTLEVBQUNsQyJ9