"use client";

const FarmForm = () => {
  const handleSubmit = (e: any) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = {
      farmName: formData.get("farmName"),
      location: formData.get("location"),
      farmSize: formData.get("farmSize"),
      mainProduction: formData.get("mainProduction"),
    };
    console.log(data);
    // Handle form submission logic here
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-8 mt-16">
      <div>
        <label>
          Farm Name
          <input type="text" name="farmName" required />
        </label>
      </div>

      <div>
        <label>
          Location
          <input type="text" name="location" required />
        </label>
      </div>

      <div>
        <label>
          Farm Size
          <input type="text" name="farmSize" required />
        </label>
      </div>

      <div>
        <label>
          Main Production
          <select name="mainProduction" required>
            <option value="">Select production</option>
            <option value="grains">Grains</option>
            <option value="vegetables">Vegetables</option>
            <option value="fruits">Fruits</option>
            <option value="livestock">Livestock</option>
            <option value="dairy">Dairy</option>
          </select>
        </label>
      </div>

      <button type="submit" className="bg-lime">
        Continue
      </button>
    </form>
  );
};

export default FarmForm;
