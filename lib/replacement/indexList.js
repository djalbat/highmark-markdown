"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return IndexListReplacement;
    }
});
var _replacement = /*#__PURE__*/ _interop_require_default(require("../replacement"));
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
var IndexListReplacement = /*#__PURE__*/ function(Replacement) {
    _inherits(IndexListReplacement, Replacement);
    var _super = _create_super(IndexListReplacement);
    function IndexListReplacement() {
        _class_call_check(this, IndexListReplacement);
        return _super.apply(this, arguments);
    }
    _create_class(IndexListReplacement, [
        {
            key: "replaceIndexDirectiveSubdivisionReplacement",
            value: function replaceIndexDirectiveSubdivisionReplacement(indexDirectiveSubDivisionReplacement, divisionMarkdownNode, context) {
            // const subDivisionMarkdownNode = indexDirectiveSubDivisionReplacement.getSubDivisionMarkdownNode(),
            //       replacedNode = subDivisionMarkdownNode, ///
            //       parentNode = divisionMarkdownNode;  ///
            //
            // super.replace(replacedNode, parentNode, context)
            }
        }
    ], [
        {
            key: "fromNestedHeadingMarkdownNodes",
            value: function fromNestedHeadingMarkdownNodes(nestedHeadingMarkdownNodes, context) {
                var indexItemReplacements = indexItemReplacementsFromNestedHeadingMarkdownNodes(nestedHeadingMarkdownNodes, context), indexListMarkdownNode = IndexListMarkdownNode.fromIndexItemReplacements(indexItemReplacements), node = indexListMarkdownNode, tokens = [];
                indexItemReplacements.forEach(function(indexItemReplacement) {
                    indexItemReplacement.getTokens(tokens);
                });
                var indexListReplacement = _replacement.default.fromNodeAndTokens(IndexListReplacement, node, tokens);
                return indexListReplacement;
            }
        },
        {
            key: "fromDivisionMarkdownNodesAndDivisionMarkdownNode",
            value: function fromDivisionMarkdownNodesAndDivisionMarkdownNode(divisionMarkdownNodes, divisionMarkdownNode, context) {
                var indexListReplacement = null;
                var headingMarkdownNodes = headingMarkdownNodesFromDivisionMarkdownNodesAndDivisionMarkdownNode(divisionMarkdownNodes, divisionMarkdownNode, context), headingMarkdownNodesLength = headingMarkdownNodes.length;
                if (headingMarkdownNodesLength > 0) {
                    var nestedHeadingMarkdownNodes = nestedHeadingMarkdownNodesFromHeadingMarkdownNodes(headingMarkdownNodes), indexItemReplacements = indexItemReplacementsFromNestedHeadingMarkdownNodes(nestedHeadingMarkdownNodes, context), indexListMarkdownNode = IndexListMarkdownNode.fromIndexItemReplacements(indexItemReplacements), node = indexListMarkdownNode, tokens = [];
                    indexItemReplacements.forEach(function(indexItemReplacement) {
                        indexItemReplacement.getTokens(tokens);
                    });
                    indexListReplacement = _replacement.default.fromNodeAndTokens(IndexListReplacement, node, tokens);
                }
                return indexListReplacement;
            }
        }
    ]);
    return IndexListReplacement;
}(_replacement.default);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9yZXBsYWNlbWVudC9pbmRleExpc3QuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBSZXBsYWNlbWVudCBmcm9tIFwiLi4vcmVwbGFjZW1lbnRcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW5kZXhMaXN0UmVwbGFjZW1lbnQgZXh0ZW5kcyBSZXBsYWNlbWVudCB7XG4gIHJlcGxhY2VJbmRleERpcmVjdGl2ZVN1YmRpdmlzaW9uUmVwbGFjZW1lbnQoaW5kZXhEaXJlY3RpdmVTdWJEaXZpc2lvblJlcGxhY2VtZW50LCBkaXZpc2lvbk1hcmtkb3duTm9kZSwgY29udGV4dCkge1xuICAgIC8vIGNvbnN0IHN1YkRpdmlzaW9uTWFya2Rvd25Ob2RlID0gaW5kZXhEaXJlY3RpdmVTdWJEaXZpc2lvblJlcGxhY2VtZW50LmdldFN1YkRpdmlzaW9uTWFya2Rvd25Ob2RlKCksXG4gICAgLy8gICAgICAgcmVwbGFjZWROb2RlID0gc3ViRGl2aXNpb25NYXJrZG93bk5vZGUsIC8vL1xuICAgIC8vICAgICAgIHBhcmVudE5vZGUgPSBkaXZpc2lvbk1hcmtkb3duTm9kZTsgIC8vL1xuICAgIC8vXG4gICAgLy8gc3VwZXIucmVwbGFjZShyZXBsYWNlZE5vZGUsIHBhcmVudE5vZGUsIGNvbnRleHQpXG4gIH1cblxuICBzdGF0aWMgZnJvbU5lc3RlZEhlYWRpbmdNYXJrZG93bk5vZGVzKG5lc3RlZEhlYWRpbmdNYXJrZG93bk5vZGVzLCBjb250ZXh0KSB7XG4gICAgY29uc3QgaW5kZXhJdGVtUmVwbGFjZW1lbnRzID0gaW5kZXhJdGVtUmVwbGFjZW1lbnRzRnJvbU5lc3RlZEhlYWRpbmdNYXJrZG93bk5vZGVzKG5lc3RlZEhlYWRpbmdNYXJrZG93bk5vZGVzLCBjb250ZXh0KSxcbiAgICAgICAgICBpbmRleExpc3RNYXJrZG93bk5vZGUgPSBJbmRleExpc3RNYXJrZG93bk5vZGUuZnJvbUluZGV4SXRlbVJlcGxhY2VtZW50cyhpbmRleEl0ZW1SZXBsYWNlbWVudHMpLFxuICAgICAgICAgIG5vZGUgPSBpbmRleExpc3RNYXJrZG93bk5vZGUsIC8vL1xuICAgICAgICAgIHRva2VucyA9IFtdO1xuXG4gICAgaW5kZXhJdGVtUmVwbGFjZW1lbnRzLmZvckVhY2goKGluZGV4SXRlbVJlcGxhY2VtZW50KSA9PiB7XG4gICAgICBpbmRleEl0ZW1SZXBsYWNlbWVudC5nZXRUb2tlbnModG9rZW5zKTtcbiAgICB9KTtcblxuICAgIGNvbnN0IGluZGV4TGlzdFJlcGxhY2VtZW50ID0gUmVwbGFjZW1lbnQuZnJvbU5vZGVBbmRUb2tlbnMoSW5kZXhMaXN0UmVwbGFjZW1lbnQsIG5vZGUsIHRva2Vucyk7XG5cbiAgICByZXR1cm4gaW5kZXhMaXN0UmVwbGFjZW1lbnQ7XG4gIH1cblxuICBzdGF0aWMgZnJvbURpdmlzaW9uTWFya2Rvd25Ob2Rlc0FuZERpdmlzaW9uTWFya2Rvd25Ob2RlKGRpdmlzaW9uTWFya2Rvd25Ob2RlcywgZGl2aXNpb25NYXJrZG93bk5vZGUsIGNvbnRleHQpIHtcbiAgICBsZXQgaW5kZXhMaXN0UmVwbGFjZW1lbnQgPSBudWxsO1xuXG4gICAgY29uc3QgaGVhZGluZ01hcmtkb3duTm9kZXMgPSBoZWFkaW5nTWFya2Rvd25Ob2Rlc0Zyb21EaXZpc2lvbk1hcmtkb3duTm9kZXNBbmREaXZpc2lvbk1hcmtkb3duTm9kZShkaXZpc2lvbk1hcmtkb3duTm9kZXMsIGRpdmlzaW9uTWFya2Rvd25Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgICBoZWFkaW5nTWFya2Rvd25Ob2Rlc0xlbmd0aCA9IGhlYWRpbmdNYXJrZG93bk5vZGVzLmxlbmd0aDtcblxuICAgIGlmIChoZWFkaW5nTWFya2Rvd25Ob2Rlc0xlbmd0aCA+IDApIHtcbiAgICAgIGNvbnN0IG5lc3RlZEhlYWRpbmdNYXJrZG93bk5vZGVzID0gbmVzdGVkSGVhZGluZ01hcmtkb3duTm9kZXNGcm9tSGVhZGluZ01hcmtkb3duTm9kZXMoaGVhZGluZ01hcmtkb3duTm9kZXMpLFxuICAgICAgICAgICAgaW5kZXhJdGVtUmVwbGFjZW1lbnRzID0gaW5kZXhJdGVtUmVwbGFjZW1lbnRzRnJvbU5lc3RlZEhlYWRpbmdNYXJrZG93bk5vZGVzKG5lc3RlZEhlYWRpbmdNYXJrZG93bk5vZGVzLCBjb250ZXh0KSxcbiAgICAgICAgICAgIGluZGV4TGlzdE1hcmtkb3duTm9kZSA9IEluZGV4TGlzdE1hcmtkb3duTm9kZS5mcm9tSW5kZXhJdGVtUmVwbGFjZW1lbnRzKGluZGV4SXRlbVJlcGxhY2VtZW50cyksXG4gICAgICAgICAgICBub2RlID0gaW5kZXhMaXN0TWFya2Rvd25Ob2RlLCAvLy9cbiAgICAgICAgICAgIHRva2VucyA9IFtdO1xuXG4gICAgICBpbmRleEl0ZW1SZXBsYWNlbWVudHMuZm9yRWFjaCgoaW5kZXhJdGVtUmVwbGFjZW1lbnQpID0+IHtcbiAgICAgICAgaW5kZXhJdGVtUmVwbGFjZW1lbnQuZ2V0VG9rZW5zKHRva2Vucyk7XG4gICAgICB9KTtcblxuICAgICAgaW5kZXhMaXN0UmVwbGFjZW1lbnQgPSBSZXBsYWNlbWVudC5mcm9tTm9kZUFuZFRva2VucyhJbmRleExpc3RSZXBsYWNlbWVudCwgbm9kZSwgdG9rZW5zKTtcbiAgICB9XG5cbiAgICByZXR1cm4gaW5kZXhMaXN0UmVwbGFjZW1lbnQ7XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJJbmRleExpc3RSZXBsYWNlbWVudCIsInJlcGxhY2VJbmRleERpcmVjdGl2ZVN1YmRpdmlzaW9uUmVwbGFjZW1lbnQiLCJpbmRleERpcmVjdGl2ZVN1YkRpdmlzaW9uUmVwbGFjZW1lbnQiLCJkaXZpc2lvbk1hcmtkb3duTm9kZSIsImNvbnRleHQiLCJmcm9tTmVzdGVkSGVhZGluZ01hcmtkb3duTm9kZXMiLCJuZXN0ZWRIZWFkaW5nTWFya2Rvd25Ob2RlcyIsImluZGV4SXRlbVJlcGxhY2VtZW50cyIsImluZGV4SXRlbVJlcGxhY2VtZW50c0Zyb21OZXN0ZWRIZWFkaW5nTWFya2Rvd25Ob2RlcyIsImluZGV4TGlzdE1hcmtkb3duTm9kZSIsIkluZGV4TGlzdE1hcmtkb3duTm9kZSIsImZyb21JbmRleEl0ZW1SZXBsYWNlbWVudHMiLCJub2RlIiwidG9rZW5zIiwiZm9yRWFjaCIsImluZGV4SXRlbVJlcGxhY2VtZW50IiwiZ2V0VG9rZW5zIiwiaW5kZXhMaXN0UmVwbGFjZW1lbnQiLCJSZXBsYWNlbWVudCIsImZyb21Ob2RlQW5kVG9rZW5zIiwiZnJvbURpdmlzaW9uTWFya2Rvd25Ob2Rlc0FuZERpdmlzaW9uTWFya2Rvd25Ob2RlIiwiZGl2aXNpb25NYXJrZG93bk5vZGVzIiwiaGVhZGluZ01hcmtkb3duTm9kZXMiLCJoZWFkaW5nTWFya2Rvd25Ob2Rlc0Zyb21EaXZpc2lvbk1hcmtkb3duTm9kZXNBbmREaXZpc2lvbk1hcmtkb3duTm9kZSIsImhlYWRpbmdNYXJrZG93bk5vZGVzTGVuZ3RoIiwibGVuZ3RoIiwibmVzdGVkSGVhZGluZ01hcmtkb3duTm9kZXNGcm9tSGVhZGluZ01hcmtkb3duTm9kZXMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBSXFCQTs7O2tFQUZHOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRVQsSUFBQSxBQUFNQSxxQ0FBRCxBQUFMO2NBQU1BOytCQUFBQTthQUFBQTtnQ0FBQUE7OztrQkFBQUE7O1lBQ25CQyxLQUFBQTttQkFBQUEsU0FBQUEsNENBQTRDQyxvQ0FBb0MsRUFBRUMsb0JBQW9CLEVBQUVDLE9BQU87WUFDN0cscUdBQXFHO1lBQ3JHLG9EQUFvRDtZQUNwRCxnREFBZ0Q7WUFDaEQsRUFBRTtZQUNGLG1EQUFtRDtZQUNyRDs7OztZQUVPQyxLQUFBQTttQkFBUCxTQUFPQSwrQkFBK0JDLDBCQUEwQixFQUFFRixPQUFPO2dCQUN2RSxJQUFNRyx3QkFBd0JDLG9EQUFvREYsNEJBQTRCRixVQUN4R0ssd0JBQXdCQyxzQkFBc0JDLHlCQUF5QixDQUFDSix3QkFDeEVLLE9BQU9ILHVCQUNQSSxTQUFTLEVBQUU7Z0JBRWpCTixzQkFBc0JPLE9BQU8sQ0FBQyxTQUFDQztvQkFDN0JBLHFCQUFxQkMsU0FBUyxDQUFDSDtnQkFDakM7Z0JBRUEsSUFBTUksdUJBQXVCQyxvQkFBVyxDQUFDQyxpQkFBaUIsQ0FuQnpDbkIsc0JBbUJnRVksTUFBTUM7Z0JBRXZGLE9BQU9JO1lBQ1Q7OztZQUVPRyxLQUFBQTttQkFBUCxTQUFPQSxpREFBaURDLHFCQUFxQixFQUFFbEIsb0JBQW9CLEVBQUVDLE9BQU87Z0JBQzFHLElBQUlhLHVCQUF1QjtnQkFFM0IsSUFBTUssdUJBQXVCQyxxRUFBcUVGLHVCQUF1QmxCLHNCQUFzQkMsVUFDeklvQiw2QkFBNkJGLHFCQUFxQkcsTUFBTTtnQkFFOUQsSUFBSUQsNkJBQTZCLEdBQUc7b0JBQ2xDLElBQU1sQiw2QkFBNkJvQixtREFBbURKLHVCQUNoRmYsd0JBQXdCQyxvREFBb0RGLDRCQUE0QkYsVUFDeEdLLHdCQUF3QkMsc0JBQXNCQyx5QkFBeUIsQ0FBQ0osd0JBQ3hFSyxPQUFPSCx1QkFDUEksU0FBUyxFQUFFO29CQUVqQk4sc0JBQXNCTyxPQUFPLENBQUMsU0FBQ0M7d0JBQzdCQSxxQkFBcUJDLFNBQVMsQ0FBQ0g7b0JBQ2pDO29CQUVBSSx1QkFBdUJDLG9CQUFXLENBQUNDLGlCQUFpQixDQXpDckNuQixzQkF5QzREWSxNQUFNQztnQkFDbkY7Z0JBRUEsT0FBT0k7WUFDVDs7O1dBN0NtQmpCO0VBQTZCa0Isb0JBQVcifQ==