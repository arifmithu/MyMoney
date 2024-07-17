import React from "react";
import { Link } from "react-router-dom";

const RegisterType = () => {
  return (
    <div className="flex-1 items-center justify-center flex flex-col gap-5">
      <Link
        to={"/userRegistration"}
        className={
          "text-lg text-white font-bold border border-black bg-blue-700 rounded  shadow-2xl px-4 py-2 w-[182px] flex items-center justify-center"
        }
      >
        Register as User
      </Link>
      <Link
        to={"/agentRegistration"}
        className={
          "text-lg text-white font-bold border border-black bg-blue-700 rounded  shadow-2xl px-4 py-2"
        }
      >
        Register as Agent
      </Link>
    </div>
  );
};

export default RegisterType;
