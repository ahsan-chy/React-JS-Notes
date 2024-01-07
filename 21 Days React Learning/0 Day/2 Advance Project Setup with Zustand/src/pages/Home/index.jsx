<<<<<<< HEAD
import React from 'react';
import styles from './home.module.css';
import { Button, Inputs, Modal, ToolTip } from '@/components';
import { useStore } from '@/store/zustand';

const index = () => {
  // useStore(state => console.log('count current', state.count));
  const count = useStore(state=> state.count)
  const increaseCount = useStore(state=> state.increaseCount)
  const decreaseCount = useStore(state=> state.decreaseCount)
  const resetCount = useStore(state=> state.resetCount)


  return (
    <div className={styles.root}>
      <button onClick={decreaseCount}>Dec-</button>
      <h3>{count}</h3>
      <button onClick={increaseCount}>inc+</button>
      <br />
    </div>
  );
};

export default index;
=======
import React from 'react';
import styles from './home.module.css';
import { Button, Inputs, Modal, ToolTip } from '@/components';
import { useStore } from '@/store/zustand';

const index = () => {
  // useStore(state => console.log('count current', state.count));
  const count = useStore(state=> state.count)
  const increaseCount = useStore(state=> state.increaseCount)
  const decreaseCount = useStore(state=> state.decreaseCount)
  const resetCount = useStore(state=> state.resetCount)


  return (
    <div className={styles.root}>
      <button onClick={decreaseCount}>Dec-</button>
      <h3>{count}</h3>
      <button onClick={increaseCount}>inc+</button>
      <br />
    </div>
  );
};

export default index;
>>>>>>> 78ef44e09afa2a867a52a71d0ba124618848776f
