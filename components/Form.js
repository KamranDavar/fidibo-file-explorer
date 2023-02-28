import React from "react";
import { useForm } from "react-hook-form";
import { useAddFiles } from "../logics/hooks/useAddFiles";

const Form = ({ mode,name,setShowForm,fileId, isDirectory }) => {
  const createFile= useAddFiles()

  const { register, handleSubmit, watch, setFocus } = useForm();
  const onSubmit = (data) =>{ console.log(data)
    data.isDirectory=isDirectory
    data.fileId=fileId
    createFile.mutate(data)
    setShowForm(false)
};

React.useEffect(() => {
  setFocus("name");
}, [setFocus]);


  console.log(watch("example")); // watch input value by passing the name of it

  return (
    <form onSubmit={handleSubmit(onSubmit)} className='inline-block grow'>
      <input {...register("name")} />
    </form>
  );
};

export default Form;
