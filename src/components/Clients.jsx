import React from 'react';
import {clients} from '../constants';
import styles from '../style';

const Clients = () => (
  <section className={`${styles.flexCenter} my-4`} >
    <div className={`${styles.flexCenter} flex-wrap w-full my-10`}>
      {clients.map((client) => (
        <div key={client.id} className={`flex-1 ${styles.flexCenter} sm:min-w-[192px] w-[130px]`}>
          <img src={client.logo} alt="client" className='sm:w-[162px] w-[90px] object-contain' />
        </div>
      ))}
    </div>
  </section>
)

export default Clients
