import React, { FC, useState, ChangeEvent } from "react";
import Typography from "@mui/joy/Typography";
import Input from "@mui/joy/Input";
import IconButton from "@mui/joy/IconButton";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import ClearIcon from "@mui/icons-material/Clear"; // Add this import
import { debounce } from "lodash"; // Add this import

type Props = {
  onSearch: (query: string) => void;
};

const AppSearchInput: FC<Props> = ({ onSearch }) => {
  const [searchQuery, setSearchQuery] = useState("");

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

  return (
    <div>
      <Input
        size="md"
        variant="outlined"
        placeholder="Search anything…"
        startDecorator={<SearchRoundedIcon color="primary" />}
        onChange={handleSearchChange}
        value={searchQuery}
        sx={{
          flexBasis: "500px",
          display: {
            xs: "none",
            sm: "flex",
          },
          boxShadow: "sm",
        }}
      />
      {searchQuery && (
        <IconButton
          size="sm"
          variant="outlined"
          color="danger"
          onClick={clearSearch}
          sx={{ display: { xs: "inline-flex", sm: "none" } }}
        >
          <ClearIcon />
        </IconButton>
      )}
    </div>
  );
};

export default AppSearchInput;
