import { AppBar, Slide, useScrollTrigger } from '@material-ui/core'
import React, { useState } from 'react'

interface Props {
  children: React.ReactElement;
}

function HideOnScroll(props: Props) {
  const { children } = props;
  const trigger = useScrollTrigger();
  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

export default function NavBar(props: Props) {
  const [anchorEL, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  return (
    <>
      <HideOnScroll  {...props}>
        <AppBar></AppBar>
      </HideOnScroll>
    </>
  )
}
