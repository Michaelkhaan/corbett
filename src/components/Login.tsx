import Head from "next/head";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useLoginMutation } from "@/queries/generated";
import { toast } from "react-toastify";
import Spinner from "./spinner";
import useAuth from "@/zustand/store";

const schema = yup.object().shape({
  email: yup.string().email("Invalid email").required("Email is required"),
  password: yup
    .string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
});

export default function Login() {
  const { setToken } = useAuth();
  const { mutateAsync, isPending } = useLoginMutation();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data: any) => {
    try {
      const res = await mutateAsync({
        email: data?.email,
        password: data?.password,
      });
      toast.success("Logged in successfully!");
      setToken("token");
    } catch (error: any) {
      toast.error(error?.message || "Invalid email or user is not an admin");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-center sm:py-12 fixed inset-0 z-50 ">
      <Head>
        <title>Login</title>
      </Head>
      <div className="p-10 xs:p-0 mx-auto md:w-full md:max-w-md">
        <h1 className="font-bold text-center text-2xl flex items-center gap-2 justify-center">
          Welcome to
          <span>
            <div className="relative mt-2">
              <h1 className="2xl:text-3xl text-2xl font-bold font-frinkRio cursor-pointer">
                Corbett
              </h1>
              <span
                className={`w-2 aspect-square rounded-full bg-[#00f9e9] absolute top-1 -right-2`}
              ></span>
            </div>
          </span>
        </h1>
        <div className="bg-white shadow w-full rounded-lg divide-y divide-gray-200 mt-5">
          <form onSubmit={handleSubmit(onSubmit)} className="px-5 py-7">
            <label className="font-semibold text-sm text-gray-600 pb-1 block">
              E-mail
            </label>
            <input
              type="text"
              {...register("email")}
              className="border rounded-lg px-3 py-2 mt-1 text-sm w-full"
            />
            {errors.email && (
              <p className="text-red-500 text-xs mt-1">
                {errors.email.message}
              </p>
            )}
            <label className="font-semibold text-sm text-gray-600 pb-1 block">
              Password
            </label>
            <input
              type="password"
              {...register("password")}
              className="border rounded-lg px-3 py-2 mt-1  text-sm w-full"
            />
            {errors.password && (
              <p className="text-red-500 text-xs mt-1">
                {errors.password.message}
              </p>
            )}
            <button
              type="submit"
              className=" flex justify-center mt-5 transition duration-200 bg-blue-500 hover:bg-blue-600 focus:bg-blue-700 focus:shadow-sm focus:ring-4 focus:ring-blue-600 focus:ring-opacity-50 text-white w-full py-2.5 rounded-lg text-sm shadow-sm hover:shadow-md font-semibold text-center"
            >
              {isPending ? (
                <Spinner />
              ) : (
                <span className="inline-block mr-2">Login</span>
              )}
            </button>
          </form>
          <div className="py-5">
            <div className="grid grid-cols-2 gap-1">
              <div className="text-center sm:text-left whitespace-nowrap">
                <button className="transition duration-200 mx-5 px-5 py-4 text-sm text-gray-500 hover:text-gray-600 focus:bg-gray-200 focus:shadow-sm focus:ring-4 focus:ring-gray-100 focus:ring-opacity-50 rounded-lg">
                  Forgot Password
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
