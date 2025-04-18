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
var _transform = /*#__PURE__*/ _interop_require_default(require("../transform"));
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
                var contentsListTransform = _transform.default.fromNodeAndTokens(ContentsListTransform, node, tokens);
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
                    contentsListTransform = _transform.default.fromNodeAndTokens(ContentsListTransform, node, tokens);
                }
                return contentsListTransform;
            }
        }
    ]);
    return ContentsListTransform;
}(_transform.default);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy90cmFuc2Zvcm0vY29udGVudHNMaXN0LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBhcnJheVV0aWxpdGllcyB9IGZyb20gXCJuZWNlc3NhcnlcIjtcblxuaW1wb3J0IFRyYW5zZm9ybSBmcm9tIFwiLi4vdHJhbnNmb3JtXCI7XG5pbXBvcnQgQ29udGVudHNJdGVtVHJhbnNmb3JtIGZyb20gXCIuLi90cmFuc2Zvcm0vY29udGVudHNJdGVtXCI7XG5pbXBvcnQgQ29udGVudHNMaXN0TWFya2Rvd25Ob2RlIGZyb20gXCIuLi9ub2RlL21hcmtkb3duL2NvbnRlbnRzTGlzdFwiO1xuXG5pbXBvcnQgeyBuZXN0Tm9kZXMgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2NvbnRlbnRzXCI7XG5pbXBvcnQgeyBoZWFkaW5nTWFya2Rvd25Ob2Rlc0Zyb21Ob2RlIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9xdWVyeVwiO1xuXG5jb25zdCB7IGZpbHRlciB9ID0gYXJyYXlVdGlsaXRpZXM7XG5cbmNsYXNzIENvbnRlbnRzTGlzdFRyYW5zZm9ybSBleHRlbmRzIFRyYW5zZm9ybSB7XG4gIHJlcGxhY2VDb250ZW50c0RpcmVjdGl2ZVN1YmRpdmlzaW9uVHJhbnNmb3JtKGNvbnRlbnRzRGlyZWN0aXZlU3ViRGl2aXNpb25UcmFuc2Zvcm0sIGRpdmlzaW9uTWFya2Rvd25Ob2RlLCBjb250ZXh0KSB7XG4gICAgY29uc3Qgc3ViRGl2aXNpb25NYXJrZG93bk5vZGUgPSBjb250ZW50c0RpcmVjdGl2ZVN1YkRpdmlzaW9uVHJhbnNmb3JtLmdldFN1YkRpdmlzaW9uTWFya2Rvd25Ob2RlKCksXG4gICAgICAgICAgcmVwbGFjZWROb2RlID0gc3ViRGl2aXNpb25NYXJrZG93bk5vZGUsIC8vL1xuICAgICAgICAgIHBhcmVudE5vZGUgPSBkaXZpc2lvbk1hcmtkb3duTm9kZTsgIC8vL1xuXG4gICAgc3VwZXIucmVwbGFjZShyZXBsYWNlZE5vZGUsIHBhcmVudE5vZGUsIGNvbnRleHQpXG4gIH1cblxuICBzdGF0aWMgZnJvbU5lc3RlZEhlYWRpbmdNYXJrZG93bk5vZGVzKG5lc3RlZEhlYWRpbmdNYXJrZG93bk5vZGVzLCBjb250ZXh0KSB7XG4gICAgY29uc3QgY29udGVudHNJdGVtVHJhbnNmb3JtcyA9IGNvbnRlbnRzSXRlbVRyYW5zZm9ybXNGcm9tTmVzdGVkSGVhZGluZ01hcmtkb3duTm9kZXMobmVzdGVkSGVhZGluZ01hcmtkb3duTm9kZXMsIGNvbnRleHQpLFxuICAgICAgICAgIGNvbnRlbnRzTGlzdE1hcmtkb3duTm9kZSA9IENvbnRlbnRzTGlzdE1hcmtkb3duTm9kZS5mcm9tQ29udGVudHNJdGVtVHJhbnNmb3Jtcyhjb250ZW50c0l0ZW1UcmFuc2Zvcm1zKSxcbiAgICAgICAgICBub2RlID0gY29udGVudHNMaXN0TWFya2Rvd25Ob2RlLCAvLy9cbiAgICAgICAgICB0b2tlbnMgPSBbXTtcblxuICAgIGNvbnRlbnRzSXRlbVRyYW5zZm9ybXMuZm9yRWFjaCgoY29udGVudHNJdGVtVHJhbnNmb3JtKSA9PiB7XG4gICAgICBjb250ZW50c0l0ZW1UcmFuc2Zvcm0uZ2V0VG9rZW5zKHRva2Vucyk7XG4gICAgfSk7XG5cbiAgICBjb25zdCBjb250ZW50c0xpc3RUcmFuc2Zvcm0gPSBUcmFuc2Zvcm0uZnJvbU5vZGVBbmRUb2tlbnMoQ29udGVudHNMaXN0VHJhbnNmb3JtLCBub2RlLCB0b2tlbnMpO1xuXG4gICAgcmV0dXJuIGNvbnRlbnRzTGlzdFRyYW5zZm9ybTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tRGl2aXNpb25NYXJrZG93bk5vZGVzQW5kRGl2aXNpb25NYXJrZG93bk5vZGUoZGl2aXNpb25NYXJrZG93bk5vZGVzLCBkaXZpc2lvbk1hcmtkb3duTm9kZSwgY29udGV4dCkge1xuICAgIGxldCBjb250ZW50c0xpc3RUcmFuc2Zvcm0gPSBudWxsO1xuXG4gICAgY29uc3QgaGVhZGluZ01hcmtkb3duTm9kZXMgPSBoZWFkaW5nTWFya2Rvd25Ob2Rlc0Zyb21EaXZpc2lvbk1hcmtkb3duTm9kZXNBbmREaXZpc2lvbk1hcmtkb3duTm9kZShkaXZpc2lvbk1hcmtkb3duTm9kZXMsIGRpdmlzaW9uTWFya2Rvd25Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgICBoZWFkaW5nTWFya2Rvd25Ob2Rlc0xlbmd0aCA9IGhlYWRpbmdNYXJrZG93bk5vZGVzLmxlbmd0aDtcblxuICAgIGlmIChoZWFkaW5nTWFya2Rvd25Ob2Rlc0xlbmd0aCA+IDApIHtcbiAgICAgIGNvbnN0IG5lc3RlZEhlYWRpbmdNYXJrZG93bk5vZGVzID0gbmVzdGVkSGVhZGluZ01hcmtkb3duTm9kZXNGcm9tSGVhZGluZ01hcmtkb3duTm9kZXMoaGVhZGluZ01hcmtkb3duTm9kZXMpLFxuICAgICAgICAgICAgY29udGVudHNJdGVtVHJhbnNmb3JtcyA9IGNvbnRlbnRzSXRlbVRyYW5zZm9ybXNGcm9tTmVzdGVkSGVhZGluZ01hcmtkb3duTm9kZXMobmVzdGVkSGVhZGluZ01hcmtkb3duTm9kZXMsIGNvbnRleHQpLFxuICAgICAgICAgICAgY29udGVudHNMaXN0TWFya2Rvd25Ob2RlID0gQ29udGVudHNMaXN0TWFya2Rvd25Ob2RlLmZyb21Db250ZW50c0l0ZW1UcmFuc2Zvcm1zKGNvbnRlbnRzSXRlbVRyYW5zZm9ybXMpLFxuICAgICAgICAgICAgbm9kZSA9IGNvbnRlbnRzTGlzdE1hcmtkb3duTm9kZSwgLy8vXG4gICAgICAgICAgICB0b2tlbnMgPSBbXTtcblxuICAgICAgY29udGVudHNJdGVtVHJhbnNmb3Jtcy5mb3JFYWNoKChjb250ZW50c0l0ZW1UcmFuc2Zvcm0pID0+IHtcbiAgICAgICAgY29udGVudHNJdGVtVHJhbnNmb3JtLmdldFRva2Vucyh0b2tlbnMpO1xuICAgICAgfSk7XG5cbiAgICAgIGNvbnRlbnRzTGlzdFRyYW5zZm9ybSA9IFRyYW5zZm9ybS5mcm9tTm9kZUFuZFRva2VucyhDb250ZW50c0xpc3RUcmFuc2Zvcm0sIG5vZGUsIHRva2Vucyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGNvbnRlbnRzTGlzdFRyYW5zZm9ybTtcbiAgfVxufVxuXG5PYmplY3QuYXNzaWduKENvbnRlbnRzSXRlbVRyYW5zZm9ybSwgeyAgLy8vXG4gIENvbnRlbnRzTGlzdFRyYW5zZm9ybVxufSk7XG5cbmV4cG9ydCBkZWZhdWx0IENvbnRlbnRzTGlzdFRyYW5zZm9ybTtcblxuZnVuY3Rpb24gbmVzdGVkSGVhZGluZ01hcmtkb3duTm9kZXNGcm9tSGVhZGluZ01hcmtkb3duTm9kZXMoaGVhZGluZ01hcmtkb3duTm9kZXMpIHtcbiAgY29uc3Qgbm9kZXMgPSBoZWFkaW5nTWFya2Rvd25Ob2RlcywgLy8vXG4gICAgICAgIG5lc3RlZE5vZGUgPSBuZXN0Tm9kZXMobm9kZXMpLFxuICAgICAgICBjaGlsZE5lc3RlZE5vZGVzID0gbmVzdGVkTm9kZS5nZXRDaGlsZE5lc3RlZE5vZGVzKCksXG4gICAgICAgIG5lc3RlZEhlYWRpbmdNYXJrZG93bk5vZGVzID0gY2hpbGROZXN0ZWROb2RlczsgIC8vL1xuXG4gIHJldHVybiBuZXN0ZWRIZWFkaW5nTWFya2Rvd25Ob2Rlcztcbn1cblxuZnVuY3Rpb24gY29udGVudHNJdGVtVHJhbnNmb3Jtc0Zyb21OZXN0ZWRIZWFkaW5nTWFya2Rvd25Ob2RlcyhuZXN0ZWRIZWFkaW5nTWFya2Rvd25Ob2RlcywgY29udGV4dCkge1xuICBjb25zdCBjb250ZW50c0l0ZW1UcmFuc2Zvcm1zID0gbmVzdGVkSGVhZGluZ01hcmtkb3duTm9kZXMubWFwKChuZXN0ZWRIZWFkaW5nTWFya2Rvd25Ob2RlKSA9PiB7XG4gICAgY29uc3QgY29udGVudHNJdGVtVHJhbnNmb3JtID0gQ29udGVudHNJdGVtVHJhbnNmb3JtLmZyb21OZXN0ZWRIZWFkaW5nTWFya2Rvd25Ob2RlKG5lc3RlZEhlYWRpbmdNYXJrZG93bk5vZGUsIGNvbnRleHQpO1xuXG4gICAgcmV0dXJuIGNvbnRlbnRzSXRlbVRyYW5zZm9ybTtcbiAgfSk7XG5cbiAgcmV0dXJuIGNvbnRlbnRzSXRlbVRyYW5zZm9ybXM7XG59XG5cbmZ1bmN0aW9uIGhlYWRpbmdNYXJrZG93bk5vZGVzRnJvbURpdmlzaW9uTWFya2Rvd25Ob2Rlc0FuZERpdmlzaW9uTWFya2Rvd25Ob2RlKGRpdmlzaW9uTWFya2Rvd25Ob2RlcywgZGl2aXNpb25NYXJrZG93bk5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgaGVhZGluZ01hcmtkb3duTm9kZXMgPSBbXSxcbiAgICAgICAgaW5kZXggPSBkaXZpc2lvbk1hcmtkb3duTm9kZXMuaW5kZXhPZihkaXZpc2lvbk1hcmtkb3duTm9kZSksXG4gICAgICAgIHN0YXJ0ID0gaW5kZXggKyAxO1xuXG4gIGRpdmlzaW9uTWFya2Rvd25Ob2RlcyA9IGRpdmlzaW9uTWFya2Rvd25Ob2Rlcy5zbGljZShzdGFydCk7IC8vL1xuXG4gIGRpdmlzaW9uTWFya2Rvd25Ob2Rlcy5mb3JFYWNoKChkaXZpc2lvbk1hcmtkb3duTm9kZSkgPT4ge1xuICAgIGNvbnN0IG5vZGUgPSBkaXZpc2lvbk1hcmtkb3duTm9kZTsgIC8vL1xuXG4gICAgaGVhZGluZ01hcmtkb3duTm9kZXNGcm9tTm9kZShub2RlLCBoZWFkaW5nTWFya2Rvd25Ob2Rlcyk7XG4gIH0pO1xuXG4gIGZpbHRlcihoZWFkaW5nTWFya2Rvd25Ob2RlcywgKGhlYWRpbmdNYXJrZG93bk5vZGUpID0+IHtcbiAgICBjb25zdCB7IGNvbnRlbnRzRGVwdGggfSA9IGNvbnRleHQsXG4gICAgICBkZXB0aCA9IGhlYWRpbmdNYXJrZG93bk5vZGUuZ2V0RGVwdGgoKTtcblxuICAgIGlmIChkZXB0aCA8PSBjb250ZW50c0RlcHRoKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH0pO1xuXG4gIHJldHVybiBoZWFkaW5nTWFya2Rvd25Ob2Rlcztcbn1cblxuIl0sIm5hbWVzIjpbImZpbHRlciIsImFycmF5VXRpbGl0aWVzIiwiQ29udGVudHNMaXN0VHJhbnNmb3JtIiwicmVwbGFjZUNvbnRlbnRzRGlyZWN0aXZlU3ViZGl2aXNpb25UcmFuc2Zvcm0iLCJjb250ZW50c0RpcmVjdGl2ZVN1YkRpdmlzaW9uVHJhbnNmb3JtIiwiZGl2aXNpb25NYXJrZG93bk5vZGUiLCJjb250ZXh0Iiwic3ViRGl2aXNpb25NYXJrZG93bk5vZGUiLCJnZXRTdWJEaXZpc2lvbk1hcmtkb3duTm9kZSIsInJlcGxhY2VkTm9kZSIsInBhcmVudE5vZGUiLCJyZXBsYWNlIiwiZnJvbU5lc3RlZEhlYWRpbmdNYXJrZG93bk5vZGVzIiwibmVzdGVkSGVhZGluZ01hcmtkb3duTm9kZXMiLCJjb250ZW50c0l0ZW1UcmFuc2Zvcm1zIiwiY29udGVudHNJdGVtVHJhbnNmb3Jtc0Zyb21OZXN0ZWRIZWFkaW5nTWFya2Rvd25Ob2RlcyIsImNvbnRlbnRzTGlzdE1hcmtkb3duTm9kZSIsIkNvbnRlbnRzTGlzdE1hcmtkb3duTm9kZSIsImZyb21Db250ZW50c0l0ZW1UcmFuc2Zvcm1zIiwibm9kZSIsInRva2VucyIsImZvckVhY2giLCJjb250ZW50c0l0ZW1UcmFuc2Zvcm0iLCJnZXRUb2tlbnMiLCJjb250ZW50c0xpc3RUcmFuc2Zvcm0iLCJUcmFuc2Zvcm0iLCJmcm9tTm9kZUFuZFRva2VucyIsImZyb21EaXZpc2lvbk1hcmtkb3duTm9kZXNBbmREaXZpc2lvbk1hcmtkb3duTm9kZSIsImRpdmlzaW9uTWFya2Rvd25Ob2RlcyIsImhlYWRpbmdNYXJrZG93bk5vZGVzIiwiaGVhZGluZ01hcmtkb3duTm9kZXNGcm9tRGl2aXNpb25NYXJrZG93bk5vZGVzQW5kRGl2aXNpb25NYXJrZG93bk5vZGUiLCJoZWFkaW5nTWFya2Rvd25Ob2Rlc0xlbmd0aCIsImxlbmd0aCIsIm5lc3RlZEhlYWRpbmdNYXJrZG93bk5vZGVzRnJvbUhlYWRpbmdNYXJrZG93bk5vZGVzIiwiT2JqZWN0IiwiYXNzaWduIiwiQ29udGVudHNJdGVtVHJhbnNmb3JtIiwibm9kZXMiLCJuZXN0ZWROb2RlIiwibmVzdE5vZGVzIiwiY2hpbGROZXN0ZWROb2RlcyIsImdldENoaWxkTmVzdGVkTm9kZXMiLCJtYXAiLCJuZXN0ZWRIZWFkaW5nTWFya2Rvd25Ob2RlIiwiZnJvbU5lc3RlZEhlYWRpbmdNYXJrZG93bk5vZGUiLCJpbmRleCIsImluZGV4T2YiLCJzdGFydCIsInNsaWNlIiwiaGVhZGluZ01hcmtkb3duTm9kZXNGcm9tTm9kZSIsImhlYWRpbmdNYXJrZG93bk5vZGUiLCJjb250ZW50c0RlcHRoIiwiZGVwdGgiLCJnZXREZXB0aCJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBaUVBOzs7ZUFBQTs7O3lCQS9EK0I7Z0VBRVQ7bUVBQ1k7bUVBQ0c7d0JBRVg7cUJBQ21COzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFN0MsSUFBTSxBQUFFQSxTQUFXQyx5QkFBYyxDQUF6QkQ7QUFFUixJQUFBLEFBQU1FLHNDQUFOO2NBQU1BO2FBQUFBO2dDQUFBQTtlQUFOLGtCQUFNQTs7a0JBQUFBOztZQUNKQyxLQUFBQTttQkFBQUEsU0FBQUEsNkNBQTZDQyxxQ0FBcUMsRUFBRUMsb0JBQW9CLEVBQUVDLE9BQU87Z0JBQy9HLElBQU1DLDBCQUEwQkgsc0NBQXNDSSwwQkFBMEIsSUFDMUZDLGVBQWVGLHlCQUNmRyxhQUFhTCxzQkFBdUIsR0FBRztnQkFFN0MsdUJBTkVILGtDQU1JUyxXQUFOLElBQUssYUFBU0YsY0FBY0MsWUFBWUo7WUFDMUM7Ozs7WUFFT00sS0FBQUE7bUJBQVAsU0FBT0EsK0JBQStCQywwQkFBMEIsRUFBRVAsT0FBTztnQkFDdkUsSUFBTVEseUJBQXlCQyxxREFBcURGLDRCQUE0QlAsVUFDMUdVLDJCQUEyQkMscUJBQXdCLENBQUNDLDBCQUEwQixDQUFDSix5QkFDL0VLLE9BQU9ILDBCQUNQSSxTQUFTLEVBQUU7Z0JBRWpCTix1QkFBdUJPLE9BQU8sQ0FBQyxTQUFDQztvQkFDOUJBLHNCQUFzQkMsU0FBUyxDQUFDSDtnQkFDbEM7Z0JBRUEsSUFBTUksd0JBQXdCQyxrQkFBUyxDQUFDQyxpQkFBaUIsQ0FuQnZEeEIsdUJBbUIrRWlCLE1BQU1DO2dCQUV2RixPQUFPSTtZQUNUOzs7WUFFT0csS0FBQUE7bUJBQVAsU0FBT0EsaURBQWlEQyxxQkFBcUIsRUFBRXZCLG9CQUFvQixFQUFFQyxPQUFPO2dCQUMxRyxJQUFJa0Isd0JBQXdCO2dCQUU1QixJQUFNSyx1QkFBdUJDLHFFQUFxRUYsdUJBQXVCdkIsc0JBQXNCQyxVQUN6SXlCLDZCQUE2QkYscUJBQXFCRyxNQUFNO2dCQUU5RCxJQUFJRCw2QkFBNkIsR0FBRztvQkFDbEMsSUFBTWxCLDZCQUE2Qm9CLG1EQUFtREosdUJBQ2hGZix5QkFBeUJDLHFEQUFxREYsNEJBQTRCUCxVQUMxR1UsMkJBQTJCQyxxQkFBd0IsQ0FBQ0MsMEJBQTBCLENBQUNKLHlCQUMvRUssT0FBT0gsMEJBQ1BJLFNBQVMsRUFBRTtvQkFFakJOLHVCQUF1Qk8sT0FBTyxDQUFDLFNBQUNDO3dCQUM5QkEsc0JBQXNCQyxTQUFTLENBQUNIO29CQUNsQztvQkFFQUksd0JBQXdCQyxrQkFBUyxDQUFDQyxpQkFBaUIsQ0F6Q25EeEIsdUJBeUMyRWlCLE1BQU1DO2dCQUNuRjtnQkFFQSxPQUFPSTtZQUNUOzs7V0E3Q0l0QjtFQUE4QnVCLGtCQUFTO0FBZ0Q3Q1MsT0FBT0MsTUFBTSxDQUFDQyxxQkFBcUIsRUFBRTtJQUNuQ2xDLHVCQUFBQTtBQUNGO0lBRUEsV0FBZUE7QUFFZixTQUFTK0IsbURBQW1ESixvQkFBb0I7SUFDOUUsSUFBTVEsUUFBUVIsc0JBQ1JTLGFBQWFDLElBQUFBLG1CQUFTLEVBQUNGLFFBQ3ZCRyxtQkFBbUJGLFdBQVdHLG1CQUFtQixJQUNqRDVCLDZCQUE2QjJCLGtCQUFtQixHQUFHO0lBRXpELE9BQU8zQjtBQUNUO0FBRUEsU0FBU0UscURBQXFERiwwQkFBMEIsRUFBRVAsT0FBTztJQUMvRixJQUFNUSx5QkFBeUJELDJCQUEyQjZCLEdBQUcsQ0FBQyxTQUFDQztRQUM3RCxJQUFNckIsd0JBQXdCYyxxQkFBcUIsQ0FBQ1EsNkJBQTZCLENBQUNELDJCQUEyQnJDO1FBRTdHLE9BQU9nQjtJQUNUO0lBRUEsT0FBT1I7QUFDVDtBQUVBLFNBQVNnQixxRUFBcUVGLHFCQUFxQixFQUFFdkIsb0JBQW9CLEVBQUVDLE9BQU87SUFDaEksSUFBTXVCLHVCQUF1QixFQUFFLEVBQ3pCZ0IsUUFBUWpCLHNCQUFzQmtCLE9BQU8sQ0FBQ3pDLHVCQUN0QzBDLFFBQVFGLFFBQVE7SUFFdEJqQix3QkFBd0JBLHNCQUFzQm9CLEtBQUssQ0FBQ0QsUUFBUSxHQUFHO0lBRS9EbkIsc0JBQXNCUCxPQUFPLENBQUMsU0FBQ2hCO1FBQzdCLElBQU1jLE9BQU9kLHNCQUF1QixHQUFHO1FBRXZDNEMsSUFBQUEsbUNBQTRCLEVBQUM5QixNQUFNVTtJQUNyQztJQUVBN0IsT0FBTzZCLHNCQUFzQixTQUFDcUI7UUFDNUIsSUFBTSxBQUFFQyxnQkFBa0I3QyxRQUFsQjZDLGVBQ05DLFFBQVFGLG9CQUFvQkcsUUFBUTtRQUV0QyxJQUFJRCxTQUFTRCxlQUFlO1lBQzFCLE9BQU87UUFDVDtJQUNGO0lBRUEsT0FBT3RCO0FBQ1QifQ==