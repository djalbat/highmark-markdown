"use strict";

import withStyle from "easy-with-style";  ///

import PreviewDiv from "../../div/preview";
import ContainerDiv from "../../div/container";

class PreviewContainerDiv extends ContainerDiv {
  childElements() {
    const { onCustomPageUpdate } = this.properties,
          pageUpdateCustomHandler = onCustomPageUpdate; ///

    return ([

      <PreviewDiv onCustomPageUpdate={pageUpdateCustomHandler} />

    ]);
  }

  parentContext() {
    const context = this.getContext(),
          showPreviewContainerDiv = this.show.bind(this),  ///
          hidePreviewContainerDiv = this.hide.bind(this);  ///

    return ({
      ...context,
      showPreviewContainerDiv,
      hidePreviewContainerDiv
    });
  }

  static ignoredProperties = [
    "onCustomPageUpdate"
  ];
}

export default withStyle(PreviewContainerDiv)`
  
  height: 56rem;
  padding: 0;
  position: relative;
  
`;
