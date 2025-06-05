"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return ContentsLinkHTMLTransform;
    }
});
var _html = /*#__PURE__*/ _interop_require_default(require("../../../transform/html"));
var _line = /*#__PURE__*/ _interop_require_default(require("../../../transform/html/line"));
var _contents = /*#__PURE__*/ _interop_require_default(require("../../../node/html/link/contents"));
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
var ContentsLinkHTMLTransform = /*#__PURE__*/ function(HTMLTransform) {
    _inherits(ContentsLinkHTMLTransform, HTMLTransform);
    function ContentsLinkHTMLTransform() {
        _class_call_check(this, ContentsLinkHTMLTransform);
        return _call_super(this, ContentsLinkHTMLTransform, arguments);
    }
    _create_class(ContentsLinkHTMLTransform, [
        {
            key: "getIdentifier",
            value: function getIdentifier() {
                var contentsLinkHTMLNode = this.getContentsLinkHTMLNode(), identifier = contentsLinkHTMLNode.getIdentifier();
                return identifier;
            }
        },
        {
            key: "getContentsLinkHTMLNode",
            value: function getContentsLinkHTMLNode() {
                var htmlNode = this.getHTMLNode(), contentsLinkHTMLNode = htmlNode; ///
                return contentsLinkHTMLNode;
            }
        }
    ], [
        {
            key: "fromNestedHeadingNode",
            value: function fromNestedHeadingNode(nestedHeadingNode, context) {
                var contentsLinkHTMLTransform = null;
                var htmlNode = nestedHeadingNode.getHTMLNode(), headingHTMLNode = htmlNode; ///
                if (headingHTMLNode !== null) {
                    var identifier = headingHTMLNode.identifier(context), lineHTMLNode = headingHTMLNode.getLineHTMLNode(), lineHTMLTransform = _line.default.fromLineHTMLNode(lineHTMLNode, context), contentsLinkHTMLNode = _contents.default.fromLineHTMLTransformAndIdentifier(lineHTMLTransform, identifier), htmlNode1 = contentsLinkHTMLNode; ///
                    contentsLinkHTMLTransform = _html.default.fromHTMLNode(ContentsLinkHTMLTransform, htmlNode1);
                }
                return contentsLinkHTMLTransform;
            }
        }
    ]);
    return ContentsLinkHTMLTransform;
}(_html.default);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy90cmFuc2Zvcm0vaHRtbC9saW5rL2NvbnRlbnRzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgSFRNTFRyYW5zZm9ybSBmcm9tIFwiLi4vLi4vLi4vdHJhbnNmb3JtL2h0bWxcIjtcbmltcG9ydCBMaW5lSFRNTFRyYW5zZm9ybSBmcm9tIFwiLi4vLi4vLi4vdHJhbnNmb3JtL2h0bWwvbGluZVwiO1xuaW1wb3J0IENvbnRlbnRzTGlua0hUTUxOb2RlIGZyb20gXCIuLi8uLi8uLi9ub2RlL2h0bWwvbGluay9jb250ZW50c1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDb250ZW50c0xpbmtIVE1MVHJhbnNmb3JtIGV4dGVuZHMgSFRNTFRyYW5zZm9ybSB7XG4gIGdldElkZW50aWZpZXIoKSB7XG4gICAgY29uc3QgY29udGVudHNMaW5rSFRNTE5vZGUgPSB0aGlzLmdldENvbnRlbnRzTGlua0hUTUxOb2RlKCksXG4gICAgICAgICAgaWRlbnRpZmllciA9IGNvbnRlbnRzTGlua0hUTUxOb2RlLmdldElkZW50aWZpZXIoKTtcblxuICAgIHJldHVybiBpZGVudGlmaWVyO1xuICB9XG5cbiAgZ2V0Q29udGVudHNMaW5rSFRNTE5vZGUoKSB7XG4gICAgY29uc3QgaHRtbE5vZGUgPSB0aGlzLmdldEhUTUxOb2RlKCksXG4gICAgICAgICAgY29udGVudHNMaW5rSFRNTE5vZGUgPSBodG1sTm9kZTsgIC8vL1xuXG4gICAgcmV0dXJuIGNvbnRlbnRzTGlua0hUTUxOb2RlO1xuICB9XG5cbiAgc3RhdGljIGZyb21OZXN0ZWRIZWFkaW5nTm9kZShuZXN0ZWRIZWFkaW5nTm9kZSwgY29udGV4dCkge1xuICAgIGxldCBjb250ZW50c0xpbmtIVE1MVHJhbnNmb3JtID0gbnVsbDtcblxuICAgIGNvbnN0IGh0bWxOb2RlID0gbmVzdGVkSGVhZGluZ05vZGUuZ2V0SFRNTE5vZGUoKSxcbiAgICAgICAgICBoZWFkaW5nSFRNTE5vZGUgPSBodG1sTm9kZTsgIC8vL1xuXG4gICAgaWYgKGhlYWRpbmdIVE1MTm9kZSAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgaWRlbnRpZmllciA9IGhlYWRpbmdIVE1MTm9kZS5pZGVudGlmaWVyKGNvbnRleHQpLFxuICAgICAgICAgICAgbGluZUhUTUxOb2RlID0gaGVhZGluZ0hUTUxOb2RlLmdldExpbmVIVE1MTm9kZSgpLFxuICAgICAgICAgICAgbGluZUhUTUxUcmFuc2Zvcm0gPSBMaW5lSFRNTFRyYW5zZm9ybS5mcm9tTGluZUhUTUxOb2RlKGxpbmVIVE1MTm9kZSwgY29udGV4dCksXG4gICAgICAgICAgICBjb250ZW50c0xpbmtIVE1MTm9kZSA9IENvbnRlbnRzTGlua0hUTUxOb2RlLmZyb21MaW5lSFRNTFRyYW5zZm9ybUFuZElkZW50aWZpZXIobGluZUhUTUxUcmFuc2Zvcm0sIGlkZW50aWZpZXIpLFxuICAgICAgICAgICAgaHRtbE5vZGUgPSBjb250ZW50c0xpbmtIVE1MTm9kZTsgIC8vL1xuXG4gICAgICBjb250ZW50c0xpbmtIVE1MVHJhbnNmb3JtID0gSFRNTFRyYW5zZm9ybS5mcm9tSFRNTE5vZGUoQ29udGVudHNMaW5rSFRNTFRyYW5zZm9ybSwgaHRtbE5vZGUpO1xuICAgIH1cblxuICAgIHJldHVybiBjb250ZW50c0xpbmtIVE1MVHJhbnNmb3JtO1xuICB9XG59XG4iXSwibmFtZXMiOlsiQ29udGVudHNMaW5rSFRNTFRyYW5zZm9ybSIsImdldElkZW50aWZpZXIiLCJjb250ZW50c0xpbmtIVE1MTm9kZSIsImdldENvbnRlbnRzTGlua0hUTUxOb2RlIiwiaWRlbnRpZmllciIsImh0bWxOb2RlIiwiZ2V0SFRNTE5vZGUiLCJmcm9tTmVzdGVkSGVhZGluZ05vZGUiLCJuZXN0ZWRIZWFkaW5nTm9kZSIsImNvbnRleHQiLCJjb250ZW50c0xpbmtIVE1MVHJhbnNmb3JtIiwiaGVhZGluZ0hUTUxOb2RlIiwibGluZUhUTUxOb2RlIiwiZ2V0TGluZUhUTUxOb2RlIiwibGluZUhUTUxUcmFuc2Zvcm0iLCJMaW5lSFRNTFRyYW5zZm9ybSIsImZyb21MaW5lSFRNTE5vZGUiLCJDb250ZW50c0xpbmtIVE1MTm9kZSIsImZyb21MaW5lSFRNTFRyYW5zZm9ybUFuZElkZW50aWZpZXIiLCJIVE1MVHJhbnNmb3JtIiwiZnJvbUhUTUxOb2RlIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQU1xQkE7OzsyREFKSzsyREFDSTsrREFDRzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVsQixJQUFBLEFBQU1BLDBDQUFOO2NBQU1BO2FBQUFBO2dDQUFBQTtRQUFOLE9BQUEsa0JBQU1BOztrQkFBQUE7O1lBQ25CQyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBTUMsdUJBQXVCLElBQUksQ0FBQ0MsdUJBQXVCLElBQ25EQyxhQUFhRixxQkFBcUJELGFBQWE7Z0JBRXJELE9BQU9HO1lBQ1Q7OztZQUVBRCxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBTUUsV0FBVyxJQUFJLENBQUNDLFdBQVcsSUFDM0JKLHVCQUF1QkcsVUFBVyxHQUFHO2dCQUUzQyxPQUFPSDtZQUNUOzs7O1lBRU9LLEtBQUFBO21CQUFQLFNBQU9BLHNCQUFzQkMsaUJBQWlCLEVBQUVDLE9BQU87Z0JBQ3JELElBQUlDLDRCQUE0QjtnQkFFaEMsSUFBTUwsV0FBV0csa0JBQWtCRixXQUFXLElBQ3hDSyxrQkFBa0JOLFVBQVcsR0FBRztnQkFFdEMsSUFBSU0sb0JBQW9CLE1BQU07b0JBQzVCLElBQU1QLGFBQWFPLGdCQUFnQlAsVUFBVSxDQUFDSyxVQUN4Q0csZUFBZUQsZ0JBQWdCRSxlQUFlLElBQzlDQyxvQkFBb0JDLGFBQWlCLENBQUNDLGdCQUFnQixDQUFDSixjQUFjSCxVQUNyRVAsdUJBQXVCZSxpQkFBb0IsQ0FBQ0Msa0NBQWtDLENBQUNKLG1CQUFtQlYsYUFDbEdDLFlBQVdILHNCQUF1QixHQUFHO29CQUUzQ1EsNEJBQTRCUyxhQUFhLENBQUNDLFlBQVksQ0E1QnZDcEIsMkJBNEJtRUs7Z0JBQ3BGO2dCQUVBLE9BQU9LO1lBQ1Q7OztXQWhDbUJWO0VBQWtDbUIsYUFBYSJ9