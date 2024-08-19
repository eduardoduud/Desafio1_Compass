# Clothes E-Commerce

This project is a simple yet functional clothes e-commerce platform built using the **MVC architecture**. The project is developed using only **pure HTML**, **JavaScript**, and **CSS**, without relying on any external libraries or frameworks. It aims to showcase a clean and maintainable codebase that adheres to the principles of separation of concerns.

## Project Structure

The project follows the **MVC (Model-View-Controller)** design pattern, which organizes the codebase into three interconnected components:

1. **Model**: Handles the data structure and business logic. Manages the list of products, prices, and any operations related to fetching or updating product information.
2. **View**: Responsible for rendering the UI components, including product cards, modals, headers, footers, and interactive elements like the search bar. It handles the presentation logic and listens to user interface events.
3. **Controller**: Acts as the intermediary between the Model and the View. It processes user input, updates the Model, and instructs the View to reflect those changes on the UI.

## Features

- **Product Display**: Dinamically showcases a variety of clothing items, including their details such as name, price, rating, and discounted prices.
- **Responsive Design**: Fully responsive layout adapting to three screen sizes, including mobile devices.
- **Interactive UI**: Users can interact with various UI components, such as adding items to the cart, searching for products, and browsing different product categories.
- **Carousel for Customer Feedback**: Displays multiple customer feedback cards in a dynamic carousel, navigable using buttons.
- **Modal Windows**: Opens detailed product information in a modal, improving the shopping experience.

## How It Works

- **Product List**: The list of products is managed by the **Model**, which stores all product data.
- **Rendering Products**: The **View** listens for product updates and dynamically generates HTML for the product cards based on the data from the Model. It also binds event listeners to interactive elements, such as buttons and search fields.
- **User Interaction**: The **Controller** listens for user actions like clicking on products or searching for items. It communicates with the Model to fetch the necessary data and instructs the View to update accordingly.

## Good Practices

- **Separation of Concerns**: Separates HTML, CSS, and JavaScript into different files, making it easier to maintain and update.
- **Modular Architecture**: Separate files for different components and functionality.
- **Consistent Name Convention**: Camel Case for files and variables, making it easier to read and understand the code.
