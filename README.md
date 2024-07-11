# ecommerce-store-ui

This project is a React eCommerce application that allows users to browse products, view detailed product information, and manage their shopping cart. Users can add and remove items from the cart and proceed through a simplified checkout process. The products data is provided by Fakestore API.

## Technologies Used

- [Vite](https://vitejs.dev/): Fast, opinionated web dev build tool
- [React](https://react.dev/): A JavaScript library for building user interfaces
- [TypeScript](https://www.typescriptlang.org/): Typed superset of JavaScript
- [Tailwind CSS](https://tailwindcss.com/): A utility-first CSS framework for rapid UI development
- [React Router](https://reactrouter.com/): Declarative routing for React applications
- [React Icons](https://react-icons.github.io/react-icons/): Include popular icons in your React projects
- [Embla Carousel](https://www.embla-carousel.com/): Library for creating carousels
- [MobX](https://mobx.js.org/README.html): Simple, scalable state management
- [clsx](https://www.npmjs.com/package/clsx): Utility package for constructing className strings conditionally.
- [Fakestore API](https://fakestoreapi.com/docs): Open API provides product information.

## Features

- View Products: Users can view all available products.
- Detailed Product Info: Each product has a detailed information page.
- Add/Remove Products from Cart: Users can add or remove products from their cart.
- Minimal Cart Summary: Sidebar displays a minimal cart summary.
- Update Cart Quantities: Users can increase or decrease product quantities directly in the cart page.
- Apply Discount Code: Users can apply discount codes during the checkout process to receive a discount on their total purchase.
- Persistent Cart: Cart items are persisted in local storage, ensuring the cart state is maintained across page refreshes and navigation.
- Featured Products Slider: A product slider showcases featured products.

## Project Outcomes

- Comprehensive Cart System: Implemented cart system allowing users to add, remove, and update quantities of products.
- Persistent Cart State: Utilized local storage to persist cart items across page refreshes and navigation, enhancing user experience.
- Responsive User Interface: Ensured the application is fully responsive across various devices.
- Product Details Page: Product details page which showcases product information such as description, title and price.
- Featured Products Slider: Learned to implement scrollable and responsive carousel which displays product items with navigation buttons.
- MobX Integration: Integrated MobX for efficient state management to store, persist and modify changes to the cart and UI.
- Discount Functionality: Added a discount code feature during the checkout process, allowing users to receive a percentage off their total purchase.

## Project Setup

This project was bootstrapped with [Vite](https://vitejs.dev/guide/)

To get started you need to:

- Clone the project
- Install listed dependencies
- Run available scripts

### Install dependencies

```
yarn install
```

### Run React dev server (http://localhost:3000)

```
yarn dev
```

### To build for production

```
yarn build
```

### Deployment

To deploy this project run

```
yarn run deploy
```
