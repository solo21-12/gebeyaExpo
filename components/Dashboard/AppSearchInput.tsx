import React, { FC, useState, ChangeEvent } from "react";
import Typography from "@mui/joy/Typography";
import Input from "@mui/joy/Input";
import IconButton from "@mui/joy/IconButton";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import ClearIcon from "@mui/icons-material/Clear";
import { debounce } from "lodash";
import { useMediaQuery, useTheme } from "@mui/material";

type Props = {
  onSearch: (query: string) => void;
};

const AppSearchInput: FC<Props> = ({ onSearch }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const [searchQuery, setSearchQuery] = useState("");
  const [isInputVisible, setInputVisible] = useState<boolean>(false);

  const handleSearchChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
    debouncedSearch(event.target.value);
  };

  const clearSearch = () => {
    setSearchQuery("");
    onSearch("");
  };

  const debouncedSearch = debounce((query: string) => {
    onSearch(query);
  }, 300);

  const toggleInputVisibility = () => {
    setInputVisible(!isInputVisible);
  };

  return (
    <div>
      {isMobile ? (
        isInputVisible ? (
          <Input
            size="sm"
            variant="outlined"
            placeholder="Search anything…"
            startDecorator={<SearchRoundedIcon color="primary" />}
            endDecorator={
              searchQuery && (
                <IconButton
                  size="sm"
                  variant="outlined"
                  color="neutral"
                  onClick={clearSearch}
                >
                  <ClearIcon />
                </IconButton>
              )
            }
            onChange={handleSearchChange}
            value={searchQuery}
            onBlur={() => {
              // Handle input blur event (e.g., hide input field on blur)
              setInputVisible(false);
            }}
            sx={{
              flexBasis: "500px",
              boxShadow: "sm",
            }}
          />
        ) : (
          <IconButton
            size="sm"
            variant="outlined"
            color="primary"
            onClick={toggleInputVisibility}
          >
            <SearchRoundedIcon />
          </IconButton>
        )
      ) : (
        <Input
          size="md"
          variant="outlined"
          placeholder="Search anything…"
          startDecorator={<SearchRoundedIcon color="primary" />}
          endDecorator={
            searchQuery && (
              <IconButton
                size="sm"
                variant="outlined"
                color="neutral"
                onClick={clearSearch}
              >
                <ClearIcon />
              </IconButton>
            )
          }
          onChange={handleSearchChange}
          value={searchQuery}
          sx={{
            flexBasis: "500px",
            boxShadow: "sm",
          }}
        />
      )}
    </div>
  );
};

export default AppSearchInput;
