"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return IndexHTMLTransform;
    }
});
var _html = /*#__PURE__*/ _interop_require_default(require("../../transform/html"));
var _letters = /*#__PURE__*/ _interop_require_default(require("../../letters"));
var _list = /*#__PURE__*/ _interop_require_default(require("../../index/list"));
var _index = /*#__PURE__*/ _interop_require_default(require("../../transform/html/list/index"));
var _index1 = /*#__PURE__*/ _interop_require_default(require("../../transform/html/heading/index"));
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
var IndexHTMLTransform = /*#__PURE__*/ function(HTMLTransform) {
    _inherits(IndexHTMLTransform, HTMLTransform);
    function IndexHTMLTransform(htmlNode, htmlNodes) {
        _class_call_check(this, IndexHTMLTransform);
        var _this;
        _this = _call_super(this, IndexHTMLTransform, [
            htmlNode
        ]);
        _this.htmlNodes = htmlNodes;
        return _this;
    }
    _create_class(IndexHTMLTransform, [
        {
            key: "getHTMLNodes",
            value: function getHTMLNodes() {
                return this.htmlNodes;
            }
        }
    ], [
        {
            key: "fromDivisionHTMLNodes",
            value: // replace(replacedNode, parentNode, context) {
            //   let tokens;
            //
            //   tokens = this.getTokens();
            //
            //   const replacementNodes = this.nodes,  ///
            //         replacementTokens = tokens; ///
            //
            //   ({ tokens } = context);
            //
            //   replaceNodes(replacementNodes, replacedNode, parentNode);
            //
            //   replaceTokens(replacementTokens, replacedNode, tokens);
            // }
            // replaceIndexDirectiveSubdivisionHTMLTransform(indexDirectiveSubDivisionHTMLTransform, context) {
            //   const subDivisionHTMLNode = indexDirectiveSubDivisionHTMLTransform.getSubDivisionHTMLNode(),
            //         replacedNode = subDivisionHTMLNode;  ///
            //
            //   this.replace(replacedNode, context)
            // }
            function fromDivisionHTMLNodes(divisionHTMLNodes, context) {
                var indexHTMLTransform = null;
                var indexList = _list.default.fromDivisionHTMLNodes(divisionHTMLNodes, context), indexHTMLTransforms = [];
                _letters.default.forEach(function(letter) {
                    var indexListHTMLTransform = _index.default.fromIndexListAndLetter(indexList, letter);
                    if (indexListHTMLTransform !== null) {
                        var indexHTMLTransform;
                        var indexHeadingHTMLTransform = _index1.default.fromLetter(letter);
                        indexHTMLTransform = indexHeadingHTMLTransform; ///
                        indexHTMLTransforms.push(indexHTMLTransform);
                        indexHTMLTransform = indexListHTMLTransform; ///
                        indexHTMLTransforms.push(indexHTMLTransform);
                    }
                });
                var indexListHTMLTransformsLength = indexHTMLTransforms.length;
                if (indexListHTMLTransformsLength > 0) {
                    var htmlNode = null, htmlNodes = [];
                    indexHTMLTransforms.forEach(function(indexHTMLTransform) {
                        var htmlNode = indexHTMLTransform.getNode();
                        htmlNodes.push(htmlNode);
                    });
                    indexHTMLTransform = _html.default.fromHTNLNode(IndexHTMLTransform, htmlNode, htmlNodes);
                }
                return indexHTMLTransform;
            }
        }
    ]);
    return IndexHTMLTransform;
}(_html.default);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy90cmFuc2Zvcm0vaHRtbC9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IEhUTUxUcmFuc2Zvcm0gZnJvbSBcIi4uLy4uL3RyYW5zZm9ybS9odG1sXCI7XG5cbmltcG9ydCBsZXR0ZXJzIGZyb20gXCIuLi8uLi9sZXR0ZXJzXCI7XG5pbXBvcnQgSW5kZXhMaXN0IGZyb20gXCIuLi8uLi9pbmRleC9saXN0XCI7XG5pbXBvcnQgSW5kZXhMaXN0SFRNTFRyYW5zZm9ybSBmcm9tIFwiLi4vLi4vdHJhbnNmb3JtL2h0bWwvbGlzdC9pbmRleFwiO1xuaW1wb3J0IEluZGV4SGVhZGluZ0hUTUxUcmFuc2Zvcm0gZnJvbSBcIi4uLy4uL3RyYW5zZm9ybS9odG1sL2hlYWRpbmcvaW5kZXhcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW5kZXhIVE1MVHJhbnNmb3JtIGV4dGVuZHMgSFRNTFRyYW5zZm9ybSB7XG4gIGNvbnN0cnVjdG9yKGh0bWxOb2RlLCBodG1sTm9kZXMpIHtcbiAgICBzdXBlcihodG1sTm9kZSk7XG5cbiAgICB0aGlzLmh0bWxOb2RlcyA9IGh0bWxOb2RlcztcbiAgfVxuXG4gIGdldEhUTUxOb2RlcygpIHtcbiAgICByZXR1cm4gdGhpcy5odG1sTm9kZXM7XG4gIH1cblxuICAvLyByZXBsYWNlKHJlcGxhY2VkTm9kZSwgcGFyZW50Tm9kZSwgY29udGV4dCkge1xuICAvLyAgIGxldCB0b2tlbnM7XG4gIC8vXG4gIC8vICAgdG9rZW5zID0gdGhpcy5nZXRUb2tlbnMoKTtcbiAgLy9cbiAgLy8gICBjb25zdCByZXBsYWNlbWVudE5vZGVzID0gdGhpcy5ub2RlcywgIC8vL1xuICAvLyAgICAgICAgIHJlcGxhY2VtZW50VG9rZW5zID0gdG9rZW5zOyAvLy9cbiAgLy9cbiAgLy8gICAoeyB0b2tlbnMgfSA9IGNvbnRleHQpO1xuICAvL1xuICAvLyAgIHJlcGxhY2VOb2RlcyhyZXBsYWNlbWVudE5vZGVzLCByZXBsYWNlZE5vZGUsIHBhcmVudE5vZGUpO1xuICAvL1xuICAvLyAgIHJlcGxhY2VUb2tlbnMocmVwbGFjZW1lbnRUb2tlbnMsIHJlcGxhY2VkTm9kZSwgdG9rZW5zKTtcbiAgLy8gfVxuXG4gIC8vIHJlcGxhY2VJbmRleERpcmVjdGl2ZVN1YmRpdmlzaW9uSFRNTFRyYW5zZm9ybShpbmRleERpcmVjdGl2ZVN1YkRpdmlzaW9uSFRNTFRyYW5zZm9ybSwgY29udGV4dCkge1xuICAvLyAgIGNvbnN0IHN1YkRpdmlzaW9uSFRNTE5vZGUgPSBpbmRleERpcmVjdGl2ZVN1YkRpdmlzaW9uSFRNTFRyYW5zZm9ybS5nZXRTdWJEaXZpc2lvbkhUTUxOb2RlKCksXG4gIC8vICAgICAgICAgcmVwbGFjZWROb2RlID0gc3ViRGl2aXNpb25IVE1MTm9kZTsgIC8vL1xuICAvL1xuICAvLyAgIHRoaXMucmVwbGFjZShyZXBsYWNlZE5vZGUsIGNvbnRleHQpXG4gIC8vIH1cblxuICBzdGF0aWMgZnJvbURpdmlzaW9uSFRNTE5vZGVzKGRpdmlzaW9uSFRNTE5vZGVzLCBjb250ZXh0KSB7XG4gICAgbGV0IGluZGV4SFRNTFRyYW5zZm9ybSA9IG51bGw7XG5cbiAgICBjb25zdCBpbmRleExpc3QgPSBJbmRleExpc3QuZnJvbURpdmlzaW9uSFRNTE5vZGVzKGRpdmlzaW9uSFRNTE5vZGVzLCBjb250ZXh0KSxcbiAgICAgICAgICBpbmRleEhUTUxUcmFuc2Zvcm1zID0gW107XG5cbiAgICBsZXR0ZXJzLmZvckVhY2goKGxldHRlcikgPT4ge1xuICAgICAgY29uc3QgaW5kZXhMaXN0SFRNTFRyYW5zZm9ybSA9IEluZGV4TGlzdEhUTUxUcmFuc2Zvcm0uZnJvbUluZGV4TGlzdEFuZExldHRlcihpbmRleExpc3QsIGxldHRlcik7XG5cbiAgICAgIGlmIChpbmRleExpc3RIVE1MVHJhbnNmb3JtICE9PSBudWxsKSB7XG4gICAgICAgIGxldCBpbmRleEhUTUxUcmFuc2Zvcm07XG5cbiAgICAgICAgY29uc3QgaW5kZXhIZWFkaW5nSFRNTFRyYW5zZm9ybSA9IEluZGV4SGVhZGluZ0hUTUxUcmFuc2Zvcm0uZnJvbUxldHRlcihsZXR0ZXIpO1xuXG4gICAgICAgIGluZGV4SFRNTFRyYW5zZm9ybSA9IGluZGV4SGVhZGluZ0hUTUxUcmFuc2Zvcm07IC8vL1xuXG4gICAgICAgIGluZGV4SFRNTFRyYW5zZm9ybXMucHVzaChpbmRleEhUTUxUcmFuc2Zvcm0pO1xuXG4gICAgICAgIGluZGV4SFRNTFRyYW5zZm9ybSA9IGluZGV4TGlzdEhUTUxUcmFuc2Zvcm07ICAvLy9cblxuICAgICAgICBpbmRleEhUTUxUcmFuc2Zvcm1zLnB1c2goaW5kZXhIVE1MVHJhbnNmb3JtKTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGNvbnN0IGluZGV4TGlzdEhUTUxUcmFuc2Zvcm1zTGVuZ3RoID0gaW5kZXhIVE1MVHJhbnNmb3Jtcy5sZW5ndGg7XG5cbiAgICBpZiAoaW5kZXhMaXN0SFRNTFRyYW5zZm9ybXNMZW5ndGggPiAwKSB7XG4gICAgICBjb25zdCBodG1sTm9kZSA9IG51bGwsXG4gICAgICAgICAgICBodG1sTm9kZXMgPSBbXTtcblxuICAgICAgaW5kZXhIVE1MVHJhbnNmb3Jtcy5mb3JFYWNoKChpbmRleEhUTUxUcmFuc2Zvcm0pID0+IHtcbiAgICAgICAgY29uc3QgaHRtbE5vZGUgPSBpbmRleEhUTUxUcmFuc2Zvcm0uZ2V0Tm9kZSgpO1xuXG4gICAgICAgIGh0bWxOb2Rlcy5wdXNoKGh0bWxOb2RlKTtcbiAgICAgIH0pO1xuXG4gICAgICBpbmRleEhUTUxUcmFuc2Zvcm0gPSBIVE1MVHJhbnNmb3JtLmZyb21IVE5MTm9kZShJbmRleEhUTUxUcmFuc2Zvcm0sIGh0bWxOb2RlLCBodG1sTm9kZXMpO1xuICAgIH1cblxuICAgIHJldHVybiBpbmRleEhUTUxUcmFuc2Zvcm07XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJJbmRleEhUTUxUcmFuc2Zvcm0iLCJodG1sTm9kZSIsImh0bWxOb2RlcyIsImdldEhUTUxOb2RlcyIsImZyb21EaXZpc2lvbkhUTUxOb2RlcyIsImRpdmlzaW9uSFRNTE5vZGVzIiwiY29udGV4dCIsImluZGV4SFRNTFRyYW5zZm9ybSIsImluZGV4TGlzdCIsIkluZGV4TGlzdCIsImluZGV4SFRNTFRyYW5zZm9ybXMiLCJsZXR0ZXJzIiwiZm9yRWFjaCIsImxldHRlciIsImluZGV4TGlzdEhUTUxUcmFuc2Zvcm0iLCJJbmRleExpc3RIVE1MVHJhbnNmb3JtIiwiZnJvbUluZGV4TGlzdEFuZExldHRlciIsImluZGV4SGVhZGluZ0hUTUxUcmFuc2Zvcm0iLCJJbmRleEhlYWRpbmdIVE1MVHJhbnNmb3JtIiwiZnJvbUxldHRlciIsInB1c2giLCJpbmRleExpc3RIVE1MVHJhbnNmb3Jtc0xlbmd0aCIsImxlbmd0aCIsImdldE5vZGUiLCJIVE1MVHJhbnNmb3JtIiwiZnJvbUhUTkxOb2RlIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQVNxQkE7OzsyREFQSzs4REFFTjsyREFDRTs0REFDYTs2REFDRzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUV2QixJQUFBLEFBQU1BLG1DQUFOO2NBQU1BO2FBQUFBLG1CQUNQQyxRQUFRLEVBQUVDLFNBQVM7Z0NBRFpGOztnQkFFakIsa0JBRmlCQTtZQUVYQzs7UUFFTixNQUFLQyxTQUFTLEdBQUdBOzs7a0JBSkFGOztZQU9uQkcsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDRCxTQUFTO1lBQ3ZCOzs7O1lBd0JPRSxLQUFBQTttQkFBUCxBQXRCQSwrQ0FBK0M7WUFDL0MsZ0JBQWdCO1lBQ2hCLEVBQUU7WUFDRiwrQkFBK0I7WUFDL0IsRUFBRTtZQUNGLDhDQUE4QztZQUM5QywwQ0FBMEM7WUFDMUMsRUFBRTtZQUNGLDRCQUE0QjtZQUM1QixFQUFFO1lBQ0YsOERBQThEO1lBQzlELEVBQUU7WUFDRiw0REFBNEQ7WUFDNUQsSUFBSTtZQUVKLG1HQUFtRztZQUNuRyxpR0FBaUc7WUFDakcsbURBQW1EO1lBQ25ELEVBQUU7WUFDRix3Q0FBd0M7WUFDeEMsSUFBSTtZQUVKLFNBQU9BLHNCQUFzQkMsaUJBQWlCLEVBQUVDLE9BQU87Z0JBQ3JELElBQUlDLHFCQUFxQjtnQkFFekIsSUFBTUMsWUFBWUMsYUFBUyxDQUFDTCxxQkFBcUIsQ0FBQ0MsbUJBQW1CQyxVQUMvREksc0JBQXNCLEVBQUU7Z0JBRTlCQyxnQkFBTyxDQUFDQyxPQUFPLENBQUMsU0FBQ0M7b0JBQ2YsSUFBTUMseUJBQXlCQyxjQUFzQixDQUFDQyxzQkFBc0IsQ0FBQ1IsV0FBV0s7b0JBRXhGLElBQUlDLDJCQUEyQixNQUFNO3dCQUNuQyxJQUFJUDt3QkFFSixJQUFNVSw0QkFBNEJDLGVBQXlCLENBQUNDLFVBQVUsQ0FBQ047d0JBRXZFTixxQkFBcUJVLDJCQUEyQixHQUFHO3dCQUVuRFAsb0JBQW9CVSxJQUFJLENBQUNiO3dCQUV6QkEscUJBQXFCTyx3QkFBeUIsR0FBRzt3QkFFakRKLG9CQUFvQlUsSUFBSSxDQUFDYjtvQkFDM0I7Z0JBQ0Y7Z0JBRUEsSUFBTWMsZ0NBQWdDWCxvQkFBb0JZLE1BQU07Z0JBRWhFLElBQUlELGdDQUFnQyxHQUFHO29CQUNyQyxJQUFNcEIsV0FBVyxNQUNYQyxZQUFZLEVBQUU7b0JBRXBCUSxvQkFBb0JFLE9BQU8sQ0FBQyxTQUFDTDt3QkFDM0IsSUFBTU4sV0FBV00sbUJBQW1CZ0IsT0FBTzt3QkFFM0NyQixVQUFVa0IsSUFBSSxDQUFDbkI7b0JBQ2pCO29CQUVBTSxxQkFBcUJpQixhQUFhLENBQUNDLFlBQVksQ0FyRWhDekIsb0JBcUVxREMsVUFBVUM7Z0JBQ2hGO2dCQUVBLE9BQU9LO1lBQ1Q7OztXQXpFbUJQO0VBQTJCd0IsYUFBYSJ9