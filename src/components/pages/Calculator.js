import React, { useState, useEffect } from "react";

const Calculator = () => {
  const [weight, setWeight] = useState("");
  const [purity, setPurity] = useState("24");
  const [months, setMonths] = useState("12");
  const [goldPrice24K, setGoldPrice24K] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // 🔑 इथे तुझी API KEY टाक
  const API_KEY = "goldapi-gegk3219mkz7j2ae-io";

  useEffect(() => {
    const fetchGoldPrice = async () => {
      try {
        setLoading(true);
        const res = await fetch("https://www.goldapi.io/api/XAU/INR", {
          headers: {
            "x-access-token": API_KEY,
            "Content-Type": "application/json",
          },
        });

        if (!res.ok) throw new Error("Failed to fetch gold price");

        const data = await res.json();

        // GoldAPI price = per ounce → gram मध्ये convert
        const pricePerGram = data.price / 31.1035;
        setGoldPrice24K(pricePerGram.toFixed(2));
        setError("");
      } catch (err) {
        setError("Unable to fetch live gold price");
      } finally {
        setLoading(false);
      }
    };

    fetchGoldPrice();
  }, []);

  const purityFactor = {
    24: 1,
    22: 0.916,
    18: 0.75,
    14: 0.585,
    12: 0.5,
  };

  const pricePerGram =
    goldPrice24K ? goldPrice24K * purityFactor[purity] : 0;

  const totalPrice = weight
    ? (weight * pricePerGram).toFixed(2)
    : 0;

  // EMI Calculation (assuming 10% annual interest rate)
  const monthlyInterestRate = 0.10 / 12;
  const emi = totalPrice && months
    ? (totalPrice * monthlyInterestRate * Math.pow(1 + monthlyInterestRate, months)) / 
      (Math.pow(1 + monthlyInterestRate, months) - 1)
    : 0;

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 to-amber-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md border border-amber-100">

        {/* Header */}
        <div className="bg-gradient-to-r from-yellow-500 to-amber-600 p-6">
          <h1 className="text-3xl font-bold text-white text-center">
            🪙 Gold Loan Calculator
          </h1>
          <p className="text-yellow-100 text-center mt-2">
            Calculate your gold loan EMI
          </p>
        </div>

        <div className="p-6">

          {/* Gold Entry Heading */}
          <h2 className="text-xl font-semibold text-gray-800 mb-4">
            Enter Your Gold Details
          </h2>

          {/* Weight */}
          <input
            type="number"
            placeholder="Weight in grams"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
            className="w-full mb-4 px-4 py-3 border-2 rounded-lg"
          />

          {/* Purity */}
          <select
            value={purity}
            onChange={(e) => setPurity(e.target.value)}
            className="w-full mb-4 px-4 py-3 border-2 rounded-lg"
          >
            <option value="24">24K</option>
            <option value="22">22K</option>
            <option value="18">18K</option>
            <option value="14">14K</option>
            <option value="12">12K</option>
          </select>

          {/* Months Selection */}
          <h3 className="text-lg font-medium text-gray-700 mb-2">
            Select Loan Duration
          </h3>
          <select
            value={months}
            onChange={(e) => setMonths(e.target.value)}
            className="w-full mb-6 px-4 py-3 border-2 rounded-lg"
          >
            <option value="6">6 Months</option>
            <option value="12">12 Months</option>
            <option value="18">18 Months</option>
            <option value="24">24 Months</option>
            <option value="30">30 Months</option>
            <option value="36">36 Months</option>
          </select>

          {/* Price Box */}
          <div className="bg-yellow-50 p-4 rounded-lg mb-6">
            {loading && <p>⏳ Fetching live gold price...</p>}
            {error && <p className="text-red-600">{error}</p>}

            {!loading && !error && (
              <>
                <p className="text-sm">24K Gold Price</p>
                <p className="text-2xl font-bold">
                  ₹{Number(goldPrice24K).toLocaleString("en-IN")} / gram
                </p>
                <p className="text-sm mt-2">
                  {purity}K Price: ₹{pricePerGram.toFixed(2)} / gram
                </p>
              </>
            )}
          </div>

          {/* EMI and Eligibility Results */}
          {totalPrice > 0 && (
            <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-6 rounded-lg border border-green-200">
              <h3 className="text-lg font-semibold text-green-800 mb-4">
                कर्जासाठी तुम्ही पात्र आहात ✅
              </h3>
              
              <div className="mb-4">
                <p className="text-sm text-gray-600">कर्जाची रक्कम:</p>
                <p className="text-2xl font-bold text-green-700">
                  ₹ {Number(totalPrice).toLocaleString("en-IN")}
                </p>
              </div>

              <div className="mb-4">
                <p className="text-sm text-gray-600">तुमचा मासिक EMI आहे:</p>
                <p className="text-3xl font-bold text-amber-600">
                  ₹ {Number(emi.toFixed(2)).toLocaleString("en-IN")}
                </p>
                <p className="text-xs text-gray-500 mt-1">
                  {months} महिन्यांसाठी @ 10% वार्षिक व्याज
                </p>
              </div>

              <div className="text-center">
                <p className="text-sm text-green-700 font-medium">
                  🎉 तुमचे कर्ज मंजूर होण्यास तयार आहे!
                </p>
              </div>
            </div>
          )}

          {/* Total Gold Value (Secondary Info) */}
          {totalPrice > 0 && (
            <div className="mt-4 text-center">
              <p className="text-sm text-gray-500">Total Gold Value</p>
              <p className="text-xl font-semibold text-gray-700">
                ₹{Number(totalPrice).toLocaleString("en-IN")}
              </p>
            </div>
          )}

        </div>
      </div>
    </div>
  );
};

export default Calculator;
