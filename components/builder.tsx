"use client";

import { useExhibitorPortalContext } from "@/context/ExhibitorPortalContext";
import {
  ToggleButton,
  ToggleButtonGroup,
  Card,
  CardHeader,
  CardContent,
  CardMedia,
} from "@mui/material";
import React, { useEffect, useState } from "react";

type Props = {};

const Builder = ({}: Props) => {
  const [value, setValue] = useState<string>("");
  const [categories, setCategories] = useState<string[]>([
    "Auto",
    "Construcation",
    "Food",
    "Beauty",
  ]);

  const { currentUser } = useExhibitorPortalContext();

  return (
    <div className=" h-screen xs:ml-[120px] md:ml-[260px] px-10 xs:px-3 lg:px-20">
      <div className=" mt-40 flex flex-row gap-2">
        {categories.length > 0 &&
          categories.map((categorie) => (
            <ToggleButtonGroup
              key={categorie}
              value={value}
              onChange={(e, val) => setValue(val)}
              exclusive
              color="primary"
              size="small"
            >
              <ToggleButton value={categorie} key={categorie}>
                {categorie}
              </ToggleButton>
            </ToggleButtonGroup>
          ))}
      </div>
      <Card>
        <CardHeader>Hello world</CardHeader>
        <CardContent>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Provident
          nulla dolores unde, molestias voluptate quibusdam hic possimus ducimus
          laborum, a voluptatum corporis deleniti tempora mollitia ullam
          molestiae, maxime eos nostrum?
          <CardMedia src="/eth6.png" />
        </CardContent>
      </Card>
    </div>
  );
};

export default Builder;
