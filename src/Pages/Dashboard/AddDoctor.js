import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useQuery } from "react-query";
import Loading from "../Shared/Loading";
import { toast } from "react-toastify";

const AddDoctor = () => {
  // Schema validation Using YUP
  const schema = yup.object({
    name: yup.string().required("Name is required"),
    email: yup.string().email("Invalid email").required("Email is required"),
    speciality: yup.string().required("Speciality is required"),
  });
  // React hook form
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({ resolver: yupResolver(schema) });

  // Event Handler
  const onSubmit = async (data) => {
    const { name, email, speciality } = data;
    const image = data.image[0];
    const formData = new FormData();
    formData.append("image", image);

    fetch(
      `https://api.imgbb.com/1/upload?key=${process.env.REACT_APP_IMAGE_BB_API_KEY}`,
      {
        method: "POST",
        body: formData,
      }
    )
      .then((res) => res.json())
      .then((result) => {
        if (result.status === 200) {
          const img = result.data.url;
          const doctor = {
            name,
            email,
            speciality,
            img,
          };
          fetch(`http://localhost:3001/doctor`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              authorization: `Bearer ${localStorage.getItem("accessToken")}`,
            },
            body: JSON.stringify(doctor),
          })
            .then((res) => res.json())
            .then((data) => {
              if (data.insertedId) {
                toast.success("Doctor Added Successfullay");
                reset();
              }
            });
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  const { data: services, isLoading } = useQuery("services", () =>
    fetch("http://localhost:3001/services").then((res) => res.json())
  );

  if (isLoading) {
    return <Loading />;
  }
  return (
    <>
      <div className="my-5 text-2xl font-semibold text-center">
        Add A Doctor
      </div>
      <form onSubmit={handleSubmit(onSubmit)} className="max-w-md mx-auto">
        <div className="form-control w-full">
          <label className="label">
            <span className="label-text text-sm">Name</span>
          </label>
          <input
            type="text"
            placeholder="Enter your name"
            className="input input-bordered w-full"
            {...register("name")}
          />
          <p className="mt-2 text-sm text-error">{errors.name?.message}</p>
        </div>

        <div className="form-control w-full">
          <label className="label">
            <span className="label-text text-sm">Email</span>
          </label>
          <input
            type="text"
            placeholder="Enter your email"
            className="input input-bordered w-full"
            {...register("email")}
          />
          <p className="mt-2 text-sm text-error">{errors.email?.message}</p>
        </div>

        <div className="form-control w-full">
          <label className="label">
            <span className="label-text text-sm">Speciality</span>
          </label>
          <select
            class="select select-bordered w-full"
            {...register("speciality")}
          >
            {services.map((service) => (
              <option key={service._id} value={service.name}>
                {service.name}
              </option>
            ))}
          </select>
          <p className="mt-2 text-sm text-error">
            {errors.speciality?.message}
          </p>
        </div>

        <div className="form-control w-full">
          <label className="label">
            <span className="label-text text-sm">Photo</span>
          </label>
          <input
            type="file"
            className="input input-bordered w-full"
            {...register("image")}
          />
          <p className="mt-2 text-sm text-error">{errors.image?.message}</p>
        </div>

        <input
          type="submit"
          value="ADD"
          className="btn btn-accent w-full mt-5 mb-2"
        />
      </form>
    </>
  );
};

export default AddDoctor;
