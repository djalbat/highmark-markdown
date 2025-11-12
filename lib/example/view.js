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
var _importer = require("./importer");
var _targets = require("../targets");
var _constants = require("./constants");
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
var tokensFromMarkdown = _index.grammarUtilities.tokensFromMarkdown, markdownNodeFromTokens = _index.grammarUtilities.markdownNodeFromTokens, tokensFromMarkdownStyle = _index.grammarUtilities.tokensFromMarkdownStyle, markdownStyleNodeFromTokens = _index.grammarUtilities.markdownStyleNodeFromTokens, topmostHTMLNodeFromMarkdownNode = _index.grammarUtilities.topmostHTMLNodeFromMarkdownNode, htmlFromMarkdownOptionsAndImporter = _index.grammarUtilities.htmlFromMarkdownOptionsAndImporter, topmostCSSNodeFromMarkdownStyleNode = _index.grammarUtilities.topmostCSSNodeFromMarkdownStyleNode, cssFromMarkdownStyleAndCSSSelectorsString = _index.grammarUtilities.cssFromMarkdownStyleAndCSSSelectorsString;
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
                var markdownStyle = this.getMarkdownStyle(), tokens = tokensFromMarkdownStyle(markdownStyle), markdownStyleNode = markdownStyleNodeFromTokens(tokens);
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
                    tokens: tokens
                };
                topmostHTMLNode.resolve(context);
                var divisionHTMLNOde = topmostHTMLNode.getDivisionHTMLNodeAt(index);
                if (divisionHTMLNOde === null) {
                    return;
                }
                var divisionHTMLNOdeParseTree = divisionHTMLNOde.asParseTree(), htmlParseTree = divisionHTMLNOdeParseTree, multiplicity = topmostHTMLNode.getMultiplicity(), length = multiplicity; ///
                context = {
                    tokens: tokens,
                    pathToURL: pathToURL
                };
                this.updatePreviewDiv(divisionHTMLNOde, context);
                this.updatePlainTextTextarea(divisionHTMLNOde, context);
                this.updateHTMLParseTreeTextarea(htmlParseTree);
                this.updatePageButtonsDiv(length, index);
                var markdown = this.getMarkdown(), options = _indexOptions.default, html = htmlFromMarkdownOptionsAndImporter(markdown, options, _importer.importer);
                this.updateXMP(html, context);
            }
        },
        {
            key: "updateCSS",
            value: function updateCSS() {
                var topmostMarkdownStyleNode = this.getTopmostMarkdownStyleNode(), markdownStyleTokens = this.getMarkdownStyleTokens(), markdownStyleNode = topmostMarkdownStyleNode, topmostCSSNode = topmostCSSNodeFromMarkdownStyleNode(markdownStyleNode), target = _targets.WEB_TARGET, tokens = markdownStyleTokens, context = {
                    target: target,
                    tokens: tokens
                };
                topmostCSSNode.resolve(context);
                var topmostCSSNodeParseTree = topmostCSSNode.asParseTree(tokens), cssParseTree = topmostCSSNodeParseTree; ///
                this.updateCSSParseTreeTextarea(cssParseTree);
                var markdownStyleElement = this.getMarkdownStyleElement(), cssSelectorsString = _constants.PREVIEW_CSS_SELECTORS_STRING, markdownStyle = this.getMarkdownStyle(), css = cssFromMarkdownStyleAndCSSSelectorsString(markdownStyle, cssSelectorsString);
                markdownStyleElement.setCSS(css);
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
            key: "getMarkdownStyleElement",
            value: function getMarkdownStyleElement() {
                var markdownStyleElement = this.properties.markdownStyleElement;
                return markdownStyleElement;
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
                this.markdown();
                this.preview();
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
                var _this_constructor = this.constructor, initialMarkdown = _this_constructor.initialMarkdown, initialMarkdownStyle = _this_constructor.initialMarkdownStyle, markdownStyle = initialMarkdownStyle, markdown = initialMarkdown; ///
                this.setMarkdownStyle(markdownStyle);
                this.setMarkdown(markdown);
            }
        }
    ]);
    return View;
}(_wrap_native_super(_easy.Element));
_define_property(View, "initialMarkdown", "# Foundations\n  \n ```\n Block listing\n ```\n  \n  ");
_define_property(View, "initialMarkdownStyle", "\n\n```web\nmargin: 10pt;\n```\n\nprimaryHeading {\n\n  ```web\n  padding: auto;\n  ```\n\n}  \n  \n\n");
_define_property(View, "tagName", "div");
_define_property(View, "ignoredProperties", [
    "markdownStyleElement"
]);
_define_property(View, "defaultProperties", {
    className: "view"
});
var _default = (0, _easywithstyle.default)(View)(_templateObject());
function pathToURL(path) {
    var url = "https://djalbat.com/".concat(path);
    return url;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9leGFtcGxlL3ZpZXcuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB3aXRoU3R5bGUgZnJvbSBcImVhc3ktd2l0aC1zdHlsZVwiOyAgLy8vXG5cbmltcG9ydCB7IEVsZW1lbnQgfSBmcm9tIFwiZWFzeVwiO1xuaW1wb3J0IHsgZ3JhbW1hclV0aWxpdGllcyB9IGZyb20gXCIuLi9pbmRleFwiOyAgLy8vXG5pbXBvcnQgeyBSb3dzRGl2LCBDb2x1bW5EaXYsIENvbHVtbnNEaXYsIFZlcnRpY2FsU3BsaXR0ZXJEaXYgfSBmcm9tIFwiZWFzeS1sYXlvdXRcIjtcblxuaW1wb3J0IGluZGV4T3B0aW9ucyBmcm9tIFwiLi9pbmRleE9wdGlvbnNcIjtcbmltcG9ydCBQYWdlQnV0dG9uc0RpdiBmcm9tIFwiLi92aWV3L2Rpdi9wYWdlQnV0dG9uc1wiO1xuaW1wb3J0IExlZnRTaXplYWJsZURpdiBmcm9tIFwiLi92aWV3L2Rpdi9zaXplYWJsZS9sZWZ0XCI7XG5pbXBvcnQgQ1NTQ29udGFpbmVyRGl2IGZyb20gXCIuL3ZpZXcvZGl2L2NvbnRhaW5lci9jc3NcIjtcbmltcG9ydCBIVE1MQ29udGFpbmVyRGl2IGZyb20gXCIuL3ZpZXcvZGl2L2NvbnRhaW5lci9odG1sXCI7XG5pbXBvcnQgTGVmdFRhYkJ1dHRvbnNEaXYgZnJvbSBcIi4vdmlldy9kaXYvdGFiQnV0dG9ucy9sZWZ0XCI7XG5pbXBvcnQgUmlnaHRUYWJCdXR0b25zRGl2IGZyb20gXCIuL3ZpZXcvZGl2L3RhYkJ1dHRvbnMvcmlnaHRcIjtcbmltcG9ydCBQcmV2aWV3Q29udGFpbmVyRGl2IGZyb20gXCIuL3ZpZXcvZGl2L2NvbnRhaW5lci9wcmV2aWV3XCI7XG5pbXBvcnQgTWFya2Rvd25Db250YWluZXJEaXYgZnJvbSBcIi4vdmlldy9kaXYvY29udGFpbmVyL21hcmtkb3duXCI7XG5pbXBvcnQgQ1NTUGFyc2VUcmVlVGV4dGFyZWEgZnJvbSBcIi4vdmlldy90ZXh0YXJlYS9wYXJzZVRyZWUvY3NzXCI7XG5pbXBvcnQgSFRNTFBhcnNlVHJlZVRleHRhcmVhIGZyb20gXCIuL3ZpZXcvdGV4dGFyZWEvcGFyc2VUcmVlL2h0bWxcIjtcbmltcG9ydCBQbGFpblRleHRDb250YWluZXJEaXYgZnJvbSBcIi4vdmlldy9kaXYvY29udGFpbmVyL3BsYWluVGV4dFwiO1xuaW1wb3J0IE1hcmtkb3duU3R5bGVDb250YWluZXJEaXYgZnJvbSBcIi4vdmlldy9kaXYvY29udGFpbmVyL21hcmtkb3duU3R5bGVcIjtcblxuaW1wb3J0IHsgaW1wb3J0ZXIgfSBmcm9tIFwiLi9pbXBvcnRlclwiO1xuaW1wb3J0IHsgV0VCX1RBUkdFVCB9IGZyb20gXCIuLi90YXJnZXRzXCI7XG5pbXBvcnQgeyBQUkVWSUVXX0NTU19TRUxFQ1RPUlNfU1RSSU5HIH0gZnJvbSBcIi4vY29uc3RhbnRzXCI7XG5cbmNvbnN0IHsgdG9rZW5zRnJvbU1hcmtkb3duLFxuICAgICAgICBtYXJrZG93bk5vZGVGcm9tVG9rZW5zLFxuICAgICAgICB0b2tlbnNGcm9tTWFya2Rvd25TdHlsZSxcbiAgICAgICAgbWFya2Rvd25TdHlsZU5vZGVGcm9tVG9rZW5zLFxuICAgICAgICB0b3Btb3N0SFRNTE5vZGVGcm9tTWFya2Rvd25Ob2RlLFxuICAgICAgICBodG1sRnJvbU1hcmtkb3duT3B0aW9uc0FuZEltcG9ydGVyLFxuICAgICAgICB0b3Btb3N0Q1NTTm9kZUZyb21NYXJrZG93blN0eWxlTm9kZSxcbiAgICAgICAgY3NzRnJvbU1hcmtkb3duU3R5bGVBbmRDU1NTZWxlY3RvcnNTdHJpbmcgfSA9IGdyYW1tYXJVdGlsaXRpZXM7XG5cbmNsYXNzIFZpZXcgZXh0ZW5kcyBFbGVtZW50IHtcbiAgcGFnZVVwZGF0ZUN1c3RvbUhhbmRsZXIgPSAoZXZlbnQsIGVsZW1lbnQsIGluZGV4KSA9PiB7XG4gICAgdGhpcy51cGRhdGVIVE1MKGluZGV4KTtcbiAgfVxuXG4gIG1hcmtkb3duU3R5bGVDdXN0b21IYW5kbGVyID0gKGV2ZW50LCBlbGVtZW50KSA9PiB7XG4gICAgdGhpcy5tYXJrZG93blN0eWxlKCk7XG4gIH1cblxuICBtYXJrZG93bkN1c3RvbUhhbmRsZXIgPSAoZXZlbnQsIGVsZW1lbnQpID0+IHtcbiAgICB0aGlzLm1hcmtkb3duKCk7XG4gIH1cblxuICBwbGFpblRleHRDdXN0b21IYW5kbGVyID0gKGV2ZW50LCBlbGVtZW50KSA9PiB7XG4gICAgdGhpcy5wbGFpblRleHQoKTtcbiAgfVxuXG4gIHByZXZpZXdDdXN0b21IYW5kbGVyID0gKGV2ZW50LCBlbGVtZW50KSA9PiB7XG4gICAgdGhpcy5wcmV2aWV3KCk7XG4gIH1cblxuICBrZXlVcEN1c3RvbUhhbmRsZXIgPSAoZXZlbnQsIGVsZW1lbnQpID0+IHtcbiAgICB0aGlzLnVwZGF0ZSgpO1xuICB9XG5cbiAgaHRtbEN1c3RvbUhhbmRsZXIgPSAoZXZlbnQsIGVsZW1lbnQpID0+IHtcbiAgICB0aGlzLmh0bWwoKTtcbiAgfVxuXG4gIGNzc0N1c3RvbUhhbmRsZXIgPSAoZXZlbnQsIGVsZW1lbnQpID0+IHtcbiAgICB0aGlzLmNzcygpO1xuICB9XG5cbiAgdXBkYXRlKCkge1xuICAgIHRoaXMudXBkYXRlTWFya2Rvd25TdHlsZSgpO1xuXG4gICAgdGhpcy51cGRhdGVNYXJrZG93bigpO1xuXG4gICAgdGhpcy51cGRhdGVIVE1MKCk7XG5cbiAgICB0aGlzLnVwZGF0ZUNTUygpO1xuICB9XG5cbiAgdXBkYXRlTWFya2Rvd25TdHlsZSgpIHtcbiAgICBjb25zdCBtYXJrZG93blN0eWxlID0gdGhpcy5nZXRNYXJrZG93blN0eWxlKCksXG4gICAgICAgICAgdG9rZW5zID0gdG9rZW5zRnJvbU1hcmtkb3duU3R5bGUobWFya2Rvd25TdHlsZSksXG4gICAgICAgICAgbWFya2Rvd25TdHlsZU5vZGUgPSBtYXJrZG93blN0eWxlTm9kZUZyb21Ub2tlbnModG9rZW5zKTtcblxuICAgIGlmIChtYXJrZG93blN0eWxlTm9kZSA9PT0gbnVsbCkge1xuICAgICAgdGhpcy5yZXNldE1hcmtkb3duU3R5bGVUb2tlbnMoKTtcblxuICAgICAgdGhpcy5yZXNldFRvcG1vc3RNYXJrZG93blN0eWxlTm9kZSgpO1xuXG4gICAgICB0aGlzLmNsZWFyTWFya2Rvd25TdHlsZVBhcnNlVHJlZVRleHRhcmVhKCk7XG5cbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBub2RlID0gbWFya2Rvd25TdHlsZU5vZGUsIC8vL1xuICAgICAgICAgIHBhcnNlVHJlZSA9IG5vZGUuYXNQYXJzZVRyZWUodG9rZW5zKSxcbiAgICAgICAgICBtYXJrZG93blN0eWxlVG9rZW5zID0gdG9rZW5zLCAvLy9cbiAgICAgICAgICB0b3Btb3N0TWFya2Rvd25TdHlsZU5vZGUgPSBub2RlOyAvLy9cblxuICAgIHRoaXMuc2V0TWFya2Rvd25TdHlsZVRva2VucyhtYXJrZG93blN0eWxlVG9rZW5zKTtcblxuICAgIHRoaXMuc2V0VG9wbW9zdE1hcmtkb3duU3R5bGVOb2RlKHRvcG1vc3RNYXJrZG93blN0eWxlTm9kZSk7XG5cbiAgICB0aGlzLnVwZGF0ZU1hcmtkb3duU3R5bGVQYXJzZVRyZWVUZXh0YXJlYShwYXJzZVRyZWUpO1xuICB9XG5cbiAgdXBkYXRlTWFya2Rvd24oKSB7XG4gICAgY29uc3QgbWFya2Rvd24gPSB0aGlzLmdldE1hcmtkb3duKCksXG4gICAgICAgICAgdG9rZW5zID0gdG9rZW5zRnJvbU1hcmtkb3duKG1hcmtkb3duKSxcbiAgICAgICAgICBtYXJrZG93bk5vZGUgPSBtYXJrZG93bk5vZGVGcm9tVG9rZW5zKHRva2Vucyk7XG5cbiAgICBpZiAobWFya2Rvd25Ob2RlID09PSBudWxsKSB7XG4gICAgICB0aGlzLnJlc2V0TWFya2Rvd25Ub2tlbnMoKTtcblxuICAgICAgdGhpcy5yZXNldFRvcG1vc3RNYXJrZG93bk5vZGUoKTtcblxuICAgICAgdGhpcy5jbGVhck1hcmtkb3duUGFyc2VUcmVlVGV4dGFyZWEoKTtcblxuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGxldCBjb250ZXh0O1xuXG4gICAgY29uc3QgdG9wbW9zdE1hcmtkb3duTm9kZSA9IG1hcmtkb3duTm9kZTsgLy8vXG5cbiAgICBjb250ZXh0ID0ge1xuICAgICAgdG9rZW5zLFxuICAgICAgaW1wb3J0ZXJcbiAgICB9O1xuXG4gICAgdG9wbW9zdE1hcmtkb3duTm9kZS5yZXNvbHZlKGNvbnRleHQpO1xuXG4gICAgY29uc3QgdG9wbW9zdE1hcmtkb3duTm9kZVBhcnNlVHJlZSA9IHRvcG1vc3RNYXJrZG93bk5vZGUuYXNQYXJzZVRyZWUodG9rZW5zKSxcbiAgICAgICAgICBtYXJrZG93blBhcnNlVHJlZSA9IHRvcG1vc3RNYXJrZG93bk5vZGVQYXJzZVRyZWUsIC8vL1xuICAgICAgICAgIG1hcmtkb3duVG9rZW5zID0gdG9rZW5zOyAgLy8vXG5cbiAgICB0aGlzLnNldE1hcmtkb3duVG9rZW5zKG1hcmtkb3duVG9rZW5zKTtcblxuICAgIHRoaXMuc2V0VG9wbW9zdE1hcmtkb3duTm9kZSh0b3Btb3N0TWFya2Rvd25Ob2RlKTtcblxuICAgIHRoaXMudXBkYXRlTWFya2Rvd25QYXJzZVRyZWVUZXh0YXJlYShtYXJrZG93blBhcnNlVHJlZSk7XG4gIH1cblxuICB1cGRhdGVIVE1MKGluZGV4ID0gMCkge1xuICAgIHRoaXMuY2xlYXJYTVAoKTtcblxuICAgIHRoaXMuY2xlYXJQcmV2aWV3RGl2KCk7XG5cbiAgICB0aGlzLmNsZWFyUGxhaW5UZXh0VGV4dGFyZWEoKTtcblxuICAgIHRoaXMuY2xlYXJIVE1MUGFyc2VUcmVlVGV4dGFyZWEoKTtcblxuICAgIHRoaXMuY2xlYXJQYWdlQnV0dG9uc0RpdigpO1xuXG4gICAgY29uc3QgdG9wbW9zdE1hcmtkb3duTm9kZSA9IHRoaXMuZ2V0VG9wbW9zdE1hcmtkb3duTm9kZSgpLFxuICAgICAgICAgIG1hcmtkb3duTm9kZSA9IHRvcG1vc3RNYXJrZG93bk5vZGUsIC8vL1xuICAgICAgICAgIHRvcG1vc3RIVE1MTm9kZSA9IHRvcG1vc3RIVE1MTm9kZUZyb21NYXJrZG93bk5vZGUobWFya2Rvd25Ob2RlKTtcblxuICAgIGlmICh0b3Btb3N0SFRNTE5vZGUgPT09IG51bGwpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBsZXQgY29udGV4dDtcblxuICAgIGNvbnN0IG1hcmtkb3duVG9rZW5zID0gdGhpcy5nZXRNYXJrZG93blRva2VucygpLFxuICAgICAgICAgIHRva2VucyA9IG1hcmtkb3duVG9rZW5zOyAgLy8vXG5cbiAgICBjb250ZXh0ID0ge1xuICAgICAgdG9rZW5zXG4gICAgfTtcblxuICAgIHRvcG1vc3RIVE1MTm9kZS5yZXNvbHZlKGNvbnRleHQpO1xuXG4gICAgY29uc3QgZGl2aXNpb25IVE1MTk9kZSA9IHRvcG1vc3RIVE1MTm9kZS5nZXREaXZpc2lvbkhUTUxOb2RlQXQoaW5kZXgpO1xuXG4gICAgaWYgKGRpdmlzaW9uSFRNTE5PZGUgPT09IG51bGwpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBkaXZpc2lvbkhUTUxOT2RlUGFyc2VUcmVlID0gZGl2aXNpb25IVE1MTk9kZS5hc1BhcnNlVHJlZSgpLFxuICAgICAgICAgIGh0bWxQYXJzZVRyZWUgPSBkaXZpc2lvbkhUTUxOT2RlUGFyc2VUcmVlLCAgLy8vXG4gICAgICAgICAgbXVsdGlwbGljaXR5ID0gdG9wbW9zdEhUTUxOb2RlLmdldE11bHRpcGxpY2l0eSgpLFxuICAgICAgICAgIGxlbmd0aCA9IG11bHRpcGxpY2l0eTsgIC8vL1xuXG4gICAgY29udGV4dCA9IHtcbiAgICAgIHRva2VucyxcbiAgICAgIHBhdGhUb1VSTFxuICAgIH07XG5cbiAgICB0aGlzLnVwZGF0ZVByZXZpZXdEaXYoZGl2aXNpb25IVE1MTk9kZSwgY29udGV4dCk7XG5cbiAgICB0aGlzLnVwZGF0ZVBsYWluVGV4dFRleHRhcmVhKGRpdmlzaW9uSFRNTE5PZGUsIGNvbnRleHQpO1xuXG4gICAgdGhpcy51cGRhdGVIVE1MUGFyc2VUcmVlVGV4dGFyZWEoaHRtbFBhcnNlVHJlZSk7XG5cbiAgICB0aGlzLnVwZGF0ZVBhZ2VCdXR0b25zRGl2KGxlbmd0aCwgaW5kZXgpO1xuXG4gICAgY29uc3QgbWFya2Rvd24gPSB0aGlzLmdldE1hcmtkb3duKCksXG4gICAgICAgICAgb3B0aW9ucyA9IGluZGV4T3B0aW9ucywgLy8vXG4gICAgICAgICAgaHRtbCA9IGh0bWxGcm9tTWFya2Rvd25PcHRpb25zQW5kSW1wb3J0ZXIobWFya2Rvd24sIG9wdGlvbnMsIGltcG9ydGVyKTtcblxuICAgIHRoaXMudXBkYXRlWE1QKGh0bWwsIGNvbnRleHQpO1xuICB9XG5cbiAgdXBkYXRlQ1NTKCkge1xuICAgIGNvbnN0IHRvcG1vc3RNYXJrZG93blN0eWxlTm9kZSA9IHRoaXMuZ2V0VG9wbW9zdE1hcmtkb3duU3R5bGVOb2RlKCksXG4gICAgICAgICAgbWFya2Rvd25TdHlsZVRva2VucyA9IHRoaXMuZ2V0TWFya2Rvd25TdHlsZVRva2VucygpLFxuICAgICAgICAgIG1hcmtkb3duU3R5bGVOb2RlID0gdG9wbW9zdE1hcmtkb3duU3R5bGVOb2RlLCAvLy9cbiAgICAgICAgICB0b3Btb3N0Q1NTTm9kZSA9IHRvcG1vc3RDU1NOb2RlRnJvbU1hcmtkb3duU3R5bGVOb2RlKG1hcmtkb3duU3R5bGVOb2RlKSxcbiAgICAgICAgICB0YXJnZXQgPSBXRUJfVEFSR0VULFxuICAgICAgICAgIHRva2VucyA9IG1hcmtkb3duU3R5bGVUb2tlbnMsIC8vL1xuICAgICAgICAgIGNvbnRleHQgPSB7XG4gICAgICAgICAgICB0YXJnZXQsXG4gICAgICAgICAgICB0b2tlbnNcbiAgICAgICAgICB9O1xuXG4gICAgdG9wbW9zdENTU05vZGUucmVzb2x2ZShjb250ZXh0KTtcblxuICAgIGNvbnN0IHRvcG1vc3RDU1NOb2RlUGFyc2VUcmVlID0gdG9wbW9zdENTU05vZGUuYXNQYXJzZVRyZWUodG9rZW5zKSxcbiAgICAgICAgICBjc3NQYXJzZVRyZWUgPSB0b3Btb3N0Q1NTTm9kZVBhcnNlVHJlZTsgLy8vXG5cbiAgICB0aGlzLnVwZGF0ZUNTU1BhcnNlVHJlZVRleHRhcmVhKGNzc1BhcnNlVHJlZSk7XG5cbiAgICBjb25zdCBtYXJrZG93blN0eWxlRWxlbWVudCA9IHRoaXMuZ2V0TWFya2Rvd25TdHlsZUVsZW1lbnQoKSxcbiAgICAgICAgICBjc3NTZWxlY3RvcnNTdHJpbmcgPSBQUkVWSUVXX0NTU19TRUxFQ1RPUlNfU1RSSU5HLFxuICAgICAgICAgIG1hcmtkb3duU3R5bGUgPSB0aGlzLmdldE1hcmtkb3duU3R5bGUoKSxcbiAgICAgICAgICBjc3MgPSBjc3NGcm9tTWFya2Rvd25TdHlsZUFuZENTU1NlbGVjdG9yc1N0cmluZyhtYXJrZG93blN0eWxlLCBjc3NTZWxlY3RvcnNTdHJpbmcpO1xuXG4gICAgbWFya2Rvd25TdHlsZUVsZW1lbnQuc2V0Q1NTKGNzcyk7XG5cbiAgICB0aGlzLnNldENTUyhjc3MpO1xuICB9XG5cbiAgbWFya2Rvd25TdHlsZSgpIHtcbiAgICB0aGlzLmhpZGVNYXJrZG93bkNvbnRhaW5lckRpdigpO1xuICAgIHRoaXMuc2hvd01hcmtkb3duU3R5bGVDb250YWluZXJEaXYoKTtcbiAgfVxuXG4gIG1hcmtkb3duKCkge1xuICAgIHRoaXMuc2hvd01hcmtkb3duQ29udGFpbmVyRGl2KCk7XG4gICAgdGhpcy5oaWRlTWFya2Rvd25TdHlsZUNvbnRhaW5lckRpdigpO1xuICB9XG5cbiAgcGxhaW5UZXh0KCkge1xuICAgIHRoaXMuaGlkZUNTU0NvbnRhaW5lckRpdigpO1xuICAgIHRoaXMuaGlkZUhUTUxDb250YWluZXJEaXYoKTtcbiAgICB0aGlzLmhpZGVQcmV2aWV3Q29udGFpbmVyRGl2KCk7XG4gICAgdGhpcy5zaG93UGxhaW5UZXh0Q29udGFpbmVyRGl2KCk7XG5cbiAgICB0aGlzLmhpZGVDU1NQYXJzZVRyZWVUZXh0YXJlYSgpO1xuICAgIHRoaXMuc2hvd0hUTUxQYXJzZVRyZWVUZXh0YXJlYSgpO1xuICB9XG5cbiAgcHJldmlldygpIHtcbiAgICB0aGlzLmhpZGVDU1NDb250YWluZXJEaXYoKTtcbiAgICB0aGlzLmhpZGVIVE1MQ29udGFpbmVyRGl2KCk7XG4gICAgdGhpcy5zaG93UHJldmlld0NvbnRhaW5lckRpdigpO1xuICAgIHRoaXMuaGlkZVBsYWluVGV4dENvbnRhaW5lckRpdigpO1xuXG4gICAgdGhpcy5oaWRlQ1NTUGFyc2VUcmVlVGV4dGFyZWEoKTtcbiAgICB0aGlzLnNob3dIVE1MUGFyc2VUcmVlVGV4dGFyZWEoKTtcbiAgfVxuXG4gIGh0bWwoKSB7XG4gICAgdGhpcy5oaWRlQ1NTQ29udGFpbmVyRGl2KCk7XG4gICAgdGhpcy5zaG93SFRNTENvbnRhaW5lckRpdigpO1xuICAgIHRoaXMuaGlkZVByZXZpZXdDb250YWluZXJEaXYoKTtcbiAgICB0aGlzLmhpZGVQbGFpblRleHRDb250YWluZXJEaXYoKTtcblxuICAgIHRoaXMuaGlkZUNTU1BhcnNlVHJlZVRleHRhcmVhKCk7XG4gICAgdGhpcy5zaG93SFRNTFBhcnNlVHJlZVRleHRhcmVhKCk7XG4gIH1cblxuICBjc3MoKSB7XG4gICAgdGhpcy5zaG93Q1NTQ29udGFpbmVyRGl2KCk7XG4gICAgdGhpcy5oaWRlSFRNTENvbnRhaW5lckRpdigpO1xuICAgIHRoaXMuaGlkZVByZXZpZXdDb250YWluZXJEaXYoKTtcbiAgICB0aGlzLmhpZGVQbGFpblRleHRDb250YWluZXJEaXYoKTtcblxuICAgIHRoaXMuc2hvd0NTU1BhcnNlVHJlZVRleHRhcmVhKCk7XG4gICAgdGhpcy5oaWRlSFRNTFBhcnNlVHJlZVRleHRhcmVhKCk7XG4gIH1cblxuICByZXNldE1hcmtkb3duVG9rZW5zKCkge1xuICAgIGNvbnN0IG1hcmtkb3duVG9rZW5zID0gbnVsbDtcblxuICAgIHRoaXMuc2V0TWFya2Rvd25Ub2tlbnMobWFya2Rvd25Ub2tlbnMpO1xuICB9XG5cbiAgcmVzZXRNYXJrZG93blN0eWxlVG9rZW5zKCkge1xuICAgIGNvbnN0IG1hcmtkb3duU3R5bGVUb2tlbnMgPSBudWxsO1xuXG4gICAgdGhpcy5zZXRNYXJrZG93blN0eWxlVG9rZW5zKG1hcmtkb3duU3R5bGVUb2tlbnMpO1xuICB9XG5cbiAgcmVzZXRUb3Btb3N0TWFya2Rvd25Ob2RlKCkge1xuICAgIGNvbnN0IHRvcG1vc3RNYXJrZG93bk5vZGUgPSBudWxsO1xuXG4gICAgdGhpcy5zZXRUb3Btb3N0TWFya2Rvd25Ob2RlKHRvcG1vc3RNYXJrZG93bk5vZGUpO1xuICB9XG5cbiAgcmVzZXRUb3Btb3N0TWFya2Rvd25TdHlsZU5vZGUoKSB7XG4gICAgY29uc3QgdG9wbW9zdE1hcmtkb3duU3R5bGVOb2RlID0gbnVsbDtcblxuICAgIHRoaXMuc2V0VG9wbW9zdE1hcmtkb3duU3R5bGVOb2RlKHRvcG1vc3RNYXJrZG93blN0eWxlTm9kZSk7XG4gIH1cblxuICBnZXRNYXJrZG93blN0eWxlRWxlbWVudCgpIHtcbiAgICBjb25zdCB7IG1hcmtkb3duU3R5bGVFbGVtZW50IH0gPSB0aGlzLnByb3BlcnRpZXM7XG5cbiAgICByZXR1cm4gbWFya2Rvd25TdHlsZUVsZW1lbnQ7XG4gIH1cblxuICBnZXRNYXJrZG93blRva2VucygpIHtcbiAgICBjb25zdCB7IG1hcmtkb3duVG9rZW5zIH0gPSB0aGlzLmdldFN0YXRlKCk7XG5cbiAgICByZXR1cm4gbWFya2Rvd25Ub2tlbnM7XG4gIH1cblxuICBnZXRNYXJrZG93blN0eWxlVG9rZW5zKCkge1xuICAgIGNvbnN0IHsgbWFya2Rvd25TdHlsZVRva2VucyB9ID0gdGhpcy5nZXRTdGF0ZSgpO1xuXG4gICAgcmV0dXJuIG1hcmtkb3duU3R5bGVUb2tlbnM7XG4gIH1cblxuICBnZXRUb3Btb3N0TWFya2Rvd25Ob2RlKCkge1xuICAgIGNvbnN0IHsgdG9wbW9zdE1NYXJrZG93bk5vZGUgfSA9IHRoaXMuZ2V0U3RhdGUoKTtcblxuICAgIHJldHVybiB0b3Btb3N0TU1hcmtkb3duTm9kZTtcbiAgfVxuXG4gIGdldFRvcG1vc3RNYXJrZG93blN0eWxlTm9kZSgpIHtcbiAgICBjb25zdCB7IHRvcG1vc3RNTWFya2Rvd25TdHlsZU5vZGUgfSA9IHRoaXMuZ2V0U3RhdGUoKTtcblxuICAgIHJldHVybiB0b3Btb3N0TU1hcmtkb3duU3R5bGVOb2RlO1xuICB9XG5cbiAgc2V0TWFya2Rvd25Ub2tlbnMobWFya2Rvd25Ub2tlbnMpIHtcbiAgICB0aGlzLnVwZGF0ZVN0YXRlKHtcbiAgICAgIG1hcmtkb3duVG9rZW5zXG4gICAgfSk7XG4gIH1cblxuICBzZXRNYXJrZG93blN0eWxlVG9rZW5zKG1hcmtkb3duU3R5bGVUb2tlbnMpIHtcbiAgICB0aGlzLnVwZGF0ZVN0YXRlKHtcbiAgICAgIG1hcmtkb3duU3R5bGVUb2tlbnNcbiAgICB9KTtcbiAgfVxuXG4gIHNldFRvcG1vc3RNYXJrZG93bk5vZGUodG9wbW9zdE1NYXJrZG93bk5vZGUpIHtcbiAgICB0aGlzLnVwZGF0ZVN0YXRlKHtcbiAgICAgIHRvcG1vc3RNTWFya2Rvd25Ob2RlXG4gICAgfSk7XG4gIH1cblxuICBzZXRUb3Btb3N0TWFya2Rvd25TdHlsZU5vZGUodG9wbW9zdE1NYXJrZG93blN0eWxlTm9kZSkge1xuICAgIHRoaXMudXBkYXRlU3RhdGUoe1xuICAgICAgdG9wbW9zdE1NYXJrZG93blN0eWxlTm9kZVxuICAgIH0pO1xuICB9XG5cbiAgc2V0SW5pdGlhbFN0YXRlKCkge1xuICAgIGNvbnN0IG1hcmtkb3duVG9rZW5zID0gbnVsbCxcbiAgICAgICAgICBtYXJrZG93blN0eWxlVG9rZW5zID0gbnVsbCxcbiAgICAgICAgICB0b3Btb3N0TWFya2Rvd25Ob2RlID0gbnVsbCxcbiAgICAgICAgICB0b3Btb3N0TWFya2Rvd25TdHlsZU5vZGUgPSBudWxsO1xuXG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBtYXJrZG93blRva2VucyxcbiAgICAgIG1hcmtkb3duU3R5bGVUb2tlbnMsXG4gICAgICB0b3Btb3N0TWFya2Rvd25Ob2RlLFxuICAgICAgdG9wbW9zdE1hcmtkb3duU3R5bGVOb2RlXG4gICAgfSk7XG4gIH1cblxuICBkaWRNb3VudCgpIHtcbiAgICB0aGlzLm1hcmtkb3duKCk7XG5cbiAgICB0aGlzLnByZXZpZXcoKTtcblxuICAgIHRoaXMudXBkYXRlKCk7XG4gIH1cblxuICB3aWxsVW5tb3VudCgpIHtcbiAgICAvLy9cbiAgfVxuXG4gIGNoaWxkRWxlbWVudHMoKSB7XG4gICAgcmV0dXJuIChcblxuICAgICAgPENvbHVtbnNEaXY+XG4gICAgICAgIDxMZWZ0U2l6ZWFibGVEaXY+XG4gICAgICAgICAgPExlZnRUYWJCdXR0b25zRGl2IG9uQ3VzdG9tTWFya2Rvd249e3RoaXMubWFya2Rvd25DdXN0b21IYW5kbGVyfSBvbkN1c3RvbU1hcmtkb3duU3R5bGU9e3RoaXMubWFya2Rvd25TdHlsZUN1c3RvbUhhbmRsZXJ9IC8+XG4gICAgICAgICAgPE1hcmtkb3duQ29udGFpbmVyRGl2IG9uQ3VzdG9tS2V5VXA9e3RoaXMua2V5VXBDdXN0b21IYW5kbGVyfSAvPlxuICAgICAgICAgIDxNYXJrZG93blN0eWxlQ29udGFpbmVyRGl2IG9uQ3VzdG9tS2V5VXA9e3RoaXMua2V5VXBDdXN0b21IYW5kbGVyfSAvPlxuICAgICAgICA8L0xlZnRTaXplYWJsZURpdj5cbiAgICAgICAgPFZlcnRpY2FsU3BsaXR0ZXJEaXYvPlxuICAgICAgICA8Q29sdW1uRGl2PlxuICAgICAgICAgIDxSb3dzRGl2PlxuICAgICAgICAgICAgPFJpZ2h0VGFiQnV0dG9uc0RpdiBvbkN1c3RvbUNTUz17dGhpcy5jc3NDdXN0b21IYW5kbGVyfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkN1c3RvbUhUTUw9e3RoaXMuaHRtbEN1c3RvbUhhbmRsZXJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ3VzdG9tUHJldmlldz17dGhpcy5wcmV2aWV3Q3VzdG9tSGFuZGxlcn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DdXN0b21QbGFpblRleHQ9e3RoaXMucGxhaW5UZXh0Q3VzdG9tSGFuZGxlcn1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8UGFnZUJ1dHRvbnNEaXYgb25DdXN0b21QYWdlVXBkYXRlPXt0aGlzLnBhZ2VVcGRhdGVDdXN0b21IYW5kbGVyfSAvPlxuICAgICAgICAgICAgPENTU0NvbnRhaW5lckRpdi8+XG4gICAgICAgICAgICA8SFRNTENvbnRhaW5lckRpdi8+XG4gICAgICAgICAgICA8UHJldmlld0NvbnRhaW5lckRpdi8+XG4gICAgICAgICAgICA8UGxhaW5UZXh0Q29udGFpbmVyRGl2Lz5cbiAgICAgICAgICAgIDxIVE1MUGFyc2VUcmVlVGV4dGFyZWEvPlxuICAgICAgICAgICAgPENTU1BhcnNlVHJlZVRleHRhcmVhLz5cbiAgICAgICAgICA8L1Jvd3NEaXY+XG4gICAgICAgIDwvQ29sdW1uRGl2PlxuICAgICAgPC9Db2x1bW5zRGl2PlxuXG4gICAgKTtcbiAgfVxuXG4gIGluaXRpYWxpc2UoKSB7XG4gICAgdGhpcy5hc3NpZ25Db250ZXh0KCk7XG5cbiAgICB0aGlzLnNldEluaXRpYWxTdGF0ZSgpO1xuXG4gICAgY29uc3QgeyBpbml0aWFsTWFya2Rvd24sIGluaXRpYWxNYXJrZG93blN0eWxlIH0gPSB0aGlzLmNvbnN0cnVjdG9yLFxuICAgICAgICAgIG1hcmtkb3duU3R5bGUgPSBpbml0aWFsTWFya2Rvd25TdHlsZSwgLy8vXG4gICAgICAgICAgbWFya2Rvd24gPSBpbml0aWFsTWFya2Rvd247IC8vL1xuXG4gICAgdGhpcy5zZXRNYXJrZG93blN0eWxlKG1hcmtkb3duU3R5bGUpO1xuXG4gICAgdGhpcy5zZXRNYXJrZG93bihtYXJrZG93bik7XG4gIH1cblxuICBzdGF0aWMgaW5pdGlhbE1hcmtkb3duID0gYCMgRm91bmRhdGlvbnNcbiAgXG4gXFxgXFxgXFxgXG4gQmxvY2sgbGlzdGluZ1xuIFxcYFxcYFxcYFxuICBcbiAgYDtcblxuICBzdGF0aWMgaW5pdGlhbE1hcmtkb3duU3R5bGUgPSBgXG5cblxcYFxcYFxcYHdlYlxubWFyZ2luOiAxMHB0O1xuXFxgXFxgXFxgXG5cbnByaW1hcnlIZWFkaW5nIHtcblxuICBcXGBcXGBcXGB3ZWJcbiAgcGFkZGluZzogYXV0bztcbiAgXFxgXFxgXFxgXG5cbn0gIFxuICBcblxuYDtcblxuICBzdGF0aWMgdGFnTmFtZSA9IFwiZGl2XCI7XG5cbiAgc3RhdGljIGlnbm9yZWRQcm9wZXJ0aWVzID0gW1xuICAgIFwibWFya2Rvd25TdHlsZUVsZW1lbnRcIlxuICBdO1xuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcGVydGllcyA9IHtcbiAgICBjbGFzc05hbWU6IFwidmlld1wiXG4gIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhTdHlsZShWaWV3KWBcblxuICBwYWRkaW5nOiAxcmVtO1xuICBcbmA7XG5cbmZ1bmN0aW9uIHBhdGhUb1VSTChwYXRoKSB7XG4gIGNvbnN0IHVybCA9IGBodHRwczovL2RqYWxiYXQuY29tLyR7cGF0aH1gO1xuXG4gIHJldHVybiB1cmw7XG59XG4iXSwibmFtZXMiOlsidG9rZW5zRnJvbU1hcmtkb3duIiwiZ3JhbW1hclV0aWxpdGllcyIsIm1hcmtkb3duTm9kZUZyb21Ub2tlbnMiLCJ0b2tlbnNGcm9tTWFya2Rvd25TdHlsZSIsIm1hcmtkb3duU3R5bGVOb2RlRnJvbVRva2VucyIsInRvcG1vc3RIVE1MTm9kZUZyb21NYXJrZG93bk5vZGUiLCJodG1sRnJvbU1hcmtkb3duT3B0aW9uc0FuZEltcG9ydGVyIiwidG9wbW9zdENTU05vZGVGcm9tTWFya2Rvd25TdHlsZU5vZGUiLCJjc3NGcm9tTWFya2Rvd25TdHlsZUFuZENTU1NlbGVjdG9yc1N0cmluZyIsIlZpZXciLCJwYWdlVXBkYXRlQ3VzdG9tSGFuZGxlciIsImV2ZW50IiwiZWxlbWVudCIsImluZGV4IiwidXBkYXRlSFRNTCIsIm1hcmtkb3duU3R5bGVDdXN0b21IYW5kbGVyIiwibWFya2Rvd25TdHlsZSIsIm1hcmtkb3duQ3VzdG9tSGFuZGxlciIsIm1hcmtkb3duIiwicGxhaW5UZXh0Q3VzdG9tSGFuZGxlciIsInBsYWluVGV4dCIsInByZXZpZXdDdXN0b21IYW5kbGVyIiwicHJldmlldyIsImtleVVwQ3VzdG9tSGFuZGxlciIsInVwZGF0ZSIsImh0bWxDdXN0b21IYW5kbGVyIiwiaHRtbCIsImNzc0N1c3RvbUhhbmRsZXIiLCJjc3MiLCJ1cGRhdGVNYXJrZG93blN0eWxlIiwidXBkYXRlTWFya2Rvd24iLCJ1cGRhdGVDU1MiLCJnZXRNYXJrZG93blN0eWxlIiwidG9rZW5zIiwibWFya2Rvd25TdHlsZU5vZGUiLCJyZXNldE1hcmtkb3duU3R5bGVUb2tlbnMiLCJyZXNldFRvcG1vc3RNYXJrZG93blN0eWxlTm9kZSIsImNsZWFyTWFya2Rvd25TdHlsZVBhcnNlVHJlZVRleHRhcmVhIiwibm9kZSIsInBhcnNlVHJlZSIsImFzUGFyc2VUcmVlIiwibWFya2Rvd25TdHlsZVRva2VucyIsInRvcG1vc3RNYXJrZG93blN0eWxlTm9kZSIsInNldE1hcmtkb3duU3R5bGVUb2tlbnMiLCJzZXRUb3Btb3N0TWFya2Rvd25TdHlsZU5vZGUiLCJ1cGRhdGVNYXJrZG93blN0eWxlUGFyc2VUcmVlVGV4dGFyZWEiLCJnZXRNYXJrZG93biIsIm1hcmtkb3duTm9kZSIsInJlc2V0TWFya2Rvd25Ub2tlbnMiLCJyZXNldFRvcG1vc3RNYXJrZG93bk5vZGUiLCJjbGVhck1hcmtkb3duUGFyc2VUcmVlVGV4dGFyZWEiLCJjb250ZXh0IiwidG9wbW9zdE1hcmtkb3duTm9kZSIsImltcG9ydGVyIiwicmVzb2x2ZSIsInRvcG1vc3RNYXJrZG93bk5vZGVQYXJzZVRyZWUiLCJtYXJrZG93blBhcnNlVHJlZSIsIm1hcmtkb3duVG9rZW5zIiwic2V0TWFya2Rvd25Ub2tlbnMiLCJzZXRUb3Btb3N0TWFya2Rvd25Ob2RlIiwidXBkYXRlTWFya2Rvd25QYXJzZVRyZWVUZXh0YXJlYSIsImNsZWFyWE1QIiwiY2xlYXJQcmV2aWV3RGl2IiwiY2xlYXJQbGFpblRleHRUZXh0YXJlYSIsImNsZWFySFRNTFBhcnNlVHJlZVRleHRhcmVhIiwiY2xlYXJQYWdlQnV0dG9uc0RpdiIsImdldFRvcG1vc3RNYXJrZG93bk5vZGUiLCJ0b3Btb3N0SFRNTE5vZGUiLCJnZXRNYXJrZG93blRva2VucyIsImRpdmlzaW9uSFRNTE5PZGUiLCJnZXREaXZpc2lvbkhUTUxOb2RlQXQiLCJkaXZpc2lvbkhUTUxOT2RlUGFyc2VUcmVlIiwiaHRtbFBhcnNlVHJlZSIsIm11bHRpcGxpY2l0eSIsImdldE11bHRpcGxpY2l0eSIsImxlbmd0aCIsInBhdGhUb1VSTCIsInVwZGF0ZVByZXZpZXdEaXYiLCJ1cGRhdGVQbGFpblRleHRUZXh0YXJlYSIsInVwZGF0ZUhUTUxQYXJzZVRyZWVUZXh0YXJlYSIsInVwZGF0ZVBhZ2VCdXR0b25zRGl2Iiwib3B0aW9ucyIsImluZGV4T3B0aW9ucyIsInVwZGF0ZVhNUCIsImdldFRvcG1vc3RNYXJrZG93blN0eWxlTm9kZSIsImdldE1hcmtkb3duU3R5bGVUb2tlbnMiLCJ0b3Btb3N0Q1NTTm9kZSIsInRhcmdldCIsIldFQl9UQVJHRVQiLCJ0b3Btb3N0Q1NTTm9kZVBhcnNlVHJlZSIsImNzc1BhcnNlVHJlZSIsInVwZGF0ZUNTU1BhcnNlVHJlZVRleHRhcmVhIiwibWFya2Rvd25TdHlsZUVsZW1lbnQiLCJnZXRNYXJrZG93blN0eWxlRWxlbWVudCIsImNzc1NlbGVjdG9yc1N0cmluZyIsIlBSRVZJRVdfQ1NTX1NFTEVDVE9SU19TVFJJTkciLCJzZXRDU1MiLCJoaWRlTWFya2Rvd25Db250YWluZXJEaXYiLCJzaG93TWFya2Rvd25TdHlsZUNvbnRhaW5lckRpdiIsInNob3dNYXJrZG93bkNvbnRhaW5lckRpdiIsImhpZGVNYXJrZG93blN0eWxlQ29udGFpbmVyRGl2IiwiaGlkZUNTU0NvbnRhaW5lckRpdiIsImhpZGVIVE1MQ29udGFpbmVyRGl2IiwiaGlkZVByZXZpZXdDb250YWluZXJEaXYiLCJzaG93UGxhaW5UZXh0Q29udGFpbmVyRGl2IiwiaGlkZUNTU1BhcnNlVHJlZVRleHRhcmVhIiwic2hvd0hUTUxQYXJzZVRyZWVUZXh0YXJlYSIsInNob3dQcmV2aWV3Q29udGFpbmVyRGl2IiwiaGlkZVBsYWluVGV4dENvbnRhaW5lckRpdiIsInNob3dIVE1MQ29udGFpbmVyRGl2Iiwic2hvd0NTU0NvbnRhaW5lckRpdiIsInNob3dDU1NQYXJzZVRyZWVUZXh0YXJlYSIsImhpZGVIVE1MUGFyc2VUcmVlVGV4dGFyZWEiLCJwcm9wZXJ0aWVzIiwiZ2V0U3RhdGUiLCJ0b3Btb3N0TU1hcmtkb3duTm9kZSIsInRvcG1vc3RNTWFya2Rvd25TdHlsZU5vZGUiLCJ1cGRhdGVTdGF0ZSIsInNldEluaXRpYWxTdGF0ZSIsInNldFN0YXRlIiwiZGlkTW91bnQiLCJ3aWxsVW5tb3VudCIsImNoaWxkRWxlbWVudHMiLCJDb2x1bW5zRGl2IiwiTGVmdFNpemVhYmxlRGl2IiwiTGVmdFRhYkJ1dHRvbnNEaXYiLCJvbkN1c3RvbU1hcmtkb3duIiwib25DdXN0b21NYXJrZG93blN0eWxlIiwiTWFya2Rvd25Db250YWluZXJEaXYiLCJvbkN1c3RvbUtleVVwIiwiTWFya2Rvd25TdHlsZUNvbnRhaW5lckRpdiIsIlZlcnRpY2FsU3BsaXR0ZXJEaXYiLCJDb2x1bW5EaXYiLCJSb3dzRGl2IiwiUmlnaHRUYWJCdXR0b25zRGl2Iiwib25DdXN0b21DU1MiLCJvbkN1c3RvbUhUTUwiLCJvbkN1c3RvbVByZXZpZXciLCJvbkN1c3RvbVBsYWluVGV4dCIsIlBhZ2VCdXR0b25zRGl2Iiwib25DdXN0b21QYWdlVXBkYXRlIiwiQ1NTQ29udGFpbmVyRGl2IiwiSFRNTENvbnRhaW5lckRpdiIsIlByZXZpZXdDb250YWluZXJEaXYiLCJQbGFpblRleHRDb250YWluZXJEaXYiLCJIVE1MUGFyc2VUcmVlVGV4dGFyZWEiLCJDU1NQYXJzZVRyZWVUZXh0YXJlYSIsImluaXRpYWxpc2UiLCJhc3NpZ25Db250ZXh0IiwiaW5pdGlhbE1hcmtkb3duIiwiaW5pdGlhbE1hcmtkb3duU3R5bGUiLCJzZXRNYXJrZG93blN0eWxlIiwic2V0TWFya2Rvd24iLCJFbGVtZW50IiwidGFnTmFtZSIsImlnbm9yZWRQcm9wZXJ0aWVzIiwiZGVmYXVsdFByb3BlcnRpZXMiLCJjbGFzc05hbWUiLCJ3aXRoU3R5bGUiLCJwYXRoIiwidXJsIl0sIm1hcHBpbmdzIjoi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