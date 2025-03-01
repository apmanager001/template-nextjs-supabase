"use client";
import React, { useState } from "react";
import Link from "next/link";
import { toast } from "react-hot-toast";
import supabase from "../../../components/utilities/supabaseClient";

const CreateStory = () => {
  const [data, setData] = useState({
    email: "",
    password: "",
    password2: "",
    userName: "",
  });

  const [value, setValue] = useState("");

  const registerUser = async (e) => {
    e.preventDefault();
    const { email, password, password2, userName } = data;

    //check to make sure passwords match
    if (password !== password2) {
      toast.error("Passwords do not match");
      return;
    }

    try {
      const { data } = await supabase.post("/register", {
        email,
        password,
        userName,
      });
      if (data.error) {
        toast.error(data.error);
      } else {
        setData({});
        setValue({});
        toast.success("Register Successful. Welcome!");
        window.location.href = "/login";
      }
    } catch (error) {
      if (error.response && error.response.status === 409) {
        toast.error("Username or email already exists");
      } else {
        toast.error("An unexpected error occurred");
      }
    }
  };
  return (
    <div className="hero min-h-screen">
      <div className="hero-content flex-col gap-14 lg:flex-row-reverse">
        <div className="text-center lg:text-left md:w-96">
          <h1 className="text-5xl font-bold">Register</h1>
          <p className="py-6">
            Start here to be able to interact with our community! You need an
            account to start creating stories and keep track of the stories you
            like.
          </p>
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-xl border hover:border-cyan-500">
          <form className="card-body" onSubmit={registerUser}>
            <div className="form-control">
              <label htmlFor="userName" className="floating-label">
                <span className="label">Username</span>
              </label>
              <input
                type="text"
                id="userName"
                name="userName"
                className="input input-bordered"
                placeholder="Username"
                value={data.userName}
                onChange={(e) => setData({ ...data, userName: e.target.value })}
                required
                autoComplete="false"
                minLength={6}
              />
            </div>
            <div className="form-control">
              <label htmlFor="email" className="floating-label">
                <span className="label">Email</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="input input-bordered validator"
                placeholder="Email"
                value={data.email}
                onChange={(e) => setData({ ...data, email: e.target.value })}
                required
                autoComplete="true"
              />
            </div>
            <div className="form-control">
              <label htmlFor="password" className="floating-label">
                <span className="label">Password</span>
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
            <div className="form-control">
              <label htmlFor="password2" className="floating-label">
                <span className="label">Confirm Password</span>
              </label>
              <input
                type="password"
                id="password2"
                name="password2"
                placeholder="Confirm Password"
                className="input input-bordered"
                value={data.password2}
                onChange={(e) =>
                  setData({ ...data, password2: e.target.value })
                }
                required
              />
            </div>
            <div className="form-control">
              <input
                type="submit"
                className="btn btn-primary w-full"
                value="Register"
              />
            </div>
            <div className="opacity-70 form-control mt-6 text-center">
              <p>Already have an account?</p>
              <p>
                <Link href="/login" className="link link-hover underline">
                  Click here
                </Link>{" "}
                to login.
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreateStory;
