import pentagon from "@/assets/svg/pentagon.svg";
import dashboard from "@/assets/svg/dashboard.svg";
import sensor from "@/assets/svg/sensor.svg";
import visuals from "@/assets/svg/visuals.svg";
import dashboardActive from "@/assets/svg/dashboard-active.svg";
import sensorActive from "@/assets/svg/sensor-active.svg";
import visualsActive from "@/assets/svg/visuals-active.svg";
import caretDown from "@/assets/svg/caret-down.svg";
import search from "@/assets/svg/search.svg";
import logout from "@/assets/svg/logout.svg";
import grid from "@/assets/svg/grid.svg";

import avatar from "@/assets/png/avatar.png";
import abacus from "@/assets/png/abacus.png";

import { NavLink } from "react-router-dom";
import clsx from "clsx";

type UrlLink = {
  activeIcon: string;
  inactiveIcon: string;
  text: string;
  url: string;
};

const mainUrls: UrlLink[] = [
  {
    text: "Dashboard",
    url: "/",
    activeIcon: dashboardActive,
    inactiveIcon: dashboard,
  },
  {
    text: "Sensor Management",
    url: "/management",
    activeIcon: sensorActive,
    inactiveIcon: sensor,
  },
  {
    text: "Visualizations",
    url: "/visuals",
    activeIcon: visualsActive,
    inactiveIcon: visuals,
  },
];

export const Stats = () => {
  return (
    <div className="bg-[#FDFDFD]">
      <header className="p-[30px] flex justify-between items-center">
        <div className="flex items-center">
          <div className="bg-primary w-10 h-10 rounded-lg flex justify-center items-center mr-[10px]">
            <img src={pentagon} />
          </div>
          <div className="mr-[65px]">
            <h3 className="font-medium text-sm text-primary">
              Standard account
            </h3>
            <h5 className="text-secondary text-xs">example@gmail.com</h5>
          </div>
          <img src={caretDown} />
        </div>
        <div className="flex border border-[#ccc] focus:border-primary rounded-xl p-2 px-4 w-[400px]">
          <img src={search} className="block" />
          <input
            className="p-3 rounded-xl grow outline-none"
            type="text"
            placeholder="Search quantity control, regulators..."
          />
        </div>
        <div className="space-x-3 flex items-center">
          <div className="w-20 h-9 rounded-full bg-primary/[.1] flex justify-center items-center">
            <em className="not-italic font-medium text-sm text-primary">
              Admin
            </em>
          </div>
          <img src={avatar} />
          <img src={caretDown} />
        </div>
      </header>
      <div className="flex">
        <aside className=" w-[300px] p-[30px] ">
          <nav className="flex flex-col min-h-[calc(100vh-186px)]">
            <ul className="space-y-2">
              {mainUrls.map((mainUrl, idx) => (
                <li
                  key={idx}
                  className="flex transition items-center p-4 rounded-lg"
                >
                  <NavLink
                    to={mainUrl.url}
                    className={({ isActive }) =>
                      clsx(
                        "font-medium text-sm flex items-center cursor-pointer hover:text-primary/[.8]",
                        isActive && "text-primary",
                        !isActive && "text-secondary"
                      )
                    }
                  >
                    {({ isActive }) => (
                      <>
                        <img
                          src={
                            isActive ? mainUrl.activeIcon : mainUrl.inactiveIcon
                          }
                          className="mr-4"
                        />
                        {mainUrl.text}
                      </>
                    )}
                  </NavLink>
                </li>
              ))}
            </ul>
            <div className="grow" />
            <div className="p-4">
              <button
                className={clsx(
                  "font-medium text-sm flex items-center text-secondary"
                )}
              >
                <img src={logout} className="mr-4" />
                Log out
              </button>
            </div>
          </nav>
        </aside>
        <main className="p-5">
          <h1 className="flex items-center font-medium text-2xl mb-1">
            Water Set <img src={abacus} className="inline-block ml-2" />
          </h1>
          <h3 className="text-secondary font-medium text-sm mb-5">
            Analyze your sensor data
          </h3>
          <div className="flex flex-wrap">
            <div className="shadow-stat p-4 flex flex-col justify-center items-center rounded-lg w-[200px]">
              <h3 className="mb-2 font-medium text-sm">Temperature</h3>
              <em className="not-italic font-medium text-2xl text-primary">
                21&deg;C
              </em>
            </div>
            <div className="shadow-stat p-4 flex flex-col justify-center items-center rounded-lg w-[200px]">
              <h3 className="mb-2 font-medium text-sm">Turbidity</h3>
              <em className="not-italic font-medium text-2xl text-primary">
                4 NTU
              </em>
            </div>
            <div className="shadow-stat p-4 flex flex-col justify-center items-center rounded-lg w-[200px]">
              <h3 className="mb-2 font-medium text-sm">Conductivity</h3>
              <em className="not-italic font-medium text-2xl text-primary">
                100uS/cm
              </em>
            </div>
            <div className="shadow-stat p-4 flex flex-col justify-center items-center rounded-lg w-[200px]">
              <h3 className="mb-2 font-medium text-sm">Nitrate</h3>
              <em className="not-italic font-medium text-2xl text-primary">
                51% NO<sub>3</sub>
              </em>
            </div>
            <div className="shadow-stat p-4 flex flex-col justify-center items-center rounded-lg w-[200px]">
              <h3 className="mb-2 font-medium text-sm">Phosphate</h3>
              <em className="not-italic font-medium text-2xl text-primary">
                51% PO<sub>4</sub>
              </em>
            </div>
          </div>
          <div>
            <div className="p-6 shadow-stat rounded-lg w-[300px]">
              <div className="flex justify-between items-center">
                <h2 className="font-medium text-lg">Coliform Bacteria</h2>
                <img src={grid} />
              </div>
              <div>
                <em className="not-italic font-medium text-secondary">
                  Water Limit:
                </em>
                <em className="not-italic inline-block ml-2 font-medium text-lg text-primary">
                  100 mL
                </em>
              </div>
              <div>
                <em className="not-italic font-medium text-secondary">
                  Value Present:
                </em>
                <em className="not-italic inline-block ml-2 font-medium text-lg text-primary">
                  1 CFU/100mL
                </em>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};
