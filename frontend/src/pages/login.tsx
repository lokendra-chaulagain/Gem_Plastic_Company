import React from "react";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { useRouter } from "next/router.js";
import axios from "axios";

export default function Login() {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    reset,
  } = useForm();
  const handleAllField = watch();

  const loginUser = async () => {
    try {
      const res = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/user/signin`, handleAllField);
      localStorage.setItem('accessToken', res.data.accessToken);
      // console.log(res.data.accessToken);
      reset();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div
      className=" matter d-flex align-items-center justify-content-center "
      style={{ minHeight: "70vh" }}>
      <div className="login_wrapper ">
        <form
          onSubmit={handleSubmit(loginUser)}
          className="d-flex flex-column align-items-center login_form_box">
          <h1 className="h1 mb-1 text_color fw-bold">Welcome back ! </h1>
          <p className="para_text">Sign in to get the most out of Techno Store</p>

          <div className="w-100 my-2">
            <input
              type="email"
              className="form-control register_input  rounded-1  "
              placeholder="Email"
              {...register("email", { required: true })}
            />
            {errors.email && <span className="text-danger fw-semibold">Email is required</span>}
          </div>

          <div className="w-100 my-2">
            <input
              type="password"
              className="form-control register_input rounded-1  "
              placeholder="Password"
              {...register("password", { required: true, minLength: 6 })}
            />
            {errors.password && <span className="text-danger fw-semibold">Password is required of Length 6</span>}
          </div>

          <div className="w-100 d-flex my-2 justify-content-between ">
            <div className=" form-check">
              <input
                type="checkbox"
                className="form-check-input check_box shadow-none rounded-0 cp"
                id="exampleCheck1"
              />
              <label
                className="form-check-label check_box  no_selection cp text_color "
                htmlFor="exampleCheck1">
                Accept Terms & Conditions
              </label>
            </div>
            <div className="">
              <p className="text_color cp_hover cp">Forgot Password?</p>
            </div>
          </div>

          <button
            type="submit"
            className="btn  w-100 register_button rounded-1">
            Login
          </button>
          <small className="pb-2 pt-3 text-muted">
            Do not have an account ?
            <Link href={"/register"}>
              <span className=" cp_hover"> Register</span>
            </Link>
          </small>
        </form>
      </div>
    </div>
  );
}