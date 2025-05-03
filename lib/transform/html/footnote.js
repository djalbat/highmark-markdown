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
            key: "getFootnoteHTMLNode",
            value: function getFootnoteHTMLNode() {
                var node = this.getNode(), footnoteHTMLNode = node; ///
                return footnoteHTMLNode;
            }
        },
        {
            key: "getParagraphHTMLNode",
            value: function getParagraphHTMLNode() {
                var footnoteHTMLNode = this.getFootnoteHTMLNode(), paragraphHTMLNode = footnoteHTMLNode.fromSecondChildNode(function(secondChildNode) {
                    var paragraphHTMLNode = secondChildNode; ///
                    return paragraphHTMLNode;
                });
                return paragraphHTMLNode;
            }
        },
        {
            key: "identifier",
            value: function identifier(context) {
                var footnoteHTMLNode = this.getFootnoteHTMLNode(), identifier = footnoteHTMLNode.identifier(context);
                return identifier;
            }
        }
    ], [
        {
            key: "fromFootnoteHTMLNode",
            value: function fromFootnoteHTMLNode(footnoteHTMLNde) {
                var htmlNode = footnoteHTMLNde, footnoteHTMLTransform = _html.default.fromHTNLNOde(FootnoteHTMLTransform, htmlNode);
                return footnoteHTMLTransform;
            }
        }
    ]);
    return FootnoteHTMLTransform;
}(_html.default);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy90cmFuc2Zvcm0vaHRtbC9mb290bm90ZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IEhUTUxUcmFuc2Zvcm0gZnJvbSBcIi4uLy4uL3RyYW5zZm9ybS9odG1sXCJcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRm9vdG5vdGVIVE1MVHJhbnNmb3JtIGV4dGVuZHMgSFRNTFRyYW5zZm9ybSB7XG4gIGdldExpbmVIVE1MTm9kZSgpIHtcbiAgICBjb25zdCBwYXJhZ3JhcGhIVE1MTm9kZSA9IHRoaXMuZ2V0UGFyYWdyYXBoSFRNTE5vZGUoKSxcbiAgICAgICAgICBsaW5lSFRNTE5vZGUgPSBwYXJhZ3JhcGhIVE1MTm9kZS5mcm9tRmlyc3RDaGlsZE5vZGUoKGZpcnN0Q2hpbGROb2RlKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBsaW5lSFRNTE5vZGUgPSBmaXJzdENoaWxkTm9kZTsgIC8vL1xuXG4gICAgICAgICAgICByZXR1cm4gbGluZUhUTUxOb2RlO1xuICAgICAgICAgIH0pO1xuXG4gICAgcmV0dXJuIGxpbmVIVE1MTm9kZTtcbiAgfVxuXG4gIGdldEZvb3Rub3RlSFRNTE5vZGUoKSB7XG4gICAgY29uc3Qgbm9kZSA9IHRoaXMuZ2V0Tm9kZSgpLFxuICAgICAgICAgIGZvb3Rub3RlSFRNTE5vZGUgPSBub2RlOyAgLy8vXG5cbiAgICByZXR1cm4gZm9vdG5vdGVIVE1MTm9kZTtcbiAgfVxuXG4gIGdldFBhcmFncmFwaEhUTUxOb2RlKCkge1xuICAgIGNvbnN0IGZvb3Rub3RlSFRNTE5vZGUgPSB0aGlzLmdldEZvb3Rub3RlSFRNTE5vZGUoKSwgIC8vL1xuICAgICAgICAgIHBhcmFncmFwaEhUTUxOb2RlID0gZm9vdG5vdGVIVE1MTm9kZS5mcm9tU2Vjb25kQ2hpbGROb2RlKChzZWNvbmRDaGlsZE5vZGUpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHBhcmFncmFwaEhUTUxOb2RlID0gc2Vjb25kQ2hpbGROb2RlOyAgLy8vXG5cbiAgICAgICAgICAgIHJldHVybiBwYXJhZ3JhcGhIVE1MTm9kZTtcbiAgICAgICAgICB9KTtcblxuICAgIHJldHVybiBwYXJhZ3JhcGhIVE1MTm9kZTtcbiAgfVxuXG4gIGlkZW50aWZpZXIoY29udGV4dCkge1xuICAgIGNvbnN0IGZvb3Rub3RlSFRNTE5vZGUgPSB0aGlzLmdldEZvb3Rub3RlSFRNTE5vZGUoKSxcbiAgICAgICAgICBpZGVudGlmaWVyID0gZm9vdG5vdGVIVE1MTm9kZS5pZGVudGlmaWVyKGNvbnRleHQpO1xuXG4gICAgcmV0dXJuIGlkZW50aWZpZXI7XG4gIH1cblxuICBzdGF0aWMgZnJvbUZvb3Rub3RlSFRNTE5vZGUoZm9vdG5vdGVIVE1MTmRlKSB7XG4gICAgY29uc3QgaHRtbE5vZGUgPSBmb290bm90ZUhUTUxOZGUsIC8vL1xuICAgICAgICAgIGZvb3Rub3RlSFRNTFRyYW5zZm9ybSA9IEhUTUxUcmFuc2Zvcm0uZnJvbUhUTkxOT2RlKEZvb3Rub3RlSFRNTFRyYW5zZm9ybSwgaHRtbE5vZGUpO1xuXG4gICAgcmV0dXJuIGZvb3Rub3RlSFRNTFRyYW5zZm9ybTtcbiAgfVxufVxuIl0sIm5hbWVzIjpbIkZvb3Rub3RlSFRNTFRyYW5zZm9ybSIsImdldExpbmVIVE1MTm9kZSIsInBhcmFncmFwaEhUTUxOb2RlIiwiZ2V0UGFyYWdyYXBoSFRNTE5vZGUiLCJsaW5lSFRNTE5vZGUiLCJmcm9tRmlyc3RDaGlsZE5vZGUiLCJmaXJzdENoaWxkTm9kZSIsImdldEZvb3Rub3RlSFRNTE5vZGUiLCJub2RlIiwiZ2V0Tm9kZSIsImZvb3Rub3RlSFRNTE5vZGUiLCJmcm9tU2Vjb25kQ2hpbGROb2RlIiwic2Vjb25kQ2hpbGROb2RlIiwiaWRlbnRpZmllciIsImNvbnRleHQiLCJmcm9tRm9vdG5vdGVIVE1MTm9kZSIsImZvb3Rub3RlSFRNTE5kZSIsImh0bWxOb2RlIiwiZm9vdG5vdGVIVE1MVHJhbnNmb3JtIiwiSFRNTFRyYW5zZm9ybSIsImZyb21IVE5MTk9kZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFJcUJBOzs7MkRBRks7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFWCxJQUFBLEFBQU1BLHNDQUFOO2NBQU1BO2FBQUFBO2dDQUFBQTtlQUFOLGtCQUFNQTs7a0JBQUFBOztZQUNuQkMsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQU1DLG9CQUFvQixJQUFJLENBQUNDLG9CQUFvQixJQUM3Q0MsZUFBZUYsa0JBQWtCRyxrQkFBa0IsQ0FBQyxTQUFDQztvQkFDbkQsSUFBTUYsZUFBZUUsZ0JBQWlCLEdBQUc7b0JBRXpDLE9BQU9GO2dCQUNUO2dCQUVOLE9BQU9BO1lBQ1Q7OztZQUVBRyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBTUMsT0FBTyxJQUFJLENBQUNDLE9BQU8sSUFDbkJDLG1CQUFtQkYsTUFBTyxHQUFHO2dCQUVuQyxPQUFPRTtZQUNUOzs7WUFFQVAsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQU1PLG1CQUFtQixJQUFJLENBQUNILG1CQUFtQixJQUMzQ0wsb0JBQW9CUSxpQkFBaUJDLG1CQUFtQixDQUFDLFNBQUNDO29CQUN4RCxJQUFNVixvQkFBb0JVLGlCQUFrQixHQUFHO29CQUUvQyxPQUFPVjtnQkFDVDtnQkFFTixPQUFPQTtZQUNUOzs7WUFFQVcsS0FBQUE7bUJBQUFBLFNBQUFBLFdBQVdDLE9BQU87Z0JBQ2hCLElBQU1KLG1CQUFtQixJQUFJLENBQUNILG1CQUFtQixJQUMzQ00sYUFBYUgsaUJBQWlCRyxVQUFVLENBQUNDO2dCQUUvQyxPQUFPRDtZQUNUOzs7O1lBRU9FLEtBQUFBO21CQUFQLFNBQU9BLHFCQUFxQkMsZUFBZTtnQkFDekMsSUFBTUMsV0FBV0QsaUJBQ1hFLHdCQUF3QkMsYUFBYSxDQUFDQyxZQUFZLENBdkN2Q3BCLHVCQXVDK0RpQjtnQkFFaEYsT0FBT0M7WUFDVDs7O1dBMUNtQmxCO0VBQThCbUIsYUFBYSJ9