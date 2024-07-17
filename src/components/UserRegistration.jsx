import React from "react";
import { useForm } from "react-hook-form";

const UserRegistration = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);
  return (
    <div className="flex-1 items-center justify-center flex">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col gap-6 items-center justify-center  px-5 py-3"
      >
        <div className="flex gap-2  justify-center">
          <label
            htmlFor="name"
            className="text-base flex items-start  w-[160px]"
          >
            Enter Your Name
          </label>
          <span>:</span>
          <div>
            <input
              name="name"
              defaultValue="Md Arif Hossain Mithu"
              {...register("name", { required: true })}
              className="border border-black rounded px-2 py-1"
            />
            {errors.name && (
              <p className="text-red-500 absolute">This field is required</p>
            )}
          </div>
        </div>
        <div className="flex gap-2  justify-center">
          <label
            htmlFor="email"
            className="text-base flex items-start  w-[160px]"
          >
            Enter Your Email
          </label>
          <span>:</span>
          <div>
            <input
              name="email"
              defaultValue="example@gmail.com"
              {...register("email", { required: true })}
              className="border border-black rounded px-2 py-1"
            />
            {errors.email && (
              <p className="text-red-500 absolute">This field is required</p>
            )}
          </div>
        </div>
        <div className="flex gap-2  justify-center">
          <label
            htmlFor="number"
            className="text-base flex items-start  w-[160px]"
          >
            Enter Mobile Number
          </label>
          <span>:</span>
          <div>
            <input
              name="number"
              type="number"
              defaultValue="123456789"
              {...register("number", { required: true })}
              className="border border-black rounded px-2 py-1"
            />
            {errors.number && (
              <p className="text-red-500 absolute">This field is required</p>
            )}
          </div>
        </div>
        <div className="flex gap-2  justify-center">
          <label
            htmlFor="email"
            className="text-base flex items-start  w-[160px]"
          >
            Enter Your Pin
          </label>
          <span>:</span>
          <div>
            <input
              name="pin"
              defaultValue="12345"
              {...register("pin", { required: true, maxLength: 5 })}
              className="border border-black rounded px-2 py-1"
            />
            {errors.pin && (
              <p className="text-red-500 absolute">This field is required</p>
            )}
          </div>
        </div>

        <input
          type="submit"
          className="px-4 py-2 cursor-pointer border rounded bg-blue-800 text-white font-bold"
        />
      </form>
    </div>
  );
};

export default UserRegistration;
