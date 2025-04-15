"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return IndexReplacement;
    }
});
var _letters = /*#__PURE__*/ _interop_require_default(require("../letters"));
var _list = /*#__PURE__*/ _interop_require_default(require("../index/list"));
var _ = /*#__PURE__*/ _interop_require_default(require("./"));
var _indexList = /*#__PURE__*/ _interop_require_default(require(".//indexList"));
var _indexHeading = /*#__PURE__*/ _interop_require_default(require("./indexHeading"));
var _transform = require("../utilities/transform");
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
var IndexReplacement = /*#__PURE__*/ function(Replacement) {
    _inherits(IndexReplacement, Replacement);
    function IndexReplacement(node, tokens, nodes) {
        _class_call_check(this, IndexReplacement);
        var _this;
        _this = _call_super(this, IndexReplacement, [
            node,
            tokens
        ]);
        _this.nodes = nodes;
        return _this;
    }
    _create_class(IndexReplacement, [
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
                (0, _transform.replaceNodes)(replacementNodes, replacedNode, parentNode);
                (0, _transform.replaceTokens)(replacementTokens, replacedNode, tokens);
            }
        },
        {
            key: "replaceIndexDirectiveSubdivisionReplacement",
            value: function replaceIndexDirectiveSubdivisionReplacement(indexDirectiveSubDivisionReplacement, divisionMarkdownNode, context) {
                var subDivisionMarkdownNode = indexDirectiveSubDivisionReplacement.getSubDivisionMarkdownNode(), replacedNode = subDivisionMarkdownNode, parentNode = divisionMarkdownNode; ///
                this.replace(replacedNode, parentNode, context);
            }
        }
    ], [
        {
            key: "fromDivisionMarkdownNodesAndDivisionMarkdownNode",
            value: function fromDivisionMarkdownNodesAndDivisionMarkdownNode(divisionMarkdownNodes, divisionMarkdownNode, context) {
                var indexReplacement = null;
                var indexList = _list.default.fromDivisionMarkdownNodes(divisionMarkdownNodes, context), indexReplacements = [];
                _letters.default.forEach(function(letter) {
                    var indexListReplacement = _indexList.default.fromIndexListAndLetter(indexList, letter, context);
                    if (indexListReplacement !== null) {
                        var indexReplacement;
                        var indexHeadingReplacement = _indexHeading.default.fromLetter(letter, context);
                        indexReplacement = indexHeadingReplacement; ///
                        indexReplacements.push(indexReplacement);
                        indexReplacement = indexListReplacement; ///
                        indexReplacements.push(indexReplacement);
                    }
                });
                var indexListReplacementsLength = indexReplacements.length;
                if (indexListReplacementsLength > 0) {
                    var node = null, nodes = [], tokens = [];
                    indexReplacements.forEach(function(indexReplacement) {
                        var node = indexReplacement.getNode();
                        indexReplacement.getTokens(tokens);
                        nodes.push(node);
                    });
                    indexReplacement = _.default.fromNodeAndTokens(IndexReplacement, node, tokens, nodes);
                }
                return indexReplacement;
            }
        }
    ]);
    return IndexReplacement;
}(_.default);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy90cmFuc2Zvcm0vaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBsZXR0ZXJzIGZyb20gXCIuLi9sZXR0ZXJzXCI7XG5pbXBvcnQgSW5kZXhMaXN0IGZyb20gXCIuLi9pbmRleC9saXN0XCI7XG5pbXBvcnQgUmVwbGFjZW1lbnQgZnJvbSBcIi4vXCI7XG5pbXBvcnQgSW5kZXhMaXN0UmVwbGFjZW1lbnQgZnJvbSBcIi4vL2luZGV4TGlzdFwiO1xuaW1wb3J0IEluZGV4SGVhZGluZ1JlcGxhY2VtZW50IGZyb20gXCIuL2luZGV4SGVhZGluZ1wiO1xuXG5pbXBvcnQgeyByZXBsYWNlTm9kZXMsIHJlcGxhY2VUb2tlbnMgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3RyYW5zZm9ybVwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJbmRleFJlcGxhY2VtZW50IGV4dGVuZHMgUmVwbGFjZW1lbnQge1xuICBjb25zdHJ1Y3Rvcihub2RlLCB0b2tlbnMsIG5vZGVzKSB7XG4gICAgc3VwZXIobm9kZSwgdG9rZW5zKTtcblxuICAgIHRoaXMubm9kZXMgPSBub2RlcztcbiAgfVxuXG4gIGdldE5vZGVzKCkge1xuICAgIHJldHVybiB0aGlzLm5vZGVzO1xuICB9XG5cbiAgcmVwbGFjZShyZXBsYWNlZE5vZGUsIHBhcmVudE5vZGUsIGNvbnRleHQpIHtcbiAgICBsZXQgdG9rZW5zO1xuXG4gICAgdG9rZW5zID0gdGhpcy5nZXRUb2tlbnMoKTtcblxuICAgIGNvbnN0IHJlcGxhY2VtZW50Tm9kZXMgPSB0aGlzLm5vZGVzLCAgLy8vXG4gICAgICAgICAgcmVwbGFjZW1lbnRUb2tlbnMgPSB0b2tlbnM7IC8vL1xuXG4gICAgKHsgdG9rZW5zIH0gPSBjb250ZXh0KTtcblxuICAgIHJlcGxhY2VOb2RlcyhyZXBsYWNlbWVudE5vZGVzLCByZXBsYWNlZE5vZGUsIHBhcmVudE5vZGUpO1xuXG4gICAgcmVwbGFjZVRva2VucyhyZXBsYWNlbWVudFRva2VucywgcmVwbGFjZWROb2RlLCB0b2tlbnMpO1xuICB9XG5cbiAgcmVwbGFjZUluZGV4RGlyZWN0aXZlU3ViZGl2aXNpb25SZXBsYWNlbWVudChpbmRleERpcmVjdGl2ZVN1YkRpdmlzaW9uUmVwbGFjZW1lbnQsIGRpdmlzaW9uTWFya2Rvd25Ob2RlLCBjb250ZXh0KSB7XG4gICAgY29uc3Qgc3ViRGl2aXNpb25NYXJrZG93bk5vZGUgPSBpbmRleERpcmVjdGl2ZVN1YkRpdmlzaW9uUmVwbGFjZW1lbnQuZ2V0U3ViRGl2aXNpb25NYXJrZG93bk5vZGUoKSxcbiAgICAgICAgICByZXBsYWNlZE5vZGUgPSBzdWJEaXZpc2lvbk1hcmtkb3duTm9kZSwgLy8vXG4gICAgICAgICAgcGFyZW50Tm9kZSA9IGRpdmlzaW9uTWFya2Rvd25Ob2RlOyAgLy8vXG5cbiAgICB0aGlzLnJlcGxhY2UocmVwbGFjZWROb2RlLCBwYXJlbnROb2RlLCBjb250ZXh0KVxuICB9XG5cbiAgc3RhdGljIGZyb21EaXZpc2lvbk1hcmtkb3duTm9kZXNBbmREaXZpc2lvbk1hcmtkb3duTm9kZShkaXZpc2lvbk1hcmtkb3duTm9kZXMsIGRpdmlzaW9uTWFya2Rvd25Ob2RlLCBjb250ZXh0KSB7XG4gICAgbGV0IGluZGV4UmVwbGFjZW1lbnQgPSBudWxsO1xuXG4gICAgY29uc3QgaW5kZXhMaXN0ID0gSW5kZXhMaXN0LmZyb21EaXZpc2lvbk1hcmtkb3duTm9kZXMoZGl2aXNpb25NYXJrZG93bk5vZGVzLCBjb250ZXh0KSxcbiAgICAgICAgICBpbmRleFJlcGxhY2VtZW50cyA9IFtdO1xuXG4gICAgbGV0dGVycy5mb3JFYWNoKChsZXR0ZXIpID0+IHtcbiAgICAgIGNvbnN0IGluZGV4TGlzdFJlcGxhY2VtZW50ID0gSW5kZXhMaXN0UmVwbGFjZW1lbnQuZnJvbUluZGV4TGlzdEFuZExldHRlcihpbmRleExpc3QsIGxldHRlciwgY29udGV4dCk7XG5cbiAgICAgIGlmIChpbmRleExpc3RSZXBsYWNlbWVudCAhPT0gbnVsbCkge1xuICAgICAgICBsZXQgaW5kZXhSZXBsYWNlbWVudDtcblxuICAgICAgICBjb25zdCBpbmRleEhlYWRpbmdSZXBsYWNlbWVudCA9IEluZGV4SGVhZGluZ1JlcGxhY2VtZW50LmZyb21MZXR0ZXIobGV0dGVyLCBjb250ZXh0KTtcblxuICAgICAgICBpbmRleFJlcGxhY2VtZW50ID0gaW5kZXhIZWFkaW5nUmVwbGFjZW1lbnQ7IC8vL1xuXG4gICAgICAgIGluZGV4UmVwbGFjZW1lbnRzLnB1c2goaW5kZXhSZXBsYWNlbWVudCk7XG5cbiAgICAgICAgaW5kZXhSZXBsYWNlbWVudCA9IGluZGV4TGlzdFJlcGxhY2VtZW50OyAgLy8vXG5cbiAgICAgICAgaW5kZXhSZXBsYWNlbWVudHMucHVzaChpbmRleFJlcGxhY2VtZW50KTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGNvbnN0IGluZGV4TGlzdFJlcGxhY2VtZW50c0xlbmd0aCA9IGluZGV4UmVwbGFjZW1lbnRzLmxlbmd0aDtcblxuICAgIGlmIChpbmRleExpc3RSZXBsYWNlbWVudHNMZW5ndGggPiAwKSB7XG4gICAgICBjb25zdCBub2RlID0gbnVsbCxcbiAgICAgICAgICAgIG5vZGVzID0gW10sXG4gICAgICAgICAgICB0b2tlbnMgPSBbXTtcblxuICAgICAgaW5kZXhSZXBsYWNlbWVudHMuZm9yRWFjaCgoaW5kZXhSZXBsYWNlbWVudCkgPT4ge1xuICAgICAgICBjb25zdCBub2RlID0gaW5kZXhSZXBsYWNlbWVudC5nZXROb2RlKCk7XG5cbiAgICAgICAgaW5kZXhSZXBsYWNlbWVudC5nZXRUb2tlbnModG9rZW5zKTtcblxuICAgICAgICBub2Rlcy5wdXNoKG5vZGUpO1xuICAgICAgfSk7XG5cbiAgICAgIGluZGV4UmVwbGFjZW1lbnQgPSBSZXBsYWNlbWVudC5mcm9tTm9kZUFuZFRva2VucyhJbmRleFJlcGxhY2VtZW50LCBub2RlLCB0b2tlbnMsIG5vZGVzKTtcbiAgICB9XG5cbiAgICByZXR1cm4gaW5kZXhSZXBsYWNlbWVudDtcbiAgfVxufVxuIl0sIm5hbWVzIjpbIkluZGV4UmVwbGFjZW1lbnQiLCJub2RlIiwidG9rZW5zIiwibm9kZXMiLCJnZXROb2RlcyIsInJlcGxhY2UiLCJyZXBsYWNlZE5vZGUiLCJwYXJlbnROb2RlIiwiY29udGV4dCIsImdldFRva2VucyIsInJlcGxhY2VtZW50Tm9kZXMiLCJyZXBsYWNlbWVudFRva2VucyIsInJlcGxhY2VOb2RlcyIsInJlcGxhY2VUb2tlbnMiLCJyZXBsYWNlSW5kZXhEaXJlY3RpdmVTdWJkaXZpc2lvblJlcGxhY2VtZW50IiwiaW5kZXhEaXJlY3RpdmVTdWJEaXZpc2lvblJlcGxhY2VtZW50IiwiZGl2aXNpb25NYXJrZG93bk5vZGUiLCJzdWJEaXZpc2lvbk1hcmtkb3duTm9kZSIsImdldFN1YkRpdmlzaW9uTWFya2Rvd25Ob2RlIiwiZnJvbURpdmlzaW9uTWFya2Rvd25Ob2Rlc0FuZERpdmlzaW9uTWFya2Rvd25Ob2RlIiwiZGl2aXNpb25NYXJrZG93bk5vZGVzIiwiaW5kZXhSZXBsYWNlbWVudCIsImluZGV4TGlzdCIsIkluZGV4TGlzdCIsImZyb21EaXZpc2lvbk1hcmtkb3duTm9kZXMiLCJpbmRleFJlcGxhY2VtZW50cyIsImxldHRlcnMiLCJmb3JFYWNoIiwibGV0dGVyIiwiaW5kZXhMaXN0UmVwbGFjZW1lbnQiLCJJbmRleExpc3RSZXBsYWNlbWVudCIsImZyb21JbmRleExpc3RBbmRMZXR0ZXIiLCJpbmRleEhlYWRpbmdSZXBsYWNlbWVudCIsIkluZGV4SGVhZGluZ1JlcGxhY2VtZW50IiwiZnJvbUxldHRlciIsInB1c2giLCJpbmRleExpc3RSZXBsYWNlbWVudHNMZW5ndGgiLCJsZW5ndGgiLCJnZXROb2RlIiwiUmVwbGFjZW1lbnQiLCJmcm9tTm9kZUFuZFRva2VucyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFVcUJBOzs7OERBUkQ7MkRBQ0U7dURBQ0U7Z0VBQ1M7bUVBQ0c7eUJBRVE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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