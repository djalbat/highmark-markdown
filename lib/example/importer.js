"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    default: function() {
        return importer;
    },
    initialMarkdown: function() {
        return initialMarkdown;
    }
});
var _index = require("../index");
var _constants = require("./constants");
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
var markdownLexer = _index.MarkdownLexer.fromNothing(), markdownParser = _index.MarkdownParser.fromNothing();
function importer(filePath, context) {
    var content = contentMap[filePath] || null;
    if (content !== null) {
        var startRule = markdownParser.getStartRule(), tokens = markdownLexer.tokenise(content), node = markdownParser.parse(tokens, startRule), importedNode = node, importedTokens = tokens, importedClassName = classNameFromFilePath(filePath);
        Object.assign(context, {
            importedNode: importedNode,
            importedTokens: importedTokens,
            importedClassName: importedClassName
        });
    }
}
function classNameFromFilePath(filePath) {
    var className = filePath.replace(/\.md/, _constants.EMPTY_STRING);
    return className;
}
var INDEX_PATH = "index.md", CONTENT_PATH = "content.md", CONTENTS_PATH = "contents.md", HALF_TITLE_PATH = "half-title.md", FRONT_MATTER_PATH = "front-matter.md", INTRODUCTION_PATH = "introduction.md", GETTING_STARTED_PATH = "getting-started.md", INSTALLING_THE_CLI_PATH = "installing-the-cli.md", GETTING_TO_GRIPS_WITH_THE_IDE_PATH = "getting-to-grips-with-the-ide.md";
var initialMarkdown = "@ignore \n\n@include ".concat(FRONT_MATTER_PATH, "\n");
var indexContent = "## Index\n\n@index", contentContent = "@ignore\n\n@include ".concat(INTRODUCTION_PATH, "\n@include ").concat(GETTING_STARTED_PATH), contentsContent = "## Contents\n\n@contents", halfTitleContent = "# Occam", frontMatterContent = "@ignore\n\n@include ".concat(HALF_TITLE_PATH, "\n@include ").concat(CONTENTS_PATH), introductionContent = "# Introduction\n      \nConstructor.\n\n@footnotes\n\n@pageNumber\n", gettingStartedContent = "# Getting started\n      \nAnother short paragraph with a reference to a footnote[^occam].\n\n[^occam]: The word Occam is used somewhat nebulously here.\nIt is most often associated with Occam's IDE but in fact it encompasses a range of software and services.\nThis book explains these divers parts and there is a companion book, called The Foundations of Symbolic Reasoning, that covers the underlying theory.\n\n@footnotes\n\n@embed ".concat(INSTALLING_THE_CLI_PATH, "\n@embed ").concat(GETTING_TO_GRIPS_WITH_THE_IDE_PATH, "\n\n@pageNumber\n"), installingTheCLIContent = "## Installing the CLI\n", gettingToGripsWithTheIDEIContent = "## Getting to grips with the IDE\n            \n* An unordered list to test...\n* ...the indexing.\n      \n1. As well as an...\n2. ...ordered list.\n      \n";
var _obj;
var contentMap = (_obj = {}, _define_property(_obj, INDEX_PATH, indexContent), _define_property(_obj, CONTENT_PATH, contentContent), _define_property(_obj, CONTENTS_PATH, contentsContent), _define_property(_obj, HALF_TITLE_PATH, halfTitleContent), _define_property(_obj, FRONT_MATTER_PATH, frontMatterContent), _define_property(_obj, INTRODUCTION_PATH, introductionContent), _define_property(_obj, GETTING_STARTED_PATH, gettingStartedContent), _define_property(_obj, INSTALLING_THE_CLI_PATH, installingTheCLIContent), _define_property(_obj, GETTING_TO_GRIPS_WITH_THE_IDE_PATH, gettingToGripsWithTheIDEIContent), _obj);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9leGFtcGxlL2ltcG9ydGVyLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBNYXJrZG93bkxleGVyLCBNYXJrZG93blBhcnNlciB9IGZyb20gXCIuLi9pbmRleFwiO1xuXG5pbXBvcnQgeyBFTVBUWV9TVFJJTkcgfSBmcm9tIFwiLi9jb25zdGFudHNcIjtcblxuY29uc3QgbWFya2Rvd25MZXhlciA9IE1hcmtkb3duTGV4ZXIuZnJvbU5vdGhpbmcoKSxcbiAgICAgIG1hcmtkb3duUGFyc2VyID0gTWFya2Rvd25QYXJzZXIuZnJvbU5vdGhpbmcoKTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaW1wb3J0ZXIoZmlsZVBhdGgsIGNvbnRleHQpIHtcbiAgY29uc3QgY29udGVudCA9IGNvbnRlbnRNYXBbZmlsZVBhdGhdIHx8IG51bGw7XG5cbiAgaWYgKGNvbnRlbnQgIT09IG51bGwpIHtcbiAgICBjb25zdCBzdGFydFJ1bGUgPSBtYXJrZG93blBhcnNlci5nZXRTdGFydFJ1bGUoKSxcbiAgICAgICAgICB0b2tlbnMgPSBtYXJrZG93bkxleGVyLnRva2VuaXNlKGNvbnRlbnQpLFxuICAgICAgICAgIG5vZGUgPSBtYXJrZG93blBhcnNlci5wYXJzZSh0b2tlbnMsIHN0YXJ0UnVsZSksXG4gICAgICAgICAgaW1wb3J0ZWROb2RlID0gbm9kZSwgIC8vL1xuICAgICAgICAgIGltcG9ydGVkVG9rZW5zID0gdG9rZW5zLFxuICAgICAgICAgIGltcG9ydGVkQ2xhc3NOYW1lID0gY2xhc3NOYW1lRnJvbUZpbGVQYXRoKGZpbGVQYXRoKTtcblxuICAgIE9iamVjdC5hc3NpZ24oY29udGV4dCwge1xuICAgICAgaW1wb3J0ZWROb2RlLFxuICAgICAgaW1wb3J0ZWRUb2tlbnMsXG4gICAgICBpbXBvcnRlZENsYXNzTmFtZVxuICAgIH0pO1xuICB9XG59XG5cbmZ1bmN0aW9uIGNsYXNzTmFtZUZyb21GaWxlUGF0aChmaWxlUGF0aCkge1xuICBjb25zdCBjbGFzc05hbWUgPSBmaWxlUGF0aC5yZXBsYWNlKC9cXC5tZC8sIEVNUFRZX1NUUklORyk7XG5cbiAgcmV0dXJuIGNsYXNzTmFtZTtcbn1cblxuY29uc3QgSU5ERVhfUEFUSCA9IFwiaW5kZXgubWRcIixcbiAgICAgIENPTlRFTlRfUEFUSCA9IFwiY29udGVudC5tZFwiLFxuICAgICAgQ09OVEVOVFNfUEFUSCA9IFwiY29udGVudHMubWRcIixcbiAgICAgIEhBTEZfVElUTEVfUEFUSCA9IFwiaGFsZi10aXRsZS5tZFwiLFxuICAgICAgRlJPTlRfTUFUVEVSX1BBVEggPSBcImZyb250LW1hdHRlci5tZFwiLFxuICAgICAgSU5UUk9EVUNUSU9OX1BBVEggPSBcImludHJvZHVjdGlvbi5tZFwiLFxuICAgICAgR0VUVElOR19TVEFSVEVEX1BBVEggPSBcImdldHRpbmctc3RhcnRlZC5tZFwiLFxuICAgICAgSU5TVEFMTElOR19USEVfQ0xJX1BBVEggPSBcImluc3RhbGxpbmctdGhlLWNsaS5tZFwiLFxuICAgICAgR0VUVElOR19UT19HUklQU19XSVRIX1RIRV9JREVfUEFUSCA9IFwiZ2V0dGluZy10by1ncmlwcy13aXRoLXRoZS1pZGUubWRcIjtcblxuZXhwb3J0IGNvbnN0IGluaXRpYWxNYXJrZG93biA9IGBAaWdub3JlIFxuXG5AaW5jbHVkZSAke0ZST05UX01BVFRFUl9QQVRIfVxuYDtcblxuY29uc3QgaW5kZXhDb250ZW50ID0gYCMjIEluZGV4XG5cbkBpbmRleGAsXG5cbiAgICAgIGNvbnRlbnRDb250ZW50ID0gYEBpZ25vcmVcblxuQGluY2x1ZGUgJHtJTlRST0RVQ1RJT05fUEFUSH1cbkBpbmNsdWRlICR7R0VUVElOR19TVEFSVEVEX1BBVEh9YCxcblxuICAgICAgY29udGVudHNDb250ZW50ID0gYCMjIENvbnRlbnRzXG5cbkBjb250ZW50c2AsXG5cbiAgICAgIGhhbGZUaXRsZUNvbnRlbnQgPSBgIyBPY2NhbWAsXG5cbiAgICAgIGZyb250TWF0dGVyQ29udGVudCA9IGBAaWdub3JlXG5cbkBpbmNsdWRlICR7SEFMRl9USVRMRV9QQVRIfVxuQGluY2x1ZGUgJHtDT05URU5UU19QQVRIfWAsXG5cbiAgICAgIGludHJvZHVjdGlvbkNvbnRlbnQgPSBgIyBJbnRyb2R1Y3Rpb25cbiAgICAgIFxuQ29uc3RydWN0b3IuXG5cbkBmb290bm90ZXNcblxuQHBhZ2VOdW1iZXJcbmAsXG5cbiAgICAgIGdldHRpbmdTdGFydGVkQ29udGVudCA9IGAjIEdldHRpbmcgc3RhcnRlZFxuICAgICAgXG5Bbm90aGVyIHNob3J0IHBhcmFncmFwaCB3aXRoIGEgcmVmZXJlbmNlIHRvIGEgZm9vdG5vdGVbXm9jY2FtXS5cblxuW15vY2NhbV06IFRoZSB3b3JkIE9jY2FtIGlzIHVzZWQgc29tZXdoYXQgbmVidWxvdXNseSBoZXJlLlxuSXQgaXMgbW9zdCBvZnRlbiBhc3NvY2lhdGVkIHdpdGggT2NjYW0ncyBJREUgYnV0IGluIGZhY3QgaXQgZW5jb21wYXNzZXMgYSByYW5nZSBvZiBzb2Z0d2FyZSBhbmQgc2VydmljZXMuXG5UaGlzIGJvb2sgZXhwbGFpbnMgdGhlc2UgZGl2ZXJzIHBhcnRzIGFuZCB0aGVyZSBpcyBhIGNvbXBhbmlvbiBib29rLCBjYWxsZWQgVGhlIEZvdW5kYXRpb25zIG9mIFN5bWJvbGljIFJlYXNvbmluZywgdGhhdCBjb3ZlcnMgdGhlIHVuZGVybHlpbmcgdGhlb3J5LlxuXG5AZm9vdG5vdGVzXG5cbkBlbWJlZCAke0lOU1RBTExJTkdfVEhFX0NMSV9QQVRIfVxuQGVtYmVkICR7R0VUVElOR19UT19HUklQU19XSVRIX1RIRV9JREVfUEFUSH1cblxuQHBhZ2VOdW1iZXJcbmAsXG5cbiAgICAgIGluc3RhbGxpbmdUaGVDTElDb250ZW50ID0gYCMjIEluc3RhbGxpbmcgdGhlIENMSVxuYCxcblxuICAgICAgZ2V0dGluZ1RvR3JpcHNXaXRoVGhlSURFSUNvbnRlbnQgPSBgIyMgR2V0dGluZyB0byBncmlwcyB3aXRoIHRoZSBJREVcbiAgICAgICAgICAgIFxuKiBBbiB1bm9yZGVyZWQgbGlzdCB0byB0ZXN0Li4uXG4qIC4uLnRoZSBpbmRleGluZy5cbiAgICAgIFxuMS4gQXMgd2VsbCBhcyBhbi4uLlxuMi4gLi4ub3JkZXJlZCBsaXN0LlxuICAgICAgXG5gO1xuXG5jb25zdCBjb250ZW50TWFwID0ge1xuXG4gIFtJTkRFWF9QQVRIXTogaW5kZXhDb250ZW50LFxuICBbQ09OVEVOVF9QQVRIXTogY29udGVudENvbnRlbnQsXG4gIFtDT05URU5UU19QQVRIXTogY29udGVudHNDb250ZW50LFxuICBbSEFMRl9USVRMRV9QQVRIXTogaGFsZlRpdGxlQ29udGVudCxcbiAgW0ZST05UX01BVFRFUl9QQVRIXTogZnJvbnRNYXR0ZXJDb250ZW50LFxuICBbSU5UUk9EVUNUSU9OX1BBVEhdOiBpbnRyb2R1Y3Rpb25Db250ZW50LFxuICBbR0VUVElOR19TVEFSVEVEX1BBVEhdOiBnZXR0aW5nU3RhcnRlZENvbnRlbnQsXG4gIFtJTlNUQUxMSU5HX1RIRV9DTElfUEFUSF06IGluc3RhbGxpbmdUaGVDTElDb250ZW50LFxuICBbR0VUVElOR19UT19HUklQU19XSVRIX1RIRV9JREVfUEFUSF06IGdldHRpbmdUb0dyaXBzV2l0aFRoZUlERUlDb250ZW50XG5cbn07XG4iXSwibmFtZXMiOlsiaW1wb3J0ZXIiLCJpbml0aWFsTWFya2Rvd24iLCJtYXJrZG93bkxleGVyIiwiTWFya2Rvd25MZXhlciIsImZyb21Ob3RoaW5nIiwibWFya2Rvd25QYXJzZXIiLCJNYXJrZG93blBhcnNlciIsImZpbGVQYXRoIiwiY29udGV4dCIsImNvbnRlbnQiLCJjb250ZW50TWFwIiwic3RhcnRSdWxlIiwiZ2V0U3RhcnRSdWxlIiwidG9rZW5zIiwidG9rZW5pc2UiLCJub2RlIiwicGFyc2UiLCJpbXBvcnRlZE5vZGUiLCJpbXBvcnRlZFRva2VucyIsImltcG9ydGVkQ2xhc3NOYW1lIiwiY2xhc3NOYW1lRnJvbUZpbGVQYXRoIiwiT2JqZWN0IiwiYXNzaWduIiwiY2xhc3NOYW1lIiwicmVwbGFjZSIsIkVNUFRZX1NUUklORyIsIklOREVYX1BBVEgiLCJDT05URU5UX1BBVEgiLCJDT05URU5UU19QQVRIIiwiSEFMRl9USVRMRV9QQVRIIiwiRlJPTlRfTUFUVEVSX1BBVEgiLCJJTlRST0RVQ1RJT05fUEFUSCIsIkdFVFRJTkdfU1RBUlRFRF9QQVRIIiwiSU5TVEFMTElOR19USEVfQ0xJX1BBVEgiLCJHRVRUSU5HX1RPX0dSSVBTX1dJVEhfVEhFX0lERV9QQVRIIiwiaW5kZXhDb250ZW50IiwiY29udGVudENvbnRlbnQiLCJjb250ZW50c0NvbnRlbnQiLCJoYWxmVGl0bGVDb250ZW50IiwiZnJvbnRNYXR0ZXJDb250ZW50IiwiaW50cm9kdWN0aW9uQ29udGVudCIsImdldHRpbmdTdGFydGVkQ29udGVudCIsImluc3RhbGxpbmdUaGVDTElDb250ZW50IiwiZ2V0dGluZ1RvR3JpcHNXaXRoVGhlSURFSUNvbnRlbnQiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7OztJQVNBLE9BaUJDO2VBakJ1QkE7O0lBbUNYQyxlQUFlO2VBQWZBOzs7cUJBMUNpQzt5QkFFakI7Ozs7Ozs7Ozs7Ozs7O0FBRTdCLElBQU1DLGdCQUFnQkMsb0JBQWEsQ0FBQ0MsV0FBVyxJQUN6Q0MsaUJBQWlCQyxxQkFBYyxDQUFDRixXQUFXO0FBRWxDLFNBQVNKLFNBQVNPLFFBQVEsRUFBRUMsT0FBTztJQUNoRCxJQUFNQyxVQUFVQyxVQUFVLENBQUNILFNBQVMsSUFBSTtJQUV4QyxJQUFJRSxZQUFZLE1BQU07UUFDcEIsSUFBTUUsWUFBWU4sZUFBZU8sWUFBWSxJQUN2Q0MsU0FBU1gsY0FBY1ksUUFBUSxDQUFDTCxVQUNoQ00sT0FBT1YsZUFBZVcsS0FBSyxDQUFDSCxRQUFRRixZQUNwQ00sZUFBZUYsTUFDZkcsaUJBQWlCTCxRQUNqQk0sb0JBQW9CQyxzQkFBc0JiO1FBRWhEYyxPQUFPQyxNQUFNLENBQUNkLFNBQVM7WUFDckJTLGNBQUFBO1lBQ0FDLGdCQUFBQTtZQUNBQyxtQkFBQUE7UUFDRjtJQUNGO0FBQ0Y7QUFFQSxTQUFTQyxzQkFBc0JiLFFBQVE7SUFDckMsSUFBTWdCLFlBQVloQixTQUFTaUIsT0FBTyxDQUFDLFFBQVFDLHVCQUFZO0lBRXZELE9BQU9GO0FBQ1Q7QUFFQSxJQUFNRyxhQUFhLFlBQ2JDLGVBQWUsY0FDZkMsZ0JBQWdCLGVBQ2hCQyxrQkFBa0IsaUJBQ2xCQyxvQkFBb0IsbUJBQ3BCQyxvQkFBb0IsbUJBQ3BCQyx1QkFBdUIsc0JBQ3ZCQywwQkFBMEIseUJBQzFCQyxxQ0FBcUM7QUFFcEMsSUFBTWpDLGtCQUFrQixBQUFDLHdCQUVILE9BQWxCNkIsbUJBQWtCO0FBRzdCLElBQU1LLGVBQWdCLHNCQUloQkMsaUJBQWlCLEFBQUMsdUJBR2JKLE9BREFELG1CQUFrQixlQUNHLE9BQXJCQyx1QkFFTEssa0JBQW1CLDRCQUluQkMsbUJBQW9CLFdBRXBCQyxxQkFBcUIsQUFBQyx1QkFHakJYLE9BREFDLGlCQUFnQixlQUNGLE9BQWRELGdCQUVMWSxzQkFBdUIsdUVBU3ZCQyx3QkFBd0IsQUFBQyxzYkFXdEJQLE9BREFELHlCQUF3QixhQUNXLE9BQW5DQyxvQ0FBbUMsc0JBS3RDUSwwQkFBMkIsMkJBRzNCQyxtQ0FBb0M7SUFVdkI7QUFBbkIsSUFBTWpDLGNBQWEsV0FFakIsaUJBRmlCLE1BRWhCZ0IsWUFBYVMsZUFDZCxpQkFIaUIsTUFHaEJSLGNBQWVTLGlCQUNoQixpQkFKaUIsTUFJaEJSLGVBQWdCUyxrQkFDakIsaUJBTGlCLE1BS2hCUixpQkFBa0JTLG1CQUNuQixpQkFOaUIsTUFNaEJSLG1CQUFvQlMscUJBQ3JCLGlCQVBpQixNQU9oQlIsbUJBQW9CUyxzQkFDckIsaUJBUmlCLE1BUWhCUixzQkFBdUJTLHdCQUN4QixpQkFUaUIsTUFTaEJSLHlCQUEwQlMsMEJBQzNCLGlCQVZpQixNQVVoQlIsb0NBQXFDUyxtQ0FWckIifQ==