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
                var contentsItemTransforms = contentsItemTransformsFromNestedHeadingMarkdownNodes(nestedHeadingMarkdownNodes, context), contentsListMarkdownNode = _contentsList.default.fromContentsItemTransforms(contentsItemTransforms), node = contentsListMarkdownNode, tokens = [];
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
                    var nestedHeadingMarkdownNodes = nestedHeadingMarkdownNodesFromHeadingMarkdownNodes(headingMarkdownNodes), contentsItemTransforms = contentsItemTransformsFromNestedHeadingMarkdownNodes(nestedHeadingMarkdownNodes, context), contentsListMarkdownNode = _contentsList.default.fromContentsItemTransforms(contentsItemTransforms), node = contentsListMarkdownNode, tokens = [];
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
    var nodes = headingMarkdownNodes, nestedNode = (0, _contents.nestNodes)(nodes), childNestedNodes = nestedNode.getChildNestedNodes(), nestedHeadingMarkdownNodes = childNestedNodes; ///
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy90cmFuc2Zvcm0vY29udGVudHNMaXN0LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBUcmFuc2Zvcm0gfSBmcm9tIFwib2NjYW0tZG9tXCI7XG5pbXBvcnQgeyBhcnJheVV0aWxpdGllcyB9IGZyb20gXCJuZWNlc3NhcnlcIjtcblxuaW1wb3J0IENvbnRlbnRzSXRlbVRyYW5zZm9ybSBmcm9tIFwiLi4vdHJhbnNmb3JtL2NvbnRlbnRzSXRlbVwiO1xuaW1wb3J0IENvbnRlbnRzTGlzdE1hcmtkb3duTm9kZSBmcm9tIFwiLi4vbm9kZS9tYXJrZG93bi9jb250ZW50c0xpc3RcIjtcblxuaW1wb3J0IHsgbmVzdE5vZGVzIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9jb250ZW50c1wiO1xuaW1wb3J0IHsgaGVhZGluZ01hcmtkb3duTm9kZXNGcm9tTm9kZSB9IGZyb20gXCIuLi91dGlsaXRpZXMvcXVlcnlcIjtcblxuY29uc3QgeyBmaWx0ZXIgfSA9IGFycmF5VXRpbGl0aWVzO1xuXG5jbGFzcyBDb250ZW50c0xpc3RUcmFuc2Zvcm0gZXh0ZW5kcyBUcmFuc2Zvcm0ge1xuICByZXBsYWNlQ29udGVudHNEaXJlY3RpdmVTdWJkaXZpc2lvblRyYW5zZm9ybShjb250ZW50c0RpcmVjdGl2ZVN1YkRpdmlzaW9uVHJhbnNmb3JtLCBkaXZpc2lvbk1hcmtkb3duTm9kZSwgY29udGV4dCkge1xuICAgIGNvbnN0IHN1YkRpdmlzaW9uTWFya2Rvd25Ob2RlID0gY29udGVudHNEaXJlY3RpdmVTdWJEaXZpc2lvblRyYW5zZm9ybS5nZXRTdWJEaXZpc2lvbk1hcmtkb3duTm9kZSgpLFxuICAgICAgICAgIHJlcGxhY2VkTm9kZSA9IHN1YkRpdmlzaW9uTWFya2Rvd25Ob2RlLCAvLy9cbiAgICAgICAgICBwYXJlbnROb2RlID0gZGl2aXNpb25NYXJrZG93bk5vZGU7ICAvLy9cblxuICAgIHN1cGVyLnJlcGxhY2UocmVwbGFjZWROb2RlLCBwYXJlbnROb2RlLCBjb250ZXh0KVxuICB9XG5cbiAgc3RhdGljIGZyb21OZXN0ZWRIZWFkaW5nTWFya2Rvd25Ob2RlcyhuZXN0ZWRIZWFkaW5nTWFya2Rvd25Ob2RlcywgY29udGV4dCkge1xuICAgIGNvbnN0IGNvbnRlbnRzSXRlbVRyYW5zZm9ybXMgPSBjb250ZW50c0l0ZW1UcmFuc2Zvcm1zRnJvbU5lc3RlZEhlYWRpbmdNYXJrZG93bk5vZGVzKG5lc3RlZEhlYWRpbmdNYXJrZG93bk5vZGVzLCBjb250ZXh0KSxcbiAgICAgICAgICBjb250ZW50c0xpc3RNYXJrZG93bk5vZGUgPSBDb250ZW50c0xpc3RNYXJrZG93bk5vZGUuZnJvbUNvbnRlbnRzSXRlbVRyYW5zZm9ybXMoY29udGVudHNJdGVtVHJhbnNmb3JtcyksXG4gICAgICAgICAgbm9kZSA9IGNvbnRlbnRzTGlzdE1hcmtkb3duTm9kZSwgLy8vXG4gICAgICAgICAgdG9rZW5zID0gW107XG5cbiAgICBjb250ZW50c0l0ZW1UcmFuc2Zvcm1zLmZvckVhY2goKGNvbnRlbnRzSXRlbVRyYW5zZm9ybSkgPT4ge1xuICAgICAgY29udGVudHNJdGVtVHJhbnNmb3JtLmdldFRva2Vucyh0b2tlbnMpO1xuICAgIH0pO1xuXG4gICAgY29uc3QgY29udGVudHNMaXN0VHJhbnNmb3JtID0gVHJhbnNmb3JtLmZyb21Ob2RlQW5kVG9rZW5zKENvbnRlbnRzTGlzdFRyYW5zZm9ybSwgbm9kZSwgdG9rZW5zKTtcblxuICAgIHJldHVybiBjb250ZW50c0xpc3RUcmFuc2Zvcm07XG4gIH1cblxuICBzdGF0aWMgZnJvbURpdmlzaW9uTWFya2Rvd25Ob2Rlc0FuZERpdmlzaW9uTWFya2Rvd25Ob2RlKGRpdmlzaW9uTWFya2Rvd25Ob2RlcywgZGl2aXNpb25NYXJrZG93bk5vZGUsIGNvbnRleHQpIHtcbiAgICBsZXQgY29udGVudHNMaXN0VHJhbnNmb3JtID0gbnVsbDtcblxuICAgIGNvbnN0IGhlYWRpbmdNYXJrZG93bk5vZGVzID0gaGVhZGluZ01hcmtkb3duTm9kZXNGcm9tRGl2aXNpb25NYXJrZG93bk5vZGVzQW5kRGl2aXNpb25NYXJrZG93bk5vZGUoZGl2aXNpb25NYXJrZG93bk5vZGVzLCBkaXZpc2lvbk1hcmtkb3duTm9kZSwgY29udGV4dCksXG4gICAgICAgICAgaGVhZGluZ01hcmtkb3duTm9kZXNMZW5ndGggPSBoZWFkaW5nTWFya2Rvd25Ob2Rlcy5sZW5ndGg7XG5cbiAgICBpZiAoaGVhZGluZ01hcmtkb3duTm9kZXNMZW5ndGggPiAwKSB7XG4gICAgICBjb25zdCBuZXN0ZWRIZWFkaW5nTWFya2Rvd25Ob2RlcyA9IG5lc3RlZEhlYWRpbmdNYXJrZG93bk5vZGVzRnJvbUhlYWRpbmdNYXJrZG93bk5vZGVzKGhlYWRpbmdNYXJrZG93bk5vZGVzKSxcbiAgICAgICAgICAgIGNvbnRlbnRzSXRlbVRyYW5zZm9ybXMgPSBjb250ZW50c0l0ZW1UcmFuc2Zvcm1zRnJvbU5lc3RlZEhlYWRpbmdNYXJrZG93bk5vZGVzKG5lc3RlZEhlYWRpbmdNYXJrZG93bk5vZGVzLCBjb250ZXh0KSxcbiAgICAgICAgICAgIGNvbnRlbnRzTGlzdE1hcmtkb3duTm9kZSA9IENvbnRlbnRzTGlzdE1hcmtkb3duTm9kZS5mcm9tQ29udGVudHNJdGVtVHJhbnNmb3Jtcyhjb250ZW50c0l0ZW1UcmFuc2Zvcm1zKSxcbiAgICAgICAgICAgIG5vZGUgPSBjb250ZW50c0xpc3RNYXJrZG93bk5vZGUsIC8vL1xuICAgICAgICAgICAgdG9rZW5zID0gW107XG5cbiAgICAgIGNvbnRlbnRzSXRlbVRyYW5zZm9ybXMuZm9yRWFjaCgoY29udGVudHNJdGVtVHJhbnNmb3JtKSA9PiB7XG4gICAgICAgIGNvbnRlbnRzSXRlbVRyYW5zZm9ybS5nZXRUb2tlbnModG9rZW5zKTtcbiAgICAgIH0pO1xuXG4gICAgICBjb250ZW50c0xpc3RUcmFuc2Zvcm0gPSBUcmFuc2Zvcm0uZnJvbU5vZGVBbmRUb2tlbnMoQ29udGVudHNMaXN0VHJhbnNmb3JtLCBub2RlLCB0b2tlbnMpO1xuICAgIH1cblxuICAgIHJldHVybiBjb250ZW50c0xpc3RUcmFuc2Zvcm07XG4gIH1cbn1cblxuT2JqZWN0LmFzc2lnbihDb250ZW50c0l0ZW1UcmFuc2Zvcm0sIHsgIC8vL1xuICBDb250ZW50c0xpc3RUcmFuc2Zvcm1cbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBDb250ZW50c0xpc3RUcmFuc2Zvcm07XG5cbmZ1bmN0aW9uIG5lc3RlZEhlYWRpbmdNYXJrZG93bk5vZGVzRnJvbUhlYWRpbmdNYXJrZG93bk5vZGVzKGhlYWRpbmdNYXJrZG93bk5vZGVzKSB7XG4gIGNvbnN0IG5vZGVzID0gaGVhZGluZ01hcmtkb3duTm9kZXMsIC8vL1xuICAgICAgICBuZXN0ZWROb2RlID0gbmVzdE5vZGVzKG5vZGVzKSxcbiAgICAgICAgY2hpbGROZXN0ZWROb2RlcyA9IG5lc3RlZE5vZGUuZ2V0Q2hpbGROZXN0ZWROb2RlcygpLFxuICAgICAgICBuZXN0ZWRIZWFkaW5nTWFya2Rvd25Ob2RlcyA9IGNoaWxkTmVzdGVkTm9kZXM7ICAvLy9cblxuICByZXR1cm4gbmVzdGVkSGVhZGluZ01hcmtkb3duTm9kZXM7XG59XG5cbmZ1bmN0aW9uIGNvbnRlbnRzSXRlbVRyYW5zZm9ybXNGcm9tTmVzdGVkSGVhZGluZ01hcmtkb3duTm9kZXMobmVzdGVkSGVhZGluZ01hcmtkb3duTm9kZXMsIGNvbnRleHQpIHtcbiAgY29uc3QgY29udGVudHNJdGVtVHJhbnNmb3JtcyA9IG5lc3RlZEhlYWRpbmdNYXJrZG93bk5vZGVzLm1hcCgobmVzdGVkSGVhZGluZ01hcmtkb3duTm9kZSkgPT4ge1xuICAgIGNvbnN0IGNvbnRlbnRzSXRlbVRyYW5zZm9ybSA9IENvbnRlbnRzSXRlbVRyYW5zZm9ybS5mcm9tTmVzdGVkSGVhZGluZ01hcmtkb3duTm9kZShuZXN0ZWRIZWFkaW5nTWFya2Rvd25Ob2RlLCBjb250ZXh0KTtcblxuICAgIHJldHVybiBjb250ZW50c0l0ZW1UcmFuc2Zvcm07XG4gIH0pO1xuXG4gIHJldHVybiBjb250ZW50c0l0ZW1UcmFuc2Zvcm1zO1xufVxuXG5mdW5jdGlvbiBoZWFkaW5nTWFya2Rvd25Ob2Rlc0Zyb21EaXZpc2lvbk1hcmtkb3duTm9kZXNBbmREaXZpc2lvbk1hcmtkb3duTm9kZShkaXZpc2lvbk1hcmtkb3duTm9kZXMsIGRpdmlzaW9uTWFya2Rvd25Ob2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IGhlYWRpbmdNYXJrZG93bk5vZGVzID0gW10sXG4gICAgICAgIGluZGV4ID0gZGl2aXNpb25NYXJrZG93bk5vZGVzLmluZGV4T2YoZGl2aXNpb25NYXJrZG93bk5vZGUpLFxuICAgICAgICBzdGFydCA9IGluZGV4ICsgMTtcblxuICBkaXZpc2lvbk1hcmtkb3duTm9kZXMgPSBkaXZpc2lvbk1hcmtkb3duTm9kZXMuc2xpY2Uoc3RhcnQpOyAvLy9cblxuICBkaXZpc2lvbk1hcmtkb3duTm9kZXMuZm9yRWFjaCgoZGl2aXNpb25NYXJrZG93bk5vZGUpID0+IHtcbiAgICBjb25zdCBub2RlID0gZGl2aXNpb25NYXJrZG93bk5vZGU7ICAvLy9cblxuICAgIGhlYWRpbmdNYXJrZG93bk5vZGVzRnJvbU5vZGUobm9kZSwgaGVhZGluZ01hcmtkb3duTm9kZXMpO1xuICB9KTtcblxuICBmaWx0ZXIoaGVhZGluZ01hcmtkb3duTm9kZXMsIChoZWFkaW5nTWFya2Rvd25Ob2RlKSA9PiB7XG4gICAgY29uc3QgeyBjb250ZW50c0RlcHRoIH0gPSBjb250ZXh0LFxuICAgICAgZGVwdGggPSBoZWFkaW5nTWFya2Rvd25Ob2RlLmdldERlcHRoKCk7XG5cbiAgICBpZiAoZGVwdGggPD0gY29udGVudHNEZXB0aCkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9KTtcblxuICByZXR1cm4gaGVhZGluZ01hcmtkb3duTm9kZXM7XG59XG5cbiJdLCJuYW1lcyI6WyJmaWx0ZXIiLCJhcnJheVV0aWxpdGllcyIsIkNvbnRlbnRzTGlzdFRyYW5zZm9ybSIsInJlcGxhY2VDb250ZW50c0RpcmVjdGl2ZVN1YmRpdmlzaW9uVHJhbnNmb3JtIiwiY29udGVudHNEaXJlY3RpdmVTdWJEaXZpc2lvblRyYW5zZm9ybSIsImRpdmlzaW9uTWFya2Rvd25Ob2RlIiwiY29udGV4dCIsInN1YkRpdmlzaW9uTWFya2Rvd25Ob2RlIiwiZ2V0U3ViRGl2aXNpb25NYXJrZG93bk5vZGUiLCJyZXBsYWNlZE5vZGUiLCJwYXJlbnROb2RlIiwicmVwbGFjZSIsImZyb21OZXN0ZWRIZWFkaW5nTWFya2Rvd25Ob2RlcyIsIm5lc3RlZEhlYWRpbmdNYXJrZG93bk5vZGVzIiwiY29udGVudHNJdGVtVHJhbnNmb3JtcyIsImNvbnRlbnRzSXRlbVRyYW5zZm9ybXNGcm9tTmVzdGVkSGVhZGluZ01hcmtkb3duTm9kZXMiLCJjb250ZW50c0xpc3RNYXJrZG93bk5vZGUiLCJDb250ZW50c0xpc3RNYXJrZG93bk5vZGUiLCJmcm9tQ29udGVudHNJdGVtVHJhbnNmb3JtcyIsIm5vZGUiLCJ0b2tlbnMiLCJmb3JFYWNoIiwiY29udGVudHNJdGVtVHJhbnNmb3JtIiwiZ2V0VG9rZW5zIiwiY29udGVudHNMaXN0VHJhbnNmb3JtIiwiVHJhbnNmb3JtIiwiZnJvbU5vZGVBbmRUb2tlbnMiLCJmcm9tRGl2aXNpb25NYXJrZG93bk5vZGVzQW5kRGl2aXNpb25NYXJrZG93bk5vZGUiLCJkaXZpc2lvbk1hcmtkb3duTm9kZXMiLCJoZWFkaW5nTWFya2Rvd25Ob2RlcyIsImhlYWRpbmdNYXJrZG93bk5vZGVzRnJvbURpdmlzaW9uTWFya2Rvd25Ob2Rlc0FuZERpdmlzaW9uTWFya2Rvd25Ob2RlIiwiaGVhZGluZ01hcmtkb3duTm9kZXNMZW5ndGgiLCJsZW5ndGgiLCJuZXN0ZWRIZWFkaW5nTWFya2Rvd25Ob2Rlc0Zyb21IZWFkaW5nTWFya2Rvd25Ob2RlcyIsIk9iamVjdCIsImFzc2lnbiIsIkNvbnRlbnRzSXRlbVRyYW5zZm9ybSIsIm5vZGVzIiwibmVzdGVkTm9kZSIsIm5lc3ROb2RlcyIsImNoaWxkTmVzdGVkTm9kZXMiLCJnZXRDaGlsZE5lc3RlZE5vZGVzIiwibWFwIiwibmVzdGVkSGVhZGluZ01hcmtkb3duTm9kZSIsImZyb21OZXN0ZWRIZWFkaW5nTWFya2Rvd25Ob2RlIiwiaW5kZXgiLCJpbmRleE9mIiwic3RhcnQiLCJzbGljZSIsImhlYWRpbmdNYXJrZG93bk5vZGVzRnJvbU5vZGUiLCJoZWFkaW5nTWFya2Rvd25Ob2RlIiwiY29udGVudHNEZXB0aCIsImRlcHRoIiwiZ2V0RGVwdGgiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQWlFQTs7O2VBQUE7Ozt3QkEvRDBCO3lCQUNLO21FQUVHO21FQUNHO3dCQUVYO3FCQUNtQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRTdDLElBQU0sQUFBRUEsU0FBV0MseUJBQWMsQ0FBekJEO0FBRVIsSUFBQSxBQUFNRSxzQ0FBTjtjQUFNQTthQUFBQTtnQ0FBQUE7ZUFBTixrQkFBTUE7O2tCQUFBQTs7WUFDSkMsS0FBQUE7bUJBQUFBLFNBQUFBLDZDQUE2Q0MscUNBQXFDLEVBQUVDLG9CQUFvQixFQUFFQyxPQUFPO2dCQUMvRyxJQUFNQywwQkFBMEJILHNDQUFzQ0ksMEJBQTBCLElBQzFGQyxlQUFlRix5QkFDZkcsYUFBYUwsc0JBQXVCLEdBQUc7Z0JBRTdDLHVCQU5FSCxrQ0FNSVMsV0FBTixJQUFLLGFBQVNGLGNBQWNDLFlBQVlKO1lBQzFDOzs7O1lBRU9NLEtBQUFBO21CQUFQLFNBQU9BLCtCQUErQkMsMEJBQTBCLEVBQUVQLE9BQU87Z0JBQ3ZFLElBQU1RLHlCQUF5QkMscURBQXFERiw0QkFBNEJQLFVBQzFHVSwyQkFBMkJDLHFCQUF3QixDQUFDQywwQkFBMEIsQ0FBQ0oseUJBQy9FSyxPQUFPSCwwQkFDUEksU0FBUyxFQUFFO2dCQUVqQk4sdUJBQXVCTyxPQUFPLENBQUMsU0FBQ0M7b0JBQzlCQSxzQkFBc0JDLFNBQVMsQ0FBQ0g7Z0JBQ2xDO2dCQUVBLElBQU1JLHdCQUF3QkMsbUJBQVMsQ0FBQ0MsaUJBQWlCLENBbkJ2RHhCLHVCQW1CK0VpQixNQUFNQztnQkFFdkYsT0FBT0k7WUFDVDs7O1lBRU9HLEtBQUFBO21CQUFQLFNBQU9BLGlEQUFpREMscUJBQXFCLEVBQUV2QixvQkFBb0IsRUFBRUMsT0FBTztnQkFDMUcsSUFBSWtCLHdCQUF3QjtnQkFFNUIsSUFBTUssdUJBQXVCQyxxRUFBcUVGLHVCQUF1QnZCLHNCQUFzQkMsVUFDekl5Qiw2QkFBNkJGLHFCQUFxQkcsTUFBTTtnQkFFOUQsSUFBSUQsNkJBQTZCLEdBQUc7b0JBQ2xDLElBQU1sQiw2QkFBNkJvQixtREFBbURKLHVCQUNoRmYseUJBQXlCQyxxREFBcURGLDRCQUE0QlAsVUFDMUdVLDJCQUEyQkMscUJBQXdCLENBQUNDLDBCQUEwQixDQUFDSix5QkFDL0VLLE9BQU9ILDBCQUNQSSxTQUFTLEVBQUU7b0JBRWpCTix1QkFBdUJPLE9BQU8sQ0FBQyxTQUFDQzt3QkFDOUJBLHNCQUFzQkMsU0FBUyxDQUFDSDtvQkFDbEM7b0JBRUFJLHdCQUF3QkMsbUJBQVMsQ0FBQ0MsaUJBQWlCLENBekNuRHhCLHVCQXlDMkVpQixNQUFNQztnQkFDbkY7Z0JBRUEsT0FBT0k7WUFDVDs7O1dBN0NJdEI7RUFBOEJ1QixtQkFBUztBQWdEN0NTLE9BQU9DLE1BQU0sQ0FBQ0MscUJBQXFCLEVBQUU7SUFDbkNsQyx1QkFBQUE7QUFDRjtJQUVBLFdBQWVBO0FBRWYsU0FBUytCLG1EQUFtREosb0JBQW9CO0lBQzlFLElBQU1RLFFBQVFSLHNCQUNSUyxhQUFhQyxJQUFBQSxtQkFBUyxFQUFDRixRQUN2QkcsbUJBQW1CRixXQUFXRyxtQkFBbUIsSUFDakQ1Qiw2QkFBNkIyQixrQkFBbUIsR0FBRztJQUV6RCxPQUFPM0I7QUFDVDtBQUVBLFNBQVNFLHFEQUFxREYsMEJBQTBCLEVBQUVQLE9BQU87SUFDL0YsSUFBTVEseUJBQXlCRCwyQkFBMkI2QixHQUFHLENBQUMsU0FBQ0M7UUFDN0QsSUFBTXJCLHdCQUF3QmMscUJBQXFCLENBQUNRLDZCQUE2QixDQUFDRCwyQkFBMkJyQztRQUU3RyxPQUFPZ0I7SUFDVDtJQUVBLE9BQU9SO0FBQ1Q7QUFFQSxTQUFTZ0IscUVBQXFFRixxQkFBcUIsRUFBRXZCLG9CQUFvQixFQUFFQyxPQUFPO0lBQ2hJLElBQU11Qix1QkFBdUIsRUFBRSxFQUN6QmdCLFFBQVFqQixzQkFBc0JrQixPQUFPLENBQUN6Qyx1QkFDdEMwQyxRQUFRRixRQUFRO0lBRXRCakIsd0JBQXdCQSxzQkFBc0JvQixLQUFLLENBQUNELFFBQVEsR0FBRztJQUUvRG5CLHNCQUFzQlAsT0FBTyxDQUFDLFNBQUNoQjtRQUM3QixJQUFNYyxPQUFPZCxzQkFBdUIsR0FBRztRQUV2QzRDLElBQUFBLG1DQUE0QixFQUFDOUIsTUFBTVU7SUFDckM7SUFFQTdCLE9BQU82QixzQkFBc0IsU0FBQ3FCO1FBQzVCLElBQU0sQUFBRUMsZ0JBQWtCN0MsUUFBbEI2QyxlQUNOQyxRQUFRRixvQkFBb0JHLFFBQVE7UUFFdEMsSUFBSUQsU0FBU0QsZUFBZTtZQUMxQixPQUFPO1FBQ1Q7SUFDRjtJQUVBLE9BQU90QjtBQUNUIn0=