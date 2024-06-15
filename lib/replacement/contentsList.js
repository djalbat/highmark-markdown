"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return ContentsListReplacement;
    }
});
var _necessary = require("necessary");
var _replacement = /*#__PURE__*/ _interop_require_default(require("../replacement"));
var _contentsList = /*#__PURE__*/ _interop_require_default(require("../node/markdown/contentsList"));
var _query = require("../utilities/query");
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
function _get(target, property, receiver) {
    if (typeof Reflect !== "undefined" && Reflect.get) {
        _get = Reflect.get;
    } else {
        _get = function get(target, property, receiver) {
            var base = _super_prop_base(target, property);
            if (!base) return;
            var desc = Object.getOwnPropertyDescriptor(base, property);
            if (desc.get) {
                return desc.get.call(receiver || target);
            }
            return desc.value;
        };
    }
    return _get(target, property, receiver || target);
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
function _super_prop_base(object, property) {
    while(!Object.prototype.hasOwnProperty.call(object, property)){
        object = _get_prototype_of(object);
        if (object === null) break;
    }
    return object;
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
var filter = _necessary.arrayUtilities.filter;
var ContentsListReplacement = /*#__PURE__*/ function(Replacement) {
    _inherits(ContentsListReplacement, Replacement);
    var _super = _create_super(ContentsListReplacement);
    function ContentsListReplacement() {
        _class_call_check(this, ContentsListReplacement);
        return _super.apply(this, arguments);
    }
    _create_class(ContentsListReplacement, [
        {
            key: "replaceContentsDirectiveMarkdownNode",
            value: function replaceContentsDirectiveMarkdownNode(contentsDirectiveMarkdownNode, divisionMarkdownNode, context) {
                var replacedNode = contentsDirectiveMarkdownNode, parentNode = divisionMarkdownNode; ///
                _get(_get_prototype_of(ContentsListReplacement.prototype), "replace", this).call(this, replacedNode, parentNode, context);
            }
        }
    ], [
        {
            key: "fromNodeAndTokens",
            value: function fromNodeAndTokens(node, tokens) {
                return _replacement.default.fromNodeAndTokens(ContentsListReplacement, node, tokens);
            }
        },
        {
            key: "fromDivisionMarkdownNodesAndDivisionMarkdownNode",
            value: function fromDivisionMarkdownNodesAndDivisionMarkdownNode(divisionMarkdownNodes, divisionMarkdownNode, context) {
                var contentsListReplacement = null;
                var headingMarkdownNodes = headingMarkdownNodesFromDivisionMarkdownNodesAndDivisionMarkdownNode(divisionMarkdownNodes, divisionMarkdownNode, context), headingMarkdownNodesLength = headingMarkdownNodes.length;
                if (headingMarkdownNodesLength > 0) {
                    debugger;
                    var contentsListMarkdownNode = FootnotesListMarkdownNode.fromNothing(), node = contentsListMarkdownNode, tokens = [];
                    contentsItemReplacements.forEach(function(contentsItemReplacement) {
                        contentsItemReplacement.getTokens(tokens);
                        contentsItemReplacement.appendToFootnotesListMarkdownNode(contentsListMarkdownNode, context);
                    });
                    contentsListReplacement = ContentsListReplacement.fromNodeAndTokens(node, tokens);
                }
                return contentsListReplacement;
            }
        }
    ]);
    return ContentsListReplacement;
}(_replacement.default);
function headingMarkdownNodesFromDivisionMarkdownNodesAndDivisionMarkdownNode(divisionMarkdownNodes, divisionMarkdownNode, context) {
    var headingMarkdownNodes = [], index = divisionMarkdownNodes.indexOf(divisionMarkdownNode), start = index + 1;
    divisionMarkdownNodes = divisionMarkdownNodes.slice(start); ///
    divisionMarkdownNodes.forEach(function(divisionMarkdownNode) {
        var node = divisionMarkdownNode; ///
        (0, _query.headingMarkdownNodesFromNode)(node, headingMarkdownNodes);
    });
    filter(headingMarkdownNodes, function(headingMarkdownNode) {
        var contentsDepth = context.contentsDepth, depth = headingMarkdownNode.getDepth();
        if (depth <= contentsDepth) {
            return true;
        }
    });
    return headingMarkdownNodes;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9yZXBsYWNlbWVudC9jb250ZW50c0xpc3QuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IGFycmF5VXRpbGl0aWVzIH0gZnJvbSBcIm5lY2Vzc2FyeVwiO1xuXG5cbmltcG9ydCBSZXBsYWNlbWVudCBmcm9tIFwiLi4vcmVwbGFjZW1lbnRcIjtcbmltcG9ydCBDb250ZW50c0xpc3RNYXJrZG93bk5vZGUgZnJvbSBcIi4uL25vZGUvbWFya2Rvd24vY29udGVudHNMaXN0XCI7XG5cbmltcG9ydCB7IGhlYWRpbmdNYXJrZG93bk5vZGVzRnJvbU5vZGUgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3F1ZXJ5XCI7XG5cbmNvbnN0IHsgZmlsdGVyIH0gPSBhcnJheVV0aWxpdGllcztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29udGVudHNMaXN0UmVwbGFjZW1lbnQgZXh0ZW5kcyBSZXBsYWNlbWVudCB7XG4gIHJlcGxhY2VDb250ZW50c0RpcmVjdGl2ZU1hcmtkb3duTm9kZShjb250ZW50c0RpcmVjdGl2ZU1hcmtkb3duTm9kZSwgZGl2aXNpb25NYXJrZG93bk5vZGUsIGNvbnRleHQpIHtcbiAgICBjb25zdCByZXBsYWNlZE5vZGUgPSBjb250ZW50c0RpcmVjdGl2ZU1hcmtkb3duTm9kZSwgLy8vXG4gICAgICAgICAgcGFyZW50Tm9kZSA9IGRpdmlzaW9uTWFya2Rvd25Ob2RlOyAvLy9cblxuICAgIHN1cGVyLnJlcGxhY2UocmVwbGFjZWROb2RlLCBwYXJlbnROb2RlLCBjb250ZXh0KTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tTm9kZUFuZFRva2Vucyhub2RlLCB0b2tlbnMpIHsgcmV0dXJuIFJlcGxhY2VtZW50LmZyb21Ob2RlQW5kVG9rZW5zKENvbnRlbnRzTGlzdFJlcGxhY2VtZW50LCBub2RlLCB0b2tlbnMpOyB9XG5cbiAgc3RhdGljIGZyb21EaXZpc2lvbk1hcmtkb3duTm9kZXNBbmREaXZpc2lvbk1hcmtkb3duTm9kZShkaXZpc2lvbk1hcmtkb3duTm9kZXMsIGRpdmlzaW9uTWFya2Rvd25Ob2RlLCBjb250ZXh0KSB7XG4gICAgbGV0IGNvbnRlbnRzTGlzdFJlcGxhY2VtZW50ID0gbnVsbDtcblxuICAgIGNvbnN0IGhlYWRpbmdNYXJrZG93bk5vZGVzID0gaGVhZGluZ01hcmtkb3duTm9kZXNGcm9tRGl2aXNpb25NYXJrZG93bk5vZGVzQW5kRGl2aXNpb25NYXJrZG93bk5vZGUoZGl2aXNpb25NYXJrZG93bk5vZGVzLCBkaXZpc2lvbk1hcmtkb3duTm9kZSwgY29udGV4dCksXG4gICAgICAgICAgaGVhZGluZ01hcmtkb3duTm9kZXNMZW5ndGggPSBoZWFkaW5nTWFya2Rvd25Ob2Rlcy5sZW5ndGg7XG5cbiAgICBpZiAoaGVhZGluZ01hcmtkb3duTm9kZXNMZW5ndGggPiAwKSB7XG5cbiAgICAgIGRlYnVnZ2VyXG5cbiAgICAgIGNvbnN0IGNvbnRlbnRzTGlzdE1hcmtkb3duTm9kZSA9IEZvb3Rub3Rlc0xpc3RNYXJrZG93bk5vZGUuZnJvbU5vdGhpbmcoKSxcbiAgICAgICAgICAgIG5vZGUgPSBjb250ZW50c0xpc3RNYXJrZG93bk5vZGUsIC8vL1xuICAgICAgICAgICAgdG9rZW5zID0gW107XG5cbiAgICAgIGNvbnRlbnRzSXRlbVJlcGxhY2VtZW50cy5mb3JFYWNoKChjb250ZW50c0l0ZW1SZXBsYWNlbWVudCkgPT4ge1xuICAgICAgICBjb250ZW50c0l0ZW1SZXBsYWNlbWVudC5nZXRUb2tlbnModG9rZW5zKTtcblxuICAgICAgICBjb250ZW50c0l0ZW1SZXBsYWNlbWVudC5hcHBlbmRUb0Zvb3Rub3Rlc0xpc3RNYXJrZG93bk5vZGUoY29udGVudHNMaXN0TWFya2Rvd25Ob2RlLCBjb250ZXh0KTtcbiAgICAgIH0pO1xuXG4gICAgICBjb250ZW50c0xpc3RSZXBsYWNlbWVudCA9IENvbnRlbnRzTGlzdFJlcGxhY2VtZW50LmZyb21Ob2RlQW5kVG9rZW5zKG5vZGUsIHRva2Vucyk7XG4gICAgfVxuXG5cbiAgICByZXR1cm4gY29udGVudHNMaXN0UmVwbGFjZW1lbnQ7XG4gIH1cbn1cblxuZnVuY3Rpb24gaGVhZGluZ01hcmtkb3duTm9kZXNGcm9tRGl2aXNpb25NYXJrZG93bk5vZGVzQW5kRGl2aXNpb25NYXJrZG93bk5vZGUoZGl2aXNpb25NYXJrZG93bk5vZGVzLCBkaXZpc2lvbk1hcmtkb3duTm9kZSwgY29udGV4dCkge1xuICBjb25zdCBoZWFkaW5nTWFya2Rvd25Ob2RlcyA9IFtdLFxuICAgICAgICBpbmRleCA9IGRpdmlzaW9uTWFya2Rvd25Ob2Rlcy5pbmRleE9mKGRpdmlzaW9uTWFya2Rvd25Ob2RlKSxcbiAgICAgICAgc3RhcnQgPSBpbmRleCArIDE7XG5cbiAgZGl2aXNpb25NYXJrZG93bk5vZGVzID0gZGl2aXNpb25NYXJrZG93bk5vZGVzLnNsaWNlKHN0YXJ0KTsgLy8vXG5cbiAgZGl2aXNpb25NYXJrZG93bk5vZGVzLmZvckVhY2goKGRpdmlzaW9uTWFya2Rvd25Ob2RlKSA9PiB7XG4gICAgY29uc3Qgbm9kZSA9IGRpdmlzaW9uTWFya2Rvd25Ob2RlOyAgLy8vXG5cbiAgICBoZWFkaW5nTWFya2Rvd25Ob2Rlc0Zyb21Ob2RlKG5vZGUsIGhlYWRpbmdNYXJrZG93bk5vZGVzKTtcbiAgfSk7XG5cbiAgZmlsdGVyKGhlYWRpbmdNYXJrZG93bk5vZGVzLCAoaGVhZGluZ01hcmtkb3duTm9kZSkgPT4ge1xuICAgIGNvbnN0IHsgY29udGVudHNEZXB0aCB9ID0gY29udGV4dCxcbiAgICAgIGRlcHRoID0gaGVhZGluZ01hcmtkb3duTm9kZS5nZXREZXB0aCgpO1xuXG4gICAgaWYgKGRlcHRoIDw9IGNvbnRlbnRzRGVwdGgpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfSk7XG5cbiAgcmV0dXJuIGhlYWRpbmdNYXJrZG93bk5vZGVzO1xufSJdLCJuYW1lcyI6WyJDb250ZW50c0xpc3RSZXBsYWNlbWVudCIsImZpbHRlciIsImFycmF5VXRpbGl0aWVzIiwicmVwbGFjZUNvbnRlbnRzRGlyZWN0aXZlTWFya2Rvd25Ob2RlIiwiY29udGVudHNEaXJlY3RpdmVNYXJrZG93bk5vZGUiLCJkaXZpc2lvbk1hcmtkb3duTm9kZSIsImNvbnRleHQiLCJyZXBsYWNlZE5vZGUiLCJwYXJlbnROb2RlIiwicmVwbGFjZSIsImZyb21Ob2RlQW5kVG9rZW5zIiwibm9kZSIsInRva2VucyIsIlJlcGxhY2VtZW50IiwiZnJvbURpdmlzaW9uTWFya2Rvd25Ob2Rlc0FuZERpdmlzaW9uTWFya2Rvd25Ob2RlIiwiZGl2aXNpb25NYXJrZG93bk5vZGVzIiwiY29udGVudHNMaXN0UmVwbGFjZW1lbnQiLCJoZWFkaW5nTWFya2Rvd25Ob2RlcyIsImhlYWRpbmdNYXJrZG93bk5vZGVzRnJvbURpdmlzaW9uTWFya2Rvd25Ob2Rlc0FuZERpdmlzaW9uTWFya2Rvd25Ob2RlIiwiaGVhZGluZ01hcmtkb3duTm9kZXNMZW5ndGgiLCJsZW5ndGgiLCJjb250ZW50c0xpc3RNYXJrZG93bk5vZGUiLCJGb290bm90ZXNMaXN0TWFya2Rvd25Ob2RlIiwiZnJvbU5vdGhpbmciLCJjb250ZW50c0l0ZW1SZXBsYWNlbWVudHMiLCJmb3JFYWNoIiwiY29udGVudHNJdGVtUmVwbGFjZW1lbnQiLCJnZXRUb2tlbnMiLCJhcHBlbmRUb0Zvb3Rub3Rlc0xpc3RNYXJrZG93bk5vZGUiLCJpbmRleCIsImluZGV4T2YiLCJzdGFydCIsInNsaWNlIiwiaGVhZGluZ01hcmtkb3duTm9kZXNGcm9tTm9kZSIsImhlYWRpbmdNYXJrZG93bk5vZGUiLCJjb250ZW50c0RlcHRoIiwiZGVwdGgiLCJnZXREZXB0aCJdLCJyYW5nZU1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OyIsIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQVlxQkE7Ozt5QkFWVTtrRUFHUDttRUFDYTtxQkFFUTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRTdDLElBQU0sQUFBRUMsU0FBV0MseUJBQWMsQ0FBekJEO0FBRU8sSUFBQSxBQUFNRCx3Q0FBRCxBQUFMO2NBQU1BOytCQUFBQTthQUFBQTtnQ0FBQUE7OztrQkFBQUE7O1lBQ25CRyxLQUFBQTttQkFBQUEsU0FBQUEscUNBQXFDQyw2QkFBNkIsRUFBRUMsb0JBQW9CLEVBQUVDLE9BQU87Z0JBQy9GLElBQU1DLGVBQWVILCtCQUNmSSxhQUFhSCxzQkFBc0IsR0FBRztnQkFFNUMsdUJBTGlCTCxvQ0FLWFMsV0FBTixJQUFLLGFBQVNGLGNBQWNDLFlBQVlGO1lBQzFDOzs7O1lBRU9JLEtBQUFBO21CQUFQLFNBQU9BLGtCQUFrQkMsSUFBSSxFQUFFQyxNQUFNO2dCQUFJLE9BQU9DLG9CQUFXLENBQUNILGlCQUFpQixDQVIxRFYseUJBUW9GVyxNQUFNQztZQUFTOzs7WUFFL0dFLEtBQUFBO21CQUFQLFNBQU9BLGlEQUFpREMscUJBQXFCLEVBQUVWLG9CQUFvQixFQUFFQyxPQUFPO2dCQUMxRyxJQUFJVSwwQkFBMEI7Z0JBRTlCLElBQU1DLHVCQUF1QkMscUVBQXFFSCx1QkFBdUJWLHNCQUFzQkMsVUFDeklhLDZCQUE2QkYscUJBQXFCRyxNQUFNO2dCQUU5RCxJQUFJRCw2QkFBNkIsR0FBRztvQkFFbEMsUUFBUTtvQkFFUixJQUFNRSwyQkFBMkJDLDBCQUEwQkMsV0FBVyxJQUNoRVosT0FBT1UsMEJBQ1BULFNBQVMsRUFBRTtvQkFFakJZLHlCQUF5QkMsT0FBTyxDQUFDLFNBQUNDO3dCQUNoQ0Esd0JBQXdCQyxTQUFTLENBQUNmO3dCQUVsQ2Msd0JBQXdCRSxpQ0FBaUMsQ0FBQ1AsMEJBQTBCZjtvQkFDdEY7b0JBRUFVLDBCQUEwQmhCLEFBOUJYQSx3QkE4Qm1DVSxpQkFBaUIsQ0FBQ0MsTUFBTUM7Z0JBQzVFO2dCQUdBLE9BQU9JO1lBQ1Q7OztXQW5DbUJoQjtFQUFnQ2Esb0JBQVc7QUFzQ2hFLFNBQVNLLHFFQUFxRUgscUJBQXFCLEVBQUVWLG9CQUFvQixFQUFFQyxPQUFPO0lBQ2hJLElBQU1XLHVCQUF1QixFQUFFLEVBQ3pCWSxRQUFRZCxzQkFBc0JlLE9BQU8sQ0FBQ3pCLHVCQUN0QzBCLFFBQVFGLFFBQVE7SUFFdEJkLHdCQUF3QkEsc0JBQXNCaUIsS0FBSyxDQUFDRCxRQUFRLEdBQUc7SUFFL0RoQixzQkFBc0JVLE9BQU8sQ0FBQyxTQUFDcEI7UUFDN0IsSUFBTU0sT0FBT04sc0JBQXVCLEdBQUc7UUFFdkM0QixJQUFBQSxtQ0FBNEIsRUFBQ3RCLE1BQU1NO0lBQ3JDO0lBRUFoQixPQUFPZ0Isc0JBQXNCLFNBQUNpQjtRQUM1QixJQUFNLEFBQUVDLGdCQUFrQjdCLFFBQWxCNkIsZUFDTkMsUUFBUUYsb0JBQW9CRyxRQUFRO1FBRXRDLElBQUlELFNBQVNELGVBQWU7WUFDMUIsT0FBTztRQUNUO0lBQ0Y7SUFFQSxPQUFPbEI7QUFDVCJ9