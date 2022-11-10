import React from "react";

type Props= {
  qwery:string
  setQwery: React.Dispatch<React.SetStateAction<string>>
  selectCategory: string,
  setSelectCategory: React.Dispatch<React.SetStateAction<string>>
}

export const AddProductForm:React.FC<Props> = ({
  qwery,
  setQwery,
  selectCategory,
  setSelectCategory,
}) => {
  return (
    <form className="form">
    <div className="field">
      <div className="control">
        <input
          className="input"
          type="text"
          placeholder="product name"
          value={qwery}
          onChange={event => setQwery(event.target.value)}
        />
      </div>
    </div>

    <div className="field">
      <div className="control">
        <div className="select">
          <select
           value={selectCategory}
           onChange={event => setSelectCategory(event.target.value)}
          >
            <option value={'Grocery'} >Grocery</option>
            <option value={'Drinks'}>Drinks</option>
            <option value={'Fruits'}>Fruits</option>
            <option value={'Electronics'}>Electronics</option>
            <option value={'Clothes'}>Clothes</option>
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
  </form>
  )
};
