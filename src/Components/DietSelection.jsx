import React, { useState, useEffect } from "react";

const DietSelection = ({ onDietSelected }) => {
  const [selectedOptions, setSelectedOptions] = useState([]);

  const dietOptions = [
    { name: "Recommended", description: "" },
    { name: "Popular", description: "" },
    { name: "Vegan", description: "Only eat plant-based food" },
    { name: "Vegetarian", description: "Don’t eat meat and fish" },
    { name: "Flexitarian", description: "Occasionally eats meat and fish" },
    { name: "Pescetarian", description: "Don’t eat meat but eats fish" },
    { name: "Omnivore", description: "Eats meat and almost everything" },
    { name: "Lactose-free", description: "Don't eat Cheese, Cream and Milk" },
    { name: "Classic", description: "Tomato soup, Beaf stew, Chicken noodles soup" },
    { name: "Keto", description: "Eat Vegetables, Avocados, Seafood" },
    { name: "LowCarbs", description: "Eat Whole eggs, Nuts, Strawberries" },
  ];

  const handleOptionSelect = (optionName) => {
    const newSelectedOptions = selectedOptions.includes(optionName)
      ? selectedOptions.filter(item => item !== optionName)
      : [...selectedOptions, optionName];
    
    setSelectedOptions(newSelectedOptions);
    onDietSelected(newSelectedOptions.length > 0); 
  };

  useEffect(() => {
  }, [selectedOptions]);

  return (
    <div className="min-h-screen w-screen px-4 flex flex-col justify-center lg:items-center">
      <h2 className="mb-4 mt-10 text-2xl font-bold text-left lg:text-center">
        What are your dietary preferences?
      </h2>
      <div className="flex flex-col gap-4 mb-10 w-full max-w-md">
        {dietOptions.map((option) => (
          <div
            key={option.name}
            className={`flex items-start border border-gray-100 rounded-md lg:border-2`}
            style={{ backgroundColor: selectedOptions.includes(option.name) ? "#BFDBFE" : "" }}
          >
            <label className="flex items-center w-full gap-2">
              <button
                onClick={() => handleOptionSelect(option.name)}
                className={`py-3 px-4 w-full text-left`}
                style={{ backgroundColor: selectedOptions.includes(option.name) ? "#BFDBFE" : "" }}
              >
                <div>
                  <span className="font-bold">{option.name}</span>
                  <p className="text-sm">{option.description}</p>
                </div>
              </button>
              <input
                type="checkbox"
                onChange={() => handleOptionSelect(option.name)}
                checked={selectedOptions.includes(option.name)}
                id={`checkbox-${option.name}`}
                className="custom-checkbox mr-3"
              />
            </label>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DietSelection;
