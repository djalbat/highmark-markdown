"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return DivisionHTMLNode;
    }
});
var _html = /*#__PURE__*/ _interop_require_default(require("../../node/html"));
var _footnote = /*#__PURE__*/ _interop_require_default(require("../../transform/html/footnote"));
var _html1 = require("../../utilities/html");
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
var DivisionHTMLNode = /*#__PURE__*/ function(HTMLNode) {
    _inherits(DivisionHTMLNode, HTMLNode);
    function DivisionHTMLNode() {
        _class_call_check(this, DivisionHTMLNode);
        return _call_super(this, DivisionHTMLNode, arguments);
    }
    _create_class(DivisionHTMLNode, [
        {
            key: "className",
            value: function className(context) {
                return this.outerNode.className(context);
            }
        },
        {
            key: "resolve",
            value: function resolve(context) {
            // const footnoteHTMLNodes = this.getFootnoteHTMLNodes(),
            //       footnoteHTMLTransforms = footnoteHTMLNodes.map((footnoteHTMLNode) => {
            //         const footnoteHTMLTransform = FootnoteHTMLTransform.fromFootnoteHTMLNode(footnoteHTMLNode, context);
            //
            //         return footnoteHTMLTransform;
            //       }),
            //       footnoteHTMLTransformsLength = footnoteHTMLTransforms.length;
            //
            // if (footnoteHTMLTransformsLength === 0) {
            //   return;
            // }
            //
            // const divisionHTMLNode = this;
            //
            // footnoteHTMLTransforms.forEach((footnoteHTMLTransform) => {
            //   footnoteHTMLTransform.removeFromDivisionHTMLNode(divisionHTMLNode, context);
            // });
            //
            // const footnotesDirectiveHTMLNode = this.getFootnotesDirectiveHTMLNode();
            //
            // if (footnotesDirectiveHTMLNode === null) {
            //   return;
            // }
            //
            // debugger
            }
        },
        {
            key: "getFootnoteHTMLNodes",
            value: function getFootnoteHTMLNodes() {
                var node = this, footnoteHTMLNodes = (0, _html1.footnoteHTMLNodesFromNode)(node);
                return footnoteHTMLNodes;
            }
        },
        {
            key: "getFootnotesDirectiveHTMLNode",
            value: function getFootnotesDirectiveHTMLNode() {
                var node = this, footnotesDirectiveHTMLNode = (0, _html1.footnotesDirectiveHTMLNodeFromNode)(node);
                return footnotesDirectiveHTMLNode;
            }
        }
    ], [
        {
            key: "fromNothing",
            value: function fromNothing() {
                return _html.default.fromNothing(DivisionHTMLNode);
            }
        },
        {
            key: "fromOuterNode",
            value: function fromOuterNode(outerNode) {
                return _html.default.fromOuterNode(DivisionHTMLNode, outerNode);
            }
        }
    ]);
    return DivisionHTMLNode;
}(_html.default);
_define_property(DivisionHTMLNode, "tagName", "div");
_define_property(DivisionHTMLNode, "className", null);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ub2RlL2h0bWwvZGl2aXNpb24uanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBIVE1MTm9kZSBmcm9tIFwiLi4vLi4vbm9kZS9odG1sXCI7XG5pbXBvcnQgRm9vdG5vdGVIVE1MVHJhbnNmb3JtIGZyb20gXCIuLi8uLi90cmFuc2Zvcm0vaHRtbC9mb290bm90ZVwiO1xuXG5pbXBvcnQgeyBmb290bm90ZUhUTUxOb2Rlc0Zyb21Ob2RlLCBmb290bm90ZXNEaXJlY3RpdmVIVE1MTm9kZUZyb21Ob2RlIH0gZnJvbSBcIi4uLy4uL3V0aWxpdGllcy9odG1sXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERpdmlzaW9uSFRNTE5vZGUgZXh0ZW5kcyBIVE1MTm9kZSB7XG4gIGNsYXNzTmFtZShjb250ZXh0KSB7IHJldHVybiB0aGlzLm91dGVyTm9kZS5jbGFzc05hbWUoY29udGV4dCk7IH1cblxuICByZXNvbHZlKGNvbnRleHQpIHtcbiAgICAvLyBjb25zdCBmb290bm90ZUhUTUxOb2RlcyA9IHRoaXMuZ2V0Rm9vdG5vdGVIVE1MTm9kZXMoKSxcbiAgICAvLyAgICAgICBmb290bm90ZUhUTUxUcmFuc2Zvcm1zID0gZm9vdG5vdGVIVE1MTm9kZXMubWFwKChmb290bm90ZUhUTUxOb2RlKSA9PiB7XG4gICAgLy8gICAgICAgICBjb25zdCBmb290bm90ZUhUTUxUcmFuc2Zvcm0gPSBGb290bm90ZUhUTUxUcmFuc2Zvcm0uZnJvbUZvb3Rub3RlSFRNTE5vZGUoZm9vdG5vdGVIVE1MTm9kZSwgY29udGV4dCk7XG4gICAgLy9cbiAgICAvLyAgICAgICAgIHJldHVybiBmb290bm90ZUhUTUxUcmFuc2Zvcm07XG4gICAgLy8gICAgICAgfSksXG4gICAgLy8gICAgICAgZm9vdG5vdGVIVE1MVHJhbnNmb3Jtc0xlbmd0aCA9IGZvb3Rub3RlSFRNTFRyYW5zZm9ybXMubGVuZ3RoO1xuICAgIC8vXG4gICAgLy8gaWYgKGZvb3Rub3RlSFRNTFRyYW5zZm9ybXNMZW5ndGggPT09IDApIHtcbiAgICAvLyAgIHJldHVybjtcbiAgICAvLyB9XG4gICAgLy9cbiAgICAvLyBjb25zdCBkaXZpc2lvbkhUTUxOb2RlID0gdGhpcztcbiAgICAvL1xuICAgIC8vIGZvb3Rub3RlSFRNTFRyYW5zZm9ybXMuZm9yRWFjaCgoZm9vdG5vdGVIVE1MVHJhbnNmb3JtKSA9PiB7XG4gICAgLy8gICBmb290bm90ZUhUTUxUcmFuc2Zvcm0ucmVtb3ZlRnJvbURpdmlzaW9uSFRNTE5vZGUoZGl2aXNpb25IVE1MTm9kZSwgY29udGV4dCk7XG4gICAgLy8gfSk7XG4gICAgLy9cbiAgICAvLyBjb25zdCBmb290bm90ZXNEaXJlY3RpdmVIVE1MTm9kZSA9IHRoaXMuZ2V0Rm9vdG5vdGVzRGlyZWN0aXZlSFRNTE5vZGUoKTtcbiAgICAvL1xuICAgIC8vIGlmIChmb290bm90ZXNEaXJlY3RpdmVIVE1MTm9kZSA9PT0gbnVsbCkge1xuICAgIC8vICAgcmV0dXJuO1xuICAgIC8vIH1cbiAgICAvL1xuICAgIC8vIGRlYnVnZ2VyXG4gIH1cblxuICBnZXRGb290bm90ZUhUTUxOb2RlcygpIHtcbiAgICBjb25zdCBub2RlID0gdGhpcywgIC8vL1xuICAgICAgICAgIGZvb3Rub3RlSFRNTE5vZGVzID0gZm9vdG5vdGVIVE1MTm9kZXNGcm9tTm9kZShub2RlKTtcblxuICAgIHJldHVybiBmb290bm90ZUhUTUxOb2RlcztcbiAgfVxuXG4gIGdldEZvb3Rub3Rlc0RpcmVjdGl2ZUhUTUxOb2RlKCkge1xuICAgIGNvbnN0IG5vZGUgPSB0aGlzLCAgLy8vXG4gICAgICAgICAgZm9vdG5vdGVzRGlyZWN0aXZlSFRNTE5vZGUgPSBmb290bm90ZXNEaXJlY3RpdmVIVE1MTm9kZUZyb21Ob2RlKG5vZGUpXG5cbiAgICByZXR1cm4gZm9vdG5vdGVzRGlyZWN0aXZlSFRNTE5vZGU7XG4gIH1cblxuICBzdGF0aWMgdGFnTmFtZSA9IFwiZGl2XCI7XG5cbiAgc3RhdGljIGNsYXNzTmFtZSA9IG51bGw7XG5cbiAgc3RhdGljIGZyb21Ob3RoaW5nKCkgeyByZXR1cm4gSFRNTE5vZGUuZnJvbU5vdGhpbmcoRGl2aXNpb25IVE1MTm9kZSk7IH1cblxuICBzdGF0aWMgZnJvbU91dGVyTm9kZShvdXRlck5vZGUpIHsgcmV0dXJuIEhUTUxOb2RlLmZyb21PdXRlck5vZGUoRGl2aXNpb25IVE1MTm9kZSwgb3V0ZXJOb2RlKTsgfVxufVxuIl0sIm5hbWVzIjpbIkRpdmlzaW9uSFRNTE5vZGUiLCJjbGFzc05hbWUiLCJjb250ZXh0Iiwib3V0ZXJOb2RlIiwicmVzb2x2ZSIsImdldEZvb3Rub3RlSFRNTE5vZGVzIiwibm9kZSIsImZvb3Rub3RlSFRNTE5vZGVzIiwiZm9vdG5vdGVIVE1MTm9kZXNGcm9tTm9kZSIsImdldEZvb3Rub3Rlc0RpcmVjdGl2ZUhUTUxOb2RlIiwiZm9vdG5vdGVzRGlyZWN0aXZlSFRNTE5vZGUiLCJmb290bm90ZXNEaXJlY3RpdmVIVE1MTm9kZUZyb21Ob2RlIiwiZnJvbU5vdGhpbmciLCJIVE1MTm9kZSIsImZyb21PdXRlck5vZGUiLCJ0YWdOYW1lIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQU9xQkE7OzsyREFMQTsrREFDYTtxQkFFNEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRS9ELElBQUEsQUFBTUEsaUNBQU47Y0FBTUE7YUFBQUE7Z0NBQUFBO2VBQU4sa0JBQU1BOztrQkFBQUE7O1lBQ25CQyxLQUFBQTttQkFBQUEsU0FBQUEsVUFBVUMsT0FBTztnQkFBSSxPQUFPLElBQUksQ0FBQ0MsU0FBUyxDQUFDRixTQUFTLENBQUNDO1lBQVU7OztZQUUvREUsS0FBQUE7bUJBQUFBLFNBQUFBLFFBQVFGLE9BQU87WUFDYix5REFBeUQ7WUFDekQsK0VBQStFO1lBQy9FLCtHQUErRztZQUMvRyxFQUFFO1lBQ0Ysd0NBQXdDO1lBQ3hDLFlBQVk7WUFDWixzRUFBc0U7WUFDdEUsRUFBRTtZQUNGLDRDQUE0QztZQUM1QyxZQUFZO1lBQ1osSUFBSTtZQUNKLEVBQUU7WUFDRixpQ0FBaUM7WUFDakMsRUFBRTtZQUNGLDhEQUE4RDtZQUM5RCxpRkFBaUY7WUFDakYsTUFBTTtZQUNOLEVBQUU7WUFDRiwyRUFBMkU7WUFDM0UsRUFBRTtZQUNGLDZDQUE2QztZQUM3QyxZQUFZO1lBQ1osSUFBSTtZQUNKLEVBQUU7WUFDRixXQUFXO1lBQ2I7OztZQUVBRyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBTUMsT0FBTyxJQUFJLEVBQ1hDLG9CQUFvQkMsSUFBQUEsZ0NBQXlCLEVBQUNGO2dCQUVwRCxPQUFPQztZQUNUOzs7WUFFQUUsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQU1ILE9BQU8sSUFBSSxFQUNYSSw2QkFBNkJDLElBQUFBLHlDQUFrQyxFQUFDTDtnQkFFdEUsT0FBT0k7WUFDVDs7OztZQU1PRSxLQUFBQTttQkFBUCxTQUFPQTtnQkFBZ0IsT0FBT0MsYUFBUSxDQUFDRCxXQUFXLENBakQvQlo7WUFpRG1EOzs7WUFFL0RjLEtBQUFBO21CQUFQLFNBQU9BLGNBQWNYLFNBQVM7Z0JBQUksT0FBT1UsYUFBUSxDQUFDQyxhQUFhLENBbkQ1Q2Qsa0JBbUQrREc7WUFBWTs7O1dBbkQzRUg7RUFBeUJhLGFBQVE7QUE2Q3BELGlCQTdDbUJiLGtCQTZDWmUsV0FBVTtBQUVqQixpQkEvQ21CZixrQkErQ1pDLGFBQVkifQ==