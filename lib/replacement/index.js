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
var _replacement = /*#__PURE__*/ _interop_require_default(require("../replacement"));
var _indexList = /*#__PURE__*/ _interop_require_default(require("../replacement/indexList"));
var _indexHeading = /*#__PURE__*/ _interop_require_default(require("./indexHeading"));
var _replacement1 = require("../utilities/replacement");
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
                    indexReplacement = _replacement.default.fromNodeAndTokens(IndexReplacement, node, tokens, nodes);
                }
                return indexReplacement;
            }
        }
    ]);
    return IndexReplacement;
}(_replacement.default);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9yZXBsYWNlbWVudC9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IGxldHRlcnMgZnJvbSBcIi4uL2xldHRlcnNcIjtcbmltcG9ydCBJbmRleExpc3QgZnJvbSBcIi4uL2luZGV4L2xpc3RcIjtcbmltcG9ydCBSZXBsYWNlbWVudCBmcm9tIFwiLi4vcmVwbGFjZW1lbnRcIjtcbmltcG9ydCBJbmRleExpc3RSZXBsYWNlbWVudCBmcm9tIFwiLi4vcmVwbGFjZW1lbnQvaW5kZXhMaXN0XCI7XG5pbXBvcnQgSW5kZXhIZWFkaW5nUmVwbGFjZW1lbnQgZnJvbSBcIi4vaW5kZXhIZWFkaW5nXCI7XG5cbmltcG9ydCB7IHJlcGxhY2VOb2RlcywgcmVwbGFjZVRva2VucyB9IGZyb20gXCIuLi91dGlsaXRpZXMvcmVwbGFjZW1lbnRcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW5kZXhSZXBsYWNlbWVudCBleHRlbmRzIFJlcGxhY2VtZW50IHtcbiAgY29uc3RydWN0b3Iobm9kZSwgdG9rZW5zLCBub2Rlcykge1xuICAgIHN1cGVyKG5vZGUsIHRva2Vucyk7XG5cbiAgICB0aGlzLm5vZGVzID0gbm9kZXM7XG4gIH1cblxuICBnZXROb2RlcygpIHtcbiAgICByZXR1cm4gdGhpcy5ub2RlcztcbiAgfVxuXG4gIHJlcGxhY2UocmVwbGFjZWROb2RlLCBwYXJlbnROb2RlLCBjb250ZXh0KSB7XG4gICAgbGV0IHRva2VucztcblxuICAgIHRva2VucyA9IHRoaXMuZ2V0VG9rZW5zKCk7XG5cbiAgICBjb25zdCByZXBsYWNlbWVudE5vZGVzID0gdGhpcy5ub2RlcywgIC8vL1xuICAgICAgICAgIHJlcGxhY2VtZW50VG9rZW5zID0gdG9rZW5zOyAvLy9cblxuICAgICh7IHRva2VucyB9ID0gY29udGV4dCk7XG5cbiAgICByZXBsYWNlTm9kZXMocmVwbGFjZW1lbnROb2RlcywgcmVwbGFjZWROb2RlLCBwYXJlbnROb2RlKTtcblxuICAgIHJlcGxhY2VUb2tlbnMocmVwbGFjZW1lbnRUb2tlbnMsIHJlcGxhY2VkTm9kZSwgdG9rZW5zKTtcbiAgfVxuXG4gIHJlcGxhY2VJbmRleERpcmVjdGl2ZVN1YmRpdmlzaW9uUmVwbGFjZW1lbnQoaW5kZXhEaXJlY3RpdmVTdWJEaXZpc2lvblJlcGxhY2VtZW50LCBkaXZpc2lvbk1hcmtkb3duTm9kZSwgY29udGV4dCkge1xuICAgIGNvbnN0IHN1YkRpdmlzaW9uTWFya2Rvd25Ob2RlID0gaW5kZXhEaXJlY3RpdmVTdWJEaXZpc2lvblJlcGxhY2VtZW50LmdldFN1YkRpdmlzaW9uTWFya2Rvd25Ob2RlKCksXG4gICAgICAgICAgcmVwbGFjZWROb2RlID0gc3ViRGl2aXNpb25NYXJrZG93bk5vZGUsIC8vL1xuICAgICAgICAgIHBhcmVudE5vZGUgPSBkaXZpc2lvbk1hcmtkb3duTm9kZTsgIC8vL1xuXG4gICAgdGhpcy5yZXBsYWNlKHJlcGxhY2VkTm9kZSwgcGFyZW50Tm9kZSwgY29udGV4dClcbiAgfVxuXG4gIHN0YXRpYyBmcm9tRGl2aXNpb25NYXJrZG93bk5vZGVzQW5kRGl2aXNpb25NYXJrZG93bk5vZGUoZGl2aXNpb25NYXJrZG93bk5vZGVzLCBkaXZpc2lvbk1hcmtkb3duTm9kZSwgY29udGV4dCkge1xuICAgIGxldCBpbmRleFJlcGxhY2VtZW50ID0gbnVsbDtcblxuICAgIGNvbnN0IGluZGV4TGlzdCA9IEluZGV4TGlzdC5mcm9tRGl2aXNpb25NYXJrZG93bk5vZGVzKGRpdmlzaW9uTWFya2Rvd25Ob2RlcywgY29udGV4dCksXG4gICAgICAgICAgaW5kZXhSZXBsYWNlbWVudHMgPSBbXTtcblxuICAgIGxldHRlcnMuZm9yRWFjaCgobGV0dGVyKSA9PiB7XG4gICAgICBjb25zdCBpbmRleExpc3RSZXBsYWNlbWVudCA9IEluZGV4TGlzdFJlcGxhY2VtZW50LmZyb21JbmRleExpc3RBbmRMZXR0ZXIoaW5kZXhMaXN0LCBsZXR0ZXIsIGNvbnRleHQpO1xuXG4gICAgICBpZiAoaW5kZXhMaXN0UmVwbGFjZW1lbnQgIT09IG51bGwpIHtcbiAgICAgICAgbGV0IGluZGV4UmVwbGFjZW1lbnQ7XG5cbiAgICAgICAgY29uc3QgaW5kZXhIZWFkaW5nUmVwbGFjZW1lbnQgPSBJbmRleEhlYWRpbmdSZXBsYWNlbWVudC5mcm9tTGV0dGVyKGxldHRlciwgY29udGV4dCk7XG5cbiAgICAgICAgaW5kZXhSZXBsYWNlbWVudCA9IGluZGV4SGVhZGluZ1JlcGxhY2VtZW50OyAvLy9cblxuICAgICAgICBpbmRleFJlcGxhY2VtZW50cy5wdXNoKGluZGV4UmVwbGFjZW1lbnQpO1xuXG4gICAgICAgIGluZGV4UmVwbGFjZW1lbnQgPSBpbmRleExpc3RSZXBsYWNlbWVudDsgIC8vL1xuXG4gICAgICAgIGluZGV4UmVwbGFjZW1lbnRzLnB1c2goaW5kZXhSZXBsYWNlbWVudCk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBjb25zdCBpbmRleExpc3RSZXBsYWNlbWVudHNMZW5ndGggPSBpbmRleFJlcGxhY2VtZW50cy5sZW5ndGg7XG5cbiAgICBpZiAoaW5kZXhMaXN0UmVwbGFjZW1lbnRzTGVuZ3RoID4gMCkge1xuICAgICAgY29uc3Qgbm9kZSA9IG51bGwsXG4gICAgICAgICAgICBub2RlcyA9IFtdLFxuICAgICAgICAgICAgdG9rZW5zID0gW107XG5cbiAgICAgIGluZGV4UmVwbGFjZW1lbnRzLmZvckVhY2goKGluZGV4UmVwbGFjZW1lbnQpID0+IHtcbiAgICAgICAgY29uc3Qgbm9kZSA9IGluZGV4UmVwbGFjZW1lbnQuZ2V0Tm9kZSgpO1xuXG4gICAgICAgIGluZGV4UmVwbGFjZW1lbnQuZ2V0VG9rZW5zKHRva2Vucyk7XG5cbiAgICAgICAgbm9kZXMucHVzaChub2RlKTtcbiAgICAgIH0pO1xuXG4gICAgICBpbmRleFJlcGxhY2VtZW50ID0gUmVwbGFjZW1lbnQuZnJvbU5vZGVBbmRUb2tlbnMoSW5kZXhSZXBsYWNlbWVudCwgbm9kZSwgdG9rZW5zLCBub2Rlcyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGluZGV4UmVwbGFjZW1lbnQ7XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJJbmRleFJlcGxhY2VtZW50Iiwibm9kZSIsInRva2VucyIsIm5vZGVzIiwiZ2V0Tm9kZXMiLCJyZXBsYWNlIiwicmVwbGFjZWROb2RlIiwicGFyZW50Tm9kZSIsImNvbnRleHQiLCJnZXRUb2tlbnMiLCJyZXBsYWNlbWVudE5vZGVzIiwicmVwbGFjZW1lbnRUb2tlbnMiLCJyZXBsYWNlTm9kZXMiLCJyZXBsYWNlVG9rZW5zIiwicmVwbGFjZUluZGV4RGlyZWN0aXZlU3ViZGl2aXNpb25SZXBsYWNlbWVudCIsImluZGV4RGlyZWN0aXZlU3ViRGl2aXNpb25SZXBsYWNlbWVudCIsImRpdmlzaW9uTWFya2Rvd25Ob2RlIiwic3ViRGl2aXNpb25NYXJrZG93bk5vZGUiLCJnZXRTdWJEaXZpc2lvbk1hcmtkb3duTm9kZSIsImZyb21EaXZpc2lvbk1hcmtkb3duTm9kZXNBbmREaXZpc2lvbk1hcmtkb3duTm9kZSIsImRpdmlzaW9uTWFya2Rvd25Ob2RlcyIsImluZGV4UmVwbGFjZW1lbnQiLCJpbmRleExpc3QiLCJJbmRleExpc3QiLCJmcm9tRGl2aXNpb25NYXJrZG93bk5vZGVzIiwiaW5kZXhSZXBsYWNlbWVudHMiLCJsZXR0ZXJzIiwiZm9yRWFjaCIsImxldHRlciIsImluZGV4TGlzdFJlcGxhY2VtZW50IiwiSW5kZXhMaXN0UmVwbGFjZW1lbnQiLCJmcm9tSW5kZXhMaXN0QW5kTGV0dGVyIiwiaW5kZXhIZWFkaW5nUmVwbGFjZW1lbnQiLCJJbmRleEhlYWRpbmdSZXBsYWNlbWVudCIsImZyb21MZXR0ZXIiLCJwdXNoIiwiaW5kZXhMaXN0UmVwbGFjZW1lbnRzTGVuZ3RoIiwibGVuZ3RoIiwiZ2V0Tm9kZSIsIlJlcGxhY2VtZW50IiwiZnJvbU5vZGVBbmRUb2tlbnMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBVXFCQTs7OzhEQVJEOzJEQUNFO2tFQUNFO2dFQUNTO21FQUNHOzRCQUVROzs7Ozs7Ozs7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