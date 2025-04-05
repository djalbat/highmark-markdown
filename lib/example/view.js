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
var _occamdom = require("occam-dom");
var _easylayout = require("easy-layout");
var _index = require("../index");
var _importer = /*#__PURE__*/ _interop_require_wildcard(require("./importer"));
var _html = /*#__PURE__*/ _interop_require_default(require("../node/html"));
var _indexOptions = /*#__PURE__*/ _interop_require_default(require("./indexOptions"));
var _pageButtons = /*#__PURE__*/ _interop_require_default(require("./view/div/pageButtons"));
var _left = /*#__PURE__*/ _interop_require_default(require("./view/div/sizeable/left"));
var _css = /*#__PURE__*/ _interop_require_default(require("./view/div/container/css"));
var _html1 = /*#__PURE__*/ _interop_require_default(require("./view/div/container/html"));
var _left1 = /*#__PURE__*/ _interop_require_default(require("./view/div/tabButtons/left"));
var _right = /*#__PURE__*/ _interop_require_default(require("./view/div/tabButtons/right"));
var _preview = /*#__PURE__*/ _interop_require_default(require("./view/div/container/preview"));
var _markdown = /*#__PURE__*/ _interop_require_default(require("./view/div/container/markdown"));
var _plainText = /*#__PURE__*/ _interop_require_default(require("./view/div/container/plainText"));
var _markdownStyle = /*#__PURE__*/ _interop_require_default(require("./view/div/container/markdownStyle"));
var _inner = /*#__PURE__*/ _interop_require_default(require("./view/textarea/parseTree/markdown/inner"));
var _constants = require("./constants");
var _processing = require("../utilities/processing");
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
function _getRequireWildcardCache(nodeInterop) {
    if (typeof WeakMap !== "function") return null;
    var cacheBabelInterop = new WeakMap();
    var cacheNodeInterop = new WeakMap();
    return (_getRequireWildcardCache = function(nodeInterop) {
        return nodeInterop ? cacheNodeInterop : cacheBabelInterop;
    })(nodeInterop);
}
function _interop_require_wildcard(obj, nodeInterop) {
    if (!nodeInterop && obj && obj.__esModule) {
        return obj;
    }
    if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
        return {
            default: obj
        };
    }
    var cache = _getRequireWildcardCache(nodeInterop);
    if (cache && cache.has(obj)) {
        return cache.get(obj);
    }
    var newObj = {
        __proto__: null
    };
    var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for(var key in obj){
        if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) {
            var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
            if (desc && (desc.get || desc.set)) {
                Object.defineProperty(newObj, key, desc);
            } else {
                newObj[key] = obj[key];
            }
        }
    }
    newObj.default = obj;
    if (cache) {
        cache.set(obj, newObj);
    }
    return newObj;
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
var topmostNodeFromOuterNodes = _occamdom.nodeUtilities.topmostNodeFromOuterNodes;
var markdownLexer = _index.MarkdownLexer.fromNothing(), markdownParser = _index.MarkdownParser.fromNothing(), markdownStyleLexer = _index.MarkdownStyleLexer.fromNothing(), markdownStyleParser = _index.MarkdownStyleParser.fromNothing();
var View = /*#__PURE__*/ function(Element) {
    _inherits(View, Element);
    function View() {
        _class_call_check(this, View);
        var _this;
        _this = _call_super(this, View, arguments), _define_property(_this, "markdownStyleCustomHandler", function(event, element) {
            _this.markdownStyle();
        }), _define_property(_this, "pageUpdateCustomHandler", function(event, element, index) {
            _this.clearPage();
            _this.updatePage(index);
        }), _define_property(_this, "plainTextCustomHandler", function(event, element) {
            _this.plainText();
        }), _define_property(_this, "markdownCustomHandler", function(event, element) {
            _this.markdown();
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
                this.updateMarkdown();
                this.updateMarkdownStyle();
            }
        },
        {
            key: "clearPage",
            value: function clearPage() {
                this.clearXMP();
                this.clearPreviewDiv();
            }
        },
        {
            key: "updatePage",
            value: function updatePage(index) {
                var divisionMarkdownNodes = this.getDivisionMarkdownNodes(), divisionMarkdownNode = divisionMarkdownNodes[index], tokens = this.getTokens(), context = {
                    tokens: tokens
                }, length = null;
                var queries = _html.default.queries, node = divisionMarkdownNode, nodes = (0, _query.nodesFromNodeAndQueries)(node, queries), topmostHTMLNode = topmostNodeFromOuterNodes(_html.default, nodes), html = topmostHTMLNode.asHTML(context), plainText = divisionMarkdownNode.asPlainText(context);
                this.updateXMP(html);
                this.updatePreviewDiv(divisionMarkdownNode, context);
                this.updatePageButtonsDiv(length, index);
                this.updatePlainTextTextarea(plainText);
            }
        },
        {
            key: "updateMarkdown",
            value: function updateMarkdown() {
                var markdown = this.getMarkdown(), lexer = markdownLexer, parser = markdownParser, content = markdown, startRule = parser.getStartRule(), tokens = lexer.tokenise(content), node = parser.parse(tokens, startRule);
                this.setTokens(tokens);
                if (node !== null) {
                    var divisionMarkdownNode = node, charactersPerLine = _constants.CHARACTERS_PER_LINE, contentsDepth = _constants.CONTENTS_DEPTH, linesPerPage = _constants.LINES_PER_PAGE, context = {
                        tokens: tokens,
                        importer: _importer.default,
                        indexOptions: _indexOptions.default,
                        linesPerPage: linesPerPage,
                        contentsDepth: contentsDepth,
                        nodeFromTokens: nodeFromTokens,
                        tokensFromContent: tokensFromContent,
                        charactersPerLine: charactersPerLine
                    }, markdownNodes = (0, _processing.postprocess)(divisionMarkdownNode, context), divisionMarkdownNodes = (0, _processing.divisionMarkdownNodesFromMarkdownNodes)(markdownNodes);
                    this.setDivisionMarkdownNodes(divisionMarkdownNodes);
                    var parseTree = divisionMarkdownNode.asParseTree(tokens), outerMarkdownParseTree = parseTree; ///
                    this.updateOuterMarkdownParseTreeTextarea(outerMarkdownParseTree);
                    var index = 0, length = divisionMarkdownNodes.length;
                    if (length > 0) {
                        this.updatePage(index);
                        this.updatePageButtonsDiv(length);
                    }
                } else {
                    this.clearPage();
                    this.clearPageButtonsDiv();
                    this.clearPlainTextTextarea();
                    this.clearOuterMarkdownParseTreeTextarea();
                    var divisionMarkdownNodes1 = null;
                    this.setDivisionMarkdownNodes(divisionMarkdownNodes1);
                }
            }
        },
        {
            key: "updateMarkdownStyle",
            value: function updateMarkdownStyle() {
                var markdownStyleElement = this.properties.markdownStyleElement, markdownStyle = this.getMarkdownStyle(), css = markdownStyleElement.update(markdownStyle);
                this.setCSS(css);
                var lexer = markdownStyleLexer, parser = markdownStyleParser, content = markdownStyle, tokens = lexer.tokenise(content), startRule = parser.getStartRule(), node = parser.parse(tokens, startRule);
                if (node !== null) {
                    var parseTree = node.asParseTree(tokens);
                    this.updateMarkdownStyleParseTreeTextarea(parseTree);
                } else {
                    this.clearMarkdownStyleParseTreeTextarea();
                }
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
            key: "plainText",
            value: function plainText() {
                this.hideCSSContainerDiv();
                this.hideHTMLContainerDiv();
                this.hidePreviewContainerDiv();
                this.showPlainTextContainerDiv();
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
            key: "preview",
            value: function preview() {
                this.hideCSSContainerDiv();
                this.hideHTMLContainerDiv();
                this.showPreviewContainerDiv();
                this.hidePlainTextContainerDiv();
            }
        },
        {
            key: "html",
            value: function html() {
                this.hideCSSContainerDiv();
                this.showHTMLContainerDiv();
                this.hidePreviewContainerDiv();
                this.hidePlainTextContainerDiv();
            }
        },
        {
            key: "css",
            value: function css() {
                this.showCSSContainerDiv();
                this.hideHTMLContainerDiv();
                this.hidePreviewContainerDiv();
                this.hidePlainTextContainerDiv();
            }
        },
        {
            key: "getTokens",
            value: function getTokens() {
                var tokens = this.getState().tokens;
                return tokens;
            }
        },
        {
            key: "getDivisionMarkdownNodes",
            value: function getDivisionMarkdownNodes() {
                var divisionMarkdownNodes = this.getState().divisionMarkdownNodes;
                return divisionMarkdownNodes;
            }
        },
        {
            key: "setTokens",
            value: function setTokens(tokens) {
                this.updateState({
                    tokens: tokens
                });
            }
        },
        {
            key: "setDivisionMarkdownNodes",
            value: function setDivisionMarkdownNodes(divisionMarkdownNodes) {
                this.updateState({
                    divisionMarkdownNodes: divisionMarkdownNodes
                });
            }
        },
        {
            key: "setInitialState",
            value: function setInitialState() {
                var tokens = null, divisionMarkdownNodes = null;
                this.setState({
                    tokens: tokens,
                    divisionMarkdownNodes: divisionMarkdownNodes
                });
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
                }), /*#__PURE__*/ React.createElement(_css.default, null), /*#__PURE__*/ React.createElement(_html1.default, null), /*#__PURE__*/ React.createElement(_preview.default, null), /*#__PURE__*/ React.createElement(_plainText.default, null), /*#__PURE__*/ React.createElement(_inner.default, null))));
            }
        },
        {
            key: "initialise",
            value: function initialise() {
                this.assignContext();
                this.setInitialState();
                var _this_constructor = this.constructor, initialMarkdown = _this_constructor.initialMarkdown, initialMarkdownStyle = _this_constructor.initialMarkdownStyle, markdownStyle = initialMarkdownStyle, markdown = initialMarkdown; ///
                this.setMarkdown(markdown);
                this.setMarkdownStyle(markdownStyle);
                this.update();
                this.css();
            }
        }
    ]);
    return View;
}(_wrap_native_super(_easy.Element));
_define_property(View, "initialMarkdown", _importer.defaultContent) ///
;
_define_property(View, "initialMarkdownStyle", "width: 100%;\nheight: 199%;  \nposition: absolute;\nmin-height: 100%;  \npadding-top: 5rem;  \n");
_define_property(View, "tagName", "div");
_define_property(View, "ignoredProperties", [
    "markdownStyleElement"
]);
_define_property(View, "defaultProperties", {
    className: "view"
});
var _default = (0, _easywithstyle.default)(View)(_templateObject());
function tokensFromContent(content) {
    var tokens = markdownLexer.tokenise(content);
    return tokens;
}
function nodeFromTokens(tokens) {
    var startRuleName = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
    var ruleMap = markdownParser.getRuleMap(), startRule = startRuleName !== null ? ruleMap[startRuleName] : markdownParser.getStartRule(), node = markdownParser.parse(tokens, startRule);
    return node;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9leGFtcGxlL3ZpZXcuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB3aXRoU3R5bGUgZnJvbSBcImVhc3ktd2l0aC1zdHlsZVwiOyAgLy8vXG5cbmltcG9ydCB7IEVsZW1lbnQgfSBmcm9tIFwiZWFzeVwiO1xuaW1wb3J0IHsgbm9kZVV0aWxpdGllcyB9IGZyb20gXCJvY2NhbS1kb21cIjtcbmltcG9ydCB7IFJvd3NEaXYsIENvbHVtbkRpdiwgQ29sdW1uc0RpdiwgVmVydGljYWxTcGxpdHRlckRpdiB9IGZyb20gXCJlYXN5LWxheW91dFwiO1xuaW1wb3J0IHsgTWFya2Rvd25MZXhlciwgTWFya2Rvd25QYXJzZXIsIE1hcmtkb3duU3R5bGVMZXhlciwgTWFya2Rvd25TdHlsZVBhcnNlciB9IGZyb20gXCIuLi9pbmRleFwiO1xuXG5pbXBvcnQgaW1wb3J0ZXIgZnJvbSBcIi4vaW1wb3J0ZXJcIjtcbmltcG9ydCBIVE1MTm9kZSBmcm9tIFwiLi4vbm9kZS9odG1sXCI7XG5pbXBvcnQgaW5kZXhPcHRpb25zIGZyb20gXCIuL2luZGV4T3B0aW9uc1wiO1xuaW1wb3J0IFBhZ2VCdXR0b25zRGl2IGZyb20gXCIuL3ZpZXcvZGl2L3BhZ2VCdXR0b25zXCI7XG5pbXBvcnQgTGVmdFNpemVhYmxlRGl2IGZyb20gXCIuL3ZpZXcvZGl2L3NpemVhYmxlL2xlZnRcIjtcbmltcG9ydCBDU1NDb250YWluZXJEaXYgZnJvbSBcIi4vdmlldy9kaXYvY29udGFpbmVyL2Nzc1wiO1xuaW1wb3J0IEhUTUxDb250YWluZXJEaXYgZnJvbSBcIi4vdmlldy9kaXYvY29udGFpbmVyL2h0bWxcIjtcbmltcG9ydCBMZWZ0VGFiQnV0dG9uc0RpdiBmcm9tIFwiLi92aWV3L2Rpdi90YWJCdXR0b25zL2xlZnRcIjtcbmltcG9ydCBSaWdodFRhYkJ1dHRvbnNEaXYgZnJvbSBcIi4vdmlldy9kaXYvdGFiQnV0dG9ucy9yaWdodFwiO1xuaW1wb3J0IFByZXZpZXdDb250YWluZXJEaXYgZnJvbSBcIi4vdmlldy9kaXYvY29udGFpbmVyL3ByZXZpZXdcIjtcbmltcG9ydCBNYXJrZG93bkNvbnRhaW5lckRpdiBmcm9tIFwiLi92aWV3L2Rpdi9jb250YWluZXIvbWFya2Rvd25cIjtcbmltcG9ydCBQbGFpblRleHRDb250YWluZXJEaXYgZnJvbSBcIi4vdmlldy9kaXYvY29udGFpbmVyL3BsYWluVGV4dFwiO1xuaW1wb3J0IE1hcmtkb3duU3R5bGVDb250YWluZXJEaXYgZnJvbSBcIi4vdmlldy9kaXYvY29udGFpbmVyL21hcmtkb3duU3R5bGVcIjtcbmltcG9ydCBJbm5lck1hcmtkb3duUGFyc2VUcmVlVGV4dGFyZWEgZnJvbSBcIi4vdmlldy90ZXh0YXJlYS9wYXJzZVRyZWUvbWFya2Rvd24vaW5uZXJcIjtcblxuaW1wb3J0IHsgZGVmYXVsdENvbnRlbnQgfSBmcm9tIFwiLi9pbXBvcnRlclwiO1xuaW1wb3J0IHsgTElORVNfUEVSX1BBR0UsIENPTlRFTlRTX0RFUFRILCBDSEFSQUNURVJTX1BFUl9MSU5FIH0gZnJvbSBcIi4vY29uc3RhbnRzXCI7XG5pbXBvcnQgeyBwb3N0cHJvY2VzcywgZGl2aXNpb25NYXJrZG93bk5vZGVzRnJvbU1hcmtkb3duTm9kZXMgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3Byb2Nlc3NpbmdcIjtcbmltcG9ydCB7bm9kZXNGcm9tTm9kZUFuZFF1ZXJpZXN9IGZyb20gXCIuLi91dGlsaXRpZXMvcXVlcnlcIjtcblxuY29uc3QgeyB0b3Btb3N0Tm9kZUZyb21PdXRlck5vZGVzIH0gPSBub2RlVXRpbGl0aWVzO1xuXG5jb25zdCBtYXJrZG93bkxleGVyID0gTWFya2Rvd25MZXhlci5mcm9tTm90aGluZygpLFxuICAgICAgbWFya2Rvd25QYXJzZXIgPSBNYXJrZG93blBhcnNlci5mcm9tTm90aGluZygpLFxuICAgICAgbWFya2Rvd25TdHlsZUxleGVyID0gTWFya2Rvd25TdHlsZUxleGVyLmZyb21Ob3RoaW5nKCksXG4gICAgICBtYXJrZG93blN0eWxlUGFyc2VyID0gTWFya2Rvd25TdHlsZVBhcnNlci5mcm9tTm90aGluZygpO1xuXG5jbGFzcyBWaWV3IGV4dGVuZHMgRWxlbWVudCB7XG4gIG1hcmtkb3duU3R5bGVDdXN0b21IYW5kbGVyID0gKGV2ZW50LCBlbGVtZW50KSA9PiB7XG4gICAgdGhpcy5tYXJrZG93blN0eWxlKCk7XG4gIH1cblxuICBwYWdlVXBkYXRlQ3VzdG9tSGFuZGxlciA9IChldmVudCwgZWxlbWVudCwgaW5kZXgpID0+IHtcbiAgICB0aGlzLmNsZWFyUGFnZSgpO1xuXG4gICAgdGhpcy51cGRhdGVQYWdlKGluZGV4KTtcbiAgfVxuXG4gIHBsYWluVGV4dEN1c3RvbUhhbmRsZXIgPSAoZXZlbnQsIGVsZW1lbnQpID0+IHtcbiAgICB0aGlzLnBsYWluVGV4dCgpO1xuICB9XG5cbiAgbWFya2Rvd25DdXN0b21IYW5kbGVyID0gKGV2ZW50LCBlbGVtZW50KSA9PiB7XG4gICAgdGhpcy5tYXJrZG93bigpO1xuICB9XG5cbiAgcHJldmlld0N1c3RvbUhhbmRsZXIgPSAoZXZlbnQsIGVsZW1lbnQpID0+IHtcbiAgICB0aGlzLnByZXZpZXcoKTtcbiAgfVxuXG4gIGtleVVwQ3VzdG9tSGFuZGxlciA9IChldmVudCwgZWxlbWVudCkgPT4ge1xuICAgIHRoaXMudXBkYXRlKCk7XG4gIH1cblxuICBodG1sQ3VzdG9tSGFuZGxlciA9IChldmVudCwgZWxlbWVudCkgPT4ge1xuICAgIHRoaXMuaHRtbCgpO1xuICB9XG5cbiAgY3NzQ3VzdG9tSGFuZGxlciA9IChldmVudCwgZWxlbWVudCkgPT4ge1xuICAgIHRoaXMuY3NzKCk7XG4gIH1cblxuICB1cGRhdGUoKSB7XG4gICAgdGhpcy51cGRhdGVNYXJrZG93bigpO1xuICAgIHRoaXMudXBkYXRlTWFya2Rvd25TdHlsZSgpO1xuICB9XG5cbiAgY2xlYXJQYWdlKCkge1xuICAgIHRoaXMuY2xlYXJYTVAoKTtcbiAgICB0aGlzLmNsZWFyUHJldmlld0RpdigpO1xuICB9XG5cbiAgdXBkYXRlUGFnZShpbmRleCkge1xuICAgIGNvbnN0IGRpdmlzaW9uTWFya2Rvd25Ob2RlcyA9IHRoaXMuZ2V0RGl2aXNpb25NYXJrZG93bk5vZGVzKCksXG4gICAgICAgICAgZGl2aXNpb25NYXJrZG93bk5vZGUgPSBkaXZpc2lvbk1hcmtkb3duTm9kZXNbaW5kZXhdLFxuICAgICAgICAgIHRva2VucyA9IHRoaXMuZ2V0VG9rZW5zKCksXG4gICAgICAgICAgY29udGV4dCA9IHtcbiAgICAgICAgICAgIHRva2Vuc1xuICAgICAgICAgIH0sXG4gICAgICAgICAgbGVuZ3RoID0gbnVsbDtcblxuICBjb25zdCB7IHF1ZXJpZXMgfSA9IEhUTUxOb2RlLFxuICAgICAgICAgIG5vZGUgPSBkaXZpc2lvbk1hcmtkb3duTm9kZSwgIC8vL1xuICAgICAgICAgIG5vZGVzID0gbm9kZXNGcm9tTm9kZUFuZFF1ZXJpZXMobm9kZSwgcXVlcmllcyksXG4gICAgICAgICAgdG9wbW9zdEhUTUxOb2RlID0gdG9wbW9zdE5vZGVGcm9tT3V0ZXJOb2RlcyhIVE1MTm9kZSwgbm9kZXMpLFxuICAgICAgICAgIGh0bWwgPSB0b3Btb3N0SFRNTE5vZGUuYXNIVE1MKGNvbnRleHQpLFxuICAgICAgICAgIHBsYWluVGV4dCA9IGRpdmlzaW9uTWFya2Rvd25Ob2RlLmFzUGxhaW5UZXh0KGNvbnRleHQpO1xuXG4gICAgdGhpcy51cGRhdGVYTVAoaHRtbCk7XG5cbiAgICB0aGlzLnVwZGF0ZVByZXZpZXdEaXYoZGl2aXNpb25NYXJrZG93bk5vZGUsIGNvbnRleHQpO1xuXG4gICAgdGhpcy51cGRhdGVQYWdlQnV0dG9uc0RpdihsZW5ndGgsIGluZGV4KTtcblxuICAgIHRoaXMudXBkYXRlUGxhaW5UZXh0VGV4dGFyZWEocGxhaW5UZXh0KTtcbiAgfVxuXG4gIHVwZGF0ZU1hcmtkb3duKCkge1xuICAgIGNvbnN0IG1hcmtkb3duID0gdGhpcy5nZXRNYXJrZG93bigpLFxuICAgICAgICAgIGxleGVyID0gbWFya2Rvd25MZXhlciwgIC8vL1xuICAgICAgICAgIHBhcnNlciA9ICBtYXJrZG93blBhcnNlciwgLy8vXG4gICAgICAgICAgY29udGVudCA9IG1hcmtkb3duLCAvLy9cbiAgICAgICAgICBzdGFydFJ1bGUgPSBwYXJzZXIuZ2V0U3RhcnRSdWxlKCksXG4gICAgICAgICAgdG9rZW5zID0gbGV4ZXIudG9rZW5pc2UoY29udGVudCksXG4gICAgICAgICAgbm9kZSA9IHBhcnNlci5wYXJzZSh0b2tlbnMsIHN0YXJ0UnVsZSk7XG5cbiAgICB0aGlzLnNldFRva2Vucyh0b2tlbnMpO1xuXG4gICAgaWYgKG5vZGUgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IGRpdmlzaW9uTWFya2Rvd25Ob2RlID0gbm9kZSwgIC8vL1xuICAgICAgICAgICAgY2hhcmFjdGVyc1BlckxpbmUgPSBDSEFSQUNURVJTX1BFUl9MSU5FLFxuICAgICAgICAgICAgY29udGVudHNEZXB0aCA9IENPTlRFTlRTX0RFUFRILFxuICAgICAgICAgICAgbGluZXNQZXJQYWdlID0gTElORVNfUEVSX1BBR0UsXG4gICAgICAgICAgICBjb250ZXh0ID0ge1xuICAgICAgICAgICAgICB0b2tlbnMsXG4gICAgICAgICAgICAgIGltcG9ydGVyLFxuICAgICAgICAgICAgICBpbmRleE9wdGlvbnMsXG4gICAgICAgICAgICAgIGxpbmVzUGVyUGFnZSxcbiAgICAgICAgICAgICAgY29udGVudHNEZXB0aCxcbiAgICAgICAgICAgICAgbm9kZUZyb21Ub2tlbnMsXG4gICAgICAgICAgICAgIHRva2Vuc0Zyb21Db250ZW50LFxuICAgICAgICAgICAgICBjaGFyYWN0ZXJzUGVyTGluZVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIG1hcmtkb3duTm9kZXMgPSBwb3N0cHJvY2VzcyhkaXZpc2lvbk1hcmtkb3duTm9kZSwgY29udGV4dCksXG4gICAgICAgICAgICBkaXZpc2lvbk1hcmtkb3duTm9kZXMgPSBkaXZpc2lvbk1hcmtkb3duTm9kZXNGcm9tTWFya2Rvd25Ob2RlcyhtYXJrZG93bk5vZGVzKTtcblxuICAgICAgdGhpcy5zZXREaXZpc2lvbk1hcmtkb3duTm9kZXMoZGl2aXNpb25NYXJrZG93bk5vZGVzKTtcblxuICAgICAgY29uc3QgcGFyc2VUcmVlID0gZGl2aXNpb25NYXJrZG93bk5vZGUuYXNQYXJzZVRyZWUodG9rZW5zKSxcbiAgICAgICAgICAgIG91dGVyTWFya2Rvd25QYXJzZVRyZWUgPSBwYXJzZVRyZWU7IC8vL1xuXG4gICAgICB0aGlzLnVwZGF0ZU91dGVyTWFya2Rvd25QYXJzZVRyZWVUZXh0YXJlYShvdXRlck1hcmtkb3duUGFyc2VUcmVlKTtcblxuICAgICAgY29uc3QgaW5kZXggPSAwLFxuICAgICAgICAgICAgbGVuZ3RoID0gZGl2aXNpb25NYXJrZG93bk5vZGVzLmxlbmd0aDtcblxuICAgICAgaWYgKGxlbmd0aCA+IDApIHtcbiAgICAgICAgdGhpcy51cGRhdGVQYWdlKGluZGV4KTtcblxuICAgICAgICB0aGlzLnVwZGF0ZVBhZ2VCdXR0b25zRGl2KGxlbmd0aCk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuY2xlYXJQYWdlKCk7XG5cbiAgICAgIHRoaXMuY2xlYXJQYWdlQnV0dG9uc0RpdigpO1xuXG4gICAgICB0aGlzLmNsZWFyUGxhaW5UZXh0VGV4dGFyZWEoKTtcblxuICAgICAgdGhpcy5jbGVhck91dGVyTWFya2Rvd25QYXJzZVRyZWVUZXh0YXJlYSgpO1xuXG4gICAgICBjb25zdCBkaXZpc2lvbk1hcmtkb3duTm9kZXMgPSBudWxsO1xuXG4gICAgICB0aGlzLnNldERpdmlzaW9uTWFya2Rvd25Ob2RlcyhkaXZpc2lvbk1hcmtkb3duTm9kZXMpO1xuICAgIH1cbiAgfVxuXG4gIHVwZGF0ZU1hcmtkb3duU3R5bGUoKSB7XG4gICAgY29uc3QgeyBtYXJrZG93blN0eWxlRWxlbWVudCB9ID0gdGhpcy5wcm9wZXJ0aWVzLFxuICAgICAgICAgIG1hcmtkb3duU3R5bGUgPSB0aGlzLmdldE1hcmtkb3duU3R5bGUoKSxcbiAgICAgICAgICBjc3MgPSBtYXJrZG93blN0eWxlRWxlbWVudC51cGRhdGUobWFya2Rvd25TdHlsZSk7XG5cbiAgICB0aGlzLnNldENTUyhjc3MpO1xuXG4gICAgY29uc3QgbGV4ZXIgPSBtYXJrZG93blN0eWxlTGV4ZXIsIC8vL1xuICAgICAgICAgIHBhcnNlciA9IG1hcmtkb3duU3R5bGVQYXJzZXIsIC8vL1xuICAgICAgICAgIGNvbnRlbnQgPSBtYXJrZG93blN0eWxlLCAgLy8vXG4gICAgICAgICAgdG9rZW5zID0gbGV4ZXIudG9rZW5pc2UoY29udGVudCksXG4gICAgICAgICAgc3RhcnRSdWxlID0gcGFyc2VyLmdldFN0YXJ0UnVsZSgpLFxuICAgICAgICAgIG5vZGUgPSBwYXJzZXIucGFyc2UodG9rZW5zLCBzdGFydFJ1bGUpO1xuXG4gICAgaWYgKG5vZGUgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IHBhcnNlVHJlZSA9IG5vZGUuYXNQYXJzZVRyZWUodG9rZW5zKTtcblxuICAgICAgdGhpcy51cGRhdGVNYXJrZG93blN0eWxlUGFyc2VUcmVlVGV4dGFyZWEocGFyc2VUcmVlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5jbGVhck1hcmtkb3duU3R5bGVQYXJzZVRyZWVUZXh0YXJlYSgpO1xuICAgIH1cbiAgfVxuXG4gIG1hcmtkb3duU3R5bGUoKSB7XG4gICAgdGhpcy5oaWRlTWFya2Rvd25Db250YWluZXJEaXYoKTtcbiAgICB0aGlzLnNob3dNYXJrZG93blN0eWxlQ29udGFpbmVyRGl2KCk7XG4gIH1cblxuICBwbGFpblRleHQoKSB7XG4gICAgdGhpcy5oaWRlQ1NTQ29udGFpbmVyRGl2KCk7XG4gICAgdGhpcy5oaWRlSFRNTENvbnRhaW5lckRpdigpO1xuICAgIHRoaXMuaGlkZVByZXZpZXdDb250YWluZXJEaXYoKTtcbiAgICB0aGlzLnNob3dQbGFpblRleHRDb250YWluZXJEaXYoKTtcbiAgfVxuXG4gIG1hcmtkb3duKCkge1xuICAgIHRoaXMuc2hvd01hcmtkb3duQ29udGFpbmVyRGl2KCk7XG4gICAgdGhpcy5oaWRlTWFya2Rvd25TdHlsZUNvbnRhaW5lckRpdigpO1xuICB9XG5cbiAgcHJldmlldygpIHtcbiAgICB0aGlzLmhpZGVDU1NDb250YWluZXJEaXYoKTtcbiAgICB0aGlzLmhpZGVIVE1MQ29udGFpbmVyRGl2KCk7XG4gICAgdGhpcy5zaG93UHJldmlld0NvbnRhaW5lckRpdigpO1xuICAgIHRoaXMuaGlkZVBsYWluVGV4dENvbnRhaW5lckRpdigpO1xuICB9XG5cbiAgaHRtbCgpIHtcbiAgICB0aGlzLmhpZGVDU1NDb250YWluZXJEaXYoKTtcbiAgICB0aGlzLnNob3dIVE1MQ29udGFpbmVyRGl2KCk7XG4gICAgdGhpcy5oaWRlUHJldmlld0NvbnRhaW5lckRpdigpO1xuICAgIHRoaXMuaGlkZVBsYWluVGV4dENvbnRhaW5lckRpdigpO1xuICB9XG5cbiAgY3NzKCkge1xuICAgIHRoaXMuc2hvd0NTU0NvbnRhaW5lckRpdigpO1xuICAgIHRoaXMuaGlkZUhUTUxDb250YWluZXJEaXYoKTtcbiAgICB0aGlzLmhpZGVQcmV2aWV3Q29udGFpbmVyRGl2KCk7XG4gICAgdGhpcy5oaWRlUGxhaW5UZXh0Q29udGFpbmVyRGl2KCk7XG4gIH1cblxuICBnZXRUb2tlbnMoKSB7XG4gICAgY29uc3QgeyB0b2tlbnMgfSA9IHRoaXMuZ2V0U3RhdGUoKTtcblxuICAgIHJldHVybiB0b2tlbnM7XG4gIH1cblxuICBnZXREaXZpc2lvbk1hcmtkb3duTm9kZXMoKSB7XG4gICAgY29uc3QgeyBkaXZpc2lvbk1hcmtkb3duTm9kZXMgfSA9IHRoaXMuZ2V0U3RhdGUoKTtcblxuICAgIHJldHVybiBkaXZpc2lvbk1hcmtkb3duTm9kZXM7XG4gIH1cblxuICBzZXRUb2tlbnModG9rZW5zKSB7XG4gICAgdGhpcy51cGRhdGVTdGF0ZSh7XG4gICAgICB0b2tlbnNcbiAgICB9KTtcbiAgfVxuXG4gIHNldERpdmlzaW9uTWFya2Rvd25Ob2RlcyhkaXZpc2lvbk1hcmtkb3duTm9kZXMpIHtcbiAgICB0aGlzLnVwZGF0ZVN0YXRlKHtcbiAgICAgIGRpdmlzaW9uTWFya2Rvd25Ob2Rlc1xuICAgIH0pO1xuICB9XG5cbiAgc2V0SW5pdGlhbFN0YXRlKCkge1xuICAgIGNvbnN0IHRva2VucyA9IG51bGwsXG4gICAgICAgICAgZGl2aXNpb25NYXJrZG93bk5vZGVzID0gbnVsbDtcblxuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgdG9rZW5zLFxuICAgICAgZGl2aXNpb25NYXJrZG93bk5vZGVzXG4gICAgfSk7XG4gIH1cblxuICBjaGlsZEVsZW1lbnRzKCkge1xuICAgIHJldHVybiAoXG5cbiAgICAgIDxDb2x1bW5zRGl2PlxuICAgICAgICA8TGVmdFNpemVhYmxlRGl2PlxuICAgICAgICAgIDxMZWZ0VGFiQnV0dG9uc0RpdiBvbkN1c3RvbU1hcmtkb3duPXt0aGlzLm1hcmtkb3duQ3VzdG9tSGFuZGxlcn0gb25DdXN0b21NYXJrZG93blN0eWxlPXt0aGlzLm1hcmtkb3duU3R5bGVDdXN0b21IYW5kbGVyfSAvPlxuICAgICAgICAgIDxNYXJrZG93bkNvbnRhaW5lckRpdiBvbkN1c3RvbUtleVVwPXt0aGlzLmtleVVwQ3VzdG9tSGFuZGxlcn0gLz5cbiAgICAgICAgICA8TWFya2Rvd25TdHlsZUNvbnRhaW5lckRpdiBvbkN1c3RvbUtleVVwPXt0aGlzLmtleVVwQ3VzdG9tSGFuZGxlcn0gLz5cbiAgICAgICAgPC9MZWZ0U2l6ZWFibGVEaXY+XG4gICAgICAgIDxWZXJ0aWNhbFNwbGl0dGVyRGl2Lz5cbiAgICAgICAgPENvbHVtbkRpdj5cbiAgICAgICAgICA8Um93c0Rpdj5cbiAgICAgICAgICAgIDxSaWdodFRhYkJ1dHRvbnNEaXYgb25DdXN0b21DU1M9e3RoaXMuY3NzQ3VzdG9tSGFuZGxlcn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DdXN0b21IVE1MPXt0aGlzLmh0bWxDdXN0b21IYW5kbGVyfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkN1c3RvbVByZXZpZXc9e3RoaXMucHJldmlld0N1c3RvbUhhbmRsZXJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ3VzdG9tUGxhaW5UZXh0PXt0aGlzLnBsYWluVGV4dEN1c3RvbUhhbmRsZXJ9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPFBhZ2VCdXR0b25zRGl2IG9uQ3VzdG9tUGFnZVVwZGF0ZT17dGhpcy5wYWdlVXBkYXRlQ3VzdG9tSGFuZGxlcn0gLz5cbiAgICAgICAgICAgIDxDU1NDb250YWluZXJEaXYvPlxuICAgICAgICAgICAgPEhUTUxDb250YWluZXJEaXYvPlxuICAgICAgICAgICAgPFByZXZpZXdDb250YWluZXJEaXYvPlxuICAgICAgICAgICAgPFBsYWluVGV4dENvbnRhaW5lckRpdi8+XG4gICAgICAgICAgICA8SW5uZXJNYXJrZG93blBhcnNlVHJlZVRleHRhcmVhLz5cbiAgICAgICAgICA8L1Jvd3NEaXY+XG4gICAgICAgIDwvQ29sdW1uRGl2PlxuICAgICAgPC9Db2x1bW5zRGl2PlxuXG4gICAgKTtcbiAgfVxuXG4gIGluaXRpYWxpc2UoKSB7XG4gICAgdGhpcy5hc3NpZ25Db250ZXh0KCk7XG5cbiAgICB0aGlzLnNldEluaXRpYWxTdGF0ZSgpO1xuXG4gICAgY29uc3QgeyBpbml0aWFsTWFya2Rvd24sIGluaXRpYWxNYXJrZG93blN0eWxlIH0gPSB0aGlzLmNvbnN0cnVjdG9yLFxuICAgICAgICAgIG1hcmtkb3duU3R5bGUgPSBpbml0aWFsTWFya2Rvd25TdHlsZSwgLy8vXG4gICAgICAgICAgbWFya2Rvd24gPSBpbml0aWFsTWFya2Rvd247IC8vL1xuXG4gICAgdGhpcy5zZXRNYXJrZG93bihtYXJrZG93bik7XG5cbiAgICB0aGlzLnNldE1hcmtkb3duU3R5bGUobWFya2Rvd25TdHlsZSk7XG5cbiAgICB0aGlzLnVwZGF0ZSgpO1xuXG4gICAgdGhpcy5jc3MoKTtcbiAgfVxuXG4gIHN0YXRpYyBpbml0aWFsTWFya2Rvd24gPSBkZWZhdWx0Q29udGVudDsgIC8vL1xuXG4gIHN0YXRpYyBpbml0aWFsTWFya2Rvd25TdHlsZSA9IGB3aWR0aDogMTAwJTtcbmhlaWdodDogMTk5JTsgIFxucG9zaXRpb246IGFic29sdXRlO1xubWluLWhlaWdodDogMTAwJTsgIFxucGFkZGluZy10b3A6IDVyZW07ICBcbmA7XG5cbiAgc3RhdGljIHRhZ05hbWUgPSBcImRpdlwiO1xuXG4gIHN0YXRpYyBpZ25vcmVkUHJvcGVydGllcyA9IFtcbiAgICBcIm1hcmtkb3duU3R5bGVFbGVtZW50XCJcbiAgXTtcblxuICBzdGF0aWMgZGVmYXVsdFByb3BlcnRpZXMgPSB7XG4gICAgY2xhc3NOYW1lOiBcInZpZXdcIlxuICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCB3aXRoU3R5bGUoVmlldylgXG5cbiAgcGFkZGluZzogMXJlbTtcbiAgXG5gO1xuXG5mdW5jdGlvbiB0b2tlbnNGcm9tQ29udGVudChjb250ZW50KSB7XG4gIGNvbnN0IHRva2VucyA9IG1hcmtkb3duTGV4ZXIudG9rZW5pc2UoY29udGVudCk7XG5cbiAgcmV0dXJuIHRva2Vucztcbn1cblxuZnVuY3Rpb24gbm9kZUZyb21Ub2tlbnModG9rZW5zLCBzdGFydFJ1bGVOYW1lID0gbnVsbCkge1xuICBjb25zdCBydWxlTWFwID0gbWFya2Rvd25QYXJzZXIuZ2V0UnVsZU1hcCgpLFxuICAgICAgICBzdGFydFJ1bGUgPSAoc3RhcnRSdWxlTmFtZSAhPT0gbnVsbCkgP1xuICAgICAgICAgICAgICAgICAgICAgIHJ1bGVNYXBbc3RhcnRSdWxlTmFtZV0gOlxuICAgICAgICAgICAgICAgICAgICAgICAgbWFya2Rvd25QYXJzZXIuZ2V0U3RhcnRSdWxlKCksXG4gICAgICAgIG5vZGUgPSBtYXJrZG93blBhcnNlci5wYXJzZSh0b2tlbnMsIHN0YXJ0UnVsZSk7XG5cbiAgcmV0dXJuIG5vZGU7XG59XG4iXSwibmFtZXMiOlsidG9wbW9zdE5vZGVGcm9tT3V0ZXJOb2RlcyIsIm5vZGVVdGlsaXRpZXMiLCJtYXJrZG93bkxleGVyIiwiTWFya2Rvd25MZXhlciIsImZyb21Ob3RoaW5nIiwibWFya2Rvd25QYXJzZXIiLCJNYXJrZG93blBhcnNlciIsIm1hcmtkb3duU3R5bGVMZXhlciIsIk1hcmtkb3duU3R5bGVMZXhlciIsIm1hcmtkb3duU3R5bGVQYXJzZXIiLCJNYXJrZG93blN0eWxlUGFyc2VyIiwiVmlldyIsIm1hcmtkb3duU3R5bGVDdXN0b21IYW5kbGVyIiwiZXZlbnQiLCJlbGVtZW50IiwibWFya2Rvd25TdHlsZSIsInBhZ2VVcGRhdGVDdXN0b21IYW5kbGVyIiwiaW5kZXgiLCJjbGVhclBhZ2UiLCJ1cGRhdGVQYWdlIiwicGxhaW5UZXh0Q3VzdG9tSGFuZGxlciIsInBsYWluVGV4dCIsIm1hcmtkb3duQ3VzdG9tSGFuZGxlciIsIm1hcmtkb3duIiwicHJldmlld0N1c3RvbUhhbmRsZXIiLCJwcmV2aWV3Iiwia2V5VXBDdXN0b21IYW5kbGVyIiwidXBkYXRlIiwiaHRtbEN1c3RvbUhhbmRsZXIiLCJodG1sIiwiY3NzQ3VzdG9tSGFuZGxlciIsImNzcyIsInVwZGF0ZU1hcmtkb3duIiwidXBkYXRlTWFya2Rvd25TdHlsZSIsImNsZWFyWE1QIiwiY2xlYXJQcmV2aWV3RGl2IiwiZGl2aXNpb25NYXJrZG93bk5vZGVzIiwiZ2V0RGl2aXNpb25NYXJrZG93bk5vZGVzIiwiZGl2aXNpb25NYXJrZG93bk5vZGUiLCJ0b2tlbnMiLCJnZXRUb2tlbnMiLCJjb250ZXh0IiwibGVuZ3RoIiwicXVlcmllcyIsIkhUTUxOb2RlIiwibm9kZSIsIm5vZGVzIiwibm9kZXNGcm9tTm9kZUFuZFF1ZXJpZXMiLCJ0b3Btb3N0SFRNTE5vZGUiLCJhc0hUTUwiLCJhc1BsYWluVGV4dCIsInVwZGF0ZVhNUCIsInVwZGF0ZVByZXZpZXdEaXYiLCJ1cGRhdGVQYWdlQnV0dG9uc0RpdiIsInVwZGF0ZVBsYWluVGV4dFRleHRhcmVhIiwiZ2V0TWFya2Rvd24iLCJsZXhlciIsInBhcnNlciIsImNvbnRlbnQiLCJzdGFydFJ1bGUiLCJnZXRTdGFydFJ1bGUiLCJ0b2tlbmlzZSIsInBhcnNlIiwic2V0VG9rZW5zIiwiY2hhcmFjdGVyc1BlckxpbmUiLCJDSEFSQUNURVJTX1BFUl9MSU5FIiwiY29udGVudHNEZXB0aCIsIkNPTlRFTlRTX0RFUFRIIiwibGluZXNQZXJQYWdlIiwiTElORVNfUEVSX1BBR0UiLCJpbXBvcnRlciIsImluZGV4T3B0aW9ucyIsIm5vZGVGcm9tVG9rZW5zIiwidG9rZW5zRnJvbUNvbnRlbnQiLCJtYXJrZG93bk5vZGVzIiwicG9zdHByb2Nlc3MiLCJkaXZpc2lvbk1hcmtkb3duTm9kZXNGcm9tTWFya2Rvd25Ob2RlcyIsInNldERpdmlzaW9uTWFya2Rvd25Ob2RlcyIsInBhcnNlVHJlZSIsImFzUGFyc2VUcmVlIiwib3V0ZXJNYXJrZG93blBhcnNlVHJlZSIsInVwZGF0ZU91dGVyTWFya2Rvd25QYXJzZVRyZWVUZXh0YXJlYSIsImNsZWFyUGFnZUJ1dHRvbnNEaXYiLCJjbGVhclBsYWluVGV4dFRleHRhcmVhIiwiY2xlYXJPdXRlck1hcmtkb3duUGFyc2VUcmVlVGV4dGFyZWEiLCJtYXJrZG93blN0eWxlRWxlbWVudCIsInByb3BlcnRpZXMiLCJnZXRNYXJrZG93blN0eWxlIiwic2V0Q1NTIiwidXBkYXRlTWFya2Rvd25TdHlsZVBhcnNlVHJlZVRleHRhcmVhIiwiY2xlYXJNYXJrZG93blN0eWxlUGFyc2VUcmVlVGV4dGFyZWEiLCJoaWRlTWFya2Rvd25Db250YWluZXJEaXYiLCJzaG93TWFya2Rvd25TdHlsZUNvbnRhaW5lckRpdiIsImhpZGVDU1NDb250YWluZXJEaXYiLCJoaWRlSFRNTENvbnRhaW5lckRpdiIsImhpZGVQcmV2aWV3Q29udGFpbmVyRGl2Iiwic2hvd1BsYWluVGV4dENvbnRhaW5lckRpdiIsInNob3dNYXJrZG93bkNvbnRhaW5lckRpdiIsImhpZGVNYXJrZG93blN0eWxlQ29udGFpbmVyRGl2Iiwic2hvd1ByZXZpZXdDb250YWluZXJEaXYiLCJoaWRlUGxhaW5UZXh0Q29udGFpbmVyRGl2Iiwic2hvd0hUTUxDb250YWluZXJEaXYiLCJzaG93Q1NTQ29udGFpbmVyRGl2IiwiZ2V0U3RhdGUiLCJ1cGRhdGVTdGF0ZSIsInNldEluaXRpYWxTdGF0ZSIsInNldFN0YXRlIiwiY2hpbGRFbGVtZW50cyIsIkNvbHVtbnNEaXYiLCJMZWZ0U2l6ZWFibGVEaXYiLCJMZWZ0VGFiQnV0dG9uc0RpdiIsIm9uQ3VzdG9tTWFya2Rvd24iLCJvbkN1c3RvbU1hcmtkb3duU3R5bGUiLCJNYXJrZG93bkNvbnRhaW5lckRpdiIsIm9uQ3VzdG9tS2V5VXAiLCJNYXJrZG93blN0eWxlQ29udGFpbmVyRGl2IiwiVmVydGljYWxTcGxpdHRlckRpdiIsIkNvbHVtbkRpdiIsIlJvd3NEaXYiLCJSaWdodFRhYkJ1dHRvbnNEaXYiLCJvbkN1c3RvbUNTUyIsIm9uQ3VzdG9tSFRNTCIsIm9uQ3VzdG9tUHJldmlldyIsIm9uQ3VzdG9tUGxhaW5UZXh0IiwiUGFnZUJ1dHRvbnNEaXYiLCJvbkN1c3RvbVBhZ2VVcGRhdGUiLCJDU1NDb250YWluZXJEaXYiLCJIVE1MQ29udGFpbmVyRGl2IiwiUHJldmlld0NvbnRhaW5lckRpdiIsIlBsYWluVGV4dENvbnRhaW5lckRpdiIsIklubmVyTWFya2Rvd25QYXJzZVRyZWVUZXh0YXJlYSIsImluaXRpYWxpc2UiLCJhc3NpZ25Db250ZXh0IiwiY29uc3RydWN0b3IiLCJpbml0aWFsTWFya2Rvd24iLCJpbml0aWFsTWFya2Rvd25TdHlsZSIsInNldE1hcmtkb3duIiwic2V0TWFya2Rvd25TdHlsZSIsIkVsZW1lbnQiLCJkZWZhdWx0Q29udGVudCIsInRhZ05hbWUiLCJpZ25vcmVkUHJvcGVydGllcyIsImRlZmF1bHRQcm9wZXJ0aWVzIiwiY2xhc3NOYW1lIiwid2l0aFN0eWxlIiwic3RhcnRSdWxlTmFtZSIsInJ1bGVNYXAiLCJnZXRSdWxlTWFwIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkF3VUE7OztlQUFBOzs7b0VBdFVzQjtvQkFFRTt3QkFDTTswQkFDc0M7cUJBQ21CO2dFQUVsRTsyREFDQTttRUFDSTtrRUFDRTsyREFDQzswREFDQTs0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