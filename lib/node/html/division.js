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
var _paragraph = /*#__PURE__*/ _interop_require_default(require("../../transform/html/paragraph"));
var _footnotesItem = /*#__PURE__*/ _interop_require_default(require("../../transform/html/footnotesItem"));
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
                var footnoteHTMLNodes = this.getFootnoteHTMLNodes(), footnoteHTMLTransforms = footnoteHTMLNodes.map(function(footnoteHTMLNode) {
                    var footnoteHTMLTransform = _footnote.default.fromFootnoteHTMLNode(footnoteHTMLNode, context);
                    return footnoteHTMLTransform;
                }), footnoteHTMLTransformsLength = footnoteHTMLTransforms.length;
                if (footnoteHTMLTransformsLength === 0) {
                    return;
                }
                footnoteHTMLTransforms.forEach(function(footnoteHTMLTransform) {
                // footnoteHTMLTransform.remove(context);
                });
                var footnotesDirectiveHTMLNode = this.getFootnotesDirectiveHTMLNode();
                if (footnotesDirectiveHTMLNode === null) {
                    return;
                }
                var paragraphHTMLTransforms = footnoteHTMLTransforms.map(function(footnoteHTMLTransform) {
                    var paragraphHTMLTransform = _paragraph.default.fromFootnoteHTMLTransform(footnoteHTMLTransform, context);
                    return paragraphHTMLTransform;
                });
                paragraphHTMLTransforms.forEach(function(paragraphHTMLTransform) {
                    paragraphHTMLTransform.remove(context);
                });
            // const footnotesItemHTMLTransforms = paragraphHTMLTransforms.map((paragraphHTMLTransform) => {
            //         const identifier = null,
            //               footnotesItemHTMLTransform = FootnotesItemHTMLTransform.fromParagraphHTMLTransformAndIdentifier(paragraphHTMLTransform, identifier, context);
            //
            //         return footnotesItemHTMLTransform;
            //       });
            // FootnotesListHTMLTransform.fromFootnotesItemHTMLTransforms(footnotesItemHTMLTransforms, context);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ub2RlL2h0bWwvZGl2aXNpb24uanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBIVE1MTm9kZSBmcm9tIFwiLi4vLi4vbm9kZS9odG1sXCI7XG5pbXBvcnQgRm9vdG5vdGVIVE1MVHJhbnNmb3JtIGZyb20gXCIuLi8uLi90cmFuc2Zvcm0vaHRtbC9mb290bm90ZVwiO1xuaW1wb3J0IFBhcmFncmFwaEhUTUxUcmFuc2Zvcm0gZnJvbSBcIi4uLy4uL3RyYW5zZm9ybS9odG1sL3BhcmFncmFwaFwiO1xuaW1wb3J0IEZvb3Rub3Rlc0l0ZW1IVE1MVHJhbnNmb3JtIGZyb20gXCIuLi8uLi90cmFuc2Zvcm0vaHRtbC9mb290bm90ZXNJdGVtXCI7XG4vLyBpbXBvcnQgRm9vdG5vdGVzTGlzdEhUTUxUcmFuc2Zvcm0gZnJvbSBcIi4uLy4uL3RyYW5zZm9ybS9odG1sL2Zvb3Rub3Rlc0xpc3RcIjtcblxuaW1wb3J0IHsgZm9vdG5vdGVIVE1MTm9kZXNGcm9tTm9kZSwgZm9vdG5vdGVzRGlyZWN0aXZlSFRNTE5vZGVGcm9tTm9kZSB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvaHRtbFwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEaXZpc2lvbkhUTUxOb2RlIGV4dGVuZHMgSFRNTE5vZGUge1xuICBjbGFzc05hbWUoY29udGV4dCkgeyByZXR1cm4gdGhpcy5vdXRlck5vZGUuY2xhc3NOYW1lKGNvbnRleHQpOyB9XG5cbiAgcmVzb2x2ZShjb250ZXh0KSB7XG4gICAgY29uc3QgZm9vdG5vdGVIVE1MTm9kZXMgPSB0aGlzLmdldEZvb3Rub3RlSFRNTE5vZGVzKCksXG4gICAgICAgICAgZm9vdG5vdGVIVE1MVHJhbnNmb3JtcyA9IGZvb3Rub3RlSFRNTE5vZGVzLm1hcCgoZm9vdG5vdGVIVE1MTm9kZSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgZm9vdG5vdGVIVE1MVHJhbnNmb3JtID0gRm9vdG5vdGVIVE1MVHJhbnNmb3JtLmZyb21Gb290bm90ZUhUTUxOb2RlKGZvb3Rub3RlSFRNTE5vZGUsIGNvbnRleHQpO1xuXG4gICAgICAgICAgICByZXR1cm4gZm9vdG5vdGVIVE1MVHJhbnNmb3JtO1xuICAgICAgICAgIH0pLFxuICAgICAgICAgIGZvb3Rub3RlSFRNTFRyYW5zZm9ybXNMZW5ndGggPSBmb290bm90ZUhUTUxUcmFuc2Zvcm1zLmxlbmd0aDtcblxuICAgIGlmIChmb290bm90ZUhUTUxUcmFuc2Zvcm1zTGVuZ3RoID09PSAwKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgZm9vdG5vdGVIVE1MVHJhbnNmb3Jtcy5mb3JFYWNoKChmb290bm90ZUhUTUxUcmFuc2Zvcm0pID0+IHtcbiAgICAgIC8vIGZvb3Rub3RlSFRNTFRyYW5zZm9ybS5yZW1vdmUoY29udGV4dCk7XG4gICAgfSk7XG5cbiAgICBjb25zdCBmb290bm90ZXNEaXJlY3RpdmVIVE1MTm9kZSA9IHRoaXMuZ2V0Rm9vdG5vdGVzRGlyZWN0aXZlSFRNTE5vZGUoKTtcblxuICAgIGlmIChmb290bm90ZXNEaXJlY3RpdmVIVE1MTm9kZSA9PT0gbnVsbCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IHBhcmFncmFwaEhUTUxUcmFuc2Zvcm1zID0gZm9vdG5vdGVIVE1MVHJhbnNmb3Jtcy5tYXAoKGZvb3Rub3RlSFRNTFRyYW5zZm9ybSkgPT4ge1xuICAgICAgY29uc3QgcGFyYWdyYXBoSFRNTFRyYW5zZm9ybSA9IFBhcmFncmFwaEhUTUxUcmFuc2Zvcm0uZnJvbUZvb3Rub3RlSFRNTFRyYW5zZm9ybShmb290bm90ZUhUTUxUcmFuc2Zvcm0sIGNvbnRleHQpO1xuXG4gICAgICByZXR1cm4gcGFyYWdyYXBoSFRNTFRyYW5zZm9ybTtcbiAgICB9KTtcblxuICAgIHBhcmFncmFwaEhUTUxUcmFuc2Zvcm1zLmZvckVhY2goKHBhcmFncmFwaEhUTUxUcmFuc2Zvcm0pID0+IHtcbiAgICAgIHBhcmFncmFwaEhUTUxUcmFuc2Zvcm0ucmVtb3ZlKGNvbnRleHQpO1xuICAgIH0pO1xuXG4gICAgLy8gY29uc3QgZm9vdG5vdGVzSXRlbUhUTUxUcmFuc2Zvcm1zID0gcGFyYWdyYXBoSFRNTFRyYW5zZm9ybXMubWFwKChwYXJhZ3JhcGhIVE1MVHJhbnNmb3JtKSA9PiB7XG4gICAgLy8gICAgICAgICBjb25zdCBpZGVudGlmaWVyID0gbnVsbCxcbiAgICAvLyAgICAgICAgICAgICAgIGZvb3Rub3Rlc0l0ZW1IVE1MVHJhbnNmb3JtID0gRm9vdG5vdGVzSXRlbUhUTUxUcmFuc2Zvcm0uZnJvbVBhcmFncmFwaEhUTUxUcmFuc2Zvcm1BbmRJZGVudGlmaWVyKHBhcmFncmFwaEhUTUxUcmFuc2Zvcm0sIGlkZW50aWZpZXIsIGNvbnRleHQpO1xuICAgIC8vXG4gICAgLy8gICAgICAgICByZXR1cm4gZm9vdG5vdGVzSXRlbUhUTUxUcmFuc2Zvcm07XG4gICAgLy8gICAgICAgfSk7XG5cbiAgICAvLyBGb290bm90ZXNMaXN0SFRNTFRyYW5zZm9ybS5mcm9tRm9vdG5vdGVzSXRlbUhUTUxUcmFuc2Zvcm1zKGZvb3Rub3Rlc0l0ZW1IVE1MVHJhbnNmb3JtcywgY29udGV4dCk7XG5cblxuXG4gIH1cblxuICBnZXRGb290bm90ZUhUTUxOb2RlcygpIHtcbiAgICBjb25zdCBub2RlID0gdGhpcywgIC8vL1xuICAgICAgICAgIGZvb3Rub3RlSFRNTE5vZGVzID0gZm9vdG5vdGVIVE1MTm9kZXNGcm9tTm9kZShub2RlKTtcblxuICAgIHJldHVybiBmb290bm90ZUhUTUxOb2RlcztcbiAgfVxuXG4gIGdldEZvb3Rub3Rlc0RpcmVjdGl2ZUhUTUxOb2RlKCkge1xuICAgIGNvbnN0IG5vZGUgPSB0aGlzLCAgLy8vXG4gICAgICAgICAgZm9vdG5vdGVzRGlyZWN0aXZlSFRNTE5vZGUgPSBmb290bm90ZXNEaXJlY3RpdmVIVE1MTm9kZUZyb21Ob2RlKG5vZGUpXG5cbiAgICByZXR1cm4gZm9vdG5vdGVzRGlyZWN0aXZlSFRNTE5vZGU7XG4gIH1cblxuICBzdGF0aWMgdGFnTmFtZSA9IFwiZGl2XCI7XG5cbiAgc3RhdGljIGNsYXNzTmFtZSA9IG51bGw7XG5cbiAgc3RhdGljIGZyb21Ob3RoaW5nKCkgeyByZXR1cm4gSFRNTE5vZGUuZnJvbU5vdGhpbmcoRGl2aXNpb25IVE1MTm9kZSk7IH1cblxuICBzdGF0aWMgZnJvbU91dGVyTm9kZShvdXRlck5vZGUpIHsgcmV0dXJuIEhUTUxOb2RlLmZyb21PdXRlck5vZGUoRGl2aXNpb25IVE1MTm9kZSwgb3V0ZXJOb2RlKTsgfVxufVxuIl0sIm5hbWVzIjpbIkRpdmlzaW9uSFRNTE5vZGUiLCJjbGFzc05hbWUiLCJjb250ZXh0Iiwib3V0ZXJOb2RlIiwicmVzb2x2ZSIsImZvb3Rub3RlSFRNTE5vZGVzIiwiZ2V0Rm9vdG5vdGVIVE1MTm9kZXMiLCJmb290bm90ZUhUTUxUcmFuc2Zvcm1zIiwibWFwIiwiZm9vdG5vdGVIVE1MTm9kZSIsImZvb3Rub3RlSFRNTFRyYW5zZm9ybSIsIkZvb3Rub3RlSFRNTFRyYW5zZm9ybSIsImZyb21Gb290bm90ZUhUTUxOb2RlIiwiZm9vdG5vdGVIVE1MVHJhbnNmb3Jtc0xlbmd0aCIsImxlbmd0aCIsImZvckVhY2giLCJmb290bm90ZXNEaXJlY3RpdmVIVE1MTm9kZSIsImdldEZvb3Rub3Rlc0RpcmVjdGl2ZUhUTUxOb2RlIiwicGFyYWdyYXBoSFRNTFRyYW5zZm9ybXMiLCJwYXJhZ3JhcGhIVE1MVHJhbnNmb3JtIiwiUGFyYWdyYXBoSFRNTFRyYW5zZm9ybSIsImZyb21Gb290bm90ZUhUTUxUcmFuc2Zvcm0iLCJyZW1vdmUiLCJub2RlIiwiZm9vdG5vdGVIVE1MTm9kZXNGcm9tTm9kZSIsImZvb3Rub3Rlc0RpcmVjdGl2ZUhUTUxOb2RlRnJvbU5vZGUiLCJmcm9tTm90aGluZyIsIkhUTUxOb2RlIiwiZnJvbU91dGVyTm9kZSIsInRhZ05hbWUiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBVXFCQTs7OzJEQVJBOytEQUNhO2dFQUNDO29FQUNJO3FCQUd1Qzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFL0QsSUFBQSxBQUFNQSxpQ0FBTjtjQUFNQTthQUFBQTtnQ0FBQUE7ZUFBTixrQkFBTUE7O2tCQUFBQTs7WUFDbkJDLEtBQUFBO21CQUFBQSxTQUFBQSxVQUFVQyxPQUFPO2dCQUFJLE9BQU8sSUFBSSxDQUFDQyxTQUFTLENBQUNGLFNBQVMsQ0FBQ0M7WUFBVTs7O1lBRS9ERSxLQUFBQTttQkFBQUEsU0FBQUEsUUFBUUYsT0FBTztnQkFDYixJQUFNRyxvQkFBb0IsSUFBSSxDQUFDQyxvQkFBb0IsSUFDN0NDLHlCQUF5QkYsa0JBQWtCRyxHQUFHLENBQUMsU0FBQ0M7b0JBQzlDLElBQU1DLHdCQUF3QkMsaUJBQXFCLENBQUNDLG9CQUFvQixDQUFDSCxrQkFBa0JQO29CQUUzRixPQUFPUTtnQkFDVCxJQUNBRywrQkFBK0JOLHVCQUF1Qk8sTUFBTTtnQkFFbEUsSUFBSUQsaUNBQWlDLEdBQUc7b0JBQ3RDO2dCQUNGO2dCQUVBTix1QkFBdUJRLE9BQU8sQ0FBQyxTQUFDTDtnQkFDOUIseUNBQXlDO2dCQUMzQztnQkFFQSxJQUFNTSw2QkFBNkIsSUFBSSxDQUFDQyw2QkFBNkI7Z0JBRXJFLElBQUlELCtCQUErQixNQUFNO29CQUN2QztnQkFDRjtnQkFFQSxJQUFNRSwwQkFBMEJYLHVCQUF1QkMsR0FBRyxDQUFDLFNBQUNFO29CQUMxRCxJQUFNUyx5QkFBeUJDLGtCQUFzQixDQUFDQyx5QkFBeUIsQ0FBQ1gsdUJBQXVCUjtvQkFFdkcsT0FBT2lCO2dCQUNUO2dCQUVBRCx3QkFBd0JILE9BQU8sQ0FBQyxTQUFDSTtvQkFDL0JBLHVCQUF1QkcsTUFBTSxDQUFDcEI7Z0JBQ2hDO1lBRUEsZ0dBQWdHO1lBQ2hHLG1DQUFtQztZQUNuQyw4SkFBOEo7WUFDOUosRUFBRTtZQUNGLDZDQUE2QztZQUM3QyxZQUFZO1lBRVosb0dBQW9HO1lBSXRHOzs7WUFFQUksS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQU1pQixPQUFPLElBQUksRUFDWGxCLG9CQUFvQm1CLElBQUFBLGdDQUF5QixFQUFDRDtnQkFFcEQsT0FBT2xCO1lBQ1Q7OztZQUVBWSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBTU0sT0FBTyxJQUFJLEVBQ1hQLDZCQUE2QlMsSUFBQUEseUNBQWtDLEVBQUNGO2dCQUV0RSxPQUFPUDtZQUNUOzs7O1lBTU9VLEtBQUFBO21CQUFQLFNBQU9BO2dCQUFnQixPQUFPQyxhQUFRLENBQUNELFdBQVcsQ0FuRS9CMUI7WUFtRW1EOzs7WUFFL0Q0QixLQUFBQTttQkFBUCxTQUFPQSxjQUFjekIsU0FBUztnQkFBSSxPQUFPd0IsYUFBUSxDQUFDQyxhQUFhLENBckU1QzVCLGtCQXFFK0RHO1lBQVk7OztXQXJFM0VIO0VBQXlCMkIsYUFBUTtBQStEcEQsaUJBL0RtQjNCLGtCQStEWjZCLFdBQVU7QUFFakIsaUJBakVtQjdCLGtCQWlFWkMsYUFBWSJ9