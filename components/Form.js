import React from "react";
import { useForm } from "react-hook-form";

const Form = ({ mode,name,setShowForm }) => {
  const { register, handleSubmit, watch, formState } = useForm();
  const onSubmit = (data) =>{ console.log(data)
    setShowForm(false)
};

  console.log(watch("example")); // watch input value by passing the name of it

  return (
    <form onSubmit={handleSubmit(onSubmit)} className='inline-block grow'>
      <input defaultValue={name} {...register("name")} />
    </form>
  );
};

export default Form;
