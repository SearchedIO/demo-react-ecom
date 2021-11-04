// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 2WTtS4quVgjDpWxePxJCTZ
// Component: 9aD9cpqpguwz
import * as React from "react";
import * as p from "@plasmicapp/react-web";
import * as pp from "@plasmicapp/react-web";
import {
  hasVariant,
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts
} from "@plasmicapp/react-web";
import "@plasmicapp/react-web/lib/plasmic.css";
import * as defaultcss from "../plasmic__default_style.module.css"; // plasmic-import: global/defaultcss
import * as projectcss from "./plasmic_ecommerce_starter.module.css"; // plasmic-import: 2WTtS4quVgjDpWxePxJCTZ/projectcss
import * as sty from "./PlasmicSelect__Overlay.module.css"; // plasmic-import: 9aD9cpqpguwz/css
import SUPER__PlasmicSelect from "./PlasmicSelect"; // plasmic-import: E0lnUZd6nv31/render

export const PlasmicSelect__Overlay__VariantProps = new Array(
  "relativePlacement"
);

export const PlasmicSelect__Overlay__ArgProps = new Array("children");

function PlasmicSelect__Overlay__RenderFunc(props) {
  const { variants, args, overrides, forNode, dataFetches } = props;
  const superContexts = {
    Select: React.useContext(SUPER__PlasmicSelect.Context)
  };

  return (
    <div
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(defaultcss.all, projectcss.root_reset, sty.root)}
    >
      {(hasVariant(variants, "relativePlacement", "bottom") ? true : false) ? (
        <div
          data-plasmic-name={"top"}
          data-plasmic-override={overrides.top}
          className={classNames(defaultcss.all, sty.top, {
            [sty.top__relativePlacement_bottom]: hasVariant(
              variants,
              "relativePlacement",
              "bottom"
            )
          })}
        />
      ) : null}

      <div
        data-plasmic-name={"middle"}
        data-plasmic-override={overrides.middle}
        className={classNames(defaultcss.all, sty.middle)}
      >
        {(hasVariant(variants, "relativePlacement", "right") ? true : false) ? (
          <div
            data-plasmic-name={"left"}
            data-plasmic-override={overrides.left}
            className={classNames(defaultcss.all, sty.left, {
              [sty.left__relativePlacement_right]: hasVariant(
                variants,
                "relativePlacement",
                "right"
              )
            })}
          />
        ) : null}

        <div
          data-plasmic-name={"main"}
          data-plasmic-override={overrides.main}
          className={classNames(defaultcss.all, sty.main)}
        >
          {p.renderPlasmicSlot({
            defaultContents: null,
            value: args.children
          })}
        </div>

        {(hasVariant(variants, "relativePlacement", "left") ? true : false) ? (
          <div
            data-plasmic-name={"right"}
            data-plasmic-override={overrides.right}
            className={classNames(defaultcss.all, sty.right, {
              [sty.right__relativePlacement_left]: hasVariant(
                variants,
                "relativePlacement",
                "left"
              )
            })}
          />
        ) : null}
      </div>

      {(hasVariant(variants, "relativePlacement", "top") ? true : false) ? (
        <div
          data-plasmic-name={"bottom"}
          data-plasmic-override={overrides.bottom}
          className={classNames(defaultcss.all, sty.bottom, {
            [sty.bottom__relativePlacement_top]: hasVariant(
              variants,
              "relativePlacement",
              "top"
            )
          })}
        />
      ) : null}
    </div>
  );
}

function useBehavior(props, ref) {
  return pp.useTriggeredOverlay(
    PlasmicSelect__Overlay,
    props,
    {
      isPlacedTopVariant: { group: "relativePlacement", variant: "top" },
      isPlacedBottomVariant: { group: "relativePlacement", variant: "bottom" },
      isPlacedLeftVariant: { group: "relativePlacement", variant: "left" },
      isPlacedRightVariant: { group: "relativePlacement", variant: "right" },
      contentSlot: "children",
      root: "root"
    },

    ref
  );
}

const PlasmicDescendants = {
  root: ["root", "top", "middle", "left", "main", "right", "bottom"],
  top: ["top"],
  middle: ["middle", "left", "main", "right"],
  left: ["left"],
  main: ["main"],
  right: ["right"],
  bottom: ["bottom"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = deriveRenderOpts(props, {
      name: nodeName,
      descendantNames: [...PlasmicDescendants[nodeName]],
      internalArgPropNames: PlasmicSelect__Overlay__ArgProps,
      internalVariantPropNames: PlasmicSelect__Overlay__VariantProps
    });

    const { dataFetches } = props;
    return PlasmicSelect__Overlay__RenderFunc({
      variants,
      args,
      overrides,
      dataFetches,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicSelect__Overlay";
  } else {
    func.displayName = `PlasmicSelect__Overlay.${nodeName}`;
  }
  return func;
}

export const PlasmicSelect__Overlay = Object.assign(
  // Top-level PlasmicSelect__Overlay renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    top: makeNodeComponent("top"),
    middle: makeNodeComponent("middle"),
    left: makeNodeComponent("left"),
    main: makeNodeComponent("main"),
    right: makeNodeComponent("right"),
    bottom: makeNodeComponent("bottom"),
    // Metadata about props expected for PlasmicSelect__Overlay
    internalVariantProps: PlasmicSelect__Overlay__VariantProps,
    internalArgProps: PlasmicSelect__Overlay__ArgProps,
    useBehavior
  }
);

export default PlasmicSelect__Overlay;
/* prettier-ignore-end */
