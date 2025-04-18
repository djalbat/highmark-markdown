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
var _occamdom = require("occam-dom");
var _letters = /*#__PURE__*/ _interop_require_default(require("../letters"));
var _list = /*#__PURE__*/ _interop_require_default(require("../index/list"));
var _indexList = /*#__PURE__*/ _interop_require_default(require("../transform/indexList"));
var _indexHeading = /*#__PURE__*/ _interop_require_default(require("../transform/indexHeading"));
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
var replaceNodes = _occamdom.transformUtilities.replaceNodes, replaceTokens = _occamdom.transformUtilities.replaceTokens;
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
                replaceNodes(replacementNodes, replacedNode, parentNode);
                replaceTokens(replacementTokens, replacedNode, tokens);
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
                    indexTransform = _occamdom.Transform.fromNodeAndTokens(IndexTransform, node, tokens, nodes);
                }
                return indexTransform;
            }
        }
    ]);
    return IndexTransform;
}(_occamdom.Transform);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy90cmFuc2Zvcm0vaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IFRyYW5zZm9ybSwgdHJhbnNmb3JtVXRpbGl0aWVzIH0gZnJvbSBcIm9jY2FtLWRvbVwiO1xuXG5pbXBvcnQgbGV0dGVycyBmcm9tIFwiLi4vbGV0dGVyc1wiO1xuaW1wb3J0IEluZGV4TGlzdCBmcm9tIFwiLi4vaW5kZXgvbGlzdFwiO1xuaW1wb3J0IEluZGV4TGlzdFRyYW5zZm9ybSBmcm9tIFwiLi4vdHJhbnNmb3JtL2luZGV4TGlzdFwiO1xuaW1wb3J0IEluZGV4SGVhZGluZ1RyYW5zZm9ybSBmcm9tIFwiLi4vdHJhbnNmb3JtL2luZGV4SGVhZGluZ1wiO1xuXG5jb25zdCB7IHJlcGxhY2VOb2RlcywgcmVwbGFjZVRva2VucyB9ID0gdHJhbnNmb3JtVXRpbGl0aWVzO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJbmRleFRyYW5zZm9ybSBleHRlbmRzIFRyYW5zZm9ybSB7XG4gIGNvbnN0cnVjdG9yKG5vZGUsIHRva2Vucywgbm9kZXMpIHtcbiAgICBzdXBlcihub2RlLCB0b2tlbnMpO1xuXG4gICAgdGhpcy5ub2RlcyA9IG5vZGVzO1xuICB9XG5cbiAgZ2V0Tm9kZXMoKSB7XG4gICAgcmV0dXJuIHRoaXMubm9kZXM7XG4gIH1cblxuICByZXBsYWNlKHJlcGxhY2VkTm9kZSwgcGFyZW50Tm9kZSwgY29udGV4dCkge1xuICAgIGxldCB0b2tlbnM7XG5cbiAgICB0b2tlbnMgPSB0aGlzLmdldFRva2VucygpO1xuXG4gICAgY29uc3QgcmVwbGFjZW1lbnROb2RlcyA9IHRoaXMubm9kZXMsICAvLy9cbiAgICAgICAgICByZXBsYWNlbWVudFRva2VucyA9IHRva2VuczsgLy8vXG5cbiAgICAoeyB0b2tlbnMgfSA9IGNvbnRleHQpO1xuXG4gICAgcmVwbGFjZU5vZGVzKHJlcGxhY2VtZW50Tm9kZXMsIHJlcGxhY2VkTm9kZSwgcGFyZW50Tm9kZSk7XG5cbiAgICByZXBsYWNlVG9rZW5zKHJlcGxhY2VtZW50VG9rZW5zLCByZXBsYWNlZE5vZGUsIHRva2Vucyk7XG4gIH1cblxuICByZXBsYWNlSW5kZXhEaXJlY3RpdmVTdWJkaXZpc2lvblRyYW5zZm9ybShpbmRleERpcmVjdGl2ZVN1YkRpdmlzaW9uVHJhbnNmb3JtLCBkaXZpc2lvbk1hcmtkb3duTm9kZSwgY29udGV4dCkge1xuICAgIGNvbnN0IHN1YkRpdmlzaW9uTWFya2Rvd25Ob2RlID0gaW5kZXhEaXJlY3RpdmVTdWJEaXZpc2lvblRyYW5zZm9ybS5nZXRTdWJEaXZpc2lvbk1hcmtkb3duTm9kZSgpLFxuICAgICAgICAgIHJlcGxhY2VkTm9kZSA9IHN1YkRpdmlzaW9uTWFya2Rvd25Ob2RlLCAvLy9cbiAgICAgICAgICBwYXJlbnROb2RlID0gZGl2aXNpb25NYXJrZG93bk5vZGU7ICAvLy9cblxuICAgIHRoaXMucmVwbGFjZShyZXBsYWNlZE5vZGUsIHBhcmVudE5vZGUsIGNvbnRleHQpXG4gIH1cblxuICBzdGF0aWMgZnJvbURpdmlzaW9uTWFya2Rvd25Ob2Rlc0FuZERpdmlzaW9uTWFya2Rvd25Ob2RlKGRpdmlzaW9uTWFya2Rvd25Ob2RlcywgZGl2aXNpb25NYXJrZG93bk5vZGUsIGNvbnRleHQpIHtcbiAgICBsZXQgaW5kZXhUcmFuc2Zvcm0gPSBudWxsO1xuXG4gICAgY29uc3QgaW5kZXhMaXN0ID0gSW5kZXhMaXN0LmZyb21EaXZpc2lvbk1hcmtkb3duTm9kZXMoZGl2aXNpb25NYXJrZG93bk5vZGVzLCBjb250ZXh0KSxcbiAgICAgICAgICBpbmRleFRyYW5zZm9ybXMgPSBbXTtcblxuICAgIGxldHRlcnMuZm9yRWFjaCgobGV0dGVyKSA9PiB7XG4gICAgICBjb25zdCBpbmRleExpc3RUcmFuc2Zvcm0gPSBJbmRleExpc3RUcmFuc2Zvcm0uZnJvbUluZGV4TGlzdEFuZExldHRlcihpbmRleExpc3QsIGxldHRlciwgY29udGV4dCk7XG5cbiAgICAgIGlmIChpbmRleExpc3RUcmFuc2Zvcm0gIT09IG51bGwpIHtcbiAgICAgICAgbGV0IGluZGV4VHJhbnNmb3JtO1xuXG4gICAgICAgIGNvbnN0IGluZGV4SGVhZGluZ1RyYW5zZm9ybSA9IEluZGV4SGVhZGluZ1RyYW5zZm9ybS5mcm9tTGV0dGVyKGxldHRlciwgY29udGV4dCk7XG5cbiAgICAgICAgaW5kZXhUcmFuc2Zvcm0gPSBpbmRleEhlYWRpbmdUcmFuc2Zvcm07IC8vL1xuXG4gICAgICAgIGluZGV4VHJhbnNmb3Jtcy5wdXNoKGluZGV4VHJhbnNmb3JtKTtcblxuICAgICAgICBpbmRleFRyYW5zZm9ybSA9IGluZGV4TGlzdFRyYW5zZm9ybTsgIC8vL1xuXG4gICAgICAgIGluZGV4VHJhbnNmb3Jtcy5wdXNoKGluZGV4VHJhbnNmb3JtKTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGNvbnN0IGluZGV4TGlzdFRyYW5zZm9ybXNMZW5ndGggPSBpbmRleFRyYW5zZm9ybXMubGVuZ3RoO1xuXG4gICAgaWYgKGluZGV4TGlzdFRyYW5zZm9ybXNMZW5ndGggPiAwKSB7XG4gICAgICBjb25zdCBub2RlID0gbnVsbCxcbiAgICAgICAgICAgIG5vZGVzID0gW10sXG4gICAgICAgICAgICB0b2tlbnMgPSBbXTtcblxuICAgICAgaW5kZXhUcmFuc2Zvcm1zLmZvckVhY2goKGluZGV4VHJhbnNmb3JtKSA9PiB7XG4gICAgICAgIGNvbnN0IG5vZGUgPSBpbmRleFRyYW5zZm9ybS5nZXROb2RlKCk7XG5cbiAgICAgICAgaW5kZXhUcmFuc2Zvcm0uZ2V0VG9rZW5zKHRva2Vucyk7XG5cbiAgICAgICAgbm9kZXMucHVzaChub2RlKTtcbiAgICAgIH0pO1xuXG4gICAgICBpbmRleFRyYW5zZm9ybSA9IFRyYW5zZm9ybS5mcm9tTm9kZUFuZFRva2VucyhJbmRleFRyYW5zZm9ybSwgbm9kZSwgdG9rZW5zLCBub2Rlcyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGluZGV4VHJhbnNmb3JtO1xuICB9XG59XG4iXSwibmFtZXMiOlsiSW5kZXhUcmFuc2Zvcm0iLCJyZXBsYWNlTm9kZXMiLCJ0cmFuc2Zvcm1VdGlsaXRpZXMiLCJyZXBsYWNlVG9rZW5zIiwibm9kZSIsInRva2VucyIsIm5vZGVzIiwiZ2V0Tm9kZXMiLCJyZXBsYWNlIiwicmVwbGFjZWROb2RlIiwicGFyZW50Tm9kZSIsImNvbnRleHQiLCJnZXRUb2tlbnMiLCJyZXBsYWNlbWVudE5vZGVzIiwicmVwbGFjZW1lbnRUb2tlbnMiLCJyZXBsYWNlSW5kZXhEaXJlY3RpdmVTdWJkaXZpc2lvblRyYW5zZm9ybSIsImluZGV4RGlyZWN0aXZlU3ViRGl2aXNpb25UcmFuc2Zvcm0iLCJkaXZpc2lvbk1hcmtkb3duTm9kZSIsInN1YkRpdmlzaW9uTWFya2Rvd25Ob2RlIiwiZ2V0U3ViRGl2aXNpb25NYXJrZG93bk5vZGUiLCJmcm9tRGl2aXNpb25NYXJrZG93bk5vZGVzQW5kRGl2aXNpb25NYXJrZG93bk5vZGUiLCJkaXZpc2lvbk1hcmtkb3duTm9kZXMiLCJpbmRleFRyYW5zZm9ybSIsImluZGV4TGlzdCIsIkluZGV4TGlzdCIsImZyb21EaXZpc2lvbk1hcmtkb3duTm9kZXMiLCJpbmRleFRyYW5zZm9ybXMiLCJsZXR0ZXJzIiwiZm9yRWFjaCIsImxldHRlciIsImluZGV4TGlzdFRyYW5zZm9ybSIsIkluZGV4TGlzdFRyYW5zZm9ybSIsImZyb21JbmRleExpc3RBbmRMZXR0ZXIiLCJpbmRleEhlYWRpbmdUcmFuc2Zvcm0iLCJJbmRleEhlYWRpbmdUcmFuc2Zvcm0iLCJmcm9tTGV0dGVyIiwicHVzaCIsImluZGV4TGlzdFRyYW5zZm9ybXNMZW5ndGgiLCJsZW5ndGgiLCJnZXROb2RlIiwiVHJhbnNmb3JtIiwiZnJvbU5vZGVBbmRUb2tlbnMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBV3FCQTs7O3dCQVR5Qjs4REFFMUI7MkRBQ0U7Z0VBQ1M7bUVBQ0c7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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