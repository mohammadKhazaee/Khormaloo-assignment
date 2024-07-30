export const InputField = (props: any) => {
  return (
    <>
      <label>
        {props.title}
        <input type="text" />
        <input type="text" />
      </label>
    </>
  );
};
