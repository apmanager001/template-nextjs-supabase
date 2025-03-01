import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="mt-auto bg-base-200 w-full pb-12">
      <div className="mt-auto w-full max-w-[85rem] py-10 px-4 sm:px-6 lg:px-8 lg:pt-20 mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
          <div className="col-span-full lg:col-span-1">
            <Link
              className="flex-none text-xl font-semibold  focus:outline-none focus:opacity-80"
              href="/"
              aria-label="Brand"
            >
              <h1>Template</h1>
            </Link>
          </div>

          <div className="col-span-1">
            <h2 className="font-semibold">Pages</h2>

            <div className="mt-3 grid space-y-3">
              <p>
                <Link
                  className="inline-flex gap-x-2 text-primary hover:underline"
                  href="/"
                >
                  Template
                </Link>
              </p>
              <p>
                <Link
                  className="inline-flex gap-x-2 text-primary hover:underline"
                  href="/"
                >
                  Template
                </Link>
              </p>
              <p>
                <Link
                  className="inline-flex gap-x-2 text-primary hover:underline"
                  href="/"
                >
                  Template
                </Link>
              </p>
              <p>
                <Link
                  className="inline-flex gap-x-2 text-primary hover:underline"
                  href="/"
                >
                  Template
                </Link>
              </p>
            </div>
          </div>

          <div className="col-span-1">
            <h2 className="font-semibold">Template</h2>

            <div className="mt-3 grid space-y-3">
              <p>
                <Link
                  className="inline-flex gap-x-2 text-primary hover:underline"
                  href="/"
                >
                  Template
                </Link>
              </p>
              <p>
                <Link
                  className="inline-flex gap-x-2 text-primary hover:underline"
                  href="/"
                >
                  Template
                </Link>
              </p>
            </div>
          </div>
        </div>

        <div className="mt-5 sm:mt-12 grid gap-y-2 sm:gap-y-0 sm:flex sm:justify-between sm:items-center">
          <div className="flex justify-between items-center">
            <p className="text-sm ">© 2025 Template</p>
          </div>

          <div>
            <a href="mailto:contact@localemichigan.com">contact@Template.com</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
