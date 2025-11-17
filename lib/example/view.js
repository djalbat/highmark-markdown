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
var _targets = require("../targets");
var _importer = require("./importer");
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
                var topmostMarkdownStyleNode = this.getTopmostMarkdownStyleNode(), markdownStyleElement = this.getMarkdownStyleElement(), markdownStyleTokens = this.getMarkdownStyleTokens(), markdownStyleNode = topmostMarkdownStyleNode; ///
                if (markdownStyleNode === null) {
                    var css = _constants.EMPTY_STRING;
                    markdownStyleElement.setCSS(css);
                    this.clearCSSParseTreeTextarea();
                    this.clearCSS();
                    return;
                }
                var topmostCSSNode = topmostCSSNodeFromMarkdownStyleNode(markdownStyleNode), target = _targets.WEB_TARGET, tokens = markdownStyleTokens, context = {
                    target: target,
                    tokens: tokens
                };
                topmostCSSNode.resolve(context);
                var topmostCSSNodeParseTree = topmostCSSNode.asParseTree(tokens), cssParseTree = topmostCSSNodeParseTree; ///
                this.updateCSSParseTreeTextarea(cssParseTree);
                var cssSelectorsString = _constants.PREVIEW_CSS_SELECTORS_STRING, markdownStyle = this.getMarkdownStyle(), css1 = cssFromMarkdownStyleAndCSSSelectorsString(markdownStyle, cssSelectorsString);
                markdownStyleElement.setCSS(css1);
                this.setCSS(css1);
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
_define_property(View, "initialMarkdown", "\n\nA [link](https://djalbat.com).  \n");
_define_property(View, "initialMarkdownStyle", "");
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9leGFtcGxlL3ZpZXcuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB3aXRoU3R5bGUgZnJvbSBcImVhc3ktd2l0aC1zdHlsZVwiOyAgLy8vXG5cbmltcG9ydCB7IEVsZW1lbnQgfSBmcm9tIFwiZWFzeVwiO1xuaW1wb3J0IHsgZ3JhbW1hclV0aWxpdGllcyB9IGZyb20gXCIuLi9pbmRleFwiOyAgLy8vXG5pbXBvcnQgeyBSb3dzRGl2LCBDb2x1bW5EaXYsIENvbHVtbnNEaXYsIFZlcnRpY2FsU3BsaXR0ZXJEaXYgfSBmcm9tIFwiZWFzeS1sYXlvdXRcIjtcblxuaW1wb3J0IGluZGV4T3B0aW9ucyBmcm9tIFwiLi9pbmRleE9wdGlvbnNcIjtcbmltcG9ydCBQYWdlQnV0dG9uc0RpdiBmcm9tIFwiLi92aWV3L2Rpdi9wYWdlQnV0dG9uc1wiO1xuaW1wb3J0IExlZnRTaXplYWJsZURpdiBmcm9tIFwiLi92aWV3L2Rpdi9zaXplYWJsZS9sZWZ0XCI7XG5pbXBvcnQgQ1NTQ29udGFpbmVyRGl2IGZyb20gXCIuL3ZpZXcvZGl2L2NvbnRhaW5lci9jc3NcIjtcbmltcG9ydCBIVE1MQ29udGFpbmVyRGl2IGZyb20gXCIuL3ZpZXcvZGl2L2NvbnRhaW5lci9odG1sXCI7XG5pbXBvcnQgTGVmdFRhYkJ1dHRvbnNEaXYgZnJvbSBcIi4vdmlldy9kaXYvdGFiQnV0dG9ucy9sZWZ0XCI7XG5pbXBvcnQgUmlnaHRUYWJCdXR0b25zRGl2IGZyb20gXCIuL3ZpZXcvZGl2L3RhYkJ1dHRvbnMvcmlnaHRcIjtcbmltcG9ydCBQcmV2aWV3Q29udGFpbmVyRGl2IGZyb20gXCIuL3ZpZXcvZGl2L2NvbnRhaW5lci9wcmV2aWV3XCI7XG5pbXBvcnQgTWFya2Rvd25Db250YWluZXJEaXYgZnJvbSBcIi4vdmlldy9kaXYvY29udGFpbmVyL21hcmtkb3duXCI7XG5pbXBvcnQgQ1NTUGFyc2VUcmVlVGV4dGFyZWEgZnJvbSBcIi4vdmlldy90ZXh0YXJlYS9wYXJzZVRyZWUvY3NzXCI7XG5pbXBvcnQgSFRNTFBhcnNlVHJlZVRleHRhcmVhIGZyb20gXCIuL3ZpZXcvdGV4dGFyZWEvcGFyc2VUcmVlL2h0bWxcIjtcbmltcG9ydCBQbGFpblRleHRDb250YWluZXJEaXYgZnJvbSBcIi4vdmlldy9kaXYvY29udGFpbmVyL3BsYWluVGV4dFwiO1xuaW1wb3J0IE1hcmtkb3duU3R5bGVDb250YWluZXJEaXYgZnJvbSBcIi4vdmlldy9kaXYvY29udGFpbmVyL21hcmtkb3duU3R5bGVcIjtcblxuaW1wb3J0IHsgV0VCX1RBUkdFVCB9IGZyb20gXCIuLi90YXJnZXRzXCI7XG5pbXBvcnQgeyBpbml0aWFsTWFya2Rvd24sIGltcG9ydGVyIH0gZnJvbSBcIi4vaW1wb3J0ZXJcIjtcbmltcG9ydCB7IEVNUFRZX1NUUklORywgUFJFVklFV19DU1NfU0VMRUNUT1JTX1NUUklORyB9IGZyb20gXCIuL2NvbnN0YW50c1wiO1xuXG5jb25zdCB7IHRva2Vuc0Zyb21NYXJrZG93bixcbiAgICAgICAgbWFya2Rvd25Ob2RlRnJvbVRva2VucyxcbiAgICAgICAgdG9rZW5zRnJvbU1hcmtkb3duU3R5bGUsXG4gICAgICAgIG1hcmtkb3duU3R5bGVOb2RlRnJvbVRva2VucyxcbiAgICAgICAgdG9wbW9zdEhUTUxOb2RlRnJvbU1hcmtkb3duTm9kZSxcbiAgICAgICAgaHRtbEZyb21NYXJrZG93bk9wdGlvbnNBbmRJbXBvcnRlcixcbiAgICAgICAgdG9wbW9zdENTU05vZGVGcm9tTWFya2Rvd25TdHlsZU5vZGUsXG4gICAgICAgIGNzc0Zyb21NYXJrZG93blN0eWxlQW5kQ1NTU2VsZWN0b3JzU3RyaW5nIH0gPSBncmFtbWFyVXRpbGl0aWVzO1xuXG5jbGFzcyBWaWV3IGV4dGVuZHMgRWxlbWVudCB7XG4gIHBhZ2VVcGRhdGVDdXN0b21IYW5kbGVyID0gKGV2ZW50LCBlbGVtZW50LCBpbmRleCkgPT4ge1xuICAgIHRoaXMudXBkYXRlSFRNTChpbmRleCk7XG4gIH1cblxuICBtYXJrZG93blN0eWxlQ3VzdG9tSGFuZGxlciA9IChldmVudCwgZWxlbWVudCkgPT4ge1xuICAgIHRoaXMubWFya2Rvd25TdHlsZSgpO1xuICB9XG5cbiAgbWFya2Rvd25DdXN0b21IYW5kbGVyID0gKGV2ZW50LCBlbGVtZW50KSA9PiB7XG4gICAgdGhpcy5tYXJrZG93bigpO1xuICB9XG5cbiAgcGxhaW5UZXh0Q3VzdG9tSGFuZGxlciA9IChldmVudCwgZWxlbWVudCkgPT4ge1xuICAgIHRoaXMucGxhaW5UZXh0KCk7XG4gIH1cblxuICBwcmV2aWV3Q3VzdG9tSGFuZGxlciA9IChldmVudCwgZWxlbWVudCkgPT4ge1xuICAgIHRoaXMucHJldmlldygpO1xuICB9XG5cbiAga2V5VXBDdXN0b21IYW5kbGVyID0gKGV2ZW50LCBlbGVtZW50KSA9PiB7XG4gICAgdGhpcy51cGRhdGUoKTtcbiAgfVxuXG4gIGh0bWxDdXN0b21IYW5kbGVyID0gKGV2ZW50LCBlbGVtZW50KSA9PiB7XG4gICAgdGhpcy5odG1sKCk7XG4gIH1cblxuICBjc3NDdXN0b21IYW5kbGVyID0gKGV2ZW50LCBlbGVtZW50KSA9PiB7XG4gICAgdGhpcy5jc3MoKTtcbiAgfVxuXG4gIHVwZGF0ZSgpIHtcbiAgICB0aGlzLnVwZGF0ZU1hcmtkb3duU3R5bGUoKTtcblxuICAgIHRoaXMudXBkYXRlTWFya2Rvd24oKTtcblxuICAgIHRoaXMudXBkYXRlSFRNTCgpO1xuXG4gICAgdGhpcy51cGRhdGVDU1MoKTtcbiAgfVxuXG4gIHVwZGF0ZU1hcmtkb3duU3R5bGUoKSB7XG4gICAgY29uc3QgbWFya2Rvd25TdHlsZSA9IHRoaXMuZ2V0TWFya2Rvd25TdHlsZSgpLFxuICAgICAgICAgIHRva2VucyA9IHRva2Vuc0Zyb21NYXJrZG93blN0eWxlKG1hcmtkb3duU3R5bGUpLFxuICAgICAgICAgIG1hcmtkb3duU3R5bGVOb2RlID0gbWFya2Rvd25TdHlsZU5vZGVGcm9tVG9rZW5zKHRva2Vucyk7XG5cbiAgICBpZiAobWFya2Rvd25TdHlsZU5vZGUgPT09IG51bGwpIHtcbiAgICAgIHRoaXMucmVzZXRNYXJrZG93blN0eWxlVG9rZW5zKCk7XG5cbiAgICAgIHRoaXMucmVzZXRUb3Btb3N0TWFya2Rvd25TdHlsZU5vZGUoKTtcblxuICAgICAgdGhpcy5jbGVhck1hcmtkb3duU3R5bGVQYXJzZVRyZWVUZXh0YXJlYSgpO1xuXG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3Qgbm9kZSA9IG1hcmtkb3duU3R5bGVOb2RlLCAvLy9cbiAgICAgICAgICBwYXJzZVRyZWUgPSBub2RlLmFzUGFyc2VUcmVlKHRva2VucyksXG4gICAgICAgICAgbWFya2Rvd25TdHlsZVRva2VucyA9IHRva2VucywgLy8vXG4gICAgICAgICAgdG9wbW9zdE1hcmtkb3duU3R5bGVOb2RlID0gbm9kZTsgLy8vXG5cbiAgICB0aGlzLnNldE1hcmtkb3duU3R5bGVUb2tlbnMobWFya2Rvd25TdHlsZVRva2Vucyk7XG5cbiAgICB0aGlzLnNldFRvcG1vc3RNYXJrZG93blN0eWxlTm9kZSh0b3Btb3N0TWFya2Rvd25TdHlsZU5vZGUpO1xuXG4gICAgdGhpcy51cGRhdGVNYXJrZG93blN0eWxlUGFyc2VUcmVlVGV4dGFyZWEocGFyc2VUcmVlKTtcbiAgfVxuXG4gIHVwZGF0ZU1hcmtkb3duKCkge1xuICAgIGNvbnN0IG1hcmtkb3duID0gdGhpcy5nZXRNYXJrZG93bigpLFxuICAgICAgICAgIHRva2VucyA9IHRva2Vuc0Zyb21NYXJrZG93bihtYXJrZG93biksXG4gICAgICAgICAgbWFya2Rvd25Ob2RlID0gbWFya2Rvd25Ob2RlRnJvbVRva2Vucyh0b2tlbnMpO1xuXG4gICAgaWYgKG1hcmtkb3duTm9kZSA9PT0gbnVsbCkge1xuICAgICAgdGhpcy5yZXNldE1hcmtkb3duVG9rZW5zKCk7XG5cbiAgICAgIHRoaXMucmVzZXRUb3Btb3N0TWFya2Rvd25Ob2RlKCk7XG5cbiAgICAgIHRoaXMuY2xlYXJNYXJrZG93blBhcnNlVHJlZVRleHRhcmVhKCk7XG5cbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBsZXQgY29udGV4dDtcblxuICAgIGNvbnN0IHRvcG1vc3RNYXJrZG93bk5vZGUgPSBtYXJrZG93bk5vZGU7IC8vL1xuXG4gICAgY29udGV4dCA9IHtcbiAgICAgIHRva2VucyxcbiAgICAgIGltcG9ydGVyXG4gICAgfTtcblxuICAgIHRvcG1vc3RNYXJrZG93bk5vZGUucmVzb2x2ZShjb250ZXh0KTtcblxuICAgIGNvbnN0IHRvcG1vc3RNYXJrZG93bk5vZGVQYXJzZVRyZWUgPSB0b3Btb3N0TWFya2Rvd25Ob2RlLmFzUGFyc2VUcmVlKHRva2VucyksXG4gICAgICAgICAgbWFya2Rvd25QYXJzZVRyZWUgPSB0b3Btb3N0TWFya2Rvd25Ob2RlUGFyc2VUcmVlLCAvLy9cbiAgICAgICAgICBtYXJrZG93blRva2VucyA9IHRva2VuczsgIC8vL1xuXG4gICAgdGhpcy5zZXRNYXJrZG93blRva2VucyhtYXJrZG93blRva2Vucyk7XG5cbiAgICB0aGlzLnNldFRvcG1vc3RNYXJrZG93bk5vZGUodG9wbW9zdE1hcmtkb3duTm9kZSk7XG5cbiAgICB0aGlzLnVwZGF0ZU1hcmtkb3duUGFyc2VUcmVlVGV4dGFyZWEobWFya2Rvd25QYXJzZVRyZWUpO1xuICB9XG5cbiAgdXBkYXRlSFRNTChpbmRleCA9IDApIHtcbiAgICB0aGlzLmNsZWFyWE1QKCk7XG5cbiAgICB0aGlzLmNsZWFyUHJldmlld0RpdigpO1xuXG4gICAgdGhpcy5jbGVhclBsYWluVGV4dFRleHRhcmVhKCk7XG5cbiAgICB0aGlzLmNsZWFySFRNTFBhcnNlVHJlZVRleHRhcmVhKCk7XG5cbiAgICB0aGlzLmNsZWFyUGFnZUJ1dHRvbnNEaXYoKTtcblxuICAgIGNvbnN0IHRvcG1vc3RNYXJrZG93bk5vZGUgPSB0aGlzLmdldFRvcG1vc3RNYXJrZG93bk5vZGUoKSxcbiAgICAgICAgICBtYXJrZG93bk5vZGUgPSB0b3Btb3N0TWFya2Rvd25Ob2RlLCAvLy9cbiAgICAgICAgICB0b3Btb3N0SFRNTE5vZGUgPSB0b3Btb3N0SFRNTE5vZGVGcm9tTWFya2Rvd25Ob2RlKG1hcmtkb3duTm9kZSk7XG5cbiAgICBpZiAodG9wbW9zdEhUTUxOb2RlID09PSBudWxsKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgbGV0IGNvbnRleHQ7XG5cbiAgICBjb25zdCBtYXJrZG93blRva2VucyA9IHRoaXMuZ2V0TWFya2Rvd25Ub2tlbnMoKSxcbiAgICAgICAgICB0b2tlbnMgPSBtYXJrZG93blRva2VuczsgIC8vL1xuXG4gICAgY29udGV4dCA9IHtcbiAgICAgIHRva2Vuc1xuICAgIH07XG5cbiAgICB0b3Btb3N0SFRNTE5vZGUucmVzb2x2ZShjb250ZXh0KTtcblxuICAgIGNvbnN0IGRpdmlzaW9uSFRNTE5PZGUgPSB0b3Btb3N0SFRNTE5vZGUuZ2V0RGl2aXNpb25IVE1MTm9kZUF0KGluZGV4KTtcblxuICAgIGlmIChkaXZpc2lvbkhUTUxOT2RlID09PSBudWxsKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgZGl2aXNpb25IVE1MTk9kZVBhcnNlVHJlZSA9IGRpdmlzaW9uSFRNTE5PZGUuYXNQYXJzZVRyZWUoKSxcbiAgICAgICAgICBodG1sUGFyc2VUcmVlID0gZGl2aXNpb25IVE1MTk9kZVBhcnNlVHJlZSwgIC8vL1xuICAgICAgICAgIG11bHRpcGxpY2l0eSA9IHRvcG1vc3RIVE1MTm9kZS5nZXRNdWx0aXBsaWNpdHkoKSxcbiAgICAgICAgICBsZW5ndGggPSBtdWx0aXBsaWNpdHk7ICAvLy9cblxuICAgIGNvbnRleHQgPSB7XG4gICAgICB0b2tlbnMsXG4gICAgICBwYXRoVG9VUkxcbiAgICB9O1xuXG4gICAgdGhpcy51cGRhdGVQcmV2aWV3RGl2KGRpdmlzaW9uSFRNTE5PZGUsIGNvbnRleHQpO1xuXG4gICAgdGhpcy51cGRhdGVQbGFpblRleHRUZXh0YXJlYShkaXZpc2lvbkhUTUxOT2RlLCBjb250ZXh0KTtcblxuICAgIHRoaXMudXBkYXRlSFRNTFBhcnNlVHJlZVRleHRhcmVhKGh0bWxQYXJzZVRyZWUpO1xuXG4gICAgdGhpcy51cGRhdGVQYWdlQnV0dG9uc0RpdihsZW5ndGgsIGluZGV4KTtcblxuICAgIGNvbnN0IG1hcmtkb3duID0gdGhpcy5nZXRNYXJrZG93bigpLFxuICAgICAgICAgIG9wdGlvbnMgPSBpbmRleE9wdGlvbnMsIC8vL1xuICAgICAgICAgIGh0bWwgPSBodG1sRnJvbU1hcmtkb3duT3B0aW9uc0FuZEltcG9ydGVyKG1hcmtkb3duLCBvcHRpb25zLCBpbXBvcnRlcik7XG5cbiAgICB0aGlzLnVwZGF0ZVhNUChodG1sLCBjb250ZXh0KTtcbiAgfVxuXG4gIHVwZGF0ZUNTUygpIHtcbiAgICBjb25zdCB0b3Btb3N0TWFya2Rvd25TdHlsZU5vZGUgPSB0aGlzLmdldFRvcG1vc3RNYXJrZG93blN0eWxlTm9kZSgpLFxuICAgICAgICAgIG1hcmtkb3duU3R5bGVFbGVtZW50ID0gdGhpcy5nZXRNYXJrZG93blN0eWxlRWxlbWVudCgpLFxuICAgICAgICAgIG1hcmtkb3duU3R5bGVUb2tlbnMgPSB0aGlzLmdldE1hcmtkb3duU3R5bGVUb2tlbnMoKSxcbiAgICAgICAgICBtYXJrZG93blN0eWxlTm9kZSA9IHRvcG1vc3RNYXJrZG93blN0eWxlTm9kZTsgLy8vXG5cbiAgICBpZiAobWFya2Rvd25TdHlsZU5vZGUgPT09IG51bGwpIHtcbiAgICAgIGNvbnN0IGNzcyA9IEVNUFRZX1NUUklORztcblxuICAgICAgbWFya2Rvd25TdHlsZUVsZW1lbnQuc2V0Q1NTKGNzcyk7XG5cbiAgICAgIHRoaXMuY2xlYXJDU1NQYXJzZVRyZWVUZXh0YXJlYSgpO1xuXG4gICAgICB0aGlzLmNsZWFyQ1NTKCk7XG5cbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCB0b3Btb3N0Q1NTTm9kZSA9IHRvcG1vc3RDU1NOb2RlRnJvbU1hcmtkb3duU3R5bGVOb2RlKG1hcmtkb3duU3R5bGVOb2RlKSxcbiAgICAgICAgICB0YXJnZXQgPSBXRUJfVEFSR0VULFxuICAgICAgICAgIHRva2VucyA9IG1hcmtkb3duU3R5bGVUb2tlbnMsIC8vL1xuICAgICAgICAgIGNvbnRleHQgPSB7XG4gICAgICAgICAgICB0YXJnZXQsXG4gICAgICAgICAgICB0b2tlbnNcbiAgICAgICAgICB9O1xuXG4gICAgdG9wbW9zdENTU05vZGUucmVzb2x2ZShjb250ZXh0KTtcblxuICAgIGNvbnN0IHRvcG1vc3RDU1NOb2RlUGFyc2VUcmVlID0gdG9wbW9zdENTU05vZGUuYXNQYXJzZVRyZWUodG9rZW5zKSxcbiAgICAgICAgICBjc3NQYXJzZVRyZWUgPSB0b3Btb3N0Q1NTTm9kZVBhcnNlVHJlZTsgLy8vXG5cbiAgICB0aGlzLnVwZGF0ZUNTU1BhcnNlVHJlZVRleHRhcmVhKGNzc1BhcnNlVHJlZSk7XG5cbiAgICBjb25zdCBjc3NTZWxlY3RvcnNTdHJpbmcgPSBQUkVWSUVXX0NTU19TRUxFQ1RPUlNfU1RSSU5HLFxuICAgICAgICAgIG1hcmtkb3duU3R5bGUgPSB0aGlzLmdldE1hcmtkb3duU3R5bGUoKSxcbiAgICAgICAgICBjc3MgPSBjc3NGcm9tTWFya2Rvd25TdHlsZUFuZENTU1NlbGVjdG9yc1N0cmluZyhtYXJrZG93blN0eWxlLCBjc3NTZWxlY3RvcnNTdHJpbmcpO1xuXG4gICAgbWFya2Rvd25TdHlsZUVsZW1lbnQuc2V0Q1NTKGNzcyk7XG5cbiAgICB0aGlzLnNldENTUyhjc3MpO1xuICB9XG5cbiAgbWFya2Rvd25TdHlsZSgpIHtcbiAgICB0aGlzLmhpZGVNYXJrZG93bkNvbnRhaW5lckRpdigpO1xuICAgIHRoaXMuc2hvd01hcmtkb3duU3R5bGVDb250YWluZXJEaXYoKTtcbiAgfVxuXG4gIG1hcmtkb3duKCkge1xuICAgIHRoaXMuc2hvd01hcmtkb3duQ29udGFpbmVyRGl2KCk7XG4gICAgdGhpcy5oaWRlTWFya2Rvd25TdHlsZUNvbnRhaW5lckRpdigpO1xuICB9XG5cbiAgcGxhaW5UZXh0KCkge1xuICAgIHRoaXMuaGlkZUNTU0NvbnRhaW5lckRpdigpO1xuICAgIHRoaXMuaGlkZUhUTUxDb250YWluZXJEaXYoKTtcbiAgICB0aGlzLmhpZGVQcmV2aWV3Q29udGFpbmVyRGl2KCk7XG4gICAgdGhpcy5zaG93UGxhaW5UZXh0Q29udGFpbmVyRGl2KCk7XG5cbiAgICB0aGlzLmhpZGVDU1NQYXJzZVRyZWVUZXh0YXJlYSgpO1xuICAgIHRoaXMuc2hvd0hUTUxQYXJzZVRyZWVUZXh0YXJlYSgpO1xuICB9XG5cbiAgcHJldmlldygpIHtcbiAgICB0aGlzLmhpZGVDU1NDb250YWluZXJEaXYoKTtcbiAgICB0aGlzLmhpZGVIVE1MQ29udGFpbmVyRGl2KCk7XG4gICAgdGhpcy5zaG93UHJldmlld0NvbnRhaW5lckRpdigpO1xuICAgIHRoaXMuaGlkZVBsYWluVGV4dENvbnRhaW5lckRpdigpO1xuXG4gICAgdGhpcy5oaWRlQ1NTUGFyc2VUcmVlVGV4dGFyZWEoKTtcbiAgICB0aGlzLnNob3dIVE1MUGFyc2VUcmVlVGV4dGFyZWEoKTtcbiAgfVxuXG4gIGh0bWwoKSB7XG4gICAgdGhpcy5oaWRlQ1NTQ29udGFpbmVyRGl2KCk7XG4gICAgdGhpcy5zaG93SFRNTENvbnRhaW5lckRpdigpO1xuICAgIHRoaXMuaGlkZVByZXZpZXdDb250YWluZXJEaXYoKTtcbiAgICB0aGlzLmhpZGVQbGFpblRleHRDb250YWluZXJEaXYoKTtcblxuICAgIHRoaXMuaGlkZUNTU1BhcnNlVHJlZVRleHRhcmVhKCk7XG4gICAgdGhpcy5zaG93SFRNTFBhcnNlVHJlZVRleHRhcmVhKCk7XG4gIH1cblxuICBjc3MoKSB7XG4gICAgdGhpcy5zaG93Q1NTQ29udGFpbmVyRGl2KCk7XG4gICAgdGhpcy5oaWRlSFRNTENvbnRhaW5lckRpdigpO1xuICAgIHRoaXMuaGlkZVByZXZpZXdDb250YWluZXJEaXYoKTtcbiAgICB0aGlzLmhpZGVQbGFpblRleHRDb250YWluZXJEaXYoKTtcblxuICAgIHRoaXMuc2hvd0NTU1BhcnNlVHJlZVRleHRhcmVhKCk7XG4gICAgdGhpcy5oaWRlSFRNTFBhcnNlVHJlZVRleHRhcmVhKCk7XG4gIH1cblxuICByZXNldE1hcmtkb3duVG9rZW5zKCkge1xuICAgIGNvbnN0IG1hcmtkb3duVG9rZW5zID0gbnVsbDtcblxuICAgIHRoaXMuc2V0TWFya2Rvd25Ub2tlbnMobWFya2Rvd25Ub2tlbnMpO1xuICB9XG5cbiAgcmVzZXRNYXJrZG93blN0eWxlVG9rZW5zKCkge1xuICAgIGNvbnN0IG1hcmtkb3duU3R5bGVUb2tlbnMgPSBudWxsO1xuXG4gICAgdGhpcy5zZXRNYXJrZG93blN0eWxlVG9rZW5zKG1hcmtkb3duU3R5bGVUb2tlbnMpO1xuICB9XG5cbiAgcmVzZXRUb3Btb3N0TWFya2Rvd25Ob2RlKCkge1xuICAgIGNvbnN0IHRvcG1vc3RNYXJrZG93bk5vZGUgPSBudWxsO1xuXG4gICAgdGhpcy5zZXRUb3Btb3N0TWFya2Rvd25Ob2RlKHRvcG1vc3RNYXJrZG93bk5vZGUpO1xuICB9XG5cbiAgcmVzZXRUb3Btb3N0TWFya2Rvd25TdHlsZU5vZGUoKSB7XG4gICAgY29uc3QgdG9wbW9zdE1hcmtkb3duU3R5bGVOb2RlID0gbnVsbDtcblxuICAgIHRoaXMuc2V0VG9wbW9zdE1hcmtkb3duU3R5bGVOb2RlKHRvcG1vc3RNYXJrZG93blN0eWxlTm9kZSk7XG4gIH1cblxuICBnZXRNYXJrZG93blN0eWxlRWxlbWVudCgpIHtcbiAgICBjb25zdCB7IG1hcmtkb3duU3R5bGVFbGVtZW50IH0gPSB0aGlzLnByb3BlcnRpZXM7XG5cbiAgICByZXR1cm4gbWFya2Rvd25TdHlsZUVsZW1lbnQ7XG4gIH1cblxuICBnZXRNYXJrZG93blRva2VucygpIHtcbiAgICBjb25zdCB7IG1hcmtkb3duVG9rZW5zIH0gPSB0aGlzLmdldFN0YXRlKCk7XG5cbiAgICByZXR1cm4gbWFya2Rvd25Ub2tlbnM7XG4gIH1cblxuICBnZXRNYXJrZG93blN0eWxlVG9rZW5zKCkge1xuICAgIGNvbnN0IHsgbWFya2Rvd25TdHlsZVRva2VucyB9ID0gdGhpcy5nZXRTdGF0ZSgpO1xuXG4gICAgcmV0dXJuIG1hcmtkb3duU3R5bGVUb2tlbnM7XG4gIH1cblxuICBnZXRUb3Btb3N0TWFya2Rvd25Ob2RlKCkge1xuICAgIGNvbnN0IHsgdG9wbW9zdE1NYXJrZG93bk5vZGUgfSA9IHRoaXMuZ2V0U3RhdGUoKTtcblxuICAgIHJldHVybiB0b3Btb3N0TU1hcmtkb3duTm9kZTtcbiAgfVxuXG4gIGdldFRvcG1vc3RNYXJrZG93blN0eWxlTm9kZSgpIHtcbiAgICBjb25zdCB7IHRvcG1vc3RNTWFya2Rvd25TdHlsZU5vZGUgfSA9IHRoaXMuZ2V0U3RhdGUoKTtcblxuICAgIHJldHVybiB0b3Btb3N0TU1hcmtkb3duU3R5bGVOb2RlO1xuICB9XG5cbiAgc2V0TWFya2Rvd25Ub2tlbnMobWFya2Rvd25Ub2tlbnMpIHtcbiAgICB0aGlzLnVwZGF0ZVN0YXRlKHtcbiAgICAgIG1hcmtkb3duVG9rZW5zXG4gICAgfSk7XG4gIH1cblxuICBzZXRNYXJrZG93blN0eWxlVG9rZW5zKG1hcmtkb3duU3R5bGVUb2tlbnMpIHtcbiAgICB0aGlzLnVwZGF0ZVN0YXRlKHtcbiAgICAgIG1hcmtkb3duU3R5bGVUb2tlbnNcbiAgICB9KTtcbiAgfVxuXG4gIHNldFRvcG1vc3RNYXJrZG93bk5vZGUodG9wbW9zdE1NYXJrZG93bk5vZGUpIHtcbiAgICB0aGlzLnVwZGF0ZVN0YXRlKHtcbiAgICAgIHRvcG1vc3RNTWFya2Rvd25Ob2RlXG4gICAgfSk7XG4gIH1cblxuICBzZXRUb3Btb3N0TWFya2Rvd25TdHlsZU5vZGUodG9wbW9zdE1NYXJrZG93blN0eWxlTm9kZSkge1xuICAgIHRoaXMudXBkYXRlU3RhdGUoe1xuICAgICAgdG9wbW9zdE1NYXJrZG93blN0eWxlTm9kZVxuICAgIH0pO1xuICB9XG5cbiAgc2V0SW5pdGlhbFN0YXRlKCkge1xuICAgIGNvbnN0IG1hcmtkb3duVG9rZW5zID0gbnVsbCxcbiAgICAgICAgICBtYXJrZG93blN0eWxlVG9rZW5zID0gbnVsbCxcbiAgICAgICAgICB0b3Btb3N0TWFya2Rvd25Ob2RlID0gbnVsbCxcbiAgICAgICAgICB0b3Btb3N0TWFya2Rvd25TdHlsZU5vZGUgPSBudWxsO1xuXG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBtYXJrZG93blRva2VucyxcbiAgICAgIG1hcmtkb3duU3R5bGVUb2tlbnMsXG4gICAgICB0b3Btb3N0TWFya2Rvd25Ob2RlLFxuICAgICAgdG9wbW9zdE1hcmtkb3duU3R5bGVOb2RlXG4gICAgfSk7XG4gIH1cblxuICBkaWRNb3VudCgpIHtcbiAgICB0aGlzLm1hcmtkb3duKCk7XG5cbiAgICB0aGlzLnByZXZpZXcoKTtcblxuICAgIHRoaXMudXBkYXRlKCk7XG4gIH1cblxuICB3aWxsVW5tb3VudCgpIHtcbiAgICAvLy9cbiAgfVxuXG4gIGNoaWxkRWxlbWVudHMoKSB7XG4gICAgcmV0dXJuIChcblxuICAgICAgPENvbHVtbnNEaXY+XG4gICAgICAgIDxMZWZ0U2l6ZWFibGVEaXY+XG4gICAgICAgICAgPExlZnRUYWJCdXR0b25zRGl2IG9uQ3VzdG9tTWFya2Rvd249e3RoaXMubWFya2Rvd25DdXN0b21IYW5kbGVyfSBvbkN1c3RvbU1hcmtkb3duU3R5bGU9e3RoaXMubWFya2Rvd25TdHlsZUN1c3RvbUhhbmRsZXJ9IC8+XG4gICAgICAgICAgPE1hcmtkb3duQ29udGFpbmVyRGl2IG9uQ3VzdG9tS2V5VXA9e3RoaXMua2V5VXBDdXN0b21IYW5kbGVyfSAvPlxuICAgICAgICAgIDxNYXJrZG93blN0eWxlQ29udGFpbmVyRGl2IG9uQ3VzdG9tS2V5VXA9e3RoaXMua2V5VXBDdXN0b21IYW5kbGVyfSAvPlxuICAgICAgICA8L0xlZnRTaXplYWJsZURpdj5cbiAgICAgICAgPFZlcnRpY2FsU3BsaXR0ZXJEaXYvPlxuICAgICAgICA8Q29sdW1uRGl2PlxuICAgICAgICAgIDxSb3dzRGl2PlxuICAgICAgICAgICAgPFJpZ2h0VGFiQnV0dG9uc0RpdiBvbkN1c3RvbUNTUz17dGhpcy5jc3NDdXN0b21IYW5kbGVyfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkN1c3RvbUhUTUw9e3RoaXMuaHRtbEN1c3RvbUhhbmRsZXJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ3VzdG9tUHJldmlldz17dGhpcy5wcmV2aWV3Q3VzdG9tSGFuZGxlcn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DdXN0b21QbGFpblRleHQ9e3RoaXMucGxhaW5UZXh0Q3VzdG9tSGFuZGxlcn1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8UGFnZUJ1dHRvbnNEaXYgb25DdXN0b21QYWdlVXBkYXRlPXt0aGlzLnBhZ2VVcGRhdGVDdXN0b21IYW5kbGVyfSAvPlxuICAgICAgICAgICAgPENTU0NvbnRhaW5lckRpdi8+XG4gICAgICAgICAgICA8SFRNTENvbnRhaW5lckRpdi8+XG4gICAgICAgICAgICA8UHJldmlld0NvbnRhaW5lckRpdi8+XG4gICAgICAgICAgICA8UGxhaW5UZXh0Q29udGFpbmVyRGl2Lz5cbiAgICAgICAgICAgIDxIVE1MUGFyc2VUcmVlVGV4dGFyZWEvPlxuICAgICAgICAgICAgPENTU1BhcnNlVHJlZVRleHRhcmVhLz5cbiAgICAgICAgICA8L1Jvd3NEaXY+XG4gICAgICAgIDwvQ29sdW1uRGl2PlxuICAgICAgPC9Db2x1bW5zRGl2PlxuXG4gICAgKTtcbiAgfVxuXG4gIGluaXRpYWxpc2UoKSB7XG4gICAgdGhpcy5hc3NpZ25Db250ZXh0KCk7XG5cbiAgICB0aGlzLnNldEluaXRpYWxTdGF0ZSgpO1xuXG4gICAgY29uc3QgeyBpbml0aWFsTWFya2Rvd24sIGluaXRpYWxNYXJrZG93blN0eWxlIH0gPSB0aGlzLmNvbnN0cnVjdG9yLFxuICAgICAgICAgIG1hcmtkb3duU3R5bGUgPSBpbml0aWFsTWFya2Rvd25TdHlsZSwgLy8vXG4gICAgICAgICAgbWFya2Rvd24gPSBpbml0aWFsTWFya2Rvd247IC8vL1xuXG4gICAgdGhpcy5zZXRNYXJrZG93blN0eWxlKG1hcmtkb3duU3R5bGUpO1xuXG4gICAgdGhpcy5zZXRNYXJrZG93bihtYXJrZG93bik7XG4gIH1cblxuICBzdGF0aWMgaW5pdGlhbE1hcmtkb3duID0gYFxuXG5BIFtsaW5rXShodHRwczovL2RqYWxiYXQuY29tKS4gIFxuYDtcblxuICBzdGF0aWMgaW5pdGlhbE1hcmtkb3duU3R5bGUgPSBcIlwiO1xuXG4gIHN0YXRpYyB0YWdOYW1lID0gXCJkaXZcIjtcblxuICBzdGF0aWMgaWdub3JlZFByb3BlcnRpZXMgPSBbXG4gICAgXCJtYXJrZG93blN0eWxlRWxlbWVudFwiXG4gIF07XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wZXJ0aWVzID0ge1xuICAgIGNsYXNzTmFtZTogXCJ2aWV3XCJcbiAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgd2l0aFN0eWxlKFZpZXcpYFxuXG4gIHBhZGRpbmc6IDFyZW07XG4gIFxuYDtcblxuZnVuY3Rpb24gcGF0aFRvVVJMKHBhdGgpIHtcbiAgY29uc3QgdXJsID0gYGh0dHBzOi8vZGphbGJhdC5jb20vJHtwYXRofWA7XG5cbiAgcmV0dXJuIHVybDtcbn1cbiJdLCJuYW1lcyI6WyJ0b2tlbnNGcm9tTWFya2Rvd24iLCJncmFtbWFyVXRpbGl0aWVzIiwibWFya2Rvd25Ob2RlRnJvbVRva2VucyIsInRva2Vuc0Zyb21NYXJrZG93blN0eWxlIiwibWFya2Rvd25TdHlsZU5vZGVGcm9tVG9rZW5zIiwidG9wbW9zdEhUTUxOb2RlRnJvbU1hcmtkb3duTm9kZSIsImh0bWxGcm9tTWFya2Rvd25PcHRpb25zQW5kSW1wb3J0ZXIiLCJ0b3Btb3N0Q1NTTm9kZUZyb21NYXJrZG93blN0eWxlTm9kZSIsImNzc0Zyb21NYXJrZG93blN0eWxlQW5kQ1NTU2VsZWN0b3JzU3RyaW5nIiwiVmlldyIsInBhZ2VVcGRhdGVDdXN0b21IYW5kbGVyIiwiZXZlbnQiLCJlbGVtZW50IiwiaW5kZXgiLCJ1cGRhdGVIVE1MIiwibWFya2Rvd25TdHlsZUN1c3RvbUhhbmRsZXIiLCJtYXJrZG93blN0eWxlIiwibWFya2Rvd25DdXN0b21IYW5kbGVyIiwibWFya2Rvd24iLCJwbGFpblRleHRDdXN0b21IYW5kbGVyIiwicGxhaW5UZXh0IiwicHJldmlld0N1c3RvbUhhbmRsZXIiLCJwcmV2aWV3Iiwia2V5VXBDdXN0b21IYW5kbGVyIiwidXBkYXRlIiwiaHRtbEN1c3RvbUhhbmRsZXIiLCJodG1sIiwiY3NzQ3VzdG9tSGFuZGxlciIsImNzcyIsInVwZGF0ZU1hcmtkb3duU3R5bGUiLCJ1cGRhdGVNYXJrZG93biIsInVwZGF0ZUNTUyIsImdldE1hcmtkb3duU3R5bGUiLCJ0b2tlbnMiLCJtYXJrZG93blN0eWxlTm9kZSIsInJlc2V0TWFya2Rvd25TdHlsZVRva2VucyIsInJlc2V0VG9wbW9zdE1hcmtkb3duU3R5bGVOb2RlIiwiY2xlYXJNYXJrZG93blN0eWxlUGFyc2VUcmVlVGV4dGFyZWEiLCJub2RlIiwicGFyc2VUcmVlIiwiYXNQYXJzZVRyZWUiLCJtYXJrZG93blN0eWxlVG9rZW5zIiwidG9wbW9zdE1hcmtkb3duU3R5bGVOb2RlIiwic2V0TWFya2Rvd25TdHlsZVRva2VucyIsInNldFRvcG1vc3RNYXJrZG93blN0eWxlTm9kZSIsInVwZGF0ZU1hcmtkb3duU3R5bGVQYXJzZVRyZWVUZXh0YXJlYSIsImdldE1hcmtkb3duIiwibWFya2Rvd25Ob2RlIiwicmVzZXRNYXJrZG93blRva2VucyIsInJlc2V0VG9wbW9zdE1hcmtkb3duTm9kZSIsImNsZWFyTWFya2Rvd25QYXJzZVRyZWVUZXh0YXJlYSIsImNvbnRleHQiLCJ0b3Btb3N0TWFya2Rvd25Ob2RlIiwiaW1wb3J0ZXIiLCJyZXNvbHZlIiwidG9wbW9zdE1hcmtkb3duTm9kZVBhcnNlVHJlZSIsIm1hcmtkb3duUGFyc2VUcmVlIiwibWFya2Rvd25Ub2tlbnMiLCJzZXRNYXJrZG93blRva2VucyIsInNldFRvcG1vc3RNYXJrZG93bk5vZGUiLCJ1cGRhdGVNYXJrZG93blBhcnNlVHJlZVRleHRhcmVhIiwiY2xlYXJYTVAiLCJjbGVhclByZXZpZXdEaXYiLCJjbGVhclBsYWluVGV4dFRleHRhcmVhIiwiY2xlYXJIVE1MUGFyc2VUcmVlVGV4dGFyZWEiLCJjbGVhclBhZ2VCdXR0b25zRGl2IiwiZ2V0VG9wbW9zdE1hcmtkb3duTm9kZSIsInRvcG1vc3RIVE1MTm9kZSIsImdldE1hcmtkb3duVG9rZW5zIiwiZGl2aXNpb25IVE1MTk9kZSIsImdldERpdmlzaW9uSFRNTE5vZGVBdCIsImRpdmlzaW9uSFRNTE5PZGVQYXJzZVRyZWUiLCJodG1sUGFyc2VUcmVlIiwibXVsdGlwbGljaXR5IiwiZ2V0TXVsdGlwbGljaXR5IiwibGVuZ3RoIiwicGF0aFRvVVJMIiwidXBkYXRlUHJldmlld0RpdiIsInVwZGF0ZVBsYWluVGV4dFRleHRhcmVhIiwidXBkYXRlSFRNTFBhcnNlVHJlZVRleHRhcmVhIiwidXBkYXRlUGFnZUJ1dHRvbnNEaXYiLCJvcHRpb25zIiwiaW5kZXhPcHRpb25zIiwidXBkYXRlWE1QIiwiZ2V0VG9wbW9zdE1hcmtkb3duU3R5bGVOb2RlIiwibWFya2Rvd25TdHlsZUVsZW1lbnQiLCJnZXRNYXJrZG93blN0eWxlRWxlbWVudCIsImdldE1hcmtkb3duU3R5bGVUb2tlbnMiLCJFTVBUWV9TVFJJTkciLCJzZXRDU1MiLCJjbGVhckNTU1BhcnNlVHJlZVRleHRhcmVhIiwiY2xlYXJDU1MiLCJ0b3Btb3N0Q1NTTm9kZSIsInRhcmdldCIsIldFQl9UQVJHRVQiLCJ0b3Btb3N0Q1NTTm9kZVBhcnNlVHJlZSIsImNzc1BhcnNlVHJlZSIsInVwZGF0ZUNTU1BhcnNlVHJlZVRleHRhcmVhIiwiY3NzU2VsZWN0b3JzU3RyaW5nIiwiUFJFVklFV19DU1NfU0VMRUNUT1JTX1NUUklORyIsImhpZGVNYXJrZG93bkNvbnRhaW5lckRpdiIsInNob3dNYXJrZG93blN0eWxlQ29udGFpbmVyRGl2Iiwic2hvd01hcmtkb3duQ29udGFpbmVyRGl2IiwiaGlkZU1hcmtkb3duU3R5bGVDb250YWluZXJEaXYiLCJoaWRlQ1NTQ29udGFpbmVyRGl2IiwiaGlkZUhUTUxDb250YWluZXJEaXYiLCJoaWRlUHJldmlld0NvbnRhaW5lckRpdiIsInNob3dQbGFpblRleHRDb250YWluZXJEaXYiLCJoaWRlQ1NTUGFyc2VUcmVlVGV4dGFyZWEiLCJzaG93SFRNTFBhcnNlVHJlZVRleHRhcmVhIiwic2hvd1ByZXZpZXdDb250YWluZXJEaXYiLCJoaWRlUGxhaW5UZXh0Q29udGFpbmVyRGl2Iiwic2hvd0hUTUxDb250YWluZXJEaXYiLCJzaG93Q1NTQ29udGFpbmVyRGl2Iiwic2hvd0NTU1BhcnNlVHJlZVRleHRhcmVhIiwiaGlkZUhUTUxQYXJzZVRyZWVUZXh0YXJlYSIsInByb3BlcnRpZXMiLCJnZXRTdGF0ZSIsInRvcG1vc3RNTWFya2Rvd25Ob2RlIiwidG9wbW9zdE1NYXJrZG93blN0eWxlTm9kZSIsInVwZGF0ZVN0YXRlIiwic2V0SW5pdGlhbFN0YXRlIiwic2V0U3RhdGUiLCJkaWRNb3VudCIsIndpbGxVbm1vdW50IiwiY2hpbGRFbGVtZW50cyIsIkNvbHVtbnNEaXYiLCJMZWZ0U2l6ZWFibGVEaXYiLCJMZWZ0VGFiQnV0dG9uc0RpdiIsIm9uQ3VzdG9tTWFya2Rvd24iLCJvbkN1c3RvbU1hcmtkb3duU3R5bGUiLCJNYXJrZG93bkNvbnRhaW5lckRpdiIsIm9uQ3VzdG9tS2V5VXAiLCJNYXJrZG93blN0eWxlQ29udGFpbmVyRGl2IiwiVmVydGljYWxTcGxpdHRlckRpdiIsIkNvbHVtbkRpdiIsIlJvd3NEaXYiLCJSaWdodFRhYkJ1dHRvbnNEaXYiLCJvbkN1c3RvbUNTUyIsIm9uQ3VzdG9tSFRNTCIsIm9uQ3VzdG9tUHJldmlldyIsIm9uQ3VzdG9tUGxhaW5UZXh0IiwiUGFnZUJ1dHRvbnNEaXYiLCJvbkN1c3RvbVBhZ2VVcGRhdGUiLCJDU1NDb250YWluZXJEaXYiLCJIVE1MQ29udGFpbmVyRGl2IiwiUHJldmlld0NvbnRhaW5lckRpdiIsIlBsYWluVGV4dENvbnRhaW5lckRpdiIsIkhUTUxQYXJzZVRyZWVUZXh0YXJlYSIsIkNTU1BhcnNlVHJlZVRleHRhcmVhIiwiaW5pdGlhbGlzZSIsImFzc2lnbkNvbnRleHQiLCJpbml0aWFsTWFya2Rvd24iLCJpbml0aWFsTWFya2Rvd25TdHlsZSIsInNldE1hcmtkb3duU3R5bGUiLCJzZXRNYXJrZG93biIsIkVsZW1lbnQiLCJ0YWdOYW1lIiwiaWdub3JlZFByb3BlcnRpZXMiLCJkZWZhdWx0UHJvcGVydGllcyIsImNsYXNzTmFtZSIsIndpdGhTdHlsZSIsInBhdGgiLCJ1cmwiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQThjQTs7O2VBQUE7OztvRUE1Y3NCO29CQUVFO3FCQUNTOzBCQUNtQzttRUFFM0M7a0VBQ0U7MkRBQ0M7MERBQ0E7MkRBQ0M7NERBQ0M7NERBQ0M7OERBQ0M7K0RBQ0M7MkRBQ0E7NERBQ0M7Z0VBQ0E7b0VBQ0k7dUJBRVg7d0JBQ2U7eUJBQ2lCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRTNELElBQVFBLHFCQU84Q0MsdUJBQWdCLENBUDlERCxvQkFDQUUseUJBTThDRCx1QkFBZ0IsQ0FOOURDLHdCQUNBQywwQkFLOENGLHVCQUFnQixDQUw5REUseUJBQ0FDLDhCQUk4Q0gsdUJBQWdCLENBSjlERyw2QkFDQUMsa0NBRzhDSix1QkFBZ0IsQ0FIOURJLGlDQUNBQyxxQ0FFOENMLHVCQUFnQixDQUY5REssb0NBQ0FDLHNDQUM4Q04sdUJBQWdCLENBRDlETSxxQ0FDQUMsNENBQThDUCx1QkFBZ0IsQ0FBOURPO0FBRVIsSUFBQSxBQUFNQyxxQkFBTjtjQUFNQTthQUFBQTtnQ0FBQUE7O2dCQUFOLGtCQUFNQSxrQkFDSkMsd0JBQUFBLDJCQUEwQixTQUFDQyxPQUFPQyxTQUFTQztZQUN6QyxNQUFLQyxVQUFVLENBQUNEO1FBQ2xCLElBRUFFLHdCQUFBQSw4QkFBNkIsU0FBQ0osT0FBT0M7WUFDbkMsTUFBS0ksYUFBYTtRQUNwQixJQUVBQyx3QkFBQUEseUJBQXdCLFNBQUNOLE9BQU9DO1lB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