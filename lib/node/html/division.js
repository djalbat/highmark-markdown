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
var _footnotesList = /*#__PURE__*/ _interop_require_default(require("../../transform/html/footnotesList"));
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
                var footnoteHTMLNodes = this.getFootnoteHTMLNodes(), footnoteHTMLTransforms = footnoteHTMLNodes.map(function(footnoteHTMLNode) {
                    var footnoteHTMLTransform = _footnote.default.fromFootnoteHTMLNode(footnoteHTMLNode, context);
                    return footnoteHTMLTransform;
                }), footnoteHTMLTransformsLength = footnoteHTMLTransforms.length;
                if (footnoteHTMLTransformsLength === 0) {
                    return;
                }
                var divisionHTMLNode = this; ///
                footnoteHTMLTransforms.forEach(function(footnoteHTMLTransform) {
                    footnoteHTMLTransform.removeFromDivisionHTMLNode(divisionHTMLNode, context);
                });
                var footnotesDirectiveHTMLNode = this.getFootnotesDirectiveHTMLNode();
                if (footnotesDirectiveHTMLNode === null) {
                    return;
                }
            // const footnotesListHTMLTransform = FootnotesListHTMLTransform.fromDivisionHTMLNodeAndFootnoteHTMLTransforms(divisionHTMLNode, footnoteHTMLTransforms, context);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ub2RlL2h0bWwvZGl2aXNpb24uanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBIVE1MTm9kZSBmcm9tIFwiLi4vLi4vbm9kZS9odG1sXCI7XG5pbXBvcnQgRm9vdG5vdGVIVE1MVHJhbnNmb3JtIGZyb20gXCIuLi8uLi90cmFuc2Zvcm0vaHRtbC9mb290bm90ZVwiO1xuXG5pbXBvcnQgeyBmb290bm90ZUhUTUxOb2Rlc0Zyb21Ob2RlLCBmb290bm90ZXNEaXJlY3RpdmVIVE1MTm9kZUZyb21Ob2RlIH0gZnJvbSBcIi4uLy4uL3V0aWxpdGllcy9odG1sXCI7XG5pbXBvcnQgRm9vdG5vdGVzTGlzdEhUTUxUcmFuc2Zvcm0gZnJvbSBcIi4uLy4uL3RyYW5zZm9ybS9odG1sL2Zvb3Rub3Rlc0xpc3RcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRGl2aXNpb25IVE1MTm9kZSBleHRlbmRzIEhUTUxOb2RlIHtcbiAgY2xhc3NOYW1lKGNvbnRleHQpIHsgcmV0dXJuIHRoaXMub3V0ZXJOb2RlLmNsYXNzTmFtZShjb250ZXh0KTsgfVxuXG4gIHJlc29sdmUoY29udGV4dCkge1xuICAgIGNvbnN0IGZvb3Rub3RlSFRNTE5vZGVzID0gdGhpcy5nZXRGb290bm90ZUhUTUxOb2RlcygpLFxuICAgICAgICAgIGZvb3Rub3RlSFRNTFRyYW5zZm9ybXMgPSBmb290bm90ZUhUTUxOb2Rlcy5tYXAoKGZvb3Rub3RlSFRNTE5vZGUpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGZvb3Rub3RlSFRNTFRyYW5zZm9ybSA9IEZvb3Rub3RlSFRNTFRyYW5zZm9ybS5mcm9tRm9vdG5vdGVIVE1MTm9kZShmb290bm90ZUhUTUxOb2RlLCBjb250ZXh0KTtcblxuICAgICAgICAgICAgcmV0dXJuIGZvb3Rub3RlSFRNTFRyYW5zZm9ybTtcbiAgICAgICAgICB9KSxcbiAgICAgICAgICBmb290bm90ZUhUTUxUcmFuc2Zvcm1zTGVuZ3RoID0gZm9vdG5vdGVIVE1MVHJhbnNmb3Jtcy5sZW5ndGg7XG5cbiAgICBpZiAoZm9vdG5vdGVIVE1MVHJhbnNmb3Jtc0xlbmd0aCA9PT0gMCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IGRpdmlzaW9uSFRNTE5vZGUgPSB0aGlzOyAgLy8vXG5cbiAgICBmb290bm90ZUhUTUxUcmFuc2Zvcm1zLmZvckVhY2goKGZvb3Rub3RlSFRNTFRyYW5zZm9ybSkgPT4ge1xuICAgICAgZm9vdG5vdGVIVE1MVHJhbnNmb3JtLnJlbW92ZUZyb21EaXZpc2lvbkhUTUxOb2RlKGRpdmlzaW9uSFRNTE5vZGUsIGNvbnRleHQpO1xuICAgIH0pO1xuXG4gICAgY29uc3QgZm9vdG5vdGVzRGlyZWN0aXZlSFRNTE5vZGUgPSB0aGlzLmdldEZvb3Rub3Rlc0RpcmVjdGl2ZUhUTUxOb2RlKCk7XG5cbiAgICBpZiAoZm9vdG5vdGVzRGlyZWN0aXZlSFRNTE5vZGUgPT09IG51bGwpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICAvLyBjb25zdCBmb290bm90ZXNMaXN0SFRNTFRyYW5zZm9ybSA9IEZvb3Rub3Rlc0xpc3RIVE1MVHJhbnNmb3JtLmZyb21EaXZpc2lvbkhUTUxOb2RlQW5kRm9vdG5vdGVIVE1MVHJhbnNmb3JtcyhkaXZpc2lvbkhUTUxOb2RlLCBmb290bm90ZUhUTUxUcmFuc2Zvcm1zLCBjb250ZXh0KTtcblxuXG5cbiAgfVxuXG4gIGdldEZvb3Rub3RlSFRNTE5vZGVzKCkge1xuICAgIGNvbnN0IG5vZGUgPSB0aGlzLCAgLy8vXG4gICAgICAgICAgZm9vdG5vdGVIVE1MTm9kZXMgPSBmb290bm90ZUhUTUxOb2Rlc0Zyb21Ob2RlKG5vZGUpO1xuXG4gICAgcmV0dXJuIGZvb3Rub3RlSFRNTE5vZGVzO1xuICB9XG5cbiAgZ2V0Rm9vdG5vdGVzRGlyZWN0aXZlSFRNTE5vZGUoKSB7XG4gICAgY29uc3Qgbm9kZSA9IHRoaXMsICAvLy9cbiAgICAgICAgICBmb290bm90ZXNEaXJlY3RpdmVIVE1MTm9kZSA9IGZvb3Rub3Rlc0RpcmVjdGl2ZUhUTUxOb2RlRnJvbU5vZGUobm9kZSlcblxuICAgIHJldHVybiBmb290bm90ZXNEaXJlY3RpdmVIVE1MTm9kZTtcbiAgfVxuXG4gIHN0YXRpYyB0YWdOYW1lID0gXCJkaXZcIjtcblxuICBzdGF0aWMgY2xhc3NOYW1lID0gbnVsbDtcblxuICBzdGF0aWMgZnJvbU5vdGhpbmcoKSB7IHJldHVybiBIVE1MTm9kZS5mcm9tTm90aGluZyhEaXZpc2lvbkhUTUxOb2RlKTsgfVxuXG4gIHN0YXRpYyBmcm9tT3V0ZXJOb2RlKG91dGVyTm9kZSkgeyByZXR1cm4gSFRNTE5vZGUuZnJvbU91dGVyTm9kZShEaXZpc2lvbkhUTUxOb2RlLCBvdXRlck5vZGUpOyB9XG59XG4iXSwibmFtZXMiOlsiRGl2aXNpb25IVE1MTm9kZSIsImNsYXNzTmFtZSIsImNvbnRleHQiLCJvdXRlck5vZGUiLCJyZXNvbHZlIiwiZm9vdG5vdGVIVE1MTm9kZXMiLCJnZXRGb290bm90ZUhUTUxOb2RlcyIsImZvb3Rub3RlSFRNTFRyYW5zZm9ybXMiLCJtYXAiLCJmb290bm90ZUhUTUxOb2RlIiwiZm9vdG5vdGVIVE1MVHJhbnNmb3JtIiwiRm9vdG5vdGVIVE1MVHJhbnNmb3JtIiwiZnJvbUZvb3Rub3RlSFRNTE5vZGUiLCJmb290bm90ZUhUTUxUcmFuc2Zvcm1zTGVuZ3RoIiwibGVuZ3RoIiwiZGl2aXNpb25IVE1MTm9kZSIsImZvckVhY2giLCJyZW1vdmVGcm9tRGl2aXNpb25IVE1MTm9kZSIsImZvb3Rub3Rlc0RpcmVjdGl2ZUhUTUxOb2RlIiwiZ2V0Rm9vdG5vdGVzRGlyZWN0aXZlSFRNTE5vZGUiLCJub2RlIiwiZm9vdG5vdGVIVE1MTm9kZXNGcm9tTm9kZSIsImZvb3Rub3Rlc0RpcmVjdGl2ZUhUTUxOb2RlRnJvbU5vZGUiLCJmcm9tTm90aGluZyIsIkhUTUxOb2RlIiwiZnJvbU91dGVyTm9kZSIsInRhZ05hbWUiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBUXFCQTs7OzJEQU5BOytEQUNhO3FCQUU0QztvRUFDdkM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRXhCLElBQUEsQUFBTUEsaUNBQU47Y0FBTUE7YUFBQUE7Z0NBQUFBO2VBQU4sa0JBQU1BOztrQkFBQUE7O1lBQ25CQyxLQUFBQTttQkFBQUEsU0FBQUEsVUFBVUMsT0FBTztnQkFBSSxPQUFPLElBQUksQ0FBQ0MsU0FBUyxDQUFDRixTQUFTLENBQUNDO1lBQVU7OztZQUUvREUsS0FBQUE7bUJBQUFBLFNBQUFBLFFBQVFGLE9BQU87Z0JBQ2IsSUFBTUcsb0JBQW9CLElBQUksQ0FBQ0Msb0JBQW9CLElBQzdDQyx5QkFBeUJGLGtCQUFrQkcsR0FBRyxDQUFDLFNBQUNDO29CQUM5QyxJQUFNQyx3QkFBd0JDLGlCQUFxQixDQUFDQyxvQkFBb0IsQ0FBQ0gsa0JBQWtCUDtvQkFFM0YsT0FBT1E7Z0JBQ1QsSUFDQUcsK0JBQStCTix1QkFBdUJPLE1BQU07Z0JBRWxFLElBQUlELGlDQUFpQyxHQUFHO29CQUN0QztnQkFDRjtnQkFFQSxJQUFNRSxtQkFBbUIsSUFBSSxFQUFHLEdBQUc7Z0JBRW5DUix1QkFBdUJTLE9BQU8sQ0FBQyxTQUFDTjtvQkFDOUJBLHNCQUFzQk8sMEJBQTBCLENBQUNGLGtCQUFrQmI7Z0JBQ3JFO2dCQUVBLElBQU1nQiw2QkFBNkIsSUFBSSxDQUFDQyw2QkFBNkI7Z0JBRXJFLElBQUlELCtCQUErQixNQUFNO29CQUN2QztnQkFDRjtZQUVBLGtLQUFrSztZQUlwSzs7O1lBRUFaLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFNYyxPQUFPLElBQUksRUFDWGYsb0JBQW9CZ0IsSUFBQUEsZ0NBQXlCLEVBQUNEO2dCQUVwRCxPQUFPZjtZQUNUOzs7WUFFQWMsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQU1DLE9BQU8sSUFBSSxFQUNYRiw2QkFBNkJJLElBQUFBLHlDQUFrQyxFQUFDRjtnQkFFdEUsT0FBT0Y7WUFDVDs7OztZQU1PSyxLQUFBQTttQkFBUCxTQUFPQTtnQkFBZ0IsT0FBT0MsYUFBUSxDQUFDRCxXQUFXLENBcEQvQnZCO1lBb0RtRDs7O1lBRS9EeUIsS0FBQUE7bUJBQVAsU0FBT0EsY0FBY3RCLFNBQVM7Z0JBQUksT0FBT3FCLGFBQVEsQ0FBQ0MsYUFBYSxDQXRENUN6QixrQkFzRCtERztZQUFZOzs7V0F0RDNFSDtFQUF5QndCLGFBQVE7QUFnRHBELGlCQWhEbUJ4QixrQkFnRFowQixXQUFVO0FBRWpCLGlCQWxEbUIxQixrQkFrRFpDLGFBQVkifQ==