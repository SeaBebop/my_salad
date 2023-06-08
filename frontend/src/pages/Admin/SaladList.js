import React, { useState, useEffect } from 'react';
import SaladItem from './SaladItem';
import FormWrapper from '../../components/common/FormWrapper';
import InputField from '../../components/common/InputField';
import OrangeButton from '../../components/common/OrangeButton';
import { api, API_BASE_URL } from '../../services/api';

import classes from './SaladList.module.css';

const SaladList = (props) => {
  const [salads, setSalads] = useState([]);
  const [saladName, setSaladName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [category, setCategory] = useState('fruit');
  const [image, setImage] = useState(null);
  const [errorMsg, setErrorMsg] = useState('');
  const [successMsg, setSuccessMsg] = useState('');

  useEffect(() => {
    const fetchSalads = async () => {
      try {
        const response = await api.get('api/salads');
        setSalads(response);
      } catch (error) {
        console.error('Failed to fetch salads:', error);
      }
    };

    fetchSalads();
  }, []);

  const handleSaladNameChange = (event) => {
    setSaladName(event.target.value);
  };

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };

  const handlePriceChange = (event) => {
    setPrice(event.target.value);
  };

  const handleCategoryChange = (event) => {
    setCategory(event.target.value);
  };

  const handleImageChange = (event) => {
    setImage(event.target.files[0]);
  };

  const handleAddSaladClick = async (event) => {
    event.preventDefault();

    try {
      const formData = new FormData();

      formData.append('name', saladName);
      formData.append('description', description);
      formData.append('price', price);
      formData.append('category', category);
      formData.append('image', image);

      const response = await api.post('api/salads', formData, localStorage.getItem('token'), 'multipart/form-data');

      console.log(response);

      if (response.errors) {
        throw new Error(response.message);
      } else if (response.code && response.code === 11000) {
        throw new Error(`Salad: ${saladName} already exist!`);
      }
      setErrorMsg('');
      setSuccessMsg('Salad has been successfully added :)');
      setSalads((prevSalads) => [...prevSalads, response]);
    } catch (error) {
      setErrorMsg(error.message);
      setSuccessMsg('');
      console.error(error);
    }
  };

  return (
    <div className={classes.saladList}>
      <div className={classes.saladListCont}>
        {salads.map((salad) => (
          <SaladItem
            key={salad._id}
            imgSrc={`${API_BASE_URL}/images/${salad.image}`}
            saladName={salad.name}
            description={salad.description}
            category={salad.category}
            price={salad.price}
          />
        ))}
      </div>
      <div className={classes.saladForms}>
        <FormWrapper encType="multipart/form-data">
          <label htmlFor="saladName">Salad Name</label>
          <InputField onChange={handleSaladNameChange} name="saladName" id="saladName" type="text" required />

          <label htmlFor="description">Salad Description</label>
          <InputField onChange={handleDescriptionChange} name="description" id="description" type="text" required />

          <label htmlFor="price">Salad Price</label>
          <InputField min="1" onChange={handlePriceChange} name="price" id="price" type="number" required />

          <label htmlFor="category">Salad category</label>
          <select value="fruit" onChange={handleCategoryChange} id="category" name="category" required>
            <option value="fruit">Fruit</option>
            <option value="vegetable">Vegetable</option>
            <option value="protein">Protein</option>
          </select>

          <label htmlFor="image">Upload Image</label>
          <InputField onChange={handleImageChange} type="file" id="image" name="image" accept="image/*" required />

          {errorMsg ? <p style={{ color: 'red', width: '100%' }}>{errorMsg}</p> : ''}
          {successMsg ? <p style={{ color: 'var(--green)', width: '100%' }}>{successMsg}</p> : ''}

          <OrangeButton style={{ marginTop: '2rem' }} onClick={handleAddSaladClick} type="submit">
            Add Salad
          </OrangeButton>
        </FormWrapper>
      </div>
    </div>
  );
};

export default SaladList;
