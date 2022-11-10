import React, { useState } from 'react';
import './App.scss';
import { ProductWithCategory } from './types/ProductWithCategory';
import { ProductTable } from './components/ProductTable';

import productsFromServer from './api/products';
import categoriesFromServer from './api/categories';
import { AddProductForm } from './components/AddProductForm';

const findCategoryById = (categoryId: number) => {
  const foundCategory = categoriesFromServer.find(category => (
    category.id === categoryId
  ));

  return foundCategory || null;
};

const productsWithCategories: ProductWithCategory[] = productsFromServer.map(
  (product) => ({
    ...product,
    category: findCategoryById(product.categoryId),
  }),
);

export const App: React.FC = () => {
const [productList, setProductList] = useState(productsWithCategories)
const [selectCategory, setSelectCategory] = useState('Grocery');
const [qwery, setQwery] = useState('');

const handleSabmit = () => {
const newCategory = categoriesFromServer.find(
  category => category.title === selectCategory
  );
  const maxId = productsFromServer.sort((a, b) => b.id - a.id)[0].id;
const newProduct = {
  id: maxId + 1,
  name: qwery,
  category: newCategory,
  categoryId: newCategory.id
}

setProductList(current => [...current, newProduct])
}

  return (
    <div className="section">
      <div className="container">
        <h1 className="title">Product Categories</h1>

        {/* <form className="form">
          <div className="field">
            <div className="control">
              <input
                className="input"
                type="text"
                placeholder="product name"
              />
            </div>
          </div>

          <div className="field">
            <div className="control">
              <div className="select">
                <select>
                  <option>Grocery</option>
                  <option>Drinks</option>
                  <option>Fruits</option>
                  <option>Electronics</option>
                  <option>Clothes</option>
                </select>
              </div>
            </div>
          </div>

          <div className="field is-grouped">
            <div className="control">
              <button
                type="submit"
                className="button is-link"
              >
                Submit
              </button>
            </div>
          </div>
        </form> */}
        <AddProductForm
          qwery={qwery}
          setQwery={setQwery}
          selectCategory={selectCategory}
          setSelectCategory={setSelectCategory}
        />

        {/* <table
          className="table is-striped is-narrow is-fullwidth"
        >
          <thead>
            <tr>
              <th>
                <span className="is-flex is-flex-wrap-nowrap">
                  ID
                </span>
              </th>

              <th>
                <span className="is-flex is-flex-wrap-nowrap">
                  Product
                </span>
              </th>

              <th>
                <span className="is-flex is-flex-wrap-nowrap">
                  Category
                </span>
              </th>
            </tr>
          </thead>

          <tbody>
            {productsWithCategories.map(product => (
              <tr key={product.id}>
                <td className="has-text-weight-bold">
                  {product.id}
                </td>
                <td>{product.name}</td>

                {product.category?.title && (
                  <td>{product.category?.title}</td>
                )}
              </tr>
            ))}
          </tbody>
        </table> */}
        <ProductTable productsWithCategories={productList} />
      </div>
    </div>
  );
};
