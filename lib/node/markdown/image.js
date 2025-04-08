"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return ImageMarkdownNode;
    }
});
var _markdown = /*#__PURE__*/ _interop_require_default(require("../../node/markdown"));
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
var ImageMarkdownNode = /*#__PURE__*/ function(MarkdownNode) {
    _inherits(ImageMarkdownNode, MarkdownNode);
    function ImageMarkdownNode() {
        _class_call_check(this, ImageMarkdownNode);
        return _call_super(this, ImageMarkdownNode, arguments);
    }
    _create_class(ImageMarkdownNode, [
        {
            key: "alt",
            value: function alt(context) {
                var alt = this.fromSecondChildNode(function(secondChildNode) {
                    var inlineTextMarkdownNode = secondChildNode, inlineTextMarkdownNodeContent = inlineTextMarkdownNode.content(context), alt = inlineTextMarkdownNodeContent; ///
                    return alt;
                });
                return alt;
            }
        },
        {
            key: "src",
            value: function src(context) {
                var _context_pathToURL = context.pathToURL, pathToURL = _context_pathToURL === void 0 ? null : _context_pathToURL, src = this.fromSecondLastChildNode(function(secondLastChildNode) {
                    var pathMarkdownNode = secondLastChildNode, pathMarkdownNodeContent = pathMarkdownNode.getContent(), path = pathMarkdownNodeContent, src = pathToURL === null ? path : pathToURL(path);
                    return src;
                });
                return src;
            }
        }
    ], [
        {
            key: "fromRuleNameChildNodesAndOpacity",
            value: function fromRuleNameChildNodesAndOpacity(ruleName, childNodes, opacity) {
                return _markdown.default.fromRuleNameChildNodesAndOpacity(ImageMarkdownNode, ruleName, childNodes, opacity);
            }
        }
    ]);
    return ImageMarkdownNode;
}(_markdown.default);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ub2RlL21hcmtkb3duL2ltYWdlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgTWFya2Rvd25Ob2RlIGZyb20gXCIuLi8uLi9ub2RlL21hcmtkb3duXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEltYWdlTWFya2Rvd25Ob2RlIGV4dGVuZHMgTWFya2Rvd25Ob2RlIHtcbiAgYWx0KGNvbnRleHQpIHtcbiAgICBjb25zdCBhbHQgPSB0aGlzLmZyb21TZWNvbmRDaGlsZE5vZGUoKHNlY29uZENoaWxkTm9kZSkgPT4ge1xuICAgICAgY29uc3QgaW5saW5lVGV4dE1hcmtkb3duTm9kZSA9IHNlY29uZENoaWxkTm9kZSwgIC8vL1xuICAgICAgICAgICAgaW5saW5lVGV4dE1hcmtkb3duTm9kZUNvbnRlbnQgPSBpbmxpbmVUZXh0TWFya2Rvd25Ob2RlLmNvbnRlbnQoY29udGV4dCksXG4gICAgICAgICAgICBhbHQgPSBpbmxpbmVUZXh0TWFya2Rvd25Ob2RlQ29udGVudDsgLy8vXG5cbiAgICAgIHJldHVybiBhbHQ7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gYWx0O1xuICB9XG5cbiAgc3JjKGNvbnRleHQpIHtcbiAgICBjb25zdCB7IHBhdGhUb1VSTCA9IG51bGwgfSA9IGNvbnRleHQsXG4gICAgICAgICAgc3JjID0gdGhpcy5mcm9tU2Vjb25kTGFzdENoaWxkTm9kZSgoc2Vjb25kTGFzdENoaWxkTm9kZSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgcGF0aE1hcmtkb3duTm9kZSA9IHNlY29uZExhc3RDaGlsZE5vZGUsICAvLy9cbiAgICAgICAgICAgICAgICAgIHBhdGhNYXJrZG93bk5vZGVDb250ZW50ID0gcGF0aE1hcmtkb3duTm9kZS5nZXRDb250ZW50KCksXG4gICAgICAgICAgICAgICAgICBwYXRoID0gcGF0aE1hcmtkb3duTm9kZUNvbnRlbnQsIC8vL1xuICAgICAgICAgICAgICAgICAgc3JjID0gKHBhdGhUb1VSTCA9PT0gbnVsbCkgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgcGF0aCA6ICAvLy9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGF0aFRvVVJMKHBhdGgpO1xuXG4gICAgICAgICAgICByZXR1cm4gc3JjO1xuICAgICAgICAgIH0pO1xuXG4gICAgcmV0dXJuIHNyYztcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUnVsZU5hbWVDaGlsZE5vZGVzQW5kT3BhY2l0eShydWxlTmFtZSwgY2hpbGROb2Rlcywgb3BhY2l0eSkgeyByZXR1cm4gTWFya2Rvd25Ob2RlLmZyb21SdWxlTmFtZUNoaWxkTm9kZXNBbmRPcGFjaXR5KEltYWdlTWFya2Rvd25Ob2RlLCBydWxlTmFtZSwgY2hpbGROb2Rlcywgb3BhY2l0eSk7IH1cbn1cbiJdLCJuYW1lcyI6WyJJbWFnZU1hcmtkb3duTm9kZSIsImFsdCIsImNvbnRleHQiLCJmcm9tU2Vjb25kQ2hpbGROb2RlIiwic2Vjb25kQ2hpbGROb2RlIiwiaW5saW5lVGV4dE1hcmtkb3duTm9kZSIsImlubGluZVRleHRNYXJrZG93bk5vZGVDb250ZW50IiwiY29udGVudCIsInNyYyIsInBhdGhUb1VSTCIsImZyb21TZWNvbmRMYXN0Q2hpbGROb2RlIiwic2Vjb25kTGFzdENoaWxkTm9kZSIsInBhdGhNYXJrZG93bk5vZGUiLCJwYXRoTWFya2Rvd25Ob2RlQ29udGVudCIsImdldENvbnRlbnQiLCJwYXRoIiwiZnJvbVJ1bGVOYW1lQ2hpbGROb2Rlc0FuZE9wYWNpdHkiLCJydWxlTmFtZSIsImNoaWxkTm9kZXMiLCJvcGFjaXR5IiwiTWFya2Rvd25Ob2RlIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQUlxQkE7OzsrREFGSTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVWLElBQUEsQUFBTUEsa0NBQU47Y0FBTUE7YUFBQUE7Z0NBQUFBO2VBQU4sa0JBQU1BOztrQkFBQUE7O1lBQ25CQyxLQUFBQTttQkFBQUEsU0FBQUEsSUFBSUMsT0FBTztnQkFDVCxJQUFNRCxNQUFNLElBQUksQ0FBQ0UsbUJBQW1CLENBQUMsU0FBQ0M7b0JBQ3BDLElBQU1DLHlCQUF5QkQsaUJBQ3pCRSxnQ0FBZ0NELHVCQUF1QkUsT0FBTyxDQUFDTCxVQUMvREQsTUFBTUssK0JBQStCLEdBQUc7b0JBRTlDLE9BQU9MO2dCQUNUO2dCQUVBLE9BQU9BO1lBQ1Q7OztZQUVBTyxLQUFBQTttQkFBQUEsU0FBQUEsSUFBSU4sT0FBTztnQkFDVCx5QkFBNkJBLFFBQXJCTyxXQUFBQSw0Q0FBWSwyQkFDZEQsTUFBTSxJQUFJLENBQUNFLHVCQUF1QixDQUFDLFNBQUNDO29CQUNsQyxJQUFNQyxtQkFBbUJELHFCQUNuQkUsMEJBQTBCRCxpQkFBaUJFLFVBQVUsSUFDckRDLE9BQU9GLHlCQUNQTCxNQUFNLEFBQUNDLGNBQWMsT0FDWk0sT0FDRU4sVUFBVU07b0JBRTNCLE9BQU9QO2dCQUNUO2dCQUVOLE9BQU9BO1lBQ1Q7Ozs7WUFFT1EsS0FBQUE7bUJBQVAsU0FBT0EsaUNBQWlDQyxRQUFRLEVBQUVDLFVBQVUsRUFBRUMsT0FBTztnQkFBSSxPQUFPQyxpQkFBWSxDQUFDSixnQ0FBZ0MsQ0E3QjFHaEIsbUJBNkI4SGlCLFVBQVVDLFlBQVlDO1lBQVU7OztXQTdCOUpuQjtFQUEwQm9CLGlCQUFZIn0=