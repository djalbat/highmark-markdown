"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return _default;
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
    try {
        var result = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
    } catch (_) {}
    return (_is_native_reflect_construct = function() {
        return !!result;
    })();
}
var filter = _necessary.arrayUtilities.filter;
var ContentsListReplacement = /*#__PURE__*/ function(Replacement) {
    _inherits(ContentsListReplacement, Replacement);
    function ContentsListReplacement() {
        _class_call_check(this, ContentsListReplacement);
        return _call_super(this, ContentsListReplacement, arguments);
    }
    _create_class(ContentsListReplacement, [
        {
            key: "replaceContentsDirectiveSubdivisionReplacement",
            value: function replaceContentsDirectiveSubdivisionReplacement(contentsDirectiveSubDivisionReplacement, divisionMarkdownNode, context) {
                var subDivisionMarkdownNode = contentsDirectiveSubDivisionReplacement.getSubDivisionMarkdownNode(), replacedNode = subDivisionMarkdownNode, parentNode = divisionMarkdownNode; ///
                _get(_get_prototype_of(ContentsListReplacement.prototype), "replace", this).call(this, replacedNode, parentNode, context);
            }
        }
    ], [
        {
            key: "fromNestedHeadingMarkdownNodes",
            value: function fromNestedHeadingMarkdownNodes(nestedHeadingMarkdownNodes, context) {
                var contentsItemReplacements = contentsItemReplacementsFromNestedHeadingMarkdownNodes(nestedHeadingMarkdownNodes, context), contentsListMarkdownNode = _contentsList.default.fromContentsItemReplacements(contentsItemReplacements), node = contentsListMarkdownNode, tokens = [];
                contentsItemReplacements.forEach(function(contentsItemReplacement) {
                    contentsItemReplacement.getTokens(tokens);
                });
                var contentsListReplacement = _replacement.default.fromNodeAndTokens(ContentsListReplacement, node, tokens);
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
                    contentsListReplacement = _replacement.default.fromNodeAndTokens(ContentsListReplacement, node, tokens);
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
var _default = ContentsListReplacement;
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9yZXBsYWNlbWVudC9jb250ZW50c0xpc3QuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IGFycmF5VXRpbGl0aWVzIH0gZnJvbSBcIm5lY2Vzc2FyeVwiO1xuXG5pbXBvcnQgUmVwbGFjZW1lbnQgZnJvbSBcIi4uL3JlcGxhY2VtZW50XCI7XG5pbXBvcnQgQ29udGVudHNJdGVtUmVwbGFjZW1lbnQgZnJvbSBcIi4vY29udGVudHNJdGVtXCI7XG5pbXBvcnQgQ29udGVudHNMaXN0TWFya2Rvd25Ob2RlIGZyb20gXCIuLi9ub2RlL21hcmtkb3duL2NvbnRlbnRzTGlzdFwiO1xuXG5pbXBvcnQgeyBuZXN0Tm9kZXMgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2NvbnRlbnRzXCI7XG5pbXBvcnQgeyBoZWFkaW5nTWFya2Rvd25Ob2Rlc0Zyb21Ob2RlIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9xdWVyeVwiO1xuXG5jb25zdCB7IGZpbHRlciB9ID0gYXJyYXlVdGlsaXRpZXM7XG5cbmNsYXNzIENvbnRlbnRzTGlzdFJlcGxhY2VtZW50IGV4dGVuZHMgUmVwbGFjZW1lbnQge1xuICByZXBsYWNlQ29udGVudHNEaXJlY3RpdmVTdWJkaXZpc2lvblJlcGxhY2VtZW50KGNvbnRlbnRzRGlyZWN0aXZlU3ViRGl2aXNpb25SZXBsYWNlbWVudCwgZGl2aXNpb25NYXJrZG93bk5vZGUsIGNvbnRleHQpIHtcbiAgICBjb25zdCBzdWJEaXZpc2lvbk1hcmtkb3duTm9kZSA9IGNvbnRlbnRzRGlyZWN0aXZlU3ViRGl2aXNpb25SZXBsYWNlbWVudC5nZXRTdWJEaXZpc2lvbk1hcmtkb3duTm9kZSgpLFxuICAgICAgICAgIHJlcGxhY2VkTm9kZSA9IHN1YkRpdmlzaW9uTWFya2Rvd25Ob2RlLCAvLy9cbiAgICAgICAgICBwYXJlbnROb2RlID0gZGl2aXNpb25NYXJrZG93bk5vZGU7ICAvLy9cblxuICAgIHN1cGVyLnJlcGxhY2UocmVwbGFjZWROb2RlLCBwYXJlbnROb2RlLCBjb250ZXh0KVxuICB9XG5cbiAgc3RhdGljIGZyb21OZXN0ZWRIZWFkaW5nTWFya2Rvd25Ob2RlcyhuZXN0ZWRIZWFkaW5nTWFya2Rvd25Ob2RlcywgY29udGV4dCkge1xuICAgIGNvbnN0IGNvbnRlbnRzSXRlbVJlcGxhY2VtZW50cyA9IGNvbnRlbnRzSXRlbVJlcGxhY2VtZW50c0Zyb21OZXN0ZWRIZWFkaW5nTWFya2Rvd25Ob2RlcyhuZXN0ZWRIZWFkaW5nTWFya2Rvd25Ob2RlcywgY29udGV4dCksXG4gICAgICAgICAgY29udGVudHNMaXN0TWFya2Rvd25Ob2RlID0gQ29udGVudHNMaXN0TWFya2Rvd25Ob2RlLmZyb21Db250ZW50c0l0ZW1SZXBsYWNlbWVudHMoY29udGVudHNJdGVtUmVwbGFjZW1lbnRzKSxcbiAgICAgICAgICBub2RlID0gY29udGVudHNMaXN0TWFya2Rvd25Ob2RlLCAvLy9cbiAgICAgICAgICB0b2tlbnMgPSBbXTtcblxuICAgIGNvbnRlbnRzSXRlbVJlcGxhY2VtZW50cy5mb3JFYWNoKChjb250ZW50c0l0ZW1SZXBsYWNlbWVudCkgPT4ge1xuICAgICAgY29udGVudHNJdGVtUmVwbGFjZW1lbnQuZ2V0VG9rZW5zKHRva2Vucyk7XG4gICAgfSk7XG5cbiAgICBjb25zdCBjb250ZW50c0xpc3RSZXBsYWNlbWVudCA9IFJlcGxhY2VtZW50LmZyb21Ob2RlQW5kVG9rZW5zKENvbnRlbnRzTGlzdFJlcGxhY2VtZW50LCBub2RlLCB0b2tlbnMpO1xuXG4gICAgcmV0dXJuIGNvbnRlbnRzTGlzdFJlcGxhY2VtZW50O1xuICB9XG5cbiAgc3RhdGljIGZyb21EaXZpc2lvbk1hcmtkb3duTm9kZXNBbmREaXZpc2lvbk1hcmtkb3duTm9kZShkaXZpc2lvbk1hcmtkb3duTm9kZXMsIGRpdmlzaW9uTWFya2Rvd25Ob2RlLCBjb250ZXh0KSB7XG4gICAgbGV0IGNvbnRlbnRzTGlzdFJlcGxhY2VtZW50ID0gbnVsbDtcblxuICAgIGNvbnN0IGhlYWRpbmdNYXJrZG93bk5vZGVzID0gaGVhZGluZ01hcmtkb3duTm9kZXNGcm9tRGl2aXNpb25NYXJrZG93bk5vZGVzQW5kRGl2aXNpb25NYXJrZG93bk5vZGUoZGl2aXNpb25NYXJrZG93bk5vZGVzLCBkaXZpc2lvbk1hcmtkb3duTm9kZSwgY29udGV4dCksXG4gICAgICAgICAgaGVhZGluZ01hcmtkb3duTm9kZXNMZW5ndGggPSBoZWFkaW5nTWFya2Rvd25Ob2Rlcy5sZW5ndGg7XG5cbiAgICBpZiAoaGVhZGluZ01hcmtkb3duTm9kZXNMZW5ndGggPiAwKSB7XG4gICAgICBjb25zdCBuZXN0ZWRIZWFkaW5nTWFya2Rvd25Ob2RlcyA9IG5lc3RlZEhlYWRpbmdNYXJrZG93bk5vZGVzRnJvbUhlYWRpbmdNYXJrZG93bk5vZGVzKGhlYWRpbmdNYXJrZG93bk5vZGVzKSxcbiAgICAgICAgICAgIGNvbnRlbnRzSXRlbVJlcGxhY2VtZW50cyA9IGNvbnRlbnRzSXRlbVJlcGxhY2VtZW50c0Zyb21OZXN0ZWRIZWFkaW5nTWFya2Rvd25Ob2RlcyhuZXN0ZWRIZWFkaW5nTWFya2Rvd25Ob2RlcywgY29udGV4dCksXG4gICAgICAgICAgICBjb250ZW50c0xpc3RNYXJrZG93bk5vZGUgPSBDb250ZW50c0xpc3RNYXJrZG93bk5vZGUuZnJvbUNvbnRlbnRzSXRlbVJlcGxhY2VtZW50cyhjb250ZW50c0l0ZW1SZXBsYWNlbWVudHMpLFxuICAgICAgICAgICAgbm9kZSA9IGNvbnRlbnRzTGlzdE1hcmtkb3duTm9kZSwgLy8vXG4gICAgICAgICAgICB0b2tlbnMgPSBbXTtcblxuICAgICAgY29udGVudHNJdGVtUmVwbGFjZW1lbnRzLmZvckVhY2goKGNvbnRlbnRzSXRlbVJlcGxhY2VtZW50KSA9PiB7XG4gICAgICAgIGNvbnRlbnRzSXRlbVJlcGxhY2VtZW50LmdldFRva2Vucyh0b2tlbnMpO1xuICAgICAgfSk7XG5cbiAgICAgIGNvbnRlbnRzTGlzdFJlcGxhY2VtZW50ID0gUmVwbGFjZW1lbnQuZnJvbU5vZGVBbmRUb2tlbnMoQ29udGVudHNMaXN0UmVwbGFjZW1lbnQsIG5vZGUsIHRva2Vucyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGNvbnRlbnRzTGlzdFJlcGxhY2VtZW50O1xuICB9XG59XG5cbk9iamVjdC5hc3NpZ24oQ29udGVudHNJdGVtUmVwbGFjZW1lbnQsIHsgIC8vL1xuICBDb250ZW50c0xpc3RSZXBsYWNlbWVudFxufSk7XG5cbmV4cG9ydCBkZWZhdWx0IENvbnRlbnRzTGlzdFJlcGxhY2VtZW50O1xuXG5mdW5jdGlvbiBuZXN0ZWRIZWFkaW5nTWFya2Rvd25Ob2Rlc0Zyb21IZWFkaW5nTWFya2Rvd25Ob2RlcyhoZWFkaW5nTWFya2Rvd25Ob2Rlcykge1xuICBjb25zdCBub2RlcyA9IGhlYWRpbmdNYXJrZG93bk5vZGVzLCAvLy9cbiAgICAgICAgbmVzdGVkTm9kZSA9IG5lc3ROb2Rlcyhub2RlcyksXG4gICAgICAgIGNoaWxkTmVzdGVkTm9kZXMgPSBuZXN0ZWROb2RlLmdldENoaWxkTmVzdGVkTm9kZXMoKSxcbiAgICAgICAgbmVzdGVkSGVhZGluZ01hcmtkb3duTm9kZXMgPSBjaGlsZE5lc3RlZE5vZGVzOyAgLy8vXG5cbiAgcmV0dXJuIG5lc3RlZEhlYWRpbmdNYXJrZG93bk5vZGVzO1xufVxuXG5mdW5jdGlvbiBjb250ZW50c0l0ZW1SZXBsYWNlbWVudHNGcm9tTmVzdGVkSGVhZGluZ01hcmtkb3duTm9kZXMobmVzdGVkSGVhZGluZ01hcmtkb3duTm9kZXMsIGNvbnRleHQpIHtcbiAgY29uc3QgY29udGVudHNJdGVtUmVwbGFjZW1lbnRzID0gbmVzdGVkSGVhZGluZ01hcmtkb3duTm9kZXMubWFwKChuZXN0ZWRIZWFkaW5nTWFya2Rvd25Ob2RlKSA9PiB7XG4gICAgY29uc3QgY29udGVudHNJdGVtUmVwbGFjZW1lbnQgPSBDb250ZW50c0l0ZW1SZXBsYWNlbWVudC5mcm9tTmVzdGVkSGVhZGluZ01hcmtkb3duTm9kZShuZXN0ZWRIZWFkaW5nTWFya2Rvd25Ob2RlLCBjb250ZXh0KTtcblxuICAgIHJldHVybiBjb250ZW50c0l0ZW1SZXBsYWNlbWVudDtcbiAgfSk7XG5cbiAgcmV0dXJuIGNvbnRlbnRzSXRlbVJlcGxhY2VtZW50cztcbn1cblxuZnVuY3Rpb24gaGVhZGluZ01hcmtkb3duTm9kZXNGcm9tRGl2aXNpb25NYXJrZG93bk5vZGVzQW5kRGl2aXNpb25NYXJrZG93bk5vZGUoZGl2aXNpb25NYXJrZG93bk5vZGVzLCBkaXZpc2lvbk1hcmtkb3duTm9kZSwgY29udGV4dCkge1xuICBjb25zdCBoZWFkaW5nTWFya2Rvd25Ob2RlcyA9IFtdLFxuICAgICAgICBpbmRleCA9IGRpdmlzaW9uTWFya2Rvd25Ob2Rlcy5pbmRleE9mKGRpdmlzaW9uTWFya2Rvd25Ob2RlKSxcbiAgICAgICAgc3RhcnQgPSBpbmRleCArIDE7XG5cbiAgZGl2aXNpb25NYXJrZG93bk5vZGVzID0gZGl2aXNpb25NYXJrZG93bk5vZGVzLnNsaWNlKHN0YXJ0KTsgLy8vXG5cbiAgZGl2aXNpb25NYXJrZG93bk5vZGVzLmZvckVhY2goKGRpdmlzaW9uTWFya2Rvd25Ob2RlKSA9PiB7XG4gICAgY29uc3Qgbm9kZSA9IGRpdmlzaW9uTWFya2Rvd25Ob2RlOyAgLy8vXG5cbiAgICBoZWFkaW5nTWFya2Rvd25Ob2Rlc0Zyb21Ob2RlKG5vZGUsIGhlYWRpbmdNYXJrZG93bk5vZGVzKTtcbiAgfSk7XG5cbiAgZmlsdGVyKGhlYWRpbmdNYXJrZG93bk5vZGVzLCAoaGVhZGluZ01hcmtkb3duTm9kZSkgPT4ge1xuICAgIGNvbnN0IHsgY29udGVudHNEZXB0aCB9ID0gY29udGV4dCxcbiAgICAgIGRlcHRoID0gaGVhZGluZ01hcmtkb3duTm9kZS5nZXREZXB0aCgpO1xuXG4gICAgaWYgKGRlcHRoIDw9IGNvbnRlbnRzRGVwdGgpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfSk7XG5cbiAgcmV0dXJuIGhlYWRpbmdNYXJrZG93bk5vZGVzO1xufVxuXG4iXSwibmFtZXMiOlsiZmlsdGVyIiwiYXJyYXlVdGlsaXRpZXMiLCJDb250ZW50c0xpc3RSZXBsYWNlbWVudCIsInJlcGxhY2VDb250ZW50c0RpcmVjdGl2ZVN1YmRpdmlzaW9uUmVwbGFjZW1lbnQiLCJjb250ZW50c0RpcmVjdGl2ZVN1YkRpdmlzaW9uUmVwbGFjZW1lbnQiLCJkaXZpc2lvbk1hcmtkb3duTm9kZSIsImNvbnRleHQiLCJzdWJEaXZpc2lvbk1hcmtkb3duTm9kZSIsImdldFN1YkRpdmlzaW9uTWFya2Rvd25Ob2RlIiwicmVwbGFjZWROb2RlIiwicGFyZW50Tm9kZSIsInJlcGxhY2UiLCJmcm9tTmVzdGVkSGVhZGluZ01hcmtkb3duTm9kZXMiLCJuZXN0ZWRIZWFkaW5nTWFya2Rvd25Ob2RlcyIsImNvbnRlbnRzSXRlbVJlcGxhY2VtZW50cyIsImNvbnRlbnRzSXRlbVJlcGxhY2VtZW50c0Zyb21OZXN0ZWRIZWFkaW5nTWFya2Rvd25Ob2RlcyIsImNvbnRlbnRzTGlzdE1hcmtkb3duTm9kZSIsIkNvbnRlbnRzTGlzdE1hcmtkb3duTm9kZSIsImZyb21Db250ZW50c0l0ZW1SZXBsYWNlbWVudHMiLCJub2RlIiwidG9rZW5zIiwiZm9yRWFjaCIsImNvbnRlbnRzSXRlbVJlcGxhY2VtZW50IiwiZ2V0VG9rZW5zIiwiY29udGVudHNMaXN0UmVwbGFjZW1lbnQiLCJSZXBsYWNlbWVudCIsImZyb21Ob2RlQW5kVG9rZW5zIiwiZnJvbURpdmlzaW9uTWFya2Rvd25Ob2Rlc0FuZERpdmlzaW9uTWFya2Rvd25Ob2RlIiwiZGl2aXNpb25NYXJrZG93bk5vZGVzIiwiaGVhZGluZ01hcmtkb3duTm9kZXMiLCJoZWFkaW5nTWFya2Rvd25Ob2Rlc0Zyb21EaXZpc2lvbk1hcmtkb3duTm9kZXNBbmREaXZpc2lvbk1hcmtkb3duTm9kZSIsImhlYWRpbmdNYXJrZG93bk5vZGVzTGVuZ3RoIiwibGVuZ3RoIiwibmVzdGVkSGVhZGluZ01hcmtkb3duTm9kZXNGcm9tSGVhZGluZ01hcmtkb3duTm9kZXMiLCJPYmplY3QiLCJhc3NpZ24iLCJDb250ZW50c0l0ZW1SZXBsYWNlbWVudCIsIm5vZGVzIiwibmVzdGVkTm9kZSIsIm5lc3ROb2RlcyIsImNoaWxkTmVzdGVkTm9kZXMiLCJnZXRDaGlsZE5lc3RlZE5vZGVzIiwibWFwIiwibmVzdGVkSGVhZGluZ01hcmtkb3duTm9kZSIsImZyb21OZXN0ZWRIZWFkaW5nTWFya2Rvd25Ob2RlIiwiaW5kZXgiLCJpbmRleE9mIiwic3RhcnQiLCJzbGljZSIsImhlYWRpbmdNYXJrZG93bk5vZGVzRnJvbU5vZGUiLCJoZWFkaW5nTWFya2Rvd25Ob2RlIiwiY29udGVudHNEZXB0aCIsImRlcHRoIiwiZ2V0RGVwdGgiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQWlFQTs7O2VBQUE7Ozt5QkEvRCtCO2tFQUVQO21FQUNZO21FQUNDO3dCQUVYO3FCQUNtQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRTdDLElBQU0sQUFBRUEsU0FBV0MseUJBQWMsQ0FBekJEO0FBRVIsSUFBQSxBQUFNRSx3Q0FBTjtjQUFNQTthQUFBQTtnQ0FBQUE7ZUFBTixrQkFBTUE7O2tCQUFBQTs7WUFDSkMsS0FBQUE7bUJBQUFBLFNBQUFBLCtDQUErQ0MsdUNBQXVDLEVBQUVDLG9CQUFvQixFQUFFQyxPQUFPO2dCQUNuSCxJQUFNQywwQkFBMEJILHdDQUF3Q0ksMEJBQTBCLElBQzVGQyxlQUFlRix5QkFDZkcsYUFBYUwsc0JBQXVCLEdBQUc7Z0JBRTdDLHVCQU5FSCxvQ0FNSVMsV0FBTixJQUFLLGFBQVNGLGNBQWNDLFlBQVlKO1lBQzFDOzs7O1lBRU9NLEtBQUFBO21CQUFQLFNBQU9BLCtCQUErQkMsMEJBQTBCLEVBQUVQLE9BQU87Z0JBQ3ZFLElBQU1RLDJCQUEyQkMsdURBQXVERiw0QkFBNEJQLFVBQzlHVSwyQkFBMkJDLHFCQUF3QixDQUFDQyw0QkFBNEIsQ0FBQ0osMkJBQ2pGSyxPQUFPSCwwQkFDUEksU0FBUyxFQUFFO2dCQUVqQk4seUJBQXlCTyxPQUFPLENBQUMsU0FBQ0M7b0JBQ2hDQSx3QkFBd0JDLFNBQVMsQ0FBQ0g7Z0JBQ3BDO2dCQUVBLElBQU1JLDBCQUEwQkMsb0JBQVcsQ0FBQ0MsaUJBQWlCLENBbkIzRHhCLHlCQW1CcUZpQixNQUFNQztnQkFFN0YsT0FBT0k7WUFDVDs7O1lBRU9HLEtBQUFBO21CQUFQLFNBQU9BLGlEQUFpREMscUJBQXFCLEVBQUV2QixvQkFBb0IsRUFBRUMsT0FBTztnQkFDMUcsSUFBSWtCLDBCQUEwQjtnQkFFOUIsSUFBTUssdUJBQXVCQyxxRUFBcUVGLHVCQUF1QnZCLHNCQUFzQkMsVUFDekl5Qiw2QkFBNkJGLHFCQUFxQkcsTUFBTTtnQkFFOUQsSUFBSUQsNkJBQTZCLEdBQUc7b0JBQ2xDLElBQU1sQiw2QkFBNkJvQixtREFBbURKLHVCQUNoRmYsMkJBQTJCQyx1REFBdURGLDRCQUE0QlAsVUFDOUdVLDJCQUEyQkMscUJBQXdCLENBQUNDLDRCQUE0QixDQUFDSiwyQkFDakZLLE9BQU9ILDBCQUNQSSxTQUFTLEVBQUU7b0JBRWpCTix5QkFBeUJPLE9BQU8sQ0FBQyxTQUFDQzt3QkFDaENBLHdCQUF3QkMsU0FBUyxDQUFDSDtvQkFDcEM7b0JBRUFJLDBCQUEwQkMsb0JBQVcsQ0FBQ0MsaUJBQWlCLENBekN2RHhCLHlCQXlDaUZpQixNQUFNQztnQkFDekY7Z0JBRUEsT0FBT0k7WUFDVDs7O1dBN0NJdEI7RUFBZ0N1QixvQkFBVztBQWdEakRTLE9BQU9DLE1BQU0sQ0FBQ0MscUJBQXVCLEVBQUU7SUFDckNsQyx5QkFBQUE7QUFDRjtJQUVBLFdBQWVBO0FBRWYsU0FBUytCLG1EQUFtREosb0JBQW9CO0lBQzlFLElBQU1RLFFBQVFSLHNCQUNSUyxhQUFhQyxJQUFBQSxtQkFBUyxFQUFDRixRQUN2QkcsbUJBQW1CRixXQUFXRyxtQkFBbUIsSUFDakQ1Qiw2QkFBNkIyQixrQkFBbUIsR0FBRztJQUV6RCxPQUFPM0I7QUFDVDtBQUVBLFNBQVNFLHVEQUF1REYsMEJBQTBCLEVBQUVQLE9BQU87SUFDakcsSUFBTVEsMkJBQTJCRCwyQkFBMkI2QixHQUFHLENBQUMsU0FBQ0M7UUFDL0QsSUFBTXJCLDBCQUEwQmMscUJBQXVCLENBQUNRLDZCQUE2QixDQUFDRCwyQkFBMkJyQztRQUVqSCxPQUFPZ0I7SUFDVDtJQUVBLE9BQU9SO0FBQ1Q7QUFFQSxTQUFTZ0IscUVBQXFFRixxQkFBcUIsRUFBRXZCLG9CQUFvQixFQUFFQyxPQUFPO0lBQ2hJLElBQU11Qix1QkFBdUIsRUFBRSxFQUN6QmdCLFFBQVFqQixzQkFBc0JrQixPQUFPLENBQUN6Qyx1QkFDdEMwQyxRQUFRRixRQUFRO0lBRXRCakIsd0JBQXdCQSxzQkFBc0JvQixLQUFLLENBQUNELFFBQVEsR0FBRztJQUUvRG5CLHNCQUFzQlAsT0FBTyxDQUFDLFNBQUNoQjtRQUM3QixJQUFNYyxPQUFPZCxzQkFBdUIsR0FBRztRQUV2QzRDLElBQUFBLG1DQUE0QixFQUFDOUIsTUFBTVU7SUFDckM7SUFFQTdCLE9BQU82QixzQkFBc0IsU0FBQ3FCO1FBQzVCLElBQU0sQUFBRUMsZ0JBQWtCN0MsUUFBbEI2QyxlQUNOQyxRQUFRRixvQkFBb0JHLFFBQVE7UUFFdEMsSUFBSUQsU0FBU0QsZUFBZTtZQUMxQixPQUFPO1FBQ1Q7SUFDRjtJQUVBLE9BQU90QjtBQUNUIn0=