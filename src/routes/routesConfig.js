import HomePage from "../containers/HomePage";
import SalePage from "../containers/SalePage";
import MenuPage from "../containers/MenuPage";
import QuestsPage from "../containers/QuestsPage";
import TasksPage from "../containers/TasksPage";
import GamePage from "../containers/GemePage";
import QuizzesPage from "../containers/QuizzesPage";
import HelpPage from "../containers/HelpPage";
import InfaPage from "../containers/InfaPage";
import InrernshipPage from "../containers/InternShipPage";
import SearchWorkPage from "../containers/SearchWorkPage";
import ContactsPage from "../containers/ContactsPage";
import OferPage from "../containers/OferPage";
import ReviewPage from "../containers/ReviewPage";
import CS50Page from "../containers/CS50Page";
import RagistrationPage from "../components/RagistrationPage";

import UserPage from "../containers/UserPage";
import CalendarPage from "../containers/CalendarPage";

const routersConfig = [
    {
        path: '/',
        exact: true,
        element: HomePage
    },
    {
        path: '/sale',
        exact: true,
        element: SalePage
    },
    {
        path: '/menu',
        exact: true,
        element: MenuPage
    },
    {
        path: '/quests',
        exact: true,
        element: QuestsPage
    },
    {
        path: '/tasks',
        exact: true,
        element: TasksPage
    },
    {
        path: '/games',
        exact: true,
        element: GamePage
    },
    {
        path: '/quizzes',
        exact: true,
        element: QuizzesPage
    },
    {
        path: '/help',
        exact: true,
        element: HelpPage
    },
    {
        path: '/infa',
        exact: true,
        element: InfaPage
    },
    {
        path: '/inrernship',
        exact: true,
        element: InrernshipPage
    },
    {
        path: '/searchwork',
        exact: true,
        element: SearchWorkPage
    },
    {
        path: '/contacts',
        exact: true,
        element: ContactsPage
    },
    {
        path: '/ofer',
        exact: true,
        element: OferPage
    },
    {
        path: '/review',
        exact: true,
        element: ReviewPage
    },
    {
        path: '/cs50',
        exact: true,
        element: CS50Page
    },
    {
        path: '/user',
        exact: true,
        element: UserPage
    },
    {
        path: '/calendar',
        exact: true,
        element: CalendarPage
    },
    {
        path: '/registrait',
        exact: true,
        element: RagistrationPage
    }
]


export default routersConfig;