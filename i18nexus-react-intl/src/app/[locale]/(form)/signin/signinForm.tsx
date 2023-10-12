"use client";
import { useRef, useState } from "react";
import {
  useForm,
  UseFormRegister,
  FieldValues,
  FieldErrors,
  ValidationRule,
} from "react-hook-form";
import { useRouter } from "next/navigation";
import Image from "next/image";
import LogoBtn from "@/app/[locale]/(form)/signin/logoBtn";
import { useIntl } from "react-intl";
interface ErrorState {
  isError: boolean;
  message: string;
  type: string;
}
interface InputData {
  type: string;
  text: string;
  placeholder: string;
  error: ErrorState;
  register: UseFormRegister<FieldValues>;
  formErrors: FieldErrors<FieldValues>;
  required: {
    required: string;
    pattern?: ValidationRule<RegExp>;
  };
}

const TextField = ({ inputDatas }: { inputDatas: InputData[] }) => {
  return (
    <>
      {inputDatas.map((data: InputData, index: number) => (
        <div key={index} className="flex flex-col py-2">
          <label
            htmlFor={data.type}
            className="text-sm font-semibold text-gray-500 mb-2"
          >
            {data.text}
          </label>
          <input
            type={data.type}
            id={data.type}
            placeholder={data.placeholder}
            className={`border-2 border-gray-200 rounded-md p-3 focus:outline-none ${
              (data.error.type === data.type && data.error.isError) ||
              data.formErrors[data.type]
                ? "focus:border-red-500"
                : "focus:border-blue-500"
            } focus:border-2`}
            {...data.register(data.type, data.required)}
          />
          {data.formErrors[data.type] && (
            <small className="text-red-500 p-1" role="alert">
              {data.formErrors[data.type]?.message as string}
            </small>
          )}
        </div>
      ))}
    </>
  );
};

export default function SigninForm({ locale }: { locale: string }) {
  const {
    register,
    handleSubmit,
    setFocus,
    formState: { errors },
  } = useForm();
  const modalContent = useRef("");
  const router = useRouter();
  let error = useRef({ isError: false, message: "", type: "" });
  const selected = useRef({ value: "", icon: "" });
  switch (locale) {
    case "ko":
      selected.current.icon = "KR";
      break;
    case "en":
      selected.current.icon = "WW";
      break;
    case "ja":
      selected.current.icon = "JP";
      break;
  }
  const intl = useIntl();
  const handleSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    router.push(`/${e.target.value}/signin`);
  };
  const inputDatas: InputData[] = [
    {
      type: "id",
      text: intl.formatMessage({ id: "id" }),
      placeholder: intl.formatMessage({ id: "idPlaceholder" }),
      error: error.current,
      register,
      formErrors: errors,
      required: { required: "아이디 입력은 필수입니다." },
    },
    {
      type: "password",
      text: intl.formatMessage({ id: "pw" }),
      placeholder: intl.formatMessage({ id: "pwPlaceholder" }),
      error: error.current,
      register,
      formErrors: errors,
      required: {
        required: "비밀번호 입력은 필수입니다.",
        pattern: {
          value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[@$!%#*?&^~]).{8,}$/,
          message: "비밀번호 형식에 맞지 않습니다.",
        },
      },
    },
  ];

  const handleSubmitForm = (data: FieldValues) => {
    console.log(data, error.current);
  };
  return (
    <div>
      <form onSubmit={handleSubmit(handleSubmitForm)}>
        <TextField inputDatas={inputDatas} />
        <button className="bg-blue-500 rounded-3xl text-white font-bold w-full py-2 mt-6 mb-2">
          {intl.formatMessage({ id: "loginBtn" })}
        </button>
        <p>{error.current.isError}</p>
      </form>
      <div className="flex flex-col w-full gap-3 my-2">
        <p className="text-center text-xs text-gray-400 font-semibold">
          {intl.formatMessage({ id: "or" })}
        </p>
        <div className="flex justify-evenly text-xs text-gray-400 font-semibold">
          <LogoBtn name="naver" color="bg-naver-main" />
          <LogoBtn name="google" />
          <LogoBtn name="kakao" />
        </div>
        <p className="text-center text-sm text-gray-500 font-semibold my-2">
          {intl.formatMessage({ id: "forget" })} {">"}
        </p>
      </div>
      <hr />
      <div className="flex flex-col justify-center items-center gap-3 text-gray-400 text-xs my-4">
        <span className="flex gap-3">
          <p>{intl.formatMessage({ id: "use" })}</p>
          <p className="font-extrabold text-gray-600">
            {intl.formatMessage({ id: "policy" })}
          </p>
        </span>
        <span>© Wantedlab, Inc.</span>
        <div className="flex gap-1 font-bold text-gray-600 border rounded px-3 py-2 mt-2">
          <Image
            src={`https://static.wanted.co.kr/images/wantedoneid/ico_${selected.current.icon}.svg`}
            alt={selected.current.value}
            width={23}
            height={16}
            className="border"
          />
          <select id="language" value={locale} onChange={handleSelect}>
            <option value="ko">한국어</option>
            <option value="en">English</option>
            <option value="ja">日本語</option>
          </select>
        </div>
      </div>
    </div>
  );
}
