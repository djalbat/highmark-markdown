"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return IndexTransform;
    }
});
var _letters = /*#__PURE__*/ _interop_require_default(require("../letters"));
var _list = /*#__PURE__*/ _interop_require_default(require("../index/list"));
var _transform = /*#__PURE__*/ _interop_require_default(require("../transform"));
var _indexList = /*#__PURE__*/ _interop_require_default(require("../transform/indexList"));
var _indexHeading = /*#__PURE__*/ _interop_require_default(require("../transform/indexHeading"));
var _transform1 = require("../utilities/transform");
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
var IndexTransform = /*#__PURE__*/ function(Transform) {
    _inherits(IndexTransform, Transform);
    function IndexTransform(node, tokens, nodes) {
        _class_call_check(this, IndexTransform);
        var _this;
        _this = _call_super(this, IndexTransform, [
            node,
            tokens
        ]);
        _this.nodes = nodes;
        return _this;
    }
    _create_class(IndexTransform, [
        {
            key: "getNodes",
            value: function getNodes() {
                return this.nodes;
            }
        },
        {
            key: "replace",
            value: function replace(replacedNode, parentNode, context) {
                var tokens;
                tokens = this.getTokens();
                var replacementNodes = this.nodes, replacementTokens = tokens; ///
                tokens = context.tokens;
                (0, _transform1.replaceNodes)(replacementNodes, replacedNode, parentNode);
                (0, _transform1.replaceTokens)(replacementTokens, replacedNode, tokens);
            }
        },
        {
            key: "replaceIndexDirectiveSubdivisionTransform",
            value: function replaceIndexDirectiveSubdivisionTransform(indexDirectiveSubDivisionTransform, divisionMarkdownNode, context) {
                var subDivisionMarkdownNode = indexDirectiveSubDivisionTransform.getSubDivisionMarkdownNode(), replacedNode = subDivisionMarkdownNode, parentNode = divisionMarkdownNode; ///
                this.replace(replacedNode, parentNode, context);
            }
        }
    ], [
        {
            key: "fromDivisionMarkdownNodesAndDivisionMarkdownNode",
            value: function fromDivisionMarkdownNodesAndDivisionMarkdownNode(divisionMarkdownNodes, divisionMarkdownNode, context) {
                var indexTransform = null;
                var indexList = _list.default.fromDivisionMarkdownNodes(divisionMarkdownNodes, context), indexTransforms = [];
                _letters.default.forEach(function(letter) {
                    var indexListTransform = _indexList.default.fromIndexListAndLetter(indexList, letter, context);
                    if (indexListTransform !== null) {
                        var indexTransform;
                        var indexHeadingTransform = _indexHeading.default.fromLetter(letter, context);
                        indexTransform = indexHeadingTransform; ///
                        indexTransforms.push(indexTransform);
                        indexTransform = indexListTransform; ///
                        indexTransforms.push(indexTransform);
                    }
                });
                var indexListTransformsLength = indexTransforms.length;
                if (indexListTransformsLength > 0) {
                    var node = null, nodes = [], tokens = [];
                    indexTransforms.forEach(function(indexTransform) {
                        var node = indexTransform.getNode();
                        indexTransform.getTokens(tokens);
                        nodes.push(node);
                    });
                    indexTransform = _transform.default.fromNodeAndTokens(IndexTransform, node, tokens, nodes);
                }
                return indexTransform;
            }
        }
    ]);
    return IndexTransform;
}(_transform.default);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy90cmFuc2Zvcm0vaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBsZXR0ZXJzIGZyb20gXCIuLi9sZXR0ZXJzXCI7XG5pbXBvcnQgSW5kZXhMaXN0IGZyb20gXCIuLi9pbmRleC9saXN0XCI7XG5pbXBvcnQgVHJhbnNmb3JtIGZyb20gXCIuLi90cmFuc2Zvcm1cIjtcbmltcG9ydCBJbmRleExpc3RUcmFuc2Zvcm0gZnJvbSBcIi4uL3RyYW5zZm9ybS9pbmRleExpc3RcIjtcbmltcG9ydCBJbmRleEhlYWRpbmdUcmFuc2Zvcm0gZnJvbSBcIi4uL3RyYW5zZm9ybS9pbmRleEhlYWRpbmdcIjtcblxuaW1wb3J0IHsgcmVwbGFjZU5vZGVzLCByZXBsYWNlVG9rZW5zIH0gZnJvbSBcIi4uL3V0aWxpdGllcy90cmFuc2Zvcm1cIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW5kZXhUcmFuc2Zvcm0gZXh0ZW5kcyBUcmFuc2Zvcm0ge1xuICBjb25zdHJ1Y3Rvcihub2RlLCB0b2tlbnMsIG5vZGVzKSB7XG4gICAgc3VwZXIobm9kZSwgdG9rZW5zKTtcblxuICAgIHRoaXMubm9kZXMgPSBub2RlcztcbiAgfVxuXG4gIGdldE5vZGVzKCkge1xuICAgIHJldHVybiB0aGlzLm5vZGVzO1xuICB9XG5cbiAgcmVwbGFjZShyZXBsYWNlZE5vZGUsIHBhcmVudE5vZGUsIGNvbnRleHQpIHtcbiAgICBsZXQgdG9rZW5zO1xuXG4gICAgdG9rZW5zID0gdGhpcy5nZXRUb2tlbnMoKTtcblxuICAgIGNvbnN0IHJlcGxhY2VtZW50Tm9kZXMgPSB0aGlzLm5vZGVzLCAgLy8vXG4gICAgICAgICAgcmVwbGFjZW1lbnRUb2tlbnMgPSB0b2tlbnM7IC8vL1xuXG4gICAgKHsgdG9rZW5zIH0gPSBjb250ZXh0KTtcblxuICAgIHJlcGxhY2VOb2RlcyhyZXBsYWNlbWVudE5vZGVzLCByZXBsYWNlZE5vZGUsIHBhcmVudE5vZGUpO1xuXG4gICAgcmVwbGFjZVRva2VucyhyZXBsYWNlbWVudFRva2VucywgcmVwbGFjZWROb2RlLCB0b2tlbnMpO1xuICB9XG5cbiAgcmVwbGFjZUluZGV4RGlyZWN0aXZlU3ViZGl2aXNpb25UcmFuc2Zvcm0oaW5kZXhEaXJlY3RpdmVTdWJEaXZpc2lvblRyYW5zZm9ybSwgZGl2aXNpb25NYXJrZG93bk5vZGUsIGNvbnRleHQpIHtcbiAgICBjb25zdCBzdWJEaXZpc2lvbk1hcmtkb3duTm9kZSA9IGluZGV4RGlyZWN0aXZlU3ViRGl2aXNpb25UcmFuc2Zvcm0uZ2V0U3ViRGl2aXNpb25NYXJrZG93bk5vZGUoKSxcbiAgICAgICAgICByZXBsYWNlZE5vZGUgPSBzdWJEaXZpc2lvbk1hcmtkb3duTm9kZSwgLy8vXG4gICAgICAgICAgcGFyZW50Tm9kZSA9IGRpdmlzaW9uTWFya2Rvd25Ob2RlOyAgLy8vXG5cbiAgICB0aGlzLnJlcGxhY2UocmVwbGFjZWROb2RlLCBwYXJlbnROb2RlLCBjb250ZXh0KVxuICB9XG5cbiAgc3RhdGljIGZyb21EaXZpc2lvbk1hcmtkb3duTm9kZXNBbmREaXZpc2lvbk1hcmtkb3duTm9kZShkaXZpc2lvbk1hcmtkb3duTm9kZXMsIGRpdmlzaW9uTWFya2Rvd25Ob2RlLCBjb250ZXh0KSB7XG4gICAgbGV0IGluZGV4VHJhbnNmb3JtID0gbnVsbDtcblxuICAgIGNvbnN0IGluZGV4TGlzdCA9IEluZGV4TGlzdC5mcm9tRGl2aXNpb25NYXJrZG93bk5vZGVzKGRpdmlzaW9uTWFya2Rvd25Ob2RlcywgY29udGV4dCksXG4gICAgICAgICAgaW5kZXhUcmFuc2Zvcm1zID0gW107XG5cbiAgICBsZXR0ZXJzLmZvckVhY2goKGxldHRlcikgPT4ge1xuICAgICAgY29uc3QgaW5kZXhMaXN0VHJhbnNmb3JtID0gSW5kZXhMaXN0VHJhbnNmb3JtLmZyb21JbmRleExpc3RBbmRMZXR0ZXIoaW5kZXhMaXN0LCBsZXR0ZXIsIGNvbnRleHQpO1xuXG4gICAgICBpZiAoaW5kZXhMaXN0VHJhbnNmb3JtICE9PSBudWxsKSB7XG4gICAgICAgIGxldCBpbmRleFRyYW5zZm9ybTtcblxuICAgICAgICBjb25zdCBpbmRleEhlYWRpbmdUcmFuc2Zvcm0gPSBJbmRleEhlYWRpbmdUcmFuc2Zvcm0uZnJvbUxldHRlcihsZXR0ZXIsIGNvbnRleHQpO1xuXG4gICAgICAgIGluZGV4VHJhbnNmb3JtID0gaW5kZXhIZWFkaW5nVHJhbnNmb3JtOyAvLy9cblxuICAgICAgICBpbmRleFRyYW5zZm9ybXMucHVzaChpbmRleFRyYW5zZm9ybSk7XG5cbiAgICAgICAgaW5kZXhUcmFuc2Zvcm0gPSBpbmRleExpc3RUcmFuc2Zvcm07ICAvLy9cblxuICAgICAgICBpbmRleFRyYW5zZm9ybXMucHVzaChpbmRleFRyYW5zZm9ybSk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBjb25zdCBpbmRleExpc3RUcmFuc2Zvcm1zTGVuZ3RoID0gaW5kZXhUcmFuc2Zvcm1zLmxlbmd0aDtcblxuICAgIGlmIChpbmRleExpc3RUcmFuc2Zvcm1zTGVuZ3RoID4gMCkge1xuICAgICAgY29uc3Qgbm9kZSA9IG51bGwsXG4gICAgICAgICAgICBub2RlcyA9IFtdLFxuICAgICAgICAgICAgdG9rZW5zID0gW107XG5cbiAgICAgIGluZGV4VHJhbnNmb3Jtcy5mb3JFYWNoKChpbmRleFRyYW5zZm9ybSkgPT4ge1xuICAgICAgICBjb25zdCBub2RlID0gaW5kZXhUcmFuc2Zvcm0uZ2V0Tm9kZSgpO1xuXG4gICAgICAgIGluZGV4VHJhbnNmb3JtLmdldFRva2Vucyh0b2tlbnMpO1xuXG4gICAgICAgIG5vZGVzLnB1c2gobm9kZSk7XG4gICAgICB9KTtcblxuICAgICAgaW5kZXhUcmFuc2Zvcm0gPSBUcmFuc2Zvcm0uZnJvbU5vZGVBbmRUb2tlbnMoSW5kZXhUcmFuc2Zvcm0sIG5vZGUsIHRva2Vucywgbm9kZXMpO1xuICAgIH1cblxuICAgIHJldHVybiBpbmRleFRyYW5zZm9ybTtcbiAgfVxufVxuIl0sIm5hbWVzIjpbIkluZGV4VHJhbnNmb3JtIiwibm9kZSIsInRva2VucyIsIm5vZGVzIiwiZ2V0Tm9kZXMiLCJyZXBsYWNlIiwicmVwbGFjZWROb2RlIiwicGFyZW50Tm9kZSIsImNvbnRleHQiLCJnZXRUb2tlbnMiLCJyZXBsYWNlbWVudE5vZGVzIiwicmVwbGFjZW1lbnRUb2tlbnMiLCJyZXBsYWNlTm9kZXMiLCJyZXBsYWNlVG9rZW5zIiwicmVwbGFjZUluZGV4RGlyZWN0aXZlU3ViZGl2aXNpb25UcmFuc2Zvcm0iLCJpbmRleERpcmVjdGl2ZVN1YkRpdmlzaW9uVHJhbnNmb3JtIiwiZGl2aXNpb25NYXJrZG93bk5vZGUiLCJzdWJEaXZpc2lvbk1hcmtkb3duTm9kZSIsImdldFN1YkRpdmlzaW9uTWFya2Rvd25Ob2RlIiwiZnJvbURpdmlzaW9uTWFya2Rvd25Ob2Rlc0FuZERpdmlzaW9uTWFya2Rvd25Ob2RlIiwiZGl2aXNpb25NYXJrZG93bk5vZGVzIiwiaW5kZXhUcmFuc2Zvcm0iLCJpbmRleExpc3QiLCJJbmRleExpc3QiLCJmcm9tRGl2aXNpb25NYXJrZG93bk5vZGVzIiwiaW5kZXhUcmFuc2Zvcm1zIiwibGV0dGVycyIsImZvckVhY2giLCJsZXR0ZXIiLCJpbmRleExpc3RUcmFuc2Zvcm0iLCJJbmRleExpc3RUcmFuc2Zvcm0iLCJmcm9tSW5kZXhMaXN0QW5kTGV0dGVyIiwiaW5kZXhIZWFkaW5nVHJhbnNmb3JtIiwiSW5kZXhIZWFkaW5nVHJhbnNmb3JtIiwiZnJvbUxldHRlciIsInB1c2giLCJpbmRleExpc3RUcmFuc2Zvcm1zTGVuZ3RoIiwibGVuZ3RoIiwiZ2V0Tm9kZSIsIlRyYW5zZm9ybSIsImZyb21Ob2RlQW5kVG9rZW5zIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQVVxQkE7Ozs4REFSRDsyREFDRTtnRUFDQTtnRUFDUzttRUFDRzswQkFFVTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUU3QixJQUFBLEFBQU1BLCtCQUFOO2NBQU1BO2FBQUFBLGVBQ1BDLElBQUksRUFBRUMsTUFBTSxFQUFFQyxLQUFLO2dDQURaSDs7Z0JBRWpCLGtCQUZpQkE7WUFFWEM7WUFBTUM7O1FBRVosTUFBS0MsS0FBSyxHQUFHQTs7O2tCQUpJSDs7WUFPbkJJLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0QsS0FBSztZQUNuQjs7O1lBRUFFLEtBQUFBO21CQUFBQSxTQUFBQSxRQUFRQyxZQUFZLEVBQUVDLFVBQVUsRUFBRUMsT0FBTztnQkFDdkMsSUFBSU47Z0JBRUpBLFNBQVMsSUFBSSxDQUFDTyxTQUFTO2dCQUV2QixJQUFNQyxtQkFBbUIsSUFBSSxDQUFDUCxLQUFLLEVBQzdCUSxvQkFBb0JULFFBQVEsR0FBRztnQkFFbENBLFNBQVdNLFFBQVhOO2dCQUVIVSxJQUFBQSx3QkFBWSxFQUFDRixrQkFBa0JKLGNBQWNDO2dCQUU3Q00sSUFBQUEseUJBQWEsRUFBQ0YsbUJBQW1CTCxjQUFjSjtZQUNqRDs7O1lBRUFZLEtBQUFBO21CQUFBQSxTQUFBQSwwQ0FBMENDLGtDQUFrQyxFQUFFQyxvQkFBb0IsRUFBRVIsT0FBTztnQkFDekcsSUFBTVMsMEJBQTBCRixtQ0FBbUNHLDBCQUEwQixJQUN2RlosZUFBZVcseUJBQ2ZWLGFBQWFTLHNCQUF1QixHQUFHO2dCQUU3QyxJQUFJLENBQUNYLE9BQU8sQ0FBQ0MsY0FBY0MsWUFBWUM7WUFDekM7Ozs7WUFFT1csS0FBQUE7bUJBQVAsU0FBT0EsaURBQWlEQyxxQkFBcUIsRUFBRUosb0JBQW9CLEVBQUVSLE9BQU87Z0JBQzFHLElBQUlhLGlCQUFpQjtnQkFFckIsSUFBTUMsWUFBWUMsYUFBUyxDQUFDQyx5QkFBeUIsQ0FBQ0osdUJBQXVCWixVQUN2RWlCLGtCQUFrQixFQUFFO2dCQUUxQkMsZ0JBQU8sQ0FBQ0MsT0FBTyxDQUFDLFNBQUNDO29CQUNmLElBQU1DLHFCQUFxQkMsa0JBQWtCLENBQUNDLHNCQUFzQixDQUFDVCxXQUFXTSxRQUFRcEI7b0JBRXhGLElBQUlxQix1QkFBdUIsTUFBTTt3QkFDL0IsSUFBSVI7d0JBRUosSUFBTVcsd0JBQXdCQyxxQkFBcUIsQ0FBQ0MsVUFBVSxDQUFDTixRQUFRcEI7d0JBRXZFYSxpQkFBaUJXLHVCQUF1QixHQUFHO3dCQUUzQ1AsZ0JBQWdCVSxJQUFJLENBQUNkO3dCQUVyQkEsaUJBQWlCUSxvQkFBcUIsR0FBRzt3QkFFekNKLGdCQUFnQlUsSUFBSSxDQUFDZDtvQkFDdkI7Z0JBQ0Y7Z0JBRUEsSUFBTWUsNEJBQTRCWCxnQkFBZ0JZLE1BQU07Z0JBRXhELElBQUlELDRCQUE0QixHQUFHO29CQUNqQyxJQUFNbkMsT0FBTyxNQUNQRSxRQUFRLEVBQUUsRUFDVkQsU0FBUyxFQUFFO29CQUVqQnVCLGdCQUFnQkUsT0FBTyxDQUFDLFNBQUNOO3dCQUN2QixJQUFNcEIsT0FBT29CLGVBQWVpQixPQUFPO3dCQUVuQ2pCLGVBQWVaLFNBQVMsQ0FBQ1A7d0JBRXpCQyxNQUFNZ0MsSUFBSSxDQUFDbEM7b0JBQ2I7b0JBRUFvQixpQkFBaUJrQixrQkFBUyxDQUFDQyxpQkFBaUIsQ0F6RTdCeEMsZ0JBeUU4Q0MsTUFBTUMsUUFBUUM7Z0JBQzdFO2dCQUVBLE9BQU9rQjtZQUNUOzs7V0E3RW1CckI7RUFBdUJ1QyxrQkFBUyJ9