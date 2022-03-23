import * as React from 'react';
import './NutritionalLabel.css';

const nutritionFacts = [
  { id: 1, label: 'Description', attribute: 'item_description' },
  { id: 2, label: 'Calories', attribute: 'calories' },
  { id: 3, label: 'Cholesterol', attribute: 'cholesterol' },
  { id: 4, label: 'Fiber', attribute: 'fiber' },
  { id: 5, label: 'Sodium', attribute: 'sodium' },
  { id: 6, label: 'Sugar', attribute: 'sugar' },
  { id: 7, label: 'Total Fat', attribute: 'total_fat' },
  { id: 8, label: 'Saturated Fat', attribute: 'saturated_fat' },
  { id: 9, label: 'Trans Fat', attribute: 'trans_fat' },
];

function NutritionalLabel({ item = {} }) {
  return (
    <div className="nutritional-label">
      <h3 className="title">Nutrition Facts</h3>
      {/* <h4 className="item-name">{`CHANGE_ME`}</h4> */}
      <h4 className="item-name">{item.item_name}</h4>

      <ul className="fact-list">
        {nutritionFacts.map((fact) => {
          return (
            <li className="nutrition-fact" key={fact.id}>
              <p>
                {fact.label} <span>{item[fact.attribute]}</span>
              </p>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default NutritionalLabel;
