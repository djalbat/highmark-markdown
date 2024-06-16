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
var _contentsItem = /*#__PURE__*/ _interop_require_default(require("./contentsItem"));
var _contentsList = /*#__PURE__*/ _interop_require_default(require("../node/markdown/contentsList"));
var _contents = require("../utilities/contents");
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
            key: "replaceContentsDirectiveSubdivisionReplacement",
            value: function replaceContentsDirectiveSubdivisionReplacement(contentsDirectiveSubDivisionReplacement, divisionMarkdownNode, context) {
                var contentsDirectiveSubDivisionReplacementRemovedNode = contentsDirectiveSubDivisionReplacement.getRemovedNode(), replacedNode = contentsDirectiveSubDivisionReplacementRemovedNode, parentNode = divisionMarkdownNode; ///
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
            key: "fromNestedHeadingMarkdownNodes",
            value: function fromNestedHeadingMarkdownNodes(nestedHeadingMarkdownNodes, context) {
                var contentsItemReplacements = contentsItemReplacementsFromNestedHeadingMarkdownNodes(nestedHeadingMarkdownNodes, context), contentsListMarkdownNode = _contentsList.default.fromContentsItemReplacements(contentsItemReplacements), node = contentsListMarkdownNode, tokens = [];
                contentsItemReplacements.forEach(function(contentsItemReplacement) {
                    contentsItemReplacement.getTokens(tokens);
                });
                var contentsListReplacement = ContentsListReplacement.fromNodeAndTokens(node, tokens);
                return contentsListReplacement;
            }
        },
        {
            key: "fromDivisionMarkdownNodesAndDivisionMarkdownNode",
            value: function fromDivisionMarkdownNodesAndDivisionMarkdownNode(divisionMarkdownNodes, divisionMarkdownNode, context) {
                var contentsListReplacement = null;
                var headingMarkdownNodes = headingMarkdownNodesFromDivisionMarkdownNodesAndDivisionMarkdownNode(divisionMarkdownNodes, divisionMarkdownNode, context), headingMarkdownNodesLength = headingMarkdownNodes.length;
                if (headingMarkdownNodesLength > 0) {
                    var nestedHeadingMarkdownNodes = nestedHeadingMarkdownNodesFromHeadingMarkdownNodes(headingMarkdownNodes), contentsItemReplacements = contentsItemReplacementsFromNestedHeadingMarkdownNodes(nestedHeadingMarkdownNodes, context), contentsListMarkdownNode = _contentsList.default.fromContentsItemReplacements(contentsItemReplacements), node = contentsListMarkdownNode, tokens = [];
                    contentsItemReplacements.forEach(function(contentsItemReplacement) {
                        contentsItemReplacement.getTokens(tokens);
                    });
                    contentsListReplacement = ContentsListReplacement.fromNodeAndTokens(node, tokens);
                }
                return contentsListReplacement;
            }
        }
    ]);
    return ContentsListReplacement;
}(_replacement.default);
Object.assign(_contentsItem.default, {
    ContentsListReplacement: ContentsListReplacement
});
function nestedHeadingMarkdownNodesFromHeadingMarkdownNodes(headingMarkdownNodes) {
    var nodes = headingMarkdownNodes, nestedNode = (0, _contents.nestNodes)(nodes), childNestedNodes = nestedNode.getChildNestedNodes(), nestedHeadingMarkdownNodes = childNestedNodes; ///
    return nestedHeadingMarkdownNodes;
}
function contentsItemReplacementsFromNestedHeadingMarkdownNodes(nestedHeadingMarkdownNodes, context) {
    var contentsItemReplacements = nestedHeadingMarkdownNodes.map(function(nestedHeadingMarkdownNode) {
        var contentsItemReplacement = _contentsItem.default.fromNestedHeadingMarkdownNode(nestedHeadingMarkdownNode, context);
        return contentsItemReplacement;
    });
    return contentsItemReplacements;
}
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9yZXBsYWNlbWVudC9jb250ZW50c0xpc3QuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IGFycmF5VXRpbGl0aWVzIH0gZnJvbSBcIm5lY2Vzc2FyeVwiO1xuXG5pbXBvcnQgUmVwbGFjZW1lbnQgZnJvbSBcIi4uL3JlcGxhY2VtZW50XCI7XG5pbXBvcnQgQ29udGVudHNJdGVtUmVwbGFjZW1lbnQgZnJvbSBcIi4vY29udGVudHNJdGVtXCI7XG5pbXBvcnQgQ29udGVudHNMaXN0TWFya2Rvd25Ob2RlIGZyb20gXCIuLi9ub2RlL21hcmtkb3duL2NvbnRlbnRzTGlzdFwiO1xuXG5pbXBvcnQgeyBuZXN0Tm9kZXMgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2NvbnRlbnRzXCI7XG5pbXBvcnQgeyBoZWFkaW5nTWFya2Rvd25Ob2Rlc0Zyb21Ob2RlIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9xdWVyeVwiO1xuXG5jb25zdCB7IGZpbHRlciB9ID0gYXJyYXlVdGlsaXRpZXM7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvbnRlbnRzTGlzdFJlcGxhY2VtZW50IGV4dGVuZHMgUmVwbGFjZW1lbnQge1xuICByZXBsYWNlQ29udGVudHNEaXJlY3RpdmVTdWJkaXZpc2lvblJlcGxhY2VtZW50KGNvbnRlbnRzRGlyZWN0aXZlU3ViRGl2aXNpb25SZXBsYWNlbWVudCwgZGl2aXNpb25NYXJrZG93bk5vZGUsIGNvbnRleHQpIHtcbiAgICBjb25zdCBjb250ZW50c0RpcmVjdGl2ZVN1YkRpdmlzaW9uUmVwbGFjZW1lbnRSZW1vdmVkTm9kZSA9IGNvbnRlbnRzRGlyZWN0aXZlU3ViRGl2aXNpb25SZXBsYWNlbWVudC5nZXRSZW1vdmVkTm9kZSgpLFxuICAgICAgICAgIHJlcGxhY2VkTm9kZSA9IGNvbnRlbnRzRGlyZWN0aXZlU3ViRGl2aXNpb25SZXBsYWNlbWVudFJlbW92ZWROb2RlLCAvLy9cbiAgICAgICAgICBwYXJlbnROb2RlID0gZGl2aXNpb25NYXJrZG93bk5vZGU7ICAvLy9cblxuICAgIHN1cGVyLnJlcGxhY2UocmVwbGFjZWROb2RlLCBwYXJlbnROb2RlLCBjb250ZXh0KVxuICB9XG5cbiAgc3RhdGljIGZyb21Ob2RlQW5kVG9rZW5zKG5vZGUsIHRva2VucykgeyByZXR1cm4gUmVwbGFjZW1lbnQuZnJvbU5vZGVBbmRUb2tlbnMoQ29udGVudHNMaXN0UmVwbGFjZW1lbnQsIG5vZGUsIHRva2Vucyk7IH1cblxuICBzdGF0aWMgZnJvbU5lc3RlZEhlYWRpbmdNYXJrZG93bk5vZGVzKG5lc3RlZEhlYWRpbmdNYXJrZG93bk5vZGVzLCBjb250ZXh0KSB7XG4gICAgY29uc3QgY29udGVudHNJdGVtUmVwbGFjZW1lbnRzID0gY29udGVudHNJdGVtUmVwbGFjZW1lbnRzRnJvbU5lc3RlZEhlYWRpbmdNYXJrZG93bk5vZGVzKG5lc3RlZEhlYWRpbmdNYXJrZG93bk5vZGVzLCBjb250ZXh0KSxcbiAgICAgICAgICBjb250ZW50c0xpc3RNYXJrZG93bk5vZGUgPSBDb250ZW50c0xpc3RNYXJrZG93bk5vZGUuZnJvbUNvbnRlbnRzSXRlbVJlcGxhY2VtZW50cyhjb250ZW50c0l0ZW1SZXBsYWNlbWVudHMpLFxuICAgICAgICAgIG5vZGUgPSBjb250ZW50c0xpc3RNYXJrZG93bk5vZGUsIC8vL1xuICAgICAgICAgIHRva2VucyA9IFtdO1xuXG4gICAgY29udGVudHNJdGVtUmVwbGFjZW1lbnRzLmZvckVhY2goKGNvbnRlbnRzSXRlbVJlcGxhY2VtZW50KSA9PiB7XG4gICAgICBjb250ZW50c0l0ZW1SZXBsYWNlbWVudC5nZXRUb2tlbnModG9rZW5zKTtcbiAgICB9KTtcblxuICAgIGNvbnN0IGNvbnRlbnRzTGlzdFJlcGxhY2VtZW50ID0gQ29udGVudHNMaXN0UmVwbGFjZW1lbnQuZnJvbU5vZGVBbmRUb2tlbnMobm9kZSwgdG9rZW5zKTtcblxuICAgIHJldHVybiBjb250ZW50c0xpc3RSZXBsYWNlbWVudDtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tRGl2aXNpb25NYXJrZG93bk5vZGVzQW5kRGl2aXNpb25NYXJrZG93bk5vZGUoZGl2aXNpb25NYXJrZG93bk5vZGVzLCBkaXZpc2lvbk1hcmtkb3duTm9kZSwgY29udGV4dCkge1xuICAgIGxldCBjb250ZW50c0xpc3RSZXBsYWNlbWVudCA9IG51bGw7XG5cbiAgICBjb25zdCBoZWFkaW5nTWFya2Rvd25Ob2RlcyA9IGhlYWRpbmdNYXJrZG93bk5vZGVzRnJvbURpdmlzaW9uTWFya2Rvd25Ob2Rlc0FuZERpdmlzaW9uTWFya2Rvd25Ob2RlKGRpdmlzaW9uTWFya2Rvd25Ob2RlcywgZGl2aXNpb25NYXJrZG93bk5vZGUsIGNvbnRleHQpLFxuICAgICAgICAgIGhlYWRpbmdNYXJrZG93bk5vZGVzTGVuZ3RoID0gaGVhZGluZ01hcmtkb3duTm9kZXMubGVuZ3RoO1xuXG4gICAgaWYgKGhlYWRpbmdNYXJrZG93bk5vZGVzTGVuZ3RoID4gMCkge1xuICAgICAgY29uc3QgbmVzdGVkSGVhZGluZ01hcmtkb3duTm9kZXMgPSBuZXN0ZWRIZWFkaW5nTWFya2Rvd25Ob2Rlc0Zyb21IZWFkaW5nTWFya2Rvd25Ob2RlcyhoZWFkaW5nTWFya2Rvd25Ob2RlcyksXG4gICAgICAgICAgICBjb250ZW50c0l0ZW1SZXBsYWNlbWVudHMgPSBjb250ZW50c0l0ZW1SZXBsYWNlbWVudHNGcm9tTmVzdGVkSGVhZGluZ01hcmtkb3duTm9kZXMobmVzdGVkSGVhZGluZ01hcmtkb3duTm9kZXMsIGNvbnRleHQpLFxuICAgICAgICAgICAgY29udGVudHNMaXN0TWFya2Rvd25Ob2RlID0gQ29udGVudHNMaXN0TWFya2Rvd25Ob2RlLmZyb21Db250ZW50c0l0ZW1SZXBsYWNlbWVudHMoY29udGVudHNJdGVtUmVwbGFjZW1lbnRzKSxcbiAgICAgICAgICAgIG5vZGUgPSBjb250ZW50c0xpc3RNYXJrZG93bk5vZGUsIC8vL1xuICAgICAgICAgICAgdG9rZW5zID0gW107XG5cbiAgICAgIGNvbnRlbnRzSXRlbVJlcGxhY2VtZW50cy5mb3JFYWNoKChjb250ZW50c0l0ZW1SZXBsYWNlbWVudCkgPT4ge1xuICAgICAgICBjb250ZW50c0l0ZW1SZXBsYWNlbWVudC5nZXRUb2tlbnModG9rZW5zKTtcbiAgICAgIH0pO1xuXG4gICAgICBjb250ZW50c0xpc3RSZXBsYWNlbWVudCA9IENvbnRlbnRzTGlzdFJlcGxhY2VtZW50LmZyb21Ob2RlQW5kVG9rZW5zKG5vZGUsIHRva2Vucyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGNvbnRlbnRzTGlzdFJlcGxhY2VtZW50O1xuICB9XG59XG5cbk9iamVjdC5hc3NpZ24oQ29udGVudHNJdGVtUmVwbGFjZW1lbnQsIHsgIC8vL1xuICBDb250ZW50c0xpc3RSZXBsYWNlbWVudFxufSk7XG5cbmZ1bmN0aW9uIG5lc3RlZEhlYWRpbmdNYXJrZG93bk5vZGVzRnJvbUhlYWRpbmdNYXJrZG93bk5vZGVzKGhlYWRpbmdNYXJrZG93bk5vZGVzKSB7XG4gIGNvbnN0IG5vZGVzID0gaGVhZGluZ01hcmtkb3duTm9kZXMsIC8vL1xuICAgICAgICBuZXN0ZWROb2RlID0gbmVzdE5vZGVzKG5vZGVzKSxcbiAgICAgICAgY2hpbGROZXN0ZWROb2RlcyA9IG5lc3RlZE5vZGUuZ2V0Q2hpbGROZXN0ZWROb2RlcygpLFxuICAgICAgICBuZXN0ZWRIZWFkaW5nTWFya2Rvd25Ob2RlcyA9IGNoaWxkTmVzdGVkTm9kZXM7ICAvLy9cblxuICByZXR1cm4gbmVzdGVkSGVhZGluZ01hcmtkb3duTm9kZXM7XG59XG5cbmZ1bmN0aW9uIGNvbnRlbnRzSXRlbVJlcGxhY2VtZW50c0Zyb21OZXN0ZWRIZWFkaW5nTWFya2Rvd25Ob2RlcyhuZXN0ZWRIZWFkaW5nTWFya2Rvd25Ob2RlcywgY29udGV4dCkge1xuICBjb25zdCBjb250ZW50c0l0ZW1SZXBsYWNlbWVudHMgPSBuZXN0ZWRIZWFkaW5nTWFya2Rvd25Ob2Rlcy5tYXAoKG5lc3RlZEhlYWRpbmdNYXJrZG93bk5vZGUpID0+IHtcbiAgICBjb25zdCBjb250ZW50c0l0ZW1SZXBsYWNlbWVudCA9IENvbnRlbnRzSXRlbVJlcGxhY2VtZW50LmZyb21OZXN0ZWRIZWFkaW5nTWFya2Rvd25Ob2RlKG5lc3RlZEhlYWRpbmdNYXJrZG93bk5vZGUsIGNvbnRleHQpO1xuXG4gICAgcmV0dXJuIGNvbnRlbnRzSXRlbVJlcGxhY2VtZW50O1xuICB9KTtcblxuICByZXR1cm4gY29udGVudHNJdGVtUmVwbGFjZW1lbnRzO1xufVxuXG5mdW5jdGlvbiBoZWFkaW5nTWFya2Rvd25Ob2Rlc0Zyb21EaXZpc2lvbk1hcmtkb3duTm9kZXNBbmREaXZpc2lvbk1hcmtkb3duTm9kZShkaXZpc2lvbk1hcmtkb3duTm9kZXMsIGRpdmlzaW9uTWFya2Rvd25Ob2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IGhlYWRpbmdNYXJrZG93bk5vZGVzID0gW10sXG4gICAgICAgIGluZGV4ID0gZGl2aXNpb25NYXJrZG93bk5vZGVzLmluZGV4T2YoZGl2aXNpb25NYXJrZG93bk5vZGUpLFxuICAgICAgICBzdGFydCA9IGluZGV4ICsgMTtcblxuICBkaXZpc2lvbk1hcmtkb3duTm9kZXMgPSBkaXZpc2lvbk1hcmtkb3duTm9kZXMuc2xpY2Uoc3RhcnQpOyAvLy9cblxuICBkaXZpc2lvbk1hcmtkb3duTm9kZXMuZm9yRWFjaCgoZGl2aXNpb25NYXJrZG93bk5vZGUpID0+IHtcbiAgICBjb25zdCBub2RlID0gZGl2aXNpb25NYXJrZG93bk5vZGU7ICAvLy9cblxuICAgIGhlYWRpbmdNYXJrZG93bk5vZGVzRnJvbU5vZGUobm9kZSwgaGVhZGluZ01hcmtkb3duTm9kZXMpO1xuICB9KTtcblxuICBmaWx0ZXIoaGVhZGluZ01hcmtkb3duTm9kZXMsIChoZWFkaW5nTWFya2Rvd25Ob2RlKSA9PiB7XG4gICAgY29uc3QgeyBjb250ZW50c0RlcHRoIH0gPSBjb250ZXh0LFxuICAgICAgZGVwdGggPSBoZWFkaW5nTWFya2Rvd25Ob2RlLmdldERlcHRoKCk7XG5cbiAgICBpZiAoZGVwdGggPD0gY29udGVudHNEZXB0aCkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9KTtcblxuICByZXR1cm4gaGVhZGluZ01hcmtkb3duTm9kZXM7XG59XG5cbiJdLCJuYW1lcyI6WyJDb250ZW50c0xpc3RSZXBsYWNlbWVudCIsImZpbHRlciIsImFycmF5VXRpbGl0aWVzIiwicmVwbGFjZUNvbnRlbnRzRGlyZWN0aXZlU3ViZGl2aXNpb25SZXBsYWNlbWVudCIsImNvbnRlbnRzRGlyZWN0aXZlU3ViRGl2aXNpb25SZXBsYWNlbWVudCIsImRpdmlzaW9uTWFya2Rvd25Ob2RlIiwiY29udGV4dCIsImNvbnRlbnRzRGlyZWN0aXZlU3ViRGl2aXNpb25SZXBsYWNlbWVudFJlbW92ZWROb2RlIiwiZ2V0UmVtb3ZlZE5vZGUiLCJyZXBsYWNlZE5vZGUiLCJwYXJlbnROb2RlIiwicmVwbGFjZSIsImZyb21Ob2RlQW5kVG9rZW5zIiwibm9kZSIsInRva2VucyIsIlJlcGxhY2VtZW50IiwiZnJvbU5lc3RlZEhlYWRpbmdNYXJrZG93bk5vZGVzIiwibmVzdGVkSGVhZGluZ01hcmtkb3duTm9kZXMiLCJjb250ZW50c0l0ZW1SZXBsYWNlbWVudHMiLCJjb250ZW50c0l0ZW1SZXBsYWNlbWVudHNGcm9tTmVzdGVkSGVhZGluZ01hcmtkb3duTm9kZXMiLCJjb250ZW50c0xpc3RNYXJrZG93bk5vZGUiLCJDb250ZW50c0xpc3RNYXJrZG93bk5vZGUiLCJmcm9tQ29udGVudHNJdGVtUmVwbGFjZW1lbnRzIiwiZm9yRWFjaCIsImNvbnRlbnRzSXRlbVJlcGxhY2VtZW50IiwiZ2V0VG9rZW5zIiwiY29udGVudHNMaXN0UmVwbGFjZW1lbnQiLCJmcm9tRGl2aXNpb25NYXJrZG93bk5vZGVzQW5kRGl2aXNpb25NYXJrZG93bk5vZGUiLCJkaXZpc2lvbk1hcmtkb3duTm9kZXMiLCJoZWFkaW5nTWFya2Rvd25Ob2RlcyIsImhlYWRpbmdNYXJrZG93bk5vZGVzRnJvbURpdmlzaW9uTWFya2Rvd25Ob2Rlc0FuZERpdmlzaW9uTWFya2Rvd25Ob2RlIiwiaGVhZGluZ01hcmtkb3duTm9kZXNMZW5ndGgiLCJsZW5ndGgiLCJuZXN0ZWRIZWFkaW5nTWFya2Rvd25Ob2Rlc0Zyb21IZWFkaW5nTWFya2Rvd25Ob2RlcyIsIk9iamVjdCIsImFzc2lnbiIsIkNvbnRlbnRzSXRlbVJlcGxhY2VtZW50Iiwibm9kZXMiLCJuZXN0ZWROb2RlIiwibmVzdE5vZGVzIiwiY2hpbGROZXN0ZWROb2RlcyIsImdldENoaWxkTmVzdGVkTm9kZXMiLCJtYXAiLCJuZXN0ZWRIZWFkaW5nTWFya2Rvd25Ob2RlIiwiZnJvbU5lc3RlZEhlYWRpbmdNYXJrZG93bk5vZGUiLCJpbmRleCIsImluZGV4T2YiLCJzdGFydCIsInNsaWNlIiwiaGVhZGluZ01hcmtkb3duTm9kZXNGcm9tTm9kZSIsImhlYWRpbmdNYXJrZG93bk5vZGUiLCJjb250ZW50c0RlcHRoIiwiZGVwdGgiLCJnZXREZXB0aCJdLCJyYW5nZU1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsiLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFhcUJBOzs7eUJBWFU7a0VBRVA7bUVBQ1k7bUVBQ0M7d0JBRVg7cUJBQ21COzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFN0MsSUFBTSxBQUFFQyxTQUFXQyx5QkFBYyxDQUF6QkQ7QUFFTyxJQUFBLEFBQU1ELHdDQUFELEFBQUw7Y0FBTUE7K0JBQUFBO2FBQUFBO2dDQUFBQTs7O2tCQUFB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