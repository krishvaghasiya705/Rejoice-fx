import styles from "./forexcrmsavings.module.scss"

import Image from 'next/image';
import Link from "next/link";

import Crmicon from "@/assets/algopageimages/svg/crmicon.svg"
import Savingsimage from "@/assets/forecrmimages/image/savingsimage.png"


export default function Forexcrmsavings() {
    return (
        <div className={styles.forexcrmsavingsmain}>
            <div className={styles.forexcrmsavings}>
                <div className="container">
                    <div className={styles.forexcrmsavingsflxmain}>
                        <div>
                            <div className={styles.savingstitle}>
                                <Link href={"/"}>
                                    <button>
                                        <Image src={Crmicon} alt="Crmicon" width={"28px"} height={"28px"} />
                                        fund retention
                                    </button>
                                </Link>
                                <h1>Savings</h1>
                                <p>Create your saving program where your clients can invest funds to earn interest</p>
                            </div>
                            <div className={styles.savingscontentmain}></div>
                        </div>
                        <div className={styles.savingsimagediv}>
                            <Image src={Savingsimage} alt="Savingsimage" width={"100%"} height={"100%"} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}