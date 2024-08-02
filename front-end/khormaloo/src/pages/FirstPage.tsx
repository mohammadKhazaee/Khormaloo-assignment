import NextPage from "../components/NextPage";

export const FirstPage = () => {
  return (
    <>
      <div>
        {/* <div className="addFormButton flex justify-center">
          <button
            //   onClick={}
            className="bg-gradient-to-r from-teal-400 to-blue-500 hover:from-pink-500 hover:to-orange-500 flex border-solid rounded-3xl bg-[#5E47A1] w-44 justify-center items-center px-[12px] py-[20px] mt-14 mb-14"
          >
            Create New Form
          </button>
        </div> */}
        <div>
          <NextPage />
        </div>
        <div
          className="formsPlace px-[50px] md:px-[123px] text-black w-screen"
          style={{ fontFamily: "Montserrat" }}
        >
          Your Forms:
          <div className="grid grid-cols-6 gap-x-10 items-stretch mr-10 mt-5">
            <div>form 1</div>
            <div>form 2</div>
            <div>form 3</div>
            <div>form 4</div>
            <div>form 5</div>
            <div>form 6</div>
            {/* we neen this here: */}
            {/* {formData.map((form, index) => {
              return <FormCard form={form} />;
            })} */}
          </div>
        </div>
      </div>
    </>
  );
};
