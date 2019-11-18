import styled from "@emotion/styled";

const notificationTypes = {
  warning: {
    dark: "goldenrod",
    light: "papayawhip"
  },
  error: {
    dark: "firebrick",
    light: "rosybrown"
  },
  info: {
    dark: "#rgb(55, 122, 115)",
    light: "#FFFFFF"
  }
};

const getColor = (type = "info", shade = "dark") =>
  notificationTypes[type][shade];

const NotificationStyle = props => css`
  color: ${getColor(props.type, "light")};
  background: ${getColor(props.type)};
  width: 100%;
  padding: 1rem;
  text-align: center;
`;
const Notification = styled("section")`
  ${NotificationStyle}
`;

export default Notification;
