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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9yZXBsYWNlbWVudC9jb250ZW50c0xpc3QuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IGFycmF5VXRpbGl0aWVzIH0gZnJvbSBcIm5lY2Vzc2FyeVwiO1xuXG5pbXBvcnQgUmVwbGFjZW1lbnQgZnJvbSBcIi4uL3JlcGxhY2VtZW50XCI7XG5pbXBvcnQgQ29udGVudHNJdGVtUmVwbGFjZW1lbnQgZnJvbSBcIi4vY29udGVudHNJdGVtXCI7XG5pbXBvcnQgQ29udGVudHNMaXN0TWFya2Rvd25Ob2RlIGZyb20gXCIuLi9ub2RlL21hcmtkb3duL2NvbnRlbnRzTGlzdFwiO1xuXG5pbXBvcnQgeyBuZXN0Tm9kZXMgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2NvbnRlbnRzXCI7XG5pbXBvcnQgeyBoZWFkaW5nTWFya2Rvd25Ob2Rlc0Zyb21Ob2RlIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9xdWVyeVwiO1xuXG5jb25zdCB7IGZpbHRlciB9ID0gYXJyYXlVdGlsaXRpZXM7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvbnRlbnRzTGlzdFJlcGxhY2VtZW50IGV4dGVuZHMgUmVwbGFjZW1lbnQge1xuICByZXBsYWNlQ29udGVudHNEaXJlY3RpdmVNYXJrZG93bk5vZGUoY29udGVudHNEaXJlY3RpdmVNYXJrZG93bk5vZGUsIGRpdmlzaW9uTWFya2Rvd25Ob2RlLCBjb250ZXh0KSB7XG4gICAgY29uc3QgcmVwbGFjZWROb2RlID0gY29udGVudHNEaXJlY3RpdmVNYXJrZG93bk5vZGUsIC8vL1xuICAgICAgICAgIHBhcmVudE5vZGUgPSBkaXZpc2lvbk1hcmtkb3duTm9kZTsgLy8vXG5cbiAgICBzdXBlci5yZXBsYWNlKHJlcGxhY2VkTm9kZSwgcGFyZW50Tm9kZSwgY29udGV4dCk7XG4gIH1cblxuICBzdGF0aWMgZnJvbU5vZGVBbmRUb2tlbnMobm9kZSwgdG9rZW5zKSB7IHJldHVybiBSZXBsYWNlbWVudC5mcm9tTm9kZUFuZFRva2VucyhDb250ZW50c0xpc3RSZXBsYWNlbWVudCwgbm9kZSwgdG9rZW5zKTsgfVxuXG4gIHN0YXRpYyBmcm9tTmVzdGVkSGVhZGluZ01hcmtkb3duTm9kZXMobmVzdGVkSGVhZGluZ01hcmtkb3duTm9kZXMsIGNvbnRleHQpIHtcbiAgICBjb25zdCBjb250ZW50c0l0ZW1SZXBsYWNlbWVudHMgPSBjb250ZW50c0l0ZW1SZXBsYWNlbWVudHNGcm9tTmVzdGVkSGVhZGluZ01hcmtkb3duTm9kZXMobmVzdGVkSGVhZGluZ01hcmtkb3duTm9kZXMsIGNvbnRleHQpLFxuICAgICAgICAgIGNvbnRlbnRzTGlzdE1hcmtkb3duTm9kZSA9IENvbnRlbnRzTGlzdE1hcmtkb3duTm9kZS5mcm9tQ29udGVudHNJdGVtUmVwbGFjZW1lbnRzKGNvbnRlbnRzSXRlbVJlcGxhY2VtZW50cyksXG4gICAgICAgICAgbm9kZSA9IGNvbnRlbnRzTGlzdE1hcmtkb3duTm9kZSwgLy8vXG4gICAgICAgICAgdG9rZW5zID0gW107XG5cbiAgICBjb250ZW50c0l0ZW1SZXBsYWNlbWVudHMuZm9yRWFjaCgoY29udGVudHNJdGVtUmVwbGFjZW1lbnQpID0+IHtcbiAgICAgIGNvbnRlbnRzSXRlbVJlcGxhY2VtZW50LmdldFRva2Vucyh0b2tlbnMpO1xuICAgIH0pO1xuXG4gICAgY29uc3QgY29udGVudHNMaXN0UmVwbGFjZW1lbnQgPSBDb250ZW50c0xpc3RSZXBsYWNlbWVudC5mcm9tTm9kZUFuZFRva2Vucyhub2RlLCB0b2tlbnMpO1xuXG4gICAgcmV0dXJuIGNvbnRlbnRzTGlzdFJlcGxhY2VtZW50O1xuICB9XG5cbiAgc3RhdGljIGZyb21EaXZpc2lvbk1hcmtkb3duTm9kZXNBbmREaXZpc2lvbk1hcmtkb3duTm9kZShkaXZpc2lvbk1hcmtkb3duTm9kZXMsIGRpdmlzaW9uTWFya2Rvd25Ob2RlLCBjb250ZXh0KSB7XG4gICAgbGV0IGNvbnRlbnRzTGlzdFJlcGxhY2VtZW50ID0gbnVsbDtcblxuICAgIGNvbnN0IGhlYWRpbmdNYXJrZG93bk5vZGVzID0gaGVhZGluZ01hcmtkb3duTm9kZXNGcm9tRGl2aXNpb25NYXJrZG93bk5vZGVzQW5kRGl2aXNpb25NYXJrZG93bk5vZGUoZGl2aXNpb25NYXJrZG93bk5vZGVzLCBkaXZpc2lvbk1hcmtkb3duTm9kZSwgY29udGV4dCksXG4gICAgICAgICAgaGVhZGluZ01hcmtkb3duTm9kZXNMZW5ndGggPSBoZWFkaW5nTWFya2Rvd25Ob2Rlcy5sZW5ndGg7XG5cbiAgICBpZiAoaGVhZGluZ01hcmtkb3duTm9kZXNMZW5ndGggPiAwKSB7XG4gICAgICBjb25zdCBuZXN0ZWRIZWFkaW5nTWFya2Rvd25Ob2RlcyA9IG5lc3RlZEhlYWRpbmdNYXJrZG93bk5vZGVzRnJvbUhlYWRpbmdNYXJrZG93bk5vZGVzKGhlYWRpbmdNYXJrZG93bk5vZGVzKSxcbiAgICAgICAgICAgIGNvbnRlbnRzSXRlbVJlcGxhY2VtZW50cyA9IGNvbnRlbnRzSXRlbVJlcGxhY2VtZW50c0Zyb21OZXN0ZWRIZWFkaW5nTWFya2Rvd25Ob2RlcyhuZXN0ZWRIZWFkaW5nTWFya2Rvd25Ob2RlcywgY29udGV4dCksXG4gICAgICAgICAgICBjb250ZW50c0xpc3RNYXJrZG93bk5vZGUgPSBDb250ZW50c0xpc3RNYXJrZG93bk5vZGUuZnJvbUNvbnRlbnRzSXRlbVJlcGxhY2VtZW50cyhjb250ZW50c0l0ZW1SZXBsYWNlbWVudHMpLFxuICAgICAgICAgICAgbm9kZSA9IGNvbnRlbnRzTGlzdE1hcmtkb3duTm9kZSwgLy8vXG4gICAgICAgICAgICB0b2tlbnMgPSBbXTtcblxuICAgICAgY29udGVudHNJdGVtUmVwbGFjZW1lbnRzLmZvckVhY2goKGNvbnRlbnRzSXRlbVJlcGxhY2VtZW50KSA9PiB7XG4gICAgICAgIGNvbnRlbnRzSXRlbVJlcGxhY2VtZW50LmdldFRva2Vucyh0b2tlbnMpO1xuICAgICAgfSk7XG5cbiAgICAgIGNvbnRlbnRzTGlzdFJlcGxhY2VtZW50ID0gQ29udGVudHNMaXN0UmVwbGFjZW1lbnQuZnJvbU5vZGVBbmRUb2tlbnMobm9kZSwgdG9rZW5zKTtcbiAgICB9XG5cbiAgICByZXR1cm4gY29udGVudHNMaXN0UmVwbGFjZW1lbnQ7XG4gIH1cbn1cblxuT2JqZWN0LmFzc2lnbihDb250ZW50c0l0ZW1SZXBsYWNlbWVudCwgeyAgLy8vXG4gIENvbnRlbnRzTGlzdFJlcGxhY2VtZW50XG59KTtcblxuZnVuY3Rpb24gbmVzdGVkSGVhZGluZ01hcmtkb3duTm9kZXNGcm9tSGVhZGluZ01hcmtkb3duTm9kZXMoaGVhZGluZ01hcmtkb3duTm9kZXMpIHtcbiAgY29uc3Qgbm9kZXMgPSBoZWFkaW5nTWFya2Rvd25Ob2RlcywgLy8vXG4gICAgICAgIG5lc3RlZE5vZGUgPSBuZXN0Tm9kZXMobm9kZXMpLFxuICAgICAgICBjaGlsZE5lc3RlZE5vZGVzID0gbmVzdGVkTm9kZS5nZXRDaGlsZE5lc3RlZE5vZGVzKCksXG4gICAgICAgIG5lc3RlZEhlYWRpbmdNYXJrZG93bk5vZGVzID0gY2hpbGROZXN0ZWROb2RlczsgIC8vL1xuXG4gIHJldHVybiBuZXN0ZWRIZWFkaW5nTWFya2Rvd25Ob2Rlcztcbn1cblxuZnVuY3Rpb24gY29udGVudHNJdGVtUmVwbGFjZW1lbnRzRnJvbU5lc3RlZEhlYWRpbmdNYXJrZG93bk5vZGVzKG5lc3RlZEhlYWRpbmdNYXJrZG93bk5vZGVzLCBjb250ZXh0KSB7XG4gIGNvbnN0IGNvbnRlbnRzSXRlbVJlcGxhY2VtZW50cyA9IG5lc3RlZEhlYWRpbmdNYXJrZG93bk5vZGVzLm1hcCgobmVzdGVkSGVhZGluZ01hcmtkb3duTm9kZSkgPT4ge1xuICAgIGNvbnN0IGNvbnRlbnRzSXRlbVJlcGxhY2VtZW50ID0gQ29udGVudHNJdGVtUmVwbGFjZW1lbnQuZnJvbU5lc3RlZEhlYWRpbmdNYXJrZG93bk5vZGUobmVzdGVkSGVhZGluZ01hcmtkb3duTm9kZSwgY29udGV4dCk7XG5cbiAgICByZXR1cm4gY29udGVudHNJdGVtUmVwbGFjZW1lbnQ7XG4gIH0pO1xuXG4gIHJldHVybiBjb250ZW50c0l0ZW1SZXBsYWNlbWVudHM7XG59XG5cbmZ1bmN0aW9uIGhlYWRpbmdNYXJrZG93bk5vZGVzRnJvbURpdmlzaW9uTWFya2Rvd25Ob2Rlc0FuZERpdmlzaW9uTWFya2Rvd25Ob2RlKGRpdmlzaW9uTWFya2Rvd25Ob2RlcywgZGl2aXNpb25NYXJrZG93bk5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgaGVhZGluZ01hcmtkb3duTm9kZXMgPSBbXSxcbiAgICAgICAgaW5kZXggPSBkaXZpc2lvbk1hcmtkb3duTm9kZXMuaW5kZXhPZihkaXZpc2lvbk1hcmtkb3duTm9kZSksXG4gICAgICAgIHN0YXJ0ID0gaW5kZXggKyAxO1xuXG4gIGRpdmlzaW9uTWFya2Rvd25Ob2RlcyA9IGRpdmlzaW9uTWFya2Rvd25Ob2Rlcy5zbGljZShzdGFydCk7IC8vL1xuXG4gIGRpdmlzaW9uTWFya2Rvd25Ob2Rlcy5mb3JFYWNoKChkaXZpc2lvbk1hcmtkb3duTm9kZSkgPT4ge1xuICAgIGNvbnN0IG5vZGUgPSBkaXZpc2lvbk1hcmtkb3duTm9kZTsgIC8vL1xuXG4gICAgaGVhZGluZ01hcmtkb3duTm9kZXNGcm9tTm9kZShub2RlLCBoZWFkaW5nTWFya2Rvd25Ob2Rlcyk7XG4gIH0pO1xuXG4gIGZpbHRlcihoZWFkaW5nTWFya2Rvd25Ob2RlcywgKGhlYWRpbmdNYXJrZG93bk5vZGUpID0+IHtcbiAgICBjb25zdCB7IGNvbnRlbnRzRGVwdGggfSA9IGNvbnRleHQsXG4gICAgICBkZXB0aCA9IGhlYWRpbmdNYXJrZG93bk5vZGUuZ2V0RGVwdGgoKTtcblxuICAgIGlmIChkZXB0aCA8PSBjb250ZW50c0RlcHRoKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH0pO1xuXG4gIHJldHVybiBoZWFkaW5nTWFya2Rvd25Ob2Rlcztcbn1cblxuIl0sIm5hbWVzIjpbIkNvbnRlbnRzTGlzdFJlcGxhY2VtZW50IiwiZmlsdGVyIiwiYXJyYXlVdGlsaXRpZXMiLCJyZXBsYWNlQ29udGVudHNEaXJlY3RpdmVNYXJrZG93bk5vZGUiLCJjb250ZW50c0RpcmVjdGl2ZU1hcmtkb3duTm9kZSIsImRpdmlzaW9uTWFya2Rvd25Ob2RlIiwiY29udGV4dCIsInJlcGxhY2VkTm9kZSIsInBhcmVudE5vZGUiLCJyZXBsYWNlIiwiZnJvbU5vZGVBbmRUb2tlbnMiLCJub2RlIiwidG9rZW5zIiwiUmVwbGFjZW1lbnQiLCJmcm9tTmVzdGVkSGVhZGluZ01hcmtkb3duTm9kZXMiLCJuZXN0ZWRIZWFkaW5nTWFya2Rvd25Ob2RlcyIsImNvbnRlbnRzSXRlbVJlcGxhY2VtZW50cyIsImNvbnRlbnRzSXRlbVJlcGxhY2VtZW50c0Zyb21OZXN0ZWRIZWFkaW5nTWFya2Rvd25Ob2RlcyIsImNvbnRlbnRzTGlzdE1hcmtkb3duTm9kZSIsIkNvbnRlbnRzTGlzdE1hcmtkb3duTm9kZSIsImZyb21Db250ZW50c0l0ZW1SZXBsYWNlbWVudHMiLCJmb3JFYWNoIiwiY29udGVudHNJdGVtUmVwbGFjZW1lbnQiLCJnZXRUb2tlbnMiLCJjb250ZW50c0xpc3RSZXBsYWNlbWVudCIsImZyb21EaXZpc2lvbk1hcmtkb3duTm9kZXNBbmREaXZpc2lvbk1hcmtkb3duTm9kZSIsImRpdmlzaW9uTWFya2Rvd25Ob2RlcyIsImhlYWRpbmdNYXJrZG93bk5vZGVzIiwiaGVhZGluZ01hcmtkb3duTm9kZXNGcm9tRGl2aXNpb25NYXJrZG93bk5vZGVzQW5kRGl2aXNpb25NYXJrZG93bk5vZGUiLCJoZWFkaW5nTWFya2Rvd25Ob2Rlc0xlbmd0aCIsImxlbmd0aCIsIm5lc3RlZEhlYWRpbmdNYXJrZG93bk5vZGVzRnJvbUhlYWRpbmdNYXJrZG93bk5vZGVzIiwiT2JqZWN0IiwiYXNzaWduIiwiQ29udGVudHNJdGVtUmVwbGFjZW1lbnQiLCJub2RlcyIsIm5lc3RlZE5vZGUiLCJuZXN0Tm9kZXMiLCJjaGlsZE5lc3RlZE5vZGVzIiwiZ2V0Q2hpbGROZXN0ZWROb2RlcyIsIm1hcCIsIm5lc3RlZEhlYWRpbmdNYXJrZG93bk5vZGUiLCJmcm9tTmVzdGVkSGVhZGluZ01hcmtkb3duTm9kZSIsImluZGV4IiwiaW5kZXhPZiIsInN0YXJ0Iiwic2xpY2UiLCJoZWFkaW5nTWFya2Rvd25Ob2Rlc0Zyb21Ob2RlIiwiaGVhZGluZ01hcmtkb3duTm9kZSIsImNvbnRlbnRzRGVwdGgiLCJkZXB0aCIsImdldERlcHRoIl0sInJhbmdlTWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OyIsIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQWFxQkE7Ozt5QkFYVTtrRUFFUDttRUFDWTttRUFDQzt3QkFFWDtxQkFDbUI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUU3QyxJQUFNLEFBQUVDLFNBQVdDLHlCQUFjLENBQXpCRDtBQUVPLElBQUEsQUFBTUQsd0NBQUQsQUFBTDtjQUFNQTsrQkFBQUE7YUFBQUE7Z0NBQUFBOzs7a0JBQUFBOztZQUNuQkcsS0FBQUE7bUJBQUFBLFNBQUFBLHFDQUFxQ0MsNkJBQTZCLEVBQUVDLG9CQUFvQixFQUFFQyxPQUFPO2dCQUMvRixJQUFNQyxlQUFlSCwrQkFDZkksYUFBYUgsc0JBQXNCLEdBQUc7Z0JBRTVDLHVCQUxpQkwsb0NBS1hTLFdBQU4sSUFBSyxhQUFTRixjQUFjQyxZQUFZRjtZQUMxQzs7OztZQUVPSSxLQUFBQTttQkFBUCxTQUFPQSxrQkFBa0JDLElBQUksRUFBRUMsTUFBTTtnQkFBSSxPQUFPQyxvQkFBVyxDQUFDSCxpQkFBaUIsQ0FS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