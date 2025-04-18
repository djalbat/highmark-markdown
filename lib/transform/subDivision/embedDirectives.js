"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return EmbedDirectivesSubDivisionTransform;
    }
});
var _necessary = require("necessary");
var _subDivision = /*#__PURE__*/ _interop_require_default(require("../../transform/subDivision"));
var _query = require("../../utilities/query");
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
var backwardsForEach = _necessary.arrayUtilities.backwardsForEach;
var EmbedDirectivesSubDivisionTransform = /*#__PURE__*/ function(SubDivisionTransform) {
    _inherits(EmbedDirectivesSubDivisionTransform, SubDivisionTransform);
    function EmbedDirectivesSubDivisionTransform(node, tokens, subDivisionMarkdownNode, embedDirectiveMarkdownNodes) {
        _class_call_check(this, EmbedDirectivesSubDivisionTransform);
        var _this;
        _this = _call_super(this, EmbedDirectivesSubDivisionTransform, [
            node,
            tokens,
            subDivisionMarkdownNode
        ]);
        _this.embedDirectiveMarkdownNodes = embedDirectiveMarkdownNodes;
        return _this;
    }
    _create_class(EmbedDirectivesSubDivisionTransform, [
        {
            key: "getEmbedDirectiveMarkdownNodes",
            value: function getEmbedDirectiveMarkdownNodes() {
                return this.embedDirectiveMarkdownNodes;
            }
        },
        {
            key: "replaceSubDivisionMarkdownNode",
            value: function replaceSubDivisionMarkdownNode(divisionMarkdownNode, context) {
                var subDivisionMarkdownNodes = [], subDivisionMarkdownNode = this.getSubDivisionMarkdownNode();
                backwardsForEach(this.embedDirectiveMarkdownNodes, function(embedDirectiveMarkdownNode) {
                    var embedDirectiveTransform = embedDirectiveMarkdownNode.resolve(context);
                    if (embedDirectiveTransform !== null) {
                        embedDirectiveTransform.addAfterSubDivisionMarkdownNode(subDivisionMarkdownNode, divisionMarkdownNode, subDivisionMarkdownNodes, context);
                    }
                });
                this.removeFromDivisionMarkdownNode(divisionMarkdownNode, context);
                return subDivisionMarkdownNodes;
            }
        }
    ], [
        {
            key: "fromSubDivisionMarkdownNode",
            value: function fromSubDivisionMarkdownNode(subDivisionMarkdownNode, context) {
                var embedDirectivesSubDivisionTransform = null;
                var node = subDivisionMarkdownNode, embedDirectiveMarkdownNodes = (0, _query.embedDirectiveMarkdownNodesFromNode)(node), embedDirectiveMarkdownNodesLength = embedDirectiveMarkdownNodes.length;
                if (embedDirectiveMarkdownNodesLength > 0) {
                    embedDirectivesSubDivisionTransform = _subDivision.default.fromSubDivisionMarkdownNode(EmbedDirectivesSubDivisionTransform, subDivisionMarkdownNode, embedDirectiveMarkdownNodes, context);
                }
                return embedDirectivesSubDivisionTransform;
            }
        }
    ]);
    return EmbedDirectivesSubDivisionTransform;
}(_subDivision.default);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy90cmFuc2Zvcm0vc3ViRGl2aXNpb24vZW1iZWREaXJlY3RpdmVzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBhcnJheVV0aWxpdGllcyB9IGZyb20gXCJuZWNlc3NhcnlcIjtcblxuaW1wb3J0IFN1YkRpdmlzaW9uVHJhbnNmb3JtIGZyb20gXCIuLi8uLi90cmFuc2Zvcm0vc3ViRGl2aXNpb25cIjtcblxuaW1wb3J0IHsgZW1iZWREaXJlY3RpdmVNYXJrZG93bk5vZGVzRnJvbU5vZGUgfSBmcm9tIFwiLi4vLi4vdXRpbGl0aWVzL3F1ZXJ5XCI7XG5cbmNvbnN0IHsgYmFja3dhcmRzRm9yRWFjaCB9ID0gYXJyYXlVdGlsaXRpZXM7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEVtYmVkRGlyZWN0aXZlc1N1YkRpdmlzaW9uVHJhbnNmb3JtIGV4dGVuZHMgU3ViRGl2aXNpb25UcmFuc2Zvcm0ge1xuICBjb25zdHJ1Y3Rvcihub2RlLCB0b2tlbnMsIHN1YkRpdmlzaW9uTWFya2Rvd25Ob2RlLCBlbWJlZERpcmVjdGl2ZU1hcmtkb3duTm9kZXMpIHtcbiAgICBzdXBlcihub2RlLCB0b2tlbnMsIHN1YkRpdmlzaW9uTWFya2Rvd25Ob2RlKTtcblxuICAgIHRoaXMuZW1iZWREaXJlY3RpdmVNYXJrZG93bk5vZGVzID0gZW1iZWREaXJlY3RpdmVNYXJrZG93bk5vZGVzO1xuICB9XG5cbiAgZ2V0RW1iZWREaXJlY3RpdmVNYXJrZG93bk5vZGVzKCkge1xuICAgIHJldHVybiB0aGlzLmVtYmVkRGlyZWN0aXZlTWFya2Rvd25Ob2RlcztcbiAgfVxuXG4gIHJlcGxhY2VTdWJEaXZpc2lvbk1hcmtkb3duTm9kZShkaXZpc2lvbk1hcmtkb3duTm9kZSwgY29udGV4dCkge1xuICAgIGNvbnN0IHN1YkRpdmlzaW9uTWFya2Rvd25Ob2RlcyA9IFtdLFxuICAgICAgICAgIHN1YkRpdmlzaW9uTWFya2Rvd25Ob2RlID0gdGhpcy5nZXRTdWJEaXZpc2lvbk1hcmtkb3duTm9kZSgpO1xuXG4gICAgYmFja3dhcmRzRm9yRWFjaCh0aGlzLmVtYmVkRGlyZWN0aXZlTWFya2Rvd25Ob2RlcywgKGVtYmVkRGlyZWN0aXZlTWFya2Rvd25Ob2RlKSA9PiB7XG4gICAgICBjb25zdCBlbWJlZERpcmVjdGl2ZVRyYW5zZm9ybSA9IGVtYmVkRGlyZWN0aXZlTWFya2Rvd25Ob2RlLnJlc29sdmUoY29udGV4dCk7XG5cbiAgICAgIGlmIChlbWJlZERpcmVjdGl2ZVRyYW5zZm9ybSAhPT0gbnVsbCkge1xuICAgICAgICBlbWJlZERpcmVjdGl2ZVRyYW5zZm9ybS5hZGRBZnRlclN1YkRpdmlzaW9uTWFya2Rvd25Ob2RlKHN1YkRpdmlzaW9uTWFya2Rvd25Ob2RlLCBkaXZpc2lvbk1hcmtkb3duTm9kZSwgc3ViRGl2aXNpb25NYXJrZG93bk5vZGVzLCBjb250ZXh0KTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHRoaXMucmVtb3ZlRnJvbURpdmlzaW9uTWFya2Rvd25Ob2RlKGRpdmlzaW9uTWFya2Rvd25Ob2RlLCBjb250ZXh0KTtcblxuICAgIHJldHVybiBzdWJEaXZpc2lvbk1hcmtkb3duTm9kZXM7XG4gIH1cblxuICBzdGF0aWMgZnJvbVN1YkRpdmlzaW9uTWFya2Rvd25Ob2RlKHN1YkRpdmlzaW9uTWFya2Rvd25Ob2RlLCBjb250ZXh0KSB7XG4gICAgbGV0IGVtYmVkRGlyZWN0aXZlc1N1YkRpdmlzaW9uVHJhbnNmb3JtID0gbnVsbDtcblxuICAgIGNvbnN0IG5vZGUgPSBzdWJEaXZpc2lvbk1hcmtkb3duTm9kZSwgLy8vXG4gICAgICAgICAgZW1iZWREaXJlY3RpdmVNYXJrZG93bk5vZGVzID0gZW1iZWREaXJlY3RpdmVNYXJrZG93bk5vZGVzRnJvbU5vZGUobm9kZSksXG4gICAgICAgICAgZW1iZWREaXJlY3RpdmVNYXJrZG93bk5vZGVzTGVuZ3RoID0gZW1iZWREaXJlY3RpdmVNYXJrZG93bk5vZGVzLmxlbmd0aDtcblxuICAgIGlmIChlbWJlZERpcmVjdGl2ZU1hcmtkb3duTm9kZXNMZW5ndGggPiAwKSB7XG4gICAgICBlbWJlZERpcmVjdGl2ZXNTdWJEaXZpc2lvblRyYW5zZm9ybSA9IFN1YkRpdmlzaW9uVHJhbnNmb3JtLmZyb21TdWJEaXZpc2lvbk1hcmtkb3duTm9kZShFbWJlZERpcmVjdGl2ZXNTdWJEaXZpc2lvblRyYW5zZm9ybSwgc3ViRGl2aXNpb25NYXJrZG93bk5vZGUsIGVtYmVkRGlyZWN0aXZlTWFya2Rvd25Ob2RlcywgY29udGV4dCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGVtYmVkRGlyZWN0aXZlc1N1YkRpdmlzaW9uVHJhbnNmb3JtO1xuICB9XG59XG4iXSwibmFtZXMiOlsiRW1iZWREaXJlY3RpdmVzU3ViRGl2aXNpb25UcmFuc2Zvcm0iLCJiYWNrd2FyZHNGb3JFYWNoIiwiYXJyYXlVdGlsaXRpZXMiLCJub2RlIiwidG9rZW5zIiwic3ViRGl2aXNpb25NYXJrZG93bk5vZGUiLCJlbWJlZERpcmVjdGl2ZU1hcmtkb3duTm9kZXMiLCJnZXRFbWJlZERpcmVjdGl2ZU1hcmtkb3duTm9kZXMiLCJyZXBsYWNlU3ViRGl2aXNpb25NYXJrZG93bk5vZGUiLCJkaXZpc2lvbk1hcmtkb3duTm9kZSIsImNvbnRleHQiLCJzdWJEaXZpc2lvbk1hcmtkb3duTm9kZXMiLCJnZXRTdWJEaXZpc2lvbk1hcmtkb3duTm9kZSIsImVtYmVkRGlyZWN0aXZlTWFya2Rvd25Ob2RlIiwiZW1iZWREaXJlY3RpdmVUcmFuc2Zvcm0iLCJyZXNvbHZlIiwiYWRkQWZ0ZXJTdWJEaXZpc2lvbk1hcmtkb3duTm9kZSIsInJlbW92ZUZyb21EaXZpc2lvbk1hcmtkb3duTm9kZSIsImZyb21TdWJEaXZpc2lvbk1hcmtkb3duTm9kZSIsImVtYmVkRGlyZWN0aXZlc1N1YkRpdmlzaW9uVHJhbnNmb3JtIiwiZW1iZWREaXJlY3RpdmVNYXJrZG93bk5vZGVzRnJvbU5vZGUiLCJlbWJlZERpcmVjdGl2ZU1hcmtkb3duTm9kZXNMZW5ndGgiLCJsZW5ndGgiLCJTdWJEaXZpc2lvblRyYW5zZm9ybSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFVcUJBOzs7eUJBUlU7a0VBRUU7cUJBRW1COzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRXBELElBQU0sQUFBRUMsbUJBQXFCQyx5QkFBYyxDQUFuQ0Q7QUFFTyxJQUFBLEFBQU1ELG9EQUFOO2NBQU1BO2FBQUFBLG9DQUNQRyxJQUFJLEVBQUVDLE1BQU0sRUFBRUMsdUJBQXVCLEVBQUVDLDJCQUEyQjtnQ0FEM0ROOztnQkFFakIsa0JBRmlCQTtZQUVYRztZQUFNQztZQUFRQzs7UUFFcEIsTUFBS0MsMkJBQTJCLEdBQUdBOzs7a0JBSmxCTjs7WUFPbkJPLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0QsMkJBQTJCO1lBQ3pDOzs7WUFFQUUsS0FBQUE7bUJBQUFBLFNBQUFBLCtCQUErQkMsb0JBQW9CLEVBQUVDLE9BQU87Z0JBQzFELElBQU1DLDJCQUEyQixFQUFFLEVBQzdCTiwwQkFBMEIsSUFBSSxDQUFDTywwQkFBMEI7Z0JBRS9EWCxpQkFBaUIsSUFBSSxDQUFDSywyQkFBMkIsRUFBRSxTQUFDTztvQkFDbEQsSUFBTUMsMEJBQTBCRCwyQkFBMkJFLE9BQU8sQ0FBQ0w7b0JBRW5FLElBQUlJLDRCQUE0QixNQUFNO3dCQUNwQ0Esd0JBQXdCRSwrQkFBK0IsQ0FBQ1gseUJBQXlCSSxzQkFBc0JFLDBCQUEwQkQ7b0JBQ25JO2dCQUNGO2dCQUVBLElBQUksQ0FBQ08sOEJBQThCLENBQUNSLHNCQUFzQkM7Z0JBRTFELE9BQU9DO1lBQ1Q7Ozs7WUFFT08sS0FBQUE7bUJBQVAsU0FBT0EsNEJBQTRCYix1QkFBdUIsRUFBRUssT0FBTztnQkFDakUsSUFBSVMsc0NBQXNDO2dCQUUxQyxJQUFNaEIsT0FBT0UseUJBQ1BDLDhCQUE4QmMsSUFBQUEsMENBQW1DLEVBQUNqQixPQUNsRWtCLG9DQUFvQ2YsNEJBQTRCZ0IsTUFBTTtnQkFFNUUsSUFBSUQsb0NBQW9DLEdBQUc7b0JBQ3pDRixzQ0FBc0NJLG9CQUFvQixDQUFDTCwyQkFBMkIsQ0FwQ3ZFbEIscUNBb0M2R0sseUJBQXlCQyw2QkFBNkJJO2dCQUNwTDtnQkFFQSxPQUFPUztZQUNUOzs7V0F4Q21CbkI7RUFBNEN1QixvQkFBb0IifQ==