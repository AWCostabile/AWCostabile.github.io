import Button from "@material-ui/core/Button";
import { makeStyles, Theme } from "@material-ui/core/styles";
import ArrowDropDown from "@material-ui/icons/ArrowDropDown";
import { useLanguage } from "common/hooks/use-language";
import React from "react";

const useStyles = makeStyles<Theme, { show: boolean }>(() => ({
  root: ({ show }) => ({
    transform: show ? "rotate(180deg)" : "rotate(0)",
    transition: "transform 300ms ease",
  }),
}));

interface IHideButton {
  show: boolean;
  toggleShow: () => void;
}

export const HideButton: React.FC<IHideButton> = ({ show, toggleShow }) => {
  const { strings } = useLanguage();

  return (
    <Button onClick={toggleShow} variant="text" size="small">
      {show ? strings.buttons.hide : strings.buttons.show}
      <ArrowDropDown classes={useStyles({ show })} />
    </Button>
  );
};
