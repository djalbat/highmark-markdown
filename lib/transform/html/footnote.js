"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return FootnoteHTMLTransform;
    }
});
var _html = /*#__PURE__*/ _interop_require_default(require("../../transform/html"));
var _line = /*#__PURE__*/ _interop_require_default(require("./line"));
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
var FootnoteHTMLTransform = /*#__PURE__*/ function(HTMLTransform) {
    _inherits(FootnoteHTMLTransform, HTMLTransform);
    function FootnoteHTMLTransform() {
        _class_call_check(this, FootnoteHTMLTransform);
        return _call_super(this, FootnoteHTMLTransform, arguments);
    }
    _create_class(FootnoteHTMLTransform, [
        {
            key: "getLineHTMLNode",
            value: function getLineHTMLNode() {
                var paragraphHTMLNode = this.getParagraphHTMLNode(), lineHTMLNode = paragraphHTMLNode.fromFirstChildNode(function(firstChildNode) {
                    var lineHTMLNode = firstChildNode; ///
                    return lineHTMLNode;
                });
                return lineHTMLNode;
            }
        },
        {
            key: "getParagraphHTMLNode",
            value: function getParagraphHTMLNode() {
                var node = this.getNode(), footnoteHTMLNode = node, paragraphHTMLNode = footnoteHTMLNode.fromSecondChildNode(function(secondChildNode) {
                    var paragraphHTMLNode = secondChildNode; ///
                    return paragraphHTMLNode;
                });
                return paragraphHTMLNode;
            }
        }
    ], [
        {
            key: "fromFootnoteHTMLNode",
            value: function fromFootnoteHTMLNode(footnoteHTMLNde, context) {
                var htmlNode = footnoteHTMLNde, footnoteHTMLTransform = _html.default.fromHTNLNOde(FootnoteHTMLTransform, htmlNode, context);
                return footnoteHTMLTransform;
            }
        }
    ]);
    return FootnoteHTMLTransform;
}(_html.default);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy90cmFuc2Zvcm0vaHRtbC9mb290bm90ZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IEhUTUxUcmFuc2Zvcm0gZnJvbSBcIi4uLy4uL3RyYW5zZm9ybS9odG1sXCJcbmltcG9ydCBMaW5lSFRNTFRyYW5zZm9ybSBmcm9tIFwiLi9saW5lXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEZvb3Rub3RlSFRNTFRyYW5zZm9ybSBleHRlbmRzIEhUTUxUcmFuc2Zvcm0ge1xuICBnZXRMaW5lSFRNTE5vZGUoKSB7XG4gICAgY29uc3QgcGFyYWdyYXBoSFRNTE5vZGUgPSB0aGlzLmdldFBhcmFncmFwaEhUTUxOb2RlKCksXG4gICAgICAgICAgbGluZUhUTUxOb2RlID0gcGFyYWdyYXBoSFRNTE5vZGUuZnJvbUZpcnN0Q2hpbGROb2RlKChmaXJzdENoaWxkTm9kZSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgbGluZUhUTUxOb2RlID0gZmlyc3RDaGlsZE5vZGU7ICAvLy9cblxuICAgICAgICAgICAgcmV0dXJuIGxpbmVIVE1MTm9kZTtcbiAgICAgICAgICB9KTtcblxuICAgIHJldHVybiBsaW5lSFRNTE5vZGU7XG4gIH1cblxuICBnZXRQYXJhZ3JhcGhIVE1MTm9kZSgpIHtcbiAgICBjb25zdCBub2RlID0gdGhpcy5nZXROb2RlKCksXG4gICAgICAgICAgZm9vdG5vdGVIVE1MTm9kZSA9IG5vZGUsICAvLy9cbiAgICAgICAgICBwYXJhZ3JhcGhIVE1MTm9kZSA9IGZvb3Rub3RlSFRNTE5vZGUuZnJvbVNlY29uZENoaWxkTm9kZSgoc2Vjb25kQ2hpbGROb2RlKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBwYXJhZ3JhcGhIVE1MTm9kZSA9IHNlY29uZENoaWxkTm9kZTsgIC8vL1xuXG4gICAgICAgICAgICByZXR1cm4gcGFyYWdyYXBoSFRNTE5vZGU7XG4gICAgICAgICAgfSk7XG5cbiAgICByZXR1cm4gcGFyYWdyYXBoSFRNTE5vZGU7XG4gIH1cblxuICBzdGF0aWMgZnJvbUZvb3Rub3RlSFRNTE5vZGUoZm9vdG5vdGVIVE1MTmRlLCBjb250ZXh0KSB7XG4gICAgY29uc3QgaHRtbE5vZGUgPSBmb290bm90ZUhUTUxOZGUsIC8vL1xuICAgICAgICAgIGZvb3Rub3RlSFRNTFRyYW5zZm9ybSA9IEhUTUxUcmFuc2Zvcm0uZnJvbUhUTkxOT2RlKEZvb3Rub3RlSFRNTFRyYW5zZm9ybSwgaHRtbE5vZGUsIGNvbnRleHQpO1xuXG4gICAgcmV0dXJuIGZvb3Rub3RlSFRNTFRyYW5zZm9ybTtcbiAgfVxufVxuIl0sIm5hbWVzIjpbIkZvb3Rub3RlSFRNTFRyYW5zZm9ybSIsImdldExpbmVIVE1MTm9kZSIsInBhcmFncmFwaEhUTUxOb2RlIiwiZ2V0UGFyYWdyYXBoSFRNTE5vZGUiLCJsaW5lSFRNTE5vZGUiLCJmcm9tRmlyc3RDaGlsZE5vZGUiLCJmaXJzdENoaWxkTm9kZSIsIm5vZGUiLCJnZXROb2RlIiwiZm9vdG5vdGVIVE1MTm9kZSIsImZyb21TZWNvbmRDaGlsZE5vZGUiLCJzZWNvbmRDaGlsZE5vZGUiLCJmcm9tRm9vdG5vdGVIVE1MTm9kZSIsImZvb3Rub3RlSFRNTE5kZSIsImNvbnRleHQiLCJodG1sTm9kZSIsImZvb3Rub3RlSFRNTFRyYW5zZm9ybSIsIkhUTUxUcmFuc2Zvcm0iLCJmcm9tSFROTE5PZGUiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBS3FCQTs7OzJEQUhLOzJEQUNJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRWYsSUFBQSxBQUFNQSxzQ0FBTjtjQUFNQTthQUFBQTtnQ0FBQUE7ZUFBTixrQkFBTUE7O2tCQUFBQTs7WUFDbkJDLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFNQyxvQkFBb0IsSUFBSSxDQUFDQyxvQkFBb0IsSUFDN0NDLGVBQWVGLGtCQUFrQkcsa0JBQWtCLENBQUMsU0FBQ0M7b0JBQ25ELElBQU1GLGVBQWVFLGdCQUFpQixHQUFHO29CQUV6QyxPQUFPRjtnQkFDVDtnQkFFTixPQUFPQTtZQUNUOzs7WUFFQUQsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQU1JLE9BQU8sSUFBSSxDQUFDQyxPQUFPLElBQ25CQyxtQkFBbUJGLE1BQ25CTCxvQkFBb0JPLGlCQUFpQkMsbUJBQW1CLENBQUMsU0FBQ0M7b0JBQ3hELElBQU1ULG9CQUFvQlMsaUJBQWtCLEdBQUc7b0JBRS9DLE9BQU9UO2dCQUNUO2dCQUVOLE9BQU9BO1lBQ1Q7Ozs7WUFFT1UsS0FBQUE7bUJBQVAsU0FBT0EscUJBQXFCQyxlQUFlLEVBQUVDLE9BQU87Z0JBQ2xELElBQU1DLFdBQVdGLGlCQUNYRyx3QkFBd0JDLGFBQWEsQ0FBQ0MsWUFBWSxDQTFCdkNsQix1QkEwQitEZSxVQUFVRDtnQkFFMUYsT0FBT0U7WUFDVDs7O1dBN0JtQmhCO0VBQThCaUIsYUFBYSJ9