import React from "react";
import { Header } from "./../../components";

export default function Login({ history }) {
  return (
    <>
      {<Header />}
      <div class="flex h-screen">
        <div class="m-auto">
          <div class="w-full max-w-xs">
            <form
              class=" shadow-md rounded px-8 pt-6 pb-8 mb-4"
              style={{ backgroundColor: "#35D461", padding: "20px 40px" }}
            >
              <div class="mb-4">
                <label
                  class="block text-gray-700 text-sm font-bold mb-2"
                  for="username"
                >
                  CPF
                </label>
                <input
                  class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="username"
                  type="text"
                  style={{ backgroundColor: "#FAF0A2" }}
                />
              </div>
              <div class="mb-6">
                <label
                  class="block text-gray-700 text-sm font-bold mb-2"
                  for="password"
                >
                  Numero de registro
                </label>
                <input
                  class="shadow appearance-none  rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                  id="password"
                  style={{ backgroundColor: "#FAF0A2" }}
                />
              </div>
              <div class="flex items-center justify-between">
                <button
                  class="bg-white hover:bg-white text-black font-bold py-2 px-4 mx-4 rounded focus:outline-none focus:shadow-outline"
                  type="button"
                  style={{
                    margin: "auto",
                    borderRadius: 20,
                    padding: "10px 25px",
                  }}
                  onClick={() => history.push("/patient")}
                >
                  Entrar
                </button>
              </div>
            </form>
            <p class="text-center text-gray-500 text-xs">
              &copy;2020 Acme Corp. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
