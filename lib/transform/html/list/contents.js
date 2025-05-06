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
var _html = /*#__PURE__*/ _interop_require_default(require("../../../transform/html"));
var _contents = /*#__PURE__*/ _interop_require_default(require("../../../node/markdown/list/contents"));
var _contents1 = /*#__PURE__*/ _interop_require_default(require("../../../transform/html/item/contents"));
var _contents2 = require("../../../utilities/contents");
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
var filter = _necessary.arrayUtilities.filter;
var ContentsListHTMLTransform = /*#__PURE__*/ function(HTMLTransform) {
    _inherits(ContentsListHTMLTransform, HTMLTransform);
    function ContentsListHTMLTransform() {
        _class_call_check(this, ContentsListHTMLTransform);
        return _call_super(this, ContentsListHTMLTransform, arguments);
    }
    _create_class(ContentsListHTMLTransform, null, [
        {
            key: "fromNestedHeadingMarkdownNodes",
            value: // replaceContentsDirectiveSubdivisionHTMLTransform(contentsDirectiveSubDivisionHTMLTransform, context) {
            //   const subDivisionMarkdownNode = contentsDirectiveSubDivisionHTMLTransform.getSubDivisionMarkdownNode(),
            //         replacedNode = subDivisionMarkdownNode;  ///
            //
            //   super.replace(replacedNode, context)
            // }
            function fromNestedHeadingMarkdownNodes(nestedHeadingMarkdownNodes, context) {
                var contentsItemHTMLTransforms = contentsItemHTMLTransformsFromNestedHeadingMarkdownNodes(nestedHeadingMarkdownNodes, context), contentsListMarkdownNode = _contents.default.fromContentsItemHTMLTransforms(contentsItemHTMLTransforms), node = contentsListMarkdownNode, tokens = [];
                contentsItemHTMLTransforms.forEach(function(contentsItemHTMLTransform) {
                    contentsItemHTMLTransform.getTokens(tokens);
                });
                var contentsListHTMLTransform = _html.default.fromNodeAndTokens(ContentsListHTMLTransform, node, tokens);
                return contentsListHTMLTransform;
            }
        },
        {
            key: "fromDivisionMarkdownNodesAndDivisionMarkdownNode",
            value: function fromDivisionMarkdownNodesAndDivisionMarkdownNode(divisionMarkdownNodes, divisionMarkdownNode, context) {
                var contentsListHTMLTransform = null;
                var headingMarkdownNodes = headingMarkdownNodesFromDivisionMarkdownNodesAndDivisionMarkdownNode(divisionMarkdownNodes, divisionMarkdownNode, context), headingMarkdownNodesLength = headingMarkdownNodes.length;
                if (headingMarkdownNodesLength > 0) {
                    var nestedHeadingMarkdownNodes = nestedHeadingMarkdownNodesFromHeadingMarkdownNodes(headingMarkdownNodes), contentsItemHTMLTransforms = contentsItemHTMLTransformsFromNestedHeadingMarkdownNodes(nestedHeadingMarkdownNodes, context), contentsListMarkdownNode = _contents.default.fromContentsItemHTMLTransforms(contentsItemHTMLTransforms), node = contentsListMarkdownNode, tokens = [];
                    contentsItemHTMLTransforms.forEach(function(contentsItemHTMLTransform) {
                        contentsItemHTMLTransform.getTokens(tokens);
                    });
                    contentsListHTMLTransform = _html.default.fromNodeAndTokens(ContentsListHTMLTransform, node, tokens);
                }
                return contentsListHTMLTransform;
            }
        }
    ]);
    return ContentsListHTMLTransform;
}(_html.default);
Object.assign(_contents1.default, {
    ContentsListHTMLTransform: ContentsListHTMLTransform
});
var _default = ContentsListHTMLTransform;
function nestedHeadingMarkdownNodesFromHeadingMarkdownNodes(headingMarkdownNodes) {
    var nodes = headingMarkdownNodes, nestedNode = (0, _contents2.nestNodes)(nodes), childNestedNodes = nestedNode.getChildNestedNodes(), nestedHeadingMarkdownNodes = childNestedNodes; ///
    return nestedHeadingMarkdownNodes;
}
function contentsItemHTMLTransformsFromNestedHeadingMarkdownNodes(nestedHeadingMarkdownNodes, context) {
    var contentsItemHTMLTransforms = nestedHeadingMarkdownNodes.map(function(nestedHeadingMarkdownNode) {
        var contentsItemHTMLTransform = _contents1.default.fromNestedHeadingMarkdownNode(nestedHeadingMarkdownNode, context);
        return contentsItemHTMLTransform;
    });
    return contentsItemHTMLTransforms;
}
function headingMarkdownNodesFromDivisionMarkdownNodesAndDivisionMarkdownNode(divisionMarkdownNodes, divisionMarkdownNode, context) {
    var headingMarkdownNodes = [], index = divisionMarkdownNodes.indexOf(divisionMarkdownNode), start = index + 1;
    divisionMarkdownNodes = divisionMarkdownNodes.slice(start); ///
    divisionMarkdownNodes.forEach(function(divisionMarkdownNode) {
        var node = divisionMarkdownNode; ///
        headingMarkdownNodesFromNode(node, headingMarkdownNodes);
    });
    filter(headingMarkdownNodes, function(headingMarkdownNode) {
        var contentsDepth = context.contentsDepth, depth = headingMarkdownNode.getDepth();
        if (depth <= contentsDepth) {
            return true;
        }
    });
    return headingMarkdownNodes;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy90cmFuc2Zvcm0vaHRtbC9saXN0L2NvbnRlbnRzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBhcnJheVV0aWxpdGllcyB9IGZyb20gXCJuZWNlc3NhcnlcIjtcblxuaW1wb3J0IEhUTUxUcmFuc2Zvcm0gZnJvbSBcIi4uLy4uLy4uL3RyYW5zZm9ybS9odG1sXCI7XG5pbXBvcnQgQ29udGVudHNMaXN0TWFya2Rvd25Ob2RlIGZyb20gXCIuLi8uLi8uLi9ub2RlL21hcmtkb3duL2xpc3QvY29udGVudHNcIjtcbmltcG9ydCBDb250ZW50c0l0ZW1IVE1MVHJhbnNmb3JtIGZyb20gXCIuLi8uLi8uLi90cmFuc2Zvcm0vaHRtbC9pdGVtL2NvbnRlbnRzXCI7XG5cbmltcG9ydCB7IG5lc3ROb2RlcyB9IGZyb20gXCIuLi8uLi8uLi91dGlsaXRpZXMvY29udGVudHNcIjtcblxuY29uc3QgeyBmaWx0ZXIgfSA9IGFycmF5VXRpbGl0aWVzO1xuXG5jbGFzcyBDb250ZW50c0xpc3RIVE1MVHJhbnNmb3JtIGV4dGVuZHMgSFRNTFRyYW5zZm9ybSB7XG4gIC8vIHJlcGxhY2VDb250ZW50c0RpcmVjdGl2ZVN1YmRpdmlzaW9uSFRNTFRyYW5zZm9ybShjb250ZW50c0RpcmVjdGl2ZVN1YkRpdmlzaW9uSFRNTFRyYW5zZm9ybSwgY29udGV4dCkge1xuICAvLyAgIGNvbnN0IHN1YkRpdmlzaW9uTWFya2Rvd25Ob2RlID0gY29udGVudHNEaXJlY3RpdmVTdWJEaXZpc2lvbkhUTUxUcmFuc2Zvcm0uZ2V0U3ViRGl2aXNpb25NYXJrZG93bk5vZGUoKSxcbiAgLy8gICAgICAgICByZXBsYWNlZE5vZGUgPSBzdWJEaXZpc2lvbk1hcmtkb3duTm9kZTsgIC8vL1xuICAvL1xuICAvLyAgIHN1cGVyLnJlcGxhY2UocmVwbGFjZWROb2RlLCBjb250ZXh0KVxuICAvLyB9XG5cbiAgc3RhdGljIGZyb21OZXN0ZWRIZWFkaW5nTWFya2Rvd25Ob2RlcyhuZXN0ZWRIZWFkaW5nTWFya2Rvd25Ob2RlcywgY29udGV4dCkge1xuICAgIGNvbnN0IGNvbnRlbnRzSXRlbUhUTUxUcmFuc2Zvcm1zID0gY29udGVudHNJdGVtSFRNTFRyYW5zZm9ybXNGcm9tTmVzdGVkSGVhZGluZ01hcmtkb3duTm9kZXMobmVzdGVkSGVhZGluZ01hcmtkb3duTm9kZXMsIGNvbnRleHQpLFxuICAgICAgICAgIGNvbnRlbnRzTGlzdE1hcmtkb3duTm9kZSA9IENvbnRlbnRzTGlzdE1hcmtkb3duTm9kZS5mcm9tQ29udGVudHNJdGVtSFRNTFRyYW5zZm9ybXMoY29udGVudHNJdGVtSFRNTFRyYW5zZm9ybXMpLFxuICAgICAgICAgIG5vZGUgPSBjb250ZW50c0xpc3RNYXJrZG93bk5vZGUsIC8vL1xuICAgICAgICAgIHRva2VucyA9IFtdO1xuXG4gICAgY29udGVudHNJdGVtSFRNTFRyYW5zZm9ybXMuZm9yRWFjaCgoY29udGVudHNJdGVtSFRNTFRyYW5zZm9ybSkgPT4ge1xuICAgICAgY29udGVudHNJdGVtSFRNTFRyYW5zZm9ybS5nZXRUb2tlbnModG9rZW5zKTtcbiAgICB9KTtcblxuICAgIGNvbnN0IGNvbnRlbnRzTGlzdEhUTUxUcmFuc2Zvcm0gPSBIVE1MVHJhbnNmb3JtLmZyb21Ob2RlQW5kVG9rZW5zKENvbnRlbnRzTGlzdEhUTUxUcmFuc2Zvcm0sIG5vZGUsIHRva2Vucyk7XG5cbiAgICByZXR1cm4gY29udGVudHNMaXN0SFRNTFRyYW5zZm9ybTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tRGl2aXNpb25NYXJrZG93bk5vZGVzQW5kRGl2aXNpb25NYXJrZG93bk5vZGUoZGl2aXNpb25NYXJrZG93bk5vZGVzLCBkaXZpc2lvbk1hcmtkb3duTm9kZSwgY29udGV4dCkge1xuICAgIGxldCBjb250ZW50c0xpc3RIVE1MVHJhbnNmb3JtID0gbnVsbDtcblxuICAgIGNvbnN0IGhlYWRpbmdNYXJrZG93bk5vZGVzID0gaGVhZGluZ01hcmtkb3duTm9kZXNGcm9tRGl2aXNpb25NYXJrZG93bk5vZGVzQW5kRGl2aXNpb25NYXJrZG93bk5vZGUoZGl2aXNpb25NYXJrZG93bk5vZGVzLCBkaXZpc2lvbk1hcmtkb3duTm9kZSwgY29udGV4dCksXG4gICAgICAgICAgaGVhZGluZ01hcmtkb3duTm9kZXNMZW5ndGggPSBoZWFkaW5nTWFya2Rvd25Ob2Rlcy5sZW5ndGg7XG5cbiAgICBpZiAoaGVhZGluZ01hcmtkb3duTm9kZXNMZW5ndGggPiAwKSB7XG4gICAgICBjb25zdCBuZXN0ZWRIZWFkaW5nTWFya2Rvd25Ob2RlcyA9IG5lc3RlZEhlYWRpbmdNYXJrZG93bk5vZGVzRnJvbUhlYWRpbmdNYXJrZG93bk5vZGVzKGhlYWRpbmdNYXJrZG93bk5vZGVzKSxcbiAgICAgICAgICAgIGNvbnRlbnRzSXRlbUhUTUxUcmFuc2Zvcm1zID0gY29udGVudHNJdGVtSFRNTFRyYW5zZm9ybXNGcm9tTmVzdGVkSGVhZGluZ01hcmtkb3duTm9kZXMobmVzdGVkSGVhZGluZ01hcmtkb3duTm9kZXMsIGNvbnRleHQpLFxuICAgICAgICAgICAgY29udGVudHNMaXN0TWFya2Rvd25Ob2RlID0gQ29udGVudHNMaXN0TWFya2Rvd25Ob2RlLmZyb21Db250ZW50c0l0ZW1IVE1MVHJhbnNmb3Jtcyhjb250ZW50c0l0ZW1IVE1MVHJhbnNmb3JtcyksXG4gICAgICAgICAgICBub2RlID0gY29udGVudHNMaXN0TWFya2Rvd25Ob2RlLCAvLy9cbiAgICAgICAgICAgIHRva2VucyA9IFtdO1xuXG4gICAgICBjb250ZW50c0l0ZW1IVE1MVHJhbnNmb3Jtcy5mb3JFYWNoKChjb250ZW50c0l0ZW1IVE1MVHJhbnNmb3JtKSA9PiB7XG4gICAgICAgIGNvbnRlbnRzSXRlbUhUTUxUcmFuc2Zvcm0uZ2V0VG9rZW5zKHRva2Vucyk7XG4gICAgICB9KTtcblxuICAgICAgY29udGVudHNMaXN0SFRNTFRyYW5zZm9ybSA9IEhUTUxUcmFuc2Zvcm0uZnJvbU5vZGVBbmRUb2tlbnMoQ29udGVudHNMaXN0SFRNTFRyYW5zZm9ybSwgbm9kZSwgdG9rZW5zKTtcbiAgICB9XG5cbiAgICByZXR1cm4gY29udGVudHNMaXN0SFRNTFRyYW5zZm9ybTtcbiAgfVxufVxuXG5PYmplY3QuYXNzaWduKENvbnRlbnRzSXRlbUhUTUxUcmFuc2Zvcm0sIHsgIC8vL1xuICBDb250ZW50c0xpc3RIVE1MVHJhbnNmb3JtXG59KTtcblxuZXhwb3J0IGRlZmF1bHQgQ29udGVudHNMaXN0SFRNTFRyYW5zZm9ybTtcblxuZnVuY3Rpb24gbmVzdGVkSGVhZGluZ01hcmtkb3duTm9kZXNGcm9tSGVhZGluZ01hcmtkb3duTm9kZXMoaGVhZGluZ01hcmtkb3duTm9kZXMpIHtcbiAgY29uc3Qgbm9kZXMgPSBoZWFkaW5nTWFya2Rvd25Ob2RlcywgLy8vXG4gICAgICAgIG5lc3RlZE5vZGUgPSBuZXN0Tm9kZXMobm9kZXMpLFxuICAgICAgICBjaGlsZE5lc3RlZE5vZGVzID0gbmVzdGVkTm9kZS5nZXRDaGlsZE5lc3RlZE5vZGVzKCksXG4gICAgICAgIG5lc3RlZEhlYWRpbmdNYXJrZG93bk5vZGVzID0gY2hpbGROZXN0ZWROb2RlczsgIC8vL1xuXG4gIHJldHVybiBuZXN0ZWRIZWFkaW5nTWFya2Rvd25Ob2Rlcztcbn1cblxuZnVuY3Rpb24gY29udGVudHNJdGVtSFRNTFRyYW5zZm9ybXNGcm9tTmVzdGVkSGVhZGluZ01hcmtkb3duTm9kZXMobmVzdGVkSGVhZGluZ01hcmtkb3duTm9kZXMsIGNvbnRleHQpIHtcbiAgY29uc3QgY29udGVudHNJdGVtSFRNTFRyYW5zZm9ybXMgPSBuZXN0ZWRIZWFkaW5nTWFya2Rvd25Ob2Rlcy5tYXAoKG5lc3RlZEhlYWRpbmdNYXJrZG93bk5vZGUpID0+IHtcbiAgICBjb25zdCBjb250ZW50c0l0ZW1IVE1MVHJhbnNmb3JtID0gQ29udGVudHNJdGVtSFRNTFRyYW5zZm9ybS5mcm9tTmVzdGVkSGVhZGluZ01hcmtkb3duTm9kZShuZXN0ZWRIZWFkaW5nTWFya2Rvd25Ob2RlLCBjb250ZXh0KTtcblxuICAgIHJldHVybiBjb250ZW50c0l0ZW1IVE1MVHJhbnNmb3JtO1xuICB9KTtcblxuICByZXR1cm4gY29udGVudHNJdGVtSFRNTFRyYW5zZm9ybXM7XG59XG5cbmZ1bmN0aW9uIGhlYWRpbmdNYXJrZG93bk5vZGVzRnJvbURpdmlzaW9uTWFya2Rvd25Ob2Rlc0FuZERpdmlzaW9uTWFya2Rvd25Ob2RlKGRpdmlzaW9uTWFya2Rvd25Ob2RlcywgZGl2aXNpb25NYXJrZG93bk5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgaGVhZGluZ01hcmtkb3duTm9kZXMgPSBbXSxcbiAgICAgICAgaW5kZXggPSBkaXZpc2lvbk1hcmtkb3duTm9kZXMuaW5kZXhPZihkaXZpc2lvbk1hcmtkb3duTm9kZSksXG4gICAgICAgIHN0YXJ0ID0gaW5kZXggKyAxO1xuXG4gIGRpdmlzaW9uTWFya2Rvd25Ob2RlcyA9IGRpdmlzaW9uTWFya2Rvd25Ob2Rlcy5zbGljZShzdGFydCk7IC8vL1xuXG4gIGRpdmlzaW9uTWFya2Rvd25Ob2Rlcy5mb3JFYWNoKChkaXZpc2lvbk1hcmtkb3duTm9kZSkgPT4ge1xuICAgIGNvbnN0IG5vZGUgPSBkaXZpc2lvbk1hcmtkb3duTm9kZTsgIC8vL1xuXG4gICAgaGVhZGluZ01hcmtkb3duTm9kZXNGcm9tTm9kZShub2RlLCBoZWFkaW5nTWFya2Rvd25Ob2Rlcyk7XG4gIH0pO1xuXG4gIGZpbHRlcihoZWFkaW5nTWFya2Rvd25Ob2RlcywgKGhlYWRpbmdNYXJrZG93bk5vZGUpID0+IHtcbiAgICBjb25zdCB7IGNvbnRlbnRzRGVwdGggfSA9IGNvbnRleHQsXG4gICAgICBkZXB0aCA9IGhlYWRpbmdNYXJrZG93bk5vZGUuZ2V0RGVwdGgoKTtcblxuICAgIGlmIChkZXB0aCA8PSBjb250ZW50c0RlcHRoKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH0pO1xuXG4gIHJldHVybiBoZWFkaW5nTWFya2Rvd25Ob2Rlcztcbn1cblxuIl0sIm5hbWVzIjpbImZpbHRlciIsImFycmF5VXRpbGl0aWVzIiwiQ29udGVudHNMaXN0SFRNTFRyYW5zZm9ybSIsImZyb21OZXN0ZWRIZWFkaW5nTWFya2Rvd25Ob2RlcyIsIm5lc3RlZEhlYWRpbmdNYXJrZG93bk5vZGVzIiwiY29udGV4dCIsImNvbnRlbnRzSXRlbUhUTUxUcmFuc2Zvcm1zIiwiY29udGVudHNJdGVtSFRNTFRyYW5zZm9ybXNGcm9tTmVzdGVkSGVhZGluZ01hcmtkb3duTm9kZXMiLCJjb250ZW50c0xpc3RNYXJrZG93bk5vZGUiLCJDb250ZW50c0xpc3RNYXJrZG93bk5vZGUiLCJmcm9tQ29udGVudHNJdGVtSFRNTFRyYW5zZm9ybXMiLCJub2RlIiwidG9rZW5zIiwiZm9yRWFjaCIsImNvbnRlbnRzSXRlbUhUTUxUcmFuc2Zvcm0iLCJnZXRUb2tlbnMiLCJjb250ZW50c0xpc3RIVE1MVHJhbnNmb3JtIiwiSFRNTFRyYW5zZm9ybSIsImZyb21Ob2RlQW5kVG9rZW5zIiwiZnJvbURpdmlzaW9uTWFya2Rvd25Ob2Rlc0FuZERpdmlzaW9uTWFya2Rvd25Ob2RlIiwiZGl2aXNpb25NYXJrZG93bk5vZGVzIiwiZGl2aXNpb25NYXJrZG93bk5vZGUiLCJoZWFkaW5nTWFya2Rvd25Ob2RlcyIsImhlYWRpbmdNYXJrZG93bk5vZGVzRnJvbURpdmlzaW9uTWFya2Rvd25Ob2Rlc0FuZERpdmlzaW9uTWFya2Rvd25Ob2RlIiwiaGVhZGluZ01hcmtkb3duTm9kZXNMZW5ndGgiLCJsZW5ndGgiLCJuZXN0ZWRIZWFkaW5nTWFya2Rvd25Ob2Rlc0Zyb21IZWFkaW5nTWFya2Rvd25Ob2RlcyIsIk9iamVjdCIsImFzc2lnbiIsIkNvbnRlbnRzSXRlbUhUTUxUcmFuc2Zvcm0iLCJub2RlcyIsIm5lc3RlZE5vZGUiLCJuZXN0Tm9kZXMiLCJjaGlsZE5lc3RlZE5vZGVzIiwiZ2V0Q2hpbGROZXN0ZWROb2RlcyIsIm1hcCIsIm5lc3RlZEhlYWRpbmdNYXJrZG93bk5vZGUiLCJmcm9tTmVzdGVkSGVhZGluZ01hcmtkb3duTm9kZSIsImluZGV4IiwiaW5kZXhPZiIsInN0YXJ0Iiwic2xpY2UiLCJoZWFkaW5nTWFya2Rvd25Ob2Rlc0Zyb21Ob2RlIiwiaGVhZGluZ01hcmtkb3duTm9kZSIsImNvbnRlbnRzRGVwdGgiLCJkZXB0aCIsImdldERlcHRoIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkErREE7OztlQUFBOzs7eUJBN0QrQjsyREFFTDsrREFDVztnRUFDQzt5QkFFWjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUUxQixJQUFNLEFBQUVBLFNBQVdDLHlCQUFjLENBQXpCRDtBQUVSLElBQUEsQUFBTUUsMENBQU47Y0FBTUE7YUFBQUE7Z0NBQUFBO2VBQU4sa0JBQU1BOztrQkFBQUE7O1lBUUdDLEtBQUFBO21CQUFQLEFBUEEseUdBQXlHO1lBQ3pHLDRHQUE0RztZQUM1Ryx1REFBdUQ7WUFDdkQsRUFBRTtZQUNGLHlDQUF5QztZQUN6QyxJQUFJO1lBRUosU0FBT0EsK0JBQStCQywwQkFBMEIsRUFBRUMsT0FBTztnQkFDdkUsSUFBTUMsNkJBQTZCQyx5REFBeURILDRCQUE0QkMsVUFDbEhHLDJCQUEyQkMsaUJBQXdCLENBQUNDLDhCQUE4QixDQUFDSiw2QkFDbkZLLE9BQU9ILDBCQUNQSSxTQUFTLEVBQUU7Z0JBRWpCTiwyQkFBMkJPLE9BQU8sQ0FBQyxTQUFDQztvQkFDbENBLDBCQUEwQkMsU0FBUyxDQUFDSDtnQkFDdEM7Z0JBRUEsSUFBTUksNEJBQTRCQyxhQUFhLENBQUNDLGlCQUFpQixDQWxCL0RoQiwyQkFrQjJGUyxNQUFNQztnQkFFbkcsT0FBT0k7WUFDVDs7O1lBRU9HLEtBQUFBO21CQUFQLFNBQU9BLGlEQUFpREMscUJBQXFCLEVBQUVDLG9CQUFvQixFQUFFaEIsT0FBTztnQkFDMUcsSUFBSVcsNEJBQTRCO2dCQUVoQyxJQUFNTSx1QkFBdUJDLHFFQUFxRUgsdUJBQXVCQyxzQkFBc0JoQixVQUN6SW1CLDZCQUE2QkYscUJBQXFCRyxNQUFNO2dCQUU5RCxJQUFJRCw2QkFBNkIsR0FBRztvQkFDbEMsSUFBTXBCLDZCQUE2QnNCLG1EQUFtREosdUJBQ2hGaEIsNkJBQTZCQyx5REFBeURILDRCQUE0QkMsVUFDbEhHLDJCQUEyQkMsaUJBQXdCLENBQUNDLDhCQUE4QixDQUFDSiw2QkFDbkZLLE9BQU9ILDBCQUNQSSxTQUFTLEVBQUU7b0JBRWpCTiwyQkFBMkJPLE9BQU8sQ0FBQyxTQUFDQzt3QkFDbENBLDBCQUEwQkMsU0FBUyxDQUFDSDtvQkFDdEM7b0JBRUFJLDRCQUE0QkMsYUFBYSxDQUFDQyxpQkFBaUIsQ0F4QzNEaEIsMkJBd0N1RlMsTUFBTUM7Z0JBQy9GO2dCQUVBLE9BQU9JO1lBQ1Q7OztXQTVDSWQ7RUFBa0NlLGFBQWE7QUErQ3JEVSxPQUFPQyxNQUFNLENBQUNDLGtCQUF5QixFQUFFO0lBQ3ZDM0IsMkJBQUFBO0FBQ0Y7SUFFQSxXQUFlQTtBQUVmLFNBQVN3QixtREFBbURKLG9CQUFvQjtJQUM5RSxJQUFNUSxRQUFRUixzQkFDUlMsYUFBYUMsSUFBQUEsb0JBQVMsRUFBQ0YsUUFDdkJHLG1CQUFtQkYsV0FBV0csbUJBQW1CLElBQ2pEOUIsNkJBQTZCNkIsa0JBQW1CLEdBQUc7SUFFekQsT0FBTzdCO0FBQ1Q7QUFFQSxTQUFTRyx5REFBeURILDBCQUEwQixFQUFFQyxPQUFPO0lBQ25HLElBQU1DLDZCQUE2QkYsMkJBQTJCK0IsR0FBRyxDQUFDLFNBQUNDO1FBQ2pFLElBQU10Qiw0QkFBNEJlLGtCQUF5QixDQUFDUSw2QkFBNkIsQ0FBQ0QsMkJBQTJCL0I7UUFFckgsT0FBT1M7SUFDVDtJQUVBLE9BQU9SO0FBQ1Q7QUFFQSxTQUFTaUIscUVBQXFFSCxxQkFBcUIsRUFBRUMsb0JBQW9CLEVBQUVoQixPQUFPO0lBQ2hJLElBQU1pQix1QkFBdUIsRUFBRSxFQUN6QmdCLFFBQVFsQixzQkFBc0JtQixPQUFPLENBQUNsQix1QkFDdENtQixRQUFRRixRQUFRO0lBRXRCbEIsd0JBQXdCQSxzQkFBc0JxQixLQUFLLENBQUNELFFBQVEsR0FBRztJQUUvRHBCLHNCQUFzQlAsT0FBTyxDQUFDLFNBQUNRO1FBQzdCLElBQU1WLE9BQU9VLHNCQUF1QixHQUFHO1FBRXZDcUIsNkJBQTZCL0IsTUFBTVc7SUFDckM7SUFFQXRCLE9BQU9zQixzQkFBc0IsU0FBQ3FCO1FBQzVCLElBQU0sQUFBRUMsZ0JBQWtCdkMsUUFBbEJ1QyxlQUNOQyxRQUFRRixvQkFBb0JHLFFBQVE7UUFFdEMsSUFBSUQsU0FBU0QsZUFBZTtZQUMxQixPQUFPO1FBQ1Q7SUFDRjtJQUVBLE9BQU90QjtBQUNUIn0=