import styles from './DashboardGeneral.module.scss'

import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

// Redux
import { getProjects } from '../../slices/projectSlice'

import DashboardGraphic from '../DashboardGraphic';

import { AiOutlineFundProjectionScreen } from "react-icons/ai";
import { FaCode } from "react-icons/fa";
import { GiGears } from "react-icons/gi";
import { RiSearchEyeLine } from "react-icons/ri";

const DashboardGeneral = () => {
    const dispatch = useDispatch()

    const { projects, loading, error, message } = useSelector((state) => state.project)

    useEffect(() => {
        dispatch(getProjects())
    }, [])

    return (
        <>
            <div className={styles.mainNumberContainer}>
                <div className={styles.dataCard}>
                    <div className={styles.title}>
                        <p>Projetos publicados</p>
                        <div className={styles.icon}>
                            <AiOutlineFundProjectionScreen />
                        </div>
                    </div>
                    {loading && (
                        <div className='skeleton' style={{ marginTop: '10px' }}></div>
                    )}
                    {!loading && projects && (
                        <div className={styles.data}>{projects.length}</div>
                    )}
                </div>
                <div className={styles.dataCard}>
                    <div className={styles.title}>
                        <p>Linguagens aprendidas</p>
                        <div className={styles.icon}>
                            <FaCode />
                        </div>
                    </div>
                    <div className='skeleton' style={{ marginTop: '10px' }}></div>
                    {/* <div className={styles.data}>15</div> */}
                </div>
                <div className={styles.dataCard}>
                    <div className={styles.title}>
                        <p>Frameworks aprendidos</p>
                        <div className={styles.icon}>
                            <GiGears />
                        </div>
                    </div>
                    <div className='skeleton' style={{ marginTop: '10px' }}></div>
                    {/* <div className={styles.data}>5</div> */}
                </div>
                <div className={styles.dataCard}>
                    <div className={styles.title}>
                        <p>Acessos</p>
                        <div className={styles.icon}>
                            <RiSearchEyeLine />
                        </div>
                    </div>
                    <div className='skeleton' style={{ marginTop: '10px' }}></div>
                    {/* <div className={styles.data}>5</div> */}
                </div>
            </div>
            <div className={styles.graphicsContainer}>
                <div className={styles.mainGraphicsDivision}>
                    <div className={styles.graphic}>
                        <div className='skeleton' style={{ margin: '1em 2em', minHeight: '400px' }}></div>
                        {/* <DashboardGraphic graphicType="bar" /> */}
                    </div>
                    <div className={styles.graphic}>
                        <div className='skeleton' style={{ margin: '1em 2em', minHeight: '400px' }}></div>
                        {/* < DashboardGraphic graphicType="line" /> */}
                    </div>
                </div>
                <div className={styles.secondGraphicsDivision}></div>
            </div>
        </>
    )
}

export default DashboardGeneral