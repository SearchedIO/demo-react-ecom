// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 2WTtS4quVgjDpWxePxJCTZ
// Component: 8mwwdTV2qt6O
import * as React from "react";
import * as p from "@plasmicapp/react-web";
import {
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts
} from "@plasmicapp/react-web";
import Value from "../../Value"; // plasmic-import: zvBGhF70FkPt/component
import Button from "../../Button"; // plasmic-import: ZwkS9sai7CnT/component
import "@plasmicapp/react-web/lib/plasmic.css";
import * as defaultcss from "../plasmic__default_style.module.css"; // plasmic-import: global/defaultcss
import * as projectcss from "./plasmic_ecommerce_starter.module.css"; // plasmic-import: 2WTtS4quVgjDpWxePxJCTZ/projectcss
import * as sty from "./PlasmicEmojiValueProps.module.css"; // plasmic-import: 8mwwdTV2qt6O/css
import PlaneIcon from "./icons/PlasmicIcon__Plane"; // plasmic-import: OXS1pvnggqeo/icon
import RightArrowIcon from "./icons/PlasmicIcon__RightArrow"; // plasmic-import: 6dsV1XVlsxXG/icon
import DocumentIcon from "./icons/PlasmicIcon__Document"; // plasmic-import: 2oAy7GpR8D68/icon
import LockIcon from "./icons/PlasmicIcon__Lock"; // plasmic-import: wLzP1q2uh2me/icon

export const PlasmicEmojiValueProps__VariantProps = new Array();

export const PlasmicEmojiValueProps__ArgProps = new Array("children");

function PlasmicEmojiValueProps__RenderFunc(props) {
  const { variants, args, overrides, forNode, dataFetches } = props;
  return (
    <section
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(defaultcss.all, projectcss.root_reset, sty.root)}
    >
      {p.renderPlasmicSlot({
        defaultContents: (
          <p.Stack
            as={"div"}
            hasGap={true}
            className={classNames(defaultcss.all, sty.freeBox__ihAo8)}
          >
            <Value
              children2={
                <Button
                  className={classNames("__wab_instance", sty.button___9BekM)}
                  colors={"black"}
                  endIcon={
                    <RightArrowIcon
                      className={classNames(defaultcss.all, sty.svg___1Pm0N)}
                      role={"img"}
                    />
                  }
                  rounded={"rounded"}
                  size={"large"}
                >
                  {"Read our letter"}
                </Button>
              }
              className={classNames("__wab_instance", sty.value__tKPjx)}
              icon={
                <PlaneIcon
                  className={classNames(defaultcss.all, sty.svg__exu33)}
                  role={"img"}
                />
              }
            >
              <div
                className={classNames(
                  defaultcss.all,
                  defaultcss.__wab_text,
                  sty.text__i98VZ
                )}
              >
                {"Worldwide shipping"}
              </div>

              <div
                className={classNames(
                  defaultcss.all,
                  defaultcss.__wab_text,
                  sty.text__yXua6
                )}
              >
                {"Special financing and earn rewards."}
              </div>
            </Value>

            <Value
              children2={
                <Button
                  className={classNames("__wab_instance", sty.button__lUoJp)}
                  colors={"black"}
                  endIcon={
                    <RightArrowIcon
                      className={classNames(defaultcss.all, sty.svg__max1Z)}
                      role={"img"}
                    />
                  }
                  rounded={"rounded"}
                  size={"large"}
                >
                  {"Read our letter"}
                </Button>
              }
              className={classNames("__wab_instance", sty.value__fXebC)}
              icon={
                <DocumentIcon
                  className={classNames(defaultcss.all, sty.svg__knigR)}
                  role={"img"}
                />
              }
            >
              <div
                className={classNames(
                  defaultcss.all,
                  defaultcss.__wab_text,
                  sty.text__aDfy
                )}
              >
                {"30-day guarantee"}
              </div>

              <div
                className={classNames(
                  defaultcss.all,
                  defaultcss.__wab_text,
                  sty.text__rLvTw
                )}
              >
                {"Free return policy."}
              </div>
            </Value>

            <Value
              children2={
                <Button
                  className={classNames("__wab_instance", sty.button__oykRi)}
                  colors={"black"}
                  endIcon={
                    <RightArrowIcon
                      className={classNames(defaultcss.all, sty.svg__y5PEa)}
                      role={"img"}
                    />
                  }
                  rounded={"rounded"}
                  size={"large"}
                >
                  {"Read our letter"}
                </Button>
              }
              className={classNames("__wab_instance", sty.value___1Pbf)}
              icon={
                <LockIcon
                  className={classNames(defaultcss.all, sty.svg__bginR)}
                  role={"img"}
                />
              }
            >
              <div
                className={classNames(
                  defaultcss.all,
                  defaultcss.__wab_text,
                  sty.text___4OY9V
                )}
              >
                {"Secured payments"}
              </div>

              <div
                className={classNames(
                  defaultcss.all,
                  defaultcss.__wab_text,
                  sty.text__aaVvf
                )}
              >
                {"We accept major credit cards."}
              </div>
            </Value>
          </p.Stack>
        ),

        value: args.children
      })}
    </section>
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
      internalArgPropNames: PlasmicEmojiValueProps__ArgProps,
      internalVariantPropNames: PlasmicEmojiValueProps__VariantProps
    });

    const { dataFetches } = props;
    return PlasmicEmojiValueProps__RenderFunc({
      variants,
      args,
      overrides,
      dataFetches,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicEmojiValueProps";
  } else {
    func.displayName = `PlasmicEmojiValueProps.${nodeName}`;
  }
  return func;
}

export const PlasmicEmojiValueProps = Object.assign(
  // Top-level PlasmicEmojiValueProps renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    // Metadata about props expected for PlasmicEmojiValueProps
    internalVariantProps: PlasmicEmojiValueProps__VariantProps,
    internalArgProps: PlasmicEmojiValueProps__ArgProps
  }
);

export default PlasmicEmojiValueProps;
/* prettier-ignore-end */
