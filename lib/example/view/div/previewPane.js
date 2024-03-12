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
        "\n\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  border: 1px solid darkgrey;\n  overflow: scroll;\n  position: absolute;\n  font-size: 16pt;\n  \n"
    ]);
    _templateObject = function _templateObject() {
        return data;
    };
    return data;
}
var PreviewPaneDiv = /*#__PURE__*/ function(Element) {
    _inherits(PreviewPaneDiv, Element);
    var _super = _create_super(PreviewPaneDiv);
    function PreviewPaneDiv() {
        _class_call_check(this, PreviewPaneDiv);
        return _super.apply(this, arguments);
    }
    _create_class(PreviewPaneDiv, [
        {
            key: "update",
            value: function update(node, tokens) {
                var previousNode;
                previousNode = this.getPreviousNode();
                if (previousNode !== null) {
                    this.unmount(previousNode);
                }
                if (node !== null) {
                    var context = {
                        tokens: tokens
                    };
                    node.createDOMElement(context);
                    this.mount(node);
                }
                previousNode = node; ///
                this.setPreviousNode(previousNode);
            }
        },
        {
            key: "getPreviousNode",
            value: function getPreviousNode() {
                var previousNode = this.getState().previousNode;
                return previousNode;
            }
        },
        {
            key: "setPreviousNode",
            value: function setPreviousNode(previousNode) {
                this.updateState({
                    previousNode: previousNode
                });
            }
        },
        {
            key: "setInitialState",
            value: function setInitialState() {
                var previousNode = null;
                this.setState({
                    previousNode: previousNode
                });
            }
        },
        {
            key: "parentContext",
            value: function parentContext() {
                var updatePreviewPaneDiv = this.update.bind(this);
                return {
                    updatePreviewPaneDiv: updatePreviewPaneDiv
                };
            }
        },
        {
            key: "initialise",
            value: function initialise() {
                this.setInitialState();
            }
        }
    ]);
    return PreviewPaneDiv;
}(_wrap_native_super(_easy.Element));
_define_property(PreviewPaneDiv, "tagName", "div");
_define_property(PreviewPaneDiv, "defaultProperties", {
    className: "preview-pane"
});
var _default = (0, _easywithstyle.default)(PreviewPaneDiv)(_templateObject());

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9leGFtcGxlL3ZpZXcvZGl2L3ByZXZpZXdQYW5lLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgd2l0aFN0eWxlIGZyb20gXCJlYXN5LXdpdGgtc3R5bGVcIjtcblxuaW1wb3J0IHsgRWxlbWVudCB9IGZyb20gXCJlYXN5XCI7XG5cbmNsYXNzIFByZXZpZXdQYW5lRGl2IGV4dGVuZHMgRWxlbWVudCB7XG4gIHVwZGF0ZShub2RlLCB0b2tlbnMpIHtcbiAgICBsZXQgcHJldmlvdXNOb2RlO1xuXG4gICAgcHJldmlvdXNOb2RlID0gdGhpcy5nZXRQcmV2aW91c05vZGUoKTtcblxuICAgIGlmIChwcmV2aW91c05vZGUgIT09IG51bGwpIHtcbiAgICAgIHRoaXMudW5tb3VudChwcmV2aW91c05vZGUpO1xuICAgIH1cblxuICAgIGlmIChub2RlICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBjb250ZXh0ID0ge1xuICAgICAgICAgICAgICB0b2tlbnNcbiAgICAgICAgICAgIH07XG5cbiAgICAgIG5vZGUuY3JlYXRlRE9NRWxlbWVudChjb250ZXh0KTtcblxuICAgICAgdGhpcy5tb3VudChub2RlKTtcbiAgICB9XG5cbiAgICBwcmV2aW91c05vZGUgPSBub2RlOyAgLy8vXG5cbiAgICB0aGlzLnNldFByZXZpb3VzTm9kZShwcmV2aW91c05vZGUpO1xuICB9XG5cbiAgZ2V0UHJldmlvdXNOb2RlKCkge1xuICAgIGNvbnN0IHsgcHJldmlvdXNOb2RlIH0gPSB0aGlzLmdldFN0YXRlKCk7XG5cbiAgICByZXR1cm4gcHJldmlvdXNOb2RlO1xuICB9XG5cbiAgc2V0UHJldmlvdXNOb2RlKHByZXZpb3VzTm9kZSkge1xuICAgIHRoaXMudXBkYXRlU3RhdGUoe1xuICAgICAgcHJldmlvdXNOb2RlXG4gICAgfSk7XG4gIH1cblxuICBzZXRJbml0aWFsU3RhdGUoKSB7XG4gICAgY29uc3QgcHJldmlvdXNOb2RlID0gbnVsbDtcblxuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgcHJldmlvdXNOb2RlXG4gICAgfSk7XG4gIH1cblxuICBwYXJlbnRDb250ZXh0KCkge1xuICAgIGNvbnN0IHVwZGF0ZVByZXZpZXdQYW5lRGl2ID0gdGhpcy51cGRhdGUuYmluZCh0aGlzKTtcblxuICAgIHJldHVybiAoe1xuICAgICAgdXBkYXRlUHJldmlld1BhbmVEaXZcbiAgICB9KTtcbiAgfVxuXG4gIGluaXRpYWxpc2UoKSB7XG4gICAgdGhpcy5zZXRJbml0aWFsU3RhdGUoKTtcbiAgfVxuXG4gIHN0YXRpYyB0YWdOYW1lID0gXCJkaXZcIjtcblxuICBzdGF0aWMgZGVmYXVsdFByb3BlcnRpZXMgPSB7XG4gICAgY2xhc3NOYW1lOiBcInByZXZpZXctcGFuZVwiXG4gIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhTdHlsZShQcmV2aWV3UGFuZURpdilgXG5cbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBib3JkZXI6IDFweCBzb2xpZCBkYXJrZ3JleTtcbiAgb3ZlcmZsb3c6IHNjcm9sbDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBmb250LXNpemU6IDE2cHQ7XG4gIFxuYDtcbiJdLCJuYW1lcyI6WyJQcmV2aWV3UGFuZURpdiIsInVwZGF0ZSIsIm5vZGUiLCJ0b2tlbnMiLCJwcmV2aW91c05vZGUiLCJnZXRQcmV2aW91c05vZGUiLCJ1bm1vdW50IiwiY29udGV4dCIsImNyZWF0ZURPTUVsZW1lbnQiLCJtb3VudCIsInNldFByZXZpb3VzTm9kZSIsImdldFN0YXRlIiwidXBkYXRlU3RhdGUiLCJzZXRJbml0aWFsU3RhdGUiLCJzZXRTdGF0ZSIsInBhcmVudENvbnRleHQiLCJ1cGRhdGVQcmV2aWV3UGFuZURpdiIsImJpbmQiLCJpbml0aWFsaXNlIiwiRWxlbWVudCIsInRhZ05hbWUiLCJkZWZhdWx0UHJvcGVydGllcyIsImNsYXNzTmFtZSIsIndpdGhTdHlsZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBc0VBOzs7ZUFBQTs7O29FQXBFc0I7b0JBRUU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFeEIsSUFBQSxBQUFNQSwrQkFBRCxBQUFMO2NBQU1BOytCQUFBQTthQUFBQTtnQ0FBQUE7OztrQkFBQUE7O1lBQ0pDLEtBQUFBO21CQUFBQSxTQUFBQSxPQUFPQyxJQUFJLEVBQUVDLE1BQU07Z0JBQ2pCLElBQUlDO2dCQUVKQSxlQUFlLElBQUksQ0FBQ0MsZUFBZTtnQkFFbkMsSUFBSUQsaUJBQWlCLE1BQU07b0JBQ3pCLElBQUksQ0FBQ0UsT0FBTyxDQUFDRjtnQkFDZjtnQkFFQSxJQUFJRixTQUFTLE1BQU07b0JBQ2pCLElBQU1LLFVBQVU7d0JBQ1JKLFFBQUFBO29CQUNGO29CQUVORCxLQUFLTSxnQkFBZ0IsQ0FBQ0Q7b0JBRXRCLElBQUksQ0FBQ0UsS0FBSyxDQUFDUDtnQkFDYjtnQkFFQUUsZUFBZUYsTUFBTyxHQUFHO2dCQUV6QixJQUFJLENBQUNRLGVBQWUsQ0FBQ047WUFDdkI7OztZQUVBQyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBTSxBQUFFRCxlQUFpQixJQUFJLENBQUNPLFFBQVEsR0FBOUJQO2dCQUVSLE9BQU9BO1lBQ1Q7OztZQUVBTSxLQUFBQTttQkFBQUEsU0FBQUEsZ0JBQWdCTixZQUFZO2dCQUMxQixJQUFJLENBQUNRLFdBQVcsQ0FBQztvQkFDZlIsY0FBQUE7Z0JBQ0Y7WUFDRjs7O1lBRUFTLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFNVCxlQUFlO2dCQUVyQixJQUFJLENBQUNVLFFBQVEsQ0FBQztvQkFDWlYsY0FBQUE7Z0JBQ0Y7WUFDRjs7O1lBRUFXLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFNQyx1QkFBdUIsSUFBSSxDQUFDZixNQUFNLENBQUNnQixJQUFJLENBQUMsSUFBSTtnQkFFbEQsT0FBUTtvQkFDTkQsc0JBQUFBO2dCQUNGO1lBQ0Y7OztZQUVBRSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBSSxDQUFDTCxlQUFlO1lBQ3RCOzs7V0F2REliO3FCQUF1Qm1CLGFBQU87QUF5RGxDLGlCQXpESW5CLGdCQXlER29CLFdBQVU7QUFFakIsaUJBM0RJcEIsZ0JBMkRHcUIscUJBQW9CO0lBQ3pCQyxXQUFXO0FBQ2I7SUFHRixXQUFlQyxJQUFBQSxzQkFBUyxFQUFDdkIifQ==