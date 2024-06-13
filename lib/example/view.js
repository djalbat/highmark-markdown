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
var _html = /*#__PURE__*/ _interop_require_default(require("./view/div/html"));
var _preview = /*#__PURE__*/ _interop_require_default(require("./view/div/preview"));
var _subHeading = /*#__PURE__*/ _interop_require_default(require("./view/subHeading"));
var _css = /*#__PURE__*/ _interop_require_default(require("./view/textarea/css"));
var _tabButtons = /*#__PURE__*/ _interop_require_default(require("./view/div/tabButtons"));
var _left = /*#__PURE__*/ _interop_require_default(require("./view/div/sizeable/left"));
var _right = /*#__PURE__*/ _interop_require_default(require("./view/div/sizeable/right"));
var _markdown = /*#__PURE__*/ _interop_require_default(require("./view/div/container/markdown"));
var _markdownStyle = /*#__PURE__*/ _interop_require_default(require("./view/div/container/markdownStyle"));
var _markdown1 = require("../utilities/markdown");
var _constants = require("./constants");
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
function _templateObject() {
    var data = _tagged_template_literal([
        "\n\n  padding: 1rem;\n  \n"
    ]);
    _templateObject = function _templateObject() {
        return data;
    };
    return data;
}
var markdownLexer = _index.MarkdownLexer.fromNothing(), markdownParser = _index.MarkdownParser.fromNothing(), markdownStyleLexer = _index.MarkdownStyleLexer.fromNothing(), markdownStyleParser = _index.MarkdownStyleParser.fromNothing();
var View = /*#__PURE__*/ function(Element) {
    _inherits(View, Element);
    var _super = _create_super(View);
    function View() {
        _class_call_check(this, View);
        var _this;
        _this = _super.apply(this, arguments);
        _define_property(_assert_this_initialized(_this), "markdownStyleCustomHandler", function(event, element) {
            _this.markdownStyle();
        });
        _define_property(_assert_this_initialized(_this), "markdownCustomHandler", function(event, element) {
            _this.markdown();
        });
        _define_property(_assert_this_initialized(_this), "keyUpCustomHandler", function(event, element) {
            _this.update();
        });
        return _this;
    }
    _create_class(View, [
        {
            key: "updateMarkdownStyle",
            value: function updateMarkdownStyle() {
                var markdownStyleElement = this.properties.markdownStyleElement, markdownStyle = this.getMarkdownStyle(), css = markdownStyleElement.update(markdownStyle);
                this.setCSS(css);
                var lexer = markdownStyleLexer, parser = markdownStyleParser, content = markdownStyle, tokens = lexer.tokenise(content), startRule = parser.getStartRule(), startOfContent = true, node = parser.parse(tokens, startRule, startOfContent);
                if (node !== null) {
                    var parseTree = node.asParseTree(tokens);
                    this.updateMarkdownStyleParseTreeTextarea(parseTree);
                } else {
                    this.clearMarkdownStyleParseTreeTextarea();
                }
            }
        },
        {
            key: "updateMarkdown",
            value: function updateMarkdown() {
                var markdown = this.getMarkdown(), lexer = markdownLexer, parser = markdownParser, content = markdown, startOfContent = true, startRule = parser.getStartRule(), tokens = lexer.tokenise(content), node = parser.parse(tokens, startRule, startOfContent);
                if (node !== null) {
                    var linesPerPage = _constants.LINES_PER_PAGE, charactersPerLine = _constants.CHARACTERS_PER_LINE, context = {
                        tokens: tokens,
                        importer: importer,
                        linesPerPage: linesPerPage,
                        charactersPerLine: charactersPerLine
                    }, divisionMarkdownNode = node, divisionMarkdownNodes = (0, _markdown1.postprocess)(divisionMarkdownNode, context);
                    var htmls = [], domElements = [];
                    divisionMarkdownNodes.forEach(function(divisionMarkdownNode, index) {
                        var pageNumber = index + 1;
                        Object.assign(context, {
                            pageNumber: pageNumber
                        });
                        var html = divisionMarkdownNode.asHTML(context), domElement = divisionMarkdownNode.createDOMElement(context);
                        htmls.push(html);
                        domElements.push(domElement);
                    });
                    this.updateXMP(htmls);
                    this.updatePreviewDiv(domElements);
                    var parseTree = node.asParseTree(tokens);
                    this.updateMarkdownParseTreeTextarea(parseTree);
                } else {
                    this.clearXMP();
                    this.clearPreviewDiv();
                    this.clearMarkdownParseTreeTextarea();
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
            key: "markdown",
            value: function markdown() {
                this.showMarkdownContainerDiv();
                this.hideMarkdownStyleContainerDiv();
            }
        },
        {
            key: "update",
            value: function update() {
                this.updateMarkdown();
                this.updateMarkdownStyle();
            }
        },
        {
            key: "childElements",
            value: function childElements() {
                return /*#__PURE__*/ React.createElement(_easylayout.ColumnsDiv, null, /*#__PURE__*/ React.createElement(_left.default, null, /*#__PURE__*/ React.createElement(_tabButtons.default, {
                    onCustomMarkdown: this.markdownCustomHandler,
                    onCustomMarkdownStyle: this.markdownStyleCustomHandler
                }), /*#__PURE__*/ React.createElement(_markdown.default, {
                    onCustomKeyUp: this.keyUpCustomHandler
                }), /*#__PURE__*/ React.createElement(_markdownStyle.default, {
                    onCustomKeyUp: this.keyUpCustomHandler
                })), /*#__PURE__*/ React.createElement(_easylayout.VerticalSplitterDiv, null), /*#__PURE__*/ React.createElement(_easylayout.ColumnDiv, null, /*#__PURE__*/ React.createElement(_easylayout.RowsDiv, null, /*#__PURE__*/ React.createElement(_right.default, null, /*#__PURE__*/ React.createElement(_subHeading.default, null, "HTML"), /*#__PURE__*/ React.createElement(_html.default, null)), /*#__PURE__*/ React.createElement(_easylayout.HorizontalSplitterDiv, null), /*#__PURE__*/ React.createElement(_easylayout.RowDiv, null, /*#__PURE__*/ React.createElement(_easylayout.RowsDiv, null, /*#__PURE__*/ React.createElement(_subHeading.default, null, "CSS"), /*#__PURE__*/ React.createElement(_css.default, null), /*#__PURE__*/ React.createElement(_subHeading.default, null, "Preview"), /*#__PURE__*/ React.createElement(_preview.default, null))))));
            }
        },
        {
            key: "initialise",
            value: function initialise() {
                this.assignContext();
                var _this_constructor = this.constructor, initialMarkdown = _this_constructor.initialMarkdown, initialMarkdownStyle = _this_constructor.initialMarkdownStyle, markdownStyle = initialMarkdownStyle, markdown = initialMarkdown; ///
                this.setMarkdown(markdown);
                this.setMarkdownStyle(markdownStyle);
                this.update();
            }
        }
    ]);
    return View;
}(_wrap_native_super(_easy.Element));
_define_property(View, "tagName", "div");
_define_property(View, "ignoredProperties", [
    "markdownStyleElement"
]);
_define_property(View, "defaultProperties", {
    className: "view"
});
_define_property(View, "initialMarkdown", "# Introduction\n  \n@embed paragraph.md  \n\nThis book also goes into considerable detail on the subject of Occam's approach to language, which largely boils down to its use of grammars.\nOccam has its own language, called Florence,[^florence] but it will also support controlled natural languages in the near future.\nIndeed, the verifier cannot distinguish between these languages at all.\nThis book explains how this is possible.\n\nAfter explaining Occam's approach to language this book gives a very detailed explanation of how the verifier works.\nSome may find this nauseating but I maintain that it is essential.\nThe whole idea behind Occam is to facilitate human reasoning and not to supplant it, and it is the verifier that reasons on your behalf.\nSo you must understand how it works.\nIn fact I recommend that you read the introduction together with the first four chapters of the Foundations book before going much further with this one.\nThey are neither very long nor very deep and will provide the necessary background for understanding the verifier in particular.\n\nI hope that the verifier's implenentation is both transparent and readable, and therefore understandable, especially augmented as it is with the explanation here.\nApart from anything else even a partial understanding will likely save a good deal of frustration when you begin to work seriously with Occam.\nThe other reason for understanding the verifier is that it has not been verified itself.\nSo you cannot simply press a button and have confidence in it, that is not the idea at all.\n\nIn fact, at the risk of courting controversy, I would argue that it should not be the idea with any verifier.\nAll are failible regardless of what their proponents may claim and therefore I do not believe that their results should ever be trusted without some level of human oversight.\nIndeed in my opinion verification should be an aid to clarity and rigour and never a substitute for it.\nThe idea of a proof as a black box in particular is anathema to me.\n\nMoving on, the standpoint that software should be an aid to human reasonibg and not a substitute for it must these days be tempered by a consideration of artificial intelligence as a tool for reasoning.\nWhat inspired me over the near decade of work that it took to get Occam to its first viable release was a firm belief in what I call the four elephants, expounded in the four chapters of the aforementioned Foundations book.\nI had not heard of large language models when I started out and they were never a motivating factor, but as I came to my first milestone after those many years, they began to loom large.\n\nThe resurgence of artificial intelligence in recent years has hardly changed my views on automated reasoning, however.\nAdmittedly of late there has been some progress in the direction of coupling artificial intelligence with formal reasoning systems.\nBut for its part Occam only has a bearing on the right hand side of this coupling.\nHowever on the left hand side, it is importtant to note that the output of potentially any large language model or such like can serve as input for Occam.\n\nThus the panacea of using computers as tools for symbolic reasoning, be that devising algorithms or protocols; discovering new mathematics or logic; or whatever, is almost upon us.\nAnd it is worth pointing out that this panacea has been eagerly anticipated for around seventy five years now.\nThere is no doubt that artificial intelligence is on the verge of bringing all of this about, but without tools such as Occam the output of artificial intelligence models will always be clouded in doubt.\n\nFinally I should mention Highmark, wihch is a new document preparation system developed in tandem with Occam.\nIt is a necessary intermediate step in working towards Occam's support for controlled natural languages but I hope that in the long run it will succeed in its own right.\nBoth this book and the Foundations book were written using Highmark and it may well turn out that more people use Occam for working with it than for reasoning.\nThere is therefore a chapter dedicated to it immediately after the chapter on getting to grips with the IDE.\nAnd if you are using Occam to work exclusively with Highmark then please do not be daunted by the formal reasoning side of things, you can safely ignore it, and rest assured that support for Highmark will always be included.\n\nTo conclude, I hope that in the coming years at least some people will come to see Occam as an indespensible tool for symbolic reasoning.\nAmongst other things it will enable them to leverage artificial intelligence to aid their own intellectual enquiries.\nHowever artificial intelligence will not, at least not in the foreseeable future, supplant them.\n\n[^occam]: The word Occam is used somewhat nebulously here.\nIt is most often associated with Occam's IDE but in fact it encompasses a range of software and services.\nThis book explains these divers parts and there is a companion book, called The Foundations of Symbolic Reasoning, that covers the underlying theory.\n\n[^florence]: Occam was originally called Florence but the former seemed more apt.\n\n@footnotes\n\n@pageNumber\n");
_define_property(View, "initialMarkdownStyle", "position: absolute;\n");
var _default = (0, _easywithstyle.default)(View)(_templateObject());
function importer(filePath, context) {
    var content = "\n\nI have tried to make Occam[^occam] as useable as possible but there are limits.\nAt the end of the day it is an expert system and some of its parts, not least the verifier, need detailed explanation.\nIt is the purpose of this book is to provide these explanations.\n  \n", startOfContent = true, startRule = markdownParser.getStartRule(), tokens = markdownLexer.tokenise(content), node = markdownParser.parse(tokens, startRule, startOfContent), importedNode = node, importedTokens = tokens, importedClassName = "introduction";
    Object.assign(context, {
        importedNode: importedNode,
        importedTokens: importedTokens,
        importedClassName: importedClassName
    });
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9leGFtcGxlL3ZpZXcuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB3aXRoU3R5bGUgZnJvbSBcImVhc3ktd2l0aC1zdHlsZVwiOyAgLy8vXG5cbmltcG9ydCB7IEVsZW1lbnQgfSBmcm9tIFwiZWFzeVwiO1xuaW1wb3J0IHsgTWFya2Rvd25MZXhlciwgTWFya2Rvd25QYXJzZXIsIE1hcmtkb3duU3R5bGVMZXhlciwgTWFya2Rvd25TdHlsZVBhcnNlciB9IGZyb20gXCIuLi9pbmRleFwiO1xuaW1wb3J0IHsgUm93RGl2LCBSb3dzRGl2LCBDb2x1bW5EaXYsIENvbHVtbnNEaXYsIFZlcnRpY2FsU3BsaXR0ZXJEaXYsIEhvcml6b250YWxTcGxpdHRlckRpdiB9IGZyb20gXCJlYXN5LWxheW91dFwiO1xuXG5pbXBvcnQgSFRNTERpdiBmcm9tIFwiLi92aWV3L2Rpdi9odG1sXCI7XG5pbXBvcnQgUHJldmlld0RpdiBmcm9tIFwiLi92aWV3L2Rpdi9wcmV2aWV3XCI7XG5pbXBvcnQgU3ViSGVhZGluZyBmcm9tIFwiLi92aWV3L3N1YkhlYWRpbmdcIjtcbmltcG9ydCBDU1NUZXh0YXJlYSBmcm9tIFwiLi92aWV3L3RleHRhcmVhL2Nzc1wiO1xuaW1wb3J0IFRhYkJ1dHRvbnNEaXYgZnJvbSBcIi4vdmlldy9kaXYvdGFiQnV0dG9uc1wiO1xuaW1wb3J0IExlZnRTaXplYWJsZURpdiBmcm9tIFwiLi92aWV3L2Rpdi9zaXplYWJsZS9sZWZ0XCI7XG5pbXBvcnQgUmlnaHRTaXplYWJsZURpdiBmcm9tIFwiLi92aWV3L2Rpdi9zaXplYWJsZS9yaWdodFwiO1xuaW1wb3J0IE1hcmtkb3duQ29udGFpbmVyRGl2IGZyb20gXCIuL3ZpZXcvZGl2L2NvbnRhaW5lci9tYXJrZG93blwiO1xuaW1wb3J0IE1hcmtkb3duU3R5bGVDb250YWluZXJEaXYgZnJvbSBcIi4vdmlldy9kaXYvY29udGFpbmVyL21hcmtkb3duU3R5bGVcIjtcblxuaW1wb3J0IHsgcG9zdHByb2Nlc3MgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL21hcmtkb3duXCI7XG5pbXBvcnQgeyBMSU5FU19QRVJfUEFHRSwgQ0hBUkFDVEVSU19QRVJfTElORSB9IGZyb20gXCIuL2NvbnN0YW50c1wiO1xuXG5jb25zdCBtYXJrZG93bkxleGVyID0gTWFya2Rvd25MZXhlci5mcm9tTm90aGluZygpLFxuICAgICAgbWFya2Rvd25QYXJzZXIgPSBNYXJrZG93blBhcnNlci5mcm9tTm90aGluZygpLFxuICAgICAgbWFya2Rvd25TdHlsZUxleGVyID0gTWFya2Rvd25TdHlsZUxleGVyLmZyb21Ob3RoaW5nKCksXG4gICAgICBtYXJrZG93blN0eWxlUGFyc2VyID0gTWFya2Rvd25TdHlsZVBhcnNlci5mcm9tTm90aGluZygpO1xuXG5jbGFzcyBWaWV3IGV4dGVuZHMgRWxlbWVudCB7XG4gIG1hcmtkb3duU3R5bGVDdXN0b21IYW5kbGVyID0gKGV2ZW50LCBlbGVtZW50KSA9PiB7XG4gICAgdGhpcy5tYXJrZG93blN0eWxlKCk7XG4gIH1cblxuICBtYXJrZG93bkN1c3RvbUhhbmRsZXIgPSAoZXZlbnQsIGVsZW1lbnQpID0+IHtcbiAgICB0aGlzLm1hcmtkb3duKCk7XG4gIH1cblxuICBrZXlVcEN1c3RvbUhhbmRsZXIgPSAoZXZlbnQsIGVsZW1lbnQpID0+IHtcbiAgICB0aGlzLnVwZGF0ZSgpO1xuICB9XG5cbiAgdXBkYXRlTWFya2Rvd25TdHlsZSgpIHtcbiAgICBjb25zdCB7IG1hcmtkb3duU3R5bGVFbGVtZW50IH0gPSB0aGlzLnByb3BlcnRpZXMsXG4gICAgICAgICAgbWFya2Rvd25TdHlsZSA9IHRoaXMuZ2V0TWFya2Rvd25TdHlsZSgpLFxuICAgICAgICAgIGNzcyA9IG1hcmtkb3duU3R5bGVFbGVtZW50LnVwZGF0ZShtYXJrZG93blN0eWxlKTtcblxuICAgIHRoaXMuc2V0Q1NTKGNzcyk7XG5cbiAgICBjb25zdCBsZXhlciA9IG1hcmtkb3duU3R5bGVMZXhlciwgLy8vXG4gICAgICAgICAgcGFyc2VyID0gbWFya2Rvd25TdHlsZVBhcnNlciwgLy8vXG4gICAgICAgICAgY29udGVudCA9IG1hcmtkb3duU3R5bGUsICAvLy9cbiAgICAgICAgICB0b2tlbnMgPSBsZXhlci50b2tlbmlzZShjb250ZW50KSxcbiAgICAgICAgICBzdGFydFJ1bGUgPSBwYXJzZXIuZ2V0U3RhcnRSdWxlKCksXG4gICAgICAgICAgc3RhcnRPZkNvbnRlbnQgPSB0cnVlLFxuICAgICAgICAgIG5vZGUgPSBwYXJzZXIucGFyc2UodG9rZW5zLCBzdGFydFJ1bGUsIHN0YXJ0T2ZDb250ZW50KTtcblxuICAgIGlmIChub2RlICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBwYXJzZVRyZWUgPSBub2RlLmFzUGFyc2VUcmVlKHRva2Vucyk7XG5cbiAgICAgIHRoaXMudXBkYXRlTWFya2Rvd25TdHlsZVBhcnNlVHJlZVRleHRhcmVhKHBhcnNlVHJlZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuY2xlYXJNYXJrZG93blN0eWxlUGFyc2VUcmVlVGV4dGFyZWEoKTtcbiAgICB9XG4gIH1cblxuICB1cGRhdGVNYXJrZG93bigpIHtcbiAgICBjb25zdCBtYXJrZG93biA9IHRoaXMuZ2V0TWFya2Rvd24oKSxcbiAgICAgICAgICBsZXhlciA9IG1hcmtkb3duTGV4ZXIsICAvLy9cbiAgICAgICAgICBwYXJzZXIgPSAgbWFya2Rvd25QYXJzZXIsIC8vL1xuICAgICAgICAgIGNvbnRlbnQgPSBtYXJrZG93biwgLy8vXG4gICAgICAgICAgc3RhcnRPZkNvbnRlbnQgPSB0cnVlLFxuICAgICAgICAgIHN0YXJ0UnVsZSA9IHBhcnNlci5nZXRTdGFydFJ1bGUoKSxcbiAgICAgICAgICB0b2tlbnMgPSBsZXhlci50b2tlbmlzZShjb250ZW50KSxcbiAgICAgICAgICBub2RlID0gcGFyc2VyLnBhcnNlKHRva2Vucywgc3RhcnRSdWxlLCBzdGFydE9mQ29udGVudCk7XG5cbiAgICBpZiAobm9kZSAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgbGluZXNQZXJQYWdlID0gTElORVNfUEVSX1BBR0UsXG4gICAgICAgICAgICBjaGFyYWN0ZXJzUGVyTGluZSA9IENIQVJBQ1RFUlNfUEVSX0xJTkUsXG4gICAgICAgICAgICBjb250ZXh0ID0ge1xuICAgICAgICAgICAgICB0b2tlbnMsXG4gICAgICAgICAgICAgIGltcG9ydGVyLFxuICAgICAgICAgICAgICBsaW5lc1BlclBhZ2UsXG4gICAgICAgICAgICAgIGNoYXJhY3RlcnNQZXJMaW5lXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZGl2aXNpb25NYXJrZG93bk5vZGUgPSBub2RlLCAgLy8vXG4gICAgICAgICAgICBkaXZpc2lvbk1hcmtkb3duTm9kZXMgPSBwb3N0cHJvY2VzcyhkaXZpc2lvbk1hcmtkb3duTm9kZSwgY29udGV4dCk7XG5cbiAgICAgIGNvbnN0IGh0bWxzID0gW10sXG4gICAgICAgICAgICBkb21FbGVtZW50cyA9IFtdO1xuXG4gICAgICBkaXZpc2lvbk1hcmtkb3duTm9kZXMuZm9yRWFjaCgoZGl2aXNpb25NYXJrZG93bk5vZGUsIGluZGV4KSA9PiB7XG4gICAgICAgIGNvbnN0IHBhZ2VOdW1iZXIgPSBpbmRleCArIDE7XG5cbiAgICAgICAgT2JqZWN0LmFzc2lnbihjb250ZXh0LCB7XG4gICAgICAgICAgcGFnZU51bWJlclxuICAgICAgICB9KTtcblxuICAgICAgICBjb25zdCBodG1sID0gZGl2aXNpb25NYXJrZG93bk5vZGUuYXNIVE1MKGNvbnRleHQpLFxuICAgICAgICAgICAgICBkb21FbGVtZW50ID0gZGl2aXNpb25NYXJrZG93bk5vZGUuY3JlYXRlRE9NRWxlbWVudChjb250ZXh0KTtcblxuICAgICAgICBodG1scy5wdXNoKGh0bWwpO1xuXG4gICAgICAgIGRvbUVsZW1lbnRzLnB1c2goZG9tRWxlbWVudCk7XG4gICAgICB9KTtcblxuICAgICAgdGhpcy51cGRhdGVYTVAoaHRtbHMpO1xuXG4gICAgICB0aGlzLnVwZGF0ZVByZXZpZXdEaXYoZG9tRWxlbWVudHMpO1xuXG4gICAgICBjb25zdCBwYXJzZVRyZWUgPSBub2RlLmFzUGFyc2VUcmVlKHRva2Vucyk7XG5cbiAgICAgIHRoaXMudXBkYXRlTWFya2Rvd25QYXJzZVRyZWVUZXh0YXJlYShwYXJzZVRyZWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmNsZWFyWE1QKCk7XG5cbiAgICAgIHRoaXMuY2xlYXJQcmV2aWV3RGl2KCk7XG5cbiAgICAgIHRoaXMuY2xlYXJNYXJrZG93blBhcnNlVHJlZVRleHRhcmVhKCk7XG4gICAgfVxuICB9XG5cbiAgbWFya2Rvd25TdHlsZSgpIHtcbiAgICB0aGlzLmhpZGVNYXJrZG93bkNvbnRhaW5lckRpdigpO1xuICAgIHRoaXMuc2hvd01hcmtkb3duU3R5bGVDb250YWluZXJEaXYoKTtcbiAgfVxuXG4gIG1hcmtkb3duKCkge1xuICAgIHRoaXMuc2hvd01hcmtkb3duQ29udGFpbmVyRGl2KCk7XG4gICAgdGhpcy5oaWRlTWFya2Rvd25TdHlsZUNvbnRhaW5lckRpdigpO1xuICB9XG5cbiAgdXBkYXRlKCkge1xuICAgIHRoaXMudXBkYXRlTWFya2Rvd24oKTtcbiAgICB0aGlzLnVwZGF0ZU1hcmtkb3duU3R5bGUoKTtcbiAgfVxuXG4gIGNoaWxkRWxlbWVudHMoKSB7XG4gICAgcmV0dXJuIChcblxuICAgICAgPENvbHVtbnNEaXY+XG4gICAgICAgIDxMZWZ0U2l6ZWFibGVEaXY+XG4gICAgICAgICAgPFRhYkJ1dHRvbnNEaXYgb25DdXN0b21NYXJrZG93bj17dGhpcy5tYXJrZG93bkN1c3RvbUhhbmRsZXJ9IG9uQ3VzdG9tTWFya2Rvd25TdHlsZT17dGhpcy5tYXJrZG93blN0eWxlQ3VzdG9tSGFuZGxlcn0gLz5cbiAgICAgICAgICA8TWFya2Rvd25Db250YWluZXJEaXYgb25DdXN0b21LZXlVcD17dGhpcy5rZXlVcEN1c3RvbUhhbmRsZXJ9IC8+XG4gICAgICAgICAgPE1hcmtkb3duU3R5bGVDb250YWluZXJEaXYgb25DdXN0b21LZXlVcD17dGhpcy5rZXlVcEN1c3RvbUhhbmRsZXJ9IC8+XG4gICAgICAgIDwvTGVmdFNpemVhYmxlRGl2PlxuICAgICAgICA8VmVydGljYWxTcGxpdHRlckRpdi8+XG4gICAgICAgIDxDb2x1bW5EaXY+XG4gICAgICAgICAgPFJvd3NEaXY+XG4gICAgICAgICAgICA8UmlnaHRTaXplYWJsZURpdj5cbiAgICAgICAgICAgICAgPFN1YkhlYWRpbmc+XG4gICAgICAgICAgICAgICAgSFRNTFxuICAgICAgICAgICAgICA8L1N1YkhlYWRpbmc+XG4gICAgICAgICAgICAgIDxIVE1MRGl2Lz5cbiAgICAgICAgICAgIDwvUmlnaHRTaXplYWJsZURpdj5cbiAgICAgICAgICAgIDxIb3Jpem9udGFsU3BsaXR0ZXJEaXYvPlxuICAgICAgICAgICAgPFJvd0Rpdj5cbiAgICAgICAgICAgICAgPFJvd3NEaXY+XG4gICAgICAgICAgICAgICAgPFN1YkhlYWRpbmc+XG4gICAgICAgICAgICAgICAgICBDU1NcbiAgICAgICAgICAgICAgICA8L1N1YkhlYWRpbmc+XG4gICAgICAgICAgICAgICAgPENTU1RleHRhcmVhLz5cbiAgICAgICAgICAgICAgICA8U3ViSGVhZGluZz5cbiAgICAgICAgICAgICAgICAgIFByZXZpZXdcbiAgICAgICAgICAgICAgICA8L1N1YkhlYWRpbmc+XG4gICAgICAgICAgICAgICAgPFByZXZpZXdEaXYvPlxuICAgICAgICAgICAgICA8L1Jvd3NEaXY+XG4gICAgICAgICAgICA8L1Jvd0Rpdj5cbiAgICAgICAgICA8L1Jvd3NEaXY+XG4gICAgICAgIDwvQ29sdW1uRGl2PlxuICAgICAgPC9Db2x1bW5zRGl2PlxuXG4gICAgKTtcbiAgfVxuXG4gIGluaXRpYWxpc2UoKSB7XG4gICAgdGhpcy5hc3NpZ25Db250ZXh0KCk7XG5cbiAgICBjb25zdCB7IGluaXRpYWxNYXJrZG93biwgaW5pdGlhbE1hcmtkb3duU3R5bGUgfSA9IHRoaXMuY29uc3RydWN0b3IsXG4gICAgICAgICAgbWFya2Rvd25TdHlsZSA9IGluaXRpYWxNYXJrZG93blN0eWxlLCAvLy9cbiAgICAgICAgICBtYXJrZG93biA9IGluaXRpYWxNYXJrZG93bjsgLy8vXG5cbiAgICB0aGlzLnNldE1hcmtkb3duKG1hcmtkb3duKTtcblxuICAgIHRoaXMuc2V0TWFya2Rvd25TdHlsZShtYXJrZG93blN0eWxlKTtcblxuICAgIHRoaXMudXBkYXRlKCk7XG4gIH1cblxuICBzdGF0aWMgdGFnTmFtZSA9IFwiZGl2XCI7XG5cbiAgc3RhdGljIGlnbm9yZWRQcm9wZXJ0aWVzID0gW1xuICAgIFwibWFya2Rvd25TdHlsZUVsZW1lbnRcIlxuICBdO1xuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcGVydGllcyA9IHtcbiAgICBjbGFzc05hbWU6IFwidmlld1wiXG4gIH07XG5cbiAgc3RhdGljIGluaXRpYWxNYXJrZG93biA9IGAjIEludHJvZHVjdGlvblxuICBcbkBlbWJlZCBwYXJhZ3JhcGgubWQgIFxuXG5UaGlzIGJvb2sgYWxzbyBnb2VzIGludG8gY29uc2lkZXJhYmxlIGRldGFpbCBvbiB0aGUgc3ViamVjdCBvZiBPY2NhbSdzIGFwcHJvYWNoIHRvIGxhbmd1YWdlLCB3aGljaCBsYXJnZWx5IGJvaWxzIGRvd24gdG8gaXRzIHVzZSBvZiBncmFtbWFycy5cbk9jY2FtIGhhcyBpdHMgb3duIGxhbmd1YWdlLCBjYWxsZWQgRmxvcmVuY2UsW15mbG9yZW5jZV0gYnV0IGl0IHdpbGwgYWxzbyBzdXBwb3J0IGNvbnRyb2xsZWQgbmF0dXJhbCBsYW5ndWFnZXMgaW4gdGhlIG5lYXIgZnV0dXJlLlxuSW5kZWVkLCB0aGUgdmVyaWZpZXIgY2Fubm90IGRpc3Rpbmd1aXNoIGJldHdlZW4gdGhlc2UgbGFuZ3VhZ2VzIGF0IGFsbC5cblRoaXMgYm9vayBleHBsYWlucyBob3cgdGhpcyBpcyBwb3NzaWJsZS5cblxuQWZ0ZXIgZXhwbGFpbmluZyBPY2NhbSdzIGFwcHJvYWNoIHRvIGxhbmd1YWdlIHRoaXMgYm9vayBnaXZlcyBhIHZlcnkgZGV0YWlsZWQgZXhwbGFuYXRpb24gb2YgaG93IHRoZSB2ZXJpZmllciB3b3Jrcy5cblNvbWUgbWF5IGZpbmQgdGhpcyBuYXVzZWF0aW5nIGJ1dCBJIG1haW50YWluIHRoYXQgaXQgaXMgZXNzZW50aWFsLlxuVGhlIHdob2xlIGlkZWEgYmVoaW5kIE9jY2FtIGlzIHRvIGZhY2lsaXRhdGUgaHVtYW4gcmVhc29uaW5nIGFuZCBub3QgdG8gc3VwcGxhbnQgaXQsIGFuZCBpdCBpcyB0aGUgdmVyaWZpZXIgdGhhdCByZWFzb25zIG9uIHlvdXIgYmVoYWxmLlxuU28geW91IG11c3QgdW5kZXJzdGFuZCBob3cgaXQgd29ya3MuXG5JbiBmYWN0IEkgcmVjb21tZW5kIHRoYXQgeW91IHJlYWQgdGhlIGludHJvZHVjdGlvbiB0b2dldGhlciB3aXRoIHRoZSBmaXJzdCBmb3VyIGNoYXB0ZXJzIG9mIHRoZSBGb3VuZGF0aW9ucyBib29rIGJlZm9yZSBnb2luZyBtdWNoIGZ1cnRoZXIgd2l0aCB0aGlzIG9uZS5cblRoZXkgYXJlIG5laXRoZXIgdmVyeSBsb25nIG5vciB2ZXJ5IGRlZXAgYW5kIHdpbGwgcHJvdmlkZSB0aGUgbmVjZXNzYXJ5IGJhY2tncm91bmQgZm9yIHVuZGVyc3RhbmRpbmcgdGhlIHZlcmlmaWVyIGluIHBhcnRpY3VsYXIuXG5cbkkgaG9wZSB0aGF0IHRoZSB2ZXJpZmllcidzIGltcGxlbmVudGF0aW9uIGlzIGJvdGggdHJhbnNwYXJlbnQgYW5kIHJlYWRhYmxlLCBhbmQgdGhlcmVmb3JlIHVuZGVyc3RhbmRhYmxlLCBlc3BlY2lhbGx5IGF1Z21lbnRlZCBhcyBpdCBpcyB3aXRoIHRoZSBleHBsYW5hdGlvbiBoZXJlLlxuQXBhcnQgZnJvbSBhbnl0aGluZyBlbHNlIGV2ZW4gYSBwYXJ0aWFsIHVuZGVyc3RhbmRpbmcgd2lsbCBsaWtlbHkgc2F2ZSBhIGdvb2QgZGVhbCBvZiBmcnVzdHJhdGlvbiB3aGVuIHlvdSBiZWdpbiB0byB3b3JrIHNlcmlvdXNseSB3aXRoIE9jY2FtLlxuVGhlIG90aGVyIHJlYXNvbiBmb3IgdW5kZXJzdGFuZGluZyB0aGUgdmVyaWZpZXIgaXMgdGhhdCBpdCBoYXMgbm90IGJlZW4gdmVyaWZpZWQgaXRzZWxmLlxuU28geW91IGNhbm5vdCBzaW1wbHkgcHJlc3MgYSBidXR0b24gYW5kIGhhdmUgY29uZmlkZW5jZSBpbiBpdCwgdGhhdCBpcyBub3QgdGhlIGlkZWEgYXQgYWxsLlxuXG5JbiBmYWN0LCBhdCB0aGUgcmlzayBvZiBjb3VydGluZyBjb250cm92ZXJzeSwgSSB3b3VsZCBhcmd1ZSB0aGF0IGl0IHNob3VsZCBub3QgYmUgdGhlIGlkZWEgd2l0aCBhbnkgdmVyaWZpZXIuXG5BbGwgYXJlIGZhaWxpYmxlIHJlZ2FyZGxlc3Mgb2Ygd2hhdCB0aGVpciBwcm9wb25lbnRzIG1heSBjbGFpbSBhbmQgdGhlcmVmb3JlIEkgZG8gbm90IGJlbGlldmUgdGhhdCB0aGVpciByZXN1bHRzIHNob3VsZCBldmVyIGJlIHRydXN0ZWQgd2l0aG91dCBzb21lIGxldmVsIG9mIGh1bWFuIG92ZXJzaWdodC5cbkluZGVlZCBpbiBteSBvcGluaW9uIHZlcmlmaWNhdGlvbiBzaG91bGQgYmUgYW4gYWlkIHRvIGNsYXJpdHkgYW5kIHJpZ291ciBhbmQgbmV2ZXIgYSBzdWJzdGl0dXRlIGZvciBpdC5cblRoZSBpZGVhIG9mIGEgcHJvb2YgYXMgYSBibGFjayBib3ggaW4gcGFydGljdWxhciBpcyBhbmF0aGVtYSB0byBtZS5cblxuTW92aW5nIG9uLCB0aGUgc3RhbmRwb2ludCB0aGF0IHNvZnR3YXJlIHNob3VsZCBiZSBhbiBhaWQgdG8gaHVtYW4gcmVhc29uaWJnIGFuZCBub3QgYSBzdWJzdGl0dXRlIGZvciBpdCBtdXN0IHRoZXNlIGRheXMgYmUgdGVtcGVyZWQgYnkgYSBjb25zaWRlcmF0aW9uIG9mIGFydGlmaWNpYWwgaW50ZWxsaWdlbmNlIGFzIGEgdG9vbCBmb3IgcmVhc29uaW5nLlxuV2hhdCBpbnNwaXJlZCBtZSBvdmVyIHRoZSBuZWFyIGRlY2FkZSBvZiB3b3JrIHRoYXQgaXQgdG9vayB0byBnZXQgT2NjYW0gdG8gaXRzIGZpcnN0IHZpYWJsZSByZWxlYXNlIHdhcyBhIGZpcm0gYmVsaWVmIGluIHdoYXQgSSBjYWxsIHRoZSBmb3VyIGVsZXBoYW50cywgZXhwb3VuZGVkIGluIHRoZSBmb3VyIGNoYXB0ZXJzIG9mIHRoZSBhZm9yZW1lbnRpb25lZCBGb3VuZGF0aW9ucyBib29rLlxuSSBoYWQgbm90IGhlYXJkIG9mIGxhcmdlIGxhbmd1YWdlIG1vZGVscyB3aGVuIEkgc3RhcnRlZCBvdXQgYW5kIHRoZXkgd2VyZSBuZXZlciBhIG1vdGl2YXRpbmcgZmFjdG9yLCBidXQgYXMgSSBjYW1lIHRvIG15IGZpcnN0IG1pbGVzdG9uZSBhZnRlciB0aG9zZSBtYW55IHllYXJzLCB0aGV5IGJlZ2FuIHRvIGxvb20gbGFyZ2UuXG5cblRoZSByZXN1cmdlbmNlIG9mIGFydGlmaWNpYWwgaW50ZWxsaWdlbmNlIGluIHJlY2VudCB5ZWFycyBoYXMgaGFyZGx5IGNoYW5nZWQgbXkgdmlld3Mgb24gYXV0b21hdGVkIHJlYXNvbmluZywgaG93ZXZlci5cbkFkbWl0dGVkbHkgb2YgbGF0ZSB0aGVyZSBoYXMgYmVlbiBzb21lIHByb2dyZXNzIGluIHRoZSBkaXJlY3Rpb24gb2YgY291cGxpbmcgYXJ0aWZpY2lhbCBpbnRlbGxpZ2VuY2Ugd2l0aCBmb3JtYWwgcmVhc29uaW5nIHN5c3RlbXMuXG5CdXQgZm9yIGl0cyBwYXJ0IE9jY2FtIG9ubHkgaGFzIGEgYmVhcmluZyBvbiB0aGUgcmlnaHQgaGFuZCBzaWRlIG9mIHRoaXMgY291cGxpbmcuXG5Ib3dldmVyIG9uIHRoZSBsZWZ0IGhhbmQgc2lkZSwgaXQgaXMgaW1wb3J0dGFudCB0byBub3RlIHRoYXQgdGhlIG91dHB1dCBvZiBwb3RlbnRpYWxseSBhbnkgbGFyZ2UgbGFuZ3VhZ2UgbW9kZWwgb3Igc3VjaCBsaWtlIGNhbiBzZXJ2ZSBhcyBpbnB1dCBmb3IgT2NjYW0uXG5cblRodXMgdGhlIHBhbmFjZWEgb2YgdXNpbmcgY29tcHV0ZXJzIGFzIHRvb2xzIGZvciBzeW1ib2xpYyByZWFzb25pbmcsIGJlIHRoYXQgZGV2aXNpbmcgYWxnb3JpdGhtcyBvciBwcm90b2NvbHM7IGRpc2NvdmVyaW5nIG5ldyBtYXRoZW1hdGljcyBvciBsb2dpYzsgb3Igd2hhdGV2ZXIsIGlzIGFsbW9zdCB1cG9uIHVzLlxuQW5kIGl0IGlzIHdvcnRoIHBvaW50aW5nIG91dCB0aGF0IHRoaXMgcGFuYWNlYSBoYXMgYmVlbiBlYWdlcmx5IGFudGljaXBhdGVkIGZvciBhcm91bmQgc2V2ZW50eSBmaXZlIHllYXJzIG5vdy5cblRoZXJlIGlzIG5vIGRvdWJ0IHRoYXQgYXJ0aWZpY2lhbCBpbnRlbGxpZ2VuY2UgaXMgb24gdGhlIHZlcmdlIG9mIGJyaW5naW5nIGFsbCBvZiB0aGlzIGFib3V0LCBidXQgd2l0aG91dCB0b29scyBzdWNoIGFzIE9jY2FtIHRoZSBvdXRwdXQgb2YgYXJ0aWZpY2lhbCBpbnRlbGxpZ2VuY2UgbW9kZWxzIHdpbGwgYWx3YXlzIGJlIGNsb3VkZWQgaW4gZG91YnQuXG5cbkZpbmFsbHkgSSBzaG91bGQgbWVudGlvbiBIaWdobWFyaywgd2loY2ggaXMgYSBuZXcgZG9jdW1lbnQgcHJlcGFyYXRpb24gc3lzdGVtIGRldmVsb3BlZCBpbiB0YW5kZW0gd2l0aCBPY2NhbS5cbkl0IGlzIGEgbmVjZXNzYXJ5IGludGVybWVkaWF0ZSBzdGVwIGluIHdvcmtpbmcgdG93YXJkcyBPY2NhbSdzIHN1cHBvcnQgZm9yIGNvbnRyb2xsZWQgbmF0dXJhbCBsYW5ndWFnZXMgYnV0IEkgaG9wZSB0aGF0IGluIHRoZSBsb25nIHJ1biBpdCB3aWxsIHN1Y2NlZWQgaW4gaXRzIG93biByaWdodC5cbkJvdGggdGhpcyBib29rIGFuZCB0aGUgRm91bmRhdGlvbnMgYm9vayB3ZXJlIHdyaXR0ZW4gdXNpbmcgSGlnaG1hcmsgYW5kIGl0IG1heSB3ZWxsIHR1cm4gb3V0IHRoYXQgbW9yZSBwZW9wbGUgdXNlIE9jY2FtIGZvciB3b3JraW5nIHdpdGggaXQgdGhhbiBmb3IgcmVhc29uaW5nLlxuVGhlcmUgaXMgdGhlcmVmb3JlIGEgY2hhcHRlciBkZWRpY2F0ZWQgdG8gaXQgaW1tZWRpYXRlbHkgYWZ0ZXIgdGhlIGNoYXB0ZXIgb24gZ2V0dGluZyB0byBncmlwcyB3aXRoIHRoZSBJREUuXG5BbmQgaWYgeW91IGFyZSB1c2luZyBPY2NhbSB0byB3b3JrIGV4Y2x1c2l2ZWx5IHdpdGggSGlnaG1hcmsgdGhlbiBwbGVhc2UgZG8gbm90IGJlIGRhdW50ZWQgYnkgdGhlIGZvcm1hbCByZWFzb25pbmcgc2lkZSBvZiB0aGluZ3MsIHlvdSBjYW4gc2FmZWx5IGlnbm9yZSBpdCwgYW5kIHJlc3QgYXNzdXJlZCB0aGF0IHN1cHBvcnQgZm9yIEhpZ2htYXJrIHdpbGwgYWx3YXlzIGJlIGluY2x1ZGVkLlxuXG5UbyBjb25jbHVkZSwgSSBob3BlIHRoYXQgaW4gdGhlIGNvbWluZyB5ZWFycyBhdCBsZWFzdCBzb21lIHBlb3BsZSB3aWxsIGNvbWUgdG8gc2VlIE9jY2FtIGFzIGFuIGluZGVzcGVuc2libGUgdG9vbCBmb3Igc3ltYm9saWMgcmVhc29uaW5nLlxuQW1vbmdzdCBvdGhlciB0aGluZ3MgaXQgd2lsbCBlbmFibGUgdGhlbSB0byBsZXZlcmFnZSBhcnRpZmljaWFsIGludGVsbGlnZW5jZSB0byBhaWQgdGhlaXIgb3duIGludGVsbGVjdHVhbCBlbnF1aXJpZXMuXG5Ib3dldmVyIGFydGlmaWNpYWwgaW50ZWxsaWdlbmNlIHdpbGwgbm90LCBhdCBsZWFzdCBub3QgaW4gdGhlIGZvcmVzZWVhYmxlIGZ1dHVyZSwgc3VwcGxhbnQgdGhlbS5cblxuW15vY2NhbV06IFRoZSB3b3JkIE9jY2FtIGlzIHVzZWQgc29tZXdoYXQgbmVidWxvdXNseSBoZXJlLlxuSXQgaXMgbW9zdCBvZnRlbiBhc3NvY2lhdGVkIHdpdGggT2NjYW0ncyBJREUgYnV0IGluIGZhY3QgaXQgZW5jb21wYXNzZXMgYSByYW5nZSBvZiBzb2Z0d2FyZSBhbmQgc2VydmljZXMuXG5UaGlzIGJvb2sgZXhwbGFpbnMgdGhlc2UgZGl2ZXJzIHBhcnRzIGFuZCB0aGVyZSBpcyBhIGNvbXBhbmlvbiBib29rLCBjYWxsZWQgVGhlIEZvdW5kYXRpb25zIG9mIFN5bWJvbGljIFJlYXNvbmluZywgdGhhdCBjb3ZlcnMgdGhlIHVuZGVybHlpbmcgdGhlb3J5LlxuXG5bXmZsb3JlbmNlXTogT2NjYW0gd2FzIG9yaWdpbmFsbHkgY2FsbGVkIEZsb3JlbmNlIGJ1dCB0aGUgZm9ybWVyIHNlZW1lZCBtb3JlIGFwdC5cblxuQGZvb3Rub3Rlc1xuXG5AcGFnZU51bWJlclxuYDtcblxuICBzdGF0aWMgaW5pdGlhbE1hcmtkb3duU3R5bGUgPSBgcG9zaXRpb246IGFic29sdXRlO1xuYDtcbn1cblxuZXhwb3J0IGRlZmF1bHQgd2l0aFN0eWxlKFZpZXcpYFxuXG4gIHBhZGRpbmc6IDFyZW07XG4gIFxuYDtcblxuZnVuY3Rpb24gaW1wb3J0ZXIoZmlsZVBhdGgsIGNvbnRleHQpIHtcbiAgY29uc3QgY29udGVudCA9IGBcblxuSSBoYXZlIHRyaWVkIHRvIG1ha2UgT2NjYW1bXm9jY2FtXSBhcyB1c2VhYmxlIGFzIHBvc3NpYmxlIGJ1dCB0aGVyZSBhcmUgbGltaXRzLlxuQXQgdGhlIGVuZCBvZiB0aGUgZGF5IGl0IGlzIGFuIGV4cGVydCBzeXN0ZW0gYW5kIHNvbWUgb2YgaXRzIHBhcnRzLCBub3QgbGVhc3QgdGhlIHZlcmlmaWVyLCBuZWVkIGRldGFpbGVkIGV4cGxhbmF0aW9uLlxuSXQgaXMgdGhlIHB1cnBvc2Ugb2YgdGhpcyBib29rIGlzIHRvIHByb3ZpZGUgdGhlc2UgZXhwbGFuYXRpb25zLlxuICBcbmAsXG4gICAgICAgIHN0YXJ0T2ZDb250ZW50ID0gdHJ1ZSxcbiAgICAgICAgc3RhcnRSdWxlID0gbWFya2Rvd25QYXJzZXIuZ2V0U3RhcnRSdWxlKCksXG4gICAgICAgIHRva2VucyA9IG1hcmtkb3duTGV4ZXIudG9rZW5pc2UoY29udGVudCksXG4gICAgICAgIG5vZGUgPSBtYXJrZG93blBhcnNlci5wYXJzZSh0b2tlbnMsIHN0YXJ0UnVsZSwgc3RhcnRPZkNvbnRlbnQpLFxuICAgICAgICBpbXBvcnRlZE5vZGUgPSBub2RlLCAgLy8vXG4gICAgICAgIGltcG9ydGVkVG9rZW5zID0gdG9rZW5zLFxuICAgICAgICBpbXBvcnRlZENsYXNzTmFtZSA9IFwiaW50cm9kdWN0aW9uXCI7XG5cbiAgT2JqZWN0LmFzc2lnbihjb250ZXh0LCB7XG4gICAgaW1wb3J0ZWROb2RlLFxuICAgIGltcG9ydGVkVG9rZW5zLFxuICAgIGltcG9ydGVkQ2xhc3NOYW1lXG4gIH0pO1xufVxuIl0sIm5hbWVzIjpbIm1hcmtkb3duTGV4ZXIiLCJNYXJrZG93bkxleGVyIiwiZnJvbU5vdGhpbmciLCJtYXJrZG93blBhcnNlciIsIk1hcmtkb3duUGFyc2VyIiwibWFya2Rvd25TdHlsZUxleGVyIiwiTWFya2Rvd25TdHlsZUxleGVyIiwibWFya2Rvd25TdHlsZVBhcnNlciIsIk1hcmtkb3duU3R5bGVQYXJzZXIiLCJWaWV3IiwibWFya2Rvd25TdHlsZUN1c3RvbUhhbmRsZXIiLCJldmVudCIsImVsZW1lbnQiLCJtYXJrZG93blN0eWxlIiwibWFya2Rvd25DdXN0b21IYW5kbGVyIiwibWFya2Rvd24iLCJrZXlVcEN1c3RvbUhhbmRsZXIiLCJ1cGRhdGUiLCJ1cGRhdGVNYXJrZG93blN0eWxlIiwibWFya2Rvd25TdHlsZUVsZW1lbnQiLCJwcm9wZXJ0aWVzIiwiZ2V0TWFya2Rvd25TdHlsZSIsImNzcyIsInNldENTUyIsImxleGVyIiwicGFyc2VyIiwiY29udGVudCIsInRva2VucyIsInRva2VuaXNlIiwic3RhcnRSdWxlIiwiZ2V0U3RhcnRSdWxlIiwic3RhcnRPZkNvbnRlbnQiLCJub2RlIiwicGFyc2UiLCJwYXJzZVRyZWUiLCJhc1BhcnNlVHJlZSIsInVwZGF0ZU1hcmtkb3duU3R5bGVQYXJzZVRyZWVUZXh0YXJlYSIsImNsZWFyTWFya2Rvd25TdHlsZVBhcnNlVHJlZVRleHRhcmVhIiwidXBkYXRlTWFya2Rvd24iLCJnZXRNYXJrZG93biIsImxpbmVzUGVyUGFnZSIsIkxJTkVTX1BFUl9QQUdFIiwiY2hhcmFjdGVyc1BlckxpbmUiLCJDSEFSQUNURVJTX1BFUl9MSU5FIiwiY29udGV4dCIsImltcG9ydGVyIiwiZGl2aXNpb25NYXJrZG93bk5vZGUiLCJkaXZpc2lvbk1hcmtkb3duTm9kZXMiLCJwb3N0cHJvY2VzcyIsImh0bWxzIiwiZG9tRWxlbWVudHMiLCJmb3JFYWNoIiwiaW5kZXgiLCJwYWdlTnVtYmVyIiwiT2JqZWN0IiwiYXNzaWduIiwiaHRtbCIsImFzSFRNTCIsImRvbUVsZW1lbnQiLCJjcmVhdGVET01FbGVtZW50IiwicHVzaCIsInVwZGF0ZVhNUCIsInVwZGF0ZVByZXZpZXdEaXYiLCJ1cGRhdGVNYXJrZG93blBhcnNlVHJlZVRleHRhcmVhIiwiY2xlYXJYTVAiLCJjbGVhclByZXZpZXdEaXYiLCJjbGVhck1hcmtkb3duUGFyc2VUcmVlVGV4dGFyZWEiLCJoaWRlTWFya2Rvd25Db250YWluZXJEaXYiLCJzaG93TWFya2Rvd25TdHlsZUNvbnRhaW5lckRpdiIsInNob3dNYXJrZG93bkNvbnRhaW5lckRpdiIsImhpZGVNYXJrZG93blN0eWxlQ29udGFpbmVyRGl2IiwiY2hpbGRFbGVtZW50cyIsIkNvbHVtbnNEaXYiLCJMZWZ0U2l6ZWFibGVEaXYiLCJUYWJCdXR0b25zRGl2Iiwib25DdXN0b21NYXJrZG93biIsIm9uQ3VzdG9tTWFya2Rvd25TdHlsZSIsIk1hcmtkb3duQ29udGFpbmVyRGl2Iiwib25DdXN0b21LZXlVcCIsIk1hcmtkb3duU3R5bGVDb250YWluZXJEaXYiLCJWZXJ0aWNhbFNwbGl0dGVyRGl2IiwiQ29sdW1uRGl2IiwiUm93c0RpdiIsIlJpZ2h0U2l6ZWFibGVEaXYiLCJTdWJIZWFkaW5nIiwiSFRNTERpdiIsIkhvcml6b250YWxTcGxpdHRlckRpdiIsIlJvd0RpdiIsIkNTU1RleHRhcmVhIiwiUHJldmlld0RpdiIsImluaXRpYWxpc2UiLCJhc3NpZ25Db250ZXh0IiwiY29uc3RydWN0b3IiLCJpbml0aWFsTWFya2Rvd24iLCJpbml0aWFsTWFya2Rvd25TdHlsZSIsInNldE1hcmtkb3duIiwic2V0TWFya2Rvd25TdHlsZSIsIkVsZW1lbnQiLCJ0YWdOYW1lIiwiaWdub3JlZFByb3BlcnRpZXMiLCJkZWZhdWx0UHJvcGVydGllcyIsImNsYXNzTmFtZSIsIndpdGhTdHlsZSIsImZpbGVQYXRoIiwiaW1wb3J0ZWROb2RlIiwiaW1wb3J0ZWRUb2tlbnMiLCJpbXBvcnRlZENsYXNzTmFtZSJdLCJyYW5nZU1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsiLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBb1FBOzs7ZUFBQTs7O29FQWxRc0I7b0JBRUU7cUJBQytEOzBCQUNZOzJEQUUvRTs4REFDRztpRUFDQTswREFDQztpRUFDRTsyREFDRTs0REFDQzsrREFDSTtvRUFDSzt5QkFFVjt5QkFDd0I7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFcEQsSUFBTUEsZ0JBQWdCQyxvQkFBYSxDQUFDQyxXQUFXLElBQ3pDQyxpQkFBaUJDLHFCQUFjLENBQUNGLFdBQVcsSUFDM0NHLHFCQUFxQkMseUJBQWtCLENBQUNKLFdBQVcsSUFDbkRL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