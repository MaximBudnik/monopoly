import {blue, cyan, geekblue, green, lime, magenta, orange, purple, red, volcano, yellow} from "@ant-design/colors";
import {PropertyGroups} from "./PropertyGroups";

export const playerColors = [red[3], magenta[3], blue[3], green[3], purple[3], yellow[3], cyan[3], volcano[3]]
// export const propertyColors = [red.primary, volcano.primary, yellow.primary, lime.primary, green.primary, cyan.primary, blue.primary, geekblue.primary, purple.primary, magenta.primary]

export const PropertyGroupColor:Record<PropertyGroups, string> = {
  [PropertyGroups.cloudProvider]: red.primary,
  [PropertyGroups.database]: volcano.primary,
  [PropertyGroups.devops]: yellow.primary,
  [PropertyGroups.ide]: lime.primary,
  [PropertyGroups.java]: purple.primary,
  [PropertyGroups.functional]: cyan.primary,
  [PropertyGroups.lowLevel]: blue.primary,
  [PropertyGroups.script]: geekblue.primary,
  [PropertyGroups.versionControl]: green.primary,
  [PropertyGroups.web]: magenta.primary
}
