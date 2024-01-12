import { useLocation } from 'react-router-dom';
import { clsx } from '@/utils/classes';
import { useStore } from '@/stores/useStore';
import { useTheme } from '@/hooks/useTheme';
import { useDisclosure } from '@/hooks/useDisclosure';

import { PACKAGES } from '@/constants/constants';
import AVATAR_DEF from '@/assets/dp-default.svg';

import { NavLink, Link, Button, Image, Icon } from '@/cmps/Core';
import { Menu } from '@/cmps/Menu';
import { useGoals } from '@/features/goals/api/getGoals';

// import { usePosts } from '@/features/posts/api/getPosts';
import { useNotifications } from '@/features/notifications/api/getNotifications';

const Theme = () => {
  const [isDark, setIsDark] = useTheme(null);
  const activeFill = 'fill-green dark:fill-green-dark';
  const activeStroke = 'stroke-green dark:stroke-green-dark';
  const isSmall = window.innerWidth < 640;

  return (
    <>
      {/* // light */}
      <button
        className={clsx('sm:block', isDark === false ? 'block' : 'hidden')}
        onClick={() => setIsDark(isSmall ? true : false)}
      >
        <svg
          viewBox="0 0 24 24"
          fill="none"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-6 h-6 ml-2"
        >
          <path
            d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
            className={clsx(
              isDark === false
                ? activeStroke
                : 'stroke-gray-400 dark:stroke-gray-600'
            )}
          ></path>
          <path
            d="M12 4v1M17.66 6.344l-.828.828M20.005 12.004h-1M17.66 17.664l-.828-.828M12 20.01V19M6.34 17.664l.835-.836M3.995 12.004h1.01M6 6l.835.836"
            className={clsx(
              isDark === false
                ? activeStroke
                : 'stroke-gray-400 dark:stroke-gray-600'
            )}
          ></path>
        </svg>
      </button>
      <button
        onClick={() => setIsDark(isSmall ? false : true)}
        className={clsx('sm:block', isDark === true ? 'block' : 'hidden')}
      >
        {/* // dark */}
        <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5 ml-2 sm:ml-1.5">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M17.715 15.15A6.5 6.5 0 0 1 9 6.035C6.106 6.922 4 9.645 4 12.867c0 3.94 3.153 7.136 7.042 7.136 3.101 0 5.734-2.032 6.673-4.853Z"
            className="fill-transparent"
          ></path>
          <path
            d="m17.715 15.15.95.316a1 1 0 0 0-1.445-1.185l.495.869ZM9 6.035l.846.534a1 1 0 0 0-1.14-1.49L9 6.035Zm8.221 8.246a5.47 5.47 0 0 1-2.72.718v2a7.47 7.47 0 0 0 3.71-.98l-.99-1.738Zm-2.72.718A5.5 5.5 0 0 1 9 9.5H7a7.5 7.5 0 0 0 7.5 7.5v-2ZM9 9.5c0-1.079.31-2.082.845-2.93L8.153 5.5A7.47 7.47 0 0 0 7 9.5h2Zm-4 3.368C5 10.089 6.815 7.75 9.292 6.99L8.706 5.08C5.397 6.094 3 9.201 3 12.867h2Zm6.042 6.136C7.718 19.003 5 16.268 5 12.867H3c0 4.48 3.588 8.136 8.042 8.136v-2Zm5.725-4.17c-.81 2.433-3.074 4.17-5.725 4.17v2c3.552 0 6.553-2.327 7.622-5.537l-1.897-.632Z"
            className={clsx(
              isDark === true ? activeFill : 'fill-gray-400 dark:fill-gray-600'
            )}
          ></path>
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M17 3a1 1 0 0 1 1 1 2 2 0 0 0 2 2 1 1 0 1 1 0 2 2 2 0 0 0-2 2 1 1 0 1 1-2 0 2 2 0 0 0-2-2 1 1 0 1 1 0-2 2 2 0 0 0 2-2 1 1 0 0 1 1-1Z"
            className={clsx(
              isDark === true ? activeFill : 'fill-gray-400 dark:fill-gray-600'
            )}
          ></path>
        </svg>
      </button>

      {/* <button
        onClick={() => {
          localStorage.removeItem('theme');
          setIsDark(null);
        }}
      >
        <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5 ml-3">
          <path
            d="M4 6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6Z"
            strokeWidth="2"
            strokeLinejoin="round"
            className={clsx(
              !localStorage.getItem('theme')
                ? 'stroke-black dark:stroke-white'
                : 'stroke-gray-400 dark:stroke-gray-600'
            )}
          ></path>
          <path
            d="M14 15c0 3 2 5 2 5H8s2-2 2-5"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className={clsx(
              !localStorage.getItem('theme')
                ? 'stroke-black dark:stroke-white'
                : 'stroke-gray-400 dark:stroke-gray-600'
            )}
          ></path>
        </svg>
      </button> */}
    </>
  );
};

