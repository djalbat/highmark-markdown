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
var tokensFromMarkdown = _index.grammarUtilities.tokensFromMarkdown, markdownNodeFromTokens = _index.grammarUtilities.markdownNodeFromTokens, tokensFromMarkdownStyle = _index.grammarUtilities.tokensFromMarkdownStyle, markdownStyleNodeFromTokens = _index.grammarUtilities.markdownStyleNodeFromTokens, topmostHTMLNodeFromMarkdownNode = _index.grammarUtilities.topmostHTMLNodeFromMarkdownNode, topmostCSSNodeFromMarkdownStyleNode = _index.grammarUtilities.topmostCSSNodeFromMarkdownStyleNode;
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
                var markdownStyleElement = this.getMarkdownStyleElement(), topmostCSSNode = topmostCSSNodeFromMarkdownStyleNode(markdownStyleNode), target = _targets.WEB_TARGET, context = {
                    target: target,
                    tokens: tokens
                };
                topmostCSSNode.resolve(context);
                var css = topmostCSSNode.asCSS(context);
                markdownStyleElement.setCSS(css);
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
                var topmostMarkdownStyleNode = this.getTopmostMarkdownStyleNode(), markdownStyleTokens = this.getMarkdownStyleTokens(), markdownStyleNode = topmostMarkdownStyleNode, topmostCSSNode = topmostCSSNodeFromMarkdownStyleNode(markdownStyleNode), target = _targets.WEB_TARGET, tokens = markdownStyleTokens, context = {
                    target: target,
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
_define_property(View, "initialMarkdownStyle", "```web\nmargin: left;\n```\n\n");
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9leGFtcGxlL3ZpZXcuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB3aXRoU3R5bGUgZnJvbSBcImVhc3ktd2l0aC1zdHlsZVwiOyAgLy8vXG5cbmltcG9ydCB7IEVsZW1lbnQgfSBmcm9tIFwiZWFzeVwiO1xuaW1wb3J0IHsgZ3JhbW1hclV0aWxpdGllcyB9IGZyb20gXCIuLi9pbmRleFwiOyAgLy8vXG5pbXBvcnQgeyBSb3dzRGl2LCBDb2x1bW5EaXYsIENvbHVtbnNEaXYsIFZlcnRpY2FsU3BsaXR0ZXJEaXYgfSBmcm9tIFwiZWFzeS1sYXlvdXRcIjtcblxuaW1wb3J0IGluZGV4T3B0aW9ucyBmcm9tIFwiLi9pbmRleE9wdGlvbnNcIjtcbmltcG9ydCBQYWdlQnV0dG9uc0RpdiBmcm9tIFwiLi92aWV3L2Rpdi9wYWdlQnV0dG9uc1wiO1xuaW1wb3J0IExlZnRTaXplYWJsZURpdiBmcm9tIFwiLi92aWV3L2Rpdi9zaXplYWJsZS9sZWZ0XCI7XG5pbXBvcnQgQ1NTQ29udGFpbmVyRGl2IGZyb20gXCIuL3ZpZXcvZGl2L2NvbnRhaW5lci9jc3NcIjtcbmltcG9ydCBIVE1MQ29udGFpbmVyRGl2IGZyb20gXCIuL3ZpZXcvZGl2L2NvbnRhaW5lci9odG1sXCI7XG5pbXBvcnQgTGVmdFRhYkJ1dHRvbnNEaXYgZnJvbSBcIi4vdmlldy9kaXYvdGFiQnV0dG9ucy9sZWZ0XCI7XG5pbXBvcnQgUmlnaHRUYWJCdXR0b25zRGl2IGZyb20gXCIuL3ZpZXcvZGl2L3RhYkJ1dHRvbnMvcmlnaHRcIjtcbmltcG9ydCBQcmV2aWV3Q29udGFpbmVyRGl2IGZyb20gXCIuL3ZpZXcvZGl2L2NvbnRhaW5lci9wcmV2aWV3XCI7XG5pbXBvcnQgTWFya2Rvd25Db250YWluZXJEaXYgZnJvbSBcIi4vdmlldy9kaXYvY29udGFpbmVyL21hcmtkb3duXCI7XG5pbXBvcnQgQ1NTUGFyc2VUcmVlVGV4dGFyZWEgZnJvbSBcIi4vdmlldy90ZXh0YXJlYS9wYXJzZVRyZWUvY3NzXCI7XG5pbXBvcnQgSFRNTFBhcnNlVHJlZVRleHRhcmVhIGZyb20gXCIuL3ZpZXcvdGV4dGFyZWEvcGFyc2VUcmVlL2h0bWxcIjtcbmltcG9ydCBQbGFpblRleHRDb250YWluZXJEaXYgZnJvbSBcIi4vdmlldy9kaXYvY29udGFpbmVyL3BsYWluVGV4dFwiO1xuaW1wb3J0IE1hcmtkb3duU3R5bGVDb250YWluZXJEaXYgZnJvbSBcIi4vdmlldy9kaXYvY29udGFpbmVyL21hcmtkb3duU3R5bGVcIjtcblxuaW1wb3J0IHsgaW1wb3J0ZXIgfSBmcm9tIFwiLi9pbXBvcnRlclwiO1xuaW1wb3J0IHsgV0VCX1RBUkdFVCB9IGZyb20gXCIuLi90YXJnZXRzXCI7XG5cbmNvbnN0IHsgdG9rZW5zRnJvbU1hcmtkb3duLFxuICAgICAgICBtYXJrZG93bk5vZGVGcm9tVG9rZW5zLFxuICAgICAgICB0b2tlbnNGcm9tTWFya2Rvd25TdHlsZSxcbiAgICAgICAgbWFya2Rvd25TdHlsZU5vZGVGcm9tVG9rZW5zLFxuICAgICAgICB0b3Btb3N0SFRNTE5vZGVGcm9tTWFya2Rvd25Ob2RlLFxuICAgICAgICB0b3Btb3N0Q1NTTm9kZUZyb21NYXJrZG93blN0eWxlTm9kZSB9ID0gZ3JhbW1hclV0aWxpdGllcztcblxuY2xhc3MgVmlldyBleHRlbmRzIEVsZW1lbnQge1xuICBwYWdlVXBkYXRlQ3VzdG9tSGFuZGxlciA9IChldmVudCwgZWxlbWVudCwgaW5kZXgpID0+IHtcbiAgICB0aGlzLnVwZGF0ZUhUTUwoaW5kZXgpO1xuICB9XG5cbiAgbWFya2Rvd25TdHlsZUN1c3RvbUhhbmRsZXIgPSAoZXZlbnQsIGVsZW1lbnQpID0+IHtcbiAgICB0aGlzLm1hcmtkb3duU3R5bGUoKTtcbiAgfVxuXG4gIG1hcmtkb3duQ3VzdG9tSGFuZGxlciA9IChldmVudCwgZWxlbWVudCkgPT4ge1xuICAgIHRoaXMubWFya2Rvd24oKTtcbiAgfVxuXG4gIHBsYWluVGV4dEN1c3RvbUhhbmRsZXIgPSAoZXZlbnQsIGVsZW1lbnQpID0+IHtcbiAgICB0aGlzLnBsYWluVGV4dCgpO1xuICB9XG5cbiAgcHJldmlld0N1c3RvbUhhbmRsZXIgPSAoZXZlbnQsIGVsZW1lbnQpID0+IHtcbiAgICB0aGlzLnByZXZpZXcoKTtcbiAgfVxuXG4gIGtleVVwQ3VzdG9tSGFuZGxlciA9IChldmVudCwgZWxlbWVudCkgPT4ge1xuICAgIHRoaXMudXBkYXRlKCk7XG4gIH1cblxuICBodG1sQ3VzdG9tSGFuZGxlciA9IChldmVudCwgZWxlbWVudCkgPT4ge1xuICAgIHRoaXMuaHRtbCgpO1xuICB9XG5cbiAgY3NzQ3VzdG9tSGFuZGxlciA9IChldmVudCwgZWxlbWVudCkgPT4ge1xuICAgIHRoaXMuY3NzKCk7XG4gIH1cblxuICB1cGRhdGUoKSB7XG4gICAgdGhpcy51cGRhdGVNYXJrZG93blN0eWxlKCk7XG5cbiAgICB0aGlzLnVwZGF0ZU1hcmtkb3duKCk7XG5cbiAgICB0aGlzLnVwZGF0ZUhUTUwoKTtcblxuICAgIHRoaXMudXBkYXRlQ1NTKCk7XG4gIH1cblxuICB1cGRhdGVNYXJrZG93blN0eWxlKCkge1xuICAgIGNvbnN0IG1hcmtkb3duU3R5bGUgPSB0aGlzLmdldE1hcmtkb3duU3R5bGUoKSxcbiAgICAgICAgICB0b2tlbnMgPSB0b2tlbnNGcm9tTWFya2Rvd25TdHlsZShtYXJrZG93blN0eWxlKSxcbiAgICAgICAgICBtYXJrZG93blN0eWxlTm9kZSA9IG1hcmtkb3duU3R5bGVOb2RlRnJvbVRva2Vucyh0b2tlbnMpO1xuXG4gICAgaWYgKG1hcmtkb3duU3R5bGVOb2RlID09PSBudWxsKSB7XG4gICAgICB0aGlzLnJlc2V0TWFya2Rvd25TdHlsZVRva2VucygpO1xuXG4gICAgICB0aGlzLnJlc2V0VG9wbW9zdE1hcmtkb3duU3R5bGVOb2RlKCk7XG5cbiAgICAgIHRoaXMuY2xlYXJNYXJrZG93blN0eWxlUGFyc2VUcmVlVGV4dGFyZWEoKTtcblxuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IG5vZGUgPSBtYXJrZG93blN0eWxlTm9kZSwgLy8vXG4gICAgICAgICAgcGFyc2VUcmVlID0gbm9kZS5hc1BhcnNlVHJlZSh0b2tlbnMpLFxuICAgICAgICAgIG1hcmtkb3duU3R5bGVUb2tlbnMgPSB0b2tlbnMsIC8vL1xuICAgICAgICAgIHRvcG1vc3RNYXJrZG93blN0eWxlTm9kZSA9IG5vZGU7IC8vL1xuXG4gICAgdGhpcy5zZXRNYXJrZG93blN0eWxlVG9rZW5zKG1hcmtkb3duU3R5bGVUb2tlbnMpO1xuXG4gICAgdGhpcy5zZXRUb3Btb3N0TWFya2Rvd25TdHlsZU5vZGUodG9wbW9zdE1hcmtkb3duU3R5bGVOb2RlKTtcblxuICAgIHRoaXMudXBkYXRlTWFya2Rvd25TdHlsZVBhcnNlVHJlZVRleHRhcmVhKHBhcnNlVHJlZSk7XG5cbiAgICBjb25zdCBtYXJrZG93blN0eWxlRWxlbWVudCA9IHRoaXMuZ2V0TWFya2Rvd25TdHlsZUVsZW1lbnQoKSxcbiAgICAgICAgICB0b3Btb3N0Q1NTTm9kZSA9IHRvcG1vc3RDU1NOb2RlRnJvbU1hcmtkb3duU3R5bGVOb2RlKG1hcmtkb3duU3R5bGVOb2RlKSxcbiAgICAgICAgICB0YXJnZXQgPSBXRUJfVEFSR0VULFxuICAgICAgICAgIGNvbnRleHQgPSB7XG4gICAgICAgICAgICB0YXJnZXQsXG4gICAgICAgICAgICB0b2tlbnNcbiAgICAgICAgICB9O1xuXG4gICAgdG9wbW9zdENTU05vZGUucmVzb2x2ZShjb250ZXh0KTtcblxuICAgIGNvbnN0IGNzcyA9IHRvcG1vc3RDU1NOb2RlLmFzQ1NTKGNvbnRleHQpO1xuXG4gICAgbWFya2Rvd25TdHlsZUVsZW1lbnQuc2V0Q1NTKGNzcyk7XG4gIH1cblxuICB1cGRhdGVNYXJrZG93bigpIHtcbiAgICBjb25zdCBtYXJrZG93biA9IHRoaXMuZ2V0TWFya2Rvd24oKSxcbiAgICAgICAgICB0b2tlbnMgPSB0b2tlbnNGcm9tTWFya2Rvd24obWFya2Rvd24pLFxuICAgICAgICAgIG1hcmtkb3duTm9kZSA9IG1hcmtkb3duTm9kZUZyb21Ub2tlbnModG9rZW5zKTtcblxuICAgIGlmIChtYXJrZG93bk5vZGUgPT09IG51bGwpIHtcbiAgICAgIHRoaXMucmVzZXRNYXJrZG93blRva2VucygpO1xuXG4gICAgICB0aGlzLnJlc2V0VG9wbW9zdE1hcmtkb3duTm9kZSgpO1xuXG4gICAgICB0aGlzLmNsZWFyTWFya2Rvd25QYXJzZVRyZWVUZXh0YXJlYSgpO1xuXG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgbGV0IGNvbnRleHQ7XG5cbiAgICBjb25zdCB0b3Btb3N0TWFya2Rvd25Ob2RlID0gbWFya2Rvd25Ob2RlOyAvLy9cblxuICAgIGNvbnRleHQgPSB7XG4gICAgICB0b2tlbnMsXG4gICAgICBpbXBvcnRlclxuICAgIH07XG5cbiAgICB0b3Btb3N0TWFya2Rvd25Ob2RlLnJlc29sdmUoY29udGV4dCk7XG5cbiAgICBjb25zdCB0b3Btb3N0TWFya2Rvd25Ob2RlUGFyc2VUcmVlID0gdG9wbW9zdE1hcmtkb3duTm9kZS5hc1BhcnNlVHJlZSh0b2tlbnMpLFxuICAgICAgICAgIG1hcmtkb3duUGFyc2VUcmVlID0gdG9wbW9zdE1hcmtkb3duTm9kZVBhcnNlVHJlZSwgLy8vXG4gICAgICAgICAgbWFya2Rvd25Ub2tlbnMgPSB0b2tlbnM7ICAvLy9cblxuICAgIHRoaXMuc2V0TWFya2Rvd25Ub2tlbnMobWFya2Rvd25Ub2tlbnMpO1xuXG4gICAgdGhpcy5zZXRUb3Btb3N0TWFya2Rvd25Ob2RlKHRvcG1vc3RNYXJrZG93bk5vZGUpO1xuXG4gICAgdGhpcy51cGRhdGVNYXJrZG93blBhcnNlVHJlZVRleHRhcmVhKG1hcmtkb3duUGFyc2VUcmVlKTtcbiAgfVxuXG4gIHVwZGF0ZUhUTUwoaW5kZXggPSAwKSB7XG4gICAgdGhpcy5jbGVhclhNUCgpO1xuXG4gICAgdGhpcy5jbGVhclByZXZpZXdEaXYoKTtcblxuICAgIHRoaXMuY2xlYXJQbGFpblRleHRUZXh0YXJlYSgpO1xuXG4gICAgdGhpcy5jbGVhckhUTUxQYXJzZVRyZWVUZXh0YXJlYSgpO1xuXG4gICAgdGhpcy5jbGVhclBhZ2VCdXR0b25zRGl2KCk7XG5cbiAgICBjb25zdCB0b3Btb3N0TWFya2Rvd25Ob2RlID0gdGhpcy5nZXRUb3Btb3N0TWFya2Rvd25Ob2RlKCksXG4gICAgICAgICAgbWFya2Rvd25Ob2RlID0gdG9wbW9zdE1hcmtkb3duTm9kZSwgLy8vXG4gICAgICAgICAgdG9wbW9zdEhUTUxOb2RlID0gdG9wbW9zdEhUTUxOb2RlRnJvbU1hcmtkb3duTm9kZShtYXJrZG93bk5vZGUpO1xuXG4gICAgaWYgKHRvcG1vc3RIVE1MTm9kZSA9PT0gbnVsbCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGxldCBjb250ZXh0O1xuXG4gICAgY29uc3QgbWFya2Rvd25Ub2tlbnMgPSB0aGlzLmdldE1hcmtkb3duVG9rZW5zKCksXG4gICAgICAgICAgdG9rZW5zID0gbWFya2Rvd25Ub2tlbnM7ICAvLy9cblxuICAgIGNvbnRleHQgPSB7XG4gICAgICBpbmRleE9wdGlvbnMsXG4gICAgICB0b2tlbnNcbiAgICB9O1xuXG4gICAgdG9wbW9zdEhUTUxOb2RlLnJlc29sdmUoY29udGV4dCk7XG5cbiAgICBjb25zdCBkaXZpc2lvbkhUTUxOT2RlID0gdG9wbW9zdEhUTUxOb2RlLmdldERpdmlzaW9uSFRNTE5vZGVBdChpbmRleCk7XG5cbiAgICBpZiAoZGl2aXNpb25IVE1MTk9kZSA9PT0gbnVsbCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IGRpdmlzaW9uSFRNTE5PZGVQYXJzZVRyZWUgPSBkaXZpc2lvbkhUTUxOT2RlLmFzUGFyc2VUcmVlKCksXG4gICAgICAgICAgaHRtbFBhcnNlVHJlZSA9IGRpdmlzaW9uSFRNTE5PZGVQYXJzZVRyZWUsICAvLy9cbiAgICAgICAgICBtdWx0aXBsaWNpdHkgPSB0b3Btb3N0SFRNTE5vZGUuZ2V0TXVsdGlwbGljaXR5KCksXG4gICAgICAgICAgbGVuZ3RoID0gbXVsdGlwbGljaXR5O1xuXG4gICAgY29udGV4dCA9IHtcbiAgICAgIHRva2VucyxcbiAgICAgIHBhdGhUb1VSTFxuICAgIH07XG5cbiAgICB0aGlzLnVwZGF0ZVhNUChkaXZpc2lvbkhUTUxOT2RlLCBjb250ZXh0KTtcblxuICAgIHRoaXMudXBkYXRlUHJldmlld0RpdihkaXZpc2lvbkhUTUxOT2RlLCBjb250ZXh0KTtcblxuICAgIHRoaXMudXBkYXRlUGxhaW5UZXh0VGV4dGFyZWEoZGl2aXNpb25IVE1MTk9kZSwgY29udGV4dCk7XG5cbiAgICB0aGlzLnVwZGF0ZUhUTUxQYXJzZVRyZWVUZXh0YXJlYShodG1sUGFyc2VUcmVlKTtcblxuICAgIHRoaXMudXBkYXRlUGFnZUJ1dHRvbnNEaXYobGVuZ3RoLCBpbmRleCk7XG4gIH1cblxuICB1cGRhdGVDU1MoKSB7XG4gICAgY29uc3QgdG9wbW9zdE1hcmtkb3duU3R5bGVOb2RlID0gdGhpcy5nZXRUb3Btb3N0TWFya2Rvd25TdHlsZU5vZGUoKSxcbiAgICAgICAgICBtYXJrZG93blN0eWxlVG9rZW5zID0gdGhpcy5nZXRNYXJrZG93blN0eWxlVG9rZW5zKCksXG4gICAgICAgICAgbWFya2Rvd25TdHlsZU5vZGUgPSB0b3Btb3N0TWFya2Rvd25TdHlsZU5vZGUsIC8vL1xuICAgICAgICAgIHRvcG1vc3RDU1NOb2RlID0gdG9wbW9zdENTU05vZGVGcm9tTWFya2Rvd25TdHlsZU5vZGUobWFya2Rvd25TdHlsZU5vZGUpLFxuICAgICAgICAgIHRhcmdldCA9IFdFQl9UQVJHRVQsXG4gICAgICAgICAgdG9rZW5zID0gbWFya2Rvd25TdHlsZVRva2VucywgLy8vXG4gICAgICAgICAgY29udGV4dCA9IHtcbiAgICAgICAgICAgIHRhcmdldCxcbiAgICAgICAgICAgIHRva2Vuc1xuICAgICAgICAgIH07XG5cbiAgICB0b3Btb3N0Q1NTTm9kZS5yZXNvbHZlKGNvbnRleHQpO1xuXG4gICAgY29uc3QgdG9wbW9zdENTU05vZGVQYXJzZVRyZWUgPSB0b3Btb3N0Q1NTTm9kZS5hc1BhcnNlVHJlZSh0b2tlbnMpLFxuICAgICAgICAgIGNzc1BhcnNlVHJlZSA9IHRvcG1vc3RDU1NOb2RlUGFyc2VUcmVlLCAvLy9cbiAgICAgICAgICBjc3MgPSB0b3Btb3N0Q1NTTm9kZS5hc0NTUyhjb250ZXh0KTtcblxuICAgIHRoaXMudXBkYXRlQ1NTUGFyc2VUcmVlVGV4dGFyZWEoY3NzUGFyc2VUcmVlKTtcblxuICAgIHRoaXMuc2V0Q1NTKGNzcyk7XG4gIH1cblxuICBtYXJrZG93blN0eWxlKCkge1xuICAgIHRoaXMuaGlkZU1hcmtkb3duQ29udGFpbmVyRGl2KCk7XG4gICAgdGhpcy5zaG93TWFya2Rvd25TdHlsZUNvbnRhaW5lckRpdigpO1xuICB9XG5cbiAgbWFya2Rvd24oKSB7XG4gICAgdGhpcy5zaG93TWFya2Rvd25Db250YWluZXJEaXYoKTtcbiAgICB0aGlzLmhpZGVNYXJrZG93blN0eWxlQ29udGFpbmVyRGl2KCk7XG4gIH1cblxuICBwbGFpblRleHQoKSB7XG4gICAgdGhpcy5oaWRlQ1NTQ29udGFpbmVyRGl2KCk7XG4gICAgdGhpcy5oaWRlSFRNTENvbnRhaW5lckRpdigpO1xuICAgIHRoaXMuaGlkZVByZXZpZXdDb250YWluZXJEaXYoKTtcbiAgICB0aGlzLnNob3dQbGFpblRleHRDb250YWluZXJEaXYoKTtcblxuICAgIHRoaXMuaGlkZUNTU1BhcnNlVHJlZVRleHRhcmVhKCk7XG4gICAgdGhpcy5zaG93SFRNTFBhcnNlVHJlZVRleHRhcmVhKCk7XG4gIH1cblxuICBwcmV2aWV3KCkge1xuICAgIHRoaXMuaGlkZUNTU0NvbnRhaW5lckRpdigpO1xuICAgIHRoaXMuaGlkZUhUTUxDb250YWluZXJEaXYoKTtcbiAgICB0aGlzLnNob3dQcmV2aWV3Q29udGFpbmVyRGl2KCk7XG4gICAgdGhpcy5oaWRlUGxhaW5UZXh0Q29udGFpbmVyRGl2KCk7XG5cbiAgICB0aGlzLmhpZGVDU1NQYXJzZVRyZWVUZXh0YXJlYSgpO1xuICAgIHRoaXMuc2hvd0hUTUxQYXJzZVRyZWVUZXh0YXJlYSgpO1xuICB9XG5cbiAgaHRtbCgpIHtcbiAgICB0aGlzLmhpZGVDU1NDb250YWluZXJEaXYoKTtcbiAgICB0aGlzLnNob3dIVE1MQ29udGFpbmVyRGl2KCk7XG4gICAgdGhpcy5oaWRlUHJldmlld0NvbnRhaW5lckRpdigpO1xuICAgIHRoaXMuaGlkZVBsYWluVGV4dENvbnRhaW5lckRpdigpO1xuXG4gICAgdGhpcy5oaWRlQ1NTUGFyc2VUcmVlVGV4dGFyZWEoKTtcbiAgICB0aGlzLnNob3dIVE1MUGFyc2VUcmVlVGV4dGFyZWEoKTtcbiAgfVxuXG4gIGNzcygpIHtcbiAgICB0aGlzLnNob3dDU1NDb250YWluZXJEaXYoKTtcbiAgICB0aGlzLmhpZGVIVE1MQ29udGFpbmVyRGl2KCk7XG4gICAgdGhpcy5oaWRlUHJldmlld0NvbnRhaW5lckRpdigpO1xuICAgIHRoaXMuaGlkZVBsYWluVGV4dENvbnRhaW5lckRpdigpO1xuXG4gICAgdGhpcy5zaG93Q1NTUGFyc2VUcmVlVGV4dGFyZWEoKTtcbiAgICB0aGlzLmhpZGVIVE1MUGFyc2VUcmVlVGV4dGFyZWEoKTtcbiAgfVxuXG4gIHJlc2V0TWFya2Rvd25Ub2tlbnMoKSB7XG4gICAgY29uc3QgbWFya2Rvd25Ub2tlbnMgPSBudWxsO1xuXG4gICAgdGhpcy5zZXRNYXJrZG93blRva2VucyhtYXJrZG93blRva2Vucyk7XG4gIH1cblxuICByZXNldE1hcmtkb3duU3R5bGVUb2tlbnMoKSB7XG4gICAgY29uc3QgbWFya2Rvd25TdHlsZVRva2VucyA9IG51bGw7XG5cbiAgICB0aGlzLnNldE1hcmtkb3duU3R5bGVUb2tlbnMobWFya2Rvd25TdHlsZVRva2Vucyk7XG4gIH1cblxuICByZXNldFRvcG1vc3RNYXJrZG93bk5vZGUoKSB7XG4gICAgY29uc3QgdG9wbW9zdE1hcmtkb3duTm9kZSA9IG51bGw7XG5cbiAgICB0aGlzLnNldFRvcG1vc3RNYXJrZG93bk5vZGUodG9wbW9zdE1hcmtkb3duTm9kZSk7XG4gIH1cblxuICByZXNldFRvcG1vc3RNYXJrZG93blN0eWxlTm9kZSgpIHtcbiAgICBjb25zdCB0b3Btb3N0TWFya2Rvd25TdHlsZU5vZGUgPSBudWxsO1xuXG4gICAgdGhpcy5zZXRUb3Btb3N0TWFya2Rvd25TdHlsZU5vZGUodG9wbW9zdE1hcmtkb3duU3R5bGVOb2RlKTtcbiAgfVxuXG4gIGdldE1hcmtkb3duU3R5bGVFbGVtZW50KCkge1xuICAgIGNvbnN0IHsgbWFya2Rvd25TdHlsZUVsZW1lbnQgfSA9IHRoaXMucHJvcGVydGllcztcblxuICAgIHJldHVybiBtYXJrZG93blN0eWxlRWxlbWVudDtcbiAgfVxuXG4gIGdldE1hcmtkb3duVG9rZW5zKCkge1xuICAgIGNvbnN0IHsgbWFya2Rvd25Ub2tlbnMgfSA9IHRoaXMuZ2V0U3RhdGUoKTtcblxuICAgIHJldHVybiBtYXJrZG93blRva2VucztcbiAgfVxuXG4gIGdldE1hcmtkb3duU3R5bGVUb2tlbnMoKSB7XG4gICAgY29uc3QgeyBtYXJrZG93blN0eWxlVG9rZW5zIH0gPSB0aGlzLmdldFN0YXRlKCk7XG5cbiAgICByZXR1cm4gbWFya2Rvd25TdHlsZVRva2VucztcbiAgfVxuXG4gIGdldFRvcG1vc3RNYXJrZG93bk5vZGUoKSB7XG4gICAgY29uc3QgeyB0b3Btb3N0TU1hcmtkb3duTm9kZSB9ID0gdGhpcy5nZXRTdGF0ZSgpO1xuXG4gICAgcmV0dXJuIHRvcG1vc3RNTWFya2Rvd25Ob2RlO1xuICB9XG5cbiAgZ2V0VG9wbW9zdE1hcmtkb3duU3R5bGVOb2RlKCkge1xuICAgIGNvbnN0IHsgdG9wbW9zdE1NYXJrZG93blN0eWxlTm9kZSB9ID0gdGhpcy5nZXRTdGF0ZSgpO1xuXG4gICAgcmV0dXJuIHRvcG1vc3RNTWFya2Rvd25TdHlsZU5vZGU7XG4gIH1cblxuICBzZXRNYXJrZG93blRva2VucyhtYXJrZG93blRva2Vucykge1xuICAgIHRoaXMudXBkYXRlU3RhdGUoe1xuICAgICAgbWFya2Rvd25Ub2tlbnNcbiAgICB9KTtcbiAgfVxuXG4gIHNldE1hcmtkb3duU3R5bGVUb2tlbnMobWFya2Rvd25TdHlsZVRva2Vucykge1xuICAgIHRoaXMudXBkYXRlU3RhdGUoe1xuICAgICAgbWFya2Rvd25TdHlsZVRva2Vuc1xuICAgIH0pO1xuICB9XG5cbiAgc2V0VG9wbW9zdE1hcmtkb3duTm9kZSh0b3Btb3N0TU1hcmtkb3duTm9kZSkge1xuICAgIHRoaXMudXBkYXRlU3RhdGUoe1xuICAgICAgdG9wbW9zdE1NYXJrZG93bk5vZGVcbiAgICB9KTtcbiAgfVxuXG4gIHNldFRvcG1vc3RNYXJrZG93blN0eWxlTm9kZSh0b3Btb3N0TU1hcmtkb3duU3R5bGVOb2RlKSB7XG4gICAgdGhpcy51cGRhdGVTdGF0ZSh7XG4gICAgICB0b3Btb3N0TU1hcmtkb3duU3R5bGVOb2RlXG4gICAgfSk7XG4gIH1cblxuICBzZXRJbml0aWFsU3RhdGUoKSB7XG4gICAgY29uc3QgbWFya2Rvd25Ub2tlbnMgPSBudWxsLFxuICAgICAgICAgIG1hcmtkb3duU3R5bGVUb2tlbnMgPSBudWxsLFxuICAgICAgICAgIHRvcG1vc3RNYXJrZG93bk5vZGUgPSBudWxsLFxuICAgICAgICAgIHRvcG1vc3RNYXJrZG93blN0eWxlTm9kZSA9IG51bGw7XG5cbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIG1hcmtkb3duVG9rZW5zLFxuICAgICAgbWFya2Rvd25TdHlsZVRva2VucyxcbiAgICAgIHRvcG1vc3RNYXJrZG93bk5vZGUsXG4gICAgICB0b3Btb3N0TWFya2Rvd25TdHlsZU5vZGVcbiAgICB9KTtcbiAgfVxuXG4gIGRpZE1vdW50KCkge1xuICAgIHRoaXMubWFya2Rvd24oKTtcblxuICAgIHRoaXMucHJldmlldygpO1xuXG4gICAgdGhpcy51cGRhdGUoKTtcbiAgfVxuXG4gIHdpbGxVbm1vdW50KCkge1xuICAgIC8vL1xuICB9XG5cbiAgY2hpbGRFbGVtZW50cygpIHtcbiAgICByZXR1cm4gKFxuXG4gICAgICA8Q29sdW1uc0Rpdj5cbiAgICAgICAgPExlZnRTaXplYWJsZURpdj5cbiAgICAgICAgICA8TGVmdFRhYkJ1dHRvbnNEaXYgb25DdXN0b21NYXJrZG93bj17dGhpcy5tYXJrZG93bkN1c3RvbUhhbmRsZXJ9IG9uQ3VzdG9tTWFya2Rvd25TdHlsZT17dGhpcy5tYXJrZG93blN0eWxlQ3VzdG9tSGFuZGxlcn0gLz5cbiAgICAgICAgICA8TWFya2Rvd25Db250YWluZXJEaXYgb25DdXN0b21LZXlVcD17dGhpcy5rZXlVcEN1c3RvbUhhbmRsZXJ9IC8+XG4gICAgICAgICAgPE1hcmtkb3duU3R5bGVDb250YWluZXJEaXYgb25DdXN0b21LZXlVcD17dGhpcy5rZXlVcEN1c3RvbUhhbmRsZXJ9IC8+XG4gICAgICAgIDwvTGVmdFNpemVhYmxlRGl2PlxuICAgICAgICA8VmVydGljYWxTcGxpdHRlckRpdi8+XG4gICAgICAgIDxDb2x1bW5EaXY+XG4gICAgICAgICAgPFJvd3NEaXY+XG4gICAgICAgICAgICA8UmlnaHRUYWJCdXR0b25zRGl2IG9uQ3VzdG9tQ1NTPXt0aGlzLmNzc0N1c3RvbUhhbmRsZXJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ3VzdG9tSFRNTD17dGhpcy5odG1sQ3VzdG9tSGFuZGxlcn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DdXN0b21QcmV2aWV3PXt0aGlzLnByZXZpZXdDdXN0b21IYW5kbGVyfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkN1c3RvbVBsYWluVGV4dD17dGhpcy5wbGFpblRleHRDdXN0b21IYW5kbGVyfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxQYWdlQnV0dG9uc0RpdiBvbkN1c3RvbVBhZ2VVcGRhdGU9e3RoaXMucGFnZVVwZGF0ZUN1c3RvbUhhbmRsZXJ9IC8+XG4gICAgICAgICAgICA8Q1NTQ29udGFpbmVyRGl2Lz5cbiAgICAgICAgICAgIDxIVE1MQ29udGFpbmVyRGl2Lz5cbiAgICAgICAgICAgIDxQcmV2aWV3Q29udGFpbmVyRGl2Lz5cbiAgICAgICAgICAgIDxQbGFpblRleHRDb250YWluZXJEaXYvPlxuICAgICAgICAgICAgPEhUTUxQYXJzZVRyZWVUZXh0YXJlYS8+XG4gICAgICAgICAgICA8Q1NTUGFyc2VUcmVlVGV4dGFyZWEvPlxuICAgICAgICAgIDwvUm93c0Rpdj5cbiAgICAgICAgPC9Db2x1bW5EaXY+XG4gICAgICA8L0NvbHVtbnNEaXY+XG5cbiAgICApO1xuICB9XG5cbiAgaW5pdGlhbGlzZSgpIHtcbiAgICB0aGlzLmFzc2lnbkNvbnRleHQoKTtcblxuICAgIHRoaXMuc2V0SW5pdGlhbFN0YXRlKCk7XG5cbiAgICBjb25zdCB7IGluaXRpYWxNYXJrZG93biwgaW5pdGlhbE1hcmtkb3duU3R5bGUgfSA9IHRoaXMuY29uc3RydWN0b3IsXG4gICAgICAgICAgbWFya2Rvd25TdHlsZSA9IGluaXRpYWxNYXJrZG93blN0eWxlLCAvLy9cbiAgICAgICAgICBtYXJrZG93biA9IGluaXRpYWxNYXJrZG93bjsgLy8vXG5cbiAgICB0aGlzLnNldE1hcmtkb3duU3R5bGUobWFya2Rvd25TdHlsZSk7XG5cbiAgICB0aGlzLnNldE1hcmtkb3duKG1hcmtkb3duKTtcbiAgfVxuXG4gIHN0YXRpYyBpbml0aWFsTWFya2Rvd24gPSBgIyBGb3VuZGF0aW9uc1xuICBcbiBcXGBcXGBcXGBcbiBCbG9jayBsaXN0aW5nXG4gXFxgXFxgXFxgXG4gIFxuICBgO1xuXG4gIHN0YXRpYyBpbml0aWFsTWFya2Rvd25TdHlsZSA9IGBcXGBcXGBcXGB3ZWJcbm1hcmdpbjogbGVmdDtcblxcYFxcYFxcYFxuXG5gO1xuXG4gIHN0YXRpYyB0YWdOYW1lID0gXCJkaXZcIjtcblxuICBzdGF0aWMgaWdub3JlZFByb3BlcnRpZXMgPSBbXG4gICAgXCJtYXJrZG93blN0eWxlRWxlbWVudFwiXG4gIF07XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wZXJ0aWVzID0ge1xuICAgIGNsYXNzTmFtZTogXCJ2aWV3XCJcbiAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgd2l0aFN0eWxlKFZpZXcpYFxuXG4gIHBhZGRpbmc6IDFyZW07XG4gIFxuYDtcblxuZnVuY3Rpb24gcGF0aFRvVVJMKHBhdGgpIHtcbiAgY29uc3QgdXJsID0gYGh0dHBzOi8vZGphbGJhdC5jb20vJHtwYXRofWA7XG5cbiAgcmV0dXJuIHVybDtcbn1cbiJdLCJuYW1lcyI6WyJ0b2tlbnNGcm9tTWFya2Rvd24iLCJncmFtbWFyVXRpbGl0aWVzIiwibWFya2Rvd25Ob2RlRnJvbVRva2VucyIsInRva2Vuc0Zyb21NYXJrZG93blN0eWxlIiwibWFya2Rvd25TdHlsZU5vZGVGcm9tVG9rZW5zIiwidG9wbW9zdEhUTUxOb2RlRnJvbU1hcmtkb3duTm9kZSIsInRvcG1vc3RDU1NOb2RlRnJvbU1hcmtkb3duU3R5bGVOb2RlIiwiVmlldyIsInBhZ2VVcGRhdGVDdXN0b21IYW5kbGVyIiwiZXZlbnQiLCJlbGVtZW50IiwiaW5kZXgiLCJ1cGRhdGVIVE1MIiwibWFya2Rvd25TdHlsZUN1c3RvbUhhbmRsZXIiLCJtYXJrZG93blN0eWxlIiwibWFya2Rvd25DdXN0b21IYW5kbGVyIiwibWFya2Rvd24iLCJwbGFpblRleHRDdXN0b21IYW5kbGVyIiwicGxhaW5UZXh0IiwicHJldmlld0N1c3RvbUhhbmRsZXIiLCJwcmV2aWV3Iiwia2V5VXBDdXN0b21IYW5kbGVyIiwidXBkYXRlIiwiaHRtbEN1c3RvbUhhbmRsZXIiLCJodG1sIiwiY3NzQ3VzdG9tSGFuZGxlciIsImNzcyIsInVwZGF0ZU1hcmtkb3duU3R5bGUiLCJ1cGRhdGVNYXJrZG93biIsInVwZGF0ZUNTUyIsImdldE1hcmtkb3duU3R5bGUiLCJ0b2tlbnMiLCJtYXJrZG93blN0eWxlTm9kZSIsInJlc2V0TWFya2Rvd25TdHlsZVRva2VucyIsInJlc2V0VG9wbW9zdE1hcmtkb3duU3R5bGVOb2RlIiwiY2xlYXJNYXJrZG93blN0eWxlUGFyc2VUcmVlVGV4dGFyZWEiLCJub2RlIiwicGFyc2VUcmVlIiwiYXNQYXJzZVRyZWUiLCJtYXJrZG93blN0eWxlVG9rZW5zIiwidG9wbW9zdE1hcmtkb3duU3R5bGVOb2RlIiwic2V0TWFya2Rvd25TdHlsZVRva2VucyIsInNldFRvcG1vc3RNYXJrZG93blN0eWxlTm9kZSIsInVwZGF0ZU1hcmtkb3duU3R5bGVQYXJzZVRyZWVUZXh0YXJlYSIsIm1hcmtkb3duU3R5bGVFbGVtZW50IiwiZ2V0TWFya2Rvd25TdHlsZUVsZW1lbnQiLCJ0b3Btb3N0Q1NTTm9kZSIsInRhcmdldCIsIldFQl9UQVJHRVQiLCJjb250ZXh0IiwicmVzb2x2ZSIsImFzQ1NTIiwic2V0Q1NTIiwiZ2V0TWFya2Rvd24iLCJtYXJrZG93bk5vZGUiLCJyZXNldE1hcmtkb3duVG9rZW5zIiwicmVzZXRUb3Btb3N0TWFya2Rvd25Ob2RlIiwiY2xlYXJNYXJrZG93blBhcnNlVHJlZVRleHRhcmVhIiwidG9wbW9zdE1hcmtkb3duTm9kZSIsImltcG9ydGVyIiwidG9wbW9zdE1hcmtkb3duTm9kZVBhcnNlVHJlZSIsIm1hcmtkb3duUGFyc2VUcmVlIiwibWFya2Rvd25Ub2tlbnMiLCJzZXRNYXJrZG93blRva2VucyIsInNldFRvcG1vc3RNYXJrZG93bk5vZGUiLCJ1cGRhdGVNYXJrZG93blBhcnNlVHJlZVRleHRhcmVhIiwiY2xlYXJYTVAiLCJjbGVhclByZXZpZXdEaXYiLCJjbGVhclBsYWluVGV4dFRleHRhcmVhIiwiY2xlYXJIVE1MUGFyc2VUcmVlVGV4dGFyZWEiLCJjbGVhclBhZ2VCdXR0b25zRGl2IiwiZ2V0VG9wbW9zdE1hcmtkb3duTm9kZSIsInRvcG1vc3RIVE1MTm9kZSIsImdldE1hcmtkb3duVG9rZW5zIiwiaW5kZXhPcHRpb25zIiwiZGl2aXNpb25IVE1MTk9kZSIsImdldERpdmlzaW9uSFRNTE5vZGVBdCIsImRpdmlzaW9uSFRNTE5PZGVQYXJzZVRyZWUiLCJodG1sUGFyc2VUcmVlIiwibXVsdGlwbGljaXR5IiwiZ2V0TXVsdGlwbGljaXR5IiwibGVuZ3RoIiwicGF0aFRvVVJMIiwidXBkYXRlWE1QIiwidXBkYXRlUHJldmlld0RpdiIsInVwZGF0ZVBsYWluVGV4dFRleHRhcmVhIiwidXBkYXRlSFRNTFBhcnNlVHJlZVRleHRhcmVhIiwidXBkYXRlUGFnZUJ1dHRvbnNEaXYiLCJnZXRUb3Btb3N0TWFya2Rvd25TdHlsZU5vZGUiLCJnZXRNYXJrZG93blN0eWxlVG9rZW5zIiwidG9wbW9zdENTU05vZGVQYXJzZVRyZWUiLCJjc3NQYXJzZVRyZWUiLCJ1cGRhdGVDU1NQYXJzZVRyZWVUZXh0YXJlYSIsImhpZGVNYXJrZG93bkNvbnRhaW5lckRpdiIsInNob3dNYXJrZG93blN0eWxlQ29udGFpbmVyRGl2Iiwic2hvd01hcmtkb3duQ29udGFpbmVyRGl2IiwiaGlkZU1hcmtkb3duU3R5bGVDb250YWluZXJEaXYiLCJoaWRlQ1NTQ29udGFpbmVyRGl2IiwiaGlkZUhUTUxDb250YWluZXJEaXYiLCJoaWRlUHJldmlld0NvbnRhaW5lckRpdiIsInNob3dQbGFpblRleHRDb250YWluZXJEaXYiLCJoaWRlQ1NTUGFyc2VUcmVlVGV4dGFyZWEiLCJzaG93SFRNTFBhcnNlVHJlZVRleHRhcmVhIiwic2hvd1ByZXZpZXdDb250YWluZXJEaXYiLCJoaWRlUGxhaW5UZXh0Q29udGFpbmVyRGl2Iiwic2hvd0hUTUxDb250YWluZXJEaXYiLCJzaG93Q1NTQ29udGFpbmVyRGl2Iiwic2hvd0NTU1BhcnNlVHJlZVRleHRhcmVhIiwiaGlkZUhUTUxQYXJzZVRyZWVUZXh0YXJlYSIsInByb3BlcnRpZXMiLCJnZXRTdGF0ZSIsInRvcG1vc3RNTWFya2Rvd25Ob2RlIiwidG9wbW9zdE1NYXJrZG93blN0eWxlTm9kZSIsInVwZGF0ZVN0YXRlIiwic2V0SW5pdGlhbFN0YXRlIiwic2V0U3RhdGUiLCJkaWRNb3VudCIsIndpbGxVbm1vdW50IiwiY2hpbGRFbGVtZW50cyIsIkNvbHVtbnNEaXYiLCJMZWZ0U2l6ZWFibGVEaXYiLCJMZWZ0VGFiQnV0dG9uc0RpdiIsIm9uQ3VzdG9tTWFya2Rvd24iLCJvbkN1c3RvbU1hcmtkb3duU3R5bGUiLCJNYXJrZG93bkNvbnRhaW5lckRpdiIsIm9uQ3VzdG9tS2V5VXAiLCJNYXJrZG93blN0eWxlQ29udGFpbmVyRGl2IiwiVmVydGljYWxTcGxpdHRlckRpdiIsIkNvbHVtbkRpdiIsIlJvd3NEaXYiLCJSaWdodFRhYkJ1dHRvbnNEaXYiLCJvbkN1c3RvbUNTUyIsIm9uQ3VzdG9tSFRNTCIsIm9uQ3VzdG9tUHJldmlldyIsIm9uQ3VzdG9tUGxhaW5UZXh0IiwiUGFnZUJ1dHRvbnNEaXYiLCJvbkN1c3RvbVBhZ2VVcGRhdGUiLCJDU1NDb250YWluZXJEaXYiLCJIVE1MQ29udGFpbmVyRGl2IiwiUHJldmlld0NvbnRhaW5lckRpdiIsIlBsYWluVGV4dENvbnRhaW5lckRpdiIsIkhUTUxQYXJzZVRyZWVUZXh0YXJlYSIsIkNTU1BhcnNlVHJlZVRleHRhcmVhIiwiaW5pdGlhbGlzZSIsImFzc2lnbkNvbnRleHQiLCJpbml0aWFsTWFya2Rvd24iLCJpbml0aWFsTWFya2Rvd25TdHlsZSIsInNldE1hcmtkb3duU3R5bGUiLCJzZXRNYXJrZG93biIsIkVsZW1lbnQiLCJ0YWdOYW1lIiwiaWdub3JlZFByb3BlcnRpZXMiLCJkZWZhdWx0UHJvcGVydGllcyIsImNsYXNzTmFtZSIsIndpdGhTdHlsZSIsInBhdGgiLCJ1cmwiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQTBjQTs7O2VBQUE7OztvRUF4Y3NCO29CQUVFO3FCQUNTOzBCQUNtQzttRUFFM0M7a0VBQ0U7MkRBQ0M7MERBQ0E7MkRBQ0M7NERBQ0M7NERBQ0M7OERBQ0M7K0RBQ0M7MkRBQ0E7NERBQ0M7Z0VBQ0E7b0VBQ0k7d0JBRWI7dUJBQ0U7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFM0IsSUFBUUEscUJBS3dDQyx1QkFBZ0IsQ0FMeERELG9CQUNBRSx5QkFJd0NELHVCQUFnQixDQUp4REMsd0JBQ0FDLDBCQUd3Q0YsdUJBQWdCLENBSHhERSx5QkFDQUMsOEJBRXdDSCx1QkFBZ0IsQ0FGeERHLDZCQUNBQyxrQ0FDd0NKLHVCQUFnQixDQUR4REksaUNBQ0FDLHNDQUF3Q0wsdUJBQWdCLENBQXhESztBQUVSLElBQUEsQUFBTUMscUJBQU47Y0FBTUE7YUFBQUE7Z0NBQUFBOztnQkFBTixrQkFBTUEsa0JBQ0pDLHdCQUFBQSwyQkFBMEIsU0FBQ0MsT0FBT0MsU0FBU0M7WUFDekMsTUFBS0MsVUFBVSxDQUFDRDtRQUNsQixJQUVBRSx3QkFBQUEsOEJBQTZCLFNBQUNKLE9BQU9DO1lBQ25DLE1BQUtJLGFBQWE7UUFDcEIsSUFFQUMsd0JBQUFBLHlCQUF3QixTQUFDTixPQUFPQztZQUM5QixNQUFLTSxRQUFRO1FBQ2YsSUFFQUMsd0JBQUFBLDBCQUF5QixTQUFDUixPQUFPQztZQUMvQixNQUFLUSxTQUFTO1FBQ2hCLElBRUFDLHdCQUFBQSx3QkFBdUIsU0FBQ1YsT0FBT0M7WUFDN0IsTUFBS1UsT0FBTztRQUNkLElBRUFDLHdCQUFBQSxzQkFBcUIsU0FBQ1osT0FBT0M7WUFDM0IsTUFBS1ksTUFBTTtRQUNiLElBRUFDLHdCQUFBQSxxQkFBb0IsU0FBQ2QsT0FBT0M7WUFDMUIsTUFBS2MsSUFBSTtRQUNYLElBRUFDLHdCQUFBQSxvQkFBbUIsU0FBQ2hCLE9BQU9DO1lBQ3pCLE1BQUtnQixHQUFHO1FBQ1Y7OztrQkEvQkluQjs7WUFpQ0plLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFJLENBQUNLLG1CQUFtQjtnQkFFeEIsSUFBSSxDQUFDQyxjQUFjO2dCQUVuQixJQUFJLENBQUNoQixVQUFVO2dCQUVmLElBQUksQ0FBQ2lCLFNBQVM7WUFDaEI7OztZQUVBRixLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBTWIsZ0JBQWdCLElBQUksQ0FBQ2dCLGdCQUFnQixJQUNyQ0MsU0FBUzVCLHdCQUF3QlcsZ0JBQ2pDa0Isb0JBQW9CNUIsNEJBQTRCMkI7Z0JBRXRELElBQUlDLHNCQUFzQixNQUFNO29CQUM5QixJQUFJLENBQUNDLHdCQUF3QjtvQkFFN0IsSUFBSSxDQUFDQyw2QkFBNkI7b0JBRWxDLElBQUksQ0FBQ0MsbUNBQW1DO29CQUV4QztnQkFDRjtnQkFFQSxJQUFNQyxPQUFPSixtQkFDUEssWUFBWUQsS0FBS0UsV0FBVyxDQUFDUCxTQUM3QlEsc0JBQXNCUixRQUN0QlMsMkJBQTJCSixNQUFNLEdBQUc7Z0JBRTFDLElBQUksQ0FBQ0ssc0JBQXNCLENBQUNGO2dCQUU1QixJQUFJLENBQUNHLDJCQUEyQixDQUFDRjtnQkFFakMsSUFBSSxDQUFDRyxvQ0FBb0MsQ0FBQ047Z0JBRTFDLElBQU1PLHVCQUF1QixJQUFJLENBQUNDLHVCQUF1QixJQUNuREMsaUJBQWlCeEMsb0NBQW9DMEIsb0JBQ3JEZSxTQUFTQyxtQkFBVSxFQUNuQkMsVUFBVTtvQkFDUkYsUUFBQUE7b0JBQ0FoQixRQUFBQTtnQkFDRjtnQkFFTmUsZUFBZUksT0FBTyxDQUFDRDtnQkFFdkIsSUFBTXZCLE1BQU1vQixlQUFlSyxLQUFLLENBQUNGO2dCQUVqQ0wscUJBQXFCUSxNQUFNLENBQUMxQjtZQUM5Qjs7O1lBRUFFLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFNWixXQUFXLElBQUksQ0FBQ3FDLFdBQVcsSUFDM0J0QixTQUFTL0IsbUJBQW1CZ0IsV0FDNUJzQyxlQUFlcEQsdUJBQXVCNkI7Z0JBRTVDLElBQUl1QixpQkFBaUIsTUFBTTtvQkFDekIsSUFBSSxDQUFDQyxtQkFBbUI7b0JBRXhCLElBQUksQ0FBQ0Msd0JBQXdCO29CQUU3QixJQUFJLENBQUNDLDhCQUE4QjtvQkFFbkM7Z0JBQ0Y7Z0JBRUEsSUFBSVI7Z0JBRUosSUFBTVMsc0JBQXNCSixjQUFjLEdBQUc7Z0JBRTdDTCxVQUFVO29CQUNSbEIsUUFBQUE7b0JBQ0E0QixVQUFBQSxrQkFBUTtnQkFDVjtnQkFFQUQsb0JBQW9CUixPQUFPLENBQUNEO2dCQUU1QixJQUFNVywrQkFBK0JGLG9CQUFvQnBCLFdBQVcsQ0FBQ1AsU0FDL0Q4QixvQkFBb0JELDhCQUNwQkUsaUJBQWlCL0IsUUFBUyxHQUFHO2dCQUVuQyxJQUFJLENBQUNnQyxpQkFBaUIsQ0FBQ0Q7Z0JBRXZCLElBQUksQ0FBQ0Usc0JBQXNCLENBQUNOO2dCQUU1QixJQUFJLENBQUNPLCtCQUErQixDQUFDSjtZQUN2Qzs7O1lBRUFqRCxLQUFBQTttQkFBQUEsU0FBQUE7b0JBQVdELFFBQUFBLGlFQUFRO2dCQUNqQixJQUFJLENBQUN1RCxRQUFRO2dCQUViLElBQUksQ0FBQ0MsZUFBZTtnQkFFcEIsSUFBSSxDQUFDQyxzQkFBc0I7Z0JBRTNCLElBQUksQ0FBQ0MsMEJBQTBCO2dCQUUvQixJQUFJLENBQUNDLG1CQUFtQjtnQkFFeEIsSUFBTVosc0JBQXNCLElBQUksQ0FBQ2Esc0JBQXNCLElBQ2pEakIsZUFBZUkscUJBQ2ZjLGtCQUFrQm5FLGdDQUFnQ2lEO2dCQUV4RCxJQUFJa0Isb0JBQW9CLE1BQU07b0JBQzVCO2dCQUNGO2dCQUVBLElBQUl2QjtnQkFFSixJQUFNYSxpQkFBaUIsSUFBSSxDQUFDVyxpQkFBaUIsSUFDdkMxQyxTQUFTK0IsZ0JBQWlCLEdBQUc7Z0JBRW5DYixVQUFVO29CQUNSeUIsY0FBQUEscUJBQVk7b0JBQ1ozQyxRQUFBQTtnQkFDRjtnQkFFQXlDLGdCQUFnQnRCLE9BQU8sQ0FBQ0Q7Z0JBRXhCLElBQU0wQixtQkFBbUJILGdCQUFnQkkscUJBQXFCLENBQUNqRTtnQkFFL0QsSUFBSWdFLHFCQUFxQixNQUFNO29CQUM3QjtnQkFDRjtnQkFFQSxJQUFNRSw0QkFBNEJGLGlCQUFpQnJDLFdBQVcsSUFDeER3QyxnQkFBZ0JELDJCQUNoQkUsZUFBZVAsZ0JBQWdCUSxlQUFlLElBQzlDQyxTQUFTRjtnQkFFZjlCLFVBQVU7b0JBQ1JsQixRQUFBQTtvQkFDQW1ELFdBQUFBO2dCQUNGO2dCQUVBLElBQUksQ0FBQ0MsU0FBUyxDQUFDUixrQkFBa0IxQjtnQkFFakMsSUFBSSxDQUFDbUMsZ0JBQWdCLENBQUNULGtCQUFrQjFCO2dCQUV4QyxJQUFJLENBQUNvQyx1QkFBdUIsQ0FBQ1Ysa0JBQWtCMUI7Z0JBRS9DLElBQUksQ0FBQ3FDLDJCQUEyQixDQUFDUjtnQkFFakMsSUFBSSxDQUFDUyxvQkFBb0IsQ0FBQ04sUUFBUXRFO1lBQ3BDOzs7WUFFQWtCLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFNVywyQkFBMkIsSUFBSSxDQUFDZ0QsMkJBQTJCLElBQzNEakQsc0JBQXNCLElBQUksQ0FBQ2tELHNCQUFzQixJQUNqRHpELG9CQUFvQlEsMEJBQ3BCTSxpQkFBaUJ4QyxvQ0FBb0MwQixvQkFDckRlLFNBQVNDLG1CQUFVLEVBQ25CakIsU0FBU1EscUJBQ1RVLFVBQVU7b0JBQ1JGLFFBQUFBO29CQUNBaEIsUUFBQUE7Z0JBQ0Y7Z0JBRU5lLGVBQWVJLE9BQU8sQ0FBQ0Q7Z0JBRXZCLElBQU15QywwQkFBMEI1QyxlQUFlUixXQUFXLENBQUNQLFNBQ3JENEQsZUFBZUQseUJBQ2ZoRSxNQUFNb0IsZUFBZUssS0FBSyxDQUFDRjtnQkFFakMsSUFBSSxDQUFDMkMsMEJBQTBCLENBQUNEO2dCQUVoQyxJQUFJLENBQUN2QyxNQUFNLENBQUMxQjtZQUNkOzs7WUFFQVosS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQUksQ0FBQytFLHdCQUF3QjtnQkFDN0IsSUFBSSxDQUFDQyw2QkFBNkI7WUFDcEM7OztZQUVBOUUsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQUksQ0FBQytFLHdCQUF3QjtnQkFDN0IsSUFBSSxDQUFDQyw2QkFBNkI7WUFDcEM7OztZQUVBOUUsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQUksQ0FBQytFLG1CQUFtQjtnQkFDeEIsSUFBSSxDQUFDQyxvQkFBb0I7Z0JBQ3pCLElBQUksQ0FBQ0MsdUJBQXVCO2dCQUM1QixJQUFJLENBQUNDLHlCQUF5QjtnQkFFOUIsSUFBSSxDQUFDQyx3QkFBd0I7Z0JBQzdCLElBQUksQ0FBQ0MseUJBQXlCO1lBQ2hDOzs7WUFFQWxGLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFJLENBQUM2RSxtQkFBbUI7Z0JBQ3hCLElBQUksQ0FBQ0Msb0JBQW9CO2dCQUN6QixJQUFJLENBQUNLLHVCQUF1QjtnQkFDNUIsSUFBSSxDQUFDQyx5QkFBeUI7Z0JBRTlCLElBQUksQ0FBQ0gsd0JBQXdCO2dCQUM3QixJQUFJLENBQUNDLHlCQUF5QjtZQUNoQzs7O1lBRUE5RSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBSSxDQUFDeUUsbUJBQW1CO2dCQUN4QixJQUFJLENBQUNRLG9CQUFvQjtnQkFDekIsSUFBSSxDQUFDTix1QkFBdUI7Z0JBQzVCLElBQUksQ0FBQ0sseUJBQXlCO2dCQUU5QixJQUFJLENBQUNILHdCQUF3QjtnQkFDN0IsSUFBSSxDQUFDQyx5QkFBeUI7WUFDaEM7OztZQUVBNUUsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQUksQ0FBQ2dGLG1CQUFtQjtnQkFDeEIsSUFBSSxDQUFDUixvQkFBb0I7Z0JBQ3pCLElBQUksQ0FBQ0MsdUJBQXVCO2dCQUM1QixJQUFJLENBQUNLLHlCQUF5QjtnQkFFOUIsSUFBSSxDQUFDRyx3QkFBd0I7Z0JBQzdCLElBQUksQ0FBQ0MseUJBQXlCO1lBQ2hDOzs7WUFFQXJELEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFNTyxpQkFBaUI7Z0JBRXZCLElBQUksQ0FBQ0MsaUJBQWlCLENBQUNEO1lBQ3pCOzs7WUFFQTdCLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFNTSxzQkFBc0I7Z0JBRTVCLElBQUksQ0FBQ0Usc0JBQXNCLENBQUNGO1lBQzlCOzs7WUFFQWlCLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFNRSxzQkFBc0I7Z0JBRTVCLElBQUksQ0FBQ00sc0JBQXNCLENBQUNOO1lBQzlCOzs7WUFFQXhCLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFNTSwyQkFBMkI7Z0JBRWpDLElBQUksQ0FBQ0UsMkJBQTJCLENBQUNGO1lBQ25DOzs7WUFFQUssS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQU0sQUFBRUQsdUJBQXlCLElBQUksQ0FBQ2lFLFVBQVUsQ0FBeENqRTtnQkFFUixPQUFPQTtZQUNUOzs7WUFFQTZCLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFNLEFBQUVYLGlCQUFtQixJQUFJLENBQUNnRCxRQUFRLEdBQWhDaEQ7Z0JBRVIsT0FBT0E7WUFDVDs7O1lBRUEyQixLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBTSxBQUFFbEQsc0JBQXdCLElBQUksQ0FBQ3VFLFFBQVEsR0FBckN2RTtnQkFFUixPQUFPQTtZQUNUOzs7WUFFQWdDLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFNLEFBQUV3Qyx1QkFBeUIsSUFBSSxDQUFDRCxRQUFRLEdBQXRDQztnQkFFUixPQUFPQTtZQUNUOzs7WUFFQXZCLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFNLEFBQUV3Qiw0QkFBOEIsSUFBSSxDQUFDRixRQUFRLEdBQTNDRTtnQkFFUixPQUFPQTtZQUNUOzs7WUFFQWpELEtBQUFBO21CQUFBQSxTQUFBQSxrQkFBa0JELGNBQWM7Z0JBQzlCLElBQUksQ0FBQ21ELFdBQVcsQ0FBQztvQkFDZm5ELGdCQUFBQTtnQkFDRjtZQUNGOzs7WUFFQXJCLEtBQUFBO21CQUFBQSxTQUFBQSx1QkFBdUJGLG1CQUFtQjtnQkFDeEMsSUFBSSxDQUFDMEUsV0FBVyxDQUFDO29CQUNmMUUscUJBQUFBO2dCQUNGO1lBQ0Y7OztZQUVBeUIsS0FBQUE7bUJBQUFBLFNBQUFBLHVCQUF1QitDLG9CQUFvQjtnQkFDekMsSUFBSSxDQUFDRSxXQUFXLENBQUM7b0JBQ2ZGLHNCQUFBQTtnQkFDRjtZQUNGOzs7WUFFQXJFLEtBQUFBO21CQUFBQSxTQUFBQSw0QkFBNEJzRSx5QkFBeUI7Z0JBQ25ELElBQUksQ0FBQ0MsV0FBVyxDQUFDO29CQUNmRCwyQkFBQUE7Z0JBQ0Y7WUFDRjs7O1lBRUFFLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFNcEQsaUJBQWlCLE1BQ2pCdkIsc0JBQXNCLE1BQ3RCbUIsc0JBQXNCLE1BQ3RCbEIsMkJBQTJCO2dCQUVqQyxJQUFJLENBQUMyRSxRQUFRLENBQUM7b0JBQ1pyRCxnQkFBQUE7b0JBQ0F2QixxQkFBQUE7b0JBQ0FtQixxQkFBQUE7b0JBQ0FsQiwwQkFBQUE7Z0JBQ0Y7WUFDRjs7O1lBRUE0RSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBSSxDQUFDcEcsUUFBUTtnQkFFYixJQUFJLENBQUNJLE9BQU87Z0JBRVosSUFBSSxDQUFDRSxNQUFNO1lBQ2I7OztZQUVBK0YsS0FBQUE7bUJBQUFBLFNBQUFBO1lBQ0UsR0FBRztZQUNMOzs7WUFFQUMsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLHFCQUVFLG9CQUFDQyxzQkFBVSxzQkFDVCxvQkFBQ0MsYUFBZSxzQkFDZCxvQkFBQ0MsY0FBaUI7b0JBQUNDLGtCQUFrQixJQUFJLENBQUMzRyxxQkFBcUI7b0JBQUU0Ryx1QkFBdUIsSUFBSSxDQUFDOUcsMEJBQTBCO2tDQUN2SCxvQkFBQytHLGlCQUFvQjtvQkFBQ0MsZUFBZSxJQUFJLENBQUN4RyxrQkFBa0I7a0NBQzVELG9CQUFDeUcsc0JBQXlCO29CQUFDRCxlQUFlLElBQUksQ0FBQ3hHLGtCQUFrQjttQ0FFbkUsb0JBQUMwRywrQkFBbUIsdUJBQ3BCLG9CQUFDQyxxQkFBUyxzQkFDUixvQkFBQ0MsbUJBQU8sc0JBQ04sb0JBQUNDLGNBQWtCO29CQUFDQyxhQUFhLElBQUksQ0FBQzFHLGdCQUFnQjtvQkFDbEMyRyxjQUFjLElBQUksQ0FBQzdHLGlCQUFpQjtvQkFDcEM4RyxpQkFBaUIsSUFBSSxDQUFDbEgsb0JBQW9CO29CQUMxQ21ILG1CQUFtQixJQUFJLENBQUNySCxzQkFBc0I7a0NBRWxFLG9CQUFDc0gsb0JBQWM7b0JBQUNDLG9CQUFvQixJQUFJLENBQUNoSSx1QkFBdUI7a0NBQ2hFLG9CQUFDaUksWUFBZSx1QkFDaEIsb0JBQUNDLGFBQWdCLHVCQUNqQixvQkFBQ0MsZ0JBQW1CLHVCQUNwQixvQkFBQ0Msa0JBQXFCLHVCQUN0QixvQkFBQ0MsY0FBcUIsdUJBQ3RCLG9CQUFDQyxhQUFvQjtZQU0vQjs7O1lBRUFDLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFJLENBQUNDLGFBQWE7Z0JBRWxCLElBQUksQ0FBQzlCLGVBQWU7Z0JBRXBCLElBQWtELG9CQUFBLElBQUksQ0FBQyxXQUFXLEVBQTFEK0Isa0JBQTBDLGtCQUExQ0EsaUJBQWlCQyx1QkFBeUIsa0JBQXpCQSxzQkFDbkJwSSxnQkFBZ0JvSSxzQkFDaEJsSSxXQUFXaUksaUJBQWlCLEdBQUc7Z0JBRXJDLElBQUksQ0FBQ0UsZ0JBQWdCLENBQUNySTtnQkFFdEIsSUFBSSxDQUFDc0ksV0FBVyxDQUFDcEk7WUFDbkI7OztXQS9ZSVQ7cUJBQWE4SSxhQUFPO0FBaVp4QixpQkFqWkk5SSxNQWlaRzBJLG1CQUFrQjtBQVF6QixpQkF6WkkxSSxNQXlaRzJJLHdCQUF1QjtBQU05QixpQkEvWkkzSSxNQStaRytJLFdBQVU7QUFFakIsaUJBamFJL0ksTUFpYUdnSixxQkFBb0I7SUFDekI7Q0FDRDtBQUVELGlCQXJhSWhKLE1BcWFHaUoscUJBQW9CO0lBQ3pCQyxXQUFXO0FBQ2I7SUFHRixXQUFlQyxJQUFBQSxzQkFBUyxFQUFDbko7QUFNekIsU0FBUzJFLFVBQVV5RSxJQUFJO0lBQ3JCLElBQU1DLE1BQU0sQUFBQyx1QkFBMkIsT0FBTEQ7SUFFbkMsT0FBT0M7QUFDVCJ9