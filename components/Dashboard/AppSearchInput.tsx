import React from "react";

import Typography from "@mui/joy/Typography";
import Input from "@mui/joy/Input";
import IconButton from "@mui/joy/IconButton";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";

type Props = {};

const AppSearchInput = (props: Props) => {
  return (
    <div>
      <Input
        size="md"
        variant="outlined"
        placeholder="Search anything…"
        startDecorator={<SearchRoundedIcon color="primary" />}
        endDecorator={
          <IconButton variant="outlined" color="neutral">
            <Typography fontWeight="lg" fontSize="sm" textColor="text.icon">
              ⌘ + k
            </Typography>
          </IconButton>
        }
        sx={{
          flexBasis: "500px",
          display: {
            xs: "none",
            sm: "flex",
          },
          boxShadow: "sm",
        }}
      />
      <IconButton
        size="sm"
        variant="outlined"
        color="neutral"
        sx={{ display: { xs: "inline-flex", sm: "none" } }}
      >
        <SearchRoundedIcon />
      </IconButton>
    </div>
  );
};

export default AppSearchInput;
