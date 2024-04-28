import styles from '../components/Icons.module.scss'

// Icons
import {
    SiJavascript,
    SiHtml5,
    SiCss3,
    SiPython,
    SiPhp,
    SiTypescript,
    SiVisualstudiocode,
    SiPostman,
    SiJirasoftware,
    SiReact,
    SiDjango,
    SiSpring,
    SiExpress,
    SiLaravel,
    SiVuedotjs,
    SiFlask,
    SiMysql,
    SiMicrosoftsqlserver,
    SiPostgresql,
    SiMongodb,
    SiOracle,
    SiSqlite,
    SiRedis
} from "react-icons/si";
import { FaJava, FaAngular, FaGithub, FaDocker, FaGitAlt, FaSlack } from "react-icons/fa";
import { GoStack, GoServer } from "react-icons/go";
import { FaCode } from "react-icons/fa6";
import { GrMysql } from "react-icons/gr";
import { MdDesignServices } from "react-icons/md";

export const useIcon = (iconName) => {
    const languageIcons = {
        Python: <SiPython className={styles.Python} />,
        PHP: <SiPhp className={styles.PHP} />,
        Javascript: <SiJavascript className={styles.Javascript} />,
        Typescript: <SiTypescript className={styles.Typescript} />,
        SQL: <GrMysql className={styles.SQL} />,
        HTML: <SiHtml5 className={styles.HTML} />,
        CSS: <SiCss3 className={styles.CSS} />,
        Java: <FaJava className={styles.Java} />,
    };

    const frameworkIcons = {
        React: <SiReact className={styles.React} />,
        Angular: <FaAngular className={styles.Angular} />,
        Django: <SiDjango className={styles.Django} />,
        SpringBoot: <SiSpring className={styles.SpringBoot} />,
        Express: <SiExpress className={styles.Express} />,
        Laravel: <SiLaravel className={styles.Laravel} />,
        Vue: <SiVuedotjs className={styles.Vue} />,
        Flask: <SiFlask className={styles.Flask} />,
    };

    const toolIcons = {
        Github: <FaGithub className={styles.Github} />,
        Docker: <FaDocker className={styles.Docker} />,
        Git: <FaGitAlt className={styles.Git} />,
        Slack: <FaSlack className={styles.Slack} />,
        VScode: <SiVisualstudiocode className={styles.VScode} />,
        Postman: <SiPostman className={styles.Postman} />,
        Jira: <SiJirasoftware className={styles.Jira} />,
    };

    const stackIcons = {
        Fullstack: <GoStack />,
        Frontend: <MdDesignServices />,
        Backend: <GoServer />,
    }

    const databaseIcons = {
        MySQL: <SiMysql className={styles.MySQL} />,
        SqlServer: <SiMicrosoftsqlserver className={styles.SqlServer} />,
        PostgreSQL: <SiPostgresql className={styles.PostgreSQL} />,
        MongoDB: <SiMongodb className={styles.MongoDB} />,
        OracleDatabase: <SiOracle className={styles.OracleDatabase} />,
        SQLite: <SiSqlite className={styles.SQLite} />,
        Redis: <SiRedis className={styles.Redis} />,
    }

    if (iconName && iconName.trim() !== "") {
        if (languageIcons[iconName]) {
            return languageIcons[iconName];
        } else if (frameworkIcons[iconName]) {
            return frameworkIcons[iconName];
        } else if (toolIcons[iconName]) {
            return toolIcons[iconName];
        } else if (stackIcons[iconName]) {
            return stackIcons[iconName];
        } else if (databaseIcons[iconName]) {
            return databaseIcons[iconName];
        } else {
            return <FaCode />;
        }
    } else {
        return <FaCode />;
    }
}