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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy90cmFuc2Zvcm0vX2xlZ2FjeS9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgVHJhbnNmb3JtLCB0cmFuc2Zvcm1VdGlsaXRpZXMgfSBmcm9tIFwib2NjYW0tZG9tXCI7XG5cbmltcG9ydCBsZXR0ZXJzIGZyb20gXCIuLi9sZXR0ZXJzXCI7XG5pbXBvcnQgSW5kZXhMaXN0IGZyb20gXCIuLi9pbmRleC9saXN0XCI7XG5pbXBvcnQgSW5kZXhMaXN0VHJhbnNmb3JtIGZyb20gXCIuLi90cmFuc2Zvcm0vaW5kZXhMaXN0XCI7XG5pbXBvcnQgSW5kZXhIZWFkaW5nVHJhbnNmb3JtIGZyb20gXCIuLi90cmFuc2Zvcm0vaW5kZXhIZWFkaW5nXCI7XG5cbmNvbnN0IHsgcmVwbGFjZU5vZGVzLCByZXBsYWNlVG9rZW5zIH0gPSB0cmFuc2Zvcm1VdGlsaXRpZXM7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEluZGV4VHJhbnNmb3JtIGV4dGVuZHMgVHJhbnNmb3JtIHtcbiAgY29uc3RydWN0b3Iobm9kZSwgdG9rZW5zLCBub2Rlcykge1xuICAgIHN1cGVyKG5vZGUsIHRva2Vucyk7XG5cbiAgICB0aGlzLm5vZGVzID0gbm9kZXM7XG4gIH1cblxuICBnZXROb2RlcygpIHtcbiAgICByZXR1cm4gdGhpcy5ub2RlcztcbiAgfVxuXG4gIHJlcGxhY2UocmVwbGFjZWROb2RlLCBwYXJlbnROb2RlLCBjb250ZXh0KSB7XG4gICAgbGV0IHRva2VucztcblxuICAgIHRva2VucyA9IHRoaXMuZ2V0VG9rZW5zKCk7XG5cbiAgICBjb25zdCByZXBsYWNlbWVudE5vZGVzID0gdGhpcy5ub2RlcywgIC8vL1xuICAgICAgICAgIHJlcGxhY2VtZW50VG9rZW5zID0gdG9rZW5zOyAvLy9cblxuICAgICh7IHRva2VucyB9ID0gY29udGV4dCk7XG5cbiAgICByZXBsYWNlTm9kZXMocmVwbGFjZW1lbnROb2RlcywgcmVwbGFjZWROb2RlLCBwYXJlbnROb2RlKTtcblxuICAgIHJlcGxhY2VUb2tlbnMocmVwbGFjZW1lbnRUb2tlbnMsIHJlcGxhY2VkTm9kZSwgdG9rZW5zKTtcbiAgfVxuXG4gIHJlcGxhY2VJbmRleERpcmVjdGl2ZVN1YmRpdmlzaW9uVHJhbnNmb3JtKGluZGV4RGlyZWN0aXZlU3ViRGl2aXNpb25UcmFuc2Zvcm0sIGRpdmlzaW9uTWFya2Rvd25Ob2RlLCBjb250ZXh0KSB7XG4gICAgY29uc3Qgc3ViRGl2aXNpb25NYXJrZG93bk5vZGUgPSBpbmRleERpcmVjdGl2ZVN1YkRpdmlzaW9uVHJhbnNmb3JtLmdldFN1YkRpdmlzaW9uTWFya2Rvd25Ob2RlKCksXG4gICAgICAgICAgcmVwbGFjZWROb2RlID0gc3ViRGl2aXNpb25NYXJrZG93bk5vZGUsIC8vL1xuICAgICAgICAgIHBhcmVudE5vZGUgPSBkaXZpc2lvbk1hcmtkb3duTm9kZTsgIC8vL1xuXG4gICAgdGhpcy5yZXBsYWNlKHJlcGxhY2VkTm9kZSwgcGFyZW50Tm9kZSwgY29udGV4dClcbiAgfVxuXG4gIHN0YXRpYyBmcm9tRGl2aXNpb25NYXJrZG93bk5vZGVzQW5kRGl2aXNpb25NYXJrZG93bk5vZGUoZGl2aXNpb25NYXJrZG93bk5vZGVzLCBkaXZpc2lvbk1hcmtkb3duTm9kZSwgY29udGV4dCkge1xuICAgIGxldCBpbmRleFRyYW5zZm9ybSA9IG51bGw7XG5cbiAgICBjb25zdCBpbmRleExpc3QgPSBJbmRleExpc3QuZnJvbURpdmlzaW9uTWFya2Rvd25Ob2RlcyhkaXZpc2lvbk1hcmtkb3duTm9kZXMsIGNvbnRleHQpLFxuICAgICAgICAgIGluZGV4VHJhbnNmb3JtcyA9IFtdO1xuXG4gICAgbGV0dGVycy5mb3JFYWNoKChsZXR0ZXIpID0+IHtcbiAgICAgIGNvbnN0IGluZGV4TGlzdFRyYW5zZm9ybSA9IEluZGV4TGlzdFRyYW5zZm9ybS5mcm9tSW5kZXhMaXN0QW5kTGV0dGVyKGluZGV4TGlzdCwgbGV0dGVyLCBjb250ZXh0KTtcblxuICAgICAgaWYgKGluZGV4TGlzdFRyYW5zZm9ybSAhPT0gbnVsbCkge1xuICAgICAgICBsZXQgaW5kZXhUcmFuc2Zvcm07XG5cbiAgICAgICAgY29uc3QgaW5kZXhIZWFkaW5nVHJhbnNmb3JtID0gSW5kZXhIZWFkaW5nVHJhbnNmb3JtLmZyb21MZXR0ZXIobGV0dGVyLCBjb250ZXh0KTtcblxuICAgICAgICBpbmRleFRyYW5zZm9ybSA9IGluZGV4SGVhZGluZ1RyYW5zZm9ybTsgLy8vXG5cbiAgICAgICAgaW5kZXhUcmFuc2Zvcm1zLnB1c2goaW5kZXhUcmFuc2Zvcm0pO1xuXG4gICAgICAgIGluZGV4VHJhbnNmb3JtID0gaW5kZXhMaXN0VHJhbnNmb3JtOyAgLy8vXG5cbiAgICAgICAgaW5kZXhUcmFuc2Zvcm1zLnB1c2goaW5kZXhUcmFuc2Zvcm0pO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgY29uc3QgaW5kZXhMaXN0VHJhbnNmb3Jtc0xlbmd0aCA9IGluZGV4VHJhbnNmb3Jtcy5sZW5ndGg7XG5cbiAgICBpZiAoaW5kZXhMaXN0VHJhbnNmb3Jtc0xlbmd0aCA+IDApIHtcbiAgICAgIGNvbnN0IG5vZGUgPSBudWxsLFxuICAgICAgICAgICAgbm9kZXMgPSBbXSxcbiAgICAgICAgICAgIHRva2VucyA9IFtdO1xuXG4gICAgICBpbmRleFRyYW5zZm9ybXMuZm9yRWFjaCgoaW5kZXhUcmFuc2Zvcm0pID0+IHtcbiAgICAgICAgY29uc3Qgbm9kZSA9IGluZGV4VHJhbnNmb3JtLmdldE5vZGUoKTtcblxuICAgICAgICBpbmRleFRyYW5zZm9ybS5nZXRUb2tlbnModG9rZW5zKTtcblxuICAgICAgICBub2Rlcy5wdXNoKG5vZGUpO1xuICAgICAgfSk7XG5cbiAgICAgIGluZGV4VHJhbnNmb3JtID0gVHJhbnNmb3JtLmZyb21Ob2RlQW5kVG9rZW5zKEluZGV4VHJhbnNmb3JtLCBub2RlLCB0b2tlbnMsIG5vZGVzKTtcbiAgICB9XG5cbiAgICByZXR1cm4gaW5kZXhUcmFuc2Zvcm07XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJJbmRleFRyYW5zZm9ybSIsInJlcGxhY2VOb2RlcyIsInRyYW5zZm9ybVV0aWxpdGllcyIsInJlcGxhY2VUb2tlbnMiLCJub2RlIiwidG9rZW5zIiwibm9kZXMiLCJnZXROb2RlcyIsInJlcGxhY2UiLCJyZXBsYWNlZE5vZGUiLCJwYXJlbnROb2RlIiwiY29udGV4dCIsImdldFRva2VucyIsInJlcGxhY2VtZW50Tm9kZXMiLCJyZXBsYWNlbWVudFRva2VucyIsInJlcGxhY2VJbmRleERpcmVjdGl2ZVN1YmRpdmlzaW9uVHJhbnNmb3JtIiwiaW5kZXhEaXJlY3RpdmVTdWJEaXZpc2lvblRyYW5zZm9ybSIsImRpdmlzaW9uTWFya2Rvd25Ob2RlIiwic3ViRGl2aXNpb25NYXJrZG93bk5vZGUiLCJnZXRTdWJEaXZpc2lvbk1hcmtkb3duTm9kZSIsImZyb21EaXZpc2lvbk1hcmtkb3duTm9kZXNBbmREaXZpc2lvbk1hcmtkb3duTm9kZSIsImRpdmlzaW9uTWFya2Rvd25Ob2RlcyIsImluZGV4VHJhbnNmb3JtIiwiaW5kZXhMaXN0IiwiSW5kZXhMaXN0IiwiZnJvbURpdmlzaW9uTWFya2Rvd25Ob2RlcyIsImluZGV4VHJhbnNmb3JtcyIsImxldHRlcnMiLCJmb3JFYWNoIiwibGV0dGVyIiwiaW5kZXhMaXN0VHJhbnNmb3JtIiwiSW5kZXhMaXN0VHJhbnNmb3JtIiwiZnJvbUluZGV4TGlzdEFuZExldHRlciIsImluZGV4SGVhZGluZ1RyYW5zZm9ybSIsIkluZGV4SGVhZGluZ1RyYW5zZm9ybSIsImZyb21MZXR0ZXIiLCJwdXNoIiwiaW5kZXhMaXN0VHJhbnNmb3Jtc0xlbmd0aCIsImxlbmd0aCIsImdldE5vZGUiLCJUcmFuc2Zvcm0iLCJmcm9tTm9kZUFuZFRva2VucyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFXcUJBOzs7d0JBVHlCOzhEQUUxQjsyREFDRTtnRUFDUzttRUFDRzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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