import { initPlasmicLoader } from "@plasmicapp/loader-react";
export const PLASMIC = initPlasmicLoader({
  projects: [
    {
      id: "2WTtS4quVgjDpWxePxJCTZ",  // ID of a project you are using
      token: "X6UtMYEpy8bYULInBLLQyyoaAINw64Lg8OTRQvudzEAM4xP6iaiiBL8RuY8G7afE5lyMZ7xQ1Xmza9IGMzw"  // API token for that project
    }
  ],
  // Fetches the latest revisions, whether or not they were unpublished!
  // Disable for production to ensure you render only published changes.
  preview: true,
})