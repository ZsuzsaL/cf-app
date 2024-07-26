import { useUser } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";

// Define the type for the form data
interface IFormInput {
  farmName: string;
  region: string;
  farmSize: number;
  mainProduction: string;
}

interface FarmFormProps {
  setHasFarm: (hasFarm: boolean) => void;
}

const FarmForm: React.FC<FarmFormProps> = ({ setHasFarm }) => {
  const router = useRouter();
  const { user } = useUser();

  // Initialize useForm with the type IFormInput
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInput>({ mode: "onChange" });

  // Define the onSubmit handler with the type SubmitHandler<IFormInput>
  const onSubmit: SubmitHandler<IFormInput> = async (data) => {
    const formData = {
      ...data,
      userid: user?.id, // Add the userId to the data
    };
    try {
      // Farm name does not exist, save the new farm info
      const saveResponse = await fetch("/api/saveFarmInfo", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (saveResponse.ok) {
        console.log("Farm info saved successfully");
        setHasFarm(true);
      } else {
        console.error("Failed to save farm info");
      }
    } catch (error) {
      console.error("An error occurred:", error);
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col gap-8 mt-16"
    >
      <label>
        Farm Name
        <input
          className="w-full"
          type="text"
          {...register("farmName", { required: "Farm Name is required" })}
        />
        {errors.farmName && <p className="error">{errors.farmName.message}</p>}
      </label>

      <label>
        Region
        <input
          className="w-full"
          type="text"
          {...register("region", { required: "Region is required" })}
        />
        {errors.region && <p className="error">{errors.region.message}</p>}
      </label>

      <label>
        Farm Size
        <input
          className="w-full"
          type="number"
          {...register("farmSize", {
            required: "Farm Size is required",
            min: { value: 10, message: "Value should be bigger than 10" },
            max: { value: 100, message: "Value should be less than 100" },
          })}
        />
        {errors.farmSize && <p className="error">{errors.farmSize.message}</p>}
      </label>

      <label>
        Main Production
        <select
          className="w-full"
          {...register("mainProduction", {
            required: "Main Production is required",
          })}
        >
          <option value="">Select production</option>
          <option value="grains">Grains</option>
          <option value="vegetables">Vegetables</option>
          <option value="fruits">Fruits</option>
          <option value="livestock">Livestock</option>
          <option value="dairy">Dairy</option>
        </select>
        {errors.mainProduction && (
          <p className="error">{errors.mainProduction.message}</p>
        )}
      </label>

      <button type="submit" className="bg-lime">
        Continue
      </button>
    </form>
  );
};

export default FarmForm;
