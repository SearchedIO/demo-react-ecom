// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 2WTtS4quVgjDpWxePxJCTZ
// Component: zvBGhF70FkPt
import * as React from "react";
import * as p from "@plasmicapp/react-web";
import {
  hasVariant,
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts
} from "@plasmicapp/react-web";
import Button from "../../Button"; // plasmic-import: ZwkS9sai7CnT/component
import "@plasmicapp/react-web/lib/plasmic.css";
import * as defaultcss from "../plasmic__default_style.module.css"; // plasmic-import: global/defaultcss
import * as projectcss from "./plasmic_ecommerce_starter.module.css"; // plasmic-import: 2WTtS4quVgjDpWxePxJCTZ/projectcss
import * as sty from "./PlasmicValue.module.css"; // plasmic-import: zvBGhF70FkPt/css
import TakeOffIcon from "./icons/PlasmicIcon__TakeOff"; // plasmic-import: atZaH80bXxnm/icon
import RightArrowIcon from "./icons/PlasmicIcon__RightArrow"; // plasmic-import: 6dsV1XVlsxXG/icon

export const PlasmicValue__VariantProps = new Array(
  "topBottom",
  "center",
  "withButton"
);

export const PlasmicValue__ArgProps = new Array(
  "children",
  "icon",
  "children2"
);

function PlasmicValue__RenderFunc(props) {
  const { variants, args, overrides, forNode, dataFetches } = props;
  return (
    <p.Stack
      as={"div"}
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      hasGap={true}
      className={classNames(defaultcss.all, projectcss.root_reset, sty.root, {
        [sty.root__center]: hasVariant(variants, "center", "center"),
        [sty.root__topBottom]: hasVariant(variants, "topBottom", "topBottom"),
        [sty.root__withButton]: hasVariant(variants, "withButton", "withButton")
      })}
    >
      <div
        className={classNames(defaultcss.all, sty.freeBox__enPj7, {
          [sty.freeBox__center__enPj7Mgd9G]: hasVariant(
            variants,
            "center",
            "center"
          ),

          [sty.freeBox__topBottom__enPj7NIcW]: hasVariant(
            variants,
            "topBottom",
            "topBottom"
          )
        })}
      >
        <div className={classNames(defaultcss.all, sty.freeBox__lsKw0)}>
          {p.renderPlasmicSlot({
            defaultContents: (
              <TakeOffIcon
                className={classNames(defaultcss.all, sty.svg__qrm25)}
                role={"img"}
              />
            ),

            value: args.icon
          })}
        </div>
      </div>

      <p.Stack
        as={"div"}
        hasGap={true}
        className={classNames(defaultcss.all, sty.freeBox__eebEk, {
          [sty.freeBox__center__eebEkMgd9G]: hasVariant(
            variants,
            "center",
            "center"
          ),

          [sty.freeBox__withButton__eebEk5IiN7]: hasVariant(
            variants,
            "withButton",
            "withButton"
          )
        })}
      >
        {p.renderPlasmicSlot({
          defaultContents: (
            <React.Fragment>
              <div
                className={classNames(
                  defaultcss.all,
                  defaultcss.__wab_text,
                  sty.text__pkToc
                )}
              >
                {"Worldwide Shipping"}
              </div>

              <div
                className={classNames(
                  defaultcss.all,
                  defaultcss.__wab_text,
                  sty.text__rD828
                )}
              >
                {"Special financing and earn rewards."}
              </div>
            </React.Fragment>
          ),

          value: args.children,
          className: classNames(sty.slotTargetChildren, {
            [sty.slotTargetChildren__center]: hasVariant(
              variants,
              "center",
              "center"
            )
          })
        })}
      </p.Stack>

      {(hasVariant(variants, "withButton", "withButton") ? true : false) ? (
        <p.Stack
          as={"div"}
          hasGap={true}
          className={classNames(defaultcss.all, sty.freeBox__q7GCt, {
            [sty.freeBox__center__q7GCtmgd9G]: hasVariant(
              variants,
              "center",
              "center"
            ),

            [sty.freeBox__withButton__q7GCt5IiN7]: hasVariant(
              variants,
              "withButton",
              "withButton"
            )
          })}
        >
          {p.renderPlasmicSlot({
            defaultContents: (
              <Button
                className={classNames("__wab_instance", sty.button___1Zkgv, {
                  [sty.button__withButton___1Zkgv5IiN7]: hasVariant(
                    variants,
                    "withButton",
                    "withButton"
                  )
                })}
                colors={"black"}
                endIcon={
                  <RightArrowIcon
                    className={classNames(defaultcss.all, sty.svg__qDnYj)}
                    role={"img"}
                  />
                }
                rounded={"rounded"}
                size={"large"}
              >
                {"Read our letter"}
              </Button>
            ),

            value: args.children2,
            className: classNames(sty.slotTargetChildren2, {
              [sty.slotTargetChildren2__center]: hasVariant(
                variants,
                "center",
                "center"
              ),

              [sty.slotTargetChildren2__withButton]: hasVariant(
                variants,
                "withButton",
                "withButton"
              )
            })
          })}
        </p.Stack>
      ) : null}
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
      internalArgPropNames: PlasmicValue__ArgProps,
      internalVariantPropNames: PlasmicValue__VariantProps
    });

    const { dataFetches } = props;
    return PlasmicValue__RenderFunc({
      variants,
      args,
      overrides,
      dataFetches,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicValue";
  } else {
    func.displayName = `PlasmicValue.${nodeName}`;
  }
  return func;
}

export const PlasmicValue = Object.assign(
  // Top-level PlasmicValue renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    // Metadata about props expected for PlasmicValue
    internalVariantProps: PlasmicValue__VariantProps,
    internalArgProps: PlasmicValue__ArgProps
  }
);

export default PlasmicValue;
/* prettier-ignore-end */