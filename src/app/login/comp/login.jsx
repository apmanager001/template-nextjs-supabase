"use client";
import React, { useState } from "react";
import Link from "next/link";
import { toast } from "react-hot-toast";
import supabase from "../../../components/utilities/supabaseClient";

const Login = () => {
  const [name, setName] = useState("");
  const [data, setData] = useState({
    name: "",
    password: "",
  });

  const loginUser = async (e) => {
    e.preventDefault();
    const { name, password } = data;
    try {
      const response = await supabase.post("/login", { name, password });

      if (response.data.error) {
        console.error(response.data.error);
        toast.error(response.data.error);
      } else {
        setData({});
        toast.success("Login Successful");
        window.location.href = "/settings";
      }
    } catch (error) {
      if (error.response && error.response.status === 401) {
        toast.error("Incorrect username/email or password");
      } else {
        toast.error("Login failed");
      }
    }
  };

  const handleChangePassword = () => {
    axiosInstance
      .post("/resetpassword", {
        name,
      })
      .then((response) => {
        toast.success(
          "An email has been sent, click the link in the email to reset your password"
        );
        setName("");
      })
      .catch((error) => {
        console.error("There was an error changing the password", error);
        if (error.response && error.response.status === 403) {
          toast.error(
            "Your email hasnt been verified yet, reach out to us by the contact form on the home page to reset your password."
          );
        } else if (error.response && error.response.status === 404) {
          toast.error("We havent found an account with that email or username");
        } else {
          toast.error("Unable to send a reset password email");
        }
      });
  };
  return (
    <div className="hero min-h-screen">
      <div className="hero-content flex-col gap-14 lg:flex-row-reverse">
        <div className="text-center lg:text-left md:w-96">
          <h1 className="text-5xl font-bold">Login</h1>
          <p className="py-6">
            Login here to start being able to interact with our community!
          </p>
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-xl border hover:border-cyan-500">
          <form className="card-body" onSubmit={loginUser}>
            <div className="form-control">
              <label htmlFor="email" className="floating-label">
                <div className="flex justify-between mr-4">
                  <span className="opacity-70">Email or Username</span>
                </div>
              </label>
              <input
                type="text"
                id="email"
                name="email"
                className="input input-bordered"
                placeholder="Email or Username"
                value={data.name}
                onChange={(e) => setData({ ...data, name: e.target.value })}
                required
                autoComplete="false"
              />
            </div>
            <div className="form-control">
              <label htmlFor="password" className="floating-label ">
                <div className="flex justify-between mr-4">
                  <span className="opacity-70">Password</span>
                  <Link
                    href="#"
                    className="link link-accent font-bold"
                    onClick={() =>
                      document.getElementById("my_modal_2").showModal()
                    }
                  >
                    Forgot password?
                  </Link>
                </div>
              </label>
              <input
                type="password"
                id="password"
                name="password"
                placeholder="Password"
                className="input input-bordered"
                value={data.password}
                onChange={(e) => setData({ ...data, password: e.target.value })}
                required
              />
            </div>
            <div className="w-full">
              <input type="submit" className="btn btn-primary w-full" value="Login" />
            </div>
            <div className="opacity-70 mt-6 text-center">
              <p>Don't have an account yet?</p>
              <p>
                <Link href="/register" className="link link-hover underline">
                  Click here
                </Link>{" "}
                to register.
              </p>
            </div>
          </form>
          <dialog id="my_modal_2" className="modal">
            <div className="modal-box flex flex-col gap-6 rounded-box bg-base-200 p-6 max-w-md text-center border ">
              <form method="dialog">
                <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                  ✕
                </button>
              </form>
              <h1 className="text-2xl font-bold">Forgot password?</h1>

              <span className="flex flex-col">
                Remember your password?
                <form method="dialog">
                  <button className="link link-secondary">Log in here</button>
                </form>
              </span>
              <div className="form-control mx-10">
                <label htmlFor='email2' className="floating-label ">
                  <div className="flex">
                    <span className="opacity-70">Email</span>
                  </div>
                </label>
                <input
                  className="input input-bordered validator"
                  type="email"
                  id='email2'
                  value={name}
                  name="name"
                  placeholder="Email"
                  onChange={(e) => setName(e.target.value)}
                  autoComplete="false"
                />
              </div>
              <input
                type="submit"
                className="btn btn-primary "
                value="Send Email"
                onClick={handleChangePassword}
              />
            </div>
            <form method="dialog" className="modal-backdrop">
              <button>close</button>
            </form>
          </dialog>
        </div>
      </div>
    </div>
  );
};

export default Login;
