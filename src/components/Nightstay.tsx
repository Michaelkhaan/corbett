"use client";
import React, { useState } from "react";
import { useForm, useFieldArray, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useAddNightStayMutation } from "@/queries/generated";
import { toast } from "react-toastify";
import Spinner from "./spinner";
import uploadFile from "@/utils/uploadFile";

const schema = yup.object().shape({
  packageName: yup.string().required("Package name is required"),
  title: yup.string().required("Title is required"),
  description: yup.string().required("Description is required"),
  images: yup
    .array()
    .of(yup.string().required())
    .min(1, "At least one image is required"),
  pricePerPerson: yup
    .number()
    .required("Price per person is required")
    .positive("Price must be positive"),
  itinerary: yup.array().of(
    yup.object().shape({
      image: yup.string().required("image is required"),
      description: yup.string().required("Description is required"),
      title: yup.string().required("Title is required"),
    })
  ),
  tourIncludes: yup.array().of(
    yup.object().shape({
      image: yup.mixed().required("Image is required"),
      name: yup.string().required("Name is required"),
    })
  ),
  highlights: yup.array().of(
    yup.object().shape({
      title: yup.string().required("Title is required"),
    })
  ),
  inclusion: yup.array().of(
    yup.object().shape({
      title: yup.string().required("Title is required"),
    })
  ),
  exclusion: yup.array().of(
    yup.object().shape({
      title: yup.string().required("Title is required"),
    })
  ),
  faq: yup.array().of(
    yup.object().shape({
      answer: yup.string().required("Description is required"),
      question: yup.string().required("Title is required"),
    })
  ),
});

