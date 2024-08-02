import { useParams } from "react-router-dom";

export const Form = () => {
  const { formId } = useParams();
  return <h1>Submit From Page , form Id : {formId}</h1>;
};
