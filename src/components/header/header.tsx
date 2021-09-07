import Button from "@material-ui/core/Button";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import Grow from "@material-ui/core/Grow";
import MenuItem from "@material-ui/core/MenuItem";
import MenuList from "@material-ui/core/MenuList";
import Paper from "@material-ui/core/Paper";
import Popper from "@material-ui/core/Popper";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Translate from "@material-ui/icons/Translate";
import { useLanguage } from "common/hooks/use-language";
import { language } from "common/languages";
import { PageSection } from "components/page-section";
import React, { useRef, useState } from "react";

const useStyles = makeStyles(() => ({
  button: {
    color: "#FFF",
    width: 250,
  },
  container: {
    position: "relative",
  },
  icon: {
    display: "inline-flex",
    fill: "#FFF",
    marginRight: 12,
  },
  menu: {
    justifyContent: "center",
  },
}));

const toLabel = (current: string, friendly: string, name: string) => {
  if (current === "english") {
    return name;
  }

  return `${name} (${friendly})`;
};

export const Header: React.FC = () => {
  const anchorEl = useRef<HTMLButtonElement | null>(null);
  const { currentLanguage, setLanguage, strings } = useLanguage();
  const [open, setOpen] = useState(false);
  const { button, container, icon, menu } = useStyles();

  return (
    <PageSection
      background="#28C"
      color="#F2F2F2"
      justify="space-between"
      padding={{ all: 16 }}
    >
      <Typography variant="h6">{strings.titles.header}</Typography>
      <div className={container}>
        <Button
          aria-controls={open ? "menu-list-grow" : undefined}
          aria-haspopup="true"
          classes={{ root: button }}
          onClick={() => setOpen(true)}
          ref={anchorEl}
        >
          {strings.icon === "true" && (
            <Translate classes={{ root: icon }} fontSize="small" />
          )}
          {toLabel(currentLanguage, strings.nameEnglish, strings.name)}
        </Button>
        <Popper
          anchorEl={anchorEl.current}
          disablePortal
          open={open}
          role={undefined}
          style={{ zIndex: 999 }}
          transition
        >
          {({ TransitionProps, placement }) => (
            <Grow
              {...TransitionProps}
              style={{
                marginTop: 36,
                transformOrigin:
                  placement === "bottom" ? "center top" : "center bottom",
              }}
            >
              <Paper>
                <ClickAwayListener onClickAway={() => setOpen(false)}>
                  <MenuList autoFocusItem={open} classes={{ root: menu }}>
                    {language.meta.map(({ friendly, label, value }) => (
                      <MenuItem
                        key={value}
                        onClick={() => {
                          setOpen(false);
                          setLanguage(value);
                        }}
                      >
                        <span>{toLabel(value, friendly, label)}</span>
                      </MenuItem>
                    ))}
                  </MenuList>
                </ClickAwayListener>
              </Paper>
            </Grow>
          )}
        </Popper>
      </div>
    </PageSection>
  );
};