interface Props {
  onClose: () => void;
}
function AddnewNightStay({ onClose }: Props) {
  const {
    control,
    handleSubmit,
    register,
    setValue,
    watch,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      packageName: "",
      title: "",
      description: "",
      images: [],
      category: "",
      //@ts-ignore
      pricePerPerson: "",
      itinerary: [{ image: "", description: "", title: "" }],
      faq: [{ answer: "", question: "" }],
      //@ts-ignore
      tourIncludes: [{ image: null, name: "" }],
      highlights: [{ title: "" }],
      inclusion: [{ title: "" }],
      exclusion: [{ title: "" }],
    },
  });

  const {
    fields: itineraryFields,
    append: appendItinerary,
    remove: removeItinerary,
  } = useFieldArray({ control, name: "itinerary" });
  const {
    fields: faqsFields,
    append: appendFaqsFields,
    remove: removeFaqsFields,
  } = useFieldArray({ control, name: "faq" });
  const {
    fields: tourIncludesFields,
    append: appendTourIncludes,
    remove: removeTourIncludes,
  } = useFieldArray({ control, name: "tourIncludes" });
  const {
    fields: highlightFields,
    append: appendHighlight,
    remove: removeHighlight,
  } = useFieldArray({ control, name: "highlights" });

  const {
    fields: inclusionField,
    append: appendInclusionField,
    remove: removeIclusion,
  } = useFieldArray({ control, name: "inclusion" });

  const {
    fields: exclusionField,
    append: appendExclusionField,
    remove: removeExclusion,
  } = useFieldArray({ control, name: "exclusion" });

  const { mutateAsync, isPending } = useAddNightStayMutation();

  const onSubmit = async (data: any) => {
    try {
      await mutateAsync({
        name: data.packageName,
        location: "",
        title: data.title,
        price: parseFloat(data.pricePerPerson),
        images: data.images,
        description: data.description,
        prices: data.prices?.map((item: any) => ({
          name: item?.name,
        })),
        includes: data.tourIncludes.map((item: any) => ({
          image: item.image,
          name: item.name,
        })),
        inclusions: data.inclusion.map((item: any) => ({
          title: item.title,
        })),
        exclusions: data.exclusion.map((item: any) => ({
          title: item.title,
        })),
        faqs: data.faq.map((item: any) => ({
          title: item.question,
          description: item.answer,
        })),
        rooms: data.itinerary.map((item: any) => ({
          image: item.image,
          description: item.description,
          title: item.title,
        })),
      });
      toast.success("Added successfully");
      onClose();
    } catch (error) {
      toast.error("Failed to add");
    }
    console.log(data);
  };

  const upload = async (e: any, field: any) => {
    try {
      const file = e.target.files[0];
      const url = await uploadFile(file);
      setValue(field.name, url);
      toast?.success("Image uploaded successfully");
    } catch (errors) {
      toast?.error("Failed to upload image");
    }
  };

  const uploadmulti = async (
    e: React.ChangeEvent<HTMLInputElement>,
    field: any
  ) => {
    try {
      const files = Array.from(e.target.files ?? []);
      const ImageList = await Promise.all(
        files.map(async (file) => {
          const url = await uploadFile(file);
          return url;
        })
      );

      setValue(field.name, ImageList);
      if (files?.length) toast?.success("Image uploaded successfully");
    } catch (error) {
      console.error(error); // Log the error for debugging
      toast?.error("Failed to upload image");
    }
  };

  // console.log(watch('images'),"images")

  const removeImage = (index: number) => {
    const updatedImages = (watch("images") || []).filter((_, i) => i !== index);
    setValue("images", updatedImages);
  };

  return (
    <div className="w-full lg:w-3/4 mx-auto mt-5">
       <div className="flex justify-center items-center lg:hidden mt-2"><button onClick={onClose} className="w-10 text-lg aspect-square rounded-full bg-red-500 text-center text-white">x</button></div>
      
      <h1 className="text-2xl font-extrabold text-blue-700 text-center">
        Add New Night Stay
      </h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="selectImage rounded-lg px-5 py-4 mt-4">
          <p className="mb-2">Images</p>
          <div className="flex gap-2 my-2">
            {(watch("images") || []).map((img, index) => (
              <div key={index} className="relative">
                <img
                  src={img}
                  alt={`uploaded-${index}`}
                  className="w-20 aspect-square rounded-lg"
                />
                <button
                  type="button"
                  onClick={() => removeImage(index)}
                  className="absolute top-1 aspect-square right-1 bg-red-500 text-white rounded-full p-1"
                >
                  X
                </button>
              </div>
            ))}
          </div>
          <input
            type="file"
            multiple
            onChange={(e) => uploadmulti(e, { name: "images" })}
            className="w-full border-2 rounded-lg py-2 px-2"
          />
        </div>
        <div className="selectImage rounded-lg px-5 py-4 mt-5">
          <label htmlFor="packageName">Name</label>
          <input
            {...register("packageName")}
            className="w-full border-2 rounded-lg py-2 px-2 mt-2"
          />
          {errors.packageName && (
            <p className="text-red-500">{errors.packageName.message}</p>
          )}

          {errors.title && (
            <p className="text-red-500">{errors.title.message}</p>
          )}

          <label htmlFor="title">Title</label>
          <input
            {...register("title")}
            className="w-full border-2 rounded-lg py-2 px-2 mt-2"
          />
          {errors.title && (
            <p className="text-red-500">{errors.title.message}</p>
          )}

          <label htmlFor="description">Description</label>
          <textarea
            {...register("description")}
            className="w-full border-2 rounded-lg py-2 px-2 mt-2"
          ></textarea>
          {errors.description && (
            <p className="text-red-500">{errors.description.message}</p>
          )}

          <label htmlFor="pricePerPerson">Price per Person</label>
          <input
            {...register("pricePerPerson")}
            type="text"
            placeholder="0"
            className="w-full border-2 rounded-lg py-2 px-2 mt-2"
          />
          {errors.pricePerPerson && (
            <p className="text-red-500">{errors.pricePerPerson.message}</p>
          )}
        </div>

        <div className="selectImage rounded-lg px-5 py-4 mt-5">
          <h1 className="text-lg font-semibold">Rooms</h1>
          {itineraryFields.map((item, index) => (
            <div key={item.id} className="mb-4 mt-4">
              <label>Image</label>
              {/*@ts-ignore */}
              {watch(`itinerary[${index}].image`) || null ? (
                <img
                  //@ts-ignore
                  src={watch(`itinerary[${index}].image`) || ""}
                  alt={`uploaded-${index}`}
                  className="w-12 aspect-square rounded-lg"
                />
              ) : null}
              <Controller
                control={control}
                name={`tourIncludes.${index}.image`}
                render={({ field }) => (
                  //@ts-ignore
                  <input
                    type="file"
                    onChange={(e) =>
                      upload(e, { name: `itinerary.${index}.image` })
                    }
                    className="w-full border-2 rounded-lg py-2 px-2"
                  />
                )}
              />

              {errors.itinerary && errors.itinerary[index]?.image && (
                <p className="text-red-500">
                  {errors?.itinerary[index]?.image?.message}
                </p>
              )}

              <label>Title</label>
              <input
                {...register(`itinerary.${index}.title`)}
                className="w-full border-2 rounded-lg py-2 px-2 mt-2"
                placeholder={`Title for Room ${index + 1}`}
              />
              {errors.itinerary && errors.itinerary[index]?.title && (
                <p className="text-red-500">
                  {errors?.itinerary[index]?.title?.message}
                </p>
              )}

              <label>Description</label>
              <textarea
                {...register(`itinerary.${index}.description`)}
                className="w-full border-2 rounded-lg py-2 px-2 mt-2"
                placeholder={`Description For Room ${index + 1}`}
              ></textarea>
              {errors?.itinerary && errors.itinerary[index]?.description && (
                <p className="text-red-500">
                  {errors?.itinerary[index]?.description?.message}
                </p>
              )}

              <button
                type="button"
                onClick={() => removeItinerary(index)}
                className="bg-red-600 w-full min-[500px]:w-auto text-white rounded-lg px-3 py-1"
              >
                Remove
              </button>
            </div>
          ))}
          <div className="mt-4">
            <button
              type="button"
              onClick={() =>
                appendItinerary({
                  image: ``,
                  description: "",
                  title: "",
                })
              }
              className="bg-blue-600 w-full min-[500px]:w-auto text-white rounded-lg px-3 py-1"
            >
              Add Room
            </button>
          </div>
        </div>

        <div className="selectImage rounded-lg px-5 py-4 mt-5">
          <h1 className="text-lg font-semibold">Amenities</h1>
          {tourIncludesFields.map((item: any, index: number) => (
            <div key={item.id} className="flex gap-2 flex-col mt-2">
              {/*@ts-ignore */}
              {watch(`tourIncludes[${index}].image`) || null ? (
                <img
                  //@ts-ignore
                  src={watch(`tourIncludes[${index}].image`) || ""}
                  alt={`uploaded-${index}`}
                  className="w-12 aspect-square rounded-lg"
                />
              ) : null}
              <Controller
                control={control}
                name={`tourIncludes.${index}.image`}
                render={({ field }) => (
                  //@ts-ignore
                  <input
                    type="file"
                    onChange={(e) =>
                      upload(e, { name: `tourIncludes.${index}.image` })
                    }
                    className="w-full border-2 rounded-lg py-2 px-2"
                  />
                )}
              />

              <input
                {...register(`tourIncludes.${index}.name`)}
                className="w-full border-2 rounded-lg py-2 px-2"
                placeholder="Name"
              />
              {errors?.tourIncludes && errors.tourIncludes[index]?.name && (
                <p className="text-red-500">
                  {errors?.tourIncludes[index]?.name?.message}
                </p>
              )}

              <button
                type="button"
                onClick={() => removeTourIncludes(index)}
                className="bg-red-600 w-full min-[500px]:w-[13%] text-white rounded-lg py-1"
              >
                Remove
              </button>
            </div>
          ))}
          <div className="mt-4">
            <button
              type="button"
              //@ts-ignore
              onClick={() => appendTourIncludes({ image: null, name: "" })}
              className="bg-blue-600 w-full min-[500px]:w-auto text-white rounded-lg px-3 py-1"
            >
              Add Amenities
            </button>
          </div>
        </div>

        <div className="selectImage rounded-lg px-5 py-4 mt-5">
          <h1 className="text-lg font-semibold">Prices</h1>
          {highlightFields.map((item, index) => (
            <div key={item.id} className="mb-4 mt-4">
              <label>Title</label>
              <input
                {...register(`highlights.${index}.title`)}
                className="w-full border-2 rounded-lg py-2 px-2 mt-2"
                placeholder={`price ${index + 1}`}
              />
              {errors.highlights && errors.highlights[index]?.title && (
                <p className="text-red-500">
                  {errors?.highlights[index]?.title?.message}
                </p>
              )}

              <button
                type="button"
                onClick={() => removeHighlight(index)}
                className="bg-red-600 w-full min-[500px]:w-auto text-white rounded-lg px-3 py-1 mt-2"
              >
                Remove
              </button>
            </div>
          ))}
          <div className="mt-4">
            <button
              type="button"
              onClick={() => appendHighlight({ title: "" })}
              className="bg-blue-600 w-full min-[500px]:w-auto text-white rounded-lg px-3 py-1"
            >
              Add Prices
            </button>
          </div>
        </div>

        <div className="selectImage rounded-lg px-5 py-4 mt-5">
          <h1 className="text-lg font-semibold">Room Facilities</h1>
          {inclusionField.map((item, index) => (
            <div key={item.id} className="mb-4 mt-4">
              <label>Title</label>
              <input
                {...register(`inclusion.${index}.title`)}
                className="w-full border-2 rounded-lg py-2 px-2 mt-2"
                placeholder={`Room Facilities ${index + 1}`}
              />
              {errors.inclusion && errors.inclusion[index]?.title && (
                <p className="text-red-500">
                  {errors?.inclusion[index]?.title?.message}
                </p>
              )}

              <button
                type="button"
                onClick={() => removeIclusion(index)}
                className="bg-red-600 w-full min-[500px]:w-auto text-white rounded-lg px-3 py-1 mt-2"
              >
                Remove
              </button>
            </div>
          ))}
          <div className="mt-4">
            <button
              type="button"
              onClick={() => appendInclusionField({ title: "" })}
              className="bg-blue-600 w-full min-[500px]:w-auto text-white rounded-lg px-3 py-1"
            >
              Add Room Facilities
            </button>
          </div>
        </div>

        {/* <div className="selectImage rounded-lg px-5 py-4 mt-5">
          <h1 className="text-lg font-semibold">Exclusions</h1>
          {exclusionField.map((item, index) => (
            <div key={item.id} className="mb-4 mt-4">
              <label>Title</label>
              <input
                {...register(`exclusion.${index}.title`)}
                className="w-full border-2 rounded-lg py-2 px-2 mt-2"
                placeholder={`Exclusion ${index + 1}`}
              />
              {errors?.exclusion && errors.exclusion[index]?.title && (
                <p className="text-red-500">
                  {errors?.exclusion[index]?.title?.message}
                </p>
              )}

              <button
                type="button"
                onClick={() => removeExclusion(index)}
                className="bg-red-600 w-full min-[500px]:w-auto text-white rounded-lg px-3 py-1 mt-2"
              >
                Remove
              </button>
            </div>
          ))}
          <div className="mt-4">
            <button
              type="button"
              onClick={() => appendExclusionField({ title: "" })}
              className="bg-blue-600 w-full min-[500px]:w-auto text-white rounded-lg px-3 py-1"
            >
              Add Inclusion
            </button>
          </div>
        </div> */}

        <div className="selectImage rounded-lg px-5 py-4 mt-5">
          <h1 className="text-lg font-semibold">Faqs</h1>
          {faqsFields.map((item, index) => (
            <div key={item.id} className="mb-4 mt-4">
              <label>Question</label>
              <input
                {...register(`faq.${index}.question`)}
                className="w-full border-2 rounded-lg py-2 px-2 mt-2"
                placeholder={`Question ${index + 1}`}
              />
              {errors?.faq && errors.faq[index]?.question && (
                <p className="text-red-500">
                  {errors?.faq[index]?.question?.message}
                </p>
              )}

              <label>Answer</label>
              <textarea
                {...register(`faq.${index}.answer`)}
                className="w-full border-2 rounded-lg py-2 px-2 mt-2"
                placeholder={`Answer ${index + 1}`}
              ></textarea>
              {errors?.faq && errors.faq[index]?.answer && (
                <p className="text-red-500">
                  {errors?.faq[index]?.answer?.message}
                </p>
              )}

              <button
                type="button"
                onClick={() => removeFaqsFields(index)}
                className="bg-red-600 w-full min-[500px]:w-auto text-white rounded-lg px-3 py-1"
              >
                Remove
              </button>
            </div>
          ))}
          <div className="mt-4">
            <button
              type="button"
              onClick={() =>
                appendFaqsFields({
                  answer: "",
                  question: "",
                })
              }
              className="bg-blue-600 w-full min-[500px]:w-auto text-white rounded-lg px-3 py-1"
            >
              Add Faq
            </button>
          </div>
        </div>

        <div className="gap-2 flex justify-end pb-5 pr-2">
          <button
            type="submit"
            className="bg-blue-600 text-white w-20 py-1 rounded-lg mt-4 flex items-center justify-center"
          >
            {isPending ? <Spinner /> : "Save"}
          </button>
          <button
            type="button"
            onClick={onClose}
            className="bg-red-700 text-white px-5 py-1 rounded-lg mt-4"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddnewNightStay;
