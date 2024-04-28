"use client";
import React, { useState } from "react";

export default function SubscriptionPlans() {
  const [billingInterval, setBillingInterval] = useState("month");

  // Subscription plans
  const subscriptionPlans = [
    {
      name: "Basic Plan",
      description: "Includes basic features",
      monthlyPrice: "$10",
      yearlyPrice: "$100",
    },
    {
      name: "Standard Plan",
      description:
        "Includes basic features, and additional support during working hours from Monday to Friday",
      monthlyPrice: "$20",
      yearlyPrice: "$200",
    },
    {
      name: "Premium Plan",
      description:
        "Includes all the features of the basic and standard plan along with 24/7 on-call support",
      monthlyPrice: "$30",
      yearlyPrice: "$300",
    },
  ];

  return (
    <section className="bg-purple-100 min-h-screen flex items-center justify-center">
      <div className="max-w-6xl mx-auto px-4">
        <h1 className="text-4xl font-extrabold text-center mb-8 sm:text-6xl">
          Pricing Plans
        </h1>
        <div className="flex justify-center mb-8">
          <button
            onClick={() => setBillingInterval("month")}
            className={`btn ${
              billingInterval === "month" ? "btn-active" : ""
            } mr-4`}
          >
            Monthly
          </button>
          <button
            onClick={() => setBillingInterval("year")}
            className={`btn ${billingInterval === "year" ? "btn-active" : ""}`}
          >
            Yearly
          </button>
        </div>
        <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {subscriptionPlans.map((plan, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg p-6 flex flex-col justify-between"
            >
              <div>
                <h2 className="text-xl font-semibold mb-2">{plan.name}</h2>
                <p className="text-gray-600 mb-4">{plan.description}</p>
                <p className="text-3xl font-bold text-gray-800">
                  {billingInterval === "month"
                    ? plan.monthlyPrice
                    : plan.yearlyPrice}
                </p>
              </div>
              <button className="btn btn-primary w-full mt-4">Subscribe</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
