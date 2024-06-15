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
var _node = require("../utilities/node");
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
            key: "fromDivisionMarkdownNode",
            value: function fromDivisionMarkdownNode(divisionMarkdownNode, context) {
                var contentsListReplacement = null;
                // const headingMarkdownNodes = headingMarkdownNodesFromDivisionMarkdownNodesAndDivisionMarkdownNode(divisionMarkdownNodes, divisionMarkdownNode, context),
                //   headingMarkdownNodesLength = headingMarkdownNodes.length;
                //
                // if (headingMarkdownNodesLength > 0) {
                //   const { tokens } = context,
                //         contentsListMarkdownNode = ContentsListMarkdownNode.fromHeadingMarkdownNodes(headingMarkdownNodes, context);
                //
                // }
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9yZXBsYWNlbWVudC9jb250ZW50c0xpc3QuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IGFycmF5VXRpbGl0aWVzIH0gZnJvbSBcIm5lY2Vzc2FyeVwiO1xuXG5cbmltcG9ydCBSZXBsYWNlbWVudCBmcm9tIFwiLi4vcmVwbGFjZW1lbnRcIjtcbmltcG9ydCBDb250ZW50c0xpc3RNYXJrZG93bk5vZGUgZnJvbSBcIi4uL25vZGUvbWFya2Rvd24vY29udGVudHNMaXN0XCI7XG5pbXBvcnQge3JlcGxhY2VOb2RlLCByZXBsYWNlVG9rZW5zfSBmcm9tIFwiLi4vdXRpbGl0aWVzL25vZGVcIjtcbmltcG9ydCB7aGVhZGluZ01hcmtkb3duTm9kZXNGcm9tTm9kZX0gZnJvbSBcIi4uL3V0aWxpdGllcy9xdWVyeVwiO1xuXG5jb25zdCB7IGZpbHRlciB9ID0gYXJyYXlVdGlsaXRpZXM7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvbnRlbnRzTGlzdFJlcGxhY2VtZW50IGV4dGVuZHMgUmVwbGFjZW1lbnQge1xuICByZXBsYWNlQ29udGVudHNEaXJlY3RpdmVNYXJrZG93bk5vZGUoY29udGVudHNEaXJlY3RpdmVNYXJrZG93bk5vZGUsIGRpdmlzaW9uTWFya2Rvd25Ob2RlLCBjb250ZXh0KSB7XG4gICAgY29uc3QgcmVwbGFjZWROb2RlID0gY29udGVudHNEaXJlY3RpdmVNYXJrZG93bk5vZGUsIC8vL1xuICAgICAgICAgIHBhcmVudE5vZGUgPSBkaXZpc2lvbk1hcmtkb3duTm9kZTsgLy8vXG5cbiAgICBzdXBlci5yZXBsYWNlKHJlcGxhY2VkTm9kZSwgcGFyZW50Tm9kZSwgY29udGV4dCk7XG4gIH1cblxuICBzdGF0aWMgZnJvbU5vZGVBbmRUb2tlbnMobm9kZSwgdG9rZW5zKSB7IHJldHVybiBSZXBsYWNlbWVudC5mcm9tTm9kZUFuZFRva2VucyhDb250ZW50c0xpc3RSZXBsYWNlbWVudCwgbm9kZSwgdG9rZW5zKTsgfVxuXG4gIHN0YXRpYyBmcm9tRGl2aXNpb25NYXJrZG93bk5vZGUoZGl2aXNpb25NYXJrZG93bk5vZGUsIGNvbnRleHQpIHtcbiAgICBsZXQgY29udGVudHNMaXN0UmVwbGFjZW1lbnQgPSBudWxsO1xuXG4gICAgLy8gY29uc3QgaGVhZGluZ01hcmtkb3duTm9kZXMgPSBoZWFkaW5nTWFya2Rvd25Ob2Rlc0Zyb21EaXZpc2lvbk1hcmtkb3duTm9kZXNBbmREaXZpc2lvbk1hcmtkb3duTm9kZShkaXZpc2lvbk1hcmtkb3duTm9kZXMsIGRpdmlzaW9uTWFya2Rvd25Ob2RlLCBjb250ZXh0KSxcbiAgICAvLyAgIGhlYWRpbmdNYXJrZG93bk5vZGVzTGVuZ3RoID0gaGVhZGluZ01hcmtkb3duTm9kZXMubGVuZ3RoO1xuICAgIC8vXG4gICAgLy8gaWYgKGhlYWRpbmdNYXJrZG93bk5vZGVzTGVuZ3RoID4gMCkge1xuICAgIC8vICAgY29uc3QgeyB0b2tlbnMgfSA9IGNvbnRleHQsXG4gICAgLy8gICAgICAgICBjb250ZW50c0xpc3RNYXJrZG93bk5vZGUgPSBDb250ZW50c0xpc3RNYXJrZG93bk5vZGUuZnJvbUhlYWRpbmdNYXJrZG93bk5vZGVzKGhlYWRpbmdNYXJrZG93bk5vZGVzLCBjb250ZXh0KTtcbiAgICAvL1xuICAgIC8vIH1cblxuXG4gICAgcmV0dXJuIGNvbnRlbnRzTGlzdFJlcGxhY2VtZW50O1xuICB9XG59XG5cbmZ1bmN0aW9uIGhlYWRpbmdNYXJrZG93bk5vZGVzRnJvbURpdmlzaW9uTWFya2Rvd25Ob2Rlc0FuZERpdmlzaW9uTWFya2Rvd25Ob2RlKGRpdmlzaW9uTWFya2Rvd25Ob2RlcywgZGl2aXNpb25NYXJrZG93bk5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgaGVhZGluZ01hcmtkb3duTm9kZXMgPSBbXSxcbiAgICBpbmRleCA9IGRpdmlzaW9uTWFya2Rvd25Ob2Rlcy5pbmRleE9mKGRpdmlzaW9uTWFya2Rvd25Ob2RlKSxcbiAgICBzdGFydCA9IGluZGV4ICsgMTtcblxuICBkaXZpc2lvbk1hcmtkb3duTm9kZXMgPSBkaXZpc2lvbk1hcmtkb3duTm9kZXMuc2xpY2Uoc3RhcnQpOyAvLy9cblxuICBkaXZpc2lvbk1hcmtkb3duTm9kZXMuZm9yRWFjaCgoZGl2aXNpb25NYXJrZG93bk5vZGUpID0+IHtcbiAgICBjb25zdCBub2RlID0gZGl2aXNpb25NYXJrZG93bk5vZGU7ICAvLy9cblxuICAgIGhlYWRpbmdNYXJrZG93bk5vZGVzRnJvbU5vZGUobm9kZSwgaGVhZGluZ01hcmtkb3duTm9kZXMpO1xuICB9KTtcblxuICBmaWx0ZXIoaGVhZGluZ01hcmtkb3duTm9kZXMsIChoZWFkaW5nTWFya2Rvd25Ob2RlKSA9PiB7XG4gICAgY29uc3QgeyBjb250ZW50c0RlcHRoIH0gPSBjb250ZXh0LFxuICAgICAgZGVwdGggPSBoZWFkaW5nTWFya2Rvd25Ob2RlLmdldERlcHRoKCk7XG5cbiAgICBpZiAoZGVwdGggPD0gY29udGVudHNEZXB0aCkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9KTtcblxuICByZXR1cm4gaGVhZGluZ01hcmtkb3duTm9kZXM7XG59Il0sIm5hbWVzIjpbIkNvbnRlbnRzTGlzdFJlcGxhY2VtZW50IiwiZmlsdGVyIiwiYXJyYXlVdGlsaXRpZXMiLCJyZXBsYWNlQ29udGVudHNEaXJlY3RpdmVNYXJrZG93bk5vZGUiLCJjb250ZW50c0RpcmVjdGl2ZU1hcmtkb3duTm9kZSIsImRpdmlzaW9uTWFya2Rvd25Ob2RlIiwiY29udGV4dCIsInJlcGxhY2VkTm9kZSIsInBhcmVudE5vZGUiLCJyZXBsYWNlIiwiZnJvbU5vZGVBbmRUb2tlbnMiLCJub2RlIiwidG9rZW5zIiwiUmVwbGFjZW1lbnQiLCJmcm9tRGl2aXNpb25NYXJrZG93bk5vZGUiLCJjb250ZW50c0xpc3RSZXBsYWNlbWVudCIsImhlYWRpbmdNYXJrZG93bk5vZGVzRnJvbURpdmlzaW9uTWFya2Rvd25Ob2Rlc0FuZERpdmlzaW9uTWFya2Rvd25Ob2RlIiwiZGl2aXNpb25NYXJrZG93bk5vZGVzIiwiaGVhZGluZ01hcmtkb3duTm9kZXMiLCJpbmRleCIsImluZGV4T2YiLCJzdGFydCIsInNsaWNlIiwiZm9yRWFjaCIsImhlYWRpbmdNYXJrZG93bk5vZGVzRnJvbU5vZGUiLCJoZWFkaW5nTWFya2Rvd25Ob2RlIiwiY29udGVudHNEZXB0aCIsImRlcHRoIiwiZ2V0RGVwdGgiXSwicmFuZ2VNYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OyIsIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQVlxQkE7Ozt5QkFWVTtrRUFHUDttRUFDYTtvQkFDSTtxQkFDRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRTNDLElBQU0sQUFBRUMsU0FBV0MseUJBQWMsQ0FBekJEO0FBRU8sSUFBQSxBQUFNRCx3Q0FBRCxBQUFMO2NBQU1BOytCQUFBQTthQUFBQTtnQ0FBQUE7OztrQkFBQUE7O1lBQ25CRyxLQUFBQTttQkFBQUEsU0FBQUEscUNBQXFDQyw2QkFBNkIsRUFBRUMsb0JBQW9CLEVBQUVDLE9BQU87Z0JBQy9GLElBQU1DLGVBQWVILCtCQUNmSSxhQUFhSCxzQkFBc0IsR0FBRztnQkFFNUMsdUJBTGlCTCxvQ0FLWFMsV0FBTixJQUFLLGFBQVNGLGNBQWNDLFlBQVlGO1lBQzFDOzs7O1lBRU9JLEtBQUFBO21CQUFQLFNBQU9BLGtCQUFrQkMsSUFBSSxFQUFFQyxNQUFNO2dCQUFJLE9BQU9DLG9CQUFXLENBQUNILGlCQUFpQixDQVIxRFYseUJBUW9GVyxNQUFNQztZQUFTOzs7WUFFL0dFLEtBQUFBO21CQUFQLFNBQU9BLHlCQUF5QlQsb0JBQW9CLEVBQUVDLE9BQU87Z0JBQzNELElBQUlTLDBCQUEwQjtnQkFFOUIsMkpBQTJKO2dCQUMzSiw4REFBOEQ7Z0JBQzlELEVBQUU7Z0JBQ0Ysd0NBQXdDO2dCQUN4QyxnQ0FBZ0M7Z0JBQ2hDLHVIQUF1SDtnQkFDdkgsRUFBRTtnQkFDRixJQUFJO2dCQUdKLE9BQU9BO1lBQ1Q7OztXQXhCbUJmO0VBQWdDYSxvQkFBVztBQTJCaEUsU0FBU0cscUVBQXFFQyxxQkFBcUIsRUFBRVosb0JBQW9CLEVBQUVDLE9BQU87SUFDaEksSUFBTVksdUJBQXVCLEVBQUUsRUFDN0JDLFFBQVFGLHNCQUFzQkcsT0FBTyxDQUFDZix1QkFDdENnQixRQUFRRixRQUFRO0lBRWxCRix3QkFBd0JBLHNCQUFzQkssS0FBSyxDQUFDRCxRQUFRLEdBQUc7SUFFL0RKLHNCQUFzQk0sT0FBTyxDQUFDLFNBQUNsQjtRQUM3QixJQUFNTSxPQUFPTixzQkFBdUIsR0FBRztRQUV2Q21CLElBQUFBLG1DQUE0QixFQUFDYixNQUFNTztJQUNyQztJQUVBakIsT0FBT2lCLHNCQUFzQixTQUFDTztRQUM1QixJQUFNLEFBQUVDLGdCQUFrQnBCLFFBQWxCb0IsZUFDTkMsUUFBUUYsb0JBQW9CRyxRQUFRO1FBRXRDLElBQUlELFNBQVNELGVBQWU7WUFDMUIsT0FBTztRQUNUO0lBQ0Y7SUFFQSxPQUFPUjtBQUNUIn0=