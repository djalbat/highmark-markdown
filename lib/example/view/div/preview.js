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
function _call_super(_this, derived, args) {
    derived = _get_prototype_of(derived);
    return _possible_constructor_return(_this, _is_native_reflect_construct() ? Reflect.construct(derived, args || [], _get_prototype_of(_this).constructor) : derived.apply(_this, args));
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
    try {
        var result = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
    } catch (_) {}
    return (_is_native_reflect_construct = function() {
        return !!result;
    })();
}
function _templateObject() {
    var data = _tagged_template_literal([
        "\n\n  height: 100%;\n  overflow: scroll;\n  position: relative;\n  \n"
    ]);
    _templateObject = function _templateObject() {
        return data;
    };
    return data;
}
var PreviewDiv = /*#__PURE__*/ function(Element) {
    _inherits(PreviewDiv, Element);
    function PreviewDiv() {
        _class_call_check(this, PreviewDiv);
        return _call_super(this, PreviewDiv, arguments);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9leGFtcGxlL3ZpZXcvZGl2L3ByZXZpZXcuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB3aXRoU3R5bGUgZnJvbSBcImVhc3ktd2l0aC1zdHlsZVwiOyAgLy8vXG5cbmltcG9ydCB7IEVsZW1lbnQgfSBmcm9tIFwiZWFzeVwiO1xuXG5pbXBvcnQgUGFnZUJ1dHRvbnNEaXYgZnJvbSBcIi4uL2Rpdi9wYWdlQnV0dG9uc1wiO1xuXG5jbGFzcyBQcmV2aWV3RGl2IGV4dGVuZHMgRWxlbWVudCB7XG4gIGdldFBhcmVudERPTUVsZW1lbnQoKSB7XG4gICAgY29uc3QgZG9tRWxlbWVudCA9IHRoaXMuZ2V0RE9NRWxlbWVudCgpLFxuICAgICAgICAgIHBhcmVudERPTUVsZW1lbnQgPSBkb21FbGVtZW50OyAgLy8vXG5cbiAgICByZXR1cm4gcGFyZW50RE9NRWxlbWVudDtcbiAgfVxuXG4gIGNsZWFyKCkge1xuICAgIGxldCBtYXJrZG93bk5vZGU7XG5cbiAgICBtYXJrZG93bk5vZGUgPSB0aGlzLmdldE1hcmtkb3duTm9kZSgpO1xuXG4gICAgaWYgKG1hcmtkb3duTm9kZSAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgcGFyZW50RE9NRWxlbWVudCA9IHRoaXMuZ2V0UGFyZW50RE9NRWxlbWVudCgpO1xuXG4gICAgICBtYXJrZG93bk5vZGUudW5tb3VudChwYXJlbnRET01FbGVtZW50KTtcblxuICAgICAgbWFya2Rvd25Ob2RlID0gbnVsbDtcblxuICAgICAgdGhpcy5zZXRNYXJrZG93bk5vZGUobWFya2Rvd25Ob2RlKTtcbiAgICB9XG4gIH1cblxuICB1cGRhdGUobWFya2Rvd25Ob2RlLCBjb250ZXh0KSB7XG4gICAgdGhpcy5jbGVhcigpO1xuXG4gICAgY29uc3QgcGFyZW50RE9NRWxlbWVudCA9IHRoaXMuZ2V0UGFyZW50RE9NRWxlbWVudCgpLFxuICAgICAgICAgIHNpYmxpbmdET01FbGVtZW50ID0gbnVsbDtcblxuICAgIG1hcmtkb3duTm9kZS5tb3VudChwYXJlbnRET01FbGVtZW50LCBzaWJsaW5nRE9NRWxlbWVudCwgY29udGV4dCk7XG5cbiAgICB0aGlzLnNldE1hcmtkb3duTm9kZShtYXJrZG93bk5vZGUpO1xuICB9XG5cbiAgZ2V0TWFya2Rvd25Ob2RlKCkge1xuICAgIGNvbnN0IHsgbWFya2Rvd25Ob2RlIH0gPSB0aGlzLmdldFN0YXRlKCk7XG5cbiAgICByZXR1cm4gbWFya2Rvd25Ob2RlO1xuICB9XG5cbiAgc2V0TWFya2Rvd25Ob2RlKG1hcmtkb3duTm9kZSkge1xuICAgIHRoaXMudXBkYXRlU3RhdGUoe1xuICAgICAgbWFya2Rvd25Ob2RlXG4gICAgfSk7XG4gIH1cblxuICBzZXRJbml0aWFsU3RhdGUoKSB7XG4gICAgY29uc3QgbWFya2Rvd25Ob2RlID0gbnVsbDtcblxuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgbWFya2Rvd25Ob2RlXG4gICAgfSk7XG4gIH1cblxuICBjaGlsZEVsZW1lbnRzKCkge1xuICAgIGNvbnN0IHsgb25DdXN0b21QYWdlVXBkYXRlIH0gPSB0aGlzLnByb3BlcnRpZXMsXG4gICAgICAgICAgcGFnZVVwZGF0ZUN1c3RvbUhhbmRsZXIgPSBvbkN1c3RvbVBhZ2VVcGRhdGU7IC8vL1xuXG4gICAgcmV0dXJuIChcblxuICAgICAgPFBhZ2VCdXR0b25zRGl2IG9uQ3VzdG9tUGFnZVVwZGF0ZT17cGFnZVVwZGF0ZUN1c3RvbUhhbmRsZXJ9IC8+XG5cbiAgICApO1xuICB9XG5cbiAgcGFyZW50Q29udGV4dCgpIHtcbiAgICBjb25zdCBjb250ZXh0ID0gdGhpcy5nZXRDb250ZXh0KCksXG4gICAgICAgICAgY2xlYXJQcmV2aWV3RGl2ID0gdGhpcy5jbGVhci5iaW5kKHRoaXMpLCAvLy9cbiAgICAgICAgICB1cGRhdGVQcmV2aWV3RGl2ID0gdGhpcy51cGRhdGUuYmluZCh0aGlzKTsgIC8vL1xuXG4gICAgcmV0dXJuICh7XG4gICAgICAuLi5jb250ZXh0LFxuICAgICAgY2xlYXJQcmV2aWV3RGl2LFxuICAgICAgdXBkYXRlUHJldmlld0RpdlxuICAgIH0pO1xuICB9XG5cbiAgaW5pdGlhbGlzZSgpIHtcbiAgICB0aGlzLnNldEluaXRpYWxTdGF0ZSgpO1xuICB9XG5cbiAgc3RhdGljIHRhZ05hbWUgPSBcImRpdlwiO1xuXG4gIHN0YXRpYyBpZ25vcmVkUHJvcGVydGllcyA9IFtcbiAgICBcIm9uQ3VzdG9tUGFnZVVwZGF0ZVwiXG4gIF07XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wZXJ0aWVzID0ge1xuICAgIGNsYXNzTmFtZTogXCJwcmV2aWV3XCJcbiAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgd2l0aFN0eWxlKFByZXZpZXdEaXYpYFxuXG4gIGhlaWdodDogMTAwJTtcbiAgb3ZlcmZsb3c6IHNjcm9sbDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBcbmA7XG4iXSwibmFtZXMiOlsiUHJldmlld0RpdiIsImdldFBhcmVudERPTUVsZW1lbnQiLCJkb21FbGVtZW50IiwiZ2V0RE9NRWxlbWVudCIsInBhcmVudERPTUVsZW1lbnQiLCJjbGVhciIsIm1hcmtkb3duTm9kZSIsImdldE1hcmtkb3duTm9kZSIsInVubW91bnQiLCJzZXRNYXJrZG93bk5vZGUiLCJ1cGRhdGUiLCJjb250ZXh0Iiwic2libGluZ0RPTUVsZW1lbnQiLCJtb3VudCIsImdldFN0YXRlIiwidXBkYXRlU3RhdGUiLCJzZXRJbml0aWFsU3RhdGUiLCJzZXRTdGF0ZSIsImNoaWxkRWxlbWVudHMiLCJvbkN1c3RvbVBhZ2VVcGRhdGUiLCJwcm9wZXJ0aWVzIiwicGFnZVVwZGF0ZUN1c3RvbUhhbmRsZXIiLCJQYWdlQnV0dG9uc0RpdiIsInBhcmVudENvbnRleHQiLCJnZXRDb250ZXh0IiwiY2xlYXJQcmV2aWV3RGl2IiwiYmluZCIsInVwZGF0ZVByZXZpZXdEaXYiLCJpbml0aWFsaXNlIiwiRWxlbWVudCIsInRhZ05hbWUiLCJpZ25vcmVkUHJvcGVydGllcyIsImRlZmF1bHRQcm9wZXJ0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