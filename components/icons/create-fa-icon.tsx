import {
  FontAwesomeIcon,
  FontAwesomeIconProps,
} from "@fortawesome/react-fontawesome";

export const createFAIcon = (icon: FontAwesomeIconProps["icon"]) => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return function FAIcon(props: any) {
    return <FontAwesomeIcon icon={icon} {...props} />;
  };
};
