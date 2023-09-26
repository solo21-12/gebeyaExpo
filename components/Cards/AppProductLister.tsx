import * as React from "react";
import Box from "@mui/joy/Box";
import Card from "@mui/joy/Card";
import CardCover from "@mui/joy/CardCover";
import CardContent from "@mui/joy/CardContent";
import Typography from "@mui/joy/Typography";
import IconButton from "@mui/joy/IconButton";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import DeleteOutlineOutlined from "@mui/icons-material/DeleteOutlineOutlined";

import AppLayout from "../Dashboard/AppLayout";
import { Product } from "@/types/exhibitor";
import Divider from "@mui/joy/Divider";
import { useExhibitorPortalContext } from "@/context/ExhibitorPortalContext";
import { AppProductEditorMobile } from "..";
import { Field } from "@/types/register";

type Props = {
  product: Product;
  onEdit: (product: Product) => void;
  onDelete: (product: Product) => void;
  fields: Field[];
  multipleField: Field;
};

const AppProductLister: React.FC<Props> = ({
  product,
  onEdit,
  onDelete,
  fields,
  multipleField,
}) => {
  const { editingProduct, editing } = useExhibitorPortalContext();

  return (
    <div className=" hover:scale-105 cursor-pointer transition-transform transform ease-in-out duration-500">
      <AppLayout.AppMain>
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: 1,
          }}
        >
          <Card
            variant="solid"
            invertedColors
            sx={{
              "--Card-radius": (theme) => theme.vars.radius.sm,
              boxShadow: "none",
            }}
            className=" h-[150px] "
          >
            <CardCover>
              <img alt="" src={product.image} />
            </CardCover>
            <CardCover
              sx={{
                background:
                  "linear-gradient(to top, rgba(0,0,0,0.8), rgba(0,0,0,0.12))",
              }}
            />
            <CardContent
              sx={{
                mt: "auto",
                flexGrow: 0,
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <Box sx={{ flex: 1 }}>
                <Typography>{product.title}</Typography>
                <Divider />
                <div className=" flex gap-2">
                  {product.categorie.map((category, index) => (
                    <Typography level="body-xs" mt={0.5} key={index}>
                      #{category}
                    </Typography>
                  ))}
                </div>
              </Box>
              <div className=" flex gap-0">
                <IconButton variant="plain" onClick={() => onEdit(product)}>
                  <EditOutlinedIcon />
                </IconButton>
                <IconButton variant="plain" onClick={() => onDelete(product)}>
                  <DeleteOutlineOutlined />
                </IconButton>
              </div>
            </CardContent>
          </Card>
          {editing && editingProduct && editingProduct.id == product.id && (
            <AppProductEditorMobile
              fields={fields}
              initialValues={editingProduct}
              multipleField={multipleField}
            />
          )}
        </Box>
      </AppLayout.AppMain>
    </div>
  );
};

export default AppProductLister;
