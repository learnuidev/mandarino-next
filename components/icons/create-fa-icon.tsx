import {
  FontAwesomeIcon,
  FontAwesomeIconProps,
} from "@fortawesome/react-fontawesome";

export const createFAIcon = (icon: FontAwesomeIconProps["icon"]) => {
  return function FAIcon(props: Omit<FontAwesomeIconProps, "icon">) {
    return <FontAwesomeIcon icon={icon} {...props} />;
  };
};