const Logo = () => {
  return (
    <svg
      className="fill-black dark:fill-white w-8 h-8 sm:w-9 sm:h-9"
      viewBox="0 0 169 169"
    >
      <path d="M47.712 158.924C47.4913 158.924 47.3256 158.924 47.1049 158.924L47.5464 146.23C47.6016 146.23 47.6568 146.23 47.712 146.23C52.0722 146.23 58.6402 140.434 65.3737 130.721C71.4449 121.89 75.6395 112.783 75.6947 112.728L80.7724 109.085C90.0448 108.036 116.703 102.02 117.862 88.5533C118.911 76.1902 115.82 65.0412 109.252 57.9214C103.07 51.1879 93.7427 47.7659 81.6003 47.7659C81.5451 47.7659 81.4899 47.7659 81.4899 47.7659C63.4971 47.8211 60.0751 59.3564 56.4876 78.3979C55.0526 86.0696 53.6728 93.2447 50.1404 98.4328C39.5435 113.887 17.632 117.198 16.6937 117.309L14.9276 104.725L15.8106 111.017L14.8724 104.725C15.038 104.725 32.258 102.02 39.6538 91.2026C41.6408 88.2774 42.7998 82.3166 43.9589 76.0246C47.0497 59.7428 51.6859 35.1268 81.4347 35.0716C81.4899 35.0716 81.5451 35.0716 81.6003 35.0716C97.4406 35.0716 109.914 39.8734 118.635 49.3665C127.576 59.0804 131.881 73.8169 130.501 89.6572C129.232 104.228 115.544 112.231 104.285 116.37C96.9439 119.075 89.7688 120.51 85.6845 121.227C83.808 124.925 80.3309 131.383 75.9155 137.84C66.2568 151.804 56.7636 158.924 47.712 158.924Z" />
      <path d="M109.362 109.582C100.587 109.582 87.9474 106.215 85.6845 93.0239C85.243 90.3195 86.8988 87.7254 89.4377 87.2287C91.9765 86.732 94.4602 88.4982 94.9018 91.2026C95.7848 96.4459 100.09 98.1016 103.181 98.8192C107.596 99.923 111.956 99.4263 112.011 99.4263C114.606 99.1504 116.924 101.082 117.2 103.786C117.476 106.491 115.654 108.975 113.06 109.306C112.011 109.471 110.742 109.582 109.362 109.582Z" />
      <path d="M85.6294 75.0311C89.714 75.0311 93.0252 72.0164 93.0252 68.2976C93.0252 64.5788 89.714 61.5641 85.6294 61.5641C81.5448 61.5641 78.2335 64.5788 78.2335 68.2976C78.2335 72.0164 81.5448 75.0311 85.6294 75.0311Z" />
      <path d="M84.4998 169C37.9172 169 0 131.083 0 84.5C0 37.9174 37.9172 0 84.4998 0C131.082 0 169 37.9174 169 84.5C169 131.083 131.082 169 84.4998 169ZM84.4998 12.6943C44.9266 12.6943 12.6943 44.9268 12.6943 84.5C12.6943 124.073 44.9266 156.306 84.4998 156.306C124.073 156.306 156.306 124.073 156.306 84.5C156.306 44.9268 124.073 12.6943 84.4998 12.6943Z" />
    </svg>
  );
};

