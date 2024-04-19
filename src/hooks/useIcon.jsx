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
        Python: <SiPython />,
        PHP: <SiPhp />,
        Javascript: <SiJavascript />,
        Typescript: <SiTypescript />,
        SQL: <GrMysql />,
        HTML: <SiHtml5 />,
        CSS: <SiCss3 />,
        Java: <FaJava />,
    };

    const frameworkIcons = {
        React: <SiReact />,
        Angular: <FaAngular />,
        Django: <SiDjango />,
        SpringBoot: <SiSpring />,
        Express: <SiExpress />,
        Laravel: <SiLaravel />,
        Vue: <SiVuedotjs />,
        Flask: <SiFlask />,
    };

    const toolIcons = {
        Github: <FaGithub />,
        Docker: <FaDocker />,
        Git: <FaGitAlt />,
        Slack: <FaSlack />,
        VScode: <SiVisualstudiocode />,
        Postman: <SiPostman />,
        Jira: <SiJirasoftware />,
    };

    const stackIcons = {
        Fullstack: <GoStack />,
        Frontend: <MdDesignServices />,
        Backend: <GoServer />,
    }

    const databaseIcons = {
        MySQL: <SiMysql />,
        SqlServer: <SiMicrosoftsqlserver />,
        PostgreSQL: <SiPostgresql />,
        MongoDB: <SiMongodb />,
        OracleDatabase: <SiOracle />,
        SQLite: <SiSqlite />,
        Redis: <SiRedis />,
    }

    if (iconName && iconName.trim() !== "") {
        console.log(iconName)
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