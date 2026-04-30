"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useState } from "react";
import { useRouter } from "next/navigation";

const OREGON_COUNTIES = [
  "Baker", "Benton", "Clackamas", "Clatsop", "Columbia", "Coos", "Crook",
  "Curry", "Deschutes", "Douglas", "Gilliam", "Grant", "Harney", "Hood River",
  "Jackson", "Jefferson", "Josephine", "Klamath", "Lake", "Lane", "Lincoln",
  "Linn", "Malheur", "Marion", "Morrow", "Multnomah", "Polk", "Sherman",
  "Tillamook", "Umatilla", "Union", "Wallowa", "Wasco", "Washington",
  "Wheeler", "Yamhill",
] as const;

const SERVICE_OPTIONS = [
  "Aerial Fertilizer Application",
  "Boltrak Field Tracking",
  "Grass Seed Spreading",
  "Field Mapping",
  "Aerial Photography",
] as const;

const TIMEFRAME_OPTIONS = [
  "Within 2 weeks",
  "Within 1 month",
  "Within 3 months",
  "Flexible",
] as const;

const schema = z.object({
  fullName: z.string().min(1, "Full name is required"),
  farmName: z.string().min(1, "Farm name is required"),
  county: z.enum(OREGON_COUNTIES, { required_error: "County is required" }),
  acreage: z
    .number({ invalid_type_error: "Acreage must be a number" })
    .min(1, "Acreage must be at least 1"),
  phone: z
    .string()
    .regex(
      /^(\+1\s?)?(\(?\d{3}\)?[\s.\-]?)?\d{3}[\s.\-]?\d{4}$/,
      "Please enter a valid US phone number"
    ),
  email: z.string().email("Please enter a valid email address"),
  services: z
    .array(z.string())
    .min(1, "Please select at least one service"),
  timeframe: z.enum(TIMEFRAME_OPTIONS, {
    required_error: "Timeframe is required",
  }),
  notes: z.string().optional(),
});

type FormData = z.infer<typeof schema>;

export default function LOIForm() {
  const router = useRouter();
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: { services: [] },
  });

  const onSubmit = async (data: FormData) => {
    setSubmitting(true);
    try {
      const formData = new FormData();
      formData.append("form-name", "farmer-loi");
      formData.append("fullName", data.fullName);
      formData.append("farmName", data.farmName);
      formData.append("county", data.county);
      formData.append("acreage", String(data.acreage));
      formData.append("phone", data.phone);
      formData.append("email", data.email);
      data.services.forEach((s) => formData.append("services", s));
      formData.append("timeframe", data.timeframe);
      if (data.notes) formData.append("notes", data.notes);

      await fetch("/", {
        method: "POST",
        body: formData,
      });

      router.push("/thank-you");
    } catch (err) {
      console.error("Form submission error:", err);
      setSubmitError(true);
      setSubmitting(false);
    }
  };

  const inputClass =
    "w-full border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-forest focus:border-transparent text-gray-800 bg-white shadow-sm transition-shadow hover:shadow-md";
  const errorClass = "text-red-500 text-xs mt-1.5 flex items-center gap-1";
  const labelClass = "block font-semibold text-gray-700 mb-1.5 text-sm";

  return (
    <>
      {/* Actual form */}
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-white rounded-2xl shadow-xl border border-gray-100 p-5 sm:p-8 space-y-5"
        noValidate
      >
        {/* Full Name */}
        <div>
          <label className={labelClass} htmlFor="fullName">
            Full Name *
          </label>
          <input id="fullName" {...register("fullName")} className={inputClass} />
          {errors.fullName && <p className={errorClass}>{errors.fullName.message}</p>}
        </div>

        {/* Farm Name */}
        <div>
          <label className={labelClass} htmlFor="farmName">
            Farm Name *
          </label>
          <input id="farmName" {...register("farmName")} className={inputClass} />
          {errors.farmName && <p className={errorClass}>{errors.farmName.message}</p>}
        </div>

        {/* County */}
        <div>
          <label className={labelClass} htmlFor="county">
            County *
          </label>
          <select id="county" {...register("county")} className={inputClass}>
            <option value="">Select a county…</option>
            {OREGON_COUNTIES.map((c) => (
              <option key={c} value={c}>
                {c}
              </option>
            ))}
          </select>
          {errors.county && <p className={errorClass}>{errors.county.message}</p>}
        </div>

        {/* Acreage */}
        <div>
          <label className={labelClass} htmlFor="acreage">
            Acreage *
          </label>
          <input
            id="acreage"
            type="number"
            min={1}
            {...register("acreage", { valueAsNumber: true })}
            className={inputClass}
          />
          {errors.acreage && <p className={errorClass}>{errors.acreage.message}</p>}
        </div>

        {/* Phone */}
        <div>
          <label className={labelClass} htmlFor="phone">
            Phone *
          </label>
          <input id="phone" type="tel" {...register("phone")} className={inputClass} placeholder="(503) 555-0100" />
          {errors.phone && <p className={errorClass}>{errors.phone.message}</p>}
        </div>

        {/* Email */}
        <div>
          <label className={labelClass} htmlFor="email">
            Email *
          </label>
          <input id="email" type="email" {...register("email")} className={inputClass} />
          {errors.email && <p className={errorClass}>{errors.email.message}</p>}
        </div>

        {/* Services */}
        <div>
          <p className={labelClass}>Services Needed * (select all that apply)</p>
          <div className="space-y-2.5">
            {SERVICE_OPTIONS.map((svc) => (
              <label
                key={svc}
                className="flex items-center gap-3 text-gray-700 cursor-pointer group"
              >
                <input
                  type="checkbox"
                  value={svc}
                  {...register("services")}
                  className="w-4 h-4 accent-forest rounded cursor-pointer"
                />
                <span className="text-sm group-hover:text-forest transition-colors">
                  {svc}
                </span>
              </label>
            ))}
          </div>
          {errors.services && <p className={errorClass}>{errors.services.message}</p>}
        </div>

        {/* Timeframe */}
        <div>
          <label className={labelClass} htmlFor="timeframe">
            Desired Timeframe *
          </label>
          <select id="timeframe" {...register("timeframe")} className={inputClass}>
            <option value="">Select a timeframe…</option>
            {TIMEFRAME_OPTIONS.map((t) => (
              <option key={t} value={t}>
                {t}
              </option>
            ))}
          </select>
          {errors.timeframe && (
            <p className={errorClass}>{errors.timeframe.message}</p>
          )}
        </div>

        {/* Notes */}
        <div>
          <label className={labelClass} htmlFor="notes">
            Additional Notes (optional)
          </label>
          <textarea
            id="notes"
            {...register("notes")}
            rows={4}
            className={inputClass}
            placeholder="Anything else we should know about your operation or project…"
          />
        </div>

        {/* Submit error */}
        {submitError && (
          <p className="text-red-500 text-sm text-center">
            Something went wrong submitting your form. Please try again or call
            us directly at (503) 000-0000.
          </p>
        )}

        {/* Submit */}
        <button
          type="submit"
          disabled={submitting}
          className="w-full bg-forest text-white py-4 rounded-xl font-bold text-lg hover:bg-darkforest transition-all shadow-forest hover:-translate-y-0.5 disabled:opacity-60 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center gap-2"
        >
          {submitting ? (
            <>
              <svg
                className="animate-spin h-5 w-5 text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                />
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8v8H4z"
                />
              </svg>
              Submitting…
            </>
          ) : (
            "Submit Letter of Intent"
          )}
        </button>
      </form>
    </>
  );
}