const Separator = ({ showGradient = true, className = '' }) => {
  return (
    <>
      <div className={clsx('flex w-full relative justify-center', className)}>
        <svg
          width="800"
          height="2"
          viewBox="0 0 1150 2"
          className="opacity-30 sm:opacity-20 mx-[-1em]"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <line
            x1="0.75"
            y1="1.25"
            x2="1149.25"
            y2="1.2501"
            fill="red"
            stroke="url(#paint0_linear_2015_1491)"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
          <defs>
            <linearGradient
              id="paint0_linear_2015_1491"
              x1="1150"
              y1="2"
              // fill="red"
              x2="0"
              y2="2"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="white" stopOpacity="0" />
              <stop offset="0.197917" stopColor="white" />
              <stop offset="0.802083" stopColor="white" />
              <stop offset="1" stopColor="white" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      {showGradient && (
        <div className="absolute left-1/2 transform -translate-x-1/2 pointer-events-none">
          <svg
            // width="1107"
            // height="139"
            className="w-[35em] h-[100] sm:w-[1107px] sm:h-[139px]"
            viewBox="0 0 1107 139"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              opacity="0.08"
              d="M1107 0.000140514C1107 76.7676 859.19 139 553.5 139C247.81 139 0 76.7676 0 0.000140514C39 0 231.31 0 537 0C842.69 0 1034 0.000140514 1107 0.000140514Z"
              fill="url(#paint0_radial_1995_2145)"
            />
            <path
              opacity="0.08"
              d="M756 2.93159e-05C756 16.0163 655.712 29 532 29C408.288 29 308 16.0163 308 2.93159e-05C323.783 0 401.611 0 525.322 0C649.034 0 726.457 2.93159e-05 756 2.93159e-05Z"
              fill="url(#paint1_radial_1995_2145)"
              fillOpacity="0.8"
            />
            <defs>
              <radialGradient
                id="paint0_radial_1995_2145"
                cx="0"
                cy="0"
                r="1"
                gradientUnits="userSpaceOnUse"
                gradientTransform="translate(553.5 1.65701e-05) rotate(90) scale(139 553.5)"
              >
                <stop stopColor="#5F5F5F" stopOpacity="0.8" />
                <stop offset="1" stopColor="#D9D9D9" stopOpacity="0" />
              </radialGradient>
              <radialGradient
                id="paint1_radial_1995_2145"
                cx="0"
                cy="0"
                r="1"
                gradientUnits="userSpaceOnUse"
                gradientTransform="translate(532 3.45707e-06) rotate(90) scale(29 224)"
              >
                <stop stopColor="#5F5F5F" stopOpacity="0.8" />
                <stop offset="1" stopColor="#D9D9D9" stopOpacity="0" />
              </radialGradient>
            </defs>
          </svg>
        </div>
      )}
    </>
  );
};

const MainNav = ({ user, className = '', goalCount }) => {
  if (!user) return <></>;
  const isAdmin = user?.email?.endsWith('@tertle.io');
  const isHomeFeatEnable = user?.features?.includes('posts');

  return (
    <nav className={clsx('flex gap-4 justify-around', className)}>
      {isAdmin && (
        <NavLink to="/council" color="base" size="md">
          Council
        </NavLink>
      )}

      {/* {isHomeFeatEnable && (
        <>
          <NavLink to="/home" color="base" size="md">
            Home
          </NavLink>

          <NavLink
            to="/guilds/guildless"
            idleIcon={<Icon name="userGroup" />}
            activeIcon={<Icon name="userGroupSolid" />}
            color="base"
            size="md"
          >
            Guild
          </NavLink>
        </>
      )} */}

      <NavLink
        to={`/goals/${user?.profileUrl}`}
        color="base"
        idleIcon={<Icon name="arrowTrendingUp" />}
        activeIcon={<Icon name="arrowTrendingUp" />}
        size="md"
        className="relative !pr-3.5"
      >
        Goals
        <span
          className={clsx(
            'text-xs absolute top-1 right-1.5',
            goalCount > 0
              ? 'text-green dark:text-green-dark'
              : 'text-red dark:text-red-dark'
          )}
        >
          {goalCount}
        </span>
      </NavLink>
      <NavLink
        to="/match"
        idleIcon={<Icon name="userPair" />}
        activeIcon={<Icon name="userPairSolid" />}
      >
        Match
      </NavLink>
    </nav>
  );
};

