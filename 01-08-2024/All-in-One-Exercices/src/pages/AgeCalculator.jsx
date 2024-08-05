import React, { useState } from "react";
import { useSpring, animated } from "@react-spring/web";
import arrowSvg from "/public/Exercises/age-calculator-app-main/assets/images/icon-arrow.svg";

const AgeCalculator = () => {
  const [day, setDay] = useState("");
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");
  const [age, setAge] = useState({ years: "--", months: "--", days: "--" });
  const [errors, setErrors] = useState({ day: "", month: "", year: "" });

  const validateDate = (day, month, year) => {
    const today = new Date();
    const birthDate = new Date(year, month - 1, day);
    const newErrors = { day: "", month: "", year: "" };

    if (!day || day < 1 || day > 31) {
      newErrors.day = "Must be a valid day";
    }

    if (!month || month < 1 || month > 12) {
      newErrors.month = "Must be a valid month";
    }

    if (!year || year > today.getFullYear()) {
      newErrors.year = "Must be in the past";
    }

    if (
      birthDate > today ||
      birthDate.getDate() !== parseInt(day) ||
      birthDate.getMonth() !== month - 1 ||
      birthDate.getFullYear() !== parseInt(year)
    ) {
      if (!newErrors.day) newErrors.day = "Must be a valid date";
    }

    return newErrors;
  };

  const calculateAge = (e) => {
    e.preventDefault();
    setErrors({ day: "", month: "", year: "" });

    const newErrors = validateDate(day, month, year);
    if (newErrors.day || newErrors.month || newErrors.year) {
      setErrors(newErrors);
      return;
    }

    const birthDate = new Date(year, month - 1, day);
    const today = new Date();
    let ageYears = today.getFullYear() - birthDate.getFullYear();
    let ageMonths = today.getMonth() - birthDate.getMonth();
    let ageDays = today.getDate() - birthDate.getDate();

    if (ageDays < 0) {
      ageMonths -= 1;
      ageDays += new Date(today.getFullYear(), today.getMonth(), 0).getDate();
    }

    if (ageMonths < 0) {
      ageYears -= 1;
      ageMonths += 12;
    }

    setAge({
      years: ageYears < 0 ? "--" : ageYears,
      months: ageMonths < 0 ? "--" : ageMonths,
      days: ageDays < 0 ? "--" : ageDays,
    });
  };

  const ageAnimation = useSpring({
    years: age.years !== "--" ? age.years : 0,
    months: age.months !== "--" ? age.months : 0,
    days: age.days !== "--" ? age.days : 0,
    from: { years: 0, months: 0, days: 0 },
  });

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-off-white p-4">
      <form
        onSubmit={calculateAge}
        className="bg-white rounded-lg shadow-md p-8 md:p-16 text-center max-w-lg w-full relative"
      >
        <div className="absolute top-[-30px] right-[-30px] p-2 bg-purple rounded-full">
          <img src={arrowSvg} alt="arrow" />
        </div>
        <div className="mt-10 text-center flex items-center justify-center gap-6">
          <div>
            <label className="block text-smokey-grey uppercase tracking-widest">
              Day
            </label>
            <input
              type="number"
              value={day}
              onChange={(e) => setDay(e.target.value)}
              className={`w-20 p-2 text-2xl border-2 rounded-lg focus:outline-none ${
                errors.day
                  ? "border-red"
                  : "border-light-grey focus:border-purple"
              }`}
              placeholder="DD"
              required
            />
            {errors.day && <div className="text-red text-xs">{errors.day}</div>}
          </div>
          <div>
            <label className="block text-smokey-grey uppercase tracking-widest">
              Month
            </label>
            <input
              type="number"
              value={month}
              onChange={(e) => setMonth(e.target.value)}
              className={`w-20 p-2 text-2xl border-2 rounded-lg focus:outline-none ${
                errors.month
                  ? "border-red"
                  : "border-light-grey focus:border-purple"
              }`}
              placeholder="MM"
              required
            />
            {errors.month && (
              <div className="text-red text-xs">{errors.month}</div>
            )}
          </div>
          <div>
            <label className="block text-smokey-grey uppercase tracking-widest">
              Year
            </label>
            <input
              type="number"
              value={year}
              onChange={(e) => setYear(e.target.value)}
              className={`w-28 p-2 text-2xl border-2 rounded-lg focus:outline-none ${
                errors.year
                  ? "border-red"
                  : "border-light-grey focus:border-purple"
              }`}
              placeholder="YYYY"
              required
            />
            {errors.year && (
              <div className="text-red text-xs">{errors.year}</div>
            )}
          </div>
        </div>
        <button
          type="submit"
          className="mt-4 px-6 py-2 bg-purple text-white text-xl font-semibold rounded-full hover:bg-purple-dark transition-all duration-300"
        >
          Calculate
        </button>
      </form>
      <div className="mt-10 text-center flex items-center justify-center gap-4">
        <animated.div className="text-5xl font-extrabold text-purple">
          {age.years === "--"
            ? "--"
            : ageAnimation.years.to((val) => Math.floor(val))}
        </animated.div>
        <div className="text-2xl font-bold">years</div>
        <animated.div className="text-5xl font-extrabold text-purple">
          {age.months === "--"
            ? "--"
            : ageAnimation.months.to((val) => Math.floor(val))}
        </animated.div>
        <div className="text-2xl font-bold">months</div>
        <animated.div className="text-5xl font-extrabold text-purple">
          {age.days === "--"
            ? "--"
            : ageAnimation.days.to((val) => Math.floor(val))}
        </animated.div>
        <div className="text-2xl font-bold">days</div>
      </div>
    </div>
  );
};

export default AgeCalculator;
