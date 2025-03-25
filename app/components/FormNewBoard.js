const FormNewBoard = () => {
  return (
    <div className="bg-base-100 p-8 rounded-3xl">
      <p className="font-bold text-2xl">Create New Feedback board </p>
      <label className="label space-y-8 w-full">
        <fieldset className="fieldset">
          <legend className="fieldset-legend py-2">Board Name</legend>
          <input
            type="text"
            className="input input-bordered w-full"
            placeholder="Type here"
          />
        </fieldset>
      </label>
      <button className="btn btn-primary w-full">Create Board</button>
    </div>
  );
};

export default FormNewBoard;
