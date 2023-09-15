import React from "react";
import { useTranslation } from "react-i18next";
import LanguageIcon from "@mui/icons-material/Language";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

const LanguageSelector = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  };

  return (
    <div>
      <FormControl sx={{ m: 1, minWidth: 120, color: "#fff" }} size="small">
        <InputLabel id="lanSelect">{<LanguageIcon />}</InputLabel>
        <Select
          labelId="lanSelect"
          id="demo-simple-select-standard"
          label={<LanguageIcon />}
          onChange={(e) => changeLanguage(e.target.value)}
          // sx={{ color: "#fff" }}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value="en">English</MenuItem>
          <MenuItem value="hi">हिंदी</MenuItem>
          <MenuItem value="mr">मराठी</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
};

export default LanguageSelector;
