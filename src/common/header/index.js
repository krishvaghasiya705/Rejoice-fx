import React, { useState } from 'react';
import styles from "./Header.module.scss";
import Headericon from "@/assets/svg/mainlogo.svg";
import Dropdownicon from "@/assets/svg/dropdownicon.svg";
import Image from 'next/image';
import Link from 'next/link';
import Rightarrow from '@/assets/svg/rightarrow';

export default function Header() {
    const [activeDropdown, setActiveDropdown] = useState(null);

    const handleMouseEnter = (dropdown) => {
        setActiveDropdown(dropdown);
    };

    const handleMouseLeave = () => {
        setActiveDropdown(null);
    };

    return (
        <header className={styles.headermain}>
            <div className="container">
                <div className={styles.headermainalignment}>
                    <div className={styles.headerlogo}>
                        <Link href={"/"}>
                            <Image src={Headericon} alt="Headericon" width={48} height={48} />
                            <span>Rejoice FX</span>
                        </Link>
                    </div>
                    <div className={styles.headeralllinks}>
                        <div className={styles.linkContainer}>
                            <Link href={"/"}>Forex CRM</Link>
                        </div>

                        <div
                            onMouseEnter={() => handleMouseEnter('forexLicenses')}
                            onMouseLeave={handleMouseLeave}
                            className={styles.linkContainer}
                        >
                            <Link href={"/"}>
                                Forex Licenses <Image src={Dropdownicon} alt="Dropdownicon" width={16} height={8} />
                            </Link>
                            {activeDropdown === 'forexLicenses' && (
                                <div className={styles.headerdropdownmain}>
                                    <div className="container">
                                        <div className={styles.dropdownflexmain}>
                                            <div className={styles.dropdownbox}>
                                                <h3>AI bot development</h3>
                                                <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                                                <Link href={"/"}>See Solution <Rightarrow /></Link>
                                            </div>
                                            <div className={styles.dropdownbox}>
                                                <h3>Strategies</h3>
                                                <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                                                <Link href={"/"}>See Solution <Rightarrow /></Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>

                        <div
                            onMouseEnter={() => handleMouseEnter('algoBot')}
                            onMouseLeave={handleMouseLeave}
                            className={styles.linkContainer}
                        >
                            <Link href={"/"}>
                                Algo Bot & Strategies <Image src={Dropdownicon} alt="Dropdownicon" width={16} height={8} />
                            </Link>
                            {activeDropdown === 'algoBot' && (
                                <div className={styles.headerdropdownmain}>
                                    <div className="container">
                                        <div className={styles.dropdownflexmain}>
                                            <div className={styles.dropdownbox}>
                                                <h3>AI Web/ Mobile Development</h3>
                                                <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                                                <Link href={"/"}>See Solution <Rightarrow /></Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>

                        <div
                            onMouseEnter={() => handleMouseEnter('forexServices')}
                            onMouseLeave={handleMouseLeave}
                            className={styles.linkContainer}
                        >
                            <Link href={"/"}>
                                Forex Services <Image src={Dropdownicon} alt="Dropdownicon" width={16} height={8} />
                            </Link>
                            {activeDropdown === 'forexServices' && (
                                <div className={styles.headerdropdownmain}>
                                    <div className="container">
                                        <div className={styles.dropdownflexmain}>
                                            <div className={styles.dropdownbox}>
                                                <h3>Mauritius Forex License</h3>
                                                <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                                                <Link href={"/"}>See Solution <Rightarrow /></Link>
                                            </div>
                                            <div className={styles.dropdownbox}>
                                                <h3>St. Vincent Forex License</h3>
                                                <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                                                <Link href={"/"}>See Solution <Rightarrow /></Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                    <div className={styles.contactbuttonmain}>
                        <Link href={"/"}><button>Contact Us <Rightarrow /></button></Link>
                    </div>
                </div>
            </div>
        </header>
    );
}