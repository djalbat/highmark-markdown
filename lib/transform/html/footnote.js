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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy90cmFuc2Zvcm0vaHRtbC9mb290bm90ZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IEhUTUxUcmFuc2Zvcm0gZnJvbSBcIi4uLy4uL3RyYW5zZm9ybS9odG1sXCJcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRm9vdG5vdGVIVE1MVHJhbnNmb3JtIGV4dGVuZHMgSFRNTFRyYW5zZm9ybSB7XG4gIGdldEZvb3Rub3RlSFRNTE5vZGUoKSB7XG4gICAgY29uc3Qgbm9kZSA9IHRoaXMuZ2V0Tm9kZSgpLFxuICAgICAgICAgIGZvb3Rub3RlSFRNTE5vZGUgPSBub2RlOyAgLy8vXG5cbiAgICByZXR1cm4gZm9vdG5vdGVIVE1MTm9kZTtcbiAgfVxuXG4gIGdldFBhcmFncmFwaEhUTUxOb2RlKCkge1xuICAgIGNvbnN0IGZvb3Rub3RlSFRNTE5vZGUgPSB0aGlzLmdldEZvb3Rub3RlSFRNTE5vZGUoKSxcbiAgICAgICAgICBwYXJhZ3JhcGhIVE1MTm9kZSA9IGZvb3Rub3RlSFRNTE5vZGUuZnJvbVNlY29uZENoaWxkTm9kZSgoc2Vjb25kQ2hpbGROb2RlKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBwYXJhZ3JhcGhIVE1MTm9kZSA9IHNlY29uZENoaWxkTm9kZTsgIC8vL1xuXG4gICAgICAgICAgICByZXR1cm4gcGFyYWdyYXBoSFRNTE5vZGU7XG4gICAgICAgICAgfSk7XG5cbiAgICByZXR1cm4gcGFyYWdyYXBoSFRNTE5vZGU7XG4gIH1cblxuICBzdGF0aWMgZnJvbUZvb3Rub3RlSFRNTE5vZGUoZm9vdG5vdGVIVE1MTmRlLCBjb250ZXh0KSB7XG4gICAgY29uc3QgaHRtbE5vZGUgPSBmb290bm90ZUhUTUxOZGUsIC8vL1xuICAgICAgICAgIGZvb3Rub3RlSFRNTFRyYW5zZm9ybSA9IEhUTUxUcmFuc2Zvcm0uZnJvbUhUTkxOT2RlKEZvb3Rub3RlSFRNTFRyYW5zZm9ybSwgaHRtbE5vZGUsIGNvbnRleHQpO1xuXG4gICAgcmV0dXJuIGZvb3Rub3RlSFRNTFRyYW5zZm9ybTtcbiAgfVxufVxuIl0sIm5hbWVzIjpbIkZvb3Rub3RlSFRNTFRyYW5zZm9ybSIsImdldEZvb3Rub3RlSFRNTE5vZGUiLCJub2RlIiwiZ2V0Tm9kZSIsImZvb3Rub3RlSFRNTE5vZGUiLCJnZXRQYXJhZ3JhcGhIVE1MTm9kZSIsInBhcmFncmFwaEhUTUxOb2RlIiwiZnJvbVNlY29uZENoaWxkTm9kZSIsInNlY29uZENoaWxkTm9kZSIsImZyb21Gb290bm90ZUhUTUxOb2RlIiwiZm9vdG5vdGVIVE1MTmRlIiwiY29udGV4dCIsImh0bWxOb2RlIiwiZm9vdG5vdGVIVE1MVHJhbnNmb3JtIiwiSFRNTFRyYW5zZm9ybSIsImZyb21IVE5MTk9kZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFJcUJBOzs7MkRBRks7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFWCxJQUFBLEFBQU1BLHNDQUFOO2NBQU1BO2FBQUFBO2dDQUFBQTtlQUFOLGtCQUFNQTs7a0JBQUFBOztZQUNuQkMsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQU1DLE9BQU8sSUFBSSxDQUFDQyxPQUFPLElBQ25CQyxtQkFBbUJGLE1BQU8sR0FBRztnQkFFbkMsT0FBT0U7WUFDVDs7O1lBRUFDLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFNRCxtQkFBbUIsSUFBSSxDQUFDSCxtQkFBbUIsSUFDM0NLLG9CQUFvQkYsaUJBQWlCRyxtQkFBbUIsQ0FBQyxTQUFDQztvQkFDeEQsSUFBTUYsb0JBQW9CRSxpQkFBa0IsR0FBRztvQkFFL0MsT0FBT0Y7Z0JBQ1Q7Z0JBRU4sT0FBT0E7WUFDVDs7OztZQUVPRyxLQUFBQTttQkFBUCxTQUFPQSxxQkFBcUJDLGVBQWUsRUFBRUMsT0FBTztnQkFDbEQsSUFBTUMsV0FBV0YsaUJBQ1hHLHdCQUF3QkMsYUFBYSxDQUFDQyxZQUFZLENBckJ2Q2YsdUJBcUIrRFksVUFBVUQ7Z0JBRTFGLE9BQU9FO1lBQ1Q7OztXQXhCbUJiO0VBQThCYyxhQUFhIn0=