// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 2WTtS4quVgjDpWxePxJCTZ
// Component: w5QKnQMfLd3u
import * as React from "react";
import * as p from "@plasmicapp/react-web";
import {
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts
} from "@plasmicapp/react-web";
import "@plasmicapp/react-web/lib/plasmic.css";
import * as defaultcss from "../plasmic__default_style.module.css"; // plasmic-import: global/defaultcss
import * as projectcss from "./plasmic_ecommerce_starter.module.css"; // plasmic-import: 2WTtS4quVgjDpWxePxJCTZ/projectcss
import * as sty from "./PlasmicPrice.module.css"; // plasmic-import: w5QKnQMfLd3u/css

export const PlasmicPrice__VariantProps = new Array();

export const PlasmicPrice__ArgProps = new Array("dollars", "cents");

function PlasmicPrice__RenderFunc(props) {
  const { variants, args, overrides, forNode, dataFetches } = props;
  return (
    <p.Stack
      as={"div"}
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      hasGap={true}
      className={classNames(defaultcss.all, projectcss.root_reset, sty.root)}
    >
      <div
        className={classNames(
          defaultcss.all,
          defaultcss.__wab_text,
          sty.text__fwGeq
        )}
      >
        {"$"}
      </div>

      {p.renderPlasmicSlot({
        defaultContents: "88",
        value: args.dollars,
        className: classNames(sty.slotTargetDollars)
      })}

      <div
        className={classNames(
          defaultcss.all,
          defaultcss.__wab_text,
          sty.text__hp4Pr
        )}
      >
        {"."}
      </div>

      {p.renderPlasmicSlot({
        defaultContents: "99",
        value: args.cents,
        className: classNames(sty.slotTargetCents)
      })}
    </p.Stack>
  );
}

const PlasmicDescendants = {
  root: ["root"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = deriveRenderOpts(props, {
      name: nodeName,
      descendantNames: [...PlasmicDescendants[nodeName]],
      internalArgPropNames: PlasmicPrice__ArgProps,
      internalVariantPropNames: PlasmicPrice__VariantProps
    });

    const { dataFetches } = props;
    return PlasmicPrice__RenderFunc({
      variants,
      args,
      overrides,
      dataFetches,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicPrice";
  } else {
    func.displayName = `PlasmicPrice.${nodeName}`;
  }
  return func;
}

export const PlasmicPrice = Object.assign(
  // Top-level PlasmicPrice renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    // Metadata about props expected for PlasmicPrice
    internalVariantProps: PlasmicPrice__VariantProps,
    internalArgProps: PlasmicPrice__ArgProps
  }
);

export default PlasmicPrice;
/* prettier-ignore-end */