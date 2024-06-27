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
var _letters = /*#__PURE__*/ _interop_require_default(require("../letters"));
var _list = /*#__PURE__*/ _interop_require_default(require("../index/list"));
var _indexList = /*#__PURE__*/ _interop_require_default(require("../replacement/indexList"));
var _indexHeading = /*#__PURE__*/ _interop_require_default(require("./indexHeading"));
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9yZXBsYWNlbWVudC9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IFJlcGxhY2VtZW50IGZyb20gXCIuLi9yZXBsYWNlbWVudFwiO1xuXG5pbXBvcnQgbGV0dGVycyBmcm9tIFwiLi4vbGV0dGVyc1wiO1xuaW1wb3J0IEluZGV4TGlzdCBmcm9tIFwiLi4vaW5kZXgvbGlzdFwiO1xuaW1wb3J0IEluZGV4TGlzdFJlcGxhY2VtZW50IGZyb20gXCIuLi9yZXBsYWNlbWVudC9pbmRleExpc3RcIjtcbmltcG9ydCBJbmRleEhlYWRpbmdSZXBsYWNlbWVudCBmcm9tIFwiLi9pbmRleEhlYWRpbmdcIjtcblxuaW1wb3J0IHsgcmVwbGFjZU5vZGVzLCByZXBsYWNlVG9rZW5zIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9yZXBsYWNlbWVudFwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJbmRleFJlcGxhY2VtZW50IGV4dGVuZHMgUmVwbGFjZW1lbnQge1xuICBjb25zdHJ1Y3Rvcihub2RlLCB0b2tlbnMsIG5vZGVzKSB7XG4gICAgc3VwZXIobm9kZSwgdG9rZW5zKTtcblxuICAgIHRoaXMubm9kZXMgPSBub2RlcztcbiAgfVxuXG4gIGdldE5vZGVzKCkge1xuICAgIHJldHVybiB0aGlzLm5vZGVzO1xuICB9XG5cbiAgZ2V0UmVwbGFjZW1lbnROb2RlcygpIHtcbiAgICBjb25zdCByZXBsYWNlbWVudE5vZGVzID0gdGhpcy5ub2RlczsgIC8vL1xuXG4gICAgcmV0dXJuIHJlcGxhY2VtZW50Tm9kZXM7XG4gIH1cblxuICBnZXRSZXBsYWNlbWVudFRva2VucygpIHtcbiAgICBjb25zdCB0b2tlbnMgPSB0aGlzLmdldFRva2VucygpLFxuICAgICAgICAgIHJlcGxhY2VtZW50VG9rZW5zID0gdG9rZW5zOyAvLy9cblxuICAgIHJldHVybiByZXBsYWNlbWVudFRva2VucztcbiAgfVxuXG4gIHJlcGxhY2UocmVwbGFjZWROb2RlLCBwYXJlbnROb2RlLCBjb250ZXh0KSB7XG4gICAgY29uc3QgeyB0b2tlbnMgfSA9IGNvbnRleHQsXG4gICAgICAgICAgcmVwbGFjZW1lbnROb2RlcyA9IHRoaXMuZ2V0UmVwbGFjZW1lbnROb2RlcygpLFxuICAgICAgICAgIHJlcGxhY2VtZW50VG9rZW5zID0gdGhpcy5nZXRSZXBsYWNlbWVudFRva2VucygpO1xuXG4gICAgcmVwbGFjZU5vZGVzKHJlcGxhY2VtZW50Tm9kZXMsIHJlcGxhY2VkTm9kZSwgcGFyZW50Tm9kZSk7XG5cbiAgICByZXBsYWNlVG9rZW5zKHJlcGxhY2VtZW50VG9rZW5zLCByZXBsYWNlZE5vZGUsIHRva2Vucyk7XG4gIH1cblxuICByZXBsYWNlSW5kZXhEaXJlY3RpdmVTdWJkaXZpc2lvblJlcGxhY2VtZW50KGluZGV4RGlyZWN0aXZlU3ViRGl2aXNpb25SZXBsYWNlbWVudCwgZGl2aXNpb25NYXJrZG93bk5vZGUsIGNvbnRleHQpIHtcbiAgICBjb25zdCBzdWJEaXZpc2lvbk1hcmtkb3duTm9kZSA9IGluZGV4RGlyZWN0aXZlU3ViRGl2aXNpb25SZXBsYWNlbWVudC5nZXRTdWJEaXZpc2lvbk1hcmtkb3duTm9kZSgpLFxuICAgICAgICAgIHJlcGxhY2VkTm9kZSA9IHN1YkRpdmlzaW9uTWFya2Rvd25Ob2RlLCAvLy9cbiAgICAgICAgICBwYXJlbnROb2RlID0gZGl2aXNpb25NYXJrZG93bk5vZGU7ICAvLy9cblxuICAgIHRoaXMucmVwbGFjZShyZXBsYWNlZE5vZGUsIHBhcmVudE5vZGUsIGNvbnRleHQpXG4gIH1cblxuICBzdGF0aWMgZnJvbURpdmlzaW9uTWFya2Rvd25Ob2Rlc0FuZERpdmlzaW9uTWFya2Rvd25Ob2RlKGRpdmlzaW9uTWFya2Rvd25Ob2RlcywgZGl2aXNpb25NYXJrZG93bk5vZGUsIGNvbnRleHQpIHtcbiAgICBsZXQgaW5kZXhSZXBsYWNlbWVudCA9IG51bGw7XG5cbiAgICBjb25zdCBpbmRleExpc3QgPSBJbmRleExpc3QuZnJvbURpdmlzaW9uTWFya2Rvd25Ob2RlcyhkaXZpc2lvbk1hcmtkb3duTm9kZXMsIGNvbnRleHQpLFxuICAgICAgICAgIGluZGV4UmVwbGFjZW1lbnRzID0gW107XG5cbiAgICBsZXR0ZXJzLmZvckVhY2goKGxldHRlcikgPT4ge1xuICAgICAgY29uc3QgaW5kZXhMaXN0UmVwbGFjZW1lbnQgPSBJbmRleExpc3RSZXBsYWNlbWVudC5mcm9tSW5kZXhMaXN0QW5kTGV0dGVyKGluZGV4TGlzdCwgbGV0dGVyLCBjb250ZXh0KTtcblxuICAgICAgaWYgKGluZGV4TGlzdFJlcGxhY2VtZW50ICE9PSBudWxsKSB7XG4gICAgICAgIGxldCBpbmRleFJlcGxhY2VtZW50O1xuXG4gICAgICAgIGNvbnN0IGluZGV4SGVhZGluZ1JlcGxhY2VtZW50ID0gSW5kZXhIZWFkaW5nUmVwbGFjZW1lbnQuZnJvbUxldHRlcihsZXR0ZXIsIGNvbnRleHQpO1xuXG4gICAgICAgIGluZGV4UmVwbGFjZW1lbnQgPSBpbmRleEhlYWRpbmdSZXBsYWNlbWVudDsgLy8vXG5cbiAgICAgICAgaW5kZXhSZXBsYWNlbWVudHMucHVzaChpbmRleFJlcGxhY2VtZW50KTtcblxuICAgICAgICBpbmRleFJlcGxhY2VtZW50ID0gaW5kZXhMaXN0UmVwbGFjZW1lbnQ7ICAvLy9cblxuICAgICAgICBpbmRleFJlcGxhY2VtZW50cy5wdXNoKGluZGV4UmVwbGFjZW1lbnQpO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgY29uc3QgaW5kZXhMaXN0UmVwbGFjZW1lbnRzTGVuZ3RoID0gaW5kZXhSZXBsYWNlbWVudHMubGVuZ3RoO1xuXG4gICAgaWYgKGluZGV4TGlzdFJlcGxhY2VtZW50c0xlbmd0aCA+IDApIHtcbiAgICAgIGNvbnN0IG5vZGUgPSBudWxsLFxuICAgICAgICAgICAgbm9kZXMgPSBbXSxcbiAgICAgICAgICAgIHRva2VucyA9IFtdO1xuXG4gICAgICBpbmRleFJlcGxhY2VtZW50cy5mb3JFYWNoKChpbmRleFJlcGxhY2VtZW50KSA9PiB7XG4gICAgICAgIGNvbnN0IG5vZGUgPSBpbmRleFJlcGxhY2VtZW50LmdldE5vZGUoKTtcblxuICAgICAgICBpbmRleFJlcGxhY2VtZW50LmdldFRva2Vucyh0b2tlbnMpO1xuXG4gICAgICAgIG5vZGVzLnB1c2gobm9kZSk7XG4gICAgICB9KTtcblxuICAgICAgaW5kZXhSZXBsYWNlbWVudCA9IFJlcGxhY2VtZW50LmZyb21Ob2RlQW5kVG9rZW5zKEluZGV4UmVwbGFjZW1lbnQsIG5vZGUsIHRva2Vucywgbm9kZXMpO1xuICAgIH1cblxuICAgIHJldHVybiBpbmRleFJlcGxhY2VtZW50O1xuICB9XG59XG4iXSwibmFtZXMiOlsiSW5kZXhSZXBsYWNlbWVudCIsIm5vZGUiLCJ0b2tlbnMiLCJub2RlcyIsImdldE5vZGVzIiwiZ2V0UmVwbGFjZW1lbnROb2RlcyIsInJlcGxhY2VtZW50Tm9kZXMiLCJnZXRSZXBsYWNlbWVudFRva2VucyIsImdldFRva2VucyIsInJlcGxhY2VtZW50VG9rZW5zIiwicmVwbGFjZSIsInJlcGxhY2VkTm9kZSIsInBhcmVudE5vZGUiLCJjb250ZXh0IiwicmVwbGFjZU5vZGVzIiwicmVwbGFjZVRva2VucyIsInJlcGxhY2VJbmRleERpcmVjdGl2ZVN1YmRpdmlzaW9uUmVwbGFjZW1lbnQiLCJpbmRleERpcmVjdGl2ZVN1YkRpdmlzaW9uUmVwbGFjZW1lbnQiLCJkaXZpc2lvbk1hcmtkb3duTm9kZSIsInN1YkRpdmlzaW9uTWFya2Rvd25Ob2RlIiwiZ2V0U3ViRGl2aXNpb25NYXJrZG93bk5vZGUiLCJmcm9tRGl2aXNpb25NYXJrZG93bk5vZGVzQW5kRGl2aXNpb25NYXJrZG93bk5vZGUiLCJkaXZpc2lvbk1hcmtkb3duTm9kZXMiLCJpbmRleFJlcGxhY2VtZW50IiwiaW5kZXhMaXN0IiwiSW5kZXhMaXN0IiwiZnJvbURpdmlzaW9uTWFya2Rvd25Ob2RlcyIsImluZGV4UmVwbGFjZW1lbnRzIiwibGV0dGVycyIsImZvckVhY2giLCJsZXR0ZXIiLCJpbmRleExpc3RSZXBsYWNlbWVudCIsIkluZGV4TGlzdFJlcGxhY2VtZW50IiwiZnJvbUluZGV4TGlzdEFuZExldHRlciIsImluZGV4SGVhZGluZ1JlcGxhY2VtZW50IiwiSW5kZXhIZWFkaW5nUmVwbGFjZW1lbnQiLCJmcm9tTGV0dGVyIiwicHVzaCIsImluZGV4TGlzdFJlcGxhY2VtZW50c0xlbmd0aCIsImxlbmd0aCIsImdldE5vZGUiLCJSZXBsYWNlbWVudCIsImZyb21Ob2RlQW5kVG9rZW5zIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQVdxQkE7OztrRUFURzs4REFFSjsyREFDRTtnRUFDVzttRUFDRzs0QkFFUTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUU3QixJQUFBLEFBQU1BLGlDQUFELEFBQUw7Y0FBTUE7K0JBQUFBO2FBQUFBLGlCQUNQQyxJQUFJLEVBQUVDLE1BQU0sRUFBRUMsS0FBSztnQ0FEWkg7O2tDQUVYQyxNQUFNQztRQUVaLE1BQUtDLEtBQUssR0FBR0E7OztrQkFKSUg7O1lBT25CSSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNELEtBQUs7WUFDbkI7OztZQUVBRSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBTUMsbUJBQW1CLElBQUksQ0FBQ0gsS0FBSyxFQUFHLEdBQUc7Z0JBRXpDLE9BQU9HO1lBQ1Q7OztZQUVBQyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBTUwsU0FBUyxJQUFJLENBQUNNLFNBQVMsSUFDdkJDLG9CQUFvQlAsUUFBUSxHQUFHO2dCQUVyQyxPQUFPTztZQUNUOzs7WUFFQUMsS0FBQUE7bUJBQUFBLFNBQUFBLFFBQVFDLFlBQVksRUFBRUMsVUFBVSxFQUFFQyxPQUFPO2dCQUN2QyxJQUFNLEFBQUVYLFNBQVdXLFFBQVhYLFFBQ0ZJLG1CQUFtQixJQUFJLENBQUNELG1CQUFtQixJQUMzQ0ksb0JBQW9CLElBQUksQ0FBQ0Ysb0JBQW9CO2dCQUVuRE8sSUFBQUEsMEJBQVksRUFBQ1Isa0JBQWtCSyxjQUFjQztnQkFFN0NHLElBQUFBLDJCQUFhLEVBQUNOLG1CQUFtQkUsY0FBY1Q7WUFDakQ7OztZQUVBYyxLQUFBQTttQkFBQUEsU0FBQUEsNENBQTRDQyxvQ0FBb0MsRUFBRUMsb0JBQW9CLEVBQUVMLE9BQU87Z0JBQzdHLElBQU1NLDBCQUEwQkYscUNBQXFDRywwQkFBMEIsSUFDekZULGVBQWVRLHlCQUNmUCxhQUFhTSxzQkFBdUIsR0FBRztnQkFFN0MsSUFBSSxDQUFDUixPQUFPLENBQUNDLGNBQWNDLFlBQVlDO1lBQ3pDOzs7O1lBRU9RLEtBQUFBO21CQUFQLFNBQU9BLGlEQUFpREMscUJBQXFCLEVBQUVKLG9CQUFvQixFQUFFTCxPQUFPO2dCQUMxRyxJQUFJVSxtQkFBbUI7Z0JBRXZCLElBQU1DLFlBQVlDLGFBQVMsQ0FBQ0MseUJBQXlCLENBQUNKLHVCQUF1QlQsVUFDdkVjLG9CQUFvQixFQUFFO2dCQUU1QkMsZ0JBQU8sQ0FBQ0MsT0FBTyxDQUFDLFNBQUNDO29CQUNmLElBQU1DLHVCQUF1QkMsa0JBQW9CLENBQUNDLHNCQUFzQixDQUFDVCxXQUFXTSxRQUFRakI7b0JBRTVGLElBQUlrQix5QkFBeUIsTUFBTTt3QkFDakMsSUFBSVI7d0JBRUosSUFBTVcsMEJBQTBCQyxxQkFBdUIsQ0FBQ0MsVUFBVSxDQUFDTixRQUFRakI7d0JBRTNFVSxtQkFBbUJXLHlCQUF5QixHQUFHO3dCQUUvQ1Asa0JBQWtCVSxJQUFJLENBQUNkO3dCQUV2QkEsbUJBQW1CUSxzQkFBdUIsR0FBRzt3QkFFN0NKLGtCQUFrQlUsSUFBSSxDQUFDZDtvQkFDekI7Z0JBQ0Y7Z0JBRUEsSUFBTWUsOEJBQThCWCxrQkFBa0JZLE1BQU07Z0JBRTVELElBQUlELDhCQUE4QixHQUFHO29CQUNuQyxJQUFNckMsT0FBTyxNQUNQRSxRQUFRLEVBQUUsRUFDVkQsU0FBUyxFQUFFO29CQUVqQnlCLGtCQUFrQkUsT0FBTyxDQUFDLFNBQUNOO3dCQUN6QixJQUFNdEIsT0FBT3NCLGlCQUFpQmlCLE9BQU87d0JBRXJDakIsaUJBQWlCZixTQUFTLENBQUNOO3dCQUUzQkMsTUFBTWtDLElBQUksQ0FBQ3BDO29CQUNiO29CQUVBc0IsbUJBQW1Ca0Isb0JBQVcsQ0FBQ0MsaUJBQWlCLENBakZqQzFDLGtCQWlGb0RDLE1BQU1DLFFBQVFDO2dCQUNuRjtnQkFFQSxPQUFPb0I7WUFDVDs7O1dBckZtQnZCO0VBQXlCeUMsb0JBQVcifQ==