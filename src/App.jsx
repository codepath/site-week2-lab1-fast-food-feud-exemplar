import * as React from "react"
import Header from "./components/Header/Header"
import Instructions from "./components/Instructions/Instructions"
import Chip from "./components/Chip/Chip"
import NutritionalLabel from "./components/NutritionalLabel/NutritionalLabel"
import { Dataset } from "./data/dataset"
import "./App.css"

// don't move this!
export const appInfo = {
  title: `Fast Food Feud 🍔!`,
  tagline: `Folks' Favorite Friendly Fuel Finder For Food Facts`,
  description: `Finding healthy food is hard. Sometimes we just settle for what's available. That doesn't mean we shouldn't know what's going into our bodies! Fast Food Feud is here to arm the public with all the nutritional facts needed to make informed decisions about fast food consumption.`,
  dataSource: `All data pulled from the MenuStat.org interactive online database.`,
  instructions: {
    start: `Start by clicking on a food category on the left and a fast food joint from the list above. Afterwards, you'll be able to choose from a list of menu items and see their nutritional content.`,
    onlyCategory: `Now select a fast food restaurant from the list above!`,
    onlyRestaurant: `Now select a category from the list on the left!`,
    noSelectedItem: `Almost there! Choose a menu item and you'll have the fast food facts right at your fingertips!`,
    allSelected: `Great choice! Amazing what a little knowledge can do!`,
  },
}

export function App() {
  const { data, categories, restaurants } = Dataset.createDataSet()
  const [selectedCategory, setSelectedCategory] = React.useState(null)
  const [selectedRestaurant, setSelectedRestaurant] = React.useState(null)
  const [selectedItem, setSelectedItem] = React.useState(null)

  const selectCategory = (category) => {
    setSelectedItem(null)
    setSelectedCategory(category)
  }

  const selectRestaurant = (restaurant) => {
    setSelectedItem(null)
    setSelectedRestaurant(restaurant)
  }

  const currentMenuItems = data.filter((item) => {
    return item.food_category === selectedCategory && item.restaurant === selectedRestaurant
  })

  return (
    <main className="App">
      {/* CATEGORIES COLUMN */}
      <div className="CategoriesColumn col">
        <div className="categories options">
          <h2 className="title">Categories</h2>
          {categories.map((category) => {
            return (
              <Chip
                key={category}
                label={category}
                onClick={() => selectCategory(category)}
                isActive={selectedCategory === category}
              />
            )
          })}
        </div>
      </div>

      {/* MAIN COLUMN */}
      <div className="container">
        {/* HEADER */}
        <Header
          title={appInfo.title}
          tagline={appInfo.tagline}
          description={appInfo.description}
          dataSource={appInfo.dataSource}
        />

        {/* RESTAURANTS ROW */}
        <div className="RestaurantsRow">
          <h2 className="title">Restaurants</h2>
          <div className="restaurants options">
            {restaurants.map((restaurant) => {
              return (
                <Chip
                  key={restaurant}
                  label={restaurant}
                  onClick={() => selectRestaurant(restaurant)}
                  isActive={selectedRestaurant === restaurant}
                />
              )
            })}
          </div>
        </div>

        {/* INSTRUCTIONS */}
        <Instructions instructions={appInfo.instructions.start} />

        {/* MENU DISPLAY */}
        <div className="MenuDisplay display">
          {/* MENU ITEM BUTTONS */}
          <div className="MenuItemButtons menu-items">
            <h2 className="title">Menu Items</h2>
            {currentMenuItems.map((item, i) => (
              <Chip
                key={`${item.item_name}-${i}`}
                label={item.item_name}
                onClick={() => setSelectedItem(item)}
                isActive={selectedItem && selectedItem.item_name === item.item_name}
              />
            ))}
          </div>

          {/* NUTRITION FACTS */}
          <div className="NutritionFacts nutrition-facts">
            {selectedItem ? <NutritionalLabel item={selectedItem} /> : null}
          </div>
        </div>

        <div className="data-sources">
          <p>{appInfo.dataSource}</p>
        </div>
      </div>
    </main>
  )
}

export default App
