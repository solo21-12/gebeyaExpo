"use client";
import React, { useState } from "react";
import {
  AppButton,
  AppForm,
  AppProductAdderDesktop,
  AppProductAdderMobile,
  AppProductEditorDesktop,
  AppProductLister,
  AppSearchInput,
} from "@/components";
import * as Yup from "yup";
import { Field } from "@/types/register";
import { FormikValues } from "formik";
import { useAPI } from "@/hooks";
import { useExhibitorPortalContext } from "@/context/ExhibitorPortalContext";
import { Product, Teams } from "@/types/exhibitor";
import Typography from "@mui/joy/Typography";

const validationSchema = Yup.object().shape({
  title: Yup.string().required().label("Title"),
  description: Yup.string().required().label("Description"),
  image: Yup.string(),
  categorie: Yup.array()
    .of(Yup.string().required("Category is required"))
    .min(1, "At least one category is required"),
});

const initialValues: FormikValues = {
  title: "",
  description: "",
  image: "",
  categorie: [""],
};

const fields: Field[] = [
  {
    name: "title",
    label: "Title",
    required: true,
  },
  {
    name: "description",
    label: "Description",
    required: true,
  },
];

const MultipleFields: Field = {
  name: "categorie",
  label: "Categories",
  required: true,
};

const page = () => {
  const {
    currentUser,
    setCurrentUser,
    editing,
    adding,
    setAdding,
    setEditing,
    editingProduct,
    setEditingProduct,
  } = useExhibitorPortalContext();
  const [searchQuery, setSearchQuery] = useState<string>("");

  const { products } = currentUser;
  const { submitForm } = useAPI();

  const handleSearch = (query: string) => {
    setSearchQuery(query);
  };

  const filteredProducts = products
    ? products.filter((product) => {
        const searchLower = searchQuery.toLowerCase();
        const categoryLower = product.categorie.map((c) => c.toLowerCase());
        return (
          product.title.toLowerCase().includes(searchLower) ||
          product.description.toLowerCase().includes(searchLower) ||
          categoryLower.some((category) => category.includes(searchLower))
        );
      })
    : [];

  const handleSubmit = (values: FormikValues) => {
    console.log(values);
  };

  const handleDelete = (product: Product | null) => {
    if (product) {
      const newProducts = products.filter((item) => item.id !== product.id);
      if (currentUser && newProducts) {
        setCurrentUser((currentUser) => ({
          ...currentUser,
          products: newProducts,
        }));
      }

      if (editing) {
        setEditing(false);
      }
    }
  };

  const handleEdit = (product: Product | null) => {
    if (product) {
      setEditing(true);
      setAdding(false);
      setEditingProduct(product);
    }
  };

  return (
    <div className="">
      {products.length == 0 && !adding && (
        <div className=" flex flex-col justify-center items-center h-screen">
          <div className="lg:w-[45%] w-[90%] md:w-[75%] mx-auto border-dashed border-2 h-[50vh] p-10 flex flex-col items-center justify-center">
            <h3 className=" text-base lg:text-2xl text-gray-400 font-bold">
              You don't have a product yet
            </h3>
            <AppButton
              label={"Add A product"}
              handleAction={() => {
                setAdding(true);
              }}
            />
          </div>
        </div>
      )}
      <div className=" mt-[7rem] lg:mt-10  ml-5 w-[90%] xs:w-[70%] md:w-[65%] lg:w-[70%]  xl:w-[77%] md:px-2 mx-auto md:ml-[280px] xs:ml-[145px] mr-5  ">
        <div className=" flex justify-between items-center mb-5 flex-row w-full gap-2 ">
          <Typography level="h2" className=" text-2xl hidden md:block">
            Products
          </Typography>
          <AppSearchInput onSearch={handleSearch} />
          <AppButton
            label="Add New Product"
            handleAction={() => {
              setEditing(false);
              setAdding(true);
            }}
          />
        </div>
        <div className="h-[80vh] overflow-y-auto mx-auto">
          <AppForm
            initialValues={initialValues}
            onSubmit={handleSubmit}
            validationSchema={validationSchema}
          >
            <AppProductAdderMobile
              fields={fields}
              openModal={adding}
              multipleField={MultipleFields}
            />
            <div className=" flex flex-col md:flex-row justify-between gap-10 ">
              <div className=" flex flex-wrap">
                {filteredProducts.map((product, index) => (
                  <AppProductLister
                    key={index}
                    product={product}
                    onEdit={handleEdit}
                    onDelete={handleDelete}
                    fields={fields}
                    multipleField={MultipleFields}
                  />
                ))}
              </div>
              {editing && (
                <AppProductEditorDesktop
                  multipleField={MultipleFields}
                  // @ts-ignore
                  product={editingProduct}
                  setEditing={setEditing}
                  fields={fields}
                  // @ts-ignore
                  initialValues={editingProduct}
                />
              )}
              {adding && (
                <div>
                  <AppProductAdderDesktop
                    fields={fields}
                    multipleField={MultipleFields}
                  />
                </div>
              )}
            </div>
          </AppForm>
        </div>
      </div>
    </div>
  );
};

export default page;
