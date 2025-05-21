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
var _easywithstyle = /*#__PURE__*/ _interop_require_default(require("easy-with-style"));
var _easy = require("easy");
var _index = require("../index");
var _easylayout = require("easy-layout");
var _indexOptions = /*#__PURE__*/ _interop_require_default(require("./indexOptions"));
var _pageButtons = /*#__PURE__*/ _interop_require_default(require("./view/div/pageButtons"));
var _left = /*#__PURE__*/ _interop_require_default(require("./view/div/sizeable/left"));
var _css = /*#__PURE__*/ _interop_require_default(require("./view/div/container/css"));
var _html = /*#__PURE__*/ _interop_require_default(require("./view/div/container/html"));
var _left1 = /*#__PURE__*/ _interop_require_default(require("./view/div/tabButtons/left"));
var _right = /*#__PURE__*/ _interop_require_default(require("./view/div/tabButtons/right"));
var _preview = /*#__PURE__*/ _interop_require_default(require("./view/div/container/preview"));
var _markdown = /*#__PURE__*/ _interop_require_default(require("./view/div/container/markdown"));
var _css1 = /*#__PURE__*/ _interop_require_default(require("./view/textarea/parseTree/css"));
var _html1 = /*#__PURE__*/ _interop_require_default(require("./view/textarea/parseTree/html"));
var _plainText = /*#__PURE__*/ _interop_require_default(require("./view/div/container/plainText"));
var _markdownStyle = /*#__PURE__*/ _interop_require_default(require("./view/div/container/markdownStyle"));
var _constants = require("./constants");
var _importer = require("./importer");
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
function _construct(Parent, args, Class) {
    if (_is_native_reflect_construct()) {
        _construct = Reflect.construct;
    } else {
        _construct = function construct(Parent, args, Class) {
            var a = [
                null
            ];
            a.push.apply(a, args);
            var Constructor = Function.bind.apply(Parent, a);
            var instance = new Constructor();
            if (Class) _set_prototype_of(instance, Class.prototype);
            return instance;
        };
    }
    return _construct.apply(null, arguments);
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
function _define_property(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else {
        obj[key] = value;
    }
    return obj;
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
function _is_native_function(fn) {
    return Function.toString.call(fn).indexOf("[native code]") !== -1;
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
function _tagged_template_literal(strings, raw) {
    if (!raw) {
        raw = strings.slice(0);
    }
    return Object.freeze(Object.defineProperties(strings, {
        raw: {
            value: Object.freeze(raw)
        }
    }));
}
function _type_of(obj) {
    "@swc/helpers - typeof";
    return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
}
function _wrap_native_super(Class) {
    var _cache = typeof Map === "function" ? new Map() : undefined;
    _wrap_native_super = function wrapNativeSuper(Class) {
        if (Class === null || !_is_native_function(Class)) return Class;
        if (typeof Class !== "function") {
            throw new TypeError("Super expression must either be null or a function");
        }
        if (typeof _cache !== "undefined") {
            if (_cache.has(Class)) return _cache.get(Class);
            _cache.set(Class, Wrapper);
        }
        function Wrapper() {
            return _construct(Class, arguments, _get_prototype_of(this).constructor);
        }
        Wrapper.prototype = Object.create(Class.prototype, {
            constructor: {
                value: Wrapper,
                enumerable: false,
                writable: true,
                configurable: true
            }
        });
        return _set_prototype_of(Wrapper, Class);
    };
    return _wrap_native_super(Class);
}
function _is_native_reflect_construct() {
    try {
        var result = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
    } catch (_) {}
    return (_is_native_reflect_construct = function() {
        return !!result;
    })();
}
function _templateObject() {
    var data = _tagged_template_literal([
        "\n\n  padding: 1rem;\n  \n"
    ]);
    _templateObject = function _templateObject() {
        return data;
    };
    return data;
}
var tokensFromMarkdown = _index.domUtilities.tokensFromMarkdown, markdownNodeFromTokens = _index.domUtilities.markdownNodeFromTokens, tokensFromMarkdownStyle = _index.domUtilities.tokensFromMarkdownStyle, markdownStyleNodeFromTokens = _index.domUtilities.markdownStyleNodeFromTokens, topmostHTMLNodeFromMarkdownNode = _index.domUtilities.topmostHTMLNodeFromMarkdownNode, topmostCSSNodeFromMarkdownStyleNode = _index.domUtilities.topmostCSSNodeFromMarkdownStyleNode;
var View = /*#__PURE__*/ function(Element) {
    _inherits(View, Element);
    function View() {
        _class_call_check(this, View);
        var _this;
        _this = _call_super(this, View, arguments), _define_property(_this, "pageUpdateCustomHandler", function(event, element, index) {
            _this.updateHTML(index);
        }), _define_property(_this, "markdownStyleCustomHandler", function(event, element) {
            _this.markdownStyle();
        }), _define_property(_this, "markdownCustomHandler", function(event, element) {
            _this.markdown();
        }), _define_property(_this, "plainTextCustomHandler", function(event, element) {
            _this.plainText();
        }), _define_property(_this, "previewCustomHandler", function(event, element) {
            _this.preview();
        }), _define_property(_this, "keyUpCustomHandler", function(event, element) {
            _this.update();
        }), _define_property(_this, "htmlCustomHandler", function(event, element) {
            _this.html();
        }), _define_property(_this, "cssCustomHandler", function(event, element) {
            _this.css();
        });
        return _this;
    }
    _create_class(View, [
        {
            key: "update",
            value: function update() {
                this.updateMarkdownStyle();
                this.updateMarkdown();
                this.updateHTML();
                this.updateCSS();
            }
        },
        {
            key: "updateMarkdownStyle",
            value: function updateMarkdownStyle() {
                var markdownStyle;
                markdownStyle = this.getMarkdownStyle();
                var selectorsString = _constants.PREVIEW_SELECTORS_STRING;
                markdownStyle = "".concat(selectorsString, " {\n  ").concat(markdownStyle, "\n}");
                var tokens = tokensFromMarkdownStyle(markdownStyle), markdownStyleNode = markdownStyleNodeFromTokens(tokens);
                if (markdownStyleNode === null) {
                    this.resetMarkdownStyleTokens();
                    this.resetTopmostMarkdownStyleNode();
                    this.clearMarkdownStyleParseTreeTextarea();
                    return;
                }
                var node = markdownStyleNode, parseTree = node.asParseTree(tokens), markdownStyleTokens = tokens, topmostMarkdownStyleNode = node; ///
                this.setMarkdownStyleTokens(markdownStyleTokens);
                this.setTopmostMarkdownStyleNode(topmostMarkdownStyleNode);
                this.updateMarkdownStyleParseTreeTextarea(parseTree);
            }
        },
        {
            key: "updateMarkdown",
            value: function updateMarkdown() {
                var markdown = this.getMarkdown(), tokens = tokensFromMarkdown(markdown), markdownNode = markdownNodeFromTokens(tokens);
                if (markdownNode === null) {
                    this.resetMarkdownTokens();
                    this.resetTopmostMarkdownNode();
                    this.clearMarkdownParseTreeTextarea();
                    return;
                }
                var context;
                var topmostMarkdownNode = markdownNode; ///
                context = {
                    tokens: tokens,
                    importer: _importer.importer
                };
                topmostMarkdownNode.resolve(context);
                var topmostMarkdownNodeParseTree = topmostMarkdownNode.asParseTree(tokens), markdownParseTree = topmostMarkdownNodeParseTree, markdownTokens = tokens; ///
                this.setMarkdownTokens(markdownTokens);
                this.setTopmostMarkdownNode(topmostMarkdownNode);
                this.updateMarkdownParseTreeTextarea(markdownParseTree);
            }
        },
        {
            key: "updateHTML",
            value: function updateHTML() {
                var index = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 0;
                this.clearXMP();
                this.clearPreviewDiv();
                this.clearPlainTextTextarea();
                this.clearHTMLParseTreeTextarea();
                this.clearPageButtonsDiv();
                var topmostMarkdownNode = this.getTopmostMarkdownNode(), markdownNode = topmostMarkdownNode, topmostHTMLNode = topmostHTMLNodeFromMarkdownNode(markdownNode);
                if (topmostHTMLNode === null) {
                    return;
                }
                var context;
                var markdownTokens = this.getMarkdownTokens(), tokens = markdownTokens; ///
                context = {
                    indexOptions: _indexOptions.default,
                    tokens: tokens
                };
                topmostHTMLNode.resolve(context);
                var divisionHTMLNOde = topmostHTMLNode.getDivisionHTMLNodeAt(index);
                if (divisionHTMLNOde === null) {
                    return;
                }
                var divisionHTMLNOdeParseTree = divisionHTMLNOde.asParseTree(), htmlParseTree = divisionHTMLNOdeParseTree, multiplicity = topmostHTMLNode.getMultiplicity(), length = multiplicity;
                context = {
                    tokens: tokens,
                    pathToURL: pathToURL
                };
                this.updateXMP(divisionHTMLNOde, context);
                this.updatePreviewDiv(divisionHTMLNOde, context);
                this.updatePlainTextTextarea(divisionHTMLNOde, context);
                this.updateHTMLParseTreeTextarea(htmlParseTree);
                this.updatePageButtonsDiv(length, index);
            }
        },
        {
            key: "updateCSS",
            value: function updateCSS() {
                var topmostMarkdownStyleNode = this.getTopmostMarkdownStyleNode(), markdownStyleTokens = this.getMarkdownStyleTokens(), markdownStyleNode = topmostMarkdownStyleNode, topmostCSSNode = topmostCSSNodeFromMarkdownStyleNode(markdownStyleNode), tokens = markdownStyleTokens, context = {
                    tokens: tokens
                };
                topmostCSSNode.resolve(context);
                var topmostCSSNodeParseTree = topmostCSSNode.asParseTree(tokens), cssParseTree = topmostCSSNodeParseTree, css = topmostCSSNode.asCSS(context);
                this.updateCSSParseTreeTextarea(cssParseTree);
                this.setCSS(css);
            }
        },
        {
            key: "markdownStyle",
            value: function markdownStyle() {
                this.hideMarkdownContainerDiv();
                this.showMarkdownStyleContainerDiv();
            }
        },
        {
            key: "markdown",
            value: function markdown() {
                this.showMarkdownContainerDiv();
                this.hideMarkdownStyleContainerDiv();
            }
        },
        {
            key: "plainText",
            value: function plainText() {
                this.hideCSSContainerDiv();
                this.hideHTMLContainerDiv();
                this.hidePreviewContainerDiv();
                this.showPlainTextContainerDiv();
                this.hideCSSParseTreeTextarea();
                this.showHTMLParseTreeTextarea();
            }
        },
        {
            key: "preview",
            value: function preview() {
                this.hideCSSContainerDiv();
                this.hideHTMLContainerDiv();
                this.showPreviewContainerDiv();
                this.hidePlainTextContainerDiv();
                this.hideCSSParseTreeTextarea();
                this.showHTMLParseTreeTextarea();
            }
        },
        {
            key: "html",
            value: function html() {
                this.hideCSSContainerDiv();
                this.showHTMLContainerDiv();
                this.hidePreviewContainerDiv();
                this.hidePlainTextContainerDiv();
                this.hideCSSParseTreeTextarea();
                this.showHTMLParseTreeTextarea();
            }
        },
        {
            key: "css",
            value: function css() {
                this.showCSSContainerDiv();
                this.hideHTMLContainerDiv();
                this.hidePreviewContainerDiv();
                this.hidePlainTextContainerDiv();
                this.showCSSParseTreeTextarea();
                this.hideHTMLParseTreeTextarea();
            }
        },
        {
            key: "resetMarkdownTokens",
            value: function resetMarkdownTokens() {
                var markdownTokens = null;
                this.setMarkdownTokens(markdownTokens);
            }
        },
        {
            key: "resetMarkdownStyleTokens",
            value: function resetMarkdownStyleTokens() {
                var markdownStyleTokens = null;
                this.setMarkdownStyleTokens(markdownStyleTokens);
            }
        },
        {
            key: "resetTopmostMarkdownNode",
            value: function resetTopmostMarkdownNode() {
                var topmostMarkdownNode = null;
                this.setTopmostMarkdownNode(topmostMarkdownNode);
            }
        },
        {
            key: "resetTopmostMarkdownStyleNode",
            value: function resetTopmostMarkdownStyleNode() {
                var topmostMarkdownStyleNode = null;
                this.setTopmostMarkdownStyleNode(topmostMarkdownStyleNode);
            }
        },
        {
            key: "getMarkdownTokens",
            value: function getMarkdownTokens() {
                var markdownTokens = this.getState().markdownTokens;
                return markdownTokens;
            }
        },
        {
            key: "getMarkdownStyleTokens",
            value: function getMarkdownStyleTokens() {
                var markdownStyleTokens = this.getState().markdownStyleTokens;
                return markdownStyleTokens;
            }
        },
        {
            key: "getTopmostMarkdownNode",
            value: function getTopmostMarkdownNode() {
                var topmostMMarkdownNode = this.getState().topmostMMarkdownNode;
                return topmostMMarkdownNode;
            }
        },
        {
            key: "getTopmostMarkdownStyleNode",
            value: function getTopmostMarkdownStyleNode() {
                var topmostMMarkdownStyleNode = this.getState().topmostMMarkdownStyleNode;
                return topmostMMarkdownStyleNode;
            }
        },
        {
            key: "setMarkdownTokens",
            value: function setMarkdownTokens(markdownTokens) {
                this.updateState({
                    markdownTokens: markdownTokens
                });
            }
        },
        {
            key: "setMarkdownStyleTokens",
            value: function setMarkdownStyleTokens(markdownStyleTokens) {
                this.updateState({
                    markdownStyleTokens: markdownStyleTokens
                });
            }
        },
        {
            key: "setTopmostMarkdownNode",
            value: function setTopmostMarkdownNode(topmostMMarkdownNode) {
                this.updateState({
                    topmostMMarkdownNode: topmostMMarkdownNode
                });
            }
        },
        {
            key: "setTopmostMarkdownStyleNode",
            value: function setTopmostMarkdownStyleNode(topmostMMarkdownStyleNode) {
                this.updateState({
                    topmostMMarkdownStyleNode: topmostMMarkdownStyleNode
                });
            }
        },
        {
            key: "setInitialState",
            value: function setInitialState() {
                var markdownTokens = null, markdownStyleTokens = null, topmostMarkdownNode = null, topmostMarkdownStyleNode = null;
                this.setState({
                    markdownTokens: markdownTokens,
                    markdownStyleTokens: markdownStyleTokens,
                    topmostMarkdownNode: topmostMarkdownNode,
                    topmostMarkdownStyleNode: topmostMarkdownStyleNode
                });
            }
        },
        {
            key: "didMount",
            value: function didMount() {
                this.markdownStyle();
                this.css();
                this.update();
            }
        },
        {
            key: "willUnmount",
            value: function willUnmount() {
            ///
            }
        },
        {
            key: "childElements",
            value: function childElements() {
                return /*#__PURE__*/ React.createElement(_easylayout.ColumnsDiv, null, /*#__PURE__*/ React.createElement(_left.default, null, /*#__PURE__*/ React.createElement(_left1.default, {
                    onCustomMarkdown: this.markdownCustomHandler,
                    onCustomMarkdownStyle: this.markdownStyleCustomHandler
                }), /*#__PURE__*/ React.createElement(_markdown.default, {
                    onCustomKeyUp: this.keyUpCustomHandler
                }), /*#__PURE__*/ React.createElement(_markdownStyle.default, {
                    onCustomKeyUp: this.keyUpCustomHandler
                })), /*#__PURE__*/ React.createElement(_easylayout.VerticalSplitterDiv, null), /*#__PURE__*/ React.createElement(_easylayout.ColumnDiv, null, /*#__PURE__*/ React.createElement(_easylayout.RowsDiv, null, /*#__PURE__*/ React.createElement(_right.default, {
                    onCustomCSS: this.cssCustomHandler,
                    onCustomHTML: this.htmlCustomHandler,
                    onCustomPreview: this.previewCustomHandler,
                    onCustomPlainText: this.plainTextCustomHandler
                }), /*#__PURE__*/ React.createElement(_pageButtons.default, {
                    onCustomPageUpdate: this.pageUpdateCustomHandler
                }), /*#__PURE__*/ React.createElement(_css.default, null), /*#__PURE__*/ React.createElement(_html.default, null), /*#__PURE__*/ React.createElement(_preview.default, null), /*#__PURE__*/ React.createElement(_plainText.default, null), /*#__PURE__*/ React.createElement(_html1.default, null), /*#__PURE__*/ React.createElement(_css1.default, null))));
            }
        },
        {
            key: "initialise",
            value: function initialise() {
                this.assignContext();
                this.setInitialState();
                var _this_constructor = this.constructor, _$initialMarkdown = _this_constructor.initialMarkdown, initialMarkdownStyle = _this_constructor.initialMarkdownStyle, markdownStyle = initialMarkdownStyle, markdown = _$initialMarkdown; ///
                this.setMarkdownStyle(markdownStyle);
                this.setMarkdown(markdown);
            }
        }
    ]);
    return View;
}(_wrap_native_super(_easy.Element));
_define_property(View, "initialMarkdown", _importer.initialMarkdown);
_define_property(View, "initialMarkdownStyle", "primaryHeading {\n  font-size: 32pt;\n}\n");
_define_property(View, "tagName", "div");
_define_property(View, "ignoredProperties", [
    "markdownStyleElement"
]);
_define_property(View, "defaultProperties", {
    className: "view"
});
var _default = (0, _easywithstyle.default)(View)(_templateObject());
function pathToURL(path) {
    var url = "https://static.djalbat.com/".concat(path);
    return url;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9leGFtcGxlL3ZpZXcuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB3aXRoU3R5bGUgZnJvbSBcImVhc3ktd2l0aC1zdHlsZVwiOyAgLy8vXG5cbmltcG9ydCB7IEVsZW1lbnQgfSBmcm9tIFwiZWFzeVwiO1xuaW1wb3J0IHsgZG9tVXRpbGl0aWVzIH0gZnJvbSBcIi4uL2luZGV4XCI7ICAvLy9cbmltcG9ydCB7IFJvd3NEaXYsIENvbHVtbkRpdiwgQ29sdW1uc0RpdiwgVmVydGljYWxTcGxpdHRlckRpdiB9IGZyb20gXCJlYXN5LWxheW91dFwiO1xuXG5pbXBvcnQgaW5kZXhPcHRpb25zIGZyb20gXCIuL2luZGV4T3B0aW9uc1wiO1xuaW1wb3J0IFBhZ2VCdXR0b25zRGl2IGZyb20gXCIuL3ZpZXcvZGl2L3BhZ2VCdXR0b25zXCI7XG5pbXBvcnQgTGVmdFNpemVhYmxlRGl2IGZyb20gXCIuL3ZpZXcvZGl2L3NpemVhYmxlL2xlZnRcIjtcbmltcG9ydCBDU1NDb250YWluZXJEaXYgZnJvbSBcIi4vdmlldy9kaXYvY29udGFpbmVyL2Nzc1wiO1xuaW1wb3J0IEhUTUxDb250YWluZXJEaXYgZnJvbSBcIi4vdmlldy9kaXYvY29udGFpbmVyL2h0bWxcIjtcbmltcG9ydCBMZWZ0VGFiQnV0dG9uc0RpdiBmcm9tIFwiLi92aWV3L2Rpdi90YWJCdXR0b25zL2xlZnRcIjtcbmltcG9ydCBSaWdodFRhYkJ1dHRvbnNEaXYgZnJvbSBcIi4vdmlldy9kaXYvdGFiQnV0dG9ucy9yaWdodFwiO1xuaW1wb3J0IFByZXZpZXdDb250YWluZXJEaXYgZnJvbSBcIi4vdmlldy9kaXYvY29udGFpbmVyL3ByZXZpZXdcIjtcbmltcG9ydCBNYXJrZG93bkNvbnRhaW5lckRpdiBmcm9tIFwiLi92aWV3L2Rpdi9jb250YWluZXIvbWFya2Rvd25cIjtcbmltcG9ydCBDU1NQYXJzZVRyZWVUZXh0YXJlYSBmcm9tIFwiLi92aWV3L3RleHRhcmVhL3BhcnNlVHJlZS9jc3NcIjtcbmltcG9ydCBIVE1MUGFyc2VUcmVlVGV4dGFyZWEgZnJvbSBcIi4vdmlldy90ZXh0YXJlYS9wYXJzZVRyZWUvaHRtbFwiO1xuaW1wb3J0IFBsYWluVGV4dENvbnRhaW5lckRpdiBmcm9tIFwiLi92aWV3L2Rpdi9jb250YWluZXIvcGxhaW5UZXh0XCI7XG5pbXBvcnQgTWFya2Rvd25TdHlsZUNvbnRhaW5lckRpdiBmcm9tIFwiLi92aWV3L2Rpdi9jb250YWluZXIvbWFya2Rvd25TdHlsZVwiO1xuXG5pbXBvcnQgeyBQUkVWSUVXX1NFTEVDVE9SU19TVFJJTkcgfSBmcm9tIFwiLi9jb25zdGFudHNcIjtcbmltcG9ydCB7IGltcG9ydGVyLCBpbml0aWFsTWFya2Rvd24gfSBmcm9tIFwiLi9pbXBvcnRlclwiO1xuXG5jb25zdCB7IHRva2Vuc0Zyb21NYXJrZG93bixcbiAgICAgICAgbWFya2Rvd25Ob2RlRnJvbVRva2VucyxcbiAgICAgICAgdG9rZW5zRnJvbU1hcmtkb3duU3R5bGUsXG4gICAgICAgIG1hcmtkb3duU3R5bGVOb2RlRnJvbVRva2VucyxcbiAgICAgICAgdG9wbW9zdEhUTUxOb2RlRnJvbU1hcmtkb3duTm9kZSxcbiAgICAgICAgdG9wbW9zdENTU05vZGVGcm9tTWFya2Rvd25TdHlsZU5vZGUgfSA9IGRvbVV0aWxpdGllcztcblxuY2xhc3MgVmlldyBleHRlbmRzIEVsZW1lbnQge1xuICBwYWdlVXBkYXRlQ3VzdG9tSGFuZGxlciA9IChldmVudCwgZWxlbWVudCwgaW5kZXgpID0+IHtcbiAgICB0aGlzLnVwZGF0ZUhUTUwoaW5kZXgpO1xuICB9XG5cbiAgbWFya2Rvd25TdHlsZUN1c3RvbUhhbmRsZXIgPSAoZXZlbnQsIGVsZW1lbnQpID0+IHtcbiAgICB0aGlzLm1hcmtkb3duU3R5bGUoKTtcbiAgfVxuXG4gIG1hcmtkb3duQ3VzdG9tSGFuZGxlciA9IChldmVudCwgZWxlbWVudCkgPT4ge1xuICAgIHRoaXMubWFya2Rvd24oKTtcbiAgfVxuXG4gIHBsYWluVGV4dEN1c3RvbUhhbmRsZXIgPSAoZXZlbnQsIGVsZW1lbnQpID0+IHtcbiAgICB0aGlzLnBsYWluVGV4dCgpO1xuICB9XG5cbiAgcHJldmlld0N1c3RvbUhhbmRsZXIgPSAoZXZlbnQsIGVsZW1lbnQpID0+IHtcbiAgICB0aGlzLnByZXZpZXcoKTtcbiAgfVxuXG4gIGtleVVwQ3VzdG9tSGFuZGxlciA9IChldmVudCwgZWxlbWVudCkgPT4ge1xuICAgIHRoaXMudXBkYXRlKCk7XG4gIH1cblxuICBodG1sQ3VzdG9tSGFuZGxlciA9IChldmVudCwgZWxlbWVudCkgPT4ge1xuICAgIHRoaXMuaHRtbCgpO1xuICB9XG5cbiAgY3NzQ3VzdG9tSGFuZGxlciA9IChldmVudCwgZWxlbWVudCkgPT4ge1xuICAgIHRoaXMuY3NzKCk7XG4gIH1cblxuICB1cGRhdGUoKSB7XG4gICAgdGhpcy51cGRhdGVNYXJrZG93blN0eWxlKCk7XG5cbiAgICB0aGlzLnVwZGF0ZU1hcmtkb3duKCk7XG5cbiAgICB0aGlzLnVwZGF0ZUhUTUwoKTtcblxuICAgIHRoaXMudXBkYXRlQ1NTKCk7XG4gIH1cblxuICB1cGRhdGVNYXJrZG93blN0eWxlKCkge1xuICAgIGxldCBtYXJrZG93blN0eWxlO1xuXG4gICAgbWFya2Rvd25TdHlsZSA9IHRoaXMuZ2V0TWFya2Rvd25TdHlsZSgpO1xuXG4gICAgY29uc3Qgc2VsZWN0b3JzU3RyaW5nID0gUFJFVklFV19TRUxFQ1RPUlNfU1RSSU5HXG5cbiAgICBtYXJrZG93blN0eWxlID0gYCR7c2VsZWN0b3JzU3RyaW5nfSB7XG4gICR7bWFya2Rvd25TdHlsZX1cbn1gO1xuXG4gICAgY29uc3QgdG9rZW5zID0gdG9rZW5zRnJvbU1hcmtkb3duU3R5bGUobWFya2Rvd25TdHlsZSksXG4gICAgICAgICAgbWFya2Rvd25TdHlsZU5vZGUgPSBtYXJrZG93blN0eWxlTm9kZUZyb21Ub2tlbnModG9rZW5zKTtcblxuICAgIGlmIChtYXJrZG93blN0eWxlTm9kZSA9PT0gbnVsbCkge1xuICAgICAgdGhpcy5yZXNldE1hcmtkb3duU3R5bGVUb2tlbnMoKTtcblxuICAgICAgdGhpcy5yZXNldFRvcG1vc3RNYXJrZG93blN0eWxlTm9kZSgpO1xuXG4gICAgICB0aGlzLmNsZWFyTWFya2Rvd25TdHlsZVBhcnNlVHJlZVRleHRhcmVhKCk7XG5cbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBub2RlID0gbWFya2Rvd25TdHlsZU5vZGUsIC8vL1xuICAgICAgICAgIHBhcnNlVHJlZSA9IG5vZGUuYXNQYXJzZVRyZWUodG9rZW5zKSxcbiAgICAgICAgICBtYXJrZG93blN0eWxlVG9rZW5zID0gdG9rZW5zLCAvLy9cbiAgICAgICAgICB0b3Btb3N0TWFya2Rvd25TdHlsZU5vZGUgPSBub2RlOyAvLy9cblxuICAgIHRoaXMuc2V0TWFya2Rvd25TdHlsZVRva2VucyhtYXJrZG93blN0eWxlVG9rZW5zKTtcblxuICAgIHRoaXMuc2V0VG9wbW9zdE1hcmtkb3duU3R5bGVOb2RlKHRvcG1vc3RNYXJrZG93blN0eWxlTm9kZSk7XG5cbiAgICB0aGlzLnVwZGF0ZU1hcmtkb3duU3R5bGVQYXJzZVRyZWVUZXh0YXJlYShwYXJzZVRyZWUpO1xuICB9XG5cbiAgdXBkYXRlTWFya2Rvd24oKSB7XG4gICAgY29uc3QgbWFya2Rvd24gPSB0aGlzLmdldE1hcmtkb3duKCksXG4gICAgICAgICAgdG9rZW5zID0gdG9rZW5zRnJvbU1hcmtkb3duKG1hcmtkb3duKSxcbiAgICAgICAgICBtYXJrZG93bk5vZGUgPSBtYXJrZG93bk5vZGVGcm9tVG9rZW5zKHRva2Vucyk7XG5cbiAgICBpZiAobWFya2Rvd25Ob2RlID09PSBudWxsKSB7XG4gICAgICB0aGlzLnJlc2V0TWFya2Rvd25Ub2tlbnMoKTtcblxuICAgICAgdGhpcy5yZXNldFRvcG1vc3RNYXJrZG93bk5vZGUoKTtcblxuICAgICAgdGhpcy5jbGVhck1hcmtkb3duUGFyc2VUcmVlVGV4dGFyZWEoKTtcblxuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGxldCBjb250ZXh0O1xuXG4gICAgY29uc3QgdG9wbW9zdE1hcmtkb3duTm9kZSA9IG1hcmtkb3duTm9kZTsgLy8vXG5cbiAgICBjb250ZXh0ID0ge1xuICAgICAgdG9rZW5zLFxuICAgICAgaW1wb3J0ZXJcbiAgICB9O1xuXG4gICAgdG9wbW9zdE1hcmtkb3duTm9kZS5yZXNvbHZlKGNvbnRleHQpO1xuXG4gICAgY29uc3QgdG9wbW9zdE1hcmtkb3duTm9kZVBhcnNlVHJlZSA9IHRvcG1vc3RNYXJrZG93bk5vZGUuYXNQYXJzZVRyZWUodG9rZW5zKSxcbiAgICAgICAgICBtYXJrZG93blBhcnNlVHJlZSA9IHRvcG1vc3RNYXJrZG93bk5vZGVQYXJzZVRyZWUsIC8vL1xuICAgICAgICAgIG1hcmtkb3duVG9rZW5zID0gdG9rZW5zOyAgLy8vXG5cbiAgICB0aGlzLnNldE1hcmtkb3duVG9rZW5zKG1hcmtkb3duVG9rZW5zKTtcblxuICAgIHRoaXMuc2V0VG9wbW9zdE1hcmtkb3duTm9kZSh0b3Btb3N0TWFya2Rvd25Ob2RlKTtcblxuICAgIHRoaXMudXBkYXRlTWFya2Rvd25QYXJzZVRyZWVUZXh0YXJlYShtYXJrZG93blBhcnNlVHJlZSk7XG4gIH1cblxuICB1cGRhdGVIVE1MKGluZGV4ID0gMCkge1xuICAgIHRoaXMuY2xlYXJYTVAoKTtcblxuICAgIHRoaXMuY2xlYXJQcmV2aWV3RGl2KCk7XG5cbiAgICB0aGlzLmNsZWFyUGxhaW5UZXh0VGV4dGFyZWEoKTtcblxuICAgIHRoaXMuY2xlYXJIVE1MUGFyc2VUcmVlVGV4dGFyZWEoKTtcblxuICAgIHRoaXMuY2xlYXJQYWdlQnV0dG9uc0RpdigpO1xuXG4gICAgY29uc3QgdG9wbW9zdE1hcmtkb3duTm9kZSA9IHRoaXMuZ2V0VG9wbW9zdE1hcmtkb3duTm9kZSgpLFxuICAgICAgICAgIG1hcmtkb3duTm9kZSA9IHRvcG1vc3RNYXJrZG93bk5vZGUsIC8vL1xuICAgICAgICAgIHRvcG1vc3RIVE1MTm9kZSA9IHRvcG1vc3RIVE1MTm9kZUZyb21NYXJrZG93bk5vZGUobWFya2Rvd25Ob2RlKTtcblxuICAgIGlmICh0b3Btb3N0SFRNTE5vZGUgPT09IG51bGwpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBsZXQgY29udGV4dDtcblxuICAgIGNvbnN0IG1hcmtkb3duVG9rZW5zID0gdGhpcy5nZXRNYXJrZG93blRva2VucygpLFxuICAgICAgICAgIHRva2VucyA9IG1hcmtkb3duVG9rZW5zOyAgLy8vXG5cbiAgICBjb250ZXh0ID0ge1xuICAgICAgaW5kZXhPcHRpb25zLFxuICAgICAgdG9rZW5zXG4gICAgfTtcblxuICAgIHRvcG1vc3RIVE1MTm9kZS5yZXNvbHZlKGNvbnRleHQpO1xuXG4gICAgY29uc3QgZGl2aXNpb25IVE1MTk9kZSA9IHRvcG1vc3RIVE1MTm9kZS5nZXREaXZpc2lvbkhUTUxOb2RlQXQoaW5kZXgpO1xuXG4gICAgaWYgKGRpdmlzaW9uSFRNTE5PZGUgPT09IG51bGwpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBkaXZpc2lvbkhUTUxOT2RlUGFyc2VUcmVlID0gZGl2aXNpb25IVE1MTk9kZS5hc1BhcnNlVHJlZSgpLFxuICAgICAgICAgIGh0bWxQYXJzZVRyZWUgPSBkaXZpc2lvbkhUTUxOT2RlUGFyc2VUcmVlLCAgLy8vXG4gICAgICAgICAgbXVsdGlwbGljaXR5ID0gdG9wbW9zdEhUTUxOb2RlLmdldE11bHRpcGxpY2l0eSgpLFxuICAgICAgICAgIGxlbmd0aCA9IG11bHRpcGxpY2l0eTtcblxuICAgIGNvbnRleHQgPSB7XG4gICAgICB0b2tlbnMsXG4gICAgICBwYXRoVG9VUkxcbiAgICB9O1xuXG4gICAgdGhpcy51cGRhdGVYTVAoZGl2aXNpb25IVE1MTk9kZSwgY29udGV4dCk7XG5cbiAgICB0aGlzLnVwZGF0ZVByZXZpZXdEaXYoZGl2aXNpb25IVE1MTk9kZSwgY29udGV4dCk7XG5cbiAgICB0aGlzLnVwZGF0ZVBsYWluVGV4dFRleHRhcmVhKGRpdmlzaW9uSFRNTE5PZGUsIGNvbnRleHQpO1xuXG4gICAgdGhpcy51cGRhdGVIVE1MUGFyc2VUcmVlVGV4dGFyZWEoaHRtbFBhcnNlVHJlZSk7XG5cbiAgICB0aGlzLnVwZGF0ZVBhZ2VCdXR0b25zRGl2KGxlbmd0aCwgaW5kZXgpO1xuICB9XG5cbiAgdXBkYXRlQ1NTKCkge1xuICAgIGNvbnN0IHRvcG1vc3RNYXJrZG93blN0eWxlTm9kZSA9IHRoaXMuZ2V0VG9wbW9zdE1hcmtkb3duU3R5bGVOb2RlKCksXG4gICAgICAgICAgbWFya2Rvd25TdHlsZVRva2VucyA9IHRoaXMuZ2V0TWFya2Rvd25TdHlsZVRva2VucygpLFxuICAgICAgICAgIG1hcmtkb3duU3R5bGVOb2RlID0gdG9wbW9zdE1hcmtkb3duU3R5bGVOb2RlLCAvLy9cbiAgICAgICAgICB0b3Btb3N0Q1NTTm9kZSA9IHRvcG1vc3RDU1NOb2RlRnJvbU1hcmtkb3duU3R5bGVOb2RlKG1hcmtkb3duU3R5bGVOb2RlKSxcbiAgICAgICAgICB0b2tlbnMgPSBtYXJrZG93blN0eWxlVG9rZW5zLCAvLy9cbiAgICAgICAgICBjb250ZXh0ID0ge1xuICAgICAgICAgICAgdG9rZW5zXG4gICAgICAgICAgfTtcblxuICAgIHRvcG1vc3RDU1NOb2RlLnJlc29sdmUoY29udGV4dCk7XG5cbiAgICBjb25zdCB0b3Btb3N0Q1NTTm9kZVBhcnNlVHJlZSA9IHRvcG1vc3RDU1NOb2RlLmFzUGFyc2VUcmVlKHRva2VucyksXG4gICAgICAgICAgY3NzUGFyc2VUcmVlID0gdG9wbW9zdENTU05vZGVQYXJzZVRyZWUsIC8vL1xuICAgICAgICAgIGNzcyA9IHRvcG1vc3RDU1NOb2RlLmFzQ1NTKGNvbnRleHQpO1xuXG4gICAgdGhpcy51cGRhdGVDU1NQYXJzZVRyZWVUZXh0YXJlYShjc3NQYXJzZVRyZWUpO1xuXG4gICAgdGhpcy5zZXRDU1MoY3NzKTtcbiAgfVxuXG4gIG1hcmtkb3duU3R5bGUoKSB7XG4gICAgdGhpcy5oaWRlTWFya2Rvd25Db250YWluZXJEaXYoKTtcbiAgICB0aGlzLnNob3dNYXJrZG93blN0eWxlQ29udGFpbmVyRGl2KCk7XG4gIH1cblxuICBtYXJrZG93bigpIHtcbiAgICB0aGlzLnNob3dNYXJrZG93bkNvbnRhaW5lckRpdigpO1xuICAgIHRoaXMuaGlkZU1hcmtkb3duU3R5bGVDb250YWluZXJEaXYoKTtcbiAgfVxuXG4gIHBsYWluVGV4dCgpIHtcbiAgICB0aGlzLmhpZGVDU1NDb250YWluZXJEaXYoKTtcbiAgICB0aGlzLmhpZGVIVE1MQ29udGFpbmVyRGl2KCk7XG4gICAgdGhpcy5oaWRlUHJldmlld0NvbnRhaW5lckRpdigpO1xuICAgIHRoaXMuc2hvd1BsYWluVGV4dENvbnRhaW5lckRpdigpO1xuXG4gICAgdGhpcy5oaWRlQ1NTUGFyc2VUcmVlVGV4dGFyZWEoKTtcbiAgICB0aGlzLnNob3dIVE1MUGFyc2VUcmVlVGV4dGFyZWEoKTtcbiAgfVxuXG4gIHByZXZpZXcoKSB7XG4gICAgdGhpcy5oaWRlQ1NTQ29udGFpbmVyRGl2KCk7XG4gICAgdGhpcy5oaWRlSFRNTENvbnRhaW5lckRpdigpO1xuICAgIHRoaXMuc2hvd1ByZXZpZXdDb250YWluZXJEaXYoKTtcbiAgICB0aGlzLmhpZGVQbGFpblRleHRDb250YWluZXJEaXYoKTtcblxuICAgIHRoaXMuaGlkZUNTU1BhcnNlVHJlZVRleHRhcmVhKCk7XG4gICAgdGhpcy5zaG93SFRNTFBhcnNlVHJlZVRleHRhcmVhKCk7XG4gIH1cblxuICBodG1sKCkge1xuICAgIHRoaXMuaGlkZUNTU0NvbnRhaW5lckRpdigpO1xuICAgIHRoaXMuc2hvd0hUTUxDb250YWluZXJEaXYoKTtcbiAgICB0aGlzLmhpZGVQcmV2aWV3Q29udGFpbmVyRGl2KCk7XG4gICAgdGhpcy5oaWRlUGxhaW5UZXh0Q29udGFpbmVyRGl2KCk7XG5cbiAgICB0aGlzLmhpZGVDU1NQYXJzZVRyZWVUZXh0YXJlYSgpO1xuICAgIHRoaXMuc2hvd0hUTUxQYXJzZVRyZWVUZXh0YXJlYSgpO1xuICB9XG5cbiAgY3NzKCkge1xuICAgIHRoaXMuc2hvd0NTU0NvbnRhaW5lckRpdigpO1xuICAgIHRoaXMuaGlkZUhUTUxDb250YWluZXJEaXYoKTtcbiAgICB0aGlzLmhpZGVQcmV2aWV3Q29udGFpbmVyRGl2KCk7XG4gICAgdGhpcy5oaWRlUGxhaW5UZXh0Q29udGFpbmVyRGl2KCk7XG5cbiAgICB0aGlzLnNob3dDU1NQYXJzZVRyZWVUZXh0YXJlYSgpO1xuICAgIHRoaXMuaGlkZUhUTUxQYXJzZVRyZWVUZXh0YXJlYSgpO1xuICB9XG5cbiAgcmVzZXRNYXJrZG93blRva2VucygpIHtcbiAgICBjb25zdCBtYXJrZG93blRva2VucyA9IG51bGw7XG5cbiAgICB0aGlzLnNldE1hcmtkb3duVG9rZW5zKG1hcmtkb3duVG9rZW5zKTtcbiAgfVxuXG4gIHJlc2V0TWFya2Rvd25TdHlsZVRva2VucygpIHtcbiAgICBjb25zdCBtYXJrZG93blN0eWxlVG9rZW5zID0gbnVsbDtcblxuICAgIHRoaXMuc2V0TWFya2Rvd25TdHlsZVRva2VucyhtYXJrZG93blN0eWxlVG9rZW5zKTtcbiAgfVxuXG4gIHJlc2V0VG9wbW9zdE1hcmtkb3duTm9kZSgpIHtcbiAgICBjb25zdCB0b3Btb3N0TWFya2Rvd25Ob2RlID0gbnVsbDtcblxuICAgIHRoaXMuc2V0VG9wbW9zdE1hcmtkb3duTm9kZSh0b3Btb3N0TWFya2Rvd25Ob2RlKTtcbiAgfVxuXG4gIHJlc2V0VG9wbW9zdE1hcmtkb3duU3R5bGVOb2RlKCkge1xuICAgIGNvbnN0IHRvcG1vc3RNYXJrZG93blN0eWxlTm9kZSA9IG51bGw7XG5cbiAgICB0aGlzLnNldFRvcG1vc3RNYXJrZG93blN0eWxlTm9kZSh0b3Btb3N0TWFya2Rvd25TdHlsZU5vZGUpO1xuICB9XG5cbiAgZ2V0TWFya2Rvd25Ub2tlbnMoKSB7XG4gICAgY29uc3QgeyBtYXJrZG93blRva2VucyB9ID0gdGhpcy5nZXRTdGF0ZSgpO1xuXG4gICAgcmV0dXJuIG1hcmtkb3duVG9rZW5zO1xuICB9XG5cbiAgZ2V0TWFya2Rvd25TdHlsZVRva2VucygpIHtcbiAgICBjb25zdCB7IG1hcmtkb3duU3R5bGVUb2tlbnMgfSA9IHRoaXMuZ2V0U3RhdGUoKTtcblxuICAgIHJldHVybiBtYXJrZG93blN0eWxlVG9rZW5zO1xuICB9XG5cbiAgZ2V0VG9wbW9zdE1hcmtkb3duTm9kZSgpIHtcbiAgICBjb25zdCB7IHRvcG1vc3RNTWFya2Rvd25Ob2RlIH0gPSB0aGlzLmdldFN0YXRlKCk7XG5cbiAgICByZXR1cm4gdG9wbW9zdE1NYXJrZG93bk5vZGU7XG4gIH1cblxuICBnZXRUb3Btb3N0TWFya2Rvd25TdHlsZU5vZGUoKSB7XG4gICAgY29uc3QgeyB0b3Btb3N0TU1hcmtkb3duU3R5bGVOb2RlIH0gPSB0aGlzLmdldFN0YXRlKCk7XG5cbiAgICByZXR1cm4gdG9wbW9zdE1NYXJrZG93blN0eWxlTm9kZTtcbiAgfVxuXG4gIHNldE1hcmtkb3duVG9rZW5zKG1hcmtkb3duVG9rZW5zKSB7XG4gICAgdGhpcy51cGRhdGVTdGF0ZSh7XG4gICAgICBtYXJrZG93blRva2Vuc1xuICAgIH0pO1xuICB9XG5cbiAgc2V0TWFya2Rvd25TdHlsZVRva2VucyhtYXJrZG93blN0eWxlVG9rZW5zKSB7XG4gICAgdGhpcy51cGRhdGVTdGF0ZSh7XG4gICAgICBtYXJrZG93blN0eWxlVG9rZW5zXG4gICAgfSk7XG4gIH1cblxuICBzZXRUb3Btb3N0TWFya2Rvd25Ob2RlKHRvcG1vc3RNTWFya2Rvd25Ob2RlKSB7XG4gICAgdGhpcy51cGRhdGVTdGF0ZSh7XG4gICAgICB0b3Btb3N0TU1hcmtkb3duTm9kZVxuICAgIH0pO1xuICB9XG5cbiAgc2V0VG9wbW9zdE1hcmtkb3duU3R5bGVOb2RlKHRvcG1vc3RNTWFya2Rvd25TdHlsZU5vZGUpIHtcbiAgICB0aGlzLnVwZGF0ZVN0YXRlKHtcbiAgICAgIHRvcG1vc3RNTWFya2Rvd25TdHlsZU5vZGVcbiAgICB9KTtcbiAgfVxuXG4gIHNldEluaXRpYWxTdGF0ZSgpIHtcbiAgICBjb25zdCBtYXJrZG93blRva2VucyA9IG51bGwsXG4gICAgICAgICAgbWFya2Rvd25TdHlsZVRva2VucyA9IG51bGwsXG4gICAgICAgICAgdG9wbW9zdE1hcmtkb3duTm9kZSA9IG51bGwsXG4gICAgICAgICAgdG9wbW9zdE1hcmtkb3duU3R5bGVOb2RlID0gbnVsbDtcblxuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgbWFya2Rvd25Ub2tlbnMsXG4gICAgICBtYXJrZG93blN0eWxlVG9rZW5zLFxuICAgICAgdG9wbW9zdE1hcmtkb3duTm9kZSxcbiAgICAgIHRvcG1vc3RNYXJrZG93blN0eWxlTm9kZVxuICAgIH0pO1xuICB9XG5cbiAgZGlkTW91bnQoKSB7XG4gICAgdGhpcy5tYXJrZG93blN0eWxlKCk7XG5cbiAgICB0aGlzLmNzcygpO1xuXG4gICAgdGhpcy51cGRhdGUoKTtcbiAgfVxuXG4gIHdpbGxVbm1vdW50KCkge1xuICAgIC8vL1xuICB9XG5cbiAgY2hpbGRFbGVtZW50cygpIHtcbiAgICByZXR1cm4gKFxuXG4gICAgICA8Q29sdW1uc0Rpdj5cbiAgICAgICAgPExlZnRTaXplYWJsZURpdj5cbiAgICAgICAgICA8TGVmdFRhYkJ1dHRvbnNEaXYgb25DdXN0b21NYXJrZG93bj17dGhpcy5tYXJrZG93bkN1c3RvbUhhbmRsZXJ9IG9uQ3VzdG9tTWFya2Rvd25TdHlsZT17dGhpcy5tYXJrZG93blN0eWxlQ3VzdG9tSGFuZGxlcn0gLz5cbiAgICAgICAgICA8TWFya2Rvd25Db250YWluZXJEaXYgb25DdXN0b21LZXlVcD17dGhpcy5rZXlVcEN1c3RvbUhhbmRsZXJ9IC8+XG4gICAgICAgICAgPE1hcmtkb3duU3R5bGVDb250YWluZXJEaXYgb25DdXN0b21LZXlVcD17dGhpcy5rZXlVcEN1c3RvbUhhbmRsZXJ9IC8+XG4gICAgICAgIDwvTGVmdFNpemVhYmxlRGl2PlxuICAgICAgICA8VmVydGljYWxTcGxpdHRlckRpdi8+XG4gICAgICAgIDxDb2x1bW5EaXY+XG4gICAgICAgICAgPFJvd3NEaXY+XG4gICAgICAgICAgICA8UmlnaHRUYWJCdXR0b25zRGl2IG9uQ3VzdG9tQ1NTPXt0aGlzLmNzc0N1c3RvbUhhbmRsZXJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ3VzdG9tSFRNTD17dGhpcy5odG1sQ3VzdG9tSGFuZGxlcn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DdXN0b21QcmV2aWV3PXt0aGlzLnByZXZpZXdDdXN0b21IYW5kbGVyfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkN1c3RvbVBsYWluVGV4dD17dGhpcy5wbGFpblRleHRDdXN0b21IYW5kbGVyfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxQYWdlQnV0dG9uc0RpdiBvbkN1c3RvbVBhZ2VVcGRhdGU9e3RoaXMucGFnZVVwZGF0ZUN1c3RvbUhhbmRsZXJ9IC8+XG4gICAgICAgICAgICA8Q1NTQ29udGFpbmVyRGl2Lz5cbiAgICAgICAgICAgIDxIVE1MQ29udGFpbmVyRGl2Lz5cbiAgICAgICAgICAgIDxQcmV2aWV3Q29udGFpbmVyRGl2Lz5cbiAgICAgICAgICAgIDxQbGFpblRleHRDb250YWluZXJEaXYvPlxuICAgICAgICAgICAgPEhUTUxQYXJzZVRyZWVUZXh0YXJlYS8+XG4gICAgICAgICAgICA8Q1NTUGFyc2VUcmVlVGV4dGFyZWEvPlxuICAgICAgICAgIDwvUm93c0Rpdj5cbiAgICAgICAgPC9Db2x1bW5EaXY+XG4gICAgICA8L0NvbHVtbnNEaXY+XG5cbiAgICApO1xuICB9XG5cbiAgaW5pdGlhbGlzZSgpIHtcbiAgICB0aGlzLmFzc2lnbkNvbnRleHQoKTtcblxuICAgIHRoaXMuc2V0SW5pdGlhbFN0YXRlKCk7XG5cbiAgICBjb25zdCB7IGluaXRpYWxNYXJrZG93biwgaW5pdGlhbE1hcmtkb3duU3R5bGUgfSA9IHRoaXMuY29uc3RydWN0b3IsXG4gICAgICAgICAgbWFya2Rvd25TdHlsZSA9IGluaXRpYWxNYXJrZG93blN0eWxlLCAvLy9cbiAgICAgICAgICBtYXJrZG93biA9IGluaXRpYWxNYXJrZG93bjsgLy8vXG5cbiAgICB0aGlzLnNldE1hcmtkb3duU3R5bGUobWFya2Rvd25TdHlsZSk7XG5cbiAgICB0aGlzLnNldE1hcmtkb3duKG1hcmtkb3duKTtcbiAgfVxuXG4gIHN0YXRpYyBpbml0aWFsTWFya2Rvd24gPSBpbml0aWFsTWFya2Rvd247XG5cbiAgc3RhdGljIGluaXRpYWxNYXJrZG93blN0eWxlID0gYHByaW1hcnlIZWFkaW5nIHtcbiAgZm9udC1zaXplOiAzMnB0O1xufVxuYDtcblxuICBzdGF0aWMgdGFnTmFtZSA9IFwiZGl2XCI7XG5cbiAgc3RhdGljIGlnbm9yZWRQcm9wZXJ0aWVzID0gW1xuICAgIFwibWFya2Rvd25TdHlsZUVsZW1lbnRcIlxuICBdO1xuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcGVydGllcyA9IHtcbiAgICBjbGFzc05hbWU6IFwidmlld1wiXG4gIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhTdHlsZShWaWV3KWBcblxuICBwYWRkaW5nOiAxcmVtO1xuICBcbmA7XG5cbmZ1bmN0aW9uIHBhdGhUb1VSTChwYXRoKSB7XG4gIGNvbnN0IHVybCA9IGBodHRwczovL3N0YXRpYy5kamFsYmF0LmNvbS8ke3BhdGh9YDtcblxuICByZXR1cm4gdXJsO1xufVxuIl0sIm5hbWVzIjpbInRva2Vuc0Zyb21NYXJrZG93biIsImRvbVV0aWxpdGllcyIsIm1hcmtkb3duTm9kZUZyb21Ub2tlbnMiLCJ0b2tlbnNGcm9tTWFya2Rvd25TdHlsZSIsIm1hcmtkb3duU3R5bGVOb2RlRnJvbVRva2VucyIsInRvcG1vc3RIVE1MTm9kZUZyb21NYXJrZG93bk5vZGUiLCJ0b3Btb3N0Q1NTTm9kZUZyb21NYXJrZG93blN0eWxlTm9kZSIsIlZpZXciLCJwYWdlVXBkYXRlQ3VzdG9tSGFuZGxlciIsImV2ZW50IiwiZWxlbWVudCIsImluZGV4IiwidXBkYXRlSFRNTCIsIm1hcmtkb3duU3R5bGVDdXN0b21IYW5kbGVyIiwibWFya2Rvd25TdHlsZSIsIm1hcmtkb3duQ3VzdG9tSGFuZGxlciIsIm1hcmtkb3duIiwicGxhaW5UZXh0Q3VzdG9tSGFuZGxlciIsInBsYWluVGV4dCIsInByZXZpZXdDdXN0b21IYW5kbGVyIiwicHJldmlldyIsImtleVVwQ3VzdG9tSGFuZGxlciIsInVwZGF0ZSIsImh0bWxDdXN0b21IYW5kbGVyIiwiaHRtbCIsImNzc0N1c3RvbUhhbmRsZXIiLCJjc3MiLCJ1cGRhdGVNYXJrZG93blN0eWxlIiwidXBkYXRlTWFya2Rvd24iLCJ1cGRhdGVDU1MiLCJnZXRNYXJrZG93blN0eWxlIiwic2VsZWN0b3JzU3RyaW5nIiwiUFJFVklFV19TRUxFQ1RPUlNfU1RSSU5HIiwidG9rZW5zIiwibWFya2Rvd25TdHlsZU5vZGUiLCJyZXNldE1hcmtkb3duU3R5bGVUb2tlbnMiLCJyZXNldFRvcG1vc3RNYXJrZG93blN0eWxlTm9kZSIsImNsZWFyTWFya2Rvd25TdHlsZVBhcnNlVHJlZVRleHRhcmVhIiwibm9kZSIsInBhcnNlVHJlZSIsImFzUGFyc2VUcmVlIiwibWFya2Rvd25TdHlsZVRva2VucyIsInRvcG1vc3RNYXJrZG93blN0eWxlTm9kZSIsInNldE1hcmtkb3duU3R5bGVUb2tlbnMiLCJzZXRUb3Btb3N0TWFya2Rvd25TdHlsZU5vZGUiLCJ1cGRhdGVNYXJrZG93blN0eWxlUGFyc2VUcmVlVGV4dGFyZWEiLCJnZXRNYXJrZG93biIsIm1hcmtkb3duTm9kZSIsInJlc2V0TWFya2Rvd25Ub2tlbnMiLCJyZXNldFRvcG1vc3RNYXJrZG93bk5vZGUiLCJjbGVhck1hcmtkb3duUGFyc2VUcmVlVGV4dGFyZWEiLCJjb250ZXh0IiwidG9wbW9zdE1hcmtkb3duTm9kZSIsImltcG9ydGVyIiwicmVzb2x2ZSIsInRvcG1vc3RNYXJrZG93bk5vZGVQYXJzZVRyZWUiLCJtYXJrZG93blBhcnNlVHJlZSIsIm1hcmtkb3duVG9rZW5zIiwic2V0TWFya2Rvd25Ub2tlbnMiLCJzZXRUb3Btb3N0TWFya2Rvd25Ob2RlIiwidXBkYXRlTWFya2Rvd25QYXJzZVRyZWVUZXh0YXJlYSIsImNsZWFyWE1QIiwiY2xlYXJQcmV2aWV3RGl2IiwiY2xlYXJQbGFpblRleHRUZXh0YXJlYSIsImNsZWFySFRNTFBhcnNlVHJlZVRleHRhcmVhIiwiY2xlYXJQYWdlQnV0dG9uc0RpdiIsImdldFRvcG1vc3RNYXJrZG93bk5vZGUiLCJ0b3Btb3N0SFRNTE5vZGUiLCJnZXRNYXJrZG93blRva2VucyIsImluZGV4T3B0aW9ucyIsImRpdmlzaW9uSFRNTE5PZGUiLCJnZXREaXZpc2lvbkhUTUxOb2RlQXQiLCJkaXZpc2lvbkhUTUxOT2RlUGFyc2VUcmVlIiwiaHRtbFBhcnNlVHJlZSIsIm11bHRpcGxpY2l0eSIsImdldE11bHRpcGxpY2l0eSIsImxlbmd0aCIsInBhdGhUb1VSTCIsInVwZGF0ZVhNUCIsInVwZGF0ZVByZXZpZXdEaXYiLCJ1cGRhdGVQbGFpblRleHRUZXh0YXJlYSIsInVwZGF0ZUhUTUxQYXJzZVRyZWVUZXh0YXJlYSIsInVwZGF0ZVBhZ2VCdXR0b25zRGl2IiwiZ2V0VG9wbW9zdE1hcmtkb3duU3R5bGVOb2RlIiwiZ2V0TWFya2Rvd25TdHlsZVRva2VucyIsInRvcG1vc3RDU1NOb2RlIiwidG9wbW9zdENTU05vZGVQYXJzZVRyZWUiLCJjc3NQYXJzZVRyZWUiLCJhc0NTUyIsInVwZGF0ZUNTU1BhcnNlVHJlZVRleHRhcmVhIiwic2V0Q1NTIiwiaGlkZU1hcmtkb3duQ29udGFpbmVyRGl2Iiwic2hvd01hcmtkb3duU3R5bGVDb250YWluZXJEaXYiLCJzaG93TWFya2Rvd25Db250YWluZXJEaXYiLCJoaWRlTWFya2Rvd25TdHlsZUNvbnRhaW5lckRpdiIsImhpZGVDU1NDb250YWluZXJEaXYiLCJoaWRlSFRNTENvbnRhaW5lckRpdiIsImhpZGVQcmV2aWV3Q29udGFpbmVyRGl2Iiwic2hvd1BsYWluVGV4dENvbnRhaW5lckRpdiIsImhpZGVDU1NQYXJzZVRyZWVUZXh0YXJlYSIsInNob3dIVE1MUGFyc2VUcmVlVGV4dGFyZWEiLCJzaG93UHJldmlld0NvbnRhaW5lckRpdiIsImhpZGVQbGFpblRleHRDb250YWluZXJEaXYiLCJzaG93SFRNTENvbnRhaW5lckRpdiIsInNob3dDU1NDb250YWluZXJEaXYiLCJzaG93Q1NTUGFyc2VUcmVlVGV4dGFyZWEiLCJoaWRlSFRNTFBhcnNlVHJlZVRleHRhcmVhIiwiZ2V0U3RhdGUiLCJ0b3Btb3N0TU1hcmtkb3duTm9kZSIsInRvcG1vc3RNTWFya2Rvd25TdHlsZU5vZGUiLCJ1cGRhdGVTdGF0ZSIsInNldEluaXRpYWxTdGF0ZSIsInNldFN0YXRlIiwiZGlkTW91bnQiLCJ3aWxsVW5tb3VudCIsImNoaWxkRWxlbWVudHMiLCJDb2x1bW5zRGl2IiwiTGVmdFNpemVhYmxlRGl2IiwiTGVmdFRhYkJ1dHRvbnNEaXYiLCJvbkN1c3RvbU1hcmtkb3duIiwib25DdXN0b21NYXJrZG93blN0eWxlIiwiTWFya2Rvd25Db250YWluZXJEaXYiLCJvbkN1c3RvbUtleVVwIiwiTWFya2Rvd25TdHlsZUNvbnRhaW5lckRpdiIsIlZlcnRpY2FsU3BsaXR0ZXJEaXYiLCJDb2x1bW5EaXYiLCJSb3dzRGl2IiwiUmlnaHRUYWJCdXR0b25zRGl2Iiwib25DdXN0b21DU1MiLCJvbkN1c3RvbUhUTUwiLCJvbkN1c3RvbVByZXZpZXciLCJvbkN1c3RvbVBsYWluVGV4dCIsIlBhZ2VCdXR0b25zRGl2Iiwib25DdXN0b21QYWdlVXBkYXRlIiwiQ1NTQ29udGFpbmVyRGl2IiwiSFRNTENvbnRhaW5lckRpdiIsIlByZXZpZXdDb250YWluZXJEaXYiLCJQbGFpblRleHRDb250YWluZXJEaXYiLCJIVE1MUGFyc2VUcmVlVGV4dGFyZWEiLCJDU1NQYXJzZVRyZWVUZXh0YXJlYSIsImluaXRpYWxpc2UiLCJhc3NpZ25Db250ZXh0IiwiY29uc3RydWN0b3IiLCJpbml0aWFsTWFya2Rvd24iLCJpbml0aWFsTWFya2Rvd25TdHlsZSIsInNldE1hcmtkb3duU3R5bGUiLCJzZXRNYXJrZG93biIsIkVsZW1lbnQiLCJ0YWdOYW1lIiwiaWdub3JlZFByb3BlcnRpZXMiLCJkZWZhdWx0UHJvcGVydGllcyIsImNsYXNzTmFtZSIsIndpdGhTdHls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