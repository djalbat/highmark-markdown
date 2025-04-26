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
var _occamdom = require("occam-dom");
var _necessary = require("necessary");
var _contentsItem = /*#__PURE__*/ _interop_require_default(require("../transform/contentsItem"));
var _contents = /*#__PURE__*/ _interop_require_default(require("../node/markdown/list/contents"));
var _contents1 = require("../utilities/contents");
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
var ContentsListTransform = /*#__PURE__*/ function(Transform) {
    _inherits(ContentsListTransform, Transform);
    function ContentsListTransform() {
        _class_call_check(this, ContentsListTransform);
        return _call_super(this, ContentsListTransform, arguments);
    }
    _create_class(ContentsListTransform, [
        {
            key: "replaceContentsDirectiveSubdivisionTransform",
            value: function replaceContentsDirectiveSubdivisionTransform(contentsDirectiveSubDivisionTransform, divisionMarkdownNode, context) {
                var subDivisionMarkdownNode = contentsDirectiveSubDivisionTransform.getSubDivisionMarkdownNode(), replacedNode = subDivisionMarkdownNode, parentNode = divisionMarkdownNode; ///
                _get(_get_prototype_of(ContentsListTransform.prototype), "replace", this).call(this, replacedNode, parentNode, context);
            }
        }
    ], [
        {
            key: "fromNestedHeadingMarkdownNodes",
            value: function fromNestedHeadingMarkdownNodes(nestedHeadingMarkdownNodes, context) {
                var contentsItemTransforms = contentsItemTransformsFromNestedHeadingMarkdownNodes(nestedHeadingMarkdownNodes, context), contentsListMarkdownNode = _contents.default.fromContentsItemTransforms(contentsItemTransforms), node = contentsListMarkdownNode, tokens = [];
                contentsItemTransforms.forEach(function(contentsItemTransform) {
                    contentsItemTransform.getTokens(tokens);
                });
                var contentsListTransform = _occamdom.Transform.fromNodeAndTokens(ContentsListTransform, node, tokens);
                return contentsListTransform;
            }
        },
        {
            key: "fromDivisionMarkdownNodesAndDivisionMarkdownNode",
            value: function fromDivisionMarkdownNodesAndDivisionMarkdownNode(divisionMarkdownNodes, divisionMarkdownNode, context) {
                var contentsListTransform = null;
                var headingMarkdownNodes = headingMarkdownNodesFromDivisionMarkdownNodesAndDivisionMarkdownNode(divisionMarkdownNodes, divisionMarkdownNode, context), headingMarkdownNodesLength = headingMarkdownNodes.length;
                if (headingMarkdownNodesLength > 0) {
                    var nestedHeadingMarkdownNodes = nestedHeadingMarkdownNodesFromHeadingMarkdownNodes(headingMarkdownNodes), contentsItemTransforms = contentsItemTransformsFromNestedHeadingMarkdownNodes(nestedHeadingMarkdownNodes, context), contentsListMarkdownNode = _contents.default.fromContentsItemTransforms(contentsItemTransforms), node = contentsListMarkdownNode, tokens = [];
                    contentsItemTransforms.forEach(function(contentsItemTransform) {
                        contentsItemTransform.getTokens(tokens);
                    });
                    contentsListTransform = _occamdom.Transform.fromNodeAndTokens(ContentsListTransform, node, tokens);
                }
                return contentsListTransform;
            }
        }
    ]);
    return ContentsListTransform;
}(_occamdom.Transform);
Object.assign(_contentsItem.default, {
    ContentsListTransform: ContentsListTransform
});
var _default = ContentsListTransform;
function nestedHeadingMarkdownNodesFromHeadingMarkdownNodes(headingMarkdownNodes) {
    var nodes = headingMarkdownNodes, nestedNode = (0, _contents1.nestNodes)(nodes), childNestedNodes = nestedNode.getChildNestedNodes(), nestedHeadingMarkdownNodes = childNestedNodes; ///
    return nestedHeadingMarkdownNodes;
}
function contentsItemTransformsFromNestedHeadingMarkdownNodes(nestedHeadingMarkdownNodes, context) {
    var contentsItemTransforms = nestedHeadingMarkdownNodes.map(function(nestedHeadingMarkdownNode) {
        var contentsItemTransform = _contentsItem.default.fromNestedHeadingMarkdownNode(nestedHeadingMarkdownNode, context);
        return contentsItemTransform;
    });
    return contentsItemTransforms;
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy90cmFuc2Zvcm0vY29udGVudHNMaXN0LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBUcmFuc2Zvcm0gfSBmcm9tIFwib2NjYW0tZG9tXCI7XG5pbXBvcnQgeyBhcnJheVV0aWxpdGllcyB9IGZyb20gXCJuZWNlc3NhcnlcIjtcblxuaW1wb3J0IENvbnRlbnRzSXRlbVRyYW5zZm9ybSBmcm9tIFwiLi4vdHJhbnNmb3JtL2NvbnRlbnRzSXRlbVwiO1xuaW1wb3J0IENvbnRlbnRzTGlzdE1hcmtkb3duTm9kZSBmcm9tIFwiLi4vbm9kZS9tYXJrZG93bi9saXN0L2NvbnRlbnRzXCI7XG5cbmltcG9ydCB7IG5lc3ROb2RlcyB9IGZyb20gXCIuLi91dGlsaXRpZXMvY29udGVudHNcIjtcbmltcG9ydCB7IGhlYWRpbmdNYXJrZG93bk5vZGVzRnJvbU5vZGUgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3F1ZXJ5XCI7XG5cbmNvbnN0IHsgZmlsdGVyIH0gPSBhcnJheVV0aWxpdGllcztcblxuY2xhc3MgQ29udGVudHNMaXN0VHJhbnNmb3JtIGV4dGVuZHMgVHJhbnNmb3JtIHtcbiAgcmVwbGFjZUNvbnRlbnRzRGlyZWN0aXZlU3ViZGl2aXNpb25UcmFuc2Zvcm0oY29udGVudHNEaXJlY3RpdmVTdWJEaXZpc2lvblRyYW5zZm9ybSwgZGl2aXNpb25NYXJrZG93bk5vZGUsIGNvbnRleHQpIHtcbiAgICBjb25zdCBzdWJEaXZpc2lvbk1hcmtkb3duTm9kZSA9IGNvbnRlbnRzRGlyZWN0aXZlU3ViRGl2aXNpb25UcmFuc2Zvcm0uZ2V0U3ViRGl2aXNpb25NYXJrZG93bk5vZGUoKSxcbiAgICAgICAgICByZXBsYWNlZE5vZGUgPSBzdWJEaXZpc2lvbk1hcmtkb3duTm9kZSwgLy8vXG4gICAgICAgICAgcGFyZW50Tm9kZSA9IGRpdmlzaW9uTWFya2Rvd25Ob2RlOyAgLy8vXG5cbiAgICBzdXBlci5yZXBsYWNlKHJlcGxhY2VkTm9kZSwgcGFyZW50Tm9kZSwgY29udGV4dClcbiAgfVxuXG4gIHN0YXRpYyBmcm9tTmVzdGVkSGVhZGluZ01hcmtkb3duTm9kZXMobmVzdGVkSGVhZGluZ01hcmtkb3duTm9kZXMsIGNvbnRleHQpIHtcbiAgICBjb25zdCBjb250ZW50c0l0ZW1UcmFuc2Zvcm1zID0gY29udGVudHNJdGVtVHJhbnNmb3Jtc0Zyb21OZXN0ZWRIZWFkaW5nTWFya2Rvd25Ob2RlcyhuZXN0ZWRIZWFkaW5nTWFya2Rvd25Ob2RlcywgY29udGV4dCksXG4gICAgICAgICAgY29udGVudHNMaXN0TWFya2Rvd25Ob2RlID0gQ29udGVudHNMaXN0TWFya2Rvd25Ob2RlLmZyb21Db250ZW50c0l0ZW1UcmFuc2Zvcm1zKGNvbnRlbnRzSXRlbVRyYW5zZm9ybXMpLFxuICAgICAgICAgIG5vZGUgPSBjb250ZW50c0xpc3RNYXJrZG93bk5vZGUsIC8vL1xuICAgICAgICAgIHRva2VucyA9IFtdO1xuXG4gICAgY29udGVudHNJdGVtVHJhbnNmb3Jtcy5mb3JFYWNoKChjb250ZW50c0l0ZW1UcmFuc2Zvcm0pID0+IHtcbiAgICAgIGNvbnRlbnRzSXRlbVRyYW5zZm9ybS5nZXRUb2tlbnModG9rZW5zKTtcbiAgICB9KTtcblxuICAgIGNvbnN0IGNvbnRlbnRzTGlzdFRyYW5zZm9ybSA9IFRyYW5zZm9ybS5mcm9tTm9kZUFuZFRva2VucyhDb250ZW50c0xpc3RUcmFuc2Zvcm0sIG5vZGUsIHRva2Vucyk7XG5cbiAgICByZXR1cm4gY29udGVudHNMaXN0VHJhbnNmb3JtO1xuICB9XG5cbiAgc3RhdGljIGZyb21EaXZpc2lvbk1hcmtkb3duTm9kZXNBbmREaXZpc2lvbk1hcmtkb3duTm9kZShkaXZpc2lvbk1hcmtkb3duTm9kZXMsIGRpdmlzaW9uTWFya2Rvd25Ob2RlLCBjb250ZXh0KSB7XG4gICAgbGV0IGNvbnRlbnRzTGlzdFRyYW5zZm9ybSA9IG51bGw7XG5cbiAgICBjb25zdCBoZWFkaW5nTWFya2Rvd25Ob2RlcyA9IGhlYWRpbmdNYXJrZG93bk5vZGVzRnJvbURpdmlzaW9uTWFya2Rvd25Ob2Rlc0FuZERpdmlzaW9uTWFya2Rvd25Ob2RlKGRpdmlzaW9uTWFya2Rvd25Ob2RlcywgZGl2aXNpb25NYXJrZG93bk5vZGUsIGNvbnRleHQpLFxuICAgICAgICAgIGhlYWRpbmdNYXJrZG93bk5vZGVzTGVuZ3RoID0gaGVhZGluZ01hcmtkb3duTm9kZXMubGVuZ3RoO1xuXG4gICAgaWYgKGhlYWRpbmdNYXJrZG93bk5vZGVzTGVuZ3RoID4gMCkge1xuICAgICAgY29uc3QgbmVzdGVkSGVhZGluZ01hcmtkb3duTm9kZXMgPSBuZXN0ZWRIZWFkaW5nTWFya2Rvd25Ob2Rlc0Zyb21IZWFkaW5nTWFya2Rvd25Ob2RlcyhoZWFkaW5nTWFya2Rvd25Ob2RlcyksXG4gICAgICAgICAgICBjb250ZW50c0l0ZW1UcmFuc2Zvcm1zID0gY29udGVudHNJdGVtVHJhbnNmb3Jtc0Zyb21OZXN0ZWRIZWFkaW5nTWFya2Rvd25Ob2RlcyhuZXN0ZWRIZWFkaW5nTWFya2Rvd25Ob2RlcywgY29udGV4dCksXG4gICAgICAgICAgICBjb250ZW50c0xpc3RNYXJrZG93bk5vZGUgPSBDb250ZW50c0xpc3RNYXJrZG93bk5vZGUuZnJvbUNvbnRlbnRzSXRlbVRyYW5zZm9ybXMoY29udGVudHNJdGVtVHJhbnNmb3JtcyksXG4gICAgICAgICAgICBub2RlID0gY29udGVudHNMaXN0TWFya2Rvd25Ob2RlLCAvLy9cbiAgICAgICAgICAgIHRva2VucyA9IFtdO1xuXG4gICAgICBjb250ZW50c0l0ZW1UcmFuc2Zvcm1zLmZvckVhY2goKGNvbnRlbnRzSXRlbVRyYW5zZm9ybSkgPT4ge1xuICAgICAgICBjb250ZW50c0l0ZW1UcmFuc2Zvcm0uZ2V0VG9rZW5zKHRva2Vucyk7XG4gICAgICB9KTtcblxuICAgICAgY29udGVudHNMaXN0VHJhbnNmb3JtID0gVHJhbnNmb3JtLmZyb21Ob2RlQW5kVG9rZW5zKENvbnRlbnRzTGlzdFRyYW5zZm9ybSwgbm9kZSwgdG9rZW5zKTtcbiAgICB9XG5cbiAgICByZXR1cm4gY29udGVudHNMaXN0VHJhbnNmb3JtO1xuICB9XG59XG5cbk9iamVjdC5hc3NpZ24oQ29udGVudHNJdGVtVHJhbnNmb3JtLCB7ICAvLy9cbiAgQ29udGVudHNMaXN0VHJhbnNmb3JtXG59KTtcblxuZXhwb3J0IGRlZmF1bHQgQ29udGVudHNMaXN0VHJhbnNmb3JtO1xuXG5mdW5jdGlvbiBuZXN0ZWRIZWFkaW5nTWFya2Rvd25Ob2Rlc0Zyb21IZWFkaW5nTWFya2Rvd25Ob2RlcyhoZWFkaW5nTWFya2Rvd25Ob2Rlcykge1xuICBjb25zdCBub2RlcyA9IGhlYWRpbmdNYXJrZG93bk5vZGVzLCAvLy9cbiAgICAgICAgbmVzdGVkTm9kZSA9IG5lc3ROb2Rlcyhub2RlcyksXG4gICAgICAgIGNoaWxkTmVzdGVkTm9kZXMgPSBuZXN0ZWROb2RlLmdldENoaWxkTmVzdGVkTm9kZXMoKSxcbiAgICAgICAgbmVzdGVkSGVhZGluZ01hcmtkb3duTm9kZXMgPSBjaGlsZE5lc3RlZE5vZGVzOyAgLy8vXG5cbiAgcmV0dXJuIG5lc3RlZEhlYWRpbmdNYXJrZG93bk5vZGVzO1xufVxuXG5mdW5jdGlvbiBjb250ZW50c0l0ZW1UcmFuc2Zvcm1zRnJvbU5lc3RlZEhlYWRpbmdNYXJrZG93bk5vZGVzKG5lc3RlZEhlYWRpbmdNYXJrZG93bk5vZGVzLCBjb250ZXh0KSB7XG4gIGNvbnN0IGNvbnRlbnRzSXRlbVRyYW5zZm9ybXMgPSBuZXN0ZWRIZWFkaW5nTWFya2Rvd25Ob2Rlcy5tYXAoKG5lc3RlZEhlYWRpbmdNYXJrZG93bk5vZGUpID0+IHtcbiAgICBjb25zdCBjb250ZW50c0l0ZW1UcmFuc2Zvcm0gPSBDb250ZW50c0l0ZW1UcmFuc2Zvcm0uZnJvbU5lc3RlZEhlYWRpbmdNYXJrZG93bk5vZGUobmVzdGVkSGVhZGluZ01hcmtkb3duTm9kZSwgY29udGV4dCk7XG5cbiAgICByZXR1cm4gY29udGVudHNJdGVtVHJhbnNmb3JtO1xuICB9KTtcblxuICByZXR1cm4gY29udGVudHNJdGVtVHJhbnNmb3Jtcztcbn1cblxuZnVuY3Rpb24gaGVhZGluZ01hcmtkb3duTm9kZXNGcm9tRGl2aXNpb25NYXJrZG93bk5vZGVzQW5kRGl2aXNpb25NYXJrZG93bk5vZGUoZGl2aXNpb25NYXJrZG93bk5vZGVzLCBkaXZpc2lvbk1hcmtkb3duTm9kZSwgY29udGV4dCkge1xuICBjb25zdCBoZWFkaW5nTWFya2Rvd25Ob2RlcyA9IFtdLFxuICAgICAgICBpbmRleCA9IGRpdmlzaW9uTWFya2Rvd25Ob2Rlcy5pbmRleE9mKGRpdmlzaW9uTWFya2Rvd25Ob2RlKSxcbiAgICAgICAgc3RhcnQgPSBpbmRleCArIDE7XG5cbiAgZGl2aXNpb25NYXJrZG93bk5vZGVzID0gZGl2aXNpb25NYXJrZG93bk5vZGVzLnNsaWNlKHN0YXJ0KTsgLy8vXG5cbiAgZGl2aXNpb25NYXJrZG93bk5vZGVzLmZvckVhY2goKGRpdmlzaW9uTWFya2Rvd25Ob2RlKSA9PiB7XG4gICAgY29uc3Qgbm9kZSA9IGRpdmlzaW9uTWFya2Rvd25Ob2RlOyAgLy8vXG5cbiAgICBoZWFkaW5nTWFya2Rvd25Ob2Rlc0Zyb21Ob2RlKG5vZGUsIGhlYWRpbmdNYXJrZG93bk5vZGVzKTtcbiAgfSk7XG5cbiAgZmlsdGVyKGhlYWRpbmdNYXJrZG93bk5vZGVzLCAoaGVhZGluZ01hcmtkb3duTm9kZSkgPT4ge1xuICAgIGNvbnN0IHsgY29udGVudHNEZXB0aCB9ID0gY29udGV4dCxcbiAgICAgIGRlcHRoID0gaGVhZGluZ01hcmtkb3duTm9kZS5nZXREZXB0aCgpO1xuXG4gICAgaWYgKGRlcHRoIDw9IGNvbnRlbnRzRGVwdGgpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfSk7XG5cbiAgcmV0dXJuIGhlYWRpbmdNYXJrZG93bk5vZGVzO1xufVxuXG4iXSwibmFtZXMiOlsiZmlsdGVyIiwiYXJyYXlVdGlsaXRpZXMiLCJDb250ZW50c0xpc3RUcmFuc2Zvcm0iLCJyZXBsYWNlQ29udGVudHNEaXJlY3RpdmVTdWJkaXZpc2lvblRyYW5zZm9ybSIsImNvbnRlbnRzRGlyZWN0aXZlU3ViRGl2aXNpb25UcmFuc2Zvcm0iLCJkaXZpc2lvbk1hcmtkb3duTm9kZSIsImNvbnRleHQiLCJzdWJEaXZpc2lvbk1hcmtkb3duTm9kZSIsImdldFN1YkRpdmlzaW9uTWFya2Rvd25Ob2RlIiwicmVwbGFjZWROb2RlIiwicGFyZW50Tm9kZSIsInJlcGxhY2UiLCJmcm9tTmVzdGVkSGVhZGluZ01hcmtkb3duTm9kZXMiLCJuZXN0ZWRIZWFkaW5nTWFya2Rvd25Ob2RlcyIsImNvbnRlbnRzSXRlbVRyYW5zZm9ybXMiLCJjb250ZW50c0l0ZW1UcmFuc2Zvcm1zRnJvbU5lc3RlZEhlYWRpbmdNYXJrZG93bk5vZGVzIiwiY29udGVudHNMaXN0TWFya2Rvd25Ob2RlIiwiQ29udGVudHNMaXN0TWFya2Rvd25Ob2RlIiwiZnJvbUNvbnRlbnRzSXRlbVRyYW5zZm9ybXMiLCJub2RlIiwidG9rZW5zIiwiZm9yRWFjaCIsImNvbnRlbnRzSXRlbVRyYW5zZm9ybSIsImdldFRva2VucyIsImNvbnRlbnRzTGlzdFRyYW5zZm9ybSIsIlRyYW5zZm9ybSIsImZyb21Ob2RlQW5kVG9rZW5zIiwiZnJvbURpdmlzaW9uTWFya2Rvd25Ob2Rlc0FuZERpdmlzaW9uTWFya2Rvd25Ob2RlIiwiZGl2aXNpb25NYXJrZG93bk5vZGVzIiwiaGVhZGluZ01hcmtkb3duTm9kZXMiLCJoZWFkaW5nTWFya2Rvd25Ob2Rlc0Zyb21EaXZpc2lvbk1hcmtkb3duTm9kZXNBbmREaXZpc2lvbk1hcmtkb3duTm9kZSIsImhlYWRpbmdNYXJrZG93bk5vZGVzTGVuZ3RoIiwibGVuZ3RoIiwibmVzdGVkSGVhZGluZ01hcmtkb3duTm9kZXNGcm9tSGVhZGluZ01hcmtkb3duTm9kZXMiLCJPYmplY3QiLCJhc3NpZ24iLCJDb250ZW50c0l0ZW1UcmFuc2Zvcm0iLCJub2RlcyIsIm5lc3RlZE5vZGUiLCJuZXN0Tm9kZXMiLCJjaGlsZE5lc3RlZE5vZGVzIiwiZ2V0Q2hpbGROZXN0ZWROb2RlcyIsIm1hcCIsIm5lc3RlZEhlYWRpbmdNYXJrZG93bk5vZGUiLCJmcm9tTmVzdGVkSGVhZGluZ01hcmtkb3duTm9kZSIsImluZGV4IiwiaW5kZXhPZiIsInN0YXJ0Iiwic2xpY2UiLCJoZWFkaW5nTWFya2Rvd25Ob2Rlc0Zyb21Ob2RlIiwiaGVhZGluZ01hcmtkb3duTm9kZSIsImNvbnRlbnRzRGVwdGgiLCJkZXB0aCIsImdldERlcHRoIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFpRUE7OztlQUFBOzs7d0JBL0QwQjt5QkFDSzttRUFFRzsrREFDRzt5QkFFWDtxQkFDbUI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUU3QyxJQUFNLEFBQUVBLFNBQVdDLHlCQUFjLENBQXpCRDtBQUVSLElBQUEsQUFBTUUsc0NBQU47Y0FBTUE7YUFBQUE7Z0NBQUFBO2VBQU4sa0JBQU1BOztrQkFBQUE7O1lBQ0pDLEtBQUFBO21CQUFBQSxTQUFBQSw2Q0FBNkNDLHFDQUFxQyxFQUFFQyxvQkFBb0IsRUFBRUMsT0FBTztnQkFDL0csSUFBTUMsMEJBQTBCSCxzQ0FBc0NJLDBCQUEwQixJQUMxRkMsZUFBZUYseUJBQ2ZHLGFBQWFMLHNCQUF1QixHQUFHO2dCQUU3Qyx1QkFORUgsa0NBTUlTLFdBQU4sSUFBSyxhQUFTRixjQUFjQyxZQUFZSjtZQUMxQzs7OztZQUVPTSxLQUFBQTttQkFBUCxTQUFPQSwrQkFBK0JDLDBCQUEwQixFQUFFUCxPQUFPO2dCQUN2RSxJQUFNUSx5QkFBeUJDLHFEQUFxREYsNEJBQTRCUCxVQUMxR1UsMkJBQTJCQyxpQkFBd0IsQ0FBQ0MsMEJBQTBCLENBQUNKLHlCQUMvRUssT0FBT0gsMEJBQ1BJLFNBQVMsRUFBRTtnQkFFakJOLHVCQUF1Qk8sT0FBTyxDQUFDLFNBQUNDO29CQUM5QkEsc0JBQXNCQyxTQUFTLENBQUNIO2dCQUNsQztnQkFFQSxJQUFNSSx3QkFBd0JDLG1CQUFTLENBQUNDLGlCQUFpQixDQW5CdkR4Qix1QkFtQitFaUIsTUFBTUM7Z0JBRXZGLE9BQU9JO1lBQ1Q7OztZQUVPRyxLQUFBQTttQkFBUCxTQUFPQSxpREFBaURDLHFCQUFxQixFQUFFdkIsb0JBQW9CLEVBQUVDLE9BQU87Z0JBQzFHLElBQUlrQix3QkFBd0I7Z0JBRTVCLElBQU1LLHVCQUF1QkMscUVBQXFFRix1QkFBdUJ2QixzQkFBc0JDLFVBQ3pJeUIsNkJBQTZCRixxQkFBcUJHLE1BQU07Z0JBRTlELElBQUlELDZCQUE2QixHQUFHO29CQUNsQyxJQUFNbEIsNkJBQTZCb0IsbURBQW1ESix1QkFDaEZmLHlCQUF5QkMscURBQXFERiw0QkFBNEJQLFVBQzFHVSwyQkFBMkJDLGlCQUF3QixDQUFDQywwQkFBMEIsQ0FBQ0oseUJBQy9FSyxPQUFPSCwwQkFDUEksU0FBUyxFQUFFO29CQUVqQk4sdUJBQXVCTyxPQUFPLENBQUMsU0FBQ0M7d0JBQzlCQSxzQkFBc0JDLFNBQVMsQ0FBQ0g7b0JBQ2xDO29CQUVBSSx3QkFBd0JDLG1CQUFTLENBQUNDLGlCQUFpQixDQXpDbkR4Qix1QkF5QzJFaUIsTUFBTUM7Z0JBQ25GO2dCQUVBLE9BQU9JO1lBQ1Q7OztXQTdDSXRCO0VBQThCdUIsbUJBQVM7QUFnRDdDUyxPQUFPQyxNQUFNLENBQUNDLHFCQUFxQixFQUFFO0lBQ25DbEMsdUJBQUFBO0FBQ0Y7SUFFQSxXQUFlQTtBQUVmLFNBQVMrQixtREFBbURKLG9CQUFvQjtJQUM5RSxJQUFNUSxRQUFRUixzQkFDUlMsYUFBYUMsSUFBQUEsb0JBQVMsRUFBQ0YsUUFDdkJHLG1CQUFtQkYsV0FBV0csbUJBQW1CLElBQ2pENUIsNkJBQTZCMkIsa0JBQW1CLEdBQUc7SUFFekQsT0FBTzNCO0FBQ1Q7QUFFQSxTQUFTRSxxREFBcURGLDBCQUEwQixFQUFFUCxPQUFPO0lBQy9GLElBQU1RLHlCQUF5QkQsMkJBQTJCNkIsR0FBRyxDQUFDLFNBQUNDO1FBQzdELElBQU1yQix3QkFBd0JjLHFCQUFxQixDQUFDUSw2QkFBNkIsQ0FBQ0QsMkJBQTJCckM7UUFFN0csT0FBT2dCO0lBQ1Q7SUFFQSxPQUFPUjtBQUNUO0FBRUEsU0FBU2dCLHFFQUFxRUYscUJBQXFCLEVBQUV2QixvQkFBb0IsRUFBRUMsT0FBTztJQUNoSSxJQUFNdUIsdUJBQXVCLEVBQUUsRUFDekJnQixRQUFRakIsc0JBQXNCa0IsT0FBTyxDQUFDekMsdUJBQ3RDMEMsUUFBUUYsUUFBUTtJQUV0QmpCLHdCQUF3QkEsc0JBQXNCb0IsS0FBSyxDQUFDRCxRQUFRLEdBQUc7SUFFL0RuQixzQkFBc0JQLE9BQU8sQ0FBQyxTQUFDaEI7UUFDN0IsSUFBTWMsT0FBT2Qsc0JBQXVCLEdBQUc7UUFFdkM0QyxJQUFBQSxtQ0FBNEIsRUFBQzlCLE1BQU1VO0lBQ3JDO0lBRUE3QixPQUFPNkIsc0JBQXNCLFNBQUNxQjtRQUM1QixJQUFNLEFBQUVDLGdCQUFrQjdDLFFBQWxCNkMsZUFDTkMsUUFBUUYsb0JBQW9CRyxRQUFRO1FBRXRDLElBQUlELFNBQVNELGVBQWU7WUFDMUIsT0FBTztRQUNUO0lBQ0Y7SUFFQSxPQUFPdEI7QUFDVCJ9