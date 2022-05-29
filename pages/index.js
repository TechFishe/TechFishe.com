//Copyright (c) TechFishe 2022
import Image from 'next/image';

import styles from '../styles/Home-Page/Home.module.css'
import Flag from '../public/Bi-Flag.png';

export default function Home(){
    return(
        <>
        <div className={styles.Top}>
            <h1>Hello World!</h1>
            <Image src={Flag} alt='Flag'></Image>
        </div>
        {/* <div className={styles.Dropdown}>
            <button className={styles.DropdownButton}>Main Menu</button>
            <div id={styles.MainDropdown} className={styles.DropdownContent}>
                <a href='#'>1</a>
                <a href='#'>2</a>       
                <a href='#'>3</a>
            </div>
        </div> */}
        </>
    )
}