const Header = ({ show = true }) => {
  const { user } = useStore();
  const profile = { packageId: 1 };
  const { isOpen, close, toggle } = useDisclosure();
  const goalsQuery = useGoals({ profileUrl: user.profileUrl });
  const notificationsQuery = useNotifications();

  const memberMenuLinks = user?.hasOnboarded
    ? [
        {
          label: 'Overview',
          icon: '👤',
          path: `/${user.profileUrl}`,
          end: true,
        },
        {
          label: 'Progress',
          icon: '✅',
          path: `/${user.profileUrl}/progress`,
        },
        { label: 'Package', icon: '📦', path: `/${user.profileUrl}/package` },
        { label: 'Settings', icon: '⚙️', path: `/${user.profileUrl}/settings` },
      ]
    : [];

  return (
    <header className="fixed w-full z-50 bg-white dark:bg-black">
      <div className="flex justify-between items-center px-2 py-1 sm:py-0.5 sm:px-3.5 h-[2.6rem]">
        {show && (
          <>
            <div className="flex justify-start w-80">
              <Link to="/inn">
                <Logo />
              </Link>
              <Theme />
            </div>

            {user?.hasOnboarded && (
              <MainNav
                user={user}
                className="hidden sm:flex"
                goalCount={
                  goalsQuery.data?.filter((goal) => goal?.status === 'active')
                    .length
                }
              />
            )}

            <div className="flex items-center justify-end w-80">
              {user?.hasOnboarded && profile.packageId === PACKAGES.basic && (
                <>
                  <NavLink
                    to={`/${user.profileUrl}/package`}
                    size="md"
                    className="text-green dark:text-green-dark"
                  >
                    Upgrade
                  </NavLink>
                  <NavLink
                    to="/notifications"
                    size="md"
                    idleIcon={<Icon name="bell" size="md" />}
                    activeIcon={<Icon name="bellSolid" size="md" />}
                    count={notificationsQuery.data?.unseenCount || 0}
                    countPosition="corner"
                  />
                </>
              )}
              {user ? (
                <div className="relative ml-1">
                  <Image
                    src={
                      user?.avatars?.tertle?.smUrl ||
                      user?.avatars?.tertle?.mdUrl ||
                      user?.avatars?.google?.smUrl ||
                      AVATAR_DEF
                    }
                    className="hover:cursor-pointer w-8 h-8 sm:w-9 sm:h-9"
                    onClick={toggle}
                  />
                  <Menu
                    header={
                      <div className="mt-1 flex flex-col">
                        <span className="font-primary">{user.email}</span> @
                        {user.profileUrl}
                      </div>
                    }
                    links={[
                      ...memberMenuLinks,
                      { label: 'Logout', icon: '👋', path: '/sign/out' },
                    ]}
                    onClose={close}
                    show={isOpen}
                  />
                </div>
              ) : (
                !window.location.pathname.includes('sign') && (
                  <Link to="/sign/in">
                    <Button
                      variant="primary"
                      size="md"
                      className="group-[.active]:hidden"
                    >
                      Log In / Sign-Up
                    </Button>
                  </Link>
                )
              )}
            </div>
          </>
        )}
      </div>
      <Separator />
    </header>
  );
};

type MainLayoutProps = {
  children: React.ReactNode;
  className?: string;
};

const MainLayout = (props: MainLayoutProps) => {
  const { children, className } = props;
  const { user } = useStore();
  const { pathname } = useLocation();

  return (
    <>
      <Header show={!pathname.includes('wizard/pending')} />
      <main className={clsx('m-auto max-w-xl', className)}>{children}</main>
      <footer className="sm:hidden fixed bottom-0 pb-6  w-full z-50 bg-white dark:bg-black">
        {user?.hasOnboarded && (
          <>
            <Separator showGradient={false} />
            <MainNav user={user} className="w-full flex pt-3" />
          </>
        )}
      </footer>
    </>
  );
};

export { MainLayout };
