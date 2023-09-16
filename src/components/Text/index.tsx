import React from 'react'
import styles from './Text.module.css'
interface Props {
    content: string;
}

const Text = (text: Props) => {
    
    return (
        <p   className={styles.text}>{text.content}</p>
      )
}

export default Text