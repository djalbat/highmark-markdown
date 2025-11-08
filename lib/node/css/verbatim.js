"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return VerbatimCSSNode;
    }
});
var _css = /*#__PURE__*/ _interop_require_default(require("../../node/css"));
var _targets = require("../../targets");
var _constants = require("../../constants");
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
var VerbatimCSSNode = /*#__PURE__*/ function(CSSNode) {
    _inherits(VerbatimCSSNode, CSSNode);
    function VerbatimCSSNode() {
        _class_call_check(this, VerbatimCSSNode);
        return _call_super(this, VerbatimCSSNode, arguments);
    }
    _create_class(VerbatimCSSNode, [
        {
            key: "target",
            value: function target(content) {
                var target = this.fromFirstChildNode(function(firstChildNode) {
                    var targetCSSNode = firstChildNode, target = targetCSSNode.target(content);
                    return target;
                });
                return target;
            }
        },
        {
            key: "content",
            value: function content(context) {
                var content = this.fromSecondChildNode(function(secondChildNode) {
                    var contentCSSNode = secondChildNode, content = contentCSSNode.content(context);
                    return content;
                });
                return content;
            }
        },
        {
            key: "asCSS",
            value: function asCSS(context) {
                var css = _constants.EMPTY_STRING;
                var target;
                target = context.target;
                if (target === _targets.WEB_TARGET) {
                    target = this.target(context);
                    if (target === _targets.WEB_TARGET) {
                        var content = this.content(context);
                        css = content; ///
                    }
                }
                return css;
            }
        }
    ], [
        {
            key: "fromNothing",
            value: function fromNothing() {
                return _css.default.fromNothing(VerbatimCSSNode);
            }
        },
        {
            key: "fromOuterNode",
            value: function fromOuterNode(outerNode) {
                return _css.default.fromOuterNode(VerbatimCSSNode, outerNode);
            }
        }
    ]);
    return VerbatimCSSNode;
}(_css.default);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ub2RlL2Nzcy92ZXJiYXRpbS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IENTU05vZGUgZnJvbSBcIi4uLy4uL25vZGUvY3NzXCI7XG5cbmltcG9ydCB7IFdFQl9UQVJHRVQgfSBmcm9tIFwiLi4vLi4vdGFyZ2V0c1wiO1xuaW1wb3J0IHsgRU1QVFlfU1RSSU5HIH0gZnJvbSBcIi4uLy4uL2NvbnN0YW50c1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBWZXJiYXRpbUNTU05vZGUgZXh0ZW5kcyBDU1NOb2RlIHtcbiAgdGFyZ2V0KGNvbnRlbnQpIHtcbiAgICBjb25zdCB0YXJnZXQgPSB0aGlzLmZyb21GaXJzdENoaWxkTm9kZSgoZmlyc3RDaGlsZE5vZGUpID0+IHtcbiAgICAgIGNvbnN0IHRhcmdldENTU05vZGUgPSBmaXJzdENoaWxkTm9kZSwgLy8vXG4gICAgICAgICAgICB0YXJnZXQgPSB0YXJnZXRDU1NOb2RlLnRhcmdldChjb250ZW50KTtcblxuICAgICAgcmV0dXJuIHRhcmdldDtcbiAgICB9KTtcblxuICAgIHJldHVybiB0YXJnZXQ7XG4gIH1cblxuICBjb250ZW50KGNvbnRleHQpIHtcbiAgICBjb25zdCBjb250ZW50ID0gdGhpcy5mcm9tU2Vjb25kQ2hpbGROb2RlKChzZWNvbmRDaGlsZE5vZGUpID0+IHtcbiAgICAgIGNvbnN0IGNvbnRlbnRDU1NOb2RlID0gc2Vjb25kQ2hpbGROb2RlLCAvLy9cbiAgICAgICAgICAgIGNvbnRlbnQgPSBjb250ZW50Q1NTTm9kZS5jb250ZW50KGNvbnRleHQpO1xuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KTtcblxuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgYXNDU1MoY29udGV4dCkge1xuICAgIGxldCBjc3MgPSBFTVBUWV9TVFJJTkc7XG5cbiAgICBsZXQgdGFyZ2V0O1xuXG4gICAgKHsgdGFyZ2V0IH0gPSBjb250ZXh0KTtcblxuICAgIGlmICh0YXJnZXQgPT09IFdFQl9UQVJHRVQpIHtcbiAgICAgIHRhcmdldCA9IHRoaXMudGFyZ2V0KGNvbnRleHQpO1xuXG4gICAgICBpZiAodGFyZ2V0ID09PSBXRUJfVEFSR0VUKSB7XG4gICAgICAgIGNvbnN0IGNvbnRlbnQgPSB0aGlzLmNvbnRlbnQoY29udGV4dCk7XG5cbiAgICAgICAgY3NzID0gY29udGVudDsgIC8vL1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBjc3M7XG4gIH1cblxuICBzdGF0aWMgZnJvbU5vdGhpbmcoKSB7IHJldHVybiBDU1NOb2RlLmZyb21Ob3RoaW5nKFZlcmJhdGltQ1NTTm9kZSk7IH1cblxuICBzdGF0aWMgZnJvbU91dGVyTm9kZShvdXRlck5vZGUpIHsgcmV0dXJuIENTU05vZGUuZnJvbU91dGVyTm9kZShWZXJiYXRpbUNTU05vZGUsIG91dGVyTm9kZSk7IH1cbn1cbiJdLCJuYW1lcyI6WyJWZXJiYXRpbUNTU05vZGUiLCJ0YXJnZXQiLCJjb250ZW50IiwiZnJvbUZpcnN0Q2hpbGROb2RlIiwiZmlyc3RDaGlsZE5vZGUiLCJ0YXJnZXRDU1NOb2RlIiwiY29udGV4dCIsImZyb21TZWNvbmRDaGlsZE5vZGUiLCJzZWNvbmRDaGlsZE5vZGUiLCJjb250ZW50Q1NTTm9kZSIsImFzQ1NTIiwiY3NzIiwiRU1QVFlfU1RSSU5HIiwiV0VCX1RBUkdFVCIsImZyb21Ob3RoaW5nIiwiQ1NTTm9kZSIsImZyb21PdXRlck5vZGUiLCJvdXRlck5vZGUiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBT3FCQTs7OzBEQUxEO3VCQUVPO3lCQUNFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRWQsSUFBQSxBQUFNQSxnQ0FBTjtjQUFNQTthQUFBQTtnQ0FBQUE7UUFBTixPQUFBLGtCQUFNQTs7a0JBQUFBOztZQUNuQkMsS0FBQUE7bUJBQUFBLFNBQUFBLE9BQU9DLE9BQU87Z0JBQ1osSUFBTUQsU0FBUyxJQUFJLENBQUNFLGtCQUFrQixDQUFDLFNBQUNDO29CQUN0QyxJQUFNQyxnQkFBZ0JELGdCQUNoQkgsU0FBU0ksY0FBY0osTUFBTSxDQUFDQztvQkFFcEMsT0FBT0Q7Z0JBQ1Q7Z0JBRUEsT0FBT0E7WUFDVDs7O1lBRUFDLEtBQUFBO21CQUFBQSxTQUFBQSxRQUFRSSxPQUFPO2dCQUNiLElBQU1KLFVBQVUsSUFBSSxDQUFDSyxtQkFBbUIsQ0FBQyxTQUFDQztvQkFDeEMsSUFBTUMsaUJBQWlCRCxpQkFDakJOLFVBQVVPLGVBQWVQLE9BQU8sQ0FBQ0k7b0JBRXZDLE9BQU9KO2dCQUNUO2dCQUVBLE9BQU9BO1lBQ1Q7OztZQUVBUSxLQUFBQTttQkFBQUEsU0FBQUEsTUFBTUosT0FBTztnQkFDWCxJQUFJSyxNQUFNQyx1QkFBWTtnQkFFdEIsSUFBSVg7Z0JBRURBLFNBQVdLLFFBQVhMO2dCQUVILElBQUlBLFdBQVdZLG1CQUFVLEVBQUU7b0JBQ3pCWixTQUFTLElBQUksQ0FBQ0EsTUFBTSxDQUFDSztvQkFFckIsSUFBSUwsV0FBV1ksbUJBQVUsRUFBRTt3QkFDekIsSUFBTVgsVUFBVSxJQUFJLENBQUNBLE9BQU8sQ0FBQ0k7d0JBRTdCSyxNQUFNVCxTQUFVLEdBQUc7b0JBQ3JCO2dCQUNGO2dCQUVBLE9BQU9TO1lBQ1Q7Ozs7WUFFT0csS0FBQUE7bUJBQVAsU0FBT0E7Z0JBQWdCLE9BQU9DLFlBQU8sQ0FBQ0QsV0FBVyxDQTNDOUJkO1lBMkNpRDs7O1lBRTdEZ0IsS0FBQUE7bUJBQVAsU0FBT0EsY0FBY0MsU0FBUztnQkFBSSxPQUFPRixZQUFPLENBQUNDLGFBQWEsQ0E3QzNDaEIsaUJBNkM2RGlCO1lBQVk7OztXQTdDekVqQjtFQUF3QmUsWUFBTyJ9