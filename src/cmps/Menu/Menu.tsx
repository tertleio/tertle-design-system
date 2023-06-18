import { useEffect, useState } from 'react';
import clsx from 'clsx';
import { useDisclosure } from '@/hooks/useDisclosure';
// import { useStore as useStoreContext } from '../../context/StoreContext';
import { useStore } from '@/store';

import './index.css';
import defaultPic from '../../assets/dp-default.svg';
import { useNavigate } from 'react-router-dom';
import { MATCH_SCHEDULE } from '../../constants/consts';

const Menu = ({ handleLogout }) => {
  const navigate = useNavigate();
  const { user } = useStore();
  // const { prefs } = useStoreContext() || {};
  const [name, setName] = useState(user.firstName);
  const [status, setStatus] = useState('');
  const [pic, setPic] = useState(user.gPic ? user.gPic : defaultPic);
  const { isOpen, close, open, toggle } = useDisclosure();

  useEffect(() => {
    if (!user) return;
    if (!user.gPic) {
      setPic(defaultPic);
    } else {
      setPic(user.gPic);
    }

    setName(user.firstName);
  }, [user]);

  // useEffect(() => {
  //   if (!prefs?.schedule) return;
  //   setStatus(prefs.schedule);
  // }, [prefs?.schedule]);

  // MENU HANDLERS
  useEffect(() => {
    if (isOpen) window.addEventListener('keydown', closeMenuByKey);
    if (!isOpen) window.removeEventListener('keydown', closeMenuByKey);

    return () => {
      window.removeEventListener('keydown', closeMenuByKey);
    };
  }, [isOpen]);

  const closeMenuByKey = (e) => e.key === 'Escape' && close();

  // BUTTON HANDLERS
  function handleFeedback() {
    window.location.href = 'mailto:feedback@tertle.io';
  }

  function handleSettings() {
    navigate('/settings');
  }

  function statusRdcer(prefsSchedule) {
    switch (prefsSchedule) {
      case MATCH_SCHEDULE.weekly: // active
        return {
          text: 'active',
          avatar: 'border-[2px] border-green dark:border-green-dark',
          menu: 'bg-green text-white dark:bg-green-dark dark:text-black',
        };
      case MATCH_SCHEDULE.paused: // paused
        return {
          text: 'paused',
          avatar: 'border-[2px] border-orange dark:border-orange-dark',
          menu: 'bg-orange text-white dark:bg-orange-dark dark:text-black',
        };
      case MATCH_SCHEDULE.inactive: // inactive
        return {
          text: 'inactive',
          avatar: 'border-[2px] border-red dark:border-red-dark',
          menu: 'bg-red text-white dark:bg-red-dark dark:text-black',
        };
      case 0: // pending
        return {
          text: 'pending',
          avatar: 'border-[2px] border-gray-500 dark:border-gray-500',
          menu: 'bg-gray-500 text-white dark:bg-white dark:text-black',
        };
      default:
        return {
          text: 'onboarding',
          avatar: 'border-[2px] border-gray-500 dark:border-gray-500',
          menu: 'bg-gray-500 text-white dark:bg-white dark:text-black',
        };
    }
  }

  return (
    <>
      <div
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === 'Enter') handleMenuClick();
        }}
        onClick={toggle}
        className="user-menu-btn"
      >
        <img
          alt="User display pic"
          className={clsx(
            'w-8 h-8 rounded-full object-cover sm:w-9 sm:h-9',
            statusRdcer(status).avatar
          )}
          src={pic}
          referrerPolicy="no-referrer"
        />
        {/* <div className="user-first-name">{name}</div> */}
        {isOpen && (
          <div className="user-menu mt-2 bg-white dark:bg-black text-black dark:text-white">
            {/* <div
              className={clsx('user-menu-details', statusRdcer(status).menu)}
            > */}
            <div
              className={clsx(
                'user-menu-details',
                'bg-black dark:bg-white text-white dark:text-black'
              )}
            >
              <div>{user?.email}</div>
              {/* <div>
                matching status: <strong>{statusRdcer(status).text}</strong>
              </div> */}
            </div>
            <ul>
              <li
                tabIndex={0}
                onClick={handleFeedback}
                onKeyDown={(e) => e.key === 'Enter' && handleFeedback()}
              >
                <span className="emoji absolute left-5">💬</span> Feedback
              </li>
              <li
                tabIndex={0}
                onClick={handleSettings}
                onKeyDown={(e) => e.key === 'Enter' && handleSettings()}
              >
                <span className="emoji absolute left-5">⚙️</span> Settings
              </li>
              <li
                tabIndex={0}
                onClick={handleLogout}
                className="logout"
                onKeyDown={(e) => e.key === 'Enter' && handleLogout()}
              >
                <span className="emoji absolute left-5">👋</span> Log out
              </li>
            </ul>
          </div>
        )}
      </div>
    </>
  );
};

export { Menu };
