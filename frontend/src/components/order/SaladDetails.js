import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { api, API_BASE_URL } from '../../services/api';
import OrangeButton from '../common/OrangeButton';
import OrangeLinkBtn from '../common/OrangeLinkBtn';

import classes from './SaladDetails.module.css';

function SaladDetails() {
  const [salad, setSalad] = useState({});
  const [errorMsg, setErrorMsg] = useState(false);
  const [saladDescription, setSaladDescription] = useState([]);

  const { saladId } = useParams();

  useEffect(() => {
    const fetchSalad = async () => {
      try {
        const salad = await api.get(`api/salads/find/${saladId}`);

        if (!salad) {
          throw new Error('Something went wrong');
        }

        setSalad(salad);
        setSaladDescription(salad.description.split('#'));
      } catch (error) {
        setErrorMsg(true);
        console.error(error);
      }
    };

    fetchSalad();
  }, [saladId]);

  return (
    <div className="row">
      <OrangeLinkBtn className={classes.OrangeLinkBtn} btnHref="/order">
        <ion-icon name="arrow-back-outline"></ion-icon>
      </OrangeLinkBtn>
      <div className={`${classes.SaladDetails} row`}>
        <div className={`${classes.imgCont} ${classes.flexItem}`}>
          <img src={`${API_BASE_URL}/images/${salad.image}`} alt={salad.name} />
        </div>
        <div className={`${classes.infoCont} ${classes.flexItem}`}>
          <h1>{salad.name}</h1>
          <h2>{salad.category}</h2>
          <p>{saladDescription[0]}</p>
          <p>
            <b>Salad ingredients:</b> <br />
            {saladDescription[1]}
          </p>
          <h2>{salad.price}$</h2>
          <OrangeButton>Add to Cart</OrangeButton>
        </div>
        {errorMsg ? <h2 style={{ color: 'red' }}>Something went wrong :(</h2> : ''}
      </div>
    </div>
  );
}

export default SaladDetails;
