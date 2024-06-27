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
var _replacement = /*#__PURE__*/ _interop_require_default(require("../replacement"));
var _list = /*#__PURE__*/ _interop_require_default(require("../index/list"));
var _indexList = /*#__PURE__*/ _interop_require_default(require("../replacement/indexList"));
var _replacement1 = require("../utilities/replacement");
function _assert_this_initialized(self) {
    if (self === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return self;
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
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;
    try {
        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
        return true;
    } catch (e) {
        return false;
    }
}
function _create_super(Derived) {
    var hasNativeReflectConstruct = _is_native_reflect_construct();
    return function _createSuperInternal() {
        var Super = _get_prototype_of(Derived), result;
        if (hasNativeReflectConstruct) {
            var NewTarget = _get_prototype_of(this).constructor;
            result = Reflect.construct(Super, arguments, NewTarget);
        } else {
            result = Super.apply(this, arguments);
        }
        return _possible_constructor_return(this, result);
    };
}
var letters = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z"
];
var IndexReplacement = /*#__PURE__*/ function(Replacement) {
    _inherits(IndexReplacement, Replacement);
    var _super = _create_super(IndexReplacement);
    function IndexReplacement(node, tokens, nodes) {
        _class_call_check(this, IndexReplacement);
        var _this;
        _this = _super.call(this, node, tokens);
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
            key: "getReplacementNodes",
            value: function getReplacementNodes() {
                var replacementNodes = this.nodes; ///
                return replacementNodes;
            }
        },
        {
            key: "getReplacementTokens",
            value: function getReplacementTokens() {
                var tokens = this.getTokens(), replacementTokens = tokens; ///
                return replacementTokens;
            }
        },
        {
            key: "replace",
            value: function replace(replacedNode, parentNode, context) {
                var tokens = context.tokens, replacementNodes = this.getReplacementNodes(), replacementTokens = this.getReplacementTokens();
                (0, _replacement1.replaceNodes)(replacementNodes, replacedNode, parentNode);
                (0, _replacement1.replaceTokens)(replacementTokens, replacedNode, tokens);
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
                var indexList = _list.default.fromDivisionMarkdownNodes(divisionMarkdownNodes, context), indexListReplacements = [];
                letters.forEach(function(letter) {
                    var indexListReplacement = _indexList.default.fromIndexListAndLetter(indexList, letter, context);
                    if (indexListReplacement !== null) {
                        indexListReplacements.push(indexListReplacement);
                    }
                });
                var indexListReplacementsLength = indexListReplacements.length;
                if (indexListReplacementsLength > 0) {
                    var node = null, nodes = [], tokens = [];
                    indexListReplacements.forEach(function(indexListReplacement) {
                        var node = indexListReplacement.getNode();
                        indexListReplacement.getTokens(tokens);
                        nodes.push(node);
                    });
                    indexReplacement = _replacement.default.fromNodeAndTokens(IndexReplacement, node, tokens, nodes);
                }
                return indexReplacement;
            }
        }
    ]);
    return IndexReplacement;
}(_replacement.default);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9yZXBsYWNlbWVudC9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IFJlcGxhY2VtZW50IGZyb20gXCIuLi9yZXBsYWNlbWVudFwiO1xuXG5pbXBvcnQgSW5kZXhMaXN0IGZyb20gXCIuLi9pbmRleC9saXN0XCI7XG5pbXBvcnQgSW5kZXhMaXN0UmVwbGFjZW1lbnQgZnJvbSBcIi4uL3JlcGxhY2VtZW50L2luZGV4TGlzdFwiO1xuXG5pbXBvcnQgeyByZXBsYWNlTm9kZXMsIHJlcGxhY2VUb2tlbnMgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3JlcGxhY2VtZW50XCI7XG5cbmNvbnN0IGxldHRlcnMgPSBbXG4gIFwiYVwiLCBcImJcIiwgXCJjXCIsIFwiZFwiLCBcImVcIiwgXCJmXCIsIFwiZ1wiLCBcImhcIiwgXCJpXCIsIFwialwiLCBcImtcIiwgXCJsXCIsIFwibVwiLFxuICBcIm5cIiwgXCJvXCIsIFwicFwiLCBcInFcIiwgXCJyXCIsIFwic1wiLCBcInRcIiwgXCJ1XCIsIFwidlwiLCBcIndcIiwgXCJ4XCIsIFwieVwiLCBcInpcIlxuXTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW5kZXhSZXBsYWNlbWVudCBleHRlbmRzIFJlcGxhY2VtZW50IHtcbiAgY29uc3RydWN0b3Iobm9kZSwgdG9rZW5zLCBub2Rlcykge1xuICAgIHN1cGVyKG5vZGUsIHRva2Vucyk7XG5cbiAgICB0aGlzLm5vZGVzID0gbm9kZXM7XG4gIH1cblxuICBnZXROb2RlcygpIHtcbiAgICByZXR1cm4gdGhpcy5ub2RlcztcbiAgfVxuXG4gIGdldFJlcGxhY2VtZW50Tm9kZXMoKSB7XG4gICAgY29uc3QgcmVwbGFjZW1lbnROb2RlcyA9IHRoaXMubm9kZXM7ICAvLy9cblxuICAgIHJldHVybiByZXBsYWNlbWVudE5vZGVzO1xuICB9XG5cbiAgZ2V0UmVwbGFjZW1lbnRUb2tlbnMoKSB7XG4gICAgY29uc3QgdG9rZW5zID0gdGhpcy5nZXRUb2tlbnMoKSxcbiAgICAgICAgICByZXBsYWNlbWVudFRva2VucyA9IHRva2VuczsgLy8vXG5cbiAgICByZXR1cm4gcmVwbGFjZW1lbnRUb2tlbnM7XG4gIH1cblxuICByZXBsYWNlKHJlcGxhY2VkTm9kZSwgcGFyZW50Tm9kZSwgY29udGV4dCkge1xuICAgIGNvbnN0IHsgdG9rZW5zIH0gPSBjb250ZXh0LFxuICAgICAgICAgIHJlcGxhY2VtZW50Tm9kZXMgPSB0aGlzLmdldFJlcGxhY2VtZW50Tm9kZXMoKSxcbiAgICAgICAgICByZXBsYWNlbWVudFRva2VucyA9IHRoaXMuZ2V0UmVwbGFjZW1lbnRUb2tlbnMoKTtcblxuICAgIHJlcGxhY2VOb2RlcyhyZXBsYWNlbWVudE5vZGVzLCByZXBsYWNlZE5vZGUsIHBhcmVudE5vZGUpO1xuXG4gICAgcmVwbGFjZVRva2VucyhyZXBsYWNlbWVudFRva2VucywgcmVwbGFjZWROb2RlLCB0b2tlbnMpO1xuICB9XG5cbiAgcmVwbGFjZUluZGV4RGlyZWN0aXZlU3ViZGl2aXNpb25SZXBsYWNlbWVudChpbmRleERpcmVjdGl2ZVN1YkRpdmlzaW9uUmVwbGFjZW1lbnQsIGRpdmlzaW9uTWFya2Rvd25Ob2RlLCBjb250ZXh0KSB7XG4gICAgY29uc3Qgc3ViRGl2aXNpb25NYXJrZG93bk5vZGUgPSBpbmRleERpcmVjdGl2ZVN1YkRpdmlzaW9uUmVwbGFjZW1lbnQuZ2V0U3ViRGl2aXNpb25NYXJrZG93bk5vZGUoKSxcbiAgICAgICAgICByZXBsYWNlZE5vZGUgPSBzdWJEaXZpc2lvbk1hcmtkb3duTm9kZSwgLy8vXG4gICAgICAgICAgcGFyZW50Tm9kZSA9IGRpdmlzaW9uTWFya2Rvd25Ob2RlOyAgLy8vXG5cbiAgICB0aGlzLnJlcGxhY2UocmVwbGFjZWROb2RlLCBwYXJlbnROb2RlLCBjb250ZXh0KVxuICB9XG5cbiAgc3RhdGljIGZyb21EaXZpc2lvbk1hcmtkb3duTm9kZXNBbmREaXZpc2lvbk1hcmtkb3duTm9kZShkaXZpc2lvbk1hcmtkb3duTm9kZXMsIGRpdmlzaW9uTWFya2Rvd25Ob2RlLCBjb250ZXh0KSB7XG4gICAgbGV0IGluZGV4UmVwbGFjZW1lbnQgPSBudWxsO1xuXG4gICAgY29uc3QgaW5kZXhMaXN0ID0gSW5kZXhMaXN0LmZyb21EaXZpc2lvbk1hcmtkb3duTm9kZXMoZGl2aXNpb25NYXJrZG93bk5vZGVzLCBjb250ZXh0KSxcbiAgICAgICAgICBpbmRleExpc3RSZXBsYWNlbWVudHMgPSBbXTtcblxuICAgIGxldHRlcnMuZm9yRWFjaCgobGV0dGVyKSA9PiB7XG4gICAgICBjb25zdCBpbmRleExpc3RSZXBsYWNlbWVudCA9IEluZGV4TGlzdFJlcGxhY2VtZW50LmZyb21JbmRleExpc3RBbmRMZXR0ZXIoaW5kZXhMaXN0LCBsZXR0ZXIsIGNvbnRleHQpO1xuXG4gICAgICBpZiAoaW5kZXhMaXN0UmVwbGFjZW1lbnQgIT09IG51bGwpIHtcbiAgICAgICAgaW5kZXhMaXN0UmVwbGFjZW1lbnRzLnB1c2goaW5kZXhMaXN0UmVwbGFjZW1lbnQpO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgY29uc3QgaW5kZXhMaXN0UmVwbGFjZW1lbnRzTGVuZ3RoID0gaW5kZXhMaXN0UmVwbGFjZW1lbnRzLmxlbmd0aDtcblxuICAgIGlmIChpbmRleExpc3RSZXBsYWNlbWVudHNMZW5ndGggPiAwKSB7XG4gICAgICBjb25zdCBub2RlID0gbnVsbCxcbiAgICAgICAgICAgIG5vZGVzID0gW10sXG4gICAgICAgICAgICB0b2tlbnMgPSBbXTtcblxuICAgICAgaW5kZXhMaXN0UmVwbGFjZW1lbnRzLmZvckVhY2goKGluZGV4TGlzdFJlcGxhY2VtZW50KSA9PiB7XG4gICAgICAgIGNvbnN0IG5vZGUgPSBpbmRleExpc3RSZXBsYWNlbWVudC5nZXROb2RlKCk7XG5cbiAgICAgICAgaW5kZXhMaXN0UmVwbGFjZW1lbnQuZ2V0VG9rZW5zKHRva2Vucyk7XG5cbiAgICAgICAgbm9kZXMucHVzaChub2RlKTtcbiAgICAgIH0pO1xuXG4gICAgICBpbmRleFJlcGxhY2VtZW50ID0gUmVwbGFjZW1lbnQuZnJvbU5vZGVBbmRUb2tlbnMoSW5kZXhSZXBsYWNlbWVudCwgbm9kZSwgdG9rZW5zLCBub2Rlcyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGluZGV4UmVwbGFjZW1lbnQ7XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJJbmRleFJlcGxhY2VtZW50IiwibGV0dGVycyIsIm5vZGUiLCJ0b2tlbnMiLCJub2RlcyIsImdldE5vZGVzIiwiZ2V0UmVwbGFjZW1lbnROb2RlcyIsInJlcGxhY2VtZW50Tm9kZXMiLCJnZXRSZXBsYWNlbWVudFRva2VucyIsImdldFRva2VucyIsInJlcGxhY2VtZW50VG9rZW5zIiwicmVwbGFjZSIsInJlcGxhY2VkTm9kZSIsInBhcmVudE5vZGUiLCJjb250ZXh0IiwicmVwbGFjZU5vZGVzIiwicmVwbGFjZVRva2VucyIsInJlcGxhY2VJbmRleERpcmVjdGl2ZVN1YmRpdmlzaW9uUmVwbGFjZW1lbnQiLCJpbmRleERpcmVjdGl2ZVN1YkRpdmlzaW9uUmVwbGFjZW1lbnQiLCJkaXZpc2lvbk1hcmtkb3duTm9kZSIsInN1YkRpdmlzaW9uTWFya2Rvd25Ob2RlIiwiZ2V0U3ViRGl2aXNpb25NYXJrZG93bk5vZGUiLCJmcm9tRGl2aXNpb25NYXJrZG93bk5vZGVzQW5kRGl2aXNpb25NYXJrZG93bk5vZGUiLCJkaXZpc2lvbk1hcmtkb3duTm9kZXMiLCJpbmRleFJlcGxhY2VtZW50IiwiaW5kZXhMaXN0IiwiSW5kZXhMaXN0IiwiZnJvbURpdmlzaW9uTWFya2Rvd25Ob2RlcyIsImluZGV4TGlzdFJlcGxhY2VtZW50cyIsImZvckVhY2giLCJsZXR0ZXIiLCJpbmRleExpc3RSZXBsYWNlbWVudCIsIkluZGV4TGlzdFJlcGxhY2VtZW50IiwiZnJvbUluZGV4TGlzdEFuZExldHRlciIsInB1c2giLCJpbmRleExpc3RSZXBsYWNlbWVudHNMZW5ndGgiLCJsZW5ndGgiLCJnZXROb2RlIiwiUmVwbGFjZW1lbnQiLCJmcm9tTm9kZUFuZFRva2VucyJd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